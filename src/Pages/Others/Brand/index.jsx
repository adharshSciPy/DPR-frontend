import React, { useEffect, useState } from "react";
import "../style.css";
import OthersNav from "../../../Component/OthersNav";
import Button from "../../../Component/Button";
import BrandPopUp from "./BrandPopUp";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../../Redux/reducer";
import { deleteBrand, getBrand } from "../../../Service";

const Brand = () => {
  const [modalShow, setModalShow] = useState(false);
  const [mode, setMode] = useState("");
  const [id, setId] = useState("");
  const [material, setMaterial] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const data = await getBrand();
        setMaterial(data.data);
      } catch (error) {
        console.error("Fetch purchase error:", error);
      }
    };

    dispatch(setActivePage("other"));

    fetchBrand();
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
              <OthersNav active="brand" />
            </div>
            <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 btn-alignment">
              <Button
                size="small"
                label="New Brand"
                variant="primary"
                className="butn-or"
                onClick={() => {
                  setModalShow(true);
                  setMode("add");
                }}
              />

              <BrandPopUp
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
          {material.map((data) => {
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
                    <h5 className="card-title">{data.brand}</h5>
                    <div>Brand Code : {data.brandCode}</div>
                  </div>
                  <Button
                    buttonStyle="danger"
                    label="Delete"
                    onClick={async (e) => {
                      e.stopPropagation(); // Prevents triggering the modal
                      try {
                        await deleteBrand(data._id);
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

export default Brand;
