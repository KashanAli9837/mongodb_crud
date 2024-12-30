const Loader = ({ styles }) => {
  return (
    <div className={`flex-1 w-full flex items-center justify-center ${styles}`}>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
