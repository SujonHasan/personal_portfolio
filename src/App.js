import './App.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Containers/Routers/Router';

function App() {
  return (
    <div className="App mx-auto">
      <RouterProvider router={Router} > </RouterProvider>
    </div>
  );
}

export default App;
