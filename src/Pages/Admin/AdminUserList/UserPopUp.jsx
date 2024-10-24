import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";
import { createUser } from "../../../Service";

// const UserPopUp = (props) => {
const initialForm = { username: "", password: "", role: "" };
function UserPopUp(props) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  function onChange(e) {
    const { name, value, type } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: type === "number" ? parseFloat(value) : value,
      };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const data = await createUser(form);
      setForm(initialForm);
      props.onHide(await data);
    } catch (err) {
      setError("Server Error");
    }
  }
  return (
    <div>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form onSubmit={onSubmit}>
          <Modal.Body className="newuser-body">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <br />
              <div className="newuser-body-wrap">
                <div></div>
                <div>
                  {" "}
                  <Form.Label>User name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="username"
                    value={form.username}
                    onChange={onChange}
                  />
                </div>
                <div>
                  {" "}
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="newuser-body-wrap">
                <div></div>
                <div>
                  {" "}
                  <label for="exampleFormControlInput1" class="form-label">
                    Role
                  </label>
                  <select
                    className="form-select form-select-sm"
                    aria-label="Small select example"
                    name="role"
                    value={form.role}
                    onChange={onChange}
                  >
                    <option selected>Choose...</option>
                    <option value="User">User</option>
                    <option value="Manager">Manager</option>
                  </select>
                </div>
              </div>
            </Form.Group>
            {error}
          </Modal.Body>
          <Modal.Footer className="newuser-body">
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={props.onHide}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary btn-sm"
              // onClick={props.onHide}
            >
              Save changes
            </button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default UserPopUp;
