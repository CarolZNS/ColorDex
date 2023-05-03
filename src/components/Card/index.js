import * as S from './styles'

export default function Card(props) {
  return (
    <S.Card color={props.color} onClick={()=>props.onClick(props.data.id)}>
      <img src={props.data.sprite} alt={`pokemon ${props.data.name} in it's normal form`} />
      <S.Id>#{props.data.id}</S.Id>
      <S.Name>{props.data.name}</S.Name>
      <S.TypesContainer>
        {props.data.types &&
          props.data.types.map((type) => <S.TypeChip key={type}>{type}</S.TypeChip>)}
      </S.TypesContainer>
    </S.Card>
  );
}
