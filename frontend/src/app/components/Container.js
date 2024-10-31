const Container = ({ children }) => {
    return (
        <div className="flex flex-col px-4 pt-10 pb-20 sm:px-6 lg:px-16 max-w-7xl mx-auto"
             style={{ minHeight: 'calc(100vh - 80px)' }}>
            {children}
        </div>
    );
};

export default Container;
