import "./App.css";
import LoginPage from "./Pages/Login";
import AdminView from "./Pages/Admin/AdminDashBoard";
import MainLayout from "./Layout/MainLayout";
import CreateProject from "./Pages/Admin/CreateProject";
import Materials from "./Pages/Admin/Materials";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CreateProjectLayout from "./Layout/CreateProjectLayout";
import ManPower from "./Pages/Admin/ManPower";
import ProjectSettings from "./Pages/Admin/ProjectSettings";
import AdminUserList from "./Pages/Admin/AdminUserList";
import AdminRoutes from "./Routes/AdminRoutes";
import { useState } from "react";
import UserRoutes from "./Routes/UserRoutes";
import UserDashboard from "./Pages/User/UserDashboard";
import DrpEntry from "./Pages/User/DrpEntry";
import Inventry from "./Pages/Admin/Inventry";
import Purchase from "./Pages/Admin/Inventry/Purchase/Purchase";
import Inward from "./Pages/Admin/Inventry/Inward";
import Outward from "./Pages/Admin/Inventry/Outward";
import Suppliers from "./Pages/Others/Suppliers";
import MaterialCategories from "./Pages/Others/MaterialCategories";
import UserInventry from "./Pages/User/StockManagement/Inventry";
import UserInward from "./Pages/User/StockManagement/MaterialInward";
import UserOutward from "./Pages/User/StockManagement/MaterialOutward";
import Item from "./Pages/Others/Item";
import Brand from "./Pages/Others/Brand";
import PackSize from "./Pages/Others/PackSize";
import Shade from "./Pages/Others/Shade";

function App() {
  const [projectHeading, setProjectHeading] = useState("Create New Project");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="login" element={<LoginPage />} />
          {/* Admin Routes  */}
          <Route path="/admin" element={<AdminRoutes />}>
            <Route path="" element={<MainLayout />}>
              <Route index element={<AdminView />} />
              <Route
                path="project"
                element={
                  <CreateProjectLayout projectHeading={projectHeading} />
                }
              >
                <Route
                  path="details/:id"
                  element={
                    <CreateProject setProjectHeading={setProjectHeading} />
                  }
                />
                <Route
                  path="materials/:id"
                  element={<Materials setProjectHeading={setProjectHeading} />}
                />
                <Route
                  path="manpower/:id"
                  element={<ManPower setProjectHeading={setProjectHeading} />}
                />
                <Route
                  path="projectsettings/:id"
                  element={
                    <ProjectSettings setProjectHeading={setProjectHeading} />
                  }
                />
              </Route>
              <Route path="userlist" element={<AdminUserList />} />
              <Route path="inventory" element={<Inventry />} />
              <Route path="purchase" element={<Purchase />} />
              <Route path="inward" element={<Inward />} />
              <Route path="outward" element={<Outward />} />
              <Route path="suppliers" element={<Suppliers />} />
              <Route path="items" element={<Item />} />
              <Route path="items" element={<Item />} />
              <Route path="brand" element={<Brand />} />
              <Route path="packsize" element={<PackSize />} />
              <Route path="shade" element={<Shade />} />
              <Route
                path="materialCategories"
                element={<MaterialCategories />}
              />
            </Route>
          </Route>
          {/* User Routes  */}
          <Route path="/user" element={<UserRoutes />}>
            <Route path="" element={<MainLayout />}>
              <Route index element={<UserDashboard />} />
              <Route path="dprentry/:id" element={<DrpEntry />} />
              <Route path="inventry" element={<UserInventry />} />
              <Route path="inward" element={<UserInward />} />
              <Route path="outward" element={<UserOutward />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
