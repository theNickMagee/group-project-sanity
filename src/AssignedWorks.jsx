import React, { useState, useEffect } from 'react';
import sanityClient from "./client.js"


const AssignedWorks = (props) => {

    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == "work"]{
            name,
            image{
                asset->{
                _id,
                url
              }
            }
        }`
          )
          .then((data) => {setPost(data); console.log("work set")})
          .catch(console.log("error fetching work"));
      }, []);

    return (
        <>
        { 
        postData && postData.map((work, index) => {
            return(
             <AssignedWork work={work} key={index} />
            )
        })
         }
        </>
    )
}

const AssignedWork = ({work}) => {


    return (
        <div className="assigned-work">
            
            <h2 className="assigned-work__title">{work.name}</h2>
            <img src={work.image.asset.url} className="assigned-work__img" alt={"Assigned Work"}/>
        </div>
    );
}

export default AssignedWorks;