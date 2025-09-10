const LoadingSpinner = ({ size = "md", color = "orange" }) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  const colorClasses = {
    orange: "border-[#fc7f09]",
    white: "border-white",
    gray: "border-gray-600",
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`
          ${sizeClasses[size]} 
          animate-spin rounded-full 
          border-2 border-transparent 
          ${colorClasses[color]} 
          border-t-transparent
        `}
        style={{
          borderTopColor: "transparent",
          borderRightColor: "currentColor",
          borderBottomColor: "currentColor",
          borderLeftColor: "currentColor",
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
