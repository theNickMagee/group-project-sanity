import React from 'react';

const PersonCard = (props) => {
    return (
        <div className="person-card">
            <img src="/img/magee_pfp.jpeg"  className="person-card__pfp"/>
              <div className="person-card__text">
                  <h3 className="person-card__text--name">Nick Magee</h3>

                  <h4 className="person-card__text--details">Software Engineering Major</h4>
                  <h4 className="person-card__text--details">ncm200001@utdallas.edu</h4>
             </div>
        </div>
    );
}

export default PersonCard;