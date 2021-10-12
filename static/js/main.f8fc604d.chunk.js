(this["webpackJsonpphoto-filter"]=this["webpackJsonpphoto-filter"]||[]).push([[0],{55:function(e){e.exports=JSON.parse('{"loadingFilesLimit":"Please select the photo or image"}')},68:function(e,t,n){},69:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(25),i=n.n(r),l=(n(68),n(110)),o=(n(69),n(10)),s=n(99),j=n(105),u=n(102),b=n(106),h=n(107),d=n(108),f=n(109),O=n(95),x=n(103),p=n(2);function g(e){var t=e.handleCloseError,n=e.text;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(b.a,{elevation:6,children:Object(p.jsxs)(O.a,{width:500,height:220,p:3,position:"relative",children:[Object(p.jsxs)(j.a,{container:!0,direction:"column",justifyContent:"space-around",alignItems:"center",children:[Object(p.jsx)(h.a,{mt:3,variant:"h4",children:"Error"}),Object(p.jsx)(h.a,{mt:3,gutterBottom:!0,color:"gray",variant:"p",children:n}),Object(p.jsx)(O.a,{mt:5,width:180,children:Object(p.jsx)(d.a,{fullWidth:!0,onClick:t,variant:"contained",children:"OK"})})]}),Object(p.jsx)(f.a,{onClick:t,style:{position:"absolute",top:10,right:10,zIndex:10},children:Object(p.jsx)(x.a,{})})]})})})}var m=n(98),v=Object(m.a)("input")({display:"none"});function y(e){e.setError;var t=e.setFile;return Object(p.jsx)(b.a,{elevation:3,children:Object(p.jsx)(O.a,{width:800,height:300,children:Object(p.jsx)(j.a,{width:"100%",height:"100%",container:!0,justifyContent:"center",alignItems:"center",children:Object(p.jsx)(b.a,{elevation:18,children:Object(p.jsxs)("label",{htmlFor:"contained-button-file",children:[Object(p.jsx)(v,{onChange:function(e){var n=e.target.files[0];t(n)},accept:"image/jpeg,image/png",id:"contained-button-file",type:"file"}),Object(p.jsx)(d.a,{style:{fontFamily:"Birthstone",fontSize:24,fontWeight:"bold"},variant:"contained",component:"span",children:"Select photo"})]})})})})})}var w=n(55),C=function(e){var t=e.deletePhoto;return Object(p.jsx)(O.a,{width:"100%",children:Object(p.jsxs)(j.a,{container:!0,justifyContent:"space-around",children:[Object(p.jsx)(d.a,{style:{fontFamily:"Birthstone",fontSize:24,fontWeight:"bold"},variant:"contained",onClick:t,children:"Save photo"}),Object(p.jsx)(d.a,{style:{fontFamily:"Birthstone",fontSize:24,fontWeight:"bold"},variant:"outlined",onClick:t,children:"Delete photo"})]})})},F=c.a.memo(C),S=n(101),V=function(e){var t=e.sliderValue,n=e.getValue,a=e.handleChangeValues;return Object(p.jsx)(O.a,{width:250,children:Object(p.jsxs)(j.a,{container:!0,flexDirection:"row",justifyContent:"space-between",alignItems:"center",children:[Object(p.jsx)(h.a,{fontFamily:"Grey Qo",fontSize:32,fontWeight:"bold",color:"gray",children:n()}),Object(p.jsx)(S.a,{defaultValue:100,value:t||null,onChange:function(e){a(e.target.value)},"aria-label":"Default",valueLabelDisplay:"off",style:{width:"80%"}})]})})},k=c.a.memo(V),I=function(e){var t=e.file,n=e.label,c=e.filter,r=e.value,i=e.currentFilter,l=e.selectFilter,o=e.border;var u=Object(a.useCallback)((function(e){switch(e){case"blur":return"".concat(.01*r,"px");case"sepia":return.01*r;case"saturate":return"".concat(2*r,"%")}}),[r]);return Object(p.jsx)(s.a,{style:{cursor:"pointer"},children:Object(p.jsxs)(j.a,{height:"100%",container:!0,flexDirection:"column",alignItems:"center",gap:1,children:[Object(p.jsx)(b.a,{onClick:function(){return l(c)},elevation:i===c?1:10,children:Object(p.jsx)(s.a,{border:o&&"solid 2px #2525ff80",borderRadius:1,p:1,children:Object(p.jsx)(s.a,{width:100,overflow:"hidden",children:Object(p.jsx)("img",{style:{filter:"".concat(c,"(").concat(u(c),")")},src:function(e){return URL.createObjectURL(e)}(t),width:100,alt:t.name})})})}),Object(p.jsx)(h.a,{fontFamily:"Birthstone",fontSize:26,fontWeight:"bold",color:i===c?"#1976d2":"gray",children:n})]})})},B=c.a.memo(I),z=function(e){var t=e.currentFilter,n=e.handleSetCurrentFilter,a=e.file,c=e.saturateValue,r=e.sepiaValue,i=e.blurValue;return Object(p.jsx)(O.a,{children:Object(p.jsxs)(j.a,{width:400,justifyContent:"space-evenly",alignItems:"center",container:!0,children:[Object(p.jsx)(B,{currentFilter:t,selectFilter:n,file:a,width:100,label:"Saturate",filter:"saturate",value:75,border:Boolean(50!==c)}),Object(p.jsx)(B,{currentFilter:t,selectFilter:n,file:a,width:100,label:"Sepia",filter:"sepia",value:75,border:Boolean(0!==r)}),Object(p.jsx)(B,{currentFilter:t,selectFilter:n,file:a,width:100,label:"Blur",filter:"blur",value:100,border:Boolean(0!==i)})]})})},D=c.a.memo(z),E=function(e){var t=e.file,n=e.saturateValue,a=e.sepiaValue,c=e.blurValue;return Object(p.jsx)(s.a,{children:Object(p.jsx)(j.a,{height:"100%",container:!0,flexDirection:"column",alignItems:"center",gap:1,children:Object(p.jsx)(b.a,{elevation:10,children:Object(p.jsx)(s.a,{p:1,children:Object(p.jsx)(s.a,{width:300,overflow:"hidden",children:Object(p.jsx)("img",{style:{filter:"saturate(".concat(2*n,"%) sepia(").concat(.01*a,") blur(").concat(.01*c,"px)")},src:function(e){return URL.createObjectURL(e)}(t),width:300,alt:t.name})})})})})})},L=c.a.memo(E),W=function(e){var t=e.file,n=e.deletePhoto,c=Object(a.useState)(""),r=Object(o.a)(c,2),i=r[0],l=r[1],s=Object(a.useState)(100),u=Object(o.a)(s,2),h=u[0],d=u[1],f=Object(a.useState)(50),x=Object(o.a)(f,2),g=x[0],m=x[1],v=Object(a.useState)(0),y=Object(o.a)(v,2),w=y[0],C=y[1],S=Object(a.useState)(0),V=Object(o.a)(S,2),I=V[0],B=V[1],z=Object(a.useCallback)((function(e){return l(e)}),[]),E=Object(a.useCallback)((function(e){switch(i){case"saturate":m(e);break;case"sepia":C(e);break;case"blur":B(e)}}),[i]),W=Object(a.useCallback)((function(){switch(i){case"saturate":return g;case"sepia":return w;case"blur":return I}}),[i,g,w,I]);return Object(a.useEffect)((function(){d(W())}),[W,g,w,I]),Object(p.jsx)(b.a,{elevation:3,children:Object(p.jsx)(O.a,{width:800,p:3,children:Object(p.jsxs)(j.a,{container:!0,justifyContent:"space-between",height:"100%",width:"100%",children:[Object(p.jsx)(L,{saturateValue:g,sepiaValue:w,blurValue:I,file:t}),Object(p.jsx)(O.a,{children:Object(p.jsxs)(j.a,{height:"100%",container:!0,flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",children:[Object(p.jsx)(D,{currentFilter:i,handleSetCurrentFilter:z,file:t,saturateValue:g,sepiaValue:w,blurValue:I}),Object(p.jsx)(k,{sliderValue:h,getValue:W,handleChangeValues:E}),Object(p.jsx)(F,{deletePhoto:n})]})})]})})})},P=c.a.memo(W);function R(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),i=Object(o.a)(r,2),l=i[0],b=i[1],h=Object(a.useCallback)((function(e){e.target===e.currentTarget&&c(!1)}),[]),d=Object(a.useCallback)((function(){c(!1)}),[]),f=Object(a.useCallback)((function(){b(null)}),[]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(s.a,{width:"100%",p:3,children:Object(p.jsx)(j.a,{width:"100%",height:"100%",container:!0,justifyContent:"center",alignItems:"start",children:l?Object(p.jsx)(P,{deletePhoto:f,file:l}):Object(p.jsx)(y,{setError:c,setFile:b})})}),Object(p.jsx)(u.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:n,onClick:h,children:Object(p.jsx)(g,{text:w.loadingFilesLimit,handleCloseError:d})})]})}function U(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(l.a,{children:Object(p.jsx)(R,{})})})}i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(U,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.f8fc604d.chunk.js.map