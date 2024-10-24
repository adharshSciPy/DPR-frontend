import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./style.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "../../../Component/Button";
import {
  createProject,
  getClient,
  getProjectById,
  updateProject,
} from "../../../Service";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { assignId } from "../../../Redux/reducer";

const CreateProject = ({ setProjectHeading }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [mode, setMode] = useState("");
  const [error, setError] = useState("");
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      projectCode: "",
      location: "",
      contact: "",
      clients: "",
      clientName: "",
      focalpointname: "",
      clientcontact: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Project Name is Required"),
      description: Yup.string().required("Work description is Required"),
      projectCode: Yup.string().required("Required"),
      location: Yup.string().required("Required"),
      contact: Yup.string().required("Required"),
      clients: Yup.string().required("Required"),
      clientName: Yup.string().required("Required"),
      focalpointname: Yup.string().required("Required"),
      clientcontact: Yup.number().required("Required"),
    }),
    onSubmit: (values) => {
      onSubmit();
    },
  });

  const goto = useNavigate();

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const data = await getClient();
        setUserList(data.data);
      } catch (error) {
        console.error("Fetch Client error:", error);
      }
    };

    fetchClients();
  }, []);

  useEffect(() => {
    if (id === "create") {
      setMode("create");
      setProjectHeading("");
      dispatch(assignId(""));

      setLoading(false); // No need to wait for data
    } else {
      setMode("view");
      dispatch(assignId(id));
      const fetchProject = async () => {
        try {
          const data = await getProjectById(id);
          formik.setValues(data.data); // Set Formik values after fetching data
          setProjectHeading(data.data.name);
        } catch (error) {
          console.error("Fetch Client error:", error);
        } finally {
          setLoading(false); // Set loading to false after data is fetched
        }
      };

      fetchProject();
    }
  }, [id, dispatch]);

  function onChange(e) {
    const { name, value, type } = e.target;
    formik.setFieldValue(name, type === "number" ? parseFloat(value) : value);
  }

  async function onSubmit() {
    if (mode === "create") {
      try {
        const projectData = await createProject(formik.values);
        goto(`/admin/project/details/${projectData.data._id}`);
      } catch (err) {
        setError("Server Error");
      }
    }
    if (mode === "edit") {
      try {
        await updateProject(formik.values, id);
      } catch (err) {
        setError("Server Error");
      }
      setMode("view");
    }
  }

  if (loading) return <div>Loading...</div>; // Conditionally render loading state

  return (
    <div>
      <div className="d-flex justify-content-end">
        {mode === "view" && (
          <Button
            buttonStyle="primary"
            label="Edit"
            onClick={() => {
              setMode("edit");
            }}
          />
        )}
      </div>
      <Form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <Form.Label>Project Name</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    onChange={onChange}
                    name="name"
                    isInvalid={!!formik.errors.name && formik.touched.name}
                    disabled={mode === "view"}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.name}
                  </Form.Control.Feedback>
                </InputGroup>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <Form.Label>Project Code</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    value={formik.values.projectCode}
                    onBlur={formik.handleBlur}
                    onChange={onChange}
                    name="projectCode"
                    isInvalid={
                      !!formik.errors.projectCode && formik.touched.projectCode
                    }
                    disabled={mode === "view"}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.projectCode}
                  </Form.Control.Feedback>
                </InputGroup>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <Form.Label>Project Location</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    value={formik.values.location}
                    onChange={onChange}
                    onBlur={formik.handleBlur}
                    name="location"
                    isInvalid={
                      !!formik.errors.location && formik.touched.location
                    }
                    disabled={mode === "view"}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.location}
                  </Form.Control.Feedback>
                </InputGroup>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <Form.Label>Work description</Form.Label>
                <InputGroup>
                  <Form.Control
                    as="textarea"
                    aria-label="With textarea"
                    value={formik.values.description}
                    onBlur={formik.handleBlur}
                    onChange={onChange}
                    name="description"
                    isInvalid={
                      !!formik.errors.description && formik.touched.description
                    }
                    disabled={mode === "view"}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.description}
                  </Form.Control.Feedback>
                </InputGroup>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <Form.Label>Contact no</Form.Label>
                <InputGroup>
                  <Form.Control
                    value={formik.values.contact}
                    onBlur={formik.handleBlur}
                    isInvalid={
                      !!formik.errors.contact && formik.touched.contact
                    }
                    onChange={onChange}
                    name="contact"
                    disabled={mode === "view"}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.contact}
                  </Form.Control.Feedback>
                </InputGroup>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <Form.Label>User</Form.Label>
                <InputGroup>
                  <Form.Select
                    aria-label="Default select example"
                    value={formik.values.clients}
                    onBlur={formik.handleBlur}
                    isInvalid={
                      !!formik.errors.clients && formik.touched.clients
                    }
                    name="clients"
                    onChange={onChange}
                    disabled={mode === "view"}
                  >
                    <option value="">Select Client</option>
                    {userList.map((user) => {
                      return (
                        <option key={user._id} value={user._id}>
                          {user.username}
                        </option>
                      );
                    })}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.clients}
                  </Form.Control.Feedback>
                </InputGroup>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <Form.Label>Client Name</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    value={formik.values.clientName}
                    onBlur={formik.handleBlur}
                    onChange={onChange}
                    name="clientName"
                    isInvalid={
                      !!formik.errors.clientName && formik.touched.clientName
                    }
                    disabled={mode === "view"}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.clientName}
                  </Form.Control.Feedback>
                </InputGroup>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <Form.Label>Focal Point</Form.Label>
                <InputGroup>
                  <Form.Control
                    value={formik.values.focalpointname}
                    onBlur={formik.handleBlur}
                    onChange={onChange}
                    name="focalpointname"
                    isInvalid={
                      !!formik.errors.focalpointname &&
                      formik.touched.focalpointname
                    }
                    disabled={mode === "view"}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.focalpointname}
                  </Form.Control.Feedback>
                </InputGroup>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <Form.Label>Client Contact no</Form.Label>
                <InputGroup>
                  <Form.Control
                    value={formik.values.clientcontact}
                    onBlur={formik.handleBlur}
                    onChange={onChange}
                    name="clientcontact"
                    isInvalid={
                      !!formik.errors.clientcontact &&
                      formik.touched.clientcontact
                    }
                    disabled={mode === "view"}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.clientcontact}
                  </Form.Control.Feedback>
                </InputGroup>
              </div>
              {(mode === "edit" || mode === "create") && (
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 text-end mt-4">
                  <Button
                    buttonStyle="primary"
                    label={mode === "create" ? "Create" : "Save"}
                    type="submit"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CreateProject;
