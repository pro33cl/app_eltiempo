import React from 'react'
import AppCard from '../AppCard/AppCard';
import './AppCardGallery.css';

const AppCardGallery = (props) => {

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

  const {weatherMatrixShowed, handlerDelete}=props;

  /* ---DECLARACIÓN VARIABLES--- */

  /* ---DECLARACIÓN ESTADOS--- */
  
  /* ---REFERENCIAS useRef()--- */

  /* ---EFECTOS SECUNDARIOS--- */

  /* ---FUNCIONES API--- */

  /* ---HANDLERS--- */

  /* ---FUNCIONES--- */

  /* ---RETURN--- */

  return (
    <div className='container-cards'>
          {
            weatherMatrixShowed.map((element)=>{
              return (
                      <div key={element.id}>
                        <AppCard data={element} handlerDelete={handlerDelete}></AppCard>
                      </div>
                      );
            })           
          }
    
    </div>
  )
}

export default AppCardGallery