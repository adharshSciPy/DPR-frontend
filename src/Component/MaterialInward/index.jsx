import React, { useState } from "react";
import "./style.css";
import Button from "../../Component/Button";
// import AdminInwardPopUp from "../../Pages/Admin/Inventry/Inward/InwardPopUp";
import InwardPopUp from "../../Pages/User/StockManagement/MaterialInward/InwardPopUp";

const MaterialInward = ({ data,added }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 cursor-pointer">
      <div className="card materialinward-user-body">
        <div className="materialinward">
          <div className="col col-8 col-sm-8 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
            <div>
              <h5 className="card-title">{data.item.productName}</h5>
              {/* <div>Location</div> */}
              <div className="card-text ">Quantity: {data.stockQuatity}</div>
            </div>
          </div>
          <div className="col col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2 inward-btn-date">
            {/* <div className="inward-date">date</div> */}
            <div className="inward-btn">
              <Button
                label=" View & verify"
                variant="primary"
                className="butn-or"
                size="small"
                onClick={() => setModalShow(true)}
              >
                View & verify
              </Button>

              <InwardPopUp
                id={data._id}
                show={modalShow}
                onHide={() => setModalShow(false)}
                added={added}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialInward;
