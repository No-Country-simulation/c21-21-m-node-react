import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import Button from "../Button";

const InvestmentAmount = () => {
    const investmentOptions = [100, 300, 500, 800, 1000, 1500];

    return (
        <div className="flex flex-col mt-6">
            <div className="grid grid-cols-3 gap-4 mb-4 w-full"> 
                {
                    investmentOptions.map((option) => (
                        <Button
                            key={option}
                            className="w-full flex justify-center items-center font-bold border 
                                border-gray-300 rounded-lg shadow-md transition duration-200 
                                hover:shadow-lg focus:outline-none p-4" 
                        >
                            ${option}
                        </Button>
                    ))
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"> 
                <div>
                    <div className="relative">
                        <span className="absolute left-3 top-4 text-gray-500">$ USD</span>
                        <input
                            type="number"
                            name="investment"
                            className="w-full border border-gray-300 rounded-md p-4 text-right 
                                font-bold focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Introduce la cantidad" 
                            min="0"
                            required
                        />
                    </div>
                </div>
            </div>
            <p className="font-bold pt-5 pb-2">Servicios de BoostUp</p>
            <small className="text-gray-600">BoostUp tiene una comisión de plataforma 
                del 0% para todos.</small>
            <div className="flex items-center mt-6 p-3 border border-gray-300 rounded-lg 
                shadow-md hover:shadow-lg transition duration-200">
                <div className="mr-4"> 
                    <FontAwesomeIcon icon={faHandshakeAngle} className="text-5xl" />
                </div>
                <div>
                    <small>Gracias por ser parte clave y en dar apoyo a proyectos que 
                        estamos seguros que por personas como usted serán exitosos!
                    </small>
                </div>
            </div>
        </div>
    );
};

export default InvestmentAmount;
