import Image from "next/image";

const Card = ({ imgSrc, title, percentage, children, isProjectsPage = false }) => {
    return (
        <div className={`w-full mx-auto ${isProjectsPage ? 
            'flex flex-row md:flex-col hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition duration-300' 
            : ''}`}>
            <div className={`relative ${isProjectsPage ? 
                'w-1/3 h-24 md:w-full md:h-32 flex-shrink-0 overflow-hidden rounded-lg' : 'w-full h-32'}`}>
                <div className={`relative h-full w-full transition-transform duration-300
                    ${isProjectsPage ? 'transform hover:scale-110' : ''}`}>
                    <Image
                        src={imgSrc}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className={'rounded-lg'}
                      
                    />
                </div>
            </div>
            <div className={`p-3 ${isProjectsPage ? 
                'flex-grow flex-shrink max-w-full overflow-hidden pr-0 md:pr-3' : ''}`}>
                <p className="font-bold mb-3 truncate overflow-hidden whitespace-nowrap 
                    text-ellipsis">{title}</p>
                <div className="w-full bg-gray-200 rounded-full mb-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Card;
