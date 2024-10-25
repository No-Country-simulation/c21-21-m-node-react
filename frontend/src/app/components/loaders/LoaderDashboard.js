import LoaderCard from "./LoaderCard";
import LoaderAuth from "./LoaderAuth";

const LoaderDashboard = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-start lg:items-center 
                mb-4 space-y-4 md:space-y-0">
                <h1 className="bg-gray-200 animate-pulse rounded h-8 w-48"></h1>
                <div className="w-full md:w-auto">
                    <LoaderAuth />
                </div>
            </div>
            <div className="flex flex-col pt-2 pb-5 sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 mb-6">
                <p className="bg-gray-200 animate-pulse rounded h-4 w-32"></p>
                <p className="bg-gray-200 animate-pulse rounded h-4 w-32"></p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                gap-y-8 w-full gap-x-6">
                { Array.from({ length: 4 }).map((_, index) => <LoaderCard key={index} />) } 
            </div>
        </>
    );
};

export default LoaderDashboard;
