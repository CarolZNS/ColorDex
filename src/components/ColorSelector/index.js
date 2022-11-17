import { Label, Input, RadioSelector } from './styles'

export default function ColorSelector(props) {
    const handleChange = () =>{
    props.onChange(props.value)
  }  
  return (
    <RadioSelector
    checked={props.checked}
    >
      <Input
        type="radio"
        id={props.label}
        name='color'
        value={props.value}
        checked={props.checked}
        onChange={handleChange}
      />
      <Label htmlFor={props.name}>{props.label}</Label>
    </RadioSelector>
  );
}
