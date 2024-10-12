import React, { useState } from 'react';
import Button from "./Button";
import Modal from "./Modal";
import Table from './Table';
import ProjectForm from './ProjectForm';
import ActionConfirmation from './ActionConfirmation';

const Card = ({ imgSrc, title, percentage, description, personalInvestment, role }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);
    const [modalSize, setModalSize] = useState("");

    const openModal = (title, content, size) => {
        setModalTitle(title);
        setModalContent(content);
        setModalSize(size);
        setIsModalOpen(true);
    };

    const projectDetails = {
        projectId: 1,
        creator: 'Creador Creador',
        email: 'creador@gmail.com',
        projectTitle: "Proyecto 1",
        description: "Descripción del proyecto",
        goal: 2000,
        country: "País",
        category: "Tecnología",
        status: "Activo",
        accountHolder: "Titular de la cuenta",
        accountNumber: "DE89370400440532013000",
        bankName: "Banco Ejemplo",
        swiftCode: "SWIFT1234",
        investors: [
            {
                name: "Juan Pérez",
                email: "juan@example.com",
                phone: "+123456789",
                totalInvestment: 1500,
                investmentDate: "2023-01-15",
                status: "Active",
                comments: "First investor",
            },
        ]
    };

    return (
        <div className="w-full mx-auto">  
            <div className="bg-white shadow-md rounded-lg border border-gray-200 p-0">
                <img 
                    src={imgSrc} 
                    alt={title} 
                    className="w-full h-32 object-cover rounded-t-lg" 
                />
                <div className="p-2"> 
                    <h1 className="text-lg font-semibold text-gray-800 mb-4 truncate 
                        overflow-hidden whitespace-nowrap text-ellipsis">{title}</h1> 
                    <div className="w-full bg-gray-200 rounded-full mb-2">
                        <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${percentage}%` }} 
                        ></div>
                    </div>
                    <p className={`font-bold text-sm ${role === 'emprendedor' ? 'mb-5' : ''}`}>${description} recaudados</p> 
                    {
                        personalInvestment !== null && (
                            <p className="font-bold text-sm mb-5">${personalInvestment} inversión</p>)
                    }
                    <hr className="border-gray-300 mb-4" />
                    <div className="flex space-x-2 mb-2">
                        <Button
                            onClick={() => 
                                role === 'emprendedor' 
                                    ? openModal(`Editar la campaña ${projectDetails.projectTitle}`, 
                                        <ProjectForm projectDetails={projectDetails} />, 
                                            "max-w-4xl") 
                                    : window.location.href = '/' // cambiarlo por el enrutamiento de next 
                                } 
                            className="flex-1 bg-yellow-500 text-white rounded-full px-2 py-1 
                                hover:bg-yellow-600 transition duration-200 text-sm"
                        >
                            {role === 'emprendedor' ? 'Editar' : 'Ver detalle'}
                        </Button>
                        <Button
                            onClick={() => 
                                role === 'emprendedor' 
                                    ? openModal(`Eliminar la campaña ${projectDetails.projectTitle}`,
                                        <ActionConfirmation text={`Estás seguro de eliminar la campaña? 
                                            No se podrán revertir los cambios y lo recaudado será devuelto.`} 
                                            action="Confirmar eliminación" bgColor="bg-red-500 hover:bg-red-600" />,
                                            "max-w-sm") 
                                    : null
                                } 
                            className={`flex-1 rounded-full px-2 py-1 transition duration-200 text-sm 
                                ${role === 'emprendedor' ? 'bg-red-500 text-white hover:bg-red-600' 
                                : 'bg-gray-400  cursor-not-allowed opacity-50'}`}
                        >
                            {role === 'emprendedor' ? 'Eliminar' : 'Actualizar $'}
                        </Button>
                    </div>
                    <div className="flex mb-2"> 
                        <Button
                            onClick={() => 
                                role === 'emprendedor' 
                                    ? openModal(`Inversores del proyecto ${projectDetails.projectTitle}`, 
                                        <Table investors={projectDetails.investors} />,
                                            "max-w-4xl")
                                    : openModal(`Emprendedor del proyecto ${projectDetails.projectTitle}`, 
                                        <div>
                                            <p className="pb-2">Nombre y Apellido: {projectDetails.creator}</p>
                                            <p>Email: {projectDetails.email} </p>
                                        </div>,
                                        "max-w-sm"
                                      )
                                } 
                            className="flex-1 bg-blue-500 text-white rounded-full px-2 
                                py-1 hover:bg-blue-600 transition duration-200 text-sm"
                        >
                            {role === 'emprendedor' ? 'Ver inversores' : 'Ver emprendedor'}
                        </Button>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}        
                onClose={() => setIsModalOpen(false)}
                title={modalTitle}
                size={modalSize}>
                {modalContent}
            </Modal>
        </div>  
    );
};

export default Card;
