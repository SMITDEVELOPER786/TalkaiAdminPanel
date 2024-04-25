import React from 'react';
import Sidebar from './Sidebar';
import PhoneNumber from './SidebarPages/PhoneNumber';
import Assistants from './SidebarPages/Assistants';
import CallLogs from './SidebarPages/CallLogs';
import VoiceLibrary from './SidebarPages/VoiceLibrary';
import Billing from './SidebarPages/Billing';
import Account from './SidebarPages/Account';
import Resources from './SidebarPages/Resources';
import { Route, Routes } from 'react-router-dom';
import Help from './Help';

function Home() {
  // Set a fixed width for the sidebar
  const sidebarWidth = '280px';

  return (
    <div className='flex flex-row h-screen bg-[#26292E]'>
      {/* Fixing the sidebar */}
      <div style={{ width: sidebarWidth, position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 1000 }} className='md:block hidden'>
        <Sidebar />
      </div>

      {/* Adjusting the content area to account for the fixed sidebar */}
      <div style={{ marginLeft: sidebarWidth, flex: 1, overflowY: 'auto' }} className='md:block hidden' >
        
        <Routes>
          <Route path='/assistants' element={<Assistants />} />
          <Route path='/phone' element={<PhoneNumber />} />
          <Route path='/call' element={<CallLogs />} />
          <Route path='/voice' element={<VoiceLibrary />} />
          <Route path='/billig' element={<Billing />} />
          <Route path='/account' element={<Account />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/help' element={<Help />} />
        </Routes>
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }} className='md:hidden block' >
        
        <Routes>
          <Route path='/assistants' element={<Assistants />} />
          <Route path='/phone' element={<PhoneNumber />} />
          <Route path='/call' element={<CallLogs />} />
          <Route path='/voice' element={<VoiceLibrary />} />
          <Route path='/billig' element={<Billing />} />
          <Route path='/account' element={<Account />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/help' element={<Help />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
