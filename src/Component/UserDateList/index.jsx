import React from "react";
import { Tree, TreeItem, TreeItemLayout } from "@fluentui/react-components";
import "./style.css";

const UserDateList = ({ data }) => {
  return (
    <Tree aria-label="Default ">
      <TreeItem itemType="branch" className="user-date">
        <TreeItemLayout>
          <div>{data.date}</div>
        </TreeItemLayout>
        {data.activities.map((dpr) => {
          return (
            <Tree>
              <TreeItem itemType="leaf" className="user-data-hovered">
                <TreeItemLayout>
                  <div>{dpr.name}</div>
                </TreeItemLayout>
              </TreeItem>
            </Tree>
          );
        })}

        {/* <Tree>
          <TreeItem itemType="leaf" className="user-data-hovered">
            <TreeItemLayout>
              <div>Activity_1</div>
            </TreeItemLayout>
          </TreeItem>
        </Tree> */}
      </TreeItem>
    </Tree>
  );
};

export default UserDateList;
