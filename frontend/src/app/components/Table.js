"use client"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faEye } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import PaginationComponent from './Pagination';
import ActionConfirmation from './ActionConfirmation';
import projectsService from '../api/services/projectsService';
import Toast from './Toast';
import useToast from '../hooks/useToast';

const Table = ({ data, openModal, closeModal, admin = false, updateProjectStatus }) => {
    const { toast, showToast, setToast } = useToast();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const adminTitles = ["Nombre y Apellido", "Título", "Estatus", "Fecha de creación", "Acciones"];
    const userTitles = ["Nombre y Apellido", "Email", "Total invertido", "Fecha de inversión"];

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const pageCount = Math.ceil(data.length / itemsPerPage);
    const currentItems = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const titles = admin ? adminTitles : userTitles;

    const handleAction = (title, content, onConfirmAction) => {
        openModal(
            title,
            <ActionConfirmation
                text={content}
                action="Confirmar"
                bgColor="bg-green-500 hover:bg-green-600"
                onConfirm={onConfirmAction}
            />,
            "w-full md:max-w-sm",
            "",
            "mt-24",
        );
    };

    const handleApprove = async (id) => {
        try {
            const updatedProject = await projectsService.updatedProject(id, {
                status: 'active',
            });
            
            updatedProject.project.status = 'Activo';
            updateProjectStatus(updatedProject.project);
            closeModal();
            showToast('Proyecto aprobado con éxito!', 'success');
        } catch (error) {
            showToast('Error al aprobar el proyecto', 'error');
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className={`bg-gray-200 text-gray-600 ${admin ? '' : 'text-sm'} leading-normal`}>
                        {
                            titles.map((title, index) => (
                                <th key={index} className="py-3 px-6 text-left">{title}</th>)
                            )
                        }
                    </tr>
                </thead>
                <tbody className={`text-gray-600  ${admin ? '' : 'text-sm'} font-light`}>
                    {
                        currentItems?.length > 0 ? (
                            currentItems.map((obj, index) => (
                                <tr key={obj._id || index} className="border-b border-gray-200">
                                    {
                                        admin ? (
                                            <>
                                                <td className="py-3 px-6">{obj.owner.name}</td>
                                                <td className="py-3 px-6">{obj.name}</td>
                                                <td className="py-3 px-6">{obj.status}</td>
                                                <td className="py-3 px-6">{obj.creation_date}</td>
                                                <td className="py-3 px-6">
                                                    <div className="flex space-x-2">
                                                        {
                                                            obj.status === 'Pendiente' && (
                                                                <>
                                                                    <Button
                                                                        onClick={() =>
                                                                            handleAction(
                                                                                `Aprobar campaña`,
                                                                                <>Estás seguro de aprobar la campaña <strong>{obj.name}</strong>?</>,
                                                                                () => handleApprove(obj._id)
                                                                            )
                                                                        }
                                                                        className="w-8 h-8 rounded-full bg-green-500 text-white flex 
                                                                        items-center justify-center hover:bg-green-600 transition duration-200"
                                                                        title="Aprobar">
                                                                        <FontAwesomeIcon icon={faCheck} className="text-sm" />
                                                                    </Button>
                                                                    <Button
                                                                        className="w-8 h-8 rounded-full bg-red-500 text-white flex 
                                                                        items-center justify-center hover:bg-red-600 transition 
                                                                        duration-200"
                                                                        title="Rechazar">
                                                                        <FontAwesomeIcon icon={faTimes} className="text-sm" />
                                                                    </Button>
                                                                </>
                                                            )
                                                        }
                                                        <Button
                                                            onClick={() => window.open(`/project-detail/${obj._id}`, '_blank')}
                                                            className="w-8 h-8 rounded-full bg-blue-500 text-white flex 
                                                            items-center justify-center hover:bg-blue-600 transition 
                                                            duration-200"
                                                            title="Ver">
                                                            <FontAwesomeIcon icon={faEye} className="text-sm" />
                                                        </Button>
                                                    </div>
                                                </td>
                                            </>
                                        ) : (
                                            <>
                                                <td className="py-3 px-6">{obj.firstName} {obj.lastName}</td>
                                                <td className="py-3 px-6">{obj.email}</td>
                                                <td className="py-3 px-6">${obj.totalInvested}</td>
                                                <td className="py-3 px-6">{obj.investmentDate}</td>
                                            </>
                                        )
                                    }
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={admin ? 5 : 4} className="py-3 px-6 text-center">
                                    No hay datos para mostrar.
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            {
                admin && (
                    <PaginationComponent
                        count={pageCount}
                        page={currentPage}
                        onPageChange={handlePageChange}
                    />
                )
            }
            {
                toast.isVisible && (
                    <Toast 
                        message={toast.message} 
                        type={toast.type} 
                        onClose={() => setToast({ ...toast, isVisible: false })}
                    />
                )
            }
        </div>
    );
};

export default Table;
