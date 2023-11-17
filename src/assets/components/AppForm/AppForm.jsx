import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';


const AppForm = (props) => {

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
    
    const {handlerTypeView, handlerFormClick,handlerFormChange, handlerFilterChange, countryResults, messageAlert, dlgSearchForm, dlgFilterForm}=props;

    /* ---DECLARACIÓN VARIABLES--- */

    /* ---DECLARACIÓN ESTADOS--- */

    /* ---REFERENCIAS useRef()--- */

    /* ---EFECTOS SECUNDARIOS--- */

    /* ---FUNCIONES API--- */

    /* ---HANDLERS--- */

    /* ---FUNCIONES--- */

    const renderOptionsSelect= function(countryResults){
        return(
            <datalist id='dataListOptions'>
                {countryResults.map((element,index)=>{
                    if(element.city=="" && element.state=="" && element.country==""){
                        return null;
                    }
                    else{
                        for(let i in element ){
                            if(element[i]==undefined){
                                element[i]="";
                            }
                        }
                        let stringElement=element.city+", "+element.state+", "+element.country;
                        let valueElement=element.city+", "+element.state+", "+element.code;
                        let keyElement=element.lat+" "+element.lon+" "+index;
                        return(<option key={keyElement} value={valueElement}>{stringElement}</option>);
                    } 
                })}
            </datalist>
        );
    }

    const renderAlert= function(messageAlert){
        let typeAlert="";
        switch (messageAlert.success) {
            case true:
                typeAlert="success";
                break;
        
            case false:
                typeAlert="danger";
                break;
        }

        if(messageAlert.visibility==true){
            return(<Alert variant={typeAlert} className='mt-2 d-flex flex-column justify-content-center align-items-center' style={{fontSize:"0.7rem", height:"1.2rem"}}>{messageAlert.message}</Alert>);        
        }
        else{
            return (null);
        }
    }

    /* ---RETURN--- */

  return (
    <div className='pt-1 pb-2 ps-3 pe-3'>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Agregar un Lugar</Form.Label>
                <Form.Control type="text" placeholder="Ciudad, País" name='search' list='dataListOptions' onChange={handlerFormChange} ref={dlgSearchForm}/>
                    {renderOptionsSelect(countryResults)}
                {renderAlert(messageAlert)}
            <Button variant="primary" className='mt-3' type="submit" onClick={handlerFormClick}>
                Agregar
            </Button>
            </Form.Group>
        </Form>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Tipo de Vista / Filtrar</Form.Label>
                <Form.Select aria-label="Tipo de Vista" onChange={handlerTypeView}>
                    <option value="cards">Tarjetas</option>
                    <option value="table">Tabla</option>
                </Form.Select>
            </Form.Group>
        </Form>
        <Form>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Filtrar" name='filter' className='mt-3' onChange={handlerFilterChange} ref={dlgFilterForm}/>
            </Form.Group>
        </Form>
    </div>
  )
}

export default AppForm