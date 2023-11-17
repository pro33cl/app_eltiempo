import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AppContact = () => {

  const messageInit={name:"", email:"", message:""};
  const [message, SetMessage]=useState(messageInit);
  
  
  const handlerChange=function(e){
    SetMessage({...message,[e.target.name]:e.target.value});
  }

  const handlerSubmit=function(e){
    e.preventDefault();
    enviarBackend(message);
    SetMessage(messageInit);
  }


  const enviarBackend=function(message){
    console.log("mensaje enviado a Backend:");
    console.log(message);
  }
  
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