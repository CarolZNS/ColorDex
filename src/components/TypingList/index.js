import { Type, InnerChip } from "./styles";

export default function TypingList(props) {
    return(
        <InnerChip>
            <Type>{props.type}</Type>
        </InnerChip>
    )
}