import { Suspense, lazy } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Add_user from './Features/website/Add_user';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./Features/website/Home'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<h1>......Loading</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Add_user" element={<Add_user />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
