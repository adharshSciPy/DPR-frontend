import React, { useEffect, useState } from "react";

import InventryNav from "../../../../Component/InventryNav";
import Button from "../../../../Component/Button";
import PurchasePopUp from "./PurchasePopUp";
import "../style.css";
import { getPurchase } from "../../../../Service";
import ProjectList from "../../../../Component/ProjectList";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../../../Redux/reducer";

const Purchase = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [purchase, setPurchase] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPurchase = async () => {
      try {
        const data = await getPurchase();
        setPurchase(data.data);
      } catch (error) {
        console.error("Fetch purchase error:", error);
      }
    };

    dispatch(setActivePage("inventory"));

    fetchPurchase();
  }, [dispatch, isAdded]);
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row">
            <div className="inventry-padding col col-12 col-sm-9 col-md-9 col-lg-9 col-xl-10 col-xxl-10">
              <InventryNav active="purchase" />
            </div>
            {/* <ProjectList /> */}

            <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 btn-alignment">
              <Button
                size="small"
                label=" New Purchase"
                variant="primary"
                className="butn-or btn-padding"
                onClick={() => setModalShow(true)}
              >
                Purchase
              </Button>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 pointer">
              {purchase.map((data) => {
                return (
                  // <ProjectList data={data} />
                  <div
                    className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 cursor-pointer"
                    // onClick={onClick}
                  >
                    <div className="card card-user-body">
                      <div>
                        <h5 className="card-title">{data.item.productName}</h5>
                        {/* <div>{data.location}</div> */}
                        <div className="card-text ">
                          Stock Quantity: {data.stockQuatity}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 cursor-pointer">
              <div className="card card-user-body">
                <div>
                  <h5 className="card-title">Product Name</h5>
                  <div>Product Code</div>
                  <div className="card-text ">Quantity</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <PurchasePopUp
        show={modalShow}
        onHide={() => setModalShow(false)}
        added={() => {
          setIsAdded(!isAdded);
        }}
      />
    </div>
  );
};

export default Purchase;
