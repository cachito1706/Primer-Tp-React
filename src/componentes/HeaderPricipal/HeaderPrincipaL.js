import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Button } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

class HeaderPrincipaL extends React.Component {

   
    constructor(props) {
           super(props)
        this.state = { filter: '' };
    }

    onChangeEvent = (e) => {
        const query = e.target.value.toString().toLowerCase();
        this.props.handleChange(query); 
        }
    render() {


        return (

            <div className="col-sm-12">
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Cerveza Kolla</Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
                <Form inline>
                <input type="text" placeholder="Search" onChange={this.onChangeEvent}/>
                <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            </div>

        )
    }
}

export default HeaderPrincipaL