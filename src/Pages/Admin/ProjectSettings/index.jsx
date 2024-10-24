import React, { useEffect, useState } from "react";
import "./style.css";
import Button from "../../../Component/Button";
import { Tree, TreeItem, TreeItemLayout } from "@fluentui/react-components";
import { useParams } from "react-router-dom";
import {
  deleteActivity,
  deleteBuilding,
  deleteElevation,
  deleteSurface,
  deleteSystem,
  deleteUnit,
  getProjectSettings,
} from "../../../Service";
import SettingsPopUp from "./SettingsPopUp";
import Deletebutton from "../../../Assets/trash.svg";

const ProjectSettings = () => {
  const { id } = useParams();
  const [settings, setSettings] = useState([]);
  const [formType, setFormType] = useState("");
  const [itemId, setItemId] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  const [ProjectPopUp, setProjectPopUp] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getProjectSettings(id);
        setSettings(data.data);
      } catch (error) {
        console.error("Fetch Client error:", error);
      }
    };

    fetchProject();
  }, [isAdded, id]);
  function added() {
    setIsAdded(!isAdded);
  }

  const deleteBuildingById = async (buildingId) => {
    try {
      await deleteBuilding({ buildingId: buildingId });
    } catch (error) {
      console.error("Fetch Client error:", error);
      setError(error.response.data.message);
    }
  };

  const deleteUnitById = async (unitId) => {
    try {
      await deleteUnit({ unitId: unitId });
    } catch (error) {
      console.error("Fetch Client error:", error);
      setError(error.response.data.message);
    }
  };

  const deleteElevationById = async (elevationId) => {
    try {
      await deleteElevation({ elevationId: elevationId });
    } catch (error) {
      console.error("Fetch Client error:", error);
      setError(error.response.data.message);
    }
  };

  const deleteSurfaceById = async (surfaceId) => {
    try {
      await deleteSurface({ surfaceId: surfaceId });
    } catch (error) {
      console.error("Fetch Client error:", error);
      setError(error.response.data.message);
    }
  };

  const deleteSystemById = async (systemId) => {
    try {
      await deleteSystem({ systemId: systemId });
    } catch (error) {
      console.error("Fetch Client error:", error);
      setError(error.response.data.message);
    }
  };

  const deleteActivityById = async (activityId) => {
    try {
      await deleteActivity({ activityId: activityId });
    } catch (error) {
      console.error("Fetch Client error:", error);
      setError(error.response.data.message);
    }
  };
  return (
    <div>
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-2">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="d-flex justify-content-end">
                <Button
                  size="extraSmall"
                  buttonStyle="grey"
                  label="New Building"
                  onClick={() => {
                    setFormType("Building");
                    setItemId(id);
                    setProjectPopUp(true);
                  }}
                />
              </div>
            </div>
            {settings.map((building, i) => {
              return (
                <div>
                  <div className="row">
                    <div className="col col-6 col-sm-6 col-md-8 col-lg-8 col-xl-8 col-xxl-8  building-header ">
                      {building.buildingName}
                    </div>
                    <div className="col col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4   ">
                      <div className="d-flex justify-content-end gap-1">
                        <Button
                          buttonStyle="danger"
                          label="Delete building"
                          size="extraSmall"
                          onClick={() => {
                            deleteBuildingById(building._id);
                          }}
                        />

                        <Button
                          buttonStyle="grey"
                          label="Add Unit"
                          size="extraSmall"
                          onClick={() => {
                            setFormType("Unit");
                            setItemId(building._id);
                            setProjectPopUp(true);
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 border-project">
                    <Tree aria-label="Default">
                      {building.unit.map((unit, i) => {
                        return (
                          <TreeItem itemType="branch">
                            <TreeItemLayout>
                              <div className="project-warp">
                                <div>{unit.unitName}</div>
                                <div className="button-position-project">
                                  <div className="gap">
                                    <div className="button-icon">
                                      <img
                                        src={Deletebutton}
                                        alt=""
                                        height={25}
                                        width={25}
                                        onClick={() => {
                                          deleteUnitById(unit._id);
                                        }}
                                      />
                                    </div>
                                    <div className="button-label">
                                      <Button
                                        buttonStyle="danger"
                                        label="Delete"
                                        size="extraSmall"
                                        onClick={() => {
                                          deleteUnitById(unit._id);
                                        }}
                                      />
                                    </div>

                                    <Button
                                      buttonStyle="grey"
                                      label="Add Elevation"
                                      size="extraSmall"
                                      onClick={() => {
                                        setFormType("Elevation");
                                        setItemId(unit._id);
                                        setProjectPopUp(true);
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </TreeItemLayout>
                            <Tree>
                              {unit.elevation.map((elevation, i) => {
                                return (
                                  <TreeItem itemType="branch">
                                    <TreeItemLayout>
                                      <div className="project-warp">
                                        <div>{elevation.elevationName}</div>
                                        <div className="button-position-project">
                                          <div className="gap">
                                            <div className="button-icon">
                                              <img
                                                src={Deletebutton}
                                                alt=""
                                                height={25}
                                                width={25}
                                                onClick={() => {
                                                  deleteElevationById(
                                                    elevation._id
                                                  );
                                                }}
                                              />
                                            </div>
                                            <div className="button-label">
                                              <Button
                                                buttonStyle="danger"
                                                label="Delete"
                                                size="extraSmall"
                                                onClick={() => {
                                                  deleteElevationById(
                                                    elevation._id
                                                  );
                                                }}
                                              />
                                            </div>
                                            <Button
                                              buttonStyle="grey"
                                              label="Add Surface"
                                              size="extraSmall"
                                              onClick={() => {
                                                setFormType("Surface");
                                                setItemId(elevation._id);
                                                setProjectPopUp(true);
                                              }}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </TreeItemLayout>
                                    <Tree>
                                      {elevation.surface.map((surface, i) => {
                                        return (
                                          <TreeItem itemType="branch">
                                            <TreeItemLayout>
                                              <div className="project-warp">
                                                <div>{surface.surfaceName}</div>
                                                <div className="button-position-project">
                                                  <div className="gap">
                                                    <div className="button-icon">
                                                      <img
                                                        src={Deletebutton}
                                                        alt=""
                                                        height={25}
                                                        width={25}
                                                        onClick={() => {
                                                          deleteSurfaceById(
                                                            surface._id
                                                          );
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="button-label">
                                                      <Button
                                                        buttonStyle="danger"
                                                        label="Delete"
                                                        size="extraSmall"
                                                        onClick={() => {
                                                          deleteSurfaceById(
                                                            surface._id
                                                          );
                                                        }}
                                                      />
                                                    </div>
                                                    <Button
                                                      buttonStyle="grey"
                                                      label="Add System"
                                                      size="extraSmall"
                                                      onClick={() => {
                                                        setFormType("System");
                                                        setItemId(surface._id);
                                                        setProjectPopUp(true);
                                                      }}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </TreeItemLayout>
                                            <Tree>
                                              <TreeItem itemType="leaf">
                                                <TreeItemLayout>
                                                  <div className="project-building">
                                                    <div className="project-building">
                                                      <div>Surface area</div>
                                                      <div className="project-manpower-bg">
                                                        {surface.area} Sq.mtr
                                                      </div>
                                                    </div>
                                                  </div>
                                                </TreeItemLayout>
                                              </TreeItem>
                                              {surface.system.map(
                                                (system, i) => {
                                                  return (
                                                    <TreeItem itemType="branch">
                                                      <TreeItemLayout>
                                                        <div className="project-warp">
                                                          <div>
                                                            {system.systemName}
                                                          </div>
                                                          <div className="button-position-project">
                                                            <div className="gap">
                                                              <div className="button-icon">
                                                                <img
                                                                  src={
                                                                    Deletebutton
                                                                  }
                                                                  alt=""
                                                                  height={25}
                                                                  width={25}
                                                                  onClick={() => {
                                                                    deleteSystemById(
                                                                      system._id
                                                                    );
                                                                  }}
                                                                />
                                                              </div>
                                                              <div className="button-label">
                                                                <Button
                                                                  buttonStyle="danger"
                                                                  label="Delete"
                                                                  size="extraSmall"
                                                                  onClick={() => {
                                                                    deleteSystemById(
                                                                      system._id
                                                                    );
                                                                  }}
                                                                />
                                                              </div>
                                                              <Button
                                                                buttonStyle="grey"
                                                                label="Add Activity"
                                                                size="extraSmall"
                                                                onClick={() => {
                                                                  setFormType(
                                                                    "Activity"
                                                                  );
                                                                  setItemId(
                                                                    system._id
                                                                  );
                                                                  setProjectPopUp(
                                                                    true
                                                                  );
                                                                }}
                                                              />
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </TreeItemLayout>
                                                      <Tree>
                                                        {system.activity.map(
                                                          (activity, i) => {
                                                            return (
                                                              <TreeItem itemType="branch">
                                                                <TreeItemLayout>
                                                                  <div>
                                                                    <div>
                                                                      {
                                                                        activity.activityName
                                                                      }
                                                                    </div>
                                                                    <Button
                                                                      buttonStyle="danger"
                                                                      label="Delete"
                                                                      size="extraSmall"
                                                                      onClick={() => {
                                                                        deleteActivityById(
                                                                          activity._id
                                                                        );
                                                                      }}
                                                                    />
                                                                  </div>
                                                                </TreeItemLayout>
                                                                <Tree>
                                                                  <TreeItem itemType="leaf">
                                                                    <TreeItemLayout>
                                                                      <div className="project-building">
                                                                        <div>
                                                                          Manpower
                                                                          per
                                                                          day
                                                                        </div>
                                                                        <div className="project-manpower-bg">
                                                                          {
                                                                            activity.manPowerperDay
                                                                          }
                                                                        </div>
                                                                      </div>
                                                                    </TreeItemLayout>
                                                                  </TreeItem>
                                                                </Tree>
                                                              </TreeItem>
                                                            );
                                                          }
                                                        )}
                                                      </Tree>
                                                    </TreeItem>
                                                  );
                                                }
                                              )}
                                            </Tree>
                                          </TreeItem>
                                        );
                                      })}
                                    </Tree>
                                  </TreeItem>
                                );
                              })}
                            </Tree>
                          </TreeItem>
                        );
                      })}
                    </Tree>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <SettingsPopUp
        show={ProjectPopUp}
        formType={formType}
        projectId={itemId}
        onHide={() => {
          added();
          setProjectPopUp(false);
        }}
      />
    </div>
  );
};

export default ProjectSettings;
