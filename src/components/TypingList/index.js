import { Type, TypeChip } from "./styles";

export default function TypingList(props) {
    return(
        <TypeChip type={props.type}>
            <Type type={props.type}>{props.type}</Type>
        </TypeChip>
    )
}