import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Buttons from "../../../Component/Button";
import "../style.css";
import { useEffect, useState } from "react";
import {
  createItem,
  editItem,
  getBrand,
  getItemById,
  getMaterialCategory,
  getPackSize,
  getShade,
  getSupplier,
} from "../../../Service";

const initialForm = {
  category: "",
  brand: "",
  supplier: "",
  productName: "",
  productDescription: "",
  packSize: "",
  price: "",
  coveragePerUnit: "",
  shade: "",
  otherFeature: "",
};
function ItemPopUp(props) {
  const [form, setForm] = useState(initialForm);
  const [materialCategory, setMaterialCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const [packSize, setPackSize] = useState([]);
  const [shade, setShade] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMaterialCategory = async () => {
      try {
        const data = await getItemById(props.id);
        setForm(data.data);
      } catch (error) {
        console.error("Fetch purchase error:", error);
      }
    };

    if (props.show && props.mode === "edit") {
      fetchMaterialCategory();
    }
  }, [props.show]);

  useEffect(() => {
    const fetchMaterialCategory = async () => {
      try {
        const data = await getMaterialCategory();
        setMaterialCategory(data.data);
      } catch (error) {
        console.error("Fetch Material Category error:", error);
      }
    };
    fetchMaterialCategory();
  }, []);

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const data = await getBrand();
        setBrand(data.data);
      } catch (error) {
        console.error("Fetch Brand error:", error);
      }
    };
    fetchBrand();
  }, []);

  useEffect(() => {
    const fetchSupplier = async () => {
      try {
        const data = await getSupplier();
        setSupplier(data.data);
      } catch (error) {
        console.error("Fetch Supplier error:", error);
      }
    };
    fetchSupplier();
  }, []);

  useEffect(() => {
    const fetchPackSize = async () => {
      try {
        const data = await getPackSize();
        setPackSize(data.data);
      } catch (error) {
        console.error("Fetch Pack size error:", error);
      }
    };
    fetchPackSize();
  }, []);

  useEffect(() => {
    const fetchShade = async () => {
      try {
        const data = await getShade();
        setShade(data.data);
      } catch (error) {
        console.error("Fetch Pack size error:", error);
      }
    };
    fetchShade();
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
    if (props.mode === "add") {
      try {
        const data = await createItem(form);
        setForm(initialForm);
        props.onHide(await data);
      } catch (err) {
        setError("Server Error");
      }
    } else if (props.mode === "edit") {
      try {
        const data = await editItem(form, props.id);
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
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      size="sm"
                      type="text"
                      value={form.category}
                      name="category"
                      onChange={onChange}
                    >
                      <option>Choose...</option>
                      {materialCategory.map((data) => {
                        return (
                          <option value={data._id}>{data.category}</option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Brand</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      size="sm"
                      type="text"
                      value={form.brand}
                      name="brand"
                      onChange={onChange}
                    >
                      <option>Choose...</option>
                      {brand.map((data) => {
                        return <option value={data._id}>{data.brand}</option>;
                      })}
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Supplier</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      size="sm"
                      type="text"
                      value={form.supplier}
                      name="supplier"
                      onChange={onChange}
                    >
                      <option>Choose...</option>
                      {supplier.map((data) => {
                        return (
                          <option value={data._id}>{data.supplierName}</option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Pack Size</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      size="sm"
                      type="text"
                      value={form.packSize}
                      name="packSize"
                      onChange={onChange}
                    >
                      <option>Choose...</option>
                      {packSize.map((data) => {
                        return (
                          <option value={data._id}>{data.packSize}</option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Shade</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      size="sm"
                      type="text"
                      value={form.shade}
                      name="shade"
                      onChange={onChange}
                    >
                      <option>Choose...</option>
                      {shade.map((data) => {
                        return <option value={data._id}>{data.shade}</option>;
                      })}
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder=""
                      value={form.productName}
                      name="productName"
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
                      <Form.Label>Product Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={form.productDescription}
                        name="productDescription"
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
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder=""
                      value={form.price}
                      name="price"
                      onChange={onChange}
                    />
                  </Form.Group>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Coverage Per Unit</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder=""
                      value={form.coveragePerUnit}
                      name="coveragePerUnit"
                      onChange={onChange}
                    />
                  </Form.Group>
                </div>
                {/* <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Shade</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder=""
                      value={form.shade}
                      name="shade"
                      onChange={onChange}
                    />
                  </Form.Group>
                </div> */}
                <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Other Feature</Form.Label>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder=""
                      value={form.otherFeature}
                      name="otherFeature"
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
            label="Add Item"
            size="small"
            // onClick={props.onHide}
          />
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ItemPopUp;
