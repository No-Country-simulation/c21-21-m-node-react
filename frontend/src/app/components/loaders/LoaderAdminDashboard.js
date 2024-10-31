const LoaderAdminDashboard = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-start 
                mb-4 space-y-4 md:space-y-0">
                <h1 className="bg-gray-200 animate-pulse rounded h-8 w-48"></h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                gap-y-8 w-full gap-x-6">
                {Array.from({ length: 2 }).map((_, index) => (
                    <div key={index} className="bg-gray-200 animate-pulse rounded h-24 w-full"></div>
                ))}
            </div>
            <div className="flex w-full space-x-4 mb-4 md:mb-0 pt-8 md:w-1/2 lg:w-1/3 md:pt-10">
                <div className="bg-gray-200 animate-pulse rounded h-10 w-full"></div>
                <div className="bg-gray-200 animate-pulse rounded h-10 w-full"></div>
            </div>
            <div className="flex flex-col pt-8 md:pt-6 md:pb-6 md:flex-row md:justify-around w-full">
                <div className="bg-gray-200 animate-pulse rounded h-10 w-32"></div>
            </div>
            <div className="w-full pt-8">
                <div className="bg-gray-200 animate-pulse rounded h-48 w-full"></div>
            </div>
        </>
    );
};

export default LoaderAdminDashboard;
