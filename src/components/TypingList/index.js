import { TypeChip, TypeName } from "./styles";

export default function TypingList(props) {
    return(
        <TypeChip type={props.type}>
            <TypeName type={props.type}>{props.type}</TypeName>
        </TypeChip>
    )
}