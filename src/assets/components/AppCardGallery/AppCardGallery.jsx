import React from 'react'
import AppCard from '../AppCard/AppCard';
import './AppCardGallery.css';

const AppCardGallery = (props) => {

  const {weatherMatrixShowed}=props;

  return (
    <div className='container-cards'>
          {
            weatherMatrixShowed.map((element)=>{
              return (
                      <div key={element.id}>
                        <AppCard data={element}></AppCard>
                      </div>
                      );
            })           
          }
    
    </div>
  )
}

export default AppCardGallery