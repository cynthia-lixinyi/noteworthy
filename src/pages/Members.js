import React from 'react';
import { MembersList } from '../helpers/MembersList';
import Member from '../components/Member';
import '../styles/Members.css';

const Members = () => {
  return (
    <div className="members">
      <h1 className="title">Members</h1>
      <p>Click on their pictures to learn more!</p>
      <div className="membersList">
        {MembersList.map((item, key) => {
          return (
            <Member 
                    key={key}
                    image={item.image} 
                    name={item.name} 
                    voice_part={item.voice_part}
                    description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Members;