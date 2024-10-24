import React, { useEffect, useState } from "react";

import InventryNav from "../../../../Component/InventryNav";
import Button from "../../../../Component/Button";
import OutwardPopUp from "./OutwardPopUp";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../../../Redux/reducer";
import "../style.css";
import { getMaterialOutward } from "../../../../Service";

const Outward = () => {
  const [modalShow, setModalShow] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [inward, setInward] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPurchase = async () => {
      try {
        const data = await getMaterialOutward();
        setInward(data.data);
      } catch (error) {
        console.error("Fetch purchase error:", error);
      }
    };

    fetchPurchase();

    dispatch(setActivePage("inventory"));
  }, [dispatch, isAdded]);
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row">
            <div className="inventry-padding col col-12 col-sm-9 col-md-9 col-lg-9 col-xl-10 col-xxl-10">
              <InventryNav active={"outward"} />
            </div>
            {/* <ProjectList /> */}

            <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 btn-alignment">
              <Button
                size="small"
                label=" New Transaction"
                variant="primary"
                className="butn-or"
                onClick={() => setModalShow(true)}
              >
                Transaction
              </Button>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 cursor-pointer">
              {inward.map((data) => {
                return (
                  <div className="card card-user-body">
                    <div>
                      <h5 className="card-title">{data.item.productName}</h5>
                      {/* <div>Product Code</div> */}
                      <div className="card-text ">
                        Quantity Sent: {data.quantity}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <OutwardPopUp
        show={modalShow}
        onHide={() => setModalShow(false)}
        added={() => {
          setIsAdded(!isAdded);
        }}
      />
    </div>
  );
};

export default Outward;
