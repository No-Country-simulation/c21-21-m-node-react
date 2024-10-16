"use client";

const ProgressBar = ({value, max = 100, className = ""}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  console.log("estoy funcionando")
  return (
    <div
      className={`w-full h-2 bg-secondary rounded-full overflow-hidden ${className}`}
    >
      <div
        className="h-full bg-customGreen transition-all duration-300 ease-in-out"
        style={{ width: `${percentage}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      />
    </div>
  );
};

export default ProgressBar;
