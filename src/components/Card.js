import "./style.css";

const Card = ({ name, id, username, email }) => {
  return (
    <div className="Card-container">
      <img src={`https://robohash.org/${id}?set=set4=180x180`} alt="robots" />
      <h1> {name} </h1>
      <h5> {username} </h5>
      <p> {email} </p>
    </div>
  );
};

export default Card;
