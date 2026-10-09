import React, { useState } from "react";
import "./style.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("dashboard");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("Admin User");

  const login = (e) => {
    e.preventDefault();

    if (email === "admin@example.com" && password === "123456") {
      setLoggedIn(true);
      setPage("dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  const logout = () => {
    setLoggedIn(false);
    setEmail("");
    setPassword("");
    setPage("dashboard");
  };

  if (!loggedIn) {
    return (
      <div className="login-container">
        <form className="login-box" onSubmit={login}>
          <h1>My App</h1>
          <p>Login to continue</p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="primary-button">
            Login
          </button>

          <p className="demo-text">
            Demo: admin@example.com / 123456
          </p>
        </form>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="header">
        <h2>My Application</h2>

        <nav>
          <button
            className={page === "dashboard" ? "active" : ""}
            onClick={() => setPage("dashboard")}
          >
            Dashboard
          </button>

          <button
            className={page === "profile" ? "active" : ""}
            onClick={() => setPage("profile")}
          >
            Profile
          </button>

          <button className="logout-button" onClick={logout}>
            Logout
          </button>
        </nav>
      </header>

      <main className="main-content">
        {page === "dashboard" && (
          <section>
            <div className="page-heading">
              <h1>Dashboard</h1>
              <p>Welcome, {name}!</p>
            </div>

            <div className="cards">
              <div className="card">
                <h3>Users</h3>
                <h2>120</h2>
              </div>

              <div className="card">
                <h3>Orders</h3>
                <h2>45</h2>
              </div>

              <div className="card">
                <h3>Revenue</h3>
                <h2>$12,500</h2>
              </div>
            </div>
          </section>
        )}

        {page === "profile" && (
          <section>
            <div className="page-heading">
              <h1>Profile</h1>
              <p>Manage your account information</p>
            </div>

            <form
              className="profile-box"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Profile updated successfully!");
              }}
            >
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label htmlFor="profile-email">Email</label>
              <input
                id="profile-email"
                type="email"
                value="admin@example.com"
                disabled
              />

              <button type="submit" className="primary-button">
                Save Profile
              </button>
            </form>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;