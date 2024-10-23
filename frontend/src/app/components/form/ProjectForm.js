import { useState } from 'react';
import LoaderButton from '../loaders/LoaderButton';
import ProjectDetailsSection from './ProjectDetailsSection';
import BankSection from './BankSection';
import axios from 'axios';

const ProjectForm = ({ createSubmitResponse }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        owner: "6711aa2ed6889bff124f6ffc", 
        name: "",
        description: "",
        category: "",
        img: null,
        goal_amount: "",
        deadline: "",
        status: "active",
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

        try {
            const response = await axios.post('/api/create-project', formData);
            createSubmitResponse('Buen trabajo!', response.data.message); 
        } catch (error) {
            console.error('Error:', error); 
            createSubmitResponse("Error", error.response.data.errMessage);
        } finally {
            setIsLoading(false); 
        }
    };

    return (
        <form onSubmit={handleSubmit} className="px-1">
            <p className="text-sm text-red-600 mb-4">
                Todos los campos con (*) son obligatorios.
            </p>
            <ProjectDetailsSection onChange={handleChange} data={data} />
            <BankSection onChange={handleBankDetailsChange} data={data} />
            <LoaderButton
                isLoading={isLoading}
                type="submit"
                className="w-full sm:w-auto bg-blue-500 text-white font-semibold px-6 
                py-3 rounded-md hover:bg-blue-600 transition duration-200 mt-6">
                Crear campaña
            </LoaderButton>
        </form>
    );
};

export default ProjectForm;
