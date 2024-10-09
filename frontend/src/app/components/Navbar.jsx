import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">CrowdStart</h1>
                <div>
                    <Link href="/"><a className="mr-4">Inicio</a></Link>
                    <Link href="/projects"><a className="mr-4">Projectos</a></Link>
                    <Link href="/profile"><a className="mr-4">Perfil</a></Link>
                    <Link href="/login"><a className="mr-4">Iniciar sesión</a></Link>
                    <Link href="/signup"><a>Registrate</a></Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
