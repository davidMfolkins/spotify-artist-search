import icon from '../images/Spotify_Icon_Black.png';
import './Navbar.scss';

function Navbar() {
  return (
    <div className="navbar">
      <img className="navIcon" src={icon} alt="spotify-icon" />
      <div className="navTitle">Spotify Artist Search</div>
    </div>
  );
}

export default Navbar;