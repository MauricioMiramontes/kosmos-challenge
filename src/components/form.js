import React, { Component } from "react";

// reactstrap components
import {
  Button,
  Col,
  Container,
  Row,
  FormGroup,
  Input,
  InputGroupText,
  InputGroup,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

class Formulario extends Component {
  constructor(props) {
    super(props);

    // Estado inicial del state
    this.state = {
      // Modal de enviado
      modal: false,

      // Campos iniciales
      fields: [
        {
          component: "text",
          label: "Primer Campo",
          type: "text",
        },
        {
          component: "text",
          label: "Segundo campo",
          type: "text",
        }
      ]
    }

    // Funciones de modal
    this.toggle = this.toggle.bind(this);

    // Funciones para interactuar con el form
    this.handleChange = this.handleChange.bind(this);
    this.addTextField = this.addTextField.bind(this);
    this.addSelectField = this.addSelectField.bind(this);
    this.addOptionsField = this.addOptionsField.bind(this);
    this.deleteField = this.deleteField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  // Borra un campo específico
  deleteField(e, id) {
    console.log(id)
    var updated_fields = this.state.fields;
    updated_fields.splice(id, 1)
    this.setState({ fields: updated_fields })
  }

  //Agrega un campo de tipo opciones
  addOptionsField(e) {

    // Se crea un nuevo elemento
    var new_element = {
      component: "radio",
      label: "Radio",
      type: "radio",
    }

    // Se crea una copia del estado
    var updated_fields = this.state.fields;

    // Se actualiza la copia
    updated_fields = updated_fields.concat(new_element)

    // Se actualiza el estado
    this.setState({ fields: updated_fields });
    console.log(this.state.fields)
  }

  //Agrega un campo de tipo Select
  addSelectField(e) {
    // Se crea un nuevo elemento
    var new_element = {
      component: "select",
      label: "Select",
      type: "select",
    }

    // Se crea una copia del estado
    var updated_fields = this.state.fields;
    // Se actualiza la copia
    updated_fields = updated_fields.concat(new_element)

    // Se actualiza el estado
    this.setState({ fields: updated_fields });
    console.log(this.state.fields)

  }

  //Agrega un campo de tipo Text
  addTextField(e) {

    // Se crea un nuevo elemento
    var new_element = {
      component: "text",
      label: "Text",
      type: "text",
    }

    // Se crea una copia del estado
    var updated_fields = this.state.fields;

    // Se actualiza la copia
    updated_fields = updated_fields.concat(new_element)

    // Se actualiza el estado
    this.setState({ fields: updated_fields });
    console.log(this.state.fields)

  }

  handleChange(e) {
    var target = e.target;
    console.log(target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.toggle();
  }

  render() {
    return (
      <>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Json Resultante</ModalHeader>
          <ModalBody>
            <pre>{JSON.stringify(this.state.fields, null, 2)}</pre>
          </ModalBody>
        </Modal>
        <Container>
          <Row>
            <Col sm="3" md="3">
              <Button
                color="primary"
                type="submit"
                className="mt-1"
                onClick={(e) => {
                  e.preventDefault();
                  this.addTextField(e);
                }}
              >
                Agregar Campo Texto
              </Button>
              <Button
                className="mt-1"
                color="primary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  this.addOptionsField(e);
                }}
              >
                Agregar Campo Opciones
              </Button>
              <Button
                className="mt-1"
                color="primary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  this.addSelectField(e);
                }}
              >
                Agregar Campo Select
              </Button>
            </Col>
            <Col sm="9" md="9" className="mt-2">
              <form>
                {this.state.fields.map((field, id) => {
                  return (
                    <Row key={id}>
                      <Col sm="7" md="7">
                        <FormGroup>
                          <InputGroup>
                            <InputGroupText>
                              {field.label}
                            </InputGroupText>
                            <Input
                              placeholder={field.type}
                              type={field.type}
                              name={field.label}
                              onChange={(e) => this.handleChange(e, id)}
                            >
                            </Input>
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col sm="2" md="2">
                        < Button
                          color="primary"
                          type="submit"
                          onClick={(e) => {
                            e.preventDefault();
                            this.deleteField(e, id);
                          }}
                        >
                          Borrar campo
                        </Button>
                      </Col>
                    </Row>
                  )
                })}
              </form>
            </Col>
            <Col sm={{ size: 6, order: 2, offset: 5 }} md={{ size: 6, order: 2, offset: 6 }} className="aling-items-center">
              < Button
                color="primary"
                type="submit"
                className="mt-5"
                onClick={(e) => {
                  e.preventDefault();
                  this.handleSubmit(e);
                }}
              >
                Enviar Formulario
              </Button>
            </Col>
          </Row>
        </Container >
      </>
    )
  }

}

export default Formulario;