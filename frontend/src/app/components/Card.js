import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';


const Card = ({ img, title, percentage, children, isProjectsPage = false, status }) => {
    const isRejected = status === 'rejected'; 

    return (
        <div className={`relative w-full mx-auto ${isProjectsPage ? 
            'flex flex-row md:flex-col hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition duration-300' 
            : ''}`}>
            <div className={`relative ${isProjectsPage ? 
                'w-1/3 h-24 md:w-full md:h-32 flex-shrink-0 overflow-hidden rounded-lg' : 'w-full h-32'}`}>
                <div className={`relative h-full w-full transition-transform duration-300
                    ${isProjectsPage ? 'transform hover:scale-110' : ''}`}>
                    <Image
                        src={img}
                        alt={title}
                        fill
                        className={'rounded-lg'}
                        sizes={'(max-width: 640px) 100vw, (max-width: 768px) 50vw, (min-width: 769px) 33vw'} 
                        priority 
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>
            <div className={`p-3 ${isProjectsPage ? 
                'flex-grow flex-shrink max-w-full overflow-hidden pr-0 md:pr-3' : ''}`}>
                <p className="font-bold mb-3 truncate overflow-hidden whitespace-nowrap 
                    text-ellipsis">{title}</p>
                <div className="w-full bg-gray-200 rounded-full mb-2">
                    <div className="bg-customGreen h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
                </div>
                {children}
            </div>
            {
                isRejected && ( 
                    <div className="absolute inset-0 flex items-center justify-center 
                    bg-black bg-opacity-90 text-white rounded-lg">
                        <p>Rechazado</p>
                        <FontAwesomeIcon icon={faTimesCircle} size="lg" className="ml-3 font-customWhite" />
                    </div>
                )
            }
        </div>
    );
};

export default Card;
