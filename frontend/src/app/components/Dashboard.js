import Button from "./Button";
import Card from "./Card";

const Dashboard = () => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-4xl font-bold">Tus Proyectos</h1>
                <Button className="bg-customGreen text-white font-bold px-8 py-3 rounded-full">Crear campaña</Button>
            </div>
            <div className="flex space-x-6">
                <p className="font-bold">Total Proyectos: 20</p>
                <p className="font-bold">Total Recaudado: $20.000</p>
            </div>
            <div className="flex"> 
                <Card 
                    imgSrc="https://via.placeholder.com/300"
                    title="Título de la Tarjeta"
                    percentage={75}
                    description="$500 recaudados"
                />
            </div>
        </div>
    );
};

export default Dashboard;
