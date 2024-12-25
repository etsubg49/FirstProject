
import React from 'react';

// Functional component
const GDGGroupMembers = () => {
  // List of group members' names
  const members = ['Ayanaw Mengesha','Yordanos Esrael','Eyobed Demissie','Hermela Mulugeta Jemema','Jalelo Jemal Kedu','Yarbework Mohammed','Yohannes Adugna Tarekegn','Etsubdink Gashaw','Abrham Teramed Nega'];

  return (
    <div>
      <h2>Group Members</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default GDGGroupMembers;
