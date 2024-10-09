const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">CrowdStart</h1>
                <div>
                    <a href="/" className="mr-4">Inicio</a>
                    <a href="/projects"className="mr-4">Projectos</a>
                    <a href="/profile" className="mr-4">Perfil</a>
                    <a href="/login" className="mr-4">Iniciar sesión</a>
                    <a href="/singup">Registrate</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
