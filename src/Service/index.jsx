// src/services/projectService.js
import api from "./api";

export const createProject = async (projectData) => {
  const response = await api.post("/project/create-project", projectData);
  return response.data;
};

export const updateProject = async (projectData, projectId) => {
  const response = await api.patch(
    `/project/update-project?id=${projectId}`,
    projectData
  );
  return response.data;
};

export const getProject = async () => {
  const response = await api.get("/project/get-project");
  return response.data;
};

export const getClientProject = async () => {
  const response = await api.get("/project/client-project");
  return response.data;
};

export const getProjectById = async (id) => {
  const response = await api.get(`/project/get-project?id=${id}`);
  return response.data;
};

export const getClient = async () => {
  const response = await api.get("/client/get-client");
  return response.data;
};

export const createUser = async (clientData) => {
  const response = await api.post("/client/create-client", clientData);
  return response.data;
};

export const banUser = async (clientData) => {
  const response = await api.post("/client/ban-client", clientData);
  return response.data;
};

export const createManPower = async (clientData) => {
  const response = await api.post("/man/create-manpower", clientData);
  return response.data;
};

export const getManPower = async (id) => {
  const response = await api.get(`/man/get-manpower?id=${id}`);
  return response.data;
};

export const getProjectSettings = async (id) => {
  const response = await api.get(`/project/project-settings?id=${id}`);
  return response.data;
};

export const createBuilding = async (buildingData) => {
  const response = await api.post("/building/create-building", buildingData);
  return response.data;
};

export const createUnit = async (unitData) => {
  const response = await api.post("/unit/create-unit", unitData);
  return response.data;
};

export const createElevation = async (elevationData) => {
  const response = await api.post("/elevation/create-elevation", elevationData);
  return response.data;
};

export const createSurface = async (surfaceData) => {
  const response = await api.post("/surface/create-surface", surfaceData);
  return response.data;
};

export const createSystem = async (systemData) => {
  const response = await api.post("/system/create-system", systemData);
  return response.data;
};

export const createActivity = async (activityData) => {
  const response = await api.post("/activity/create-activity", activityData);
  return response.data;
};

export const deleteBuilding = async (buildingData) => {
  const response = await api.delete("/building/delete-building", {
    data: buildingData,
  });
  return response.data;
};

export const deleteUnit = async (unitData) => {
  const response = await api.delete("/unit/delete-unit", { data: unitData });
  return response.data;
};

export const deleteElevation = async (elevationData) => {
  const response = await api.delete("/elevation/delete-elevation", {
    data: elevationData,
  });
  return response.data;
};

export const deleteSurface = async (surfacenData) => {
  const response = await api.delete("/surface/delete-surface", {
    data: surfacenData,
  });
  return response.data;
};

export const deleteSystem = async (systemData) => {
  const response = await api.delete("/system/delete-system", {
    data: systemData,
  });
  return response.data;
};

export const deleteActivity = async (activityData) => {
  const response = await api.delete("/activity/delete-activity", {
    data: activityData,
  });
  return response.data;
};

export const createDpr = async (dprData) => {
  const response = await api.post("/dpr/create-dpr", dprData);
  return response.data;
};

export const getAllDpr = async (id) => {
  const response = await api.get(`/dpr/get-dpr?projectId=${id}`);
  return response.data;
};

export const getOneDpr = async (id) => {
  const response = await api.get(`/dpr/get-dpr?dprId=${id}`);
  return response.data;
};

export const getBuilding = async (id) => {
  const response = await api.get(`/building/get-building?id=${id}`);
  return response.data;
};

export const getUnit = async (id) => {
  const response = await api.get(`/unit/get-unit?id=${id}`);
  return response.data;
};

export const getElevation = async (id) => {
  const response = await api.get(`/elevation/get-elevation?id=${id}`);
  return response.data;
};

export const getSurface = async (id) => {
  const response = await api.get(`/surface/get-surface?id=${id}`);
  return response.data;
};

export const getSystem = async (id) => {
  const response = await api.get(`/system/get-system?id=${id}`);
  return response.data;
};

export const getActivity = async (id) => {
  const response = await api.get(`/activity/get-activity?id=${id}`);
  return response.data;
};

export const getPurchase = async () => {
  const response = await api.get(`/purchase/get-purchase`);
  return response.data;
};

export const createPurchase = async (purchaseData) => {
  const response = await api.post("/purchase/create-purchase", purchaseData);
  return response.data;
};

