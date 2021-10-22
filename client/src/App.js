// function App() {
//   return (
//     <div className="App">
//      <p>Hello!</p>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Button,
  OverlayTrigger,
  Tooltip,
  Form,
  FormControl,
} from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import { message, Typography, Modal } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import axios from "./commons/axios.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import image from "./components/1.png";
import validator from "validator";
const { Link } = Typography;

message.config({
  top: 500,
  duration: 2,
  maxCount: 3,
  rtl: true,
  prefixCls: "my-message",
});

function App(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const [popupOpen, setpopupOpen] = useState(false);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {" "}
      be in touch with us{" "}
    </Tooltip>
  );

  const showModal = () => {
    setpopupOpen(true);
  };

  const handleOk = () => {
    setpopupOpen(false);
  };

  const handleCancel = () => {
    setpopupOpen(false);
  };

  //post the request to database
  const onRequest = (props) => {
    console.log(name);
    console.log(email);
    console.log(confirmEmail);

    //if the name and email are not null
    if (name && email && confirmEmail) {
      //check if the email address is valid
      if (email === confirmEmail) {
        if (validator.isEmail(email)) {
          console.log("email confirmed");
          const updateBody = {
            name: name,
            email: email,
          };
          {
            cart: JSON.stringify(updateBody);
          }
          console.log(updateBody);
          axios.post("/", updateBody).then((response) => {
            if (response.data.success) {
              message.success("Thank you for reaching out!");
              console.log("send success");
            } else {
              message.error(response.data.error);
              console.log(response.data.error);
              console.log("send error");
            }
          });
          setpopupOpen(false);
        } else {
          console.log("Please enter a valid email address");
          message.error("Please enter a valid email address");
        }
      } else {
        message.error("Your email address is not consistent");
        console.log("Your email address is not consistent");
      }
    } else {
      console.log("Please enter completed & valid information");
      message.error("Please enter completed & valid information");
    }
  };

  //modal will open once button being clicked
  const RequestModal = () => {
    return (
      <>
        <Modal
          title="Hi, nice to meet you"
          visible={popupOpen}
          onOk={() => {
            handleOk();
            onRequest();
          }}
          onCancel={handleCancel}
        >
          <Form>
            <Form.Group controlId="formBasic">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                style={{ fontSize: 12 }}
                placeholder="At least 3 characters long"
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Text className="text-muted">
                Your info is secured with us.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <FormControl
                style={{ fontSize: 12 }}
                type="email"
                placeholder="Please enter your valid email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="confirmEmail">
              <Form.Label>Confirm Email</Form.Label>
              <FormControl
                style={{ fontSize: 12 }}
                type="email"
                placeholder="Please enter your email again"
                onChange={(e) => setConfirmEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal>
      </>
    );
  };

  return (
    <div style={{ height: "100vh" }}>
      <div
        id="Request"
        style={{
          width: "70%",
          margin: "auto",
          marginTop: "2%",
        }}
      >
        <Jumbotron
          style={{
            width: "90%",
            height: "100vh",
            backgroundColor: "#ffffff",
            margin: "auto",
          }}
        >
          <div className="App">
            <Header />
          </div>
          <center>
            <img
              src={image}
              style={{ width: "50%", marginTop: "10vh" }}
              alt="logo"
            />
          </center>

          <div
            style={{
              color: "#85CBCC",
              padding: 8,
              fontSize: 50,
            }}
          >
            A better way to enjoy everyday.
          </div>
          <br />
          <h5 style={{ color: "#2d8085" }}>
            Be the first one to know when we launch
          </h5>

          <br />

          <div>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Button
                onClick={showModal}
                aria-controls="example-collapse-text"
                variant="primary"
                size="lg"
                block
                style={{
                  fontSize: "20px",
                  color: "#faffff",
                  backgroundColor: "#85CBCC",
                  borderColor: "#F3F3F3",
                  marginBottom: "20vh",
                }}
              >
                Request an invite
              </Button>
            </OverlayTrigger>

            <RequestModal />
          </div>
          <br />
        </Jumbotron>
        <Footer />
      </div>
    </div>
  );
}

export default App;
