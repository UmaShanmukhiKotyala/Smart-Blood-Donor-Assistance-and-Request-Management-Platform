import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerReceiver } from "../services/receiverService";
import "./ReceiverRegistration.css";

function ReceiverRegistration() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    bloodGroup: "",
    city: "",
    state: "",
    phone: "",
    unitsRequired: "",
    hospitalName: "",
    urgency: "Normal"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const user=JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const receiverData = {
      ...formData,
      userId: user.id
    };

    const response = await registerReceiver(receiverData);

    console.log(response.data);

    navigate("/available-donors", {
      state: {
        cityDonors: response.data.cityDonors,
        stateDonors: response.data.stateDonors,
        compatibleGroups: response.data.compatibleGroups
      }
    });

  } catch (error) {

    alert(error.response?.data?.message || "Something went wrong");

  }
};

  return (
    <div className="receiver-container">

      <div className="receiver-card">

        <h1>Receive Blood</h1>

        <p>Fill in your details to search for compatible donors.</p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Full Name</label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Full Name"
              required
            />
          </div>

          <div className="input-group">
            <label>Age</label>

            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter Age"
              required
            />
          </div>

          <div className="input-group">
            <label>Your Blood Group</label>

            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            >
              <option value="">Select Blood Group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
          </div>

          <div className="input-group">
            <label>City</label>

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter City"
              required
            />
          </div>

          <div className="input-group">
            <label>State</label>

            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter State"
              required
            />
          </div>

          <div className="input-group">
            <label>Mobile Number</label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
              required
            />
          </div>

          <div className="input-group">
            <label>Units Required</label>

            <input
              type="number"
              name="unitsRequired"
              value={formData.unitsRequired}
              onChange={handleChange}
              min="1"
              placeholder="Example: 2"
              required
            />
          </div>

          <div className="input-group">
            <label>Hospital Name (Optional)</label>

            <input
              type="text"
              name="hospitalName"
              value={formData.hospitalName}
              onChange={handleChange}
              placeholder="Hospital Name"
            />
          </div>

          <div className="input-group">
            <label>Urgency</label>

            <select
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
            >
              <option>Normal</option>
              <option>Within 24 Hours</option>
              <option>Emergency</option>
            </select>
          </div>

          <button type="submit">
            Search Donors
          </button>

        </form>

      </div>

    </div>
  );
}

export default ReceiverRegistration;