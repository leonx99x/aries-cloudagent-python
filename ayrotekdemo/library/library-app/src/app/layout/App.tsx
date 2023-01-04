
/*
 * Author: Koray Cil
 * Date: 01/03/2023
 */
import React from 'react';
import logo from './logo.svg';
import './styles.css';
import {
  BrowserRouter as Router,
  useRoutes
} from 'react-router-dom';
import Connections from '../../features/connections/Connections';
import ConnectionPage from '../../features/connection/ConnectionPage';

function App() {
  let routes = useRoutes([
    { path: "/", element: <Connections /> },
    { path: "verify", element: <Connections /> },
    { path: "connection", element: <ConnectionPage /> }
    // ...
  ]);
  return routes;
}

export default App;
