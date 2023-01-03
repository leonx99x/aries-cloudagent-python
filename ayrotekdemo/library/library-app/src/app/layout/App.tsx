
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
import SchemaPage from '../../features/schema/SchemaPage';

function App() {
  let routes = useRoutes([
    { path: "/", element: <SchemaPage /> },
    { path: "schemes", element: <SchemaPage /> }
    // ...
  ]);
  return routes;
}

export default App;
