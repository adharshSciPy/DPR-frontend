import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Buttons from "../../../../Component/Button";
import "../style.css";
import { useEffect, useState } from "react";
import { createPurchase, getItem, getLocation } from "../../../../Service";

const initialForm = {
  item: "",
  location: "",
  stockQuatity: "",
  measurableUnit: "",
};
function PurchasePopUp(props) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [item, setItem] = useState([]);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data = await getItem();
        setItem(data.data);
      } catch (error) {
        console.error("Fetch purchase error:", error);
      }
    };

    fetchItem();
  }, []);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const data = await getLocation();
        setLocation(data.data);
      } catch (error) {
        console.error("Fetch purchase error:", error);
      }
    };

    fetchLocation();
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
      const data = await createPurchase(form);
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
      size="xl"
      dialogClassName="modal-80w"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                  <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Item</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        size="sm"
                        value={form.item}
                        name="item"
                        onChange={onChange}
                      >
                        <option>Choose...</option>
                        {item.map((data) => {
                          return (
                            <option value={data._id}>{data.productName}</option>
                          );
                        })}
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Location</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        size="sm"
                        value={form.location}
                        name="location"
                        onChange={onChange}
                      >
                        <option>Choose...</option>
                        {location.map((data) => {
                          return (
                            <option value={data.id}>{data.location}</option>
                          );
                        })}
                      </Form.Select>
                    </Form.Group>
                  </div>

                  <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Stock Quantity</Form.Label>
                      <Form.Control
                        size="sm"
                        type="number"
                        placeholder=""
                        value={form.stockQuatity}
                        name="stockQuatity"
                        onChange={onChange}
                      />
                    </Form.Group>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Measurable Unit</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        size="sm"
                        value={form.measurableUnit}
                        name="measurableUnit"
                        onChange={onChange}
                      >
                        <option>Choose...</option>
                        <option value="Sqm">Sqm</option>
                        <option value="cm">cm</option>
                        <option value="meter">meter</option>
                      </Form.Select>
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
            label="Save Entry"
            size="small"
            // onClick={props.onHide}
          />
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default PurchasePopUp;
