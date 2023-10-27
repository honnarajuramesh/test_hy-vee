const LoadingScreen = () => {
  return (
    <div className="flex spinner-box my-10 justify-center ">
      <div className="pulse-container">
        <div className="pulse-bubble pulse-bubble-1"></div>
        <div className="pulse-bubble pulse-bubble-2"></div>
        <div className="pulse-bubble pulse-bubble-3"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
