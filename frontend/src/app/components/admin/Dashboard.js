import Card from "./Card";
import Table from "../Table";

const Dashboard = () => {
    return (
        <div className="flex flex-col justify-between items-start
            mb-4 space-y-4 md:space-y-0">
            <h1 className="text-customH1 pb-2 lg:pb-0 font-bold">Descripción General</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                gap-y-8 w-full gap-x-6">
                <Card title="prueba" description='prueba descr' />
                <Card title="prueba" description='prueba descr' />
                <Card title="prueba" description='prueba descr' />
                <Card title="prueba" description='prueba descr' />
            </div>
            <Table />
        </div>
    );
};

export default Dashboard;
