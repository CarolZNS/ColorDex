export default function ColorSelector(props) {
    const handleChange = () =>{
    props.onChange(props.value)
  }  
  return (
    <div className="radio-selector">
      <input
        type="radio"
        id={props.label}
        name='color'
        value={props.value}
        checked={props.checked}
        onChange={handleChange}
      />
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  );
}
