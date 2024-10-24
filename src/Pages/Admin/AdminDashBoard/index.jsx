import React, { useEffect, useState } from "react";
import "./style.css";
import ProjectList from "../../../Component/ProjectList";
import { getProject } from "../../../Service";
import { useNavigate } from "react-router-dom";
import Button from "../../../Component/Button";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../../Redux/reducer";

const AdminView = () => {
  const [projects, setProjects] = useState([]);

  const dispatch = useDispatch();
  const goto = useNavigate();
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProject();
        setProjects(data.data);
      } catch (error) {
        console.error("Fetch projects error:", error);
      }
    };

    dispatch(setActivePage("project"));

    fetchProjects();
  }, [dispatch]);
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-3">
            <div className="pb-2 d-flex justify-content-end">
              <Button
                label="New Project"
                buttonStyle="primary"
                onClick={() => {
                  goto("/admin/project/details/create");
                }}
              />
            </div>

            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 pointer p-2">
              {projects.map((data) => {
                return (
                  <ProjectList
                    data={data}
                    onClick={() => {
                      goto(`/admin/project/details/${data._id}`);
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminView;
