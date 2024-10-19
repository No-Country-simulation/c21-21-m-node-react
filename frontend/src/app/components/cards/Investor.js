import Button from "../Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const Investor = ({ projectDetails, openModal }) => {
    return (
        <>
            <p className="font-bold text-sm mb-2">${projectDetails.raised} recaudados</p>
            <p className="font-bold text-sm mb-5">${projectDetails.personalInvestment} inversión</p>
            <hr className="border-gray-300 mb-4" />
            <div className="flex space-x-2">
                <Button
                    onClick={() => {
                        window.location.href = ``;
                    }}
                    className="w-10 h-10 rounded-full bg-yellow-500 text-white flex 
                    items-center justify-center hover:bg-yellow-600 transition duration-200">
                    <FontAwesomeIcon icon={faEye} />
                </Button>
                <Button
                    className="w-10 h-10 rounded-full bg-gray-400 flex 
                    items-center justify-center cursor-not-allowed opacity-50">
                    <FontAwesomeIcon icon={faSyncAlt} />
                </Button>
                <Button
                    onClick={() =>
                        openModal(`Emprendedor del proyecto ${projectDetails.projectTitle}`,
                        <div>
                            <p className="pb-2">Nombre y Apellido: {projectDetails.creator}</p>
                            <p>Email: {projectDetails.email} </p>
                        </div>,
                        "max-w-sm")
                    }
                    className="flex-1 bg-blue-500 text-white rounded-full px-2 py-1 
                    hover:bg-blue-600 transition duration-200 text-sm">
                    <FontAwesomeIcon icon={faEye} /> Emprendedor
                </Button>
            </div>
        </>
    );
};

export default Investor;
  