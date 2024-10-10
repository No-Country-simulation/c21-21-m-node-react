const Container = ({ children }) => {
    return (
        <div className="flex flex-col flex-grow">
            {children}
        </div>
    );
}

export default Container;
