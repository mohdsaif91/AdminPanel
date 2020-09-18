import React from 'react'
import {Form} from "react-bootstrap";

export default function InputC(props) {
    return (
        <Form.Group controlId={props.ControlId}>
                      <Form.Label>{props.LabelName}</Form.Label>
                      <Form.Control as="select">
                        <option> select {props.LabelName}</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
    )
}
