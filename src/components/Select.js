import './Select.css';

const Select = ({ label, options, ...rest }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <select {...rest}>
        <option value="">Seleccione el estado</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
