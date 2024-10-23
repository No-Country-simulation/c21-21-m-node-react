import Image from "next/image";
import ImageP from "../../../../public/banner.webp";

const Header = () => {
  return (
    <div className="flex flex-col items-center md:flex-row">
      <Image
        src={ImageP}
        alt="imagen"
        className="hidden md:block w-48 h-auto mr-4 rounded-md"
        width={200}
        height={200}
      />
      <div className="flex-1 text-center md:text-left">
        <p>Elija el monto de su inversión para</p>
        <p className="text-lg font-bold text-gray-800 pb-2">
          Título Proyecto 1
        </p>
        {/* recordatorio: crear componente */}
        <div className="relative pt-1">
          <div className="flex h-2 mb-2 bg-gray-300 rounded">
            <div className="bg-green-500 h-full" style={{ width: `40%` }}></div>
          </div>
        </div>
        <p className="text-sm font-bold text-gray-800 pb-2">
          $20.000 recaudados
        </p>
      </div>
    </div>
  );
};

export default Header;
