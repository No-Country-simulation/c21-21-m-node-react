import { useState, useEffect } from "react";
import projectsService from "@/app/api/services/projectsService";
import Card from "../Card";
import Projects from "../cards/Projects";
import Link from "next/link";
import Button from "../Button";
import LoaderCard from "../loaders/LoaderCard";

const LastProjects = () => {
    const [data, setData] = useState();
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

                setData(projectsWithPercentage.slice(0, 4));
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);

    console.log(data)

    return (
        <>
            <h1 className="text-customH1 pb-8 font-bold text-customBlack text-center">
                Últimos proyectos publicados</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                    gap-y-6 gap-x-3 w-full">
                {
                    loading ? (
                        Array.from({ length: 4 }).map((_, index) => <LoaderCard key={index} />)
                    ) : error ? (
                        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 text-center">
                            <p className="text-red-600">{error}</p> {/* utilizar modal */}
                        </div>
                    ) : data?.length > 0 && (
                            data.map((project) => (
                                <Card
                                    key={project._id}
                                    img={project?.img ? 
                                        `http://localhost:4000/uploads/${project.img}` 
                                        : "https://dummyimage.com/150x150/CCCCCC/FFFFFF&text=Imagen+no+disponible"}
                                    title={project.name}
                                    percentage={project.percentage}
                                    isProjectsPage={true}>
                                    <Projects project={project} />
                                </Card>
                            )
                        ) 
                    )
                }
            </div>
            <div className="text-center pt-10">
                <Link href="/projects" passHref className='pt-10 lg:pt-20'>
                    <Button className="bg-customGreen text-white font-bold px-8 py-3 
                        rounded-full hover:text-customGreen hover:bg-customGray 
                        hover:border-customGray">
                        Explorar más proyectos
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default LastProjects;
