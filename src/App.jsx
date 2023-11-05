// App.js
import * as React from 'react';
import { Outlet, Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Page from './components/Page';
import Navbar from './components/Navigate';

function App() {
  return (
    <div style={{ backgroundColor: "#C5C5C5" }}>
      <Router>
        <Navbar />
        <Sidebar />
        <Outlet />
        <Routes>
          <Route path="/dashboard" element={<Page />} />
          <Route path="/accounts" element={<Page />} />
          <Route path="/payrolls" element={<Page />} />
          <Route path="/reports" element={<Page />} />
          <Route path="/adviser" element={<Page />} />
          <Route path="/contacts" element={<Page />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
