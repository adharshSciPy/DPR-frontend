import React, { useEffect, useState } from "react";
import UserLayout from "../../../Layout/UserLayout";
import UserDateList from "../../../Component/UserDateList";
import { getAllDpr } from "../../../Service";
import { useParams } from "react-router-dom";
const DrpEntry = () => {
  const { id } = useParams();
  const [dpr, setDpr] = useState([]);
  useEffect(() => {
    const fetchDpr = async () => {
      try {
        const data = await getAllDpr(id);
        setDpr(data.data);
      } catch (error) {
        console.error("Fetch projects error:", error);
      }
    };

    fetchDpr();
  }, [id]);
  return (
    <div>
      <UserLayout isUserDashboard={false} />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="user-date-row">
              {dpr.map((data, i) => {
                return <UserDateList data={data} key={i} />;
              })}
              {/* <UserDateList />
                  <UserDateList /> */}
                  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrpEntry;
