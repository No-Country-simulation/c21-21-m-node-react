"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from "./Button";
import Card from "./Card";

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [totalProjects, setTotalProjects] = useState(0);
    const [totalAmountRaised, setTotalAmountRaised] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://run.mocky.io/v3/a17ead71-2877-49f6-bb72-e29deece9b7f');
                    setProjects(response.data.projects);
                    setTotalProjects(response.data.totalProjects);
                    setTotalAmountRaised(response.data.totalAmountRaised);
            } catch (error) {
                setError(error);
            } 
        };
    
        fetchData();
      }, []);

    return (
        <div className="flex flex-col px-4 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start lg:items-center 
                mb-4 space-y-4 md:space-y-0">
                <h1 className="text-3xl lg:text-4xl pb-2 lg:pb-0 font-bold">Tus Proyectos</h1>
                <div className="w-full md:w-auto">
                    <Button className="w-full bg-customGreen text-white font-bold px-6 py-3 rounded-full">
                        Crear campaña
                    </Button>
                </div>
            </div>
            <div className="flex flex-col pt-2 pb-5 sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 mb-6">
                <p className="font-bold">Total Proyectos: {totalProjects}</p>
                <p className="font-bold">Total Recaudado: ${totalAmountRaised}</p>
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
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Dashboard;
