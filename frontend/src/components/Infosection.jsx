import '../css/Infosection.css';
import top from '../img/top.jpg';


function InfoSection() {
  return (
    <div className="info-section">
      <h2>Napraforgós Nemzeti Tanúsító Védjegy célja</h2>
      <p>
        A falusi vendégfogadás napraforgós tanúsító védjegy célja, hogy a vendégek számára
        garantálja a minőségi szolgáltatást. A védjegy biztosítja, hogy a szálláshelyek megfelelnek
        az előírt követelményeknek.
      </p>

      <img src={top} alt="Napraforgós védjegy" className="info-image" />
      
      <h2>Falusi szálláshely fajtái</h2>
      <ul>
        <li>Vendégszoba: önálló lakóegység egy lakóhelyiséggel.</li>
        <li>Lakrész: önálló épület kettő vagy több szobával.</li>
        <li>Vendégház: önálló épület több szobával és főzési lehetőséggel.</li>
        <li>Sátorozóhely: kiegészítő szálláshely falusi vendégház mellett.</li>
      </ul>

     
      
      <h2>A hét törpe fogadó</h2>
      <ul>
        <li>Ruhásszekrény</li>
        <li>Saját fürdőszoba zuhanytálcával</li>
        <li>WC (fürdőszobával egyben)</li>
      </ul>

      

    </div>
  );
}

export default InfoSection;