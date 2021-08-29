import React, {useState, useEffect} from 'react';
import sanityClient from "./client.js"

const PersonCards = (props) => {

    const [allMemberData, setMembers] = useState(null);

    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == "member"]{
            name,
            email,
            major,
            slug,
            image{
                asset->{
                _id,
                url
              }
            }
        }`
          )
          .then((data) => {setMembers(data); console.log("members set")})
          .catch(console.log("error fetching members"));
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
                  <h3 className="person-card__text--name">{person.name}</h3>

                  <h4 className="person-card__text--details">{person.major} Major</h4>
                  <h4 className="person-card__text--details">{person.email}</h4>
             </div>
        </div>
    );
}

export default PersonCards;