const LoaderProjectDetail = () => {
    return (
        <>
            <div className="hidden md:block">
                <div className="bg-gray-200 animate-pulse rounded h-8 w-3/4 mb-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-3 lg:gap-10">
                <div className="md:col-span-2 lg:col-span-2">
                    <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg mb-4">
                        <div className="bg-gray-200 animate-pulse rounded h-full w-full"></div>
                    </div>
                    <div className="block md:hidden">
                        <div className="bg-gray-200 animate-pulse rounded h-8 w-3/4 mb-4"></div>
                    </div>
                    <div className="flex items-center space-x-4 md:pt-4">
                        <div className="bg-gray-200 animate-pulse rounded-full h-12 w-12"></div>
                        <div>
                            <div className="bg-gray-200 animate-pulse rounded h-4 w-24 mb-1"></div>
                            <div className="bg-gray-200 animate-pulse rounded h-4 w-16"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap pt-6 gap-1 md:gap-8">
                        <div className="bg-gray-200 animate-pulse rounded h-4 w-32 mb-2"></div>
                        <div className="bg-gray-200 animate-pulse rounded h-4 w-32 mb-2"></div>
                    </div>
                    <div className="bg-gray-200 animate-pulse rounded h-24 w-full mb-8"></div>
                    <div className="w-full md:w-1/3">
                        <div className="bg-gray-200 animate-pulse rounded h-10 w-full"></div>
                    </div>
                </div>
                <div className="hidden md:block md:col-span-1 lg:col-span-1">
                    <div className="bg-gray-200 animate-pulse rounded h-48 w-full"></div>
                </div>
                <div className="block md:hidden">
                    <div className="bg-gray-200 animate-pulse rounded h-24 w-full mb-4"></div>
                    <div className="bg-gray-200 animate-pulse rounded h-24 w-full mb-4"></div>
                    <div className="bg-gray-200 animate-pulse rounded h-10 w-full"></div>
                </div>
            </div>
        </>
    );
};

export default LoaderProjectDetail;
