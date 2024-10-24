import React, { useEffect, useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import UserPopUp from "./UserPopUp";
import UserList from "../../../Component/UserList";
import { getClient } from "../../../Service";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../../Redux/reducer";

/* <div class="col col-0 col-sm-0 col-md-0 col-lg-3 col-xl-4 col-xxl-4"></div> */

const AdminUserList = () => {
  const [userPopUp, setuserPopUp] = useState(false);
  const [clients, setClients] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const data = await getClient();
        setClients(data.data);
      } catch (error) {
        console.error("Fetch Client error:", error);
      }
    };

    dispatch(setActivePage("user"));

    fetchClients();
  }, [isAdded, dispatch]);

  function added() {
    setIsAdded(!isAdded);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-3">
            <div className="pb-2 pt-1 d-flex justify-content-end">
              <Button
                variant="primary"
                className="butn-or"
                onClick={() => setuserPopUp(true)}
              >
                New user
              </Button>
            </div>
            <div className="col col-5 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
              {/* <div className="admin-addproject-btn"> */}
              <UserPopUp
                show={userPopUp}
                onHide={() => {
                  added();
                  setuserPopUp(false);
                }}
              />
              {/* </div> */}
            </div>
            {clients.map((data) => {
              return <UserList data={data} />;
            })}
            {/* <UserList /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUserList;
