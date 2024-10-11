import React, { useState } from 'react';
import Button from "./Button";
import Modal from "./Modal";
import Table from './Table';
import ProjectForm from './ProjectForm';

const Card = ({ imgSrc, title, percentage, description }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [titleModal, setTitleModal] = useState("");
    const [modalContent, setModalContent] = useState(null);

    const openModal = (title, content) => {
        setTitleModal(title)
        setModalContent(content)
        setIsModalOpen(true)
    };

    const projectDetails = {
        projectId: 1,
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
                    <p className="font-bold text-sm mb-5">${description} recaudados</p> 
                    <hr className="border-gray-300 mb-4" />
                    <div className="flex space-x-2 mb-2">
                        <Button
                            onClick={() => openModal(`Editar la campaña 
                                ${projectDetails.projectTitle}`, 
                                <ProjectForm projectDetails={projectDetails} />
                            )} 
                            className="flex-1 bg-yellow-500 text-white rounded-full 
                            px-2 py-1 hover:bg-yellow-600 transition duration-200 text-sm">
                            Editar
                        </Button>
                        <Button 
                            onClick={() => openModal("Eliminar campaña")}
                            className="flex-1 bg-red-500 text-white rounded-full px-2 
                            py-1 hover:bg-red-600 transition duration-200 text-sm">
                            Eliminar
                        </Button>
                    </div>
                    <div className="flex mb-2"> 
                        <Button
                            onClick={() => openModal(`Inversores del proyecto 
                                ${projectDetails.projectTitle}`, 
                                <Table investors={projectDetails.investors} />
                            )} 
                            className="flex-1 bg-blue-500 text-white rounded-full px-2 
                            py-1 hover:bg-blue-600 transition duration-200 text-sm">
                            Ver inversores
                        </Button>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}        
                onClose={() => setIsModalOpen(false)}
                title={titleModal}>
                {modalContent}
            </Modal>
        </div>  
    );
};

export default Card;
