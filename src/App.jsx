import { useRef, useState } from 'react';
import './App.css'
import AppContact from './assets/components/AppContact/AppContact.jsx';
import AppLanding from './assets/components/AppLanding/AppLanding.jsx';
import AppNavbar from './assets/components/AppNavbar/AppNavbar.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'




function App() {

  /*  ---INDICE--- 
  1.- PROPS
  2.- DECLARACIÓN VARIABLES
  3.- DECLARACIÓN ESTADOS
  4.- REFERENCIAS useRef()
  5.- EFECTOS SECUNDARIOS
  6.- FUNCIONES API
  7.- HANDLERS
  8.- FUNCIONES
  9.- RETURN
  */

  /* ---PROPS--- */

  /* ---DECLARACIÓN VARIABLES--- */

  const screenDimensionInit= {width: screen.availWidth, heigth: screen.availHeight};
  const footerHeigth=48;
  const navbarHeigth=88;

  /* ---DECLARACIÓN ESTADOS--- */

  const [screenDimension, SetScreenDimension]=useState(screenDimensionInit);
  const [typePage, SetTypePage]= useState("landing");

  /* ---REFERENCIAS useRef()--- */

  const navbar=useRef();


  /* ---DECLARACIÓN VARIABLES--- */

  var pageHeigth= `${screenDimension.heigth - footerHeigth - navbarHeigth}px`;
  console.log(pageHeigth);
  console.log(screenDimension.heigth);
  console.log(screen.availHeight);
  console.log(screenDimensionInit);

  /* ---EFECTOS SECUNDARIOS--- */

  /* ---FUNCIONES API--- */

  /* ---HANDLERS--- */

  const handlerResizeWindows= function(e){
    SetScreenDimension({width:screen.availWidth,heigth:screen.availHeight});
  }

  window.onresize= handlerResizeWindows;

  const handlerNavbar= function(e){
    switch (e.target.id) {
      case "inicio":
        SetTypePage("landing");
        break;
      case "contacto":
        SetTypePage("contact");
        break;
      case "sabermas":
        SetTypePage("sabermas");
      break;
    }
  }

  /* ---FUNCIONES--- */

  const renderPage= function(){
    switch(typePage){
      case "landing":
        return(<AppLanding screenDimension={screenDimension}></AppLanding>);
        break;
      case "contact":
        return(<AppContact></AppContact>);
        break;
      case "sabermas":
        return(<div>Saber más</div>);
      break;
    }
  }

  /* ---RETURN--- */

  return (
    <>
      <main className='screen'>
        <section className='navbar' ref={navbar}>
          <AppNavbar handlerNavbar={handlerNavbar}></AppNavbar>
        </section>
        <section className='page' style={{height:pageHeigth}}>
          {renderPage()}
        </section>
        <section className='footer bg-primary'>
          <FontAwesomeIcon icon={faFacebook} size="lg" style={{color: "#ffffff", marginRight:"1rem"}} />
          <FontAwesomeIcon icon={faInstagram} size="lg" style={{color: "#ffffff",marginRight:"1rem"}} />
          <FontAwesomeIcon icon={faXTwitter} size="lg" style={{color: "#ffffff",marginRight:"1rem"}} />
        </section>
      </main> 
    </>
  )
}

export default App
