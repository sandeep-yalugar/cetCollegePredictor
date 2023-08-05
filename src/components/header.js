import './header.css'
import logo from './logo.png'

const Header = () => {
    return (
        <header>
            <h4>Collge predictor</h4>
  
      <img className="logo-img" src={logo}  alt="Logo"/>
   
    <nav>
      <ul>
        <li><a >About</a></li>
      </ul>
    </nav>
  </header>
    )
}

export default Header;