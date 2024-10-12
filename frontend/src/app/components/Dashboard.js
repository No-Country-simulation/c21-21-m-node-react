"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from "./Button";
import Card from "./Card";
import Modal from './Modal';
import ProjectForm from './ProjectForm';

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [totalProjects, setTotalProjects] = useState(0);
    const [totalAmount, setTotalAmount] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [role, setRole] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://run.mocky.io/v3/175491e7-0ddf-4d09-9138-cf6c68d68f77');
                    setRole("emprendedor")
                    setProjects(response.data.projects);
                    setTotalProjects(response.data.totalProjects);
                    setTotalAmount(response.data.totalAmount);
            } catch (error) {
                setError(error);
            } 
        };
    
        fetchData();
    }, []);

    const openModal = () => setIsModalOpen(true)

    const title = role === 'emprendedor' ? 'Tus proyectos' : 'Proyectos en los que has invertido';
    const buttonTitle = role === 'emprendedor' ? 'Crear campaña' : 'Ver proyectos para invertir';
    
    const labelTotalProjects = role === 'emprendedor' ? 'Total proyectos' : 'Total proyectos invertidos';
    const labelTotalAmount = role === 'emprendedor' ? 'Total recaudado' : 'Total inversión';
    
    return (
        <div className="flex flex-col px-4 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start lg:items-center 
                mb-4 space-y-4 md:space-y-0">
                <h1 className="text-3xl lg:text-4xl pb-2 lg:pb-0 font-bold">{title}</h1>
                <div className="w-full md:w-auto">
                    <Button 
                        onClick={() => {
                            role === 'emprendedor' 
                            ? openModal() 
                            : window.location.href = '/'; // cambiarlo por el enrutamiento de next 
                        }} 
                        className="w-full bg-customGreen text-white font-bold px-6 py-3 rounded-full"
                    >
                        {buttonTitle}
                    </Button>
                </div>
            </div>
            <div className="flex flex-col pt-2 pb-5 sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 mb-6">
                <p className="font-bold">{labelTotalProjects}: {totalProjects}</p>
                <p className="font-bold">{labelTotalAmount}: ${totalAmount}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 
                gap-y-8 w-full"> 
                {
                    projects.map((cardProject, index) => (
                        <Card 
                            key={cardProject.id || index}
                            imgSrc={cardProject.imgSrc || "https://via.placeholder.com/300"}
                            title={cardProject.title}
                            percentage={cardProject.percentage}
                            description={cardProject.amountRaised}
                            personalInvestment={role === "inversionista" ? cardProject.personalInvestment : null}
                            role={role}
                        />
                    ))
                }
            </div>
            <Modal
                isOpen={isModalOpen}        
                onClose={() => setIsModalOpen(false)}
                title={'Crear campaña'}
                size="max-w-4xl max-h-[80vh]">
                <ProjectForm />
            </Modal>
        </div>
    );
};

export default Dashboard;
