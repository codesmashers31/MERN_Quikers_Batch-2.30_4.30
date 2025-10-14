import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [datas, setDatas] = useState({
    name: "",
    city: "",
    mobile: "",
    cname: "",
    clocation: "",
    coption: "",
    reason: ""
  });

  const handlechange = (e) => {
    setDatas({ ...datas, [e.target.name]: e.target.value });
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard", { state: datas });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handlesubmit}
        className="bg-white shadow-md rounded-lg px-8 py-10 w-full max-w-lg"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Login Form</h2>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Enter the Name"
            onChange={handlechange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="city"
            placeholder="Enter the City"
            onChange={handlechange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="mobile"
            placeholder="Enter the Mobile"
            onChange={handlechange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="cname"
            placeholder="Enter the company name"
            onChange={handlechange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="clocation"
            placeholder="Enter the company location"
            onChange={handlechange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <select
            name="coption"
            onChange={handlechange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
          >
            <option value="" disabled>Select One..</option>
            <option value="001">Manager</option>
            <option value="002">TL</option>
            <option value="003">General Manager</option>
          </select>
        </div>
        <div className="mb-6">
          <textarea
            onChange={handlechange}
            name="reason"
            placeholder="Reason"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
        >
          Generate
        </button>
      </form>
    </div>
  )
}
export default Login;
