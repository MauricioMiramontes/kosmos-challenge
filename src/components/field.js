import React from 'react';

// reactstrap components
import {
  Col,
  FormGroup,
  Input,
  InputGroupText,
  InputGroup,
  Label
} from "reactstrap";

function Field(props) {
  return (
    <>
      {
        props.type === "text" ?
          <Col sm="7" md="7" >
            <FormGroup>
              <InputGroup>
                <InputGroupText>
                  {props.label}
                </InputGroupText>
                <Input
                  placeholder={props.type}
                  type={props.type}
                  name={props.label}
                  onChange={props.handleChange}
                >
                </Input>
              </InputGroup>
            </FormGroup>
          </Col >
          :
          <>
            {props.type === "radio" ?
              <Col sm="7" md="7" >
                <FormGroup tag="fieldset">
                 
                    <FormGroup check>
                     
                      <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Opcion 1
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Opcion 2
                      </Label>
                    </FormGroup>
                </FormGroup>
              </Col >
              :
              <>
                <Col sm="7" md="7" >
                  <FormGroup>
                    <InputGroup>
                      <InputGroupText>
                        {props.label}
                      </InputGroupText>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </InputGroup>
                  </FormGroup>
                </Col>
              </>
            }
          </>
      }
    </>
  );
}

export default Field;