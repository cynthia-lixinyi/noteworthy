import React, { useState } from 'react';
import { MembersList } from '../helpers/MembersList';
import Member from '../components/Member';
import Modal from '../components/Modal';
import '../styles/Members.css';

const Members = () => {

  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  }

  return (
    <div className="members">
      <h1 className="title">Members</h1>
      <p>Click on their pictures to learn more!</p>
      <div className="membersList">
        {MembersList.map((item, index) => {
          return (
            <Member 
              key={index}
              image={item.image} 
              name={item.name} 
              voice_part={item.voice_part}
              onClick={() => {handleMemberClick(item)}}
            />
          );
        })}
        {selectedMember !== null && (
          <Modal 
            name={selectedMember.name}
            description={selectedMember.description}
            onClose={closeModal}
          />)
        }
      </div>
    </div>
  );
};

export default Members;