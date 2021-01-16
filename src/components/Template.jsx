export default function Template({ name, username, email }) {
  return (
    <div>
      <div className="card-container">
        <h4> {name} </h4>
        <h5> {username} </h5>
        <p> {email} </p>
      </div>
    </div>
  );
}
