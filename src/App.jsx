import React, {useEffect, useState} from 'react';
import sanityClient from "./client"
import './App.css';
import PersonCards from './PersonCards';
import AssignedWorks from './AssignedWorks';

function App() {

  const [postData, setPost] = useState(null);


    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == 'pageTitle'] {
            groupName,
            groupDesc
        }`
          )
          .then((data) => { setPost(data[0]); console.log("group details set: " + JSON.stringify(data))})
          .catch(console.log("error fetching group details"));
      }, []);


  return (
    <div className="App">
      <header className="header">
      <div className="header__text-box">
          <h1 className="heading-primary">
           { postData &&
           <>
              <span className="heading-primary--main">{postData.groupName}</span>
              <span className="heading-primary--sub">{postData.groupDesc}</span>
            </>
           }
          </h1>
      </div>
      </header>
      <div className="member-content">
            <h2 className="member-content__title">Group Members</h2>
            <div className="member-content__members">
                <PersonCards />
            </div>
        </div>
        
          <div>
            <AssignedWorks />
            </div>
    </div>
  );
}

export default App;
