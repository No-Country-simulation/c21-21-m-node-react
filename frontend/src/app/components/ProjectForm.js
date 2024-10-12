import React, { useState, useEffect } from 'react';
import Button from './Button';

const ProjectForm = ({ projectDetails }) => {
    const [editData, setEditData] = useState({
        title: '',
        description: '',
        goal: '',
        country: '',
        category: '',
        status: '',
        accountHolder: '',
        accountNumber: '',
        bankName: '',
        swiftCode: '',
    });

    useEffect(() => {
        if (projectDetails) {
            setEditData({
                title: projectDetails.projectTitle,
                description: projectDetails.description,
                goal: projectDetails.goal,
                country: projectDetails.country,
                category: projectDetails.category,
                status: projectDetails.status,
                accountHolder: projectDetails.accountHolder,
                accountNumber: projectDetails.accountNumber,
                bankName: projectDetails.bankName,
                swiftCode: projectDetails.swiftCode,
            });
        }
    }, [projectDetails]);

    return (
        <form className="space-y-6 px-1">
            <div>
                <label className="block font-semibold mb-2">Título</label>
                <input
                    type="text"
                    name="title"
                    value={editData.title}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Introduce el título"
                    required
                />
            </div>
            <div>
                <label className="block font-semibold mb-2">Descripción</label>
                <textarea
                    name="description"
                    value={editData.description}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    rows="3"
                    placeholder="Describe el proyecto"
                    required
                ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="goal" className="block font-semibold mb-2">Meta</label>
                    <div className="relative">
                        <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                        <input
                            type="number"
                            name="goal"
                            value={editData.goal}
                            id="goal"
                            className="w-full border border-gray-300 rounded-md p-2 pl-8 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Introduce la meta"
                            min="0"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label className="block font-semibold mb-2">País</label>
                    <input
                        type="text"
                        name="country"
                        value={editData.country}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Introduce el país"
                        required
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block font-semibold mb-2">Categoría</label>
                    <select
                        name="category"
                        value={editData.category}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        defaultValue=""
                        required
                    >
                        <option value="" disabled>Seleccionar</option>
                        <option value="health">Salud</option>
                        <option value="tech">Tecnología</option>
                        <option value="animal">Animal</option>
                        <option value="education">Educación</option>
                        <option value="other">Otro</option>
                    </select>
                </div>
                <div>
                    <label className="block font-semibold mb-2">Estatus</label>
                    <select
                        name="status"
                        value={editData.status}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        defaultValue=""
                        required
                    >
                        <option value="" disabled>Seleccionar</option>
                        <option value="active">Activo</option>
                        <option value="inactive">Inactivo</option>
                        <option value="finalizado">Finalizado</option>
                    </select>
                </div>
            </div>
            <div>
                <label className="block font-semibold mb-2">Imagen</label>
                <input
                    type="file"
                    name="image"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    accept="image/*"
                />
            </div>

           {/* Sección para datos bancarios */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-1">Configurar Transferencia</h3>
                <p className="text-sm text-gray-600 mb-4">
                    Al actualizar el estatus de la campaña a "Finalizada", nos pondremos 
                    en contacto contigo para verificar estos datos y poder transferir el monto recaudado.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-semibold mb-2">Titular de la Cuenta</label>
                        <input
                            type="text"
                            name="accountHolder"
                            value={editData.accountHolder}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Nombre del titular de la cuenta"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-2">Número de Cuenta (ej: IBAN o Local)</label>
                        <input
                            type="text"
                            name="accountNumber"
                            value={editData.accountNumber}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Ej: DE89370400440532013000"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-2">Banco</label>
                        <input
                            type="text"
                            name="bankName"
                            value={editData.bankName}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Introduce el nombre del banco"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-2">Código SWIFT</label>
                        <input
                            type="text"
                            name="swiftCode"
                            value={editData.swiftCode}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Introduce el código SWIFT"
                        />
                    </div>
                </div>
            </div>
            <Button
                type="submit"
                className="w-full sm:w-auto bg-blue-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600 transition duration-200 mt-6"
            >
                {
                    projectDetails ? 'Editar campaña' : 'Crear campaña'
                }
            </Button>
        </form>
    );
};

export default ProjectForm;
