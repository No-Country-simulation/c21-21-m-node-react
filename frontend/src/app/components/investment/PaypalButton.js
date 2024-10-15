import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaypalButton = ({ investmentAmount }) => {
    // Simular el manejo de la inversión
    const handlePayment = (order) => {
        console.log("Simulación de la inversión completada:", order);
        // agregar componente modal
        alert(`Inversión de $${investmentAmount} completada exitosamente!`);
    };

    return (
        <PayPalScriptProvider options={{
            "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
            currency: "USD",
        }}
        >
            <PayPalButtons createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: { value: investmentAmount.toFixed(2), }, // dos decimales
                        },],
                });
            }}
                onApprove={async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log("Inversión capturada:", order);
                    handlePayment(order); // Simula la inversión
                }}
                onError={(err) => {
                    console.error("Error en la transacción:", err);
                    alert("Ocurrió un error en la transacción. Inténtalo de nuevo.");
                }}
            />
        </PayPalScriptProvider>
    );
};

export default PaypalButton;
