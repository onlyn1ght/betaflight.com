"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9869],{19975:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=o(85893),s=o(11151);const r={},i="Oneshot",l={id:"development/Oneshot",title:"Oneshot",description:"Oneshot allows faster communication between the Flight Controller and the ESCs that are present on your multirotor.",source:"@site/docs/development/Oneshot.md",sourceDirName:"development",slug:"/development/Oneshot",permalink:"/docs/development/Oneshot",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"development",previous:{title:"OSD Profiles",permalink:"/docs/development/OSD-Profiles"},next:{title:"PID-Internals",permalink:"/docs/development/PID-Internals"}},a={},d=[{value:"Supported ESCs",id:"supported-escs",level:2},{value:"Supported Boards",id:"supported-boards",level:2},{value:"Enabling Oneshot",id:"enabling-oneshot",level:2},{value:"Configuration",id:"configuration",level:2},{value:"References",id:"references",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"oneshot",children:"Oneshot"}),"\n",(0,t.jsx)(n.p,{children:"Oneshot allows faster communication between the Flight Controller and the ESCs that are present on your multirotor."}),"\n",(0,t.jsx)(n.p,{children:"It does this in two ways:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Use a signal that varies between 125 \xb5s and 250 \xb5s (instead of the normal PWM timing of 1000\xb5s to 2000\xb5s)"}),"\n",(0,t.jsx)(n.li,{children:"Only send a 'shot' once per flight controller loop, and do this as soon as the flight controller has calculated the required speed of the motors."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"supported-escs",children:"Supported ESCs"}),"\n",(0,t.jsx)(n.p,{children:"FlyDuino KISS ESCs are able to use the Oneshot125 protocol out of the box. There is only one soldering needed.\nBLHeli rev13.0 also supports Oneshot125 and will be automatically selected by the ESC without additional work."}),"\n",(0,t.jsx)(n.h2,{id:"supported-boards",children:"Supported Boards"}),"\n",(0,t.jsx)(n.p,{children:"The Naze boards are supported, and have been flight tested in a number of configurations."}),"\n",(0,t.jsx)(n.p,{children:"CC3D boards have been tested with a PPM receiver, however parallel PWM receivers might not work properly with this board."}),"\n",(0,t.jsx)(n.h2,{id:"enabling-oneshot",children:"Enabling Oneshot"}),"\n",(0,t.jsx)(n.p,{children:"To configure Oneshot, you must turn off any power to your ESCs."}),"\n",(0,t.jsx)(n.p,{children:"It is a good idea at this stage to configure your ESC for oneshot mode (by soldering JP1 in the case of the KISS ESC)."}),"\n",(0,t.jsx)(n.p,{children:"Connect a USB cable to your board, and connect using the Chrome GUI app."}),"\n",(0,t.jsx)(n.p,{children:"Go to the CLI tab, and type the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"feature ONESHOT125\nsave\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then you can safely power up your ESCs again."}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"The process for calibrating oneshot ESCs is the same as any other ESC."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Ensure that your ESCs are not powered up."}),"\n",(0,t.jsx)(n.li,{children:"Connect to the board using a USB cable, and change to the motor test page."}),"\n",(0,t.jsx)(n.li,{children:"Set the motor speed to maximum using the main slider."}),"\n",(0,t.jsx)(n.li,{children:"Connect power to your ESCs. They will beep."}),"\n",(0,t.jsx)(n.li,{children:"Click on the slider to bring the motor speed down to zero. The ESCs will beep again, usually a couple of times."}),"\n",(0,t.jsx)(n.li,{children:"Disconnect the power from your ESCs."}),"\n",(0,t.jsx)(n.li,{children:"Re-connect power to your ESCs, and verify that moving the motor slider makes your motors spin up normally."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["FlyDuino (",(0,t.jsx)("a",{href:"http://flyduino.net/",children:(0,t.jsx)(n.a,{href:"http://flyduino.net/",children:"http://flyduino.net/"})}),")"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>i});var t=o(67294);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);