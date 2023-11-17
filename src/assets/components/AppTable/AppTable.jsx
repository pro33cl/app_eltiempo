import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import '../AppTable/AppTable.css'

const AppTable = (props) => {

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

  const {weatherMatrixShowed, widthScreen}=props;

  /* ---DECLARACIÓN VARIABLES--- */

  /* ---DECLARACIÓN ESTADOS--- */
  
  /* ---REFERENCIAS useRef()--- */

  /* ---EFECTOS SECUNDARIOS--- */

  /* ---FUNCIONES API--- */

  /* ---HANDLERS--- */

  /* ---FUNCIONES--- */

  /* ---RETURN--- */

  return (
    <div style={{width:"97%"}}>
        <Table className='table' responsive>
            <thead>
                <tr>
                    <th>Ciudad</th>
                    <th>Estado</th>
                    <th>País</th>
                    <th>Temp °C</th>
                    <th>Temp min °C</th>
                    <th>Temp max °C</th>
                    {widthScreen>=992?
                      <>
                      <th>Sen T °C</th>
                      <th>Pres hPa</th>
                      <th>Hum %</th>
                      <th>Vel Viento m/s</th>
                      <th>Descrip</th>
                      </>
                      :null
                    }
                </tr>
            </thead>
            <tbody>
                {
                    weatherMatrixShowed.map((element)=>{
                        return (
                                <tr key={element.id} className='hover-table'>
                                    <td>{element.city}</td>
                                    <td>{element.state}</td>
                                    <td>{element.country}</td>
                                    <td>{element.temp}</td>
                                    <td>{element.temp_min}</td>
                                    <td>{element.temp_max}</td>
                                    {widthScreen>=992?
                                    <>
                                    <td>{element.feels_like}</td>
                                    <td>{element.pressure}</td>
                                    <td>{element.humidity}</td>
                                    <td>{element.wind_speed}</td>
                                    <td>{element.main}</td>
                                    </>
                                    :null
                                    } 
                                </tr>
                                );
                                })
                }
            </tbody>
        </Table>
    </div>
  )
}

export default AppTable