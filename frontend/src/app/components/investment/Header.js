import Image from "next/image";

const Header = ({ id, queryParams }) => {
    return (
        <div className="flex flex-col items-center md:flex-row">
            <Image
                src={queryParams.img || "https://dummyimage.com/150x150/CCCCCC/FFFFFF&text=Imagen+no+disponible"}
                alt={queryParams.title || 'imagen proyecto'}
                className="hidden md:block w-48 h-32 object-cover mr-4 rounded-md" 
                width={200}
                height={150} 
            />
            <div className="flex-1 text-center md:text-left">
                <p>Elija el monto de su inversión para</p>
                <p className="text-lg font-bold text-gray-800 pb-2">{queryParams.title}</p>
                {/* recordatorio: crear componente */}
                <div className="relative pt-1">
                    <div className="w-full bg-gray-200 rounded-full mb-2">
                        <div className="bg-customGreen h-2 rounded-full" style={{ width: parseFloat(queryParams.percentage) }}></div>
                    </div> 
                </div>
                <p className="text-sm font-bold text-gray-800 pb-2">${queryParams.current_amount} recaudado</p>
            </div>
        </div>
    );
};

export default Header;
