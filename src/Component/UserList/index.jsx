import React, { useEffect, useState } from "react";
import "./style.css";
import Button from "../Button";
import { banUser } from "../../Service";

const UserList = ({ data }) => {
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    setEnable(data.isBanned);
  }, [data.isBanned]);

  return (
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
      <div className="card card-user-body">
        <div>
          <h5 className="card-title">{data.username}</h5>
          <p className="card-text">{data.role}</p>
        </div>
        {/* <button
          className={`btnn ${enable ? "btnn-black" : "btnn-red"}`}
          onClick={() => {
            setEnable(!enable);
          }}
        >
          {enable ? "Enable" : "Disable"}
        </button> */}
        <Button
          buttonStyle={`${enable ? "black" : "danger"}`}
          label={`${enable ? "Enable" : "Disable"}`}
          onClick={() => {
            setEnable(!enable);
            banUser({ clientId: data._id });
          }}
          size="small"
        />
      </div>
    </div>
  );
};

export default UserList;
