import React from "react";
import SidebarWork, { SidebarItem } from "./SidebarWork";
import { Icon } from "@iconify/react";

function Sidebar() {
  return (
    <div className="hidden md:flex">
      <SidebarWork>
        <SidebarItem
          icon={<Icon icon="fa6-solid:headset" width="28" />}
          text="Assistants"
          path="/home/assistants"
        />
        <SidebarItem
          icon={<Icon icon="ic:round-phone" width="28" />}
          text="Phone Number"
          path="/home/phone"
        />
        <SidebarItem
          icon={<Icon  icon="mdi:feature-search"  width="28" />}
          text="Call Logs"
          path="/home/call"
        />

        <SidebarItem
          icon={<Icon icon="mdi:account-voice" width="28" />}
          text="Voice Library"
          path="/home/voice"
        />
         <SidebarItem
          icon={<Icon  icon="mdi:feature-search"  width="28" />}
          text="Billing"
          path="/home/billing"
        />

        <SidebarItem
          icon={<Icon icon="mdi:account-voice" width="28" />}
          text="Account"
          path="/home/account"
        />
            <SidebarItem
          icon={<Icon  icon="mdi:feature-search"  width="28" />}
          text="Resources"
          path="/home/resources"
        />

       

        
      </SidebarWork>
    </div>
  );
}

export default Sidebar;
