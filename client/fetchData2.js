import React, { useEffect, useState } from "react";
import axios from "axios";

const Component = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );

      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <div>
      {data.name}
      {data.email}
    </div>
  );
};

export default Component;
