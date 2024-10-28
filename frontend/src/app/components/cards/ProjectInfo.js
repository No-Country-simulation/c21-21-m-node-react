"use client"
import Button from '../Button';
import InvestorList from '../projects/InvestorList';

const ProjectInfo = ({ project, percentage }) => {
    const calculateDaysLeft = (deadline) => {
        const deadlineDate = new Date(deadline);
        const currentDate = new Date();
        const diffInDays = Math.ceil((deadlineDate - currentDate) / (1000 * 60 * 60 * 24));
        
        return diffInDays;
    };

    return (
        <div className="pb-8">
            <div className="bg-white shadow-lg rounded-lg border border-gray-200 px-3 py-4 md:py-5 lg:p-8">
                <h1 className="text-xl font-bold">${project.current_amount} USD recaudados</h1>
                <p className="text-md text-gray-500 pt-1 pb-3 lg:text-sm lg:pb-7">
                    ${project.goal_amount} meta - {project.backers ? project.backers.length : 0} inversores
                </p>
                <div className="w-full bg-gray-200 rounded-full mb-2">
                    <div className="bg-customGreen h-2 rounded-full" style={{ width: percentage }}></div>
                </div>
                <p className="text-sm text-gray-500 pb-5 lg:pb-8">{percentage}% completado</p>
                <Button className="w-full text-md font-semibold leading-6 bg-blue-500 text-white 
                    py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 
                    transform hover:scale-105">
                    Invertir ahora
                </Button>
                <p className="text-md text-gray-500 text-center pt-2 md:pb-8">
                    {calculateDaysLeft(project.deadline)} días restantes</p>
                <div className="hidden md:block">
                    <hr/>
                    <InvestorList project={project.backers}/>
                </div>
            </div>
        </div>
    );
};

export default ProjectInfo;
