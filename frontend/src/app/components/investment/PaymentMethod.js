"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import PaypalButton from './PaypalButton';

const PaymentMethod = () => { 
    const investmentAmount = 10.00;
    
    return (
        <div className="pt-5">
            <div className="h-px bg-gray-200 my-2 md:my-4"></div>
            <p className="font-bold pt-4 md:pt-6 pb-2 md:pb-4">Método de pago</p>
            <small className="text-gray-600">Por los momentos solo contamos con Paypal.
                <br/>
                <strong>Nota:</strong> Si no tienes una cuenta de PayPal, puedes realizar tu pago utilizando tu 
                    tarjeta de crédito o débito directamente a través de PayPal. Simplemente 
                    selecciona la opción de pagar con tarjeta al finalizar la compra.
            </small>
            <div className="h-px bg-gray-200 my-5 md:my-7"></div>
            <div className="mb-4 md:mb-6">
                <p className="font-bold pt-4 md:pt-6 pb-2 md:pb-4">Tu inversión</p>
                <div className="flex justify-between">
                    <span className="text-gray-600">Inversión</span>
                    <span className="text-gray-600">$10</span>
                </div>
                <div className="h-px bg-gray-200 my-5 md:my-7"></div>
                <div className="flex justify-between">
                    <span>Total a pagar hoy</span>
                    <span className="text-gray-600">$10</span>
                </div>
            </div>
            <div className="mb-8 md:mb-10 pt-5 md:pt-7 flex items-center">
                <input
                    type="checkbox"
                    id="anonymous"
                    className="h-8 w-8 md:h-5 md:w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="anonymous" className="ml-5">
                    No mostrar mi nombre públicamente en la inversión
                </label>
            </div>
            <PaypalButton investmentAmount={investmentAmount}/>
            <div className="h-px bg-gray-200 my-10 md:my-12"></div>
            <div className="flex">
                <div className="mr-4"> 
                    <FontAwesomeIcon icon={faShieldAlt} className="text-3xl" />
                </div>
                <div>
                    <p className="font-bold pb-2 md:pb-4">BoostUp proteje tu inversión</p>
                    <small className="text-gray-600">Le garantizamos un reembolso completo durante un 
                        año, en el raro caso de que se produzca un fraude.
                    </small>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;
