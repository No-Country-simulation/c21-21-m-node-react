const Modal = ({ isOpen, onClose, title, width, height, margin, children, isError = false }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 justify-center bg-black bg-opacity-80 px-1">
            <div className={`bg-white ${margin} rounded-lg shadow-lg relative ${width} mx-auto overflow-hidden`}>
                <div className={`px-6 py-4 flex items-center justify-between ${isError ? 'bg-red-500 text-white' : 'bg-transparent'}`}>
                    <h2 className="text-lg font-bold">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-gray-900 text-2xl font-bold">
                        &times;
                    </button>
                </div>
                <div className={`border-b-2 ${isError ? 'border-red-600' : 'border-gray-300'}`}></div>
                <div className={`px-6 pt-4 pb-12 overflow-y-auto ${height}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
