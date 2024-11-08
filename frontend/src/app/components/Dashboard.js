"use client";
import React, { useEffect, useState } from 'react';
import Button from "./Button";
import Card from "./Card";
import Entrepreneur from './cards/Entrepreneur';
import Investor from './cards/Investor';
import Modal from './Modal';
import ProjectForm from './form/ProjectForm';
import LoaderDashboard from './loaders/LoaderDashboard';
import { useUserContext } from '../contexts/UserContext';
import { useRouter } from 'next/navigation';
import projectsService from '../api/services/projectsService';
import Toast from './Toast';
import useToast from '../hooks/useToast';

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { toast, showToast, setToast } = useToast();
    const { user } = useUserContext();
    const router = useRouter();
    const [projects, setProjects] = useState([]);
    const [totalProjects, setTotalProjects] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState(""); 
    const [modalContent, setModalContent] = useState(null); 
    const [modalWidth, setModalWidth] = useState("");
    const [modalHeight, setModalHeight] = useState("");
    const [modalMargin, setModalMargin] = useState("");
    const [isError, setIsError] = useState(false); 
    const [role, setRole] = useState("");

    useEffect(() => {
        setRole(user?.role);
        const userId= user?.id;
        
        const fetchData = async () => {
            try {
                const projects = await projectsService.getProjects();
                const filterProjects = projects.filter(project => project.owner.id === userId);
                setTotalProjects(filterProjects.length)

                const totalCurrentAmount = filterProjects.reduce((total, project) => {
                    return total + (project.current_amount || 0); 
                }, 0);
                setTotalAmount(totalCurrentAmount)
        
                const updatedProjects = filterProjects.map(project => {
                    const percentage = Math.floor(((project.current_amount || 0) / (project.goal_amount || 1)) * 100);
                    return {
                        ...project,
                        percentage: percentage,
                    };
                });
        

                setProjects(updatedProjects);
            } catch (error) {
                openModal(
                    "Error",
                    <div>{error.response?.data?.message || 'Error al cargar los proyectos'}</div>,
                    "w-full md:max-w-sm",
                    "h-auto",
                    "mt-24", 
                    true
                );
            } finally {
                setIsLoading(false)
            }
        };
    
        if (userId) {
            fetchData();
        }
    }, [user]);

    const openModal = (title, content, width, height, margin, isError = false) => {
        setModalTitle(title);
        setModalContent(content);
        setModalWidth(width);
        setModalHeight(height);
        setModalMargin(margin)
        setIsError(isError);
        setIsModalOpen(true); 
    };

    const closeModal = () => {
        setIsModalOpen(false); 
        setModalContent(null); 
    };

    const title = role === 'emprendedor' ? 'Tus proyectos' : 'Proyectos en los que has invertido';
    const buttonTitle = role === 'emprendedor' ? 'Crear campaña' : 'Ver proyectos para invertir';
    const labelTotalProjects = role === 'emprendedor' ? 'Total proyectos' : 'Total proyectos invertidos';
    const labelTotalAmount = role === 'emprendedor' ? 'Total recaudado' : 'Total inversión';

    return (
        <>
            { isLoading ? (
                <LoaderDashboard />
                ) : (
                    <>
                        <div className="flex flex-col md:flex-row justify-between items-start lg:items-center 
                            mb-4 space-y-4 md:space-y-0">
                            <h1 className="text-customH1 pb-2 lg:pb-0 font-bold">{title}</h1>
                            <div className="w-full md:w-auto">
                                <Button
                                    onClick={() => {
                                        role === 'emprendedor'
                                        ? openModal(
                                            'Crear campaña',
                                            <ProjectForm closeModal={closeModal} showToast={showToast} />,
                                            'max-w-4xl',
                                            'h-[83vh]',
                                            "mt-3"    
                                        ) : router.push('/projects');
                                    }}
                                    className="w-full bg-customGreen text-white font-bold px-6 py-3 rounded-full">
                                    {buttonTitle}
                                </Button>
                            </div>
                        </div>
                        <div className="flex flex-col pt-2 pb-5 sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 mb-6">
                            <p className="font-bold">{labelTotalProjects}: {totalProjects}</p>
                            <p className="font-bold">{labelTotalAmount}: ${totalAmount}</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                            gap-y-8 w-full gap-x-6">
                            {
                                projects?.length > 0 ? (
                                    projects.map((project, index) => (
                                        <Card
                                            key={project.id || index}
                                            img={project?.img || "https://dummyimage.com/150x150/CCCCCC/FFFFFF&text=Imagen+no+disponible"}
                                            title={project.name}
                                            percentage={project.percentage}
                                            status={project.status}>
                                            {
                                                role === 'emprendedor' ? (
                                                    <Entrepreneur 
                                                        project={project}
                                                        openModal={openModal} 
                                                        closeModal={closeModal} 
                                                        showToast={showToast} />
                                                ) : (
                                                    <Investor project={project} openModal={openModal} />
                                                )
                                            }
                                        </Card>
                                    ))
                                ) : (
                                    <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4">
                                        <p className="text-gray-600">No tienes proyectos para mostrar</p>
                                    </div>
                                )       
                            }
                        </div>  
                    </>
                )
            }
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal} 
                title={modalTitle} 
                width={modalWidth}
                height={modalHeight}
                margin={modalMargin}
                isError={isError}>
                {modalContent} 
            </Modal>    
            {
                toast.isVisible && (
                    <Toast 
                        message={toast.message} 
                        type={toast.type} 
                        onClose={() => setToast({ ...toast, isVisible: false })}
                    />
                )
            } 
        </>
    );
};

export default Dashboard;
