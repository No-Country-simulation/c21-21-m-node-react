import Button from "./Button";

const Card = ({ imgSrc, title, percentage, description }) => {
    return (
        <div className="w-64 mx-auto"> 
            <div className="bg-white shadow-md rounded-lg border border-gray-200 p-0">
                <img 
                    src={imgSrc} 
                    alt={title} 
                    className="w-full h-32 object-cover rounded-t-lg" 
                />
                <div className="p-2"> 
                    <h1 className="text-lg font-semibold text-gray-800 mb-4 truncate 
                        overflow-hidden whitespace-nowrap text-ellipsis">{title}</h1> 
                    <div className="w-full bg-gray-200 rounded-full mb-2">
                        <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${percentage}%` }} 
                        ></div>
                    </div>
                    <p className="font-bold text-sm mb-5">{description}</p> 
                    <hr className="border-gray-300 mb-4" />
                    <div className="flex space-x-2 mb-2">
                        <Button className="flex-1 bg-yellow-500 text-white rounded-full 
                            px-2 py-1 hover:bg-yellow-600 transition duration-200 text-sm">
                            Editar
                        </Button>
                        <Button className="flex-1 bg-red-500 text-white rounded-full px-2 
                            py-1 hover:bg-red-600 transition duration-200 text-sm">
                            Eliminar
                        </Button>
                    </div>
                    <div className="flex"> 
                        <Button className="flex-1 bg-blue-500 text-white rounded-full px-2 
                            py-1 hover:bg-blue-600 transition duration-200 text-sm">
                            Ver inversores
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
