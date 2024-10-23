import Input from "./Input";

const BankSection = ({ onChange, data }) => {
    return (
        <div className="pt-12">
            <h3 className="text-lg font-semibold mb-1">Configurar Transferencia</h3>
            <p className="text-sm text-gray-600 mb-4">
                Al actualizar el estatus de la campaña a "Finalizada", nos pondremos
                en contacto contigo para verificar estos datos y poder transferir el monto recaudado.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    label="Titular de la Cuenta"
                    name="accountHolder"
                    value={data.bankDetails.accountHolder}
                    onChange={onChange}
                    placeholder="Nombre del titular de la cuenta"
                />
                <Input
                    label="Número de Cuenta (ej: IBAN o Local)"
                    name="accountNumber"
                    value={data.bankDetails.accountNumber}
                    onChange={onChange}
                    placeholder="Ej: DE89370400440532013000"
                />
                <Input
                    label="Banco"
                    name="bankName"
                    value={data.bankDetails.bankName}
                    onChange={onChange}
                    placeholder="Introduce el nombre del banco"
                />
                <Input
                    label="Código SWIFT"
                    name="swiftCode"
                    value={data.bankDetails.swiftCode}
                    onChange={onChange}
                    placeholder="Introduce el código SWIFT"
                />
            </div>
        </div>
    );
};

export default BankSection;
