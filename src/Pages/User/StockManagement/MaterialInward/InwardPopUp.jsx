import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Buttons from "../../../../Component/Button";
import "../style.css";
import { useEffect, useState } from "react";
import { addMaterialInward } from "../../../../Service";

const initialForm = { receivedQuantity: "", _id: "", date: "" };
function InwardPopUp(props) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  useEffect(() => {
    setForm((prev) => {
      return {
        ...prev,
        _id: props.id,
      };
    });
  }, []);

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
      const data = await addMaterialInward(form);
      setForm(initialForm);
      props.onHide(await data);
      props.added();
    } catch (err) {
      setError("Server Error");
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      dialogClassName="modal-80w"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                      size="sm"
                      type="number"
                      placeholder=""
                      name="receivedQuantity"
                      value={form.receivedQuantity}
                      onChange={onChange}
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <br />
        <br />
        <Modal.Footer>
          <Buttons
            buttonStyle="black"
            type="button"
            label="Cancel"
            size="small"
            onClick={props.onHide}
          />
          <Buttons
            buttonStyle="primary"
            type="submit"
            label="Accept Transaction"
            size="small"
            onClick={props.onHide}
          />
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default InwardPopUp;
