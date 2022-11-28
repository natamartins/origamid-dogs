const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="btn-card">
      {children}
    </button>
  );
};

export default Button;
