const Respository = ({ itemList }) => {
  return (
    <div>
      <h5>{itemList.name}</h5>
      <p>{itemList.description}</p>
      <p>{itemList.created_at}</p>
      <p>{itemList.language}</p>
    </div>
  );
};

export default Respository;
