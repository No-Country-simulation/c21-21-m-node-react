const Input = ({ label, name, value, onChange, required, type = "text", placeholder }) => {
    return (
        <div>
            <label className="block font-semibold text-sm mb-2">{label}{required && ' *'}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none 
                focus:ring-2 focus:ring-blue-400"
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
};

export default Input;
