"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Card from "../Card";
import ProjectsCard from "../cards/Projects";
import LoaderCard from "../loaders/LoaderCard";
import Button from "../Button";
import SearchBar from "./SearchBar";
import PaginationComponent from "../Pagination";
import CategoryDropdown from "./CategoryDropdown";
import projectsService from "@/app/api/services/projectsService";

const categoryMap = {
    "Todos": null,
    "Fintech": "Fintech", // cambiar
    "Tecnología": "tech",
    "Salud": "health",
    "Educación": "education",
    "e-Commerce": "ecommerce",
    "Otros": "Others" // cambiar
};

const categories = Object.keys(categoryMap);

const Projects = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const [data, setData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projects = await projectsService.getProjects();

                const activeProjects = projects.filter(project => project.status === "active");
                
                const projectsWithPercentage = activeProjects.map(project => {
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

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const filterByCategory = selectedCategory === "Todos" 
        ? data 
        : data.filter(project => project.category === categoryMap[selectedCategory]);

    const filterProjects = search.length < 3 
        ? filterByCategory 
        : filterByCategory.filter(project => project.name.toLowerCase().includes(search.toLowerCase()));

    const pageCount = Math.ceil(filterProjects.length / itemsPerPage);
    const currentItems = filterProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
                    ) : currentItems?.length > 0 ? (
                            currentItems.map((project, index) => (
                                <Link key={project._id} href={`/project-detail/${project._id}`}>
                                    <Card 
                                        key={project._id || index}
                                        img={project?.img || "https://dummyimage.com/150x150/CCCCCC/FFFFFF&text=Imagen+no+disponible"}
                                        title={project.name}
                                        percentage={project.percentage}
                                        isProjectsPage={true}>
                                        <ProjectsCard project={project} />
                                    </Card>
                                </Link>
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
            <PaginationComponent
                count={pageCount}
                page={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default Projects;
