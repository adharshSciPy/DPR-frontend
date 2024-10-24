import React, { useEffect, useState } from "react";
import "../style.css";
import OthersNav from "../../../Component/OthersNav";
import Button from "../../../Component/Button";
import MaterialCategoriesPopUp from "./MaterialCategoriesPopUp";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../../Redux/reducer";
import { deleteMaterialCategory, getMaterialCategory } from "../../../Service";

const MaterialCategories = () => {
  const [modalShow, setModalShow] = useState(false);
  const [mode, setMode] = useState("");
  const [id, setId] = useState("");
  const [material, setMaterial] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMaterialCategory = async () => {
      try {
        const data = await getMaterialCategory();
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
              <OthersNav active="material" />
            </div>
            <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 btn-alignment">
              <Button
                size="small"
                label="New Category"
                variant="primary"
                className="butn-or"
                onClick={() => {
                  setModalShow(true);
                  setMode("add");
                }}
              />
                
              <MaterialCategoriesPopUp
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
          {material.map((data, i) => {
            return (
              <div
                className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 cursor-pointer"
                onClick={() => {
                  setModalShow(true);
                  setMode("edit");
                  setId(data._id);
                }}
                key={i}
              >
                <div className="card card-user-body">
                  <div>
                    <h5 className="card-title">{data.category}</h5>
                    <div>Material Category Code : {data.materialCode}</div>
                  </div>
                  <Button
                    buttonStyle="danger"
                    label="Delete"
                    onClick={async (e) => {
                      e.stopPropagation(); // Prevents triggering the modal
                      try {
                        await deleteMaterialCategory(data._id);
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

export default MaterialCategories;
