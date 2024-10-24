import React, { useEffect, useState } from "react";
import Button from "../../../Component/Button";

import "../style.css";
import OthersNav from "../../../Component/OthersNav";
import PackSizePopUp from "./PackSizePopUp";
import { deletePackSize, getPackSize } from "../../../Service";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../../Redux/reducer";

const PackSize = () => {
  const [modalShow, setModalShow] = useState(false);
  const [mode, setMode] = useState("");
  const [id, setId] = useState("");
  const [material, setMaterial] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMaterialCategory = async () => {
      try {
        const data = await getPackSize();
        setMaterial(data.data);
      } catch (error) {
        console.error("Fetch purchase error:", error);
      }
    };

    dispatch(setActivePage("other"));

    fetchMaterialCategory();
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
              <OthersNav active="packsize" />
            </div>
            {/* <ProjectList /> */}

            <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 btn-alignment">
              <Button
                size="small"
                label=" Add Pack Size"
                variant="primary"
                className="butn-or"
                onClick={() => {
                  setModalShow(true);
                  setMode("add");
                }}
              />

              <PackSizePopUp
                show={modalShow}
                mode={mode}
                id={id}
                onHide={() => {
                  setModalShow(false);
                  added();
                }}
              />
            </div>
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
                      <h5 className="card-title">{data.packSize}</h5>
                      <div>Pack Size Code : {data.packSizeCode}</div>
                    </div>
                    <Button
                      buttonStyle="danger"
                      label="Delete"
                      onClick={async (e) => {
                        e.stopPropagation(); // Prevents triggering the modal
                        try {
                          await deletePackSize(data._id);
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
    </div>
  );
};

export default PackSize;
