import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://<BACKEND_URL>/api/data") // Replace later with backend ALB URL
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React Frontend - AWS Load Balancer Demo</h2>
      <p>{data}</p>
    </div>
  );
}

export default App;
