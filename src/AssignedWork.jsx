import React, { useState, useEffect } from 'react';
import sanityClient from "./client.js"

const AssignedWork = (props) => {

    const [postData, setPost] = useState(null);

    // useEffect(() => {
    //     sanityClient.fetch(
    //         `*[type == "post"]{
    //             title,
    //             slug, 
    //             mainImage{
    //                 asset->{
    //                     _id,
    //                     url
    //                 },
    //                 alt
    //             }
    //         }`
    //     ).then((data) => setPost(data)).catch((e) => {console.log(e)})
    // })

    return (
        <div>
            <h2 className="assigned-work__title">Assigned Work Sample</h2>
            <img src="img/sample-content.jpg" className="assigned-work__img"/>
        </div>
    );
}

export default AssignedWork;