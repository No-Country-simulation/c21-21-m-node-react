import Button from "../Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

const InvestorList = ({ project }) => {
    const calculateDaysSinceInvestment = (investmentDate) => {
        const today = new Date();
        const investmentDateObj = new Date(investmentDate); 
        const diffInTime = today - investmentDateObj;
        const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
    
        return diffInDays; 
    };

    return (
        <>
            <h3 className="text-md font-semibold pb-5 pt-8">Inversores</h3>
            {
                project?.map(backer => (
                    <div className="flex items-center gap-6 pb-4" key={backer._id}>
                        <div className="flex items-center justify-center w-10 h-10 bg-customGreen rounded-full">
                            <FontAwesomeIcon icon={faHandHoldingUsd} className="fa-lg text-customWhite" />
                        </div>
                        <div>
                            <p className="text-md font-semibold">{backer.firstName}</p>
                            <p className="text-sm text-gray-500">
                                ${backer.totalInvested} - hace {calculateDaysSinceInvestment(backer.investmentDate)} d
                            </p>
                        </div>
                    </div>
                ))
            }
            <div className="pt-4">
                <Button className="w-full text-md font-semibold leading-6 py-1 rounded-full 
                    border-2 shadow-md hover:shadow-lg hover:text-customGreen  border-customGreen">
                    Ver Todo
                </Button>
            </div>
        </>
    );
};

export default InvestorList;
