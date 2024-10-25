const Table = ({ investors }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Nombre y Apellido</th>
                        <th className="py-3 px-6 text-left">Email</th>
                        <th className="py-3 px-6 text-left">Total invertido</th>
                        <th className="py-3 px-6 text-left">Fecha de inversión</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {
                        investors?.length > 0 ? (
                            investors.map((investor, index) => (
                                <tr key={investor._id || index} className="border-b border-gray-200">
                                    <td className="py-3 px-6">{investor.firstName} {investor.lastName}</td>
                                    <td className="py-3 px-6">{investor.email}</td>
                                    <td className="py-3 px-6">${investor.totalInvested}</td>
                                    <td className="py-3 px-6">{investor.investmentDate}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="py-3 px-6 text-center">No hay 
                                    inversionistas para mostrar.</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;
