"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2539],{79419:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(85893),r=t(11151);const s={sidebar_position:13},i="Motors Tab",a={id:"wiki/configurator/motors-tab",title:"Motors Tab",description:"Configure motor and ESC settings. Change motor direction and mixing, and set up advanced telemetry and flight features",source:"@site/docs/wiki/configurator/motors-tab.md",sourceDirName:"wiki/configurator",slug:"/wiki/configurator/motors-tab",permalink:"/docs/wiki/configurator/motors-tab",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"wiki",previous:{title:"GPS Tab",permalink:"/docs/wiki/configurator/gps-tab"},next:{title:"OSD Tab",permalink:"/docs/wiki/configurator/osd-tab"}},d={},l=[{value:"Mixer",id:"mixer",level:2},{value:"ESC/Motor features",id:"escmotor-features",level:2},{value:"3D ESC/Motor features",id:"3d-escmotor-features",level:2},{value:"Motors Test Mode",id:"motors-test-mode",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"motors-tab",children:"Motors Tab"}),"\n",(0,o.jsx)(n.p,{children:"Configure motor and ESC settings. Change motor direction and mixing, and set up advanced telemetry and flight features"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Motors Tab",src:t(18913).Z+"",width:"1602",height:"725"})}),"\n",(0,o.jsx)(n.h2,{id:"mixer",children:"Mixer"}),"\n",(0,o.jsx)(n.p,{children:'Mixer controls motor layout and how the FC will use the motors to maintain stable flight. Typical quadcopters use the\n"QUAD X" setting so set this if you are unsure.'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Motor direction is reversed"}),' - The normal setting\nassumes your props will spin in towards the camera at the front of your quad "props in", reversed means that props\nspin away from the camera "props out".']}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:'Pilots use "props out" to prevent debris from being pushed into the camera at the cost of pushing it\ninto the body of the quad instead. It also helps against prop wash on smaller crafts'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Motor direction"})," - opens a motor direction test tool which allows you to gently spin motors and easily reverse\nmotors so that they match the appropriate spin direction for your Mixer. Remove props and take care"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"escmotor-features",children:"ESC/Motor features"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"ESC/Motor Protocol"})," - DShot is standard for modern builds and provides the best flight performance and features."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Speed of DShot depends on your chosen PID loop frequency, as slower DShot speeds cannot send updates fast enough to\nfully utilise faster PID loop rates. Because of this it is recommended to pair 8K with DShot600, 4K with DShot300 and\n2K with DShot150. Other options such as Oneshot125 are only needed on very old ESCs such as original BLHELI, newer\nBLHeli_S, BLHeli_32, BlueJay or AM32 ESCs should all use DShot"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"MOTOR_STOP"})," - Prevent motors spinning at idle when armed. Not normally required and it is considered safer to spin\nmotors so bystanders can see that your quad is armed"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"ESC_SENSOR"})," - Prefer ESC telemetry data from a UART connection to the ESC as configured in the Ports tab"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Bidirectional DShot"})," - Required for RPM filtering. Instead of only sending DShot commands to the ESC on the motor\noutput connections the FC will also listen for return data from the ESC on the same wire"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["By default includes only RPM\ndata but can be expanded with the ",(0,o.jsx)(n.code,{children:"dshot_edt"})," CLI command to also enable ESC voltage, current and temperature\ndata via DShot telemetry (requires newer BlueJay/AM32/BLHELI32 ESC firmware).\n",(0,o.jsx)(n.a,{href:"https://github.com/bird-sanctuary/extended-dshot-telemetry",children:"Extended Dshot Telemetry (EDT)"})," allows ESCs to return\ntelemetry data over the signal wire without requiring additional UART connections. EDT allows for telemetry from 8-bit\nESCs running BlueJay as well as 32bit ESCs running AM32 or BLHELI32. This simplifies wiring and FC configuration for\npilots."]})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Motor Poles"})," - Number of permanent magnets stuck inside the motor bell"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Larger motors such as 2207 or 2306 have 14\nwhilst 1103 and smaller motors have 12 magnets. Magnet numbers typically change from 12 to 14 in the 14xx/15xx size of\nmotor"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Motor idle ( % static)"})," - Sets a minimum motor output value to ensure the motor is able to smoothly speed up from\nidle without a delay and without loosing control."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Generally this speed is increased to improve smoothness when coming\nout of dives and decreased to avoid unwanted downward thrust during inverted manuevers"})}),"\n",(0,o.jsx)(n.h2,{id:"3d-escmotor-features",children:"3D ESC/Motor features"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"3D"})," Enables motors to run in both directions which permits inverted flight. Zero throttle is now the 50% stick\nposition and the lowest stick position now produces maximum negative throttle, with maximum positive throttle at the\nhighest stick position"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Air mode does not work properly when using 3D mode, you should disable permanent Air Mode in the\n",(0,o.jsx)(n.a,{href:"/docs/wiki/configurator/configuration-tab#other-features",children:"Configuration Tab"})," and configure Air\nMode on a switch in the ",(0,o.jsx)(n.a,{href:"/docs/wiki/configurator/modes-tab",children:"Modes Tab"}),' so that Air Mode is\ndisabled when 3D mode is activated. Simply set the "Air Mode" mode range to be the same switch channel and values as\nthe "Disable 3D Mode" mode range.']})}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsx)(n.p,{children:"GPS Rescue and Failsafe Landing Mode are not implemented in 3D mode and will not function correctly. Be extremely careful."})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"3D Deadband low"})," - Start of the zero-throttle band in 3D mode where no thrust is wanted"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"3D Deadband high"})," - End of the zero-throttle band in 3D mode where no thrust is wanted"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"3D Deadband neutral"})," - Midpoint of the zero-throttle band in 3D mode where no thrust is wanted"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"motors-test-mode",children:"Motors Test Mode"}),"\n",(0,o.jsx)(n.p,{children:"Be careful when bench testing your motors and read this section thoroughly if you are unsure. Always be careful when\nusing lipo batteries. If you are in doubt you may wish to investigate safety options such as Smoke Stoppers which limit\ncurrent from the battery"}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsx)(n.p,{children:"Always remove props before connecting a battery and testing motors. You will hear this repeated for a good reason.\nPlease be careful!"})}),"\n",(0,o.jsx)(n.p,{children:"Visualisation of the current motor signalling. Props should be removed before testing motors. Once a battery is\nconnected and the ESC is online the motors can be spun using the sliders."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"R"})," - RPM telemetry from the ESC"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"E"})," - DShot telemetry error rate. Will show errors if the ESC is not powered. A powered ESC should show 0% or very\nclose to 0% errors. Error rates of 1% or more usually indicate a hardware problem. DShot telemetry requires a modern\nESC firmware such as BlueJay, AM32 or BLHELI32"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"T"})," - Temperature telemetry from the ESC"]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},18913:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/betaflight_configurator_motors_tab-c48bdce4b038d50885594e951a9b2a52.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var o=t(67294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);