import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const PaymentMethod = () => { 
    return (
        <div className="pt-5">
            <div className="h-px bg-gray-200 my-2"></div>
            <p className="font-bold pt-4 pb-2">Método de pago</p>
            <small className="text-gray-600">Por los momentos solo contamos con Paypal.
            </small>
            <div className="h-px bg-gray-200 my-5"></div>
            <div className="mb-4">
                <p className="font-bold pt-4 pb-2">Tu inversión</p>
                <div className="flex justify-between">
                    <span className="text-gray-600">Inversión</span>
                    <span className="text-gray-600">$10</span>
                </div>
                <div className="h-px bg-gray-200 my-5"></div>
                <div className="flex justify-between">
                    <span>Total a pagar hoy</span>
                    <span className="text-gray-600">$10</span>
                </div>
            </div>
            <div className="mb-8 pt-5 flex items-center">
                <input
                    type="checkbox"
                    id="anonymous"
                    className="h-8 w-8 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="anonymous" className="ml-5">
                    No mostrar mi nombre públicamente en la inversión
                </label>
            </div>

            <button
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md 
                    hover:bg-blue-700 transition duration-300"
            >
                Pagar con PayPal
            </button>
            <div className="h-px bg-gray-200 my-10"></div>
            <div className="flex">
                <div className="mr-4"> 
                    <FontAwesomeIcon icon={faShieldAlt} className="text-3xl" />
                </div>
                <div>
                    <p className="font-bold pb-2">BoostUp proteje tu inversión</p>
                    <small className="text-gray-600">Le garantizamos un reembolso completo durante un 
                        año, en el raro caso de que se produzca un fraude.
                    </small>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;
