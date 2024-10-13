import Button from "./Button";

const ActionConfirmation = ({ text, action, bgColor }) => {
    return (
        <div>
            <p className="pb-4">{text}</p>
            <Button className={`w-full text-white ${bgColor} font-bold px-6 py-3 
                rounded-full`}>{action}
            </Button>
        </div>
    );
};

export default ActionConfirmation
