import { useLocation } from "react-router-dom";
import "./AvailableDonors.css";

function AvailableDonors() {

  const location = useLocation();

  const {
    cityDonors = [],
    stateDonors = [],
    compatibleGroups = []
  } = location.state || {};

  return (
    <div className="available-container">

      <h1 className="page-title">
        ❤️ Available Blood Donors ❤️
      </h1>

      {/* City Donors Section */}

      <h2 className="section-title">
        🏙️ Compatible Donors In Your City
      </h2>

      {cityDonors.length === 0 ? (

        <div className="no-donors">
          No compatible donors found in your city.
        </div>

      ) : (

        <div className="donor-grid">

          {cityDonors.map((donor) => (

            <div className="donor-card" key={donor._id}>

              <h3>👤 {donor.fullName}</h3>

              <p>🩸 Blood Group: {donor.bloodGroup}</p>

              <p>📍 {donor.city}, {donor.state}</p>

              <p>📞 {donor.phone}</p>

              <a href={`tel:${donor.phone}`}>
                <button className="contact-btn">
                  Contact Donor
                </button>
              </a>

            </div>

          ))}

        </div>

      )}

      {/* State Donors Section */}

      <h2 className="section-title">
        🌍 Other Compatible Donors In Your State
      </h2>

      {stateDonors.length === 0 ? (

        <div className="no-donors">
          No additional compatible donors found in your state.
        </div>

      ) : (

        <div className="donor-grid">

          {stateDonors.map((donor) => (

            <div className="donor-card" key={donor._id}>

              <h3>👤 {donor.fullName}</h3>

              <p>🩸 Blood Group: {donor.bloodGroup}</p>

              <p>📍 {donor.city}, {donor.state}</p>

              <p>📞 {donor.phone}</p>

              <a href={`tel:${donor.phone}`}>
                <button className="contact-btn">
                  Contact Donor
                </button>
              </a>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default AvailableDonors;