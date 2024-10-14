import Header from "./Header";
import Amount from "./Amount";
import PaymentMethod from "./PaymentMethod";

const InvestmentPayment = () => {
    return (
        <div className="px-2">
            <Header />
            <Amount />
            <PaymentMethod />
        </div>
    );
};

export default InvestmentPayment;
