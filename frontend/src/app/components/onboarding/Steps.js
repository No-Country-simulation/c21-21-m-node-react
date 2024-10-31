const Steps = ({ id, title, desc }) => {
    return (
        <li className="flex items-start">
            <div className="text-2xl font-bold text-customGreen">
                {id}.
            </div>
            <div className="ml-4 space-y-1 md-space-y-0">
                <h3 className="font-semibold text-customBlack">{title}</h3>
                <p className="text-sm text-customBlack">{desc}</p>
            </div>
        </li>
    );
};

export default Steps;
