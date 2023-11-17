import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AppContact = () => {

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

  const messageInit={name:"", email:"", message:""};
  
  /* ---DECLARACIÓN ESTADOS--- */

  const [message, SetMessage]=useState(messageInit);
    
  /* ---REFERENCIAS useRef()--- */
  
  /* ---EFECTOS SECUNDARIOS--- */
  
  /* ---FUNCIONES API--- */
  
  /* ---HANDLERS--- */

  const handlerChange=function(e){
    SetMessage({...message,[e.target.name]:e.target.value});
  }

  const handlerSubmit=function(e){
    e.preventDefault();
    enviarBackend(message);
    SetMessage(messageInit);
  }
  
  /* ---FUNCIONES--- */

  const enviarBackend=function(message){
    console.log("mensaje enviado a Backend:");
    console.log(message);
  }
  
  
  /* ---RETURN--- */

  return (

    <Form style={{width:"100%", padding:"1rem"}} onSubmit={handlerSubmit}>
      <Form.Group className="mb-3">
      <Form.Text className="text-muted">
          Para contactarnos, envíanos un mensaje.
        </Form.Text>
        <Form.Control type="text" name='name' placeholder="Nombre completo" className='mt-3' value={message.name} onChange={handlerChange}/>
        <Form.Control type="email" name='email' placeholder="Correo Electronico" className='mt-3' value={message.email} onChange={handlerChange}/>
        <Form.Control as="textarea" name='message' rows={7}  placeholder="Escribe tu mensaje aquí..." className='mt-3' value={message.message} onChange={handlerChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    
  )
}

export default AppContact