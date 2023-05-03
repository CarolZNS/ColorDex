import axios from "axios";
import { useEffect, useState } from "react";
import _get from "lodash/get";
import Header from "../../components/Header";
import * as S from "./styles";
import TypingList from "../../components/TypingList";
import { useNavigate, useParams } from "react-router-dom";
import RegionSelectList from "../../components/RegionSelectList";
import StatusGrid from "../../components/StatusGrid";

//Adaptadores da requisição
const typesAdapter = (type) => {
  return type.type.name;
};
const spriteAdapter = (sprite) => {
  return _get(sprite, "other.official-artwork.front_default", "");
};
const statsAdapter = (stat) => {
  const names = {
    hp: "HP",
    attack: "attack",
    defense: "defense",
    "special-attack": "sp. atk",
    "special-defense": "sp. def",
    speed: "speed",
  };
  return {
    statusName: names[stat.stat.name],
    value: stat.base_stat,
    ev: stat.effort,
  };
};
const pokemonAdapter = (pokemon) => {
  const pokemonData = pokemon.data;
  const types = pokemonData.types.map(typesAdapter);
  const sprite = spriteAdapter(pokemonData.sprites);
  const stats = pokemonData.stats.map(statsAdapter);
  return {
    name: pokemonData.name,
    id: pokemonData.id,
    types,
    sprite,
    stats,
  };
};

export default function App() {
  //Pega o Id da rota e salva para ser usado para fazer o pedido à api
  let { id } = useParams();

  const [pokemonData, setPokemonData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      const adaptedData = pokemonAdapter(response);
      axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then((response) => {
          const getColorName = response.data.color.name;
          setPokemonData({ ...adaptedData, color: getColorName });
          setLoading(false);
        })
        .catch((error) => {
          setErrorMessage("Color data not avaible for this Pokemon");
          setPokemonData({ ...adaptedData, color: "unknown" });
          setLoading(false);
        });
    });
  }, [id]);

  useEffect(() => {
    setLoading(true);
    axios.get("https://pokeapi.co/api/v2/generation").then((response) => {
      const regionUrls = response.data.results.map((region) => region.url);
      const regionPromises = regionUrls.map((url) => axios.get(url));
      Promise.all(regionPromises).then((responses) => {
        const regions = responses.map((response) => {
          const regionName = response.data.main_region.name;
          const pokemon = response.data.pokemon_species.map((species) => {
            const speciesUrl = species.url.split(`/`);
            return {
              name: species.name,
              id: speciesUrl[6],
            };
          });

          return {
            name: regionName,
            pokemon: pokemon.sort((a, b) => a.id - b.id),
          };
        });
        setRegions(regions);
      });
    });
    setLoading(false);
  }, []);

  const navigate = useNavigate();
  const handleChange = (id) => {
    navigate(`/pokemon/${id}`);
  };

  return (
    <div>
      <Header returnBtn />
      {loading ? (
        <h1>Catching Pokemon</h1>
      ) : (
        <S.Container>
          <RegionSelectList regions={regions} onChange={handleChange} />
          {pokemonData.color === "unknown" ? (
            <S.Error>{errorMessage}</S.Error>
          ) : null}
          <S.PokemonCard color={pokemonData.color}>
            <S.Img src={pokemonData.sprite} alt="pokemon x" />
            <S.Id>{pokemonData.id}</S.Id>
            <S.Bold>{pokemonData.name}</S.Bold>
            <S.Bold>
              Color: <S.ColorLabel>{pokemonData.color}</S.ColorLabel>
            </S.Bold>
            <S.TypeGrid>
              {pokemonData.types &&
                pokemonData.types.map((type) => (
                  <TypingList type={type} key={type} />
                ))}
            </S.TypeGrid>
            <S.StatusTable>
              {pokemonData.stats &&
                pokemonData.stats.map((s) => (
                  <StatusGrid
                    name={s.statusName}
                    value={s.value}
                    key={s.statusName}
                  />
                ))}
            </S.StatusTable>
          </S.PokemonCard>
        </S.Container>
      )}
    </div>
  );
}
