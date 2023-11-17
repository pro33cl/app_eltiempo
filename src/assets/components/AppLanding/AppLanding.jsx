import React, { useState, useEffect, useRef } from 'react'
import AppCardGallery from '../AppCardGallery/AppCardGallery.jsx';
import AppTable from '../AppTable/AppTable.jsx';
import AppForm from '../AppForm/AppForm.jsx';
import './AppLanding.css'
import {isoCountries} from '../AppBd/AppBd.js';

const AppLanding = (props) => {
    
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

    const {screenDimension}=props;
   
    /* ---DECLARACIÓN VARIABLES--- */

    const countries=isoCountries;
    const countrySelectInit={code:"",city:"",state:"",country:"",lat:0,lon:0}
    const messageAlertInit={visibility:false,success:false, message:""};

    /* ---DECLARACIÓN ESTADOS--- */

    const [firstSubmit, SetFirstSubmit]= useState(false);
    const [countrySearch, SetCountrySearch]= useState("");
    const [countryResults, SetCountryResults]= useState([{code:"",city:"",state:"",country:"",lat:0,lon:0},{code:"",city:"",state:"",country:"",lat:1,lon:1},{code:"",city:"",state:"",country:"",lat:2,lon:2},{code:"",city:"",state:"",country:"",lat:3,lon:3},{code:"",city:"",state:"",country:"",lat:4,lon:4}]);
    const [dataCountrySelected, SetDataCountrySelected]=useState(countrySelectInit);
    const [weatherMatrix, SetWeatherMatrix]=useState([]);
    const [weatherMatrixShowed, SetWeatherMatrixShowed]=useState([]);
    const [messageAlert, SetMessageAlert]= useState(messageAlertInit);
    const [typeView, SetTypeView]=useState("cardGallery");
    const [filter, SetFilter]=useState("");

    /* ---REFERENCIAS useRef()--- */

    const dlgSearchForm = useRef();
    const dlgFilterForm = useRef();
    
    /* ---EFECTOS SECUNDARIOS--- */

    useEffect(()=>{
        try{
          if(!countrySearch==""){
            apiGeoConsult("e5e0825037fb55c98e545b5f61aa735c");
          }
        }
        catch(error){
          console.log(error);
        }
        
      },[countrySearch]);

    useEffect(()=>{
        try{
          if(!dataCountrySelected.code==""){
            console.log(dataCountrySelected);
            apiWeatherConsult("e5e0825037fb55c98e545b5f61aa735c");
          }
        }
        catch(error){
          console.log(error);
        }
        
      },[dataCountrySelected]);
    
      useEffect(()=>{
        try{
          if(!weatherMatrix==[]){
            showMatrix(weatherMatrix);
          }
        }
        catch(error){
          console.log(error);
        }
        
      },[weatherMatrix, filter]);

    /* ---FUNCIONES API--- */

    const apiWeatherConsult= async function(stringApiKey){
        const url=`https://api.openweathermap.org/data/2.5/weather?lat=${dataCountrySelected.lat}&lon=${dataCountrySelected.lon}&units=${"metric"}&lang=${"es"}&appid=${stringApiKey}`;
        const response= await fetch(url);
        const data= await response.json();
        let dataWeatherFormated=formatWeather(data);
        SetWeatherMatrix([...weatherMatrix,dataWeatherFormated]);
        SetFirstSubmit(true);
    }

    const apiGeoConsult= async function(stringApiKey){
        const url=`http://api.openweathermap.org/geo/1.0/direct?q=${countrySearch}&limit=${5}&units=${"metric"}&lang=${"es"}&appid=${stringApiKey}`;
        const response= await fetch(url);
        const data= await response.json();
        let arrayOptions = [];
        data.map((element)=>{
        arrayOptions.push({code:element.country, city:element.name, state:element.state, country: countries[element.country], lat:element.lat, lon:element.lon});
        });
        SetCountryResults(arrayOptions);
    }      

    /* ---HANDLERS--- */

    const handlerTypeView= function(e){
        switch (e.target.value) {
            case "cards":
                SetTypeView("cardGallery");
                break;
        
            case "table":
                SetTypeView("table");
                break;
        }
    }

    const handlerFormClick = function(e){
        e.preventDefault();
        selectCountry()
    }

    const handlerFormChange = function(e){
        SetCountrySearch(dlgSearchForm.current.value);
    }

    const handlerFilterChange = function(e){
        e.preventDefault();
        SetFilter(dlgFilterForm.current.value);
    }

    /* ---FUNCIONES--- */

    const selectCountry=function(){
        let indexCountryResults;
        let countrySelected= {code:"",city:"",state:"",country:"",lat:0,lon:0};
        let objectAlert={visibility:false,success:false, message:""};
        if(dlgSearchForm.current.value==""){
            objectAlert={visibility:true,success:false, message:"Seleccionar un lugar adecuado"};
        }
        else{
            for(let i in countryResults){
                if(dlgSearchForm.current.value == `${countryResults[i].city}, ${countryResults[i].state}, ${countryResults[i].code}`){
                    indexCountryResults=i;
                }
            }
            if(indexCountryResults==undefined){
                objectAlert={visibility:true,success:false, message:"Seleccionar un lugar adecuado"};
                countrySelected= {code:"",city:"",state:"",country:"",lat:0,lon:0};
            }
            else{
                if(dlgSearchForm.current.value == `${countryResults[indexCountryResults].city}, ${countryResults[indexCountryResults].state}, ${countryResults[indexCountryResults].code}`){
                    objectAlert={visibility:true,success:true, message:"Lugar seleccionado con éxito"};
                    countrySelected= countryResults[indexCountryResults];
                }
                else{
                    objectAlert={visibility:true,success:false, message:"Seleccionar un lugar adecuado"};
                    countrySelected= {code:"",city:"",state:"",country:"",lat:0,lon:0};
                }
            }  
        }
        SetDataCountrySelected(countrySelected);
        SetMessageAlert(()=>objectAlert);
        SetCountrySearch("");
        dlgSearchForm.current.value="";
    }

    const showMatrix= function(weatherMatrix){
        var matrixFiltered= weatherMatrix.filter((element)=>(element.city).toLowerCase().includes(filter.toLowerCase()) || (element.state).toLowerCase().includes(filter.toLowerCase()) || (element.country).toLowerCase().includes(filter.toLowerCase()));
        SetWeatherMatrixShowed(matrixFiltered);
    }

    const formatWeather = function(data){
        let dataFormated={id: Date.now() ,code:dataCountrySelected.code,city:dataCountrySelected.city,
                          state:dataCountrySelected.state,country:dataCountrySelected.country,lat:dataCountrySelected.lat,
                          lon:dataCountrySelected.lon,temp: data.main.temp, temp_min: data.main.temp_min, temp_max: data.main.temp_max, 
                          feels_like: data.main.feels_like , pressure: data.main.pressure,humidity: data.main.humidity, 
                          clouds: data.clouds.all, visibility: data.visibility,wind_speed: data.wind.speed, 
                          main: data.weather[0].main};
        return dataFormated;
    }

    const renderResults=function(){

      if(firstSubmit==false){
        return(
          
          <div className='d-flex flex-column justify-content-center align-items-center' style={{width:"100%", height:"10rem"}}>
            <div className='d-flex flex-row justify-content-center align-items-center'>
              <img alt="" src="../public/logo-black.svg" width="50" height="50"/>
              <h1 className='m-3'>El Tiempo</h1>
            </div>
            <p className='fs-4'>Buscador del Clima Mundial</p>
          </div> 
        ); 
      }
      else{
        switch (typeView) {
          case "cardGallery":
              return(<AppCardGallery weatherMatrixShowed={weatherMatrixShowed}></AppCardGallery>);
              break;
      
          case "table":
              return(<AppTable weatherMatrixShowed={weatherMatrixShowed} widthScreen={screenDimension.width}></AppTable>);
              break;
        }
      }
    }

    /* ---RETURN--- */

  return (
    <div className='landing'>
          <div className='form'>
              <AppForm handlerTypeView={handlerTypeView} handlerFormClick={handlerFormClick} handlerFormChange={handlerFormChange} handlerFilterChange={handlerFilterChange} countryResults={countryResults} messageAlert={messageAlert} dlgSearchForm={dlgSearchForm} dlgFilterForm={dlgFilterForm}></AppForm>
          </div>
          <div className='results'>
              {renderResults()}
          </div>
    </div>
  )
}

export default AppLanding