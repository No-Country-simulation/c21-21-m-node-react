import ClipLoader from "react-spinners/ClipLoader";

const LoaderButton = ({ isLoading, onClick, children, className }) => {
    return (
        <button
            onClick={onClick}
            disabled={isLoading}
            className={`relative px-4 py-2 rounded-lg flex justify-center items-center ${className} ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""}`}>
            {
                isLoading ? (<ClipLoader size={20} color="#ffffff" />) 
                : (children)}
        </button>
      );
}

export default LoaderButton;
