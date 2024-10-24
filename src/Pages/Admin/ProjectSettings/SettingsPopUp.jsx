import React, { useState } from "react";
import Button from "../../../Component/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./style.css";
import {
  createActivity,
  createBuilding,
  createElevation,
  createSurface,
  createSystem,
  createUnit,
} from "../../../Service";

const initialForm = { name: "" };

function SettingsPopUp(props) {
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
      if (props.formType === "Building") {
        const data = await createBuilding({
          projectId: props.projectId,
          buildingName: form.name,
        });
        props.onHide(await data);
      } else if (props.formType === "Unit") {
        const data = await createUnit({
          buildingId: props.projectId,
          unitName: form.name,
        });
        props.onHide(await data);
      } else if (props.formType === "Elevation") {
        const data = await createElevation({
          unitId: props.projectId,
          elevationName: form.name,
        });
        props.onHide(await data);
      } else if (props.formType === "Surface") {
        const data = await createSurface({
          elevationId: props.projectId,
          surfaceName: form.name,
          area: Number(form.area),
        });
        props.onHide(await data);
      } else if (props.formType === "System") {
        const data = await createSystem({
          surfaceId: props.projectId,
          systemName: form.name,
        });
        props.onHide(await data);
      } else if (props.formType === "Activity") {
        const data = await createActivity({
          systemId: props.projectId,
          activityName: form.name,
          manPowerperDay: Number(form.area),
        });
        props.onHide(await data);
      }
      setForm(initialForm);
    } catch (err) {
      setError("Server Error");
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-3 ">
            <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Form onSubmit={onSubmit}>
                <Modal.Body>
                  <div className="row">
                    <div className="row">
                      <div className="col col-0 col-sm-0 col-md-2 col-lg-2 col-xl-2 col-xxl-2 "></div>
                      <div className="col col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 ">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>{props.formType} Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            size="sm"
                            name="name"
                            value={form.name}
                            onChange={onChange}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col col-0 col-sm-0 col-md-2 col-lg-2 col-xl-2 col-xxl-2 "></div>
                      {(props.formType === "Surface" ||
                        props.formType === "Activity") && (
                        <div className="col col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 ">
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>
                              {props.formType === "Surface"
                                ? "Surface Area"
                                : "Manpower Per Day"}
                            </Form.Label>
                            <Form.Control
                              type="number"
                              placeholder=""
                              size="sm"
                              name="area"
                              value={form?.area}
                              onChange={onChange}
                            />
                          </Form.Group>
                          {error}
                        </div>
                      )}
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    buttonStyle="grey"
                    type="button"
                    onClick={props.onHide}
                    size="small"
                    label="Cancel"
                  />

                  <Button
                    onClick={props.onHide}
                    type="submit"
                    size="small"
                    label="Save Building"
                  />
                </Modal.Footer>
              </Form>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPopUp;
