import React, { useState } from "react";

const Filter = () => {
  const users = [
    { name: "Ajharul", age: 22 },
    { name: "John", age: 25 },
    { name: "Jane", age: 20 }
  ];

  
  const adults = users.filter(user => user.age >= 21);

  return (
    <ul>
      {adults.map((user, index) => (
        <li key={index}>{user.name} ({user.age})</li>
      ))}
    </ul>
  );
};

export default Filter;
