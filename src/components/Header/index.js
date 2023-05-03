import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export default function Header({ returnBtn }) {
  const navigate = useNavigate();

  return (
    <S.Header>
      {returnBtn ? (
        <>
          <S.ReturnLink onClick={()=>navigate('/')}>&lt;</S.ReturnLink>
          <S.Title>ColorDex</S.Title>
        </>
      ) : (
        <S.Title>ColorDex</S.Title>
      )}
    </S.Header>
  );
}
