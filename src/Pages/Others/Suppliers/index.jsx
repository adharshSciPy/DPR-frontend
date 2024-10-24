import React, { useEffect, useState } from "react";
import "../style.css";
import OthersNav from "../../../Component/OthersNav";
import Button from "../../../Component/Button";
import SupplierPopUp from "./SupplierPopUp";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../../Redux/reducer";
import { deleteSupplier, getSupplier } from "../../../Service";

const Suppliers = () => {
  const [modalShow, setModalShow] = useState(false);
  const [mode, setMode] = useState("");
  const [id, setId] = useState("");
  const [supplier, setSupplier] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMaterialCategory = async () => {
      try {
        const data = await getSupplier();
        setSupplier(data.data);
      } catch (error) {
        console.error("Fetch purchase error:", error);
      }
    };

    fetchMaterialCategory();
    dispatch(setActivePage("other"));
  }, [dispatch, isAdded]);

  function added() {
    setIsAdded(!isAdded);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row">
            <div className="inventry-padding col col-12 col-sm-9 col-md-9 col-lg-9 col-xl-10 col-xxl-10">
              <OthersNav active="supplier" />
            </div>
            <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 btn-alignment">
              <Button
                size="small"
                label="New Supplier"
                variant="primary"
                className="butn-or"
                onClick={() => {
                  setModalShow(true);
                  setMode("add");
                }}
              />

              <SupplierPopUp
                show={modalShow}
                mode={mode}
                id={id}
                onHide={() => {
                  setModalShow(false);
                  added();
                }}
              />
            </div>
          </div>
          {/* <ProjectList /> */}

          {supplier.map((data) => {
            return (
              <div
                className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 cursor-pointer"
                onClick={() => {
                  setModalShow(true);
                  setMode("edit");
                  setId(data._id);
                }}
              >
                <div className="card card-user-body">
                  <div>
                    <h5 className="card-title">{data.supplierName}</h5>
                    <div className="card-text ">{data.phone}</div>
                    <div>Supplier Code : {data.supplierCode}</div>
                  </div>
                  <Button
                    buttonStyle="danger"
                    label="Delete"
                    onClick={async (e) => {
                      e.stopPropagation(); // Prevents triggering the modal
                      try {
                        await deleteSupplier(data._id);
                        added();
                      } catch (err) {
                        console.log(err);
                      }
                    }}
                    size="small"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
