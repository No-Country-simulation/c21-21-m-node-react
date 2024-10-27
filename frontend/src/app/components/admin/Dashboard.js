"use client"
import { useState, useEffect } from "react";
import Card from "./Card";
import Table from "../Table";
import projectsService from "@/app/api/services/projectsService";

const Dashboard = () => {
    const [data, setData] = useState([]);

    const statusTranslations = {
        active: "Activo",
        inactive: "Inactivo",
        rejected: "Rechazado",
        pending: "Pendiente",
        completed: "Finalizado",
    };
    
    const translateStatus = (status) => {
        return statusTranslations[status] || status; 
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const projects = await projectsService.getProjects();
                
                const formattedProjects = projects.map(project => ({
                    ...project,
                    status: translateStatus(project.status), 
                    investmentDate: formatDate(project.creation_date)
                }));
    
                setData(formattedProjects);
            } catch (error) {
                //setError(error.message);
            } finally {
                //setLoading(false);
            }
        };
    
        fetchData();
    }, []);

    return (
        <div className="flex flex-col justify-between items-start
            mb-4 space-y-4 md:space-y-0">
            <h1 className="text-customH1 pb-2 lg:pb-0 font-bold">Descripción General</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                gap-y-8 w-full gap-x-6">
                <Card title="prueba" description='prueba descr' />
                <Card title="prueba" description='prueba descr' />
                <Card title="prueba" description='prueba descr' />
                <Card title="prueba" description='prueba descr' />
            </div>
            <Table data={data} admin={true} />
        </div>
    );
};

export default Dashboard;
