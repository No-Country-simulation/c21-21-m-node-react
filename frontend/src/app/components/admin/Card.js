const Card = ({ title, description }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
            <p className="text-2xl font-bold text-gray-900">{description}</p>
        </div>
    );
};

export default Card;
