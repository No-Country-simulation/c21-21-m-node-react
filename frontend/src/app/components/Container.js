const Container = ({ children }) => {
    return (
        <div className="flex flex-col flex-grow px-4 pt-10 pb-24 sm:px-6 lg:px-16 max-w-7xl mx-auto">
            {children}
        </div>
    );
}

export default Container;
