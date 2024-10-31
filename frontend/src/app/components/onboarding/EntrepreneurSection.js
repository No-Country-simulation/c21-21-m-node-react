import Steps from "./Steps";

const steps = [
    { id: 1, title: 'Registro', desc: 'Crea tu cuenta para empezar a usar la app' },
    { id: 2, title: 'Dashboard', desc: 'Accede a tu panel principal con todos tus proyectos' },
    { id: 3, title: 'Proyectos', desc: 'Crea tus proyectos y explora nuevas funcionalidades' },
    { id: 4, title: 'Inversores', desc: 'Accede a la información de los inversores' }
]

const EntrepreneurSection = () => {
    return (
        <>
            <h1 className="text-customH1 pb-2 font-bold text-customBlack text-center md:text-start">
                ¿Eres Emprendedor?</h1>
            <p className="text-gray-600 text-center md:text-start pb-10 
                lg:w-1/2">Gestiona tus proyectos, accede a información 
                de inversores y optimiza tu camino emprendedor</p>
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {
                    steps.map(step => (
                        <Steps key={step.id} id={step.id} title={step.title} desc={step.desc} />
                    ))
                }
            </ul>
        </>
    );
};

export default EntrepreneurSection;
