import React from "react";
import "./App.css";
import { AiOutlineDownload } from "react-icons/ai";

const AssignedWorksV2 = (props) => {
  const title = "Software Project Management Plan";
  const description = "PDF of the initial software plan";
  return (
    <>
      <div className="assigned-work">
        <div className="assigned-work-label">{title}</div>
        <div className="assigned-work__content">
          <div className="assigned-work__description">{description}</div>
          <div className="assigned-work__button">
            <button className="assigned-work__download-button">
              Download{" "}
              <AiOutlineDownload
                style={{ verticalAlign: "bottom", marginLeft: "6px" }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignedWorksV2;
