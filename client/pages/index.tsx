import React, { useEffect, useState } from "react";

function index() {
  const [message, setMessage] = useState("Loading");
  const [people, setPeople] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/home");
      const data = await response.json();
      setMessage(data.message);
      setPeople(data.people);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>{message}</div>
      {people.map((person, index) => (
        <div key={index}>{person}</div>
      ))}
    </div>
  );
}

export default index;
