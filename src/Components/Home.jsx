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
import SmallNavbar from './SmallNavbar';

function Home() {
  // Set a fixed width for the sidebar
  const sidebarWidth = '280px';

  return (
    <div className='bg-[#26292E]'>
   
    <div className=' flex-row h-screen md:flex hidden'>
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
   

    
    </div>


    <div className="flex flex-col h-screen"> {/* Ensuring full height */}
      {/* Fixed SmallNavbar */}
      <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }} >
        <SmallNavbar />
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, marginTop: '5rem', overflowY: 'auto' }} className="block md:hidden"> {/* Adjusting margin for fixed navbar */}
        <Routes>
          <Route path="/assistants" element={<Assistants />} />
          <Route path="/phone" element={<PhoneNumber />} />
          <Route path="/call" element={<CallLogs />} />
          <Route path="/voice" element={<VoiceLibrary />} />
          <Route path="/billig" element={<Billing />} />
          <Route path="/account" element={<Account />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </div>

    </div>

  );
}

export default Home;