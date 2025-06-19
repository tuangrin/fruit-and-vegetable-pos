import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './component/Sidebar/Sidebar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import Order from './Page/Order/Order';
import Report from './Page/Report/Report.jsx';
import Dashboard from './Page/Dashboard/Dashboard.jsx';

function App() {
  return (
    <>
      <div className='p-5 bg-zinc-100 h-[100vh] flex gap-3'>
        <Sidebar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/order' element={<Order />} />
          <Route path='/report' element={<Report />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
library.add(fab, fas, far);
