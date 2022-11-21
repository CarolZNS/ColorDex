import { Type, InnerChip } from "./styles";

export default function TypingList(props) {
    return(
        <InnerChip type={props.type}>
            <Type>{props.type}</Type>
        </InnerChip>
    )
}