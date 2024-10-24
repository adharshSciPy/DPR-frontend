import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Buttons from "../../../Component/Button";
import "../style.css";
import { useEffect, useState } from "react";
import {
  createSupplier,
  editSupplier,
  getSupplierById,
} from "../../../Service";

const initialForm = {
  supplierName: "",
  conactName: "",
  address: "",
  phone: "",
  email: "",
  supplierTNR: "",
};
function SupplierPopUp(props) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMaterialCategory = async () => {
      try {
        const data = await getSupplierById(props.id);
        setForm(data.data);
      } catch (error) {
        console.error("Fetch purchase error:", error);
      }
    };

    if (props.show && props.mode === "edit") {
      fetchMaterialCategory();
    }
  }, [props.show]);

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
    if (props.mode === "add") {
      try {
        const data = await createSupplier(form);
        setForm(initialForm);
        props.onHide(await data);
      } catch (err) {
        setError("Server Error");
      }
    } else if (props.mode === "edit") {
      try {
        const data = await editSupplier(form, props.id);
        setForm(initialForm);
        props.onHide(await data);
      } catch (err) {
        setError("Server Error");
      }
    }
  }

  return (
    <Modal
      {...props}
      size="xl"
      dialogClassName="modal-80w"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onExited={() => {
        setForm(initialForm);
      }}
    >
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Supplier Name</Form.Label>
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder=""
                        value={form.supplierName}
                        name="supplierName"
                        onChange={onChange}
                      />
                    </Form.Group>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Contact Name</Form.Label>
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder=""
                        value={form.conactName}
                        name="conactName"
                        onChange={onChange}
                      />
                    </Form.Group>
                  </div>

                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          value={form.address}
                          name="address"
                          onChange={onChange}
                        />
                      </Form.Group>
                    </Form.Group>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder=""
                        value={form.phone}
                        name="phone"
                        onChange={onChange}
                      />
                    </Form.Group>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder=""
                        value={form.email}
                        name="email"
                        onChange={onChange}
                      />
                    </Form.Group>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Supplier TRN</Form.Label>
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder=""
                        value={form.supplierTNR}
                        name="supplierTNR"
                        onChange={onChange}
                      />
                    </Form.Group>
                  </div>
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
            label="Add Supplier"
            size="small"
            // onClick={props.onHide}
          />
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default SupplierPopUp;
