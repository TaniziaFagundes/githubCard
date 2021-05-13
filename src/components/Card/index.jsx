const Card = ({ itemList }) => {
  return (
    <div className="card" key={itemList.id}>
      <img src={itemList.owner.avatar_url} alt="avatar"></img>
      <div className="card_description">
        <h4>{itemList.name}</h4>
        <p>{itemList.owner.login}</p>
        <p>{itemList.description}</p>
      </div>
    </div>
  );
};
export default Card;
