import React, { useEffect, useState } from "react";

import InventryNav from "../../../../Component/UserInventryNav";

import { useDispatch } from "react-redux";
import { setActivePage } from "../../../../Redux/reducer";
import "../style.css";
import MaterialInward from "../../../../Component/MaterialInward";
import { getMaterialInward } from "../../../../Service";

const UserInward = () => {
  const [inward, setInward] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPurchase = async () => {
      try {
        const data = await getMaterialInward();
        setInward(data.materialInward);
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
            <div className="inventry-padding col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <InventryNav active={"inward"} />
            </div>
            {/* <ProjectList /> */}

            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 cursor-pointer">
              {inward.map((data) => {
                return (
                  <MaterialInward
                    data={data}
                    added={() => {
                      setIsAdded(!isAdded);
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

export default UserInward;
