
import React from 'react'

const Sidebar = () => {

  return (
    <aside className='debug text-white bg-gray-700 hidden flex-col w-64 gap-8 p-4 md:flex justify-between'>
      <div className='flex flex-col gap-12'>
        <div className='debug flex items-center justify-center bg-gray-900'>
          <img src="" alt="nombre usuario" className='h-24 w-12' />
        </div>
        <nav>
          <ul className='flex flex-col gap-4'>
            <li> <a href="http://localhost:3000/" ></a>Inventario</li>
            <li><a href="/Materiales"></a> Materiales</li>
            <li><a href="/Usuarios"></a> Usuarios</li>
          </ul>
        </nav>
      </div>
      <button className='flex bg-blue-500 items-center justify-center '>log out</button>
    </aside>
  );
};

export {Sidebar};

