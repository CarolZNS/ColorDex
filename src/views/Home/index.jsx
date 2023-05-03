import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import _orderBy from "lodash/orderBy";
import GroupedColorSelector from "../../components/GroupedColorSelector";
import Header from "../../components/Header";
import { GroupColors, StyledInput, StyledUl, StyledApp } from "./styles";

//Adaptadores dos dados da API, de forma a facilitar a leitura de dados
const typesAdapter = (type) => {
  return type.type.name;
};

const statsAdapter = (stat) => {
  return {
    statusName: stat.stat.name,
    value: stat.base_stat,
    ev: stat.effort,
  };
};
const pokemonAdapter = (pokemon) => {
  const pokemonData = pokemon.data;
  const types = pokemonData.types.map(typesAdapter);
  const sprite = pokemonData.sprites.front_default;
  const stats = pokemonData.stats.map(statsAdapter);
  return {
    name: pokemonData.name,
    id: pokemonData.id,
    types,
    sprite,
    stats,
  };
};
// url:"https://pokeapi.co/api/v2/pokemon-color/1/"} << sempre pensar num unico elemento
const colorAdapter = (color) => {
  const splitUrl = color.url.split("/");
  return {
    name: color.name,
    value: splitUrl[6],
    label: color.name,
  };
};

//App e states
export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  // const [availableTypes, setAvailableTypes] = useState([]);

  //Tentativa de limpar seleção do radio, mas falhei, não sei pq.
  const selectColor = (colorId) => {
    if (selectedColor === colorId) {
      return setSelectedColor(null);
    }
    setLoading(true);
    setPokemons([]);
    setSelectedColor(colorId);
  };

  //UseEffect para as cores, mapeando o nome delas para criar os botoes radiais
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon-color").then((response) => {
      const adaptedColorList = response.data.results.map(colorAdapter);
      setColorList(adaptedColorList);
    });
  }, []);

  //Use effect buscando os dados de cada pokemon e a lista de pokemons por cor
  useEffect(() => {
    if (!selectedColor) {
      return;
    }
    setLoading(true);
    const getPokemonData = async (response) => {
      const promises = response.data.pokemon_species.map(async (pokemon) => {
        const sliptedUrl = pokemon.url.split("/");
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${sliptedUrl[6]}`);
      });
      const pokemonList = await Promise.all(promises);

      const adaptedPokemonList = pokemonList.map(pokemonAdapter);
      const orderedPokemonList = _orderBy(adaptedPokemonList, "id");
      setPokemons(orderedPokemonList);
    };
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-color/${selectedColor}`)
      .then((response) => {
        getPokemonData(response).then(setLoading(false));
      });
  }, [selectedColor]);

  // useEffect(() => {
  //   setLoading(true)
  //   const typesSet = new Set(
  //     pokemons.flatMap((pokemon) => pokemon.types.map((type) => type))
  //   );
  //   const odereredTypes = _orderBy([...typesSet]);
  //   setAvailableTypes(odereredTypes);
  //   setLoading(false)
  // }, [pokemons]);

  //Aplicação do filtro de pesquisa
  const filterSearch = pokemons.filter((el) => {
    const tlc = search.toLowerCase();
    return el.name.match(tlc) || el.types.some(type=>type.match(tlc));
  });

  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/pokemon/${id}`);
  };
  //Renderização dos componentes
  return (
    <div>
      <Header />
      <GroupColors>
        <GroupedColorSelector
          colors={colorList}
          onChange={selectColor}
          value={selectedColor}
        />
      </GroupColors>
      <StyledInput
        type="search"
        placeholder="Search by name or type"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    {/* Adicionar no futuro */}
      {/* <div>
        {availableTypes.map((type) => (
          <span key={type}>{type} </span>
        ))}
      </div> */}
      <StyledApp>
        {loading ? (
          <h1>LOADING</h1>
        ) : (
          <StyledUl>
            {filterSearch.map((pokemon) => (
              <li key={pokemon.id}>
                <Card
                  data={pokemon}
                  color={selectedColor}
                  onClick={handleCardClick}
                />
              </li>
            ))}
          </StyledUl>
        )}
      </StyledApp>
    </div>
  );
}
