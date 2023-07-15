"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5449],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},h=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=u(o),c=a,m=d["".concat(s,".").concat(c)]||d[c]||p[c]||i;return o?n.createElement(m,r(r({ref:t},h),{},{components:o})):n.createElement(m,r({ref:t},h))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},24827:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=o(87462),a=(o(67294),o(3905));const i={sidebar_position:1},r="Setup Guide",l={unversionedId:"wiki/getting-started/setup-guide",id:"wiki/getting-started/setup-guide",title:"Setup Guide",description:"There are a few prerequisites to configure your craft running Betaflight. You will need to install the",source:"@site/docs/wiki/getting-started/setup-guide.mdx",sourceDirName:"wiki/getting-started",slug:"/wiki/getting-started/setup-guide",permalink:"/docs/wiki/getting-started/setup-guide",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"wiki",previous:{title:"Introduction to Betaflight",permalink:"/docs/wiki/getting-started/introduction"},next:{title:"Hardware",permalink:"/docs/wiki/getting-started/hardware"}},s={},u=[{value:"Connecting to your Flight Controller",id:"connecting-to-your-flight-controller",level:2},{value:"Not Showing up/Connecting?",id:"not-showing-upconnecting",level:3},{value:"Don&#39;t Immediately Flash",id:"dont-immediately-flash",level:3},{value:"Basic Settings",id:"basic-settings",level:2},{value:"Backup Your config",id:"backup-your-config",level:3},{value:"Receiver Settings",id:"receiver-settings",level:2},{value:"UART-based Receivers",id:"uart-based-receivers",level:3},{value:"SPI-based Receivers",id:"spi-based-receivers",level:3},{value:"VTX Settings",id:"vtx-settings",level:2},{value:"Analog VTXs",id:"analog-vtxs",level:3},{value:"Digital VTXs",id:"digital-vtxs",level:3},{value:"Motor Settings",id:"motor-settings",level:2},{value:"Mode Settings",id:"mode-settings",level:2},{value:"OSD Settings",id:"osd-settings",level:2},{value:"Ready to Fly!",id:"ready-to-fly",level:2}],h={toc:u};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup-guide"},"Setup Guide"),(0,a.kt)("p",null,"There are a few prerequisites to configure your craft running Betaflight. You will need to install the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/betaflight/betaflight-configurator/releases/tag/latest"},"Betaflight Configurator")," for\nyour operating system. You will be using the configurator to configure your flight controller settings."),(0,a.kt)("h2",{id:"connecting-to-your-flight-controller"},"Connecting to your Flight Controller"),(0,a.kt)("p",null,"Once you have the configurator installed and opened, you will be presented with the following screen:\n",(0,a.kt)("img",{alt:"Betaflight Configurator",src:o(74855).Z,width:"1920",height:"993"})),(0,a.kt)("p",null,"You will need to connect your flight controller to your computer, usually via USB. If all goes well, you will see a\nnew COM port appear in the top right dropdown\n",(0,a.kt)("img",{alt:"Betaflight Configurator",src:o(61761).Z,width:"520",height:"116"})),(0,a.kt)("p",null,'When you have a COM port selected, click the "Connect" button.'),(0,a.kt)("h3",{id:"not-showing-upconnecting"},"Not Showing up/Connecting?"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you do not see a new COM port appear, or the configurator cannot connect, there are a few ways to solve it:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Make sure that you are plugging the USB cable into the flight controller, nothing else. Do not connect BetaFlight Configurator to an HD system. Do not connect BetaFlight Configurator to a radio transmitter. Betaflight Configurator is not meant be used with anything other than a flight controller"),(0,a.kt)("li",{parentName:"ul"},"Make sure you are using a USB cable that is capable of data transfer. Some USB cables are only for charging"),(0,a.kt)("li",{parentName:"ul"},"You may need to install the drivers for your flight controller. There is a download link for the ImpulseRC Driver Fixer tool in the configurator, or you can download it from ",(0,a.kt)("a",{parentName:"li",href:"https://impulserc.com/pages/downloads"},"here")),(0,a.kt)("li",{parentName:"ul"},"If you are still experiencing issues, try shutting down/uninstalling any other software that may be using the COM port. 3d printing software is a common culprit"))),(0,a.kt)("h3",{id:"dont-immediately-flash"},"Don't Immediately Flash"),(0,a.kt)("p",null,"Resist the urge to flash your flight controller with the latest firmware. If it's a pre-built drone, it is more than\nlikely that your flight controller has already been pre-configured with most of the necessary settings by the\nmanufacturer, and flashing it will bring you back to a completely non-configured state. Even if you are building your own\ndrone, the flight controller may have been set up with a default configuration that is possibly needed for some\nfeatures. Just connect for now."),(0,a.kt)("h2",{id:"basic-settings"},"Basic Settings"),(0,a.kt)("p",null,"Now that you've connected to your flight controller, you will need to follow some basic setup steps to get your drone\nin the Air. We'll go through setting up each part of a drone, and by the end you should be ready to fly with Betaflight\nand hopefully a deeper understanding of how it all works."),(0,a.kt)("p",null,"Once you have connected to your flight controller, you will land on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/wiki/configurator/setup-tab"},"Setup Tab"),".\nWhen you move the flight controller, you should see the 3d model move in the configurator. That is a basic good sign\nthat the flight controller is alive and working. While you are there, you can calibrate the gyroscope and accelerometer\nwith the buttons and following the instructions. You can also calibrate the magnetometer, but that is not necessary for\nflight, and you may not even have one."),(0,a.kt)("h3",{id:"backup-your-config"},"Backup Your config"),(0,a.kt)("p",null,"Before making any changes, it's important to back up your current configuration. This will protect you in case of any\nmistakes, and let you return to the original settings if needed. To do this, go to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/wiki/configurator/cli-tab"},"CLI Tab")," tab and send either the\n",(0,a.kt)("inlineCode",{parentName:"p"},"diff all")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"dump")," command. Then copy the output or save it to a file for later use."),(0,a.kt)("h2",{id:"receiver-settings"},"Receiver Settings"),(0,a.kt)("p",null,"The first setup step is to set up your receiver. If you are using a pre-built drone, you will need to figure out where the\nreceiver is connected to the flight controller. If you are building your own drone, you hopefully already know where\nit is. A receiver with its signal wires connected to a (for example) RX1/TX1 pair of pads on the flight controller is\ngoing to be on UART1. RX2/TX2 is UART2, etc. You need this info for setting up the receiver in the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/wiki/configurator/ports-tab"},"Ports Tab"),". Enable ",(0,a.kt)("inlineCode",{parentName:"p"},"Serial RX")," on the UART that your receiver is connected to."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},'The MSP switch is not to be used as a "toggle" for the current UART when setting it (for example) for Serial RX.\nIt\'s a relatively common mistake to make, and then cause your config to not save to prevent unwanted behavior\nwhen conflicting options are set')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If your flight controller has a built-in SPI receiver, you don't need to set up a UART for it. You can just set it up",(0,a.kt)("br",{parentName:"p"}),"\n","in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/wiki/configurator/receiver-tab"},"Receiver Tab"),", we'll go over that right now")),(0,a.kt)("p",null,"Now that you have the ",(0,a.kt)("inlineCode",{parentName:"p"},"Serial RX")," option enabled, you will need to set your receiver-specific settings in the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/wiki/configurator/receiver-tab"},"Receiver Tab"),". Whether you are using a pre-built drone or building your own,\nyou hopefully know what receiver you are using. From there, you can follow the instructions below for your receiver:"),(0,a.kt)("h3",{id:"uart-based-receivers"},"UART-based Receivers"),(0,a.kt)("p",null,"In case you're using a UART-based receiver, you'll need to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"Receiver Mode")," dropdown to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Serial (via UART)")," option, and set the ",(0,a.kt)("inlineCode",{parentName:"p"},"Serial Receiver Provider")," dropdown to the appropriate protocol\nbased on your receiver. Here are the commonly used options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ELRS/Crossfire/Tracer")," - CRSF"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"FrSky")," - SBUS/FPort"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Spektrum")," - Spektrum1024/2048, Spektrum SRXL2"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"FlySky")," - IBUS")),(0,a.kt)("h3",{id:"spi-based-receivers"},"SPI-based Receivers"),(0,a.kt)("p",null,"If you are using a SPI-based receiver, you'll need to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"Receiver Mode")," dropdown to\n",(0,a.kt)("inlineCode",{parentName:"p"},"SPI Rx (e.g. built-in Rx)"),", and the ",(0,a.kt)("inlineCode",{parentName:"p"},"SPI Bus Receiver Provider")," dropdown to the appropriate protocol\nbased on your receiver, similar to the UART-based receivers. Here are the commonly used options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ELRS")," - EXPRESSLRS"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"FrSky")," - FrSky_D for D8, FrSky_X(","_","LBT) for ACCST D16, FrSky_X_V2(","_","LBT) for ACCST V2 D16"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Spektrum")," - SPEKTRUM"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"FlySky")," - A7105_FLYSKY(","_","2A)")),(0,a.kt)("p",null,"Once configured properly, you should see the channel values change and the 3D model move in response to stick\nmovements. If your channels are not properly aligned, adjust the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/wiki/configurator/receiver-tab#channel-map"},"Channel Map")," option accordingly."),(0,a.kt)("h2",{id:"vtx-settings"},"VTX Settings"),(0,a.kt)("p",null,"In most video systems, you don't strictly need to do anything in Betaflight to get video working. However, to get\nanything other than basic video output (VTX control, OSD info for digital systems) you will need to set up your VTX\nsettings."),(0,a.kt)("h3",{id:"analog-vtxs"},"Analog VTXs"),(0,a.kt)("p",null,"Analog is more or less the most common video system, even though it's as old as it is. It's a simple system that tends\nto \"just work\" without any configuration. However, if you want to change the channel, power, or other settings, you\nwill need to set up SmartAudio or Tramp in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/wiki/configurator/ports-tab"},"Ports Tab"),"."),(0,a.kt)("p",null,"Enable ",(0,a.kt)("inlineCode",{parentName:"p"},"SmartAudio")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Tramp")," as a peripheral on the UART that your VTX is connected to, which you should hopefully\nknow. Then you can set up the VTX in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/wiki/configurator/vtx-tab"},"VTX Tab"),". It may seem overwhelming, but if\nyou're using a decently common VTX, you should be able to find a VTX Table for it somewhere on the internet, or even\nfind a preset for it in the configurator."),(0,a.kt)("p",null,"When you find a VTX Table online, it can be in two formats:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CLI Code")," - This is the format that you can copy and paste into the CLI in the configurator, usually just found\nas text. It will look something like this:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bfcli"},"# vtxtable\nvtxtable bands 5\nvtxtable channels 8\nvtxtable band 1 BOSCAM_A A CUSTOM 5865 5845 5825 5805 5785 5765 5745 5725\nvtxtable band 2 BOSCAM_B B CUSTOM 5733 5752 5771 5790 5809 5828 5847 5866\nvtxtable band 3 BOSCAM_E E CUSTOM 5705 5685 5665 5645 5885 5905 5925 5945\nvtxtable band 4 FATSHARK F CUSTOM 5740 5760 5780 5800 5820 5840 5860 5880\nvtxtable band 5 RACEBAND R CUSTOM 5658 5695 5732 5769 5806 5843 5880 5917\nvtxtable powerlevels 5\nvtxtable powervalues 25 100 200 400 600\nvtxtable powerlabels 25 200 500 1.5 2.5\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"JSON")," - This is the format that you can copy and paste or load into the VTX Table section of the configurator.\nIt will usually be a file to download, but can be found as plain text to copy and paste as well. It will look\nsomething like so:")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Click to expand"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "description": "Betaflight VTX Config file for Rush Tank Ultimate",\n  "version": "1.0",\n  "vtx_table": {\n    "bands_list": [\n      {\n        "name": "BAND_A  ",\n        "letter": "A",\n        "is_factory_band": true,\n        "frequencies": [5865, 5845, 5825, 5805, 5785, 5765, 5745, 5725]\n      }\n      // ... more bands\n    ],\n    "powerlevels_list": [\n      {\n        "value": 0,\n        "label": "25 "\n      },\n      {\n        "value": 1,\n        "label": "200"\n      }\n      // ... more power levels\n    ]\n  }\n}\n'))),(0,a.kt)("p",null,"If you can't find a preset, nor a VTX Table, you can look through the manual for your VTX to find the settings you\nneed to set up."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If your VTX is not able to be set to certain channels, or you are unable to set the power level higher, you may need\nto unlock the VTX manually. There are tutorials for that online, but it's usually as simple as holding down the\nbutton on the VTX for a few seconds on power up.")),(0,a.kt)("h3",{id:"digital-vtxs"},"Digital VTXs"),(0,a.kt)("p",null,"Digital VTXs are a newer form of video system that is becoming more and more common. It's a bit more complicated than\nanalog, and needs setup to get OSD and VTX control working."),(0,a.kt)("p",null,"Start in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/wiki/configurator/ports-tab"},"Ports Tab")," by enabling ",(0,a.kt)("inlineCode",{parentName:"p"},"VTX (MSP + Displayport)")," as a peripheral on\nthe UART that your VTX is connected to. It should automatically enable ",(0,a.kt)("inlineCode",{parentName:"p"},"MSP")," as well. If you're on a version older than 4.4, you will only need to enable MSP and then follow further."),(0,a.kt)("p",null,"Then in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/wiki/configurator/presets-tab"},"Preset Tab"),", there are a few system-specific presets that you can use to make the setup easier:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HDZero for 4.2/4.3 and 4.4"),(0,a.kt)("li",{parentName:"ul"},"Avatar 4.2/4.3"),(0,a.kt)("li",{parentName:"ul"},"FPV.WTF MSP OSD 4.2/4.3"),(0,a.kt)("li",{parentName:"ul"},"FPV.WTF + O3 + Avatar for 4.4")),(0,a.kt)("p",null,"For further information on the newest firmware (4.4), please read the ",(0,a.kt)("a",{parentName:"p",href:"/docs/release/Betaflight%204.4%20Release%20Notes#2-hd-osd"},"Release Notes")),(0,a.kt)("h2",{id:"motor-settings"},"Motor Settings"),(0,a.kt)("p",null,"Compared to the other settings, motor settings are pretty simple. In the ",(0,a.kt)("a",{parentName:"p",href:"/docs/wiki/configurator/motors-tab"},"Motors Tab"),",\nstart by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"ESC/Motor Output")," dropdown to the correct protocol. This is usually ",(0,a.kt)("inlineCode",{parentName:"p"},"DShot300")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"DShot600")," for\nmost ESCs available nowadays."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Choosing the correct DShot speed:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"DShot300 is better for FCs with slower processors, like F411 boards. DShot600 is better for faster processors, like\nanything from the F7 family. F405 may work too, but it can cause too high of a CPI load when a lot of peripherals are\nin use")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The DShot speed also depends on the gyro (and thus also the PID loop) speed. If you have a gyro that runs at 8kHz\n(MPU6000), you can use DShot600. If you have a gyro that runs at 3.2KHz (BMI270), you should use DShot300. Using higher\nDShot speeds on slower gyros shoudn't cause any issues, but it also won't give you any benefits")))),(0,a.kt)("p",null,"Once you have that set, you will have to remove the propellors (if you haven't already) and plug in a battery. Click\nthe checkbox to confirm that you have done so, and then you can slowly raise the ",(0,a.kt)("inlineCode",{parentName:"p"},"Master")," slider to see the motors\nspin up. They may stutter a bit at low slider values, but should spin up smoothly at slightly higher values. Check\nthat the motors all spin in the correct direction as set by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Motor direction is reversed")," toggle (also known as\nProps in or Props out, see image below).\n",(0,a.kt)("img",{alt:"Motor Direction",src:o(86674).Z,width:"1024",height:"600"})),(0,a.kt)("p",null,"If they are spinning in the wrong direction, you can reverse them in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Motor direction")," sub-menu. If the motors\ndo not match up with the motor numbers, you will have to remap them"),(0,a.kt)("h2",{id:"mode-settings"},"Mode Settings"),(0,a.kt)("p",null,"Modes serve as a way to change the behavior or action of your quadcopter in flight by using AUX channels as inputs.\nIn the ",(0,a.kt)("a",{parentName:"p",href:"/docs/wiki/configurator/modes-tab"},"Modes Tab"),", you will see a list of all the modes that are available."),(0,a.kt)("p",null,"Let's start with the only one you theoretically need:\n",(0,a.kt)("img",{alt:"ARM Mode",src:o(40921).Z,width:"1612",height:"125"})),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ARM")," mode serves as a way to activate the PID loop and allow the motors to spin. It is usually set to a switch."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Add Range"),". This will add a slider to the mode, which you can use to set the range of the mode. It's\na range of two values, and when the value of the assigned AUX channel is between those two values, the mode will be\nactive. By default the range will be in the middle, so it will be active when the AUX channel is between 1300 and 1700"),(0,a.kt)("li",{parentName:"ol"},"The dropdown that says ",(0,a.kt)("inlineCode",{parentName:"li"},"AUTO")," is for the AUX channel selection. When set to ",(0,a.kt)("inlineCode",{parentName:"li"},"AUTO"),", it will automatically select\nthe AUX channel you change. So flip the switch you want to use to arm the quad, and the dropdown will change to that\nchannel. If you want to use a different channel, you can select it manually"),(0,a.kt)("li",{parentName:"ol"},"The little indicator on the bottom of the slider will show you the value of the AUX channel. Flip the switch into\nthe position you want to arm the quad, and move the range over the indicator")),(0,a.kt)("p",null,"Once you have the range set, then repeat the process for the other modes. You will likely also want:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"BEEPER")," - Makes the beeper (and the motors, when set up) beep")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ANGLE")),(0,a.kt)("admonition",{parentName:"li",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The default flight mode is called acro (sometimes called rate mode). As the name suggests, it's a mode where the\nposition of the sticks controls the rate of rotation of the quad. This is the mode you will want to use for most\nof your flying. Activating any other flight mode overrides acro."),(0,a.kt)("p",{parentName:"admonition"},"Angle mode is a mode where the position of the\nsticks controls the angle of the quad. This is useful for emergency situations, or for beginners who are not\ncomfortable with acro mode yet"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"FLIP OVER AFTER CRASH")," - Reverses the motors to flip the quad over if upside down"),(0,a.kt)("admonition",{parentName:"li",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"This can be very demanding on the motors and the ESC if the motors are stuck after crashing, and can cause the ESC\nor motors to go up in smoke. It's recommended to only use this mode if you know it's more or less safe to do so")))),(0,a.kt)("h2",{id:"osd-settings"},"OSD Settings"),(0,a.kt)("p",null,"The OSD allows you to display information in the video feed from your quadcopter. In the ",(0,a.kt)("a",{parentName:"p",href:"/docs/wiki/configurator/osd-tab"},"OSD Tab"),",\nyou can set up the different elements that will be displayed."),(0,a.kt)("p",null,"You have a list of all the elements on the left, and three columns of checkboxes next to it. Each culumn is for one\nOSD profile. OSD profiles are a way to have different layouts for different situations and be able to easily switch\nbetween them. Enabling the checbox for an element in the first column will enable it for the first OSD profile, the\nsecond column for the second OSD profile, and so on."),(0,a.kt)("p",null,"When you enable an element, it will show up in the preview, and you can drag it around to move it as you like. There\nare also some settings for specific elements, such as selecting units of measurement, the source for the timers to\ntime, and different warnings to display or ignore"),(0,a.kt)("p",null,"You should have at least the following elements enabled:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Warnings")," - Displays warnings for low battery, low RSSI, and other things"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Battery average cell voltage")," - Displays the average cell voltage of the battery, regardless of the number of cells"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Link quality"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"RSNR Value"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"RSSI Value"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"RSSI dBm Value")," - Different ways of measuring the strength and/or quality of the radio\nlink. Choose the one that works best for your radio systemm, can usually be found in the manufacturer documentation")),(0,a.kt)("h2",{id:"ready-to-fly"},"Ready to Fly!"),(0,a.kt)("p",null,"With all the settings done, you should be ready to fly! Do a final check to make sure that everything is as it should\nbe, and do a quick hover test to make sure that everything is working as it should."),(0,a.kt)("p",null,"If something is not working, go through this page, some of the more common mistakes should've been listed.\nIf not here, you can read the ",(0,a.kt)("a",{parentName:"p",href:"/docs/wiki/troubleshooting"},"troubleshooting")," page to see if you can find a solution. If\nyou can't find one, ask in the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.betaflight.com/invite"},"Discord server")))}d.isMDXComponent=!0},61761:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/betaflight_configurator_com_ports-86a5cfe52ee9cb4df046ae553b5a980e.png"},40921:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/betaflight_configurator_modes_arm-042b8dc203f9f04ca7820275f7d870f1.png"},74855:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/betaflight_configurator_welcome-45a414660a7a6df72fc599dbca115874.png"},86674:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/betaflight_props_in_out-704f91537d690070cb896197c62fbcb6.png"}}]);