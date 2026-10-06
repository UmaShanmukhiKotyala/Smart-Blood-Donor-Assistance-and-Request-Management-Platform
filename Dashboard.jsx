import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {

  const navigate = useNavigate();

  return (
    <div className="dashboard">

      <header className="navbar">
        <h2>🩸 Blood Donation Assistance System</h2>

        <div className="nav-buttons">
          <button className="profile-btn">👤 Profile</button>
          <button className="logout-btn">Logout</button>
        </div>
      </header>

      <div className="hero">
        <h1>Donate Blood, Save Lives ❤️</h1>
        <p>Choose an option below</p>
      </div>

      <div className="card-container">

        <div
          className="card"
          onClick={() => navigate("/donor")}
        >
          <div className="icon">🩸</div>
          <h2>Donate Blood</h2>
          <p>Become a donor and save lives.</p>
        </div>

        <div className="card"
          onClick={()=>navigate("/receiver")}
        >
          <div className="icon">❤️</div>
          <h2>Receive Blood</h2>
          <p>Find suitable blood donors near you.</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;