const Button = ({ children, onClick, success }) => {
  return (
    <button
      className={`p-2 mx-1 my-2 uppercase border rounded-md ${
        success ? "border-green-600" : "border-red-600"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
