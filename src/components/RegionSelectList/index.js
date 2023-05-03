import { FlexContainer, StyledSelect, StyledOption } from "./styledRegionList";

export default function RegionSelectList({ regions, onChange }) {
  const windowWidth = window.innerWidth
  
  if(windowWidth <= 326){
    return(null)
  }
  return (
    <FlexContainer>
      {regions.map((region) => (
        <div key={region.name}>
          <StyledSelect defaultValue="default" aria-label={region.name} onChange={(e)=>onChange(e.target.value)}>
            <StyledOption value="default" disabled>
              {windowWidth>550 ? <>{region.name} {region.pokemon[0].id} -{" "}
              {region.pokemon[region.pokemon.length - 1].id}</> : region.name}
            </StyledOption>
            {region.pokemon.map((pokemon) => (
              <StyledOption value={pokemon.id} key={pokemon.id}>
                {pokemon.name}
              </StyledOption>
            ))}
          </StyledSelect>
        </div>
      ))}
    </FlexContainer>
  );
}
