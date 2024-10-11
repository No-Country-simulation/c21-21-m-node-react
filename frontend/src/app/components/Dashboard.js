import Button from "./Button";
import Card from "./Card";

const Dashboard = () => {
    return (
        <div className="flex flex-col px-4 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start lg:items-center 
                mb-4 space-y-4 md:space-y-0">
                <h1 className="text-3xl lg:text-4xl pb-2 lg:pb-0 font-bold">Tus Proyectos</h1>
                <div className="w-full md:w-auto">
                    <Button className="w-full bg-customGreen text-white font-bold px-6 py-3 rounded-full">
                        Crear campaña
                    </Button>
                </div>
            </div>
            <div className="flex flex-col pt-2 pb-5 sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 mb-6">
                <p className="font-bold">Total Proyectos: 20</p>
                <p className="font-bold">Total Recaudado: $20.000</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 
                gap-y-8 w-full"> 
                <Card 
                    imgSrc="https://via.placeholder.com/300"
                    title="Proyecto 1"
                    percentage={75}
                    description="$500 recaudados"
                />
                <Card 
                    imgSrc="https://via.placeholder.com/300"
                    title="Proyecto 2"
                    percentage={60}
                    description="$300 recaudados"
                />
                <Card 
                    imgSrc="https://via.placeholder.com/300"
                    title="Proyecto 3"
                    percentage={90}
                    description="$900 recaudados"
                />
                <Card 
                    imgSrc="https://via.placeholder.com/300"
                    title="Proyecto 3"
                    percentage={90}
                    description="$900 recaudados"
                />
                <Card 
                    imgSrc="https://via.placeholder.com/300"
                    title="Proyecto 3"
                    percentage={90}
                    description="$900 recaudados"
                />
            </div>
        </div>
    );
};

export default Dashboard;
