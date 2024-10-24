import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Buttons from "../../../Component/Button";
import Deletebutton from "../../../Assets/trash.svg";
import { useEffect, useState } from "react";
import {
  createDpr,
  getActivity,
  getBuilding,
  getElevation,
  getManPower,
  getSurface,
  getSystem,
  getUnit,
} from "../../../Service";
import { useParams } from "react-router-dom";

function NewEntry(props) {
  const { id } = useParams();
  const [form, setForm] = useState({
    projectId: id,
    date: "",
    building: "",
    unit: "",
    elevation: "",
    surface: "",
    system: "",
    activity: "",
    area: 0,
    // materialCategory: "",
    // material: "",
    // usage: 0,
    company: "",
    numberofOperative: 0,
  });
  const [buildings, setBuilding] = useState([]);
  const [unit, setUnit] = useState([]);
  const [elevation, setElevation] = useState([]);
  const [surface, setSurface] = useState([]);
  const [system, setSystem] = useState([]);
  const [activity, setActivity] = useState([]);
  const [company, setCompany] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBuildings = async () => {
      try {
        const data = await getManPower(id);
        setCompany(data.data);
      } catch (error) {
        console.error("Fetch Company error:", error);
      }
    };

    fetchBuildings();
  }, [id]);

  useEffect(() => {
    const fetchBuildings = async () => {
      try {
        const data = await getBuilding(id);
        setBuilding(data.data);
      } catch (error) {
        console.error("Fetch Building error:", error);
      }
    };

    fetchBuildings();
  }, [id]);

  useEffect(() => {
    if (form.building !== "") {
      const fetchUnit = async () => {
        try {
          const data = await getUnit(form.building);
          setUnit(data.data);
        } catch (error) {
          console.error("Fetch Unit error:", error);
        }
      };

      fetchUnit();
    }
  }, [form.building]);

  useEffect(() => {
    if (form.unit !== "") {
      const fetchElevation = async () => {
        try {
          const data = await getElevation(form.unit);
          setElevation(data.data);
        } catch (error) {
          console.error("Fetch Elevation error:", error);
        }
      };

      fetchElevation();
    }
  }, [form.unit]);

  useEffect(() => {
    if (form.elevation !== "") {
      const fetchSurface = async () => {
        try {
          const data = await getSurface(form.elevation);
          setSurface(data.data);
        } catch (error) {
          console.error("Fetch Surface error:", error);
        }
      };

      fetchSurface();
    }
  }, [form.elevation]);

  useEffect(() => {
    if (form.surface !== "") {
      const fetchSystem = async () => {
        try {
          const data = await getSystem(form.surface);
          setSystem(data.data);
        } catch (error) {
          console.error("Fetch System error:", error);
        }
      };

      fetchSystem();
    }
  }, [form.surface]);

  useEffect(() => {
    if (form.system !== "") {
      const fetchActivity = async () => {
        try {
          const data = await getActivity(form.system);
          setActivity(data.data);
        } catch (error) {
          console.error("Fetch System error:", error);
        }
      };

      fetchActivity();
    }
  }, [form.system]);

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
      await createDpr(form);
      props.onHide();
    } catch (err) {
      setError("Server Error");
    }
  }

  return (
    <Modal
      {...props}
      size="xl"
      dialogClassName="modal-90w"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="date"
                        placeholder="Due date"
                        value={form.name}
                        onChange={onChange}
                      />
                    </Form.Group>
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Building</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        size="sm"
                        type="text"
                        value={form.building}
                        onChange={onChange}
                        name="building"
                      >
                        <option value="">Choose...</option>
                        {buildings.map((data) => {
                          return (
                            <option value={data._id}>
                              {data.buildingName}
                            </option>
                          );
                        })}
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Unit</Form.Label>
                      <Form.Select
                        type="text"
                        value={form.unit}
                        onChange={onChange}
                        name="unit"
                        aria-label="Default select example"
                        size="sm"
                      >
                        <option value="">Choose...</option>
                        {unit.map((data) => {
                          return (
                            <option value={data._id}>{data.unitName}</option>
                          );
                        })}
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Elevation</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        size="sm"
                        type="text"
                        value={form.elevation}
                        onChange={onChange}
                        name="elevation"
                      >
                        <option value="">Choose...</option>
                        {elevation.map((data) => {
                          return (
                            <option value={data._id}>
                              {data.elevationName}
                            </option>
                          );
                        })}
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Surface</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        size="sm"
                        type="text"
                        value={form.surface}
                        onChange={onChange}
                        name="surface"
                      >
                        <option value="">Choose...</option>
                        {surface.map((data) => {
                          return (
                            <option value={data._id}>{data.surfaceName}</option>
                          );
                        })}
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>System</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        size="sm"
                        type="text"
                        value={form.system}
                        onChange={onChange}
                        name="system"
                      >
                        <option value="">Choose...</option>
                        {system.map((data) => {
                          return (
                            <option value={data._id}>{data.systemName}</option>
                          );
                        })}
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Activity</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        size="sm"
                        type="text"
                        value={form.activity}
                        onChange={onChange}
                        name="activity"
                      >
                        <option value="">Choose...</option>
                        {activity.map((data) => {
                          return (
                            <option value={data._id}>
                              {data.activityName}
                            </option>
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
                      <Form.Label>Area Completed</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder=""
                        size="sm"
                        value={form.area}
                        onChange={onChange}
                        name="area"
                      />
                    </Form.Group>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
                    <Form.Label>Materials Used</Form.Label>
                  </div>
                  <div className="user-box">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12  ">
                      <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Item</Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              size="sm"
                              type="text"
                              // value={form.material}
                              // onChange={onChange}
                              // name="material"
                            >
                              <option>Choose...</option>
                              <option value="1">Material1</option>
                            </Form.Select>
                          </Form.Group>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                          <div className="row">
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>Usage</Form.Label>
                                <Form.Control
                                  type="number"
                                  placeholder=""
                                  size="sm"
                                  // value={form.usage}
                                  // onChange={onChange}
                                  // name="usage"
                                />
                              </Form.Group>
                            </div>
                            <div className="col col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 button-position-user">
                              <Buttons
                                type="button"
                                buttonStyle="black"
                                label="Add Usage"
                                size="small"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12  ">
                          <div className="row padding-box g-3">
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 box ">
                              <div className="user-box-wrap">
                                <div className="text1">paint</div>
                                <div className="user-box-wrap-flex text2">
                                  <div className="text3">12 L</div>
                                  <div>
                                    <img
                                      src={Deletebutton}
                                      alt=""
                                      height={20}
                                      width={20}
                                    />
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 box ">
                              <div className="user-box-wrap">
                                <div className="text1">paint</div>
                                <div className="user-box-wrap-flex text2">
                                  <div className="text3">12 L</div>
                                  <div>
                                    <img
                                      src={Deletebutton}
                                      alt=""
                                      height={20}
                                      width={20}
                                    />
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 box ">
                              <div className="user-box-wrap">
                                <div className="text1">paint</div>
                                <div className="user-box-wrap-flex text2">
                                  <div className="text3">12 L</div>
                                  <div>
                                    <img
                                      src={Deletebutton}
                                      alt=""
                                      height={20}
                                      width={20}
                                    />
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 box ">
                              <div className="user-box-wrap">
                                <div className="text1">paint</div>
                                <div className="user-box-wrap-flex text2">
                                  <div className="text3">12 L</div>
                                  <div>
                                    <img
                                      src={Deletebutton}
                                      alt=""
                                      height={20}
                                      width={20}
                                    />
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 box ">
                              <div className="user-box-wrap">
                                <div className="text1">paint</div>
                                <div className="user-box-wrap-flex text2">
                                  <div className="text3">12 L</div>
                                  <div>
                                    <img
                                      src={Deletebutton}
                                      alt=""
                                      height={20}
                                      width={20}
                                    />
                                  </div>
                                </div>
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Company</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        size="sm"
                        type="text"
                        value={form.company}
                        onChange={onChange}
                        name="company"
                      >
                        <option value="">Choose...</option>
                        {company.map((data) => {
                          return (
                            <option value={data._id}>{data.companyName}</option>
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
                      <Form.Label>Number of operatives</Form.Label>
                      <Form.Control
                        placeholder=""
                        size="sm"
                        type="number"
                        value={form.numberofOperative}
                        onChange={onChange}
                        name="numberofOperative"
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
            label="Save Entry"
            size="small"
            // onClick={props.onHide}
          />
        </Modal.Footer>
      </Form>
      {error}
    </Modal>
  );
}

export default NewEntry;
