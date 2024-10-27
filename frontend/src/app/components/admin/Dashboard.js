"use client"
import { useState, useEffect } from "react";
import Card from "./Card";
import Table from "../Table";
import Button from "../Button";
import StatusDropdown from "./StatusDropdown";
import projectsService from "@/app/api/services/projectsService";

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState("Pendiente");

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
        return date.toISOString().split('T')[0];
    };

    const filteredData = data.filter(project => project.status === selectedStatus);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const projects = await projectsService.getProjects();
                
                const formattedProjects = projects.map(project => ({
                    ...project,
                    status: statusTranslations[project.status] || project.status, 
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
            <h1 className="text-customH1 pb-2 md:pb-4 lg:pb-6 font-bold">Descripción General</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                gap-y-8 w-full gap-x-6">
                <Card title="prueba" description='prueba descr' />
                <Card title="prueba" description='prueba descr' />
                <Card title="prueba" description='prueba descr' />
                <Card title="prueba" description='prueba descr' />
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
        </div>
    );
};

export default Dashboard;
