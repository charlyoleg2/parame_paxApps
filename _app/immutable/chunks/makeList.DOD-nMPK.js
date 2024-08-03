import{p as c,i,f as l,c as y,E as m,a as p,b as N,d as g}from"./index.DW__ldlh.js";var d={partName:"myCircle",params:[c("D1","mm",40,10,200,1)],paramSvg:{D1:"myCircle.svg"},sim:{tMax:100,tStep:.5,tUpdate:500}};function x(a,t,s=""){const e=i(d.partName+s),n=g();e.logstr+=`${e.partName} simTime: ${a}
`;try{const o=t.D1/2;e.logstr+=`myCircle-diameter: ${l(t.D1)} mm
`,n.addMainO(y(0,0,o)),e.fig={face1:n};const r=e.partName;e.vol={extrudes:[{outName:`subpax_${r}`,face:`${r}_face1`,extrudeMethod:m.eLinearOrtho,length:1,rotate:[0,0,0],translate:[0,0,0]}],volumes:[{outName:`pax_${r}`,boolMethod:p.eIdentity,inList:[`subpax_${r}`]}]},e.sub={},e.logstr+=`myCircle drawn successfully!
`,e.calcErr=!1}catch(o){e.logstr+=o,console.log(o)}return e}var b={pTitle:"My Circle",pDescription:"A simple circle for developing paxApps (desiXY-cli and desiXY-ui)",pDef:d,pGeom:x},u={partName:"myRectangle",params:[c("W1","mm",80,10,200,1),c("H1","mm",60,10,200,1)],paramSvg:{W1:"myRectangle.svg",H1:"myRectangle.svg"},sim:{tMax:100,tStep:.5,tUpdate:500}};function v(a,t,s=""){const e=i(u.partName+s),n=g();e.logstr+=`${e.partName} simTime: ${a}
`;try{e.logstr+=`myRectangle area: ${l(t.W1*t.H1)} mm2
`;const o=N(0,0).addSegStrokeR(t.W1,0).addSegStrokeR(0,t.H1).addSegStrokeR(-t.W1,0).closeSegStroke();n.addMainO(o),e.fig={face1:n};const r=e.partName;e.vol={extrudes:[{outName:`subpax_${r}`,face:`${r}_face1`,extrudeMethod:m.eLinearOrtho,length:1,rotate:[0,0,0],translate:[0,0,0]}],volumes:[{outName:`pax_${r}`,boolMethod:p.eIdentity,inList:[`subpax_${r}`]}]},e.sub={},e.logstr+=`myRectangle drawn successfully!
`,e.calcErr=!1}catch(o){e.logstr+=o,console.log(o)}return e}var $={pTitle:"My Rectangle",pDescription:"A simple rectangle for developing paxApps (desiXY-cli and desiXY-ui)",pDef:u,pGeom:v};const f={"desi01/myCircle":b,"desi01/myRectangle":$};function h(a){const t=/^.*\//g;return a.replace(t,"")}function D(a){const t={};for(const s of Object.keys(a)){const e=h(s);t[e]=`/${s}`}return t}function L(a){const t=[];for(const s of Object.keys(a))t.push(s);return t}const S=D(f),k=L(f);export{f as a,S as b,k as d};
