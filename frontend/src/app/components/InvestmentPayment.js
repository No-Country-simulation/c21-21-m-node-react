import InvestmentHeader from "./InvestmentHeader";
import InvestmentAmount from "./InvestmentAmount";
import PaymentMethod from "./PaymentMethod";

const InvestmentPayment = () => {
    return (
        <div className="px-2">
            <InvestmentHeader />
            <InvestmentAmount />
            <PaymentMethod />
        </div>
    );
};

export default InvestmentPayment;

