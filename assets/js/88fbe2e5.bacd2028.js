"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4934],{75940:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>r});var t=i(85893),l=i(11151);const a={},s="Building Manual.",o={id:"development/building/Building-Manual",title:"Building Manual.",description:"The manual PDF file is generated by concatenating relevant markdown files and by transforming the result using Gimli to obtain the final PDF file. This steps are handled automatically by the build_docs.sh script located in the root of the repository next to the Makefile.",source:"@site/docs/development/building/Building-Manual.md",sourceDirName:"development/building",slug:"/development/building/Building-Manual",permalink:"/docs/development/building/Building-Manual",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"development",previous:{title:"Installing the Linux subsystem",permalink:"/docs/development/building/Building-Betaflight-on-Windows-the-Linux-subsystem-way"},next:{title:"Building in Arch Linux",permalink:"/docs/development/building/Building-in-Arch-Linux"}},d={},r=[{value:"Requirements &amp; Installation",id:"requirements--installation",level:2},{value:"Configuration",id:"configuration",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"building-manual",children:"Building Manual."}),"\n",(0,t.jsxs)(n.p,{children:["The manual PDF file is generated by concatenating relevant markdown files and by transforming the result using Gimli to obtain the final PDF file. This steps are handled automatically by the ",(0,t.jsx)(n.code,{children:"build_docs.sh"})," script located in the root of the repository next to the Makefile."]}),"\n",(0,t.jsx)(n.h2,{id:"requirements--installation",children:"Requirements & Installation"}),"\n",(0,t.jsx)(n.p,{children:"The PDF manual generation uses the Gimli for the conversion. It can be installed via ruby gems. On Debian based systems the installation steps are:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"    sudo apt-get install ruby1.9.1 ruby1.9.1-dev rubygems zlib1g-dev wkhtmltopdf libxml2-dev libxslt-dev\n    sudo gem1.9.1 install gimli\n"})}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["All markdown files need to be registered in the ",(0,t.jsx)(n.code,{children:"build_manual.sh"})," file individually by modifying the ",(0,t.jsx)(n.code,{children:"doc_files"})," variable / array:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"doc_files=( 'Configuration.md'\n\t'Board - CC3D.md'\n\t'...'\n\t'...'\n)\n"})})]})}function c(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>s});var t=i(67294);const l={},a=t.createContext(l);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);