// /purchase/get-material-inward

export const getMaterialInward = async () => {
  const response = await api.get(`/purchase/get-material-inward`);
  return response.data;
};

export const getMaterialOutward = async () => {
  const response = await api.get(`/purchase/get-material-outward`);
  return response.data;
};

export const createMaterialOutward = async (purchaseData) => {
  const response = await api.post(
    "/purchase/create-material-outward",
    purchaseData
  );
  return response.data;
};

export const getMaterialCategory = async () => {
  const response = await api.get(`/other/get-materials`);
  return response.data;
};

export const getMaterialCategoryById = async (id) => {
  const response = await api.get(`/other/get-materials?id=${id}`);
  return response.data;
};

export const createMaterialCategory = async (materialData) => {
  const response = await api.post("/other/create-material", materialData);
  return response.data;
};

export const editMaterialCategory = async (data, materialId) => {
  const response = await api.patch(`/other/edit-material/${materialId}`, data);
  return response.data;
};

export const deleteMaterialCategory = async (materialId) => {
  const response = await api.delete(`/other/delete-material/${materialId}`);
  return response.data;
};

export const createSupplier = async (supplierData) => {
  const response = await api.post("/other/create-supplier", supplierData);
  return response.data;
};

export const getSupplier = async () => {
  const response = await api.get(`/other/get-suppliers`);
  return response.data;
};

export const getSupplierById = async (id) => {
  const response = await api.get(`/other/get-suppliers?id=${id}`);
  return response.data;
};

export const editSupplier = async (data, id) => {
  const response = await api.patch(`/other/update-supplier/${id}`, data);
  return response.data;
};

export const deleteSupplier = async (id) => {
  const response = await api.delete(`/other/delete-supplier/${id}`);
  return response.data;
};

export const createPackSize = async (supplierData) => {
  const response = await api.post("/other/create-packsize", supplierData);
  return response.data;
};

export const getPackSize = async () => {
  const response = await api.get(`/other/get-packsize`);
  return response.data;
};

export const getPackSizeById = async (id) => {
  const response = await api.get(`/other/get-packsize?id=${id}`);
  return response.data;
};

export const editPackSize = async (data, id) => {
  const response = await api.patch(`/other/edit-packsize/${id}`, data);
  return response.data;
};

export const deletePackSize = async (id) => {
  const response = await api.delete(`/other/delete-packsize/${id}`);
  return response.data;
};

export const createShade = async (supplierData) => {
  const response = await api.post("/other/create-shade", supplierData);
  return response.data;
};

export const getShade = async () => {
  const response = await api.get(`/other/get-shade`);
  return response.data;
};

export const getShadeById = async (id) => {
  const response = await api.get(`/other/get-shade?id=${id}`);
  return response.data;
};

export const editShade = async (data, id) => {
  const response = await api.patch(`/other/edit-shade/${id}`, data);
  return response.data;
};

export const deleteShade = async (id) => {
  const response = await api.delete(`/other/delete-shade/${id}`);
  return response.data;
};

export const getInventory = async () => {
  const response = await api.get(`/purchase/get-inventory`);
  return response.data;
};

export const getItem = async () => {
  const response = await api.get(`/item/get-items`);
  return response.data;
};

export const getItemById = async (id) => {
  const response = await api.get(`/item/get-items?id=${id}`);
  return response.data;
};

export const editItem = async (data, id) => {
  const response = await api.patch(`/item/edit-item/${id}`, data);
  return response.data;
};

export const getBrand = async () => {
  const response = await api.get(`/item/get-brand`);
  return response.data;
};

export const getBrandById = async (id) => {
  const response = await api.get(`/item/get-brand?id=${id}`);
  return response.data;
};

export const createItem = async (supplierData) => {
  const response = await api.post("/item/create-items", supplierData);
  return response.data;
};

export const createBrand = async (supplierData) => {
  const response = await api.post("/item/add-brand", supplierData);
  return response.data;
};

export const editBrand = async (data, id) => {
  const response = await api.patch(`/item/edit-brand/${id}`, data);
  return response.data;
};

export const deleteBrand = async (id) => {
  const response = await api.delete(`/item/delete-brand/${id}`);
  return response.data;
};

export const addMaterialInward = async (supplierData) => {
  const response = await api.post(
    "/purchase/accept-material-inward",
    supplierData
  );
  return response.data;
};

export const getLocation = async () => {
  const response = await api.get(`/purchase/get-location`);
  return response.data;
};
