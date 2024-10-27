"use client"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faEye } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import PaginationComponent from './Pagination';

const Table = ({ data, admin = false }) => {
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

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                        {
                            titles.map((title, index) => (
                                <th key={index} className="py-3 px-6 text-left">{title}</th>)
                            )
                        }
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {
                        currentItems?.length > 0 ? (
                            currentItems.map((obj, index) => (
                                <tr key={obj._id || index} className="border-b border-gray-200">
                                    {
                                        admin ? (
                                            <>
                                                <td className="py-3 px-6">Maria</td>
                                                <td className="py-3 px-6">{obj.name}</td>
                                                <td className="py-3 px-6">{obj.status}</td>
                                                <td className="py-3 px-6">{obj.investmentDate}</td>
                                                <td className="py-3 px-6">
                                                    <div className="flex space-x-2">
                                                        <Button
                                                            className="w-8 h-8 rounded-full bg-green-500 text-white flex 
                                                            items-center justify-center hover:bg-green-600 transition 
                                                            duration-200"
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
                                                        <Button
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
        </div>
    );
};

export default Table;
