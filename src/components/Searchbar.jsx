import "./style.css";

const Searchbar = ({ userinput, searchHandle }) => {
  return (
    <div className="Search-container">
      <h1 className="Header">Monster Relodex</h1>
      <input
        className="Search"
        type="text"
        name="userinput"
        value={userinput}
        placeholder="Search your fav monster..."
        onChange={searchHandle}
      />
    </div>
  );
};

export default Searchbar;
