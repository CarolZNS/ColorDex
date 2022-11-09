import axios from "axios";
import { useEffect, useState } from "react";
import "../../styles.css";
import Card from "../../components/Card";
import _get from "lodash/get";
import _orderBy from "lodash/orderBy";
import GroupedColorSelector from "../../components/GroupedColorSelector";
import Header from "../../components/Header";

//Adaptadores dos dados da API, de forma a facilitar a leitura de dados
const typesAdapter = (type) => {
  return type.type.name;
};
const spriteAdapter = (sprite) => {
  return _get(sprite, "other.official-artwork.front_default", "");
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
export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [search, setSearch] = useState("");

  //Tentativa de limpar seleção do radio, mas falhei, não sei pq.
  const selectColor = (colorId) => {
    if (selectedColor === colorId) {
      return setSelectedColor(null);
    }
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
        getPokemonData(response);
      });
  }, [selectedColor]);

  //Aplicação do filtro de pesquisa
  const filterSearch = pokemons.filter((el) => {
    const tlc = search.toLowerCase();
    return el.name.match(tlc);
  });

  //Renderização dos componentes
  return (
    <div className="App">
      <Header />
      <div className="group-colors">
        <GroupedColorSelector
          colors={colorList}
          onChange={selectColor}
          value={selectedColor}
        />
      </div>
      <input
        type="search"
        placeholder="Buscar por nome"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <ul>
        {filterSearch.map((pokemon) => (
          <li key={pokemon.id}>
            <Card data={pokemon} />
          </li>
        ))}
      </ul>
    </div>
  );
}
