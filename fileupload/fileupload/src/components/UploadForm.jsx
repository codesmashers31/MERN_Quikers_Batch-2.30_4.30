import React, { useState } from "react";
import axios from "axios";

function UploadForm() {
  const [form, setForm] = useState({
    name: "",
    address: "",
  });

  const [image, setImage] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleImage(e) {
    setImage(e.target.files[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append("name", form.name);
    formData.append("address", form.address);
    formData.append("image", image);

    axios.post("http://localhost:3000/api/upload", formData)
      .then(res => {
        alert("Uploaded!");
        console.log(res.data);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} /><br />
      <input name="address" placeholder="Address" onChange={handleChange} /><br />
      <input type="file" onChange={handleImage} /><br />
      <button>Upload</button>
    </form>
  );
}

export default UploadForm;
