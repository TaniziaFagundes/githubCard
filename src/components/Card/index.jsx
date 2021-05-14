const Card = ({ itemList }) => {
  return (
    <div className="card" key={itemList.id}>
      <img
        className="card_img"
        src={itemList.owner.avatar_url}
        alt="avatar"
      ></img>
      <div className="card_description">
        <h4>
          {itemList.name} forks:{itemList.forks}
        </h4>
        <p>{itemList.owner.login}</p>
        <p>{itemList.description}</p>
        <a className="button_link" target="_blank" href={itemList.html_url}>
          Acessar
        </a>
      </div>
    </div>
  );
};
export default Card;
