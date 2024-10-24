import React, { useEffect, useState } from "react";
import "./style.css";
import ProjectList from "../../../Component/ProjectList";
import UserLayout from "../../../Layout/UserLayout";
import { getClientProject } from "../../../Service";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../../Redux/reducer";

const UserDashboard = () => {
  const [projects, setProjects] = useState([]);

  const dispatch = useDispatch();

  const goto = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getClientProject();
        setProjects(data.data);
      } catch (error) {
        console.error("Fetch projects error:", error);
      }
    };

    dispatch(setActivePage("project"));

    fetchProjects();
  }, [dispatch]);
  return (
    <div>
      <UserLayout isUserDashboard={true} />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 pointer user-list-padding ">
            {projects.map((data) => {
              return (
                <ProjectList
                  data={data}
                  onClick={() => {
                    goto(`/user/dprentry/${data._id}`);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
