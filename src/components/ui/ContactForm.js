import "../../css/ContactForm.css"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Container, Row, Col, FormGroup, FormText } from "react-bootstrap";



const ContactForm = () => {

  const onSubmit = (data) => console.log("data");

  const schema = yup.object().shape({

    firstName: yup
      .string()
      .required("Write your name"),

    email: yup
      .string()
      .email("invalid email format")
      .required("Is required"),

      
    subject: yup
      .string()
      .required("Please write a subject"),
  })

  const { register, handleSubmit, formState: { errors } } = useForm(

    {
      resolver: yupResolver(schema)
    }


  );

  return (
    <>
      <div id='myFormContainer'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            <FormGroup>
              <Col>
                <label>Name</label>
              </Col>
              <Col>
                <input id="firstName" type="text" className="form-control" {...register("firstName")} />
                <FormText color='muted'>
                  {errors.firstName?.message}
                </FormText>
              </Col>
            </FormGroup>
          </Row>

          <Row className="mb-3">
            <FormGroup>
              <Col>
                <label>Email</label>
              </Col>
              <Col>
                <input id="email" type="email" className="form-control" {...register("email")} />
                <FormText color="muted">
                  {errors.email?.message}
                </FormText>
              </Col>
            </FormGroup>
          </Row>

          <Row className="mb-3">
            <FormGroup>
              <Col>
                <label>Subject</label>
              </Col>
              <Col>
                <input id="subject" type="text" className="form-control" {...register("subject")} />
                <FormText color="muted">
                  {errors.subject?.message}
                </FormText>
              </Col>
            </FormGroup>
          </Row>

          <Row className="mb-3">
            <FormGroup>
              <Col>
                <label>Message</label>
              </Col>
              <Col>
                <textarea name="" id="" cols="30" rows="5"></textarea>
              </Col>
            </FormGroup>
          </Row>

          <Row>
            <FormGroup>
              <Col>
                <button>Submit</button>
              </Col>
            </FormGroup>
          </Row>

        </form>
      </div>
    </>
  );
}

export default ContactForm;