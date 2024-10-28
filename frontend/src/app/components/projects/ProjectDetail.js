"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/Button";
import ProjectInfo from "../cards/ProjectInfo";
import InvestorList from "./InvestorList";
import LoaderProjectDetail from "../loaders/LoaderProjectDetail";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import projectsService from "@/app/api/services/projectsService";

const ProjectDetail = ({ id }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [project, setProject] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const project = await projectsService.getProjectById(id);
                setProject(project);
            } catch (error) {
                console.error(error); 
            } finally {
                setIsLoading(false);
            }
            
        };
    
        fetchData();
    }, [id]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES'); 
    };

    const percentage = Math.floor((project.current_amount / project.goal_amount) * 100); 

    const queryParams = new URLSearchParams({
        title: project.name,
        img: project.img ? `http://localhost:4000/uploads/${project.img}` : "",
        current_amount: project.current_amount,
        percentage: percentage
    }).toString();

    return (
        <>
            {
                isLoading ? (
                    <LoaderProjectDetail />
                ) : (
                    <>
                        <div className="hidden md:block">
                            <h1 className="text-customH1 pb-2 font-bold">{project.name}</h1>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-3 lg:gap-10">
                            <div className="md:col-span-2 lg:col-span-2">
                                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src={project?.img ? 
                                            `http://localhost:4000/uploads/${project.img}` 
                                            : "https://dummyimage.com/150x150/CCCCCC/FFFFFF&text=Imagen+no+disponible"}
                                        alt={project?.name ? project.name : "imagen proyecto"}
                                        fill
                                        priority 
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="block md:hidden">
                                    <h1 className="text-customH1 py-3 font-bold">{project.name}</h1>
                                    <ProjectInfo project={project} percentage={percentage} />
                                </div>
                                <div className="flex items-center space-x-4 md:pt-4">
                                    <FontAwesomeIcon icon={faUserCircle} className="fa-3x" />
                                    <div>
                                        <h2 className="text-sm font-semibold">Emprendedor</h2>
                                        <p className="text-sm">Nombre</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap pt-6 gap-1 md:gap-8">
                                    <div className="flex items-center text-sm">
                                        <p><strong>Categoría:</strong> {project.category}</p>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <p><strong>Fecha de creación:</strong> {formatDate(project.creation_date)}</p>
                                    </div>
                                </div>
                                <h2 className="text-md font-semibold pt-6">Descripción</h2> 
                                <p className="text-md pt-2 pb-8">{project.description}</p>
                                <Link key={project._id} href={`/investment-payment/${project._id}?${queryParams}`}>
                                    <Button
                                        className="w-full md:w-1/3 text-md font-semibold leading-6 bg-blue-500 
                                        text-white py-2 rounded-full shadow-lg hover:bg-blue-600 transition 
                                        duration-300 transform hover:scale-105">
                                        Invertir ahora
                                    </Button>
                                </Link>
                            </div>
                            <div className="hidden md:block md:col-span-1 lg:col-span-1">
                                <ProjectInfo project={project} percentage={percentage} />
                            </div>
                            <div className="block md:hidden">
                                <InvestorList project={project.backers} />
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
};

export default ProjectDetail;
