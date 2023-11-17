import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AppCard.css'

const AppCard = (props) => {

  const {data}=props;

  return (
  
      <Card bg='light' border='secondary' className='hover-card'>
        <Card.Body style={{height:"8rem"}} >
          <Card.Title style={{fontSize:"0.9rem"}}>{`${data.city}, ${data.state}, ${data.country}`}</Card.Title>
          <Card.Text style={{fontSize:"0.8rem"}}>Resumen: {data.main}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush text-start" style={{fontSize:"0.6rem"}}>
          <ListGroup.Item>Temperatura        °C :{data.temp}</ListGroup.Item>
          <ListGroup.Item>Temperatura mínima °C :{data.temp_min}</ListGroup.Item>
          <ListGroup.Item>Temperatura máxima °C :{data.temp_max}</ListGroup.Item>
          <ListGroup.Item>Temperatura máxima °C :{data.temp_max}</ListGroup.Item>
          <ListGroup.Item>Sensación Térmica  °C :{data.feels_like}</ListGroup.Item>
          <ListGroup.Item>Presión           hPa :{data.feels_like}</ListGroup.Item>
          <ListGroup.Item>Humedad             % :{data.humidity}</ListGroup.Item>
          <ListGroup.Item>Velocidad Viento  m/s :{data.wind_speed}</ListGroup.Item>
        </ListGroup>
        <Card.Body className='text-center'>
          <Button variant="danger" size='sm'>Eliminar</Button>
        </Card.Body>
      </Card>

  )
}

export default AppCard