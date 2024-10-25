const Textarea = ({ label, name, value, onChange, required, placeholder }) => {
    return (
        <div>
            <label htmlFor={name} className="block font-semibold text-sm mb-2">{label}{required && ' *'}</label>
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="3"
                placeholder={placeholder}
                required={required}
            ></textarea>
        </div>
    );
};

export default Textarea;
