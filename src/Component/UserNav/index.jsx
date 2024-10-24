import React from "react";
import Button from "../../Component/Button";
import "./style.css";

import NewEntry from "../../Pages/User/UserDashboard/NewEntry";

const UserNav = () => {
  const [userPopUp, setuserPopUp] = React.useState(false);
  return (
    <div className="user-row">
      {/* <div className="col col-8 col-sm-9 col-md-10 col-lg-10 col-xl-10 col-xxl-11 ">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <div className="nav-link active" aria-current="page">
              DPR Entries
            </div>
          </li>
        </ul>
      </div> */}
      <div>
        <Button
          buttonStyle="primary"
          size="lg"
          label="Add Entry"
          onClick={() => setuserPopUp(true)}
        />
        <NewEntry show={userPopUp} onHide={() => setuserPopUp(false)} />
      </div>
    </div>
  );
};

export default UserNav;
