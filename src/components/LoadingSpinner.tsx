const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-12 h-12">
      <div
        className="w-12 h-12 border-4 border-t-4 border-primaryColor rounded-full animate-spin"
        style={{ borderTopColor: "#DCEEEC" }}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
