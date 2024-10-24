import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Buttons from "../../../Component/Button";
import "../style.css";
import { useEffect, useState } from "react";
import { createBrand, editBrand, getBrandById } from "../../../Service";

const initialForm = { brand: "" };
function MaterialCategoriesPopUp(props) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMaterialCategory = async () => {
      try {
        const data = await getBrandById(props.id);
        setForm({ brand: data.data.brand });
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
        const data = await createBrand(form);
        setForm(initialForm);
        props.onHide(await data);
      } catch (err) {
        setError("Server Error");
      }
    } else if (props.mode === "edit") {
      console.log(form, "Form");

      try {
        const data = await editBrand(form, props.id);
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
      size="lg"
      dialogClassName="modal-80w"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onExited={() => {
        setForm(initialForm);
      }}
    >
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Brand</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder=""
                      value={form.brand}
                      name="brand"
                      onChange={onChange}
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>

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
            label="Add Brand"
            size="small"
            // onClick={props.onHide}
          />
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default MaterialCategoriesPopUp;
