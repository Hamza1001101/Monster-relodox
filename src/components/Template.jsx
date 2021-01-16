import './style.css'

export default function Template({ name, username, email }) {
  return (
  
      <div className="Card-container">
        <h4> {name} </h4>
        <h5> {username} </h5>
        <p> {email} </p>
      </div>

  );
}
