import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

const Toast = ({ message, type, onClose }) => {
    const icon = type === 'success' ? faCheckCircle : faTimesCircle;
    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
            <div className={`max-w-md w-full mx-4 px-6 py-3 rounded-lg shadow-lg text-white 
                flex items-center justify-between ${bgColor}`}>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={icon} className="mr-3 text-xl" />
                    <div className="text-sm font-semibold">{message}</div>
                </div>
                <button onClick={onClose} className="ml-4 text-white focus:outline-none">
                    <FontAwesomeIcon icon={faTimes} className="text-lg" />
                </button>
            </div>
        </div>
    );
};

export default Toast;
