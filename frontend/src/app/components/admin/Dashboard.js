"use client"
import { useState, useEffect } from "react";
import Card from "./Card";
import Table from "../Table";
import TableUsers from "./Table";
import Modal from "../Modal";
import Button from "../Button";
import LoaderAdminDashboard from "../loaders/LoaderAdminDashboard";
import LoaderButton from "../loaders/LoaderButton";
import StatusDropdown from "./StatusDropdown";
import projectsService from "@/app/api/services/projectsService";
import userService from "@/app/api/services/userService";

const Dashboard = () => {
    const [isLoadingDash, setIsLoadingDash] = useState(true);
    const [isLoading, setIsLoading] = useState(null);
    const [data, setData] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState("Pendiente");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState(""); 
    const [modalContent, setModalContent] = useState(null); 
    const [modalWidth, setModalWidth] = useState("");
    const [modalHeight, setModalHeight] = useState("");
    const [modalMargin, setModalMargin] = useState("");
    const [error, setError] = useState(null);

    const statusMap = {
        "Pendiente": "pending",
        "Activo": "active",
        "Inactivo": "inactive",
        "Rechazado": "rejected",
        "Finalizado": "completed",
    };
    
    const statusTranslations = Object.fromEntries(
        Object.entries(statusMap).map(([key, value]) => [value, key])
    );

    const statuses = Object.keys(statusMap);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES'); 
    };

    const filteredData = data.filter(project => project.status === selectedStatus);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const projects = await projectsService.getProjects(setError);
                
                const formattedProjects = projects.map(project => ({
                    ...project,
                    status: statusTranslations[project.status] || project.status, 
                    investmentDate: formatDate(project.creation_date)
                }));
                setData(formattedProjects);
            } catch (error) {
                openModal(
                    "Error",
                    <div>{error.message}</div>,
                    "w-full md:max-w-sm",
                    "h-auto",
                    "mt-24", 
                    true
                );
            } finally {
                setIsLoadingDash(false);
            }
        };
    
        fetchData();
    }, []);

    const users = async (role) => {
        setIsLoading(role)
        try {
            const getUsers = await userService.allUsers(setError);
            const filteredUsers = getUsers.filter(user => user.role === role);
            
            openModal(
                role === 'emprendedor' ? `Emprendedores` : `Inversores`,
                <TableUsers data={filteredUsers} />,
                'max-w-4xl',
                'h-[83vh]',
                "mt-3"
            );
        } catch (error) {
            openModal(
                "Error",
                <div>{error.message}</div>,
                "w-full md:max-w-sm",
                "h-auto",
                "mt-24", 
                true
            );
        } finally {
            setIsLoading(null);
        }
    };

    const openModal = (title, content, width, height, margin, isError = false) => {
        setModalTitle(title);
        setModalContent(content);
        setModalWidth(width);
        setModalHeight(height);
        setModalMargin(margin)
        setError(isError);
        setIsModalOpen(true); 
    };

    const closeModal = () => {
        setIsModalOpen(false); 
        setModalContent(null); 
    };

    const totalProjects = data.length;
    const totalInvestment = data.reduce((total, project) => total + (project.current_amount || 0), 0);

    return (
        <>
            {
                isLoadingDash ? (
                    <LoaderAdminDashboard /> 
                ) : (
                    <div className="flex flex-col justify-between items-start mb-4">
                        <h1 className="text-customH1 pb-2 md:pb-4 lg:pb-6 font-bold">Descripción General</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                            gap-y-8 w-full gap-x-6">
                            <Card title="Proyectos totales" description={totalProjects} />
                            <Card title="Inversión total" description={`$${totalInvestment}`} />
                        </div>
                        <div className="flex w-full space-x-4 mb-4 md:mb-0 pt-8 md:w-1/2 lg:md:w-1/3 md:pt-10">
                            <LoaderButton
                                onClick={() => users('emprendedor')}
                                isLoading={isLoading === 'emprendedor'}  
                                className="flex-grow w-full bg-blue-500 text-white py-2 px-4 rounded">
                                Emprendedores
                            </LoaderButton>
                            <LoaderButton
                                onClick={() => users('inversor')}
                                isLoading={isLoading === 'inversor'}  
                                className="flex-grow w-full bg-green-500 text-white py-2 px-4 rounded">
                                Inversores
                            </LoaderButton>
                        </div>
                        <div className="flex flex-col pt-8 md:pt-6 md:pb-6 md:flex-row md:justify-around w-full">
                            <StatusDropdown 
                                selectedStatus={selectedStatus} 
                                handleStatus={setSelectedStatus} 
                                statuses={statuses}
                            />
                            <div className="hidden md:flex w-full pt-8 space-x-1">
                                {
                                    statuses.map((status) => (
                                        <Button
                                            key={status}
                                            className={`px-5 py-2 rounded-full font-bold transition duration-300 
                                            ${selectedStatus === status ? "bg-black text-white" 
                                            : "text-gray-500 hover:bg-gray-100 hover:text-black"}`}
                                            onClick={() => setSelectedStatus(status)}>
                                            {status}
                                        </Button>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="w-full">
                            <Table data={filteredData} admin={true} />
                        </div>
                        <Modal
                            isOpen={isModalOpen}
                            onClose={closeModal} 
                            title={modalTitle} 
                            width={modalWidth}
                            height={modalHeight}
                            margin={modalMargin}
                            isError={error}>
                            {modalContent} 
                        </Modal>  
                    </div>
                )
            }
        </>
    );
};

export default Dashboard;
