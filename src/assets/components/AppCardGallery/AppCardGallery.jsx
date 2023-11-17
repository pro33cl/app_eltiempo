import React from 'react'
import AppCard from '../AppCard/AppCard';
import './AppCardGallery.css';

const AppCardGallery = (props) => {

  const {weatherMatrixShowed, handlerDelete}=props;

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