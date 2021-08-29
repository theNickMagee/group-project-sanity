import React, {useState, useEffect} from 'react';
import sanityClient from "./client.js"

const PersonCards = (props) => {

    const [allMemberData, setMembers] = useState(null);

    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == "member"]{
            name,
            slug,
            image{
                asset->{
                _id,
                url
              }
            }
        }`
          )
          .then((data) => {setMembers(data); console.log("hello")})
          .catch(console.log("error fetching"));
      }, []);

    return(
        <>
        {
            allMemberData&&
            allMemberData.map((member, index) => {
                
                return <PersonCard person={member} key={index} />
            })
        }
        </>
    )
}


const PersonCard = ({ person }) => {

    return (
        <div className="person-card">
            <img src={person.image.asset.url}  className="person-card__pfp"/>
              <div className="person-card__text">
                  <h3 className="person-card__text--name">Nick Magee</h3>

                  <h4 className="person-card__text--details">Software Engineering Major</h4>
                  <h4 className="person-card__text--details">ncm200001@utdallas.edu</h4>
             </div>
        </div>
    );
}

export default PersonCards;