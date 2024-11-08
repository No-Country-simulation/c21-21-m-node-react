import ProjectForm from "../form/ProjectForm";
import Button from "../Button";
import ActionConfirmation from "../ActionConfirmation";
import Table from "../Table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faEye, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import projectsService from "@/app/api/services/projectsService";
import { useUserContext } from "@/app/contexts/UserContext";

const Entrepreneur = ({ project, openModal, closeModal, showToast }) => {
    const { user, updateUser } = useUserContext();
    
    const handleAction = (title, content, onConfirmAction) => {
        openModal(
            title,
            <ActionConfirmation
                text={content}
                action="Confirmar"
                bgColor="bg-red-500 hover:bg-red-600"
                onConfirm={onConfirmAction}
            />,
            "w-full md:max-w-sm",
            "",
            "mt-24",
        );
    };

    const handleDelete = async (id) => {
        try {
            const response = await projectsService.deleteProject(id);
            if(response.status === 200) {
                const updatedProjects = user.projects.filter(proj => proj._id !== id);
                                
                updateUser({ ...user, projects: updatedProjects });

                closeModal();
                showToast('Su proyecto se ha eliminado exitosamente!', 'success');
            } else {
                throw new Error('Error');
            }

        } catch (error) {
            closeModal();
            showToast('No se ha podido eliminar su proyecto!', 'error')
        }
    };

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
                                        action='edit'
                                        closeModal={closeModal}
                                        showToast={showToast} />,
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
                                handleAction(
                                    'Eliminar campaña',
                                    <>Estás seguro de eliminar la campaña <strong>{project.name}</strong>? 
                                    No se podrán revertir los cambios y lo recaudado será devuelto.</>,
                                    () => handleDelete(project._id)
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
                                    data={project.backers} />,
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
