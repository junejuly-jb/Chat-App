import React from 'react';
import { useRoutes } from 'react-router-dom'
import './App.css';
import 'antd/dist/antd.css';
import routes from './routes'
import { useSelector } from 'react-redux'
import { user } from './features/messageSlice'

function App() {

  const hasUsername = useSelector(user)
  const routing = useRoutes(routes(hasUsername))

  return (
    <div className="App">
      {routing}
    </div>
  );
}

export default App;
