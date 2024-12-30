const Error = ({ error }) => {
  return (
    <div className="flex justify-center items-center flex-1">
      <p className="text-lg font-semibold text-red-600">{error}</p>
    </div>
  );
};

export default Error;
