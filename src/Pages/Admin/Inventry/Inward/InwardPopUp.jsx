import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Buttons from "../../../../Component/Button";
import "../style.css";

function AdminInwardPopUp(props) {
  return (
    <Modal
      {...props}
      size="xl"
      dialogClassName="modal-80w"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form>
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
                      <Form.Label>Product code</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        size="sm"
                        type="text"
                      >
                        <option>Choose...</option>
                        <option value="1">Category1</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Product Name</Form.Label>
                      <Form.Control size="sm" type="text" placeholder="" />
                    </Form.Group>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Quantity</Form.Label>
                      <Form.Control size="sm" type="text" placeholder="" />
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
                        type="text"
                      >
                        <option>Choose...</option>
                        <option value="1">Category1</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Quantity received</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        size="sm"
                        type="text"
                      >
                        <option>Choose...</option>
                        <option value="1">Category1</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Received Date</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        size="sm"
                        type="text"
                      >
                        <option>Choose...</option>
                        <option value="1">Category1</option>
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
            label="Accept Transaction"
            size="small"
            onClick={props.onHide}
          />
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default AdminInwardPopUp;
