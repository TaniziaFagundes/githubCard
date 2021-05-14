const Alert = ({ title, setDisplayAlert }) => {
  return (
    <div className="alert">
      <h3>Importante!</h3>
      <h4>{title}</h4>
      <button
        onClick={() => {
          setDisplayAlert(false);
        }}
      >
        OK
      </button>
    </div>
  );
};

export default Alert;
