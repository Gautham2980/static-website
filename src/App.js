import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    
    <header className="header">
			<div className="logo">
				<h1 className="banner-logo"><span style={{color:"rgb(7, 142, 5)"}}></span>ARSHA</h1>
			</div>
			
			<input type="checkbox" id="toggle"/>
			<label for="toggle"><i className="fa fa-bars menu" aria-hidden="true"></i></label>
			
			<nav className="navigation">
				<ul>
					<li><a href="#">HOME</a></li>
					<li><a href="#about-section">ABOUT</a></li>
					<li><a href="#service-section">SERVICE</a></li>
					<li><a href="#portfolio-section">PORTFOLIO</a></li>
          <li><a href="#team-section">TEAM</a></li>
					<li><a href="#footer-section">CONTACT</a></li>

          
				</ul>
       
			</nav>

   

      
			
	</header>
    
      


    
			
			</div>
      )
     
}

export default App