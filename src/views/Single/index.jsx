import axios from "axios";
import { useEffect, useState } from "react";
import "../../styles.css";
import _get from "lodash/get";
import Header from "../../components/Header";
import * as S from "./styles";
import StatusList from "../../components/StatusList";
import TypingList from "../../components/TypingList";
import { useParams } from "react-router-dom";

const mockinglist = {
  id: 37,
  name: "vulpix",
  sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
  stats: [
    { statusName: "hp", value: 38, ev: 0 },
    { statusName: "attack", value: 41, ev: 0 },
    { statusName: "defense", value: 40, ev: 0 },
    { statusName: "sp. atk", value: 50, ev: 0 },
    { statusName: "sp. def", value: 65, ev: 0 },
    { statusName: "speed", value: 65, ev: 1 },
  ],
  types: ["fire", "ice"],
};

//Adaptadores da requisição
const typesAdapter = (type) => {
  return type.type.name;
};
const spriteAdapter = (sprite) => {
  return _get(sprite, "other.official-artwork.front_default", "");
};
const statsAdapter = (stat) => {
  const names = {
    "hp": "HP",
    "attack": "attack",
    "defense": "defense",
    "special-attack": "sp. atk",
    "special-defense": "sp. def",
    "speed": "speed",
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
  const [pokemonColor, setPokemonColor] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      const adaptedData = pokemonAdapter(response);
      setPokemonData(adaptedData)
      setLoading(false)
    });
  }, [id]);
  // useEffect(() =>{
  //   axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((response)=>{
  //     const getColor = response.data.color.name;
  //     setPokemonColor(getColor);
  //   })
  // }, [])

  console.log(pokemonData)
  return (
    <div>
      <Header />
      {loading ? 
      (<h1>Catching Pokemon</h1>) : 
      <S.Container>
        <S.UniqueCard>
          <S.Img src={pokemonData.sprite} alt="pokemon x" />
          <S.Id>{pokemonData.id}</S.Id>
          <S.Name>{pokemonData.name}</S.Name>
          <S.TypeGrid>
            {pokemonData.types &&
              pokemonData.types.map((type) => (
                <TypingList type={type} key={type} />
              ))}
          </S.TypeGrid>
          <S.StatusTable>
            {pokemonData.stats &&
            pokemonData.stats.map((s) => (
              <StatusList
                name={s.statusName}
                value={s.value}
                key={s.statusName}
              />
            ))}
          </S.StatusTable>
        </S.UniqueCard>
      </S.Container>
      }
    </div>
  );
}
