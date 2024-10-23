import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import DateField from './DateField';

const ProjectDetailsSection = ({ onChange, data }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    label="Título"
                    name="name"
                    value={data.name}
                    onChange={onChange}
                    required
                    placeholder="Introduce el título"
                />
                <div>
                    <label className="block font-semibold text-sm mb-2">Imagen</label>
                    <input
                        type="file"
                        name="img"
                        onChange={onChange}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none 
                        focus:ring-2 focus:ring-blue-400"
                        accept="image/*"
                    />
                </div>
            </div>
            <div className="py-4">
                <Textarea
                    label="Descripción"
                    name="description"
                    value={data.description}
                    onChange={onChange}
                    required
                    placeholder="Describe el proyecto"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="goal_amount" className="block font-semibold text-sm mb-2">Meta *</label>
                    <div className="relative">
                        <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                        <input
                            type="text"
                            name="goal_amount"
                            value={data.goal_amount}
                            onChange={onChange}
                            id="goal_amount"
                            className="w-full border border-gray-300 rounded-md p-2 pl-8 
                            focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Introduce la meta"
                            min="0"
                            required
                        />
                    </div>
                </div>
                <DateField
                    label="Fecha de límite"
                    name="deadline"
                    value={data.deadline}
                    onChange={onChange}
                />
     
                <Select
                    label="Categoría"
                    name="category"
                    value={data.category}
                    onChange={onChange}
                    options={[
                        { value: "fintech", label: "Fintech" },
                        { value: "health", label: "Salud" },
                        { value: "tech", label: "Tecnología" },
                        { value: "education", label: "Educación" },
                        { value: "e-Commerce", label: "E-Commerce" },
                        { value: "other", label: "Otro" },
                    ]}
                    required
                />
                <Select
                    label="Estatus"
                    name="status"
                    value={data.status} 
                    options={[
                        { value: "active", label: "Activo" },
                        { value: "inactive", label: "Inactivo" },
                        { value: "completed", label: "Finalizado" },
                    ]}
                    required={false}
                    disabled
                />
            </div>
        </div>
    );
};

export default ProjectDetailsSection;
