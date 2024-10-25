"use client";
import { useState, useEffect } from "react";
import Card from "../Card";
import ProjectsCard from "../cards/Projects";
import LoaderCard from "../loaders/LoaderCard";
import Button from "../Button";
import SearchBar from "./SearchBar";
import CategoryDropdown from "./CategoryDropdown";
import projectsService from "@/app/api/services/projectsService";

const categories = ["Todos", "Fintech", "Tecnología", "Salud", "Ambiental", "Otros"];

const Projects = () => {
    const [data, setData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projects = await projectsService.getProjects();
                
                const projectsWithPercentage = projects.map(project => {
                    const goalAmount = project.goal_amount || 1; 
                    const currentAmount = project.current_amount || 0; 
                    const percentage = Math.floor((currentAmount / goalAmount) * 100); 

                    return {
                        ...project,
                        percentage: percentage, 
                    };
                });

                setData(projectsWithPercentage);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);

    const filterByCategory = selectedCategory === "Todos" ? data 
        : data.filter(project => project.category === selectedCategory);
    
    const filterProjects = search.length < 3 ? filterByCategory 
        : filterByCategory.filter(project => project.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <h1 className="text-customH1 pb-6 font-bold text-center">Encuentra proyectos interesantes</h1>
            <SearchBar search={search} setSearch={setSearch} />
            <div className="flex flex-col pb-8 md:flex-row md:justify-around">
                <CategoryDropdown 
                    selectedCategory={selectedCategory} 
                    handleCategory={setSelectedCategory} 
                    categories={categories}
                />
                <div className="hidden md:flex w-full pt-8 space-x-1">
                    {
                        categories.map((category) => (
                            <Button
                                key={category}
                                className={`px-5 py-2 rounded-full font-bold transition duration-300 
                                ${selectedCategory === category ? "bg-black text-white" 
                                : "text-gray-500 hover:bg-gray-100 hover:text-black"}`}
                                onClick={() => setSelectedCategory(category)}>
                                {category}
                            </Button>
                        ))
                    }
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                gap-y-6 gap-x-3 w-full">
                {
                    loading ? (
                        Array.from({ length: 4 }).map((_, index) => <LoaderCard key={index} />)
                    ) : error ? (
                        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 text-center">
                            <p className="text-red-600">{error}</p> {/* utilizar modal */}
                        </div>
                    ) : filterProjects.length > 0 ? (
                            filterProjects.map((project, index) => (
                                <Card 
                                    key={project._id || index}
                                    imgSrc={project.image || "https://dummyimage.com/150x150/CCCCCC/FFFFFF&text=Imagen+no+disponible"}
                                    title={project.name}
                                    percentage={project.percentage}
                                    isProjectsPage={true}>
                                    <ProjectsCard project={project} />
                                </Card>
                            )
                        )
                    ) 
                    : (
                        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 
                            text-center">
                            <p className="text-gray-600">No se encontraron proyectos que 
                                coincidan con su búsqueda.</p>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Projects;
