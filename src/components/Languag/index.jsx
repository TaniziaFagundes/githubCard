const Language = ({ reposLanguage }) => {
  return (
    <div className="card_language">
      {reposLanguage.map((lang) =>
        lang.map((item, index) => (
          <p className="item_language" key={index}>
            {item}
          </p>
        ))
      )}
    </div>
  );
};

export default Language;
