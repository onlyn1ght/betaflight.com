"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9144],{66073:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var t=s(85893),i=s(11151);const l={},r="RSSI",a={id:"development/Rssi",title:"RSSI",description:"RSSI is a measurement of signal strength and is very handy so you know when your aircraft is going out of range or if it is suffering RF interference.",source:"@site/docs/development/Rssi.md",sourceDirName:"development",slug:"/development/Rssi",permalink:"/docs/development/Rssi",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"development",previous:{title:"Profiles (aka PID Profiles)",permalink:"/docs/development/Profiles"},next:{title:"Receivers (RX)",permalink:"/docs/development/Rx"}},o={},d=[{value:"RSSI via PPM",id:"rssi-via-ppm",level:2},{value:"RSSI via Parallel PWM channel",id:"rssi-via-parallel-pwm-channel",level:2},{value:"RSSI from Futaba S.Bus receiver",id:"rssi-from-futaba-sbus-receiver",level:2},{value:"RSSI ADC",id:"rssi-adc",level:2},{value:"RSSI_SCALE setup method",id:"rssi_scale-setup-method",level:3},{value:"RSSI_SCALE setup method",id:"rssi_scale-setup-method-1",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"rssi",children:"RSSI"}),"\n",(0,t.jsx)(n.p,{children:"RSSI is a measurement of signal strength and is very handy so you know when your aircraft is going out of range or if it is suffering RF interference."}),"\n",(0,t.jsx)(n.p,{children:"Some receivers have RSSI outputs. 3 types are supported."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"RSSI via PPM channel"}),"\n",(0,t.jsx)(n.li,{children:"RSSI via Parallel PWM channel"}),"\n",(0,t.jsx)(n.li,{children:"RSSI via ADC with PPM RC that has an RSSI output - aka RSSI ADC"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"rssi-via-ppm",children:"RSSI via PPM"}),"\n",(0,t.jsx)(n.p,{children:"Configure your receiver to output RSSI on a spare channel, then select the channel used via the CLI."}),"\n",(0,t.jsx)(n.p,{children:"e.g. if you used channel 9 then you would set:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"set rssi_channel = 9\n"})}),"\n",(0,t.jsx)(n.p,{children:"Note: Some systems such as EZUHF invert the RSSI ( 0 = Full signal / 100 = Lost signal). To correct this problem you can invert the channel input so you will get a correct reading by using command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"set rssi_invert = ON\n"})}),"\n",(0,t.jsx)(n.p,{children:'Default is set to "OFF" for normal operation ( 100 = Full signal / 0 = Lost signal).'}),"\n",(0,t.jsx)(n.h2,{id:"rssi-via-parallel-pwm-channel",children:"RSSI via Parallel PWM channel"}),"\n",(0,t.jsx)(n.p,{children:"Connect the RSSI signal to any PWM input channel then set the RSSI channel as you would for RSSI via PPM"}),"\n",(0,t.jsx)(n.h2,{id:"rssi-from-futaba-sbus-receiver",children:"RSSI from Futaba S.Bus receiver"}),"\n",(0,t.jsx)(n.p,{children:"The S.Bus serial protocol includes detection of dropped frames. These may be monitored and reported as RSSI by using the following command."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"set rssi_src_frame_errors = ON\n"})}),"\n",(0,t.jsx)(n.p,{children:"Note that RSSI stands for Received Signal Strength Indicator; the detection of S.Bus dropped frames is really a signal quality, not strength indication. Consequently you may experience a more rapid drop in reported RSSI at the extremes of range when using this facility than when using RSSI reporting signal strength."}),"\n",(0,t.jsx)(n.h2,{id:"rssi-adc",children:"RSSI ADC"}),"\n",(0,t.jsx)(n.p,{children:"Connect the RSSI signal to the RC2/CH2 input. The signal must be between 0v and 3.3v.\nUse inline resistors to lower voltage if required; inline smoothing capacitors may also help.\nA simple PPM->RSSI conditioner can easily be made. See the PPM-RSSI conditioning.pdf for details."}),"\n",(0,t.jsx)(n.p,{children:"Under CLI :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["enable using the RSSI_ADC feature : ",(0,t.jsx)(n.code,{children:"feature RSSI_ADC"})]}),"\n",(0,t.jsx)(n.li,{children:"set the RSSI_SCALE parameter (between 1 and 255) to adjust RSSI level according to your configuration. The raw ADC value is divided by the value of this parameter."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Note: Some systems invert the RSSI ( 0 = Full signal / 100 = Lost signal). To correct this problem you can invert the input so you will get a correct reading by using command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"set rssi_invert = ON\n"})}),"\n",(0,t.jsx)(n.h3,{id:"rssi_scale-setup-method",children:"RSSI_SCALE setup method"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"set rssi_scale = 100. The displayed percentage will then be the raw ADC value."}),"\n",(0,t.jsx)(n.li,{children:"turn on RX (close to board). RSSI value should vary a little."}),"\n",(0,t.jsx)(n.li,{children:"Update rssi_scale to the maximum RSSI value previously measured."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"FrSky D4R-II and X8R supported."}),"\n",(0,t.jsx)(n.p,{children:"The feature can not be used when RX_PARALLEL_PWM is enabled."}),"\n",(0,t.jsx)(n.h2,{id:"rssi_scale-setup-method-1",children:"RSSI_SCALE setup method"}),"\n",(0,t.jsxs)(n.p,{children:["To calculate the rssi offset and scale, check the rc value at full signal (",(0,t.jsx)(n.code,{children:"rssi_fullsig"}),") and at almost no signal strength (",(0,t.jsx)(n.code,{children:"rssi_nosig"}),").\nThen, calculate the offset and scale values using the following formula:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"rssi_offset = (1000-rssi_nosig) / 10\nrssi_scale = 100 * 1000 / (rssi_fullsig - rssi_nosig)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Examples are:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"RC System"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"RC value at full strength"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"RC value at no strength"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"rssi_offset"})}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"rssi_scale"})})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Graupner"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"1900"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"1100"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"-10"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"125"})})]})})]}),"\n",(0,t.jsx)(n.p,{children:"Then set these values via CLI:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"set rssi_offset = -10\nset rssi_scale = 125\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var t=s(67294);const i={},l=t.createContext(i);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);