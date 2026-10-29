var Mika3DMod=(()=>{var sl=Object.defineProperty;var Su=Object.getOwnPropertyDescriptor;var Eu=Object.getOwnPropertyNames;var Tu=Object.prototype.hasOwnProperty;var wu=(i,e)=>{for(var t in e)sl(i,t,{get:e[t],enumerable:!0})},Au=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Eu(e))!Tu.call(i,s)&&s!==t&&sl(i,s,{get:()=>e[s],enumerable:!(n=Su(e,s))||n.enumerable});return i};var Ru=i=>Au(sl({},"__esModule",{value:!0}),i);var Xx={};wu(Xx,{AV_ACC:()=>lu,AV_COLORS:()=>ru,AV_EARS:()=>au,AV_FACE:()=>ou,AV_SHAPE:()=>cu,AV_TAIL:()=>hu,DECOR_IDS:()=>Lx,avatarOpts:()=>Hi,avatarPng:()=>Vx,createCharacter:()=>Qt,init:()=>Ux,initClass:()=>Bx,initInterior:()=>Gx,initPlaza:()=>Hx,initPreview:()=>Fx,initStage:()=>Ox,mikaPng:()=>Wx,normAv:()=>fu});var Lh=0,ql=1,Dh=2;var Ni=1,Nh=2,ws=3,gi=0,Gt=1,Zt=2,zn=0,As=1,xi=2,Yl=3,Zl=4,Uh=5;var Ui=100,Fh=101,Oh=102,Bh=103,Hh=104,zh=200,kh=201,Gh=202,Vh=203,Jl=204,$l=205,Wh=206,Xh=207,qh=208,Yh=209,Zh=210,Jh=211,$h=212,Kh=213,jh=214,ga=0,xa=1,_a=2,ls=3,ya=4,va=5,Ma=6,ba=7,Kl=0,Qh=1,ef=2,En=0,jl=1,Ql=2,ec=3,tc=4,nc=5,ic=6,Sr=7;var sc=300,_i=301,Fi=302,Qa=303,eo=304,Er=306,bn=1e3,Ln=1001,Sa=1002,Bt=1003,tf=1004;var Tr=1005;var kt=1006,to=1007;var yi=1008;var rn=1009,rc=1010,ac=1011,Rs=1012,no=1013,Tn=1014,pn=1015,wn=1016,io=1017,so=1018,Cs=1020,oc=35902,lc=35899,cc=1021,hc=1022,mn=1023,Dn=1026,vi=1027,ro=1028,ao=1029,Mi=1030,oo=1031;var lo=1033,wr=33776,Ar=33777,Rr=33778,Cr=33779,co=35840,ho=35841,fo=35842,uo=35843,po=36196,mo=37492,go=37496,xo=37488,_o=37489,Pr=37490,yo=37491,vo=37808,Mo=37809,bo=37810,So=37811,Eo=37812,To=37813,wo=37814,Ao=37815,Ro=37816,Co=37817,Po=37818,Io=37819,Lo=37820,Do=37821,No=36492,Uo=36494,Fo=36495,Oo=36283,Bo=36284,Ir=36285,Ho=36286;var $s=2300,Ea=2301,pa=2302,Ll=2303,Dl=2400,Nl=2401,Ul=2402;var nf=3200;var zo=0,sf=1,ii="",qt="srgb",Ks="srgb-linear",js="linear",gt="srgb";var ma=7680;var rf=519,af=512,of=513,lf=514,ko=515,cf=516,hf=517,Go=518,ff=519,fc=35044;var uc="300 es",Mn=2e3,cs=2001;function Cu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Pu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uf(){let i=Qs("canvas");return i.style.display="block",i}var Kc={},hs=null;function er(...i){let e="THREE."+i.shift();hs?hs("log",e,...i):console.log(e,...i)}function df(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function je(...i){i=df(i);let e="THREE."+i.shift();if(hs)hs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ke(...i){i=df(i);let e="THREE."+i.shift();if(hs)hs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Pi(...i){let e=i.join(" ");e in Kc||(Kc[e]=!0,je(...i))}function pf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var mf={[ga]:xa,[_a]:Ma,[ya]:ba,[ls]:va,[xa]:ga,[Ma]:_a,[ba]:ya,[va]:ls},Nn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var rl=Math.PI/180,Ta=180/Math.PI;function Kn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function Iu(i,e){return(i%e+e)%e}function al(i,e,t){return(1-t)*i+t*e}function In(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Re=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Un=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],f=n[s+2],u=n[s+3],h=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(u!==x||l!==h||c!==d||f!==g){let m=l*h+c*d+f*g+u*x;m<0&&(h=-h,d=-d,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let A=Math.acos(m),w=Math.sin(A);p=Math.sin(p*A)/w,o=Math.sin(o*A)/w,l=l*p+h*o,c=c*p+d*o,f=f*p+g*o,u=u*p+x*o}else{l=l*p+h*o,c=c*p+d*o,f=f*p+g*o,u=u*p+x*o;let A=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=A,c*=A,f*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],f=n[s+3],u=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+f*u+l*d-c*h,e[t+1]=l*g+f*h+c*u-o*d,e[t+2]=c*g+f*d+o*h-l*u,e[t+3]=f*g-o*u-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(s/2),u=o(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*f*u+c*d*g,this._y=c*d*u-h*f*g,this._z=c*f*g+h*d*u,this._w=c*f*u-h*d*g;break;case"YXZ":this._x=h*f*u+c*d*g,this._y=c*d*u-h*f*g,this._z=c*f*g-h*d*u,this._w=c*f*u+h*d*g;break;case"ZXY":this._x=h*f*u-c*d*g,this._y=c*d*u+h*f*g,this._z=c*f*g+h*d*u,this._w=c*f*u-h*d*g;break;case"ZYX":this._x=h*f*u-c*d*g,this._y=c*d*u+h*f*g,this._z=c*f*g-h*d*u,this._w=c*f*u+h*d*g;break;case"YZX":this._x=h*f*u+c*d*g,this._y=c*d*u+h*f*g,this._z=c*f*g-h*d*u,this._w=c*f*u-h*d*g;break;case"XZY":this._x=h*f*u-c*d*g,this._y=c*d*u-h*f*g,this._z=c*f*g+h*d*u,this._w=c*f*u+h*d*g;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],u=t[10],h=n+o+u;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(f-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+a*o+s*c-r*l,this._y=s*f+a*l+r*o-n*c,this._z=r*f+a*c+n*l-s*o,this._w=a*f-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),f=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*f,this.y=n+l*f+o*c-r*u,this.z=s+l*u+r*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ol.copy(this).projectOnVector(e),this.sub(ol)}reflect(e){return this.sub(ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ol=new W,jc=new Un,tt=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let f=this.elements;return f[0]=e,f[1]=s,f[2]=o,f[3]=t,f[4]=r,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],u=n[7],h=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],A=s[1],w=s[4],M=s[7],C=s[2],v=s[5],R=s[8];return r[0]=a*x+o*A+l*C,r[3]=a*m+o*w+l*v,r[6]=a*p+o*M+l*R,r[1]=c*x+f*A+u*C,r[4]=c*m+f*w+u*v,r[7]=c*p+f*M+u*R,r[2]=h*x+d*A+g*C,r[5]=h*m+d*w+g*v,r[8]=h*p+d*M+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-n*r*f+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=f*a-o*c,h=o*l-f*r,d=c*r-a*l,g=t*u+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-f*n)*x,e[2]=(o*n-s*a)*x,e[3]=h*x,e[4]=(f*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Pi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ll.makeScale(e,t)),this}rotate(e){return Pi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ll.makeRotation(-e)),this}translate(e,t){return Pi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ll=new tt,Qc=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eh=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lu(){let i={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===gt&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?js:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Pi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Pi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ks]:{primaries:e,whitePoint:n,transfer:js,toXYZ:Qc,fromXYZ:eh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:Qc,fromXYZ:eh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}var ct=Lu();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vi,wa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vi===void 0&&(Vi=Qs("canvas")),Vi.width=e.width,Vi.height=e.height;let s=Vi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Vi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Du=0,fs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(cl(s[a].image)):r.push(cl(s[a]))}else r=cl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function cl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}var Nu=0,hl=new W,jt=class i extends Nn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ln,s=Ln,r=kt,a=yi,o=mn,l=rn,c=i.DEFAULT_ANISOTROPY,f=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Kn(),this.name="",this.source=new fs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hl).x}get height(){return this.source.getSize(hl).y}get depth(){return this.source.getSize(hl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bn:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case Sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bn:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case Sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=sc;jt.DEFAULT_ANISOTROPY=1;var wt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],f=l[4],u=l[8],h=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,M=(d+1)/2,C=(p+1)/2,v=(f+h)/4,R=(u+x)/4,y=(g+m)/4;return w>M&&w>C?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=v/n,r=R/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=v/s,r=y/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=R/r,s=y/r),this.set(n,s,r,t),this}let A=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(h-f)*(h-f));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(u-x)/A,this.z=(h-f)/A,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Aa=class extends Nn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new jt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new fs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends Aa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},tr=class extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ra=class extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var dt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,f,u,h,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,f,u,h,d,g,x,m)}set(e,t,n,s,r,a,o,l,c,f,u,h,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=f,p[10]=u,p[14]=h,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Wi.setFromMatrixColumn(e,0).length(),r=1/Wi.setFromMatrixColumn(e,1).length(),a=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let h=a*f,d=a*u,g=o*f,x=o*u;t[0]=l*f,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*f,d=l*u,g=c*f,x=c*u;t[0]=h+x*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*f,t[9]=-o,t[2]=d*o-g,t[6]=x+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*f,d=l*u,g=c*f,x=c*u;t[0]=h-x*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*f,t[9]=x-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*f,d=a*u,g=o*f,x=o*u;t[0]=l*f,t[4]=g*c-d,t[8]=h*c+x,t[1]=l*u,t[5]=x*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,d=a*c,g=o*l,x=o*c;t[0]=l*f,t[4]=x-h*u,t[8]=g*u+d,t[1]=u,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=d*u+g,t[10]=h-x*u}else if(e.order==="XZY"){let h=a*l,d=a*c,g=o*l,x=o*c;t[0]=l*f,t[4]=-u,t[8]=c*f,t[1]=h*u+x,t[5]=a*f,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*f,t[10]=x*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uu,e,Fu)}lookAt(e,t,n){let s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),oi.crossVectors(n,an),oi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),oi.crossVectors(n,an)),oi.normalize(),kr.crossVectors(an,oi),s[0]=oi.x,s[4]=kr.x,s[8]=an.x,s[1]=oi.y,s[5]=kr.y,s[9]=an.y,s[2]=oi.z,s[6]=kr.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],u=n[5],h=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],A=n[3],w=n[7],M=n[11],C=n[15],v=s[0],R=s[4],y=s[8],P=s[12],O=s[1],X=s[5],Z=s[9],U=s[13],T=s[2],L=s[6],J=s[10],E=s[14],D=s[3],B=s[7],le=s[11],G=s[15];return r[0]=a*v+o*O+l*T+c*D,r[4]=a*R+o*X+l*L+c*B,r[8]=a*y+o*Z+l*J+c*le,r[12]=a*P+o*U+l*E+c*G,r[1]=f*v+u*O+h*T+d*D,r[5]=f*R+u*X+h*L+d*B,r[9]=f*y+u*Z+h*J+d*le,r[13]=f*P+u*U+h*E+d*G,r[2]=g*v+x*O+m*T+p*D,r[6]=g*R+x*X+m*L+p*B,r[10]=g*y+x*Z+m*J+p*le,r[14]=g*P+x*U+m*E+p*G,r[3]=A*v+w*O+M*T+C*D,r[7]=A*R+w*X+M*L+C*B,r[11]=A*y+w*Z+M*J+C*le,r[15]=A*P+w*U+M*E+C*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],u=e[6],h=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15],A=l*d-c*h,w=o*d-c*u,M=o*h-l*u,C=a*d-c*f,v=a*h-l*f,R=a*u-o*f;return t*(x*A-m*w+p*M)-n*(g*A-m*C+p*v)+s*(g*w-x*C+p*R)-r*(g*M-x*v+m*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return t*(a*f-o*c)-n*(r*f-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=e[9],h=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],A=t*o-n*a,w=t*l-s*a,M=t*c-r*a,C=n*l-s*o,v=n*c-r*o,R=s*c-r*l,y=f*x-u*g,P=f*m-h*g,O=f*p-d*g,X=u*m-h*x,Z=u*p-d*x,U=h*p-d*m,T=A*U-w*Z+M*X+C*O-v*P+R*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/T;return e[0]=(o*U-l*Z+c*X)*L,e[1]=(s*Z-n*U-r*X)*L,e[2]=(x*R-m*v+p*C)*L,e[3]=(h*v-u*R-d*C)*L,e[4]=(l*O-a*U-c*P)*L,e[5]=(t*U-s*O+r*P)*L,e[6]=(m*M-g*R-p*w)*L,e[7]=(f*R-h*M+d*w)*L,e[8]=(a*Z-o*O+c*y)*L,e[9]=(n*O-t*Z-r*y)*L,e[10]=(g*v-x*M+p*A)*L,e[11]=(u*M-f*v-d*A)*L,e[12]=(o*P-a*X-l*y)*L,e[13]=(t*X-n*P+s*y)*L,e[14]=(x*w-g*C-m*A)*L,e[15]=(f*C-u*w+h*A)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,f=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+n,f*l-s*a,0,c*l-s*o,f*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,f=a+a,u=o+o,h=r*c,d=r*f,g=r*u,x=a*f,m=a*u,p=o*u,A=l*c,w=l*f,M=l*u,C=n.x,v=n.y,R=n.z;return s[0]=(1-(x+p))*C,s[1]=(d+M)*C,s[2]=(g-w)*C,s[3]=0,s[4]=(d-M)*v,s[5]=(1-(h+p))*v,s[6]=(m+A)*v,s[7]=0,s[8]=(g+w)*R,s[9]=(m-A)*R,s[10]=(1-(h+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Wi.set(s[0],s[1],s[2]).length(),o=Wi.set(s[4],s[5],s[6]).length(),l=Wi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_n.copy(this);let c=1/a,f=1/o,u=1/l;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=f,_n.elements[5]*=f,_n.elements[6]*=f,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Mn,l=!1){let c=this.elements,f=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===Mn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===cs)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Mn,l=!1){let c=this.elements,f=2/(t-e),u=2/(n-s),h=-(t+e)/(t-e),d=-(n+s)/(n-s),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===Mn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===cs)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Wi=new W,_n=new dt,Uu=new W(0,0,0),Fu=new W(1,1,1),oi=new W,kr=new W,an=new W,th=new dt,nh=new Un,Qn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],f=s[9],u=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(th,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nh.setFromEuler(this),this.setFromQuaternion(nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qn.DEFAULT_ORDER="XYZ";var us=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ou=0,ih=new W,Xi=new Un,Xn=new dt,Gr=new W,Bs=new W,Bu=new W,Hu=new Un,sh=new W(1,0,0),rh=new W(0,1,0),ah=new W(0,0,1),oh={type:"added"},zu={type:"removed"},qi={type:"childadded",child:null},fl={type:"childremoved",child:null},Ht=class i extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new W,t=new Qn,n=new Un,s=new W(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new tt}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(sh,e)}rotateY(e){return this.rotateOnAxis(rh,e)}rotateZ(e){return this.rotateOnAxis(ah,e)}translateOnAxis(e,t){return ih.copy(e).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sh,e)}translateY(e){return this.translateOnAxis(rh,e)}translateZ(e){return this.translateOnAxis(ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gr.copy(e):Gr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Bs,Gr,this.up):Xn.lookAt(Gr,Bs,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Xn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oh),qi.child=e,this.dispatchEvent(qi),qi.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zu),fl.child=e,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oh),qi.child=e,this.dispatchEvent(qi),qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,Bu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Hu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),u=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ht.DEFAULT_UP=new W(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Te=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},ku={type:"move"},ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ku)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function ul(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var et=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=Iu(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ul(a,r,e+1/3),this.g=ul(a,r,e),this.b=ul(a,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let n=gf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return ct.workingToColorSpace(Xt.copy(this),e),Math.round(lt(Xt.r*255,0,255))*65536+Math.round(lt(Xt.g*255,0,255))*256+Math.round(lt(Xt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Xt.copy(this),t);let n=Xt.r,s=Xt.g,r=Xt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,f=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=f<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=qt){ct.workingToColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,s=Xt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Vr);let n=al(li.h,Vr.h,t),s=al(li.s,Vr.s,t),r=al(li.l,Vr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new et;et.NAMES=gf;var nr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new et(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Sn=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},yn=new W,qn=new W,dl=new W,Yn=new W,Yi=new W,Zi=new W,lh=new W,pl=new W,ml=new W,gl=new W,xl=new wt,_l=new wt,yl=new wt,$n=class i{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),yn.subVectors(e,t),s.cross(yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){yn.subVectors(s,t),qn.subVectors(n,t),dl.subVectors(e,t);let a=yn.dot(yn),o=yn.dot(qn),l=yn.dot(dl),c=qn.dot(qn),f=qn.dot(dl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let h=1/u,d=(c*l-o*f)*h,g=(a*f-o*l)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return xl.setScalar(0),_l.setScalar(0),yl.setScalar(0),xl.fromBufferAttribute(e,t),_l.fromBufferAttribute(e,n),yl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(xl,r.x),a.addScaledVector(_l,r.y),a.addScaledVector(yl,r.z),a}static isFrontFacing(e,t,n,s){return yn.subVectors(n,t),qn.subVectors(e,t),yn.cross(qn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),yn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Yi.subVectors(s,n),Zi.subVectors(r,n),pl.subVectors(e,n);let l=Yi.dot(pl),c=Zi.dot(pl);if(l<=0&&c<=0)return t.copy(n);ml.subVectors(e,s);let f=Yi.dot(ml),u=Zi.dot(ml);if(f>=0&&u<=f)return t.copy(s);let h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(n).addScaledVector(Yi,a);gl.subVectors(e,r);let d=Yi.dot(gl),g=Zi.dot(gl);if(g>=0&&d<=g)return t.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Zi,o);let m=f*g-d*u;if(m<=0&&u-f>=0&&d-g>=0)return lh.subVectors(r,s),o=(u-f)/(u-f+(d-g)),t.copy(s).addScaledVector(lh,o);let p=1/(m+x+h);return a=x*p,o=h*p,t.copy(n).addScaledVector(Yi,a).addScaledVector(Zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nn=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),Xr.subVectors(this.max,Hs),Ji.subVectors(e.a,Hs),$i.subVectors(e.b,Hs),Ki.subVectors(e.c,Hs),ci.subVectors($i,Ji),hi.subVectors(Ki,$i),Ti.subVectors(Ji,Ki);let t=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Ti.z,Ti.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Ti.z,0,-Ti.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Ti.y,Ti.x,0];return!vl(t,Ji,$i,Ki,Xr)||(t=[1,0,0,0,1,0,0,0,1],!vl(t,Ji,$i,Ki,Xr))?!1:(qr.crossVectors(ci,hi),t=[qr.x,qr.y,qr.z],vl(t,Ji,$i,Ki,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zn=[new W,new W,new W,new W,new W,new W,new W,new W],vn=new W,Wr=new nn,Ji=new W,$i=new W,Ki=new W,ci=new W,hi=new W,Ti=new W,Hs=new W,Xr=new W,qr=new W,wi=new W;function vl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){wi.fromArray(i,r);let o=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),f=n.dot(wi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var Dt=new W,Yr=new Re,Gu=0,Yt=class extends Nn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fc,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ir=class extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var sr=class extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xt=class extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Vu=new nn,zs=new W,Ml=new W,ei=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Vu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);let t=zs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(zs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ml.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(Ml)),this.expandByPoint(zs.copy(e.center).sub(Ml))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Wu=0,dn=new dt,bl=new Ht,ji=new W,on=new nn,ks=new nn,Ot=new W,Nt=class i extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cu(e)?sr:ir)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return bl.lookAt(e),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(on.min,ks.min),on.expandByPoint(Ot),Ot.addVectors(on.max,ks.max),on.expandByPoint(Ot)):(on.expandByPoint(ks.min),on.expandByPoint(ks.max))}on.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Ot.fromBufferAttribute(o,c),l&&(ji.fromBufferAttribute(e,c),Ot.add(ji)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Yt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new W,l[y]=new W;let c=new W,f=new W,u=new W,h=new Re,d=new Re,g=new Re,x=new W,m=new W;function p(y,P,O){c.fromBufferAttribute(n,y),f.fromBufferAttribute(n,P),u.fromBufferAttribute(n,O),h.fromBufferAttribute(r,y),d.fromBufferAttribute(r,P),g.fromBufferAttribute(r,O),f.sub(c),u.sub(c),d.sub(h),g.sub(h);let X=1/(d.x*g.y-g.x*d.y);isFinite(X)&&(x.copy(f).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(X),m.copy(u).multiplyScalar(d.x).addScaledVector(f,-g.x).multiplyScalar(X),o[y].add(x),o[P].add(x),o[O].add(x),l[y].add(m),l[P].add(m),l[O].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let y=0,P=A.length;y<P;++y){let O=A[y],X=O.start,Z=O.count;for(let U=X,T=X+Z;U<T;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let w=new W,M=new W,C=new W,v=new W;function R(y){C.fromBufferAttribute(s,y),v.copy(C);let P=o[y];w.copy(P),w.sub(C.multiplyScalar(C.dot(P))).normalize(),M.crossVectors(v,P);let X=M.dot(l[y])<0?-1:1;a.setXYZW(y,w.x,w.y,w.z,X)}for(let y=0,P=A.length;y<P;++y){let O=A[y],X=O.start,Z=O.count;for(let U=X,T=X+Z;U<T;U+=3)R(e.getX(U+0)),R(e.getX(U+1)),R(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new W,r=new W,a=new W,o=new W,l=new W,c=new W,f=new W,u=new W;if(e)for(let h=0,d=e.count;h<d;h+=3){let g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),f.subVectors(a,r),u.subVectors(s,r),f.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(f),l.add(f),c.add(f),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),f.subVectors(a,r),u.subVectors(s,r),f.cross(u),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){let c=o.array,f=o.itemSize,u=o.normalized,h=new c.constructor(l.length*f),d=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*f;for(let p=0;p<f;p++)h[g++]=c[d++]}return new Yt(h,f,u)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let f=0,u=c.length;f<u;f++){let h=c[f],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){let d=c[u];f.push(d.toJSON(e.data))}f.length>0&&(s[l]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(t))}let r=e.morphAttributes;for(let c in r){let f=[],u=r[c];for(let h=0,d=u.length;h<d;h++)f.push(u[h].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,f=a.length;c<f;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ca=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fc,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Kt=new W,rr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){er("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){er("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Sl=new W,Xu=new W,qu=new tt,en=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Sl.subVectors(n,t).cross(Xu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Sl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qu.getNormalMatrix(e),s=this.coplanarPoint(Sl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Yu=0,Fn=class extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=As,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jl,this.blendDst=$l,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ma,this.stencilZFail=ma,this.stencilZPass=ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new en().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},On=class extends Fn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qi,Gs=new W,es=new W,ts=new W,ns=new Re,Vs=new Re,xf=new dt,Zr=new W,Ws=new W,Jr=new W,ch=new Re,El=new Re,hh=new Re,ti=class extends Ht{constructor(e=new On){if(super(),this.isSprite=!0,this.type="Sprite",Qi===void 0){Qi=new Nt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ca(t,5);Qi.setIndex([0,1,2,0,2,3]),Qi.setAttribute("position",new rr(n,3,0,!1)),Qi.setAttribute("uv",new rr(n,2,3,!1))}this.geometry=Qi,this.material=e,this.center=new Re(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),es.setFromMatrixScale(this.matrixWorld),xf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&es.multiplyScalar(-ts.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;$r(Zr.set(-.5,-.5,0),ts,a,es,s,r),$r(Ws.set(.5,-.5,0),ts,a,es,s,r),$r(Jr.set(.5,.5,0),ts,a,es,s,r),ch.set(0,0),El.set(1,0),hh.set(1,1);let o=e.ray.intersectTriangle(Zr,Ws,Jr,!1,Gs);if(o===null&&($r(Ws.set(-.5,.5,0),ts,a,es,s,r),El.set(0,1),o=e.ray.intersectTriangle(Zr,Jr,Ws,!1,Gs),o===null))return;let l=e.ray.origin.distanceTo(Gs);l<e.near||l>e.far||t.push({distance:l,point:Gs.clone(),uv:$n.getInterpolation(Gs,Zr,Ws,Jr,ch,El,hh,new Re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function $r(i,e,t,n,s,r){ns.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Vs.x=r*ns.x-s*ns.y,Vs.y=s*ns.x+r*ns.y):Vs.copy(ns),i.copy(e),i.x+=Vs.x,i.y+=Vs.y,i.applyMatrix4(xf)}var Jn=new W,Tl=new W,Kr=new W,jr=new W,ps=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Tl.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),jr.copy(this.origin).sub(Tl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Kr),o=jr.dot(this.direction),l=-jr.dot(Kr),c=jr.lengthSq(),f=Math.abs(1-a*a),u,h,d,g;if(f>0)if(u=a*l-o,h=a*o-l,g=r*f,u>=0)if(h>=-g)if(h<=g){let x=1/f;u*=x,h*=x,d=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=r,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+h*(h+2*l)+c);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Tl).addScaledVector(Kr,h),d}intersectSphere(e,t){if(e.radius<0)return null;Jn.subVectors(e.center,this.origin);let n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),f>=0?(r=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(r=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,u=e.x-a.x,h=e.y-a.y,d=e.z-a.z,g=t.x-a.x,x=t.y-a.y,m=t.z-a.z,p=n.x-a.x,A=n.y-a.y,w=n.z-a.z,M=Math.abs(l),C=Math.abs(c),v=Math.abs(f),R,y,P,O,X,Z,U,T,L,J,E,D;if(M>=C&&M>=v?(P=l,Z=u,L=g,D=p,l>=0?(R=c,y=f,O=h,X=d,U=x,T=m,J=A,E=w):(R=f,y=c,O=d,X=h,U=m,T=x,J=w,E=A)):C>=v?(P=c,Z=h,L=x,D=A,c>=0?(R=f,y=l,O=d,X=u,U=m,T=g,J=w,E=p):(R=l,y=f,O=u,X=d,U=g,T=m,J=p,E=w)):(P=f,Z=d,L=m,D=w,f>=0?(R=l,y=c,O=u,X=h,U=g,T=x,J=p,E=A):(R=c,y=l,O=h,X=u,U=x,T=g,J=A,E=p)),P===0)return null;let B=R/P,le=y/P,G=1/P,ue=O-B*Z,z=X-le*Z,ne=U-B*L,xe=T-le*L,ye=J-B*D,j=E-le*D,Q=ye*xe-j*ne,ie=ue*j-z*ye,k=ne*z-xe*ue;if(s){if(Q<0||ie<0||k<0)return null}else if((Q<0||ie<0||k<0)&&(Q>0||ie>0||k>0))return null;let H=Q+ie+k;if(H===0)return null;let ee=G*(Q*Z+ie*L+k*D);return(H>0?ee<0:ee>0)?null:this.at(ee/H,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Je=class extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},fh=new dt,Ai=new ps,Qr=new ei,uh=new W,ea=new W,ta=new W,na=new W,wl=new W,ia=new W,dh=new W,sa=new W,ht=class extends Ht{constructor(e=new Nt,t=new Je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ia.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=o[l],u=r[l];f!==0&&(wl.fromBufferAttribute(u,e),a?ia.addScaledVector(wl,f):ia.addScaledVector(wl.sub(t),f))}t.add(ia)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(r),Ai.copy(e.ray).recast(e.near),!(Qr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Qr,uh)===null||Ai.origin.distanceToSquared(uh)>(e.far-e.near)**2))&&(fh.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(fh),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,u=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=a[m.materialIndex],A=Math.max(m.start,d.start),w=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=A,C=w;M<C;M+=3){let v=o.getX(M),R=o.getX(M+1),y=o.getX(M+2);s=ra(this,p,e,n,c,f,u,v,R,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let A=o.getX(m),w=o.getX(m+1),M=o.getX(m+2);s=ra(this,a,e,n,c,f,u,A,w,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=a[m.materialIndex],A=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=A,C=w;M<C;M+=3){let v=M,R=M+1,y=M+2;s=ra(this,p,e,n,c,f,u,v,R,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let A=m,w=m+1,M=m+2;s=ra(this,a,e,n,c,f,u,A,w,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Zu(i,e,t,n,s,r,a,o){let l;if(e.side===Gt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===gi,o),l===null)return null;sa.copy(o),sa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(sa);return c<t.near||c>t.far?null:{distance:c,point:sa.clone(),object:i}}function ra(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ea),i.getVertexPosition(l,ta),i.getVertexPosition(c,na);let f=Zu(i,e,t,n,ea,ta,na,dh);if(f){let u=new W;$n.getBarycoord(dh,ea,ta,na,u),s&&(f.uv=$n.getInterpolatedAttribute(s,o,l,c,u,new Re)),r&&(f.uv1=$n.getInterpolatedAttribute(r,o,l,c,u,new Re)),a&&(f.normal=$n.getInterpolatedAttribute(a,o,l,c,u,new W),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new W,materialIndex:0};$n.getNormal(ea,ta,na,h.normal),f.face=h,f.barycoord=u}return f}var ar=class extends jt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Bt,f=Bt,u,h){super(null,a,o,l,c,f,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var or=class extends Yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},is=new dt,ph=new dt,aa=[],mh=new nn,Ju=new dt,Xs=new ht,qs=new ei,ms=class extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new or(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ju)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),mh.copy(e.boundingBox).applyMatrix4(is),this.boundingBox.union(mh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),qs.copy(e.boundingSphere).applyMatrix4(is),this.boundingSphere.union(qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),e.ray.intersectsSphere(qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,is),ph.multiplyMatrices(n,is),Xs.matrixWorld=ph,Xs.raycast(e,aa);for(let a=0,o=aa.length;a<o;a++){let l=aa[a];l.instanceId=r,l.object=this,t.push(l)}aa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new or(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ar(new Float32Array(s*this.count),s,this.count,ro,pn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ri=new ei,$u=new Re(.5,.5),oa=new W,gs=class{constructor(e=new en,t=new en,n=new en,s=new en,r=new en,a=new en){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],f=r[4],u=r[5],h=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],A=r[12],w=r[13],M=r[14],C=r[15];if(s[0].setComponents(c-a,d-f,p-g,C-A).normalize(),s[1].setComponents(c+a,d+f,p+g,C+A).normalize(),s[2].setComponents(c+o,d+u,p+x,C+w).normalize(),s[3].setComponents(c-o,d-u,p-x,C-w).normalize(),n)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,d-h,p-m,C-M).normalize();else if(s[4].setComponents(c-l,d-h,p-m,C-M).normalize(),t===Mn)s[5].setComponents(c+l,d+h,p+m,C+M).normalize();else if(t===cs)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);let t=$u.distanceTo(e.center);return Ri.radius=.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(oa.x=s.normal.x>0?e.max.x:e.min.x,oa.y=s.normal.y>0?e.max.y:e.min.y,oa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xs=class extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gh=new dt,Fl=new ps,la=new ei,ca=new W,lr=class extends Ht{constructor(e=new Nt,t=new xs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(s),la.radius+=r,e.ray.intersectsSphere(la)===!1)return;gh.copy(s).invert(),Fl.copy(e.ray).applyMatrix4(gh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=h,x=d;g<x;g++){let m=c.getX(g);ca.fromBufferAttribute(u,m),xh(ca,m,l,s,e,t,this)}}else{let h=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=h,x=d;g<x;g++)ca.fromBufferAttribute(u,g),xh(ca,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function xh(i,e,t,n,s,r,a){let o=Fl.distanceSqToPoint(i);if(o<t){let l=new W;Fl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var cr=class extends jt{constructor(e=[],t=_i,n,s,r,a,o,l,c,f){super(e,t,n,s,r,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_s=class extends jt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ui=class extends jt{constructor(e,t,n=Tn,s,r,a,o=Bt,l=Bt,c,f=Dn,u=1){if(f!==Dn&&f!==vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:u};super(h,s,r,a,o,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Pa=class extends ui{constructor(e,t=Tn,n=_i,s,r,a=Bt,o=Bt,l,c=Dn){let f={width:e,height:e,depth:1},u=[f,f,f,f,f,f];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},hr=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Bn=class i extends Nt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],f=[],u=[],h=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(u,2));function g(x,m,p,A,w,M,C,v,R,y,P){let O=M/R,X=C/y,Z=M/2,U=C/2,T=v/2,L=R+1,J=y+1,E=0,D=0,B=new W;for(let le=0;le<J;le++){let G=le*X-U;for(let ue=0;ue<L;ue++){let z=ue*O-Z;B[x]=z*A,B[m]=G*w,B[p]=T,c.push(B.x,B.y,B.z),B[x]=0,B[m]=0,B[p]=v>0?1:-1,f.push(B.x,B.y,B.z),u.push(ue/R),u.push(1-le/y),E+=1}}for(let le=0;le<y;le++)for(let G=0;G<R;G++){let ue=h+G+L*le,z=h+G+L*(le+1),ne=h+(G+1)+L*(le+1),xe=h+(G+1)+L*le;l.push(ue,z,xe),l.push(z,ne,xe),D+=6}o.addGroup(d,D,P),d+=D,h+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ni=class i extends Nt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new W,f=new Re;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){let d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),f.x=(a[h]/e+1)/2,f.y=(a[h+1]/e+1)/2,l.push(f.x,f.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(o,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ce=class i extends Nt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let f=[],u=[],h=[],d=[],g=0,x=[],m=n/2,p=0;A(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(f),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(d,2));function A(){let M=new W,C=new W,v=0,R=(t-e)/n;for(let y=0;y<=r;y++){let P=[],O=y/r,X=O*(t-e)+e;for(let Z=0;Z<=s;Z++){let U=Z/s,T=U*l+o,L=Math.sin(T),J=Math.cos(T);C.x=X*L,C.y=-O*n+m,C.z=X*J,u.push(C.x,C.y,C.z),M.set(L,R,J).normalize(),h.push(M.x,M.y,M.z),d.push(U,1-O),P.push(g++)}x.push(P)}for(let y=0;y<s;y++)for(let P=0;P<r;P++){let O=x[P][y],X=x[P+1][y],Z=x[P+1][y+1],U=x[P][y+1];(e>0||P!==0)&&(f.push(O,X,U),v+=3),(t>0||P!==r-1)&&(f.push(X,Z,U),v+=3)}c.addGroup(p,v,0),p+=v}function w(M){let C=g,v=new Re,R=new W,y=0,P=M===!0?e:t,O=M===!0?1:-1;for(let Z=1;Z<=s;Z++)u.push(0,m*O,0),h.push(0,O,0),d.push(.5,.5),g++;let X=g;for(let Z=0;Z<=s;Z++){let T=Z/s*l+o,L=Math.cos(T),J=Math.sin(T);R.x=P*J,R.y=m*O,R.z=P*L,u.push(R.x,R.y,R.z),h.push(0,O,0),v.x=L*.5+.5,v.y=J*.5*O+.5,d.push(v.x,v.y),g++}for(let Z=0;Z<s;Z++){let U=C+Z,T=X+Z;M===!0?f.push(T,T+1,U):f.push(T+1,T,U),y+=3}c.addGroup(p,y,M===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Pt=class i extends Ce{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ia=class i extends Nt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),f(),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(r.slice(),3)),this.setAttribute("uv",new xt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(A){let w=new W,M=new W,C=new W;for(let v=0;v<t.length;v+=3)d(t[v+0],w),d(t[v+1],M),d(t[v+2],C),l(w,M,C,A)}function l(A,w,M,C){let v=C+1,R=[];for(let y=0;y<=v;y++){R[y]=[];let P=A.clone().lerp(M,y/v),O=w.clone().lerp(M,y/v),X=v-y;for(let Z=0;Z<=X;Z++)Z===0&&y===v?R[y][Z]=P:R[y][Z]=P.clone().lerp(O,Z/X)}for(let y=0;y<v;y++)for(let P=0;P<2*(v-y)-1;P++){let O=Math.floor(P/2);P%2===0?(h(R[y][O+1]),h(R[y+1][O]),h(R[y][O])):(h(R[y][O+1]),h(R[y+1][O+1]),h(R[y+1][O]))}}function c(A){let w=new W;for(let M=0;M<r.length;M+=3)w.x=r[M+0],w.y=r[M+1],w.z=r[M+2],w.normalize().multiplyScalar(A),r[M+0]=w.x,r[M+1]=w.y,r[M+2]=w.z}function f(){let A=new W;for(let w=0;w<r.length;w+=3){A.x=r[w+0],A.y=r[w+1],A.z=r[w+2];let M=m(A)/2/Math.PI+.5,C=p(A)/Math.PI+.5;a.push(M,1-C)}g(),u()}function u(){for(let A=0;A<a.length;A+=6){let w=a[A+0],M=a[A+2],C=a[A+4],v=Math.max(w,M,C),R=Math.min(w,M,C);v>.9&&R<.1&&(w<.2&&(a[A+0]+=1),M<.2&&(a[A+2]+=1),C<.2&&(a[A+4]+=1))}}function h(A){r.push(A.x,A.y,A.z)}function d(A,w){let M=A*3;w.x=e[M+0],w.y=e[M+1],w.z=e[M+2]}function g(){let A=new W,w=new W,M=new W,C=new W,v=new Re,R=new Re,y=new Re;for(let P=0,O=0;P<r.length;P+=9,O+=6){A.set(r[P+0],r[P+1],r[P+2]),w.set(r[P+3],r[P+4],r[P+5]),M.set(r[P+6],r[P+7],r[P+8]),v.set(a[O+0],a[O+1]),R.set(a[O+2],a[O+3]),y.set(a[O+4],a[O+5]),C.copy(A).add(w).add(M).divideScalar(3);let X=m(C);x(v,O+0,A,X),x(R,O+2,w,X),x(y,O+4,M,X)}}function x(A,w,M,C){C<0&&A.x===1&&(a[w]=A.x-1),M.x===0&&M.z===0&&(a[w]=C/2/Math.PI+.5)}function m(A){return Math.atan2(A.z,-A.x)}function p(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let f=n[s],h=n[s+1]-f,d=(a-f)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Re:new W);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new W,s=[],r=[],a=[],o=new W,l=new dt;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new W)}r[0]=new W,a[0]=new W;let c=Number.MAX_VALUE,f=Math.abs(s[0].x),u=Math.abs(s[0].y),h=Math.abs(s[0].z);f<=c&&(c=f,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(lt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(lt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ys=class extends ln{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Re){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let f=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*f-d*u+this.aX,c=h*u+d*f+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},La=class extends ys{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function dc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,f,u){let h=(a-r)/c-(o-r)/(c+f)+(o-a)/f,d=(o-a)/f-(l-a)/(f+u)+(l-o)/u;h*=f,d*=f,s(a,o,h,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var _h=new W,yh=new W,Al=new dc,Rl=new dc,Cl=new dc,Da=class extends ln{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new W){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,f;this.closed||o>0?c=s[(o-1)%r]:(yh.subVectors(s[0],s[1]).add(s[0]),c=yh);let u=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?f=s[(o+2)%r]:(_h.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=_h),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(f),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Al.initNonuniformCatmullRom(c.x,u.x,h.x,f.x,g,x,m),Rl.initNonuniformCatmullRom(c.y,u.y,h.y,f.y,g,x,m),Cl.initNonuniformCatmullRom(c.z,u.z,h.z,f.z,g,x,m)}else this.curveType==="catmullrom"&&(Al.initCatmullRom(c.x,u.x,h.x,f.x,this.tension),Rl.initCatmullRom(c.y,u.y,h.y,f.y,this.tension),Cl.initCatmullRom(c.z,u.z,h.z,f.z,this.tension));return n.set(Al.calc(l),Rl.calc(l),Cl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new W().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function vh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Ku(i,e){let t=1-i;return t*t*e}function ju(i,e){return 2*(1-i)*i*e}function Qu(i,e){return i*i*e}function Zs(i,e,t,n){return Ku(i,e)+ju(i,t)+Qu(i,n)}function ed(i,e){let t=1-i;return t*t*t*e}function td(i,e){let t=1-i;return 3*t*t*i*e}function nd(i,e){return 3*(1-i)*i*i*e}function id(i,e){return i*i*i*e}function Js(i,e,t,n,s){return ed(i,e)+td(i,t)+nd(i,n)+id(i,s)}var fr=class extends ln{constructor(e=new Re,t=new Re,n=new Re,s=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Re){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Js(e,s.x,r.x,a.x,o.x),Js(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Na=class extends ln{constructor(e=new W,t=new W,n=new W,s=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new W){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Js(e,s.x,r.x,a.x,o.x),Js(e,s.y,r.y,a.y,o.y),Js(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ur=class extends ln{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ua=class extends ln{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dr=class extends ln{constructor(e=new Re,t=new Re,n=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Re){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Zs(e,s.x,r.x,a.x),Zs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fa=class extends ln{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Zs(e,s.x,r.x,a.x),Zs(e,s.y,r.y,a.y),Zs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pr=class extends ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],f=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(vh(o,l.x,c.x,f.x,u.x),vh(o,l.y,c.y,f.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Re().fromArray(s))}return this}},Ol=Object.freeze({__proto__:null,ArcCurve:La,CatmullRomCurve3:Da,CubicBezierCurve:fr,CubicBezierCurve3:Na,EllipseCurve:ys,LineCurve:ur,LineCurve3:Ua,QuadraticBezierCurve:dr,QuadraticBezierCurve3:Fa,SplineCurve:pr}),Oa=class extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ol[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let f=l[c];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ol[s.type]().fromJSON(s))}return this}},mr=class extends Oa{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ur(this.currentPoint.clone(),new Re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new dr(this.currentPoint.clone(),new Re(e,t),new Re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new fr(this.currentPoint.clone(),new Re(e,t),new Re(n,s),new Re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new pr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+c,t+f,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new ys(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ii=class extends mr{constructor(e){super(e),this.uuid=Kn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new mr().fromJSON(s))}return this}};function sd(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=_f(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=cd(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let f=o,u=l;for(let h=t;h<s;h+=t){let d=i[h],g=i[h+1];d<o&&(o=d),g<l&&(l=g),d>f&&(f=d),g>u&&(u=g)}c=Math.max(f-o,u-l),c=c!==0?32767/c:0}return gr(r,a,t,o,l,c,0),a}function _f(i,e,t,n,s){let r;if(s===vd(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Mh(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Mh(a/n|0,i[a],i[a+1],r);return r&&vs(r,r.next)&&(_r(r),r=r.next),r}function Li(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(vs(t,t.next)||Ct(t.prev,t,t.next)===0)){if(_r(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function gr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&pd(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?ad(i,n,s,r):rd(i)){e.push(l.i,i.i,c.i),_r(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=od(Li(i),e),gr(i,e,t,n,s,r,2)):a===2&&ld(i,e,t,n,s,r):gr(Li(i),e,t,n,s,r,1);break}}}function rd(i){let e=i.prev,t=i,n=i.next;if(Ct(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,f=Math.min(s,r,a),u=Math.min(o,l,c),h=Math.max(s,r,a),d=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=f&&g.x<=h&&g.y>=u&&g.y<=d&&Ys(s,o,r,l,a,c,g.x,g.y)&&Ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ad(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Ct(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,f=s.y,u=r.y,h=a.y,d=Math.min(o,l,c),g=Math.min(f,u,h),x=Math.max(o,l,c),m=Math.max(f,u,h),p=Bl(d,g,e,t,n),A=Bl(x,m,e,t,n),w=i.prevZ,M=i.nextZ;for(;w&&w.z>=p&&M&&M.z<=A;){if(w.x>=d&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&Ys(o,f,l,u,c,h,w.x,w.y)&&Ct(w.prev,w,w.next)>=0||(w=w.prevZ,M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Ys(o,f,l,u,c,h,M.x,M.y)&&Ct(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;w&&w.z>=p;){if(w.x>=d&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&Ys(o,f,l,u,c,h,w.x,w.y)&&Ct(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;M&&M.z<=A;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Ys(o,f,l,u,c,h,M.x,M.y)&&Ct(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function od(i,e){let t=i;do{let n=t.prev,s=t.next.next;!vs(n,s)&&vf(n,t,t.next,s)&&xr(n,s)&&xr(s,n)&&(e.push(n.i,t.i,s.i),_r(t),_r(t.next),t=i=s),t=t.next}while(t!==i);return Li(t)}function ld(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xd(a,o)){let l=Mf(a,o);a=Li(a,a.next),l=Li(l,l.next),gr(a,e,t,n,s,r,0),gr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function cd(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=_f(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(gd(c))}s.sort(hd);for(let r=0;r<s.length;r++)t=fd(s[r],t);return t}function hd(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function fd(i,e){let t=ud(i,e);if(!t)return e;let n=Mf(t,i);return Li(n,n.next),Li(t,t.next)}function ud(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(vs(i,t))return t;do{if(vs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,f=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&yf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);xr(t,i)&&(u<f||u===f&&(t.x>a.x||t.x===a.x&&dd(a,t)))&&(a=t,f=u)}t=t.next}while(t!==o);return a}function dd(i,e){return Ct(i.prev,i,e.prev)<0&&Ct(e.next,i,i.next)<0}function pd(i,e,t,n){let s=i;do s.z===0&&(s.z=Bl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,md(s)}function md(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Bl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function gd(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function yf(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ys(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&yf(i,e,t,n,s,r,a,o)}function xd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!_d(i,e)&&(xr(i,e)&&xr(e,i)&&yd(i,e)&&(Ct(i.prev,i,e.prev)||Ct(i,e.prev,e))||vs(i,e)&&Ct(i.prev,i,i.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function vs(i,e){return i.x===e.x&&i.y===e.y}function vf(i,e,t,n){let s=fa(Ct(i,e,t)),r=fa(Ct(i,e,n)),a=fa(Ct(t,n,i)),o=fa(Ct(t,n,e));return!!(s!==r&&a!==o||s===0&&ha(i,t,e)||r===0&&ha(i,n,e)||a===0&&ha(t,i,n)||o===0&&ha(t,e,n))}function ha(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function fa(i){return i>0?1:i<0?-1:0}function _d(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&vf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function xr(i,e){return Ct(i.prev,i,i.next)<0?Ct(i,e,i.next)>=0&&Ct(i,i.prev,e)>=0:Ct(i,e,i.prev)<0||Ct(i,i.next,e)<0}function yd(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Mf(i,e){let t=Hl(i.i,i.x,i.y),n=Hl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Mh(i,e,t,n){let s=Hl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function _r(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vd(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var zl=class{static triangulate(e,t,n=2){return sd(e,t,n)}},Ci=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];bh(e),Sh(n,e);let a=e.length;t.forEach(bh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Sh(n,t[l]);let o=zl.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function bh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Sh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var cn=class i extends Nt{constructor(e=new Ii([new Re(.5,.5),new Re(-.5,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new xt(s,3)),this.setAttribute("uv",new xt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:Md,w,M=!1,C,v,R,y;if(p){w=p.getSpacedPoints(f),M=!0,h=!1;let se=p.isCatmullRomCurve3?p.closed:!1;C=p.computeFrenetFrames(f,se),v=new W,R=new W,y=new W}h||(m=0,d=0,g=0,x=0);let P=o.extractPoints(c),O=P.shape,X=P.holes;if(!Ci.isClockWise(O)){O=O.reverse();for(let se=0,N=X.length;se<N;se++){let ae=X[se];Ci.isClockWise(ae)&&(X[se]=ae.reverse())}}function U(se){let ae=10000000000000001e-36,ge=se[0];for(let be=1;be<=se.length;be++){let q=be%se.length,re=se[q],me=re.x-ge.x,Ae=re.y-ge.y,V=me*me+Ae*Ae,rt=Math.max(Math.abs(re.x),Math.abs(re.y),Math.abs(ge.x),Math.abs(ge.y)),Qe=ae*rt*rt;if(V<=Qe){se.splice(q,1),be--;continue}ge=re}}U(O),X.forEach(U);let T=X.length,L=O;for(let se=0;se<T;se++){let N=X[se];O=O.concat(N)}function J(se,N,ae){return N||Ke("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(N,ae)}let E=O.length;function D(se,N,ae){let ge,be,q,re=se.x-N.x,me=se.y-N.y,Ae=ae.x-se.x,V=ae.y-se.y,rt=re*re+me*me,Qe=re*V-me*Ae;if(Math.abs(Qe)>Number.EPSILON){let F=Math.sqrt(rt),_=Math.sqrt(Ae*Ae+V*V),te=N.x-me/F,Y=N.y+re/F,fe=ae.x-V/_,we=ae.y+Ae/_,Pe=((fe-te)*V-(we-Y)*Ae)/(re*V-me*Ae);ge=te+re*Pe-se.x,be=Y+me*Pe-se.y;let _e=ge*ge+be*be;if(_e<=2)return new Re(ge,be);q=Math.sqrt(_e/2)}else{let F=!1;re>Number.EPSILON?Ae>Number.EPSILON&&(F=!0):re<-Number.EPSILON?Ae<-Number.EPSILON&&(F=!0):Math.sign(me)===Math.sign(V)&&(F=!0),F?(ge=-me,be=re,q=Math.sqrt(rt)):(ge=re,be=me,q=Math.sqrt(rt/2))}return new Re(ge/q,be/q)}let B=[];for(let se=0,N=L.length,ae=N-1,ge=se+1;se<N;se++,ae++,ge++)ae===N&&(ae=0),ge===N&&(ge=0),B[se]=D(L[se],L[ae],L[ge]);let le=[],G,ue=B.concat();for(let se=0,N=T;se<N;se++){let ae=X[se];G=[];for(let ge=0,be=ae.length,q=be-1,re=ge+1;ge<be;ge++,q++,re++)q===be&&(q=0),re===be&&(re=0),G[ge]=D(ae[ge],ae[q],ae[re]);le.push(G),ue=ue.concat(G)}let z;if(m===0)z=Ci.triangulateShape(L,X);else{let se=[],N=[];for(let ae=0;ae<m;ae++){let ge=ae/m,be=d*Math.cos(ge*Math.PI/2),q=g*Math.sin(ge*Math.PI/2)+x;for(let re=0,me=L.length;re<me;re++){let Ae=J(L[re],B[re],q);ie(Ae.x,Ae.y,-be),ge===0&&se.push(Ae)}for(let re=0,me=T;re<me;re++){let Ae=X[re];G=le[re];let V=[];for(let rt=0,Qe=Ae.length;rt<Qe;rt++){let F=J(Ae[rt],G[rt],q);ie(F.x,F.y,-be),ge===0&&V.push(F)}ge===0&&N.push(V)}}z=Ci.triangulateShape(se,N)}let ne=z.length,xe=g+x;for(let se=0;se<E;se++){let N=h?J(O[se],ue[se],xe):O[se];M?(R.copy(C.normals[0]).multiplyScalar(N.x),v.copy(C.binormals[0]).multiplyScalar(N.y),y.copy(w[0]).add(R).add(v),ie(y.x,y.y,y.z)):ie(N.x,N.y,0)}for(let se=1;se<=f;se++)for(let N=0;N<E;N++){let ae=h?J(O[N],ue[N],xe):O[N];M?(R.copy(C.normals[se]).multiplyScalar(ae.x),v.copy(C.binormals[se]).multiplyScalar(ae.y),y.copy(w[se]).add(R).add(v),ie(y.x,y.y,y.z)):ie(ae.x,ae.y,u/f*se)}for(let se=m-1;se>=0;se--){let N=se/m,ae=d*Math.cos(N*Math.PI/2),ge=g*Math.sin(N*Math.PI/2)+x;for(let be=0,q=L.length;be<q;be++){let re=J(L[be],B[be],ge);ie(re.x,re.y,u+ae)}for(let be=0,q=X.length;be<q;be++){let re=X[be];G=le[be];for(let me=0,Ae=re.length;me<Ae;me++){let V=J(re[me],G[me],ge);M?ie(V.x,V.y+w[f-1].y,w[f-1].x+ae):ie(V.x,V.y,u+ae)}}}ye(),j();function ye(){let se=s.length/3;if(h){let N=0,ae=E*N;for(let ge=0;ge<ne;ge++){let be=z[ge];k(be[2]+ae,be[1]+ae,be[0]+ae)}N=f+m*2,ae=E*N;for(let ge=0;ge<ne;ge++){let be=z[ge];k(be[0]+ae,be[1]+ae,be[2]+ae)}}else{for(let N=0;N<ne;N++){let ae=z[N];k(ae[2],ae[1],ae[0])}for(let N=0;N<ne;N++){let ae=z[N];k(ae[0]+E*f,ae[1]+E*f,ae[2]+E*f)}}n.addGroup(se,s.length/3-se,0)}function j(){let se=s.length/3,N=0;Q(L,N),N+=L.length;for(let ae=0,ge=X.length;ae<ge;ae++){let be=X[ae];Q(be,N),N+=be.length}n.addGroup(se,s.length/3-se,1)}function Q(se,N){let ae=se.length;for(;--ae>=0;){let ge=ae,be=ae-1;be<0&&(be=se.length-1);for(let q=0,re=f+m*2;q<re;q++){let me=E*q,Ae=E*(q+1),V=N+ge+me,rt=N+be+me,Qe=N+be+Ae,F=N+ge+Ae;H(V,rt,Qe,F)}}}function ie(se,N,ae){l.push(se),l.push(N),l.push(ae)}function k(se,N,ae){ee(se),ee(N),ee(ae);let ge=s.length/3,be=A.generateTopUV(n,s,ge-3,ge-2,ge-1);Se(be[0]),Se(be[1]),Se(be[2])}function H(se,N,ae,ge){ee(se),ee(N),ee(ge),ee(N),ee(ae),ee(ge);let be=s.length/3,q=A.generateSideWallUV(n,s,be-6,be-3,be-2,be-1);Se(q[0]),Se(q[1]),Se(q[3]),Se(q[1]),Se(q[2]),Se(q[3])}function ee(se){s.push(l[se*3+0]),s.push(l[se*3+1]),s.push(l[se*3+2])}function Se(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return bd(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ol[s.type]().fromJSON(s)),new i(n,e.options)}},Md={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],f=e[s*3+1];return[new Re(r,a),new Re(o,l),new Re(c,f)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],f=e[n*3+1],u=e[n*3+2],h=e[s*3],d=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-f)<Math.abs(a-c)?[new Re(a,1-l),new Re(c,1-u),new Re(h,1-g),new Re(x,1-p)]:[new Re(o,1-l),new Re(f,1-u),new Re(d,1-g),new Re(m,1-p)]}};function bd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var yr=class i extends Ia{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var vt=class i extends Nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,f=l+1,u=e/o,h=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<f;p++){let A=p*h-a;for(let w=0;w<c;w++){let M=w*u-r;g.push(M,-A,0),x.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<o;A++){let w=A+c*p,M=A+c*(p+1),C=A+1+c*(p+1),v=A+1+c*p;d.push(w,M,v),d.push(M,C,v)}this.setIndex(d),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ms=class i extends Nt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,f=[],u=new W,h=new W,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let A=[],w=p/n,M=a+w*o,C=e*Math.cos(M),v=Math.sqrt(e*e-C*C),R=0;p===0&&a===0?R=.5/t:p===n&&l===Math.PI&&(R=-.5/t);for(let y=0;y<=t;y++){let P=y/t,O=s+P*r;u.x=-v*Math.cos(O),u.y=C,u.z=v*Math.sin(O),g.push(u.x,u.y,u.z),h.copy(u).normalize(),x.push(h.x,h.y,h.z),m.push(P+R,1-w),A.push(c++)}f.push(A)}for(let p=0;p<n;p++)for(let A=0;A<t;A++){let w=f[p][A+1],M=f[p][A],C=f[p+1][A],v=f[p+1][A+1];(p!==0||a>0)&&d.push(w,M,v),(p!==n-1||l<Math.PI)&&d.push(M,C,v)}this.setIndex(d),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var at=class i extends Nt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],f=[],u=[],h=new W,d=new W,g=new W;for(let x=0;x<=n;x++){let m=a+x/n*o;for(let p=0;p<=s;p++){let A=p/s*r;d.x=(e+t*Math.cos(m))*Math.cos(A),d.y=(e+t*Math.cos(m))*Math.sin(A),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),h.x=e*Math.cos(A),h.y=e*Math.sin(A),g.subVectors(d,h).normalize(),f.push(g.x,g.y,g.z),u.push(p/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,A=(s+1)*(x-1)+m-1,w=(s+1)*(x-1)+m,M=(s+1)*x+m;l.push(p,A,M),l.push(A,w,M)}this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Oi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Eh(s))s.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Eh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Jt(i){let e={};for(let t=0;t<i.length;t++){let n=Oi(i[t]);for(let s in n)e[s]=n[s]}return e}function Eh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Sd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function pc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var bf={clone:Oi,merge:Jt},Ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ed,this.fragmentShader=Td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=Sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new et().setHex(s.value);break;case"v2":this.uniforms[n].value=new Re().fromArray(s.value);break;case"v3":this.uniforms[n].value=new W().fromArray(s.value);break;case"v4":this.uniforms[n].value=new wt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new dt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ba=class extends hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},zt=class extends Fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ha=class extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},za=class extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ss(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Pl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var di=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ka=class extends di{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dl,endingEnd:Dl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nl:r=e,o=2*t-n;break;case Ul:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nl:a=e,l=2*n-t;break;case Ul:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,f=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-h*m+2*h*x-h*g,A=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,w=(-1-d)*m+(1.5+d)*x+.5*g,M=d*m-d*x;for(let C=0;C!==o;++C)r[C]=p*a[f+C]+A*a[c+C]+w*a[l+C]+M*a[u+C];return r}},Ga=class extends di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=(n-t)/(s-t),u=1-f;for(let h=0;h!==o;++h)r[h]=a[c+h]*u+a[l+h]*f;return r}},Va=class extends di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wa=class extends di{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=this.inTangents,u=this.outTangents;if(!f||!u){let g=(n-t)/(s-t),x=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*x+a[l+m]*g;return r}let h=o*2,d=e-1;for(let g=0;g!==o;++g){let x=a[c+g],m=a[l+g],p=d*h+g*2,A=u[p],w=u[p+1],M=e*h+g*2,C=f[M],v=f[M+1],R=Ad(n,t,A,C,s);r[g]=Sf(R,x,w,v,m)}return r}};function Sf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function wd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Ad(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Sf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=wd(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var fn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ss(t,this.TimeBufferType),this.values=ss(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ss(e.times,Array),values:ss(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Pl(e.settings)&&(n.settings={inTangents:ss(e.settings.inTangents,Array),outTangents:ss(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Wa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case $s:t=this.InterpolantFactoryMethodDiscrete;break;case Ea:t=this.InterpolantFactoryMethodLinear;break;case pa:t=this.InterpolantFactoryMethodSmooth;break;case Ll:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return Ea;case this.InterpolantFactoryMethodSmooth:return pa;case this.InterpolantFactoryMethodBezier:return Ll}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Pl(this.settings)&&(Th(this.settings.inTangents,e),Th(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ke("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ke("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Pu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ke("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pa,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],f=e[o+1];if(c!==f&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,h=u-n,d=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[h+g]||x!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,h=a*n;for(let d=0;d!==n;++d)t[h+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Pl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Th(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Ea;var pi=class extends fn{constructor(e,t,n){super(e,t,n)}};pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=$s;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Xa=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}};Xa.prototype.ValueTypeName="color";var qa=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}};qa.prototype.ValueTypeName="number";var Ya=class extends di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let f=c+o;c!==f;c+=4)Un.slerpFlat(r,0,a,c-o,a,c,l);return r}},vr=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ya(this.times,this.values,this.getValueSize(),e)}};vr.prototype.ValueTypeName="quaternion";vr.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends fn{constructor(e,t,n){super(e,t,n)}};mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=$s;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}};Za.prototype.ValueTypeName="vector";var Ja=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return c.push(f,u),this},this.removeHandler=function(f){let u=c.indexOf(f);return u!==-1&&c.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=c.length;u<h;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ef=new Ja,$a=class{constructor(e){this.manager=e!==void 0?e:Ef,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};$a.DEFAULT_MATERIAL_NAME="__DEFAULT";var bs=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ss=class extends bs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Il=new dt,wh=new W,Ah=new W,Mr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gs,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;wh.setFromMatrixPosition(e.matrixWorld),t.position.copy(wh),Ah.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ah),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Il,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===cs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ua=new W,da=new Un,Pn=new W,br=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ua,da,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,da,Pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ua,da,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,da,Pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fi=new W,Rh=new Re,Ch=new Re,Rt=class extends br{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ta*2*Math.atan(Math.tan(rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,Rh,Ch),t.subVectors(Ch,Rh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var kl=class extends Mr{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0}},sn=class extends bs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new kl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Es=class extends br{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gl=class extends Mr{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ts=class extends bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Gl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var rs=-90,as=1,Ka=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rt(rs,as,e,t);s.layers=this.layers,this.add(s);let r=new Rt(rs,as,e,t);r.layers=this.layers,this.add(r);let a=new Rt(rs,as,e,t);a.layers=this.layers,this.add(a);let o=new Rt(rs,as,e,t);o.layers=this.layers,this.add(o);let l=new Rt(rs,as,e,t);l.layers=this.layers,this.add(l);let c=new Rt(rs,as,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,f]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(u,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ja=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var mc="\\[\\]\\.:\\/",Rd=new RegExp("["+mc+"]","g"),gc="[^"+mc+"]",Cd="[^"+mc.replace("\\.","")+"]",Pd=/((?:WC+[\/:])*)/.source.replace("WC",gc),Id=/(WCOD+)?/.source.replace("WCOD",Cd),Ld=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gc),Dd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gc),Nd=new RegExp("^"+Pd+Id+Ld+Dd+"$"),Ud=["material","materials","bones","map"],Vl=class{constructor(e,t,n){let s=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Tt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rd,"")}static parseTrackName(e){let t=Nd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ud.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===c){c=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=Vl;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yx=new Float32Array(1);var Ph=new dt,Di=class{constructor(e,t,n=0,s=1/0){this.ray=new ps(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ph.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ph),this}intersectObject(e,t=!0,n=[]){return Wl(e,this,n,t),n.sort(Ih),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Wl(e[s],this,n,t);return n.sort(Ih),n}};function Ih(i,e){return i.distance-e.distance}function Wl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Wl(r[a],e,t,!0)}}var Hn=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,je("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Xl=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function xc(i,e,t,n){let s=Fd(n);switch(t){case cc:return i*e;case ro:return i*e/s.components*s.byteLength;case ao:return i*e/s.components*s.byteLength;case Mi:return i*e*2/s.components*s.byteLength;case oo:return i*e*2/s.components*s.byteLength;case hc:return i*e*3/s.components*s.byteLength;case mn:return i*e*4/s.components*s.byteLength;case lo:return i*e*4/s.components*s.byteLength;case wr:case Ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rr:case Cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ho:case uo:return Math.max(i,16)*Math.max(e,8)/4;case co:case fo:return Math.max(i,8)*Math.max(e,8)/2;case po:case mo:case xo:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case go:case Pr:case yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case bo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case So:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case To:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Po:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Io:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Lo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Do:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case No:case Uo:case Fo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Oo:case Bo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ir:case Ho:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fd(i){switch(i){case rn:case rc:return{byteLength:1,components:1};case Rs:case ac:case wn:return{byteLength:2,components:1};case io:case so:return{byteLength:2,components:4};case Tn:case no:case pn:return{byteLength:4,components:1};case oc:case lc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function qf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Bd(i){let e=new WeakMap;function t(o,l){let c=o.array,f=o.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let f=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,f);else{u.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<u.length;d++){let g=u[h],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,u[h]=x)}u.length=h+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];i.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zd=`#ifdef USE_ALPHAHASH
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
#endif`,kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xd=`#ifdef USE_AOMAP
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
#endif`,qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yd=`#ifdef USE_BATCHING
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
#endif`,Zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jd=`#ifdef USE_IRIDESCENCE
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
#endif`,Qd=`#ifdef USE_BUMPMAP
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
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lp=`#define PI 3.141592653589793
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
} // validated`,cp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hp=`vec3 transformedNormal = objectNormal;
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
#endif`,fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",gp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yp=`#ifdef USE_ENVMAP
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
#endif`,vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
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
#endif`,bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wp=`#ifdef USE_GRADIENTMAP
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
}`,Ap=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fp=`PhysicalMaterial material;
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
#endif`,Op=`uniform sampler2D dfgLUT;
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
}`,Bp=`
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
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
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
#endif`,zp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jp=`#if defined( USE_POINTS_UV )
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
#endif`,$p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`#ifdef USE_MORPHTARGETS
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
#endif`,n0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,s0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,l0=`#ifdef USE_NORMALMAP
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
#endif`,c0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,m0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,E0=`float getShadowMask() {
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
}`,T0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w0=`#ifdef USE_SKINNING
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
#endif`,A0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R0=`#ifdef USE_SKINNING
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
#endif`,C0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D0=`#ifdef USE_TRANSMISSION
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
#endif`,N0=`#ifdef USE_TRANSMISSION
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z0=`uniform sampler2D t2D;
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
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`#include <common>
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
}`,q0=`#if DEPTH_PACKING == 3200
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
}`,Y0=`#define DISTANCE
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
}`,Z0=`#define DISTANCE
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`uniform float scale;
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
}`,j0=`uniform vec3 diffuse;
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
}`,Q0=`#include <common>
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
}`,em=`uniform vec3 diffuse;
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
}`,tm=`#define LAMBERT
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
}`,nm=`#define LAMBERT
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
}`,im=`#define MATCAP
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
}`,sm=`#define MATCAP
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
}`,rm=`#define NORMAL
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
}`,am=`#define NORMAL
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
}`,om=`#define PHONG
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
}`,lm=`#define PHONG
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
}`,cm=`#define STANDARD
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
}`,hm=`#define STANDARD
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
}`,fm=`#define TOON
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
}`,um=`#define TOON
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
}`,dm=`uniform float size;
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
}`,pm=`uniform vec3 diffuse;
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
}`,mm=`#include <common>
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
}`,gm=`uniform vec3 color;
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
}`,xm=`uniform float rotation;
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
}`,_m=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Hd,alphahash_pars_fragment:zd,alphamap_fragment:kd,alphamap_pars_fragment:Gd,alphatest_fragment:Vd,alphatest_pars_fragment:Wd,aomap_fragment:Xd,aomap_pars_fragment:qd,batching_pars_vertex:Yd,batching_vertex:Zd,begin_vertex:Jd,beginnormal_vertex:$d,bsdfs:Kd,iridescence_fragment:jd,bumpmap_pars_fragment:Qd,clipping_planes_fragment:ep,clipping_planes_pars_fragment:tp,clipping_planes_pars_vertex:np,clipping_planes_vertex:ip,color_fragment:sp,color_pars_fragment:rp,color_pars_vertex:ap,color_vertex:op,common:lp,cube_uv_reflection_fragment:cp,defaultnormal_vertex:hp,displacementmap_pars_vertex:fp,displacementmap_vertex:up,emissivemap_fragment:dp,emissivemap_pars_fragment:pp,colorspace_fragment:mp,colorspace_pars_fragment:gp,envmap_fragment:xp,envmap_common_pars_fragment:_p,envmap_pars_fragment:yp,envmap_pars_vertex:vp,envmap_physical_pars_fragment:Ip,envmap_vertex:Mp,fog_vertex:bp,fog_pars_vertex:Sp,fog_fragment:Ep,fog_pars_fragment:Tp,gradientmap_pars_fragment:wp,lightmap_pars_fragment:Ap,lights_lambert_fragment:Rp,lights_lambert_pars_fragment:Cp,lights_pars_begin:Pp,lights_toon_fragment:Lp,lights_toon_pars_fragment:Dp,lights_phong_fragment:Np,lights_phong_pars_fragment:Up,lights_physical_fragment:Fp,lights_physical_pars_fragment:Op,lights_fragment_begin:Bp,lights_fragment_maps:Hp,lights_fragment_end:zp,lightprobes_pars_fragment:kp,logdepthbuf_fragment:Gp,logdepthbuf_pars_fragment:Vp,logdepthbuf_pars_vertex:Wp,logdepthbuf_vertex:Xp,map_fragment:qp,map_pars_fragment:Yp,map_particle_fragment:Zp,map_particle_pars_fragment:Jp,metalnessmap_fragment:$p,metalnessmap_pars_fragment:Kp,morphinstance_vertex:jp,morphcolor_vertex:Qp,morphnormal_vertex:e0,morphtarget_pars_vertex:t0,morphtarget_vertex:n0,normal_fragment_begin:i0,normal_fragment_maps:s0,normal_pars_fragment:r0,normal_pars_vertex:a0,normal_vertex:o0,normalmap_pars_fragment:l0,clearcoat_normal_fragment_begin:c0,clearcoat_normal_fragment_maps:h0,clearcoat_pars_fragment:f0,iridescence_pars_fragment:u0,opaque_fragment:d0,packing:p0,premultiplied_alpha_fragment:m0,project_vertex:g0,dithering_fragment:x0,dithering_pars_fragment:_0,roughnessmap_fragment:y0,roughnessmap_pars_fragment:v0,shadowmap_pars_fragment:M0,shadowmap_pars_vertex:b0,shadowmap_vertex:S0,shadowmask_pars_fragment:E0,skinbase_vertex:T0,skinning_pars_vertex:w0,skinning_vertex:A0,skinnormal_vertex:R0,specularmap_fragment:C0,specularmap_pars_fragment:P0,tonemapping_fragment:I0,tonemapping_pars_fragment:L0,transmission_fragment:D0,transmission_pars_fragment:N0,uv_pars_fragment:U0,uv_pars_vertex:F0,uv_vertex:O0,worldpos_vertex:B0,background_vert:H0,background_frag:z0,backgroundCube_vert:k0,backgroundCube_frag:G0,cube_vert:V0,cube_frag:W0,depth_vert:X0,depth_frag:q0,distance_vert:Y0,distance_frag:Z0,equirect_vert:J0,equirect_frag:$0,linedashed_vert:K0,linedashed_frag:j0,meshbasic_vert:Q0,meshbasic_frag:em,meshlambert_vert:tm,meshlambert_frag:nm,meshmatcap_vert:im,meshmatcap_frag:sm,meshnormal_vert:rm,meshnormal_frag:am,meshphong_vert:om,meshphong_frag:lm,meshphysical_vert:cm,meshphysical_frag:hm,meshtoon_vert:fm,meshtoon_frag:um,points_vert:dm,points_frag:pm,shadow_vert:mm,shadow_frag:gm,sprite_vert:xm,sprite_frag:_m},Fe={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Gn={basic:{uniforms:Jt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Jt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Jt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Jt([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Jt([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new et(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Jt([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Jt([Fe.points,Fe.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Jt([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Jt([Fe.common,Fe.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Jt([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Jt([Fe.sprite,Fe.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:Jt([Fe.common,Fe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:Jt([Fe.lights,Fe.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Gn.physical={uniforms:Jt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Vo={r:0,b:0,g:0},ym=new dt,Yf=new tt;Yf.set(-1,0,0,0,1,0,0,0,1);function vm(i,e,t,n,s,r){let a=new et(0),o=s===!0?0:1,l,c,f=null,u=0,h=null;function d(A){let w=A.isScene===!0?A.background:null;if(w&&w.isTexture){let M=A.backgroundBlurriness>0;w=e.get(w,M)}return w}function g(A){let w=!1,M=d(A);M===null?m(a,o):M&&M.isColor&&(m(M,1),w=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(A,w){let M=d(w);M&&(M.isCubeTexture||M.mapping===Er)?(c===void 0&&(c=new ht(new Bn(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Oi(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,v,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ym.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Yf),c.material.toneMapped=ct.getTransfer(M.colorSpace)!==gt,(f!==M||u!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,u=M.version,h=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ht(new vt(2,2),new hn({name:"BackgroundMaterial",uniforms:Oi(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ct.getTransfer(M.colorSpace)!==gt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||u!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,f=M,u=M.version,h=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function m(A,w){A.getRGB(Vo,pc(i)),t.buffers.color.setClear(Vo.r,Vo.g,Vo.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,w=1){a.set(A),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,m(a,o)},render:g,addToRenderList:x,dispose:p}}function Mm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(X,Z,U,T,L){let J=!1,E=u(X,T,U,Z);r!==E&&(r=E,c(r.object)),J=d(X,T,U,L),J&&g(X,T,U,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(X,Z,U,T),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return i.createVertexArray()}function c(X){return i.bindVertexArray(X)}function f(X){return i.deleteVertexArray(X)}function u(X,Z,U,T){let L=T.wireframe===!0,J=n[Z.id];J===void 0&&(J={},n[Z.id]=J);let E=X.isInstancedMesh===!0?X.id:0,D=J[E];D===void 0&&(D={},J[E]=D);let B=D[U.id];B===void 0&&(B={},D[U.id]=B);let le=B[L];return le===void 0&&(le=h(l()),B[L]=le),le}function h(X){let Z=[],U=[],T=[];for(let L=0;L<t;L++)Z[L]=0,U[L]=0,T[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:U,attributeDivisors:T,object:X,attributes:{},index:null}}function d(X,Z,U,T){let L=r.attributes,J=Z.attributes,E=0,D=U.getAttributes();for(let B in D)if(D[B].location>=0){let G=L[B],ue=J[B];if(ue===void 0&&(B==="instanceMatrix"&&X.instanceMatrix&&(ue=X.instanceMatrix),B==="instanceColor"&&X.instanceColor&&(ue=X.instanceColor)),G===void 0||G.attribute!==ue||ue&&G.data!==ue.data)return!0;E++}return r.attributesNum!==E||r.index!==T}function g(X,Z,U,T){let L={},J=Z.attributes,E=0,D=U.getAttributes();for(let B in D)if(D[B].location>=0){let G=J[B];G===void 0&&(B==="instanceMatrix"&&X.instanceMatrix&&(G=X.instanceMatrix),B==="instanceColor"&&X.instanceColor&&(G=X.instanceColor));let ue={};ue.attribute=G,G&&G.data&&(ue.data=G.data),L[B]=ue,E++}r.attributes=L,r.attributesNum=E,r.index=T}function x(){let X=r.newAttributes;for(let Z=0,U=X.length;Z<U;Z++)X[Z]=0}function m(X){p(X,0)}function p(X,Z){let U=r.newAttributes,T=r.enabledAttributes,L=r.attributeDivisors;U[X]=1,T[X]===0&&(i.enableVertexAttribArray(X),T[X]=1),L[X]!==Z&&(i.vertexAttribDivisor(X,Z),L[X]=Z)}function A(){let X=r.newAttributes,Z=r.enabledAttributes;for(let U=0,T=Z.length;U<T;U++)Z[U]!==X[U]&&(i.disableVertexAttribArray(U),Z[U]=0)}function w(X,Z,U,T,L,J,E){E===!0?i.vertexAttribIPointer(X,Z,U,L,J):i.vertexAttribPointer(X,Z,U,T,L,J)}function M(X,Z,U,T){x();let L=T.attributes,J=U.getAttributes(),E=Z.defaultAttributeValues;for(let D in J){let B=J[D];if(B.location>=0){let le=L[D];if(le===void 0&&(D==="instanceMatrix"&&X.instanceMatrix&&(le=X.instanceMatrix),D==="instanceColor"&&X.instanceColor&&(le=X.instanceColor)),le!==void 0){let G=le.normalized,ue=le.itemSize,z=e.get(le);if(z===void 0)continue;let ne=z.buffer,xe=z.type,ye=z.bytesPerElement,j=xe===i.INT||xe===i.UNSIGNED_INT||le.gpuType===no;if(le.isInterleavedBufferAttribute){let Q=le.data,ie=Q.stride,k=le.offset;if(Q.isInstancedInterleavedBuffer){for(let H=0;H<B.locationSize;H++)p(B.location+H,Q.meshPerAttribute);X.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let H=0;H<B.locationSize;H++)m(B.location+H);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let H=0;H<B.locationSize;H++)w(B.location+H,ue/B.locationSize,xe,G,ie*ye,(k+ue/B.locationSize*H)*ye,j)}else{if(le.isInstancedBufferAttribute){for(let Q=0;Q<B.locationSize;Q++)p(B.location+Q,le.meshPerAttribute);X.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Q=0;Q<B.locationSize;Q++)m(B.location+Q);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let Q=0;Q<B.locationSize;Q++)w(B.location+Q,ue/B.locationSize,xe,G,ue*ye,ue/B.locationSize*Q*ye,j)}}else if(E!==void 0){let G=E[D];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(B.location,G);break;case 3:i.vertexAttrib3fv(B.location,G);break;case 4:i.vertexAttrib4fv(B.location,G);break;default:i.vertexAttrib1fv(B.location,G)}}}}A()}function C(){P();for(let X in n){let Z=n[X];for(let U in Z){let T=Z[U];for(let L in T){let J=T[L];for(let E in J)f(J[E].object),delete J[E];delete T[L]}}delete n[X]}}function v(X){if(n[X.id]===void 0)return;let Z=n[X.id];for(let U in Z){let T=Z[U];for(let L in T){let J=T[L];for(let E in J)f(J[E].object),delete J[E];delete T[L]}}delete n[X.id]}function R(X){for(let Z in n){let U=n[Z];for(let T in U){let L=U[T];if(L[X.id]===void 0)continue;let J=L[X.id];for(let E in J)f(J[E].object),delete J[E];delete L[X.id]}}}function y(X){for(let Z in n){let U=n[Z],T=X.isInstancedMesh===!0?X.id:0,L=U[T];if(L!==void 0){for(let J in L){let E=L[J];for(let D in E)f(E[D].object),delete E[D];delete L[J]}delete U[T],Object.keys(U).length===0&&delete n[Z]}}}function P(){O(),a=!0,r!==s&&(r=s,c(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:O,dispose:C,releaseStatesOfGeometry:v,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function bm(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),t.update(c,n,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let h=0;for(let d=0;d<f;d++)h+=c[d];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Sm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==mn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let y=R===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==rn&&R!==pn&&!y&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",f=l(c);f!==c&&(je("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:w,maxFragmentUniforms:M,maxSamples:C,samples:v}}function Em(i){let e=this,t=null,n=0,s=!1,r=!1,a=new en,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let d=u.length!==0||h||n!==0||s;return s=h,n=u.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=f(u,h,0)},this.setState=function(u,h,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?f(null):c();else{let A=r?0:n,w=A*4,M=p.clippingState||null;l.value=M,M=f(g,h,w,d);for(let C=0;C!==w;++C)M[C]=t[C];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(u,h,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,A=h.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,M=d;w!==x;++w,M+=4)a.copy(u[w]).applyMatrix4(A,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Is=4,Tm=6,wm=20,Am=256,Lr=new Es,Tf=new et,_c=null,yc=0,vc=0,Mc=!1,Rm=new W,Bi=new W,Xo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Rm}=r;_c=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),Mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_c,yc,vc),this._renderer.xr.enabled=Mc,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_i||e.mapping===Fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_c=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),Mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:wn,format:mn,colorSpace:Ks,depthBuffer:!1},s=wf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Cm(r)),this._blurMaterial=Im(r,e,t),this._ggxMaterial=Pm(r,e,t)}return s}_compileMaterial(e){let t=new ht(new Nt,e);this._renderer.compile(t,Lr)}_sceneToCubeUV(e,t,n,s,r){let l=new Rt(90,1,t,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Tf),u.toneMapping=En,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ht(new Bn,new Je({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,A=e.background;A?A.isColor&&(m.color.copy(A),e.background=null,p=!0):(m.color.copy(Tf),p=!0);for(let w=0;w<6;w++){let M=w%3;M===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[w],r.y,r.z)):M===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[w]));let C=this._cubeSize;Ps(s,M*C,w>2?C:0,C,C),u.setRenderTarget(s),p&&u.render(x,l),u.render(e,l)}u.toneMapping=d,u.autoClear=h,e.background=A}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===_i||e.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Af());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ps(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Lr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-f*f),h=c*1.25,d=u*h,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Is?n-g+Is:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,Ps(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(o,Lr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ps(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(o,Lr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let f=this._sizeLods[s],u=3*f*(s>this._lodMax-Is?s-this._lodMax+Is:0),h=4*(this._cubeSize-f);Ps(t,u,h,3*f,2*f),a.setRenderTarget(t),a.render(l,Lr)}};function Cm(i){let e=[],t=[],n=i,s=i-Is+1+Tm;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,h=6,d=3,g=new Float32Array(d*h*u),x=new Float32Array(d*h*u);for(let p=0;p<u;p++){let A=p%3*2/3-1,w=p>2?0:-1,M=[A,w,0,A+2/3,w,0,A+2/3,w+1,0,A,w,0,A+2/3,w+1,0,A,w+1,0];g.set(M,d*h*p);for(let C=0;C<h;C++){let v=f[C*2]*2-1,R=f[C*2+1]*2-1;p===0?Bi.set(1,R,v):p===1?Bi.set(-v,1,-R):p===2?Bi.set(-v,R,1):p===3?Bi.set(-1,R,-v):p===4?Bi.set(-v,-1,R):Bi.set(v,R,-1),Bi.toArray(x,(p*h+C)*d)}}let m=new Nt;m.setAttribute("position",new Yt(g,d)),m.setAttribute("outputDirection",new Yt(x,d)),t.push(new ht(m,null)),n>Is&&n--}return{lodMeshes:t,sizeLods:e}}function wf(i,e,t){let n=new tn(i,e,t);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Pm(i,e,t){return new hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Am,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Im(i,e,t){return new hn({name:"SphericalGaussianBlur",defines:{SAMPLES:wm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Af(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Rf(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Yo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var qo=class extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new cr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bn(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:zn});r.uniforms.tEquirect.value=t;let a=new ht(s,r),o=t.minFilter;return t.minFilter===yi&&(t.minFilter=kt),new Ka(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Lm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Qa||d===eo)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let x=new qo(g.height);return x.fromEquirectangularTexture(i,h),e.set(h,x),h.addEventListener("dispose",c),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,g=d===Qa||d===eo,x=d===_i||d===Fi;if(g||x){let m=t.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Xo(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let A=h.image;return g&&A&&A.height>0||x&&A&&l(A)?(n===null&&(n=new Xo(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",f),m.texture):null}}}return h}function o(h,d){return d===Qa?h.mapping=_i:d===eo&&(h.mapping=Fi),h}function l(h){let d=0,g=6;for(let x=0;x<g;x++)h[x]!==void 0&&d++;return d===g}function c(h){let d=h.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(h){let d=h.target;d.removeEventListener("dispose",f);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Dm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Pi("WebGLRenderer: "+n+" extension not supported."),s}}}function Nm(i,e,t,n){let s={},r=new WeakMap;function a(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(u){let h=u.attributes;for(let d in h)e.update(h[d],i.ARRAY_BUFFER)}function c(u){let h=[],d=u.index,g=u.attributes.position,x=0;if(g===void 0)return;if(d!==null){let A=d.array;x=d.version;for(let w=0,M=A.length;w<M;w+=3){let C=A[w+0],v=A[w+1],R=A[w+2];h.push(C,v,v,R,R,C)}}else{let A=g.array;x=g.version;for(let w=0,M=A.length/3-1;w<M;w+=3){let C=w+0,v=w+1,R=w+2;h.push(C,v,v,R,R,C)}}let m=new(g.count>=65535?sr:ir)(h,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function f(u){let h=r.get(u);if(h){let d=u.index;d!==null&&h.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:f}}function Um(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,h){i.drawElements(n,h,r,u*a),t.update(h,n,1)}function c(u,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,u*a,d),t.update(h,n,d))}function f(u,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,u,0,d);let x=0;for(let m=0;m<d;m++)x+=h[m];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function Fm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Om(i,e,t){let n=new WeakMap,s=new wt;function r(a,o,l){let c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0,h=n.get(o);if(h===void 0||h.count!==u){let P=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",P)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],w=0;d===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let M=o.attributes.position.count*w,C=1;M>e.maxTextureSize&&(C=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let v=new Float32Array(M*C*4*u),R=new tr(v,M,C,u);R.type=pn,R.needsUpdate=!0;let y=w*4;for(let O=0;O<u;O++){let X=m[O],Z=p[O],U=A[O],T=M*C*4*O;for(let L=0;L<X.count;L++){let J=L*y;d===!0&&(s.fromBufferAttribute(X,L),v[T+J+0]=s.x,v[T+J+1]=s.y,v[T+J+2]=s.z,v[T+J+3]=0),g===!0&&(s.fromBufferAttribute(Z,L),v[T+J+4]=s.x,v[T+J+5]=s.y,v[T+J+6]=s.z,v[T+J+7]=0),x===!0&&(s.fromBufferAttribute(U,L),v[T+J+8]=s.x,v[T+J+9]=s.y,v[T+J+10]=s.z,v[T+J+11]=U.itemSize===4?s.w:1)}}h={count:u,texture:R,size:new Re(M,C)},n.set(o,h),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Bm(i,e,t,n,s){let r=new WeakMap;function a(c){let f=s.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==f&&(e.update(h),r.set(h,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==f&&(d.update(),r.set(d,f))}return h}function o(){r=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}var Hm={[jl]:"LINEAR_TONE_MAPPING",[Ql]:"REINHARD_TONE_MAPPING",[ec]:"CINEON_TONE_MAPPING",[tc]:"ACES_FILMIC_TONE_MAPPING",[ic]:"AGX_TONE_MAPPING",[Sr]:"NEUTRAL_TONE_MAPPING",[nc]:"CUSTOM_TONE_MAPPING"};function zm(i,e,t,n,s,r){let a=new tn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Nt;c.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new xt([0,2,0,0,2,0],2));let f=new Ba({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ht(c,f),h=new Es(-1,1,1,-1,0,1),d=null,g=null,x=!1,m,p=null,A=[],w=!1;this.setSize=function(M,C){a.setSize(M,C),o!==null&&o.setSize(M,C),l!==null&&l.setSize(M,C);for(let v=0;v<A.length;v++){let R=A[v];R.setSize&&R.setSize(M,C)}},this.setEffects=function(M){A=M,w=A.length>0&&A[0].isRenderPass===!0;let C=a.width,v=a.height;A.length>0&&o===null&&(o=new tn(C,v,{type:wn,depthBuffer:!1,stencilBuffer:!1}),l=new tn(C,v,{type:wn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<A.length;R++){let y=A[R];y.setSize&&y.setSize(C,v)}},this.begin=function(M,C){if(x||M.toneMapping===En&&A.length===0)return!1;if(p=C,C!==null){let v=C.width,R=C.height;(a.width!==v||a.height!==R)&&this.setSize(v,R)}return w===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=En,!0},this.hasRenderPass=function(){return w},this.end=function(M,C){M.toneMapping=m,x=!0;let v=a,R=o;for(let y=0;y<A.length;y++){let P=A[y];P.enabled!==!1&&(P.render(M,R,v,C),P.needsSwap!==!1&&(v=R,R=R===o?l:o))}if(d!==M.outputColorSpace||g!==M.toneMapping){d=M.outputColorSpace,g=M.toneMapping,f.defines={},ct.getTransfer(d)===gt&&(f.defines.SRGB_TRANSFER="");let y=Hm[g];y&&(f.defines[y]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=v.texture,M.setRenderTarget(p),M.render(u,h),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var Zf=new jt,Ec=new ui(1,1),Jf=new tr,$f=new Ra,Kf=new cr,Cf=[],Pf=[],If=new Float32Array(16),Lf=new Float32Array(9),Df=new Float32Array(4);function Ds(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Cf[s];if(r===void 0&&(r=new Float32Array(s),Cf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zo(i,e){let t=Pf[e];t===void 0&&(t=new Int32Array(e),Pf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function km(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function Vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function Wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function Xm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;Df.set(n),i.uniformMatrix2fv(this.addr,!1,Df),Ft(t,n)}}function qm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;Lf.set(n),i.uniformMatrix3fv(this.addr,!1,Lf),Ft(t,n)}}function Ym(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;If.set(n),i.uniformMatrix4fv(this.addr,!1,If),Ft(t,n)}}function Zm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function $m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function Km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function jm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function ng(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ec.compareFunction=t.isReversedDepthBuffer()?Go:ko,r=Ec):r=Zf,t.setTexture2D(e||r,s)}function ig(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$f,s)}function sg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Kf,s)}function rg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Jf,s)}function ag(i){switch(i){case 5126:return km;case 35664:return Gm;case 35665:return Vm;case 35666:return Wm;case 35674:return Xm;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return Zm;case 35667:case 35671:return Jm;case 35668:case 35672:return $m;case 35669:case 35673:return Km;case 5125:return jm;case 36294:return Qm;case 36295:return eg;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}function og(i,e){i.uniform1fv(this.addr,e)}function lg(i,e){let t=Ds(e,this.size,2);i.uniform2fv(this.addr,t)}function cg(i,e){let t=Ds(e,this.size,3);i.uniform3fv(this.addr,t)}function hg(i,e){let t=Ds(e,this.size,4);i.uniform4fv(this.addr,t)}function fg(i,e){let t=Ds(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ug(i,e){let t=Ds(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function dg(i,e){let t=Ds(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function pg(i,e){i.uniform1iv(this.addr,e)}function mg(i,e){i.uniform2iv(this.addr,e)}function gg(i,e){i.uniform3iv(this.addr,e)}function xg(i,e){i.uniform4iv(this.addr,e)}function _g(i,e){i.uniform1uiv(this.addr,e)}function yg(i,e){i.uniform2uiv(this.addr,e)}function vg(i,e){i.uniform3uiv(this.addr,e)}function Mg(i,e){i.uniform4uiv(this.addr,e)}function bg(i,e,t){let n=this.cache,s=e.length,r=Zo(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ec:a=Zf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Sg(i,e,t){let n=this.cache,s=e.length,r=Zo(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||$f,r[a])}function Eg(i,e,t){let n=this.cache,s=e.length,r=Zo(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Kf,r[a])}function Tg(i,e,t){let n=this.cache,s=e.length,r=Zo(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Jf,r[a])}function wg(i){switch(i){case 5126:return og;case 35664:return lg;case 35665:return cg;case 35666:return hg;case 35674:return fg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return xg;case 5125:return _g;case 36294:return yg;case 36295:return vg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Tg}}var Tc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ag(t.type)}},wc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wg(t.type)}},Ac=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},bc=/(\w+)(\])?(\[|\.)?/g;function Nf(i,e){i.seq.push(e),i.map[e.id]=e}function Ag(i,e,t){let n=i.name,s=n.length;for(bc.lastIndex=0;;){let r=bc.exec(n),a=bc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Nf(t,c===void 0?new Tc(o,i,e):new wc(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Ac(o),Nf(t,u)),t=u}}}var Ls=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Ag(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Uf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Rg=37297,Cg=0;function Pg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ff=new tt;function Ig(i){ct._getMatrix(Ff,ct.workingColorSpace,i);let e=`mat3( ${Ff.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case js:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Of(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Pg(i.getShaderSource(e),o)}else return r}function Lg(i,e){let t=Ig(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Dg={[jl]:"Linear",[Ql]:"Reinhard",[ec]:"Cineon",[tc]:"ACESFilmic",[ic]:"AgX",[Sr]:"Neutral",[nc]:"Custom"};function Ng(i,e){let t=Dg[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Wo=new W;function Ug(){ct.getLuminanceCoefficients(Wo);let i=Wo.x.toFixed(4),e=Wo.y.toFixed(4),t=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function Og(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Nr(i){return i!==""}function Bf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(i){return i.replace(Hg,kg)}var zg=new Map;function kg(i,e){let t=st[e];if(t===void 0){let n=zg.get(e);if(n!==void 0)t=st[n],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Rc(t)}var Gg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zf(i){return i.replace(Gg,Vg)}function Vg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Wg={[Ni]:"SHADOWMAP_TYPE_PCF",[ws]:"SHADOWMAP_TYPE_VSM"};function Xg(i){return Wg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var qg={[_i]:"ENVMAP_TYPE_CUBE",[Fi]:"ENVMAP_TYPE_CUBE",[Er]:"ENVMAP_TYPE_CUBE_UV"};function Yg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":qg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Zg={[Fi]:"ENVMAP_MODE_REFRACTION"};function Jg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Zg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $g={[Kl]:"ENVMAP_BLENDING_MULTIPLY",[Qh]:"ENVMAP_BLENDING_MIX",[ef]:"ENVMAP_BLENDING_ADD"};function Kg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":$g[i.combine]||"ENVMAP_BLENDING_NONE"}function jg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Qg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Xg(t),c=Yg(t),f=Jg(t),u=Kg(t),h=jg(t),d=Fg(t),g=Og(r),x=s.createProgram(),m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Nr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Nr).join(`
`),p.length>0&&(p+=`
`)):(m=[kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),p=[kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?st.tonemapping_pars_fragment:"",t.toneMapping!==En?Ng("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,Lg("linearToOutputTexel",t.outputColorSpace),Ug(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nr).join(`
`)),a=Rc(a),a=Bf(a,t),a=Hf(a,t),o=Rc(o),o=Bf(o,t),o=Hf(o,t),a=zf(a),o=zf(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=A+m+a,M=A+p+o,C=Uf(s,s.VERTEX_SHADER,w),v=Uf(s,s.FRAGMENT_SHADER,M);s.attachShader(x,C),s.attachShader(x,v),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(X){if(i.debug.checkShaderErrors){let Z=s.getProgramInfoLog(x)||"",U=s.getShaderInfoLog(C)||"",T=s.getShaderInfoLog(v)||"",L=Z.trim(),J=U.trim(),E=T.trim(),D=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,v);else{let le=Of(s,C,"vertex"),G=Of(s,v,"fragment");Ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+L+`
`+le+`
`+G)}else L!==""?je("WebGLProgram: Program Info Log:",L):(J===""||E==="")&&(B=!1);B&&(X.diagnostics={runnable:D,programLog:L,vertexShader:{log:J,prefix:m},fragmentShader:{log:E,prefix:p}})}s.deleteShader(C),s.deleteShader(v),y=new Ls(s,x),P=Bg(s,x)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let P;this.getAttributes=function(){return P===void 0&&R(this),P};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(x,Rg)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=v,this}var ex=0,Cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Pc(e),t.set(e,n)),n}},Pc=class{constructor(e){this.id=ex++,this.code=e,this.usedTimes=0}};function tx(i){return i===Mi||i===Pr||i===Ir}function nx(i,e,t,n,s,r){let a=new us,o=new Cc,l=new Set,c=[],f=new Map,u=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,P,O,X,Z,U){let T=X.fog,L=Z.geometry,J=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?X.environment:null,E=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,D=e.get(y.envMap||J,E),B=D&&D.mapping===Er?D.image.height:null,le=d[y.type];y.precision!==null&&(h=n.getMaxPrecision(y.precision),h!==y.precision&&je("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));let G=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ue=G!==void 0?G.length:0,z=0;L.morphAttributes.position!==void 0&&(z=1),L.morphAttributes.normal!==void 0&&(z=2),L.morphAttributes.color!==void 0&&(z=3);let ne,xe,ye,j;if(le){let bt=Gn[le];ne=bt.vertexShader,xe=bt.fragmentShader}else{ne=y.vertexShader,xe=y.fragmentShader;let bt=o.getVertexShaderStage(y),pt=o.getFragmentShaderStage(y);o.update(y,bt,pt),ye=bt.id,j=pt.id}let Q=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),k=Z.isInstancedMesh===!0,H=Z.isBatchedMesh===!0,ee=!!y.map,Se=!!y.matcap,se=!!D,N=!!y.aoMap,ae=!!y.lightMap,ge=!!y.bumpMap&&y.wireframe===!1,be=!!y.normalMap,q=!!y.displacementMap,re=!!y.emissiveMap,me=!!y.metalnessMap,Ae=!!y.roughnessMap,V=y.anisotropy>0,rt=y.clearcoat>0,Qe=y.dispersion>0,F=y.retroreflectivity>0,_=y.iridescence>0,te=y.sheen>0,Y=y.transmission>0,fe=V&&!!y.anisotropyMap,we=rt&&!!y.clearcoatMap,Pe=rt&&!!y.clearcoatNormalMap,_e=rt&&!!y.clearcoatRoughnessMap,ve=_&&!!y.iridescenceMap,Ie=_&&!!y.iridescenceThicknessMap,We=te&&!!y.sheenColorMap,Ue=te&&!!y.sheenRoughnessMap,Le=!!y.specularMap,Ye=!!y.specularColorMap,$e=!!y.specularIntensityMap,nt=Y&&!!y.transmissionMap,K=Y&&!!y.thicknessMap,De=!!y.gradientMap,Me=!!y.alphaMap,Ne=y.alphaTest>0,He=!!y.alphaHash,Ee=!!y.extensions,Ze=En;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ze=i.toneMapping);let Xe={shaderID:le,shaderType:y.type,shaderName:y.name,vertexShader:ne,fragmentShader:xe,defines:y.defines,customVertexShaderID:ye,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:H,batchingColor:H&&Z._colorsTexture!==null,instancing:k,instancingColor:k&&Z.instanceColor!==null,instancingMorph:k&&Z.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ee,matcap:Se,envMap:se,envMapMode:se&&D.mapping,envMapCubeUVHeight:B,aoMap:N,lightMap:ae,bumpMap:ge,normalMap:be,displacementMap:q,emissiveMap:re,normalMapObjectSpace:be&&y.normalMapType===sf,normalMapTangentSpace:be&&y.normalMapType===zo,packedNormalMap:be&&y.normalMapType===zo&&tx(y.normalMap.format),metalnessMap:me,roughnessMap:Ae,anisotropy:V,anisotropyMap:fe,clearcoat:rt,clearcoatMap:we,clearcoatNormalMap:Pe,clearcoatRoughnessMap:_e,dispersion:Qe,retroreflection:F,iridescence:_,iridescenceMap:ve,iridescenceThicknessMap:Ie,sheen:te,sheenColorMap:We,sheenRoughnessMap:Ue,specularMap:Le,specularColorMap:Ye,specularIntensityMap:$e,transmission:Y,transmissionMap:nt,thicknessMap:K,gradientMap:De,opaque:y.transparent===!1&&y.blending===As&&y.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ne,alphaHash:He,combine:y.combine,mapUv:ee&&g(y.map.channel),aoMapUv:N&&g(y.aoMap.channel),lightMapUv:ae&&g(y.lightMap.channel),bumpMapUv:ge&&g(y.bumpMap.channel),normalMapUv:be&&g(y.normalMap.channel),displacementMapUv:q&&g(y.displacementMap.channel),emissiveMapUv:re&&g(y.emissiveMap.channel),metalnessMapUv:me&&g(y.metalnessMap.channel),roughnessMapUv:Ae&&g(y.roughnessMap.channel),anisotropyMapUv:fe&&g(y.anisotropyMap.channel),clearcoatMapUv:we&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:We&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&g(y.sheenRoughnessMap.channel),specularMapUv:Le&&g(y.specularMap.channel),specularColorMapUv:Ye&&g(y.specularColorMap.channel),specularIntensityMapUv:$e&&g(y.specularIntensityMap.channel),transmissionMapUv:nt&&g(y.transmissionMap.channel),thicknessMapUv:K&&g(y.thicknessMap.channel),alphaMapUv:Me&&g(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(be||V),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!L.attributes.uv&&(ee||Me),fog:!!T,useFog:y.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&be===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ie,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:z,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,decodeVideoTexture:ee&&y.map.isVideoTexture===!0&&ct.getTransfer(y.map.colorSpace)===gt,decodeVideoTextureEmissive:re&&y.emissiveMap.isVideoTexture===!0&&ct.getTransfer(y.emissiveMap.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Zt,flipSided:y.side===Gt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ee&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&y.extensions.multiDraw===!0||H)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function m(y){let P=[];if(y.shaderID?P.push(y.shaderID):(P.push(y.customVertexShaderID),P.push(y.customFragmentShaderID)),y.defines!==void 0)for(let O in y.defines)P.push(O),P.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(p(P,y),A(P,y),P.push(i.outputColorSpace)),P.push(y.customProgramCacheKey),P.join()}function p(y,P){y.push(P.precision),y.push(P.outputColorSpace),y.push(P.envMapMode),y.push(P.envMapCubeUVHeight),y.push(P.mapUv),y.push(P.alphaMapUv),y.push(P.lightMapUv),y.push(P.aoMapUv),y.push(P.bumpMapUv),y.push(P.normalMapUv),y.push(P.displacementMapUv),y.push(P.emissiveMapUv),y.push(P.metalnessMapUv),y.push(P.roughnessMapUv),y.push(P.anisotropyMapUv),y.push(P.clearcoatMapUv),y.push(P.clearcoatNormalMapUv),y.push(P.clearcoatRoughnessMapUv),y.push(P.iridescenceMapUv),y.push(P.iridescenceThicknessMapUv),y.push(P.sheenColorMapUv),y.push(P.sheenRoughnessMapUv),y.push(P.specularMapUv),y.push(P.specularColorMapUv),y.push(P.specularIntensityMapUv),y.push(P.transmissionMapUv),y.push(P.thicknessMapUv),y.push(P.combine),y.push(P.fogExp2),y.push(P.sizeAttenuation),y.push(P.morphTargetsCount),y.push(P.morphAttributeCount),y.push(P.numSunLights),y.push(P.numDirLights),y.push(P.numPointLights),y.push(P.numSpotLights),y.push(P.numSpotLightMaps),y.push(P.numHemiLights),y.push(P.numRectAreaLights),y.push(P.numSunLightShadows),y.push(P.numDirLightShadows),y.push(P.numPointLightShadows),y.push(P.numSpotLightShadows),y.push(P.numSpotLightShadowsWithMaps),y.push(P.numLightProbes),y.push(P.shadowMapType),y.push(P.toneMapping),y.push(P.numClippingPlanes),y.push(P.numClipIntersection),y.push(P.depthPacking)}function A(y,P){a.disableAll(),P.instancing&&a.enable(0),P.instancingColor&&a.enable(1),P.instancingMorph&&a.enable(2),P.matcap&&a.enable(3),P.envMap&&a.enable(4),P.normalMapObjectSpace&&a.enable(5),P.normalMapTangentSpace&&a.enable(6),P.clearcoat&&a.enable(7),P.iridescence&&a.enable(8),P.alphaTest&&a.enable(9),P.vertexColors&&a.enable(10),P.vertexAlphas&&a.enable(11),P.vertexUv1s&&a.enable(12),P.vertexUv2s&&a.enable(13),P.vertexUv3s&&a.enable(14),P.vertexTangents&&a.enable(15),P.anisotropy&&a.enable(16),P.alphaHash&&a.enable(17),P.batching&&a.enable(18),P.dispersion&&a.enable(19),P.retroreflection&&a.enable(24),P.batchingColor&&a.enable(20),P.gradientMap&&a.enable(21),P.packedNormalMap&&a.enable(22),P.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.reversedDepthBuffer&&a.enable(4),P.skinning&&a.enable(5),P.morphTargets&&a.enable(6),P.morphNormals&&a.enable(7),P.morphColors&&a.enable(8),P.premultipliedAlpha&&a.enable(9),P.shadowMapEnabled&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),P.decodeVideoTextureEmissive&&a.enable(20),P.alphaToCoverage&&a.enable(21),P.numLightProbeGrids>0&&a.enable(22),P.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function w(y){let P=d[y.type],O;if(P){let X=Gn[P];O=bf.clone(X.uniforms)}else O=y.uniforms;return O}function M(y,P){let O=f.get(P);return O!==void 0?++O.usedTimes:(O=new Qg(i,P,y,s),c.push(O),f.set(P,O)),O}function C(y){if(--y.usedTimes===0){let P=c.indexOf(y);c[P]=c[c.length-1],c.pop(),f.delete(y.cacheKey),y.destroy()}}function v(y){o.remove(y)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:w,acquireProgram:M,releaseProgram:C,releaseShaderCache:v,programs:c,dispose:R}}function ix(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function sx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Gf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,x,m,p){let A=i[e];return A===void 0?(A={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:p},i[e]=A):(A.id=h.id,A.object=h,A.geometry=d,A.material=g,A.materialVariant=a(h),A.groupOrder=x,A.renderOrder=h.renderOrder,A.z=m,A.group=p),e++,A}function l(h,d,g,x,m,p,A){A.reversedDepth===!0&&(m=-m);let w=o(h,d,g,x,m,p);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):t.push(w)}function c(h,d,g,x,m,p){let A=o(h,d,g,x,m,p);g.transmission>0?n.unshift(A):g.transparent===!0?s.unshift(A):t.unshift(A)}function f(h,d){t.length>1&&t.sort(h||sx),n.length>1&&n.sort(d||Gf),s.length>1&&s.sort(d||Gf)}function u(){for(let h=e,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:f}}function rx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Vf,i.set(n,[a])):s>=r.length?(a=new Vf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ax(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new et};break;case"SpotLight":t={position:new W,direction:new W,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function ox(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var lx=0;function cx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function hx(i){let e=new ax,t=ox(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);let s=new W,r=new dt,a=new dt;function o(c){let f=0,u=0,h=0;for(let Z=0;Z<9;Z++)n.probe[Z].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,A=0,w=0,M=0,C=0,v=0,R=0,y=0,P=0,O=0;c.sort(cx);for(let Z=0,U=c.length;Z<U;Z++){let T=c[Z],L=T.color,J=T.intensity,E=T.distance,D=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===Mi?D=T.shadow.map.texture:D=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)f+=L.r*J,u+=L.g*J,h+=L.b*J;else if(T.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(T.sh.coefficients[B],J);O++}else if(T.isSunLight){let B=e.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let le=T.shadow,G=t.get(T);G.shadowIntensity=le.intensity,G.shadowBias=le.bias,G.shadowNormalBias=le.normalBias,G.shadowRadius=le.radius,G.shadowMapSize.copy(le.mapSize).multiply(le.getFrameExtents()),n.sunShadow[g]=G,n.sunShadowMap[g]=D;let ue=le.getViewportCount();for(let z=0;z<ue;z++)n.sunShadowMatrix[x+z]=le.getMatrix(z),n.sunShadowCascade[x+z]=le._cascadeData[z];x+=ue,g++}n.sun[d]=B,d++}else if(T.isDirectionalLight){let B=e.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let le=T.shadow,G=t.get(T);G.shadowIntensity=le.intensity,G.shadowBias=le.bias,G.shadowNormalBias=le.normalBias,G.shadowRadius=le.radius,G.shadowMapSize=le.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=D,n.directionalShadowMatrix[m]=T.shadow.matrix,C++}n.directional[m]=B,m++}else if(T.isSpotLight){let B=e.get(T);B.position.setFromMatrixPosition(T.matrixWorld),B.color.copy(L).multiplyScalar(J),B.distance=E,B.coneCos=Math.cos(T.angle),B.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),B.decay=T.decay,n.spot[A]=B;let le=T.shadow;if(T.map&&(n.spotLightMap[y]=T.map,y++,le.updateMatrices(T),T.castShadow&&P++),n.spotLightMatrix[A]=le.matrix,T.castShadow){let G=t.get(T);G.shadowIntensity=le.intensity,G.shadowBias=le.bias,G.shadowNormalBias=le.normalBias,G.shadowRadius=le.radius,G.shadowMapSize=le.mapSize,n.spotShadow[A]=G,n.spotShadowMap[A]=D,R++}A++}else if(T.isRectAreaLight){let B=e.get(T);B.color.copy(L).multiplyScalar(J),B.halfWidth.set(T.width*.5,0,0),B.halfHeight.set(0,T.height*.5,0),n.rectArea[w]=B,w++}else if(T.isPointLight){let B=e.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),B.distance=T.distance,B.decay=T.decay,T.castShadow){let le=T.shadow,G=t.get(T);G.shadowIntensity=le.intensity,G.shadowBias=le.bias,G.shadowNormalBias=le.normalBias,G.shadowRadius=le.radius,G.shadowMapSize=le.mapSize,G.shadowCameraNear=le.camera.near,G.shadowCameraFar=le.camera.far,n.pointShadow[p]=G,n.pointShadowMap[p]=D,n.pointShadowMatrix[p]=T.shadow.matrix,v++}n.point[p]=B,p++}else if(T.isHemisphereLight){let B=e.get(T);B.skyColor.copy(T.color).multiplyScalar(J),B.groundColor.copy(T.groundColor).multiplyScalar(J),n.hemi[M]=B,M++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=u,n.ambient[2]=h;let X=n.hash;(X.sunLength!==d||X.directionalLength!==m||X.pointLength!==p||X.spotLength!==A||X.rectAreaLength!==w||X.hemiLength!==M||X.numSunShadows!==g||X.numDirectionalShadows!==C||X.numPointShadows!==v||X.numSpotShadows!==R||X.numSpotMaps!==y||X.numLightProbes!==O)&&(n.sun.length=d,n.directional.length=m,n.spot.length=A,n.rectArea.length=w,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=v,n.pointShadowMap.length=v,n.pointShadowMatrix.length=v,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+y-P,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=O,X.sunLength=d,X.directionalLength=m,X.pointLength=p,X.spotLength=A,X.rectAreaLength=w,X.hemiLength=M,X.numSunShadows=g,X.numDirectionalShadows=C,X.numPointShadows=v,X.numSpotShadows=R,X.numSpotMaps=y,X.numLightProbes=O,n.version=lx++)}function l(c,f){let u=0,h=0,d=0,g=0,x=0,m=0,p=f.matrixWorldInverse;for(let A=0,w=c.length;A<w;A++){let M=c[A];if(M.isSunLight){let C=n.sun[u];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(p),u++}else if(M.isDirectionalLight){let C=n.directional[h];C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),h++}else if(M.isSpotLight){let C=n.spot[g];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let C=n.rectArea[x];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let C=n.point[d];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let C=n.hemi[m];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Wf(i){let e=new hx(i),t=[],n=[],s=[];function r(h){u.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function f(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function fx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Wf(i),e.set(s,[o])):r>=a.length?(o=new Wf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dx=`uniform sampler2D shadow_pass;
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
}`,px=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],mx=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Xf=new dt,Dr=new W,Sc=new W;function gx(i,e,t){let n=new gs,s=new Re,r=new Re,a=new wt,o=new Ha,l=new za,c={},f=t.maxTextureSize,u={[gi]:Gt,[Gt]:gi,[Zt]:Zt},h=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:ux,fragmentShader:dx}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new Nt;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ht(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ni;let p=this.type;this.render=function(v,R,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;this.type===Nh&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ni);let P=i.getRenderTarget(),O=i.getActiveCubeFace(),X=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(zn),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let U=p!==this.type;U&&R.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(L=>L.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,L=v.length;T<L;T++){let J=v[T],E=J.shadow;if(E===void 0){je("WebGLShadowMap:",J,"has no shadow.");continue}if(E.autoUpdate===!1&&E.needsUpdate===!1)continue;s.copy(E.mapSize);let D=E.getFrameExtents();s.multiply(D),r.copy(E.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/D.x),s.x=r.x*D.x,E.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/D.y),s.y=r.y*D.y,E.mapSize.y=r.y));let B=i.state.buffers.depth.getReversed();if(E.camera._reversedDepth=B,E.map===null||U===!0){if(E.map!==null&&(E.map.depthTexture!==null&&(E.map.depthTexture.dispose(),E.map.depthTexture=null),E.map.dispose()),this.type===ws){if(J.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}E.map=new tn(s.x,s.y,{format:Mi,type:wn,minFilter:kt,magFilter:kt,generateMipmaps:!1}),E.map.texture.name=J.name+".shadowMap",E.map.depthTexture=new ui(s.x,s.y,pn),E.map.depthTexture.name=J.name+".shadowMapDepth",E.map.depthTexture.format=Dn,E.map.depthTexture.compareFunction=null,E.map.depthTexture.minFilter=Bt,E.map.depthTexture.magFilter=Bt}else J.isPointLight?(E.map=new qo(s.x),E.map.depthTexture=new Pa(s.x,Tn)):(E.map=new tn(s.x,s.y),E.map.depthTexture=new ui(s.x,s.y,Tn)),E.map.depthTexture.name=J.name+".shadowMap",E.map.depthTexture.format=Dn,this.type===Ni?(E.map.depthTexture.compareFunction=B?Go:ko,E.map.depthTexture.minFilter=kt,E.map.depthTexture.magFilter=kt):(E.map.depthTexture.compareFunction=null,E.map.depthTexture.minFilter=Bt,E.map.depthTexture.magFilter=Bt);E.camera.updateProjectionMatrix()}E.map.isWebGLCubeRenderTarget!==!0&&(E.map.width!==s.x||E.map.height!==s.y)&&E.map.setSize(s.x,s.y);let le=E.map.isWebGLCubeRenderTarget?6:E.getViewportCount();J.isPointLight!==!0&&E.updateMatrices(J,y);for(let G=0;G<le;G++){let ue=E.getCamera(G);if(J.isPointLight){let z=E.camera,ne=E.matrix,xe=J.distance||z.far;xe!==z.far&&(z.far=xe,z.updateProjectionMatrix()),Dr.setFromMatrixPosition(J.matrixWorld),z.position.copy(Dr),Sc.copy(z.position),Sc.add(px[G]),z.up.copy(mx[G]),z.lookAt(Sc),z.updateMatrixWorld(),ne.makeTranslation(-Dr.x,-Dr.y,-Dr.z),Xf.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),E._frustum.setFromProjectionMatrix(Xf,z.coordinateSystem,z.reversedDepth)}if(E.map.isWebGLCubeRenderTarget)i.setRenderTarget(E.map,G),i.clear();else{G===0&&(i.setRenderTarget(E.map),i.clear());let z=E.getViewport(G);a.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),Z.viewport(a)}n=E.getFrustum(G),M(R,y,ue,J,this.type)}E.isPointLightShadow!==!0&&this.type===ws&&A(E,y),E.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(P,O,X)};function A(v,R){let y=e.update(x);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null?v.mapPass=new tn(s.x,s.y,{format:Mi,type:wn}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),h.uniforms.shadow_pass.value=v.map.depthTexture,h.uniforms.resolution.value.set(v.map.width,v.map.height),h.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(R,null,y,h,x,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value.set(v.map.width,v.map.height),d.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(R,null,y,d,x,null)}function w(v,R,y,P){let O=null,X=y.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(X!==void 0)O=X;else if(O=y.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let Z=O.uuid,U=R.uuid,T=c[Z];T===void 0&&(T={},c[Z]=T);let L=T[U];L===void 0&&(L=O.clone(),T[U]=L,R.addEventListener("dispose",C)),O=L}if(O.visible=R.visible,O.wireframe=R.wireframe,P===ws?O.side=R.shadowSide!==null?R.shadowSide:R.side:O.side=R.shadowSide!==null?R.shadowSide:u[R.side],O.alphaMap=R.alphaMap,O.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,O.map=R.map,O.clipShadows=R.clipShadows,O.clippingPlanes=R.clippingPlanes,O.clipIntersection=R.clipIntersection,O.displacementMap=R.displacementMap,O.displacementScale=R.displacementScale,O.displacementBias=R.displacementBias,O.wireframeLinewidth=R.wireframeLinewidth,O.linewidth=R.linewidth,y.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let Z=i.properties.get(O);Z.light=y}return O}function M(v,R,y,P,O){if(v.visible===!1)return;if(v.layers.test(R.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&O===ws)&&(!v.frustumCulled||v.intersectsFrustum(n))){v.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,v.matrixWorld);let U=e.update(v),T=v.material;if(Array.isArray(T)){let L=U.groups;for(let J=0,E=L.length;J<E;J++){let D=L[J],B=T[D.materialIndex];if(B&&B.visible){let le=w(v,B,P,O);v.onBeforeShadow(i,v,R,y,U,le,D),i.renderBufferDirect(y,null,U,le,v,D),v.onAfterShadow(i,v,R,y,U,le,D)}}}else if(T.visible){let L=w(v,T,P,O);v.onBeforeShadow(i,v,R,y,U,L,null),i.renderBufferDirect(y,null,U,L,v,null),v.onAfterShadow(i,v,R,y,U,L,null)}}let Z=v.children;for(let U=0,T=Z.length;U<T;U++)M(Z[U],R,y,P,O)}function C(v){v.target.removeEventListener("dispose",C);for(let y in c){let P=c[y],O=v.target.uuid;O in P&&(P[O].dispose(),delete P[O])}}}function xx(i,e){function t(){let K=!1,De=new wt,Me=null,Ne=new wt(0,0,0,0);return{setMask:function(He){Me!==He&&!K&&(i.colorMask(He,He,He,He),Me=He)},setLocked:function(He){K=He},setClear:function(He,Ee,Ze,Xe,bt){bt===!0&&(He*=Xe,Ee*=Xe,Ze*=Xe),De.set(He,Ee,Ze,Xe),Ne.equals(De)===!1&&(i.clearColor(He,Ee,Ze,Xe),Ne.copy(De))},reset:function(){K=!1,Me=null,Ne.set(-1,0,0,0)}}}function n(){let K=!1,De=!1,Me=null,Ne=null,He=null;return{setReversed:function(Ee){if(De!==Ee){let Ze=e.get("EXT_clip_control");Ee?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),De=Ee;let Xe=He;He=null,this.setClear(Xe)}},getReversed:function(){return De},setTest:function(Ee){Ee?Q(i.DEPTH_TEST):ie(i.DEPTH_TEST)},setMask:function(Ee){Me!==Ee&&!K&&(i.depthMask(Ee),Me=Ee)},setFunc:function(Ee){if(De&&(Ee=mf[Ee]),Ne!==Ee){switch(Ee){case ga:i.depthFunc(i.NEVER);break;case xa:i.depthFunc(i.ALWAYS);break;case _a:i.depthFunc(i.LESS);break;case ls:i.depthFunc(i.LEQUAL);break;case ya:i.depthFunc(i.EQUAL);break;case va:i.depthFunc(i.GEQUAL);break;case Ma:i.depthFunc(i.GREATER);break;case ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ne=Ee}},setLocked:function(Ee){K=Ee},setClear:function(Ee){He!==Ee&&(He=Ee,De&&(Ee=1-Ee),i.clearDepth(Ee))},reset:function(){K=!1,Me=null,Ne=null,He=null,De=!1}}}function s(){let K=!1,De=null,Me=null,Ne=null,He=null,Ee=null,Ze=null,Xe=null,bt=null;return{setTest:function(pt){K||(pt?Q(i.STENCIL_TEST):ie(i.STENCIL_TEST))},setMask:function(pt){De!==pt&&!K&&(i.stencilMask(pt),De=pt)},setFunc:function(pt,xn,Rn){(Me!==pt||Ne!==xn||He!==Rn)&&(i.stencilFunc(pt,xn,Rn),Me=pt,Ne=xn,He=Rn)},setOp:function(pt,xn,Rn){(Ee!==pt||Ze!==xn||Xe!==Rn)&&(i.stencilOp(pt,xn,Rn),Ee=pt,Ze=xn,Xe=Rn)},setLocked:function(pt){K=pt},setClear:function(pt){bt!==pt&&(i.clearStencil(pt),bt=pt)},reset:function(){K=!1,De=null,Me=null,Ne=null,He=null,Ee=null,Ze=null,Xe=null,bt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,f={},u={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,A=null,w=null,M=null,C=null,v=null,R=null,y=new et(0,0,0),P=0,O=!1,X=null,Z=null,U=null,T=null,L=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),E=!1,D=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(B)[1]),E=D>=1):B.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),E=D>=2);let le=null,G={},ue=i.getParameter(i.SCISSOR_BOX),z=i.getParameter(i.VIEWPORT),ne=new wt().fromArray(ue),xe=new wt().fromArray(z);function ye(K,De,Me,Ne){let He=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(K,Ee),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<Me;Ze++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(De,0,i.RGBA,1,1,Ne,0,i.RGBA,i.UNSIGNED_BYTE,He):i.texImage2D(De+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,He);return Ee}let j={};j[i.TEXTURE_2D]=ye(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(ls),ge(!1),be(ql),Q(i.CULL_FACE),N(zn);function Q(K){f[K]!==!0&&(i.enable(K),f[K]=!0)}function ie(K){f[K]!==!1&&(i.disable(K),f[K]=!1)}function k(K,De){return h[K]!==De?(i.bindFramebuffer(K,De),h[K]=De,K===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=De),K===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=De),!0):!1}function H(K,De){let Me=g,Ne=!1;if(K){Me=d.get(De),Me===void 0&&(Me=[],d.set(De,Me));let He=K.textures;if(Me.length!==He.length||Me[0]!==i.COLOR_ATTACHMENT0){for(let Ee=0,Ze=He.length;Ee<Ze;Ee++)Me[Ee]=i.COLOR_ATTACHMENT0+Ee;Me.length=He.length,Ne=!0}}else Me[0]!==i.BACK&&(Me[0]=i.BACK,Ne=!0);Ne&&i.drawBuffers(Me)}function ee(K){return x!==K?(i.useProgram(K),x=K,!0):!1}let Se={[Ui]:i.FUNC_ADD,[Fh]:i.FUNC_SUBTRACT,[Oh]:i.FUNC_REVERSE_SUBTRACT};Se[Bh]=i.MIN,Se[Hh]=i.MAX;let se={[zh]:i.ZERO,[kh]:i.ONE,[Gh]:i.SRC_COLOR,[Jl]:i.SRC_ALPHA,[Zh]:i.SRC_ALPHA_SATURATE,[qh]:i.DST_COLOR,[Wh]:i.DST_ALPHA,[Vh]:i.ONE_MINUS_SRC_COLOR,[$l]:i.ONE_MINUS_SRC_ALPHA,[Yh]:i.ONE_MINUS_DST_COLOR,[Xh]:i.ONE_MINUS_DST_ALPHA,[Jh]:i.CONSTANT_COLOR,[$h]:i.ONE_MINUS_CONSTANT_COLOR,[Kh]:i.CONSTANT_ALPHA,[jh]:i.ONE_MINUS_CONSTANT_ALPHA};function N(K,De,Me,Ne,He,Ee,Ze,Xe,bt,pt){if(K===zn){m===!0&&(ie(i.BLEND),m=!1);return}if(m===!1&&(Q(i.BLEND),m=!0),K!==Uh){if(K!==p||pt!==O){if((A!==Ui||C!==Ui)&&(i.blendEquation(i.FUNC_ADD),A=Ui,C=Ui),pt)switch(K){case As:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xi:i.blendFunc(i.ONE,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ke("WebGLState: Invalid blending: ",K);break}else switch(K){case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yl:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zl:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",K);break}w=null,M=null,v=null,R=null,y.set(0,0,0),P=0,p=K,O=pt}return}He=He||De,Ee=Ee||Me,Ze=Ze||Ne,(De!==A||He!==C)&&(i.blendEquationSeparate(Se[De],Se[He]),A=De,C=He),(Me!==w||Ne!==M||Ee!==v||Ze!==R)&&(i.blendFuncSeparate(se[Me],se[Ne],se[Ee],se[Ze]),w=Me,M=Ne,v=Ee,R=Ze),(Xe.equals(y)===!1||bt!==P)&&(i.blendColor(Xe.r,Xe.g,Xe.b,bt),y.copy(Xe),P=bt),p=K,O=!1}function ae(K,De){K.side===Zt?ie(i.CULL_FACE):Q(i.CULL_FACE);let Me=K.side===Gt;De&&(Me=!Me),ge(Me),K.blending===As&&K.transparent===!1?N(zn):N(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),a.setFunc(K.depthFunc),a.setTest(K.depthTest),a.setMask(K.depthWrite),r.setMask(K.colorWrite);let Ne=K.stencilWrite;o.setTest(Ne),Ne&&(o.setMask(K.stencilWriteMask),o.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),o.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),re(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function ge(K){X!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),X=K)}function be(K){K!==Lh?(Q(i.CULL_FACE),K!==Z&&(K===ql?i.cullFace(i.BACK):K===Dh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ie(i.CULL_FACE),Z=K}function q(K){K!==U&&(E&&i.lineWidth(K),U=K)}function re(K,De,Me){K?(Q(i.POLYGON_OFFSET_FILL),(T!==De||L!==Me)&&(T=De,L=Me,a.getReversed()&&(De=-De),i.polygonOffset(De,Me))):ie(i.POLYGON_OFFSET_FILL)}function me(K){K?Q(i.SCISSOR_TEST):ie(i.SCISSOR_TEST)}function Ae(K){K===void 0&&(K=i.TEXTURE0+J-1),le!==K&&(i.activeTexture(K),le=K)}function V(K,De,Me){Me===void 0&&(le===null?Me=i.TEXTURE0+J-1:Me=le);let Ne=G[Me];Ne===void 0&&(Ne={type:void 0,texture:void 0},G[Me]=Ne),(Ne.type!==K||Ne.texture!==De)&&(le!==Me&&(i.activeTexture(Me),le=Me),i.bindTexture(K,De||j[K]),Ne.type=K,Ne.texture=De)}function rt(){let K=G[le];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function Qe(){try{i.compressedTexImage2D(...arguments)}catch(K){Ke("WebGLState:",K)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(K){Ke("WebGLState:",K)}}function _(){try{i.texSubImage2D(...arguments)}catch(K){Ke("WebGLState:",K)}}function te(){try{i.texSubImage3D(...arguments)}catch(K){Ke("WebGLState:",K)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(K){Ke("WebGLState:",K)}}function fe(){try{i.compressedTexSubImage3D(...arguments)}catch(K){Ke("WebGLState:",K)}}function we(){try{i.texStorage2D(...arguments)}catch(K){Ke("WebGLState:",K)}}function Pe(){try{i.texStorage3D(...arguments)}catch(K){Ke("WebGLState:",K)}}function _e(){try{i.texImage2D(...arguments)}catch(K){Ke("WebGLState:",K)}}function ve(){try{i.texImage3D(...arguments)}catch(K){Ke("WebGLState:",K)}}function Ie(K){return u[K]!==void 0?u[K]:i.getParameter(K)}function We(K,De){u[K]!==De&&(i.pixelStorei(K,De),u[K]=De)}function Ue(K){ne.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),ne.copy(K))}function Le(K){xe.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),xe.copy(K))}function Ye(K,De){let Me=c.get(De);Me===void 0&&(Me=new WeakMap,c.set(De,Me));let Ne=Me.get(K);Ne===void 0&&(Ne=i.getUniformBlockIndex(De,K.name),Me.set(K,Ne))}function $e(K,De){let Ne=c.get(De).get(K);l.get(De)!==Ne&&(i.uniformBlockBinding(De,Ne,K.__bindingPointIndex),l.set(De,Ne))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},u={},le=null,G={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,A=null,w=null,M=null,C=null,v=null,R=null,y=new et(0,0,0),P=0,O=!1,X=null,Z=null,U=null,T=null,L=null,ne.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:ie,bindFramebuffer:k,drawBuffers:H,useProgram:ee,setBlending:N,setMaterial:ae,setFlipSided:ge,setCullFace:be,setLineWidth:q,setPolygonOffset:re,setScissorTest:me,activeTexture:Ae,bindTexture:V,unbindTexture:rt,compressedTexImage2D:Qe,compressedTexImage3D:F,texImage2D:_e,texImage3D:ve,pixelStorei:We,getParameter:Ie,updateUBOMapping:Ye,uniformBlockBinding:$e,texStorage2D:we,texStorage3D:Pe,texSubImage2D:_,texSubImage3D:te,compressedTexSubImage2D:Y,compressedTexSubImage3D:fe,scissor:Ue,viewport:Le,reset:nt}}function _x(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,f=new WeakMap,u=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(F,_){return g?new OffscreenCanvas(F,_):Qs("canvas")}function m(F,_,te){let Y=1,fe=Qe(F);if((fe.width>te||fe.height>te)&&(Y=te/Math.max(fe.width,fe.height)),Y<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let we=Math.floor(Y*fe.width),Pe=Math.floor(Y*fe.height);h===void 0&&(h=x(we,Pe));let _e=_?x(we,Pe):h;return _e.width=we,_e.height=Pe,_e.getContext("2d").drawImage(F,0,0,we,Pe),je("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+we+"x"+Pe+")."),_e}else return"data"in F&&je("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),F;return F}function p(F){return F.generateMipmaps}function A(F){i.generateMipmap(F)}function w(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(F,_,te,Y,fe,we=!1){if(F!==null){if(i[F]!==void 0)return i[F];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Pe;Y&&(Pe=e.get("EXT_texture_norm16"),Pe||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=_;if(_===i.RED&&(te===i.FLOAT&&(_e=i.R32F),te===i.HALF_FLOAT&&(_e=i.R16F),te===i.UNSIGNED_BYTE&&(_e=i.R8),te===i.UNSIGNED_SHORT&&Pe&&(_e=Pe.R16_EXT),te===i.SHORT&&Pe&&(_e=Pe.R16_SNORM_EXT)),_===i.RED_INTEGER&&(te===i.UNSIGNED_BYTE&&(_e=i.R8UI),te===i.UNSIGNED_SHORT&&(_e=i.R16UI),te===i.UNSIGNED_INT&&(_e=i.R32UI),te===i.BYTE&&(_e=i.R8I),te===i.SHORT&&(_e=i.R16I),te===i.INT&&(_e=i.R32I)),_===i.RG&&(te===i.FLOAT&&(_e=i.RG32F),te===i.HALF_FLOAT&&(_e=i.RG16F),te===i.UNSIGNED_BYTE&&(_e=i.RG8),te===i.UNSIGNED_SHORT&&Pe&&(_e=Pe.RG16_EXT),te===i.SHORT&&Pe&&(_e=Pe.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(te===i.UNSIGNED_BYTE&&(_e=i.RG8UI),te===i.UNSIGNED_SHORT&&(_e=i.RG16UI),te===i.UNSIGNED_INT&&(_e=i.RG32UI),te===i.BYTE&&(_e=i.RG8I),te===i.SHORT&&(_e=i.RG16I),te===i.INT&&(_e=i.RG32I)),_===i.RGB_INTEGER&&(te===i.UNSIGNED_BYTE&&(_e=i.RGB8UI),te===i.UNSIGNED_SHORT&&(_e=i.RGB16UI),te===i.UNSIGNED_INT&&(_e=i.RGB32UI),te===i.BYTE&&(_e=i.RGB8I),te===i.SHORT&&(_e=i.RGB16I),te===i.INT&&(_e=i.RGB32I)),_===i.RGBA_INTEGER&&(te===i.UNSIGNED_BYTE&&(_e=i.RGBA8UI),te===i.UNSIGNED_SHORT&&(_e=i.RGBA16UI),te===i.UNSIGNED_INT&&(_e=i.RGBA32UI),te===i.BYTE&&(_e=i.RGBA8I),te===i.SHORT&&(_e=i.RGBA16I),te===i.INT&&(_e=i.RGBA32I)),_===i.RGB&&(te===i.UNSIGNED_SHORT&&Pe&&(_e=Pe.RGB16_EXT),te===i.SHORT&&Pe&&(_e=Pe.RGB16_SNORM_EXT),te===i.UNSIGNED_INT_5_9_9_9_REV&&(_e=i.RGB9_E5),te===i.UNSIGNED_INT_10F_11F_11F_REV&&(_e=i.R11F_G11F_B10F)),_===i.RGBA){let ve=we?js:ct.getTransfer(fe);te===i.FLOAT&&(_e=i.RGBA32F),te===i.HALF_FLOAT&&(_e=i.RGBA16F),te===i.UNSIGNED_BYTE&&(_e=ve===gt?i.SRGB8_ALPHA8:i.RGBA8),te===i.UNSIGNED_SHORT&&Pe&&(_e=Pe.RGBA16_EXT),te===i.SHORT&&Pe&&(_e=Pe.RGBA16_SNORM_EXT),te===i.UNSIGNED_SHORT_4_4_4_4&&(_e=i.RGBA4),te===i.UNSIGNED_SHORT_5_5_5_1&&(_e=i.RGB5_A1)}return(_e===i.R16F||_e===i.R32F||_e===i.RG16F||_e===i.RG32F||_e===i.RGBA16F||_e===i.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function C(F,_){let te;return F?_===null||_===Tn||_===Cs?te=i.DEPTH24_STENCIL8:_===pn?te=i.DEPTH32F_STENCIL8:_===Rs&&(te=i.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Tn||_===Cs?te=i.DEPTH_COMPONENT24:_===pn?te=i.DEPTH_COMPONENT32F:_===Rs&&(te=i.DEPTH_COMPONENT16),te}function v(F,_){return p(F)===!0||F.isFramebufferTexture&&F.minFilter!==Bt&&F.minFilter!==kt?Math.log2(Math.max(_.width,_.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?_.mipmaps.length:1}function R(F){let _=F.target;_.removeEventListener("dispose",R),P(_),_.isVideoTexture&&f.delete(_),_.isHTMLTexture&&u.delete(_)}function y(F){let _=F.target;_.removeEventListener("dispose",y),X(_)}function P(F){let _=n.get(F);if(_.__webglInit===void 0)return;let te=F.source,Y=d.get(te);if(Y){let fe=Y[_.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&O(F),Object.keys(Y).length===0&&d.delete(te)}n.remove(F)}function O(F){let _=n.get(F);i.deleteTexture(_.__webglTexture);let te=F.source,Y=d.get(te);delete Y[_.__cacheKey],a.memory.textures--}function X(F){let _=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let fe=0;fe<_.__webglFramebuffer[Y].length;fe++)i.deleteFramebuffer(_.__webglFramebuffer[Y][fe]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let te=F.textures;for(let Y=0,fe=te.length;Y<fe;Y++){let we=n.get(te[Y]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),a.memory.textures--),n.remove(te[Y])}n.remove(F)}let Z=0;function U(){Z=0}function T(){return Z}function L(F){Z=F}function J(){let F=Z;return F>=s.maxTextures&&je("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,F}function E(F){let _=[];return _.push(F.wrapS),_.push(F.wrapT),_.push(F.wrapR||0),_.push(F.magFilter),_.push(F.minFilter),_.push(F.anisotropy),_.push(F.internalFormat),_.push(F.format),_.push(F.type),_.push(F.generateMipmaps),_.push(F.premultiplyAlpha),_.push(F.flipY),_.push(F.unpackAlignment),_.push(F.colorSpace),_.join()}function D(F,_){let te=n.get(F);if(F.isVideoTexture&&V(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&te.__version!==F.version){let Y=F.image;if(Y===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(te,F,_);return}}else F.isExternalTexture&&(te.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,te.__webglTexture,i.TEXTURE0+_)}function B(F,_){let te=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&te.__version!==F.version){ie(te,F,_);return}else F.isExternalTexture&&(te.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,te.__webglTexture,i.TEXTURE0+_)}function le(F,_){let te=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&te.__version!==F.version){ie(te,F,_);return}t.bindTexture(i.TEXTURE_3D,te.__webglTexture,i.TEXTURE0+_)}function G(F,_){let te=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&te.__version!==F.version){k(te,F,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture,i.TEXTURE0+_)}let ue={[bn]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[Sa]:i.MIRRORED_REPEAT},z={[Bt]:i.NEAREST,[tf]:i.NEAREST_MIPMAP_NEAREST,[Tr]:i.NEAREST_MIPMAP_LINEAR,[kt]:i.LINEAR,[to]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},ne={[af]:i.NEVER,[ff]:i.ALWAYS,[of]:i.LESS,[ko]:i.LEQUAL,[lf]:i.EQUAL,[Go]:i.GEQUAL,[cf]:i.GREATER,[hf]:i.NOTEQUAL};function xe(F,_){if(_.type===pn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===kt||_.magFilter===to||_.magFilter===Tr||_.magFilter===yi||_.minFilter===kt||_.minFilter===to||_.minFilter===Tr||_.minFilter===yi)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,ue[_.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,ue[_.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,ue[_.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,z[_.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,z[_.minFilter]),_.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,ne[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Bt||_.minFilter!==Tr&&_.minFilter!==yi||_.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let te=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ye(F,_){let te=!1;F.__webglInit===void 0&&(F.__webglInit=!0,_.addEventListener("dispose",R));let Y=_.source,fe=d.get(Y);fe===void 0&&(fe={},d.set(Y,fe));let we=E(_);if(we!==F.__cacheKey){fe[we]===void 0&&(fe[we]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,te=!0),fe[we].usedTimes++;let Pe=fe[F.__cacheKey];Pe!==void 0&&(fe[F.__cacheKey].usedTimes--,Pe.usedTimes===0&&O(_)),F.__cacheKey=we,F.__webglTexture=fe[we].texture}return te}function j(F,_,te){return Math.floor(Math.floor(F/te)/_)}function Q(F,_,te,Y){let we=F.updateRanges;if(we.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,te,Y,_.data);else{we.sort((We,Ue)=>We.start-Ue.start);let Pe=0;for(let We=1;We<we.length;We++){let Ue=we[Pe],Le=we[We],Ye=Ue.start+Ue.count,$e=j(Le.start,_.width,4),nt=j(Ue.start,_.width,4);Le.start<=Ye+1&&$e===nt&&j(Le.start+Le.count-1,_.width,4)===$e?Ue.count=Math.max(Ue.count,Le.start+Le.count-Ue.start):(++Pe,we[Pe]=Le)}we.length=Pe+1;let _e=t.getParameter(i.UNPACK_ROW_LENGTH),ve=t.getParameter(i.UNPACK_SKIP_PIXELS),Ie=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let We=0,Ue=we.length;We<Ue;We++){let Le=we[We],Ye=Math.floor(Le.start/4),$e=Math.ceil(Le.count/4),nt=Ye%_.width,K=Math.floor(Ye/_.width),De=$e,Me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(i.UNPACK_SKIP_ROWS,K),t.texSubImage2D(i.TEXTURE_2D,0,nt,K,De,Me,te,Y,_.data)}F.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,_e),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ie)}}function ie(F,_,te){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);let fe=ye(F,_),we=_.source;t.bindTexture(Y,F.__webglTexture,i.TEXTURE0+te);let Pe=n.get(we);if(we.version!==Pe.__version||fe===!0){if(t.activeTexture(i.TEXTURE0+te),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let Me=ct.getPrimaries(ct.workingColorSpace),Ne=_.colorSpace===ii?null:ct.getPrimaries(_.colorSpace),He=_.colorSpace===ii||Me===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ve=m(_.image,!1,s.maxTextureSize);ve=rt(_,ve);let Ie=r.convert(_.format,_.colorSpace),We=r.convert(_.type),Ue=M(_.internalFormat,Ie,We,_.normalized,_.colorSpace,_.isVideoTexture);xe(Y,_);let Le,Ye=_.mipmaps,$e=_.isVideoTexture!==!0,nt=Pe.__version===void 0||fe===!0,K=we.dataReady,De=v(_,ve);if(_.isDepthTexture)Ue=C(_.format===vi,_.type),nt&&($e?t.texStorage2D(i.TEXTURE_2D,1,Ue,ve.width,ve.height):t.texImage2D(i.TEXTURE_2D,0,Ue,ve.width,ve.height,0,Ie,We,null));else if(_.isDataTexture)if(Ye.length>0){$e&&nt&&t.texStorage2D(i.TEXTURE_2D,De,Ue,Ye[0].width,Ye[0].height);for(let Me=0,Ne=Ye.length;Me<Ne;Me++)Le=Ye[Me],$e?K&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Le.width,Le.height,Ie,We,Le.data):t.texImage2D(i.TEXTURE_2D,Me,Ue,Le.width,Le.height,0,Ie,We,Le.data);_.generateMipmaps=!1}else $e?(nt&&t.texStorage2D(i.TEXTURE_2D,De,Ue,ve.width,ve.height),K&&Q(_,ve,Ie,We)):t.texImage2D(i.TEXTURE_2D,0,Ue,ve.width,ve.height,0,Ie,We,ve.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){$e&&nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Ue,Ye[0].width,Ye[0].height,ve.depth);for(let Me=0,Ne=Ye.length;Me<Ne;Me++)if(Le=Ye[Me],_.format!==mn)if(Ie!==null)if($e){if(K)if(_.layerUpdates.size>0){let He=xc(Le.width,Le.height,_.format,_.type);for(let Ee of _.layerUpdates){let Ze=Le.data.subarray(Ee*He/Le.data.BYTES_PER_ELEMENT,(Ee+1)*He/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,Ee,Le.width,Le.height,1,Ie,Ze)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,Le.width,Le.height,ve.depth,Ie,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Me,Ue,Le.width,Le.height,ve.depth,0,Le.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?K&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,Le.width,Le.height,ve.depth,Ie,We,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Me,Ue,Le.width,Le.height,ve.depth,0,Ie,We,Le.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{$e&&nt&&t.texStorage2D(i.TEXTURE_2D,De,Ue,Ye[0].width,Ye[0].height);for(let Me=0,Ne=Ye.length;Me<Ne;Me++)Le=Ye[Me],_.format!==mn?Ie!==null?$e?K&&t.compressedTexSubImage2D(i.TEXTURE_2D,Me,0,0,Le.width,Le.height,Ie,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,Me,Ue,Le.width,Le.height,0,Le.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?K&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Le.width,Le.height,Ie,We,Le.data):t.texImage2D(i.TEXTURE_2D,Me,Ue,Le.width,Le.height,0,Ie,We,Le.data)}else if(_.isDataArrayTexture)if($e){if(nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Ue,ve.width,ve.height,ve.depth),K)if(_.layerUpdates.size>0){let Me=xc(ve.width,ve.height,_.format,_.type);for(let Ne of _.layerUpdates){let He=ve.data.subarray(Ne*Me/ve.data.BYTES_PER_ELEMENT,(Ne+1)*Me/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ne,ve.width,ve.height,1,Ie,We,He)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ie,We,ve.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,ve.width,ve.height,ve.depth,0,Ie,We,ve.data);else if(_.isData3DTexture)$e?(nt&&t.texStorage3D(i.TEXTURE_3D,De,Ue,ve.width,ve.height,ve.depth),K&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ie,We,ve.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,ve.width,ve.height,ve.depth,0,Ie,We,ve.data);else if(_.isFramebufferTexture){if(nt)if($e)t.texStorage2D(i.TEXTURE_2D,De,Ue,ve.width,ve.height);else{let Me=ve.width,Ne=ve.height;for(let He=0;He<De;He++)t.texImage2D(i.TEXTURE_2D,He,Ue,Me,Ne,0,Ie,We,null),Me>>=1,Ne>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let Me=i.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),ve.parentNode!==Me){Me.appendChild(ve),u.add(_),Me.onpaint=Ne=>{let He=Ne.changedElements;for(let Ee of u)He.includes(Ee.image)&&(Ee.needsUpdate=!0)},Me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ve);else{let He=i.RGBA,Ee=i.RGBA,Ze=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,He,Ee,Ze,ve)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ye.length>0){if($e&&nt){let Me=Qe(Ye[0]);t.texStorage2D(i.TEXTURE_2D,De,Ue,Me.width,Me.height)}for(let Me=0,Ne=Ye.length;Me<Ne;Me++)Le=Ye[Me],$e?K&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Ie,We,Le):t.texImage2D(i.TEXTURE_2D,Me,Ue,Ie,We,Le);_.generateMipmaps=!1}else if($e){if(nt){let Me=Qe(ve);t.texStorage2D(i.TEXTURE_2D,De,Ue,Me.width,Me.height)}K&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ie,We,ve)}else t.texImage2D(i.TEXTURE_2D,0,Ue,Ie,We,ve);p(_)&&A(Y),Pe.__version=we.version,_.onUpdate&&_.onUpdate(_)}F.__version=_.version}function k(F,_,te){if(_.image.length!==6)return;let Y=ye(F,_),fe=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+te);let we=n.get(fe);if(fe.version!==we.__version||Y===!0){t.activeTexture(i.TEXTURE0+te);let Pe=ct.getPrimaries(ct.workingColorSpace),_e=_.colorSpace===ii?null:ct.getPrimaries(_.colorSpace),ve=_.colorSpace===ii||Pe===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Ie=_.isCompressedTexture||_.image[0].isCompressedTexture,We=_.image[0]&&_.image[0].isDataTexture,Ue=[];for(let Ee=0;Ee<6;Ee++)!Ie&&!We?Ue[Ee]=m(_.image[Ee],!0,s.maxCubemapSize):Ue[Ee]=We?_.image[Ee].image:_.image[Ee],Ue[Ee]=rt(_,Ue[Ee]);let Le=Ue[0],Ye=r.convert(_.format,_.colorSpace),$e=r.convert(_.type),nt=M(_.internalFormat,Ye,$e,_.normalized,_.colorSpace),K=_.isVideoTexture!==!0,De=we.__version===void 0||Y===!0,Me=fe.dataReady,Ne=v(_,Le);xe(i.TEXTURE_CUBE_MAP,_);let He;if(Ie){K&&De&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,nt,Le.width,Le.height);for(let Ee=0;Ee<6;Ee++){He=Ue[Ee].mipmaps;for(let Ze=0;Ze<He.length;Ze++){let Xe=He[Ze];_.format!==mn?Ye!==null?K?Me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze,0,0,Xe.width,Xe.height,Ye,Xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze,nt,Xe.width,Xe.height,0,Xe.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze,0,0,Xe.width,Xe.height,Ye,$e,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze,nt,Xe.width,Xe.height,0,Ye,$e,Xe.data)}}}else{if(He=_.mipmaps,K&&De){He.length>0&&Ne++;let Ee=Qe(Ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,nt,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(We){K?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ue[Ee].width,Ue[Ee].height,Ye,$e,Ue[Ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,nt,Ue[Ee].width,Ue[Ee].height,0,Ye,$e,Ue[Ee].data);for(let Ze=0;Ze<He.length;Ze++){let bt=He[Ze].image[Ee].image;K?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze+1,0,0,bt.width,bt.height,Ye,$e,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze+1,nt,bt.width,bt.height,0,Ye,$e,bt.data)}}else{K?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ye,$e,Ue[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,nt,Ye,$e,Ue[Ee]);for(let Ze=0;Ze<He.length;Ze++){let Xe=He[Ze];K?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze+1,0,0,Ye,$e,Xe.image[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze+1,nt,Ye,$e,Xe.image[Ee])}}}p(_)&&A(i.TEXTURE_CUBE_MAP),we.__version=fe.version,_.onUpdate&&_.onUpdate(_)}F.__version=_.version}function H(F,_,te,Y,fe,we){let Pe=r.convert(te.format,te.colorSpace),_e=r.convert(te.type),ve=M(te.internalFormat,Pe,_e,te.normalized,te.colorSpace),Ie=n.get(_),We=n.get(te);if(We.__renderTarget=_,!Ie.__hasExternalTextures){let Ue=Math.max(1,_.width>>we),Le=Math.max(1,_.height>>we);fe===i.TEXTURE_3D||fe===i.TEXTURE_2D_ARRAY?t.texImage3D(fe,we,ve,Ue,Le,_.depth,0,Pe,_e,null):t.texImage2D(fe,we,ve,Ue,Le,0,Pe,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),Ae(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,fe,We.__webglTexture,0,me(_)):(fe===i.TEXTURE_2D||fe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,fe,We.__webglTexture,we),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(F,_,te){if(i.bindRenderbuffer(i.RENDERBUFFER,F),_.depthBuffer){let Y=_.depthTexture,fe=Y&&Y.isDepthTexture?Y.type:null,we=C(_.stencilBuffer,fe),Pe=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ae(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(_),we,_.width,_.height):te?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(_),we,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,we,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,F)}else{let Y=_.textures;for(let fe=0;fe<Y.length;fe++){let we=Y[fe],Pe=r.convert(we.format,we.colorSpace),_e=r.convert(we.type),ve=M(we.internalFormat,Pe,_e,we.normalized,we.colorSpace);Ae(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(_),ve,_.width,_.height):te?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(_),ve,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ve,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(F,_,te){let Y=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let fe=n.get(_.depthTexture);if(fe.__renderTarget=_,(!fe.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),fe.__webglTexture===void 0){fe.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),xe(i.TEXTURE_CUBE_MAP,_.depthTexture);let Ie=r.convert(_.depthTexture.format),We=r.convert(_.depthTexture.type),Ue;_.depthTexture.format===Dn?Ue=i.DEPTH_COMPONENT24:_.depthTexture.format===vi&&(Ue=i.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ue,_.width,_.height,0,Ie,We,null)}}else D(_.depthTexture,0);let we=fe.__webglTexture,Pe=me(_),_e=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+te:i.TEXTURE_2D,ve=_.depthTexture.format===vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Dn)Ae(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,_e,we,0,Pe):i.framebufferTexture2D(i.FRAMEBUFFER,ve,_e,we,0);else if(_.depthTexture.format===vi)Ae(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,_e,we,0,Pe):i.framebufferTexture2D(i.FRAMEBUFFER,ve,_e,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(F){let _=n.get(F),te=F.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==F.depthTexture){let Y=F.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){let fe=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",fe)};Y.addEventListener("dispose",fe),_.__depthDisposeCallback=fe}_.__boundDepthTexture=Y}if(F.depthTexture&&!_.__autoAllocateDepthBuffer)if(te)for(let Y=0;Y<6;Y++)Se(_.__webglFramebuffer[Y],F,Y);else{let Y=F.texture.mipmaps;Y&&Y.length>0?Se(_.__webglFramebuffer[0],F,0):Se(_.__webglFramebuffer,F,0)}else if(te){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),ee(_.__webglDepthbuffer[Y],F,!1);else{let fe=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,we)}}else{let Y=F.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ee(_.__webglDepthbuffer,F,!1);else{let fe=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,we)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function N(F,_,te){let Y=n.get(F);_!==void 0&&H(Y.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),te!==void 0&&se(F)}function ae(F){let _=F.texture,te=n.get(F),Y=n.get(_);F.addEventListener("dispose",y);let fe=F.textures,we=F.isWebGLCubeRenderTarget===!0,Pe=fe.length>1;if(Pe||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,a.memory.textures++),we){te.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(_.mipmaps&&_.mipmaps.length>0){te.__webglFramebuffer[_e]=[];for(let ve=0;ve<_.mipmaps.length;ve++)te.__webglFramebuffer[_e][ve]=i.createFramebuffer()}else te.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){te.__webglFramebuffer=[];for(let _e=0;_e<_.mipmaps.length;_e++)te.__webglFramebuffer[_e]=i.createFramebuffer()}else te.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let _e=0,ve=fe.length;_e<ve;_e++){let Ie=n.get(fe[_e]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),a.memory.textures++)}if(F.samples>0&&Ae(F)===!1){te.__webglMultisampledFramebuffer=i.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let _e=0;_e<fe.length;_e++){let ve=fe[_e];te.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,te.__webglColorRenderbuffer[_e]);let Ie=r.convert(ve.format,ve.colorSpace),We=r.convert(ve.type),Ue=M(ve.internalFormat,Ie,We,ve.normalized,ve.colorSpace,F.isXRRenderTarget===!0),Le=me(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Ue,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,te.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(te.__webglDepthRenderbuffer=i.createRenderbuffer(),ee(te.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(we){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),xe(i.TEXTURE_CUBE_MAP,_);for(let _e=0;_e<6;_e++)if(_.mipmaps&&_.mipmaps.length>0)for(let ve=0;ve<_.mipmaps.length;ve++)H(te.__webglFramebuffer[_e][ve],F,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ve);else H(te.__webglFramebuffer[_e],F,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);p(_)&&A(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let _e=0,ve=fe.length;_e<ve;_e++){let Ie=fe[_e],We=n.get(Ie),Ue=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ue=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ue,We.__webglTexture),xe(Ue,Ie),H(te.__webglFramebuffer,F,Ie,i.COLOR_ATTACHMENT0+_e,Ue,0),p(Ie)&&A(Ue)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(_e=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,Y.__webglTexture),xe(_e,_),_.mipmaps&&_.mipmaps.length>0)for(let ve=0;ve<_.mipmaps.length;ve++)H(te.__webglFramebuffer[ve],F,_,i.COLOR_ATTACHMENT0,_e,ve);else H(te.__webglFramebuffer,F,_,i.COLOR_ATTACHMENT0,_e,0);p(_)&&A(_e),t.unbindTexture()}F.depthBuffer&&se(F)}function ge(F){let _=F.textures;for(let te=0,Y=_.length;te<Y;te++){let fe=_[te];if(p(fe)){let we=w(F),Pe=n.get(fe).__webglTexture;t.bindTexture(we,Pe),A(we),t.unbindTexture()}}}let be=[],q=[];function re(F){if(F.samples>0){if(Ae(F)===!1){let _=F.textures,te=F.width,Y=F.height,fe=i.COLOR_BUFFER_BIT,we=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(F),_e=_.length>1;if(_e)for(let Ie=0;Ie<_.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);let ve=F.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ie=0;Ie<_.length;Ie++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(fe|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(fe|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ie]);let We=n.get(_[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,We,0)}i.blitFramebuffer(0,0,te,Y,0,0,te,Y,fe,i.NEAREST),l===!0&&(be.length=0,q.length=0,be.push(i.COLOR_ATTACHMENT0+Ie),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(be.push(we),q.push(we),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Ie=0;Ie<_.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ie]);let We=n.get(_[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&l){let _=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function me(F){return Math.min(s.maxSamples,F.samples)}function Ae(F){let _=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function V(F){let _=a.render.frame;f.get(F)!==_&&(f.set(F,_),F.update())}function rt(F,_){let te=F.colorSpace,Y=F.format,fe=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||te!==Ks&&te!==ii&&(ct.getTransfer(te)===gt?(Y!==mn||fe!==rn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",te)),_}function Qe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=U,this.getTextureUnits=T,this.setTextureUnits=L,this.setTexture2D=D,this.setTexture2DArray=B,this.setTexture3D=le,this.setTextureCube=G,this.rebindTextures=N,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=H,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function yx(i,e){function t(n,s=ii){let r,a=ct.getTransfer(s);if(n===rn)return i.UNSIGNED_BYTE;if(n===io)return i.UNSIGNED_SHORT_4_4_4_4;if(n===so)return i.UNSIGNED_SHORT_5_5_5_1;if(n===oc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===rc)return i.BYTE;if(n===ac)return i.SHORT;if(n===Rs)return i.UNSIGNED_SHORT;if(n===no)return i.INT;if(n===Tn)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===wn)return i.HALF_FLOAT;if(n===cc)return i.ALPHA;if(n===hc)return i.RGB;if(n===mn)return i.RGBA;if(n===Dn)return i.DEPTH_COMPONENT;if(n===vi)return i.DEPTH_STENCIL;if(n===ro)return i.RED;if(n===ao)return i.RED_INTEGER;if(n===Mi)return i.RG;if(n===oo)return i.RG_INTEGER;if(n===lo)return i.RGBA_INTEGER;if(n===wr||n===Ar||n===Rr||n===Cr)if(a===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===co||n===ho||n===fo||n===uo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===co)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===po||n===mo||n===go||n===xo||n===_o||n===Pr||n===yo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===po||n===mo)return a===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===go)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===xo)return r.COMPRESSED_R11_EAC;if(n===_o)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Pr)return r.COMPRESSED_RG11_EAC;if(n===yo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===vo||n===Mo||n===bo||n===So||n===Eo||n===To||n===wo||n===Ao||n===Ro||n===Co||n===Po||n===Io||n===Lo||n===Do)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===So)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===To)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ao)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ro)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Co)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Po)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Io)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Do)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===No||n===Uo||n===Fo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===No)return a===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oo||n===Bo||n===Ir||n===Ho)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ir)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var vx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mx=`
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

}`,Ic=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new hr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new hn({vertexShader:vx,fragmentShader:Mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new vt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lc=class extends Nn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,f=null,u=null,h=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new Ic,p={},A=t.getContextAttributes(),w=null,M=null,C=[],v=[],R=new Re,y=null,P=null,O=new Rt;O.viewport=new wt;let X=new Rt;X.viewport=new wt;let Z=[O,X],U=new ja,T=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=C[j];return Q===void 0&&(Q=new ds,C[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=C[j];return Q===void 0&&(Q=new ds,C[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=C[j];return Q===void 0&&(Q=new ds,C[j]=Q),Q.getHandSpace()};function J(j){let Q=v.indexOf(j.inputSource);if(Q===-1)return;let ie=C[Q];ie!==void 0&&(ie.update(j.inputSource,j.frame,c||a),ie.dispatchEvent({type:j.type,data:j.inputSource}))}function E(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",E),s.removeEventListener("inputsourceschange",D);for(let j=0;j<C.length;j++){let Q=v[j];Q!==null&&(v[j]=null,C[j].disconnect(Q))}T=null,L=null,m.reset();for(let j in p)delete p[j];if(e.setRenderTarget(w),d=null,h=null,u=null,s=null,M=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(R.width,R.height,!1),P!==null){let j=P.camera;j.fov=P.fov,j.zoom=P.zoom,j.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",E),s.addEventListener("inputsourceschange",D),A.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,k=null,H=null;A.depth&&(H=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=A.stencil?vi:Dn,k=A.stencil?Cs:Tn);let ee={colorFormat:t.RGBA8,depthFormat:H,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(ee),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new tn(h.textureWidth,h.textureHeight,{format:mn,type:rn,depthTexture:new ui(h.textureWidth,h.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ie={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new tn(d.framebufferWidth,d.framebufferHeight,{format:mn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ye.setContext(s),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function D(j){for(let Q=0;Q<j.removed.length;Q++){let ie=j.removed[Q],k=v.indexOf(ie);k>=0&&(v[k]=null,C[k].disconnect(ie))}for(let Q=0;Q<j.added.length;Q++){let ie=j.added[Q],k=v.indexOf(ie);if(k===-1){for(let ee=0;ee<C.length;ee++)if(ee>=v.length){v.push(ie),k=ee;break}else if(v[ee]===null){v[ee]=ie,k=ee;break}if(k===-1)break}let H=C[k];H&&H.connect(ie)}}let B=new W,le=new W;function G(j,Q,ie){B.setFromMatrixPosition(Q.matrixWorld),le.setFromMatrixPosition(ie.matrixWorld);let k=B.distanceTo(le),H=Q.projectionMatrix.elements,ee=ie.projectionMatrix.elements,Se=H[14]/(H[10]-1),se=H[14]/(H[10]+1),N=(H[9]+1)/H[5],ae=(H[9]-1)/H[5],ge=(H[8]-1)/H[0],be=(ee[8]+1)/ee[0],q=Se*ge,re=Se*be,me=k/(-ge+be),Ae=me*-ge;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ae),j.translateZ(me),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),H[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let V=Se+me,rt=se+me,Qe=q-Ae,F=re+(k-Ae),_=N*se/rt*V,te=ae*se/rt*V;j.projectionMatrix.makePerspective(Qe,F,_,te,V,rt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ue(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let Q=j.near,ie=j.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),U.near=X.near=O.near=Q,U.far=X.far=O.far=ie,(T!==U.near||L!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),T=U.near,L=U.far),U.layers.mask=j.layers.mask|6,O.layers.mask=U.layers.mask&-5,X.layers.mask=U.layers.mask&-3;let k=j.parent,H=U.cameras;ue(U,k);for(let ee=0;ee<H.length;ee++)ue(H[ee],k);H.length===2?G(U,O,X):U.projectionMatrix.copy(O.projectionMatrix),P===null&&j.isPerspectiveCamera&&(P={camera:j,fov:j.fov,zoom:j.zoom}),z(j,U,k)};function z(j,Q,ie){ie===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(ie.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ta*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(j){return p[j]};let ne=null;function xe(j,Q){if(f=Q.getViewerPose(c||a),g=Q,f!==null){let ie=f.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let k=!1;ie.length!==U.cameras.length&&(U.cameras.length=0,k=!0);for(let se=0;se<ie.length;se++){let N=ie[se],ae=null;if(d!==null)ae=d.getViewport(N);else{let be=u.getViewSubImage(h,N);ae=be.viewport,se===0&&(e.setRenderTargetTextures(M,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(M))}let ge=Z[se];ge===void 0&&(ge=new Rt,ge.layers.enable(se),ge.viewport=new wt,Z[se]=ge),ge.matrix.fromArray(N.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(N.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(ae.x,ae.y,ae.width,ae.height),se===0&&(U.matrix.copy(ge.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),k===!0&&U.cameras.push(ge)}let H=s.enabledFeatures;if(H&&H.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let se=u.getDepthInformation(ie[0]);se&&se.isValid&&se.texture&&m.init(se,s.renderState)}if(H&&H.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let se=0;se<ie.length;se++){let N=ie[se].camera;if(N){let ae=p[N];ae||(ae=new hr,p[N]=ae);let ge=u.getCameraImage(N);ae.sourceTexture=ge}}}}for(let ie=0;ie<C.length;ie++){let k=v[ie],H=C[ie];k!==null&&H!==void 0&&H.update(k,Q,c||a)}ne&&ne(j,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let ye=new qf;ye.setAnimationLoop(xe),this.setAnimationLoop=function(j){ne=j},this.dispose=function(){}}},bx=new dt,jf=new tt;jf.set(-1,0,0,0,1,0,0,0,1);function Sx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,pc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,w,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),f(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,A,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let A=e.get(p),w=A.envMap,M=A.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(bx.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(jf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ex(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,C){let v=C.program;n.uniformBlockBinding(M,v)}function c(M,C){let v=s[M.id];v===void 0&&(m(M),v=f(M),s[M.id]=v,M.addEventListener("dispose",A));let R=C.program;n.updateUBOMapping(M,R);let y=e.render.frame;r[M.id]!==y&&(h(M),r[M.id]=y)}function f(M){let C=u();M.__bindingPointIndex=C;let v=i.createBuffer(),R=M.__size,y=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,v),v}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let C=s[M.id],v=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let y=0,P=v.length;y<P;y++){let O=v[y];if(Array.isArray(O))for(let X=0,Z=O.length;X<Z;X++)d(O[X],y,X,R);else d(O,y,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,C,v,R){if(x(M,C,v,R)===!0){let y=M.__offset,P=M.value;if(Array.isArray(P)){let O=0;for(let X=0;X<P.length;X++){let Z=P[X],U=p(Z);g(Z,M.__data,O),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(O+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(P,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,M.__data)}}function g(M,C,v){typeof M=="number"||typeof M=="boolean"?C[0]=M:M.isMatrix3?(C[0]=M.elements[0],C[1]=M.elements[1],C[2]=M.elements[2],C[3]=0,C[4]=M.elements[3],C[5]=M.elements[4],C[6]=M.elements[5],C[7]=0,C[8]=M.elements[6],C[9]=M.elements[7],C[10]=M.elements[8],C[11]=0):ArrayBuffer.isView(M)?C.set(new M.constructor(M.buffer,M.byteOffset,C.length)):M.toArray(C,v)}function x(M,C,v,R){let y=M.value,P=C+"_"+v;if(R[P]===void 0)return typeof y=="number"||typeof y=="boolean"?R[P]=y:ArrayBuffer.isView(y)?R[P]=y.slice():R[P]=y.clone(),!0;{let O=R[P];if(typeof y=="number"||typeof y=="boolean"){if(O!==y)return R[P]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(O.equals(y)===!1)return O.copy(y),!0}}return!1}function m(M){let C=M.uniforms,v=0,R=16;for(let P=0,O=C.length;P<O;P++){let X=Array.isArray(C[P])?C[P]:[C[P]];for(let Z=0,U=X.length;Z<U;Z++){let T=X[Z],L=Array.isArray(T.value)?T.value:[T.value];for(let J=0,E=L.length;J<E;J++){let D=L[J],B=p(D),le=v%R,G=le%B.boundary,ue=le+G;v+=G,ue!==0&&R-ue<B.storage&&(v+=R-ue),T.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=v,v+=B.storage}}}let y=v%R;return y>0&&(v+=R-y),M.__size=v,M.__cache={},this}function p(M){let C={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(C.boundary=4,C.storage=4):M.isVector2?(C.boundary=8,C.storage=8):M.isVector3||M.isColor?(C.boundary=16,C.storage=12):M.isVector4?(C.boundary=16,C.storage=16):M.isMatrix3?(C.boundary=48,C.storage=48):M.isMatrix4?(C.boundary=64,C.storage=64):M.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(C.boundary=16,C.storage=M.byteLength):je("WebGLRenderer: Unsupported uniform value type.",M),C}function A(M){let C=M.target;C.removeEventListener("dispose",A);let v=a.indexOf(C.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function w(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var Tx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),kn=null;function wx(){return kn===null&&(kn=new ar(Tx,16,16,Mi,wn),kn.name="DFG_LUT",kn.minFilter=kt,kn.magFilter=kt,kn.wrapS=Ln,kn.wrapT=Ln,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}var Vn=class{constructor(e={}){let{canvas:t=uf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:d=rn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=d,m=new Set([lo,oo,ao]),p=new Set([rn,Tn,Rs,Cs,io,so]),A=new Uint32Array(4),w=new Int32Array(4),M=new W,C=null,v=null,R=[],y=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,X=!1,Z=null,U=null,T=null,L=null;this._outputColorSpace=qt;let J=0,E=0,D=null,B=-1,le=null,G=new wt,ue=new wt,z=null,ne=new et(0),xe=0,ye=t.width,j=t.height,Q=1,ie=null,k=null,H=new wt(0,0,ye,j),ee=new wt(0,0,ye,j),Se=!1,se=new gs,N=!1,ae=!1,ge=new dt,be=new W,q=new wt,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function Ae(){return D===null?Q:1}let V=n;function rt(S,$){return t.getContext(S,$)}let Qe,F,_,te,Y,fe,we,Pe,_e,ve,Ie,We,Ue,Le,Ye,$e,nt,K,De,Me,Ne,He,Ee;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",xn,!1),V===null){let $="webgl2";if(V=rt($,S),V===null)throw rt($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(S){throw t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),Ke("WebGLRenderer: "+S.message),S}function Ze(){Qe=new Dm(V),Qe.init(),Ne=new yx(V,Qe),F=new Sm(V,Qe,e,Ne),_=new xx(V,Qe),F.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),U=V.createFramebuffer(),T=V.createFramebuffer(),L=V.createFramebuffer(),te=new Fm(V),Y=new ix,fe=new _x(V,Qe,_,Y,F,Ne,te),we=new Lm(O),Pe=new Bd(V),He=new Mm(V,Pe),_e=new Nm(V,Pe,te,He),ve=new Bm(V,_e,Pe,He,te),K=new Om(V,F,fe),Ye=new Em(Y),Ie=new nx(O,we,Qe,F,He,Ye),We=new Sx(O,Y),Ue=new rx,Le=new fx(Qe),nt=new vm(O,we,_,ve,g,l),$e=new gx(O,ve,F),Ee=new Ex(V,te,F,_),De=new bm(V,Qe,te),Me=new Um(V,Qe,te),te.programs=Ie.programs,O.capabilities=F,O.extensions=Qe,O.properties=Y,O.renderLists=Ue,O.shadowMap=$e,O.state=_,O.info=te}x!==rn&&(P=new zm(x,t.width,t.height,o,s,r));let Xe=new Lc(O,V);this.xr=Xe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let S=Qe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Qe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(S){S!==void 0&&(Q=S,this.setSize(ye,j,!1))},this.getSize=function(S){return S.set(ye,j)},this.setSize=function(S,$,pe=!0){if(Xe.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=S,j=$,t.width=Math.floor(S*Q),t.height=Math.floor($*Q),pe===!0&&(t.style.width=S+"px",t.style.height=$+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,S,$)},this.getDrawingBufferSize=function(S){return S.set(ye*Q,j*Q).floor()},this.setDrawingBufferSize=function(S,$,pe){ye=S,j=$,Q=pe,t.width=Math.floor(S*pe),t.height=Math.floor($*pe),this.setViewport(0,0,S,$)},this.setEffects=function(S){if(x===rn){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let $=0;$<S.length;$++)if(S[$].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(G)},this.getViewport=function(S){return S.copy(H)},this.setViewport=function(S,$,pe,ce){S.isVector4?H.set(S.x,S.y,S.z,S.w):H.set(S,$,pe,ce),_.viewport(G.copy(H).multiplyScalar(Q).round())},this.getScissor=function(S){return S.copy(ee)},this.setScissor=function(S,$,pe,ce){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,$,pe,ce),_.scissor(ue.copy(ee).multiplyScalar(Q).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(S){_.setScissorTest(Se=S)},this.setOpaqueSort=function(S){ie=S},this.setTransparentSort=function(S){k=S},this.getClearColor=function(S){return S.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(S=!0,$=!0,pe=!0){let ce=0;if(S){let he=!1;if(D!==null){let Be=D.texture.format;he=m.has(Be)}if(he){let Be=D.texture.type,ke=p.has(Be),Oe=nt.getClearColor(),Ge=nt.getClearAlpha(),qe=Oe.r,it=Oe.g,ot=Oe.b;ke?(A[0]=qe,A[1]=it,A[2]=ot,A[3]=Ge,V.clearBufferuiv(V.COLOR,0,A)):(w[0]=qe,w[1]=it,w[2]=ot,w[3]=Ge,V.clearBufferiv(V.COLOR,0,w))}else ce|=V.COLOR_BUFFER_BIT}$&&(ce|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(ce|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&V.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),Z=S},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),nt.dispose(),Ue.dispose(),Le.dispose(),Y.dispose(),we.dispose(),ve.dispose(),He.dispose(),Ee.dispose(),Ie.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",Gc),Xe.removeEventListener("sessionend",Vc),Ei.stop()};function bt(S){S.preventDefault(),er("WebGLRenderer: Context Lost."),X=!0}function pt(){er("WebGLRenderer: Context Restored."),X=!1;let S=te.autoReset,$=$e.enabled,pe=$e.autoUpdate,ce=$e.needsUpdate,he=$e.type;Ze(),te.autoReset=S,$e.enabled=$,$e.autoUpdate=pe,$e.needsUpdate=ce,$e.type=he}function xn(S){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Rn(S){let $=S.target;$.removeEventListener("dispose",Rn),gu($)}function gu(S){xu(S),Y.remove(S)}function xu(S){let $=Y.get(S).programs;$!==void 0&&($.forEach(function(pe){Ie.releaseProgram(pe)}),S.isShaderMaterial&&Ie.releaseShaderCache(S))}this.renderBufferDirect=function(S,$,pe,ce,he,Be){$===null&&($=re);let ke=he.isMesh&&he.matrixWorld.determinantAffine()<0,Oe=vu(S,$,pe,ce,he);_.setMaterial(ce,ke);let Ge=pe.index,qe=1;if(ce.wireframe===!0){if(Ge=_e.getWireframeAttribute(pe),Ge===void 0)return;qe=2}let it=pe.drawRange,ot=pe.attributes.position,Ve=it.start*qe,mt=(it.start+it.count)*qe;Be!==null&&(Ve=Math.max(Ve,Be.start*qe),mt=Math.min(mt,(Be.start+Be.count)*qe)),Ge!==null?(Ve=Math.max(Ve,0),mt=Math.min(mt,Ge.count)):ot!=null&&(Ve=Math.max(Ve,0),mt=Math.min(mt,ot.count));let Lt=mt-Ve;if(Lt<0||Lt===1/0)return;He.setup(he,ce,Oe,pe,Ge);let Et,Mt=De;if(Ge!==null&&(Et=Pe.get(Ge),Mt=Me,Mt.setIndex(Et)),he.isMesh)ce.wireframe===!0?(_.setLineWidth(ce.wireframeLinewidth*Ae()),Mt.setMode(V.LINES)):Mt.setMode(V.TRIANGLES);else if(he.isLine){let Vt=ce.linewidth;Vt===void 0&&(Vt=1),_.setLineWidth(Vt*Ae()),he.isLineSegments?Mt.setMode(V.LINES):he.isLineLoop?Mt.setMode(V.LINE_LOOP):Mt.setMode(V.LINE_STRIP)}else he.isPoints?Mt.setMode(V.POINTS):he.isSprite&&Mt.setMode(V.TRIANGLES);if(he.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))Mt.renderMultiDraw(he._multiDrawStarts,he._multiDrawCounts,he._multiDrawCount);else{let Vt=he._multiDrawStarts,ze=he._multiDrawCounts,$t=he._multiDrawCount,ft=Ge?Pe.get(Ge).bytesPerElement:1,un=Y.get(ce).currentProgram.getUniforms();for(let Cn=0;Cn<$t;Cn++)un.setValue(V,"_gl_DrawID",Cn),Mt.render(Vt[Cn]/ft,ze[Cn])}else if(he.isInstancedMesh)Mt.renderInstances(Ve,Lt,he.count);else if(pe.isInstancedBufferGeometry){let Vt=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,ze=Math.min(pe.instanceCount,Vt);Mt.renderInstances(Ve,Lt,ze)}else Mt.render(Ve,Lt)};function kc(S,$,pe,ce){Z!==null&&S.isNodeMaterial&&Z.setObject(ce,S),N===!0&&Ye.setState(S,pe,!1),S.transparent===!0&&S.side===Zt&&S.forceSinglePass===!1?(S.side=Gt,S.needsUpdate=!0,zr(S,$,ce),S.side=gi,S.needsUpdate=!0,zr(S,$,ce),S.side=Zt):zr(S,$,ce)}this.compile=function(S,$,pe=null){pe===null&&(pe=S),Z!==null&&Z.renderStart(S,$,pe),v=Le.get(pe),v.init($),y.push(v),pe.traverseVisible(function(he){he.isLight&&he.layers.test($.layers)&&(v.pushLight(he),he.castShadow&&v.pushShadow(he))}),S!==pe&&S.traverseVisible(function(he){he.isLight&&he.layers.test($.layers)&&(v.pushLight(he),he.castShadow&&v.pushShadow(he))}),v.setupLights(),Z!==null&&Z.updateLights(v.state.lightsArray),ae=this.localClippingEnabled,N=Ye.init(this.clippingPlanes,ae),N===!0&&Ye.setGlobalState(this.clippingPlanes,$),Z!==null&&$e.render(v.state.shadowsArray,pe,$);let ce=new Set;return S.traverse(function(he){if(!(he.isMesh||he.isPoints||he.isLine||he.isSprite))return;let Be=he.material;if(Be)if(Array.isArray(Be))for(let ke=0;ke<Be.length;ke++){let Oe=Be[ke];kc(Oe,pe,$,he),ce.add(Oe)}else kc(Be,pe,$,he),ce.add(Be)}),v=y.pop(),Z!==null&&Z.renderEnd(),ce},this.compileAsync=function(S,$,pe=null){let ce=this.compile(S,$,pe);return new Promise(he=>{function Be(){if(ce.forEach(function(ke){let Ge=Y.get(ke).currentProgram;(Ge===void 0||Ge.isReady())&&ce.delete(ke)}),ce.size===0){he(S);return}setTimeout(Be,10)}Qe.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let nl=null;function _u(S){nl&&nl(S)}function Gc(){Ei.stop()}function Vc(){Ei.start()}let Ei=new qf;Ei.setAnimationLoop(_u),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(S){nl=S,Xe.setAnimationLoop(S),S===null?Ei.stop():Ei.start()},Xe.addEventListener("sessionstart",Gc),Xe.addEventListener("sessionend",Vc),this.render=function(S,$){if($!==void 0&&$.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;Z!==null&&Z.renderStart(S,$);let pe=Xe.enabled===!0&&Xe.isPresenting===!0,ce=P!==null&&(D===null||pe)&&P.begin(O,D);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera($),$=Xe.getCamera()),S.isScene===!0&&S.onBeforeRender(O,S,$,D),v=Le.get(S,y.length),v.init($),v.state.textureUnits=fe.getTextureUnits(),y.push(v),ge.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),se.setFromProjectionMatrix(ge,Mn,$.reversedDepth),ae=this.localClippingEnabled,N=Ye.init(this.clippingPlanes,ae),C=Ue.get(S,R.length),C.init(),R.push(C),Xe.enabled===!0&&Xe.isPresenting===!0){let ke=O.xr.getDepthSensingMesh();ke!==null&&il(ke,$,-1/0,O.sortObjects)}il(S,$,0,O.sortObjects),C.finish(),Z!==null&&Z.updateLights(v.state.lightsArray),O.sortObjects===!0&&C.sort(ie,k),me=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,me&&nt.addToRenderList(C,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),N===!0&&Ye.beginShadows();let he=v.state.shadowsArray;if($e.render(he,S,$),N===!0&&Ye.endShadows(),(ce&&P.hasRenderPass())===!1){let ke=C.opaque,Oe=C.transmissive;if(v.setupLights(),$.isArrayCamera){let Ge=$.cameras;if(Oe.length>0)for(let qe=0,it=Ge.length;qe<it;qe++){let ot=Ge[qe];Xc(ke,Oe,S,ot)}me&&nt.render(S);for(let qe=0,it=Ge.length;qe<it;qe++){let ot=Ge[qe];Wc(C,S,ot,ot.viewport)}}else Oe.length>0&&Xc(ke,Oe,S,$),me&&nt.render(S),Wc(C,S,$)}D!==null&&E===0&&(fe.updateMultisampleRenderTarget(D),fe.updateRenderTargetMipmap(D)),ce&&P.end(O),S.isScene===!0&&S.onAfterRender(O,S,$),He.resetDefaultState(),B=-1,le=null,y.pop(),y.length>0?(v=y[y.length-1],fe.setTextureUnits(v.state.textureUnits),N===!0&&Ye.setGlobalState(O.clippingPlanes,v.state.camera)):v=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,Z!==null&&Z.renderEnd()};function il(S,$,pe,ce){if(S.visible===!1)return;if(S.layers.test($.layers)){if(S.isGroup)pe=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update($);else if(S.isLightProbeGrid)v.pushLightProbeGrid(S);else if(S.isLight)v.pushLight(S),S.castShadow&&v.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(se)){ce&&q.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ge);let ke=ve.update(S),Oe=S.material;Oe.visible&&C.push(S,ke,Oe,pe,q.z,null,$)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(se))){let ke=ve.update(S),Oe=S.material;if(ce&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),q.copy(S.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),q.copy(ke.boundingSphere.center)),q.applyMatrix4(S.matrixWorld).applyMatrix4(ge)),Array.isArray(Oe)){let Ge=ke.groups;for(let qe=0,it=Ge.length;qe<it;qe++){let ot=Ge[qe],Ve=Oe[ot.materialIndex];Ve&&Ve.visible&&C.push(S,ke,Ve,pe,q.z,ot,$)}}else Oe.visible&&C.push(S,ke,Oe,pe,q.z,null,$)}}let Be=S.children;for(let ke=0,Oe=Be.length;ke<Oe;ke++)il(Be[ke],$,pe,ce)}function Wc(S,$,pe,ce){let{opaque:he,transmissive:Be,transparent:ke}=S;v.setupLightsView(pe),N===!0&&Ye.setGlobalState(O.clippingPlanes,pe),ce&&_.viewport(G.copy(ce)),he.length>0&&Hr(he,$,pe),Be.length>0&&Hr(Be,$,pe),ke.length>0&&Hr(ke,$,pe),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Xc(S,$,pe,ce){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[ce.id]===void 0){let Ve=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[ce.id]=new tn(1,1,{generateMipmaps:!0,type:Ve?wn:rn,minFilter:yi,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let Be=v.state.transmissionRenderTarget[ce.id],ke=ce.viewport||G;Be.setSize(ke.z*O.transmissionResolutionScale,ke.w*O.transmissionResolutionScale);let Oe=O.getRenderTarget(),Ge=O.getActiveCubeFace(),qe=O.getActiveMipmapLevel();O.setRenderTarget(Be),O.getClearColor(ne),xe=O.getClearAlpha(),xe<1&&O.setClearColor(16777215,.5),O.clear(),me&&nt.render(pe);let it=O.toneMapping;O.toneMapping=En;let ot=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),v.setupLightsView(ce),N===!0&&Ye.setGlobalState(O.clippingPlanes,ce),Hr(S,pe,ce),fe.updateMultisampleRenderTarget(Be),fe.updateRenderTargetMipmap(Be),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let mt=0,Lt=$.length;mt<Lt;mt++){let Et=$[mt],{object:Mt,geometry:Vt,material:ze,group:$t}=Et;if(ze.side===Zt&&Mt.layers.test(ce.layers)){let ft=ze.side;ze.side=Gt,ze.needsUpdate=!0,qc(Mt,pe,ce,Vt,ze,$t),ze.side=ft,ze.needsUpdate=!0,Ve=!0}}Ve===!0&&(fe.updateMultisampleRenderTarget(Be),fe.updateRenderTargetMipmap(Be))}O.setRenderTarget(Oe,Ge,qe),O.setClearColor(ne,xe),ot!==void 0&&(ce.viewport=ot),O.toneMapping=it}function Hr(S,$,pe){let ce=$.isScene===!0?$.overrideMaterial:null;for(let he=0,Be=S.length;he<Be;he++){let ke=S[he],{object:Oe,geometry:Ge,group:qe}=ke,it=ke.material;it.allowOverride===!0&&ce!==null&&(it=ce),Oe.layers.test(pe.layers)&&qc(Oe,$,pe,Ge,it,qe)}}function qc(S,$,pe,ce,he,Be){Z!==null&&he.isNodeMaterial&&Z.setObject(S,he),S.onBeforeRender(O,$,pe,ce,he,Be),S.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),he.onBeforeRender(O,$,pe,ce,S,Be),he.transparent===!0&&he.side===Zt&&he.forceSinglePass===!1?(he.side=Gt,he.needsUpdate=!0,O.renderBufferDirect(pe,$,ce,he,S,Be),he.side=gi,he.needsUpdate=!0,O.renderBufferDirect(pe,$,ce,he,S,Be),he.side=Zt):O.renderBufferDirect(pe,$,ce,he,S,Be),S.onAfterRender(O,$,pe,ce,he,Be)}function zr(S,$,pe){$.isScene!==!0&&($=re);let ce=Y.get(S),he=v.state.lights,Be=v.state.shadowsArray,ke=he.state.version,Oe=Ie.getParameters(S,he.state,Be,$,pe,v.state.lightProbeGridArray),Ge=Ie.getProgramCacheKey(Oe),qe=ce.programs;ce.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?$.environment:null,ce.fog=$.fog;let it=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;ce.envMap=we.get(S.envMap||ce.environment,it),ce.envMapRotation=ce.environment!==null&&S.envMap===null?$.environmentRotation:S.envMapRotation,qe===void 0&&(S.addEventListener("dispose",Rn),qe=new Map,ce.programs=qe);let ot=qe.get(Ge);if(ot!==void 0){if(ce.currentProgram===ot&&ce.lightsStateVersion===ke)return Zc(S,Oe),ot}else Oe.uniforms=Ie.getUniforms(S),Z!==null&&S.isNodeMaterial&&Z.build(S,pe,Oe),S.onBeforeCompile(Oe,O),ot=Ie.acquireProgram(Oe,Ge),qe.set(Ge,ot),ce.uniforms=Oe.uniforms;let Ve=ce.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ve.clippingPlanes=Ye.uniform),Zc(S,Oe),ce.needsLights=bu(S),ce.lightsStateVersion=ke,ce.needsLights&&(Ve.ambientLightColor.value=he.state.ambient,Ve.lightProbe.value=he.state.probe,Ve.sunLights.value=he.state.sun,Ve.sunLightShadows.value=he.state.sunShadow,Ve.directionalLights.value=he.state.directional,Ve.directionalLightShadows.value=he.state.directionalShadow,Ve.spotLights.value=he.state.spot,Ve.spotLightShadows.value=he.state.spotShadow,Ve.rectAreaLights.value=he.state.rectArea,Ve.ltc_1.value=he.state.rectAreaLTC1,Ve.ltc_2.value=he.state.rectAreaLTC2,Ve.pointLights.value=he.state.point,Ve.pointLightShadows.value=he.state.pointShadow,Ve.hemisphereLights.value=he.state.hemi,Ve.sunShadowMatrix.value=he.state.sunShadowMatrix,Ve.sunShadowCascade.value=he.state.sunShadowCascade,Ve.directionalShadowMatrix.value=he.state.directionalShadowMatrix,Ve.spotLightMatrix.value=he.state.spotLightMatrix,Ve.spotLightMap.value=he.state.spotLightMap,Ve.pointShadowMatrix.value=he.state.pointShadowMatrix),ce.lightProbeGrid=v.state.lightProbeGridArray.length>0,ce.currentProgram=ot,ce.uniformsList=null,ot}function Yc(S){if(S.uniformsList===null){let $=S.currentProgram.getUniforms();S.uniformsList=Ls.seqWithValue($.seq,S.uniforms)}return S.uniformsList}function Zc(S,$){let pe=Y.get(S);pe.outputColorSpace=$.outputColorSpace,pe.batching=$.batching,pe.batchingColor=$.batchingColor,pe.instancing=$.instancing,pe.instancingColor=$.instancingColor,pe.instancingMorph=$.instancingMorph,pe.skinning=$.skinning,pe.morphTargets=$.morphTargets,pe.morphNormals=$.morphNormals,pe.morphColors=$.morphColors,pe.morphTargetsCount=$.morphTargetsCount,pe.numClippingPlanes=$.numClippingPlanes,pe.numIntersection=$.numClipIntersection,pe.vertexAlphas=$.vertexAlphas,pe.vertexTangents=$.vertexTangents,pe.toneMapping=$.toneMapping}function yu(S,$){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition($.matrixWorld);for(let pe=0,ce=S.length;pe<ce;pe++){let he=S[pe];if(he.texture!==null&&he.boundingBox.containsPoint(M))return he}return null}function vu(S,$,pe,ce,he){$.isScene!==!0&&($=re),fe.resetTextureUnits();let Be=$.fog,ke=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?$.environment:null,Oe=D===null?O.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ct.workingColorSpace,Ge=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,qe=we.get(ce.envMap||ke,Ge),it=ce.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,ot=!!pe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Ve=!!pe.morphAttributes.position,mt=!!pe.morphAttributes.normal,Lt=!!pe.morphAttributes.color,Et=En;ce.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Et=O.toneMapping);let Mt=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,Vt=Mt!==void 0?Mt.length:0,ze=Y.get(ce),$t=v.state.lights;if(N===!0&&(ae===!0||S!==le)){let St=S===le&&ce.id===B;Ye.setState(ce,S,St)}let ft=!1;ce.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==$t.state.version||ze.outputColorSpace!==Oe||he.isBatchedMesh&&ze.batching===!1||!he.isBatchedMesh&&ze.batching===!0||he.isBatchedMesh&&ze.batchingColor===!0&&he._colorsTexture===null||he.isBatchedMesh&&ze.batchingColor===!1&&he._colorsTexture!==null||he.isInstancedMesh&&ze.instancing===!1||!he.isInstancedMesh&&ze.instancing===!0||he.isSkinnedMesh&&ze.skinning===!1||!he.isSkinnedMesh&&ze.skinning===!0||he.isInstancedMesh&&ze.instancingColor===!0&&he.instanceColor===null||he.isInstancedMesh&&ze.instancingColor===!1&&he.instanceColor!==null||he.isInstancedMesh&&ze.instancingMorph===!0&&he.morphTexture===null||he.isInstancedMesh&&ze.instancingMorph===!1&&he.morphTexture!==null||ze.envMap!==qe||ce.fog===!0&&ze.fog!==Be||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ye.numPlanes||ze.numIntersection!==Ye.numIntersection)||ze.vertexAlphas!==it||ze.vertexTangents!==ot||ze.morphTargets!==Ve||ze.morphNormals!==mt||ze.morphColors!==Lt||ze.toneMapping!==Et||ze.morphTargetsCount!==Vt||!!ze.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,ze.__version=ce.version);let un=ze.currentProgram;ft===!0&&(un=zr(ce,$,he),Z&&ce.isNodeMaterial&&Z.onUpdateProgram(ce,un,ze));let Cn=!1,si=!1,ki=!1,_t=un.getUniforms(),It=ze.uniforms;if(_.useProgram(un.program)&&(Cn=!0,si=!0,ki=!0),ce.id!==B&&(B=ce.id,si=!0),ze.needsLights){let St=yu(v.state.lightProbeGridArray,he);ze.lightProbeGrid!==St&&(ze.lightProbeGrid=St,si=!0)}if(Cn||le!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),_t.setValue(V,"projectionMatrix",S.projectionMatrix),_t.setValue(V,"viewMatrix",S.matrixWorldInverse);let ai=_t.map.cameraPosition;ai!==void 0&&ai.setValue(V,be.setFromMatrixPosition(S.matrixWorld)),F.logarithmicDepthBuffer&&_t.setValue(V,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&_t.setValue(V,"isOrthographic",S.isOrthographicCamera===!0),le!==S&&(le=S,si=!0,ki=!0)}if(ze.needsLights&&($t.state.sunShadowMap.length>0&&_t.setValue(V,"sunShadowMap",$t.state.sunShadowMap,fe),$t.state.directionalShadowMap.length>0&&_t.setValue(V,"directionalShadowMap",$t.state.directionalShadowMap,fe),$t.state.spotShadowMap.length>0&&_t.setValue(V,"spotShadowMap",$t.state.spotShadowMap,fe),$t.state.pointShadowMap.length>0&&_t.setValue(V,"pointShadowMap",$t.state.pointShadowMap,fe)),he.isSkinnedMesh){_t.setOptional(V,he,"bindMatrix"),_t.setOptional(V,he,"bindMatrixInverse");let St=he.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),_t.setValue(V,"boneTexture",St.boneTexture,fe))}he.isBatchedMesh&&(_t.setOptional(V,he,"batchingTexture"),_t.setValue(V,"batchingTexture",he._matricesTexture,fe),_t.setOptional(V,he,"batchingIdTexture"),_t.setValue(V,"batchingIdTexture",he._indirectTexture,fe),_t.setOptional(V,he,"batchingColorTexture"),he._colorsTexture!==null&&_t.setValue(V,"batchingColorTexture",he._colorsTexture,fe));let ri=pe.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&K.update(he,pe,un),(si||ze.receiveShadow!==he.receiveShadow)&&(ze.receiveShadow=he.receiveShadow,_t.setValue(V,"receiveShadow",he.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&$.environment!==null&&(It.envMapIntensity.value=$.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=wx()),si){if(_t.setValue(V,"toneMappingExposure",O.toneMappingExposure),ze.needsLights&&Mu(It,ki),Be&&ce.fog===!0&&We.refreshFogUniforms(It,Be),We.refreshMaterialUniforms(It,ce,Q,j,v.state.transmissionRenderTarget[S.id]),ze.needsLights&&ze.lightProbeGrid){let St=ze.lightProbeGrid;It.probesSH.value=St.texture,It.probesMin.value.copy(St.boundingBox.min),It.probesMax.value.copy(St.boundingBox.max),It.probesResolution.value.copy(St.resolution)}Ls.upload(V,Yc(ze),It,fe)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Ls.upload(V,Yc(ze),It,fe),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&_t.setValue(V,"center",he.center),_t.setValue(V,"modelViewMatrix",he.modelViewMatrix),_t.setValue(V,"normalMatrix",he.normalMatrix),_t.setValue(V,"modelMatrix",he.matrixWorld),ce.uniformsGroups!==void 0){let St=ce.uniformsGroups;for(let ai=0,Gi=St.length;ai<Gi;ai++){let $c=St[ai];Ee.update($c,un),Ee.bind($c,un)}}return un}function Mu(S,$){S.ambientLightColor.needsUpdate=$,S.lightProbe.needsUpdate=$,S.sunLights.needsUpdate=$,S.sunLightShadows.needsUpdate=$,S.directionalLights.needsUpdate=$,S.directionalLightShadows.needsUpdate=$,S.pointLights.needsUpdate=$,S.pointLightShadows.needsUpdate=$,S.spotLights.needsUpdate=$,S.spotLightShadows.needsUpdate=$,S.rectAreaLights.needsUpdate=$,S.hemisphereLights.needsUpdate=$}function bu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,$,pe){let ce=Y.get(S);ce.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),Y.get(S.texture).__webglTexture=$,Y.get(S.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:pe,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,$){let pe=Y.get(S);pe.__webglFramebuffer=$,pe.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(S,$=0,pe=0){D=S,J=$,E=pe;let ce=null,he=!1,Be=!1;if(S){let Oe=Y.get(S);if(Oe.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(V.FRAMEBUFFER,Oe.__webglFramebuffer),G.copy(S.viewport),ue.copy(S.scissor),z=S.scissorTest,_.viewport(G),_.scissor(ue),_.setScissorTest(z),B=-1;return}else if(Oe.__webglFramebuffer===void 0)fe.setupRenderTarget(S);else if(Oe.__hasExternalTextures)fe.rebindTextures(S,Y.get(S.texture).__webglTexture,Y.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let it=S.depthTexture;if(Oe.__boundDepthTexture!==it){if(it!==null&&Y.has(it)&&(S.width!==it.image.width||S.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(S)}}let Ge=S.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Be=!0);let qe=Y.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(qe[$])?ce=qe[$][pe]:ce=qe[$],he=!0):S.samples>0&&fe.useMultisampledRTT(S)===!1?ce=Y.get(S).__webglMultisampledFramebuffer:Array.isArray(qe)?ce=qe[pe]:ce=qe,G.copy(S.viewport),ue.copy(S.scissor),z=S.scissorTest}else G.copy(H).multiplyScalar(Q).floor(),ue.copy(ee).multiplyScalar(Q).floor(),z=Se;if(pe!==0&&(ce=U),_.bindFramebuffer(V.FRAMEBUFFER,ce)&&_.drawBuffers(S,ce),_.viewport(G),_.scissor(ue),_.setScissorTest(z),he){let Oe=Y.get(S.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+$,Oe.__webglTexture,pe)}else if(Be){let Oe=$;for(let Ge=0;Ge<S.textures.length;Ge++){let qe=Y.get(S.textures[Ge]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ge,qe.__webglTexture,pe,Oe)}}else if(S!==null&&pe!==0){let Oe=Y.get(S.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Oe.__webglTexture,pe)}B=-1};function Jc(S){let $=Y.get(S);return($.__readFormat!==S.format||$.__readType!==S.type)&&($.__readFormat=S.format,$.__readType=S.type,$.__formatReadable=F.textureFormatReadable(S.format),$.__typeReadable=F.textureTypeReadable(S.type)),$}this.readRenderTargetPixels=function(S,$,pe,ce,he,Be,ke,Oe=0){if(!(S&&S.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Y.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge){_.bindFramebuffer(V.FRAMEBUFFER,Ge);try{let qe=S.textures[Oe],it=qe.format,ot=qe.type;S.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Oe);let Ve=Jc(qe);if(Ve.__formatReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=S.width-ce&&pe>=0&&pe<=S.height-he&&V.readPixels($,pe,ce,he,Ne.convert(it),Ne.convert(ot),Be)}finally{let qe=D!==null?Y.get(D).__webglFramebuffer:null;_.bindFramebuffer(V.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(S,$,pe,ce,he,Be,ke,Oe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Y.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge)if($>=0&&$<=S.width-ce&&pe>=0&&pe<=S.height-he){_.bindFramebuffer(V.FRAMEBUFFER,Ge);let qe=S.textures[Oe],it=qe.format,ot=qe.type;S.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Oe);let Ve=Jc(qe);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,mt),V.bufferData(V.PIXEL_PACK_BUFFER,Be.byteLength,V.STREAM_READ),V.readPixels($,pe,ce,he,Ne.convert(it),Ne.convert(ot),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Lt=D!==null?Y.get(D).__webglFramebuffer:null;_.bindFramebuffer(V.FRAMEBUFFER,Lt);let Et=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await pf(V,Et,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,mt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Be),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(mt),V.deleteSync(Et),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,$=null,pe=0){let ce=Math.pow(2,-pe),he=Math.floor(S.image.width*ce),Be=Math.floor(S.image.height*ce),ke=$!==null?$.x:0,Oe=$!==null?$.y:0;fe.setTexture2D(S,0),V.copyTexSubImage2D(V.TEXTURE_2D,pe,0,0,ke,Oe,he,Be),_.unbindTexture()},this.copyTextureToTexture=function(S,$,pe=null,ce=null,he=0,Be=0){let ke,Oe,Ge,qe,it,ot,Ve,mt,Lt,Et=S.isCompressedTexture?S.mipmaps[Be]:S.image;if(pe!==null)ke=pe.max.x-pe.min.x,Oe=pe.max.y-pe.min.y,Ge=pe.isBox3?pe.max.z-pe.min.z:1,qe=pe.min.x,it=pe.min.y,ot=pe.isBox3?pe.min.z:0;else{let It=Math.pow(2,-he);ke=Math.floor(Et.width*It),Oe=Math.floor(Et.height*It),S.isDataArrayTexture?Ge=Et.depth:S.isData3DTexture?Ge=Math.floor(Et.depth*It):Ge=1,qe=0,it=0,ot=0}ce!==null?(Ve=ce.x,mt=ce.y,Lt=ce.z):(Ve=0,mt=0,Lt=0);let Mt=Ne.convert($.format),Vt=Ne.convert($.type),ze;$.isData3DTexture?(fe.setTexture3D($,0),ze=V.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(fe.setTexture2DArray($,0),ze=V.TEXTURE_2D_ARRAY):(fe.setTexture2D($,0),ze=V.TEXTURE_2D),_.activeTexture(V.TEXTURE0),_.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,$.flipY),_.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),_.pixelStorei(V.UNPACK_ALIGNMENT,$.unpackAlignment);let $t=_.getParameter(V.UNPACK_ROW_LENGTH),ft=_.getParameter(V.UNPACK_IMAGE_HEIGHT),un=_.getParameter(V.UNPACK_SKIP_PIXELS),Cn=_.getParameter(V.UNPACK_SKIP_ROWS),si=_.getParameter(V.UNPACK_SKIP_IMAGES);_.pixelStorei(V.UNPACK_ROW_LENGTH,Et.width),_.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Et.height),_.pixelStorei(V.UNPACK_SKIP_PIXELS,qe),_.pixelStorei(V.UNPACK_SKIP_ROWS,it),_.pixelStorei(V.UNPACK_SKIP_IMAGES,ot);let ki=S.isDataArrayTexture||S.isData3DTexture,_t=$.isDataArrayTexture||$.isData3DTexture;if(S.isDepthTexture){let It=Y.get(S),ri=Y.get($),St=Y.get(It.__renderTarget),ai=Y.get(ri.__renderTarget);_.bindFramebuffer(V.READ_FRAMEBUFFER,St.__webglFramebuffer),_.bindFramebuffer(V.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let Gi=0;Gi<Ge;Gi++)ki&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Y.get(S).__webglTexture,he,ot+Gi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Y.get($).__webglTexture,Be,Lt+Gi)),V.blitFramebuffer(qe,it,ke,Oe,Ve,mt,ke,Oe,V.DEPTH_BUFFER_BIT,V.NEAREST);_.bindFramebuffer(V.READ_FRAMEBUFFER,null),_.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(he!==0||S.isRenderTargetTexture||Y.has(S)){let It=Y.get(S),ri=Y.get($);_.bindFramebuffer(V.READ_FRAMEBUFFER,T),_.bindFramebuffer(V.DRAW_FRAMEBUFFER,L);for(let St=0;St<Ge;St++)ki?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,It.__webglTexture,he,ot+St):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,It.__webglTexture,he),_t?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ri.__webglTexture,Be,Lt+St):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ri.__webglTexture,Be),he!==0?V.blitFramebuffer(qe,it,ke,Oe,Ve,mt,ke,Oe,V.COLOR_BUFFER_BIT,V.NEAREST):_t?V.copyTexSubImage3D(ze,Be,Ve,mt,Lt+St,qe,it,ke,Oe):V.copyTexSubImage2D(ze,Be,Ve,mt,qe,it,ke,Oe);_.bindFramebuffer(V.READ_FRAMEBUFFER,null),_.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else _t?S.isDataTexture||S.isData3DTexture?V.texSubImage3D(ze,Be,Ve,mt,Lt,ke,Oe,Ge,Mt,Vt,Et.data):$.isCompressedArrayTexture?V.compressedTexSubImage3D(ze,Be,Ve,mt,Lt,ke,Oe,Ge,Mt,Et.data):V.texSubImage3D(ze,Be,Ve,mt,Lt,ke,Oe,Ge,Mt,Vt,Et):S.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Be,Ve,mt,ke,Oe,Mt,Vt,Et.data):S.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Be,Ve,mt,Et.width,Et.height,Mt,Et.data):V.texSubImage2D(V.TEXTURE_2D,Be,Ve,mt,ke,Oe,Mt,Vt,Et);_.pixelStorei(V.UNPACK_ROW_LENGTH,$t),_.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ft),_.pixelStorei(V.UNPACK_SKIP_PIXELS,un),_.pixelStorei(V.UNPACK_SKIP_ROWS,Cn),_.pixelStorei(V.UNPACK_SKIP_IMAGES,si),Be===0&&$.generateMipmaps&&V.generateMipmap(ze),_.unbindTexture()},this.initRenderTarget=function(S){Y.get(S).__webglFramebuffer===void 0&&fe.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?fe.setTextureCube(S,0):S.isData3DTexture?fe.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?fe.setTexture2DArray(S,0):fe.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){J=0,E=0,D=null,_.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var Ur=new W;function gn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Ur.copy(e),Ur[n]=0,Ur.normalize();let c=.5*a/(a+o),f=1-Ur.angleTo(i)/l;return Math.sign(Ur[t])===1?f*c:o/(a+o)+c+c*(1-f)}var Jo=class i extends Bn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new W,c=new W,f=new W(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,x=new W,m=.5/a;for(let p=0,A=0;p<u.length;p+=3,A+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=f.x*Math.sign(l.x)+c.x*r,u[p+1]=f.y*Math.sign(l.y)+c.y*r,u[p+2]=f.z*Math.sign(l.z)+c.z*r,h[p+0]=c.x,h[p+1]=c.y,h[p+2]=c.z,Math.floor(p/g)){case 0:x.set(1,0,0),d[A+0]=gn(x,c,"z","y",r,n),d[A+1]=1-gn(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),d[A+0]=1-gn(x,c,"z","y",r,n),d[A+1]=1-gn(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),d[A+0]=1-gn(x,c,"x","z",r,e),d[A+1]=gn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),d[A+0]=1-gn(x,c,"x","z",r,e),d[A+1]=1-gn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),d[A+0]=1-gn(x,c,"x","y",r,e),d[A+1]=1-gn(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),d[A+0]=gn(x,c,"x","y",r,e),d[A+1]=1-gn(x,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var ut={mint:6153140,mintDeep:4179866,belly:13237224,lav:13089023,lavDeep:11772671,pink:16748480,ink:2759518,wood:15782832,woodDark:14267530,wall:15326974,wallB:16770033,cream:16774890,sun:16764735},b=(i,e)=>new zt(Object.assign({color:i,roughness:.85,metalness:0},e||{})),de=(i,e,t,n)=>new Jo(i,e,t,4,n??Math.min(i,e,t)*.25);function I(i,e,t,n,s,r){let a=new ht(i,e);return a.position.set(t||0,n||0,s||0),r!==!1&&(a.castShadow=!0,a.receiveShadow=!0),a}function oe(i,e,t,n,s,r,a,o){let l=I(new Ms(i,32,24),e,r,a,o);return l.scale.set(t||1,n||1,s||1),l}function At(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new _s(n);return s.colorSpace=qt,s.anisotropy=4,s}function Si(i){let e=new Ii;return e.moveTo(0,-.5*i),e.bezierCurveTo(-.9*i,.05*i,-.5*i,.7*i,0,.3*i),e.bezierCurveTo(.5*i,.7*i,.9*i,.05*i,0,-.5*i),e}function su(i){return At(64,64,e=>{if(e.translate(32,32),i==="heart")e.fillStyle="#FF5FA8",e.beginPath(),e.moveTo(0,22),e.bezierCurveTo(-34,-2,-16,-28,0,-10),e.bezierCurveTo(16,-28,34,-2,0,22),e.fill();else if(i==="star"){e.fillStyle="#FFCF3F",e.beginPath();for(let t=0;t<10;t++){let n=t%2?9:22,s=t*Math.PI/5-Math.PI/2;e.lineTo(Math.cos(s)*n,Math.sin(s)*n)}e.fill()}else i==="drop"?(e.fillStyle="#8EDBFF",e.beginPath(),e.moveTo(0,-22),e.bezierCurveTo(22,4,14,22,0,22),e.bezierCurveTo(-14,22,-22,4,0,-22),e.fill()):i==="bubble"?(e.strokeStyle="#8EDBFF",e.lineWidth=4,e.fillStyle="rgba(200,240,255,.55)",e.beginPath(),e.arc(0,0,16,0,7),e.fill(),e.stroke(),e.fillStyle="#fff",e.beginPath(),e.arc(-6,-6,4,0,7),e.fill()):i==="z"?(e.fillStyle="#7C5CFF",e.font="900 40px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("z",0,2)):(e.fillStyle="#fff",e.beginPath(),e.arc(0,0,14,0,7),e.fill())})}function Oc(i){let e=i>>>0||1;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function bi(i,e,t,n){n=n||{};let s=n.w||256,r=n.h||256,a=Oc(n.seed||7),o=At(s,r,l=>{if(l.fillStyle=i,l.fillRect(0,0,s,r),n.planks){let c=r/n.planks;for(let f=0;f<n.planks;f++){l.fillStyle=e[f%e.length],l.globalAlpha=.5,l.fillRect(0,f*c,s,c),l.globalAlpha=1,l.fillStyle="rgba(90,50,20,.28)",l.fillRect(0,f*c,s,2);for(let u=0;u<3;u++)l.fillStyle="rgba(90,50,20,.18)",l.fillRect(a()*s,f*c,2,c)}}l.lineCap="round";for(let c=0;c<t;c++){l.strokeStyle=e[Math.floor(a()*e.length)],l.globalAlpha=.07+a()*.14,l.lineWidth=5+a()*(n.bw||14);let f=a()*s,u=a()*r,h=(n.ang==null?-.6:n.ang)+(a()-.5)*.7,d=14+a()*(n.len||46);l.beginPath(),l.moveTo(f,u),l.lineTo(f+Math.cos(h)*d,u+Math.sin(h)*d),l.stroke()}l.globalAlpha=1});return o.wrapS=o.wrapT=bn,o}var Qf=null;function tl(){return Qf||(Qf=At(64,64,i=>{let e=i.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.45,"rgba(255,255,255,.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,64,64)}))}function Bc(i){try{i.toneMapping=Sr,i.toneMappingExposure=1.02}catch{}}var eu=!1;function Hc(i){try{if(!eu){eu=!0;let e=document.createElement("style");e.textContent=`.gh-vig{position:absolute;inset:0;pointer-events:none;z-index:1;background:radial-gradient(ellipse 85% 75% at 50% 46%,rgba(255,236,200,0) 55%,rgba(90,45,25,.30) 100%),linear-gradient(rgba(255,206,140,.07),rgba(255,206,140,.07));mix-blend-mode:multiply}.gh-grain{position:absolute;inset:0;pointer-events:none;z-index:1;opacity:.07;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 .3 0 0 0 0 .2 0 0 0 0 .1 0 0 0 .9 0'/></filter><rect width='120' height='120' filter='url(%23n)'/></svg>")}`,document.head.appendChild(e)}getComputedStyle(i).position==="static"&&(i.style.position="relative"),["gh-vig","gh-grain"].forEach(e=>{let t=document.createElement("div");t.className=e,i.appendChild(t)})}catch{}}function jo(i,e,t,n,s,r){r=r||{};let a=[];for(let u=0;u<s;u++){let h=new ti(new On({map:tl(),color:r.color||16777215,transparent:!0,opacity:0,depthWrite:!1}));h.userData={o:u/s,sw:Math.random()*6},i.add(h),a.push(h)}let o=r.rise||1.1,l=r.size||.35,c=r.op||.5,f=r.speed||.3;return u=>{a.forEach(h=>{let d=(u*f+h.userData.o)%1;h.position.set(e+Math.sin(u*1.3+h.userData.sw)*.09*(.4+d),t+d*o,n+Math.cos(u+h.userData.sw)*.04),h.scale.setScalar(l*(.7+d*1.9)),h.material.opacity=c*Math.sin(Math.min(1,d)*Math.PI)*(1-d*.4)})}}function Uc(i,e,t,n,s,r,a){let o=new ti(new On({map:tl(),color:e,transparent:!0,opacity:a??.7,depthWrite:!1,blending:xi}));return o.scale.setScalar(t),o.position.set(n,s,r),i.add(o),o}function Or(i,e,t,n,s,r,a,o,l){let c=At(64,128,u=>{let h=u.createLinearGradient(0,0,0,128);h.addColorStop(0,"rgba(255,255,255,.95)"),h.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=h,u.fillRect(0,0,64,128),u.globalCompositeOperation="destination-in";let d=u.createLinearGradient(0,0,64,0);d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(.5,"rgba(0,0,0,1)"),d.addColorStop(1,"rgba(0,0,0,0)"),u.fillStyle=d,u.fillRect(0,0,64,128)}),f=new ht(new vt(t,n),new Je({map:c,color:e,transparent:!0,opacity:l||.22,depthWrite:!1,blending:xi,side:Zt}));return f.position.set(s,r,a),f.rotation.z=o||0,i.add(f),f}function Qo(i,e,t,n,s){let r=new Nt,a=new Float32Array(e*3),o=[];for(let c=0;c<e;c++)o.push([Math.random()*6.28,.2+Math.random()*.4,Math.random()*6.28]);r.setAttribute("position",new Yt(a,3));let l=new lr(r,new xs({map:tl(),color:n||16773832,size:s||.06,transparent:!0,opacity:.8,depthWrite:!1,blending:xi,sizeAttenuation:!0}));return l.frustumCulled=!1,i.add(l),c=>{for(let f=0;f<e;f++){let u=o[f];a[f*3]=t[0]+Math.sin(c*u[1]+u[0])*t[3],a[f*3+1]=t[1]+(c*.06*(u[1]+.3)+u[2])%1*t[4],a[f*3+2]=t[2]+Math.cos(c*u[1]*.8+u[2])*t[5]}r.attributes.position.needsUpdate=!0}}function Rx(i){return At(256,192,(e,t,n)=>{let s=e.createLinearGradient(0,0,0,n);if(s.addColorStop(0,i==="sea"?"#8fd0f0":"#a9dcf5"),s.addColorStop(1,i==="dusk"?"#ffc9a0":"#fdf3dc"),e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle=i==="dusk"?"#ff9a6b":"#fff0a8",e.beginPath(),e.arc(t*.72,n*.28,22,0,7),e.fill(),e.fillStyle="rgba(255,255,255,.95)",[[60,50,18],[82,48,24],[108,52,16],[170,74,12],[186,72,16]].forEach(r=>{e.beginPath(),e.arc(r[0],r[1],r[2],0,7),e.fill()}),i==="sea"){e.fillStyle="#4fb0e0",e.fillRect(0,n*.62,t,n),e.strokeStyle="rgba(255,255,255,.7)",e.lineWidth=3;for(let r=0;r<7;r++)e.beginPath(),e.moveTo(10+r*34,n*.7+r%3*14),e.quadraticCurveTo(24+r*34,n*.66+r%3*14,38+r*34,n*.7+r%3*14),e.stroke();return}e.fillStyle="#9fd48a",e.beginPath(),e.moveTo(0,n*.7),e.quadraticCurveTo(t*.3,n*.45,t*.6,n*.66),e.quadraticCurveTo(t*.85,n*.52,t,n*.62),e.lineTo(t,n),e.lineTo(0,n),e.fill(),e.fillStyle="#6cba6a",e.beginPath(),e.moveTo(0,n*.85),e.quadraticCurveTo(t*.5,n*.62,t,n*.82),e.lineTo(t,n),e.lineTo(0,n),e.fill(),e.fillStyle="#fff6e6",e.fillRect(t*.3,n*.62,34,26),e.fillStyle="#e8735a",e.beginPath(),e.moveTo(t*.3-4,n*.62),e.lineTo(t*.3+17,n*.5),e.lineTo(t*.3+38,n*.62),e.fill(),e.fillStyle="#8a5a3a",e.fillRect(t*.3+13,n*.7,8,18),e.fillStyle="rgba(255,255,255,.7)",e.beginPath(),e.arc(t*.3+30,n*.46,5,0,7),e.arc(t*.3+36,n*.4,7,0,7),e.fill()})}function el(i,e,t){let n=new Te,s=b(15320986);return n.add(I(de(e+.22,t+.22,.1,.04),s,0,0,0)),n.add(I(new vt(e,t),new Je({map:Rx(i)}),0,0,.056,!1)),n}function Br(i,e){return At(e?768:384,384,(t,n,s)=>{let r=Oc(11),a=i<6||i>=21,o=i>=18&&i<21,l=i>=6&&i<9,c=t.createLinearGradient(0,0,0,s);if(a?(c.addColorStop(0,"#15123f"),c.addColorStop(1,"#4b3a8f")):o?(c.addColorStop(0,"#7a62c8"),c.addColorStop(.55,"#ff9fb8"),c.addColorStop(1,"#ffd9a0")):l?(c.addColorStop(0,"#8fd0ff"),c.addColorStop(1,"#ffe8cf")):(c.addColorStop(0,"#5fb8f5"),c.addColorStop(.7,"#bfe6ff"),c.addColorStop(1,"#eaf8ff")),t.fillStyle=c,t.fillRect(0,0,n,s),a){for(let h=0;h<40;h++)t.globalAlpha=.4+r()*.6,t.fillStyle="#fff",t.beginPath(),t.arc(r()*n,r()*s*.7,r()*1.8+.5,0,7),t.fill();t.globalAlpha=1;let u=t.createRadialGradient(n*.7,s*.25,4,n*.7,s*.25,70);u.addColorStop(0,"rgba(255,244,194,.9)"),u.addColorStop(1,"rgba(255,244,194,0)"),t.fillStyle=u,t.fillRect(0,0,n,s),t.fillStyle="#FFF4C2",t.beginPath(),t.arc(n*.7,s*.25,28,0,7),t.fill(),t.fillStyle="#4b3a8f",t.beginPath(),t.arc(n*.7+12,s*.25-6,24,0,7),t.fill()}else{let u=n*(o?.28:.72),h=s*(o?.62:.24),d=t.createRadialGradient(u,h,6,u,h,120);d.addColorStop(0,o?"rgba(255,150,110,.95)":"rgba(255,240,160,.95)"),d.addColorStop(1,"rgba(255,240,160,0)"),t.fillStyle=d,t.fillRect(0,0,n,s),t.fillStyle=o?"#FF8A6B":"#FFF0A0",t.beginPath(),t.arc(u,h,26,0,7),t.fill(),(e?[[90,120,1.2],[270,90,.9],[200,170,.7],[470,110,1.1],[640,80,.9],[560,180,.7]]:[[90,120,1.2],[270,90,.9],[200,170,.7]]).forEach(g=>{let x=[[0,0,34],[34,-8,40],[70,2,32],[-30,8,26],[20,14,36],[52,14,30]];x.forEach(m=>{t.fillStyle="rgba(150,185,225,.65)",t.beginPath(),t.arc(g[0]+m[0]*g[2],g[1]+m[1]*g[2]+8,m[2]*g[2],0,7),t.fill()}),x.forEach(m=>{t.fillStyle=o?"rgba(255,225,230,.97)":"rgba(255,255,255,.97)",t.beginPath(),t.arc(g[0]+m[0]*g[2],g[1]+m[1]*g[2]-3,m[2]*g[2]*.92,0,7),t.fill()})})}let f=a?["#2a2a6a","#223a5a"]:o?["#8a78b8","#5f8a6a"]:["#8cc9c0","#7fc27a"];t.fillStyle=f[0],t.beginPath(),t.moveTo(0,s*.72),t.quadraticCurveTo(n*.25,s*.55,n*.55,s*.7),t.quadraticCurveTo(n*.8,s*.6,n,s*.68),t.lineTo(n,s),t.lineTo(0,s),t.fill(),t.fillStyle=f[1],t.beginPath(),t.moveTo(0,s*.84),t.quadraticCurveTo(n*.4,s*.7,n,s*.86),t.lineTo(n,s),t.lineTo(0,s),t.fill(),t.fillStyle=a?"#1d3d3a":"#4fa55a",t.beginPath(),t.arc(n*.2,s*.76,30,0,7),t.arc(n*.26,s*.72,24,0,7),t.fill(),t.fillStyle="#7a5434",t.fillRect(n*.2-3,s*.78,7,22);for(let u=0;u<26;u++)t.fillStyle=["#ff8fb4","#ffe27a","#fff"][u%3],t.beginPath(),t.arc(r()*n,s*(.88+r()*.1),2.2,0,7),t.fill()})}var ru=[6153140,12166911,16758938,9362431,16769658,16754895,11069547,14738674,16751266,13085071,10405375,16164607],au=["cat","bear","bunny","none","fox","mouse"],ou=["dot","happy","stars","big","sleepy"],lu=["","bow","glasses","beanie","flower","crown","shades","phones","bandana","bowtie","wings","hat"],cu=["round","tall","chubby","bean"],hu=["none","cat","bunny","fox"],Cx=/^[0-9a-b][0-5][0-4][0-9a-b][0-3][0-3](h[0-5])?$/,Px=[{color:12166911,ears:"none",eyes:"stars",acc:["hat"],tail:"cat"},{color:16743034,ears:"none",eyes:"happy",acc:["horns"],tail:"fox"},{color:16753226,ears:"none",eyes:"happy",acc:["pumpkin"],tail:"none"},{color:14738674,ears:"cat",eyes:"big",acc:["cape"],tail:"none"},{color:15986918,ears:"none",eyes:"dot",acc:["mummy"],tail:"none"},{color:16777215,ears:"none",eyes:"big",acc:["ghost"],tail:"none"}];function fu(i){return i=String(i??""),/^[0-7][0-3][0-2][0-4]$/.test(i)&&(i+="00"),Cx.test(i)?i:""}function Hi(i){i=fu(i)||"000000";let e=lu[parseInt(i[3],12)],t={mika:!0,color:ru[parseInt(i[0],12)],ears:au[+i[1]],eyes:ou[+i[2]],topper:"pom",acc:e?[e]:[],shape:cu[+i[4]],tail:hu[+i[5]]};return i[6]==="h"?Object.assign(t,Px[+i[7]]||{}):t}function Ix(i,e){if(!i.isMesh)return i;let t=new ht(i.geometry,new Je({color:e,side:Gt}));return t.scale.setScalar(1.05),t.castShadow=!1,t.receiveShadow=!1,i.add(t),i}function Dc(i,e){let t=new et(i);return t.multiplyScalar(e),t}function Qt(i){i=Object.assign({color:ut.mint,ears:"round",topper:"pom",eyes:"dot",mika:!1,acc:[]},i||{});let e=new Te,t=new Te;e.add(t);let n={tall:[.9,1.2],chubby:[1.2,.9],bean:[.86,1.1]}[i.shape]||[1,1],s=n[0],r=n[1],a=b(i.color,{roughness:.62,emissive:Dc(i.color,.55),emissiveIntensity:.3}),o=b(Dc(i.color,.85).getHex()),l=.55*1.1,c=.55*.95,f=.55,u=.56,h=(E,D)=>f*Math.sqrt(Math.max(.02,1-(E/l)**2-((D-u)/c)**2));t.add(oe(.55,a,1.1,.95,1,0,.56,0));{let E=new et(i.color).lerp(new et(16777215),.62).getHex();t.add(oe(.42,b(E,{roughness:.7,emissive:E,emissiveIntensity:.32}),1.05,.9,.55,0,.42,.3))}let d=b(i.mika?14273791:16757713),g=[];if([-1,1].forEach(E=>{let D=new Te,B=.28;if(i.ears==="round")D.position.set(E*.4,.98,-.02),D.add(oe(.22,a,1,1.05,.62,0,.12,0)),D.add(oe(.12,d,1,1.05,.5,0,.12,.08));else if(i.ears==="bear")D.position.set(E*.43,.97,-.02),D.add(oe(.17,a,1,1,.7,0,.1,0)),D.add(oe(.09,d,1,1,.5,0,.1,.07)),B=.2;else if(i.ears==="cat"){D.position.set(E*.36,1,0);let le=I(new Pt(.2,.4,4),a,0,.15,0);le.rotation.y=Math.PI/4,le.scale.z=.55,D.add(le);let G=I(new Pt(.11,.26,4),d,0,.12,.06);G.rotation.y=Math.PI/4,G.scale.z=.4,D.add(G),B=.32}else if(i.ears==="fox"){D.position.set(E*.33,1,0);let le=I(new Pt(.16,.46,4),a,0,.18,0);le.rotation.y=Math.PI/4,le.scale.z=.5,D.add(le);let G=I(new Pt(.08,.18,4),b(16774380),0,.3,.01);G.rotation.y=Math.PI/4,G.scale.z=.5,D.add(G),B=.22}else if(i.ears==="mouse")D.position.set(E*.46,.92,-.02),D.add(oe(.26,a,1,1,.45,0,.12,0)),D.add(oe(.17,d,1,1,.4,0,.12,.07)),B=.34;else if(i.ears==="bunny")D.position.set(E*.26,1,-.02),D.add(oe(.14,a,1,2.6,.55,0,.3,0)),D.add(oe(.08,d,1,2.3,.5,0,.3,.06)),B=.14;else return;D.userData.base=B,D.rotation.z=-E*B,t.add(D),g.push(D)}),i.tail&&i.tail!=="none"){let E=new Te;if(E.position.set(0,.3,-.5),t.add(E),i.tail==="bunny")E.add(oe(.14,b(16777215,{roughness:.9}),1,1,1,0,0,-.04));else if(i.tail==="cat"){let D=I(new at(.2,.05,8,18,Math.PI*1.25),a,.12,.12,-.04);D.rotation.set(0,0,.3),E.add(D),E.add(oe(.06,a,1,1,1,.34,.26,-.04))}else{let D=oe(.2,a,.8,1.5,.8,.12,.14,-.06);D.rotation.z=-.7,E.add(D);let B=oe(.1,b(16774380),.8,1.3,.8,.28,.3,-.06);B.rotation.z=-.7,E.add(B)}E.traverse(D=>{D.isMesh&&(D.castShadow=!1)})}let x=new Te;x.position.set(0,1.07,.02),t.add(x),i.topper==="pom"?(x.add(oe(.11,b(ut.lav),1,1,1,-.1,.02,0)),x.add(oe(.11,b(ut.lav),1,1,1,.1,.02,0)),x.add(oe(.14,b(ut.lavDeep),1,1,1,0,.12,0)),x.add(oe(.035,b(16777215,{emissive:16777215,emissiveIntensity:.4}),1,1,1,-.04,.2,.09))):i.ears==="none"&&(x.position.y=1.02,x.add(oe(.1,a,1,1,1,0,.05,0)),x.add(oe(.05,b(16777215),1,1,1,-.02,.1,.05)));let m=new Te;t.add(m);let p=new zt({color:ut.ink,roughness:.25}),A=new Je({color:16777215}),w=[];[-1,1].forEach(E=>{let D=E*.21,B=.66,le=h(D,B)-.02,G=new Te;G.position.set(D,B,le);let ue=new Te,z=i.eyes==="stars"?1.2:i.eyes==="big"?1.38:1;ue.add(oe(.105*z,p,1,i.eyes==="dot"&&!i.mika?1.1:i.eyes==="sleepy"?.62:1.28,.55,0,0,0));let ne=oe(.036*z,A,1,1,1,.035,.07,.07);ne.castShadow=!1,ue.add(ne);let xe=oe(.018*z,A,1,1,1,-.035,-.06,.07);if(xe.castShadow=!1,ue.add(xe),i.eyes==="stars"){let k=oe(.02,A,1,1,1,.045,-.04,.075);k.castShadow=!1,ue.add(k)}G.add(ue);let ye=new ht(new at(.075,.02,8,20,Math.PI),p);ye.position.y=-.03,ye.visible=!1,G.add(ye);let j=new ht(new at(.075,.02,8,20,Math.PI),p);j.rotation.z=Math.PI,j.position.y=.03,j.visible=!1,G.add(j);let Q=new ht(new cn(Si(.24),{depth:.03,bevelEnabled:!1}),new Je({color:16732058}));Q.position.z=.02,Q.visible=!1,G.add(Q);let ie=I(de(.17,.035,.04,.015),p,0,.18,.04);ie.visible=!1,ie.castShadow=!1,G.add(ie),m.add(G),w.push({g:G,open:ue,happy:ye,closed:j,heart:Q,brow:ie,s:E})});let M=[-1,1].map(E=>{let D=oe(.085,b(16748480,{roughness:.9}),1.2,.72,.3,E*.37,.5,h(E*.37,.5)-.03);return D.castShadow=!1,m.add(D),D}),C=.47,v=h(0,C)-.005,R={};R.smile=new ht(new at(.05,.015,8,16,Math.PI),p),R.smile.rotation.z=Math.PI,R.smile.position.set(0,C+.045,v),R.frown=new ht(new at(.05,.015,8,16,Math.PI),p),R.frown.position.set(0,C-.02,v),R.open=oe(.075,new zt({color:8004178,roughness:.5}),1,.9,.35,0,C,v-.01),R.open.add(oe(.04,b(16748451),1.3,.7,.4,0,-.04,.03)),R.o=oe(.035,new zt({color:8004178}),1,1.2,.4,0,C,v-.005),Object.keys(R).forEach(E=>{R[E].visible=!1,R[E].castShadow=!1,m.add(R[E])});let y=new zt({color:9362431,roughness:.1,transparent:!0,opacity:.85}),P=oe(.04,y,.8,1.2,.8,-.27,.56,h(-.27,.56)+.01);P.visible=!1,m.add(P);let O=oe(.045,y,.8,1.25,.8,.46,.98,.25);O.visible=!1,t.add(O);let X=[-1,1].map(E=>{let D=new Te;return D.position.set(E*.6,.5,.08),D.add(oe(.14,o,1.15,.7,.75,E*.06,0,0)),t.add(D),D}),Z=[-1,1].map(E=>{let D=oe(.16,o,1,.6,1.25,E*.25,.08,.2);return e.add(D),D}),U={};U.scarf=new Te;{let E=I(new at(.4,.085,12,32),b(ut.pink),0,.36,.12);E.rotation.x=Math.PI/2.1,E.scale.set(1.12,1,1),U.scarf.add(E);let D=I(de(.14,.34,.06,.03),b(16740270),.28,.2,.46);D.rotation.z=.15,U.scarf.add(D)}U.bow=new Te;{let E=b(16740270),D=oe(.1,E,1.4,.8,.5,-.11,0,0),B=oe(.1,E,1.4,.8,.5,.11,0,0);D.rotation.z=.5,B.rotation.z=-.5,U.bow.add(D,B,oe(.055,b(16757713),1,1,.8,0,0,.02)),U.bow.position.set(-.4,1.17,.12),U.bow.rotation.z=.2}U.crown=new Te;{let E=b(ut.sun,{metalness:.3,roughness:.4});U.crown.add(I(new Ce(.2,.22,.12,20,1,!0),E,0,0,0));for(let D=0;D<5;D++){let B=D/5*Math.PI*2;U.crown.add(I(new Pt(.06,.16,8),E,Math.cos(B)*.2,.12,Math.sin(B)*.2))}U.crown.position.set(0,1.12,.03)}U.glasses=new Te,[-1,1].forEach(E=>{U.glasses.add(I(new at(.13,.016,8,24),p,E*.21,.66,h(E*.21,.66)+.04))}),U.glasses.add(I(de(.1,.018,.02,.008),p,0,.67,h(0,.67)+.04)),U.hat=new Te,U.hat.add(I(new Pt(.3,.7,20),b(8150271),0,.38,0)),U.hat.add(I(new Ce(.46,.46,.05,28),b(5980118),0,.02,0)),U.hat.add(oe(.045,b(ut.sun,{emissive:16764735,emissiveIntensity:.6}),1,1,1,0,.74,0)),U.hat.position.set(0,1.1,0),U.hat.rotation.z=.12,U.wings=new Te;{let E=b(16777215,{roughness:.6});[-1,1].forEach(D=>{let B=oe(.3,E,.5,1,.18,D*.55,.62,-.35);B.rotation.z=D*-.5,U.wings.add(B)})}U.pj=new Te,U.pj.add(oe(.34,b(9347839),1.05,.7,1,0,.1,0)),U.pj.add(oe(.075,b(16777215),1,1,1,.3,.12,.2)),U.pj.position.set(0,1,0),U.pj.rotation.z=-.1,U.beanie=new Te;{U.beanie.add(oe(.38,b(16740238),1.05,.62,1,0,.05,0));let E=I(new at(.36,.07,10,28),b(16777215),0,-.04,0);E.rotation.x=Math.PI/2,U.beanie.add(E),U.beanie.add(oe(.09,b(16777215),1,1,1,0,.36,0)),U.beanie.position.set(0,1,0)}U.flower=new Te;{for(let E=0;E<5;E++){let D=E/5*Math.PI*2;U.flower.add(oe(.07,b(16757713),1,1,.6,Math.cos(D)*.09,Math.sin(D)*.09,0))}U.flower.add(oe(.055,b(ut.sun),1,1,.8,0,0,.03)),U.flower.position.set(.36,1.08,.18),U.flower.rotation.z=-.3}U.bowtie=new Te;{let E=b(14697851);U.bowtie.add(oe(.1,E,1.5,.9,.6,-.12,0,0),oe(.1,E,1.5,.9,.6,.12,0,0),oe(.05,b(16765411),1,1,.8,0,0,.02)),U.bowtie.position.set(0,.34,.5)}U.horns=new Te,[-1,1].forEach(E=>{let D=I(new Pt(.09,.3,12),b(14035001),E*.24,0,0);D.rotation.z=-E*.35,U.horns.add(D)}),U.horns.position.set(0,1.02,.05),U.pumpkin=new Te,U.pumpkin.add(oe(.4,b(16747039),1.15,.8,1.1,0,0,0)),U.pumpkin.add(I(new Ce(.04,.06,.16,8),b(4028970),0,.3,0)),[-1,1].forEach(E=>U.pumpkin.add(I(new Pt(.06,.1,3),b(2759518),E*.14,.04,.4))),U.pumpkin.position.set(0,1.05,.02),U.cape=new Te,U.cape.add(I(de(1,1,.06,.03),b(11538990),0,.35,-.5)),U.cape.add(I(new at(.42,.06,8,24),b(2759518),0,.18,.1)).rotation.x=Math.PI/2,[-1,1].forEach(E=>U.cape.add(I(new Pt(.035,.12,8),b(16777215),E*.07,.22,.5))),U.mummy=new Te;{let E=b(16775920,{roughness:.9});[.05,.28,.5,.72].forEach((D,B)=>{let le=I(new at(.5-Math.abs(D-.4)*.12,.05,8,28),E,0,D,0);le.rotation.x=Math.PI/2+(B%2?.14:-.14),U.mummy.add(le)})}U.ghost=new Te,U.ghost.add(oe(.62,b(16777215,{transparent:!0,opacity:.72,roughness:1}),1,1.02,1,0,.42,0)),[-1,1].forEach(E=>U.ghost.add(oe(.04,b(2759518),1,1.4,.5,E*.2,.62,.55))),U.mortar=new Te;{let E=b(2759518);U.mortar.add(I(new Ce(.26,.3,.16,20),E,0,.04,0)),U.mortar.add(I(de(.8,.04,.8,.01),E,0,.15,0)),U.mortar.add(I(new Ce(.012,.012,.3,6),b(ut.sun),.28,0,.28)),U.mortar.add(oe(.05,b(ut.sun),1,1,1,.28,-.14,.28)),U.mortar.position.set(0,1.08,0)}U.labcoat=new Te;{let E=b(16777215,{roughness:.7});U.labcoat.add(oe(.58,E,1.12,.7,1.05,0,.42,-.02)),U.labcoat.add(oe(.07,b(14697851),1,1,.6,.26,.42,.52)),U.labcoat.add(oe(.07,b(14697851),1,1,.6,.26,.26,.54))}U.shades=new Te;{let E=b(1906240,{roughness:.2});[-1,1].forEach(D=>{U.shades.add(oe(.14,E,1.05,.82,.3,D*.21,.66,h(D*.21,.66)+.05))}),U.shades.add(I(de(.12,.025,.03,.01),E,0,.68,h(0,.68)+.06))}U.phones=new Te;{let E=b(16748480),D=b(16777215),B=I(new at(.5,.045,8,28,Math.PI),E,0,0,0);B.rotation.z=0,U.phones.add(B),[-1,1].forEach(le=>{let G=I(new Ce(.15,.15,.12,18),D,le*.5,-.02,0);G.rotation.z=Math.PI/2,U.phones.add(G),U.phones.add(oe(.08,E,1,1,.5,le*.56,-.02,0))}),U.phones.position.set(0,.62,.02)}U.bunny=new Te;{let E=b(16777215),D=b(16757713);[-1,1].forEach(le=>{let G=oe(.1,E,1,3.2,.5,le*.2,.34,0);G.rotation.z=-le*.18,U.bunny.add(G);let ue=oe(.055,D,1,2.6,.5,le*.2,.34,.04);ue.rotation.z=-le*.18,U.bunny.add(ue)});let B=I(new at(.34,.035,8,24),D,0,0,0);B.rotation.x=Math.PI/2,U.bunny.add(B),U.bunny.position.set(0,1.06,.02)}U.cape=new Te;{let E=b(14697851);U.cape.add(oe(.5,E,1.1,1.15,.2,0,.52,-.5));let D=I(new at(.34,.07,10,28),b(16765411),0,.3,.05);D.rotation.x=Math.PI/2.2,U.cape.add(D)}U.bandana=new Te;{let E=b(16734830),D=I(new at(.43,.06,10,28),E,0,0,0);D.rotation.x=Math.PI/2.15,U.bandana.add(D),U.bandana.add(oe(.09,E,1.3,1,.8,.33,-.04,.2)),U.bandana.add(oe(.05,b(16777215),1,1,1,0,.02,.43)),U.bandana.position.set(0,.94,0)}Object.keys(U).forEach(E=>{U[E].visible=!1,t.add(U[E])});{let E=Dc(i.color,.42).getHex(),D=[];t.traverse(B=>{B.isMesh&&B.parent&&(B.material===a||B.material===o)&&D.push(B)}),Z.forEach(B=>D.push(B)),D.forEach(B=>Ix(B,E))}e.traverse(E=>{E.isMesh&&(E.receiveShadow=!1)});let T={emo:"neutral",talking:!1,vy:0,y:0,squash:0,yaw:0,yawT:0,blinkT:0,nextBlink:1.5+Math.random()*2,look:new Re,lookT:new Re,nextLook:1,armsT:0,sleeping:!1},L={root:e,st:T,fx:null,baseY:0,roll:0};function J(E){let D=i.eyes==="happy"&&!i.mika;E.open.visible=!D,E.happy.visible=D,E.closed.visible=!1,E.heart.visible=!1,E.brow.visible=!1,E.g.scale.set(1,1,1)}return L.setAccessories=E=>{Object.keys(U).forEach(D=>{U[D].visible=E.indexOf(D)>=0})},L.setEmotion=E=>{T.emo=E,T.armsT=0,T.sleeping=!1,w.forEach(J),Object.keys(R).forEach(B=>{R[B].visible=!1}),P.visible=!1,O.visible=!1;let D=w;E==="happy"?(D.forEach(B=>{B.open.visible=!1,B.happy.visible=!0}),R.open.visible=!0,R.open.scale.set(1.05,.8,.35)):E==="love"?(D.forEach(B=>{B.open.visible=!1,B.heart.visible=!0}),R.open.visible=!0,T.armsT=1):E==="wow"?(D.forEach(B=>{B.g.scale.set(1.18,1.18,1)}),R.o.visible=!0):E==="sad"?(D.forEach(B=>{B.brow.visible=!0,B.brow.rotation.z=-B.s*.45}),R.frown.visible=!0,P.visible=!0):E==="worry"?(D.forEach(B=>{B.brow.visible=!0,B.brow.rotation.z=-B.s*.4}),R.o.visible=!0,R.o.scale.set(.8,1,.4),O.visible=!0):E==="angry"?(D.forEach(B=>{B.brow.visible=!0,B.brow.rotation.z=B.s*.5,B.g.scale.set(1.05,.85,1)}),R.open.visible=!0,R.open.scale.set(1.35,1.1,.35),T.armsT=.9,O.visible=!1):E==="proud"?(D.forEach(B=>{B.open.visible=!1,B.happy.visible=!0}),R.open.visible=!0,R.open.scale.set(1.2,1,.35),T.armsT=.5,L.fx&&L.fx("star",5)):E==="shy"?(D.forEach(B=>{B.open.visible=!1,B.closed.visible=!0}),R.smile.visible=!0,T.yawT=.5):E==="sleep"?(D.forEach(B=>{B.open.visible=!1,B.closed.visible=!0}),R.o.visible=!0,R.o.scale.set(.6,.7,.4),T.sleeping=!0):R.smile.visible=!0,M.forEach(B=>B.scale.set(E==="shy"||E==="love"?1.6:1.2,E==="shy"?.95:.72,.3))},L.hop=E=>{T.y<.05&&(T.vy=E||4.2,T.squash=-.2)},L.setTalking=E=>{T.talking=!!E},L.setListening=E=>{T.listening=!!E,E||(T.yawT=0)},L.look=(E,D)=>T.lookT.set(E,D),L.face=E=>{T.yawT=E},L.update=(E,D,B,le)=>{(T.y>0||T.vy>0)&&(T.vy-=16*E,T.y+=T.vy*E,T.y<=0&&(T.y=0,T.vy<-1&&(T.squash=.18),T.vy=0)),T.squash+=(0-T.squash)*Math.min(1,E*10),e.position.y=(L.baseY||0)+T.y+(B?Math.abs(Math.sin(D*9))*.07:0),T.yaw+=(T.yawT-T.yaw)*Math.min(1,E*5),e.rotation.y=T.yaw,e.rotation.z=(B?Math.sin(D*9)*.08:0)+(L.roll||0);let G=T.sleeping?.04*Math.sin(D*1.4):.022*Math.sin(D*2.3);t.scale.set((1-T.squash*.5-G*.5)*s,(1+T.squash+G)*r,(1-T.squash*.5)*s),Z.forEach((ne,xe)=>{ne.position.y=.08+(B?Math.max(0,Math.sin(D*9+xe*Math.PI))*.06:0)});let ue=T.emo==="sad"||T.emo==="worry"?.35:T.listening?-.12:0;g.forEach((ne,xe)=>{let ye=xe?1:-1;ne.rotation.z=-ye*((ne.userData.base||.28)+(T.talking?.1:0)+ue)+Math.sin(D*1.7+xe)*.05}),x.rotation.z=Math.sin(D*2.1)*.12,x.rotation.x=Math.sin(D*1.6)*.06,X.forEach((ne,xe)=>{let ye=xe?1:-1;ne.rotation.z=ye*-(.2+T.armsT*1.6)+(B?Math.sin(D*9+xe*3)*.3:Math.sin(D*2+xe)*.06),ne.position.y=.5+T.armsT*.28}),!le&&D>T.nextLook&&(T.lookT.set((Math.random()-.5)*1.4,(Math.random()-.5)*.8),T.nextLook=D+1.5+Math.random()*2.5),T.emo==="angry"?(e.rotation.z+=Math.sin(D*38)*.05,t.position.x=Math.sin(D*44)*.015):t.position.x=0,T.listening&&D>(T.nextNod||0)&&(T.squash=.09,T.nextNod=D+1.6+Math.random()*1.6,T.yawT=(Math.random()-.5)*.4),T.look.lerp(T.lookT,Math.min(1,E*6)),w.forEach(ne=>{ne.open.position.x=T.look.x*.022,ne.open.position.y=T.look.y*.018}),!T.sleeping&&D>T.nextBlink&&(T.blinkT=.13,T.nextBlink=D+2+Math.random()*3.5),T.blinkT=Math.max(0,T.blinkT-E);let z=T.blinkT>0?.1:1;if(w.forEach(ne=>{ne.open.visible&&(ne.open.scale.y+=(z-ne.open.scale.y)*Math.min(1,E*40))}),T.talking){let ne=.55+Math.abs(Math.sin(D*13))*.7;Object.keys(R).forEach(xe=>{R[xe].visible=xe==="open"}),R.open.scale.set(1,ne,.35)}else{let ne=["happy","love","proud"].indexOf(T.emo)>=0;R.open.visible&&!ne&&(R.open.visible=!1),!ne&&!Object.keys(R).some(xe=>R[xe].visible)&&(R.smile.visible=!0)}if(P.visible){let ne=D*.35%1;P.position.y=.56-ne*.18,P.material.opacity=.85*(1-ne)}O.visible&&(O.position.y=.98+Math.sin(D*3)*.02),T.sleeping&&L.fx&&Math.random()<E*.7&&L.fx("z",1)},L.dispose=()=>{e.traverse(E=>{E.isMesh&&E.geometry.dispose()}),e.parent&&e.parent.remove(e)},L.setEmotion("neutral"),L.setAccessories(i.acc||[]),L}function uu(){let i=At(128,128,(t,n,s)=>{let r=t.createRadialGradient(64,64,4,64,64,62);r.addColorStop(0,"rgba(70,40,120,.38)"),r.addColorStop(1,"rgba(70,40,120,0)"),t.fillStyle=r,t.fillRect(0,0,n,s)}),e=new ht(new vt(1.5,1.5),new Je({map:i,transparent:!0,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.012,e}var tu={};function zc(i){return tu[i]||(tu[i]=su(i))}function Fs(i){let e=[];return{emit(t,n,s,r){let a=r||1;for(let o=0;o<n;o++){let l=new ti(new On({map:zc(t),transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));l.position.set(s.x+(Math.random()-.5)*.9*a,s.y+1.1*a+Math.random()*.3,s.z+.3),l.scale.setScalar((.22+Math.random()*.14)*a),l.renderOrder=10,i.add(l),e.push({s:l,vx:(Math.random()-.5)*.7,vy:t==="drop"?-.2:.8+Math.random()*.6,life:0,max:1.6+Math.random()*.6,delay:o*.09})}},update(t){for(let n=e.length-1;n>=0;n--){let s=e[n];if(s.delay-=t,s.delay>0)continue;s.life+=t;let r=s.life/s.max;s.s.position.x+=s.vx*t,s.s.position.y+=s.vy*t*(1-r*.5),s.s.material.opacity=r<.15?r/.15:Math.max(0,1-(r-.15)/.85),s.life>=s.max&&(i.remove(s.s),s.s.material.dispose(),e.splice(n,1))}}}}function Os(i){i.add(new Ss(16777215,16766696,1.15));let e=new Ts(16777215,1.3);return e.position.set(-3,6,5),i.add(e),e}var du={plushbear:{p:[-1.7,1.02,-2.75],r:.5},neon:{p:[2.9,3.3,-4.1],r:0},beanbag:{p:[-5.2,0,.1],r:.3},aquarium:{p:[-6.2,0,-.5],r:Math.PI/2},arcade:{p:[6.3,0,-.2],r:-Math.PI/2},poster:{p:[-7.03,2.6,1.6],r:Math.PI/2},catbed:{p:[-2,0,1.9],r:.4},disco:{p:[1.2,3.3,.8],r:0},bookshelf:{p:[-6.75,0,2.9],r:Math.PI/2},cloud:{p:[-2.6,3.2,.4],r:0},piano:{p:[5.3,0,2.7],r:-.5},starrug:{p:[3.4,0,1],r:.3}},zi={plushbear(){let i=new Te,e=b(14264428);return i.add(oe(.26,e,1,1,.95,0,.26,0)),i.add(oe(.2,e,1,1,.95,0,.62,.02)),i.add(oe(.08,e,1,1,.6,-.15,.78,0)),i.add(oe(.08,e,1,1,.6,.15,.78,0)),i.add(oe(.08,b(16112048),1,.8,.7,0,.58,.17)),i.add(oe(.03,b(ut.ink),1,1,1,0,.6,.23)),i.add(oe(.025,b(ut.ink),1,1,1,-.07,.68,.17)),i.add(oe(.025,b(ut.ink),1,1,1,.07,.68,.17)),i.add(oe(.07,e,1,1.3,1,-.28,.25,.08)),i.add(oe(.07,e,1,1.3,1,.28,.25,.08)),i.add(I(de(.3,.07,.04,.02),b(16740270),0,.42,.2)),i},neon(){let i=new Te,e=new ht(new cn(Si(.8),{depth:.05,bevelEnabled:!1}),new Je({color:16743104})),t=new ht(new vt(1.8,1.8),new Je({map:At(128,128,(n,s,r)=>{let a=n.createRadialGradient(64,64,4,64,64,62);a.addColorStop(0,"rgba(255,122,192,.55)"),a.addColorStop(1,"rgba(255,122,192,0)"),n.fillStyle=a,n.fillRect(0,0,s,r)}),transparent:!0,depthWrite:!1}));return t.position.z=-.02,i.add(t,e),i},beanbag(){let i=new Te,e=b(16752328),t=b(16761564);return i.add(oe(.62,e,1,.78,1,0,.42,0)),i.add(oe(.4,t,1,.62,1,.12,.8,.1)),i.add(oe(.16,b(16777215),1,.6,1,-.3,.84,.3)),i},aquarium(){let i=new Te;i.add(I(de(1.5,.7,.8,.06),b(ut.woodDark),0,.35,0)),i.add(I(de(1.38,.08,.68,.03),b(16771512),0,.74,0,!1));let e=I(de(1.4,.85,.7,.05),new zt({color:9362431,transparent:!0,opacity:.38,roughness:.1,emissive:5224680,emissiveIntensity:.3}),0,1.2,0,!1);i.add(e);let t=[];[[16751178,0],[16765514,2],[16740270,4]].forEach((n,s)=>{let r=new Te;r.add(oe(.1,b(n[0],{emissive:n[0],emissiveIntensity:.25}),1.4,1,.8,0,0,0));let a=I(new Pt(.08,.14,4),b(n[0]),-.17,0,0,!1);a.rotation.z=Math.PI/2,r.add(a),r.add(oe(.018,b(ut.ink),1,1,1,.1,.03,.07)),r.userData={ph:n[1],y:1.05+s*.17},i.add(r),t.push(r)});for(let n=0;n<4;n++)i.add(oe(.03+n%2*.015,b(16777215,{transparent:!0,opacity:.8}),1,1,1,.5+n*.03,.9+n*.2,.1));return i.userData.fish=t,i},bookshelf(){let i=new Te,e=b(14858378);i.add(I(de(1.9,2.5,.12,.04),b(13080688),0,1.25,-.2)),[-.93,.93].forEach(n=>i.add(I(de(.08,2.5,.5,.03),e,n,1.25,0)));for(let n=0;n<4;n++)i.add(I(de(1.9,.08,.5,.03),e,0,.04+n*.8,0));let t=[16748480,9362431,16765514,12166911,6153140,16758938];for(let n=0;n<3;n++){let s=-.8;for(let r=0;r<9&&s<.8;r++){let a=.1+(r*7+n*3)%4*.03,o=.5+(r*5+n)%3*.1;i.add(I(de(a,o,.3,.02),b(t[(r+n*2)%t.length]),s+a/2,.08+n*.8+o/2+.04,.02)),s+=a+.04}}return i.add(oe(.14,b(16777215),1,.9,1,.6,2.18,.05)),i.add(oe(.05,b(ut.ink),1,1,1,.56,2.2,.17)),i.add(oe(.05,b(ut.ink),1,1,1,.64,2.2,.17)),i},cloud(){let i=new Te,e=b(16777215,{emissive:16774870,emissiveIntensity:.7,roughness:.9});return i.add(oe(.5,e,1.2,.8,1,0,0,0)),i.add(oe(.38,e,1,.9,1,-.5,-.05,.05)),i.add(oe(.42,e,1,.9,1,.5,-.03,-.05)),i.add(oe(.3,e,1,.9,1,.1,.28,0)),i.add(I(new Ce(.012,.012,1.2,6),b(16777215),0,.9,0,!1)),i.add(oe(.025,b(ut.ink),1,1,1,-.12,-.02,.45)),i.add(oe(.025,b(ut.ink),1,1,1,.12,-.02,.45)),i.add(oe(.05,b(16757713),1.4,.7,.4,-.25,-.1,.43)),i.add(oe(.05,b(16757713),1.4,.7,.4,.25,-.1,.43)),i},piano(){let i=new Te,e=b(16752328);[[-.65,-.28],[.65,-.28],[-.65,.28],[.65,.28]].forEach(n=>i.add(I(de(.1,.6,.1,.03),b(14858378),n[0],.3,n[1]))),i.add(I(de(1.6,.34,.8,.08),e,0,.72,0)),i.add(I(de(1.5,.05,.3,.02),b(16777215),0,.92,.22,!1));for(let n=0;n<8;n++)i.add(I(de(.16,.04,.28,.01),b(16777215),-.65+n*.185,.95,.22,!1));[0,1,3,4,5].forEach(n=>i.add(I(de(.09,.06,.17,.01),b(ut.ink),-.56+n*.185,.98,.15,!1))),i.add(I(de(1.5,.5,.06,.03),e,0,1.12,-.32));let t=new ht(new cn(Si(.22),{depth:.02,bevelEnabled:!1}),b(16777215));return t.position.set(0,1.14,-.28),i.add(t),i},starrug(){let i=new Te,e=new Ii,t=10;for(let r=0;r<t;r++){let a=r%2?.55:1.25,o=r/t*Math.PI*2+Math.PI/2;r===0?e.moveTo(Math.cos(o)*a,Math.sin(o)*a):e.lineTo(Math.cos(o)*a,Math.sin(o)*a)}e.closePath();let n=new ht(new cn(e,{depth:.05,bevelEnabled:!0,bevelSize:.06,bevelThickness:.03,bevelSegments:3}),b(16769658));n.rotation.x=-Math.PI/2,n.position.y=.02,n.receiveShadow=!0,i.add(n);let s=new ht(new ni(.32,24),b(16752328));return s.rotation.x=-Math.PI/2,s.position.y=.11,i.add(s),i},arcade(){let i=new Te;i.add(I(de(.95,1.75,.85,.1),b(8150271),0,.88,0));let e=At(128,96,(n,s,r)=>{n.fillStyle="#1b1240",n.fillRect(0,0,s,r),n.fillStyle="#ff7ac0";for(let a=0;a<5;a++)n.beginPath(),n.arc(20+a*22,24,7,0,7),n.fill();n.fillStyle="#8edbff",n.fillRect(20,60,88,8),n.fillStyle="#ffe27a",n.fillRect(54,72,20,10)}),t=I(new vt(.7,.52),new Je({map:e}),0,1.3,.43,!1);return t.rotation.x=-.12,i.add(t),i.add(I(de(.8,.22,.12,.04),b(16769658,{emissive:16764735,emissiveIntensity:.5}),0,1.68,.4,!1)),i.add(I(de(.9,.12,.5,.04),b(5980118),0,.78,.5)),i.add(I(new Ce(.025,.025,.16,8),b(16777215),-.2,.9,.5)),i.add(oe(.06,b(16732058),1,1,1,-.2,1,.5)),i.add(oe(.045,b(9362431),1,1,1,.12,.86,.5)),i.add(oe(.045,b(16769658),1,1,1,.26,.86,.5)),i},poster(){let i=new Te;i.add(I(de(1.3,1.8,.06,.03),b(16777215),0,0,0,!1));let e=At(128,180,(t,n,s)=>{let r=t.createLinearGradient(0,0,0,s);r.addColorStop(0,"#ffb3d1"),r.addColorStop(1,"#b9a6ff"),t.fillStyle=r,t.fillRect(0,0,n,s),t.fillStyle="#fff",t.beginPath(),t.arc(64,70,30,0,7),t.fill(),t.fillStyle="#ff5fa8",t.beginPath(),t.moveTo(64,92),t.bezierCurveTo(30,66,48,44,64,58),t.bezierCurveTo(80,44,98,66,64,92),t.fill(),t.fillStyle="#fff";for(let a=0;a<8;a++)t.beginPath(),t.arc(14+a*37%100,130+a*17%40,3,0,7),t.fill();t.fillRect(24,150,80,6)});return i.add(I(new vt(1.14,1.64),new Je({map:e}),0,0,.04,!1)),i},catbed(){let i=new Te;i.add(I(new Ce(.62,.66,.22,28),b(16767400),0,.11,0));let e=I(new at(.58,.12,10,28),b(16761466),0,.24,0);e.rotation.x=Math.PI/2,i.add(e),i.add(I(new Ce(.46,.46,.1,24),b(16752328),0,.2,0));let t=b(15902298);i.add(oe(.26,t,1.2,.8,1,0,.42,0)),i.add(oe(.17,t,1,1,1,.22,.52,.06)),[-1,1].forEach(s=>{let r=I(new Pt(.06,.12,4),t,.26,.68,.06+s*.09,!1);i.add(r)}),i.add(oe(.02,b(ut.ink),1,1,1,.37,.54,.02)),i.add(oe(.02,b(ut.ink),1,1,1,.37,.54,.12));let n=I(new at(.16,.04,8,14,4),t,-.3,.36,0,!1);return i.add(n),i},disco(){let i=new Te;i.add(I(new Ce(.012,.012,1.2,6),b(16777215),0,.6,0,!1));let e=At(128,64,(n,s,r)=>{for(let a=0;a<8;a++)for(let o=0;o<16;o++)n.fillStyle=["#ffffff","#cfe9ff","#ffd1e3","#e7ddff"][(o*3+a*5)%4],n.fillRect(o*8,a*8,7,7)}),t=oe(.3,new zt({map:e,emissive:16777215,emissiveIntensity:.35,metalness:.6,roughness:.25}),1,1,1,0,0,0);return i.add(t),i.userData.spin=t,i}},Lx=Object.keys(zi),Fc=-2.6,pu=-3,Wn={fridge:[2.9,-2.45],pc:[4.4,-1.55],door:[6.3,-3],bath:[-6,-2.15],toilet:[-4.35,-2.45],bed:[Fc+.45,pu+.05],plant0:[-.75,-2.55],plant1:[1.65,-2.55],lamp:[-.9,-1],fries:[4.3,-2]},Dx=[[-3.95,-1.2,-4,-2.05],[-7.1,-4.85,-4,-2.7],[2.25,3.55,-4,-3],[3.4,5.45,-4,-2.95],[-1.15,-.3,-4,-3.05],[1.25,2.05,-4,-3.05],[-4.85,-4,-4,-3.05],[5.6,7.1,-4,-3.4]];function nu(i,e){return i=Math.max(-6.6,Math.min(6.6,i)),e=Math.max(-3.4,Math.min(3.6,e)),Dx.forEach(t=>{i>t[0]&&i<t[1]&&e>t[2]&&e<t[3]&&(e=t[3]+.2)}),[i,e]}function Nx(i){let e=new Te;i.add(e);let t=bi("#EBC99B",["#F2D4A8","#E2B77F","#F7DDB6","#D9A86F"],260,{planks:8,seed:3,ang:0,len:90,bw:6,w:512,h:512});t.repeat.set(3,1.8),e.add(I(de(14.6,.4,8.8,.12),b(16777215,{map:t}),0,-.2,.1));let n=bi("#EFE3F7",["#F7ECFA","#E3D4F2","#FBE9EF","#DCCBEF"],220,{seed:5});n.repeat.set(3,1.2);let s=bi("#FFE6EE",["#FFF1F4","#F9D3E1","#FFEBD9","#F4C5D8"],220,{seed:9});s.repeat.set(2,1.2),e.add(I(de(14.6,4.4,.3,.1),b(16777215,{map:n}),0,2.2,-4.3)),e.add(I(de(.3,4.4,8.8,.1),b(16777215,{map:s}),-7.2,2.2,.1)),e.add(I(de(14.4,.22,.1,.05),b(16777215),0,.12,-4.1)),e.add(I(de(.1,.22,8.6,.05),b(16777215),-7,.12,.1));let r=At(128,128,(k,H,ee)=>{for(let Se=0;Se<4;Se++)for(let se=0;se<4;se++)k.fillStyle=(se+Se)%2?"#DDF3FF":"#F4FBFF",k.fillRect(se*32,Se*32,32,32)});r.wrapS=r.wrapT=bn,r.repeat.set(3,3),e.add(I(de(3.2,.05,3.2,.02),b(16777215,{map:r}),-5.45,.03,-2.45,!1));let a=At(256,128,(k,H,ee)=>{k.fillStyle="#DDF3FF",k.fillRect(0,0,H,ee),k.strokeStyle="rgba(255,255,255,.9)",k.lineWidth=3;for(let Se=0;Se<=8;Se++)k.beginPath(),k.moveTo(Se*32,0),k.lineTo(Se*32,ee),k.stroke();for(let Se=0;Se<=4;Se++)k.beginPath(),k.moveTo(0,Se*32),k.lineTo(H,Se*32),k.stroke()});e.add(I(new vt(3.2,1.3),new Je({map:a}),-5.45,.8,-4.13,!1));let o=new Te;o.position.set(.2,2.45,-4.11),e.add(o);let l=new Je({map:Br(new Date().getHours())});o.add(I(new vt(1.7,1.55),l,0,0,.02,!1));let c=b(16777215);o.add(I(de(1.95,.14,.2,.06),c,0,.85,.05)),o.add(I(de(1.95,.14,.2,.06),c,0,-.85,.05)),o.add(I(de(.14,1.8,.2,.06),c,-.92,0,.05)),o.add(I(de(.14,1.8,.2,.06),c,.92,0,.05)),o.add(I(de(.07,1.6,.12,.03),c,0,0,.06)),o.add(I(de(1.75,.07,.12,.03),c,0,0,.06)),o.add(I(de(2.2,.1,.4,.05),b(16777215),0,-.98,.18));let f=b(ut.pink),u=I(de(.5,1.9,.14,.07),f,-1.2,0,.12);u.rotation.z=.05,o.add(u);let h=I(de(.5,1.9,.14,.07),f,1.2,0,.12);h.rotation.z=-.05,o.add(h);let d=I(new Ce(.04,.04,2.9,10),b(ut.woodDark),0,1,.16);d.rotation.z=Math.PI/2,o.add(d);let g=new Te;g.position.set(0,0,.9),e.add(g),g.add(I(new Ce(2.5,2.5,.06,48),b(16765162),0,.03,0)),g.add(I(new Ce(2.15,2.15,.08,48),b(12448732),0,.035,0)),g.add(I(new Ce(1.5,1.5,.1,48),b(16774890),0,.04,0));let x=k=>k.traverse(H=>{H.isMesh&&(H.userData.root=k)}),m=new Te;m.position.set(Fc,0,pu),m.userData.pick="bed",e.add(m),m.add(I(de(2.5,.5,1.75,.12),b(14858634),0,.25,0)),m.add(I(de(2.4,.4,1.65,.16),b(14273791),0,.68,0)),m.add(I(de(1.65,.2,1.7,.1),b(12448732),.38,.92,0));let p=I(de(.7,.25,.9,.12),b(16761052),-.78,.98,0);p.rotation.z=.08,m.add(p),m.add(I(de(.14,1.4,1.75,.06),b(14858634),-1.3,.7,0)),x(m);let A=new Te;A.position.set(Fc,3.05,-4.1),e.add(A),A.add(I(de(.9,.9,.08,.05),b(16777215),0,0,0));let w=new ht(new cn(Si(.55),{depth:.04,bevelEnabled:!1}),b(ut.pink));w.position.set(0,.03,.05),A.add(w);let M=[];[[-.7,-3.45,.95],[1.65,-3.45,1.1]].forEach((k,H)=>{let ee=new Te;ee.position.set(k[0],0,k[1]),ee.userData.pick="plant",ee.userData.idx=H,e.add(ee),ee.add(I(new Ce(.42,.32,.6,20),b(H?12441855:16758938),0,.3,0));let Se=new Te;ee.add(Se);let se=b(7659663);for(let ae=0;ae<7;ae++){let ge=ae/7*Math.PI*2,be=oe(.34,se,.55,1.25,.28,Math.cos(ge)*.3,1+ae%2*.22,Math.sin(ge)*.3);be.rotation.z=Math.cos(ge)*.5,be.rotation.x=Math.sin(ge)*.5,Se.add(be)}Se.add(oe(.32,b(6279290),1,1,1,0,1.15,0)),ee.scale.setScalar(k[2]);let N=new ti(new On({map:zc("drop"),transparent:!0,depthTest:!1,opacity:0}));N.scale.setScalar(.5),N.position.set(0,2.3,.3),N.renderOrder=11,ee.add(N),x(ee),M.push({g:ee,leaves:Se,thirst:N,pop:0})});let C=new Te;C.position.set(2.9,0,-3.5),C.userData.pick="fridge",e.add(C);let v=b(12448732,{emissive:10479304,emissiveIntensity:.2});C.add(I(de(1.2,2.5,.9,.12),v,0,1.25,0)),C.add(I(de(1.16,.06,.04,.02),b(8376238),0,1.55,.46,!1)),C.add(I(de(.06,.5,.08,.03),b(16777215),.48,1.9,.48)),C.add(I(de(.06,.7,.08,.03),b(16777215),.48,1,.48)),[-1,1].forEach(k=>C.add(oe(.05,b(ut.ink),1,1.3,.6,k*.2,1.95,.46))),[-1,1].forEach(k=>C.add(oe(.07,b(16748480),1.3,.7,.3,k*.34,1.86,.46,!1))),C.add(I(new at(.05,.015,6,12,Math.PI),b(ut.ink),0,1.86,.47,!1).rotateZ(Math.PI));{let k=new ht(new cn(Si(.2),{depth:.02,bevelEnabled:!1}),b(16736168));k.position.set(-.3,1.1,.46),C.add(k)}x(C);let R=new Te;R.position.set(4.4,0,-3.5),R.userData.pick="pc",e.add(R),R.add(I(de(1.9,.1,.9,.04),b(14858378),0,.85,0)),[-.8,.8].forEach(k=>R.add(I(de(.1,.85,.8,.03),b(13080688),k,.42,0))),R.add(I(de(.1,.35,.1,.03),b(16777215),0,1.07,-.12));let y=At(256,160,(k,H,ee)=>{let Se=k.createLinearGradient(0,0,0,ee);Se.addColorStop(0,"#9fdcff"),Se.addColorStop(1,"#d9ccff"),k.fillStyle=Se,k.fillRect(0,0,H,ee),k.fillStyle="#fff",k.beginPath(),k.arc(70,46,22,0,7),k.arc(96,50,18,0,7),k.fill(),k.fillStyle="#5de3b4",k.beginPath(),k.arc(190,70,30,0,7),k.fill(),k.strokeStyle="#fff",k.lineWidth=4,k.beginPath(),k.arc(190,70,30,0,7),k.moveTo(160,70),k.lineTo(220,70),k.stroke(),k.fillStyle="#2a1b5e",k.font="800 22px sans-serif",k.fillText("MONDE",24,130)});R.add(I(de(1.2,.8,.08,.05),b(16777215),0,1.5,-.12)),R.add(I(new vt(1.06,.66),new Je({map:y}),0,1.5,-.075,!1)),R.add(I(de(.7,.04,.24,.02),b(16765411),0,.92,.2,!1));let P=new Te;P.position.set(0,0,.8),P.add(I(new Ce(.34,.34,.12,20),b(16751300),0,.5,0)),P.add(I(new Ce(.05,.05,.5,8),b(16777215),0,.25,0)),P.add(I(de(.6,.5,.1,.06),b(16751300),0,.85,-.3)),R.add(P),x(R);let O=new Te;O.position.set(6.3,0,-4.08),O.userData.pick="door",e.add(O),O.add(I(de(1.55,2.95,.12,.06),b(16777215),0,1.47,0)),O.add(I(de(1.2,2.7,.1,.08),b(16751300),0,1.35,.07)),O.add(oe(.07,b(16765514,{metalness:.4,roughness:.4}),1,1,1,.38,1.3,.16));{let k=new ht(new cn(Si(.4),{depth:.03,bevelEnabled:!1}),b(16777215));k.position.set(0,1.85,.13),O.add(k)}let X=At(256,96,(k,H,ee)=>{k.fillStyle="#ffffff",k.fillRect(0,0,H,ee),k.fillStyle="#7c5cff",k.font="800 44px sans-serif",k.textAlign="center",k.textBaseline="middle",k.fillText("\u2192 MONDE",128,50)});O.add(I(new vt(1.2,.45),new Je({map:X}),0,3.3,.04,!1)),O.add(I(de(1.5,.05,.9,.02),b(16765162),0,.03,.8,!1)),x(O);let Z=new Te;Z.position.set(-6,0,-3.3),Z.userData.pick="bath",e.add(Z),Z.add(I(de(2.1,.75,1,.18),b(16777215),0,.38,0)),Z.add(I(de(1.8,.04,.72,.02),b(10477823,{emissive:6998261,emissiveIntensity:.3}),0,.72,0,!1));for(let k=0;k<9;k++)Z.add(oe(.1+k%3*.04,b(16777215),1,.8,1,-.7+k*.19%1.5,.78+k%2*.05,-.15+k%3*.14,!1));Z.add(oe(.1,b(16769354),1.1,.9,1,.55,.85,.1)),Z.add(oe(.04,b(16751178),1.4,.8,.8,.65,.85,.1)),Z.add(I(new Ce(.04,.04,.4,8),b(13227743,{metalness:.5}),-.95,.95,-.3)),x(Z);let U=new Te;U.position.set(-4.4,0,-3.6),U.userData.pick="toilet",e.add(U),U.add(I(de(.5,.5,.3,.08),b(16777215),0,.6,-.15)),U.add(I(new Ce(.26,.2,.42,20),b(16777215),0,.22,.12)),U.add(I(new Ce(.28,.28,.06,20),b(16765411),0,.46,.14)),x(U);let T=At(256,96,(k,H,ee)=>{k.fillStyle="#ffffff",k.fillRect(0,0,H,ee),k.fillStyle="#3aa7e8",k.font="800 40px sans-serif",k.textAlign="center",k.textBaseline="middle",k.fillText("BAIN",128,50)});e.add(I(new vt(1,.38),new Je({map:T}),-5.45,2.3,-4.12,!1));let L=new Te;L.position.set(4.4,3.15,-3.9),e.add(L),L.add(I(de(2.4,.1,.5,.04),b(ut.woodDark),0,0,0)),[16748480,9362431,16769658,12166911,7659663].forEach((k,H)=>L.add(I(de(.14,.55+H%3*.08,.3,.03),b(k),-1+H*.17,.35+H%3*.04,0)));let J=new Te;J.position.set(.75,.05,0),J.userData.pick="fries",L.add(J),J.add(I(de(.36,.34,.36,.06),b(16734810),0,.17,0));for(let k=0;k<6;k++)J.add(I(de(.07,.34,.07,.02),b(16765514),-.12+k%3*.12,.45,-.08+Math.floor(k/3)*.16));J.add(oe(.025,b(ut.ink),1,1,1,-.07,.2,.19)),J.add(oe(.025,b(ut.ink),1,1,1,.07,.2,.19)),x(J);let E=new Te;E.position.set(-.9,0,-1.6),E.userData.pick="lamp",e.add(E),E.add(I(new Ce(.28,.32,.08,20),b(ut.woodDark),0,.04,0)),E.add(I(new Ce(.04,.04,1.9,10),b(ut.woodDark),0,1,0));let D=new zt({color:16773321,emissive:16761178,emissiveIntensity:0,roughness:.8});D.side=Zt,E.add(I(new Ce(.28,.45,.5,24,1,!0),D,0,2.15,0)),x(E),e.add(I(new Ce(.5,.52,.5,28),b(16761052),2.2,.25,1.6)),e.add(oe(.52,b(16761052),1,.35,1,2.2,.5,1.6));let B=[];for(let k=0;k<27;k++){let H=k/26,ee=-6.4+H*12.8,Se=3.95-Math.sin(H*Math.PI*3)*.2,se=new Je({color:[16773544,16757713,12448732,14273791][k%4]}),N=oe(.06,se,1,1,1,ee,Se,-4.05);N.castShadow=!1,N.receiveShadow=!1,e.add(N),B.push(N)}let le=[],G=su("star");for(let k=0;k<18;k++){let H=new ti(new On({map:G,transparent:!0,opacity:0,depthWrite:!1}));H.scale.setScalar(.16+Math.random()*.1),H.userData={ph:Math.random()*6,sp:.25+Math.random()*.3,x:(Math.random()-.5)*12,z:(Math.random()-.5)*6},i.add(H),le.push(H)}let ue=[];{let k=el("hills",.9,.68);k.position.set(2.15,3.3,-4.08),e.add(k);let H=el("dusk",.8,.6);H.position.set(-4.4,3.25,-4.08),e.add(H)}{let k=new Te;k.position.set(3.75,.9,-3.2),k.add(I(new Ce(.11,.08,.14,16),b(16777215),0,.07,0)),k.add(I(new Ce(.095,.095,.02,16),b(11822636,{roughness:.4}),0,.13,0,!1));let H=I(new at(.05,.015,8,12,Math.PI),b(16777215),.12,.07,0);H.rotation.z=-Math.PI/2,k.add(H),e.add(k),ue.push(jo(e,3.75,1.05,-3.2,5,{size:.16,rise:.7,op:.55,speed:.22}))}let z=Uc(e,16762490,2.6,-.9,2.15,-1.6,0);z.material.opacity=0;let ne=Or(e,16773312,1.9,4.6,1.6,1.9,-3.2,.42,.2);ne.renderOrder=2;let xe=Or(e,16773312,.9,4.2,.4,1.9,-3.4,.42,.12),ye=new ht(new vt(2,1.1),new Je({map:tl(),color:16773304,transparent:!0,opacity:.35,depthWrite:!1,blending:xi}));ye.rotation.x=-Math.PI/2,ye.position.set(2.2,.03,-.7),ye.rotation.z=.5,e.add(ye),ue.push(Qo(e,36,[1.2,.3,-1.4,3.4,3.2,2.2],16773832,.05)),ue.push(k=>{ne.material.opacity=(ne.userData.k==null?.2:ne.userData.k)*(.85+Math.sin(k*.5)*.15),xe.material.opacity=(ne.userData.k==null?.12:ne.userData.k*.6)*(.85+Math.sin(k*.7+1)*.15)});let j={},Q=[];Object.keys(zi).forEach(k=>{let H=zi[k](),ee=du[k];H.position.set(ee.p[0],ee.p[1],ee.p[2]),H.rotation.y=ee.r,H.visible=!1,e.add(H),j[k]=H,(H.userData.fish||H.userData.spin)&&Q.push(H)});function ie(k){ue.forEach(H=>H(k)),Q.forEach(H=>{H.userData.fish&&H.userData.fish.forEach((ee,Se)=>{let se=ee.userData,N=k*(.5+Se*.12)+se.ph;ee.position.set(Math.sin(N)*.5,se.y+Math.sin(N*2)*.04,.05*Math.cos(N)),ee.rotation.y=Math.cos(N)>0?0:Math.PI}),H.userData.spin&&(H.userData.spin.rotation.y=k*.6)})}return{skyMat:l,shadeMat:D,bulbs:B,dust:le,decor:j,plants:M,update:ie,room:e,lampGlow:z,shaft:ne,sunPatch:ye}}function iu(i,e,t,n){e==="wave"?(i.hop(4.2),i.setEmotion("happy")):e==="heart"?(i.setEmotion("love"),i.hop(4.6),t.emit("heart",6,i.root.position,n)):e==="happy"?(i.setEmotion("happy"),i.hop(5)):e==="wow"?(i.setEmotion("wow"),i.hop(4)):e==="dance"&&(i.setEmotion("happy"),i.dance=2.4),setTimeout(()=>i.setEmotion("neutral"),2200)}function Ux(i,e){e=e||{};let t;try{t=new Vn({antialias:!0,alpha:!1,powerPreference:"low-power",preserveDrawingBuffer:!!e.preserve})}catch{return null}t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.shadowMap.enabled=!0,t.shadowMap.type=Ni;let n=t.domElement;n.className="scene3d",n.setAttribute("aria-hidden","true"),i.insertBefore(n,i.firstChild);let s=document.createElement("div");s.className="st3-ov",i.appendChild(s);let r=new Sn;r.background=new et(15984383);let a=new Rt(30,1,.1,60),o=new W(1.3,4,8.2),l=new W(0,1,.3),c=0,f=new Ss(16774112,16764880,1);r.add(f),Bc(t),Hc(i);let u=new Ts(16772300,1.5);u.position.set(-3,7,5),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),Object.assign(u.shadow.camera,{left:-9,right:9,top:7,bottom:-6,near:1,far:22}),u.shadow.bias=-6e-4,r.add(u);let h=new sn(16761466,0,8,1.6);h.position.set(-.9,2.3,-1.4),r.add(h);let d=Nx(r),g=Fs(r),x=Qt(e.look||{mika:!0}),m=e.start||[.2,1];x.root.position.set(m[0],0,m[1]),x.root.scale.setScalar(1.3),r.add(x.root),x.root.traverse(q=>{q.isMesh&&(q.castShadow=!0)});let p=e.acc||[];x.setAccessories(p);let A=uu();r.add(A),x.fx=(q,re)=>g.emit(q,re,x.root.position,1.3);let w={job:null,pending:null,target:new W(m[0],0,m[1]),nextWander:4,hold:0,busy:!1,lampOn:!1,lampT:0,lampTouched:!1,walkEmit:!1},M=!!e.visit,C=[[.2,1],[1,.1],[-1.4,.6],[2.4,-1.4],[-3.2,-.6],[3.8,-1.2],[-5.2,-.8],[-.6,-1.5],[4.8,1],[1.6,1.8],[-3.4,1.4],[5.5,-2.2]],v={},R=0,y=!0;function P(q){let re=document.createElement("span");return re.className="st3-n",re.textContent=q,re.style.opacity=1,s.appendChild(re),re}let O=e.label?P(e.label):null,X={me:null};function Z(q,re,me){q.b&&q.b.remove();let Ae=document.createElement("div");Ae.className="st3-b "+(me||""),Ae.textContent=re,s.appendChild(Ae),q.b=Ae,setTimeout(()=>{q.b===Ae&&(Ae.remove(),q.b=null)},Math.min(9e3,2600+re.length*60))}let U={b:null},T={eat:{spot:Wn.fridge,dur:2.8,start(){x.face(0),x.setEmotion("happy"),x.setTalking(!0)},end(){x.setTalking(!1),x.fx("heart",5),x.setEmotion("love"),setTimeout(()=>x.setEmotion("neutral"),2200)}},hug:{spot:[.2,1.3],dur:2.6,start(){x.setEmotion("love"),x.hop(4.8),x.fx("heart",7),x.face(0)},end(){x.setEmotion("neutral")}},play:{spot:[.4,1.2],dur:3.2,tick(q){R>q.next&&(x.hop(4.2),x.fx("star",2),q.next=R+.55)},start(){x.setEmotion("happy")},end(){x.setEmotion("neutral")}},wash:{spot:Wn.bath,dur:3.6,tick(q){R>q.next&&(x.fx("bubble",2),q.next=R+.45)},start(){x.setEmotion("happy"),x.face(0)},end(){x.fx("star",5),x.setEmotion("love"),setTimeout(()=>x.setEmotion("neutral"),2e3)}},toilet:{spot:Wn.toilet,dur:2.4,start(){x.setEmotion("shy"),x.face(.4)},end(){x.fx("star",3),x.setEmotion("happy"),setTimeout(()=>x.setEmotion("neutral"),1600)}},water:{spot:Wn.plant0,dur:3,tick(q){R>q.next&&(g.emit("drop",2,{x:d.plants[q.idx||0].g.position.x,y:.6,z:d.plants[q.idx||0].g.position.z+.5},1),q.next=R+.4)},start(q){x.setEmotion("happy"),x.face(-.3),d.plants[q.idx||0].pop=1},end(){x.fx("heart",4),x.setEmotion("neutral")}},nap:{spot:Wn.bed,dur:7,start(){x.setEmotion("sleep"),x.face(.3)},tick(){x.baseY+=(1-x.baseY)*.08,x.roll+=(-1.25-x.roll)*.06},wake:!0,end(){x.setEmotion("happy"),x.hop(4.4),x.fx("star",5)}}};function L(q,re){let me=T[q];if(!me)return;let Ae=me.spot;q==="water"&&re&&re.idx!=null&&(Ae=Wn["plant"+re.idx]),w.job={kind:q,J:me,state:"go",until:0,next:0,idx:re&&re.idx,spot:Ae,ms:re&&re.ms},w.target.set(Ae[0],0,Ae[1]),w.hold=99,w.pending=null}function J(q){x.baseY+=(0-x.baseY)*Math.min(1,q*5),x.roll+=(0-x.roll)*Math.min(1,q*6)}function E(q,re){let me=Qt(re.look||Hi(re.code));return me.root.scale.setScalar(1.3),me.root.position.set(re.x||0,0,re.z||1),r.add(me.root),me.root.traverse(Ae=>{Ae.isMesh&&(Ae.castShadow=!0)}),me.fx=(Ae,V)=>g.emit(Ae,V,me.root.position,1.3),re.acc&&me.setAccessories(re.acc),{ch:me,tx:re.x||0,tz:re.z||1,label:P(re.nick||""),b:null}}let D={setEmotion:q=>x.setEmotion(q),setAccessories:q=>{p=q,x.setAccessories(q)},hop:q=>x.hop(q),setLook(q){let re=x,me=Qt(q);me.root.position.copy(re.root.position),me.root.scale.copy(re.root.scale),me.root.traverse(Ae=>{Ae.isMesh&&(Ae.castShadow=!0)}),r.add(me.root),me.fx=(Ae,V)=>g.emit(Ae,V,me.root.position,1.3),me.setAccessories(p),me.setEmotion(re.st.emo==="sleep"?"neutral":re.st.emo),re.dispose(),x=me,w.job=null,me.hop(4)},act(q,re,me){if(q==="rumble"){x.setEmotion("worry"),setTimeout(()=>x.setEmotion("neutral"),2200);return}M||L(q,Object.assign({ms:re},me||{}))},goTo(q){let re=Wn[q];re&&(w.target.set(re[0],0,re[1]),w.hold=3)},debug(){return window.__sc=r,window.__cam=a,{roll:x.roll,baseY:x.baseY,job:w.job?w.job.kind+":"+w.job.state:null}},walkTo(q,re){let me=nu(q,re);w.target.set(me[0],0,me[1]),w.hold=6,w.job=null,w.pending=null},listening(q){x.setListening(q),q&&(x.look(0,.3),!M&&!w.job&&(w.target.set(.2,0,1.2),w.hold=3))},talking(q){x.setTalking(q),q&&!M&&!w.job&&(w.target.set(.2,0,1.2),x.face(0),w.hold=2.5)},look(q,re){x.look(q,re)},busy(q){w.busy=!!q,q&&!w.job&&(w.target.set(.2,0,1.2),w.hold=3)},emit(q,re){x.fx(q,re)},emote(q){iu(x,q,g,1.3)},say(q,re){Z(U,q,re||"mk"),x.setTalking(!0),setTimeout(()=>x.setTalking(!1),Math.min(2800,700+q.length*40))},setDecor(q){Object.keys(d.decor).forEach(re=>{d.decor[re].visible=q.indexOf(re)>=0})},setPlants(q){d.plantLevel=Math.max(0,Math.min(1,q))},pos(){return{x:x.root.position.x,z:x.root.position.z}},addGuest(q,re){v[q]||(v[q]=E(q,re),v[q].ch.hop(4))},moveGuest(q,re,me){let Ae=v[q];Ae&&(Ae.tx=re,Ae.tz=me)},guestEmote(q,re){let me=v[q];me&&iu(me.ch,re,g,1.3)},guestSay(q,re){let me=v[q];me&&(me.ch.hop(3.4),me.ch.setTalking(!0),setTimeout(()=>me.ch.setTalking(!1),Math.min(2600,700+re.length*40)),Z(me,re,"me"))},removeGuest(q){let re=v[q];re&&(re.ch.dispose(),re.label.remove(),re.b&&re.b.remove(),delete v[q])},guestCount:()=>Object.keys(v).length,destroy(){y=!1,Object.keys(v).forEach(q=>D.removeGuest(q)),t.dispose(),t.forceContextLoss&&t.forceContextLoss(),n.parentNode&&n.parentNode.removeChild(n),s.remove()}},B=new Di,le=new Re,G=new en(new W(0,1,0),0),ue=new W,z=null,ne=!1,xe=new Re,ye=new Re;n.style.touchAction="none";let j=q=>{let re=n.getBoundingClientRect();return le.set((q.clientX-re.left)/re.width*2-1,-((q.clientY-re.top)/re.height)*2+1),le},Q=q=>i.dispatchEvent(new CustomEvent("mika3d",{detail:q}));n.addEventListener("pointerdown",q=>{z={x:q.clientX,y:q.clientY}}),n.addEventListener("pointermove",q=>{if(q.pointerType==="touch")return;let re=j(q);ye.set(re.x*.5,re.y*.25),ne=!0,x.look(re.x*.9,-re.y*.6)}),n.addEventListener("pointerleave",()=>{ye.set(0,0),ne=!1}),n.addEventListener("pointerup",q=>{if(!z||Math.hypot(q.clientX-z.x,q.clientY-z.y)>8){z=null;return}z=null,j(q),B.setFromCamera(le,a);for(let re of B.intersectObjects(r.children,!0)){let me=re.object,Ae=null,V=null;for(;me;){if(me===x.root){Ae="mika";break}if(me.userData&&me.userData.pick){Ae=me.userData.pick,V=me;break}if(me.userData&&me.userData.root&&me.userData.root.userData.pick){V=me.userData.root,Ae=V.userData.pick;break}me=me.parent}if(!Ae)continue;if(Ae==="mika"){x.hop(4.6),x.setEmotion("happy"),setTimeout(()=>x.setEmotion("neutral"),1200),Q({name:"mika"});return}if(Ae==="lamp"){w.lampOn=!w.lampOn,w.lampTouched=!0,Q({name:"lamp"});return}if(Ae==="fries"){Q({name:"fries"});return}if(M)continue;let rt=Ae==="plant"?"plant"+(V.userData.idx||0):Ae,Qe=Wn[rt];if(Qe){w.job=null,w.target.set(Qe[0],0,Qe[1]),w.hold=99,w.pending={name:Ae,idx:V.userData.idx};return}}if(B.ray.intersectPlane(G,ue)){let re=nu(ue.x,ue.z);M||(w.job=null,w.pending=null,w.target.set(re[0],0,re[1]),w.hold=8),Q({name:"walk",x:re[0],z:re[1]})}});function ie(){let q=i.clientWidth||360,re=i.clientHeight||360;t.setSize(q,re,!1),n.style.width="100%",n.style.height="100%",a.aspect=q/re,a.fov=q/re<.9?38:30,a.updateProjectionMatrix()}new ResizeObserver(ie).observe(i),ie();let k=-1;function H(){let q=new Date().getHours();if(q===k)return;k=q,d.skyMat.map.dispose(),d.skyMat.map=Br(q),d.skyMat.needsUpdate=!0;let re=q<6||q>=21,me=q>=18&&q<21;r.background.set(re?2827104:me?16765120:15984383),f.intensity=re?.55:me?.85:1.05,f.color.set(re?9406207:me?16767426:16777215),u.intensity=re?.35:me?1:1.5,u.color.set(re?10135295:me?16757642:16777215),d.shaft.userData.k=re?0:me?.16:.2,d.sunPatch.material.opacity=re?0:me?.25:.35,(re||me)&&!w.lampTouched&&(w.lampOn=!0),d.dust.forEach(Ae=>{Ae.material.map=zc(re?"star":"heart"),Ae.material.opacity=0})}H();let ee=setInterval(H,6e4),Se=!0,se=new Hn,N=new W,ae=new W;"IntersectionObserver"in window&&new IntersectionObserver(q=>{Se=q[0].isIntersecting},{threshold:.01}).observe(i);function ge(q,re,me){ae.set(re.x,re.y+me,re.z).project(a);let Ae=i.clientWidth,V=i.clientHeight,rt=(q.offsetWidth||40)/2+4;q.style.left=Math.max(rt,Math.min(Ae-rt,(ae.x*.5+.5)*Ae))+"px",q.style.top=(-ae.y*.5+.5)*V+"px"}d.plantLevel=1;function be(){if(!y){clearInterval(ee);return}if(requestAnimationFrame(be),!Se||document.hidden){se.getDelta();return}let q=Math.min(.05,se.getDelta());R+=q;let re=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;w.hold=Math.max(0,w.hold-q);let me=x.st,Ae=x.root.position,V=w.target.x-Ae.x,rt=w.target.z-Ae.z,Qe=Math.hypot(V,rt);if(w.job){let Y=w.job;Y.state==="go"&&Qe<.12?(Y.state="do",Y.until=R+(Y.ms?Y.ms/1e3:Y.J.dur),Y.J.start&&Y.J.start(Y)):Y.state==="do"?(Y.J.tick&&Y.J.tick(Y),R>Y.until&&(Y.J.end&&Y.J.end(Y),Y.J.wake?(Y.state="wake",Y.until=R+.9):(i.dispatchEvent(new CustomEvent("mika3d",{detail:{name:"done-"+Y.kind}})),w.job=null,w.hold=2))):Y.state==="wake"&&(J(q),R>Y.until&&(x.baseY=0,x.roll=0,i.dispatchEvent(new CustomEvent("mika3d",{detail:{name:"done-"+Y.kind}})),w.job=null,w.hold=2,w.target.set(Wn.bed[0]+1.6,0,Wn.bed[1]+1.4)))}else if(w.pending&&Qe<.12){let Y=w.pending;w.pending=null,w.hold=1.5,x.face(0),i.dispatchEvent(new CustomEvent("mika3d",{detail:{name:Y.name,idx:Y.idx}}))}if(!M&&!re&&!me.sleeping&&!w.busy&&!me.talking&&!w.job&&!w.pending&&w.hold<=0&&R>w.nextWander){let Y=C[Math.floor(Math.random()*C.length)];w.target.set(Y[0],0,Y[1]),w.nextWander=R+5+Math.random()*6}(!w.job||w.job.state==="go")&&(Math.abs(x.roll)>.002||Math.abs(x.baseY)>.002?J(q):(x.roll=0,x.baseY=0));let F=!1;if(Qe>.06){F=!0;let Y=Math.min(Qe,(me.talking?1.6:w.hold>3?2:1.4)*q);Ae.x+=V/Qe*Y,Ae.z+=rt/Qe*Y,x.face(Math.atan2(V,rt)*.7)}else!me.talking&&me.emo!=="shy"&&!(w.job&&w.job.kind==="nap")&&x.face(0);x.dance>0&&(x.dance-=q,me.y<.02&&x.hop(3.2),x.face(Math.sin(R*10)*.8)),x.update(q,R,F,ne),A.position.set(Ae.x,.012,Ae.z+.02);let _=Math.max(.5,1-me.y*.4)*1.3;A.scale.set(_*(1.05+me.squash),_*(1.05+me.squash),1),A.material.opacity=x.baseY>.3?0:Math.max(.35,1-me.y*.7),Object.keys(v).forEach(Y=>{let fe=v[Y],we=fe.ch.root.position,Pe=fe.tx-we.x,_e=fe.tz-we.z,ve=Math.hypot(Pe,_e),Ie=!1;if(fe.ch.dance>0)fe.ch.dance-=q,fe.ch.st.y<.02&&fe.ch.hop(3.2),fe.ch.face(Math.sin(R*10)*.8);else if(ve>.06){Ie=!0;let We=Math.min(ve,2*q);we.x+=Pe/ve*We,we.z+=_e/ve*We,fe.ch.face(Math.atan2(Pe,_e)*.7)}else fe.ch.face(0);fe.ch.update(q,R+Y.length,Ie,!1),ge(fe.label,we,-.12),fe.b&&ge(fe.b,we,2.35)}),O&&ge(O,Ae,-.12),U.b&&ge(U.b,Ae,2.35+(x.baseY||0)),g.update(q),d.update(R),d.plants.forEach((Y,fe)=>{let we=1-d.plantLevel;Y.pop=Math.max(0,Y.pop-q*.8),Y.leaves.scale.set(1+Y.pop*.15,1-we*.38+Y.pop*.12,1+Y.pop*.15),Y.leaves.rotation.z=Math.sin(R*1.3+fe)*.02+we*.12,Y.thirst.material.opacity=we>.6?.6+.4*Math.sin(R*4):0,Y.thirst.position.y=2.3+Math.sin(R*3)*.08}),d.dust.forEach(Y=>{let fe=Y.userData,we=(R*fe.sp*.3+fe.ph)%1;Y.position.set(fe.x+Math.sin(R*fe.sp+fe.ph)*.4,.9+we*3,fe.z),Y.material.opacity=.55*Math.sin(we*Math.PI),Y.material.rotation=R*.3+fe.ph}),d.bulbs.forEach((Y,fe)=>Y.scale.setScalar(.85+.25*Math.sin(R*2.4+fe*1.3))),w.lampT+=((w.lampOn?1:0)-w.lampT)*Math.min(1,q*4),h.intensity=w.lampT*2.2,d.shadeMat.emissiveIntensity=w.lampT*1.3,d.lampGlow.material.opacity=w.lampT*.75,c+=((M?0:Math.max(-4.3,Math.min(4.3,Ae.x*.85)))-c)*Math.min(1,q*2.2),xe.lerp(ne?ye:N.set(Math.sin(R*.25)*.2,Math.sin(R*.18)*.08,0),Math.min(1,q*3));let te=M?1.5:1;a.position.set(c+(M?0:1)+xe.x,o.y*te+xe.y,o.z*te),a.lookAt(c,l.y,l.z),t.render(r,a)}return be(),D}function Fx(i,e){let t;try{t=new Vn({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}t.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let n=t.domElement;n.className="scene3d",i.insertBefore(n,i.firstChild);let s=new Sn;Os(s);let r=new Rt(28,1,.1,30);r.position.set(0,1.5,4.6),r.lookAt(0,.82,0);let a=I(new Ce(.95,1,.1,40),b(16777215),0,-.05,0,!1);s.add(a);{let v=uu();v.scale.setScalar(1.5),s.add(v)}let o=Fs(s),l=null,c=0,f=!0,u=null,h=0,d=0,g=null,x=I(new Ce(1.15,1.2,.08,40),b(15984383),1.3,-.04,0,!1);x.visible=!1,s.add(x);function m(v){if(g&&(s.remove(g),g=null),v&&zi[v]){let R=zi[v](),y=du[v],P=new nn().setFromObject(R),O=P.getSize(new W),X=Math.max(.35,Math.min(1.1,2/Math.max(O.x,O.y,O.z,.1)));R.scale.setScalar(X),R.position.set(1.3,y.p[1]>1.5?1.2:y.p[1]>.5?0:y.p[1],0),R.rotation.y=y.p[1]>1.5||v==="poster"?0:.5,(v==="starrug"||v==="poster"||v==="neon"||v==="disco"||v==="cloud")&&(R.rotation.y=0),v==="poster"&&(R.rotation.y=0),s.add(R),g=R,(R.userData.fish||R.userData.spin)&&(g.userData.anim=!0)}x.visible=!!g,r.position.set(g?.55:0,1.5,g?6.6:4.6),r.lookAt(g?.55:0,.82,0),l&&(l.root.position.x=g?-.85:0,a.position.x=l.root.position.x)}function p(){l&&l.dispose(),l=Qt(e()),l.root.scale.setScalar(1.25),l.fx=(v,R)=>o.emit(v,R,l.root.position,1.25),s.add(l.root),l.root.position.x=g?-.85:0,a.position.x=l.root.position.x}p();function A(){let v=i.clientWidth||200,R=i.clientHeight||200;t.setSize(v,R,!1),n.style.width="100%",n.style.height="100%",r.aspect=v/R,r.updateProjectionMatrix()}new ResizeObserver(A).observe(i),A(),n.style.touchAction="none",n.addEventListener("pointerdown",v=>{u={x:v.clientX,s:h,moved:!1},n.setPointerCapture(v.pointerId)}),n.addEventListener("pointermove",v=>{if(!u)return;let R=v.clientX-u.x;Math.abs(R)>4&&(u.moved=!0),h=u.s+R*.012,d=h}),n.addEventListener("pointerup",()=>{u&&!u.moved&&(l.hop(4.6),l.setEmotion("happy"),o.emit("heart",3,l.root.position,1.25),setTimeout(()=>l&&l.setEmotion("neutral"),1400)),u=null});let w=new Hn,M=!0;"IntersectionObserver"in window&&new IntersectionObserver(v=>{M=v[0].isIntersecting},{threshold:.01}).observe(i);function C(){if(!f)return;if(requestAnimationFrame(C),!M||document.hidden){w.getDelta();return}let v=Math.min(.05,w.getDelta());c+=v,u||(d+=(Math.sin(c*.7)*.5-d)*Math.min(1,v*.8)),h+=(d-h)*Math.min(1,v*6),l.face(h),l.update(v,c,!1,!1),o.update(v),g&&g.userData.fish&&g.userData.fish.forEach((R,y)=>{let P=R.userData,O=c*(.5+y*.12)+P.ph;R.position.set(Math.sin(O)*.5,P.y+Math.sin(O*2)*.04,.05*Math.cos(O)),R.rotation.y=Math.cos(O)>0?0:Math.PI}),g&&g.userData.spin&&(g.userData.spin.rotation.y=c*.6),t.render(s,r)}return C(),{setDecor:m,rebuild(){p(),l.hop(3.6)},emote(v){l.setEmotion(v)},destroy(){f=!1,l&&l.dispose(),t.dispose(),t.forceContextLoss&&t.forceContextLoss(),n.parentNode&&n.parentNode.removeChild(n)}}}function Ox(i,e){let t;try{t=new Vn({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}t.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let n=t.domElement;n.className="scene3d",i.insertBefore(n,i.firstChild);let s=document.createElement("div");s.className="st3-ov",i.appendChild(s);let r=new Sn;Os(r);let a=new Rt(30,2.6,.1,40);a.position.set(0,2.2,6.4),a.lookAt(0,1.1,0),r.add(I(de(11,.3,4.2,.1),b(16770761,{emissive:15780256,emissiveIntensity:.35}),0,-.15,0,!1));{let L=At(256,256,(D,B,le)=>{D.fillStyle="#E9DEFE",D.fillRect(0,0,B,le),D.fillStyle="rgba(255,255,255,.85)";for(let G=0;G<4;G++)for(let ue=0;ue<4;ue++)D.beginPath(),D.arc(32+ue*64+G%2*32,32+G*64,5,0,7),D.fill()});L.wrapS=L.wrapT=bn,L.repeat.set(4,1.4),r.add(I(de(11,3.6,.2,.06),b(16777215,{map:L,emissive:15326974,emissiveIntensity:.25}),0,1.8,-2.15,!1)),r.add(I(de(11,.2,.12,.04),b(16777215),0,.1,-2.02,!1));for(let D=0;D<17;D++){let B=D/16,le=new Je({color:[16773544,16757713,12448732,14273791][D%4]});r.add(oe(.07,le,1,1,1,-5+B*10,3.15-Math.sin(B*Math.PI*4)*.12,-2))}let J=new ht(new cn(Si(.7),{depth:.05,bevelEnabled:!1}),new Je({color:16748480}));J.position.set(-3.6,2.2,-2),r.add(J);let E=J.clone();E.position.set(3.6,2.2,-2),E.material=new Je({color:9362431}),r.add(E)}let o=new Te;o.position.set(0,0,.1),o.add(I(new Ce(1.9,1.9,.05,40),b(12448732),0,.03,0,!1)),o.add(I(new Ce(1.3,1.3,.07,40),b(16774890),0,.04,0,!1)),r.add(o);let l=Fs(r),c=Qt({mika:!0,acc:e||[]});c.root.scale.setScalar(.9),c.root.position.set(0,0,.6),r.add(c.root),c.fx=(L,J)=>l.emit(L,J,c.root.position,.9);let f={},u=new W(0,0,.6),h=3,d=0,g=!0,x=!0,m=p("Mika",!0);function p(L,J){let E=document.createElement("span");return E.className="st3-n"+(J?" mk":""),E.textContent=L,s.appendChild(E),E}function A(L,J,E){return J?-3.5:3.5-L*1.5}function w(){let L=0;Object.keys(f).forEach(J=>{let E=f[J];E.mine?E.tx=-3.2:(E.tx=3.2-L*1.5,L++)})}function M(L){let J={};L.forEach(E=>{J[E.id]=1;let D=E.code+"|"+E.nick;if(f[E.id]&&f[E.id].key!==D&&C(E.id),!f[E.id]){let B=Qt(Hi(E.code));B.root.scale.setScalar(.95),B.root.position.set(E.me?-6:6,0,.5),r.add(B.root),B.fx=(le,G)=>l.emit(le,G,B.root.position,.95),f[E.id]={ch:B,key:D,mine:!!E.me,tx:0,label:p(E.me?"Moi":E.nick),bubble:null},setTimeout(()=>B.hop(4),500)}}),Object.keys(f).forEach(E=>{J[E]||C(E)}),w()}function C(L){let J=f[L];J&&(J.ch.dispose(),J.label.remove(),J.bubble&&J.bubble.remove(),delete f[L])}function v(L,J,E){let D=L.bubble;D&&D.remove();let B=document.createElement("div");B.className="st3-b"+(E?" mk":""),B.textContent=J,s.appendChild(B),L.bubble=B,setTimeout(()=>{L.bubble===B&&(B.remove(),L.bubble=null)},Math.min(7e3,2800+J.length*55))}let R={bubble:null};function y(L){return/[😂🤣😆😄😁]|haha|mdr|lol/i.test(L)?"happy":/[😍🥰❤💕💖]|j'adore|trop bien/i.test(L)?"love":/[😢😭😞]|triste|nul|fatigu/i.test(L)?"sad":/[😮😱]|\?\?|oh/i.test(L)?"wow":null}let P={setMembers:M,say(L,J){let E=f[L];if(!E)return;E.ch.hop(3.8);let D=y(J);D&&(E.ch.setEmotion(D),D==="love"&&l.emit("heart",3,E.ch.root.position,.95),setTimeout(()=>E.ch.setEmotion("neutral"),1800)),E.ch.setTalking(!0),setTimeout(()=>E.ch.setTalking(!1),Math.min(2400,600+J.length*40)),v(E,J,!1)},mikaSay(L){c.hop(3.6),c.setTalking(!0),u.set(0,0,.9),h=d+4,setTimeout(()=>c.setTalking(!1),Math.min(2800,700+L.length*40)),v(R,L,!0)},mikaReact(L){c.setEmotion(L),setTimeout(()=>c.setEmotion("neutral"),2200)},setMikaAcc(L){c.setAccessories(L)},destroy(){g=!1,Object.keys(f).forEach(C),c.dispose(),t.dispose(),t.forceContextLoss&&t.forceContextLoss(),n.remove(),s.remove()}};function O(){let L=i.clientWidth||360,J=i.clientHeight||150;t.setSize(L,J,!1),n.style.width="100%",n.style.height="100%",a.aspect=L/J,a.fov=L/J>2?30:40,a.updateProjectionMatrix()}new ResizeObserver(O).observe(i),O(),m.style.opacity=1;let X=new Hn,Z=new W;function U(L,J,E,D){Z.set(J.x,J.y+E,J.z).project(a);let B=i.clientWidth,le=i.clientHeight,G=(L.offsetWidth||40)/2+4;L.style.left=Math.max(G,Math.min(B-G,(Z.x*.5+.5)*B+(D||0)))+"px",L.style.top=(-Z.y*.5+.5)*le+"px"}c.setEmotion("neutral"),n.addEventListener("pointerup",()=>{c.hop(4.4),c.setEmotion("happy"),setTimeout(()=>c.setEmotion("neutral"),1200),i.dispatchEvent(new CustomEvent("mika3d",{detail:{name:"mika"}}))});function T(){if(!g)return;if(requestAnimationFrame(T),document.hidden){X.getDelta();return}let L=Math.min(.05,X.getDelta());d+=L,d>h&&!c.st.talking&&(u.set((Math.random()-.5)*3.2,0,.3+Math.random()*.8),h=d+4+Math.random()*5);let J=c.root.position,E=u.x-J.x,D=u.z-J.z,B=Math.hypot(E,D),le=!1;if(B>.06){le=!0;let G=Math.min(B,.9*L);J.x+=E/B*G,J.z+=D/B*G,c.face(Math.atan2(E,D)*.7)}else c.face(0);c.update(L,d,le,!1),Object.keys(f).forEach(G=>{let ue=f[G],z=ue.ch.root.position,ne=ue.tx-z.x,xe=!1;Math.abs(ne)>.05?(xe=!0,z.x+=Math.sign(ne)*Math.min(Math.abs(ne),2.2*L),ue.ch.face(Math.sign(ne)*.5)):ue.ch.face(ue.mine?.35:-.35),z.z=.5,ue.ch.update(L,d+G.length,xe,!1),U(ue.label,z,-.12,0),ue.bubble&&U(ue.bubble,z,1.75,0)}),U(m,c.root.position,-.12,0),R.bubble&&U(R.bubble,c.root.position,1.75,0),l.update(L),t.render(r,a)}return T(),P}function Bx(i,e){e=e||{};let t;try{t=new Vn({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}t.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let n=t.domElement;n.className="scene3d",i.insertBefore(n,i.firstChild);let s=document.createElement("div");s.className="st3-ov",i.appendChild(s);let r=new Sn;Os(r);let a=new Rt(36,1.4,.1,40);a.position.set(0,2.5,7.6),a.lookAt(0,1,-.4),r.add(I(de(9,.3,8,.1),b(15980984,{emissive:15255452,emissiveIntensity:.3}),0,-.15,.3,!1));let o=At(256,256,(T,L,J)=>{T.fillStyle="#FFE9F3",T.fillRect(0,0,L,J),T.fillStyle="rgba(255,255,255,.9)";for(let E=0;E<4;E++)for(let D=0;D<4;D++)T.beginPath(),T.arc(32+D*64+E%2*32,32+E*64,5,0,7),T.fill()});o.wrapS=o.wrapT=bn,o.repeat.set(3.2,1.3),r.add(I(de(9,4.2,.2,.06),b(16777215,{map:o,emissive:16771571,emissiveIntensity:.25}),0,2,-3.1,!1));let l=document.createElement("canvas");l.width=512,l.height=256;let c=l.getContext("2d"),f=new _s(l);f.colorSpace=qt;let u=[];function h(){c.fillStyle="#2f5d50",c.fillRect(0,0,512,256),c.strokeStyle="rgba(255,255,255,.18)",c.lineWidth=6,c.strokeRect(8,8,496,240),c.textAlign="center",c.textBaseline="middle";let T=u.length?u:[{t:"Willkommen!",c:"#fff6c2",s:56},{t:"Hello \xB7 Hallo \xB7 Hola \xB7 Ciao",c:"#cfe9ff",s:26}],J=128-T.reduce((E,D)=>E+(D.s||34)*1.35,0)/2;T.forEach(E=>{let D=E.s||34;c.font="700 "+D+'px "Comic Sans MS","Chalkboard SE","Segoe UI",sans-serif',c.fillStyle=E.c||"#ffffff";let B=E.t;for(;c.measureText(B).width>470&&D>14;)c.font="700 "+--E.s+"px sans-serif";c.fillText(B,256,J+D*.67),J+=D*1.35}),f.needsUpdate=!0}h();let d=new Te;d.position.set(0,2.15,-2.95),d.add(I(de(3.6,1.9,.12,.05),b(14267530),0,0,0,!1)),d.add(I(new vt(3.4,1.7),new Je({map:f}),0,0,.07,!1)),r.add(d),r.add(I(de(1.7,.7,.7,.1),b(13080688),0,.35,-1.55)),r.add(I(de(1.85,.08,.8,.04),b(14858378),0,.72,-1.55)),r.add(I(de(.5,.06,.34,.02),b(16748480),-.5,.79,-1.5,!1)),r.add(I(new Ce(2.6,2.6,.04,44),b(14273791),0,.02,1.6,!1));for(let T=0;T<17;T++){let L=T/16;r.add(oe(.07,new Je({color:[16773544,16757713,12448732,14273791][T%4]}),1,1,1,-4+L*8,3.9-Math.sin(L*Math.PI*4)*.14,-2.95))}let g=Fs(r),x=Qt({mika:!0,color:15905402,ears:"bear",eyes:"dot",acc:e.bobAcc||["glasses","bowtie"]});x.root.scale.setScalar(1.12),x.root.position.set(0,0,-1),x.face(0),r.add(x.root),x.fx=(T,L)=>g.emit(T,L,x.root.position,1.1);let m=Qt(Object.assign(Hi(e.code||"0000")));m.root.scale.setScalar(.8),m.root.position.set(-.9,0,2.2),m.face(Math.PI),r.add(m.root),m.fx=(T,L)=>g.emit(T,L,m.root.position,.95);let p=Qt({mika:!0,acc:e.mikaAcc||[]});p.root.scale.setScalar(.68),p.root.position.set(.85,0,2.2),p.face(Math.PI),r.add(p.root),p.fx=(T,L)=>g.emit(T,L,p.root.position,.8);let A={bob:{ch:x,el:null,dy:1.95,b:null},me:{ch:m,el:null,dy:1.5,b:null},mika:{ch:p,el:null,dy:1.3,b:null}};[["bob","Prof. Bobby","pr"],["mika","Mika","mk"]].forEach(T=>{let L=document.createElement("span");L.className="st3-n "+T[2],L.textContent=T[1],s.appendChild(L),A[T[0]].el=L,L.style.opacity=1});function w(T,L,J,E){let D=A[T];D.b&&D.b.remove();let B=document.createElement("div");B.className="st3-b "+(J||""),B.textContent=L,s.appendChild(B),D.b=B,setTimeout(()=>{D.b===B&&(B.remove(),D.b=null)},E||Math.min(14e3,4200+L.length*70))}let M=0,C=!0,v=new Hn,R=new W;function y(T,L,J){R.set(L.x,L.y+J,L.z).project(a);let E=i.clientWidth,D=i.clientHeight,B=(T.offsetWidth||40)/2+4;T.style.left=Math.max(B,Math.min(E-B,(R.x*.5+.5)*E))+"px",T.style.top=(-R.y*.5+.5)*D+"px"}function P(){let T=i.clientWidth||360,L=i.clientHeight||260;t.setSize(T,L,!1),n.style.width="100%",n.style.height="100%",a.aspect=T/L,a.fov=T/L<1.2?46:36,a.updateProjectionMatrix()}new ResizeObserver(P).observe(i),P();let O={};function X(T,L){A[T].ch.setTalking(!0),clearTimeout(O[T]),O[T]=setTimeout(()=>A[T].ch.setTalking(!1),L)}let Z={bobbySay(T,L){x.hop(3.4),x.setEmotion(L||"happy"),X("bob",Math.min(4e3,800+T.length*45)),w("bob",T,"pr"),setTimeout(()=>x.setEmotion("neutral"),2600)},bobbyEmote(T){x.setEmotion(T),(T==="proud"||T==="cheer"||T==="love")&&g.emit("heart",4,x.root.position,1.1),setTimeout(()=>x.setEmotion("neutral"),2400)},bobbyListen(T){x.setEmotion(T?"wow":"neutral")},userSay(T){m.hop(3.4),X("me",Math.min(2500,600+T.length*40)),w("me",T,"me")},mikaSay(T,L){p.hop(3.6),p.setEmotion(L||"happy"),X("mika",Math.min(3e3,800+T.length*40)),w("mika",T,"mk",Math.min(16e3,5e3+T.length*80)),setTimeout(()=>p.setEmotion("neutral"),2800)},mikaReact(T){p.setEmotion(T),setTimeout(()=>p.setEmotion("neutral"),2400)},board(T){u=T||[],h()},setBobAcc(T){x.setAccessories(T)},setMikaAcc(T){p.setAccessories(T)},thinking(T){T&&(x.setEmotion("neutral"),x.look(.4,.3))},destroy(){C=!1,[x,m,p].forEach(T=>T.dispose()),t.dispose(),t.forceContextLoss&&t.forceContextLoss(),n.remove(),s.remove()}};n.addEventListener("pointerup",()=>{x.hop(4),x.setEmotion("happy"),setTimeout(()=>x.setEmotion("neutral"),1200),i.dispatchEvent(new CustomEvent("mika3d",{detail:{name:"bobby"}}))});function U(){if(!C)return;if(requestAnimationFrame(U),document.hidden){v.getDelta();return}let T=Math.min(.05,v.getDelta());M+=T,x.face(Math.sin(M*.6)*.12),m.face(Math.PI+Math.sin(M*.5)*.08),p.face(Math.PI-Math.sin(M*.5)*.08),x.update(T,M,!1,!1),m.update(T,M+1,!1,!1),p.update(T,M+2,!1,!1),["bob","mika"].forEach(L=>{y(A[L].el,A[L].ch.root.position,-.08)}),Object.keys(A).forEach(L=>{A[L].b&&y(A[L].b,A[L].ch.root.position,A[L].dy)}),g.update(T),t.render(r,a)}return U(),Z}function Hx(i){let e;try{e=new Vn({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}Bc(e),Hc(i),e.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let t=e.domElement;t.className="scene3d",i.insertBefore(t,i.firstChild);let n=document.createElement("div");n.className="st3-ov",i.appendChild(n);let s=new Sn;Os(s);let r=new Rt(38,1.4,.1,60);r.position.set(0,7.2,9.4),r.lookAt(0,0,.5),s.add(I(new Ce(7.2,7.4,.3,56),b(13234872,{emissive:11069088,emissiveIntensity:.25}),0,-.15,.2,!1)),s.add(I(new Ce(3.4,3.4,.04,48),b(16773334),0,.02,.2,!1)),s.add(I(new at(3.4,.08,8,48),b(16765411),0,.04,.2,!1).rotateX(Math.PI/2));let a=new Te;a.position.set(0,0,-.4),s.add(a),a.add(I(new Ce(1,1.1,.34,32),b(15262463),0,.17,0)),a.add(I(new Ce(.86,.86,.3,32),b(9362431,{emissive:6998261,emissiveIntensity:.4,roughness:.2}),0,.2,0,!1)),a.add(I(new Ce(.12,.16,.8,12),b(15262463),0,.6,0));let o=oe(.2,b(12119295,{emissive:9362431,emissiveIntensity:.5,transparent:!0,opacity:.85}),1,1.3,1,0,1.15,0);a.add(o);function l(G,ue,z,ne){let xe=new Te;xe.position.set(G,0,ue),xe.scale.setScalar(ne||1),xe.add(I(new Ce(.14,.2,1.1,10),b(12159587),0,.55,0)),[[0,1.55,0,.8],[-.5,1.3,.15,.55],[.5,1.35,-.1,.55],[.05,1.95,.05,.5]].forEach(ye=>xe.add(oe(ye[3],b(z,{emissive:z,emissiveIntensity:.18}),1,.9,1,ye[0],ye[1],ye[2]))),s.add(xe)}l(-4.6,-2.6,16757713,1.2),l(4.8,-2.4,16762588,1.1),l(-5.2,2.6,12448732,1),l(5.3,2.8,16757713,.95);function c(G,ue){let z=new Te;z.position.set(G,0,ue),z.add(I(new Ce(.05,.07,1.7,8),b(7035534),0,.85,0)),z.add(oe(.2,new Je({color:16773544}),1,1,1,0,1.8,0)),s.add(z)}c(-2.6,-2.2),c(2.6,-2.2),c(-3.4,3.2),c(3.4,3.2);let f=[];function u(G,ue,z,ne,xe,ye,j,Q,ie,k){let H=new Te;H.position.set(ue,0,z),H.userData.pick=G,H.add(I(de(Q,ie,1.5,.14),b(ne,{emissive:ne,emissiveIntensity:.12}),0,ie/2,0)),H.add(I(de(Q+.16,.14,1.7,.05),b(16777215),0,.07,.05,!1));let ee=Math.max(4,Math.round(Q/.3));for(let N=0;N<ee;N++)H.add(oe(Q/ee*.62,b(N%2?16777215:xe),1,.9,1.1,-Q/2+(N+.5)*Q/ee,ie*.7,.88));H.add(I(de(Q+.1,.1,1.2,.04),b(xe),0,ie*.78,.55,!1)),H.add(I(de(Q*.46,.14,.9,.05),b(xe),0,ie+.06,0,!1)),H.add(I(de(.46,.8,.08,.04),b(12159587),Q*.26,.42,.78)),H.add(I(de(Q*.46,.6,.06,.04),b(13627135,{emissive:16771512,emissiveIntensity:.55}),-Q*.2,.62,.78,!1)),k&&k.forEach((N,ae)=>H.add(oe(.11,b(N,{emissive:N,emissiveIntensity:.3}),1,1,.8,-Q*.2+(ae-(k.length-1)/2)*.28,.5,.83,!1)));let Se=At(256,96,(N,ae,ge)=>{N.fillStyle="#ffffff",N.beginPath(),N.roundRect?N.roundRect(4,4,ae-8,ge-8,28):N.rect(4,4,ae-8,ge-8),N.fill(),N.fillStyle="#2A1B5E",N.font="700 40px DynaPuff, Fredoka, sans-serif",N.textAlign="center",N.textBaseline="middle",N.fillText(ye+" "+j,ae/2,ge/2+2)}),se=I(new vt(Q*.9,Q*.9*96/256),new Je({map:Se,transparent:!0}),0,ie+.5,.2,!1);return H.add(se),H.scale.setScalar(1.1),H.traverse(N=>{N!==H&&(N.userData.root=H)}),s.add(H),f.push(H),H}u("home",-5.8,-5.2,16767464,16748480,"\u{1F3E0}","Chambre",2,1.7,[16748480,16769658]),u("bakery",-3.4,-5.2,16773593,16748480,"\u{1F950}","Boulangerie",2.1,1.7,[15247707,16757713,12448732]),u("thrift",-1,-5.2,14283236,6153140,"\u{1F457}","Friperie",2,1.8,[16748480,9362431,12166911]),u("deco",1.4,-5.2,16774351,16761418,"\u{1FAB4}","D\xE9co",2,1.7,[7065466,16757713]),u("dentist",4.7,-2.7,16777215,3116976,"\u{1F9B7}","Dentiste",2.1,1.8,[16747039,8150271,5686976]),u("karaoke",3.8,-5.2,14734591,8150271,"\u{1F3A4}","Karaok\xE9",2,1.9,[16740296,8255999]);let h=new Te;h.position.set(6.4,1.7,-6.2),h.scale.setScalar(.62),h.userData.pick="park";{let G=I(new at(1.55,.07,8,40),b(16748480),0,0,0,!1);h.add(G);let ue=I(new at(.85,.05,8,32),b(16769658),0,0,0,!1);h.add(ue);for(let z=0;z<8;z++){let ne=z/8*Math.PI*2,xe=I(new Ce(.03,.03,3.1,6),b(16777215),0,0,0,!1);xe.rotation.z=ne,h.add(xe);let ye=I(de(.38,.3,.3,.08),b([16757713,9362431,16769658,12448732][z%4]),Math.cos(ne)*1.55,Math.sin(ne)*1.55,0);ye.userData.gond=1,h.add(ye)}}let d=new Te;d.userData.pick="park",d.position.set(6.4,0,-6.2),d.scale.setScalar(.62),[-1,1].forEach(G=>{let ue=I(de(.16,2.3,.16,.05),b(8150271),G*.55,1.05,0);ue.rotation.z=-G*.28,d.add(ue)}),d.add(I(new Ce(.1,.1,.5,10),b(16777215),0,2.1,0)),s.add(d),s.add(h),f.push(h,d),h.traverse(G=>{G!==h&&(G.userData.root=h)}),d.traverse(G=>{G!==d&&(G.userData.root=d)}),s.add(I(de(1.6,.18,.5,.05),b(14858378),3.1,.45,-3.3)),s.add(I(de(1.6,.5,.1,.04),b(14858378),3.1,.75,-3.5));let g=Fs(s),x=0,m={},p=0,A=!0,w=new Hn;function M(G,ue){let z=document.createElement("span");return z.className="st3-n"+(ue?" mk":""),z.textContent=G,z.style.opacity=1,n.appendChild(z),z}function C(G){if(m[G.pid])return;let ue=Qt(G.npc?{mika:!0,acc:G.acc||[]}:Hi(G.code));ue.root.scale.setScalar(G.npc?.75:.85),ue.root.position.set(G.x||0,0,G.z||2),s.add(ue.root),ue.fx=(z,ne)=>g.emit(z,ne,ue.root.position,.85),m[G.pid]={ch:ue,tx:G.x||0,tz:G.z||2,label:M(G.me?"Moi":G.nick,G.me),me:!!G.me,npc:!!G.npc,next:0,dance:0,bub:null,bubT:0},ue.hop(4)}function v(G,ue){let z=m[G];if(!z)return;z.bub&&z.bub.remove();let ne=document.createElement("div");ne.className="st3-b",ne.textContent=String(ue).slice(0,80),n.appendChild(ne),z.bub=ne,z.bubT=5+Math.min(4,String(ue).length/25),z.ch.setTalking(!0),setTimeout(()=>z.ch&&z.ch.setTalking(!1),1400)}function R(G){let ue=m[G];ue&&(ue.bub&&ue.bub.remove(),ue.ch.dispose(),ue.label.remove(),delete m[G])}function y(G,ue){let z=m[G];if(!z||z.npc)return;let ne=z.ch.root.position.clone();z.ch.dispose();let xe=Qt(Hi(ue));xe.root.scale.setScalar(.85),xe.root.position.copy(ne),s.add(xe.root),xe.fx=(ye,j)=>g.emit(ye,j,xe.root.position,.85),z.ch=xe,xe.hop(4)}function P(G,ue,z){let ne=m[G];ne&&(ne.tx=ue,ne.tz=z)}function O(G,ue){let z=m[G];if(!z)return;let ne=z.ch;ue==="wave"?(ne.hop(4.2),ne.setEmotion("happy")):ue==="heart"?(ne.setEmotion("love"),ne.hop(4.6),g.emit("heart",6,ne.root.position,.85)):ue==="happy"?(ne.setEmotion("happy"),ne.hop(5)):ue==="wow"?(ne.setEmotion("wow"),ne.hop(4)):ue==="dance"&&(ne.setEmotion("happy"),z.dance=2.4),setTimeout(()=>ne.setEmotion("neutral"),2200)}function X(){let G=i.clientWidth||360,ue=i.clientHeight||280;e.setSize(G,ue,!1),t.style.width="100%",t.style.height="100%",r.aspect=G/ue,r.fov=G/ue<1.2?64:42,r.updateProjectionMatrix()}new ResizeObserver(X).observe(i),X();let Z=new Di,U=new Re,T=new en(new W(0,1,0),0),L=new W;t.addEventListener("pointerup",G=>{let ue=t.getBoundingClientRect();U.set((G.clientX-ue.left)/ue.width*2-1,-((G.clientY-ue.top)/ue.height)*2+1),Z.setFromCamera(U,r);for(let xe of Z.intersectObjects(f,!0)){let ye=xe.object,j=null;for(;ye;){if(ye.userData&&ye.userData.pick){j=ye.userData.pick;break}ye=ye.parent}if(j){i.dispatchEvent(new CustomEvent("plaza3d",{detail:{kind:"building",id:j}}));return}}if(!Z.ray.intersectPlane(T,L))return;let z=null,ne=.9;Object.keys(m).forEach(xe=>{let ye=m[xe].ch.root.position,j=Math.hypot(ye.x-L.x,ye.z-L.z);j<ne&&(ne=j,z=xe)}),i.dispatchEvent(new CustomEvent("plaza3d",{detail:z?{kind:"tap",pid:z,me:m[z].me}:{kind:"walk",x:Math.max(-5.2,Math.min(5.2,L.x)),z:Math.max(-3.2,Math.min(4.2,L.z))}}))});let J=new W;function E(G,ue,z){J.set(ue.x,ue.y+z,ue.z).project(r);let ne=i.clientWidth,xe=i.clientHeight,ye=(G.offsetWidth||40)/2+4;G.style.left=Math.max(ye,Math.min(ne-ye,(J.x*.5+.5)*ne))+"px",G.style.top=(-J.y*.5+.5)*xe+"px"}function D(){if(!A)return;if(requestAnimationFrame(D),document.hidden){w.getDelta();return}let G=Math.min(.05,w.getDelta());p+=G,o.scale.y=1.3+Math.sin(p*5)*.2,h.rotation.z-=G*(x>0?1.4:.18),x>0&&(x-=G),h.children.forEach(ue=>{ue.userData.gond&&(ue.rotation.z=-h.rotation.z)}),Object.keys(m).forEach(ue=>{let z=m[ue],ne=z.ch.root.position,xe=z.tx-ne.x,ye=z.tz-ne.z,j=Math.hypot(xe,ye),Q=!1;if(z.dance>0)z.dance-=G,z.ch.st.y<.02&&z.ch.hop(3.2),z.ch.face(Math.sin(p*10)*.8);else if(z.npc&&j<.06&&p>z.next)z.tx=(Math.random()-.5)*8,z.tz=-1+Math.random()*4.5,z.next=p+3+Math.random()*4;else if(j>.06){Q=!0;let ie=Math.min(j,(z.npc?.9:2)*G);ne.x+=xe/j*ie,ne.z+=ye/j*ie,z.ch.face(Math.atan2(xe,ye)*.8)}else z.ch.face(0);z.ch.update(G,p+ue.length,Q,!1),E(z.label,ne,-.12),z.bub&&(z.bubT-=G,z.bubT<=0?(z.bub.remove(),z.bub=null):E(z.bub,ne,1.55))}),g.update(G),e.render(s,r)}D();function B(){x=4.5}function le(){Object.keys(m).forEach(G=>{m[G].npc||R(G)})}return{add:C,remove:R,setCode:y,reset:le,rideWheel:B,moveTo:P,emote:O,say:v,has:G=>!!m[G],count:()=>Object.keys(m).length,destroy(){A=!1,Object.keys(m).forEach(R),e.dispose(),e.forceContextLoss&&e.forceContextLoss(),t.remove(),n.remove()}}}function Fr(i,e,t){let n=At(256,64,(s,r,a)=>{let o=r/t;for(let l=0;l<t;l++)s.fillStyle=l%2?e:i,s.fillRect(l*o,0,o,a)});return n.wrapS=bn,n}function Ns(i,e,t){let n=At(128,128,(s,r,a)=>{s.fillStyle=i,s.fillRect(0,0,r,a),s.fillStyle=e,s.fillRect(0,0,r/2,a/2),s.fillRect(r/2,a/2,r/2,a/2)});return n.wrapS=n.wrapT=bn,n.repeat.set(t,t*.6),n}function zx(i,e,t,n){return At(512,160,(s,r,a)=>{t&&(s.fillStyle=t,s.fillRect(0,0,r,a)),s.font="700 78px DynaPuff, Fredoka, sans-serif",s.textAlign="center",s.textBaseline="middle",n&&(s.shadowColor=n,s.shadowBlur=24),s.fillStyle=e,s.fillText(i,r/2,a/2+4),s.fillText(i,r/2,a/2+4)})}var An={cake(i,e,t,n){let s=new Te;s.position.set(i,e,t),s.add(I(new Ce(.2,.2,.2,20),b(n||16765411),0,.1,0,!1));let r=I(new at(.16,.035,8,20),b(16777215),0,.2,0,!1);return r.rotation.x=Math.PI/2,s.add(r),s.add(oe(.05,b(16726876,{emissive:16726876,emissiveIntensity:.25}),1,1,1,0,.27,0)),s},macaron(i,e,t,n){let s=new Te;s.position.set(i,e,t);let r=b(n,{emissive:n,emissiveIntensity:.18});return s.add(oe(.1,r,1,.42,1,0,.05,0)),s.add(oe(.09,b(16775150),1,.3,1,0,.1,0)),s.add(oe(.1,r,1,.42,1,0,.15,0)),s},croissant(i,e,t){let n=new Te;n.position.set(i,e,t);let s=I(new at(.13,.065,10,16,Math.PI*1.15),b(15247707),0,.09,0,!1);return s.rotation.set(Math.PI/2.4,0,Math.PI*.9),s.scale.set(1.2,1,1),n.add(s),n},donut(i,e,t,n){let s=new Te;s.position.set(i,e,t);let r=I(new at(.1,.055,10,18),b(15774571),0,.08,0,!1);r.rotation.x=Math.PI/2.3,s.add(r);let a=I(new at(.1,.05,10,18),b(n||16751304,{emissive:n||16751304,emissiveIntensity:.15}),0,.1,.005,!1);return a.rotation.x=Math.PI/2.3,a.scale.set(1,1,.9),s.add(a),s},cupcake(i,e,t,n){let s=new Te;s.position.set(i,e,t);let r=I(new Ce(.1,.07,.12,12),b(16109728),0,.06,0,!1);return s.add(r),s.add(oe(.11,b(n||16757713,{emissive:n||16757713,emissiveIntensity:.15}),1,.8,1,0,.17,0)),s.add(oe(.035,b(16726876),1,1,1,0,.27,0)),s},bread(i,e,t){let n=new Te;n.position.set(i,e,t),n.add(oe(.2,b(14259530),1.5,.7,.8,0,.12,0));for(let s=-1;s<=1;s++){let r=I(de(.02,.012,.18,.005),b(15913888),s*.09,.22,0,!1);r.rotation.y=.5,n.add(r)}return n}};function kx(i,e,t,n,s){let r=new Te;r.position.set(i,e,t),r.add(I(new at(.05,.008,6,12,Math.PI),b(13619164,{metalness:.5,roughness:.4}),0,.05,0,!1));let a=b(n,{emissive:n,emissiveIntensity:.1});return s==="dress"?(r.add(I(new Ce(.1,.22,.5,14),a,0,-.22,0,!1)),r.add(I(de(.2,.14,.05,.02),a,0,0,0,!1))):(r.add(I(de(.3,.38,.06,.03),a,0,-.17,0,!1)),[-1,1].forEach(o=>{let l=I(de(.16,.08,.06,.03),a,o*.2,-.04,0,!1);l.rotation.z=-o*.5,r.add(l)})),r}function Gx(i,e,t,n){n=n||{};let s;try{s=new Vn({antialias:!0,alpha:!1,powerPreference:"low-power"})}catch{return null}s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Bc(s),Hc(i);let r=s.domElement;r.className="scene3d",i.insertBefore(r,i.firstChild);let a=new Sn,o={bakery:16771568,thrift:15721424,deco:15135726,karaoke:2364487,dentist:14677487,kitchen:16773596,garden:12577023,bath:14676991}[e]||16777215;a.background=new et(o),Os(a);let l=new Rt(34,1,.1,40);l.position.set(0,1.9,6.6),l.lookAt(0,1.25,0);let c=Fs(a),f=[],u=new Te;a.add(u);let h=z=>(u.add(z),z),d={bakery:()=>b(16777215,{map:Ns("#fff4f8","#ffc4dc",5)}),thrift:()=>b(14198126,{map:Fr("#d9a96f","#c8935b",14)}),deco:()=>b(15984339,{map:Ns("#f6ece0","#e9d9c3",5)}),karaoke:()=>b(3810160,{roughness:.3}),dentist:()=>b(16777215,{map:Ns("#ffffff","#cfeee6",6)}),kitchen:()=>b(14263662,{map:Fr("#e0b078","#cf9b62",12)}),garden:()=>b(8834914,{roughness:1}),bath:()=>b(16777215,{map:Ns("#f4fbff","#cfe6f7",7)})}[e](),g=I(new vt(26,16),d,0,0,4.5,!1);d.map&&d.map.repeat.multiplyScalar(1.8),g.rotation.x=-Math.PI/2,h(g);let x={bakery:16766694,thrift:13099988,deco:16774112,karaoke:3086947,dentist:13496038,kitchen:16771529,garden:10212474,bath:12575735}[e],m=e==="bakery"?Fr("#ffd6e6","#fff0f6",14):null;m&&m.repeat.set(3.4,1);let p=h(I(de(26,10,.2,.05),b(x,m?{map:m}:{emissive:x,emissiveIntensity:e==="karaoke"?.35:.12}),0,4.7,-3,!1));if(e==="kitchen"){let z=bi("#D9A56E",["#E8BC8A","#C98F55","#EFC99A"],200,{planks:9,ang:0,len:90,bw:6,seed:4,w:512,h:512});z.repeat.set(2.4,1.6),g.material=b(16777215,{map:z});let ne=bi("#FFE6BF",["#FFF0D2","#F7D9A4","#FFE0B8","#F2CC95"],240,{seed:12});ne.repeat.set(4,1.5),p.material=b(16777215,{map:ne})}if(e==="bath"){let z=bi("#CDEBF5",["#E3F6FB","#B8DCEB","#D8F0F2","#A9D3E6"],240,{seed:21});z.repeat.set(4,1.5),p.material=b(16777215,{map:z});let ne=bi("#F2E4CF",["#FFF3E0","#E6D2B5","#F7E9D4"],160,{seed:22});ne.repeat.set(2.4,1.6),g.material=b(16777215,{map:ne})}if(e==="garden"){let z=bi("#8ED069",["#A7DD7C","#76BF58","#B9E58C","#68B050"],420,{seed:31,ang:1.2,len:30,bw:8,w:512,h:512});z.repeat.set(3.4,2.4),g.material=b(16777215,{map:z}),p.material=new Je({color:16777215}),p.visible=!1;let ne=I(new vt(19,9.5),new Je({map:Br(new Date().getHours(),!0),fog:!1}),0,4.6,-3.1,!1);a.add(ne)}h(I(de(14,.18,.2,.04),b(16777215),0,.09,-2.88,!1));let A=I(new vt(2.9,.9),new Je({map:zx({bakery:"Boulangerie",thrift:"Friperie",deco:"D\xE9co",karaoke:"Karaok\xE9",dentist:"Dentiste",kitchen:"Cuisine",garden:"Jardin",bath:"Salle de bain"}[e],{bakery:"#e0457b",thrift:"#ff7ac8",deco:"#2f8f6b",karaoke:"#7df9ff",dentist:"#2f8fb0",kitchen:"#d9822b",garden:"#2f8f6b",bath:"#3a8fd1"}[e],{bakery:"#fffaf0",thrift:null,deco:"#fffaf0",karaoke:null,dentist:"#fffaf0",kitchen:"#fffaf0",garden:"#fffaf0",bath:"#fffaf0"}[e],{thrift:"#ff3fa8",karaoke:"#18c8ff"}[e]),transparent:!0}),0,3.85,-2.86,!1);h(A);let w={set:()=>{}},M=null,C=null,v=null,R=0,y=!1,P=0,O=!0,X=6.6,Z=!1,U=[0,0,1.4],T=1.25;if(e==="bakery"){U=[-1.5,0,1.2];let z=I(de(5.4,1,1.2,.14),b(16775150),.9,.5,-1.6);h(z),h(I(de(5.5,.12,1.3,.05),b(16106122),.9,1.04,-1.6,!1));let ne=I(de(3.6,.95,1,.08),new zt({color:14677759,transparent:!0,opacity:.22,roughness:.05,metalness:.1}),.5,1.6,-1.55,!1);h(ne),h(I(de(3.7,.06,1.05,.02),b(16775150),.5,1.12,-1.55,!1)),h(I(de(3.4,.05,.8,.02),b(16775150),.5,1.5,-1.55,!1)),h(I(de(3.7,.07,1.05,.02),b(16757713),.5,2.1,-1.55,!1));let xe=[16757713,12448732,16773544,14273791,16763304,9362431];for(let ie=0;ie<6;ie++)h(An.macaron(-.95+ie*.22,1.5,-1.3,xe[ie]));h(An.cake(-1,1.15,-1.7,16765411)),h(An.cake(-.4,1.15,-1.7,12448732)),h(An.cake(.2,1.15,-1.7,16773544)),h(An.cupcake(.85,1.15,-1.7,16757713)),h(An.cupcake(1.2,1.15,-1.5,14273791)),h(An.donut(1.25,1.55,-1.35,16751304)),h(An.croissant(.4,1.55,-1.3)),h(An.croissant(.75,1.55,-1.3)),h(An.donut(1.05,1.55,-1.7,12448732)),h(I(de(1.6,2.4,.5,.06),b(16106122),3.95,1.2,-2.4)),[.6,1.2,1.8].forEach(ie=>{h(I(de(1.5,.06,.45,.02),b(16773336),3.95,ie,-2.35,!1));for(let k=0;k<3;k++)h(An.bread(3.5+k*.45,ie+.04,-2.3))});let ye=I(new Bn(11,.5,1.6),b(16777215,{map:Fr("#ff8fc0","#ffffff",16)}),0,4.6,-2.2,!1);Fr("#ff8fc0","#ffffff",16).repeat.set(1,1),h(ye);for(let ie=0;ie<22;ie++)h(oe(.26,b(ie%2?16777215:16748480),1,.9,.9,-5.2+ie*.5,4.3,-1.45));for(let ie=-1;ie<=1;ie+=2){let k=new Te;k.position.set(ie*2.4,3.1,-1.2),k.add(I(new Ce(.01,.01,.9,4),b(10066329),0,.5,0,!1));let H=I(new Pt(.3,.3,14,1,!0),b(16769960,{side:Zt,emissive:16765818,emissiveIntensity:.6}),0,0,0,!1);k.add(H),k.add(oe(.08,new Je({color:16773560}),1,1,1,0,-.05,0)),h(k),f.push(ee=>{k.rotation.z=Math.sin(ee*1.2+ie)*.03})}let Q=new sn(16767400,1,12);Q.position.set(0,3.2,1),a.add(Q)}else if(e==="thrift"){U=[.2,0,1.4];let z=(k,H,ee,Se,se,N)=>{h(I(new Ce(.03,.03,Se,8),b(14206888,{metalness:.5}),k,H,ee,!1)).rotation.z=Math.PI/2,[-1,1].forEach(ge=>h(I(new Ce(.03,.04,H,8),b(14206888,{metalness:.5}),k+ge*Se/2,H/2,ee,!1)));let ae=Math.floor(Se/.32);for(let ge=0;ge<ae;ge++){let be=kx(k-Se/2+.2+ge*.32,H-.05,ee,se[ge%se.length],N[ge%N.length]);be.rotation.y=.3,h(be)}};z(-2.6,2.1,-1.8,2.4,[16748480,9362431,16773544,12166911,11069547],["shirt","dress"]),z(2.7,2.1,-1.8,2.2,[16754895,16763304,12448732,15195647],["dress","shirt"]),z(-.4,1.7,-2.4,3,[15905402,14697851,8150271,16769658],["shirt","shirt","dress"]);let ne=I(new ni(.75,30),new zt({color:15005439,metalness:.9,roughness:.08,emissive:12576511,emissiveIntensity:.25}),3.75,1.7,-1.1,!1);ne.scale.set(.8,1.35,1),ne.rotation.y=-.45,h(ne);let xe=I(new at(.75,.07,8,32),b(15905402),3.75,1.7,-1.11,!1);xe.scale.set(.8,1.35,1),xe.rotation.y=-.45,h(xe),h(I(de(2.2,.08,.45,.03),b(13210972),-3.6,2.9,-2.6,!1));let ye=[16748480,8150271,16769658,6153140];for(let k=0;k<4;k++)h(I(new Ce(.2,.2,.04,16),b(ye[k]),-4.2+k*.5,2.97,-2.6,!1)),h(oe(.13,b(ye[k]),1,.8,1,-4.2+k*.5,3.04,-2.6));for(let k=0;k<24;k++){let H=k/23,ee=oe(.06,new Je({color:[16773544,16757713,12448732,9362431][k%4]}),1,1,1,-5+H*10,4.7-Math.sin(H*Math.PI*3)*.2,-2.7);h(ee),f.push(Se=>{ee.scale.setScalar(.85+Math.sin(Se*3+k)*.25)})}let j=new ht(new cn(Si(.9),{depth:.04,bevelEnabled:!1}),new Je({color:16732072}));j.position.set(-3.5,1.4,-2.8),h(j),f.push(k=>{j.scale.setScalar(1+Math.sin(k*3)*.05)});let Q=I(new Ce(1.5,1.5,.03,36),b(16757713),.2,.02,1.4,!1);h(Q),h(I(new at(1.2,.04,8,36),b(16777215),.2,.04,1.4,!1)).rotation.x=Math.PI/2;let ie=new sn(16767468,.9,14);ie.position.set(0,3.4,2),a.add(ie)}else if(e==="deco"){U=[-1.4,0,1.2];let z=(ye,j,Q,ie)=>{h(I(new Ce(.22,.17,.4,14),b(16763304),ye,.2,j));for(let k=0;k<5;k++){let H=k/5*Math.PI*2;h(oe(.2,b(ie||7065466),.6,1.8*Q,.35,ye+Math.cos(H)*.12,.7+.2*Q,j+Math.sin(H)*.12)).rotation.z=Math.cos(H)*.35}};z(-3.6,-1.8,1.4),z(3.8,-1.6,1,9232522),z(-2.3,-2.4,.8,6277536),h(I(de(2.6,.7,.9,.18),b(16757713),1.2,.35,-1.9)),h(I(de(2.6,.7,.3,.14),b(16751304),1.2,.95,-2.25)),[-1,1].forEach(ye=>h(I(de(.3,.55,.9,.12),b(16751304),1.2+ye*1.3,.5,-1.9))),h(I(de(.5,.5,.18,.06),b(16773544),.5,.75,-1.85)),h(I(de(.5,.5,.18,.06),b(12448732),1.9,.75,-1.85)),h(I(new Ce(.02,.02,2.4,6),b(13421772),3,1.2,-1.2,!1)),h(oe(.3,b(16769960,{emissive:16765818,emissiveIntensity:.9}),1,.8,1,3,2.5,-1.2)),[[-2.2,3.1,16757713],[-1.4,3.3,9362431],[-.6,3,16773544]].forEach(ye=>{h(I(de(.6,.8,.06,.02),b(15905402),ye[0],ye[1],-2.85,!1)),h(I(de(.46,.64,.02,.01),b(ye[2],{emissive:ye[2],emissiveIntensity:.3}),ye[0],ye[1],-2.81,!1))});let ne=I(new at(.9,.08,8,28,Math.PI),b(16777215),2.2,2.6,-2.85,!1);h(ne),h(I(new ni(.9,28,0,Math.PI),new Je({color:12577279}),2.2,2.6,-2.86,!1)),h(I(new Ce(.62,.7,.2,28),b(16777215),1.5,.1,1.3));let xe=new sn(16773328,.8,14);xe.position.set(0,3.6,2),a.add(xe)}else if(e==="kitchen"){U=[.2,0,1.7],T=1.2;let z=b(13209429),ne=b(16775146),xe=b(16777215,{map:Ns("#ffffff","#ffd9a8",8)}),ye=b(13226716,{metalness:.6,roughness:.3});h(I(new vt(14,2.4),b(16777215,{map:Ns("#fff8ee","#ffd9a8",14)}),0,1.7,-2.88,!1)),h(I(de(9.5,1,.9,.06),z,.2,.5,-2.35)),h(I(de(9.6,.08,1,.03),ne,.2,1.04,-2.35)),h(I(de(1.3,.1,.7,.04),ye,-2.4,1.07,-2.3));let j=h(I(new at(.2,.04,8,16,Math.PI),ye,-2.4,1.45,-2.55));h(I(new Ce(.04,.04,.4,8),ye,-2.4,1.25,-2.62));let Q=new Te;Q.userData.pick="stove",Q.add(I(de(1.5,1.05,.95,.08),b(15330802),0,.52,0)),Q.add(I(de(1.5,.06,.95,.03),b(3093312),0,1.07,0)),[[-.38,-.2],[.38,-.2],[-.38,.22],[.38,.22]].forEach(N=>{let ae=I(new at(.16,.03,8,20),b(4475482),N[0],1.11,N[1]);ae.rotation.x=Math.PI/2,Q.add(ae)});let ie=new Te;ie.add(I(new Ce(.28,.26,.3,20),b(16748456),0,.15,0));{let N=I(new at(.28,.025,8,20),b(16740238),0,.3,0);N.rotation.x=Math.PI/2,ie.add(N)}ie.position.set(-.38,1.13,-.2),Q.add(ie);let k=[];for(let N=0;N<4;N++){let ae=oe(.09,b(16777215,{transparent:!0,opacity:.55}),1,1,1,-.38,1.5,-.2);k.push(ae),Q.add(ae)}f.push(N=>{k.forEach((ae,ge)=>{let be=(N*.45+ge/4)%1;ae.position.y=1.45+be*.9,ae.scale.setScalar(.6+be),ae.material.opacity=.55*(1-be),ae.position.x=-.38+Math.sin(N*2+ge)*.08})}),Q.position.set(.2,0,-2.3),h(Q);let H=new Te;H.userData.pick="fridge",H.add(I(de(1.15,2.7,.95,.12),b(12575743),0,1.35,0)),H.add(I(de(1.1,.04,.02,.01),b(16777215),0,1.75,.49)),H.add(I(de(.07,.5,.07,.03),ye,.4,2.2,.5)),H.add(I(de(.07,.8,.07,.03),ye,.4,1,.5)),[[-.2,2.1,16740238],[.1,2.35,16769658],[-.1,1.2,8255999]].forEach(N=>H.add(I(de(.22,.22,.02,.04),b(N[2]),N[0],N[1],.49))),H.position.set(3.6,0,-2.25),h(H),h(I(de(2.8,.08,.35,.02),z,-2.2,2.55,-2.8)),["#ff8a5b","#ffd166","#7bd88f","#ff6f8e","#b9a6ff"].forEach((N,ae)=>{h(I(new Ce(.17,.17,.4,14),new zt({color:N,transparent:!0,opacity:.85}),-3.3+ae*.55,2.8,-2.8)),h(I(new Ce(.15,.15,.06,12),z,-3.3+ae*.55,3.03,-2.8))}),h(I(de(2,1.6,.1,.05),b(16777215),1.8,3.1,-2.88,!1)),h(I(new vt(1.8,1.4),new Je({map:Br(new Date().getHours())}),1.8,3.1,-2.82,!1));let ee=h(I(new ni(.22,20),new Je({color:16769658}),2.25,3.4,-2.8,!1));f.push(N=>{ee.scale.setScalar(1+Math.sin(N*2)*.06)}),h(I(new Ce(.9,.9,.08,24),z,-2,.85,1.4)),h(I(new Ce(.1,.1,.85,10),z,-2,.42,1.4)),[[-2.9,1.4],[-1.1,1.4]].forEach(N=>{h(I(de(.5,.08,.5,.03),b(16748480),N[0],.5,N[1])),h(I(de(.07,.5,.07,.02),z,N[0]-.2,.25,N[1]-.2)),h(I(de(.07,.5,.07,.02),z,N[0]+.2,.25,N[1]+.2))}),h(oe(.25,b(16740175),1,.85,1,-2,1.05,1.4)),h(oe(.2,b(16769658),1,.9,1,-1.65,.98,1.55)),h(I(new Ce(.02,.02,1.6,6),b(7829367),-2,4.3,1.4,!1));let Se=h(I(new Pt(.5,.45,20,1,!0),b(16757575,{emissive:16753210,emissiveIntensity:.6,side:Zt}),-2,3.45,1.4,!1)),se=new sn(16769192,.8,12);se.position.set(-1,3.4,1.8),a.add(se),ee.visible=!1,k.forEach(N=>{N.visible=!1}),f.push(jo(u,-.18,1.5,-2.5,8,{size:.3,rise:1.5,op:.5,speed:.28}));{let N=new Te;N.position.set(2.2,1.08,-2.4),N.add(oe(.2,b(16757705,{roughness:.45}),1,.85,1,0,.18,0)),N.add(oe(.06,b(16748456),1,1,1,0,.4,0));let ae=I(new Ce(.03,.05,.22,8),b(16757705),.24,.24,0);ae.rotation.z=-.9,N.add(ae),h(N),f.push(jo(u,2.5,1.45,-2.4,5,{size:.16,rise:.8,op:.5,speed:.25}))}{let N=el("hills",1,.75);N.position.set(-2.6,3.75,-2.86),h(N)}[-4.2,-3.9,-3.6].forEach((N,ae)=>{h(I(new Ce(.01,.01,.5,4),b(8018490),N,3.55,-2.8,!1));let ge=oe(.13,b([7323481,9425002,12087194][ae]),.8,1.6,.8,N,3.1,-2.78);h(ge)}),f.push((N=>ae=>{N.material.opacity=.55+Math.sin(ae*1.7)*.05})(Uc(u,16762746,2.8,-2,3.8,1.4,.55))),Or(u,16773312,1.9,4.6,2.6,2,-2.2,.42,.2),f.push(Qo(u,34,[.6,.3,-.6,3.4,3.2,2.2],16773832,.05))}else if(e==="garden"){U=[2.5,0,1.7],T=1,A.visible=!1,h(I(de(26,1.6,.8,.3),b(7323481),0,.8,-2.7,!1));for(let H=0;H<12;H++)h(I(de(.22,1.2,.08,.03),b(15982520),-5.5+H*1,.7,-2.2));h(I(de(12,.1,.08,.02),b(15982520),0,.95,-2.18)),h(I(de(12,.1,.08,.02),b(15982520),0,.45,-2.18));let z=new Te;z.add(I(new Ce(.22,.32,2.4,10),b(10251075),0,1.2,0)),[[0,3,0],[-.9,2.6,.2],[.9,2.7,-.1],[.1,3.6,.1]].forEach(H=>z.add(oe(1,b(16758741),1.1,.95,1.1,H[0],H[1],H[2]))),z.position.set(-3.7,0,-1.6),h(z),f.push(H=>{z.rotation.z=Math.sin(H*.8)*.012});let ne=[];for(let H=0;H<10;H++){let ee=oe(.05,b(16763358),1.4,.3,1,0,0,0);ee.userData.o=Math.random()*6,ne.push(ee),h(ee)}f.push(H=>{ne.forEach((ee,Se)=>{let se=(H*.25+ee.userData.o)%1;ee.position.set(-3.7+Math.sin(H+Se)*1.6,3.4-se*3.3,-1.6+Math.cos(H*.8+Se)*1),ee.rotation.z=H*2+Se})});let xe=[0,1,2].map(H=>{let ee=new Te;return[0,.5,-.5].forEach(Se=>ee.add(oe(.5,new Je({color:16777215}),1.3,.8,.6,Se,Se*.1,0))),ee.position.set(-6+H*4,5.3+H*.4,-4),h(ee),ee});f.push(H=>{xe.forEach((ee,Se)=>{ee.position.x=(H*.25+Se*4+6)%16-8})});let ye=[],j=[];for(let H=0;H<6;H++){let ee=new Te;ee.userData.pick="plot"+H;let Se=I(de(1.35,.22,1.05,.1),b(8014634),0,.11,0);ee.add(Se),ee.userData.soil=Se,ee.add(I(de(1.5,.1,.1,.03),b(13209429),0,.22,.58)),ee.add(I(de(1.5,.1,.1,.03),b(13209429),0,.22,-.58));let se=new Te;se.position.y=.22,ee.add(se),ee.userData.plant=se;let N=oe(.12,new Je({color:16777215}),1,1,.3,0,.55,.62);N.visible=!0,ee.add(N),ee.userData.hint=N,ee.position.set(-2.3+H%3*1.7,0,-1.55+Math.floor(H/3)*1.3),h(ee),ye.push(ee)}w.set=H=>{ye.forEach((ee,Se)=>{let se=H&&H[Se],N=ee.userData.plant;for(;N.children.length;){let q=N.children[0];N.remove(q),q.geometry&&q.geometry.dispose()}if(ee.userData.soil.material.color.setHex(se&&se.w?5912093:8014634),ee.userData.hint.visible=!se,ee.userData.hint.material.color.setHex(16777215),!se)return;let ae=b(6079587),ge=b(4105802),be=se.stage;if(be===0)[-.12,.12].forEach(q=>N.add(oe(.1,ae,1,1.4,.5,q,.1,0))),N.add(I(new Ce(.02,.02,.15,5),ge,0,.07,0));else if(be===1){for(let q=0;q<4;q++){let re=q/4*Math.PI*2,me=oe(.16,ae,1.5,.35,.7,Math.cos(re)*.16,.25,Math.sin(re)*.16);me.rotation.y=-re,N.add(me)}N.add(I(new Ce(.03,.03,.3,6),ge,0,.15,0))}else{for(let q=0;q<6;q++){let re=q/6*Math.PI*2,me=oe(.2,be===2?ae:ge,1.6,.35,.7,Math.cos(re)*.22,.32,Math.sin(re)*.22);me.rotation.y=-re,N.add(me)}if(N.add(I(new Ce(.04,.04,.4,6),ge,0,.2,0)),be===3){let q={tomate:[16730685,.17,1],carotte:[16747039,.12,2],fraise:[16727406,.12,1],herbe:[3129173,.1,0],citrouille:[16747039,.3,1],ciboulette:[3129173,.07,0],piment:[14688288,.1,2]}[se.c]||[16765503,.15,1];if(q[2]===1)for(let me=0;me<3;me++)N.add(oe(q[1],b(q[0]),1,se.c==="citrouille"?.8:1,1,(me-1)*.28,.2+me%2*.12,.3));else if(q[2]===2)for(let me=0;me<4;me++){let Ae=I(new Pt(q[1],.45,10),b(q[0]),(me-1.5)*.22,.38,.2);Ae.rotation.z=Math.PI,N.add(Ae)}else for(let me=0;me<6;me++)N.add(I(new Ce(.02,.03,.6,5),b(q[0]),(me-2.5)*.1,.45,.1));let re=oe(.08,new Je({color:16769658}),1,1,1,0,.85,0);re.userData.twinkle=!0,N.add(re)}}})};let Q=new Te;Q.userData.pick="can",Q.add(I(new Ce(.28,.26,.4,16),b(5686976),0,.2,0));{let H=I(new Ce(.04,.05,.5,8),b(5686976),.35,.4,0);H.rotation.z=-.8,Q.add(H)}Q.add(I(new at(.16,.025,8,14,Math.PI),b(4171938),-.12,.45,0)),Q.position.set(-3.2,0,1.3),h(Q);let ie=[0,1,2].map(H=>{let ee=new Te;return[-1,1].forEach(Se=>ee.add(oe(.12,b([16748480,16769658,9362431][H]),1.2,.2,.9,Se*.1,0,0))),ee.add(oe(.04,b(2759518),1,1,2,0,0,0)),h(ee),ee});f.push(H=>{ie.forEach((ee,Se)=>{ee.position.set(Math.sin(H*.7+Se*2)*3.2,1.5+Math.sin(H*1.3+Se)*.5,-.3+Math.cos(H*.5+Se*2)*1.4),ee.rotation.y=H+Se,ee.children.forEach((se,N)=>{N<2&&(se.rotation.z=(N?-1:1)*Math.sin(H*16+Se)*.8)})})}),a.fog=new nr(12577023,14,30);let k=new sn(16774080,.5,14);k.position.set(0,4,3),a.add(k);for(let H=0;H<20;H++){let ee=oe(.7+H%3*.14,b([7323481,5942860,8703075][H%3]),1.1,.9,.9,-9+H*.95,1.55+H%2*.14,-2.75);h(ee)}{let H=Oc(77),ee=new ms(new Ms(.075,8,6),new zt({roughness:.8}),90),Se=new ms(new Pt(.04,.22,4),new zt({color:6273366,roughness:1}),110),se=new dt,N=[16748468,16769658,16777215,13219583,16753515];for(let ae=0;ae<90;ae++){let ge=(H()-.5)*16,be=.5+H()*5.5;be<1.2&&ge>-3.4&&ge<2.2&&(be+=1.2),se.makeTranslation(ge,.2,be),ee.setMatrixAt(ae,se),ee.setColorAt(ae,new et(N[ae%5]))}for(let ae=0;ae<110;ae++){let ge=(H()-.5)*18,be=-.4+H()*7;se.makeTranslation(ge,.14,be),Se.setMatrixAt(ae,se)}h(ee),h(Se),ee.castShadow=!1,Se.castShadow=!1}[-3.5,.5,4.5].forEach((H,ee)=>Or(u,16773824,2.2,8,H,3.4,-.4,.5,.11-ee*.015)),f.push(Qo(u,46,[0,.4,.8,6,3.6,3.2],16773288,.07)),[[-3.5,3.2],[-2.6,3.6],[-1.5,3.9]].forEach(H=>{let ee=I(new Ce(.4,.45,.07,12),b(14275268),H[0],.04,H[1]);h(ee)})}else if(e==="bath"){U=[1.7,0,1.6],T=1.2;let z=b(16777215,{roughness:.3}),ne=b(8177407),xe=new Te;xe.userData.pick="tub",xe.add(I(de(3,.9,1.4,.35),z,0,.45,0)),xe.add(I(de(2.6,.12,1,.2),b(10476799,{emissive:7324927,emissiveIntensity:.25}),0,.88,0));let ye=[];for(let ie=0;ie<10;ie++){let k=oe(.17+Math.random()*.1,b(16777215,{transparent:!0,opacity:.9}),1,1,1,-1+ie%5*.5,1+Math.random()*.15,-.2+Math.floor(ie/5)*.4);ye.push(k),xe.add(k)}f.push(ie=>{ye.forEach((k,H)=>{k.position.y=1+Math.abs(Math.sin(ie*1.2+H))*.12})}),xe.add(oe(.2,b(16769658),1.1,.95,1.1,.8,1.12,.1)),xe.add(oe(.07,b(16747039),1.4,.5,.8,.8,1.1,.28)),[-1.15,1.15].forEach(ie=>xe.add(I(new Ce(.1,.12,.2,10),b(13226716,{metalness:.5}),ie,0,.5))),xe.position.set(-2.1,0,-1.6),h(xe),h(I(new Ce(.05,.05,1,8),b(13226716,{metalness:.6}),-3.4,1.6,-2.7)),h(I(new Ce(.4,.15,.12,14),b(13226716,{metalness:.6}),-3,2.4,-2.6)),h(I(de(1.4,.9,.7,.1),z,2.5,.45,-2.45)),h(I(new Ce(.5,.4,.2,18),b(15398655),2.5,.95,-2.45)),h(I(new ni(.85,28),new Je({color:13627135}),2.5,2.4,-2.85,!1)),h(I(new at(.88,.07,10,28),b(16748480),2.5,2.4,-2.83)),h(I(new Ce(.9,.9,.05,24),b(16757713),0,.03,.6)),h(I(de(.9,.1,.06,.02),b(13226716),.5,2,-2.85)),h(I(de(.7,1,.06,.04),b(16748480),.5,1.4,-2.8));let j=[];for(let ie=0;ie<9;ie++){let k=oe(.1+Math.random()*.12,new Je({color:16777215,transparent:!0,opacity:.45}),1,1,1,0,0,0);k.userData.o=Math.random()*7,j.push(k),h(k)}f.push(ie=>{j.forEach((k,H)=>{let ee=(ie*.18+k.userData.o)%1;k.position.set(-3+H%5*1.5+Math.sin(ie+H)*.3,.5+ee*4,-1.5+H%3*.8)})});let Q=new sn(16773340,.8,12);Q.position.set(0,3.4,2),a.add(Q);{let ie=new Te;ie.position.set(-2.8,3.5,-2.86),ie.add(I(de(1.7,1.35,.1,.05),b(16777215),0,0,0,!1)),ie.add(I(new vt(1.5,1.15),new Je({map:Br(new Date().getHours())}),0,0,.06,!1)),ie.add(I(de(.06,1.2,.06,.02),b(16777215),0,0,.09,!1)),h(ie)}Or(u,16773312,1.6,4.4,-1.9,2,-2.2,.42,.18);{let ie=el("sea",.7,.52);ie.position.set(1.95,3.75,-2.86),h(ie)}f.push(jo(u,-2.1,1,-1.6,10,{size:.5,rise:2,op:.45,speed:.16})),[-3.1,-1.2].forEach(ie=>{h(I(new Ce(.07,.07,.22,10),b(16774108),ie,1.08,-2.62)),h(oe(.035,new Je({color:16765802}),1,1.5,1,ie,1.26,-2.62)),f.push((k=>H=>{k.material.opacity=.7+Math.sin(H*7+ie)*.12})(Uc(u,16758106,.9,ie,1.28,-2.58,.7)))});{h(I(new Ce(.01,.01,.9,4),b(8018490),3.9,3.7,-2.5,!1)),h(I(new Ce(.22,.14,.26,12),b(16758938),3.9,3.1,-2.5));for(let ie=0;ie<7;ie++){let k=ie/7*6.28;h(oe(.12,b(7327610),.7,2.2,.5,3.9+Math.cos(k)*.2,2.75-ie%3*.12,-2.5+Math.sin(k)*.2))}}f.push(Qo(u,22,[-.5,.3,-.5,3.2,3,2],16774880,.05))}else if(e==="dentist"){U=[1.5,0,1.5],T=1.15;let z=b(16777215,{roughness:.4}),ne=b(5686976),xe=b(12569046,{metalness:.5,roughness:.3});h(I(new Ce(.5,.6,.18,24),xe,-1.7,.09,.4)),h(I(new Ce(.12,.12,.6,12),xe,-1.7,.45,.4)),h(I(de(.95,.22,1.2,.1),ne,-1.7,.85,.4));let ye=h(I(de(.9,1.3,.2,.1),ne,-1.7,1.35,-.3));ye.rotation.x=-.55,h(I(de(.5,.3,.16,.06),ne,-1.7,2,-.62)),[-1,1].forEach(N=>h(I(de(.1,.1,.8,.04),z,-1.7+N*.55,1.15,.35))),h(I(new Ce(.05,.05,2.2,8),xe,-1.7,2.9,.1,!1));let j=h(I(de(1.4,.07,.07,.02),xe,-1,3.9,.1,!1)),Q=h(I(new Ce(.42,.3,.16,20),b(16774857,{emissive:16773800,emissiveIntensity:.9}),-.4,3.7,.2,!1)),ie=new sn(16773824,.7,9);ie.position.set(-.6,3.4,1),a.add(ie),h(I(de(.7,.9,.5,.06),z,-3,.45,.4)),h(I(de(.6,.04,.4,.02),xe,-3,.92,.4)),[0,1,2].forEach(N=>h(I(new Ce(.015,.015,.34,6),b([16740238,5686976,16769658][N],{metalness:.4}),-3.15+N*.12,1.1,.42)).rotation.z=.5-N*.4),h(I(new Ce(.6,.7,.3,24),z,3,.15,0));let k=new Te;k.add(oe(.52,z,1.15,1,.95,0,1.2,0)),[-1,1].forEach(N=>k.add(I(new Pt(.26,.6,16),z,N*.3,.62,0))),k.children.slice(-2).forEach(N=>{N.rotation.x=Math.PI}),[-1,1].forEach(N=>k.add(oe(.06,b(2759518),1,1.4,.5,N*.2,1.3,.48))),k.add(I(new at(.14,.025,8,16,Math.PI),b(2759518),0,1.1,.5)).rotation.z=Math.PI,[-1,1].forEach(N=>k.add(oe(.07,b(16748480),1.2,.7,.4,N*.34,1.12,.46))),k.position.set(3,.3,0),h(k),f.push(N=>{k.position.y=.3+Math.sin(N*1.6)*.06,k.rotation.y=Math.sin(N*.8)*.25}),h(I(de(2.4,1,.6,.08),b(16777215),.5,.5,-2.2)),h(I(de(2.5,.08,.7,.03),ne,.5,1.02,-2.2));let H=I(new vt(1.5,1.9),new Je({map:At(256,330,(N,ae,ge)=>{N.fillStyle="#fff",N.fillRect(0,0,ae,ge),N.fillStyle="#56c6c0",N.fillRect(0,0,ae,26),N.fillStyle="#2a1b5e",N.font="700 34px DynaPuff, Fredoka, sans-serif",N.textAlign="center",N.fillText("Brosse-toi",ae/2,80),N.fillText("les dents !",ae/2,120),N.font="120px serif",N.fillText("\u{1F9B7}",ae/2,250)})}),3.4,3.2,-2.85,!1);h(H),[[-3.6,-1.6,.5],[3.7,1.9,.42],[0,-1.5,.3]].forEach(N=>{let ae=oe(N[2],b(16747039),1.15,.85,1.1,N[0],N[2]*.8,N[1]);h(ae),h(I(new Ce(.04,.06,.18,8),b(4028970),N[0],N[2]*1.5,N[1])),[-1,1].forEach(ge=>h(I(new Pt(.07,.12,3),b(16773800,{emissive:16765514,emissiveIntensity:1}),N[0]+ge*N[2]*.35,N[2]*.9,N[1]+N[2]*.95)))});let ee=new Te;ee.add(oe(.38,b(16777215,{transparent:!0,opacity:.85}),1,1.2,1,0,0,0)),[-1,1].forEach(N=>ee.add(oe(.05,b(2759518),1,1.4,.5,N*.13,.08,.34))),ee.add(oe(.06,b(2759518),1,1.2,.5,0,-.08,.35)),ee.position.set(-3.7,2.6,-.6),h(ee),f.push(N=>{ee.position.y=2.6+Math.sin(N*1.3)*.25,ee.rotation.y=Math.sin(N*.7)*.4});let Se=[];for(let N=0;N<4;N++){let ae=new Te;[-1,1].forEach(ge=>{let be=oe(.14,b(1906240),1.6,.4,.2,ge*.16,0,0);be.userData.sd=ge,ae.add(be)}),ae.add(oe(.07,b(1906240),1,1,1,0,0,0)),ae.userData.i=N,Se.push(ae),h(ae)}f.push(N=>{Se.forEach((ae,ge)=>{let be=N*.5+ge*1.6;ae.position.set(Math.sin(be)*3.2,3.3+Math.sin(N*2+ge)*.3,-1.2+Math.cos(be)*1),ae.rotation.y=-be,ae.children.forEach(q=>{q.userData.sd&&(q.rotation.z=q.userData.sd*Math.sin(N*14+ge)*.7)})})});let se=new sn(16757611,.7,12);se.position.set(2,2.5,2.5),a.add(se)}else{let ye=function(H,ee,Se,se){let N=xe;N.fillStyle="#12082c",N.fillRect(0,0,512,256),N.textAlign="center",N.textBaseline="middle",N.font="700 22px DynaPuff, Fredoka, sans-serif",N.fillStyle="#7df9ff",N.fillText(se||"\u266A Karaok\xE9 \u266A",256,28);let ae=38;if(H){for(N.font="700 38px DynaPuff, Fredoka, sans-serif";N.measureText(H).width>470&&ae>18;)ae-=2,N.font="700 "+ae+"px DynaPuff, Fredoka, sans-serif";N.fillStyle="#4b3a8f",N.fillText(H,256,120),N.save(),N.beginPath(),N.rect(256-N.measureText(H).width/2-4,80,(N.measureText(H).width+8)*Math.max(0,Math.min(1,Se||0)),80),N.clip(),N.fillStyle="#ff6fc8",N.fillText(H,256,120),N.restore()}ee&&(N.font="600 26px DynaPuff, Fredoka, sans-serif",N.fillStyle="#9d8cff",N.fillText(ee,256,200)),z.needsUpdate=!0};U=[0,.34,.6],T=1.3,h(I(de(5.6,.34,2.8,.1),b(5980118,{emissive:3810160,emissiveIntensity:.5}),0,.17,.6,!1)),h(I(de(5.7,.05,2.9,.02),new Je({color:16740296}),0,.36,.6,!1)).scale.set(1,1,1),[-1,1].forEach(H=>{h(I(de(1.4,5,.5,.15),b(14697851,{emissive:11545184,emissiveIntensity:.3}),H*3.3,2.5,-1.8)),h(I(de(1,1.7,.8,.08),b(2364487),H*2.9,.85,-1.2)),h(oe(.3,b(4468858),1,1,.5,H*2.9,.65,-.79)),h(oe(.16,b(4468858),1,1,.5,H*2.9,1.3,-.79))});let z=At(512,256,(H,ee,Se)=>{H.fillStyle="#12082c",H.fillRect(0,0,ee,Se)}),ne=I(new vt(3.6,1.8),new Je({map:z}),0,3.1,-2.8,!1);h(ne),h(I(de(3.8,2,.08,.05),new Je({color:8255999}),0,3.1,-2.9,!1));let xe=z.image.getContext("2d");ye("","",0,"\u266A Choisis une chanson \u266A"),l.userData.lyrics=ye;let j=I(new yr(.5,1),new zt({color:16777215,metalness:1,roughness:.15,flatShading:!0,emissive:10325247,emissiveIntensity:.5}),0,4.4,-.2,!1);h(j),h(I(new Ce(.01,.01,1.2,4),b(11184810),0,5.2,-.2,!1)),f.push(H=>{j.rotation.y=H*.8}),[16740296,8255999,16769658].forEach((H,ee)=>{let Se=I(new Pt(.9,4.2,20,1,!0),new Je({color:H,transparent:!0,opacity:.13,side:Zt,depthWrite:!1}),(ee-1)*2.2,2.4,-.4,!1);Se.position.y=2.6,h(Se),f.push(se=>{Se.rotation.z=Math.sin(se*.9+ee*2)*.35,Se.rotation.x=Math.cos(se*.7+ee)*.15})});let ie=[];for(let H=0;H<14;H++){let ee=I(de(.2,1,.12,.04),new Je({color:[16740296,8255999,16769658][H%3]}),-2.7+H*.42,.55,-1.6,!1);ie.push(ee),h(ee)}f.push(H=>{ie.forEach((ee,Se)=>{let se=y?.4+Math.abs(Math.sin(H*6+Se*.9))*1.6:.25+Math.abs(Math.sin(H*1.2+Se))*.15;ee.scale.y=se,ee.position.y=.4+se*.5})}),h(I(new Ce(.02,.02,1,6),b(13421772,{metalness:.6}),.9,.9,1.2,!1)),h(oe(.07,b(2759518),1,1.3,1,.9,1.45,1.2));let k=new sn(13081599,1.2,14);k.position.set(0,3,2),a.add(k)}function L(){v&&v.dispose(),v=Qt(t()),v.root.scale.setScalar(T),v.root.position.set(U[0]*(Z?.55:1),U[1],U[2]),v.face(e==="bakery"?.45:0),v.fx=(z,ne)=>c.emit(z,ne,v.root.position,T),a.add(v.root),v.setEmotion(y?"happy":"neutral")}L();function J(z,ne){if(M=ne,C&&(u.remove(C),C=null),e==="deco"&&z==="decor"&&ne&&zi[ne]){let xe=zi[ne](),ye=new nn().setFromObject(xe),j=ye.getSize(new W),Q=Math.max(.3,Math.min(1,1.9/Math.max(j.x,j.y,j.z,.1)));xe.scale.setScalar(Q);let ie=new nn().setFromObject(xe);xe.position.set(1.5-(ie.min.x+ie.max.x)/2,.2-ie.min.y,1.3-(ie.min.z+ie.max.z)/2),u.add(xe),C=xe}}function E(){let z=i.clientWidth||320,ne=i.clientHeight||300;s.setSize(z,ne,!1),r.style.width="100%",r.style.height="100%",l.aspect=z/ne,l.fov=z/ne<1?44:34,X=(z/ne<.8?9.6:6.6)*({garden:1.55,kitchen:1.12,bath:1.2}[e]||1),l.position.z=X,l.position.y=e==="garden"?5.6:1.9,Z=z/ne<.8,v&&(v.root.position.x=U[0]*(Z?.55:1)),l.updateProjectionMatrix()}new ResizeObserver(E).observe(i),E(),r.style.touchAction="none";let D=new Di,B=new Re;r.addEventListener("pointerup",z=>{if(!n.onPick)return;let ne=r.getBoundingClientRect();B.set((z.clientX-ne.left)/ne.width*2-1,-((z.clientY-ne.top)/ne.height)*2+1),D.setFromCamera(B,l);let xe=D.intersectObjects(u.children,!0)[0];if(!xe)return;let ye=xe.object;for(;ye&&!(ye.userData&&ye.userData.pick);)ye=ye.parent;ye&&ye.userData.pick&&n.onPick(ye.userData.pick)}),r.addEventListener("pointerup",()=>{v&&(v.hop(4.6),v.setEmotion("happy"),c.emit("heart",4,v.root.position,T),setTimeout(()=>v&&v.setEmotion(y?"happy":"neutral"),1400))});let le=new Hn,G=!0;"IntersectionObserver"in window&&new IntersectionObserver(z=>{G=z[0].isIntersecting},{threshold:.01}).observe(i);function ue(){if(!O)return;if(requestAnimationFrame(ue),!G||document.hidden){le.getDelta();return}let z=Math.min(.05,le.getDelta());P+=z,l.position.x=Math.sin(P*.25)*.35,l.lookAt(l.position.x*.3,e==="garden"?0:1.25,e==="garden"?-.5:0),f.forEach(ne=>ne(P)),C&&(C.rotation.y+=z*.5),y&&v?(v.setTalking(Math.sin(P*9)>-.2),v.face(Math.sin(P*2)*.35),v.st.y<.02&&Math.random()<z*1.2&&v.hop(2.6),Math.random()<z*2&&c.emit("star",1,v.root.position,T)):v&&(v.setTalking(!1),e!=="bakery"&&v.face(Math.sin(P*.6)*.3)),v&&v.update(z,P,!1,!1),c.update(z),Math.random()<z*.6&&c.emit("star",1,new W((Math.random()-.5)*6,1+Math.random()*2,.5),1),s.render(a,l)}return ue(),{setItem:J,setPlots(z){w.set(z)},rebuild(){L(),v.hop(3.6)},bubbles(){if(v){v.setEmotion("happy"),v.hop(4),c.emit("heart",6,v.root.position,T);for(let z=0;z<5;z++)setTimeout(()=>v&&c.emit("star",2,v.root.position,T),z*350)}},emote(z){v&&(v.setEmotion(z),v.hop(4))},sing(z){y=!!z,v&&v.setEmotion(y?"happy":"neutral")},lyrics(z,ne,xe,ye){l.userData.lyrics&&l.userData.lyrics(z,ne,xe,ye)},destroy(){O=!1,v&&v.dispose(),s.dispose(),s.forceContextLoss&&s.forceContextLoss(),r.parentNode&&r.parentNode.removeChild(r)}}}var Us=null,$o=null,Ko=null,Nc={};function mu(i,e){if(Nc[i])return Nc[i];try{Us||(Us=new Vn({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),Us.setPixelRatio(1),Us.setSize(256,256,!1),$o=new Sn,Os($o),Ko=new Rt(26,1,.1,30),Ko.position.set(0,1.25,4.6),Ko.lookAt(0,.78,0));let t=e();t.root.scale.setScalar(1.2),t.face(-.25),t.update(.016,.3,!1,!0),$o.add(t.root),Us.render($o,Ko);let n=Us.domElement.toDataURL("image/png");return t.dispose(),Nc[i]=n,n}catch{return""}}function Vx(i,e){return mu("a"+i+(e||""),()=>{let t=Qt(Hi(i));return e&&t.setEmotion(e),t})}function Wx(i,e){return mu("m"+(i||"")+(e||""),()=>{let t=Qt({mika:!0,acc:i?[i]:[]});return e&&t.setEmotion(e),t})}return Ru(Xx);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
