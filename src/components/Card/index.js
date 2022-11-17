import * as S from './styles'

export default function Card(props) {
  return (
    <S.Card color={props.color}>
      <S.Img src={props.data.sprite} alt={`pokemon ${props.data.name}`} />
      <S.Id>#{props.data.id}</S.Id>
      <S.Name>{props.data.name}</S.Name>
      <S.Types>
        {props.data.types &&
          props.data.types.map((type) => <S.Type>{type}</S.Type>)}
      </S.Types>
    </S.Card>
  );
}
