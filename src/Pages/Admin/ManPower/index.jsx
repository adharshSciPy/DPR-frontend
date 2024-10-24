import React, { useEffect, useState } from "react";
import "./style.css";
import Button from "../../../Component/Button";
import MyVerticallyCenteredModal from "./ManpowerPopUp";
import MaterialListCard from "../../../Component/MaterialListCard";
import { useParams } from "react-router-dom";
import { getManPower } from "../../../Service";
import { useDispatch } from "react-redux";
import { assignId } from "../../../Redux/reducer";

const Manpower = () => {
  const { id } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const [userList, setUserList] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [manData, setManData] = useState("");

  useEffect(() => {
    const fetchManPower = async () => {
      try {
        const data = await getManPower(id);
        setUserList(data.data);
      } catch (error) {
        console.error("Fetch Client error:", error);
      }
    };

    fetchManPower();
  }, [id, isAdded]);
  function added() {
    setIsAdded(!isAdded);
  }
  return (
    <div>
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-3">
            <div className="d-flex justify-content-end">
              <Button
                onClick={() => {
                  setIsEdit(false);
                  setModalShow(true);
                }}
                buttonStyle="primary"
                label="Add New"
              />
            </div>
            {userList.map((data, i) => {
              return (
                <MaterialListCard
                  data={data}
                  key={i}
                  onClick={() => {
                    setIsEdit(true);
                    setModalShow(true);
                    setManData(data);
                  }}
                />
              );
            })}
            <div className="col col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
              <MyVerticallyCenteredModal
                show={modalShow}
                isEdit={isEdit}
                onHide={() => {
                  added();
                  setModalShow(false);
                }}
                projectId={id}
                manData={manData}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manpower;
