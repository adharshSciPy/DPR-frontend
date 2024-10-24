import React, { useEffect, useState } from "react";
import InventryNav from "../../../Component/InventryNav";
import "./style.css";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../../Redux/reducer";
import { getInventory } from "../../../Service";

const Inventry = () => {
  const [inventory, setInventory] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMaterialCategory = async () => {
      try {
        const data = await getInventory();
        setInventory(data.data);
      } catch (error) {
        console.error("Fetch purchase error:", error);
      }
    };

    dispatch(setActivePage("inventory"));

    fetchMaterialCategory();
  }, [dispatch]);
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="inventry-padding">
            <InventryNav active="inventory" />
          </div>
          {/* <ProjectList /> */}

          {inventory.map((data) => {
            return (
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 cursor-pointer">
                <div className="card card-user-body">
                  <div>
                    <h5 className="card-title">{data.item.productName}</h5>
                    {/* <div>Product Code</div> */}
                    <div className="card-text ">
                      Stock Quantity :{data.stockQuatity}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Inventry;
