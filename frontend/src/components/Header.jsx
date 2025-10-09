import top from '../img/top.jpg';
function Header() {
  return (
    <header className="header">
      <img src={top} alt="Napraforgós védjegy" className="info-image" />
    </header>
  );
}

export default Header;