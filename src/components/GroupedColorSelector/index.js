import ColorSelector from "../ColorSelector";

export default function GroupedColorSelector(props) {
  return props.colors.map((color) => (
    <ColorSelector
      onChange={props.onChange}
      label={color.label}
      name={color.name}
      value={color.value}
      checked={props.value === color.value}
      key={color.value}
    />
  ));
}
