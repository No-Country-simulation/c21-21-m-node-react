import ProjectForm from "../ProjectForm";
import Button from "../Button";
import ActionConfirmation from "../ActionConfirmation";
import Table from "../Table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons';

const investors = [
    {
        name: 'Maria',
        email: 'mariagaa993@gmail.com',
        totalInvestment: 20,
        investmentDate: '20/01/2024'

    }
]

const Entrepreneur = ({ projectDetails, openModal }) => {
    return (
        <>
            <p className="font-bold text-sm mb-5">${projectDetails.raised} recaudados</p>
            <hr className="border-gray-300 mb-4" />
            <div className="flex space-x-2">
                <Button
                    onClick={() =>
                        openModal(`Editar la campaña ${projectDetails.projectTitle}`,
                        <ProjectForm projectDetails={projectDetails} />,
                        "max-w-4xl")
                    }
                    className="w-8 h-8 rounded-full bg-yellow-500 text-white flex 
                    items-center justify-center hover:bg-yellow-600 transition duration-200">
                    <FontAwesomeIcon icon={faEdit} className="text-sm" />
                </Button>
                <Button
                    onClick={() =>
                        openModal(`Eliminar la campaña ${projectDetails.projectTitle}`,
                        <ActionConfirmation 
                            text={`Estás seguro de eliminar la campaña? 
                                No se podrán revertir los cambios y lo recaudado será devuelto.`}
                            action="Confirmar eliminación" 
                            bgColor="bg-red-500 hover:bg-red-600" />,
                        "max-w-sm")
                    }
                    className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center 
                    justify-center hover:bg-red-600 transition duration-200">
                    <FontAwesomeIcon icon={faTrashAlt} className="text-sm" />
                </Button>
                <Button
                    onClick={() =>
                        openModal(`Inversores del proyecto ${projectDetails.projectTitle}`,
                        <Table investors={investors} />,
                        "max-w-4xl")
                    }
                    className="flex-1 bg-blue-500 text-white rounded-full px-2 py-1 
                    hover:bg-blue-600 transition duration-200 text-sm">
                    <FontAwesomeIcon icon={faEye} className="text-sm" /> Inversores
                </Button>
            </div>
        </>
    );
};
  
export default Entrepreneur; 
