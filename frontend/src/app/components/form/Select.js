const Select = ({ label, name, value, onChange, options, required, disabled = false }) => {
    return (
        <div>
            <label htmlFor={name} className="block font-semibold text-sm mb-2">{label}{required && ' *'}</label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${disabled ? 'cursor-not-allowed' : ''}`}
                required={required}
                disabled={disabled}
            >
                <option value="" disabled>Seleccionar</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;
