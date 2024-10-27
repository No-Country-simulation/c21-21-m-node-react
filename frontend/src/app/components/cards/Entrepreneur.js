import ProjectForm from "../form/ProjectForm";
import Button from "../Button";
import ActionConfirmation from "../ActionConfirmation";
import Table from "../Table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const Entrepreneur = ({ project, openModal, user, updateUser, createSubmitResponse }) => {
    return (
        <>
            <p className="font-bold text-sm mb-5">${project.current_amount || 0} recaudados</p>
            <hr className="border-gray-300 mb-4" />
            {
                project?.status === "pending" ? (
                    <div className="flex items-center justify-center text-red-500 text-center">
                        <div className="relative group">
                            <FontAwesomeIcon 
                                icon={faExclamationCircle} 
                                className="mr-2 cursor-pointer"/>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
                                hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 z-10">
                                Por espera del administrador
                            </div>
                        </div>
                        <p className="font-bold text-sm">Pendiente por aprobación</p>
                    </div>
                ) : (
                    <div className="flex space-x-2">
                        <Button
                            onClick={() =>
                                openModal(`Editar la campaña`,
                                    <ProjectForm 
                                        project={project} 
                                        createSubmitResponse={createSubmitResponse}
                                        user={user}
                                        updateUser={updateUser}
                                        action='edit' />,
                                    'max-w-4xl',
                                    'h-[83vh]',
                                    "mt-3"
                                )
                            }
                            className="w-8 h-8 rounded-full bg-yellow-500 text-white flex 
                            items-center justify-center hover:bg-yellow-600 transition duration-200">
                            <FontAwesomeIcon icon={faEdit} className="text-sm" />
                        </Button>
                        <Button
                            onClick={() =>
                                openModal(`Eliminar la campaña`,
                                <ActionConfirmation 
                                    text={
                                        <>
                                            Estás seguro de eliminar la campaña <strong>{project.name}</strong>? 
                                            No se podrán revertir los cambios y lo recaudado será devuelto.
                                        </>
                                    }
                                    action="Confirmar eliminación" 
                                    bgColor="bg-red-500 hover:bg-red-600" />,
                                    "w-full md:max-w-sm",
                                    "h-[45vh] md:h-[30vh] lg:h-[35vh]",
                                    "mt-24"
                                )
                            }
                            className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center 
                            justify-center hover:bg-red-600 transition duration-200">
                            <FontAwesomeIcon icon={faTrashAlt} className="text-sm" />
                        </Button>
                        <Button
                            onClick={() =>
                                openModal(`Inversores del proyecto`,
                                <Table 
                                    investors={project.backers} />,
                                    'max-w-4xl',
                                    'h-[83vh]',
                                    "mt-3" )
                            }
                            className="flex-1 bg-blue-500 text-white rounded-full px-2 py-1 
                            hover:bg-blue-600 transition duration-200 text-sm">
                            <FontAwesomeIcon icon={faEye} className="text-sm" /> Inversores
                        </Button>
                    </div>
                )
            }
        
        </>
    );
};
  
export default Entrepreneur; 
