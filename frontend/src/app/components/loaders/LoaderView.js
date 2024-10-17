import ClipLoader from "react-spinners/ClipLoader";

const LoaderView = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
            <ClipLoader size={50} color="#ffffff" />
        </div>
    );
};

export default LoaderView;
