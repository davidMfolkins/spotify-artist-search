import './Searchbar.scss';

function Navbar() {
  return (
    <div className="Searchbar">
      <form>
          <input type="text" name="search" placeholder="Search for an artist..."/>
      </form> 
    </div>
  );
}

export default Navbar;