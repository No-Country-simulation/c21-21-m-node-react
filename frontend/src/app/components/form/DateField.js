const DateField = ({ label, name, value, onChange, required, placeholder }) => {
    const today = new Date().toISOString().split("T")[0];

    return (
        <div>
            <label htmlFor={name} className="block font-semibold text-sm mb-2">{label}{required && ' *'}</label>
            <input
                id={name}
                type="date"
                name={name}
                value={value}
                onChange={onChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none 
                focus:ring-2 focus:ring-blue-400"
                placeholder={placeholder}
                min={today}
                required={required}
            />
        </div>
    );
};

export default DateField;
