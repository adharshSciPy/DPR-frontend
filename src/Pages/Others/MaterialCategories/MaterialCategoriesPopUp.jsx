import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Buttons from "../../../Component/Button";
import "../style.css";
import { useEffect, useState } from "react";
import {
  createMaterialCategory,
  editMaterialCategory,
  getMaterialCategoryById,
} from "../../../Service";

const initialForm = { category: "" };
function MaterialCategoriesPopUp(props) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMaterialCategory = async () => {
      try {
        const data = await getMaterialCategoryById(props.id);
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
        const data = await createMaterialCategory(form);
        setForm(initialForm);
        props.onHide(await data);
      } catch (err) {
        setError("Server Error");
      }
    } else if (props.mode === "edit") {
      try {
        const data = await editMaterialCategory(form, props.id);
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
                <div className="col col-0 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 "></div>
                <div className="col col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8 ">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder=""
                      value={form.category}
                      name="category"
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
            label="Add Category"
            size="small"
            // onClick={props.onHide}
          />
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default MaterialCategoriesPopUp;
