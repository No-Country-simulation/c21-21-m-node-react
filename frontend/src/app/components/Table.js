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
                    {investors.map((investor, index) => (
                        <tr key={index} className="border-b border-gray-200">
                            <td className="py-3 px-6">{investor.name}</td>
                            <td className="py-3 px-6">{investor.email}</td>
                            <td className="py-3 px-6">${investor.totalInvestment}</td>
                            <td className="py-3 px-6">{investor.investmentDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
