import { useState } from 'react';
import Button from '../Button';
import ProjectDetailsSection from './ProjectDetailsSection';
import BankSection from './BankSection';

const ProjectForm = () => {
    const [data, setData] = useState({
        title: "",
        description: "",
        endDate: "",
        goal: "",
        country: "",
        category: "",
        status: 'active',
        image: null,
        accountHolder: "",
        accountNumber: "",
        bankName: "",
        swiftCode: ""
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        setData(prevData => ({
            ...prevData,
            [name]: type === 'file' 
                ? files[0] 
                : (name === "goal" ? (value.replace(/[^\d]/g, '') 
                ? (parseInt(value.replace(/[^\d]/g, ''), 10) / 100).toFixed(2) 
                : "") : value)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }

        console.log("Contenido de FormData antes de enviar:");
        for (const [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="px-1">
            <p className="text-sm text-red-600 mb-4">
                Todos los campos con (*) son obligatorios.
            </p>
            <ProjectDetailsSection onChange={handleChange} data={data} />
            <BankSection onChange={handleChange} data={data} />
            <Button
                type="submit"
                className="w-full sm:w-auto bg-blue-500 text-white font-semibold px-6 
                py-3 rounded-md hover:bg-blue-600 transition duration-200 mt-6">
                Crear campaña
            </Button>
        </form>
    );
};

export default ProjectForm;
