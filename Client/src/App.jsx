import { useEffect, useState } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OWU2ODQ3ZGYzMWRlNDg3YWFhM2ZhZiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNzIxNzQwNDY0LCJleHAiOjE3MjE3NDEzNjR9.OC1lWeJ12v3rddk3gZ89uT39l6cpsqiCH-G1KIy2iXQ";

    fetch("http://localhost:8000/api/get_users", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      User Management System
    </>
  )
}

export default App
