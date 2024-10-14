import Header from "./Header";
import Amount from "./Amount";
import PaymentMethod from "./PaymentMethod";

const Payment = () => {
    return (
        <div className="px-2 md:px-8 lg:py-12 lg:px-12 lg:max-w-2xl lg:bg-white lg:mx-auto 
            lg:rounded-xl lg:shadow-lg lg:border lg:border-gray-200 lg:overflow-hidden">
            <Header />
            <Amount />
            <PaymentMethod />
        </div>
    );
};

export default Payment;
