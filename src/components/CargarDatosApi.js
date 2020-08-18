import React, {Component} from 'react'

class CargarDatosApi extends Component{
    state = {
        contactos: []
    }

    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then( (data) => {
            this.setState({ contactos: data })
        })
        .catch(console.log);
    }

    render(){
        return(
            <div className="cargar-datos-api">
                <p>Cargar datos api.</p>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <strong>Nombre</strong>
                            </td>
                            <td>
                                <strong>Email</strong>
                            </td>
                            <td>
                                <strong>Direccion</strong>
                            </td>
                            <td>
                                <strong>Teléfono</strong>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.contactos.map((contacto,index) => {
                                return(
                                    <React.Fragment key={index}>
                                        <tr>
                                            <td>{contacto.name}</td>
                                            <td>{contacto.email}</td>
                                            <td>{contacto.address.street + " " + contacto.address.suite + ", " + contacto.address.city} </td>
                                            <td>{contacto.phone}</td>
                                        </tr>
                                    </React.Fragment>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CargarDatosApi;