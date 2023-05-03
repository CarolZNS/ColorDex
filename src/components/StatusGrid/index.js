import { Name, Value, InnerGrid } from "./styles";

export default function StatusGrid(props) {
  return (
    <InnerGrid>
      <Name>{props.name}:</Name><Value>{props.value}</Value>
    </InnerGrid>
  );
}
