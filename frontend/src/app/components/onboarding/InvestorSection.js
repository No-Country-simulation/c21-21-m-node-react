import Steps from "./Steps";

const steps = [
    { id: 1, title: 'Buscar', desc: 'Explora y encuentra proyectos que se alineen con tus intereses.' },
    { id: 2, title: 'Invertir', desc: 'Realiza inversiones en iniciativas prometedoras.' },
    { id: 3, title: 'Emprendedores', desc: 'Consulta los datos del emprendedor detrás del proyecto.' },
    { id: 4, title: 'Detalles', desc: 'Revisa los detalles del proyecto en el que has invertido.' },
    { id: 5, title: 'Progresos', desc: 'Monitorea el progreso de la recaudación de fondos.' }
];

const InvestorSection = () => {
    return (
        <>
            <h1 className="text-customH1 pb-2 font-bold text-customBlack text-center md:text-start
                md:ml-8">
                ¿Eres Inversor?</h1>
            <p className="text-gray-600 text-center md:text-start pb-10 
                md:ml-8">Explora y conecta con proyectos que se alinean con tus intereses</p>
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 md:ml-8">
                {
                    steps.map(step => (
                        <Steps key={step.id} id={step.id} title={step.title} desc={step.desc} />
                    ))
                }
            </ul>   
        </>
    );
};

export default InvestorSection;
