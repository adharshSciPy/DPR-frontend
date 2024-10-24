import React from "react";

const MaterialListCard = ({ data,onClick }) => {
  return (
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 cursor-pointer" onClick={onClick}>
      <div className="card">
        <div className="card-header">{data.companyName}</div>
        <div className="card-body">
          <p>{data.remarks}</p>
        </div>
      </div>
    </div>
  );
};

export default MaterialListCard;
