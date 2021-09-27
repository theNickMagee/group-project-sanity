import React, { useState, useEffect } from "react";
import sanityClient from "./client.js";
import { AiOutlineDownload } from "react-icons/ai";

const AssignedWorks = (props) => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "work"]{
            name,
            description,
            file{
                asset->{
                    _id,
                    url
                }
            },
        }`
      )
      .then((data) => {
        setPost(data);
        console.log("work set");
      })
      .catch(console.log("error fetching work"));
  }, []);

  return (
    <>
      {postData &&
        postData.map((work, index) => {
          return <AssignedWork work={work} key={index} />;
        })}
    </>
  );
};

const AssignedWork = ({ work }) => {
  console.log(work);
  return (
    // <div className="assigned-work">

    //     <h2 className="assigned-work__title">{work.name}</h2>
    //     <img src={work.image.asset.url} className="assigned-work__img" alt={"Assigned Work"}/>
    // </div>
    <div className="assigned-work">
      <div className="assigned-work-label">{work.name}</div>
      <div className="assigned-work__content">
        <div className="assigned-work__description">{work.description}</div>
        <div className="assigned-work__button">
          <a
            href={`${work.file.asset.url}`}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <button className="assigned-work__download-button">
              Download{" "}
              <AiOutlineDownload
                style={{ verticalAlign: "bottom", marginLeft: "6px" }}
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AssignedWorks;
