
import React from 'react'
import { signOut } from 'next-auth/react';
import PrivateComponent from './PrivateComponent';

const Sidebar = () => {

  return (
    <aside className='debug text-white bg-gray-700 hidden flex-col w-64 gap-8 p-4 md:flex justify-between'>
      <div className='flex flex-col gap-12'>
        <div className='flex flex-col items-center justify-center'>
          <img className='h-24 w-24' src="data:image/jpeg;base64,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" />
          <div className='flex justify-center ' ><h1 className='text-white text-sm' >Julanito de Tal</h1></div>
        </div>
        <nav>
          <ul className='flex flex-col gap-4'>
            <PrivateComponent role='ADMIN'>
              <li> <a href="/Inventario" >Inventario</a></li>
            </PrivateComponent>
            <PrivateComponent role='ADMIN'>
              <li><a href="/Materiales">Materiales</a></li>
            </PrivateComponent>
            <PrivateComponent role='USER'>
              <li> <a href="/Inventario" >Inventario</a></li>
            </PrivateComponent>
            <PrivateComponent role='USER'>
              <li><a href="/Materiales">Materiales</a></li>
            </PrivateComponent>
            <PrivateComponent role='ADMIN'>
              <li><a href="/Usuarios">Usuarios</a></li>
            </PrivateComponent>
          </ul>
        </nav>
      </div>
      <button className='flex bg-blue-500 items-center justify-center ' onClick={() => signOut()}>log out</button>
    </aside>
  );
};

export { Sidebar };

