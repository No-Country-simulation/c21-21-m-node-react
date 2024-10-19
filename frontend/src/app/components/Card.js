import Image from "next/image";

const Card = ({ imgSrc, title, percentage, children }) => {
    return (
        <div className="w-full mx-auto">
            <>
                <div className="relative w-full h-32">
                    <Image
                        src={imgSrc}
                        alt={title}
                        layout="fill"
                        objectFit="cover" 
                        className="rounded-lg"
                    />
                </div>
                <div className="p-2">
                    <p className="font-semibold text-gray-800 mb-4 pt-2 truncate 
                        overflow-hidden whitespace-nowrap text-ellipsis">{title}</p>
                    <div className="w-full bg-gray-200 rounded-full mb-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
                    </div>
                    {children}
                </div>
            </>
        </div>
    );
};

export default Card;
