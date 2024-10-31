const LoaderCard = ({ isDashboard = false }) => (
    <div className={`w-full mx-auto flex ${isDashboard? 'flex-col' : 'flex-row'} md:flex-col p-2 rounded-lg`}>
        <div className={`relative ${isDashboard? 'w-full h-32' : 'w-1/3 h-24'} md:w-full md:h-32`}>
            <div className="relative h-full w-full animate-pulse bg-gray-200 rounded-lg" />
        </div>
        <div className={`pt-3 md:pl-0 ${isDashboard? '' : 'pl-3'} flex-grow flex-shrink max-w-full`}>
            <p className="font-bold mb-3 h-4 bg-gray-200 animate-pulse rounded" />
            <p className="font-bold mb-3 h-4 bg-gray-200 animate-pulse rounded" />
            <p className="font-bold mb-3 h-4 bg-gray-200 animate-pulse rounded" />
        </div>
    </div>
);

export default LoaderCard;
