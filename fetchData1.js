import React, { useEffect, useState } from "react";

const Component = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );

      const data1 = await response.json();
      setData(data1);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <div></div>;
};

export default Component;
