var Mika3DMod=(()=>{var Fo=Object.defineProperty;var Zu=Object.getOwnPropertyDescriptor;var Ju=Object.getOwnPropertyNames;var $u=Object.prototype.hasOwnProperty;var Ku=(i,e)=>{for(var t in e)Fo(i,t,{get:e[t],enumerable:!0})},ju=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Ju(e))!$u.call(i,s)&&s!==t&&Fo(i,s,{get:()=>e[s],enumerable:!(n=Zu(e,s))||n.enumerable});return i};var Qu=i=>ju(Fo({},"__esModule",{value:!0}),i);var px={};Ku(px,{AV_ACC:()=>Du,AV_COLORS:()=>Pu,AV_EARS:()=>Iu,AV_FACE:()=>Lu,AV_SHAPE:()=>Nu,AV_TAIL:()=>Uu,DECOR_IDS:()=>tx,avatarOpts:()=>As,avatarPng:()=>fx,createCharacter:()=>tn,init:()=>sx,initClass:()=>ox,initInterior:()=>ux,initPlaza:()=>lx,initPreview:()=>rx,initStage:()=>ax,mikaPng:()=>dx,normAv:()=>Fu});var sh=0,Sl=1,rh=2;var Pi=1,ah=2,_s=3,di=0,kt=1,Qt=2,On=0,ys=1,El=2,Tl=3,wl=4,oh=5;var Ii=100,lh=101,ch=102,hh=103,uh=104,fh=200,dh=201,ph=202,mh=203,Al=204,Rl=205,gh=206,xh=207,_h=208,yh=209,vh=210,Mh=211,bh=212,Sh=213,Eh=214,Kr=0,jr=1,Qr=2,ns=3,ea=4,ta=5,na=6,ia=7,Cl=0,Th=1,wh=2,bn=0,Pl=1,Il=2,Ll=3,Dl=4,Nl=5,Ul=6,Fl=7;var Ol=300,pi=301,Li=302,Ua=303,Fa=304,ur=306,an=1e3,In=1001,sa=1002,Ft=1003,Ah=1004;var fr=1005;var Ot=1006,Oa=1007;var mi=1008;var en=1009,Bl=1010,zl=1011,vs=1012,Ba=1013,Sn=1014,En=1015,Tn=1016,za=1017,ka=1018,Ms=1020,kl=35902,Hl=35899,Gl=1021,Vl=1022,pn=1023,Ln=1026,gi=1027,Wl=1028,Ha=1029,xi=1030,Ga=1031;var Va=1033,dr=33776,pr=33777,mr=33778,gr=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,Za=36196,Ja=37492,$a=37496,Ka=37488,ja=37489,xr=37490,Qa=37491,eo=37808,to=37809,no=37810,io=37811,so=37812,ro=37813,ao=37814,oo=37815,lo=37816,co=37817,ho=37818,uo=37819,fo=37820,po=37821,mo=36492,go=36494,xo=36495,_o=36283,yo=36284,_r=36285,vo=36286;var ks=2300,ra=2301,Jr=2302,hl=2303,ul=2400,fl=2401,dl=2402;var Rh=3200;var Mo=0,Ch=1,Qn="",Wt="srgb",Hs="srgb-linear",Gs="linear",pt="srgb";var $r=7680;var Ph=519,Ih=512,Lh=513,Dh=514,bo=515,Nh=516,Uh=517,So=518,Fh=519,Xl=35044;var ql="300 es",vn=2e3,is=2001;function ef(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function tf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Oh(){let i=Vs("canvas");return i.style.display="block",i}var Ac={},ss=null;function Ws(...i){let e="THREE."+i.shift();ss?ss("log",e,...i):console.log(e,...i)}function Bh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $e(...i){i=Bh(i);let e="THREE."+i.shift();if(ss)ss("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Je(...i){i=Bh(i);let e="THREE."+i.shift();if(ss)ss("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ti(...i){let e=i.join(" ");e in Ac||(Ac[e]=!0,$e(...i))}function zh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var kh={[Kr]:jr,[Qr]:na,[ea]:ia,[ns]:ta,[jr]:Kr,[na]:Qr,[ia]:ea,[ta]:ns},Dn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Oo=Math.PI/180,aa=180/Math.PI;function Zn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function nf(i,e){return(i%e+e)%e}function Bo(i,e,t){return(1-t)*i+t*e}function Pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ee=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],f=n[s+2],h=n[s+3],u=r[a+0],d=r[a+1],x=r[a+2],g=r[a+3];if(h!==g||l!==u||c!==d||f!==x){let m=l*u+c*d+f*x+h*g;m<0&&(u=-u,d=-d,x=-x,g=-g,m=-m);let p=1-o;if(m<.9995){let T=Math.acos(m),M=Math.sin(T);p=Math.sin(p*T)/M,o=Math.sin(o*T)/M,l=l*p+u*o,c=c*p+d*o,f=f*p+x*o,h=h*p+g*o}else{l=l*p+u*o,c=c*p+d*o,f=f*p+x*o,h=h*p+g*o;let T=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=T,c*=T,f*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],f=n[s+3],h=r[a],u=r[a+1],d=r[a+2],x=r[a+3];return e[t]=o*x+f*h+l*d-c*u,e[t+1]=l*x+f*u+c*h-o*d,e[t+2]=c*x+f*d+o*u-l*h,e[t+3]=f*x-o*h-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(s/2),h=o(r/2),u=l(n/2),d=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*f*h+c*d*x,this._y=c*d*h-u*f*x,this._z=c*f*x+u*d*h,this._w=c*f*h-u*d*x;break;case"YXZ":this._x=u*f*h+c*d*x,this._y=c*d*h-u*f*x,this._z=c*f*x-u*d*h,this._w=c*f*h+u*d*x;break;case"ZXY":this._x=u*f*h-c*d*x,this._y=c*d*h+u*f*x,this._z=c*f*x+u*d*h,this._w=c*f*h-u*d*x;break;case"ZYX":this._x=u*f*h-c*d*x,this._y=c*d*h+u*f*x,this._z=c*f*x-u*d*h,this._w=c*f*h+u*d*x;break;case"YZX":this._x=u*f*h+c*d*x,this._y=c*d*h+u*f*x,this._z=c*f*x-u*d*h,this._w=c*f*h-u*d*x;break;case"XZY":this._x=u*f*h-c*d*x,this._y=c*d*h-u*f*x,this._z=c*f*x+u*d*h,this._w=c*f*h+u*d*x;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],h=t[10],u=n+o+h;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>h){let d=2*Math.sqrt(1+n-o-h);this._w=(f-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){let d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+a*o+s*c-r*l,this._y=s*f+a*l+r*o-n*c,this._z=r*f+a*c+n*l-s*o,this._w=a*f-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),f=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*f,this.y=n+l*f+o*c-r*h,this.z=s+l*h+r*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zo.copy(this).projectOnVector(e),this.sub(zo)}reflect(e){return this.sub(zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zo=new G,Rc=new Nn,je=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let f=this.elements;return f[0]=e,f[1]=s,f[2]=o,f[3]=t,f[4]=r,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],h=n[7],u=n[2],d=n[5],x=n[8],g=s[0],m=s[3],p=s[6],T=s[1],M=s[4],v=s[7],R=s[2],b=s[5],A=s[8];return r[0]=a*g+o*T+l*R,r[3]=a*m+o*M+l*b,r[6]=a*p+o*v+l*A,r[1]=c*g+f*T+h*R,r[4]=c*m+f*M+h*b,r[7]=c*p+f*v+h*A,r[2]=u*g+d*T+x*R,r[5]=u*m+d*M+x*b,r[8]=u*p+d*v+x*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-n*r*f+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,u=o*l-f*r,d=c*r-a*l,x=t*h+n*u+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return e[0]=h*g,e[1]=(s*c-f*n)*g,e[2]=(o*n-s*a)*g,e[3]=u*g,e[4]=(f*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ti("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ko.makeScale(e,t)),this}rotate(e){return Ti("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ko.makeRotation(-e)),this}translate(e,t){return Ti("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ko.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ko=new je,Cc=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pc=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sf(){let i={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pt&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qn?Gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ti("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ti("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hs]:{primaries:e,whitePoint:n,transfer:Gs,toXYZ:Cc,fromXYZ:Pc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:Cc,fromXYZ:Pc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),i}var lt=sf();function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Bi,oa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bi===void 0&&(Bi=Vs("canvas")),Bi.width=e.width,Bi.height=e.height;let s=Bi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Jn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jn(t[n]/255)*255):t[n]=Jn(t[n]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},rf=0,rs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ho(s[a].image)):r.push(Ho(s[a]))}else r=Ho(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ho(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?oa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}var af=0,Go=new G,Zt=class i extends Dn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=In,s=In,r=Ot,a=mi,o=pn,l=en,c=i.DEFAULT_ANISOTROPY,f=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Zn(),this.name="",this.source=new rs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Go).x}get height(){return this.source.getSize(Go).y}get depth(){return this.source.getSize(Go).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ol)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case an:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case an:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Ol;Zt.DEFAULT_ANISOTROPY=1;var Tt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],f=l[4],h=l[8],u=l[1],d=l[5],x=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(d+1)/2,R=(p+1)/2,b=(f+u)/4,A=(h+g)/4,_=(x+m)/4;return M>v&&M>R?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=b/n,r=A/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=_/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=_/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-x)*(m-x)+(h-g)*(h-g)+(u-f)*(u-f));return Math.abs(T)<.001&&(T=1),this.x=(m-x)/T,this.y=(h-g)/T,this.z=(u-f)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},la=class extends Dn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Zt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new rs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kt=class extends la{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xs=class extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ca=class extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var bt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,f,h,u,d,x,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,f,h,u,d,x,g,m)}set(e,t,n,s,r,a,o,l,c,f,h,u,d,x,g,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=f,p[10]=h,p[14]=u,p[3]=d,p[7]=x,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/zi.setFromMatrixColumn(e,0).length(),r=1/zi.setFromMatrixColumn(e,1).length(),a=1/zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let u=a*f,d=a*h,x=o*f,g=o*h;t[0]=l*f,t[4]=-l*h,t[8]=c,t[1]=d+x*c,t[5]=u-g*c,t[9]=-o*l,t[2]=g-u*c,t[6]=x+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*f,d=l*h,x=c*f,g=c*h;t[0]=u+g*o,t[4]=x*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*f,t[9]=-o,t[2]=d*o-x,t[6]=g+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*f,d=l*h,x=c*f,g=c*h;t[0]=u-g*o,t[4]=-a*h,t[8]=x+d*o,t[1]=d+x*o,t[5]=a*f,t[9]=g-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*f,d=a*h,x=o*f,g=o*h;t[0]=l*f,t[4]=x*c-d,t[8]=u*c+g,t[1]=l*h,t[5]=g*c+u,t[9]=d*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,x=o*l,g=o*c;t[0]=l*f,t[4]=g-u*h,t[8]=x*h+d,t[1]=h,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=d*h+x,t[10]=u-g*h}else if(e.order==="XZY"){let u=a*l,d=a*c,x=o*l,g=o*c;t[0]=l*f,t[4]=-h,t[8]=c*f,t[1]=u*h+g,t[5]=a*f,t[9]=d*h-x,t[2]=x*h-d,t[6]=o*f,t[10]=g*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(of,e,lf)}lookAt(e,t,n){let s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ii.crossVectors(n,nn),ii.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ii.crossVectors(n,nn)),ii.normalize(),Tr.crossVectors(nn,ii),s[0]=ii.x,s[4]=Tr.x,s[8]=nn.x,s[1]=ii.y,s[5]=Tr.y,s[9]=nn.y,s[2]=ii.z,s[6]=Tr.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],h=n[5],u=n[9],d=n[13],x=n[2],g=n[6],m=n[10],p=n[14],T=n[3],M=n[7],v=n[11],R=n[15],b=s[0],A=s[4],_=s[8],P=s[12],N=s[1],z=s[5],Z=s[9],F=s[13],E=s[2],I=s[6],q=s[10],w=s[14],C=s[3],L=s[7],O=s[11],B=s[15];return r[0]=a*b+o*N+l*E+c*C,r[4]=a*A+o*z+l*I+c*L,r[8]=a*_+o*Z+l*q+c*O,r[12]=a*P+o*F+l*w+c*B,r[1]=f*b+h*N+u*E+d*C,r[5]=f*A+h*z+u*I+d*L,r[9]=f*_+h*Z+u*q+d*O,r[13]=f*P+h*F+u*w+d*B,r[2]=x*b+g*N+m*E+p*C,r[6]=x*A+g*z+m*I+p*L,r[10]=x*_+g*Z+m*q+p*O,r[14]=x*P+g*F+m*w+p*B,r[3]=T*b+M*N+v*E+R*C,r[7]=T*A+M*z+v*I+R*L,r[11]=T*_+M*Z+v*q+R*O,r[15]=T*P+M*F+v*w+R*B,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],u=e[10],d=e[14],x=e[3],g=e[7],m=e[11],p=e[15],T=l*d-c*u,M=o*d-c*h,v=o*u-l*h,R=a*d-c*f,b=a*u-l*f,A=a*h-o*f;return t*(g*T-m*M+p*v)-n*(x*T-m*R+p*b)+s*(x*M-g*R+p*A)-r*(x*v-g*b+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return t*(a*f-o*c)-n*(r*f-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],u=e[10],d=e[11],x=e[12],g=e[13],m=e[14],p=e[15],T=t*o-n*a,M=t*l-s*a,v=t*c-r*a,R=n*l-s*o,b=n*c-r*o,A=s*c-r*l,_=f*g-h*x,P=f*m-u*x,N=f*p-d*x,z=h*m-u*g,Z=h*p-d*g,F=u*p-d*m,E=T*F-M*Z+v*z+R*N-b*P+A*_;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/E;return e[0]=(o*F-l*Z+c*z)*I,e[1]=(s*Z-n*F-r*z)*I,e[2]=(g*A-m*b+p*R)*I,e[3]=(u*b-h*A-d*R)*I,e[4]=(l*N-a*F-c*P)*I,e[5]=(t*F-s*N+r*P)*I,e[6]=(m*v-x*A-p*M)*I,e[7]=(f*A-u*v+d*M)*I,e[8]=(a*Z-o*N+c*_)*I,e[9]=(n*N-t*Z-r*_)*I,e[10]=(x*b-g*v+p*T)*I,e[11]=(h*v-f*b-d*T)*I,e[12]=(o*P-a*z-l*_)*I,e[13]=(t*z-n*P+s*_)*I,e[14]=(g*M-x*R-m*T)*I,e[15]=(f*R-h*M+u*T)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,f=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+n,f*l-s*a,0,c*l-s*o,f*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,f=a+a,h=o+o,u=r*c,d=r*f,x=r*h,g=a*f,m=a*h,p=o*h,T=l*c,M=l*f,v=l*h,R=n.x,b=n.y,A=n.z;return s[0]=(1-(g+p))*R,s[1]=(d+v)*R,s[2]=(x-M)*R,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(u+p))*b,s[6]=(m+T)*b,s[7]=0,s[8]=(x+M)*A,s[9]=(m-T)*A,s[10]=(1-(u+g))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=zi.set(s[0],s[1],s[2]).length(),o=zi.set(s[4],s[5],s[6]).length(),l=zi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),xn.copy(this);let c=1/a,f=1/o,h=1/l;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=f,xn.elements[5]*=f,xn.elements[6]*=f,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,t.setFromRotationMatrix(xn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=vn,l=!1){let c=this.elements,f=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),x,g;if(l)x=r/(a-r),g=a*r/(a-r);else if(o===vn)x=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===is)x=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=vn,l=!1){let c=this.elements,f=2/(t-e),h=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),x,g;if(l)x=1/(a-r),g=a/(a-r);else if(o===vn)x=-2/(a-r),g=-(a+r)/(a-r);else if(o===is)x=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},zi=new G,xn=new bt,of=new G(0,0,0),lf=new G(1,1,1),ii=new G,Tr=new G,nn=new G,Ic=new bt,Lc=new Nn,$n=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],f=s[9],h=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ic.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ic,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lc.setFromEuler(this),this.setFromQuaternion(Lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var as=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cf=0,Dc=new G,ki=new Nn,Gn=new bt,wr=new G,Ps=new G,hf=new G,uf=new Nn,Nc=new G(1,0,0),Uc=new G(0,1,0),Fc=new G(0,0,1),Oc={type:"added"},ff={type:"removed"},Hi={type:"childadded",child:null},Vo={type:"childremoved",child:null},Bt=class i extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new G,t=new $n,n=new Nn,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new je}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new as,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(Nc,e)}rotateY(e){return this.rotateOnAxis(Uc,e)}rotateZ(e){return this.rotateOnAxis(Fc,e)}translateOnAxis(e,t){return Dc.copy(e).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nc,e)}translateY(e){return this.translateOnAxis(Uc,e)}translateZ(e){return this.translateOnAxis(Fc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wr.copy(e):wr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Ps,wr,this.up):Gn.lookAt(wr,Ps,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Gn),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oc),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ff),Vo.child=e,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oc),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,hf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,uf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),u=a(e.skeletons),d=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Bt.DEFAULT_UP=new G(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Re=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},df={type:"move"},os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),d=.02,x=.005;c.inputState.pinching&&u>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(df)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Wo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=nf(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Wo(a,r,e+1/3),this.g=Wo(a,r,e),this.b=Wo(a,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=Wt){function n(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){let n=Hh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return lt.workingToColorSpace(Vt.copy(this),e),Math.round(at(Vt.r*255,0,255))*65536+Math.round(at(Vt.g*255,0,255))*256+Math.round(at(Vt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Vt.copy(this),t);let n=Vt.r,s=Vt.g,r=Vt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,f=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Wt){lt.workingToColorSpace(Vt.copy(this),e);let t=Vt.r,n=Vt.g,s=Vt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Ar);let n=Bo(si.h,Ar.h,t),s=Bo(si.s,Ar.s,t),r=Bo(si.l,Ar.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new Qe;Qe.NAMES=Hh;var Mn=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},_n=new G,Vn=new G,Xo=new G,Wn=new G,Gi=new G,Vi=new G,Bc=new G,qo=new G,Yo=new G,Zo=new G,Jo=new Tt,$o=new Tt,Ko=new Tt,Yn=class i{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),_n.subVectors(e,t),s.cross(_n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){_n.subVectors(s,t),Vn.subVectors(n,t),Xo.subVectors(e,t);let a=_n.dot(_n),o=_n.dot(Vn),l=_n.dot(Xo),c=Vn.dot(Vn),f=Vn.dot(Xo),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let u=1/h,d=(c*l-o*f)*u,x=(a*f-o*l)*u;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(a,Wn.y),l.addScaledVector(o,Wn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Jo.setScalar(0),$o.setScalar(0),Ko.setScalar(0),Jo.fromBufferAttribute(e,t),$o.fromBufferAttribute(e,n),Ko.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Jo,r.x),a.addScaledVector($o,r.y),a.addScaledVector(Ko,r.z),a}static isFrontFacing(e,t,n,s){return _n.subVectors(n,t),Vn.subVectors(e,t),_n.cross(Vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),_n.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Gi.subVectors(s,n),Vi.subVectors(r,n),qo.subVectors(e,n);let l=Gi.dot(qo),c=Vi.dot(qo);if(l<=0&&c<=0)return t.copy(n);Yo.subVectors(e,s);let f=Gi.dot(Yo),h=Vi.dot(Yo);if(f>=0&&h<=f)return t.copy(s);let u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(n).addScaledVector(Gi,a);Zo.subVectors(e,r);let d=Gi.dot(Zo),x=Vi.dot(Zo);if(x>=0&&d<=x)return t.copy(r);let g=d*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Vi,o);let m=f*x-d*h;if(m<=0&&h-f>=0&&d-x>=0)return Bc.subVectors(r,s),o=(h-f)/(h-f+(d-x)),t.copy(s).addScaledVector(Bc,o);let p=1/(m+g+u);return a=g*p,o=u*p,t.copy(n).addScaledVector(Gi,a).addScaledVector(Vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dn=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),Cr.subVectors(this.max,Is),Wi.subVectors(e.a,Is),Xi.subVectors(e.b,Is),qi.subVectors(e.c,Is),ri.subVectors(Xi,Wi),ai.subVectors(qi,Xi),vi.subVectors(Wi,qi);let t=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-vi.z,vi.y,ri.z,0,-ri.x,ai.z,0,-ai.x,vi.z,0,-vi.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-vi.y,vi.x,0];return!jo(t,Wi,Xi,qi,Cr)||(t=[1,0,0,0,1,0,0,0,1],!jo(t,Wi,Xi,qi,Cr))?!1:(Pr.crossVectors(ri,ai),t=[Pr.x,Pr.y,Pr.z],jo(t,Wi,Xi,qi,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xn=[new G,new G,new G,new G,new G,new G,new G,new G],yn=new G,Rr=new dn,Wi=new G,Xi=new G,qi=new G,ri=new G,ai=new G,vi=new G,Is=new G,Cr=new G,Pr=new G,Mi=new G;function jo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Mi.fromArray(i,r);let o=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),f=n.dot(Mi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var It=new G,Ir=new Ee,pf=0,rn=class extends Dn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xl,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix3(e),this.setXY(t,Ir.x,Ir.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var qs=class extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ys=class extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var gt=class extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}},mf=new dn,Ls=new G,Qo=new G,ls=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):mf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);let t=Ls.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ls,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(Qo)),this.expandByPoint(Ls.copy(e.center).sub(Qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},gf=0,fn=new bt,el=new Bt,Yi=new G,sn=new dn,Ds=new dn,Ut=new G,zt=class i extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ef(e)?Ys:qs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return el.lookAt(e),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(sn.min,Ds.min),sn.expandByPoint(Ut),Ut.addVectors(sn.max,Ds.max),sn.expandByPoint(Ut)):(sn.expandByPoint(Ds.min),sn.expandByPoint(Ds.max))}sn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ut));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Ut.fromBufferAttribute(o,c),l&&(Yi.fromBufferAttribute(e,c),Ut.add(Yi)),s=Math.max(s,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new rn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new G,l[_]=new G;let c=new G,f=new G,h=new G,u=new Ee,d=new Ee,x=new Ee,g=new G,m=new G;function p(_,P,N){c.fromBufferAttribute(n,_),f.fromBufferAttribute(n,P),h.fromBufferAttribute(n,N),u.fromBufferAttribute(r,_),d.fromBufferAttribute(r,P),x.fromBufferAttribute(r,N),f.sub(c),h.sub(c),d.sub(u),x.sub(u);let z=1/(d.x*x.y-x.x*d.y);isFinite(z)&&(g.copy(f).multiplyScalar(x.y).addScaledVector(h,-d.y).multiplyScalar(z),m.copy(h).multiplyScalar(d.x).addScaledVector(f,-x.x).multiplyScalar(z),o[_].add(g),o[P].add(g),o[N].add(g),l[_].add(m),l[P].add(m),l[N].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let _=0,P=T.length;_<P;++_){let N=T[_],z=N.start,Z=N.count;for(let F=z,E=z+Z;F<E;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let M=new G,v=new G,R=new G,b=new G;function A(_){R.fromBufferAttribute(s,_),b.copy(R);let P=o[_];M.copy(P),M.sub(R.multiplyScalar(R.dot(P))).normalize(),v.crossVectors(b,P);let z=v.dot(l[_])<0?-1:1;a.setXYZW(_,M.x,M.y,M.z,z)}for(let _=0,P=T.length;_<P;++_){let N=T[_],z=N.start,Z=N.count;for(let F=z,E=z+Z;F<E;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,f=new G,h=new G;if(e)for(let u=0,d=e.count;u<d;u+=3){let x=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(f),l.add(f),c.add(f),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){let c=o.array,f=o.itemSize,h=o.normalized,u=new c.constructor(l.length*f),d=0,x=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*f;for(let p=0;p<f;p++)u[x++]=c[d++]}return new rn(u,f,h)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let f=0,h=c.length;f<h;f++){let u=c[f],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){let d=c[h];f.push(d.toJSON(e.data))}f.length>0&&(s[l]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(t))}let r=e.morphAttributes;for(let c in r){let f=[],h=r[c];for(let u=0,d=h.length;u<d;u++)f.push(h[u].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,f=a.length;c<f;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ha=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xl,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Yt=new G,Zs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ws("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ws("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},tl=new G,xf=new G,_f=new je,$t=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=tl.subVectors(n,t).cross(xf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(tl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_f.getNormalMatrix(e),s=this.coplanarPoint(tl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},yf=0,Kn=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=ys,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=Rl,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new $t().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ee().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},li=class extends Kn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zi,Ns=new G,Ji=new G,$i=new G,Ki=new Ee,Us=new Ee,Gh=new bt,Lr=new G,Fs=new G,Dr=new G,zc=new Ee,nl=new Ee,kc=new Ee,wi=class extends Bt{constructor(e=new li){if(super(),this.isSprite=!0,this.type="Sprite",Zi===void 0){Zi=new zt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ha(t,5);Zi.setIndex([0,1,2,0,2,3]),Zi.setAttribute("position",new Zs(n,3,0,!1)),Zi.setAttribute("uv",new Zs(n,2,3,!1))}this.geometry=Zi,this.material=e,this.center=new Ee(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ji.setFromMatrixScale(this.matrixWorld),Gh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$i.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ji.multiplyScalar(-$i.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Nr(Lr.set(-.5,-.5,0),$i,a,Ji,s,r),Nr(Fs.set(.5,-.5,0),$i,a,Ji,s,r),Nr(Dr.set(.5,.5,0),$i,a,Ji,s,r),zc.set(0,0),nl.set(1,0),kc.set(1,1);let o=e.ray.intersectTriangle(Lr,Fs,Dr,!1,Ns);if(o===null&&(Nr(Fs.set(-.5,.5,0),$i,a,Ji,s,r),nl.set(0,1),o=e.ray.intersectTriangle(Lr,Dr,Fs,!1,Ns),o===null))return;let l=e.ray.origin.distanceTo(Ns);l<e.near||l>e.far||t.push({distance:l,point:Ns.clone(),uv:Yn.getInterpolation(Ns,Lr,Fs,Dr,zc,nl,kc,new Ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Nr(i,e,t,n,s,r){Ki.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Us.x=r*Ki.x-s*Ki.y,Us.y=s*Ki.x+r*Ki.y):Us.copy(Ki),i.copy(e),i.x+=Us.x,i.y+=Us.y,i.applyMatrix4(Gh)}var qn=new G,il=new G,Ur=new G,Fr=new G,Js=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){il.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),Fr.copy(this.origin).sub(il);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ur),o=Fr.dot(this.direction),l=-Fr.dot(Ur),c=Fr.lengthSq(),f=Math.abs(1-a*a),h,u,d,x;if(f>0)if(h=a*l-o,u=a*o-l,x=r*f,h>=0)if(u>=-x)if(u<=x){let g=1/f;h*=g,u*=g,d=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;else u<=-x?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+u*(u+2*l)+c):u<=x?(h=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+u*(u+2*l)+c);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(il).addScaledVector(Ur,u),d}intersectSphere(e,t){if(e.radius<0)return null;qn.subVectors(e.center,this.origin);let n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),f>=0?(r=(e.min.y-u.y)*f,a=(e.max.y-u.y)*f):(r=(e.max.y-u.y)*f,a=(e.min.y-u.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,h=e.x-a.x,u=e.y-a.y,d=e.z-a.z,x=t.x-a.x,g=t.y-a.y,m=t.z-a.z,p=n.x-a.x,T=n.y-a.y,M=n.z-a.z,v=Math.abs(l),R=Math.abs(c),b=Math.abs(f),A,_,P,N,z,Z,F,E,I,q,w,C;if(v>=R&&v>=b?(P=l,Z=h,I=x,C=p,l>=0?(A=c,_=f,N=u,z=d,F=g,E=m,q=T,w=M):(A=f,_=c,N=d,z=u,F=m,E=g,q=M,w=T)):R>=b?(P=c,Z=u,I=g,C=T,c>=0?(A=f,_=l,N=d,z=h,F=m,E=x,q=M,w=p):(A=l,_=f,N=h,z=d,F=x,E=m,q=p,w=M)):(P=f,Z=d,I=m,C=M,f>=0?(A=l,_=c,N=h,z=u,F=x,E=g,q=p,w=T):(A=c,_=l,N=u,z=h,F=g,E=x,q=T,w=p)),P===0)return null;let L=A/P,O=_/P,B=1/P,Q=N-L*Z,ae=z-O*Z,ue=F-L*I,ce=E-O*I,V=q-L*C,k=w-O*C,J=V*ce-k*ue,oe=Q*k-ae*V,me=ue*ae-ce*Q;if(s){if(J<0||oe<0||me<0)return null}else if((J<0||oe<0||me<0)&&(J>0||oe>0||me>0))return null;let ye=J+oe+me;if(ye===0)return null;let Oe=B*(J*Z+oe*I+me*C);return(ye>0?Oe<0:Oe>0)?null:this.at(Oe/ye,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ot=class extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Hc=new bt,bi=new Js,Or=new ls,Gc=new G,Br=new G,zr=new G,kr=new G,sl=new G,Hr=new G,Vc=new G,Gr=new G,ut=class extends Bt{constructor(e=new zt,t=new ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=o[l],h=r[l];f!==0&&(sl.fromBufferAttribute(h,e),a?Hr.addScaledVector(sl,f):Hr.addScaledVector(sl.sub(t),f))}t.add(Hr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),bi.copy(e.ray).recast(e.near),!(Or.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Or,Gc)===null||bi.origin.distanceToSquared(Gc)>(e.far-e.near)**2))&&(Hc.copy(r).invert(),bi.copy(e.ray).applyMatrix4(Hc),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=u.length;x<g;x++){let m=u[x],p=a[m.materialIndex],T=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=T,R=M;v<R;v+=3){let b=o.getX(v),A=o.getX(v+1),_=o.getX(v+2);s=Vr(this,p,e,n,c,f,h,b,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=x,p=g;m<p;m+=3){let T=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);s=Vr(this,a,e,n,c,f,h,T,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,g=u.length;x<g;x++){let m=u[x],p=a[m.materialIndex],T=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=T,R=M;v<R;v+=3){let b=v,A=v+1,_=v+2;s=Vr(this,p,e,n,c,f,h,b,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=x,p=g;m<p;m+=3){let T=m,M=m+1,v=m+2;s=Vr(this,a,e,n,c,f,h,T,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function vf(i,e,t,n,s,r,a,o){let l;if(e.side===kt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===di,o),l===null)return null;Gr.copy(o),Gr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Gr);return c<t.near||c>t.far?null:{distance:c,point:Gr.clone(),object:i}}function Vr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Br),i.getVertexPosition(l,zr),i.getVertexPosition(c,kr);let f=vf(i,e,t,n,Br,zr,kr,Vc);if(f){let h=new G;Yn.getBarycoord(Vc,Br,zr,kr,h),s&&(f.uv=Yn.getInterpolatedAttribute(s,o,l,c,h,new Ee)),r&&(f.uv1=Yn.getInterpolatedAttribute(r,o,l,c,h,new Ee)),a&&(f.normal=Yn.getInterpolatedAttribute(a,o,l,c,h,new G),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new G,materialIndex:0};Yn.getNormal(Br,zr,kr,u.normal),f.face=u,f.barycoord=h}return f}var ua=class extends Zt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ft,f=Ft,h,u){super(null,a,o,l,c,f,s,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Si=new ls,Mf=new Ee(.5,.5),Wr=new G,cs=class{constructor(e=new $t,t=new $t,n=new $t,s=new $t,r=new $t,a=new $t){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],f=r[4],h=r[5],u=r[6],d=r[7],x=r[8],g=r[9],m=r[10],p=r[11],T=r[12],M=r[13],v=r[14],R=r[15];if(s[0].setComponents(c-a,d-f,p-x,R-T).normalize(),s[1].setComponents(c+a,d+f,p+x,R+T).normalize(),s[2].setComponents(c+o,d+h,p+g,R+M).normalize(),s[3].setComponents(c-o,d-h,p-g,R-M).normalize(),n)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,d-u,p-m,R-v).normalize();else if(s[4].setComponents(c-l,d-u,p-m,R-v).normalize(),t===vn)s[5].setComponents(c+l,d+u,p+m,R+v).normalize();else if(t===is)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){Si.center.set(0,0,0);let t=Mf.distanceTo(e.center);return Si.radius=.7071067811865476+t,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Wr.x=s.normal.x>0?e.max.x:e.min.x,Wr.y=s.normal.y>0?e.max.y:e.min.y,Wr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var $s=class extends Zt{constructor(e=[],t=pi,n,s,r,a,o,l,c,f){super(e,t,n,s,r,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},hs=class extends Zt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ci=class extends Zt{constructor(e,t,n=Sn,s,r,a,o=Ft,l=Ft,c,f=Ln,h=1){if(f!==Ln&&f!==gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:h};super(u,s,r,a,o,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},fa=class extends ci{constructor(e,t=Sn,n=pi,s,r,a=Ft,o=Ft,l,c=Ln){let f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,t,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ks=class extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Un=class i extends zt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],f=[],h=[],u=0,d=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(f,3)),this.setAttribute("uv",new gt(h,2));function x(g,m,p,T,M,v,R,b,A,_,P){let N=v/A,z=R/_,Z=v/2,F=R/2,E=b/2,I=A+1,q=_+1,w=0,C=0,L=new G;for(let O=0;O<q;O++){let B=O*z-F;for(let Q=0;Q<I;Q++){let ae=Q*N-Z;L[g]=ae*T,L[m]=B*M,L[p]=E,c.push(L.x,L.y,L.z),L[g]=0,L[m]=0,L[p]=b>0?1:-1,f.push(L.x,L.y,L.z),h.push(Q/A),h.push(1-O/_),w+=1}}for(let O=0;O<_;O++)for(let B=0;B<A;B++){let Q=u+B+I*O,ae=u+B+I*(O+1),ue=u+(B+1)+I*(O+1),ce=u+(B+1)+I*O;l.push(Q,ae,ce),l.push(ae,ue,ce),C+=6}o.addGroup(d,C,P),d+=C,u+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ai=class i extends zt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new G,f=new Ee;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){let d=n+h/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),f.x=(a[u]/e+1)/2,f.y=(a[u+1]/e+1)/2,l.push(f.x,f.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ye=class i extends zt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let f=[],h=[],u=[],d=[],x=0,g=[],m=n/2,p=0;T(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(f),this.setAttribute("position",new gt(h,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(d,2));function T(){let v=new G,R=new G,b=0,A=(t-e)/n;for(let _=0;_<=r;_++){let P=[],N=_/r,z=N*(t-e)+e;for(let Z=0;Z<=s;Z++){let F=Z/s,E=F*l+o,I=Math.sin(E),q=Math.cos(E);R.x=z*I,R.y=-N*n+m,R.z=z*q,h.push(R.x,R.y,R.z),v.set(I,A,q).normalize(),u.push(v.x,v.y,v.z),d.push(F,1-N),P.push(x++)}g.push(P)}for(let _=0;_<s;_++)for(let P=0;P<r;P++){let N=g[P][_],z=g[P+1][_],Z=g[P+1][_+1],F=g[P][_+1];(e>0||P!==0)&&(f.push(N,z,F),b+=3),(t>0||P!==r-1)&&(f.push(z,Z,F),b+=3)}c.addGroup(p,b,0),p+=b}function M(v){let R=x,b=new Ee,A=new G,_=0,P=v===!0?e:t,N=v===!0?1:-1;for(let Z=1;Z<=s;Z++)h.push(0,m*N,0),u.push(0,N,0),d.push(.5,.5),x++;let z=x;for(let Z=0;Z<=s;Z++){let E=Z/s*l+o,I=Math.cos(E),q=Math.sin(E);A.x=P*q,A.y=m*N,A.z=P*I,h.push(A.x,A.y,A.z),u.push(0,N,0),b.x=I*.5+.5,b.y=q*.5*N+.5,d.push(b.x,b.y),x++}for(let Z=0;Z<s;Z++){let F=R+Z,E=z+Z;v===!0?f.push(E,E+1,F):f.push(E+1,E,F),_+=3}c.addGroup(p,_,v===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jt=class i extends Ye{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},da=class i extends zt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),f(),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(r.slice(),3)),this.setAttribute("uv",new gt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(T){let M=new G,v=new G,R=new G;for(let b=0;b<t.length;b+=3)d(t[b+0],M),d(t[b+1],v),d(t[b+2],R),l(M,v,R,T)}function l(T,M,v,R){let b=R+1,A=[];for(let _=0;_<=b;_++){A[_]=[];let P=T.clone().lerp(v,_/b),N=M.clone().lerp(v,_/b),z=b-_;for(let Z=0;Z<=z;Z++)Z===0&&_===b?A[_][Z]=P:A[_][Z]=P.clone().lerp(N,Z/z)}for(let _=0;_<b;_++)for(let P=0;P<2*(b-_)-1;P++){let N=Math.floor(P/2);P%2===0?(u(A[_][N+1]),u(A[_+1][N]),u(A[_][N])):(u(A[_][N+1]),u(A[_+1][N+1]),u(A[_+1][N]))}}function c(T){let M=new G;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(T),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function f(){let T=new G;for(let M=0;M<r.length;M+=3){T.x=r[M+0],T.y=r[M+1],T.z=r[M+2];let v=m(T)/2/Math.PI+.5,R=p(T)/Math.PI+.5;a.push(v,1-R)}x(),h()}function h(){for(let T=0;T<a.length;T+=6){let M=a[T+0],v=a[T+2],R=a[T+4],b=Math.max(M,v,R),A=Math.min(M,v,R);b>.9&&A<.1&&(M<.2&&(a[T+0]+=1),v<.2&&(a[T+2]+=1),R<.2&&(a[T+4]+=1))}}function u(T){r.push(T.x,T.y,T.z)}function d(T,M){let v=T*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function x(){let T=new G,M=new G,v=new G,R=new G,b=new Ee,A=new Ee,_=new Ee;for(let P=0,N=0;P<r.length;P+=9,N+=6){T.set(r[P+0],r[P+1],r[P+2]),M.set(r[P+3],r[P+4],r[P+5]),v.set(r[P+6],r[P+7],r[P+8]),b.set(a[N+0],a[N+1]),A.set(a[N+2],a[N+3]),_.set(a[N+4],a[N+5]),R.copy(T).add(M).add(v).divideScalar(3);let z=m(R);g(b,N+0,T,z),g(A,N+2,M,z),g(_,N+4,v,z)}}function g(T,M,v,R){R<0&&T.x===1&&(a[M]=T.x-1),v.x===0&&v.z===0&&(a[M]=R/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$e("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let f=n[s],u=n[s+1]-f,d=(a-f)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ee:new G);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new G,s=[],r=[],a=[],o=new G,l=new bt;for(let d=0;d<=e;d++){let x=d/e;s[d]=this.getTangentAt(x,new G)}r[0]=new G,a[0]=new G;let c=Number.MAX_VALUE,f=Math.abs(s[0].x),h=Math.abs(s[0].y),u=Math.abs(s[0].z);f<=c&&(c=f,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(at(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,x))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(at(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],d*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},us=class extends on{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ee){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*f-d*h+this.aX,c=u*h+d*f+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},pa=class extends us{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Yl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,f,h){let u=(a-r)/c-(o-r)/(c+f)+(o-a)/f,d=(o-a)/f-(l-a)/(f+h)+(l-o)/h;u*=f,d*=f,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Wc=new G,Xc=new G,rl=new Yl,al=new Yl,ol=new Yl,ma=class extends on{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new G){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,f;this.closed||o>0?c=s[(o-1)%r]:(Xc.subVectors(s[0],s[1]).add(s[0]),c=Xc);let h=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?f=s[(o+2)%r]:(Wc.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=Wc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(f),d);g<1e-4&&(g=1),x<1e-4&&(x=g),m<1e-4&&(m=g),rl.initNonuniformCatmullRom(c.x,h.x,u.x,f.x,x,g,m),al.initNonuniformCatmullRom(c.y,h.y,u.y,f.y,x,g,m),ol.initNonuniformCatmullRom(c.z,h.z,u.z,f.z,x,g,m)}else this.curveType==="catmullrom"&&(rl.initCatmullRom(c.x,h.x,u.x,f.x,this.tension),al.initCatmullRom(c.y,h.y,u.y,f.y,this.tension),ol.initCatmullRom(c.z,h.z,u.z,f.z,this.tension));return n.set(rl.calc(l),al.calc(l),ol.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new G().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function qc(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function bf(i,e){let t=1-i;return t*t*e}function Sf(i,e){return 2*(1-i)*i*e}function Ef(i,e){return i*i*e}function Bs(i,e,t,n){return bf(i,e)+Sf(i,t)+Ef(i,n)}function Tf(i,e){let t=1-i;return t*t*t*e}function wf(i,e){let t=1-i;return 3*t*t*i*e}function Af(i,e){return 3*(1-i)*i*i*e}function Rf(i,e){return i*i*i*e}function zs(i,e,t,n,s){return Tf(i,e)+wf(i,t)+Af(i,n)+Rf(i,s)}var js=class extends on{constructor(e=new Ee,t=new Ee,n=new Ee,s=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ee){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zs(e,s.x,r.x,a.x,o.x),zs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ga=class extends on{constructor(e=new G,t=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new G){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zs(e,s.x,r.x,a.x,o.x),zs(e,s.y,r.y,a.y,o.y),zs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qs=class extends on{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends on{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},er=class extends on{constructor(e=new Ee,t=new Ee,n=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ee){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Bs(e,s.x,r.x,a.x),Bs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends on{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Bs(e,s.x,r.x,a.x),Bs(e,s.y,r.y,a.y),Bs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tr=class extends on{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],f=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(qc(o,l.x,c.x,f.x,h.x),qc(o,l.y,c.y,f.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ee().fromArray(s))}return this}},pl=Object.freeze({__proto__:null,ArcCurve:pa,CatmullRomCurve3:ma,CubicBezierCurve:js,CubicBezierCurve3:ga,EllipseCurve:us,LineCurve:Qs,LineCurve3:xa,QuadraticBezierCurve:er,QuadraticBezierCurve3:_a,SplineCurve:tr}),ya=class extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let f=l[c];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new pl[s.type]().fromJSON(s))}return this}},nr=class extends ya{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Qs(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new er(this.currentPoint.clone(),new Ee(e,t),new Ee(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new js(this.currentPoint.clone(),new Ee(e,t),new Ee(n,s),new Ee(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new tr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+c,t+f,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new us(e,t,n,s,r,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ri=class extends nr{constructor(e){super(e),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new nr().fromJSON(s))}return this}};function Cf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Vh(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Nf(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let f=o,h=l;for(let u=t;u<s;u+=t){let d=i[u],x=i[u+1];d<o&&(o=d),x<l&&(l=x),d>f&&(f=d),x>h&&(h=x)}c=Math.max(f-o,h-l),c=c!==0?32767/c:0}return ir(r,a,t,o,l,c,0),a}function Vh(i,e,t,n,s){let r;if(s===Xf(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Yc(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Yc(a/n|0,i[a],i[a+1],r);return r&&fs(r,r.next)&&(rr(r),r=r.next),r}function Ci(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(fs(t,t.next)||At(t.prev,t,t.next)===0)){if(rr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ir(i,e,t,n,s,r,a){if(!i)return;!a&&r&&zf(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?If(i,n,s,r):Pf(i)){e.push(l.i,i.i,c.i),rr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Lf(Ci(i),e),ir(i,e,t,n,s,r,2)):a===2&&Df(i,e,t,n,s,r):ir(Ci(i),e,t,n,s,r,1);break}}}function Pf(i){let e=i.prev,t=i,n=i.next;if(At(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,f=Math.min(s,r,a),h=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),x=n.next;for(;x!==e;){if(x.x>=f&&x.x<=u&&x.y>=h&&x.y<=d&&Os(s,o,r,l,a,c,x.x,x.y)&&At(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function If(i,e,t,n){let s=i.prev,r=i,a=i.next;if(At(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,f=s.y,h=r.y,u=a.y,d=Math.min(o,l,c),x=Math.min(f,h,u),g=Math.max(o,l,c),m=Math.max(f,h,u),p=ml(d,x,e,t,n),T=ml(g,m,e,t,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=T;){if(M.x>=d&&M.x<=g&&M.y>=x&&M.y<=m&&M!==s&&M!==a&&Os(o,f,l,h,c,u,M.x,M.y)&&At(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=g&&v.y>=x&&v.y<=m&&v!==s&&v!==a&&Os(o,f,l,h,c,u,v.x,v.y)&&At(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=g&&M.y>=x&&M.y<=m&&M!==s&&M!==a&&Os(o,f,l,h,c,u,M.x,M.y)&&At(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=T;){if(v.x>=d&&v.x<=g&&v.y>=x&&v.y<=m&&v!==s&&v!==a&&Os(o,f,l,h,c,u,v.x,v.y)&&At(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Lf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!fs(n,s)&&Xh(n,t,t.next,s)&&sr(n,s)&&sr(s,n)&&(e.push(n.i,t.i,s.i),rr(t),rr(t.next),t=i=s),t=t.next}while(t!==i);return Ci(t)}function Df(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Gf(a,o)){let l=qh(a,o);a=Ci(a,a.next),l=Ci(l,l.next),ir(a,e,t,n,s,r,0),ir(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Nf(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Vh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Hf(c))}s.sort(Uf);for(let r=0;r<s.length;r++)t=Ff(s[r],t);return t}function Uf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Ff(i,e){let t=Of(i,e);if(!t)return e;let n=qh(t,i);return Ci(n,n.next),Ci(t,t.next)}function Of(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(fs(i,t))return t;do{if(fs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,f=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Wh(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);sr(t,i)&&(h<f||h===f&&(t.x>a.x||t.x===a.x&&Bf(a,t)))&&(a=t,f=h)}t=t.next}while(t!==o);return a}function Bf(i,e){return At(i.prev,i,e.prev)<0&&At(e.next,i,i.next)<0}function zf(i,e,t,n){let s=i;do s.z===0&&(s.z=ml(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,kf(s)}function kf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function ml(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Hf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Wh(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Os(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Wh(i,e,t,n,s,r,a,o)}function Gf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Vf(i,e)&&(sr(i,e)&&sr(e,i)&&Wf(i,e)&&(At(i.prev,i,e.prev)||At(i,e.prev,e))||fs(i,e)&&At(i.prev,i,i.next)>0&&At(e.prev,e,e.next)>0)}function At(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function fs(i,e){return i.x===e.x&&i.y===e.y}function Xh(i,e,t,n){let s=qr(At(i,e,t)),r=qr(At(i,e,n)),a=qr(At(t,n,i)),o=qr(At(t,n,e));return!!(s!==r&&a!==o||s===0&&Xr(i,t,e)||r===0&&Xr(i,n,e)||a===0&&Xr(t,i,n)||o===0&&Xr(t,e,n))}function Xr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function qr(i){return i>0?1:i<0?-1:0}function Vf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Xh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function sr(i,e){return At(i.prev,i,i.next)<0?At(i,e,i.next)>=0&&At(i,i.prev,e)>=0:At(i,e,i.prev)<0||At(i,i.next,e)<0}function Wf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function qh(i,e){let t=gl(i.i,i.x,i.y),n=gl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Yc(i,e,t,n){let s=gl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function rr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function gl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xf(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var xl=class{static triangulate(e,t,n=2){return Cf(e,t,n)}},Ei=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Zc(e),Jc(n,e);let a=e.length;t.forEach(Zc);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Jc(n,t[l]);let o=xl.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Zc(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Jc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ln=class i extends zt{constructor(e=new Ri([new Ee(.5,.5),new Ee(-.5,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new gt(s,3)),this.setAttribute("uv",new gt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:qf,M,v=!1,R,b,A,_;if(p){M=p.getSpacedPoints(f),v=!0,u=!1;let se=p.isCatmullRomCurve3?p.closed:!1;R=p.computeFrenetFrames(f,se),b=new G,A=new G,_=new G}u||(m=0,d=0,x=0,g=0);let P=o.extractPoints(c),N=P.shape,z=P.holes;if(!Ei.isClockWise(N)){N=N.reverse();for(let se=0,xe=z.length;se<xe;se++){let Me=z[se];Ei.isClockWise(Me)&&(z[se]=Me.reverse())}}function F(se){let Me=10000000000000001e-36,Se=se[0];for(let we=1;we<=se.length;we++){let K=we%se.length,ie=se[K],fe=ie.x-Se.x,be=ie.y-Se.y,H=fe*fe+be*be,st=Math.max(Math.abs(ie.x),Math.abs(ie.y),Math.abs(Se.x),Math.abs(Se.y)),Ke=Me*st*st;if(H<=Ke){se.splice(K,1),we--;continue}Se=ie}}F(N),z.forEach(F);let E=z.length,I=N;for(let se=0;se<E;se++){let xe=z[se];N=N.concat(xe)}function q(se,xe,Me){return xe||Je("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(xe,Me)}let w=N.length;function C(se,xe,Me){let Se,we,K,ie=se.x-xe.x,fe=se.y-xe.y,be=Me.x-se.x,H=Me.y-se.y,st=ie*ie+fe*fe,Ke=ie*H-fe*be;if(Math.abs(Ke)>Number.EPSILON){let D=Math.sqrt(st),y=Math.sqrt(be*be+H*H),j=xe.x-fe/D,X=xe.y+ie/D,ne=Me.x-H/y,ve=Me.y+be/y,Te=((ne-j)*H-(ve-X)*be)/(ie*H-fe*be);Se=j+ie*Te-se.x,we=X+fe*Te-se.y;let le=Se*Se+we*we;if(le<=2)return new Ee(Se,we);K=Math.sqrt(le/2)}else{let D=!1;ie>Number.EPSILON?be>Number.EPSILON&&(D=!0):ie<-Number.EPSILON?be<-Number.EPSILON&&(D=!0):Math.sign(fe)===Math.sign(H)&&(D=!0),D?(Se=-fe,we=ie,K=Math.sqrt(st)):(Se=ie,we=fe,K=Math.sqrt(st/2))}return new Ee(Se/K,we/K)}let L=[];for(let se=0,xe=I.length,Me=xe-1,Se=se+1;se<xe;se++,Me++,Se++)Me===xe&&(Me=0),Se===xe&&(Se=0),L[se]=C(I[se],I[Me],I[Se]);let O=[],B,Q=L.concat();for(let se=0,xe=E;se<xe;se++){let Me=z[se];B=[];for(let Se=0,we=Me.length,K=we-1,ie=Se+1;Se<we;Se++,K++,ie++)K===we&&(K=0),ie===we&&(ie=0),B[Se]=C(Me[Se],Me[K],Me[ie]);O.push(B),Q=Q.concat(B)}let ae;if(m===0)ae=Ei.triangulateShape(I,z);else{let se=[],xe=[];for(let Me=0;Me<m;Me++){let Se=Me/m,we=d*Math.cos(Se*Math.PI/2),K=x*Math.sin(Se*Math.PI/2)+g;for(let ie=0,fe=I.length;ie<fe;ie++){let be=q(I[ie],L[ie],K);oe(be.x,be.y,-we),Se===0&&se.push(be)}for(let ie=0,fe=E;ie<fe;ie++){let be=z[ie];B=O[ie];let H=[];for(let st=0,Ke=be.length;st<Ke;st++){let D=q(be[st],B[st],K);oe(D.x,D.y,-we),Se===0&&H.push(D)}Se===0&&xe.push(H)}}ae=Ei.triangulateShape(se,xe)}let ue=ae.length,ce=x+g;for(let se=0;se<w;se++){let xe=u?q(N[se],Q[se],ce):N[se];v?(A.copy(R.normals[0]).multiplyScalar(xe.x),b.copy(R.binormals[0]).multiplyScalar(xe.y),_.copy(M[0]).add(A).add(b),oe(_.x,_.y,_.z)):oe(xe.x,xe.y,0)}for(let se=1;se<=f;se++)for(let xe=0;xe<w;xe++){let Me=u?q(N[xe],Q[xe],ce):N[xe];v?(A.copy(R.normals[se]).multiplyScalar(Me.x),b.copy(R.binormals[se]).multiplyScalar(Me.y),_.copy(M[se]).add(A).add(b),oe(_.x,_.y,_.z)):oe(Me.x,Me.y,h/f*se)}for(let se=m-1;se>=0;se--){let xe=se/m,Me=d*Math.cos(xe*Math.PI/2),Se=x*Math.sin(xe*Math.PI/2)+g;for(let we=0,K=I.length;we<K;we++){let ie=q(I[we],L[we],Se);oe(ie.x,ie.y,h+Me)}for(let we=0,K=z.length;we<K;we++){let ie=z[we];B=O[we];for(let fe=0,be=ie.length;fe<be;fe++){let H=q(ie[fe],B[fe],Se);v?oe(H.x,H.y+M[f-1].y,M[f-1].x+Me):oe(H.x,H.y,h+Me)}}}V(),k();function V(){let se=s.length/3;if(u){let xe=0,Me=w*xe;for(let Se=0;Se<ue;Se++){let we=ae[Se];me(we[2]+Me,we[1]+Me,we[0]+Me)}xe=f+m*2,Me=w*xe;for(let Se=0;Se<ue;Se++){let we=ae[Se];me(we[0]+Me,we[1]+Me,we[2]+Me)}}else{for(let xe=0;xe<ue;xe++){let Me=ae[xe];me(Me[2],Me[1],Me[0])}for(let xe=0;xe<ue;xe++){let Me=ae[xe];me(Me[0]+w*f,Me[1]+w*f,Me[2]+w*f)}}n.addGroup(se,s.length/3-se,0)}function k(){let se=s.length/3,xe=0;J(I,xe),xe+=I.length;for(let Me=0,Se=z.length;Me<Se;Me++){let we=z[Me];J(we,xe),xe+=we.length}n.addGroup(se,s.length/3-se,1)}function J(se,xe){let Me=se.length;for(;--Me>=0;){let Se=Me,we=Me-1;we<0&&(we=se.length-1);for(let K=0,ie=f+m*2;K<ie;K++){let fe=w*K,be=w*(K+1),H=xe+Se+fe,st=xe+we+fe,Ke=xe+we+be,D=xe+Se+be;ye(H,st,Ke,D)}}}function oe(se,xe,Me){l.push(se),l.push(xe),l.push(Me)}function me(se,xe,Me){Oe(se),Oe(xe),Oe(Me);let Se=s.length/3,we=T.generateTopUV(n,s,Se-3,Se-2,Se-1);et(we[0]),et(we[1]),et(we[2])}function ye(se,xe,Me,Se){Oe(se),Oe(xe),Oe(Se),Oe(xe),Oe(Me),Oe(Se);let we=s.length/3,K=T.generateSideWallUV(n,s,we-6,we-3,we-2,we-1);et(K[0]),et(K[1]),et(K[3]),et(K[1]),et(K[2]),et(K[3])}function Oe(se){s.push(l[se*3+0]),s.push(l[se*3+1]),s.push(l[se*3+2])}function et(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Yf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new pl[s.type]().fromJSON(s)),new i(n,e.options)}},qf={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],f=e[s*3+1];return[new Ee(r,a),new Ee(o,l),new Ee(c,f)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],f=e[n*3+1],h=e[n*3+2],u=e[s*3],d=e[s*3+1],x=e[s*3+2],g=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-f)<Math.abs(a-c)?[new Ee(a,1-l),new Ee(c,1-h),new Ee(u,1-x),new Ee(g,1-p)]:[new Ee(o,1-l),new Ee(f,1-h),new Ee(d,1-x),new Ee(m,1-p)]}};function Yf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ar=class i extends da{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Lt=class i extends zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,f=l+1,h=e/o,u=t/l,d=[],x=[],g=[],m=[];for(let p=0;p<f;p++){let T=p*u-a;for(let M=0;M<c;M++){let v=M*h-r;x.push(v,-T,0),g.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){let M=T+c*p,v=T+c*(p+1),R=T+1+c*(p+1),b=T+1+c*p;d.push(M,v,b),d.push(v,R,b)}this.setIndex(d),this.setAttribute("position",new gt(x,3)),this.setAttribute("normal",new gt(g,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var or=class i extends zt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,f=[],h=new G,u=new G,d=[],x=[],g=[],m=[];for(let p=0;p<=n;p++){let T=[],M=p/n,v=a+M*o,R=e*Math.cos(v),b=Math.sqrt(e*e-R*R),A=0;p===0&&a===0?A=.5/t:p===n&&l===Math.PI&&(A=-.5/t);for(let _=0;_<=t;_++){let P=_/t,N=s+P*r;h.x=-b*Math.cos(N),h.y=R,h.z=b*Math.sin(N),x.push(h.x,h.y,h.z),u.copy(h).normalize(),g.push(u.x,u.y,u.z),m.push(P+A,1-M),T.push(c++)}f.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){let M=f[p][T+1],v=f[p][T],R=f[p+1][T],b=f[p+1][T+1];(p!==0||a>0)&&d.push(M,v,b),(p!==n-1||l<Math.PI)&&d.push(v,R,b)}this.setIndex(d),this.setAttribute("position",new gt(x,3)),this.setAttribute("normal",new gt(g,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var mt=class i extends zt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],f=[],h=[],u=new G,d=new G,x=new G;for(let g=0;g<=n;g++){let m=a+g/n*o;for(let p=0;p<=s;p++){let T=p/s*r;d.x=(e+t*Math.cos(m))*Math.cos(T),d.y=(e+t*Math.cos(m))*Math.sin(T),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),u.x=e*Math.cos(T),u.y=e*Math.sin(T),x.subVectors(d,u).normalize(),f.push(x.x,x.y,x.z),h.push(p/s),h.push(g/n)}}for(let g=1;g<=n;g++)for(let m=1;m<=s;m++){let p=(s+1)*g+m-1,T=(s+1)*(g-1)+m-1,M=(s+1)*(g-1)+m,v=(s+1)*g+m;l.push(p,T,v),l.push(T,M,v)}this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(f,3)),this.setAttribute("uv",new gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Di(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if($c(s))s.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if($c(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Xt(i){let e={};for(let t=0;t<i.length;t++){let n=Di(i[t]);for(let s in n)e[s]=n[s]}return e}function $c(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Zf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var Yh={clone:Di,merge:Xt},Jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jf,this.fragmentShader=$f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=Zf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Qe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new je().fromArray(s.value);break;case"m4":this.uniforms[n].value=new bt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},va=class extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Jt=class extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ma=class extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ba=class extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ji(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ll(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var hi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Sa=class extends hi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ul,endingEnd:ul}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case fl:r=e,o=2*t-n;break;case dl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fl:a=e,l=2*n-t;break;case dl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,f=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,x=(n-t)/(s-t),g=x*x,m=g*x,p=-u*m+2*u*g-u*x,T=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*x+1,M=(-1-d)*m+(1.5+d)*g+.5*x,v=d*m-d*g;for(let R=0;R!==o;++R)r[R]=p*a[f+R]+T*a[c+R]+M*a[l+R]+v*a[h+R];return r}},Ea=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=(n-t)/(s-t),h=1-f;for(let u=0;u!==o;++u)r[u]=a[c+u]*h+a[l+u]*f;return r}},Ta=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},wa=class extends hi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=this.inTangents,h=this.outTangents;if(!f||!h){let x=(n-t)/(s-t),g=1-x;for(let m=0;m!==o;++m)r[m]=a[c+m]*g+a[l+m]*x;return r}let u=o*2,d=e-1;for(let x=0;x!==o;++x){let g=a[c+x],m=a[l+x],p=d*u+x*2,T=h[p],M=h[p+1],v=e*u+x*2,R=f[v],b=f[v+1],A=jf(n,t,T,R,s);r[x]=Zh(A,g,M,b,m)}return r}};function Zh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Kf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function jf(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Zh(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Kf(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var hn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ji(t,this.TimeBufferType),this.values=ji(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ji(e.times,Array),values:ji(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ll(e.settings)&&(n.settings={inTangents:ji(e.settings.inTangents,Array),outTangents:ji(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new wa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ks:t=this.InterpolantFactoryMethodDiscrete;break;case ra:t=this.InterpolantFactoryMethodLinear;break;case Jr:t=this.InterpolantFactoryMethodSmooth;break;case hl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $e("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return ra;case this.InterpolantFactoryMethodSmooth:return Jr;case this.InterpolantFactoryMethodBezier:return hl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ll(this.settings)&&(Kc(this.settings.inTangents,e),Kc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Je("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Je("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&tf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Je("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Jr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],f=e[o+1];if(c!==f&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let x=0;x!==n;++x){let g=t[h+x];if(g!==t[u+x]||g!==t[d+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ll(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Kc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=ra;var ui=class extends hn{constructor(e,t,n){super(e,t,n)}};ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=ks;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Aa=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}};Aa.prototype.ValueTypeName="color";var Ra=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}};Ra.prototype.ValueTypeName="number";var Ca=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let f=c+o;c!==f;c+=4)Nn.slerpFlat(r,0,a,c-o,a,c,l);return r}},lr=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ca(this.times,this.values,this.getValueSize(),e)}};lr.prototype.ValueTypeName="quaternion";lr.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends hn{constructor(e,t,n){super(e,t,n)}};fi.prototype.ValueTypeName="string";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=ks;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}};Pa.prototype.ValueTypeName="vector";var Ia=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){let h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,u=c.length;h<u;h+=2){let d=c[h],x=c[h+1];if(d.global&&(d.lastIndex=0),d.test(f))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jh=new Ia,La=class{constructor(e){this.manager=e!==void 0?e:Jh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};La.DEFAULT_MATERIAL_NAME="__DEFAULT";var ds=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ps=class extends ds{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},cl=new bt,jc=new G,Qc=new G,cr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;jc.setFromMatrixPosition(e.matrixWorld),t.position.copy(jc),Qc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(cl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===is||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Yr=new G,Zr=new Nn,Cn=new G,hr=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yr,Zr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Zr,Cn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Yr,Zr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Zr,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},oi=new G,eh=new Ee,th=new Ee,wt=class extends hr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=aa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return aa*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,eh,th),t.subVectors(th,eh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Oo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var _l=class extends cr{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0}},jn=class extends ds{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _l}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ms=class extends hr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yl=class extends cr{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gs=class extends ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new yl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Qi=-90,es=1,Da=class extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new wt(Qi,es,e,t);s.layers=this.layers,this.add(s);let r=new wt(Qi,es,e,t);r.layers=this.layers,this.add(r);let a=new wt(Qi,es,e,t);a.layers=this.layers,this.add(a);let o=new wt(Qi,es,e,t);o.layers=this.layers,this.add(o);let l=new wt(Qi,es,e,t);l.layers=this.layers,this.add(l);let c=new wt(Qi,es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===is)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(h,u,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Na=class extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Jl="\\[\\]\\.:\\/",Qf=new RegExp("["+Jl+"]","g"),$l="[^"+Jl+"]",ed="[^"+Jl.replace("\\.","")+"]",td=/((?:WC+[\/:])*)/.source.replace("WC",$l),nd=/(WCOD+)?/.source.replace("WCOD",ed),id=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$l),sd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$l),rd=new RegExp("^"+td+nd+id+sd+"$"),ad=["material","materials","bones","map"],vl=class{constructor(e,t,n){let s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qf,"")}static parseTrackName(e){let t=rd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ad.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===c){c=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=vl;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gx=new Float32Array(1);var nh=new bt,xs=class{constructor(e,t,n=0,s=1/0){this.ray=new Js(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new as,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nh),this}intersectObject(e,t=!0,n=[]){return Ml(e,this,n,t),n.sort(ih),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ml(e[s],this,n,t);return n.sort(ih),n}};function ih(i,e){return i.distance-e.distance}function Ml(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ml(r[a],e,t,!0)}}var Fn=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,$e("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var bl=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Kl(i,e,t,n){let s=od(n);switch(t){case Gl:return i*e;case Wl:return i*e/s.components*s.byteLength;case Ha:return i*e/s.components*s.byteLength;case xi:return i*e*2/s.components*s.byteLength;case Ga:return i*e*2/s.components*s.byteLength;case Vl:return i*e*3/s.components*s.byteLength;case pn:return i*e*4/s.components*s.byteLength;case Va:return i*e*4/s.components*s.byteLength;case dr:case pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:case Ya:return Math.max(i,16)*Math.max(e,8)/4;case Wa:case qa:return Math.max(i,8)*Math.max(e,8)/2;case Za:case Ja:case Ka:case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $a:case xr:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case to:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case no:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case io:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case so:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ro:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ao:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case oo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case co:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ho:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case uo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case po:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case mo:case go:case xo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _o:case yo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _r:case vo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function od(i){switch(i){case en:case Bl:return{byteLength:1,components:1};case vs:case zl:case Tn:return{byteLength:2,components:1};case za:case ka:return{byteLength:2,components:4};case Sn:case Ba:case En:return{byteLength:4,components:1};case kl:case Hl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function xu(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function cd(i){let e=new WeakMap;function t(o,l){let c=o.array,f=o.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let f=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,f);else{h.sort((d,x)=>d.start-x.start);let u=0;for(let d=1;d<h.length;d++){let x=h[u],g=h[d];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++u,h[u]=g)}h.length=u+1;for(let d=0,x=h.length;d<x;d++){let g=h[d];i.bufferSubData(c,g.start*f.BYTES_PER_ELEMENT,f,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ud=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_d=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ed=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Id=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ld=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Dd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ud=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,np=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,op=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,up=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ep=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,e0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,s0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,r0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,c0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,h0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,x0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,y0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,C0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,I0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,L0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,U0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,G0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:hd,alphahash_pars_fragment:ud,alphamap_fragment:fd,alphamap_pars_fragment:dd,alphatest_fragment:pd,alphatest_pars_fragment:md,aomap_fragment:gd,aomap_pars_fragment:xd,batching_pars_vertex:_d,batching_vertex:yd,begin_vertex:vd,beginnormal_vertex:Md,bsdfs:bd,iridescence_fragment:Sd,bumpmap_pars_fragment:Ed,clipping_planes_fragment:Td,clipping_planes_pars_fragment:wd,clipping_planes_pars_vertex:Ad,clipping_planes_vertex:Rd,color_fragment:Cd,color_pars_fragment:Pd,color_pars_vertex:Id,color_vertex:Ld,common:Dd,cube_uv_reflection_fragment:Nd,defaultnormal_vertex:Ud,displacementmap_pars_vertex:Fd,displacementmap_vertex:Od,emissivemap_fragment:Bd,emissivemap_pars_fragment:zd,colorspace_fragment:kd,colorspace_pars_fragment:Hd,envmap_fragment:Gd,envmap_common_pars_fragment:Vd,envmap_pars_fragment:Wd,envmap_pars_vertex:Xd,envmap_physical_pars_fragment:np,envmap_vertex:qd,fog_vertex:Yd,fog_pars_vertex:Zd,fog_fragment:Jd,fog_pars_fragment:$d,gradientmap_pars_fragment:Kd,lightmap_pars_fragment:jd,lights_lambert_fragment:Qd,lights_lambert_pars_fragment:ep,lights_pars_begin:tp,lights_toon_fragment:ip,lights_toon_pars_fragment:sp,lights_phong_fragment:rp,lights_phong_pars_fragment:ap,lights_physical_fragment:op,lights_physical_pars_fragment:lp,lights_fragment_begin:cp,lights_fragment_maps:hp,lights_fragment_end:up,lightprobes_pars_fragment:fp,logdepthbuf_fragment:dp,logdepthbuf_pars_fragment:pp,logdepthbuf_pars_vertex:mp,logdepthbuf_vertex:gp,map_fragment:xp,map_pars_fragment:_p,map_particle_fragment:yp,map_particle_pars_fragment:vp,metalnessmap_fragment:Mp,metalnessmap_pars_fragment:bp,morphinstance_vertex:Sp,morphcolor_vertex:Ep,morphnormal_vertex:Tp,morphtarget_pars_vertex:wp,morphtarget_vertex:Ap,normal_fragment_begin:Rp,normal_fragment_maps:Cp,normal_pars_fragment:Pp,normal_pars_vertex:Ip,normal_vertex:Lp,normalmap_pars_fragment:Dp,clearcoat_normal_fragment_begin:Np,clearcoat_normal_fragment_maps:Up,clearcoat_pars_fragment:Fp,iridescence_pars_fragment:Op,opaque_fragment:Bp,packing:zp,premultiplied_alpha_fragment:kp,project_vertex:Hp,dithering_fragment:Gp,dithering_pars_fragment:Vp,roughnessmap_fragment:Wp,roughnessmap_pars_fragment:Xp,shadowmap_pars_fragment:qp,shadowmap_pars_vertex:Yp,shadowmap_vertex:Zp,shadowmask_pars_fragment:Jp,skinbase_vertex:$p,skinning_pars_vertex:Kp,skinning_vertex:jp,skinnormal_vertex:Qp,specularmap_fragment:e0,specularmap_pars_fragment:t0,tonemapping_fragment:n0,tonemapping_pars_fragment:i0,transmission_fragment:s0,transmission_pars_fragment:r0,uv_pars_fragment:a0,uv_pars_vertex:o0,uv_vertex:l0,worldpos_vertex:c0,background_vert:h0,background_frag:u0,backgroundCube_vert:f0,backgroundCube_frag:d0,cube_vert:p0,cube_frag:m0,depth_vert:g0,depth_frag:x0,distance_vert:_0,distance_frag:y0,equirect_vert:v0,equirect_frag:M0,linedashed_vert:b0,linedashed_frag:S0,meshbasic_vert:E0,meshbasic_frag:T0,meshlambert_vert:w0,meshlambert_frag:A0,meshmatcap_vert:R0,meshmatcap_frag:C0,meshnormal_vert:P0,meshnormal_frag:I0,meshphong_vert:L0,meshphong_frag:D0,meshphysical_vert:N0,meshphysical_frag:U0,meshtoon_vert:F0,meshtoon_frag:O0,points_vert:B0,points_frag:z0,shadow_vert:k0,shadow_frag:H0,sprite_vert:G0,sprite_frag:V0},De={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},zn={basic:{uniforms:Xt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Xt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Xt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Xt([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Xt([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Qe(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Xt([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Xt([De.points,De.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Xt([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Xt([De.common,De.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Xt([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Xt([De.sprite,De.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:Xt([De.common,De.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:Xt([De.lights,De.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};zn.physical={uniforms:Xt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var Eo={r:0,b:0,g:0},W0=new bt,_u=new je;_u.set(-1,0,0,0,1,0,0,0,1);function X0(i,e,t,n,s,r){let a=new Qe(0),o=s===!0?0:1,l,c,f=null,h=0,u=null;function d(T){let M=T.isScene===!0?T.background:null;if(M&&M.isTexture){let v=T.backgroundBlurriness>0;M=e.get(M,v)}return M}function x(T){let M=!1,v=d(T);v===null?m(a,o):v&&v.isColor&&(m(v,1),M=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(T,M){let v=d(M);v&&(v.isCubeTexture||v.mapping===ur)?(c===void 0&&(c=new ut(new Un(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Di(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(W0.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_u),c.material.toneMapped=lt.getTransfer(v.colorSpace)!==pt,(f!==v||h!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,u=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ut(new Lt(2,2),new cn({name:"BackgroundMaterial",uniforms:Di(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=lt.getTransfer(v.colorSpace)!==pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,h=v.version,u=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,M){T.getRGB(Eo,Zl(i)),t.buffers.color.setClear(Eo.r,Eo.g,Eo.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,M=1){a.set(T),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:x,addToRenderList:g,dispose:p}}function q0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(z,Z,F,E,I){let q=!1,w=h(z,E,F,Z);r!==w&&(r=w,c(r.object)),q=d(z,E,F,I),q&&x(z,E,F,I),I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(z,Z,F,E),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return i.createVertexArray()}function c(z){return i.bindVertexArray(z)}function f(z){return i.deleteVertexArray(z)}function h(z,Z,F,E){let I=E.wireframe===!0,q=n[Z.id];q===void 0&&(q={},n[Z.id]=q);let w=z.isInstancedMesh===!0?z.id:0,C=q[w];C===void 0&&(C={},q[w]=C);let L=C[F.id];L===void 0&&(L={},C[F.id]=L);let O=L[I];return O===void 0&&(O=u(l()),L[I]=O),O}function u(z){let Z=[],F=[],E=[];for(let I=0;I<t;I++)Z[I]=0,F[I]=0,E[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:F,attributeDivisors:E,object:z,attributes:{},index:null}}function d(z,Z,F,E){let I=r.attributes,q=Z.attributes,w=0,C=F.getAttributes();for(let L in C)if(C[L].location>=0){let B=I[L],Q=q[L];if(Q===void 0&&(L==="instanceMatrix"&&z.instanceMatrix&&(Q=z.instanceMatrix),L==="instanceColor"&&z.instanceColor&&(Q=z.instanceColor)),B===void 0||B.attribute!==Q||Q&&B.data!==Q.data)return!0;w++}return r.attributesNum!==w||r.index!==E}function x(z,Z,F,E){let I={},q=Z.attributes,w=0,C=F.getAttributes();for(let L in C)if(C[L].location>=0){let B=q[L];B===void 0&&(L==="instanceMatrix"&&z.instanceMatrix&&(B=z.instanceMatrix),L==="instanceColor"&&z.instanceColor&&(B=z.instanceColor));let Q={};Q.attribute=B,B&&B.data&&(Q.data=B.data),I[L]=Q,w++}r.attributes=I,r.attributesNum=w,r.index=E}function g(){let z=r.newAttributes;for(let Z=0,F=z.length;Z<F;Z++)z[Z]=0}function m(z){p(z,0)}function p(z,Z){let F=r.newAttributes,E=r.enabledAttributes,I=r.attributeDivisors;F[z]=1,E[z]===0&&(i.enableVertexAttribArray(z),E[z]=1),I[z]!==Z&&(i.vertexAttribDivisor(z,Z),I[z]=Z)}function T(){let z=r.newAttributes,Z=r.enabledAttributes;for(let F=0,E=Z.length;F<E;F++)Z[F]!==z[F]&&(i.disableVertexAttribArray(F),Z[F]=0)}function M(z,Z,F,E,I,q,w){w===!0?i.vertexAttribIPointer(z,Z,F,I,q):i.vertexAttribPointer(z,Z,F,E,I,q)}function v(z,Z,F,E){g();let I=E.attributes,q=F.getAttributes(),w=Z.defaultAttributeValues;for(let C in q){let L=q[C];if(L.location>=0){let O=I[C];if(O===void 0&&(C==="instanceMatrix"&&z.instanceMatrix&&(O=z.instanceMatrix),C==="instanceColor"&&z.instanceColor&&(O=z.instanceColor)),O!==void 0){let B=O.normalized,Q=O.itemSize,ae=e.get(O);if(ae===void 0)continue;let ue=ae.buffer,ce=ae.type,V=ae.bytesPerElement,k=ce===i.INT||ce===i.UNSIGNED_INT||O.gpuType===Ba;if(O.isInterleavedBufferAttribute){let J=O.data,oe=J.stride,me=O.offset;if(J.isInstancedInterleavedBuffer){for(let ye=0;ye<L.locationSize;ye++)p(L.location+ye,J.meshPerAttribute);z.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ye=0;ye<L.locationSize;ye++)m(L.location+ye);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let ye=0;ye<L.locationSize;ye++)M(L.location+ye,Q/L.locationSize,ce,B,oe*V,(me+Q/L.locationSize*ye)*V,k)}else{if(O.isInstancedBufferAttribute){for(let J=0;J<L.locationSize;J++)p(L.location+J,O.meshPerAttribute);z.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let J=0;J<L.locationSize;J++)m(L.location+J);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let J=0;J<L.locationSize;J++)M(L.location+J,Q/L.locationSize,ce,B,Q*V,Q/L.locationSize*J*V,k)}}else if(w!==void 0){let B=w[C];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(L.location,B);break;case 3:i.vertexAttrib3fv(L.location,B);break;case 4:i.vertexAttrib4fv(L.location,B);break;default:i.vertexAttrib1fv(L.location,B)}}}}T()}function R(){P();for(let z in n){let Z=n[z];for(let F in Z){let E=Z[F];for(let I in E){let q=E[I];for(let w in q)f(q[w].object),delete q[w];delete E[I]}}delete n[z]}}function b(z){if(n[z.id]===void 0)return;let Z=n[z.id];for(let F in Z){let E=Z[F];for(let I in E){let q=E[I];for(let w in q)f(q[w].object),delete q[w];delete E[I]}}delete n[z.id]}function A(z){for(let Z in n){let F=n[Z];for(let E in F){let I=F[E];if(I[z.id]===void 0)continue;let q=I[z.id];for(let w in q)f(q[w].object),delete q[w];delete I[z.id]}}}function _(z){for(let Z in n){let F=n[Z],E=z.isInstancedMesh===!0?z.id:0,I=F[E];if(I!==void 0){for(let q in I){let w=I[q];for(let C in w)f(w[C].object),delete w[C];delete I[q]}delete F[E],Object.keys(F).length===0&&delete n[Z]}}}function P(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:N,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:T}}function Y0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),t.update(c,n,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Z0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==pn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==en&&A!==En&&!_&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",f=l(c);f!==c&&($e("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:v,maxSamples:R,samples:b}}function J0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new $t,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||s;return s=u,n=h.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=f(h,u,0)},this.setState=function(h,u,d){let x=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||x===null||x.length===0||r&&!m)r?f(null):c();else{let T=r?0:n,M=T*4,v=p.clippingState||null;l.value=v,v=f(x,u,M,d);for(let R=0;R!==M;++R)v[R]=t[R];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(h,u,d,x){let g=h!==null?h.length:0,m=null;if(g!==0){if(m=l.value,x!==!0||m===null){let p=d+g*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=d;M!==g;++M,v+=4)a.copy(h[M]).applyMatrix4(T,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}var Ss=4,$0=6,K0=20,j0=256,yr=new ms,$h=new Qe,jl=null,Ql=0,ec=0,tc=!1,Q0=new G,Ni=new G,wo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Q0}=r;jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jl,Ql,ec),this._renderer.xr.enabled=tc,e.scissorTest=!1,bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Tn,format:pn,colorSpace:Hs,depthBuffer:!1},s=Kh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=em(r)),this._blurMaterial=nm(r,e,t),this._ggxMaterial=tm(r,e,t)}return s}_compileMaterial(e){let t=new ut(new zt,e);this._renderer.compile(t,yr)}_sceneToCubeUV(e,t,n,s,r){let l=new wt(90,1,t,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor($h),h.toneMapping=bn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ut(new Un,new ot({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,p=!1,T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,p=!0):(m.color.copy($h),p=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[M],r.y,r.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[M]));let R=this._cubeSize;bs(s,v*R,M>2?R:0,R,R),h.setRenderTarget(s),p&&h.render(g,l),h.render(e,l)}h.toneMapping=d,h.autoClear=u,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===pi||e.mapping===Li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;bs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,yr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=c*1.25,d=h*u,{_lodMax:x}=this,g=this._sizeLods[n],m=3*g*(n>x-Ss?n-x+Ss:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=x-t,bs(r,m,p,3*g,2*g),s.setRenderTarget(r),s.render(o,yr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,bs(e,m,p,3*g,2*g),s.setRenderTarget(e),s.render(o,yr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let f=this._sizeLods[s],h=3*f*(s>this._lodMax-Ss?s-this._lodMax+Ss:0),u=4*(this._cubeSize-f);bs(t,h,u,3*f,2*f),a.setRenderTarget(t),a.render(l,yr)}};function em(i){let e=[],t=[],n=i,s=i-Ss+1+$0;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,d=3,x=new Float32Array(d*u*h),g=new Float32Array(d*u*h);for(let p=0;p<h;p++){let T=p%3*2/3-1,M=p>2?0:-1,v=[T,M,0,T+2/3,M,0,T+2/3,M+1,0,T,M,0,T+2/3,M+1,0,T,M+1,0];x.set(v,d*u*p);for(let R=0;R<u;R++){let b=f[R*2]*2-1,A=f[R*2+1]*2-1;p===0?Ni.set(1,A,b):p===1?Ni.set(-b,1,-A):p===2?Ni.set(-b,A,1):p===3?Ni.set(-1,A,-b):p===4?Ni.set(-b,-1,A):Ni.set(b,A,-1),Ni.toArray(g,(p*u+R)*d)}}let m=new zt;m.setAttribute("position",new rn(x,d)),m.setAttribute("outputDirection",new rn(g,d)),t.push(new ut(m,null)),n>Ss&&n--}return{lodMeshes:t,sizeLods:e}}function Kh(i,e,t){let n=new Kt(i,e,t);return n.texture.mapping=ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function tm(i,e,t){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:j0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ro(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function nm(i,e,t){return new cn({name:"SphericalGaussianBlur",defines:{SAMPLES:K0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ro(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function jh(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Qh(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ro(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ao=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new $s(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Un(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:On});r.uniforms.tEquirect.value=t;let a=new ut(s,r),o=t.minFilter;return t.minFilter===mi&&(t.minFilter=Ot),new Da(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function im(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Ua||d===Fa)if(e.has(u)){let x=e.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let g=new Ao(x.height);return g.fromEquirectangularTexture(i,u),e.set(u,g),u.addEventListener("dispose",c),o(g.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,x=d===Ua||d===Fa,g=d===pi||d===Li;if(x||g){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new wo(i)),m=x?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let T=u.image;return x&&T&&T.height>0||g&&T&&l(T)?(n===null&&(n=new wo(i)),m=x?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function o(u,d){return d===Ua?u.mapping=pi:d===Fa&&(u.mapping=Li),u}function l(u){let d=0,x=6;for(let g=0;g<x;g++)u[g]!==void 0&&d++;return d===x}function c(u){let d=u.target;d.removeEventListener("dispose",c);let x=e.get(d);x!==void 0&&(e.delete(d),x.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let x=t.get(d);x!==void 0&&(t.delete(d),x.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function sm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ti("WebGLRenderer: "+n+" extension not supported."),s}}}function rm(i,e,t,n){let s={},r=new WeakMap;function a(h){let u=h.target;u.index!==null&&e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(h){let u=h.attributes;for(let d in u)e.update(u[d],i.ARRAY_BUFFER)}function c(h){let u=[],d=h.index,x=h.attributes.position,g=0;if(x===void 0)return;if(d!==null){let T=d.array;g=d.version;for(let M=0,v=T.length;M<v;M+=3){let R=T[M+0],b=T[M+1],A=T[M+2];u.push(R,b,b,A,A,R)}}else{let T=x.array;g=x.version;for(let M=0,v=T.length/3-1;M<v;M+=3){let R=M+0,b=M+1,A=M+2;u.push(R,b,b,A,A,R)}}let m=new(x.count>=65535?Ys:qs)(u,1);m.version=g;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function f(h){let u=r.get(h);if(u){let d=h.index;d!==null&&u.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function am(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,u){i.drawElements(n,u,r,h*a),t.update(u,n,1)}function c(h,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,h*a,d),t.update(u,n,d))}function f(h,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,h,0,d);let g=0;for(let m=0;m<d;m++)g+=u[m];t.update(g,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function om(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function lm(i,e,t){let n=new WeakMap,s=new Tt;function r(a,o,l){let c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0,u=n.get(o);if(u===void 0||u.count!==h){let P=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],M=0;d===!0&&(M=1),x===!0&&(M=2),g===!0&&(M=3);let v=o.attributes.position.count*M,R=1;v>e.maxTextureSize&&(R=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let b=new Float32Array(v*R*4*h),A=new Xs(b,v,R,h);A.type=En,A.needsUpdate=!0;let _=M*4;for(let N=0;N<h;N++){let z=m[N],Z=p[N],F=T[N],E=v*R*4*N;for(let I=0;I<z.count;I++){let q=I*_;d===!0&&(s.fromBufferAttribute(z,I),b[E+q+0]=s.x,b[E+q+1]=s.y,b[E+q+2]=s.z,b[E+q+3]=0),x===!0&&(s.fromBufferAttribute(Z,I),b[E+q+4]=s.x,b[E+q+5]=s.y,b[E+q+6]=s.z,b[E+q+7]=0),g===!0&&(s.fromBufferAttribute(F,I),b[E+q+8]=s.x,b[E+q+9]=s.y,b[E+q+10]=s.z,b[E+q+11]=F.itemSize===4?s.w:1)}}u={count:h,texture:A,size:new Ee(v,R)},n.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let x=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function cm(i,e,t,n,s){let r=new WeakMap;function a(c){let f=s.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==f&&(e.update(u),r.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==f&&(d.update(),r.set(d,f))}return u}function o(){r=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}var hm={[Pl]:"LINEAR_TONE_MAPPING",[Il]:"REINHARD_TONE_MAPPING",[Ll]:"CINEON_TONE_MAPPING",[Dl]:"ACES_FILMIC_TONE_MAPPING",[Ul]:"AGX_TONE_MAPPING",[Fl]:"NEUTRAL_TONE_MAPPING",[Nl]:"CUSTOM_TONE_MAPPING"};function um(i,e,t,n,s,r){let a=new Kt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new zt;c.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new gt([0,2,0,0,2,0],2));let f=new va({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new ut(c,f),u=new ms(-1,1,1,-1,0,1),d=null,x=null,g=!1,m,p=null,T=[],M=!1;this.setSize=function(v,R){a.setSize(v,R),o!==null&&o.setSize(v,R),l!==null&&l.setSize(v,R);for(let b=0;b<T.length;b++){let A=T[b];A.setSize&&A.setSize(v,R)}},this.setEffects=function(v){T=v,M=T.length>0&&T[0].isRenderPass===!0;let R=a.width,b=a.height;T.length>0&&o===null&&(o=new Kt(R,b,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),l=new Kt(R,b,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<T.length;A++){let _=T[A];_.setSize&&_.setSize(R,b)}},this.begin=function(v,R){if(g||v.toneMapping===bn&&T.length===0)return!1;if(p=R,R!==null){let b=R.width,A=R.height;(a.width!==b||a.height!==A)&&this.setSize(b,A)}return M===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=bn,!0},this.hasRenderPass=function(){return M},this.end=function(v,R){v.toneMapping=m,g=!0;let b=a,A=o;for(let _=0;_<T.length;_++){let P=T[_];P.enabled!==!1&&(P.render(v,A,b,R),P.needsSwap!==!1&&(b=A,A=A===o?l:o))}if(d!==v.outputColorSpace||x!==v.toneMapping){d=v.outputColorSpace,x=v.toneMapping,f.defines={},lt.getTransfer(d)===pt&&(f.defines.SRGB_TRANSFER="");let _=hm[x];_&&(f.defines[_]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(p),v.render(h,u),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var yu=new Zt,sc=new ci(1,1),vu=new Xs,Mu=new ca,bu=new $s,eu=[],tu=[],nu=new Float32Array(16),iu=new Float32Array(9),su=new Float32Array(4);function Ts(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=eu[s];if(r===void 0&&(r=new Float32Array(s),eu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Co(i,e){let t=tu[e];t===void 0&&(t=new Int32Array(e),tu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function fm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function dm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function pm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function mm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function gm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;su.set(n),i.uniformMatrix2fv(this.addr,!1,su),Nt(t,n)}}function xm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;iu.set(n),i.uniformMatrix3fv(this.addr,!1,iu),Nt(t,n)}}function _m(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;nu.set(n),i.uniformMatrix4fv(this.addr,!1,nu),Nt(t,n)}}function ym(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function Mm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function bm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function Sm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Em(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function Tm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function Am(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sc.compareFunction=t.isReversedDepthBuffer()?So:bo,r=sc):r=yu,t.setTexture2D(e||r,s)}function Rm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Mu,s)}function Cm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||bu,s)}function Pm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vu,s)}function Im(i){switch(i){case 5126:return fm;case 35664:return dm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return xm;case 35676:return _m;case 5124:case 35670:return ym;case 35667:case 35671:return vm;case 35668:case 35672:return Mm;case 35669:case 35673:return bm;case 5125:return Sm;case 36294:return Em;case 36295:return Tm;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Pm}}function Lm(i,e){i.uniform1fv(this.addr,e)}function Dm(i,e){let t=Ts(e,this.size,2);i.uniform2fv(this.addr,t)}function Nm(i,e){let t=Ts(e,this.size,3);i.uniform3fv(this.addr,t)}function Um(i,e){let t=Ts(e,this.size,4);i.uniform4fv(this.addr,t)}function Fm(i,e){let t=Ts(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Om(i,e){let t=Ts(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Bm(i,e){let t=Ts(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function zm(i,e){i.uniform1iv(this.addr,e)}function km(i,e){i.uniform2iv(this.addr,e)}function Hm(i,e){i.uniform3iv(this.addr,e)}function Gm(i,e){i.uniform4iv(this.addr,e)}function Vm(i,e){i.uniform1uiv(this.addr,e)}function Wm(i,e){i.uniform2uiv(this.addr,e)}function Xm(i,e){i.uniform3uiv(this.addr,e)}function qm(i,e){i.uniform4uiv(this.addr,e)}function Ym(i,e,t){let n=this.cache,s=e.length,r=Co(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=sc:a=yu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Zm(i,e,t){let n=this.cache,s=e.length,r=Co(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Mu,r[a])}function Jm(i,e,t){let n=this.cache,s=e.length,r=Co(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||bu,r[a])}function $m(i,e,t){let n=this.cache,s=e.length,r=Co(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||vu,r[a])}function Km(i){switch(i){case 5126:return Lm;case 35664:return Dm;case 35665:return Nm;case 35666:return Um;case 35674:return Fm;case 35675:return Om;case 35676:return Bm;case 5124:case 35670:return zm;case 35667:case 35671:return km;case 35668:case 35672:return Hm;case 35669:case 35673:return Gm;case 5125:return Vm;case 36294:return Wm;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return $m}}var rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Im(t.type)}},ac=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Km(t.type)}},oc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},nc=/(\w+)(\])?(\[|\.)?/g;function ru(i,e){i.seq.push(e),i.map[e.id]=e}function jm(i,e,t){let n=i.name,s=n.length;for(nc.lastIndex=0;;){let r=nc.exec(n),a=nc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ru(t,c===void 0?new rc(o,i,e):new ac(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new oc(o),ru(t,h)),t=h}}}var Es=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);jm(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function au(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Qm=37297,eg=0;function tg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var ou=new je;function ng(i){lt._getMatrix(ou,lt.workingColorSpace,i);let e=`mat3( ${ou.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case Gs:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+tg(i.getShaderSource(e),o)}else return r}function ig(i,e){let t=ng(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var sg={[Pl]:"Linear",[Il]:"Reinhard",[Ll]:"Cineon",[Dl]:"ACESFilmic",[Ul]:"AgX",[Fl]:"Neutral",[Nl]:"Custom"};function rg(i,e){let t=sg[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var To=new G;function ag(){lt.getLuminanceCoefficients(To);let i=To.x.toFixed(4),e=To.y.toFixed(4),t=To.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function og(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function lg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Mr(i){return i!==""}function cu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(i){return i.replace(hg,fg)}var ug=new Map;function fg(i,e){let t=it[e];if(t===void 0){let n=ug.get(e);if(n!==void 0)t=it[n],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return lc(t)}var dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uu(i){return i.replace(dg,pg)}function pg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var mg={[Pi]:"SHADOWMAP_TYPE_PCF",[_s]:"SHADOWMAP_TYPE_VSM"};function gg(i){return mg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xg={[pi]:"ENVMAP_TYPE_CUBE",[Li]:"ENVMAP_TYPE_CUBE",[ur]:"ENVMAP_TYPE_CUBE_UV"};function _g(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":xg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var yg={[Li]:"ENVMAP_MODE_REFRACTION"};function vg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":yg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Mg={[Cl]:"ENVMAP_BLENDING_MULTIPLY",[Th]:"ENVMAP_BLENDING_MIX",[wh]:"ENVMAP_BLENDING_ADD"};function bg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Mg[i.combine]||"ENVMAP_BLENDING_NONE"}function Sg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Eg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=gg(t),c=_g(t),f=vg(t),h=bg(t),u=Sg(t),d=og(t),x=lg(r),g=s.createProgram(),m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Mr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Mr).join(`
`),p.length>0&&(p+=`
`)):(m=[fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),p=[fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?it.tonemapping_pars_fragment:"",t.toneMapping!==bn?rg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,ig("linearToOutputTexel",t.outputColorSpace),ag(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mr).join(`
`)),a=lc(a),a=cu(a,t),a=hu(a,t),o=lc(o),o=cu(o,t),o=hu(o,t),a=uu(a),o=uu(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=T+m+a,v=T+p+o,R=au(s,s.VERTEX_SHADER,M),b=au(s,s.FRAGMENT_SHADER,v);s.attachShader(g,R),s.attachShader(g,b),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(z){if(i.debug.checkShaderErrors){let Z=s.getProgramInfoLog(g)||"",F=s.getShaderInfoLog(R)||"",E=s.getShaderInfoLog(b)||"",I=Z.trim(),q=F.trim(),w=E.trim(),C=!0,L=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(C=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,R,b);else{let O=lu(s,R,"vertex"),B=lu(s,b,"fragment");Je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+I+`
`+O+`
`+B)}else I!==""?$e("WebGLProgram: Program Info Log:",I):(q===""||w==="")&&(L=!1);L&&(z.diagnostics={runnable:C,programLog:I,vertexShader:{log:q,prefix:m},fragmentShader:{log:w,prefix:p}})}s.deleteShader(R),s.deleteShader(b),_=new Es(s,g),P=cg(s,g)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let P;this.getAttributes=function(){return P===void 0&&A(this),P};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,Qm)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=b,this}var Tg=0,cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new hc(e),t.set(e,n)),n}},hc=class{constructor(e){this.id=Tg++,this.code=e,this.usedTimes=0}};function wg(i){return i===xi||i===xr||i===_r}function Ag(i,e,t,n,s,r){let a=new as,o=new cc,l=new Set,c=[],f=new Map,h=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,P,N,z,Z,F){let E=z.fog,I=Z.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?z.environment:null,w=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,C=e.get(_.envMap||q,w),L=C&&C.mapping===ur?C.image.height:null,O=d[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&$e("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let B=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Q=B!==void 0?B.length:0,ae=0;I.morphAttributes.position!==void 0&&(ae=1),I.morphAttributes.normal!==void 0&&(ae=2),I.morphAttributes.color!==void 0&&(ae=3);let ue,ce,V,k;if(O){let vt=zn[O];ue=vt.vertexShader,ce=vt.fragmentShader}else{ue=_.vertexShader,ce=_.fragmentShader;let vt=o.getVertexShaderStage(_),ft=o.getFragmentShaderStage(_);o.update(_,vt,ft),V=vt.id,k=ft.id}let J=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),me=Z.isInstancedMesh===!0,ye=Z.isBatchedMesh===!0,Oe=!!_.map,et=!!_.matcap,se=!!C,xe=!!_.aoMap,Me=!!_.lightMap,Se=!!_.bumpMap&&_.wireframe===!1,we=!!_.normalMap,K=!!_.displacementMap,ie=!!_.emissiveMap,fe=!!_.metalnessMap,be=!!_.roughnessMap,H=_.anisotropy>0,st=_.clearcoat>0,Ke=_.dispersion>0,D=_.retroreflectivity>0,y=_.iridescence>0,j=_.sheen>0,X=_.transmission>0,ne=H&&!!_.anisotropyMap,ve=st&&!!_.clearcoatMap,Te=st&&!!_.clearcoatNormalMap,le=st&&!!_.clearcoatRoughnessMap,de=y&&!!_.iridescenceMap,Ae=y&&!!_.iridescenceThicknessMap,Ge=j&&!!_.sheenColorMap,Le=j&&!!_.sheenRoughnessMap,Ce=!!_.specularMap,Xe=!!_.specularColorMap,Ze=!!_.specularIntensityMap,tt=X&&!!_.transmissionMap,$=X&&!!_.thicknessMap,Pe=!!_.gradientMap,pe=!!_.alphaMap,Ie=_.alphaTest>0,Fe=!!_.alphaHash,_e=!!_.extensions,qe=bn;_.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(qe=i.toneMapping);let Ve={shaderID:O,shaderType:_.type,shaderName:_.name,vertexShader:ue,fragmentShader:ce,defines:_.defines,customVertexShaderID:V,customFragmentShaderID:k,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:ye,batchingColor:ye&&Z._colorsTexture!==null,instancing:me,instancingColor:me&&Z.instanceColor!==null,instancingMorph:me&&Z.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Oe,matcap:et,envMap:se,envMapMode:se&&C.mapping,envMapCubeUVHeight:L,aoMap:xe,lightMap:Me,bumpMap:Se,normalMap:we,displacementMap:K,emissiveMap:ie,normalMapObjectSpace:we&&_.normalMapType===Ch,normalMapTangentSpace:we&&_.normalMapType===Mo,packedNormalMap:we&&_.normalMapType===Mo&&wg(_.normalMap.format),metalnessMap:fe,roughnessMap:be,anisotropy:H,anisotropyMap:ne,clearcoat:st,clearcoatMap:ve,clearcoatNormalMap:Te,clearcoatRoughnessMap:le,dispersion:Ke,retroreflection:D,iridescence:y,iridescenceMap:de,iridescenceThicknessMap:Ae,sheen:j,sheenColorMap:Ge,sheenRoughnessMap:Le,specularMap:Ce,specularColorMap:Xe,specularIntensityMap:Ze,transmission:X,transmissionMap:tt,thicknessMap:$,gradientMap:Pe,opaque:_.transparent===!1&&_.blending===ys&&_.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ie,alphaHash:Fe,combine:_.combine,mapUv:Oe&&x(_.map.channel),aoMapUv:xe&&x(_.aoMap.channel),lightMapUv:Me&&x(_.lightMap.channel),bumpMapUv:Se&&x(_.bumpMap.channel),normalMapUv:we&&x(_.normalMap.channel),displacementMapUv:K&&x(_.displacementMap.channel),emissiveMapUv:ie&&x(_.emissiveMap.channel),metalnessMapUv:fe&&x(_.metalnessMap.channel),roughnessMapUv:be&&x(_.roughnessMap.channel),anisotropyMapUv:ne&&x(_.anisotropyMap.channel),clearcoatMapUv:ve&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:Te&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Le&&x(_.sheenRoughnessMap.channel),specularMapUv:Ce&&x(_.specularMap.channel),specularColorMapUv:Xe&&x(_.specularColorMap.channel),specularIntensityMapUv:Ze&&x(_.specularIntensityMap.channel),transmissionMapUv:tt&&x(_.transmissionMap.channel),thicknessMapUv:$&&x(_.thicknessMap.channel),alphaMapUv:pe&&x(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(we||H),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!I.attributes.uv&&(Oe||pe),fog:!!E,useFog:_.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&we===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:oe,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ae,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,decodeVideoTexture:Oe&&_.map.isVideoTexture===!0&&lt.getTransfer(_.map.colorSpace)===pt,decodeVideoTextureEmissive:ie&&_.emissiveMap.isVideoTexture===!0&&lt.getTransfer(_.emissiveMap.colorSpace)===pt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Qt,flipSided:_.side===kt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:_e&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&_.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function m(_){let P=[];if(_.shaderID?P.push(_.shaderID):(P.push(_.customVertexShaderID),P.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)P.push(N),P.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(p(P,_),T(P,_),P.push(i.outputColorSpace)),P.push(_.customProgramCacheKey),P.join()}function p(_,P){_.push(P.precision),_.push(P.outputColorSpace),_.push(P.envMapMode),_.push(P.envMapCubeUVHeight),_.push(P.mapUv),_.push(P.alphaMapUv),_.push(P.lightMapUv),_.push(P.aoMapUv),_.push(P.bumpMapUv),_.push(P.normalMapUv),_.push(P.displacementMapUv),_.push(P.emissiveMapUv),_.push(P.metalnessMapUv),_.push(P.roughnessMapUv),_.push(P.anisotropyMapUv),_.push(P.clearcoatMapUv),_.push(P.clearcoatNormalMapUv),_.push(P.clearcoatRoughnessMapUv),_.push(P.iridescenceMapUv),_.push(P.iridescenceThicknessMapUv),_.push(P.sheenColorMapUv),_.push(P.sheenRoughnessMapUv),_.push(P.specularMapUv),_.push(P.specularColorMapUv),_.push(P.specularIntensityMapUv),_.push(P.transmissionMapUv),_.push(P.thicknessMapUv),_.push(P.combine),_.push(P.fogExp2),_.push(P.sizeAttenuation),_.push(P.morphTargetsCount),_.push(P.morphAttributeCount),_.push(P.numSunLights),_.push(P.numDirLights),_.push(P.numPointLights),_.push(P.numSpotLights),_.push(P.numSpotLightMaps),_.push(P.numHemiLights),_.push(P.numRectAreaLights),_.push(P.numSunLightShadows),_.push(P.numDirLightShadows),_.push(P.numPointLightShadows),_.push(P.numSpotLightShadows),_.push(P.numSpotLightShadowsWithMaps),_.push(P.numLightProbes),_.push(P.shadowMapType),_.push(P.toneMapping),_.push(P.numClippingPlanes),_.push(P.numClipIntersection),_.push(P.depthPacking)}function T(_,P){a.disableAll(),P.instancing&&a.enable(0),P.instancingColor&&a.enable(1),P.instancingMorph&&a.enable(2),P.matcap&&a.enable(3),P.envMap&&a.enable(4),P.normalMapObjectSpace&&a.enable(5),P.normalMapTangentSpace&&a.enable(6),P.clearcoat&&a.enable(7),P.iridescence&&a.enable(8),P.alphaTest&&a.enable(9),P.vertexColors&&a.enable(10),P.vertexAlphas&&a.enable(11),P.vertexUv1s&&a.enable(12),P.vertexUv2s&&a.enable(13),P.vertexUv3s&&a.enable(14),P.vertexTangents&&a.enable(15),P.anisotropy&&a.enable(16),P.alphaHash&&a.enable(17),P.batching&&a.enable(18),P.dispersion&&a.enable(19),P.retroreflection&&a.enable(24),P.batchingColor&&a.enable(20),P.gradientMap&&a.enable(21),P.packedNormalMap&&a.enable(22),P.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.reversedDepthBuffer&&a.enable(4),P.skinning&&a.enable(5),P.morphTargets&&a.enable(6),P.morphNormals&&a.enable(7),P.morphColors&&a.enable(8),P.premultipliedAlpha&&a.enable(9),P.shadowMapEnabled&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),P.decodeVideoTextureEmissive&&a.enable(20),P.alphaToCoverage&&a.enable(21),P.numLightProbeGrids>0&&a.enable(22),P.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let P=d[_.type],N;if(P){let z=zn[P];N=Yh.clone(z.uniforms)}else N=_.uniforms;return N}function v(_,P){let N=f.get(P);return N!==void 0?++N.usedTimes:(N=new Eg(i,P,_,s),c.push(N),f.set(P,N)),N}function R(_){if(--_.usedTimes===0){let P=c.indexOf(_);c[P]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:M,acquireProgram:v,releaseProgram:R,releaseShaderCache:b,programs:c,dispose:A}}function Rg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Cg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function du(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,x,g,m,p){let T=i[e];return T===void 0?(T={id:u.id,object:u,geometry:d,material:x,materialVariant:a(u),groupOrder:g,renderOrder:u.renderOrder,z:m,group:p},i[e]=T):(T.id=u.id,T.object=u,T.geometry=d,T.material=x,T.materialVariant=a(u),T.groupOrder=g,T.renderOrder=u.renderOrder,T.z=m,T.group=p),e++,T}function l(u,d,x,g,m,p,T){T.reversedDepth===!0&&(m=-m);let M=o(u,d,x,g,m,p);x.transmission>0?n.push(M):x.transparent===!0?s.push(M):t.push(M)}function c(u,d,x,g,m,p){let T=o(u,d,x,g,m,p);x.transmission>0?n.unshift(T):x.transparent===!0?s.unshift(T):t.unshift(T)}function f(u,d){t.length>1&&t.sort(u||Cg),n.length>1&&n.sort(d||du),s.length>1&&s.sort(d||du)}function h(){for(let u=e,d=i.length;u<d;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:f}}function Pg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new pu,i.set(n,[a])):s>=r.length?(a=new pu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ig(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new Qe};break;case"SpotLight":t={position:new G,direction:new G,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function Lg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Dg=0;function Ng(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ug(i){let e=new Ig,t=Lg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let s=new G,r=new bt,a=new bt;function o(c){let f=0,h=0,u=0;for(let Z=0;Z<9;Z++)n.probe[Z].set(0,0,0);let d=0,x=0,g=0,m=0,p=0,T=0,M=0,v=0,R=0,b=0,A=0,_=0,P=0,N=0;c.sort(Ng);for(let Z=0,F=c.length;Z<F;Z++){let E=c[Z],I=E.color,q=E.intensity,w=E.distance,C=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===xi?C=E.shadow.map.texture:C=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)f+=I.r*q,h+=I.g*q,u+=I.b*q;else if(E.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(E.sh.coefficients[L],q);N++}else if(E.isSunLight){let L=e.get(E);if(L.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let O=E.shadow,B=t.get(E);B.shadowIntensity=O.intensity,B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),n.sunShadow[x]=B,n.sunShadowMap[x]=C;let Q=O.getViewportCount();for(let ae=0;ae<Q;ae++)n.sunShadowMatrix[g+ae]=O.getMatrix(ae),n.sunShadowCascade[g+ae]=O._cascadeData[ae];g+=Q,x++}n.sun[d]=L,d++}else if(E.isDirectionalLight){let L=e.get(E);if(L.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let O=E.shadow,B=t.get(E);B.shadowIntensity=O.intensity,B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,n.directionalShadow[m]=B,n.directionalShadowMap[m]=C,n.directionalShadowMatrix[m]=E.shadow.matrix,R++}n.directional[m]=L,m++}else if(E.isSpotLight){let L=e.get(E);L.position.setFromMatrixPosition(E.matrixWorld),L.color.copy(I).multiplyScalar(q),L.distance=w,L.coneCos=Math.cos(E.angle),L.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),L.decay=E.decay,n.spot[T]=L;let O=E.shadow;if(E.map&&(n.spotLightMap[_]=E.map,_++,O.updateMatrices(E),E.castShadow&&P++),n.spotLightMatrix[T]=O.matrix,E.castShadow){let B=t.get(E);B.shadowIntensity=O.intensity,B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,n.spotShadow[T]=B,n.spotShadowMap[T]=C,A++}T++}else if(E.isRectAreaLight){let L=e.get(E);L.color.copy(I).multiplyScalar(q),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),n.rectArea[M]=L,M++}else if(E.isPointLight){let L=e.get(E);if(L.color.copy(E.color).multiplyScalar(E.intensity),L.distance=E.distance,L.decay=E.decay,E.castShadow){let O=E.shadow,B=t.get(E);B.shadowIntensity=O.intensity,B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,B.shadowCameraNear=O.camera.near,B.shadowCameraFar=O.camera.far,n.pointShadow[p]=B,n.pointShadowMap[p]=C,n.pointShadowMatrix[p]=E.shadow.matrix,b++}n.point[p]=L,p++}else if(E.isHemisphereLight){let L=e.get(E);L.skyColor.copy(E.color).multiplyScalar(q),L.groundColor.copy(E.groundColor).multiplyScalar(q),n.hemi[v]=L,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=u;let z=n.hash;(z.sunLength!==d||z.directionalLength!==m||z.pointLength!==p||z.spotLength!==T||z.rectAreaLength!==M||z.hemiLength!==v||z.numSunShadows!==x||z.numDirectionalShadows!==R||z.numPointShadows!==b||z.numSpotShadows!==A||z.numSpotMaps!==_||z.numLightProbes!==N)&&(n.sun.length=d,n.directional.length=m,n.spot.length=T,n.rectArea.length=M,n.point.length=p,n.hemi.length=v,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-P,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=N,z.sunLength=d,z.directionalLength=m,z.pointLength=p,z.spotLength=T,z.rectAreaLength=M,z.hemiLength=v,z.numSunShadows=x,z.numDirectionalShadows=R,z.numPointShadows=b,z.numSpotShadows=A,z.numSpotMaps=_,z.numLightProbes=N,n.version=Dg++)}function l(c,f){let h=0,u=0,d=0,x=0,g=0,m=0,p=f.matrixWorldInverse;for(let T=0,M=c.length;T<M;T++){let v=c[T];if(v.isSunLight){let R=n.sun[h];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(p),h++}else if(v.isDirectionalLight){let R=n.directional[u];R.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),u++}else if(v.isSpotLight){let R=n.spot[x];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),x++}else if(v.isRectAreaLight){let R=n.rectArea[g];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),R.halfWidth.set(v.width*.5,0,0),R.halfHeight.set(0,v.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let R=n.point[d];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let R=n.hemi[m];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function mu(i){let e=new Ug(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function f(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Fg(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new mu(i),e.set(s,[o])):r>=a.length?(o=new mu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zg=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],kg=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],gu=new bt,vr=new G,ic=new G;function Hg(i,e,t){let n=new cs,s=new Ee,r=new Ee,a=new Tt,o=new Ma,l=new ba,c={},f=t.maxTextureSize,h={[di]:kt,[kt]:di,[Qt]:Qt},u=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Og,fragmentShader:Bg}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let x=new zt;x.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new ut(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pi;let p=this.type;this.render=function(b,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===ah&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Pi);let P=i.getRenderTarget(),N=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(On),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let F=p!==this.type;F&&A.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(I=>I.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,I=b.length;E<I;E++){let q=b[E],w=q.shadow;if(w===void 0){$e("WebGLShadowMap:",q,"has no shadow.");continue}if(w.autoUpdate===!1&&w.needsUpdate===!1)continue;s.copy(w.mapSize);let C=w.getFrameExtents();s.multiply(C),r.copy(w.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/C.x),s.x=r.x*C.x,w.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/C.y),s.y=r.y*C.y,w.mapSize.y=r.y));let L=i.state.buffers.depth.getReversed();if(w.camera._reversedDepth=L,w.map===null||F===!0){if(w.map!==null&&(w.map.depthTexture!==null&&(w.map.depthTexture.dispose(),w.map.depthTexture=null),w.map.dispose()),this.type===_s){if(q.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}w.map=new Kt(s.x,s.y,{format:xi,type:Tn,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),w.map.texture.name=q.name+".shadowMap",w.map.depthTexture=new ci(s.x,s.y,En),w.map.depthTexture.name=q.name+".shadowMapDepth",w.map.depthTexture.format=Ln,w.map.depthTexture.compareFunction=null,w.map.depthTexture.minFilter=Ft,w.map.depthTexture.magFilter=Ft}else q.isPointLight?(w.map=new Ao(s.x),w.map.depthTexture=new fa(s.x,Sn)):(w.map=new Kt(s.x,s.y),w.map.depthTexture=new ci(s.x,s.y,Sn)),w.map.depthTexture.name=q.name+".shadowMap",w.map.depthTexture.format=Ln,this.type===Pi?(w.map.depthTexture.compareFunction=L?So:bo,w.map.depthTexture.minFilter=Ot,w.map.depthTexture.magFilter=Ot):(w.map.depthTexture.compareFunction=null,w.map.depthTexture.minFilter=Ft,w.map.depthTexture.magFilter=Ft);w.camera.updateProjectionMatrix()}w.map.isWebGLCubeRenderTarget!==!0&&(w.map.width!==s.x||w.map.height!==s.y)&&w.map.setSize(s.x,s.y);let O=w.map.isWebGLCubeRenderTarget?6:w.getViewportCount();q.isPointLight!==!0&&w.updateMatrices(q,_);for(let B=0;B<O;B++){let Q=w.getCamera(B);if(q.isPointLight){let ae=w.camera,ue=w.matrix,ce=q.distance||ae.far;ce!==ae.far&&(ae.far=ce,ae.updateProjectionMatrix()),vr.setFromMatrixPosition(q.matrixWorld),ae.position.copy(vr),ic.copy(ae.position),ic.add(zg[B]),ae.up.copy(kg[B]),ae.lookAt(ic),ae.updateMatrixWorld(),ue.makeTranslation(-vr.x,-vr.y,-vr.z),gu.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),w._frustum.setFromProjectionMatrix(gu,ae.coordinateSystem,ae.reversedDepth)}if(w.map.isWebGLCubeRenderTarget)i.setRenderTarget(w.map,B),i.clear();else{B===0&&(i.setRenderTarget(w.map),i.clear());let ae=w.getViewport(B);a.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),Z.viewport(a)}n=w.getFrustum(B),v(A,_,Q,q,this.type)}w.isPointLightShadow!==!0&&this.type===_s&&T(w,_),w.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(P,N,z)};function T(b,A){let _=e.update(g);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Kt(s.x,s.y,{format:xi,type:Tn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,_,u,g,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,_,d,g,null)}function M(b,A,_,P){let N=null,z=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(z!==void 0)N=z;else if(N=_.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let Z=N.uuid,F=A.uuid,E=c[Z];E===void 0&&(E={},c[Z]=E);let I=E[F];I===void 0&&(I=N.clone(),E[F]=I,A.addEventListener("dispose",R)),N=I}if(N.visible=A.visible,N.wireframe=A.wireframe,P===_s?N.side=A.shadowSide!==null?A.shadowSide:A.side:N.side=A.shadowSide!==null?A.shadowSide:h[A.side],N.alphaMap=A.alphaMap,N.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,N.map=A.map,N.clipShadows=A.clipShadows,N.clippingPlanes=A.clippingPlanes,N.clipIntersection=A.clipIntersection,N.displacementMap=A.displacementMap,N.displacementScale=A.displacementScale,N.displacementBias=A.displacementBias,N.wireframeLinewidth=A.wireframeLinewidth,N.linewidth=A.linewidth,_.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let Z=i.properties.get(N);Z.light=_}return N}function v(b,A,_,P,N){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&N===_s)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let F=e.update(b),E=b.material;if(Array.isArray(E)){let I=F.groups;for(let q=0,w=I.length;q<w;q++){let C=I[q],L=E[C.materialIndex];if(L&&L.visible){let O=M(b,L,P,N);b.onBeforeShadow(i,b,A,_,F,O,C),i.renderBufferDirect(_,null,F,O,b,C),b.onAfterShadow(i,b,A,_,F,O,C)}}}else if(E.visible){let I=M(b,E,P,N);b.onBeforeShadow(i,b,A,_,F,I,null),i.renderBufferDirect(_,null,F,I,b,null),b.onAfterShadow(i,b,A,_,F,I,null)}}let Z=b.children;for(let F=0,E=Z.length;F<E;F++)v(Z[F],A,_,P,N)}function R(b){b.target.removeEventListener("dispose",R);for(let _ in c){let P=c[_],N=b.target.uuid;N in P&&(P[N].dispose(),delete P[N])}}}function Gg(i,e){function t(){let $=!1,Pe=new Tt,pe=null,Ie=new Tt(0,0,0,0);return{setMask:function(Fe){pe!==Fe&&!$&&(i.colorMask(Fe,Fe,Fe,Fe),pe=Fe)},setLocked:function(Fe){$=Fe},setClear:function(Fe,_e,qe,Ve,vt){vt===!0&&(Fe*=Ve,_e*=Ve,qe*=Ve),Pe.set(Fe,_e,qe,Ve),Ie.equals(Pe)===!1&&(i.clearColor(Fe,_e,qe,Ve),Ie.copy(Pe))},reset:function(){$=!1,pe=null,Ie.set(-1,0,0,0)}}}function n(){let $=!1,Pe=!1,pe=null,Ie=null,Fe=null;return{setReversed:function(_e){if(Pe!==_e){let qe=e.get("EXT_clip_control");_e?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Pe=_e;let Ve=Fe;Fe=null,this.setClear(Ve)}},getReversed:function(){return Pe},setTest:function(_e){_e?J(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(_e){pe!==_e&&!$&&(i.depthMask(_e),pe=_e)},setFunc:function(_e){if(Pe&&(_e=kh[_e]),Ie!==_e){switch(_e){case Kr:i.depthFunc(i.NEVER);break;case jr:i.depthFunc(i.ALWAYS);break;case Qr:i.depthFunc(i.LESS);break;case ns:i.depthFunc(i.LEQUAL);break;case ea:i.depthFunc(i.EQUAL);break;case ta:i.depthFunc(i.GEQUAL);break;case na:i.depthFunc(i.GREATER);break;case ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=_e}},setLocked:function(_e){$=_e},setClear:function(_e){Fe!==_e&&(Fe=_e,Pe&&(_e=1-_e),i.clearDepth(_e))},reset:function(){$=!1,pe=null,Ie=null,Fe=null,Pe=!1}}}function s(){let $=!1,Pe=null,pe=null,Ie=null,Fe=null,_e=null,qe=null,Ve=null,vt=null;return{setTest:function(ft){$||(ft?J(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(ft){Pe!==ft&&!$&&(i.stencilMask(ft),Pe=ft)},setFunc:function(ft,gn,An){(pe!==ft||Ie!==gn||Fe!==An)&&(i.stencilFunc(ft,gn,An),pe=ft,Ie=gn,Fe=An)},setOp:function(ft,gn,An){(_e!==ft||qe!==gn||Ve!==An)&&(i.stencilOp(ft,gn,An),_e=ft,qe=gn,Ve=An)},setLocked:function(ft){$=ft},setClear:function(ft){vt!==ft&&(i.clearStencil(ft),vt=ft)},reset:function(){$=!1,Pe=null,pe=null,Ie=null,Fe=null,_e=null,qe=null,Ve=null,vt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,f={},h={},u={},d=new WeakMap,x=[],g=null,m=!1,p=null,T=null,M=null,v=null,R=null,b=null,A=null,_=new Qe(0,0,0),P=0,N=!1,z=null,Z=null,F=null,E=null,I=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),w=!1,C=0,L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(C=parseFloat(/^WebGL (\d)/.exec(L)[1]),w=C>=1):L.indexOf("OpenGL ES")!==-1&&(C=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),w=C>=2);let O=null,B={},Q=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),ue=new Tt().fromArray(Q),ce=new Tt().fromArray(ae);function V($,Pe,pe,Ie){let Fe=new Uint8Array(4),_e=i.createTexture();i.bindTexture($,_e),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<pe;qe++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(Pe,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,Fe):i.texImage2D(Pe+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Fe);return _e}let k={};k[i.TEXTURE_2D]=V(i.TEXTURE_2D,i.TEXTURE_2D,1),k[i.TEXTURE_CUBE_MAP]=V(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[i.TEXTURE_2D_ARRAY]=V(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),k[i.TEXTURE_3D]=V(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(ns),Se(!1),we(Sl),J(i.CULL_FACE),xe(On);function J($){f[$]!==!0&&(i.enable($),f[$]=!0)}function oe($){f[$]!==!1&&(i.disable($),f[$]=!1)}function me($,Pe){return u[$]!==Pe?(i.bindFramebuffer($,Pe),u[$]=Pe,$===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Pe),$===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Pe),!0):!1}function ye($,Pe){let pe=x,Ie=!1;if($){pe=d.get(Pe),pe===void 0&&(pe=[],d.set(Pe,pe));let Fe=$.textures;if(pe.length!==Fe.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,qe=Fe.length;_e<qe;_e++)pe[_e]=i.COLOR_ATTACHMENT0+_e;pe.length=Fe.length,Ie=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(pe)}function Oe($){return g!==$?(i.useProgram($),g=$,!0):!1}let et={[Ii]:i.FUNC_ADD,[lh]:i.FUNC_SUBTRACT,[ch]:i.FUNC_REVERSE_SUBTRACT};et[hh]=i.MIN,et[uh]=i.MAX;let se={[fh]:i.ZERO,[dh]:i.ONE,[ph]:i.SRC_COLOR,[Al]:i.SRC_ALPHA,[vh]:i.SRC_ALPHA_SATURATE,[_h]:i.DST_COLOR,[gh]:i.DST_ALPHA,[mh]:i.ONE_MINUS_SRC_COLOR,[Rl]:i.ONE_MINUS_SRC_ALPHA,[yh]:i.ONE_MINUS_DST_COLOR,[xh]:i.ONE_MINUS_DST_ALPHA,[Mh]:i.CONSTANT_COLOR,[bh]:i.ONE_MINUS_CONSTANT_COLOR,[Sh]:i.CONSTANT_ALPHA,[Eh]:i.ONE_MINUS_CONSTANT_ALPHA};function xe($,Pe,pe,Ie,Fe,_e,qe,Ve,vt,ft){if($===On){m===!0&&(oe(i.BLEND),m=!1);return}if(m===!1&&(J(i.BLEND),m=!0),$!==oh){if($!==p||ft!==N){if((T!==Ii||R!==Ii)&&(i.blendEquation(i.FUNC_ADD),T=Ii,R=Ii),ft)switch($){case ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case El:i.blendFunc(i.ONE,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Je("WebGLState: Invalid blending: ",$);break}else switch($){case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case El:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tl:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wl:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",$);break}M=null,v=null,b=null,A=null,_.set(0,0,0),P=0,p=$,N=ft}return}Fe=Fe||Pe,_e=_e||pe,qe=qe||Ie,(Pe!==T||Fe!==R)&&(i.blendEquationSeparate(et[Pe],et[Fe]),T=Pe,R=Fe),(pe!==M||Ie!==v||_e!==b||qe!==A)&&(i.blendFuncSeparate(se[pe],se[Ie],se[_e],se[qe]),M=pe,v=Ie,b=_e,A=qe),(Ve.equals(_)===!1||vt!==P)&&(i.blendColor(Ve.r,Ve.g,Ve.b,vt),_.copy(Ve),P=vt),p=$,N=!1}function Me($,Pe){$.side===Qt?oe(i.CULL_FACE):J(i.CULL_FACE);let pe=$.side===kt;Pe&&(pe=!pe),Se(pe),$.blending===ys&&$.transparent===!1?xe(On):xe($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),a.setFunc($.depthFunc),a.setTest($.depthTest),a.setMask($.depthWrite),r.setMask($.colorWrite);let Ie=$.stencilWrite;o.setTest(Ie),Ie&&(o.setMask($.stencilWriteMask),o.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),o.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),ie($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se($){z!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),z=$)}function we($){$!==sh?(J(i.CULL_FACE),$!==Z&&($===Sl?i.cullFace(i.BACK):$===rh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),Z=$}function K($){$!==F&&(w&&i.lineWidth($),F=$)}function ie($,Pe,pe){$?(J(i.POLYGON_OFFSET_FILL),(E!==Pe||I!==pe)&&(E=Pe,I=pe,a.getReversed()&&(Pe=-Pe),i.polygonOffset(Pe,pe))):oe(i.POLYGON_OFFSET_FILL)}function fe($){$?J(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function be($){$===void 0&&($=i.TEXTURE0+q-1),O!==$&&(i.activeTexture($),O=$)}function H($,Pe,pe){pe===void 0&&(O===null?pe=i.TEXTURE0+q-1:pe=O);let Ie=B[pe];Ie===void 0&&(Ie={type:void 0,texture:void 0},B[pe]=Ie),(Ie.type!==$||Ie.texture!==Pe)&&(O!==pe&&(i.activeTexture(pe),O=pe),i.bindTexture($,Pe||k[$]),Ie.type=$,Ie.texture=Pe)}function st(){let $=B[O];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function Ke(){try{i.compressedTexImage2D(...arguments)}catch($){Je("WebGLState:",$)}}function D(){try{i.compressedTexImage3D(...arguments)}catch($){Je("WebGLState:",$)}}function y(){try{i.texSubImage2D(...arguments)}catch($){Je("WebGLState:",$)}}function j(){try{i.texSubImage3D(...arguments)}catch($){Je("WebGLState:",$)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch($){Je("WebGLState:",$)}}function ne(){try{i.compressedTexSubImage3D(...arguments)}catch($){Je("WebGLState:",$)}}function ve(){try{i.texStorage2D(...arguments)}catch($){Je("WebGLState:",$)}}function Te(){try{i.texStorage3D(...arguments)}catch($){Je("WebGLState:",$)}}function le(){try{i.texImage2D(...arguments)}catch($){Je("WebGLState:",$)}}function de(){try{i.texImage3D(...arguments)}catch($){Je("WebGLState:",$)}}function Ae($){return h[$]!==void 0?h[$]:i.getParameter($)}function Ge($,Pe){h[$]!==Pe&&(i.pixelStorei($,Pe),h[$]=Pe)}function Le($){ue.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),ue.copy($))}function Ce($){ce.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),ce.copy($))}function Xe($,Pe){let pe=c.get(Pe);pe===void 0&&(pe=new WeakMap,c.set(Pe,pe));let Ie=pe.get($);Ie===void 0&&(Ie=i.getUniformBlockIndex(Pe,$.name),pe.set($,Ie))}function Ze($,Pe){let Ie=c.get(Pe).get($);l.get(Pe)!==Ie&&(i.uniformBlockBinding(Pe,Ie,$.__bindingPointIndex),l.set(Pe,Ie))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},h={},O=null,B={},u={},d=new WeakMap,x=[],g=null,m=!1,p=null,T=null,M=null,v=null,R=null,b=null,A=null,_=new Qe(0,0,0),P=0,N=!1,z=null,Z=null,F=null,E=null,I=null,ue.set(0,0,i.canvas.width,i.canvas.height),ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:oe,bindFramebuffer:me,drawBuffers:ye,useProgram:Oe,setBlending:xe,setMaterial:Me,setFlipSided:Se,setCullFace:we,setLineWidth:K,setPolygonOffset:ie,setScissorTest:fe,activeTexture:be,bindTexture:H,unbindTexture:st,compressedTexImage2D:Ke,compressedTexImage3D:D,texImage2D:le,texImage3D:de,pixelStorei:Ge,getParameter:Ae,updateUBOMapping:Xe,uniformBlockBinding:Ze,texStorage2D:ve,texStorage3D:Te,texSubImage2D:y,texSubImage3D:j,compressedTexSubImage2D:X,compressedTexSubImage3D:ne,scissor:Le,viewport:Ce,reset:tt}}function Vg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,f=new WeakMap,h=new Set,u,d=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,y){return x?new OffscreenCanvas(D,y):Vs("canvas")}function m(D,y,j){let X=1,ne=Ke(D);if((ne.width>j||ne.height>j)&&(X=j/Math.max(ne.width,ne.height)),X<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let ve=Math.floor(X*ne.width),Te=Math.floor(X*ne.height);u===void 0&&(u=g(ve,Te));let le=y?g(ve,Te):u;return le.width=ve,le.height=Te,le.getContext("2d").drawImage(D,0,0,ve,Te),$e("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ve+"x"+Te+")."),le}else return"data"in D&&$e("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),D;return D}function p(D){return D.generateMipmaps}function T(D){i.generateMipmap(D)}function M(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(D,y,j,X,ne,ve=!1){if(D!==null){if(i[D]!==void 0)return i[D];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Te;X&&(Te=e.get("EXT_texture_norm16"),Te||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let le=y;if(y===i.RED&&(j===i.FLOAT&&(le=i.R32F),j===i.HALF_FLOAT&&(le=i.R16F),j===i.UNSIGNED_BYTE&&(le=i.R8),j===i.UNSIGNED_SHORT&&Te&&(le=Te.R16_EXT),j===i.SHORT&&Te&&(le=Te.R16_SNORM_EXT)),y===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(le=i.R8UI),j===i.UNSIGNED_SHORT&&(le=i.R16UI),j===i.UNSIGNED_INT&&(le=i.R32UI),j===i.BYTE&&(le=i.R8I),j===i.SHORT&&(le=i.R16I),j===i.INT&&(le=i.R32I)),y===i.RG&&(j===i.FLOAT&&(le=i.RG32F),j===i.HALF_FLOAT&&(le=i.RG16F),j===i.UNSIGNED_BYTE&&(le=i.RG8),j===i.UNSIGNED_SHORT&&Te&&(le=Te.RG16_EXT),j===i.SHORT&&Te&&(le=Te.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(le=i.RG8UI),j===i.UNSIGNED_SHORT&&(le=i.RG16UI),j===i.UNSIGNED_INT&&(le=i.RG32UI),j===i.BYTE&&(le=i.RG8I),j===i.SHORT&&(le=i.RG16I),j===i.INT&&(le=i.RG32I)),y===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(le=i.RGB8UI),j===i.UNSIGNED_SHORT&&(le=i.RGB16UI),j===i.UNSIGNED_INT&&(le=i.RGB32UI),j===i.BYTE&&(le=i.RGB8I),j===i.SHORT&&(le=i.RGB16I),j===i.INT&&(le=i.RGB32I)),y===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),j===i.UNSIGNED_INT&&(le=i.RGBA32UI),j===i.BYTE&&(le=i.RGBA8I),j===i.SHORT&&(le=i.RGBA16I),j===i.INT&&(le=i.RGBA32I)),y===i.RGB&&(j===i.UNSIGNED_SHORT&&Te&&(le=Te.RGB16_EXT),j===i.SHORT&&Te&&(le=Te.RGB16_SNORM_EXT),j===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(le=i.R11F_G11F_B10F)),y===i.RGBA){let de=ve?Gs:lt.getTransfer(ne);j===i.FLOAT&&(le=i.RGBA32F),j===i.HALF_FLOAT&&(le=i.RGBA16F),j===i.UNSIGNED_BYTE&&(le=de===pt?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT&&Te&&(le=Te.RGBA16_EXT),j===i.SHORT&&Te&&(le=Te.RGBA16_SNORM_EXT),j===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function R(D,y){let j;return D?y===null||y===Sn||y===Ms?j=i.DEPTH24_STENCIL8:y===En?j=i.DEPTH32F_STENCIL8:y===vs&&(j=i.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Sn||y===Ms?j=i.DEPTH_COMPONENT24:y===En?j=i.DEPTH_COMPONENT32F:y===vs&&(j=i.DEPTH_COMPONENT16),j}function b(D,y){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ft&&D.minFilter!==Ot?Math.log2(Math.max(y.width,y.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?y.mipmaps.length:1}function A(D){let y=D.target;y.removeEventListener("dispose",A),P(y),y.isVideoTexture&&f.delete(y),y.isHTMLTexture&&h.delete(y)}function _(D){let y=D.target;y.removeEventListener("dispose",_),z(y)}function P(D){let y=n.get(D);if(y.__webglInit===void 0)return;let j=D.source,X=d.get(j);if(X){let ne=X[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&N(D),Object.keys(X).length===0&&d.delete(j)}n.remove(D)}function N(D){let y=n.get(D);i.deleteTexture(y.__webglTexture);let j=D.source,X=d.get(j);delete X[y.__cacheKey],a.memory.textures--}function z(D){let y=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let ne=0;ne<y.__webglFramebuffer[X].length;ne++)i.deleteFramebuffer(y.__webglFramebuffer[X][ne]);else i.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)i.deleteFramebuffer(y.__webglFramebuffer[X]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let j=D.textures;for(let X=0,ne=j.length;X<ne;X++){let ve=n.get(j[X]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(j[X])}n.remove(D)}let Z=0;function F(){Z=0}function E(){return Z}function I(D){Z=D}function q(){let D=Z;return D>=s.maxTextures&&$e("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,D}function w(D){let y=[];return y.push(D.wrapS),y.push(D.wrapT),y.push(D.wrapR||0),y.push(D.magFilter),y.push(D.minFilter),y.push(D.anisotropy),y.push(D.internalFormat),y.push(D.format),y.push(D.type),y.push(D.generateMipmaps),y.push(D.premultiplyAlpha),y.push(D.flipY),y.push(D.unpackAlignment),y.push(D.colorSpace),y.join()}function C(D,y){let j=n.get(D);if(D.isVideoTexture&&H(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&j.__version!==D.version){let X=D.image;if(X===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(j,D,y);return}}else D.isExternalTexture&&(j.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+y)}function L(D,y){let j=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){oe(j,D,y);return}else D.isExternalTexture&&(j.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+y)}function O(D,y){let j=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){oe(j,D,y);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+y)}function B(D,y){let j=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&j.__version!==D.version){me(j,D,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+y)}let Q={[an]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[sa]:i.MIRRORED_REPEAT},ae={[Ft]:i.NEAREST,[Ah]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[Ot]:i.LINEAR,[Oa]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},ue={[Ih]:i.NEVER,[Fh]:i.ALWAYS,[Lh]:i.LESS,[bo]:i.LEQUAL,[Dh]:i.EQUAL,[So]:i.GEQUAL,[Nh]:i.GREATER,[Uh]:i.NOTEQUAL};function ce(D,y){if(y.type===En&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ot||y.magFilter===Oa||y.magFilter===fr||y.magFilter===mi||y.minFilter===Ot||y.minFilter===Oa||y.minFilter===fr||y.minFilter===mi)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,Q[y.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Q[y.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Q[y.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,ae[y.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,ae[y.minFilter]),y.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,ue[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ft||y.minFilter!==fr&&y.minFilter!==mi||y.type===En&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function V(D,y){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,y.addEventListener("dispose",A));let X=y.source,ne=d.get(X);ne===void 0&&(ne={},d.set(X,ne));let ve=w(y);if(ve!==D.__cacheKey){ne[ve]===void 0&&(ne[ve]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ne[ve].usedTimes++;let Te=ne[D.__cacheKey];Te!==void 0&&(ne[D.__cacheKey].usedTimes--,Te.usedTimes===0&&N(y)),D.__cacheKey=ve,D.__webglTexture=ne[ve].texture}return j}function k(D,y,j){return Math.floor(Math.floor(D/j)/y)}function J(D,y,j,X){let ve=D.updateRanges;if(ve.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,j,X,y.data);else{ve.sort((Ge,Le)=>Ge.start-Le.start);let Te=0;for(let Ge=1;Ge<ve.length;Ge++){let Le=ve[Te],Ce=ve[Ge],Xe=Le.start+Le.count,Ze=k(Ce.start,y.width,4),tt=k(Le.start,y.width,4);Ce.start<=Xe+1&&Ze===tt&&k(Ce.start+Ce.count-1,y.width,4)===Ze?Le.count=Math.max(Le.count,Ce.start+Ce.count-Le.start):(++Te,ve[Te]=Ce)}ve.length=Te+1;let le=t.getParameter(i.UNPACK_ROW_LENGTH),de=t.getParameter(i.UNPACK_SKIP_PIXELS),Ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Ge=0,Le=ve.length;Ge<Le;Ge++){let Ce=ve[Ge],Xe=Math.floor(Ce.start/4),Ze=Math.ceil(Ce.count/4),tt=Xe%y.width,$=Math.floor(Xe/y.width),Pe=Ze,pe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),t.pixelStorei(i.UNPACK_SKIP_ROWS,$),t.texSubImage2D(i.TEXTURE_2D,0,tt,$,Pe,pe,j,X,y.data)}D.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,le),t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function oe(D,y,j){let X=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=i.TEXTURE_3D);let ne=V(D,y),ve=y.source;t.bindTexture(X,D.__webglTexture,i.TEXTURE0+j);let Te=n.get(ve);if(ve.version!==Te.__version||ne===!0){if(t.activeTexture(i.TEXTURE0+j),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let pe=lt.getPrimaries(lt.workingColorSpace),Ie=y.colorSpace===Qn?null:lt.getPrimaries(y.colorSpace),Fe=y.colorSpace===Qn||pe===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let de=m(y.image,!1,s.maxTextureSize);de=st(y,de);let Ae=r.convert(y.format,y.colorSpace),Ge=r.convert(y.type),Le=v(y.internalFormat,Ae,Ge,y.normalized,y.colorSpace,y.isVideoTexture);ce(X,y);let Ce,Xe=y.mipmaps,Ze=y.isVideoTexture!==!0,tt=Te.__version===void 0||ne===!0,$=ve.dataReady,Pe=b(y,de);if(y.isDepthTexture)Le=R(y.format===gi,y.type),tt&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,Le,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Le,de.width,de.height,0,Ae,Ge,null));else if(y.isDataTexture)if(Xe.length>0){Ze&&tt&&t.texStorage2D(i.TEXTURE_2D,Pe,Le,Xe[0].width,Xe[0].height);for(let pe=0,Ie=Xe.length;pe<Ie;pe++)Ce=Xe[pe],Ze?$&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,Ce.width,Ce.height,Ae,Ge,Ce.data):t.texImage2D(i.TEXTURE_2D,pe,Le,Ce.width,Ce.height,0,Ae,Ge,Ce.data);y.generateMipmaps=!1}else Ze?(tt&&t.texStorage2D(i.TEXTURE_2D,Pe,Le,de.width,de.height),$&&J(y,de,Ae,Ge)):t.texImage2D(i.TEXTURE_2D,0,Le,de.width,de.height,0,Ae,Ge,de.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ze&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Le,Xe[0].width,Xe[0].height,de.depth);for(let pe=0,Ie=Xe.length;pe<Ie;pe++)if(Ce=Xe[pe],y.format!==pn)if(Ae!==null)if(Ze){if($)if(y.layerUpdates.size>0){let Fe=Kl(Ce.width,Ce.height,y.format,y.type);for(let _e of y.layerUpdates){let qe=Ce.data.subarray(_e*Fe/Ce.data.BYTES_PER_ELEMENT,(_e+1)*Fe/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,_e,Ce.width,Ce.height,1,Ae,qe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,Ce.width,Ce.height,de.depth,Ae,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,Le,Ce.width,Ce.height,de.depth,0,Ce.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?$&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,Ce.width,Ce.height,de.depth,Ae,Ge,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,Le,Ce.width,Ce.height,de.depth,0,Ae,Ge,Ce.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ze&&tt&&t.texStorage2D(i.TEXTURE_2D,Pe,Le,Xe[0].width,Xe[0].height);for(let pe=0,Ie=Xe.length;pe<Ie;pe++)Ce=Xe[pe],y.format!==pn?Ae!==null?Ze?$&&t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,Ce.width,Ce.height,Ae,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,Le,Ce.width,Ce.height,0,Ce.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?$&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,Ce.width,Ce.height,Ae,Ge,Ce.data):t.texImage2D(i.TEXTURE_2D,pe,Le,Ce.width,Ce.height,0,Ae,Ge,Ce.data)}else if(y.isDataArrayTexture)if(Ze){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Le,de.width,de.height,de.depth),$)if(y.layerUpdates.size>0){let pe=Kl(de.width,de.height,y.format,y.type);for(let Ie of y.layerUpdates){let Fe=de.data.subarray(Ie*pe/de.data.BYTES_PER_ELEMENT,(Ie+1)*pe/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ie,de.width,de.height,1,Ae,Ge,Fe)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ae,Ge,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,de.width,de.height,de.depth,0,Ae,Ge,de.data);else if(y.isData3DTexture)Ze?(tt&&t.texStorage3D(i.TEXTURE_3D,Pe,Le,de.width,de.height,de.depth),$&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ae,Ge,de.data)):t.texImage3D(i.TEXTURE_3D,0,Le,de.width,de.height,de.depth,0,Ae,Ge,de.data);else if(y.isFramebufferTexture){if(tt)if(Ze)t.texStorage2D(i.TEXTURE_2D,Pe,Le,de.width,de.height);else{let pe=de.width,Ie=de.height;for(let Fe=0;Fe<Pe;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,Le,pe,Ie,0,Ae,Ge,null),pe>>=1,Ie>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let pe=i.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),de.parentNode!==pe){pe.appendChild(de),h.add(y),pe.onpaint=Ie=>{let Fe=Ie.changedElements;for(let _e of h)Fe.includes(_e.image)&&(_e.needsUpdate=!0)},pe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,de);else{let Fe=i.RGBA,_e=i.RGBA,qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Fe,_e,qe,de)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(Ze&&tt){let pe=Ke(Xe[0]);t.texStorage2D(i.TEXTURE_2D,Pe,Le,pe.width,pe.height)}for(let pe=0,Ie=Xe.length;pe<Ie;pe++)Ce=Xe[pe],Ze?$&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,Ae,Ge,Ce):t.texImage2D(i.TEXTURE_2D,pe,Le,Ae,Ge,Ce);y.generateMipmaps=!1}else if(Ze){if(tt){let pe=Ke(de);t.texStorage2D(i.TEXTURE_2D,Pe,Le,pe.width,pe.height)}$&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,Ge,de)}else t.texImage2D(i.TEXTURE_2D,0,Le,Ae,Ge,de);p(y)&&T(X),Te.__version=ve.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function me(D,y,j){if(y.image.length!==6)return;let X=V(D,y),ne=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+j);let ve=n.get(ne);if(ne.version!==ve.__version||X===!0){t.activeTexture(i.TEXTURE0+j);let Te=lt.getPrimaries(lt.workingColorSpace),le=y.colorSpace===Qn?null:lt.getPrimaries(y.colorSpace),de=y.colorSpace===Qn||Te===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Ae=y.isCompressedTexture||y.image[0].isCompressedTexture,Ge=y.image[0]&&y.image[0].isDataTexture,Le=[];for(let _e=0;_e<6;_e++)!Ae&&!Ge?Le[_e]=m(y.image[_e],!0,s.maxCubemapSize):Le[_e]=Ge?y.image[_e].image:y.image[_e],Le[_e]=st(y,Le[_e]);let Ce=Le[0],Xe=r.convert(y.format,y.colorSpace),Ze=r.convert(y.type),tt=v(y.internalFormat,Xe,Ze,y.normalized,y.colorSpace),$=y.isVideoTexture!==!0,Pe=ve.__version===void 0||X===!0,pe=ne.dataReady,Ie=b(y,Ce);ce(i.TEXTURE_CUBE_MAP,y);let Fe;if(Ae){$&&Pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,tt,Ce.width,Ce.height);for(let _e=0;_e<6;_e++){Fe=Le[_e].mipmaps;for(let qe=0;qe<Fe.length;qe++){let Ve=Fe[qe];y.format!==pn?Xe!==null?$?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe,0,0,Ve.width,Ve.height,Xe,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe,tt,Ve.width,Ve.height,0,Ve.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe,0,0,Ve.width,Ve.height,Xe,Ze,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe,tt,Ve.width,Ve.height,0,Xe,Ze,Ve.data)}}}else{if(Fe=y.mipmaps,$&&Pe){Fe.length>0&&Ie++;let _e=Ke(Le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,tt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ge){$?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Le[_e].width,Le[_e].height,Xe,Ze,Le[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,tt,Le[_e].width,Le[_e].height,0,Xe,Ze,Le[_e].data);for(let qe=0;qe<Fe.length;qe++){let vt=Fe[qe].image[_e].image;$?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe+1,0,0,vt.width,vt.height,Xe,Ze,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe+1,tt,vt.width,vt.height,0,Xe,Ze,vt.data)}}else{$?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Xe,Ze,Le[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,tt,Xe,Ze,Le[_e]);for(let qe=0;qe<Fe.length;qe++){let Ve=Fe[qe];$?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe+1,0,0,Xe,Ze,Ve.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe+1,tt,Xe,Ze,Ve.image[_e])}}}p(y)&&T(i.TEXTURE_CUBE_MAP),ve.__version=ne.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function ye(D,y,j,X,ne,ve){let Te=r.convert(j.format,j.colorSpace),le=r.convert(j.type),de=v(j.internalFormat,Te,le,j.normalized,j.colorSpace),Ae=n.get(y),Ge=n.get(j);if(Ge.__renderTarget=y,!Ae.__hasExternalTextures){let Le=Math.max(1,y.width>>ve),Ce=Math.max(1,y.height>>ve);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,ve,de,Le,Ce,y.depth,0,Te,le,null):t.texImage2D(ne,ve,de,Le,Ce,0,Te,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),be(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,ne,Ge.__webglTexture,0,fe(y)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,ne,Ge.__webglTexture,ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(D,y,j){if(i.bindRenderbuffer(i.RENDERBUFFER,D),y.depthBuffer){let X=y.depthTexture,ne=X&&X.isDepthTexture?X.type:null,ve=R(y.stencilBuffer,ne),Te=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;be(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(y),ve,y.width,y.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(y),ve,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ve,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,D)}else{let X=y.textures;for(let ne=0;ne<X.length;ne++){let ve=X[ne],Te=r.convert(ve.format,ve.colorSpace),le=r.convert(ve.type),de=v(ve.internalFormat,Te,le,ve.normalized,ve.colorSpace);be(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(y),de,y.width,y.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(y),de,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,de,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(D,y,j){let X=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(y.depthTexture);if(ne.__renderTarget=y,(!ne.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),ne.__webglTexture===void 0){ne.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),ce(i.TEXTURE_CUBE_MAP,y.depthTexture);let Ae=r.convert(y.depthTexture.format),Ge=r.convert(y.depthTexture.type),Le;y.depthTexture.format===Ln?Le=i.DEPTH_COMPONENT24:y.depthTexture.format===gi&&(Le=i.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Le,y.width,y.height,0,Ae,Ge,null)}}else C(y.depthTexture,0);let ve=ne.__webglTexture,Te=fe(y),le=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+j:i.TEXTURE_2D,de=y.depthTexture.format===gi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ln)be(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,le,ve,0,Te):i.framebufferTexture2D(i.FRAMEBUFFER,de,le,ve,0);else if(y.depthTexture.format===gi)be(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,le,ve,0,Te):i.framebufferTexture2D(i.FRAMEBUFFER,de,le,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(D){let y=n.get(D),j=D.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==D.depthTexture){let X=D.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){let ne=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",ne)};X.addEventListener("dispose",ne),y.__depthDisposeCallback=ne}y.__boundDepthTexture=X}if(D.depthTexture&&!y.__autoAllocateDepthBuffer)if(j)for(let X=0;X<6;X++)et(y.__webglFramebuffer[X],D,X);else{let X=D.texture.mipmaps;X&&X.length>0?et(y.__webglFramebuffer[0],D,0):et(y.__webglFramebuffer,D,0)}else if(j){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=i.createRenderbuffer(),Oe(y.__webglDepthbuffer[X],D,!1);else{let ne=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=y.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,ve)}}else{let X=D.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Oe(y.__webglDepthbuffer,D,!1);else{let ne=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,ve)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(D,y,j){let X=n.get(D);y!==void 0&&ye(X.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&se(D)}function Me(D){let y=D.texture,j=n.get(D),X=n.get(y);D.addEventListener("dispose",_);let ne=D.textures,ve=D.isWebGLCubeRenderTarget===!0,Te=ne.length>1;if(Te||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=y.version,a.memory.textures++),ve){j.__webglFramebuffer=[];for(let le=0;le<6;le++)if(y.mipmaps&&y.mipmaps.length>0){j.__webglFramebuffer[le]=[];for(let de=0;de<y.mipmaps.length;de++)j.__webglFramebuffer[le][de]=i.createFramebuffer()}else j.__webglFramebuffer[le]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){j.__webglFramebuffer=[];for(let le=0;le<y.mipmaps.length;le++)j.__webglFramebuffer[le]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Te)for(let le=0,de=ne.length;le<de;le++){let Ae=n.get(ne[le]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&be(D)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let le=0;le<ne.length;le++){let de=ne[le];j.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[le]);let Ae=r.convert(de.format,de.colorSpace),Ge=r.convert(de.type),Le=v(de.internalFormat,Ae,Ge,de.normalized,de.colorSpace,D.isXRRenderTarget===!0),Ce=fe(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Le,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,j.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(j.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),ce(i.TEXTURE_CUBE_MAP,y);for(let le=0;le<6;le++)if(y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)ye(j.__webglFramebuffer[le][de],D,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,de);else ye(j.__webglFramebuffer[le],D,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(y)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let le=0,de=ne.length;le<de;le++){let Ae=ne[le],Ge=n.get(Ae),Le=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Le=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Le,Ge.__webglTexture),ce(Le,Ae),ye(j.__webglFramebuffer,D,Ae,i.COLOR_ATTACHMENT0+le,Le,0),p(Ae)&&T(Le)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(le=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,X.__webglTexture),ce(le,y),y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)ye(j.__webglFramebuffer[de],D,y,i.COLOR_ATTACHMENT0,le,de);else ye(j.__webglFramebuffer,D,y,i.COLOR_ATTACHMENT0,le,0);p(y)&&T(le),t.unbindTexture()}D.depthBuffer&&se(D)}function Se(D){let y=D.textures;for(let j=0,X=y.length;j<X;j++){let ne=y[j];if(p(ne)){let ve=M(D),Te=n.get(ne).__webglTexture;t.bindTexture(ve,Te),T(ve),t.unbindTexture()}}}let we=[],K=[];function ie(D){if(D.samples>0){if(be(D)===!1){let y=D.textures,j=D.width,X=D.height,ne=i.COLOR_BUFFER_BIT,ve=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(D),le=y.length>1;if(le)for(let Ae=0;Ae<y.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);let de=D.texture.mipmaps;de&&de.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ae=0;Ae<y.length;Ae++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ae]);let Ge=n.get(y[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ge,0)}i.blitFramebuffer(0,0,j,X,0,0,j,X,ne,i.NEAREST),l===!0&&(we.length=0,K.length=0,we.push(i.COLOR_ATTACHMENT0+Ae),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(we.push(ve),K.push(ve),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,K)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,we))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let Ae=0;Ae<y.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ae]);let Ge=n.get(y[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let y=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function fe(D){return Math.min(s.maxSamples,D.samples)}function be(D){let y=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function H(D){let y=a.render.frame;f.get(D)!==y&&(f.set(D,y),D.update())}function st(D,y){let j=D.colorSpace,X=D.format,ne=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||j!==Hs&&j!==Qn&&(lt.getTransfer(j)===pt?(X!==pn||ne!==en)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",j)),y}function Ke(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=F,this.getTextureUnits=E,this.setTextureUnits=I,this.setTexture2D=C,this.setTexture2DArray=L,this.setTexture3D=O,this.setTextureCube=B,this.rebindTextures=xe,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=be,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Wg(i,e){function t(n,s=Qn){let r,a=lt.getTransfer(s);if(n===en)return i.UNSIGNED_BYTE;if(n===za)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bl)return i.BYTE;if(n===zl)return i.SHORT;if(n===vs)return i.UNSIGNED_SHORT;if(n===Ba)return i.INT;if(n===Sn)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===Tn)return i.HALF_FLOAT;if(n===Gl)return i.ALPHA;if(n===Vl)return i.RGB;if(n===pn)return i.RGBA;if(n===Ln)return i.DEPTH_COMPONENT;if(n===gi)return i.DEPTH_STENCIL;if(n===Wl)return i.RED;if(n===Ha)return i.RED_INTEGER;if(n===xi)return i.RG;if(n===Ga)return i.RG_INTEGER;if(n===Va)return i.RGBA_INTEGER;if(n===dr||n===pr||n===mr||n===gr)if(a===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===qa||n===Ya)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ja||n===$a||n===Ka||n===ja||n===xr||n===Qa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Za||n===Ja)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$a)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ka)return r.COMPRESSED_R11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xr)return r.COMPRESSED_RG11_EAC;if(n===Qa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===eo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===to)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===no)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===io)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===so)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ro)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ao)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===co)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ho)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===po)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mo||n===go||n===xo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===mo)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_o||n===yo||n===_r||n===vo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ks(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new cn({vertexShader:Xg,fragmentShader:qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Lt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fc=class extends Dn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,u=null,d=null,x=null,g=typeof XRWebGLBinding<"u",m=new uc,p={},T=t.getContextAttributes(),M=null,v=null,R=[],b=[],A=new Ee,_=null,P=null,N=new wt;N.viewport=new Tt;let z=new wt;z.viewport=new Tt;let Z=[N,z],F=new Na,E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let J=R[k];return J===void 0&&(J=new os,R[k]=J),J.getTargetRaySpace()},this.getControllerGrip=function(k){let J=R[k];return J===void 0&&(J=new os,R[k]=J),J.getGripSpace()},this.getHand=function(k){let J=R[k];return J===void 0&&(J=new os,R[k]=J),J.getHandSpace()};function q(k){let J=b.indexOf(k.inputSource);if(J===-1)return;let oe=R[J];oe!==void 0&&(oe.update(k.inputSource,k.frame,c||a),oe.dispatchEvent({type:k.type,data:k.inputSource}))}function w(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",w),s.removeEventListener("inputsourceschange",C);for(let k=0;k<R.length;k++){let J=b[k];J!==null&&(b[k]=null,R[k].disconnect(J))}E=null,I=null,m.reset();for(let k in p)delete p[k];if(e.setRenderTarget(M),d=null,u=null,h=null,s=null,v=null,V.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),P!==null){let k=P.camera;k.fov=P.fov,k.zoom=P.zoom,k.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",w),s.addEventListener("inputsourceschange",C),T.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,me=null,ye=null;T.depth&&(ye=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=T.stencil?gi:Ln,me=T.stencil?Ms:Sn);let Oe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Oe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Kt(u.textureWidth,u.textureHeight,{format:pn,type:en,depthTexture:new ci(u.textureWidth,u.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let oe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Kt(d.framebufferWidth,d.framebufferHeight,{format:pn,type:en,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),V.setContext(s),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function C(k){for(let J=0;J<k.removed.length;J++){let oe=k.removed[J],me=b.indexOf(oe);me>=0&&(b[me]=null,R[me].disconnect(oe))}for(let J=0;J<k.added.length;J++){let oe=k.added[J],me=b.indexOf(oe);if(me===-1){for(let Oe=0;Oe<R.length;Oe++)if(Oe>=b.length){b.push(oe),me=Oe;break}else if(b[Oe]===null){b[Oe]=oe,me=Oe;break}if(me===-1)break}let ye=R[me];ye&&ye.connect(oe)}}let L=new G,O=new G;function B(k,J,oe){L.setFromMatrixPosition(J.matrixWorld),O.setFromMatrixPosition(oe.matrixWorld);let me=L.distanceTo(O),ye=J.projectionMatrix.elements,Oe=oe.projectionMatrix.elements,et=ye[14]/(ye[10]-1),se=ye[14]/(ye[10]+1),xe=(ye[9]+1)/ye[5],Me=(ye[9]-1)/ye[5],Se=(ye[8]-1)/ye[0],we=(Oe[8]+1)/Oe[0],K=et*Se,ie=et*we,fe=me/(-Se+we),be=fe*-Se;if(J.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(be),k.translateZ(fe),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),ye[10]===-1)k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let H=et+fe,st=se+fe,Ke=K-be,D=ie+(me-be),y=xe*se/st*H,j=Me*se/st*H;k.projectionMatrix.makePerspective(Ke,D,y,j,H,st),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Q(k,J){J===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(J.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let J=k.near,oe=k.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),F.near=z.near=N.near=J,F.far=z.far=N.far=oe,(E!==F.near||I!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),E=F.near,I=F.far),F.layers.mask=k.layers.mask|6,N.layers.mask=F.layers.mask&-5,z.layers.mask=F.layers.mask&-3;let me=k.parent,ye=F.cameras;Q(F,me);for(let Oe=0;Oe<ye.length;Oe++)Q(ye[Oe],me);ye.length===2?B(F,N,z):F.projectionMatrix.copy(N.projectionMatrix),P===null&&k.isPerspectiveCamera&&(P={camera:k,fov:k.fov,zoom:k.zoom}),ae(k,F,me)};function ae(k,J,oe){oe===null?k.matrix.copy(J.matrixWorld):(k.matrix.copy(oe.matrixWorld),k.matrix.invert(),k.matrix.multiply(J.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=aa*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(k){l=k,u!==null&&(u.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(k){return p[k]};let ue=null;function ce(k,J){if(f=J.getViewerPose(c||a),x=J,f!==null){let oe=f.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let me=!1;oe.length!==F.cameras.length&&(F.cameras.length=0,me=!0);for(let se=0;se<oe.length;se++){let xe=oe[se],Me=null;if(d!==null)Me=d.getViewport(xe);else{let we=h.getViewSubImage(u,xe);Me=we.viewport,se===0&&(e.setRenderTargetTextures(v,we.colorTexture,we.depthStencilTexture),e.setRenderTarget(v))}let Se=Z[se];Se===void 0&&(Se=new wt,Se.layers.enable(se),Se.viewport=new Tt,Z[se]=Se),Se.matrix.fromArray(xe.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(xe.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Me.x,Me.y,Me.width,Me.height),se===0&&(F.matrix.copy(Se.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),me===!0&&F.cameras.push(Se)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){h=n.getBinding();let se=h.getDepthInformation(oe[0]);se&&se.isValid&&se.texture&&m.init(se,s.renderState)}if(ye&&ye.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let se=0;se<oe.length;se++){let xe=oe[se].camera;if(xe){let Me=p[xe];Me||(Me=new Ks,p[xe]=Me);let Se=h.getCameraImage(xe);Me.sourceTexture=Se}}}}for(let oe=0;oe<R.length;oe++){let me=b[oe],ye=R[oe];me!==null&&ye!==void 0&&ye.update(me,J,c||a)}ue&&ue(k,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),x=null}let V=new xu;V.setAnimationLoop(ce),this.setAnimationLoop=function(k){ue=k},this.dispose=function(){}}},Yg=new bt,Su=new je;Su.set(-1,0,0,0,1,0,0,0,1);function Zg(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Zl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,M,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),f(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=e.get(p),M=T.envMap,v=T.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Su),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Jg(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,R){let b=R.program;n.uniformBlockBinding(v,b)}function c(v,R){let b=s[v.id];b===void 0&&(m(v),b=f(v),s[v.id]=b,v.addEventListener("dispose",T));let A=R.program;n.updateUBOMapping(v,A);let _=e.render.frame;r[v.id]!==_&&(u(v),r[v.id]=_)}function f(v){let R=h();v.__bindingPointIndex=R;let b=i.createBuffer(),A=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,A,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,b),b}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let R=s[v.id],b=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let _=0,P=b.length;_<P;_++){let N=b[_];if(Array.isArray(N))for(let z=0,Z=N.length;z<Z;z++)d(N[z],_,z,A);else d(N,_,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,R,b,A){if(g(v,R,b,A)===!0){let _=v.__offset,P=v.value;if(Array.isArray(P)){let N=0;for(let z=0;z<P.length;z++){let Z=P[z],F=p(Z);x(Z,v.__data,N),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(N+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(P,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function x(v,R,b){typeof v=="number"||typeof v=="boolean"?R[0]=v:v.isMatrix3?(R[0]=v.elements[0],R[1]=v.elements[1],R[2]=v.elements[2],R[3]=0,R[4]=v.elements[3],R[5]=v.elements[4],R[6]=v.elements[5],R[7]=0,R[8]=v.elements[6],R[9]=v.elements[7],R[10]=v.elements[8],R[11]=0):ArrayBuffer.isView(v)?R.set(new v.constructor(v.buffer,v.byteOffset,R.length)):v.toArray(R,b)}function g(v,R,b,A){let _=v.value,P=R+"_"+b;if(A[P]===void 0)return typeof _=="number"||typeof _=="boolean"?A[P]=_:ArrayBuffer.isView(_)?A[P]=_.slice():A[P]=_.clone(),!0;{let N=A[P];if(typeof _=="number"||typeof _=="boolean"){if(N!==_)return A[P]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(N.equals(_)===!1)return N.copy(_),!0}}return!1}function m(v){let R=v.uniforms,b=0,A=16;for(let P=0,N=R.length;P<N;P++){let z=Array.isArray(R[P])?R[P]:[R[P]];for(let Z=0,F=z.length;Z<F;Z++){let E=z[Z],I=Array.isArray(E.value)?E.value:[E.value];for(let q=0,w=I.length;q<w;q++){let C=I[q],L=p(C),O=b%A,B=O%L.boundary,Q=O+B;b+=B,Q!==0&&A-Q<L.storage&&(b+=A-Q),E.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=b,b+=L.storage}}}let _=b%A;return _>0&&(b+=A-_),v.__size=b,v.__cache={},this}function p(v){let R={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(R.boundary=4,R.storage=4):v.isVector2?(R.boundary=8,R.storage=8):v.isVector3||v.isColor?(R.boundary=16,R.storage=12):v.isVector4?(R.boundary=16,R.storage=16):v.isMatrix3?(R.boundary=48,R.storage=48):v.isMatrix4?(R.boundary=64,R.storage=64):v.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(R.boundary=16,R.storage=v.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",v),R}function T(v){let R=v.target;R.removeEventListener("dispose",T);let b=a.indexOf(R.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function M(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:M}}var $g=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bn=null;function Kg(){return Bn===null&&(Bn=new ua($g,16,16,xi,Tn),Bn.name="DFG_LUT",Bn.minFilter=Ot,Bn.magFilter=Ot,Bn.wrapS=In,Bn.wrapT=In,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}var kn=class{constructor(e={}){let{canvas:t=Oh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:d=en}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let g=d,m=new Set([Va,Ga,Ha]),p=new Set([en,Sn,vs,Ms,za,ka]),T=new Uint32Array(4),M=new Int32Array(4),v=new G,R=null,b=null,A=[],_=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,z=!1,Z=null,F=null,E=null,I=null;this._outputColorSpace=Wt;let q=0,w=0,C=null,L=-1,O=null,B=new Tt,Q=new Tt,ae=null,ue=new Qe(0),ce=0,V=t.width,k=t.height,J=1,oe=null,me=null,ye=new Tt(0,0,V,k),Oe=new Tt(0,0,V,k),et=!1,se=new cs,xe=!1,Me=!1,Se=new bt,we=new G,K=new Tt,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function be(){return C===null?J:1}let H=n;function st(S,Y){return t.getContext(S,Y)}let Ke,D,y,j,X,ne,ve,Te,le,de,Ae,Ge,Le,Ce,Xe,Ze,tt,$,Pe,pe,Ie,Fe,_e;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",vt,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",gn,!1),H===null){let Y="webgl2";if(H=st(Y,S),H===null)throw st(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qe()}catch(S){throw t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),Je("WebGLRenderer: "+S.message),S}function qe(){Ke=new sm(H),Ke.init(),Ie=new Wg(H,Ke),D=new Z0(H,Ke,e,Ie),y=new Gg(H,Ke),D.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),F=H.createFramebuffer(),E=H.createFramebuffer(),I=H.createFramebuffer(),j=new om(H),X=new Rg,ne=new Vg(H,Ke,y,X,D,Ie,j),ve=new im(N),Te=new cd(H),Fe=new q0(H,Te),le=new rm(H,Te,j,Fe),de=new cm(H,le,Te,Fe,j),$=new lm(H,D,ne),Xe=new J0(X),Ae=new Ag(N,ve,Ke,D,Fe,Xe),Ge=new Zg(N,X),Le=new Pg,Ce=new Fg(Ke),tt=new X0(N,ve,y,de,x,l),Ze=new Hg(N,de,D),_e=new Jg(H,j,D,y),Pe=new Y0(H,Ke,j),pe=new am(H,Ke,j),j.programs=Ae.programs,N.capabilities=D,N.extensions=Ke,N.properties=X,N.renderLists=Le,N.shadowMap=Ze,N.state=y,N.info=j}g!==en&&(P=new um(g,t.width,t.height,o,s,r));let Ve=new fc(N,H);this.xr=Ve,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let S=Ke.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Ke.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(S){S!==void 0&&(J=S,this.setSize(V,k,!1))},this.getSize=function(S){return S.set(V,k)},this.setSize=function(S,Y,re=!0){if(Ve.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,k=Y,t.width=Math.floor(S*J),t.height=Math.floor(Y*J),re===!0&&(t.style.width=S+"px",t.style.height=Y+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,S,Y)},this.getDrawingBufferSize=function(S){return S.set(V*J,k*J).floor()},this.setDrawingBufferSize=function(S,Y,re){V=S,k=Y,J=re,t.width=Math.floor(S*re),t.height=Math.floor(Y*re),this.setViewport(0,0,S,Y)},this.setEffects=function(S){if(g===en){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let Y=0;Y<S.length;Y++)if(S[Y].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(B)},this.getViewport=function(S){return S.copy(ye)},this.setViewport=function(S,Y,re,ee){S.isVector4?ye.set(S.x,S.y,S.z,S.w):ye.set(S,Y,re,ee),y.viewport(B.copy(ye).multiplyScalar(J).round())},this.getScissor=function(S){return S.copy(Oe)},this.setScissor=function(S,Y,re,ee){S.isVector4?Oe.set(S.x,S.y,S.z,S.w):Oe.set(S,Y,re,ee),y.scissor(Q.copy(Oe).multiplyScalar(J).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(S){y.setScissorTest(et=S)},this.setOpaqueSort=function(S){oe=S},this.setTransparentSort=function(S){me=S},this.getClearColor=function(S){return S.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(S=!0,Y=!0,re=!0){let ee=0;if(S){let te=!1;if(C!==null){let Ue=C.texture.format;te=m.has(Ue)}if(te){let Ue=C.texture.type,ze=p.has(Ue),Ne=tt.getClearColor(),ke=tt.getClearAlpha(),We=Ne.r,nt=Ne.g,rt=Ne.b;ze?(T[0]=We,T[1]=nt,T[2]=rt,T[3]=ke,H.clearBufferuiv(H.COLOR,0,T)):(M[0]=We,M[1]=nt,M[2]=rt,M[3]=ke,H.clearBufferiv(H.COLOR,0,M))}else ee|=H.COLOR_BUFFER_BIT}Y&&(ee|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ee|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&H.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),Z=S},this.dispose=function(){t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),tt.dispose(),Le.dispose(),Ce.dispose(),X.dispose(),ve.dispose(),de.dispose(),Fe.dispose(),_e.dispose(),Ae.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",_c),Ve.removeEventListener("sessionend",yc),yi.stop()};function vt(S){S.preventDefault(),Ws("WebGLRenderer: Context Lost."),z=!0}function ft(){Ws("WebGLRenderer: Context Restored."),z=!1;let S=j.autoReset,Y=Ze.enabled,re=Ze.autoUpdate,ee=Ze.needsUpdate,te=Ze.type;qe(),j.autoReset=S,Ze.enabled=Y,Ze.autoUpdate=re,Ze.needsUpdate=ee,Ze.type=te}function gn(S){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function An(S){let Y=S.target;Y.removeEventListener("dispose",An),Hu(Y)}function Hu(S){Gu(S),X.remove(S)}function Gu(S){let Y=X.get(S).programs;Y!==void 0&&(Y.forEach(function(re){Ae.releaseProgram(re)}),S.isShaderMaterial&&Ae.releaseShaderCache(S))}this.renderBufferDirect=function(S,Y,re,ee,te,Ue){Y===null&&(Y=ie);let ze=te.isMesh&&te.matrixWorld.determinantAffine()<0,Ne=Xu(S,Y,re,ee,te);y.setMaterial(ee,ze);let ke=re.index,We=1;if(ee.wireframe===!0){if(ke=le.getWireframeAttribute(re),ke===void 0)return;We=2}let nt=re.drawRange,rt=re.attributes.position,He=nt.start*We,dt=(nt.start+nt.count)*We;Ue!==null&&(He=Math.max(He,Ue.start*We),dt=Math.min(dt,(Ue.start+Ue.count)*We)),ke!==null?(He=Math.max(He,0),dt=Math.min(dt,ke.count)):rt!=null&&(He=Math.max(He,0),dt=Math.min(dt,rt.count));let Pt=dt-He;if(Pt<0||Pt===1/0)return;Fe.setup(te,ee,Ne,re,ke);let St,yt=Pe;if(ke!==null&&(St=Te.get(ke),yt=pe,yt.setIndex(St)),te.isMesh)ee.wireframe===!0?(y.setLineWidth(ee.wireframeLinewidth*be()),yt.setMode(H.LINES)):yt.setMode(H.TRIANGLES);else if(te.isLine){let Ht=ee.linewidth;Ht===void 0&&(Ht=1),y.setLineWidth(Ht*be()),te.isLineSegments?yt.setMode(H.LINES):te.isLineLoop?yt.setMode(H.LINE_LOOP):yt.setMode(H.LINE_STRIP)}else te.isPoints?yt.setMode(H.POINTS):te.isSprite&&yt.setMode(H.TRIANGLES);if(te.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))yt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let Ht=te._multiDrawStarts,Be=te._multiDrawCounts,qt=te._multiDrawCount,ct=ke?Te.get(ke).bytesPerElement:1,un=X.get(ee).currentProgram.getUniforms();for(let Rn=0;Rn<qt;Rn++)un.setValue(H,"_gl_DrawID",Rn),yt.render(Ht[Rn]/ct,Be[Rn])}else if(te.isInstancedMesh)yt.renderInstances(He,Pt,te.count);else if(re.isInstancedBufferGeometry){let Ht=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Be=Math.min(re.instanceCount,Ht);yt.renderInstances(He,Pt,Be)}else yt.render(He,Pt)};function xc(S,Y,re,ee){Z!==null&&S.isNodeMaterial&&Z.setObject(ee,S),xe===!0&&Xe.setState(S,re,!1),S.transparent===!0&&S.side===Qt&&S.forceSinglePass===!1?(S.side=kt,S.needsUpdate=!0,Er(S,Y,ee),S.side=di,S.needsUpdate=!0,Er(S,Y,ee),S.side=Qt):Er(S,Y,ee)}this.compile=function(S,Y,re=null){re===null&&(re=S),Z!==null&&Z.renderStart(S,Y,re),b=Ce.get(re),b.init(Y),_.push(b),re.traverseVisible(function(te){te.isLight&&te.layers.test(Y.layers)&&(b.pushLight(te),te.castShadow&&b.pushShadow(te))}),S!==re&&S.traverseVisible(function(te){te.isLight&&te.layers.test(Y.layers)&&(b.pushLight(te),te.castShadow&&b.pushShadow(te))}),b.setupLights(),Z!==null&&Z.updateLights(b.state.lightsArray),Me=this.localClippingEnabled,xe=Xe.init(this.clippingPlanes,Me),xe===!0&&Xe.setGlobalState(this.clippingPlanes,Y),Z!==null&&Ze.render(b.state.shadowsArray,re,Y);let ee=new Set;return S.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let Ue=te.material;if(Ue)if(Array.isArray(Ue))for(let ze=0;ze<Ue.length;ze++){let Ne=Ue[ze];xc(Ne,re,Y,te),ee.add(Ne)}else xc(Ue,re,Y,te),ee.add(Ue)}),b=_.pop(),Z!==null&&Z.renderEnd(),ee},this.compileAsync=function(S,Y,re=null){let ee=this.compile(S,Y,re);return new Promise(te=>{function Ue(){if(ee.forEach(function(ze){let ke=X.get(ze).currentProgram;(ke===void 0||ke.isReady())&&ee.delete(ze)}),ee.size===0){te(S);return}setTimeout(Ue,10)}Ke.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let No=null;function Vu(S){No&&No(S)}function _c(){yi.stop()}function yc(){yi.start()}let yi=new xu;yi.setAnimationLoop(Vu),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(S){No=S,Ve.setAnimationLoop(S),S===null?yi.stop():yi.start()},Ve.addEventListener("sessionstart",_c),Ve.addEventListener("sessionend",yc),this.render=function(S,Y){if(Y!==void 0&&Y.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;Z!==null&&Z.renderStart(S,Y);let re=Ve.enabled===!0&&Ve.isPresenting===!0,ee=P!==null&&(C===null||re)&&P.begin(N,C);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(Y),Y=Ve.getCamera()),S.isScene===!0&&S.onBeforeRender(N,S,Y,C),b=Ce.get(S,_.length),b.init(Y),b.state.textureUnits=ne.getTextureUnits(),_.push(b),Se.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),se.setFromProjectionMatrix(Se,vn,Y.reversedDepth),Me=this.localClippingEnabled,xe=Xe.init(this.clippingPlanes,Me),R=Le.get(S,A.length),R.init(),A.push(R),Ve.enabled===!0&&Ve.isPresenting===!0){let ze=N.xr.getDepthSensingMesh();ze!==null&&Uo(ze,Y,-1/0,N.sortObjects)}Uo(S,Y,0,N.sortObjects),R.finish(),Z!==null&&Z.updateLights(b.state.lightsArray),N.sortObjects===!0&&R.sort(oe,me),fe=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,fe&&tt.addToRenderList(R,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&Xe.beginShadows();let te=b.state.shadowsArray;if(Ze.render(te,S,Y),xe===!0&&Xe.endShadows(),(ee&&P.hasRenderPass())===!1){let ze=R.opaque,Ne=R.transmissive;if(b.setupLights(),Y.isArrayCamera){let ke=Y.cameras;if(Ne.length>0)for(let We=0,nt=ke.length;We<nt;We++){let rt=ke[We];Mc(ze,Ne,S,rt)}fe&&tt.render(S);for(let We=0,nt=ke.length;We<nt;We++){let rt=ke[We];vc(R,S,rt,rt.viewport)}}else Ne.length>0&&Mc(ze,Ne,S,Y),fe&&tt.render(S),vc(R,S,Y)}C!==null&&w===0&&(ne.updateMultisampleRenderTarget(C),ne.updateRenderTargetMipmap(C)),ee&&P.end(N),S.isScene===!0&&S.onAfterRender(N,S,Y),Fe.resetDefaultState(),L=-1,O=null,_.pop(),_.length>0?(b=_[_.length-1],ne.setTextureUnits(b.state.textureUnits),xe===!0&&Xe.setGlobalState(N.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?R=A[A.length-1]:R=null,Z!==null&&Z.renderEnd()};function Uo(S,Y,re,ee){if(S.visible===!1)return;if(S.layers.test(Y.layers)){if(S.isGroup)re=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(Y);else if(S.isLightProbeGrid)b.pushLightProbeGrid(S);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(se)){ee&&K.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Se);let ze=de.update(S),Ne=S.material;Ne.visible&&R.push(S,ze,Ne,re,K.z,null,Y)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(se))){let ze=de.update(S),Ne=S.material;if(ee&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),K.copy(S.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),K.copy(ze.boundingSphere.center)),K.applyMatrix4(S.matrixWorld).applyMatrix4(Se)),Array.isArray(Ne)){let ke=ze.groups;for(let We=0,nt=ke.length;We<nt;We++){let rt=ke[We],He=Ne[rt.materialIndex];He&&He.visible&&R.push(S,ze,He,re,K.z,rt,Y)}}else Ne.visible&&R.push(S,ze,Ne,re,K.z,null,Y)}}let Ue=S.children;for(let ze=0,Ne=Ue.length;ze<Ne;ze++)Uo(Ue[ze],Y,re,ee)}function vc(S,Y,re,ee){let{opaque:te,transmissive:Ue,transparent:ze}=S;b.setupLightsView(re),xe===!0&&Xe.setGlobalState(N.clippingPlanes,re),ee&&y.viewport(B.copy(ee)),te.length>0&&Sr(te,Y,re),Ue.length>0&&Sr(Ue,Y,re),ze.length>0&&Sr(ze,Y,re),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Mc(S,Y,re,ee){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[ee.id]===void 0){let He=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[ee.id]=new Kt(1,1,{generateMipmaps:!0,type:He?Tn:en,minFilter:mi,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let Ue=b.state.transmissionRenderTarget[ee.id],ze=ee.viewport||B;Ue.setSize(ze.z*N.transmissionResolutionScale,ze.w*N.transmissionResolutionScale);let Ne=N.getRenderTarget(),ke=N.getActiveCubeFace(),We=N.getActiveMipmapLevel();N.setRenderTarget(Ue),N.getClearColor(ue),ce=N.getClearAlpha(),ce<1&&N.setClearColor(16777215,.5),N.clear(),fe&&tt.render(re);let nt=N.toneMapping;N.toneMapping=bn;let rt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),b.setupLightsView(ee),xe===!0&&Xe.setGlobalState(N.clippingPlanes,ee),Sr(S,re,ee),ne.updateMultisampleRenderTarget(Ue),ne.updateRenderTargetMipmap(Ue),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let dt=0,Pt=Y.length;dt<Pt;dt++){let St=Y[dt],{object:yt,geometry:Ht,material:Be,group:qt}=St;if(Be.side===Qt&&yt.layers.test(ee.layers)){let ct=Be.side;Be.side=kt,Be.needsUpdate=!0,bc(yt,re,ee,Ht,Be,qt),Be.side=ct,Be.needsUpdate=!0,He=!0}}He===!0&&(ne.updateMultisampleRenderTarget(Ue),ne.updateRenderTargetMipmap(Ue))}N.setRenderTarget(Ne,ke,We),N.setClearColor(ue,ce),rt!==void 0&&(ee.viewport=rt),N.toneMapping=nt}function Sr(S,Y,re){let ee=Y.isScene===!0?Y.overrideMaterial:null;for(let te=0,Ue=S.length;te<Ue;te++){let ze=S[te],{object:Ne,geometry:ke,group:We}=ze,nt=ze.material;nt.allowOverride===!0&&ee!==null&&(nt=ee),Ne.layers.test(re.layers)&&bc(Ne,Y,re,ke,nt,We)}}function bc(S,Y,re,ee,te,Ue){Z!==null&&te.isNodeMaterial&&Z.setObject(S,te),S.onBeforeRender(N,Y,re,ee,te,Ue),S.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),te.onBeforeRender(N,Y,re,ee,S,Ue),te.transparent===!0&&te.side===Qt&&te.forceSinglePass===!1?(te.side=kt,te.needsUpdate=!0,N.renderBufferDirect(re,Y,ee,te,S,Ue),te.side=di,te.needsUpdate=!0,N.renderBufferDirect(re,Y,ee,te,S,Ue),te.side=Qt):N.renderBufferDirect(re,Y,ee,te,S,Ue),S.onAfterRender(N,Y,re,ee,te,Ue)}function Er(S,Y,re){Y.isScene!==!0&&(Y=ie);let ee=X.get(S),te=b.state.lights,Ue=b.state.shadowsArray,ze=te.state.version,Ne=Ae.getParameters(S,te.state,Ue,Y,re,b.state.lightProbeGridArray),ke=Ae.getProgramCacheKey(Ne),We=ee.programs;ee.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?Y.environment:null,ee.fog=Y.fog;let nt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;ee.envMap=ve.get(S.envMap||ee.environment,nt),ee.envMapRotation=ee.environment!==null&&S.envMap===null?Y.environmentRotation:S.envMapRotation,We===void 0&&(S.addEventListener("dispose",An),We=new Map,ee.programs=We);let rt=We.get(ke);if(rt!==void 0){if(ee.currentProgram===rt&&ee.lightsStateVersion===ze)return Ec(S,Ne),rt}else Ne.uniforms=Ae.getUniforms(S),Z!==null&&S.isNodeMaterial&&Z.build(S,re,Ne),S.onBeforeCompile(Ne,N),rt=Ae.acquireProgram(Ne,ke),We.set(ke,rt),ee.uniforms=Ne.uniforms;let He=ee.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(He.clippingPlanes=Xe.uniform),Ec(S,Ne),ee.needsLights=Yu(S),ee.lightsStateVersion=ze,ee.needsLights&&(He.ambientLightColor.value=te.state.ambient,He.lightProbe.value=te.state.probe,He.sunLights.value=te.state.sun,He.sunLightShadows.value=te.state.sunShadow,He.directionalLights.value=te.state.directional,He.directionalLightShadows.value=te.state.directionalShadow,He.spotLights.value=te.state.spot,He.spotLightShadows.value=te.state.spotShadow,He.rectAreaLights.value=te.state.rectArea,He.ltc_1.value=te.state.rectAreaLTC1,He.ltc_2.value=te.state.rectAreaLTC2,He.pointLights.value=te.state.point,He.pointLightShadows.value=te.state.pointShadow,He.hemisphereLights.value=te.state.hemi,He.sunShadowMatrix.value=te.state.sunShadowMatrix,He.sunShadowCascade.value=te.state.sunShadowCascade,He.directionalShadowMatrix.value=te.state.directionalShadowMatrix,He.spotLightMatrix.value=te.state.spotLightMatrix,He.spotLightMap.value=te.state.spotLightMap,He.pointShadowMatrix.value=te.state.pointShadowMatrix),ee.lightProbeGrid=b.state.lightProbeGridArray.length>0,ee.currentProgram=rt,ee.uniformsList=null,rt}function Sc(S){if(S.uniformsList===null){let Y=S.currentProgram.getUniforms();S.uniformsList=Es.seqWithValue(Y.seq,S.uniforms)}return S.uniformsList}function Ec(S,Y){let re=X.get(S);re.outputColorSpace=Y.outputColorSpace,re.batching=Y.batching,re.batchingColor=Y.batchingColor,re.instancing=Y.instancing,re.instancingColor=Y.instancingColor,re.instancingMorph=Y.instancingMorph,re.skinning=Y.skinning,re.morphTargets=Y.morphTargets,re.morphNormals=Y.morphNormals,re.morphColors=Y.morphColors,re.morphTargetsCount=Y.morphTargetsCount,re.numClippingPlanes=Y.numClippingPlanes,re.numIntersection=Y.numClipIntersection,re.vertexAlphas=Y.vertexAlphas,re.vertexTangents=Y.vertexTangents,re.toneMapping=Y.toneMapping}function Wu(S,Y){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(Y.matrixWorld);for(let re=0,ee=S.length;re<ee;re++){let te=S[re];if(te.texture!==null&&te.boundingBox.containsPoint(v))return te}return null}function Xu(S,Y,re,ee,te){Y.isScene!==!0&&(Y=ie),ne.resetTextureUnits();let Ue=Y.fog,ze=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?Y.environment:null,Ne=C===null?N.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:lt.workingColorSpace,ke=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,We=ve.get(ee.envMap||ze,ke),nt=ee.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,rt=!!re.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),He=!!re.morphAttributes.position,dt=!!re.morphAttributes.normal,Pt=!!re.morphAttributes.color,St=bn;ee.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(St=N.toneMapping);let yt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Ht=yt!==void 0?yt.length:0,Be=X.get(ee),qt=b.state.lights;if(xe===!0&&(Me===!0||S!==O)){let Mt=S===O&&ee.id===L;Xe.setState(ee,S,Mt)}let ct=!1;ee.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==qt.state.version||Be.outputColorSpace!==Ne||te.isBatchedMesh&&Be.batching===!1||!te.isBatchedMesh&&Be.batching===!0||te.isBatchedMesh&&Be.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&Be.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&Be.instancing===!1||!te.isInstancedMesh&&Be.instancing===!0||te.isSkinnedMesh&&Be.skinning===!1||!te.isSkinnedMesh&&Be.skinning===!0||te.isInstancedMesh&&Be.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Be.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Be.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Be.instancingMorph===!1&&te.morphTexture!==null||Be.envMap!==We||ee.fog===!0&&Be.fog!==Ue||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Xe.numPlanes||Be.numIntersection!==Xe.numIntersection)||Be.vertexAlphas!==nt||Be.vertexTangents!==rt||Be.morphTargets!==He||Be.morphNormals!==dt||Be.morphColors!==Pt||Be.toneMapping!==St||Be.morphTargetsCount!==Ht||!!Be.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,Be.__version=ee.version);let un=Be.currentProgram;ct===!0&&(un=Er(ee,Y,te),Z&&ee.isNodeMaterial&&Z.onUpdateProgram(ee,un,Be));let Rn=!1,ei=!1,Fi=!1,xt=un.getUniforms(),Rt=Be.uniforms;if(y.useProgram(un.program)&&(Rn=!0,ei=!0,Fi=!0),ee.id!==L&&(L=ee.id,ei=!0),Be.needsLights){let Mt=Wu(b.state.lightProbeGridArray,te);Be.lightProbeGrid!==Mt&&(Be.lightProbeGrid=Mt,ei=!0)}if(Rn||O!==S){y.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),xt.setValue(H,"projectionMatrix",S.projectionMatrix),xt.setValue(H,"viewMatrix",S.matrixWorldInverse);let ni=xt.map.cameraPosition;ni!==void 0&&ni.setValue(H,we.setFromMatrixPosition(S.matrixWorld)),D.logarithmicDepthBuffer&&xt.setValue(H,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&xt.setValue(H,"isOrthographic",S.isOrthographicCamera===!0),O!==S&&(O=S,ei=!0,Fi=!0)}if(Be.needsLights&&(qt.state.sunShadowMap.length>0&&xt.setValue(H,"sunShadowMap",qt.state.sunShadowMap,ne),qt.state.directionalShadowMap.length>0&&xt.setValue(H,"directionalShadowMap",qt.state.directionalShadowMap,ne),qt.state.spotShadowMap.length>0&&xt.setValue(H,"spotShadowMap",qt.state.spotShadowMap,ne),qt.state.pointShadowMap.length>0&&xt.setValue(H,"pointShadowMap",qt.state.pointShadowMap,ne)),te.isSkinnedMesh){xt.setOptional(H,te,"bindMatrix"),xt.setOptional(H,te,"bindMatrixInverse");let Mt=te.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),xt.setValue(H,"boneTexture",Mt.boneTexture,ne))}te.isBatchedMesh&&(xt.setOptional(H,te,"batchingTexture"),xt.setValue(H,"batchingTexture",te._matricesTexture,ne),xt.setOptional(H,te,"batchingIdTexture"),xt.setValue(H,"batchingIdTexture",te._indirectTexture,ne),xt.setOptional(H,te,"batchingColorTexture"),te._colorsTexture!==null&&xt.setValue(H,"batchingColorTexture",te._colorsTexture,ne));let ti=re.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&$.update(te,re,un),(ei||Be.receiveShadow!==te.receiveShadow)&&(Be.receiveShadow=te.receiveShadow,xt.setValue(H,"receiveShadow",te.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&Y.environment!==null&&(Rt.envMapIntensity.value=Y.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=Kg()),ei){if(xt.setValue(H,"toneMappingExposure",N.toneMappingExposure),Be.needsLights&&qu(Rt,Fi),Ue&&ee.fog===!0&&Ge.refreshFogUniforms(Rt,Ue),Ge.refreshMaterialUniforms(Rt,ee,J,k,b.state.transmissionRenderTarget[S.id]),Be.needsLights&&Be.lightProbeGrid){let Mt=Be.lightProbeGrid;Rt.probesSH.value=Mt.texture,Rt.probesMin.value.copy(Mt.boundingBox.min),Rt.probesMax.value.copy(Mt.boundingBox.max),Rt.probesResolution.value.copy(Mt.resolution)}Es.upload(H,Sc(Be),Rt,ne)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Es.upload(H,Sc(Be),Rt,ne),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&xt.setValue(H,"center",te.center),xt.setValue(H,"modelViewMatrix",te.modelViewMatrix),xt.setValue(H,"normalMatrix",te.normalMatrix),xt.setValue(H,"modelMatrix",te.matrixWorld),ee.uniformsGroups!==void 0){let Mt=ee.uniformsGroups;for(let ni=0,Oi=Mt.length;ni<Oi;ni++){let wc=Mt[ni];_e.update(wc,un),_e.bind(wc,un)}}return un}function qu(S,Y){S.ambientLightColor.needsUpdate=Y,S.lightProbe.needsUpdate=Y,S.sunLights.needsUpdate=Y,S.sunLightShadows.needsUpdate=Y,S.directionalLights.needsUpdate=Y,S.directionalLightShadows.needsUpdate=Y,S.pointLights.needsUpdate=Y,S.pointLightShadows.needsUpdate=Y,S.spotLights.needsUpdate=Y,S.spotLightShadows.needsUpdate=Y,S.rectAreaLights.needsUpdate=Y,S.hemisphereLights.needsUpdate=Y}function Yu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,Y,re){let ee=X.get(S);ee.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),X.get(S.texture).__webglTexture=Y,X.get(S.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:re,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,Y){let re=X.get(S);re.__webglFramebuffer=Y,re.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(S,Y=0,re=0){C=S,q=Y,w=re;let ee=null,te=!1,Ue=!1;if(S){let Ne=X.get(S);if(Ne.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(H.FRAMEBUFFER,Ne.__webglFramebuffer),B.copy(S.viewport),Q.copy(S.scissor),ae=S.scissorTest,y.viewport(B),y.scissor(Q),y.setScissorTest(ae),L=-1;return}else if(Ne.__webglFramebuffer===void 0)ne.setupRenderTarget(S);else if(Ne.__hasExternalTextures)ne.rebindTextures(S,X.get(S.texture).__webglTexture,X.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let nt=S.depthTexture;if(Ne.__boundDepthTexture!==nt){if(nt!==null&&X.has(nt)&&(S.width!==nt.image.width||S.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(S)}}let ke=S.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ue=!0);let We=X.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(We[Y])?ee=We[Y][re]:ee=We[Y],te=!0):S.samples>0&&ne.useMultisampledRTT(S)===!1?ee=X.get(S).__webglMultisampledFramebuffer:Array.isArray(We)?ee=We[re]:ee=We,B.copy(S.viewport),Q.copy(S.scissor),ae=S.scissorTest}else B.copy(ye).multiplyScalar(J).floor(),Q.copy(Oe).multiplyScalar(J).floor(),ae=et;if(re!==0&&(ee=F),y.bindFramebuffer(H.FRAMEBUFFER,ee)&&y.drawBuffers(S,ee),y.viewport(B),y.scissor(Q),y.setScissorTest(ae),te){let Ne=X.get(S.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ne.__webglTexture,re)}else if(Ue){let Ne=Y;for(let ke=0;ke<S.textures.length;ke++){let We=X.get(S.textures[ke]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+ke,We.__webglTexture,re,Ne)}}else if(S!==null&&re!==0){let Ne=X.get(S.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ne.__webglTexture,re)}L=-1};function Tc(S){let Y=X.get(S);return(Y.__readFormat!==S.format||Y.__readType!==S.type)&&(Y.__readFormat=S.format,Y.__readType=S.type,Y.__formatReadable=D.textureFormatReadable(S.format),Y.__typeReadable=D.textureTypeReadable(S.type)),Y}this.readRenderTargetPixels=function(S,Y,re,ee,te,Ue,ze,Ne=0){if(!(S&&S.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ze!==void 0&&(ke=ke[ze]),ke){y.bindFramebuffer(H.FRAMEBUFFER,ke);try{let We=S.textures[Ne],nt=We.format,rt=We.type;S.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ne);let He=Tc(We);if(He.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=S.width-ee&&re>=0&&re<=S.height-te&&H.readPixels(Y,re,ee,te,Ie.convert(nt),Ie.convert(rt),Ue)}finally{let We=C!==null?X.get(C).__webglFramebuffer:null;y.bindFramebuffer(H.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(S,Y,re,ee,te,Ue,ze,Ne=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ze!==void 0&&(ke=ke[ze]),ke)if(Y>=0&&Y<=S.width-ee&&re>=0&&re<=S.height-te){y.bindFramebuffer(H.FRAMEBUFFER,ke);let We=S.textures[Ne],nt=We.format,rt=We.type;S.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ne);let He=Tc(We);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,dt),H.bufferData(H.PIXEL_PACK_BUFFER,Ue.byteLength,H.STREAM_READ),H.readPixels(Y,re,ee,te,Ie.convert(nt),Ie.convert(rt),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Pt=C!==null?X.get(C).__webglFramebuffer:null;y.bindFramebuffer(H.FRAMEBUFFER,Pt);let St=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await zh(H,St,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,dt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ue),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(dt),H.deleteSync(St),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,Y=null,re=0){let ee=Math.pow(2,-re),te=Math.floor(S.image.width*ee),Ue=Math.floor(S.image.height*ee),ze=Y!==null?Y.x:0,Ne=Y!==null?Y.y:0;ne.setTexture2D(S,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,ze,Ne,te,Ue),y.unbindTexture()},this.copyTextureToTexture=function(S,Y,re=null,ee=null,te=0,Ue=0){let ze,Ne,ke,We,nt,rt,He,dt,Pt,St=S.isCompressedTexture?S.mipmaps[Ue]:S.image;if(re!==null)ze=re.max.x-re.min.x,Ne=re.max.y-re.min.y,ke=re.isBox3?re.max.z-re.min.z:1,We=re.min.x,nt=re.min.y,rt=re.isBox3?re.min.z:0;else{let Rt=Math.pow(2,-te);ze=Math.floor(St.width*Rt),Ne=Math.floor(St.height*Rt),S.isDataArrayTexture?ke=St.depth:S.isData3DTexture?ke=Math.floor(St.depth*Rt):ke=1,We=0,nt=0,rt=0}ee!==null?(He=ee.x,dt=ee.y,Pt=ee.z):(He=0,dt=0,Pt=0);let yt=Ie.convert(Y.format),Ht=Ie.convert(Y.type),Be;Y.isData3DTexture?(ne.setTexture3D(Y,0),Be=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ne.setTexture2DArray(Y,0),Be=H.TEXTURE_2D_ARRAY):(ne.setTexture2D(Y,0),Be=H.TEXTURE_2D),y.activeTexture(H.TEXTURE0),y.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),y.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),y.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);let qt=y.getParameter(H.UNPACK_ROW_LENGTH),ct=y.getParameter(H.UNPACK_IMAGE_HEIGHT),un=y.getParameter(H.UNPACK_SKIP_PIXELS),Rn=y.getParameter(H.UNPACK_SKIP_ROWS),ei=y.getParameter(H.UNPACK_SKIP_IMAGES);y.pixelStorei(H.UNPACK_ROW_LENGTH,St.width),y.pixelStorei(H.UNPACK_IMAGE_HEIGHT,St.height),y.pixelStorei(H.UNPACK_SKIP_PIXELS,We),y.pixelStorei(H.UNPACK_SKIP_ROWS,nt),y.pixelStorei(H.UNPACK_SKIP_IMAGES,rt);let Fi=S.isDataArrayTexture||S.isData3DTexture,xt=Y.isDataArrayTexture||Y.isData3DTexture;if(S.isDepthTexture){let Rt=X.get(S),ti=X.get(Y),Mt=X.get(Rt.__renderTarget),ni=X.get(ti.__renderTarget);y.bindFramebuffer(H.READ_FRAMEBUFFER,Mt.__webglFramebuffer),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let Oi=0;Oi<ke;Oi++)Fi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,X.get(S).__webglTexture,te,rt+Oi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,X.get(Y).__webglTexture,Ue,Pt+Oi)),H.blitFramebuffer(We,nt,ze,Ne,He,dt,ze,Ne,H.DEPTH_BUFFER_BIT,H.NEAREST);y.bindFramebuffer(H.READ_FRAMEBUFFER,null),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(te!==0||S.isRenderTargetTexture||X.has(S)){let Rt=X.get(S),ti=X.get(Y);y.bindFramebuffer(H.READ_FRAMEBUFFER,E),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,I);for(let Mt=0;Mt<ke;Mt++)Fi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Rt.__webglTexture,te,rt+Mt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Rt.__webglTexture,te),xt?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ti.__webglTexture,Ue,Pt+Mt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ti.__webglTexture,Ue),te!==0?H.blitFramebuffer(We,nt,ze,Ne,He,dt,ze,Ne,H.COLOR_BUFFER_BIT,H.NEAREST):xt?H.copyTexSubImage3D(Be,Ue,He,dt,Pt+Mt,We,nt,ze,Ne):H.copyTexSubImage2D(Be,Ue,He,dt,We,nt,ze,Ne);y.bindFramebuffer(H.READ_FRAMEBUFFER,null),y.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else xt?S.isDataTexture||S.isData3DTexture?H.texSubImage3D(Be,Ue,He,dt,Pt,ze,Ne,ke,yt,Ht,St.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(Be,Ue,He,dt,Pt,ze,Ne,ke,yt,St.data):H.texSubImage3D(Be,Ue,He,dt,Pt,ze,Ne,ke,yt,Ht,St):S.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ue,He,dt,ze,Ne,yt,Ht,St.data):S.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ue,He,dt,St.width,St.height,yt,St.data):H.texSubImage2D(H.TEXTURE_2D,Ue,He,dt,ze,Ne,yt,Ht,St);y.pixelStorei(H.UNPACK_ROW_LENGTH,qt),y.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ct),y.pixelStorei(H.UNPACK_SKIP_PIXELS,un),y.pixelStorei(H.UNPACK_SKIP_ROWS,Rn),y.pixelStorei(H.UNPACK_SKIP_IMAGES,ei),Ue===0&&Y.generateMipmaps&&H.generateMipmap(Be),y.unbindTexture()},this.initRenderTarget=function(S){X.get(S).__webglFramebuffer===void 0&&ne.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ne.setTextureCube(S,0):S.isData3DTexture?ne.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ne.setTexture2DArray(S,0):ne.setTexture2D(S,0),y.unbindTexture()},this.resetState=function(){q=0,w=0,C=null,y.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var br=new G;function mn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;br.copy(e),br[n]=0,br.normalize();let c=.5*a/(a+o),f=1-br.angleTo(i)/l;return Math.sign(br[t])===1?f*c:o/(a+o)+c+c*(1-f)}var Po=class i extends Un{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new G,c=new G,f=new G(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,x=h.length/6,g=new G,m=.5/a;for(let p=0,T=0;p<h.length;p+=3,T+=2)switch(l.fromArray(h,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[p+0]=f.x*Math.sign(l.x)+c.x*r,h[p+1]=f.y*Math.sign(l.y)+c.y*r,h[p+2]=f.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/x)){case 0:g.set(1,0,0),d[T+0]=mn(g,c,"z","y",r,n),d[T+1]=1-mn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[T+0]=1-mn(g,c,"z","y",r,n),d[T+1]=1-mn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[T+0]=1-mn(g,c,"x","z",r,e),d[T+1]=mn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[T+0]=1-mn(g,c,"x","z",r,e),d[T+1]=1-mn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[T+0]=1-mn(g,c,"x","y",r,e),d[T+1]=1-mn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[T+0]=mn(g,c,"x","y",r,e),d[T+1]=1-mn(g,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var ht={mint:6153140,mintDeep:4179866,belly:13237224,lav:13089023,lavDeep:11772671,pink:16748480,ink:2759518,wood:15782832,woodDark:14267530,wall:15326974,wallB:16770033,cream:16774890,sun:16764735},U=(i,e)=>new Jt(Object.assign({color:i,roughness:.85,metalness:0},e||{})),ge=(i,e,t,n)=>new Po(i,e,t,4,n??Math.min(i,e,t)*.25);function W(i,e,t,n,s,r){let a=new ut(i,e);return a.position.set(t||0,n||0,s||0),r!==!1&&(a.castShadow=!0,a.receiveShadow=!0),a}function he(i,e,t,n,s,r,a,o){let l=W(new or(i,32,24),e,r,a,o);return l.scale.set(t||1,n||1,s||1),l}function Ct(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new hs(n);return s.colorSpace=Wt,s.anisotropy=4,s}function _i(i){let e=new Ri;return e.moveTo(0,-.5*i),e.bezierCurveTo(-.9*i,.05*i,-.5*i,.7*i,0,.3*i),e.bezierCurveTo(.5*i,.7*i,.9*i,.05*i,0,-.5*i),e}function Ru(i){return Ct(64,64,e=>{if(e.translate(32,32),i==="heart")e.fillStyle="#FF5FA8",e.beginPath(),e.moveTo(0,22),e.bezierCurveTo(-34,-2,-16,-28,0,-10),e.bezierCurveTo(16,-28,34,-2,0,22),e.fill();else if(i==="star"){e.fillStyle="#FFCF3F",e.beginPath();for(let t=0;t<10;t++){let n=t%2?9:22,s=t*Math.PI/5-Math.PI/2;e.lineTo(Math.cos(s)*n,Math.sin(s)*n)}e.fill()}else i==="drop"?(e.fillStyle="#8EDBFF",e.beginPath(),e.moveTo(0,-22),e.bezierCurveTo(22,4,14,22,0,22),e.bezierCurveTo(-14,22,-22,4,0,-22),e.fill()):i==="bubble"?(e.strokeStyle="#8EDBFF",e.lineWidth=4,e.fillStyle="rgba(200,240,255,.55)",e.beginPath(),e.arc(0,0,16,0,7),e.fill(),e.stroke(),e.fillStyle="#fff",e.beginPath(),e.arc(-6,-6,4,0,7),e.fill()):i==="z"?(e.fillStyle="#7C5CFF",e.font="900 40px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("z",0,2)):(e.fillStyle="#fff",e.beginPath(),e.arc(0,0,14,0,7),e.fill())})}function Cu(i){return Ct(256,256,(e,t,n)=>{let s=i<6||i>=21,r=i>=18&&i<21,a=i>=6&&i<9,o=e.createLinearGradient(0,0,0,n);if(s?(o.addColorStop(0,"#1c1650"),o.addColorStop(1,"#4b3a8f")):r?(o.addColorStop(0,"#8a6fd1"),o.addColorStop(.6,"#ff9fb8"),o.addColorStop(1,"#ffd29a")):a?(o.addColorStop(0,"#9fd8ff"),o.addColorStop(1,"#ffe2c9")):(o.addColorStop(0,"#7fcbff"),o.addColorStop(1,"#d8f1ff")),e.fillStyle=o,e.fillRect(0,0,t,n),s){e.fillStyle="#fff";for(let l=0;l<26;l++)e.globalAlpha=.5+Math.random()*.5,e.beginPath(),e.arc(Math.random()*t,Math.random()*n*.8,Math.random()*1.6+.6,0,7),e.fill();e.globalAlpha=1,e.fillStyle="#FFF4C2",e.beginPath(),e.arc(t*.68,n*.28,26,0,7),e.fill(),e.fillStyle="#4b3a8f",e.beginPath(),e.arc(t*.68+11,n*.28-5,22,0,7),e.fill()}else e.fillStyle=r?"#FF8A6B":"#FFE27A",e.beginPath(),e.arc(t*(r?.3:.7),n*(r?.7:.25),28,0,7),e.fill(),e.fillStyle="rgba(255,255,255,.9)",[[50,150,26],[78,148,32],[110,152,24],[170,90,20],[196,88,26],[222,94,18]].forEach(l=>{e.beginPath(),e.arc(l[0],l[1],l[2],0,7),e.fill()})})}var Pu=[6153140,12166911,16758938,9362431,16769658,16754895,11069547,14738674,16751266,13085071,10405375,16164607],Iu=["cat","bear","bunny","none","fox","mouse"],Lu=["dot","happy","stars","big","sleepy"],Du=["","bow","glasses","beanie","flower","crown","shades","phones","bandana","bowtie","wings","hat"],Nu=["round","tall","chubby","bean"],Uu=["none","cat","bunny","fox"],Qg=/^[0-9a-b][0-5][0-4][0-9a-b][0-3][0-3]$/;function Fu(i){return i=String(i??""),/^[0-7][0-3][0-2][0-4]$/.test(i)&&(i+="00"),Qg.test(i)?i:""}function As(i){i=Fu(i)||"000000";let e=Du[parseInt(i[3],12)];return{mika:!0,color:Pu[parseInt(i[0],12)],ears:Iu[+i[1]],eyes:Lu[+i[2]],topper:"pom",acc:e?[e]:[],shape:Nu[+i[4]],tail:Uu[+i[5]]}}function ex(i,e){if(!i.isMesh)return i;let t=new ut(i.geometry,new ot({color:e,side:kt}));return t.scale.setScalar(1.05),t.castShadow=!1,t.receiveShadow=!1,i.add(t),i}function dc(i,e){let t=new Qe(i);return t.multiplyScalar(e),t}function tn(i){i=Object.assign({color:ht.mint,ears:"round",topper:"pom",eyes:"dot",mika:!1,acc:[]},i||{});let e=new Re,t=new Re;e.add(t);let n={tall:[.9,1.2],chubby:[1.2,.9],bean:[.86,1.1]}[i.shape]||[1,1],s=n[0],r=n[1],a=U(i.color,{roughness:.62,emissive:dc(i.color,.55),emissiveIntensity:.3}),o=U(dc(i.color,.85).getHex()),l=.55*1.1,c=.55*.95,f=.55,h=.56,u=(w,C)=>f*Math.sqrt(Math.max(.02,1-(w/l)**2-((C-h)/c)**2));t.add(he(.55,a,1.1,.95,1,0,.56,0));{let w=new Qe(i.color).lerp(new Qe(16777215),.62).getHex();t.add(he(.42,U(w,{roughness:.7,emissive:w,emissiveIntensity:.32}),1.05,.9,.55,0,.42,.3))}let d=U(i.mika?14273791:16757713),x=[];if([-1,1].forEach(w=>{let C=new Re,L=.28;if(i.ears==="round")C.position.set(w*.4,.98,-.02),C.add(he(.22,a,1,1.05,.62,0,.12,0)),C.add(he(.12,d,1,1.05,.5,0,.12,.08));else if(i.ears==="bear")C.position.set(w*.43,.97,-.02),C.add(he(.17,a,1,1,.7,0,.1,0)),C.add(he(.09,d,1,1,.5,0,.1,.07)),L=.2;else if(i.ears==="cat"){C.position.set(w*.36,1,0);let O=W(new jt(.2,.4,4),a,0,.15,0);O.rotation.y=Math.PI/4,O.scale.z=.55,C.add(O);let B=W(new jt(.11,.26,4),d,0,.12,.06);B.rotation.y=Math.PI/4,B.scale.z=.4,C.add(B),L=.32}else if(i.ears==="fox"){C.position.set(w*.33,1,0);let O=W(new jt(.16,.46,4),a,0,.18,0);O.rotation.y=Math.PI/4,O.scale.z=.5,C.add(O);let B=W(new jt(.08,.18,4),U(16774380),0,.3,.01);B.rotation.y=Math.PI/4,B.scale.z=.5,C.add(B),L=.22}else if(i.ears==="mouse")C.position.set(w*.46,.92,-.02),C.add(he(.26,a,1,1,.45,0,.12,0)),C.add(he(.17,d,1,1,.4,0,.12,.07)),L=.34;else if(i.ears==="bunny")C.position.set(w*.26,1,-.02),C.add(he(.14,a,1,2.6,.55,0,.3,0)),C.add(he(.08,d,1,2.3,.5,0,.3,.06)),L=.14;else return;C.userData.base=L,C.rotation.z=-w*L,t.add(C),x.push(C)}),i.tail&&i.tail!=="none"){let w=new Re;if(w.position.set(0,.3,-.5),t.add(w),i.tail==="bunny")w.add(he(.14,U(16777215,{roughness:.9}),1,1,1,0,0,-.04));else if(i.tail==="cat"){let C=W(new mt(.2,.05,8,18,Math.PI*1.25),a,.12,.12,-.04);C.rotation.set(0,0,.3),w.add(C),w.add(he(.06,a,1,1,1,.34,.26,-.04))}else{let C=he(.2,a,.8,1.5,.8,.12,.14,-.06);C.rotation.z=-.7,w.add(C);let L=he(.1,U(16774380),.8,1.3,.8,.28,.3,-.06);L.rotation.z=-.7,w.add(L)}w.traverse(C=>{C.isMesh&&(C.castShadow=!1)})}let g=new Re;g.position.set(0,1.07,.02),t.add(g),i.topper==="pom"?(g.add(he(.11,U(ht.lav),1,1,1,-.1,.02,0)),g.add(he(.11,U(ht.lav),1,1,1,.1,.02,0)),g.add(he(.14,U(ht.lavDeep),1,1,1,0,.12,0)),g.add(he(.035,U(16777215,{emissive:16777215,emissiveIntensity:.4}),1,1,1,-.04,.2,.09))):i.ears==="none"&&(g.position.y=1.02,g.add(he(.1,a,1,1,1,0,.05,0)),g.add(he(.05,U(16777215),1,1,1,-.02,.1,.05)));let m=new Re;t.add(m);let p=new Jt({color:ht.ink,roughness:.25}),T=new ot({color:16777215}),M=[];[-1,1].forEach(w=>{let C=w*.21,L=.66,O=u(C,L)-.02,B=new Re;B.position.set(C,L,O);let Q=new Re,ae=i.eyes==="stars"?1.2:i.eyes==="big"?1.38:1;Q.add(he(.105*ae,p,1,i.eyes==="dot"&&!i.mika?1.1:i.eyes==="sleepy"?.62:1.28,.55,0,0,0));let ue=he(.036*ae,T,1,1,1,.035,.07,.07);ue.castShadow=!1,Q.add(ue);let ce=he(.018*ae,T,1,1,1,-.035,-.06,.07);if(ce.castShadow=!1,Q.add(ce),i.eyes==="stars"){let me=he(.02,T,1,1,1,.045,-.04,.075);me.castShadow=!1,Q.add(me)}B.add(Q);let V=new ut(new mt(.075,.02,8,20,Math.PI),p);V.position.y=-.03,V.visible=!1,B.add(V);let k=new ut(new mt(.075,.02,8,20,Math.PI),p);k.rotation.z=Math.PI,k.position.y=.03,k.visible=!1,B.add(k);let J=new ut(new ln(_i(.24),{depth:.03,bevelEnabled:!1}),new ot({color:16732058}));J.position.z=.02,J.visible=!1,B.add(J);let oe=W(ge(.17,.035,.04,.015),p,0,.18,.04);oe.visible=!1,oe.castShadow=!1,B.add(oe),m.add(B),M.push({g:B,open:Q,happy:V,closed:k,heart:J,brow:oe,s:w})});let v=[-1,1].map(w=>{let C=he(.085,U(16748480,{roughness:.9}),1.2,.72,.3,w*.37,.5,u(w*.37,.5)-.03);return C.castShadow=!1,m.add(C),C}),R=.47,b=u(0,R)-.005,A={};A.smile=new ut(new mt(.05,.015,8,16,Math.PI),p),A.smile.rotation.z=Math.PI,A.smile.position.set(0,R+.045,b),A.frown=new ut(new mt(.05,.015,8,16,Math.PI),p),A.frown.position.set(0,R-.02,b),A.open=he(.075,new Jt({color:8004178,roughness:.5}),1,.9,.35,0,R,b-.01),A.open.add(he(.04,U(16748451),1.3,.7,.4,0,-.04,.03)),A.o=he(.035,new Jt({color:8004178}),1,1.2,.4,0,R,b-.005),Object.keys(A).forEach(w=>{A[w].visible=!1,A[w].castShadow=!1,m.add(A[w])});let _=new Jt({color:9362431,roughness:.1,transparent:!0,opacity:.85}),P=he(.04,_,.8,1.2,.8,-.27,.56,u(-.27,.56)+.01);P.visible=!1,m.add(P);let N=he(.045,_,.8,1.25,.8,.46,.98,.25);N.visible=!1,t.add(N);let z=[-1,1].map(w=>{let C=new Re;return C.position.set(w*.6,.5,.08),C.add(he(.14,o,1.15,.7,.75,w*.06,0,0)),t.add(C),C}),Z=[-1,1].map(w=>{let C=he(.16,o,1,.6,1.25,w*.25,.08,.2);return e.add(C),C}),F={};F.scarf=new Re;{let w=W(new mt(.4,.085,12,32),U(ht.pink),0,.36,.12);w.rotation.x=Math.PI/2.1,w.scale.set(1.12,1,1),F.scarf.add(w);let C=W(ge(.14,.34,.06,.03),U(16740270),.28,.2,.46);C.rotation.z=.15,F.scarf.add(C)}F.bow=new Re;{let w=U(16740270),C=he(.1,w,1.4,.8,.5,-.11,0,0),L=he(.1,w,1.4,.8,.5,.11,0,0);C.rotation.z=.5,L.rotation.z=-.5,F.bow.add(C,L,he(.055,U(16757713),1,1,.8,0,0,.02)),F.bow.position.set(-.4,1.17,.12),F.bow.rotation.z=.2}F.crown=new Re;{let w=U(ht.sun,{metalness:.3,roughness:.4});F.crown.add(W(new Ye(.2,.22,.12,20,1,!0),w,0,0,0));for(let C=0;C<5;C++){let L=C/5*Math.PI*2;F.crown.add(W(new jt(.06,.16,8),w,Math.cos(L)*.2,.12,Math.sin(L)*.2))}F.crown.position.set(0,1.12,.03)}F.glasses=new Re,[-1,1].forEach(w=>{F.glasses.add(W(new mt(.13,.016,8,24),p,w*.21,.66,u(w*.21,.66)+.04))}),F.glasses.add(W(ge(.1,.018,.02,.008),p,0,.67,u(0,.67)+.04)),F.hat=new Re,F.hat.add(W(new jt(.3,.7,20),U(8150271),0,.38,0)),F.hat.add(W(new Ye(.46,.46,.05,28),U(5980118),0,.02,0)),F.hat.add(he(.045,U(ht.sun,{emissive:16764735,emissiveIntensity:.6}),1,1,1,0,.74,0)),F.hat.position.set(0,1.1,0),F.hat.rotation.z=.12,F.wings=new Re;{let w=U(16777215,{roughness:.6});[-1,1].forEach(C=>{let L=he(.3,w,.5,1,.18,C*.55,.62,-.35);L.rotation.z=C*-.5,F.wings.add(L)})}F.pj=new Re,F.pj.add(he(.34,U(9347839),1.05,.7,1,0,.1,0)),F.pj.add(he(.075,U(16777215),1,1,1,.3,.12,.2)),F.pj.position.set(0,1,0),F.pj.rotation.z=-.1,F.beanie=new Re;{F.beanie.add(he(.38,U(16740238),1.05,.62,1,0,.05,0));let w=W(new mt(.36,.07,10,28),U(16777215),0,-.04,0);w.rotation.x=Math.PI/2,F.beanie.add(w),F.beanie.add(he(.09,U(16777215),1,1,1,0,.36,0)),F.beanie.position.set(0,1,0)}F.flower=new Re;{for(let w=0;w<5;w++){let C=w/5*Math.PI*2;F.flower.add(he(.07,U(16757713),1,1,.6,Math.cos(C)*.09,Math.sin(C)*.09,0))}F.flower.add(he(.055,U(ht.sun),1,1,.8,0,0,.03)),F.flower.position.set(.36,1.08,.18),F.flower.rotation.z=-.3}F.bowtie=new Re;{let w=U(14697851);F.bowtie.add(he(.1,w,1.5,.9,.6,-.12,0,0),he(.1,w,1.5,.9,.6,.12,0,0),he(.05,U(16765411),1,1,.8,0,0,.02)),F.bowtie.position.set(0,.34,.5)}F.mortar=new Re;{let w=U(2759518);F.mortar.add(W(new Ye(.26,.3,.16,20),w,0,.04,0)),F.mortar.add(W(ge(.8,.04,.8,.01),w,0,.15,0)),F.mortar.add(W(new Ye(.012,.012,.3,6),U(ht.sun),.28,0,.28)),F.mortar.add(he(.05,U(ht.sun),1,1,1,.28,-.14,.28)),F.mortar.position.set(0,1.08,0)}F.labcoat=new Re;{let w=U(16777215,{roughness:.7});F.labcoat.add(he(.58,w,1.12,.7,1.05,0,.42,-.02)),F.labcoat.add(he(.07,U(14697851),1,1,.6,.26,.42,.52)),F.labcoat.add(he(.07,U(14697851),1,1,.6,.26,.26,.54))}F.shades=new Re;{let w=U(1906240,{roughness:.2});[-1,1].forEach(C=>{F.shades.add(he(.14,w,1.05,.82,.3,C*.21,.66,u(C*.21,.66)+.05))}),F.shades.add(W(ge(.12,.025,.03,.01),w,0,.68,u(0,.68)+.06))}F.phones=new Re;{let w=U(16748480),C=U(16777215),L=W(new mt(.5,.045,8,28,Math.PI),w,0,0,0);L.rotation.z=0,F.phones.add(L),[-1,1].forEach(O=>{let B=W(new Ye(.15,.15,.12,18),C,O*.5,-.02,0);B.rotation.z=Math.PI/2,F.phones.add(B),F.phones.add(he(.08,w,1,1,.5,O*.56,-.02,0))}),F.phones.position.set(0,.62,.02)}F.bunny=new Re;{let w=U(16777215),C=U(16757713);[-1,1].forEach(O=>{let B=he(.1,w,1,3.2,.5,O*.2,.34,0);B.rotation.z=-O*.18,F.bunny.add(B);let Q=he(.055,C,1,2.6,.5,O*.2,.34,.04);Q.rotation.z=-O*.18,F.bunny.add(Q)});let L=W(new mt(.34,.035,8,24),C,0,0,0);L.rotation.x=Math.PI/2,F.bunny.add(L),F.bunny.position.set(0,1.06,.02)}F.cape=new Re;{let w=U(14697851);F.cape.add(he(.5,w,1.1,1.15,.2,0,.52,-.5));let C=W(new mt(.34,.07,10,28),U(16765411),0,.3,.05);C.rotation.x=Math.PI/2.2,F.cape.add(C)}F.bandana=new Re;{let w=U(16734830),C=W(new mt(.43,.06,10,28),w,0,0,0);C.rotation.x=Math.PI/2.15,F.bandana.add(C),F.bandana.add(he(.09,w,1.3,1,.8,.33,-.04,.2)),F.bandana.add(he(.05,U(16777215),1,1,1,0,.02,.43)),F.bandana.position.set(0,.94,0)}Object.keys(F).forEach(w=>{F[w].visible=!1,t.add(F[w])});{let w=dc(i.color,.42).getHex(),C=[];t.traverse(L=>{L.isMesh&&L.parent&&(L.material===a||L.material===o)&&C.push(L)}),Z.forEach(L=>C.push(L)),C.forEach(L=>ex(L,w))}e.traverse(w=>{w.isMesh&&(w.receiveShadow=!1)});let E={emo:"neutral",talking:!1,vy:0,y:0,squash:0,yaw:0,yawT:0,blinkT:0,nextBlink:1.5+Math.random()*2,look:new Ee,lookT:new Ee,nextLook:1,armsT:0,sleeping:!1},I={root:e,st:E,fx:null,baseY:0,roll:0};function q(w){let C=i.eyes==="happy"&&!i.mika;w.open.visible=!C,w.happy.visible=C,w.closed.visible=!1,w.heart.visible=!1,w.brow.visible=!1,w.g.scale.set(1,1,1)}return I.setAccessories=w=>{Object.keys(F).forEach(C=>{F[C].visible=w.indexOf(C)>=0})},I.setEmotion=w=>{E.emo=w,E.armsT=0,E.sleeping=!1,M.forEach(q),Object.keys(A).forEach(L=>{A[L].visible=!1}),P.visible=!1,N.visible=!1;let C=M;w==="happy"?(C.forEach(L=>{L.open.visible=!1,L.happy.visible=!0}),A.open.visible=!0,A.open.scale.set(1.05,.8,.35)):w==="love"?(C.forEach(L=>{L.open.visible=!1,L.heart.visible=!0}),A.open.visible=!0,E.armsT=1):w==="wow"?(C.forEach(L=>{L.g.scale.set(1.18,1.18,1)}),A.o.visible=!0):w==="sad"?(C.forEach(L=>{L.brow.visible=!0,L.brow.rotation.z=-L.s*.45}),A.frown.visible=!0,P.visible=!0):w==="worry"?(C.forEach(L=>{L.brow.visible=!0,L.brow.rotation.z=-L.s*.4}),A.o.visible=!0,A.o.scale.set(.8,1,.4),N.visible=!0):w==="proud"?(C.forEach(L=>{L.open.visible=!1,L.happy.visible=!0}),A.open.visible=!0,A.open.scale.set(1.2,1,.35),E.armsT=.5,I.fx&&I.fx("star",5)):w==="shy"?(C.forEach(L=>{L.open.visible=!1,L.closed.visible=!0}),A.smile.visible=!0,E.yawT=.5):w==="sleep"?(C.forEach(L=>{L.open.visible=!1,L.closed.visible=!0}),A.o.visible=!0,A.o.scale.set(.6,.7,.4),E.sleeping=!0):A.smile.visible=!0,v.forEach(L=>L.scale.set(w==="shy"||w==="love"?1.6:1.2,w==="shy"?.95:.72,.3))},I.hop=w=>{E.y<.05&&(E.vy=w||4.2,E.squash=-.2)},I.setTalking=w=>{E.talking=!!w},I.look=(w,C)=>E.lookT.set(w,C),I.face=w=>{E.yawT=w},I.update=(w,C,L,O)=>{(E.y>0||E.vy>0)&&(E.vy-=16*w,E.y+=E.vy*w,E.y<=0&&(E.y=0,E.vy<-1&&(E.squash=.18),E.vy=0)),E.squash+=(0-E.squash)*Math.min(1,w*10),e.position.y=(I.baseY||0)+E.y+(L?Math.abs(Math.sin(C*9))*.07:0),E.yaw+=(E.yawT-E.yaw)*Math.min(1,w*5),e.rotation.y=E.yaw,e.rotation.z=(L?Math.sin(C*9)*.08:0)+(I.roll||0);let B=E.sleeping?.04*Math.sin(C*1.4):.022*Math.sin(C*2.3);t.scale.set((1-E.squash*.5-B*.5)*s,(1+E.squash+B)*r,(1-E.squash*.5)*s),Z.forEach((ue,ce)=>{ue.position.y=.08+(L?Math.max(0,Math.sin(C*9+ce*Math.PI))*.06:0)});let Q=E.emo==="sad"||E.emo==="worry"?.35:0;x.forEach((ue,ce)=>{let V=ce?1:-1;ue.rotation.z=-V*((ue.userData.base||.28)+(E.talking?.1:0)+Q)+Math.sin(C*1.7+ce)*.05}),g.rotation.z=Math.sin(C*2.1)*.12,g.rotation.x=Math.sin(C*1.6)*.06,z.forEach((ue,ce)=>{let V=ce?1:-1;ue.rotation.z=V*-(.2+E.armsT*1.6)+(L?Math.sin(C*9+ce*3)*.3:Math.sin(C*2+ce)*.06),ue.position.y=.5+E.armsT*.28}),!O&&C>E.nextLook&&(E.lookT.set((Math.random()-.5)*1.4,(Math.random()-.5)*.8),E.nextLook=C+1.5+Math.random()*2.5),E.look.lerp(E.lookT,Math.min(1,w*6)),M.forEach(ue=>{ue.open.position.x=E.look.x*.022,ue.open.position.y=E.look.y*.018}),!E.sleeping&&C>E.nextBlink&&(E.blinkT=.13,E.nextBlink=C+2+Math.random()*3.5),E.blinkT=Math.max(0,E.blinkT-w);let ae=E.blinkT>0?.1:1;if(M.forEach(ue=>{ue.open.visible&&(ue.open.scale.y+=(ae-ue.open.scale.y)*Math.min(1,w*40))}),E.talking){let ue=.55+Math.abs(Math.sin(C*13))*.7;Object.keys(A).forEach(ce=>{A[ce].visible=ce==="open"}),A.open.scale.set(1,ue,.35)}else{let ue=["happy","love","proud"].indexOf(E.emo)>=0;A.open.visible&&!ue&&(A.open.visible=!1),!ue&&!Object.keys(A).some(ce=>A[ce].visible)&&(A.smile.visible=!0)}if(P.visible){let ue=C*.35%1;P.position.y=.56-ue*.18,P.material.opacity=.85*(1-ue)}N.visible&&(N.position.y=.98+Math.sin(C*3)*.02),E.sleeping&&I.fx&&Math.random()<w*.7&&I.fx("z",1)},I.dispose=()=>{e.traverse(w=>{w.isMesh&&w.geometry.dispose()}),e.parent&&e.parent.remove(e)},I.setEmotion("neutral"),I.setAccessories(i.acc||[]),I}function Ou(){let i=Ct(128,128,(t,n,s)=>{let r=t.createRadialGradient(64,64,4,64,64,62);r.addColorStop(0,"rgba(70,40,120,.38)"),r.addColorStop(1,"rgba(70,40,120,0)"),t.fillStyle=r,t.fillRect(0,0,n,s)}),e=new ut(new Lt(1.5,1.5),new ot({map:i,transparent:!0,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.012,e}var Eu={};function gc(i){return Eu[i]||(Eu[i]=Ru(i))}function Rs(i){let e=[];return{emit(t,n,s,r){let a=r||1;for(let o=0;o<n;o++){let l=new wi(new li({map:gc(t),transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));l.position.set(s.x+(Math.random()-.5)*.9*a,s.y+1.1*a+Math.random()*.3,s.z+.3),l.scale.setScalar((.22+Math.random()*.14)*a),l.renderOrder=10,i.add(l),e.push({s:l,vx:(Math.random()-.5)*.7,vy:t==="drop"?-.2:.8+Math.random()*.6,life:0,max:1.6+Math.random()*.6,delay:o*.09})}},update(t){for(let n=e.length-1;n>=0;n--){let s=e[n];if(s.delay-=t,s.delay>0)continue;s.life+=t;let r=s.life/s.max;s.s.position.x+=s.vx*t,s.s.position.y+=s.vy*t*(1-r*.5),s.s.material.opacity=r<.15?r/.15:Math.max(0,1-(r-.15)/.85),s.life>=s.max&&(i.remove(s.s),s.s.material.dispose(),e.splice(n,1))}}}}function Cs(i){i.add(new ps(16777215,16766696,1.15));let e=new gs(16777215,1.3);return e.position.set(-3,6,5),i.add(e),e}var Bu={plushbear:{p:[-1.7,1.02,-2.75],r:.5},neon:{p:[2.9,3.3,-4.1],r:0},beanbag:{p:[-5.2,0,.1],r:.3},aquarium:{p:[-6.2,0,-.5],r:Math.PI/2},arcade:{p:[6.3,0,-.2],r:-Math.PI/2},poster:{p:[-7.03,2.6,1.6],r:Math.PI/2},catbed:{p:[-2,0,1.9],r:.4},disco:{p:[1.2,3.3,.8],r:0},bookshelf:{p:[-6.75,0,2.9],r:Math.PI/2},cloud:{p:[-2.6,3.2,.4],r:0},piano:{p:[5.3,0,2.7],r:-.5},starrug:{p:[3.4,0,1],r:.3}},Ui={plushbear(){let i=new Re,e=U(14264428);return i.add(he(.26,e,1,1,.95,0,.26,0)),i.add(he(.2,e,1,1,.95,0,.62,.02)),i.add(he(.08,e,1,1,.6,-.15,.78,0)),i.add(he(.08,e,1,1,.6,.15,.78,0)),i.add(he(.08,U(16112048),1,.8,.7,0,.58,.17)),i.add(he(.03,U(ht.ink),1,1,1,0,.6,.23)),i.add(he(.025,U(ht.ink),1,1,1,-.07,.68,.17)),i.add(he(.025,U(ht.ink),1,1,1,.07,.68,.17)),i.add(he(.07,e,1,1.3,1,-.28,.25,.08)),i.add(he(.07,e,1,1.3,1,.28,.25,.08)),i.add(W(ge(.3,.07,.04,.02),U(16740270),0,.42,.2)),i},neon(){let i=new Re,e=new ut(new ln(_i(.8),{depth:.05,bevelEnabled:!1}),new ot({color:16743104})),t=new ut(new Lt(1.8,1.8),new ot({map:Ct(128,128,(n,s,r)=>{let a=n.createRadialGradient(64,64,4,64,64,62);a.addColorStop(0,"rgba(255,122,192,.55)"),a.addColorStop(1,"rgba(255,122,192,0)"),n.fillStyle=a,n.fillRect(0,0,s,r)}),transparent:!0,depthWrite:!1}));return t.position.z=-.02,i.add(t,e),i},beanbag(){let i=new Re,e=U(16752328),t=U(16761564);return i.add(he(.62,e,1,.78,1,0,.42,0)),i.add(he(.4,t,1,.62,1,.12,.8,.1)),i.add(he(.16,U(16777215),1,.6,1,-.3,.84,.3)),i},aquarium(){let i=new Re;i.add(W(ge(1.5,.7,.8,.06),U(ht.woodDark),0,.35,0)),i.add(W(ge(1.38,.08,.68,.03),U(16771512),0,.74,0,!1));let e=W(ge(1.4,.85,.7,.05),new Jt({color:9362431,transparent:!0,opacity:.38,roughness:.1,emissive:5224680,emissiveIntensity:.3}),0,1.2,0,!1);i.add(e);let t=[];[[16751178,0],[16765514,2],[16740270,4]].forEach((n,s)=>{let r=new Re;r.add(he(.1,U(n[0],{emissive:n[0],emissiveIntensity:.25}),1.4,1,.8,0,0,0));let a=W(new jt(.08,.14,4),U(n[0]),-.17,0,0,!1);a.rotation.z=Math.PI/2,r.add(a),r.add(he(.018,U(ht.ink),1,1,1,.1,.03,.07)),r.userData={ph:n[1],y:1.05+s*.17},i.add(r),t.push(r)});for(let n=0;n<4;n++)i.add(he(.03+n%2*.015,U(16777215,{transparent:!0,opacity:.8}),1,1,1,.5+n*.03,.9+n*.2,.1));return i.userData.fish=t,i},bookshelf(){let i=new Re,e=U(14858378);i.add(W(ge(1.9,2.5,.12,.04),U(13080688),0,1.25,-.2)),[-.93,.93].forEach(n=>i.add(W(ge(.08,2.5,.5,.03),e,n,1.25,0)));for(let n=0;n<4;n++)i.add(W(ge(1.9,.08,.5,.03),e,0,.04+n*.8,0));let t=[16748480,9362431,16765514,12166911,6153140,16758938];for(let n=0;n<3;n++){let s=-.8;for(let r=0;r<9&&s<.8;r++){let a=.1+(r*7+n*3)%4*.03,o=.5+(r*5+n)%3*.1;i.add(W(ge(a,o,.3,.02),U(t[(r+n*2)%t.length]),s+a/2,.08+n*.8+o/2+.04,.02)),s+=a+.04}}return i.add(he(.14,U(16777215),1,.9,1,.6,2.18,.05)),i.add(he(.05,U(ht.ink),1,1,1,.56,2.2,.17)),i.add(he(.05,U(ht.ink),1,1,1,.64,2.2,.17)),i},cloud(){let i=new Re,e=U(16777215,{emissive:16774870,emissiveIntensity:.7,roughness:.9});return i.add(he(.5,e,1.2,.8,1,0,0,0)),i.add(he(.38,e,1,.9,1,-.5,-.05,.05)),i.add(he(.42,e,1,.9,1,.5,-.03,-.05)),i.add(he(.3,e,1,.9,1,.1,.28,0)),i.add(W(new Ye(.012,.012,1.2,6),U(16777215),0,.9,0,!1)),i.add(he(.025,U(ht.ink),1,1,1,-.12,-.02,.45)),i.add(he(.025,U(ht.ink),1,1,1,.12,-.02,.45)),i.add(he(.05,U(16757713),1.4,.7,.4,-.25,-.1,.43)),i.add(he(.05,U(16757713),1.4,.7,.4,.25,-.1,.43)),i},piano(){let i=new Re,e=U(16752328);[[-.65,-.28],[.65,-.28],[-.65,.28],[.65,.28]].forEach(n=>i.add(W(ge(.1,.6,.1,.03),U(14858378),n[0],.3,n[1]))),i.add(W(ge(1.6,.34,.8,.08),e,0,.72,0)),i.add(W(ge(1.5,.05,.3,.02),U(16777215),0,.92,.22,!1));for(let n=0;n<8;n++)i.add(W(ge(.16,.04,.28,.01),U(16777215),-.65+n*.185,.95,.22,!1));[0,1,3,4,5].forEach(n=>i.add(W(ge(.09,.06,.17,.01),U(ht.ink),-.56+n*.185,.98,.15,!1))),i.add(W(ge(1.5,.5,.06,.03),e,0,1.12,-.32));let t=new ut(new ln(_i(.22),{depth:.02,bevelEnabled:!1}),U(16777215));return t.position.set(0,1.14,-.28),i.add(t),i},starrug(){let i=new Re,e=new Ri,t=10;for(let r=0;r<t;r++){let a=r%2?.55:1.25,o=r/t*Math.PI*2+Math.PI/2;r===0?e.moveTo(Math.cos(o)*a,Math.sin(o)*a):e.lineTo(Math.cos(o)*a,Math.sin(o)*a)}e.closePath();let n=new ut(new ln(e,{depth:.05,bevelEnabled:!0,bevelSize:.06,bevelThickness:.03,bevelSegments:3}),U(16769658));n.rotation.x=-Math.PI/2,n.position.y=.02,n.receiveShadow=!0,i.add(n);let s=new ut(new Ai(.32,24),U(16752328));return s.rotation.x=-Math.PI/2,s.position.y=.11,i.add(s),i},arcade(){let i=new Re;i.add(W(ge(.95,1.75,.85,.1),U(8150271),0,.88,0));let e=Ct(128,96,(n,s,r)=>{n.fillStyle="#1b1240",n.fillRect(0,0,s,r),n.fillStyle="#ff7ac0";for(let a=0;a<5;a++)n.beginPath(),n.arc(20+a*22,24,7,0,7),n.fill();n.fillStyle="#8edbff",n.fillRect(20,60,88,8),n.fillStyle="#ffe27a",n.fillRect(54,72,20,10)}),t=W(new Lt(.7,.52),new ot({map:e}),0,1.3,.43,!1);return t.rotation.x=-.12,i.add(t),i.add(W(ge(.8,.22,.12,.04),U(16769658,{emissive:16764735,emissiveIntensity:.5}),0,1.68,.4,!1)),i.add(W(ge(.9,.12,.5,.04),U(5980118),0,.78,.5)),i.add(W(new Ye(.025,.025,.16,8),U(16777215),-.2,.9,.5)),i.add(he(.06,U(16732058),1,1,1,-.2,1,.5)),i.add(he(.045,U(9362431),1,1,1,.12,.86,.5)),i.add(he(.045,U(16769658),1,1,1,.26,.86,.5)),i},poster(){let i=new Re;i.add(W(ge(1.3,1.8,.06,.03),U(16777215),0,0,0,!1));let e=Ct(128,180,(t,n,s)=>{let r=t.createLinearGradient(0,0,0,s);r.addColorStop(0,"#ffb3d1"),r.addColorStop(1,"#b9a6ff"),t.fillStyle=r,t.fillRect(0,0,n,s),t.fillStyle="#fff",t.beginPath(),t.arc(64,70,30,0,7),t.fill(),t.fillStyle="#ff5fa8",t.beginPath(),t.moveTo(64,92),t.bezierCurveTo(30,66,48,44,64,58),t.bezierCurveTo(80,44,98,66,64,92),t.fill(),t.fillStyle="#fff";for(let a=0;a<8;a++)t.beginPath(),t.arc(14+a*37%100,130+a*17%40,3,0,7),t.fill();t.fillRect(24,150,80,6)});return i.add(W(new Lt(1.14,1.64),new ot({map:e}),0,0,.04,!1)),i},catbed(){let i=new Re;i.add(W(new Ye(.62,.66,.22,28),U(16767400),0,.11,0));let e=W(new mt(.58,.12,10,28),U(16761466),0,.24,0);e.rotation.x=Math.PI/2,i.add(e),i.add(W(new Ye(.46,.46,.1,24),U(16752328),0,.2,0));let t=U(15902298);i.add(he(.26,t,1.2,.8,1,0,.42,0)),i.add(he(.17,t,1,1,1,.22,.52,.06)),[-1,1].forEach(s=>{let r=W(new jt(.06,.12,4),t,.26,.68,.06+s*.09,!1);i.add(r)}),i.add(he(.02,U(ht.ink),1,1,1,.37,.54,.02)),i.add(he(.02,U(ht.ink),1,1,1,.37,.54,.12));let n=W(new mt(.16,.04,8,14,4),t,-.3,.36,0,!1);return i.add(n),i},disco(){let i=new Re;i.add(W(new Ye(.012,.012,1.2,6),U(16777215),0,.6,0,!1));let e=Ct(128,64,(n,s,r)=>{for(let a=0;a<8;a++)for(let o=0;o<16;o++)n.fillStyle=["#ffffff","#cfe9ff","#ffd1e3","#e7ddff"][(o*3+a*5)%4],n.fillRect(o*8,a*8,7,7)}),t=he(.3,new Jt({map:e,emissive:16777215,emissiveIntensity:.35,metalness:.6,roughness:.25}),1,1,1,0,0,0);return i.add(t),i.userData.spin=t,i}},tx=Object.keys(Ui),mc=-2.6,zu=-3,Hn={fridge:[2.9,-2.45],pc:[4.4,-1.55],door:[6.3,-3],bath:[-6,-2.15],toilet:[-4.35,-2.45],bed:[mc+.45,zu+.05],plant0:[-.75,-2.55],plant1:[1.65,-2.55],lamp:[-.9,-1],fries:[4.3,-2]},nx=[[-3.95,-1.2,-4,-2.05],[-7.1,-4.85,-4,-2.7],[2.25,3.55,-4,-3],[3.4,5.45,-4,-2.95],[-1.15,-.3,-4,-3.05],[1.25,2.05,-4,-3.05],[-4.85,-4,-4,-3.05],[5.6,7.1,-4,-3.4]];function Tu(i,e){return i=Math.max(-6.6,Math.min(6.6,i)),e=Math.max(-3.4,Math.min(3.6,e)),nx.forEach(t=>{i>t[0]&&i<t[1]&&e>t[2]&&e<t[3]&&(e=t[3]+.2)}),[i,e]}function ix(i){let e=new Re;i.add(e);let t=Ct(512,512,(V,k,J)=>{V.fillStyle="#F2D8B8",V.fillRect(0,0,k,J);for(let oe=0;oe<8;oe++)V.fillStyle=oe%2?"#EFD0AB":"#F5DDBF",V.fillRect(0,oe*64,k,64),V.fillStyle="rgba(160,110,60,.22)",V.fillRect(0,oe*64,k,2);for(let oe=0;oe<26;oe++)V.fillStyle="rgba(160,110,60,.18)",V.fillRect(Math.random()*k,Math.floor(Math.random()*8)*64,2,64)});t.wrapS=t.wrapT=an,t.repeat.set(3,1.8),e.add(W(ge(14.6,.4,8.8,.12),U(16777215,{map:t}),0,-.2,.1));let n=(V,k)=>Ct(256,256,(J,oe,me)=>{J.fillStyle=V,J.fillRect(0,0,oe,me),J.fillStyle=k;for(let ye=0;ye<4;ye++)for(let Oe=0;Oe<4;Oe++)J.beginPath(),J.arc(32+Oe*64+ye%2*32,32+ye*64,5,0,7),J.fill()}),s=n("#E9DEFE","rgba(255,255,255,.85)");s.wrapS=s.wrapT=an,s.repeat.set(6,2.3);let r=n("#FFE3F1","rgba(255,255,255,.85)");r.wrapS=r.wrapT=an,r.repeat.set(3.4,2.3),e.add(W(ge(14.6,4.4,.3,.1),U(16777215,{map:s}),0,2.2,-4.3)),e.add(W(ge(.3,4.4,8.8,.1),U(16777215,{map:r}),-7.2,2.2,.1)),e.add(W(ge(14.4,.22,.1,.05),U(16777215),0,.12,-4.1)),e.add(W(ge(.1,.22,8.6,.05),U(16777215),-7,.12,.1));let a=Ct(128,128,(V,k,J)=>{for(let oe=0;oe<4;oe++)for(let me=0;me<4;me++)V.fillStyle=(me+oe)%2?"#DDF3FF":"#F4FBFF",V.fillRect(me*32,oe*32,32,32)});a.wrapS=a.wrapT=an,a.repeat.set(3,3),e.add(W(ge(3.2,.05,3.2,.02),U(16777215,{map:a}),-5.45,.03,-2.45,!1));let o=Ct(256,128,(V,k,J)=>{V.fillStyle="#DDF3FF",V.fillRect(0,0,k,J),V.strokeStyle="rgba(255,255,255,.9)",V.lineWidth=3;for(let oe=0;oe<=8;oe++)V.beginPath(),V.moveTo(oe*32,0),V.lineTo(oe*32,J),V.stroke();for(let oe=0;oe<=4;oe++)V.beginPath(),V.moveTo(0,oe*32),V.lineTo(k,oe*32),V.stroke()});e.add(W(new Lt(3.2,1.3),new ot({map:o}),-5.45,.8,-4.13,!1));let l=new Re;l.position.set(.2,2.45,-4.11),e.add(l);let c=new ot({map:Cu(new Date().getHours())});l.add(W(new Lt(1.7,1.55),c,0,0,.02,!1));let f=U(16777215);l.add(W(ge(1.95,.14,.2,.06),f,0,.85,.05)),l.add(W(ge(1.95,.14,.2,.06),f,0,-.85,.05)),l.add(W(ge(.14,1.8,.2,.06),f,-.92,0,.05)),l.add(W(ge(.14,1.8,.2,.06),f,.92,0,.05)),l.add(W(ge(.07,1.6,.12,.03),f,0,0,.06)),l.add(W(ge(1.75,.07,.12,.03),f,0,0,.06)),l.add(W(ge(2.2,.1,.4,.05),U(16777215),0,-.98,.18));let h=U(ht.pink),u=W(ge(.5,1.9,.14,.07),h,-1.2,0,.12);u.rotation.z=.05,l.add(u);let d=W(ge(.5,1.9,.14,.07),h,1.2,0,.12);d.rotation.z=-.05,l.add(d);let x=W(new Ye(.04,.04,2.9,10),U(ht.woodDark),0,1,.16);x.rotation.z=Math.PI/2,l.add(x);let g=new Re;g.position.set(0,0,.9),e.add(g),g.add(W(new Ye(2.5,2.5,.06,48),U(16765162),0,.03,0)),g.add(W(new Ye(2.15,2.15,.08,48),U(12448732),0,.035,0)),g.add(W(new Ye(1.5,1.5,.1,48),U(16774890),0,.04,0));let m=V=>V.traverse(k=>{k.isMesh&&(k.userData.root=V)}),p=new Re;p.position.set(mc,0,zu),p.userData.pick="bed",e.add(p),p.add(W(ge(2.5,.5,1.75,.12),U(14858634),0,.25,0)),p.add(W(ge(2.4,.4,1.65,.16),U(14273791),0,.68,0)),p.add(W(ge(1.65,.2,1.7,.1),U(12448732),.38,.92,0));let T=W(ge(.7,.25,.9,.12),U(16761052),-.78,.98,0);T.rotation.z=.08,p.add(T),p.add(W(ge(.14,1.4,1.75,.06),U(14858634),-1.3,.7,0)),m(p);let M=new Re;M.position.set(mc,3.05,-4.1),e.add(M),M.add(W(ge(.9,.9,.08,.05),U(16777215),0,0,0));let v=new ut(new ln(_i(.55),{depth:.04,bevelEnabled:!1}),U(ht.pink));v.position.set(0,.03,.05),M.add(v);let R=[];[[-.7,-3.45,.95],[1.65,-3.45,1.1]].forEach((V,k)=>{let J=new Re;J.position.set(V[0],0,V[1]),J.userData.pick="plant",J.userData.idx=k,e.add(J),J.add(W(new Ye(.42,.32,.6,20),U(k?12441855:16758938),0,.3,0));let oe=new Re;J.add(oe);let me=U(7659663);for(let Oe=0;Oe<7;Oe++){let et=Oe/7*Math.PI*2,se=he(.34,me,.55,1.25,.28,Math.cos(et)*.3,1+Oe%2*.22,Math.sin(et)*.3);se.rotation.z=Math.cos(et)*.5,se.rotation.x=Math.sin(et)*.5,oe.add(se)}oe.add(he(.32,U(6279290),1,1,1,0,1.15,0)),J.scale.setScalar(V[2]);let ye=new wi(new li({map:gc("drop"),transparent:!0,depthTest:!1,opacity:0}));ye.scale.setScalar(.5),ye.position.set(0,2.3,.3),ye.renderOrder=11,J.add(ye),m(J),R.push({g:J,leaves:oe,thirst:ye,pop:0})});let b=new Re;b.position.set(2.9,0,-3.5),b.userData.pick="fridge",e.add(b);let A=U(12448732,{emissive:10479304,emissiveIntensity:.2});b.add(W(ge(1.2,2.5,.9,.12),A,0,1.25,0)),b.add(W(ge(1.16,.06,.04,.02),U(8376238),0,1.55,.46,!1)),b.add(W(ge(.06,.5,.08,.03),U(16777215),.48,1.9,.48)),b.add(W(ge(.06,.7,.08,.03),U(16777215),.48,1,.48)),[-1,1].forEach(V=>b.add(he(.05,U(ht.ink),1,1.3,.6,V*.2,1.95,.46))),[-1,1].forEach(V=>b.add(he(.07,U(16748480),1.3,.7,.3,V*.34,1.86,.46,!1))),b.add(W(new mt(.05,.015,6,12,Math.PI),U(ht.ink),0,1.86,.47,!1).rotateZ(Math.PI));{let V=new ut(new ln(_i(.2),{depth:.02,bevelEnabled:!1}),U(16736168));V.position.set(-.3,1.1,.46),b.add(V)}m(b);let _=new Re;_.position.set(4.4,0,-3.5),_.userData.pick="pc",e.add(_),_.add(W(ge(1.9,.1,.9,.04),U(14858378),0,.85,0)),[-.8,.8].forEach(V=>_.add(W(ge(.1,.85,.8,.03),U(13080688),V,.42,0))),_.add(W(ge(.1,.35,.1,.03),U(16777215),0,1.07,-.12));let P=Ct(256,160,(V,k,J)=>{let oe=V.createLinearGradient(0,0,0,J);oe.addColorStop(0,"#9fdcff"),oe.addColorStop(1,"#d9ccff"),V.fillStyle=oe,V.fillRect(0,0,k,J),V.fillStyle="#fff",V.beginPath(),V.arc(70,46,22,0,7),V.arc(96,50,18,0,7),V.fill(),V.fillStyle="#5de3b4",V.beginPath(),V.arc(190,70,30,0,7),V.fill(),V.strokeStyle="#fff",V.lineWidth=4,V.beginPath(),V.arc(190,70,30,0,7),V.moveTo(160,70),V.lineTo(220,70),V.stroke(),V.fillStyle="#2a1b5e",V.font="800 22px sans-serif",V.fillText("MONDE",24,130)});_.add(W(ge(1.2,.8,.08,.05),U(16777215),0,1.5,-.12)),_.add(W(new Lt(1.06,.66),new ot({map:P}),0,1.5,-.075,!1)),_.add(W(ge(.7,.04,.24,.02),U(16765411),0,.92,.2,!1));let N=new Re;N.position.set(0,0,.8),N.add(W(new Ye(.34,.34,.12,20),U(16751300),0,.5,0)),N.add(W(new Ye(.05,.05,.5,8),U(16777215),0,.25,0)),N.add(W(ge(.6,.5,.1,.06),U(16751300),0,.85,-.3)),_.add(N),m(_);let z=new Re;z.position.set(6.3,0,-4.08),z.userData.pick="door",e.add(z),z.add(W(ge(1.55,2.95,.12,.06),U(16777215),0,1.47,0)),z.add(W(ge(1.2,2.7,.1,.08),U(16751300),0,1.35,.07)),z.add(he(.07,U(16765514,{metalness:.4,roughness:.4}),1,1,1,.38,1.3,.16));{let V=new ut(new ln(_i(.4),{depth:.03,bevelEnabled:!1}),U(16777215));V.position.set(0,1.85,.13),z.add(V)}let Z=Ct(256,96,(V,k,J)=>{V.fillStyle="#ffffff",V.fillRect(0,0,k,J),V.fillStyle="#7c5cff",V.font="800 44px sans-serif",V.textAlign="center",V.textBaseline="middle",V.fillText("\u2192 MONDE",128,50)});z.add(W(new Lt(1.2,.45),new ot({map:Z}),0,3.3,.04,!1)),z.add(W(ge(1.5,.05,.9,.02),U(16765162),0,.03,.8,!1)),m(z);let F=new Re;F.position.set(-6,0,-3.3),F.userData.pick="bath",e.add(F),F.add(W(ge(2.1,.75,1,.18),U(16777215),0,.38,0)),F.add(W(ge(1.8,.04,.72,.02),U(10477823,{emissive:6998261,emissiveIntensity:.3}),0,.72,0,!1));for(let V=0;V<9;V++)F.add(he(.1+V%3*.04,U(16777215),1,.8,1,-.7+V*.19%1.5,.78+V%2*.05,-.15+V%3*.14,!1));F.add(he(.1,U(16769354),1.1,.9,1,.55,.85,.1)),F.add(he(.04,U(16751178),1.4,.8,.8,.65,.85,.1)),F.add(W(new Ye(.04,.04,.4,8),U(13227743,{metalness:.5}),-.95,.95,-.3)),m(F);let E=new Re;E.position.set(-4.4,0,-3.6),E.userData.pick="toilet",e.add(E),E.add(W(ge(.5,.5,.3,.08),U(16777215),0,.6,-.15)),E.add(W(new Ye(.26,.2,.42,20),U(16777215),0,.22,.12)),E.add(W(new Ye(.28,.28,.06,20),U(16765411),0,.46,.14)),m(E);let I=Ct(256,96,(V,k,J)=>{V.fillStyle="#ffffff",V.fillRect(0,0,k,J),V.fillStyle="#3aa7e8",V.font="800 40px sans-serif",V.textAlign="center",V.textBaseline="middle",V.fillText("BAIN",128,50)});e.add(W(new Lt(1,.38),new ot({map:I}),-5.45,2.3,-4.12,!1));let q=new Re;q.position.set(4.4,3.15,-3.9),e.add(q),q.add(W(ge(2.4,.1,.5,.04),U(ht.woodDark),0,0,0)),[16748480,9362431,16769658,12166911,7659663].forEach((V,k)=>q.add(W(ge(.14,.55+k%3*.08,.3,.03),U(V),-1+k*.17,.35+k%3*.04,0)));let w=new Re;w.position.set(.75,.05,0),w.userData.pick="fries",q.add(w),w.add(W(ge(.36,.34,.36,.06),U(16734810),0,.17,0));for(let V=0;V<6;V++)w.add(W(ge(.07,.34,.07,.02),U(16765514),-.12+V%3*.12,.45,-.08+Math.floor(V/3)*.16));w.add(he(.025,U(ht.ink),1,1,1,-.07,.2,.19)),w.add(he(.025,U(ht.ink),1,1,1,.07,.2,.19)),m(w);let C=new Re;C.position.set(-.9,0,-1.6),C.userData.pick="lamp",e.add(C),C.add(W(new Ye(.28,.32,.08,20),U(ht.woodDark),0,.04,0)),C.add(W(new Ye(.04,.04,1.9,10),U(ht.woodDark),0,1,0));let L=new Jt({color:16773321,emissive:16761178,emissiveIntensity:0,roughness:.8});L.side=Qt,C.add(W(new Ye(.28,.45,.5,24,1,!0),L,0,2.15,0)),m(C),e.add(W(new Ye(.5,.52,.5,28),U(16761052),2.2,.25,1.6)),e.add(he(.52,U(16761052),1,.35,1,2.2,.5,1.6));let O=[];for(let V=0;V<27;V++){let k=V/26,J=-6.4+k*12.8,oe=3.95-Math.sin(k*Math.PI*3)*.2,me=new ot({color:[16773544,16757713,12448732,14273791][V%4]}),ye=he(.06,me,1,1,1,J,oe,-4.05);ye.castShadow=!1,ye.receiveShadow=!1,e.add(ye),O.push(ye)}let B=[],Q=Ru("star");for(let V=0;V<18;V++){let k=new wi(new li({map:Q,transparent:!0,opacity:0,depthWrite:!1}));k.scale.setScalar(.16+Math.random()*.1),k.userData={ph:Math.random()*6,sp:.25+Math.random()*.3,x:(Math.random()-.5)*12,z:(Math.random()-.5)*6},i.add(k),B.push(k)}let ae={},ue=[];Object.keys(Ui).forEach(V=>{let k=Ui[V](),J=Bu[V];k.position.set(J.p[0],J.p[1],J.p[2]),k.rotation.y=J.r,k.visible=!1,e.add(k),ae[V]=k,(k.userData.fish||k.userData.spin)&&ue.push(k)});function ce(V){ue.forEach(k=>{k.userData.fish&&k.userData.fish.forEach((J,oe)=>{let me=J.userData,ye=V*(.5+oe*.12)+me.ph;J.position.set(Math.sin(ye)*.5,me.y+Math.sin(ye*2)*.04,.05*Math.cos(ye)),J.rotation.y=Math.cos(ye)>0?0:Math.PI}),k.userData.spin&&(k.userData.spin.rotation.y=V*.6)})}return{skyMat:c,shadeMat:L,bulbs:O,dust:B,decor:ae,plants:R,update:ce,room:e}}function wu(i,e,t,n){e==="wave"?(i.hop(4.2),i.setEmotion("happy")):e==="heart"?(i.setEmotion("love"),i.hop(4.6),t.emit("heart",6,i.root.position,n)):e==="happy"?(i.setEmotion("happy"),i.hop(5)):e==="wow"?(i.setEmotion("wow"),i.hop(4)):e==="dance"&&(i.setEmotion("happy"),i.dance=2.4),setTimeout(()=>i.setEmotion("neutral"),2200)}function sx(i,e){e=e||{};let t;try{t=new kn({antialias:!0,alpha:!1,powerPreference:"low-power",preserveDrawingBuffer:!!e.preserve})}catch{return null}t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.shadowMap.enabled=!0,t.shadowMap.type=Pi;let n=t.domElement;n.className="scene3d",n.setAttribute("aria-hidden","true"),i.insertBefore(n,i.firstChild);let s=document.createElement("div");s.className="st3-ov",i.appendChild(s);let r=new Mn;r.background=new Qe(15984383);let a=new wt(30,1,.1,60),o=new G(1.3,4,8.2),l=new G(0,1,.3),c=0,f=new ps(16777215,16766696,1);r.add(f);let h=new gs(16777215,1.5);h.position.set(-3,7,5),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),Object.assign(h.shadow.camera,{left:-9,right:9,top:7,bottom:-6,near:1,far:22}),h.shadow.bias=-6e-4,r.add(h);let u=new jn(16761466,0,8,1.6);u.position.set(-.9,2.3,-1.4),r.add(u);let d=ix(r),x=Rs(r),g=tn(e.look||{mika:!0}),m=e.start||[.2,1];g.root.position.set(m[0],0,m[1]),g.root.scale.setScalar(1.3),r.add(g.root),g.root.traverse(K=>{K.isMesh&&(K.castShadow=!0)});let p=e.acc||[];g.setAccessories(p);let T=Ou();r.add(T),g.fx=(K,ie)=>x.emit(K,ie,g.root.position,1.3);let M={job:null,pending:null,target:new G(m[0],0,m[1]),nextWander:4,hold:0,busy:!1,lampOn:!1,lampT:0,lampTouched:!1,walkEmit:!1},v=!!e.visit,R=[[.2,1],[1,.1],[-1.4,.6],[2.4,-1.4],[-3.2,-.6],[3.8,-1.2],[-5.2,-.8],[-.6,-1.5],[4.8,1],[1.6,1.8],[-3.4,1.4],[5.5,-2.2]],b={},A=0,_=!0;function P(K){let ie=document.createElement("span");return ie.className="st3-n",ie.textContent=K,ie.style.opacity=1,s.appendChild(ie),ie}let N=e.label?P(e.label):null,z={me:null};function Z(K,ie,fe){K.b&&K.b.remove();let be=document.createElement("div");be.className="st3-b "+(fe||""),be.textContent=ie,s.appendChild(be),K.b=be,setTimeout(()=>{K.b===be&&(be.remove(),K.b=null)},Math.min(9e3,2600+ie.length*60))}let F={b:null},E={eat:{spot:Hn.fridge,dur:2.8,start(){g.face(0),g.setEmotion("happy"),g.setTalking(!0)},end(){g.setTalking(!1),g.fx("heart",5),g.setEmotion("love"),setTimeout(()=>g.setEmotion("neutral"),2200)}},hug:{spot:[.2,1.3],dur:2.6,start(){g.setEmotion("love"),g.hop(4.8),g.fx("heart",7),g.face(0)},end(){g.setEmotion("neutral")}},play:{spot:[.4,1.2],dur:3.2,tick(K){A>K.next&&(g.hop(4.2),g.fx("star",2),K.next=A+.55)},start(){g.setEmotion("happy")},end(){g.setEmotion("neutral")}},wash:{spot:Hn.bath,dur:3.6,tick(K){A>K.next&&(g.fx("bubble",2),K.next=A+.45)},start(){g.setEmotion("happy"),g.face(0)},end(){g.fx("star",5),g.setEmotion("love"),setTimeout(()=>g.setEmotion("neutral"),2e3)}},toilet:{spot:Hn.toilet,dur:2.4,start(){g.setEmotion("shy"),g.face(.4)},end(){g.fx("star",3),g.setEmotion("happy"),setTimeout(()=>g.setEmotion("neutral"),1600)}},water:{spot:Hn.plant0,dur:3,tick(K){A>K.next&&(x.emit("drop",2,{x:d.plants[K.idx||0].g.position.x,y:.6,z:d.plants[K.idx||0].g.position.z+.5},1),K.next=A+.4)},start(K){g.setEmotion("happy"),g.face(-.3),d.plants[K.idx||0].pop=1},end(){g.fx("heart",4),g.setEmotion("neutral")}},nap:{spot:Hn.bed,dur:7,start(){g.setEmotion("sleep"),g.face(.3)},tick(){g.baseY+=(1-g.baseY)*.08,g.roll+=(-1.25-g.roll)*.06},wake:!0,end(){g.setEmotion("happy"),g.hop(4.4),g.fx("star",5)}}};function I(K,ie){let fe=E[K];if(!fe)return;let be=fe.spot;K==="water"&&ie&&ie.idx!=null&&(be=Hn["plant"+ie.idx]),M.job={kind:K,J:fe,state:"go",until:0,next:0,idx:ie&&ie.idx,spot:be,ms:ie&&ie.ms},M.target.set(be[0],0,be[1]),M.hold=99,M.pending=null}function q(K){g.baseY+=(0-g.baseY)*Math.min(1,K*5),g.roll+=(0-g.roll)*Math.min(1,K*6)}function w(K,ie){let fe=tn(ie.look||As(ie.code));return fe.root.scale.setScalar(1.3),fe.root.position.set(ie.x||0,0,ie.z||1),r.add(fe.root),fe.root.traverse(be=>{be.isMesh&&(be.castShadow=!0)}),fe.fx=(be,H)=>x.emit(be,H,fe.root.position,1.3),ie.acc&&fe.setAccessories(ie.acc),{ch:fe,tx:ie.x||0,tz:ie.z||1,label:P(ie.nick||""),b:null}}let C={setEmotion:K=>g.setEmotion(K),setAccessories:K=>{p=K,g.setAccessories(K)},hop:K=>g.hop(K),setLook(K){let ie=g,fe=tn(K);fe.root.position.copy(ie.root.position),fe.root.scale.copy(ie.root.scale),fe.root.traverse(be=>{be.isMesh&&(be.castShadow=!0)}),r.add(fe.root),fe.fx=(be,H)=>x.emit(be,H,fe.root.position,1.3),fe.setAccessories(p),fe.setEmotion(ie.st.emo==="sleep"?"neutral":ie.st.emo),ie.dispose(),g=fe,M.job=null,fe.hop(4)},act(K,ie,fe){if(K==="rumble"){g.setEmotion("worry"),setTimeout(()=>g.setEmotion("neutral"),2200);return}v||I(K,Object.assign({ms:ie},fe||{}))},goTo(K){let ie=Hn[K];ie&&(M.target.set(ie[0],0,ie[1]),M.hold=3)},debug(){return{roll:g.roll,baseY:g.baseY,job:M.job?M.job.kind+":"+M.job.state:null}},walkTo(K,ie){let fe=Tu(K,ie);M.target.set(fe[0],0,fe[1]),M.hold=6,M.job=null,M.pending=null},talking(K){g.setTalking(K),K&&!v&&!M.job&&(M.target.set(.2,0,1.2),g.face(0),M.hold=2.5)},look(K,ie){g.look(K,ie)},busy(K){M.busy=!!K,K&&!M.job&&(M.target.set(.2,0,1.2),M.hold=3)},emit(K,ie){g.fx(K,ie)},emote(K){wu(g,K,x,1.3)},say(K,ie){Z(F,K,ie||"mk"),g.setTalking(!0),setTimeout(()=>g.setTalking(!1),Math.min(2800,700+K.length*40))},setDecor(K){Object.keys(d.decor).forEach(ie=>{d.decor[ie].visible=K.indexOf(ie)>=0})},setPlants(K){d.plantLevel=Math.max(0,Math.min(1,K))},pos(){return{x:g.root.position.x,z:g.root.position.z}},addGuest(K,ie){b[K]||(b[K]=w(K,ie),b[K].ch.hop(4))},moveGuest(K,ie,fe){let be=b[K];be&&(be.tx=ie,be.tz=fe)},guestEmote(K,ie){let fe=b[K];fe&&wu(fe.ch,ie,x,1.3)},guestSay(K,ie){let fe=b[K];fe&&(fe.ch.hop(3.4),fe.ch.setTalking(!0),setTimeout(()=>fe.ch.setTalking(!1),Math.min(2600,700+ie.length*40)),Z(fe,ie,"me"))},removeGuest(K){let ie=b[K];ie&&(ie.ch.dispose(),ie.label.remove(),ie.b&&ie.b.remove(),delete b[K])},guestCount:()=>Object.keys(b).length,destroy(){_=!1,Object.keys(b).forEach(K=>C.removeGuest(K)),t.dispose(),t.forceContextLoss&&t.forceContextLoss(),n.parentNode&&n.parentNode.removeChild(n),s.remove()}},L=new xs,O=new Ee,B=new $t(new G(0,1,0),0),Q=new G,ae=null,ue=!1,ce=new Ee,V=new Ee;n.style.touchAction="none";let k=K=>{let ie=n.getBoundingClientRect();return O.set((K.clientX-ie.left)/ie.width*2-1,-((K.clientY-ie.top)/ie.height)*2+1),O},J=K=>i.dispatchEvent(new CustomEvent("mika3d",{detail:K}));n.addEventListener("pointerdown",K=>{ae={x:K.clientX,y:K.clientY}}),n.addEventListener("pointermove",K=>{if(K.pointerType==="touch")return;let ie=k(K);V.set(ie.x*.5,ie.y*.25),ue=!0,g.look(ie.x*.9,-ie.y*.6)}),n.addEventListener("pointerleave",()=>{V.set(0,0),ue=!1}),n.addEventListener("pointerup",K=>{if(!ae||Math.hypot(K.clientX-ae.x,K.clientY-ae.y)>8){ae=null;return}ae=null,k(K),L.setFromCamera(O,a);for(let ie of L.intersectObjects(r.children,!0)){let fe=ie.object,be=null,H=null;for(;fe;){if(fe===g.root){be="mika";break}if(fe.userData&&fe.userData.pick){be=fe.userData.pick,H=fe;break}if(fe.userData&&fe.userData.root&&fe.userData.root.userData.pick){H=fe.userData.root,be=H.userData.pick;break}fe=fe.parent}if(!be)continue;if(be==="mika"){g.hop(4.6),g.setEmotion("happy"),setTimeout(()=>g.setEmotion("neutral"),1200),J({name:"mika"});return}if(be==="lamp"){M.lampOn=!M.lampOn,M.lampTouched=!0,J({name:"lamp"});return}if(be==="fries"){J({name:"fries"});return}if(v)continue;let st=be==="plant"?"plant"+(H.userData.idx||0):be,Ke=Hn[st];if(Ke){M.job=null,M.target.set(Ke[0],0,Ke[1]),M.hold=99,M.pending={name:be,idx:H.userData.idx};return}}if(L.ray.intersectPlane(B,Q)){let ie=Tu(Q.x,Q.z);v||(M.job=null,M.pending=null,M.target.set(ie[0],0,ie[1]),M.hold=8),J({name:"walk",x:ie[0],z:ie[1]})}});function oe(){let K=i.clientWidth||360,ie=i.clientHeight||360;t.setSize(K,ie,!1),n.style.width="100%",n.style.height="100%",a.aspect=K/ie,a.fov=K/ie<.9?38:30,a.updateProjectionMatrix()}new ResizeObserver(oe).observe(i),oe();let me=-1;function ye(){let K=new Date().getHours();if(K===me)return;me=K,d.skyMat.map.dispose(),d.skyMat.map=Cu(K),d.skyMat.needsUpdate=!0;let ie=K<6||K>=21,fe=K>=18&&K<21;r.background.set(ie?2827104:fe?16765120:15984383),f.intensity=ie?.55:fe?.85:1.05,f.color.set(ie?9406207:fe?16767426:16777215),h.intensity=ie?.35:fe?1:1.5,h.color.set(ie?10135295:fe?16757642:16777215),(ie||fe)&&!M.lampTouched&&(M.lampOn=!0),d.dust.forEach(be=>{be.material.map=gc(ie?"star":"heart"),be.material.opacity=0})}ye();let Oe=setInterval(ye,6e4),et=!0,se=new Fn,xe=new G,Me=new G;"IntersectionObserver"in window&&new IntersectionObserver(K=>{et=K[0].isIntersecting},{threshold:.01}).observe(i);function Se(K,ie,fe){Me.set(ie.x,ie.y+fe,ie.z).project(a);let be=i.clientWidth,H=i.clientHeight,st=(K.offsetWidth||40)/2+4;K.style.left=Math.max(st,Math.min(be-st,(Me.x*.5+.5)*be))+"px",K.style.top=(-Me.y*.5+.5)*H+"px"}d.plantLevel=1;function we(){if(!_){clearInterval(Oe);return}if(requestAnimationFrame(we),!et||document.hidden){se.getDelta();return}let K=Math.min(.05,se.getDelta());A+=K;let ie=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;M.hold=Math.max(0,M.hold-K);let fe=g.st,be=g.root.position,H=M.target.x-be.x,st=M.target.z-be.z,Ke=Math.hypot(H,st);if(M.job){let X=M.job;X.state==="go"&&Ke<.12?(X.state="do",X.until=A+(X.ms?X.ms/1e3:X.J.dur),X.J.start&&X.J.start(X)):X.state==="do"?(X.J.tick&&X.J.tick(X),A>X.until&&(X.J.end&&X.J.end(X),X.J.wake?(X.state="wake",X.until=A+.9):(i.dispatchEvent(new CustomEvent("mika3d",{detail:{name:"done-"+X.kind}})),M.job=null,M.hold=2))):X.state==="wake"&&(q(K),A>X.until&&(g.baseY=0,g.roll=0,i.dispatchEvent(new CustomEvent("mika3d",{detail:{name:"done-"+X.kind}})),M.job=null,M.hold=2,M.target.set(Hn.bed[0]+1.6,0,Hn.bed[1]+1.4)))}else if(M.pending&&Ke<.12){let X=M.pending;M.pending=null,M.hold=1.5,g.face(0),i.dispatchEvent(new CustomEvent("mika3d",{detail:{name:X.name,idx:X.idx}}))}if(!v&&!ie&&!fe.sleeping&&!M.busy&&!fe.talking&&!M.job&&!M.pending&&M.hold<=0&&A>M.nextWander){let X=R[Math.floor(Math.random()*R.length)];M.target.set(X[0],0,X[1]),M.nextWander=A+5+Math.random()*6}(!M.job||M.job.state==="go")&&(Math.abs(g.roll)>.002||Math.abs(g.baseY)>.002?q(K):(g.roll=0,g.baseY=0));let D=!1;if(Ke>.06){D=!0;let X=Math.min(Ke,(fe.talking?1.6:M.hold>3?2:1.4)*K);be.x+=H/Ke*X,be.z+=st/Ke*X,g.face(Math.atan2(H,st)*.7)}else!fe.talking&&fe.emo!=="shy"&&!(M.job&&M.job.kind==="nap")&&g.face(0);g.dance>0&&(g.dance-=K,fe.y<.02&&g.hop(3.2),g.face(Math.sin(A*10)*.8)),g.update(K,A,D,ue),T.position.set(be.x,.012,be.z+.02);let y=Math.max(.5,1-fe.y*.4)*1.3;T.scale.set(y*(1.05+fe.squash),y*(1.05+fe.squash),1),T.material.opacity=g.baseY>.3?0:Math.max(.35,1-fe.y*.7),Object.keys(b).forEach(X=>{let ne=b[X],ve=ne.ch.root.position,Te=ne.tx-ve.x,le=ne.tz-ve.z,de=Math.hypot(Te,le),Ae=!1;if(ne.ch.dance>0)ne.ch.dance-=K,ne.ch.st.y<.02&&ne.ch.hop(3.2),ne.ch.face(Math.sin(A*10)*.8);else if(de>.06){Ae=!0;let Ge=Math.min(de,2*K);ve.x+=Te/de*Ge,ve.z+=le/de*Ge,ne.ch.face(Math.atan2(Te,le)*.7)}else ne.ch.face(0);ne.ch.update(K,A+X.length,Ae,!1),Se(ne.label,ve,-.12),ne.b&&Se(ne.b,ve,2.35)}),N&&Se(N,be,-.12),F.b&&Se(F.b,be,2.35+(g.baseY||0)),x.update(K),d.update(A),d.plants.forEach((X,ne)=>{let ve=1-d.plantLevel;X.pop=Math.max(0,X.pop-K*.8),X.leaves.scale.set(1+X.pop*.15,1-ve*.38+X.pop*.12,1+X.pop*.15),X.leaves.rotation.z=Math.sin(A*1.3+ne)*.02+ve*.12,X.thirst.material.opacity=ve>.6?.6+.4*Math.sin(A*4):0,X.thirst.position.y=2.3+Math.sin(A*3)*.08}),d.dust.forEach(X=>{let ne=X.userData,ve=(A*ne.sp*.3+ne.ph)%1;X.position.set(ne.x+Math.sin(A*ne.sp+ne.ph)*.4,.9+ve*3,ne.z),X.material.opacity=.55*Math.sin(ve*Math.PI),X.material.rotation=A*.3+ne.ph}),d.bulbs.forEach((X,ne)=>X.scale.setScalar(.85+.25*Math.sin(A*2.4+ne*1.3))),M.lampT+=((M.lampOn?1:0)-M.lampT)*Math.min(1,K*4),u.intensity=M.lampT*2.2,d.shadeMat.emissiveIntensity=M.lampT*1.3,c+=((v?0:Math.max(-4.3,Math.min(4.3,be.x*.85)))-c)*Math.min(1,K*2.2),ce.lerp(ue?V:xe.set(Math.sin(A*.25)*.2,Math.sin(A*.18)*.08,0),Math.min(1,K*3));let j=v?1.5:1;a.position.set(c+(v?0:1)+ce.x,o.y*j+ce.y,o.z*j),a.lookAt(c,l.y,l.z),t.render(r,a)}return we(),C}function rx(i,e){let t;try{t=new kn({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}t.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let n=t.domElement;n.className="scene3d",i.insertBefore(n,i.firstChild);let s=new Mn;Cs(s);let r=new wt(28,1,.1,30);r.position.set(0,1.5,4.6),r.lookAt(0,.82,0);let a=W(new Ye(.95,1,.1,40),U(16777215),0,-.05,0,!1);s.add(a);{let b=Ou();b.scale.setScalar(1.5),s.add(b)}let o=Rs(s),l=null,c=0,f=!0,h=null,u=0,d=0,x=null,g=W(new Ye(1.15,1.2,.08,40),U(15984383),1.3,-.04,0,!1);g.visible=!1,s.add(g);function m(b){if(x&&(s.remove(x),x=null),b&&Ui[b]){let A=Ui[b](),_=Bu[b],P=new dn().setFromObject(A),N=P.getSize(new G),z=Math.max(.35,Math.min(1.1,2/Math.max(N.x,N.y,N.z,.1)));A.scale.setScalar(z),A.position.set(1.3,_.p[1]>1.5?1.2:_.p[1]>.5?0:_.p[1],0),A.rotation.y=_.p[1]>1.5||b==="poster"?0:.5,(b==="starrug"||b==="poster"||b==="neon"||b==="disco"||b==="cloud")&&(A.rotation.y=0),b==="poster"&&(A.rotation.y=0),s.add(A),x=A,(A.userData.fish||A.userData.spin)&&(x.userData.anim=!0)}g.visible=!!x,r.position.set(x?.55:0,1.5,x?6.6:4.6),r.lookAt(x?.55:0,.82,0),l&&(l.root.position.x=x?-.85:0,a.position.x=l.root.position.x)}function p(){l&&l.dispose(),l=tn(e()),l.root.scale.setScalar(1.25),l.fx=(b,A)=>o.emit(b,A,l.root.position,1.25),s.add(l.root),l.root.position.x=x?-.85:0,a.position.x=l.root.position.x}p();function T(){let b=i.clientWidth||200,A=i.clientHeight||200;t.setSize(b,A,!1),n.style.width="100%",n.style.height="100%",r.aspect=b/A,r.updateProjectionMatrix()}new ResizeObserver(T).observe(i),T(),n.style.touchAction="none",n.addEventListener("pointerdown",b=>{h={x:b.clientX,s:u,moved:!1},n.setPointerCapture(b.pointerId)}),n.addEventListener("pointermove",b=>{if(!h)return;let A=b.clientX-h.x;Math.abs(A)>4&&(h.moved=!0),u=h.s+A*.012,d=u}),n.addEventListener("pointerup",()=>{h&&!h.moved&&(l.hop(4.6),l.setEmotion("happy"),o.emit("heart",3,l.root.position,1.25),setTimeout(()=>l&&l.setEmotion("neutral"),1400)),h=null});let M=new Fn,v=!0;"IntersectionObserver"in window&&new IntersectionObserver(b=>{v=b[0].isIntersecting},{threshold:.01}).observe(i);function R(){if(!f)return;if(requestAnimationFrame(R),!v||document.hidden){M.getDelta();return}let b=Math.min(.05,M.getDelta());c+=b,h||(d+=(Math.sin(c*.7)*.5-d)*Math.min(1,b*.8)),u+=(d-u)*Math.min(1,b*6),l.face(u),l.update(b,c,!1,!1),o.update(b),x&&x.userData.fish&&x.userData.fish.forEach((A,_)=>{let P=A.userData,N=c*(.5+_*.12)+P.ph;A.position.set(Math.sin(N)*.5,P.y+Math.sin(N*2)*.04,.05*Math.cos(N)),A.rotation.y=Math.cos(N)>0?0:Math.PI}),x&&x.userData.spin&&(x.userData.spin.rotation.y=c*.6),t.render(s,r)}return R(),{setDecor:m,rebuild(){p(),l.hop(3.6)},emote(b){l.setEmotion(b)},destroy(){f=!1,l&&l.dispose(),t.dispose(),t.forceContextLoss&&t.forceContextLoss(),n.parentNode&&n.parentNode.removeChild(n)}}}function ax(i,e){let t;try{t=new kn({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}t.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let n=t.domElement;n.className="scene3d",i.insertBefore(n,i.firstChild);let s=document.createElement("div");s.className="st3-ov",i.appendChild(s);let r=new Mn;Cs(r);let a=new wt(30,2.6,.1,40);a.position.set(0,2.2,6.4),a.lookAt(0,1.1,0),r.add(W(ge(11,.3,4.2,.1),U(16770761,{emissive:15780256,emissiveIntensity:.35}),0,-.15,0,!1));{let I=Ct(256,256,(C,L,O)=>{C.fillStyle="#E9DEFE",C.fillRect(0,0,L,O),C.fillStyle="rgba(255,255,255,.85)";for(let B=0;B<4;B++)for(let Q=0;Q<4;Q++)C.beginPath(),C.arc(32+Q*64+B%2*32,32+B*64,5,0,7),C.fill()});I.wrapS=I.wrapT=an,I.repeat.set(4,1.4),r.add(W(ge(11,3.6,.2,.06),U(16777215,{map:I,emissive:15326974,emissiveIntensity:.25}),0,1.8,-2.15,!1)),r.add(W(ge(11,.2,.12,.04),U(16777215),0,.1,-2.02,!1));for(let C=0;C<17;C++){let L=C/16,O=new ot({color:[16773544,16757713,12448732,14273791][C%4]});r.add(he(.07,O,1,1,1,-5+L*10,3.15-Math.sin(L*Math.PI*4)*.12,-2))}let q=new ut(new ln(_i(.7),{depth:.05,bevelEnabled:!1}),new ot({color:16748480}));q.position.set(-3.6,2.2,-2),r.add(q);let w=q.clone();w.position.set(3.6,2.2,-2),w.material=new ot({color:9362431}),r.add(w)}let o=new Re;o.position.set(0,0,.1),o.add(W(new Ye(1.9,1.9,.05,40),U(12448732),0,.03,0,!1)),o.add(W(new Ye(1.3,1.3,.07,40),U(16774890),0,.04,0,!1)),r.add(o);let l=Rs(r),c=tn({mika:!0,acc:e||[]});c.root.scale.setScalar(.9),c.root.position.set(0,0,.6),r.add(c.root),c.fx=(I,q)=>l.emit(I,q,c.root.position,.9);let f={},h=new G(0,0,.6),u=3,d=0,x=!0,g=!0,m=p("Mika",!0);function p(I,q){let w=document.createElement("span");return w.className="st3-n"+(q?" mk":""),w.textContent=I,s.appendChild(w),w}function T(I,q,w){return q?-3.5:3.5-I*1.5}function M(){let I=0;Object.keys(f).forEach(q=>{let w=f[q];w.mine?w.tx=-3.2:(w.tx=3.2-I*1.5,I++)})}function v(I){let q={};I.forEach(w=>{q[w.id]=1;let C=w.code+"|"+w.nick;if(f[w.id]&&f[w.id].key!==C&&R(w.id),!f[w.id]){let L=tn(As(w.code));L.root.scale.setScalar(.95),L.root.position.set(w.me?-6:6,0,.5),r.add(L.root),L.fx=(O,B)=>l.emit(O,B,L.root.position,.95),f[w.id]={ch:L,key:C,mine:!!w.me,tx:0,label:p(w.me?"Moi":w.nick),bubble:null},setTimeout(()=>L.hop(4),500)}}),Object.keys(f).forEach(w=>{q[w]||R(w)}),M()}function R(I){let q=f[I];q&&(q.ch.dispose(),q.label.remove(),q.bubble&&q.bubble.remove(),delete f[I])}function b(I,q,w){let C=I.bubble;C&&C.remove();let L=document.createElement("div");L.className="st3-b"+(w?" mk":""),L.textContent=q,s.appendChild(L),I.bubble=L,setTimeout(()=>{I.bubble===L&&(L.remove(),I.bubble=null)},Math.min(7e3,2800+q.length*55))}let A={bubble:null};function _(I){return/[😂🤣😆😄😁]|haha|mdr|lol/i.test(I)?"happy":/[😍🥰❤💕💖]|j'adore|trop bien/i.test(I)?"love":/[😢😭😞]|triste|nul|fatigu/i.test(I)?"sad":/[😮😱]|\?\?|oh/i.test(I)?"wow":null}let P={setMembers:v,say(I,q){let w=f[I];if(!w)return;w.ch.hop(3.8);let C=_(q);C&&(w.ch.setEmotion(C),C==="love"&&l.emit("heart",3,w.ch.root.position,.95),setTimeout(()=>w.ch.setEmotion("neutral"),1800)),w.ch.setTalking(!0),setTimeout(()=>w.ch.setTalking(!1),Math.min(2400,600+q.length*40)),b(w,q,!1)},mikaSay(I){c.hop(3.6),c.setTalking(!0),h.set(0,0,.9),u=d+4,setTimeout(()=>c.setTalking(!1),Math.min(2800,700+I.length*40)),b(A,I,!0)},mikaReact(I){c.setEmotion(I),setTimeout(()=>c.setEmotion("neutral"),2200)},setMikaAcc(I){c.setAccessories(I)},destroy(){x=!1,Object.keys(f).forEach(R),c.dispose(),t.dispose(),t.forceContextLoss&&t.forceContextLoss(),n.remove(),s.remove()}};function N(){let I=i.clientWidth||360,q=i.clientHeight||150;t.setSize(I,q,!1),n.style.width="100%",n.style.height="100%",a.aspect=I/q,a.fov=I/q>2?30:40,a.updateProjectionMatrix()}new ResizeObserver(N).observe(i),N(),m.style.opacity=1;let z=new Fn,Z=new G;function F(I,q,w,C){Z.set(q.x,q.y+w,q.z).project(a);let L=i.clientWidth,O=i.clientHeight,B=(I.offsetWidth||40)/2+4;I.style.left=Math.max(B,Math.min(L-B,(Z.x*.5+.5)*L+(C||0)))+"px",I.style.top=(-Z.y*.5+.5)*O+"px"}c.setEmotion("neutral"),n.addEventListener("pointerup",()=>{c.hop(4.4),c.setEmotion("happy"),setTimeout(()=>c.setEmotion("neutral"),1200),i.dispatchEvent(new CustomEvent("mika3d",{detail:{name:"mika"}}))});function E(){if(!x)return;if(requestAnimationFrame(E),document.hidden){z.getDelta();return}let I=Math.min(.05,z.getDelta());d+=I,d>u&&!c.st.talking&&(h.set((Math.random()-.5)*3.2,0,.3+Math.random()*.8),u=d+4+Math.random()*5);let q=c.root.position,w=h.x-q.x,C=h.z-q.z,L=Math.hypot(w,C),O=!1;if(L>.06){O=!0;let B=Math.min(L,.9*I);q.x+=w/L*B,q.z+=C/L*B,c.face(Math.atan2(w,C)*.7)}else c.face(0);c.update(I,d,O,!1),Object.keys(f).forEach(B=>{let Q=f[B],ae=Q.ch.root.position,ue=Q.tx-ae.x,ce=!1;Math.abs(ue)>.05?(ce=!0,ae.x+=Math.sign(ue)*Math.min(Math.abs(ue),2.2*I),Q.ch.face(Math.sign(ue)*.5)):Q.ch.face(Q.mine?.35:-.35),ae.z=.5,Q.ch.update(I,d+B.length,ce,!1),F(Q.label,ae,-.12,0),Q.bubble&&F(Q.bubble,ae,1.75,0)}),F(m,c.root.position,-.12,0),A.bubble&&F(A.bubble,c.root.position,1.75,0),l.update(I),t.render(r,a)}return E(),P}function ox(i,e){e=e||{};let t;try{t=new kn({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}t.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let n=t.domElement;n.className="scene3d",i.insertBefore(n,i.firstChild);let s=document.createElement("div");s.className="st3-ov",i.appendChild(s);let r=new Mn;Cs(r);let a=new wt(36,1.4,.1,40);a.position.set(0,2.5,7.6),a.lookAt(0,1,-.4),r.add(W(ge(9,.3,8,.1),U(15980984,{emissive:15255452,emissiveIntensity:.3}),0,-.15,.3,!1));let o=Ct(256,256,(E,I,q)=>{E.fillStyle="#FFE9F3",E.fillRect(0,0,I,q),E.fillStyle="rgba(255,255,255,.9)";for(let w=0;w<4;w++)for(let C=0;C<4;C++)E.beginPath(),E.arc(32+C*64+w%2*32,32+w*64,5,0,7),E.fill()});o.wrapS=o.wrapT=an,o.repeat.set(3.2,1.3),r.add(W(ge(9,4.2,.2,.06),U(16777215,{map:o,emissive:16771571,emissiveIntensity:.25}),0,2,-3.1,!1));let l=document.createElement("canvas");l.width=512,l.height=256;let c=l.getContext("2d"),f=new hs(l);f.colorSpace=Wt;let h=[];function u(){c.fillStyle="#2f5d50",c.fillRect(0,0,512,256),c.strokeStyle="rgba(255,255,255,.18)",c.lineWidth=6,c.strokeRect(8,8,496,240),c.textAlign="center",c.textBaseline="middle";let E=h.length?h:[{t:"Willkommen!",c:"#fff6c2",s:56},{t:"Hello \xB7 Hallo \xB7 Hola \xB7 Ciao",c:"#cfe9ff",s:26}],q=128-E.reduce((w,C)=>w+(C.s||34)*1.35,0)/2;E.forEach(w=>{let C=w.s||34;c.font="700 "+C+'px "Comic Sans MS","Chalkboard SE","Segoe UI",sans-serif',c.fillStyle=w.c||"#ffffff";let L=w.t;for(;c.measureText(L).width>470&&C>14;)c.font="700 "+--w.s+"px sans-serif";c.fillText(L,256,q+C*.67),q+=C*1.35}),f.needsUpdate=!0}u();let d=new Re;d.position.set(0,2.15,-2.95),d.add(W(ge(3.6,1.9,.12,.05),U(14267530),0,0,0,!1)),d.add(W(new Lt(3.4,1.7),new ot({map:f}),0,0,.07,!1)),r.add(d),r.add(W(ge(1.7,.7,.7,.1),U(13080688),0,.35,-1.55)),r.add(W(ge(1.85,.08,.8,.04),U(14858378),0,.72,-1.55)),r.add(W(ge(.5,.06,.34,.02),U(16748480),-.5,.79,-1.5,!1)),r.add(W(new Ye(2.6,2.6,.04,44),U(14273791),0,.02,1.6,!1));for(let E=0;E<17;E++){let I=E/16;r.add(he(.07,new ot({color:[16773544,16757713,12448732,14273791][E%4]}),1,1,1,-4+I*8,3.9-Math.sin(I*Math.PI*4)*.14,-2.95))}let x=Rs(r),g=tn({mika:!0,color:15905402,ears:"bear",eyes:"dot",acc:e.bobAcc||["glasses","bowtie"]});g.root.scale.setScalar(1.12),g.root.position.set(0,0,-1),g.face(0),r.add(g.root),g.fx=(E,I)=>x.emit(E,I,g.root.position,1.1);let m=tn(Object.assign(As(e.code||"0000")));m.root.scale.setScalar(.8),m.root.position.set(-.9,0,2.2),m.face(Math.PI),r.add(m.root),m.fx=(E,I)=>x.emit(E,I,m.root.position,.95);let p=tn({mika:!0,acc:e.mikaAcc||[]});p.root.scale.setScalar(.68),p.root.position.set(.85,0,2.2),p.face(Math.PI),r.add(p.root),p.fx=(E,I)=>x.emit(E,I,p.root.position,.8);let T={bob:{ch:g,el:null,dy:1.95,b:null},me:{ch:m,el:null,dy:1.5,b:null},mika:{ch:p,el:null,dy:1.3,b:null}};[["bob","Prof. Bobby","pr"],["mika","Mika","mk"]].forEach(E=>{let I=document.createElement("span");I.className="st3-n "+E[2],I.textContent=E[1],s.appendChild(I),T[E[0]].el=I,I.style.opacity=1});function M(E,I,q,w){let C=T[E];C.b&&C.b.remove();let L=document.createElement("div");L.className="st3-b "+(q||""),L.textContent=I,s.appendChild(L),C.b=L,setTimeout(()=>{C.b===L&&(L.remove(),C.b=null)},w||Math.min(14e3,4200+I.length*70))}let v=0,R=!0,b=new Fn,A=new G;function _(E,I,q){A.set(I.x,I.y+q,I.z).project(a);let w=i.clientWidth,C=i.clientHeight,L=(E.offsetWidth||40)/2+4;E.style.left=Math.max(L,Math.min(w-L,(A.x*.5+.5)*w))+"px",E.style.top=(-A.y*.5+.5)*C+"px"}function P(){let E=i.clientWidth||360,I=i.clientHeight||260;t.setSize(E,I,!1),n.style.width="100%",n.style.height="100%",a.aspect=E/I,a.fov=E/I<1.2?46:36,a.updateProjectionMatrix()}new ResizeObserver(P).observe(i),P();let N={};function z(E,I){T[E].ch.setTalking(!0),clearTimeout(N[E]),N[E]=setTimeout(()=>T[E].ch.setTalking(!1),I)}let Z={bobbySay(E,I){g.hop(3.4),g.setEmotion(I||"happy"),z("bob",Math.min(4e3,800+E.length*45)),M("bob",E,"pr"),setTimeout(()=>g.setEmotion("neutral"),2600)},bobbyEmote(E){g.setEmotion(E),(E==="proud"||E==="cheer"||E==="love")&&x.emit("heart",4,g.root.position,1.1),setTimeout(()=>g.setEmotion("neutral"),2400)},bobbyListen(E){g.setEmotion(E?"wow":"neutral")},userSay(E){m.hop(3.4),z("me",Math.min(2500,600+E.length*40)),M("me",E,"me")},mikaSay(E,I){p.hop(3.6),p.setEmotion(I||"happy"),z("mika",Math.min(3e3,800+E.length*40)),M("mika",E,"mk",Math.min(16e3,5e3+E.length*80)),setTimeout(()=>p.setEmotion("neutral"),2800)},mikaReact(E){p.setEmotion(E),setTimeout(()=>p.setEmotion("neutral"),2400)},board(E){h=E||[],u()},setBobAcc(E){g.setAccessories(E)},setMikaAcc(E){p.setAccessories(E)},thinking(E){E&&(g.setEmotion("neutral"),g.look(.4,.3))},destroy(){R=!1,[g,m,p].forEach(E=>E.dispose()),t.dispose(),t.forceContextLoss&&t.forceContextLoss(),n.remove(),s.remove()}};n.addEventListener("pointerup",()=>{g.hop(4),g.setEmotion("happy"),setTimeout(()=>g.setEmotion("neutral"),1200),i.dispatchEvent(new CustomEvent("mika3d",{detail:{name:"bobby"}}))});function F(){if(!R)return;if(requestAnimationFrame(F),document.hidden){b.getDelta();return}let E=Math.min(.05,b.getDelta());v+=E,g.face(Math.sin(v*.6)*.12),m.face(Math.PI+Math.sin(v*.5)*.08),p.face(Math.PI-Math.sin(v*.5)*.08),g.update(E,v,!1,!1),m.update(E,v+1,!1,!1),p.update(E,v+2,!1,!1),["bob","mika"].forEach(I=>{_(T[I].el,T[I].ch.root.position,-.08)}),Object.keys(T).forEach(I=>{T[I].b&&_(T[I].b,T[I].ch.root.position,T[I].dy)}),x.update(E),t.render(r,a)}return F(),Z}function lx(i){let e;try{e=new kn({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}e.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let t=e.domElement;t.className="scene3d",i.insertBefore(t,i.firstChild);let n=document.createElement("div");n.className="st3-ov",i.appendChild(n);let s=new Mn;Cs(s);let r=new wt(38,1.4,.1,60);r.position.set(0,7.2,9.4),r.lookAt(0,0,.5),s.add(W(new Ye(7.2,7.4,.3,56),U(13234872,{emissive:11069088,emissiveIntensity:.25}),0,-.15,.2,!1)),s.add(W(new Ye(3.4,3.4,.04,48),U(16773334),0,.02,.2,!1)),s.add(W(new mt(3.4,.08,8,48),U(16765411),0,.04,.2,!1).rotateX(Math.PI/2));let a=new Re;a.position.set(0,0,-.4),s.add(a),a.add(W(new Ye(1,1.1,.34,32),U(15262463),0,.17,0)),a.add(W(new Ye(.86,.86,.3,32),U(9362431,{emissive:6998261,emissiveIntensity:.4,roughness:.2}),0,.2,0,!1)),a.add(W(new Ye(.12,.16,.8,12),U(15262463),0,.6,0));let o=he(.2,U(12119295,{emissive:9362431,emissiveIntensity:.5,transparent:!0,opacity:.85}),1,1.3,1,0,1.15,0);a.add(o);function l(O,B,Q,ae){let ue=new Re;ue.position.set(O,0,B),ue.scale.setScalar(ae||1),ue.add(W(new Ye(.14,.2,1.1,10),U(12159587),0,.55,0)),[[0,1.55,0,.8],[-.5,1.3,.15,.55],[.5,1.35,-.1,.55],[.05,1.95,.05,.5]].forEach(ce=>ue.add(he(ce[3],U(Q,{emissive:Q,emissiveIntensity:.18}),1,.9,1,ce[0],ce[1],ce[2]))),s.add(ue)}l(-4.6,-2.6,16757713,1.2),l(4.8,-2.4,16762588,1.1),l(-5.2,2.6,12448732,1),l(5.3,2.8,16757713,.95);function c(O,B){let Q=new Re;Q.position.set(O,0,B),Q.add(W(new Ye(.05,.07,1.7,8),U(7035534),0,.85,0)),Q.add(he(.2,new ot({color:16773544}),1,1,1,0,1.8,0)),s.add(Q)}c(-2.6,-2.2),c(2.6,-2.2),c(-3.4,3.2),c(3.4,3.2);let f=[];function h(O,B,Q,ae,ue,ce,V,k,J,oe){let me=new Re;me.position.set(B,0,Q),me.userData.pick=O,me.add(W(ge(k,J,1.5,.14),U(ae,{emissive:ae,emissiveIntensity:.12}),0,J/2,0)),me.add(W(ge(k+.16,.14,1.7,.05),U(16777215),0,.07,.05,!1));let ye=Math.max(4,Math.round(k/.3));for(let se=0;se<ye;se++)me.add(he(k/ye*.62,U(se%2?16777215:ue),1,.9,1.1,-k/2+(se+.5)*k/ye,J*.7,.88));me.add(W(ge(k+.1,.1,1.2,.04),U(ue),0,J*.78,.55,!1)),me.add(W(ge(k*.46,.14,.9,.05),U(ue),0,J+.06,0,!1)),me.add(W(ge(.46,.8,.08,.04),U(12159587),k*.26,.42,.78)),me.add(W(ge(k*.46,.6,.06,.04),U(13627135,{emissive:16771512,emissiveIntensity:.55}),-k*.2,.62,.78,!1)),oe&&oe.forEach((se,xe)=>me.add(he(.11,U(se,{emissive:se,emissiveIntensity:.3}),1,1,.8,-k*.2+(xe-(oe.length-1)/2)*.28,.5,.83,!1)));let Oe=Ct(256,96,(se,xe,Me)=>{se.fillStyle="#ffffff",se.beginPath(),se.roundRect?se.roundRect(4,4,xe-8,Me-8,28):se.rect(4,4,xe-8,Me-8),se.fill(),se.fillStyle="#2A1B5E",se.font="700 40px DynaPuff, Fredoka, sans-serif",se.textAlign="center",se.textBaseline="middle",se.fillText(ce+" "+V,xe/2,Me/2+2)}),et=W(new Lt(k*.9,k*.9*96/256),new ot({map:Oe,transparent:!0}),0,J+.5,.2,!1);return me.add(et),me.scale.setScalar(1.1),me.traverse(se=>{se!==me&&(se.userData.root=me)}),s.add(me),f.push(me),me}h("home",-5.8,-5.2,16767464,16748480,"\u{1F3E0}","Chambre",2,1.7,[16748480,16769658]),h("bakery",-3.4,-5.2,16773593,16748480,"\u{1F950}","Boulangerie",2.1,1.7,[15247707,16757713,12448732]),h("thrift",-1,-5.2,14283236,6153140,"\u{1F457}","Friperie",2,1.8,[16748480,9362431,12166911]),h("deco",1.4,-5.2,16774351,16761418,"\u{1FAB4}","D\xE9co",2,1.7,[7065466,16757713]),h("karaoke",3.8,-5.2,14734591,8150271,"\u{1F3A4}","Karaok\xE9",2,1.9,[16740296,8255999]);let u=new Re;u.position.set(6.4,1.7,-6.2),u.scale.setScalar(.62),u.userData.pick="park";{let O=W(new mt(1.55,.07,8,40),U(16748480),0,0,0,!1);u.add(O);let B=W(new mt(.85,.05,8,32),U(16769658),0,0,0,!1);u.add(B);for(let Q=0;Q<8;Q++){let ae=Q/8*Math.PI*2,ue=W(new Ye(.03,.03,3.1,6),U(16777215),0,0,0,!1);ue.rotation.z=ae,u.add(ue);let ce=W(ge(.38,.3,.3,.08),U([16757713,9362431,16769658,12448732][Q%4]),Math.cos(ae)*1.55,Math.sin(ae)*1.55,0);ce.userData.gond=1,u.add(ce)}}let d=new Re;d.userData.pick="park",d.position.set(6.4,0,-6.2),d.scale.setScalar(.62),[-1,1].forEach(O=>{let B=W(ge(.16,2.3,.16,.05),U(8150271),O*.55,1.05,0);B.rotation.z=-O*.28,d.add(B)}),d.add(W(new Ye(.1,.1,.5,10),U(16777215),0,2.1,0)),s.add(d),s.add(u),f.push(u,d),u.traverse(O=>{O!==u&&(O.userData.root=u)}),d.traverse(O=>{O!==d&&(O.userData.root=d)}),s.add(W(ge(1.6,.18,.5,.05),U(14858378),3.1,.45,-3.3)),s.add(W(ge(1.6,.5,.1,.04),U(14858378),3.1,.75,-3.5));let x=Rs(s),g=0,m={},p=0,T=!0,M=new Fn;function v(O,B){let Q=document.createElement("span");return Q.className="st3-n"+(B?" mk":""),Q.textContent=O,Q.style.opacity=1,n.appendChild(Q),Q}function R(O){if(m[O.pid])return;let B=tn(O.npc?{mika:!0,acc:O.acc||[]}:As(O.code));B.root.scale.setScalar(O.npc?.75:.85),B.root.position.set(O.x||0,0,O.z||2),s.add(B.root),B.fx=(Q,ae)=>x.emit(Q,ae,B.root.position,.85),m[O.pid]={ch:B,tx:O.x||0,tz:O.z||2,label:v(O.me?"Moi":O.nick,O.me),me:!!O.me,npc:!!O.npc,next:0,dance:0,bub:null,bubT:0},B.hop(4)}function b(O,B){let Q=m[O];if(!Q)return;Q.bub&&Q.bub.remove();let ae=document.createElement("div");ae.className="st3-b",ae.textContent=String(B).slice(0,80),n.appendChild(ae),Q.bub=ae,Q.bubT=5+Math.min(4,String(B).length/25),Q.ch.setTalking(!0),setTimeout(()=>Q.ch&&Q.ch.setTalking(!1),1400)}function A(O){let B=m[O];B&&(B.bub&&B.bub.remove(),B.ch.dispose(),B.label.remove(),delete m[O])}function _(O,B,Q){let ae=m[O];ae&&(ae.tx=B,ae.tz=Q)}function P(O,B){let Q=m[O];if(!Q)return;let ae=Q.ch;B==="wave"?(ae.hop(4.2),ae.setEmotion("happy")):B==="heart"?(ae.setEmotion("love"),ae.hop(4.6),x.emit("heart",6,ae.root.position,.85)):B==="happy"?(ae.setEmotion("happy"),ae.hop(5)):B==="wow"?(ae.setEmotion("wow"),ae.hop(4)):B==="dance"&&(ae.setEmotion("happy"),Q.dance=2.4),setTimeout(()=>ae.setEmotion("neutral"),2200)}function N(){let O=i.clientWidth||360,B=i.clientHeight||280;e.setSize(O,B,!1),t.style.width="100%",t.style.height="100%",r.aspect=O/B,r.fov=O/B<1.2?64:42,r.updateProjectionMatrix()}new ResizeObserver(N).observe(i),N();let z=new xs,Z=new Ee,F=new $t(new G(0,1,0),0),E=new G;t.addEventListener("pointerup",O=>{let B=t.getBoundingClientRect();Z.set((O.clientX-B.left)/B.width*2-1,-((O.clientY-B.top)/B.height)*2+1),z.setFromCamera(Z,r);for(let ue of z.intersectObjects(f,!0)){let ce=ue.object,V=null;for(;ce;){if(ce.userData&&ce.userData.pick){V=ce.userData.pick;break}ce=ce.parent}if(V){i.dispatchEvent(new CustomEvent("plaza3d",{detail:{kind:"building",id:V}}));return}}if(!z.ray.intersectPlane(F,E))return;let Q=null,ae=.9;Object.keys(m).forEach(ue=>{let ce=m[ue].ch.root.position,V=Math.hypot(ce.x-E.x,ce.z-E.z);V<ae&&(ae=V,Q=ue)}),i.dispatchEvent(new CustomEvent("plaza3d",{detail:Q?{kind:"tap",pid:Q,me:m[Q].me}:{kind:"walk",x:Math.max(-5.2,Math.min(5.2,E.x)),z:Math.max(-3.2,Math.min(4.2,E.z))}}))});let I=new G;function q(O,B,Q){I.set(B.x,B.y+Q,B.z).project(r);let ae=i.clientWidth,ue=i.clientHeight,ce=(O.offsetWidth||40)/2+4;O.style.left=Math.max(ce,Math.min(ae-ce,(I.x*.5+.5)*ae))+"px",O.style.top=(-I.y*.5+.5)*ue+"px"}function w(){if(!T)return;if(requestAnimationFrame(w),document.hidden){M.getDelta();return}let O=Math.min(.05,M.getDelta());p+=O,o.scale.y=1.3+Math.sin(p*5)*.2,u.rotation.z-=O*(g>0?1.4:.18),g>0&&(g-=O),u.children.forEach(B=>{B.userData.gond&&(B.rotation.z=-u.rotation.z)}),Object.keys(m).forEach(B=>{let Q=m[B],ae=Q.ch.root.position,ue=Q.tx-ae.x,ce=Q.tz-ae.z,V=Math.hypot(ue,ce),k=!1;if(Q.dance>0)Q.dance-=O,Q.ch.st.y<.02&&Q.ch.hop(3.2),Q.ch.face(Math.sin(p*10)*.8);else if(Q.npc&&V<.06&&p>Q.next)Q.tx=(Math.random()-.5)*8,Q.tz=-1+Math.random()*4.5,Q.next=p+3+Math.random()*4;else if(V>.06){k=!0;let J=Math.min(V,(Q.npc?.9:2)*O);ae.x+=ue/V*J,ae.z+=ce/V*J,Q.ch.face(Math.atan2(ue,ce)*.8)}else Q.ch.face(0);Q.ch.update(O,p+B.length,k,!1),q(Q.label,ae,-.12),Q.bub&&(Q.bubT-=O,Q.bubT<=0?(Q.bub.remove(),Q.bub=null):q(Q.bub,ae,1.55))}),x.update(O),e.render(s,r)}w();function C(){g=4.5}function L(){Object.keys(m).forEach(O=>{m[O].npc||A(O)})}return{add:R,remove:A,reset:L,rideWheel:C,moveTo:_,emote:P,say:b,has:O=>!!m[O],count:()=>Object.keys(m).length,destroy(){T=!1,Object.keys(m).forEach(A),e.dispose(),e.forceContextLoss&&e.forceContextLoss(),t.remove(),n.remove()}}}function Io(i,e,t){let n=Ct(256,64,(s,r,a)=>{let o=r/t;for(let l=0;l<t;l++)s.fillStyle=l%2?e:i,s.fillRect(l*o,0,o,a)});return n.wrapS=an,n}function Au(i,e,t){let n=Ct(128,128,(s,r,a)=>{s.fillStyle=i,s.fillRect(0,0,r,a),s.fillStyle=e,s.fillRect(0,0,r/2,a/2),s.fillRect(r/2,a/2,r/2,a/2)});return n.wrapS=n.wrapT=an,n.repeat.set(t,t*.6),n}function cx(i,e,t,n){return Ct(512,160,(s,r,a)=>{t&&(s.fillStyle=t,s.fillRect(0,0,r,a)),s.font="700 78px DynaPuff, Fredoka, sans-serif",s.textAlign="center",s.textBaseline="middle",n&&(s.shadowColor=n,s.shadowBlur=24),s.fillStyle=e,s.fillText(i,r/2,a/2+4),s.fillText(i,r/2,a/2+4)})}var wn={cake(i,e,t,n){let s=new Re;s.position.set(i,e,t),s.add(W(new Ye(.2,.2,.2,20),U(n||16765411),0,.1,0,!1));let r=W(new mt(.16,.035,8,20),U(16777215),0,.2,0,!1);return r.rotation.x=Math.PI/2,s.add(r),s.add(he(.05,U(16726876,{emissive:16726876,emissiveIntensity:.25}),1,1,1,0,.27,0)),s},macaron(i,e,t,n){let s=new Re;s.position.set(i,e,t);let r=U(n,{emissive:n,emissiveIntensity:.18});return s.add(he(.1,r,1,.42,1,0,.05,0)),s.add(he(.09,U(16775150),1,.3,1,0,.1,0)),s.add(he(.1,r,1,.42,1,0,.15,0)),s},croissant(i,e,t){let n=new Re;n.position.set(i,e,t);let s=W(new mt(.13,.065,10,16,Math.PI*1.15),U(15247707),0,.09,0,!1);return s.rotation.set(Math.PI/2.4,0,Math.PI*.9),s.scale.set(1.2,1,1),n.add(s),n},donut(i,e,t,n){let s=new Re;s.position.set(i,e,t);let r=W(new mt(.1,.055,10,18),U(15774571),0,.08,0,!1);r.rotation.x=Math.PI/2.3,s.add(r);let a=W(new mt(.1,.05,10,18),U(n||16751304,{emissive:n||16751304,emissiveIntensity:.15}),0,.1,.005,!1);return a.rotation.x=Math.PI/2.3,a.scale.set(1,1,.9),s.add(a),s},cupcake(i,e,t,n){let s=new Re;s.position.set(i,e,t);let r=W(new Ye(.1,.07,.12,12),U(16109728),0,.06,0,!1);return s.add(r),s.add(he(.11,U(n||16757713,{emissive:n||16757713,emissiveIntensity:.15}),1,.8,1,0,.17,0)),s.add(he(.035,U(16726876),1,1,1,0,.27,0)),s},bread(i,e,t){let n=new Re;n.position.set(i,e,t),n.add(he(.2,U(14259530),1.5,.7,.8,0,.12,0));for(let s=-1;s<=1;s++){let r=W(ge(.02,.012,.18,.005),U(15913888),s*.09,.22,0,!1);r.rotation.y=.5,n.add(r)}return n}};function hx(i,e,t,n,s){let r=new Re;r.position.set(i,e,t),r.add(W(new mt(.05,.008,6,12,Math.PI),U(13619164,{metalness:.5,roughness:.4}),0,.05,0,!1));let a=U(n,{emissive:n,emissiveIntensity:.1});return s==="dress"?(r.add(W(new Ye(.1,.22,.5,14),a,0,-.22,0,!1)),r.add(W(ge(.2,.14,.05,.02),a,0,0,0,!1))):(r.add(W(ge(.3,.38,.06,.03),a,0,-.17,0,!1)),[-1,1].forEach(o=>{let l=W(ge(.16,.08,.06,.03),a,o*.2,-.04,0,!1);l.rotation.z=-o*.5,r.add(l)})),r}function ux(i,e,t){let n;try{n=new kn({antialias:!0,alpha:!1,powerPreference:"low-power"})}catch{return null}n.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let s=n.domElement;s.className="scene3d",i.insertBefore(s,i.firstChild);let r=new Mn,a={bakery:16771568,thrift:15721424,deco:15135726,karaoke:2364487}[e]||16777215;r.background=new Qe(a),Cs(r);let o=new wt(34,1,.1,40);o.position.set(0,1.9,6.6),o.lookAt(0,1.25,0);let l=Rs(r),c=[],f=new Re;r.add(f);let h=C=>(f.add(C),C),u={bakery:()=>U(16777215,{map:Au("#fff4f8","#ffc4dc",5)}),thrift:()=>U(14198126,{map:Io("#d9a96f","#c8935b",14)}),deco:()=>U(15984339,{map:Au("#f6ece0","#e9d9c3",5)}),karaoke:()=>U(3810160,{roughness:.3})}[e](),d=W(new Lt(26,16),u,0,0,4.5,!1);u.map&&u.map.repeat.multiplyScalar(1.8),d.rotation.x=-Math.PI/2,h(d);let x={bakery:16766694,thrift:13099988,deco:16774112,karaoke:3086947}[e],g=e==="bakery"?Io("#ffd6e6","#fff0f6",14):null;g&&g.repeat.set(3.4,1),h(W(ge(26,10,.2,.05),U(x,g?{map:g}:{emissive:x,emissiveIntensity:e==="karaoke"?.35:.12}),0,4.7,-3,!1)),h(W(ge(14,.18,.2,.04),U(16777215),0,.09,-2.88,!1));let m=W(new Lt(2.9,.9),new ot({map:cx({bakery:"Boulangerie",thrift:"Friperie",deco:"D\xE9co",karaoke:"Karaok\xE9"}[e],{bakery:"#e0457b",thrift:"#ff7ac8",deco:"#2f8f6b",karaoke:"#7df9ff"}[e],{bakery:"#fffaf0",thrift:null,deco:"#fffaf0",karaoke:null}[e],{thrift:"#ff3fa8",karaoke:"#18c8ff"}[e]),transparent:!0}),0,3.85,-2.86,!1);h(m);let p=null,T=null,M=null,v=0,R=!1,b=0,A=!0,_=6.6,P=!1,N=[0,0,1.4],z=1.25;if(e==="bakery"){N=[-1.5,0,1.2];let C=W(ge(5.4,1,1.2,.14),U(16775150),.9,.5,-1.6);h(C),h(W(ge(5.5,.12,1.3,.05),U(16106122),.9,1.04,-1.6,!1));let L=W(ge(3.6,.95,1,.08),new Jt({color:14677759,transparent:!0,opacity:.22,roughness:.05,metalness:.1}),.5,1.6,-1.55,!1);h(L),h(W(ge(3.7,.06,1.05,.02),U(16775150),.5,1.12,-1.55,!1)),h(W(ge(3.4,.05,.8,.02),U(16775150),.5,1.5,-1.55,!1)),h(W(ge(3.7,.07,1.05,.02),U(16757713),.5,2.1,-1.55,!1));let O=[16757713,12448732,16773544,14273791,16763304,9362431];for(let ue=0;ue<6;ue++)h(wn.macaron(-.95+ue*.22,1.5,-1.3,O[ue]));h(wn.cake(-1,1.15,-1.7,16765411)),h(wn.cake(-.4,1.15,-1.7,12448732)),h(wn.cake(.2,1.15,-1.7,16773544)),h(wn.cupcake(.85,1.15,-1.7,16757713)),h(wn.cupcake(1.2,1.15,-1.5,14273791)),h(wn.donut(1.25,1.55,-1.35,16751304)),h(wn.croissant(.4,1.55,-1.3)),h(wn.croissant(.75,1.55,-1.3)),h(wn.donut(1.05,1.55,-1.7,12448732)),h(W(ge(1.6,2.4,.5,.06),U(16106122),3.95,1.2,-2.4)),[.6,1.2,1.8].forEach(ue=>{h(W(ge(1.5,.06,.45,.02),U(16773336),3.95,ue,-2.35,!1));for(let ce=0;ce<3;ce++)h(wn.bread(3.5+ce*.45,ue+.04,-2.3))});let B=W(new Un(11,.5,1.6),U(16777215,{map:Io("#ff8fc0","#ffffff",16)}),0,4.6,-2.2,!1);Io("#ff8fc0","#ffffff",16).repeat.set(1,1),h(B);for(let ue=0;ue<22;ue++)h(he(.26,U(ue%2?16777215:16748480),1,.9,.9,-5.2+ue*.5,4.3,-1.45));for(let ue=-1;ue<=1;ue+=2){let ce=new Re;ce.position.set(ue*2.4,3.1,-1.2),ce.add(W(new Ye(.01,.01,.9,4),U(10066329),0,.5,0,!1));let V=W(new jt(.3,.3,14,1,!0),U(16769960,{side:Qt,emissive:16765818,emissiveIntensity:.6}),0,0,0,!1);ce.add(V),ce.add(he(.08,new ot({color:16773560}),1,1,1,0,-.05,0)),h(ce),c.push(k=>{ce.rotation.z=Math.sin(k*1.2+ue)*.03})}let ae=new jn(16767400,1,12);ae.position.set(0,3.2,1),r.add(ae)}else if(e==="thrift"){N=[.2,0,1.4];let C=(ce,V,k,J,oe,me)=>{h(W(new Ye(.03,.03,J,8),U(14206888,{metalness:.5}),ce,V,k,!1)).rotation.z=Math.PI/2,[-1,1].forEach(Oe=>h(W(new Ye(.03,.04,V,8),U(14206888,{metalness:.5}),ce+Oe*J/2,V/2,k,!1)));let ye=Math.floor(J/.32);for(let Oe=0;Oe<ye;Oe++){let et=hx(ce-J/2+.2+Oe*.32,V-.05,k,oe[Oe%oe.length],me[Oe%me.length]);et.rotation.y=.3,h(et)}};C(-2.6,2.1,-1.8,2.4,[16748480,9362431,16773544,12166911,11069547],["shirt","dress"]),C(2.7,2.1,-1.8,2.2,[16754895,16763304,12448732,15195647],["dress","shirt"]),C(-.4,1.7,-2.4,3,[15905402,14697851,8150271,16769658],["shirt","shirt","dress"]);let L=W(new Ai(.75,30),new Jt({color:15005439,metalness:.9,roughness:.08,emissive:12576511,emissiveIntensity:.25}),3.75,1.7,-1.1,!1);L.scale.set(.8,1.35,1),L.rotation.y=-.45,h(L);let O=W(new mt(.75,.07,8,32),U(15905402),3.75,1.7,-1.11,!1);O.scale.set(.8,1.35,1),O.rotation.y=-.45,h(O),h(W(ge(2.2,.08,.45,.03),U(13210972),-3.6,2.9,-2.6,!1));let B=[16748480,8150271,16769658,6153140];for(let ce=0;ce<4;ce++)h(W(new Ye(.2,.2,.04,16),U(B[ce]),-4.2+ce*.5,2.97,-2.6,!1)),h(he(.13,U(B[ce]),1,.8,1,-4.2+ce*.5,3.04,-2.6));for(let ce=0;ce<24;ce++){let V=ce/23,k=he(.06,new ot({color:[16773544,16757713,12448732,9362431][ce%4]}),1,1,1,-5+V*10,4.7-Math.sin(V*Math.PI*3)*.2,-2.7);h(k),c.push(J=>{k.scale.setScalar(.85+Math.sin(J*3+ce)*.25)})}let Q=new ut(new ln(_i(.9),{depth:.04,bevelEnabled:!1}),new ot({color:16732072}));Q.position.set(-3.5,1.4,-2.8),h(Q),c.push(ce=>{Q.scale.setScalar(1+Math.sin(ce*3)*.05)});let ae=W(new Ye(1.5,1.5,.03,36),U(16757713),.2,.02,1.4,!1);h(ae),h(W(new mt(1.2,.04,8,36),U(16777215),.2,.04,1.4,!1)).rotation.x=Math.PI/2;let ue=new jn(16767468,.9,14);ue.position.set(0,3.4,2),r.add(ue)}else if(e==="deco"){N=[-1.4,0,1.2];let C=(B,Q,ae,ue)=>{h(W(new Ye(.22,.17,.4,14),U(16763304),B,.2,Q));for(let ce=0;ce<5;ce++){let V=ce/5*Math.PI*2;h(he(.2,U(ue||7065466),.6,1.8*ae,.35,B+Math.cos(V)*.12,.7+.2*ae,Q+Math.sin(V)*.12)).rotation.z=Math.cos(V)*.35}};C(-3.6,-1.8,1.4),C(3.8,-1.6,1,9232522),C(-2.3,-2.4,.8,6277536),h(W(ge(2.6,.7,.9,.18),U(16757713),1.2,.35,-1.9)),h(W(ge(2.6,.7,.3,.14),U(16751304),1.2,.95,-2.25)),[-1,1].forEach(B=>h(W(ge(.3,.55,.9,.12),U(16751304),1.2+B*1.3,.5,-1.9))),h(W(ge(.5,.5,.18,.06),U(16773544),.5,.75,-1.85)),h(W(ge(.5,.5,.18,.06),U(12448732),1.9,.75,-1.85)),h(W(new Ye(.02,.02,2.4,6),U(13421772),3,1.2,-1.2,!1)),h(he(.3,U(16769960,{emissive:16765818,emissiveIntensity:.9}),1,.8,1,3,2.5,-1.2)),[[-2.2,3.1,16757713],[-1.4,3.3,9362431],[-.6,3,16773544]].forEach(B=>{h(W(ge(.6,.8,.06,.02),U(15905402),B[0],B[1],-2.85,!1)),h(W(ge(.46,.64,.02,.01),U(B[2],{emissive:B[2],emissiveIntensity:.3}),B[0],B[1],-2.81,!1))});let L=W(new mt(.9,.08,8,28,Math.PI),U(16777215),2.2,2.6,-2.85,!1);h(L),h(W(new Ai(.9,28,0,Math.PI),new ot({color:12577279}),2.2,2.6,-2.86,!1)),h(W(new Ye(.62,.7,.2,28),U(16777215),1.5,.1,1.3));let O=new jn(16773328,.8,14);O.position.set(0,3.6,2),r.add(O)}else{let B=function(V,k,J,oe){let me=O;me.fillStyle="#12082c",me.fillRect(0,0,512,256),me.textAlign="center",me.textBaseline="middle",me.font="700 22px DynaPuff, Fredoka, sans-serif",me.fillStyle="#7df9ff",me.fillText(oe||"\u266A Karaok\xE9 \u266A",256,28);let ye=38;if(V){for(me.font="700 38px DynaPuff, Fredoka, sans-serif";me.measureText(V).width>470&&ye>18;)ye-=2,me.font="700 "+ye+"px DynaPuff, Fredoka, sans-serif";me.fillStyle="#4b3a8f",me.fillText(V,256,120),me.save(),me.beginPath(),me.rect(256-me.measureText(V).width/2-4,80,(me.measureText(V).width+8)*Math.max(0,Math.min(1,J||0)),80),me.clip(),me.fillStyle="#ff6fc8",me.fillText(V,256,120),me.restore()}k&&(me.font="600 26px DynaPuff, Fredoka, sans-serif",me.fillStyle="#9d8cff",me.fillText(k,256,200)),C.needsUpdate=!0};N=[0,.34,.6],z=1.3,h(W(ge(5.6,.34,2.8,.1),U(5980118,{emissive:3810160,emissiveIntensity:.5}),0,.17,.6,!1)),h(W(ge(5.7,.05,2.9,.02),new ot({color:16740296}),0,.36,.6,!1)).scale.set(1,1,1),[-1,1].forEach(V=>{h(W(ge(1.4,5,.5,.15),U(14697851,{emissive:11545184,emissiveIntensity:.3}),V*3.3,2.5,-1.8)),h(W(ge(1,1.7,.8,.08),U(2364487),V*2.9,.85,-1.2)),h(he(.3,U(4468858),1,1,.5,V*2.9,.65,-.79)),h(he(.16,U(4468858),1,1,.5,V*2.9,1.3,-.79))});let C=Ct(512,256,(V,k,J)=>{V.fillStyle="#12082c",V.fillRect(0,0,k,J)}),L=W(new Lt(3.6,1.8),new ot({map:C}),0,3.1,-2.8,!1);h(L),h(W(ge(3.8,2,.08,.05),new ot({color:8255999}),0,3.1,-2.9,!1));let O=C.image.getContext("2d");B("","",0,"\u266A Choisis une chanson \u266A"),o.userData.lyrics=B;let Q=W(new ar(.5,1),new Jt({color:16777215,metalness:1,roughness:.15,flatShading:!0,emissive:10325247,emissiveIntensity:.5}),0,4.4,-.2,!1);h(Q),h(W(new Ye(.01,.01,1.2,4),U(11184810),0,5.2,-.2,!1)),c.push(V=>{Q.rotation.y=V*.8}),[16740296,8255999,16769658].forEach((V,k)=>{let J=W(new jt(.9,4.2,20,1,!0),new ot({color:V,transparent:!0,opacity:.13,side:Qt,depthWrite:!1}),(k-1)*2.2,2.4,-.4,!1);J.position.y=2.6,h(J),c.push(oe=>{J.rotation.z=Math.sin(oe*.9+k*2)*.35,J.rotation.x=Math.cos(oe*.7+k)*.15})});let ue=[];for(let V=0;V<14;V++){let k=W(ge(.2,1,.12,.04),new ot({color:[16740296,8255999,16769658][V%3]}),-2.7+V*.42,.55,-1.6,!1);ue.push(k),h(k)}c.push(V=>{ue.forEach((k,J)=>{let oe=R?.4+Math.abs(Math.sin(V*6+J*.9))*1.6:.25+Math.abs(Math.sin(V*1.2+J))*.15;k.scale.y=oe,k.position.y=.4+oe*.5})}),h(W(new Ye(.02,.02,1,6),U(13421772,{metalness:.6}),.9,.9,1.2,!1)),h(he(.07,U(2759518),1,1.3,1,.9,1.45,1.2));let ce=new jn(13081599,1.2,14);ce.position.set(0,3,2),r.add(ce)}function Z(){M&&M.dispose(),M=tn(t()),M.root.scale.setScalar(z),M.root.position.set(N[0]*(P?.55:1),N[1],N[2]),M.face(e==="bakery"?.45:0),M.fx=(C,L)=>l.emit(C,L,M.root.position,z),r.add(M.root),M.setEmotion(R?"happy":"neutral")}Z();function F(C,L){if(p=L,T&&(f.remove(T),T=null),e==="deco"&&C==="decor"&&L&&Ui[L]){let O=Ui[L](),B=new dn().setFromObject(O),Q=B.getSize(new G),ae=Math.max(.3,Math.min(1,1.9/Math.max(Q.x,Q.y,Q.z,.1)));O.scale.setScalar(ae);let ue=new dn().setFromObject(O);O.position.set(1.5-(ue.min.x+ue.max.x)/2,.2-ue.min.y,1.3-(ue.min.z+ue.max.z)/2),f.add(O),T=O}}function E(){let C=i.clientWidth||320,L=i.clientHeight||300;n.setSize(C,L,!1),s.style.width="100%",s.style.height="100%",o.aspect=C/L,o.fov=C/L<1?44:34,_=C/L<.8?9.6:6.6,o.position.z=_,P=C/L<.8,M&&(M.root.position.x=N[0]*(P?.55:1)),o.updateProjectionMatrix()}new ResizeObserver(E).observe(i),E(),s.style.touchAction="none",s.addEventListener("pointerup",()=>{M&&(M.hop(4.6),M.setEmotion("happy"),l.emit("heart",4,M.root.position,z),setTimeout(()=>M&&M.setEmotion(R?"happy":"neutral"),1400))});let I=new Fn,q=!0;"IntersectionObserver"in window&&new IntersectionObserver(C=>{q=C[0].isIntersecting},{threshold:.01}).observe(i);function w(){if(!A)return;if(requestAnimationFrame(w),!q||document.hidden){I.getDelta();return}let C=Math.min(.05,I.getDelta());b+=C,o.position.x=Math.sin(b*.25)*.35,o.lookAt(o.position.x*.3,1.25,0),c.forEach(L=>L(b)),T&&(T.rotation.y+=C*.5),R&&M?(M.setTalking(Math.sin(b*9)>-.2),M.face(Math.sin(b*2)*.35),M.st.y<.02&&Math.random()<C*1.2&&M.hop(2.6),Math.random()<C*2&&l.emit("star",1,M.root.position,z)):M&&(M.setTalking(!1),e!=="bakery"&&M.face(Math.sin(b*.6)*.3)),M&&M.update(C,b,!1,!1),l.update(C),Math.random()<C*.6&&l.emit("star",1,new G((Math.random()-.5)*6,1+Math.random()*2,.5),1),n.render(r,o)}return w(),{setItem:F,rebuild(){Z(),M.hop(3.6)},emote(C){M&&(M.setEmotion(C),M.hop(4))},sing(C){R=!!C,M&&M.setEmotion(R?"happy":"neutral")},lyrics(C,L,O,B){o.userData.lyrics&&o.userData.lyrics(C,L,O,B)},destroy(){A=!1,M&&M.dispose(),n.dispose(),n.forceContextLoss&&n.forceContextLoss(),s.parentNode&&s.parentNode.removeChild(s)}}}var ws=null,Lo=null,Do=null,pc={};function ku(i,e){if(pc[i])return pc[i];try{ws||(ws=new kn({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),ws.setPixelRatio(1),ws.setSize(256,256,!1),Lo=new Mn,Cs(Lo),Do=new wt(26,1,.1,30),Do.position.set(0,1.25,4.6),Do.lookAt(0,.78,0));let t=e();t.root.scale.setScalar(1.2),t.face(-.25),t.update(.016,.3,!1,!0),Lo.add(t.root),ws.render(Lo,Do);let n=ws.domElement.toDataURL("image/png");return t.dispose(),pc[i]=n,n}catch{return""}}function fx(i,e){return ku("a"+i+(e||""),()=>{let t=tn(As(i));return e&&t.setEmotion(e),t})}function dx(i,e){return ku("m"+(i||"")+(e||""),()=>{let t=tn({mika:!0,acc:i?[i]:[]});return e&&t.setEmotion(e),t})}return Qu(px);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
