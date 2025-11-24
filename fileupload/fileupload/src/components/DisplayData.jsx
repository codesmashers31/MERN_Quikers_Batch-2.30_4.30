import React, { useEffect, useState } from "react";
import axios from "axios";

function DisplayData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/upload")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Uploaded Records</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Image</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>
                <img 
                  src={item.url} 
                  alt="uploaded" 
                  width="80"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayData;
