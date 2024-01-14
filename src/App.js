
import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const { Content } = Layout;

const App = () => {
  const credentials = {
    username: 'Sakshi',
    password: 'Sakshi123',
  };



  return (
    <Router>
      <Layout>

        <Content style={{ padding: '50px' }}>
          <Routes>
            <Route
              path="/"
              element={<div style={{ minHeight: '100vh' }}><Login credentials={credentials} /></div>}
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
