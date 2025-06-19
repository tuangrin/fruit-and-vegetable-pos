import { useState, useNavigate } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [menu, setMenu] = useState([
    {
      label: 'Home',
      path: '/dashboard',
      icon: 'fa-regular fa-file-lines',
    },
    {
      label: 'Order',
      path: '/order',
      icon: 'fa-regular fa-file-lines',
    },
    {
      label: 'Report',
      path: '/report',
      icon: 'fa-solid fa-chart-line',
    },
  ]);
  return (
    <>
      <div className='bg-white w-[8vw] flex flex-col gap-3 rounded-lg h-full pt-6 px-4'>
        <div className='text-center'>
          <span>My POS</span>
        </div>
        {menu.map((e, index) => (
          <Link key={index} to={e.path}>
            <div
              key={index}
              className='hover:bg-emerald-100 hover:rounded-lg cursor-pointer py-2 flex justify-center items-center gap-2'
            >
              <FontAwesomeIcon icon={e.icon} />
              <p>{e.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
