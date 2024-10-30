const TableUsers = ({ data }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Nombre y Apellido</th>
                        <th className="py-3 px-6 text-left">Email</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                        {
                            data?.length > 0 ? (
                                data.map((user, index) => (
                                    <tr key={user.id || index} className="border-b border-gray-200">
                                        <td className="py-3 px-6">{user.name}</td>
                                        <td className="py-3 px-6">{user.email}</td>
                                    </tr>
                                ))
                            ) :  (
                                <tr>
                                    <td colSpan={admin ? 5 : 4} className="py-3 px-6 text-center">
                                        No hay datos para mostrar.
                                    </td>
                                </tr>
                            )
                        }   
                </tbody>
            </table>
        </div>
    );
};

export default TableUsers;
