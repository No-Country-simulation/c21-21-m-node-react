import { useState, useEffect } from 'react';
import LoaderButton from '../loaders/LoaderButton';
import ProjectDetailsSection from './ProjectDetailsSection';
import BankSection from './BankSection';
import { useUserContext } from '@/app/contexts/UserContext';
import Cookies from 'js-cookie';
import axios from 'axios';
import projectsService from '@/app/api/services/projectsService';

const ProjectForm = ({ createSubmitResponse, action = false, project }) => {
    const { user, updateUser } = useUserContext();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        owner: user?.id, 
        name: "",
        description: "",
        category: "",
        img: null,
        goal_amount: "",
        deadline: "",
        status: "pending",
        bankDetails: {
            accountHolder: "",
            accountNumber: "",
            bankName: "",
            swiftCode: "",
        }
    });

    const handleGoalAmount = (value) => {
        const transform = value.replace(/[^\d]/g, '');
        return transform ? (parseInt(transform, 10) / 100).toFixed(2) : "";
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        setData(prevData => ({
            ...prevData,
            [name]: type === 'file' 
                ? files[0] 
                : (name === "goal_amount" ? handleGoalAmount(value) : value)
        }));
    };

    const handleBankDetailsChange = (e) => {
        const { name, value } = e.target;

        setData(prevData => ({
            ...prevData,
            bankDetails: {
                ...prevData.bankDetails,
                [name]: value,
            }
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }

        const accessToken = Cookies.get('token'); 
        console.log(accessToken)

        try {
            const response = await axios.post('/api/create-project', formData, {
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                },
            });
            createSubmitResponse('Creado', response.data.message); 
            updateUser({
                ...user, 
                projects: [...user.projects, response.data.project],
            });
        } catch (error) {
            console.log(error)
            createSubmitResponse("Error", error.response.data.errMessage);
        } finally {
            setIsLoading(false); 
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toISOString().split('T')[0]; 
    };
    
    useEffect(() => {
        if (action === 'edit' && project) {
            setData(prevData => ({
                ...prevData,
                name: project.name || "",
                description: project.description || "",
                category: project.category || "",
                img: project.img || "",
                goal_amount: project.goal_amount || "",
                deadline: project.deadline ? formatDate(project.deadline) : "",
                status: project.status || "",
                /*bankDetails: {
                    accountHolder: project.bankDetails.accountHolder,
                    accountNumber: project.bankDetails.accountNumber,
                    bankName: project.bankDetails.bankName,
                    swiftCode: project.bankDetails.swiftCode,
                }*/
            }));
        }

    }, [action, project]);

    const isStatusEditable = action === 'edit' && data.status !== 'pending';

    const handleEdit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }
    
        try {
            const response = await projectsService.updatedProject(project?._id, formData);
            const updatedProject = response.data.project; 

            const updatedProjects = user.projects.map(proj => 
                proj._id === updatedProject._id ? updatedProject : proj
            );
    
            createSubmitResponse('Editado', response.data.message);
            updateUser({ ...user, projects: updatedProjects });
           
        } catch (error) {
            createSubmitResponse("Error", error.response.data.errMessage);  
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={action !== 'edit' ? handleSubmit : handleEdit} className="px-1">
            {
                action !== 'edit' ? (
                    <p className="text-sm text-red-600 mb-4">
                        Todos los campos con (*) son obligatorios.
                    </p>
                ) : null
            }
            <ProjectDetailsSection onChange={handleChange} data={data} isStatusEditable={isStatusEditable} />
            <BankSection onChange={handleBankDetailsChange} data={data} />
            <LoaderButton
                isLoading={isLoading}
                type="submit"
                className="w-full sm:w-auto bg-blue-500 text-white font-semibold px-6 
                py-3 rounded-md hover:bg-blue-600 transition duration-200 mt-6">
                { action !== 'edit' ? 'Crear campaña' : 'Actualizar campaña'}
            </LoaderButton>
        </form>
    );
};

export default ProjectForm;
