import React, { Component } from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardFooter,
  Col,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [
        {
          component: "text",
          label: "Primer Campo",
          type: "text",
          _uid: "5b9b79d2-32f2-42a1-b89f-203dfc0b6b98"
        },
        {
          component: "text",
          label: "Segundo campo",
          type: "text",
          _uid: "6eff3638-80a7-4427-b07b-4c1be1c6b186"
        }
      ]
    }

    this.handleChange = this.handleChange.bind(this);
    this.addTextField = this.addTextField.bind(this);
    this.addSelectField = this.addSelectField.bind(this);
    this.addOptionsField = this.addOptionsField.bind(this);
    this.deleteField = this.deleteField.bind(this);
  }

  deleteField(e, id) {
    console.log(id)
    var updated_fields = this.state.fields;
    updated_fields.splice(id, 1)
    this.setState({ fields: updated_fields })
  }

  addOptionsField(e) {

    var new_element = {
      component: "radio",
      label: "Radio",
      type: "radio",
      _uid: "5b9b79d2-32f2-42a1-b89f-203dfc0b6b98"
    }

    var updated_fields = this.state.fields;
    updated_fields = updated_fields.concat(new_element)

    this.setState({ fields: updated_fields });
    console.log(this.state.fields)
  }

  addSelectField(e) {


    var new_element = {
      component: "select",
      label: "Select",
      type: "select",
      _uid: "5b9b79d2-32f2-42a1-b89f-203dfc0b6b98"
    }

    var updated_fields = this.state.fields;
    updated_fields = updated_fields.concat(new_element)

    this.setState({ fields: updated_fields });
    console.log(this.state.fields)

  }

  addTextField(e) {

    var new_element = {
      component: "text",
      label: "Text",
      type: "text",
      _uid: "5b9b79d2-32f2-42a1-b89f-203dfc0b6b98"
    }

    var updated_fields = this.state.fields;
    updated_fields = updated_fields.concat(new_element)

    this.setState({ fields: updated_fields });
    console.log(this.state.fields)

  }

  handleChange(e) {
    var target = e.target;
    console.log(target.value);
  }


  render() {
    return (
      <Container>
        <Row>
          <Col sm="3" md="3">
            <Button
              color="primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                this.addTextField(e);
              }}
            >
              Agregar Campo Texto
            </Button>
            <Button
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
          <Col sm="9" md="9">
            <form>
              {this.state.fields.map((field, id) => {
                return (
                  <div key={field._uid}>
                    <FormGroup>
                      <InputGroup>
                        <InputGroupText>
                          {field.label}
                        </InputGroupText>
                        <Input
                          placeholder={field.type}
                          type={field.type}
                          name={field.label}
                          onChange={this.handleInputChange}
                        >
                        </Input>
                      </InputGroup>
                    </FormGroup>
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
                  </div>
                )

              })}
            </form>
          </Col>
        </Row>
      </Container >
    )
  }

}

export default Formulario;