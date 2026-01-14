
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <div className="App bg-light min-vh-100">
      <Navbar expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img src={require('./logo.svg').default} alt="Octofit Logo" className="App-logo" />
            Octofit Tracker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#activities">Activities</Nav.Link>
              <Nav.Link href="#teams">Teams</Nav.Link>
              <Nav.Link href="#leaderboard">Leaderboard</Nav.Link>
              <Nav.Link href="#workouts">Workouts</Nav.Link>
              <Nav.Link href="#users">Users</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <header className="mb-4">
          <h1 className="display-4 text-primary text-center">Octofit Tracker</h1>
        </header>
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<h2>Welcome to Octofit Tracker!</h2>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
