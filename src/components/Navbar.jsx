import '../style/Navbar.css';

export default function Navbar() {


  return (
    <nav>
      <div className="nav-container">
        <div className="logo">Miraiban</div>

    

        <ul className={`nav-links`}>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#timeline">Journey</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
