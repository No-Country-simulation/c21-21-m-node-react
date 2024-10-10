const Container = ({ children }) => {
    return (
        <div className="flex flex-col flex-grow px-6 py-4 lg:px-8">
            {children}
        </div>
    );
}

export default Container;
