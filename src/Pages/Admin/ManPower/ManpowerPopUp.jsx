import React, { useEffect, useState } from "react";
import Button from "../../../Component/Button";
import Modal from "react-bootstrap/Modal";
import { createManPower } from "../../../Service";
import { Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

function MyVerticallyCenteredModal(props) {
  const [form, setForm] = useState({
    projectId: props.projectId,
    companyName: "",
    designation: "",
    costPerDay: 0,
    remarks: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (props.isEdit) {
      setForm({
        projectId: props.projectId,
        companyName: props.manData.companyName,
        designation: props.manData.designation,
        costPerDay: props.manData.costPerDay,
        remarks: props.manData.remarks,
      });
    } else {
      setForm({
        projectId: props.projectId,
        companyName: "",
        designation: "",
        costPerDay: 0,
        remarks: "",
      });
    }
  }, [props.isEdit, props.manData,props.projectId]);

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
      const data = await createManPower(form);
      props.onHide(await data);
    } catch (err) {
      setError("Server Error");
    }
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
            <Form.Label>Company Name</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                value={form.companyName}
                onChange={onChange}
                name="companyName"
              />
            </InputGroup>
          </div>
          <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
              <Form.Label>Designation</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={form.designation}
                  onChange={onChange}
                  name="designation"
                />
              </InputGroup>
            </div>
            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
              <Form.Label> Cost per day</Form.Label>
              <InputGroup>
                <Form.Control
                  type="number"
                  value={form.costPerDay}
                  onChange={onChange}
                  name="costPerDay"
                />
              </InputGroup>
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <Form.Label> Remarks</Form.Label>
            <InputGroup>
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                value={form.remarks}
                onChange={onChange}
                name="remarks"
              />
            </InputGroup>
          </div>
          <br />
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
            <div className="d-flex justify-content-end gap-3">
              <Button
                buttonStyle="black"
                label="Cancel"
                onClick={props.onHide}
                type="button"
              />
              <Button buttonStyle="primary" label="Save" type="submit" />
            </div>
            {error}
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
