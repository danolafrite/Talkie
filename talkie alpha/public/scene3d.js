var Mika3DMod=(()=>{var rl=Object.defineProperty;var Su=Object.getOwnPropertyDescriptor;var Eu=Object.getOwnPropertyNames;var Tu=Object.prototype.hasOwnProperty;var wu=(i,e)=>{for(var t in e)rl(i,t,{get:e[t],enumerable:!0})},Au=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Eu(e))!Tu.call(i,s)&&s!==t&&rl(i,s,{get:()=>e[s],enumerable:!(n=Su(e,s))||n.enumerable});return i};var Ru=i=>Au(rl({},"__esModule",{value:!0}),i);var Xx={};wu(Xx,{AV_ACC:()=>lu,AV_COLORS:()=>ru,AV_EARS:()=>au,AV_FACE:()=>ou,AV_SHAPE:()=>cu,AV_TAIL:()=>hu,DECOR_IDS:()=>Lx,avatarOpts:()=>Vi,avatarPng:()=>Vx,createCharacter:()=>$t,init:()=>Ux,initClass:()=>Bx,initInterior:()=>Gx,initPlaza:()=>Hx,initPreview:()=>Fx,initStage:()=>Ox,mikaPng:()=>Wx,normAv:()=>fu});var Lh=0,Yl=1,Dh=2;var Ui=1,Nh=2,Cs=3,xi=0,Vt=1,Wt=2,Gn=0,Ps=1,_i=2,Zl=3,Jl=4,Uh=5;var Fi=100,Fh=101,Oh=102,Bh=103,Hh=104,zh=200,kh=201,Gh=202,Vh=203,$l=204,Kl=205,Wh=206,Xh=207,qh=208,Yh=209,Zh=210,Jh=211,$h=212,Kh=213,jh=214,ya=0,va=1,Ma=2,us=3,ba=4,Sa=5,Ea=6,Ta=7,jl=0,Qh=1,ef=2,Tn=0,Ql=1,ec=2,tc=3,nc=4,ic=5,sc=6,Ar=7;var rc=300,yi=301,Oi=302,no=303,io=304,Rr=306,bn=1e3,Nn=1001,wa=1002,Bt=1003,tf=1004;var Cr=1005;var Gt=1006,so=1007;var vi=1008;var rn=1009,ac=1010,oc=1011,Is=1012,ro=1013,wn=1014,pn=1015,An=1016,ao=1017,oo=1018,Ls=1020,lc=35902,cc=35899,hc=1021,fc=1022,mn=1023,Un=1026,Mi=1027,lo=1028,co=1029,bi=1030,ho=1031;var fo=1033,Pr=33776,Ir=33777,Lr=33778,Dr=33779,uo=35840,po=35841,mo=35842,go=35843,xo=36196,_o=37492,yo=37496,vo=37488,Mo=37489,Nr=37490,bo=37491,So=37808,Eo=37809,To=37810,wo=37811,Ao=37812,Ro=37813,Co=37814,Po=37815,Io=37816,Lo=37817,Do=37818,No=37819,Uo=37820,Fo=37821,Oo=36492,Bo=36494,Ho=36495,zo=36283,ko=36284,Ur=36285,Go=36286;var er=2300,Aa=2301,xa=2302,Dl=2303,Nl=2400,Ul=2401,Fl=2402;var nf=3200;var Vo=0,sf=1,si="",kt="srgb",tr="srgb-linear",nr="linear",xt="srgb";var _a=7680;var rf=519,af=512,of=513,lf=514,Wo=515,cf=516,hf=517,Xo=518,ff=519,uc=35044;var dc="300 es",Mn=2e3,ds=2001;function Cu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Pu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uf(){let i=ir("canvas");return i.style.display="block",i}var Kc={},ps=null;function sr(...i){let e="THREE."+i.shift();ps?ps("log",e,...i):console.log(e,...i)}function df(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function et(...i){i=df(i);let e="THREE."+i.shift();if(ps)ps("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Qe(...i){i=df(i);let e="THREE."+i.shift();if(ps)ps("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Pi(...i){let e=i.join(" ");e in Kc||(Kc[e]=!0,et(...i))}function pf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var mf={[ya]:va,[Ma]:Ea,[ba]:Ta,[us]:Sa,[va]:ya,[Ea]:Ma,[Ta]:ba,[Sa]:us},Fn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var al=Math.PI/180,Ra=180/Math.PI;function Qn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function Iu(i,e){return(i%e+e)%e}function ol(i,e,t){return(1-t)*i+t*e}function Dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ne=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},On=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],f=n[s+2],u=n[s+3],h=r[a+0],d=r[a+1],_=r[a+2],y=r[a+3];if(u!==y||c!==h||l!==d||f!==_){let x=c*h+l*d+f*_+u*y;x<0&&(h=-h,d=-d,_=-_,y=-y,x=-x);let p=1-o;if(x<.9995){let C=Math.acos(x),w=Math.sin(C);p=Math.sin(p*C)/w,o=Math.sin(o*C)/w,c=c*p+h*o,l=l*p+d*o,f=f*p+_*o,u=u*p+y*o}else{c=c*p+h*o,l=l*p+d*o,f=f*p+_*o,u=u*p+y*o;let C=1/Math.sqrt(c*c+l*l+f*f+u*u);c*=C,l*=C,f*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],f=n[s+3],u=r[a],h=r[a+1],d=r[a+2],_=r[a+3];return e[t]=o*_+f*u+c*d-l*h,e[t+1]=c*_+f*h+l*u-o*d,e[t+2]=l*_+f*d+o*h-c*u,e[t+3]=f*_-o*u-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),f=o(s/2),u=o(r/2),h=c(n/2),d=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=h*f*u+l*d*_,this._y=l*d*u-h*f*_,this._z=l*f*_+h*d*u,this._w=l*f*u-h*d*_;break;case"YXZ":this._x=h*f*u+l*d*_,this._y=l*d*u-h*f*_,this._z=l*f*_-h*d*u,this._w=l*f*u+h*d*_;break;case"ZXY":this._x=h*f*u-l*d*_,this._y=l*d*u+h*f*_,this._z=l*f*_+h*d*u,this._w=l*f*u-h*d*_;break;case"ZYX":this._x=h*f*u-l*d*_,this._y=l*d*u+h*f*_,this._z=l*f*_-h*d*u,this._w=l*f*u+h*d*_;break;case"YZX":this._x=h*f*u+l*d*_,this._y=l*d*u+h*f*_,this._z=l*f*_-h*d*u,this._w=l*f*u-h*d*_;break;case"XZY":this._x=h*f*u-l*d*_,this._y=l*d*u-h*f*_,this._z=l*f*_+h*d*u,this._w=l*f*u+h*d*_;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],u=t[10],h=n+o+u;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(f-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+f)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+a*o+s*l-r*c,this._y=s*f+a*c+r*o-n*l,this._z=r*f+a*l+n*c-s*o,this._w=a*f-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),f=Math.sin(l);c=Math.sin(c*l)/f,t=Math.sin(t*l)/f,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),f=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*f,this.y=n+c*f+o*l-r*u,this.z=s+c*u+r*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ll.copy(this).projectOnVector(e),this.sub(ll)}reflect(e){return this.sub(ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ll=new q,jc=new On,nt=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let f=this.elements;return f[0]=e,f[1]=s,f[2]=o,f[3]=t,f[4]=r,f[5]=c,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],f=n[4],u=n[7],h=n[2],d=n[5],_=n[8],y=s[0],x=s[3],p=s[6],C=s[1],w=s[4],v=s[7],P=s[2],T=s[5],R=s[8];return r[0]=a*y+o*C+c*P,r[3]=a*x+o*w+c*T,r[6]=a*p+o*v+c*R,r[1]=l*y+f*C+u*P,r[4]=l*x+f*w+u*T,r[7]=l*p+f*v+u*R,r[2]=h*y+d*C+_*P,r[5]=h*x+d*w+_*T,r[8]=h*p+d*v+_*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-n*r*f+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],u=f*a-o*l,h=o*c-f*r,d=l*r-a*c,_=t*u+n*h+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return e[0]=u*y,e[1]=(s*l-f*n)*y,e[2]=(o*n-s*a)*y,e[3]=h*y,e[4]=(f*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=d*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Pi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cl.makeScale(e,t)),this}rotate(e){return Pi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cl.makeRotation(-e)),this}translate(e,t){return Pi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},cl=new nt,Qc=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eh=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lu(){let i={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?nr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Pi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Pi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[tr]:{primaries:e,whitePoint:n,transfer:nr,toXYZ:Qc,fromXYZ:eh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Qc,fromXYZ:eh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),i}var ct=Lu();function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Yi,Ca=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yi===void 0&&(Yi=ir("canvas")),Yi.width=e.width,Yi.height=e.height;let s=Yi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ir("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ei(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Du=0,ms=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(hl(s[a].image)):r.push(hl(s[a]))}else r=hl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function hl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ca.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}var Nu=0,fl=new q,Qt=class i extends Fn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Nn,s=Nn,r=Gt,a=vi,o=mn,c=rn,l=i.DEFAULT_ANISOTROPY,f=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Qn(),this.name="",this.source=new ms(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fl).x}get height(){return this.source.getSize(fl).y}get depth(){return this.source.getSize(fl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bn:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bn:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=rc;Qt.DEFAULT_ANISOTROPY=1;var wt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],f=c[4],u=c[8],h=c[1],d=c[5],_=c[9],y=c[2],x=c[6],p=c[10];if(Math.abs(f-h)<.01&&Math.abs(u-y)<.01&&Math.abs(_-x)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+y)<.1&&Math.abs(_+x)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,v=(d+1)/2,P=(p+1)/2,T=(f+h)/4,R=(u+y)/4,m=(_+x)/4;return w>v&&w>P?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=R/n):v>P?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=m/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=R/r,s=m/r),this.set(n,s,r,t),this}let C=Math.sqrt((x-_)*(x-_)+(u-y)*(u-y)+(h-f)*(h-f));return Math.abs(C)<.001&&(C=1),this.x=(x-_)/C,this.y=(u-y)/C,this.z=(h-f)/C,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pa=class extends Fn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Qt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ms(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends Pa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},rr=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ia=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var dt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,f,u,h,d,_,y,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,f,u,h,d,_,y,x)}set(e,t,n,s,r,a,o,c,l,f,u,h,d,_,y,x){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=f,p[10]=u,p[14]=h,p[3]=d,p[7]=_,p[11]=y,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Zi.setFromMatrixColumn(e,0).length(),r=1/Zi.setFromMatrixColumn(e,1).length(),a=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),f=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let h=a*f,d=a*u,_=o*f,y=o*u;t[0]=c*f,t[4]=-c*u,t[8]=l,t[1]=d+_*l,t[5]=h-y*l,t[9]=-o*c,t[2]=y-h*l,t[6]=_+d*l,t[10]=a*c}else if(e.order==="YXZ"){let h=c*f,d=c*u,_=l*f,y=l*u;t[0]=h+y*o,t[4]=_*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*f,t[9]=-o,t[2]=d*o-_,t[6]=y+h*o,t[10]=a*c}else if(e.order==="ZXY"){let h=c*f,d=c*u,_=l*f,y=l*u;t[0]=h-y*o,t[4]=-a*u,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*f,t[9]=y-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let h=a*f,d=a*u,_=o*f,y=o*u;t[0]=c*f,t[4]=_*l-d,t[8]=h*l+y,t[1]=c*u,t[5]=y*l+h,t[9]=d*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let h=a*c,d=a*l,_=o*c,y=o*l;t[0]=c*f,t[4]=y-h*u,t[8]=_*u+d,t[1]=u,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=d*u+_,t[10]=h-y*u}else if(e.order==="XZY"){let h=a*c,d=a*l,_=o*c,y=o*l;t[0]=c*f,t[4]=-u,t[8]=l*f,t[1]=h*u+y,t[5]=a*f,t[9]=d*u-_,t[2]=_*u-d,t[6]=o*f,t[10]=y*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uu,e,Fu)}lookAt(e,t,n){let s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),li.crossVectors(n,an),li.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),li.crossVectors(n,an)),li.normalize(),Wr.crossVectors(an,li),s[0]=li.x,s[4]=Wr.x,s[8]=an.x,s[1]=li.y,s[5]=Wr.y,s[9]=an.y,s[2]=li.z,s[6]=Wr.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],f=n[1],u=n[5],h=n[9],d=n[13],_=n[2],y=n[6],x=n[10],p=n[14],C=n[3],w=n[7],v=n[11],P=n[15],T=s[0],R=s[4],m=s[8],L=s[12],O=s[1],Y=s[5],$=s[9],B=s[13],A=s[2],D=s[6],W=s[10],E=s[14],N=s[3],z=s[7],le=s[11],G=s[15];return r[0]=a*T+o*O+c*A+l*N,r[4]=a*R+o*Y+c*D+l*z,r[8]=a*m+o*$+c*W+l*le,r[12]=a*L+o*B+c*E+l*G,r[1]=f*T+u*O+h*A+d*N,r[5]=f*R+u*Y+h*D+d*z,r[9]=f*m+u*$+h*W+d*le,r[13]=f*L+u*B+h*E+d*G,r[2]=_*T+y*O+x*A+p*N,r[6]=_*R+y*Y+x*D+p*z,r[10]=_*m+y*$+x*W+p*le,r[14]=_*L+y*B+x*E+p*G,r[3]=C*T+w*O+v*A+P*N,r[7]=C*R+w*Y+v*D+P*z,r[11]=C*m+w*$+v*W+P*le,r[15]=C*L+w*B+v*E+P*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],u=e[6],h=e[10],d=e[14],_=e[3],y=e[7],x=e[11],p=e[15],C=c*d-l*h,w=o*d-l*u,v=o*h-c*u,P=a*d-l*f,T=a*h-c*f,R=a*u-o*f;return t*(y*C-x*w+p*v)-n*(_*C-x*P+p*T)+s*(_*w-y*P+p*R)-r*(_*v-y*T+x*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],f=e[10];return t*(a*f-o*l)-n*(r*f-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],u=e[9],h=e[10],d=e[11],_=e[12],y=e[13],x=e[14],p=e[15],C=t*o-n*a,w=t*c-s*a,v=t*l-r*a,P=n*c-s*o,T=n*l-r*o,R=s*l-r*c,m=f*y-u*_,L=f*x-h*_,O=f*p-d*_,Y=u*x-h*y,$=u*p-d*y,B=h*p-d*x,A=C*B-w*$+v*Y+P*O-T*L+R*m;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/A;return e[0]=(o*B-c*$+l*Y)*D,e[1]=(s*$-n*B-r*Y)*D,e[2]=(y*R-x*T+p*P)*D,e[3]=(h*T-u*R-d*P)*D,e[4]=(c*O-a*B-l*L)*D,e[5]=(t*B-s*O+r*L)*D,e[6]=(x*v-_*R-p*w)*D,e[7]=(f*R-h*v+d*w)*D,e[8]=(a*$-o*O+l*m)*D,e[9]=(n*O-t*$-r*m)*D,e[10]=(_*T-y*v+p*C)*D,e[11]=(u*v-f*T-d*C)*D,e[12]=(o*L-a*Y-c*m)*D,e[13]=(t*Y-n*L+s*m)*D,e[14]=(y*w-_*P-x*C)*D,e[15]=(f*P-u*w+h*C)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,f=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,f*o+n,f*c-s*a,0,l*c-s*o,f*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,f=a+a,u=o+o,h=r*l,d=r*f,_=r*u,y=a*f,x=a*u,p=o*u,C=c*l,w=c*f,v=c*u,P=n.x,T=n.y,R=n.z;return s[0]=(1-(y+p))*P,s[1]=(d+v)*P,s[2]=(_-w)*P,s[3]=0,s[4]=(d-v)*T,s[5]=(1-(h+p))*T,s[6]=(x+C)*T,s[7]=0,s[8]=(_+w)*R,s[9]=(x-C)*R,s[10]=(1-(h+y))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Zi.set(s[0],s[1],s[2]).length(),o=Zi.set(s[4],s[5],s[6]).length(),c=Zi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_n.copy(this);let l=1/a,f=1/o,u=1/c;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=f,_n.elements[5]*=f,_n.elements[6]*=f,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Mn,c=!1){let l=this.elements,f=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),_,y;if(c)_=r/(a-r),y=a*r/(a-r);else if(o===Mn)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===ds)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Mn,c=!1){let l=this.elements,f=2/(t-e),u=2/(n-s),h=-(t+e)/(t-e),d=-(n+s)/(n-s),_,y;if(c)_=1/(a-r),y=a/(a-r);else if(o===Mn)_=-2/(a-r),y=-(a+r)/(a-r);else if(o===ds)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zi=new q,_n=new dt,Uu=new q(0,0,0),Fu=new q(1,1,1),li=new q,Wr=new q,an=new q,th=new dt,nh=new On,ti=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],f=s[9],u=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(th,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nh.setFromEuler(this),this.setFromQuaternion(nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var gs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ou=0,ih=new q,Ji=new On,Yn=new dt,Xr=new q,Gs=new q,Bu=new q,Hu=new On,sh=new q(1,0,0),rh=new q(0,1,0),ah=new q(0,0,1),oh={type:"added"},zu={type:"removed"},$i={type:"childadded",child:null},ul={type:"childremoved",child:null},Ht=class i extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new q,t=new ti,n=new On,s=new q(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new nt}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(sh,e)}rotateY(e){return this.rotateOnAxis(rh,e)}rotateZ(e){return this.rotateOnAxis(ah,e)}translateOnAxis(e,t){return ih.copy(e).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sh,e)}translateY(e){return this.translateOnAxis(rh,e)}translateZ(e){return this.translateOnAxis(ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xr.copy(e):Xr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Gs,Xr,this.up):Yn.lookAt(Xr,Gs,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(Yn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oh),$i.child=e,this.dispatchEvent($i),$i.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zu),ul.child=e,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oh),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,Bu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,Hu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),u=a(e.shapes),h=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let c=[];for(let l in o){let f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ht.DEFAULT_UP=new q(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Re=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},ku={type:"move"},xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let y of e.hand.values()){let x=t.getJointPose(y,n),p=this._getHandJoint(l,y);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}let f=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=f.position.distanceTo(u.position),d=.02,_=.005;l.inputState.pinching&&h>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ku)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},qr={h:0,s:0,l:0};function dl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var tt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=Iu(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=dl(a,r,e+1/3),this.g=dl(a,r,e),this.b=dl(a,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){let n=gf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return ct.workingToColorSpace(Yt.copy(this),e),Math.round(lt(Yt.r*255,0,255))*65536+Math.round(lt(Yt.g*255,0,255))*256+Math.round(lt(Yt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Yt.copy(this),t);let n=Yt.r,s=Yt.g,r=Yt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,f=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=f<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=kt){ct.workingToColorSpace(Yt.copy(this),e);let t=Yt.r,n=Yt.g,s=Yt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(qr);let n=ol(ci.h,qr.h,t),s=ol(ci.s,qr.s,t),r=ol(ci.l,qr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new tt;tt.NAMES=gf;var ar=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new tt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Sn=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},yn=new q,Zn=new q,pl=new q,Jn=new q,Ki=new q,ji=new q,lh=new q,ml=new q,gl=new q,xl=new q,_l=new wt,yl=new wt,vl=new wt,jn=class i{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),yn.subVectors(e,t),s.cross(yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){yn.subVectors(s,t),Zn.subVectors(n,t),pl.subVectors(e,t);let a=yn.dot(yn),o=yn.dot(Zn),c=yn.dot(pl),l=Zn.dot(Zn),f=Zn.dot(pl),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let h=1/u,d=(l*c-o*f)*h,_=(a*f-o*c)*h;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(a,Jn.y),c.addScaledVector(o,Jn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return _l.setScalar(0),yl.setScalar(0),vl.setScalar(0),_l.fromBufferAttribute(e,t),yl.fromBufferAttribute(e,n),vl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(_l,r.x),a.addScaledVector(yl,r.y),a.addScaledVector(vl,r.z),a}static isFrontFacing(e,t,n,s){return yn.subVectors(n,t),Zn.subVectors(e,t),yn.cross(Zn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),yn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ki.subVectors(s,n),ji.subVectors(r,n),ml.subVectors(e,n);let c=Ki.dot(ml),l=ji.dot(ml);if(c<=0&&l<=0)return t.copy(n);gl.subVectors(e,s);let f=Ki.dot(gl),u=ji.dot(gl);if(f>=0&&u<=f)return t.copy(s);let h=c*u-f*l;if(h<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(Ki,a);xl.subVectors(e,r);let d=Ki.dot(xl),_=ji.dot(xl);if(_>=0&&d<=_)return t.copy(r);let y=d*l-c*_;if(y<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(ji,o);let x=f*_-d*u;if(x<=0&&u-f>=0&&d-_>=0)return lh.subVectors(r,s),o=(u-f)/(u-f+(d-_)),t.copy(s).addScaledVector(lh,o);let p=1/(x+y+h);return a=y*p,o=h*p,t.copy(n).addScaledVector(Ki,a).addScaledVector(ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nn=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Zr.subVectors(this.max,Vs),Qi.subVectors(e.a,Vs),es.subVectors(e.b,Vs),ts.subVectors(e.c,Vs),hi.subVectors(es,Qi),fi.subVectors(ts,es),Ti.subVectors(Qi,ts);let t=[0,-hi.z,hi.y,0,-fi.z,fi.y,0,-Ti.z,Ti.y,hi.z,0,-hi.x,fi.z,0,-fi.x,Ti.z,0,-Ti.x,-hi.y,hi.x,0,-fi.y,fi.x,0,-Ti.y,Ti.x,0];return!Ml(t,Qi,es,ts,Zr)||(t=[1,0,0,0,1,0,0,0,1],!Ml(t,Qi,es,ts,Zr))?!1:(Jr.crossVectors(hi,fi),t=[Jr.x,Jr.y,Jr.z],Ml(t,Qi,es,ts,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$n=[new q,new q,new q,new q,new q,new q,new q,new q],vn=new q,Yr=new nn,Qi=new q,es=new q,ts=new q,hi=new q,fi=new q,Ti=new q,Vs=new q,Zr=new q,Jr=new q,wi=new q;function Ml(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){wi.fromArray(i,r);let o=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),c=e.dot(wi),l=t.dot(wi),f=n.dot(wi);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}var Dt=new q,$r=new Ne,Gu=0,Zt=class extends Fn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uc,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$r.fromBufferAttribute(this,t),$r.applyMatrix3(e),this.setXY(t,$r.x,$r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var or=class extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var lr=class extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var _t=class extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Vu=new nn,Ws=new q,bl=new q,ni=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Vu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);let t=Ws.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ws,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(bl)),this.expandByPoint(Ws.copy(e.center).sub(bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Wu=0,dn=new dt,Sl=new Ht,ns=new q,on=new nn,Xs=new nn,Ot=new q,Nt=class i extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cu(e)?lr:or)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return Sl.lookAt(e),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _t(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(on.min,Xs.min),on.expandByPoint(Ot),Ot.addVectors(on.max,Xs.max),on.expandByPoint(Ot)):(on.expandByPoint(Xs.min),on.expandByPoint(Xs.max))}on.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)Ot.fromBufferAttribute(o,l),c&&(ns.fromBufferAttribute(e,l),Ot.add(ns)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Zt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let m=0;m<n.count;m++)o[m]=new q,c[m]=new q;let l=new q,f=new q,u=new q,h=new Ne,d=new Ne,_=new Ne,y=new q,x=new q;function p(m,L,O){l.fromBufferAttribute(n,m),f.fromBufferAttribute(n,L),u.fromBufferAttribute(n,O),h.fromBufferAttribute(r,m),d.fromBufferAttribute(r,L),_.fromBufferAttribute(r,O),f.sub(l),u.sub(l),d.sub(h),_.sub(h);let Y=1/(d.x*_.y-_.x*d.y);isFinite(Y)&&(y.copy(f).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(Y),x.copy(u).multiplyScalar(d.x).addScaledVector(f,-_.x).multiplyScalar(Y),o[m].add(y),o[L].add(y),o[O].add(y),c[m].add(x),c[L].add(x),c[O].add(x))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let m=0,L=C.length;m<L;++m){let O=C[m],Y=O.start,$=O.count;for(let B=Y,A=Y+$;B<A;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let w=new q,v=new q,P=new q,T=new q;function R(m){P.fromBufferAttribute(s,m),T.copy(P);let L=o[m];w.copy(L),w.sub(P.multiplyScalar(P.dot(L))).normalize(),v.crossVectors(T,L);let Y=v.dot(c[m])<0?-1:1;a.setXYZW(m,w.x,w.y,w.z,Y)}for(let m=0,L=C.length;m<L;++m){let O=C[m],Y=O.start,$=O.count;for(let B=Y,A=Y+$;B<A;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new q,r=new q,a=new q,o=new q,c=new q,l=new q,f=new q,u=new q;if(e)for(let h=0,d=e.count;h<d;h+=3){let _=e.getX(h+0),y=e.getX(h+1),x=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,x),f.subVectors(a,r),u.subVectors(s,r),f.cross(u),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,x),o.add(f),c.add(f),l.add(f),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),f.subVectors(a,r),u.subVectors(s,r),f.cross(u),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,c){let l=o.array,f=o.itemSize,u=o.normalized,h=new l.constructor(c.length*f),d=0,_=0;for(let y=0,x=c.length;y<x;y++){o.isInterleavedBufferAttribute?d=c[y]*o.data.stride+o.offset:d=c[y]*f;for(let p=0;p<f;p++)h[_++]=l[d++]}return new Zt(h,f,u)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let f=0,u=l.length;f<u;f++){let h=l[f],d=e(h,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],f=[];for(let u=0,h=l.length;u<h;u++){let d=l[u];f.push(d.toJSON(e.data))}f.length>0&&(s[c]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let f=s[l];this.setAttribute(l,f.clone(t))}let r=e.morphAttributes;for(let l in r){let f=[],u=r[l];for(let h=0,d=u.length;h<d;h++)f.push(u[h].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,f=a.length;l<f;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},La=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uc,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},jt=new q,cr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){sr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){sr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},El=new q,Xu=new q,qu=new nt,en=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=El.subVectors(n,t).cross(Xu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(El),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qu.getNormalMatrix(e),s=this.coplanarPoint(El).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Yu=0,Bn=class extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=Ps,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$l,this.blendDst=Kl,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_a,this.stencilZFail=_a,this.stencilZPass=_a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new en().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ne().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},En=class extends Bn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},is,qs=new q,ss=new q,rs=new q,as=new Ne,Ys=new Ne,xf=new dt,Kr=new q,Zs=new q,jr=new q,ch=new Ne,Tl=new Ne,hh=new Ne,Hn=class extends Ht{constructor(e=new En){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new Nt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new La(t,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new cr(n,3,0,!1)),is.setAttribute("uv",new cr(n,2,3,!1))}this.geometry=is,this.material=e,this.center=new Ne(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),xf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-rs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Qr(Kr.set(-.5,-.5,0),rs,a,ss,s,r),Qr(Zs.set(.5,-.5,0),rs,a,ss,s,r),Qr(jr.set(.5,.5,0),rs,a,ss,s,r),ch.set(0,0),Tl.set(1,0),hh.set(1,1);let o=e.ray.intersectTriangle(Kr,Zs,jr,!1,qs);if(o===null&&(Qr(Zs.set(-.5,.5,0),rs,a,ss,s,r),Tl.set(0,1),o=e.ray.intersectTriangle(Kr,jr,Zs,!1,qs),o===null))return;let c=e.ray.origin.distanceTo(qs);c<e.near||c>e.far||t.push({distance:c,point:qs.clone(),uv:jn.getInterpolation(qs,Kr,Zs,jr,ch,Tl,hh,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Qr(i,e,t,n,s,r){as.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ys.x=r*as.x-s*as.y,Ys.y=s*as.x+r*as.y):Ys.copy(as),i.copy(e),i.x+=Ys.x,i.y+=Ys.y,i.applyMatrix4(xf)}var Kn=new q,wl=new q,ea=new q,ta=new q,_s=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){wl.copy(e).add(t).multiplyScalar(.5),ea.copy(t).sub(e).normalize(),ta.copy(this.origin).sub(wl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ea),o=ta.dot(this.direction),c=-ta.dot(ea),l=ta.lengthSq(),f=Math.abs(1-a*a),u,h,d,_;if(f>0)if(u=a*c-o,h=a*o-c,_=r*f,u>=0)if(h>=-_)if(h<=_){let y=1/f;u*=y,h*=y,d=u*(u+a*h+2*o)+h*(a*u+h+2*c)+l}else h=r,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*c)+l;else h=-r,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*c)+l;else h<=-_?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+h*(h+2*c)+l):h<=_?(u=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+h*(h+2*c)+l);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),d=-u*u+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(wl).addScaledVector(ea,h),d}intersectSphere(e,t){if(e.radius<0)return null;Kn.subVectors(e.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),f>=0?(r=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(r=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,f=o.z,u=e.x-a.x,h=e.y-a.y,d=e.z-a.z,_=t.x-a.x,y=t.y-a.y,x=t.z-a.z,p=n.x-a.x,C=n.y-a.y,w=n.z-a.z,v=Math.abs(c),P=Math.abs(l),T=Math.abs(f),R,m,L,O,Y,$,B,A,D,W,E,N;if(v>=P&&v>=T?(L=c,$=u,D=_,N=p,c>=0?(R=l,m=f,O=h,Y=d,B=y,A=x,W=C,E=w):(R=f,m=l,O=d,Y=h,B=x,A=y,W=w,E=C)):P>=T?(L=l,$=h,D=y,N=C,l>=0?(R=f,m=c,O=d,Y=u,B=x,A=_,W=w,E=p):(R=c,m=f,O=u,Y=d,B=_,A=x,W=p,E=w)):(L=f,$=d,D=x,N=w,f>=0?(R=c,m=l,O=u,Y=h,B=_,A=y,W=p,E=C):(R=l,m=c,O=h,Y=u,B=y,A=_,W=C,E=p)),L===0)return null;let z=R/L,le=m/L,G=1/L,fe=O-z*$,ne=Y-le*$,ye=B-z*D,Ce=A-le*D,Ue=W-z*N,ie=E-le*N,de=Ue*Ce-ie*ye,we=fe*ie-ne*Ue,te=ye*ne-Ce*fe;if(s){if(de<0||we<0||te<0)return null}else if((de<0||we<0||te<0)&&(de>0||we>0||te>0))return null;let ue=de+we+te;if(ue===0)return null;let Fe=G*(de*$+we*D+te*N);return(ue>0?Fe<0:Fe>0)?null:this.at(Fe/ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},fh=new dt,Ai=new _s,na=new ni,uh=new q,ia=new q,sa=new q,ra=new q,Al=new q,aa=new q,dh=new q,oa=new q,ht=class extends Ht{constructor(e=new Nt,t=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){aa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let f=o[c],u=r[c];f!==0&&(Al.fromBufferAttribute(u,e),a?aa.addScaledVector(Al,f):aa.addScaledVector(Al.sub(t),f))}t.add(aa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(r),Ai.copy(e.ray).recast(e.near),!(na.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(na,uh)===null||Ai.origin.distanceToSquared(uh)>(e.far-e.near)**2))&&(fh.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(fh),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,f=r.attributes.uv1,u=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){let x=h[_],p=a[x.materialIndex],C=Math.max(x.start,d.start),w=Math.min(o.count,Math.min(x.start+x.count,d.start+d.count));for(let v=C,P=w;v<P;v+=3){let T=o.getX(v),R=o.getX(v+1),m=o.getX(v+2);s=la(this,p,e,n,l,f,u,T,R,m),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let _=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let x=_,p=y;x<p;x+=3){let C=o.getX(x),w=o.getX(x+1),v=o.getX(x+2);s=la(this,a,e,n,l,f,u,C,w,v),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){let x=h[_],p=a[x.materialIndex],C=Math.max(x.start,d.start),w=Math.min(c.count,Math.min(x.start+x.count,d.start+d.count));for(let v=C,P=w;v<P;v+=3){let T=v,R=v+1,m=v+2;s=la(this,p,e,n,l,f,u,T,R,m),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let _=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let x=_,p=y;x<p;x+=3){let C=x,w=x+1,v=x+2;s=la(this,a,e,n,l,f,u,C,w,v),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};function Zu(i,e,t,n,s,r,a,o){let c;if(e.side===Vt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===xi,o),c===null)return null;oa.copy(o),oa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(oa);return l<t.near||l>t.far?null:{distance:l,point:oa.clone(),object:i}}function la(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,ia),i.getVertexPosition(c,sa),i.getVertexPosition(l,ra);let f=Zu(i,e,t,n,ia,sa,ra,dh);if(f){let u=new q;jn.getBarycoord(dh,ia,sa,ra,u),s&&(f.uv=jn.getInterpolatedAttribute(s,o,c,l,u,new Ne)),r&&(f.uv1=jn.getInterpolatedAttribute(r,o,c,l,u,new Ne)),a&&(f.normal=jn.getInterpolatedAttribute(a,o,c,l,u,new q),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new q,materialIndex:0};jn.getNormal(ia,sa,ra,h.normal),f.face=h,f.barycoord=u}return f}var hr=class extends Qt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Bt,f=Bt,u,h){super(null,a,o,c,l,f,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fr=class extends Zt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},os=new dt,ph=new dt,ca=[],mh=new nn,Ju=new dt,Js=new ht,$s=new ni,ys=class extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ju)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),mh.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(mh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),$s.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union($s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),e.ray.intersectsSphere($s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,os),ph.multiplyMatrices(n,os),Js.matrixWorld=ph,Js.raycast(e,ca);for(let a=0,o=ca.length;a<o;a++){let c=ca[a];c.instanceId=r,c.object=this,t.push(c)}ca.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new fr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new hr(new Float32Array(s*this.count),s,this.count,lo,pn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ri=new ni,$u=new Ne(.5,.5),ha=new q,vs=class{constructor(e=new en,t=new en,n=new en,s=new en,r=new en,a=new en){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],f=r[4],u=r[5],h=r[6],d=r[7],_=r[8],y=r[9],x=r[10],p=r[11],C=r[12],w=r[13],v=r[14],P=r[15];if(s[0].setComponents(l-a,d-f,p-_,P-C).normalize(),s[1].setComponents(l+a,d+f,p+_,P+C).normalize(),s[2].setComponents(l+o,d+u,p+y,P+w).normalize(),s[3].setComponents(l-o,d-u,p-y,P-w).normalize(),n)s[4].setComponents(c,h,x,v).normalize(),s[5].setComponents(l-c,d-h,p-x,P-v).normalize();else if(s[4].setComponents(l-c,d-h,p-x,P-v).normalize(),t===Mn)s[5].setComponents(l+c,d+h,p+x,P+v).normalize();else if(t===ds)s[5].setComponents(c,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);let t=$u.distanceTo(e.center);return Ri.radius=.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ha.x=s.normal.x>0?e.max.x:e.min.x,ha.y=s.normal.y>0?e.max.y:e.min.y,ha.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ms=class extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gh=new dt,Ol=new _s,fa=new ni,ua=new q,ur=class extends Ht{constructor(e=new Nt,t=new Ms){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(s),fa.radius+=r,e.ray.intersectsSphere(fa)===!1)return;gh.copy(s).invert(),Ol.copy(e.ray).applyMatrix4(gh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let h=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let _=h,y=d;_<y;_++){let x=l.getX(_);ua.fromBufferAttribute(u,x),xh(ua,x,c,s,e,t,this)}}else{let h=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let _=h,y=d;_<y;_++)ua.fromBufferAttribute(u,_),xh(ua,_,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function xh(i,e,t,n,s,r,a){let o=Ol.distanceSqToPoint(i);if(o<t){let c=new q;Ol.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var dr=class extends Qt{constructor(e=[],t=yi,n,s,r,a,o,c,l,f){super(e,t,n,s,r,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ii=class extends Qt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var di=class extends Qt{constructor(e,t,n=wn,s,r,a,o=Bt,c=Bt,l,f=Un,u=1){if(f!==Un&&f!==Mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:u};super(h,s,r,a,o,c,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ms(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Da=class extends di{constructor(e,t=wn,n=yi,s,r,a=Bt,o=Bt,c,l=Un){let f={width:e,height:e,depth:1},u=[f,f,f,f,f,f];super(e,e,t,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},pr=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},zn=class i extends Nt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],f=[],u=[],h=0,d=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(f,3)),this.setAttribute("uv",new _t(u,2));function _(y,x,p,C,w,v,P,T,R,m,L){let O=v/R,Y=P/m,$=v/2,B=P/2,A=T/2,D=R+1,W=m+1,E=0,N=0,z=new q;for(let le=0;le<W;le++){let G=le*Y-B;for(let fe=0;fe<D;fe++){let ne=fe*O-$;z[y]=ne*C,z[x]=G*w,z[p]=A,l.push(z.x,z.y,z.z),z[y]=0,z[x]=0,z[p]=T>0?1:-1,f.push(z.x,z.y,z.z),u.push(fe/R),u.push(1-le/m),E+=1}}for(let le=0;le<m;le++)for(let G=0;G<R;G++){let fe=h+G+D*le,ne=h+G+D*(le+1),ye=h+(G+1)+D*(le+1),Ce=h+(G+1)+D*le;c.push(fe,ne,Ce),c.push(ne,ye,Ce),N+=6}o.addGroup(d,N,L),d+=N,h+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ii=class i extends Nt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new q,f=new Ne;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){let d=n+u/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),f.x=(a[h]/e+1)/2,f.y=(a[h+1]/e+1)/2,c.push(f.x,f.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(o,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ie=class i extends Nt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let f=[],u=[],h=[],d=[],_=0,y=[],x=n/2,p=0;C(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(f),this.setAttribute("position",new _t(u,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(d,2));function C(){let v=new q,P=new q,T=0,R=(t-e)/n;for(let m=0;m<=r;m++){let L=[],O=m/r,Y=O*(t-e)+e;for(let $=0;$<=s;$++){let B=$/s,A=B*c+o,D=Math.sin(A),W=Math.cos(A);P.x=Y*D,P.y=-O*n+x,P.z=Y*W,u.push(P.x,P.y,P.z),v.set(D,R,W).normalize(),h.push(v.x,v.y,v.z),d.push(B,1-O),L.push(_++)}y.push(L)}for(let m=0;m<s;m++)for(let L=0;L<r;L++){let O=y[L][m],Y=y[L+1][m],$=y[L+1][m+1],B=y[L][m+1];(e>0||L!==0)&&(f.push(O,Y,B),T+=3),(t>0||L!==r-1)&&(f.push(Y,$,B),T+=3)}l.addGroup(p,T,0),p+=T}function w(v){let P=_,T=new Ne,R=new q,m=0,L=v===!0?e:t,O=v===!0?1:-1;for(let $=1;$<=s;$++)u.push(0,x*O,0),h.push(0,O,0),d.push(.5,.5),_++;let Y=_;for(let $=0;$<=s;$++){let A=$/s*c+o,D=Math.cos(A),W=Math.sin(A);R.x=L*W,R.y=x*O,R.z=L*D,u.push(R.x,R.y,R.z),h.push(0,O,0),T.x=D*.5+.5,T.y=W*.5*O+.5,d.push(T.x,T.y),_++}for(let $=0;$<s;$++){let B=P+$,A=Y+$;v===!0?f.push(A,A+1,B):f.push(A+1,A,B),m+=3}l.addGroup(p,m,v===!0?1:2),p+=m}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Pt=class i extends Ie{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Na=class i extends Nt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),f(),this.setAttribute("position",new _t(r,3)),this.setAttribute("normal",new _t(r.slice(),3)),this.setAttribute("uv",new _t(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(C){let w=new q,v=new q,P=new q;for(let T=0;T<t.length;T+=3)d(t[T+0],w),d(t[T+1],v),d(t[T+2],P),c(w,v,P,C)}function c(C,w,v,P){let T=P+1,R=[];for(let m=0;m<=T;m++){R[m]=[];let L=C.clone().lerp(v,m/T),O=w.clone().lerp(v,m/T),Y=T-m;for(let $=0;$<=Y;$++)$===0&&m===T?R[m][$]=L:R[m][$]=L.clone().lerp(O,$/Y)}for(let m=0;m<T;m++)for(let L=0;L<2*(T-m)-1;L++){let O=Math.floor(L/2);L%2===0?(h(R[m][O+1]),h(R[m+1][O]),h(R[m][O])):(h(R[m][O+1]),h(R[m+1][O+1]),h(R[m+1][O]))}}function l(C){let w=new q;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(C),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function f(){let C=new q;for(let w=0;w<r.length;w+=3){C.x=r[w+0],C.y=r[w+1],C.z=r[w+2];let v=x(C)/2/Math.PI+.5,P=p(C)/Math.PI+.5;a.push(v,1-P)}_(),u()}function u(){for(let C=0;C<a.length;C+=6){let w=a[C+0],v=a[C+2],P=a[C+4],T=Math.max(w,v,P),R=Math.min(w,v,P);T>.9&&R<.1&&(w<.2&&(a[C+0]+=1),v<.2&&(a[C+2]+=1),P<.2&&(a[C+4]+=1))}}function h(C){r.push(C.x,C.y,C.z)}function d(C,w){let v=C*3;w.x=e[v+0],w.y=e[v+1],w.z=e[v+2]}function _(){let C=new q,w=new q,v=new q,P=new q,T=new Ne,R=new Ne,m=new Ne;for(let L=0,O=0;L<r.length;L+=9,O+=6){C.set(r[L+0],r[L+1],r[L+2]),w.set(r[L+3],r[L+4],r[L+5]),v.set(r[L+6],r[L+7],r[L+8]),T.set(a[O+0],a[O+1]),R.set(a[O+2],a[O+3]),m.set(a[O+4],a[O+5]),P.copy(C).add(w).add(v).divideScalar(3);let Y=x(P);y(T,O+0,C,Y),y(R,O+2,w,Y),y(m,O+4,v,Y)}}function y(C,w,v,P){P<0&&C.x===1&&(a[w]=C.x-1),v.x===0&&v.z===0&&(a[w]=P/2/Math.PI+.5)}function x(C){return Math.atan2(C.z,-C.x)}function p(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){et("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let f=n[s],h=n[s+1]-f,d=(a-f)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Ne:new q);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new q,s=[],r=[],a=[],o=new q,c=new dt;for(let d=0;d<=e;d++){let _=d/e;s[d]=this.getTangentAt(_,new q)}r[0]=new q,a[0]=new q;let l=Number.MAX_VALUE,f=Math.abs(s[0].x),u=Math.abs(s[0].y),h=Math.abs(s[0].z);f<=l&&(l=f,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(lt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,_))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(lt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],d*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},bs=class extends ln{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Ne){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let f=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*f-d*u+this.aX,l=h*u+d*f+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ua=class extends bs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function pc(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,f,u){let h=(a-r)/l-(o-r)/(l+f)+(o-a)/f,d=(o-a)/f-(c-a)/(f+u)+(c-o)/u;h*=f,d*=f,s(a,o,h,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var _h=new q,yh=new q,Rl=new pc,Cl=new pc,Pl=new pc,Fa=class extends ln{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new q){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,f;this.closed||o>0?l=s[(o-1)%r]:(yh.subVectors(s[0],s[1]).add(s[0]),l=yh);let u=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?f=s[(o+2)%r]:(_h.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=_h),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d);y<1e-4&&(y=1),_<1e-4&&(_=y),x<1e-4&&(x=y),Rl.initNonuniformCatmullRom(l.x,u.x,h.x,f.x,_,y,x),Cl.initNonuniformCatmullRom(l.y,u.y,h.y,f.y,_,y,x),Pl.initNonuniformCatmullRom(l.z,u.z,h.z,f.z,_,y,x)}else this.curveType==="catmullrom"&&(Rl.initCatmullRom(l.x,u.x,h.x,f.x,this.tension),Cl.initCatmullRom(l.y,u.y,h.y,f.y,this.tension),Pl.initCatmullRom(l.z,u.z,h.z,f.z,this.tension));return n.set(Rl.calc(c),Cl.calc(c),Pl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new q().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function vh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Ku(i,e){let t=1-i;return t*t*e}function ju(i,e){return 2*(1-i)*i*e}function Qu(i,e){return i*i*e}function js(i,e,t,n){return Ku(i,e)+ju(i,t)+Qu(i,n)}function ed(i,e){let t=1-i;return t*t*t*e}function td(i,e){let t=1-i;return 3*t*t*i*e}function nd(i,e){return 3*(1-i)*i*i*e}function id(i,e){return i*i*i*e}function Qs(i,e,t,n,s){return ed(i,e)+td(i,t)+nd(i,n)+id(i,s)}var mr=class extends ln{constructor(e=new Ne,t=new Ne,n=new Ne,s=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ne){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Qs(e,s.x,r.x,a.x,o.x),Qs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Oa=class extends ln{constructor(e=new q,t=new q,n=new q,s=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new q){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Qs(e,s.x,r.x,a.x,o.x),Qs(e,s.y,r.y,a.y,o.y),Qs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},gr=class extends ln{constructor(e=new Ne,t=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ba=class extends ln{constructor(e=new q,t=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xr=class extends ln{constructor(e=new Ne,t=new Ne,n=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ne){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(js(e,s.x,r.x,a.x),js(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ha=class extends ln{constructor(e=new q,t=new q,n=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new q){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(js(e,s.x,r.x,a.x),js(e,s.y,r.y,a.y),js(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_r=class extends ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ne){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],f=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(vh(o,c.x,l.x,f.x,u.x),vh(o,c.y,l.y,f.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ne().fromArray(s))}return this}},Bl=Object.freeze({__proto__:null,ArcCurve:Ua,CatmullRomCurve3:Fa,CubicBezierCurve:mr,CubicBezierCurve3:Oa,EllipseCurve:bs,LineCurve:gr,LineCurve3:Ba,QuadraticBezierCurve:xr,QuadraticBezierCurve3:Ha,SplineCurve:_r}),za=class extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let f=c[l];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Bl[s.type]().fromJSON(s))}return this}},yr=class extends za{constructor(e){super(),this.type="Path",this.currentPoint=new Ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new gr(this.currentPoint.clone(),new Ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new xr(this.currentPoint.clone(),new Ne(e,t),new Ne(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new mr(this.currentPoint.clone(),new Ne(e,t),new Ne(n,s),new Ne(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new _r(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+l,t+f,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new bs(e,t,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let f=l.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Li=class extends yr{constructor(e){super(e),this.uuid=Qn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new yr().fromJSON(s))}return this}};function sd(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=_f(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=cd(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let f=o,u=c;for(let h=t;h<s;h+=t){let d=i[h],_=i[h+1];d<o&&(o=d),_<c&&(c=_),d>f&&(f=d),_>u&&(u=_)}l=Math.max(f-o,u-c),l=l!==0?32767/l:0}return vr(r,a,t,o,c,l,0),a}function _f(i,e,t,n,s){let r;if(s===vd(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Mh(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Mh(a/n|0,i[a],i[a+1],r);return r&&Ss(r,r.next)&&(br(r),r=r.next),r}function Di(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ss(t,t.next)||Ct(t.prev,t,t.next)===0)){if(br(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function vr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&pd(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?ad(i,n,s,r):rd(i)){e.push(c.i,i.i,l.i),br(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=od(Di(i),e),vr(i,e,t,n,s,r,2)):a===2&&ld(i,e,t,n,s,r):vr(Di(i),e,t,n,s,r,1);break}}}function rd(i){let e=i.prev,t=i,n=i.next;if(Ct(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,f=Math.min(s,r,a),u=Math.min(o,c,l),h=Math.max(s,r,a),d=Math.max(o,c,l),_=n.next;for(;_!==e;){if(_.x>=f&&_.x<=h&&_.y>=u&&_.y<=d&&Ks(s,o,r,c,a,l,_.x,_.y)&&Ct(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function ad(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Ct(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,f=s.y,u=r.y,h=a.y,d=Math.min(o,c,l),_=Math.min(f,u,h),y=Math.max(o,c,l),x=Math.max(f,u,h),p=Hl(d,_,e,t,n),C=Hl(y,x,e,t,n),w=i.prevZ,v=i.nextZ;for(;w&&w.z>=p&&v&&v.z<=C;){if(w.x>=d&&w.x<=y&&w.y>=_&&w.y<=x&&w!==s&&w!==a&&Ks(o,f,c,u,l,h,w.x,w.y)&&Ct(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=d&&v.x<=y&&v.y>=_&&v.y<=x&&v!==s&&v!==a&&Ks(o,f,c,u,l,h,v.x,v.y)&&Ct(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=p;){if(w.x>=d&&w.x<=y&&w.y>=_&&w.y<=x&&w!==s&&w!==a&&Ks(o,f,c,u,l,h,w.x,w.y)&&Ct(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=C;){if(v.x>=d&&v.x<=y&&v.y>=_&&v.y<=x&&v!==s&&v!==a&&Ks(o,f,c,u,l,h,v.x,v.y)&&Ct(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function od(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ss(n,s)&&vf(n,t,t.next,s)&&Mr(n,s)&&Mr(s,n)&&(e.push(n.i,t.i,s.i),br(t),br(t.next),t=i=s),t=t.next}while(t!==i);return Di(t)}function ld(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xd(a,o)){let c=Mf(a,o);a=Di(a,a.next),c=Di(c,c.next),vr(a,e,t,n,s,r,0),vr(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function cd(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=_f(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(gd(l))}s.sort(hd);for(let r=0;r<s.length;r++)t=fd(s[r],t);return t}function hd(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function fd(i,e){let t=ud(i,e);if(!t)return e;let n=Mf(t,i);return Di(n,n.next),Di(t,t.next)}function ud(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Ss(i,t))return t;do{if(Ss(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,f=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&yf(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Mr(t,i)&&(u<f||u===f&&(t.x>a.x||t.x===a.x&&dd(a,t)))&&(a=t,f=u)}t=t.next}while(t!==o);return a}function dd(i,e){return Ct(i.prev,i,e.prev)<0&&Ct(e.next,i,i.next)<0}function pd(i,e,t,n){let s=i;do s.z===0&&(s.z=Hl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,md(s)}function md(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Hl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function gd(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function yf(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ks(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&yf(i,e,t,n,s,r,a,o)}function xd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!_d(i,e)&&(Mr(i,e)&&Mr(e,i)&&yd(i,e)&&(Ct(i.prev,i,e.prev)||Ct(i,e.prev,e))||Ss(i,e)&&Ct(i.prev,i,i.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ss(i,e){return i.x===e.x&&i.y===e.y}function vf(i,e,t,n){let s=pa(Ct(i,e,t)),r=pa(Ct(i,e,n)),a=pa(Ct(t,n,i)),o=pa(Ct(t,n,e));return!!(s!==r&&a!==o||s===0&&da(i,t,e)||r===0&&da(i,n,e)||a===0&&da(t,i,n)||o===0&&da(t,e,n))}function da(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function pa(i){return i>0?1:i<0?-1:0}function _d(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&vf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Mr(i,e){return Ct(i.prev,i,i.next)<0?Ct(i,e,i.next)>=0&&Ct(i,i.prev,e)>=0:Ct(i,e,i.prev)<0||Ct(i,i.next,e)<0}function yd(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Mf(i,e){let t=zl(i.i,i.x,i.y),n=zl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Mh(i,e,t,n){let s=zl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function br(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function zl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vd(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var kl=class{static triangulate(e,t,n=2){return sd(e,t,n)}},Ci=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];bh(e),Sh(n,e);let a=e.length;t.forEach(bh);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Sh(n,t[c]);let o=kl.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function bh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Sh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var cn=class i extends Nt{constructor(e=new Li([new Ne(.5,.5),new Ne(-.5,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new _t(s,3)),this.setAttribute("uv",new _t(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,C=t.UVGenerator!==void 0?t.UVGenerator:Md,w,v=!1,P,T,R,m;if(p){w=p.getSpacedPoints(f),v=!0,h=!1;let ge=p.isCatmullRomCurve3?p.closed:!1;P=p.computeFrenetFrames(f,ge),T=new q,R=new q,m=new q}h||(x=0,d=0,_=0,y=0);let L=o.extractPoints(l),O=L.shape,Y=L.holes;if(!Ci.isClockWise(O)){O=O.reverse();for(let ge=0,me=Y.length;ge<me;ge++){let Se=Y[ge];Ci.isClockWise(Se)&&(Y[ge]=Se.reverse())}}function B(ge){let Se=10000000000000001e-36,Te=ge[0];for(let Oe=1;Oe<=ge.length;Oe++){let ee=Oe%ge.length,oe=ge[ee],ve=oe.x-Te.x,Pe=oe.y-Te.y,X=ve*ve+Pe*Pe,it=Math.max(Math.abs(oe.x),Math.abs(oe.y),Math.abs(Te.x),Math.abs(Te.y)),j=Se*it*it;if(X<=j){ge.splice(ee,1),Oe--;continue}Te=oe}}B(O),Y.forEach(B);let A=Y.length,D=O;for(let ge=0;ge<A;ge++){let me=Y[ge];O=O.concat(me)}function W(ge,me,Se){return me||Qe("ExtrudeGeometry: vec does not exist"),ge.clone().addScaledVector(me,Se)}let E=O.length;function N(ge,me,Se){let Te,Oe,ee,oe=ge.x-me.x,ve=ge.y-me.y,Pe=Se.x-ge.x,X=Se.y-ge.y,it=oe*oe+ve*ve,j=oe*X-ve*Pe;if(Math.abs(j)>Number.EPSILON){let b=Math.sqrt(it),g=Math.sqrt(Pe*Pe+X*X),U=me.x-ve/b,F=me.y+oe/b,V=Se.x-X/g,J=Se.y+Pe/g,se=((V-U)*X-(J-F)*Pe)/(oe*X-ve*Pe);Te=U+oe*se-ge.x,Oe=F+ve*se-ge.y;let H=Te*Te+Oe*Oe;if(H<=2)return new Ne(Te,Oe);ee=Math.sqrt(H/2)}else{let b=!1;oe>Number.EPSILON?Pe>Number.EPSILON&&(b=!0):oe<-Number.EPSILON?Pe<-Number.EPSILON&&(b=!0):Math.sign(ve)===Math.sign(X)&&(b=!0),b?(Te=-ve,Oe=oe,ee=Math.sqrt(it)):(Te=oe,Oe=ve,ee=Math.sqrt(it/2))}return new Ne(Te/ee,Oe/ee)}let z=[];for(let ge=0,me=D.length,Se=me-1,Te=ge+1;ge<me;ge++,Se++,Te++)Se===me&&(Se=0),Te===me&&(Te=0),z[ge]=N(D[ge],D[Se],D[Te]);let le=[],G,fe=z.concat();for(let ge=0,me=A;ge<me;ge++){let Se=Y[ge];G=[];for(let Te=0,Oe=Se.length,ee=Oe-1,oe=Te+1;Te<Oe;Te++,ee++,oe++)ee===Oe&&(ee=0),oe===Oe&&(oe=0),G[Te]=N(Se[Te],Se[ee],Se[oe]);le.push(G),fe=fe.concat(G)}let ne;if(x===0)ne=Ci.triangulateShape(D,Y);else{let ge=[],me=[];for(let Se=0;Se<x;Se++){let Te=Se/x,Oe=d*Math.cos(Te*Math.PI/2),ee=_*Math.sin(Te*Math.PI/2)+y;for(let oe=0,ve=D.length;oe<ve;oe++){let Pe=W(D[oe],z[oe],ee);we(Pe.x,Pe.y,-Oe),Te===0&&ge.push(Pe)}for(let oe=0,ve=A;oe<ve;oe++){let Pe=Y[oe];G=le[oe];let X=[];for(let it=0,j=Pe.length;it<j;it++){let b=W(Pe[it],G[it],ee);we(b.x,b.y,-Oe),Te===0&&X.push(b)}Te===0&&me.push(X)}}ne=Ci.triangulateShape(ge,me)}let ye=ne.length,Ce=_+y;for(let ge=0;ge<E;ge++){let me=h?W(O[ge],fe[ge],Ce):O[ge];v?(R.copy(P.normals[0]).multiplyScalar(me.x),T.copy(P.binormals[0]).multiplyScalar(me.y),m.copy(w[0]).add(R).add(T),we(m.x,m.y,m.z)):we(me.x,me.y,0)}for(let ge=1;ge<=f;ge++)for(let me=0;me<E;me++){let Se=h?W(O[me],fe[me],Ce):O[me];v?(R.copy(P.normals[ge]).multiplyScalar(Se.x),T.copy(P.binormals[ge]).multiplyScalar(Se.y),m.copy(w[ge]).add(R).add(T),we(m.x,m.y,m.z)):we(Se.x,Se.y,u/f*ge)}for(let ge=x-1;ge>=0;ge--){let me=ge/x,Se=d*Math.cos(me*Math.PI/2),Te=_*Math.sin(me*Math.PI/2)+y;for(let Oe=0,ee=D.length;Oe<ee;Oe++){let oe=W(D[Oe],z[Oe],Te);we(oe.x,oe.y,u+Se)}for(let Oe=0,ee=Y.length;Oe<ee;Oe++){let oe=Y[Oe];G=le[Oe];for(let ve=0,Pe=oe.length;ve<Pe;ve++){let X=W(oe[ve],G[ve],Te);v?we(X.x,X.y+w[f-1].y,w[f-1].x+Se):we(X.x,X.y,u+Se)}}}Ue(),ie();function Ue(){let ge=s.length/3;if(h){let me=0,Se=E*me;for(let Te=0;Te<ye;Te++){let Oe=ne[Te];te(Oe[2]+Se,Oe[1]+Se,Oe[0]+Se)}me=f+x*2,Se=E*me;for(let Te=0;Te<ye;Te++){let Oe=ne[Te];te(Oe[0]+Se,Oe[1]+Se,Oe[2]+Se)}}else{for(let me=0;me<ye;me++){let Se=ne[me];te(Se[2],Se[1],Se[0])}for(let me=0;me<ye;me++){let Se=ne[me];te(Se[0]+E*f,Se[1]+E*f,Se[2]+E*f)}}n.addGroup(ge,s.length/3-ge,0)}function ie(){let ge=s.length/3,me=0;de(D,me),me+=D.length;for(let Se=0,Te=Y.length;Se<Te;Se++){let Oe=Y[Se];de(Oe,me),me+=Oe.length}n.addGroup(ge,s.length/3-ge,1)}function de(ge,me){let Se=ge.length;for(;--Se>=0;){let Te=Se,Oe=Se-1;Oe<0&&(Oe=ge.length-1);for(let ee=0,oe=f+x*2;ee<oe;ee++){let ve=E*ee,Pe=E*(ee+1),X=me+Te+ve,it=me+Oe+ve,j=me+Oe+Pe,b=me+Te+Pe;ue(X,it,j,b)}}}function we(ge,me,Se){c.push(ge),c.push(me),c.push(Se)}function te(ge,me,Se){Fe(ge),Fe(me),Fe(Se);let Te=s.length/3,Oe=C.generateTopUV(n,s,Te-3,Te-2,Te-1);Me(Oe[0]),Me(Oe[1]),Me(Oe[2])}function ue(ge,me,Se,Te){Fe(ge),Fe(me),Fe(Te),Fe(me),Fe(Se),Fe(Te);let Oe=s.length/3,ee=C.generateSideWallUV(n,s,Oe-6,Oe-3,Oe-2,Oe-1);Me(ee[0]),Me(ee[1]),Me(ee[3]),Me(ee[1]),Me(ee[2]),Me(ee[3])}function Fe(ge){s.push(c[ge*3+0]),s.push(c[ge*3+1]),s.push(c[ge*3+2])}function Me(ge){r.push(ge.x),r.push(ge.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return bd(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Bl[s.type]().fromJSON(s)),new i(n,e.options)}},Md={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],f=e[s*3+1];return[new Ne(r,a),new Ne(o,c),new Ne(l,f)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],f=e[n*3+1],u=e[n*3+2],h=e[s*3],d=e[s*3+1],_=e[s*3+2],y=e[r*3],x=e[r*3+1],p=e[r*3+2];return Math.abs(o-f)<Math.abs(a-l)?[new Ne(a,1-c),new Ne(l,1-u),new Ne(h,1-_),new Ne(y,1-p)]:[new Ne(o,1-c),new Ne(f,1-u),new Ne(d,1-_),new Ne(x,1-p)]}};function bd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Sr=class i extends Na{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var pt=class i extends Nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,f=c+1,u=e/o,h=t/c,d=[],_=[],y=[],x=[];for(let p=0;p<f;p++){let C=p*h-a;for(let w=0;w<l;w++){let v=w*u-r;_.push(v,-C,0),y.push(0,0,1),x.push(w/o),x.push(1-p/c)}}for(let p=0;p<c;p++)for(let C=0;C<o;C++){let w=C+l*p,v=C+l*(p+1),P=C+1+l*(p+1),T=C+1+l*p;d.push(w,v,T),d.push(v,P,T)}this.setIndex(d),this.setAttribute("position",new _t(_,3)),this.setAttribute("normal",new _t(y,3)),this.setAttribute("uv",new _t(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Es=class i extends Nt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,f=[],u=new q,h=new q,d=[],_=[],y=[],x=[];for(let p=0;p<=n;p++){let C=[],w=p/n,v=a+w*o,P=e*Math.cos(v),T=Math.sqrt(e*e-P*P),R=0;p===0&&a===0?R=.5/t:p===n&&c===Math.PI&&(R=-.5/t);for(let m=0;m<=t;m++){let L=m/t,O=s+L*r;u.x=-T*Math.cos(O),u.y=P,u.z=T*Math.sin(O),_.push(u.x,u.y,u.z),h.copy(u).normalize(),y.push(h.x,h.y,h.z),x.push(L+R,1-w),C.push(l++)}f.push(C)}for(let p=0;p<n;p++)for(let C=0;C<t;C++){let w=f[p][C+1],v=f[p][C],P=f[p+1][C],T=f[p+1][C+1];(p!==0||a>0)&&d.push(w,v,T),(p!==n-1||c<Math.PI)&&d.push(v,P,T)}this.setIndex(d),this.setAttribute("position",new _t(_,3)),this.setAttribute("normal",new _t(y,3)),this.setAttribute("uv",new _t(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var at=class i extends Nt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],f=[],u=[],h=new q,d=new q,_=new q;for(let y=0;y<=n;y++){let x=a+y/n*o;for(let p=0;p<=s;p++){let C=p/s*r;d.x=(e+t*Math.cos(x))*Math.cos(C),d.y=(e+t*Math.cos(x))*Math.sin(C),d.z=t*Math.sin(x),l.push(d.x,d.y,d.z),h.x=e*Math.cos(C),h.y=e*Math.sin(C),_.subVectors(d,h).normalize(),f.push(_.x,_.y,_.z),u.push(p/s),u.push(y/n)}}for(let y=1;y<=n;y++)for(let x=1;x<=s;x++){let p=(s+1)*y+x-1,C=(s+1)*(y-1)+x-1,w=(s+1)*(y-1)+x,v=(s+1)*y+x;c.push(p,C,v),c.push(C,w,v)}this.setIndex(c),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(f,3)),this.setAttribute("uv",new _t(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Bi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Eh(s))s.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Eh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Jt(i){let e={};for(let t=0;t<i.length;t++){let n=Bi(i[t]);for(let s in n)e[s]=n[s]}return e}function Eh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Sd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function mc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var bf={clone:Bi,merge:Jt},Ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ed,this.fragmentShader=Td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=Sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new tt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"v3":this.uniforms[n].value=new q().fromArray(s.value);break;case"v4":this.uniforms[n].value=new wt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new nt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new dt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ka=class extends hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},zt=class extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ga=class extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Va=class extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ls(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Il(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var pi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Wa=class extends pi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nl,endingEnd:Nl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ul:r=e,o=2*t-n;break;case Fl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ul:a=e,c=2*n-t;break;case Fl:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,f=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,f=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,_=(n-t)/(s-t),y=_*_,x=y*_,p=-h*x+2*h*y-h*_,C=(1+h)*x+(-1.5-2*h)*y+(-.5+h)*_+1,w=(-1-d)*x+(1.5+d)*y+.5*_,v=d*x-d*y;for(let P=0;P!==o;++P)r[P]=p*a[f+P]+C*a[l+P]+w*a[c+P]+v*a[u+P];return r}},Xa=class extends pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,f=(n-t)/(s-t),u=1-f;for(let h=0;h!==o;++h)r[h]=a[l+h]*u+a[c+h]*f;return r}},qa=class extends pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ya=class extends pi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,f=this.inTangents,u=this.outTangents;if(!f||!u){let _=(n-t)/(s-t),y=1-_;for(let x=0;x!==o;++x)r[x]=a[l+x]*y+a[c+x]*_;return r}let h=o*2,d=e-1;for(let _=0;_!==o;++_){let y=a[l+_],x=a[c+_],p=d*h+_*2,C=u[p],w=u[p+1],v=e*h+_*2,P=f[v],T=f[v+1],R=Ad(n,t,C,P,s);r[_]=Sf(R,y,w,T,x)}return r}};function Sf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function wd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Ad(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Sf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=wd(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var fn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ls(t,this.TimeBufferType),this.values=ls(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ls(e.times,Array),values:ls(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Il(e.settings)&&(n.settings={inTangents:ls(e.settings.inTangents,Array),outTangents:ls(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ya(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case er:t=this.InterpolantFactoryMethodDiscrete;break;case Aa:t=this.InterpolantFactoryMethodLinear;break;case xa:t=this.InterpolantFactoryMethodSmooth;break;case Dl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return et("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return er;case this.InterpolantFactoryMethodLinear:return Aa;case this.InterpolantFactoryMethodSmooth:return xa;case this.InterpolantFactoryMethodBezier:return Dl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Il(this.settings)&&(Th(this.settings.inTangents,e),Th(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Qe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Qe("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Pu(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Qe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xa,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],f=e[o+1];if(l!==f&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,h=u-n,d=u+n;for(let _=0;_!==n;++_){let y=t[u+_];if(y!==t[h+_]||y!==t[d+_]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,h=a*n;for(let d=0;d!==n;++d)t[h+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Il(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Th(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Aa;var mi=class extends fn{constructor(e,t,n){super(e,t,n)}};mi.prototype.ValueTypeName="bool";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=er;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}};Za.prototype.ValueTypeName="color";var Ja=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}};Ja.prototype.ValueTypeName="number";var $a=class extends pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let f=l+o;l!==f;l+=4)On.slerpFlat(r,0,a,l-o,a,l,c);return r}},Er=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}};Er.prototype.ValueTypeName="quaternion";Er.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends fn{constructor(e,t,n){super(e,t,n)}};gi.prototype.ValueTypeName="string";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=er;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends fn{constructor(e,t,n,s){super(e,t,n,s)}};Ka.prototype.ValueTypeName="vector";var ja=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,u){return l.push(f,u),this},this.removeHandler=function(f){let u=l.indexOf(f);return u!==-1&&l.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=l.length;u<h;u+=2){let d=l[u],_=l[u+1];if(d.global&&(d.lastIndex=0),d.test(f))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ef=new ja,Qa=class{constructor(e){this.manager=e!==void 0?e:Ef,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Qa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ts=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ws=class extends Ts{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ll=new dt,wh=new q,Ah=new q,Tr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vs,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;wh.setFromMatrixPosition(e.matrixWorld),t.position.copy(wh),Ah.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ah),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ll.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ll,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===ds||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Ll)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ma=new q,ga=new On,Ln=new q,wr=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ma,ga,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ga,Ln.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ma,ga,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ga,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ui=new q,Rh=new Ne,Ch=new Ne,Rt=class extends wr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,Rh,Ch),t.subVectors(Ch,Rh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(al*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Gl=class extends Tr{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0}},sn=class extends Ts{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Gl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},As=class extends wr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vl=class extends Tr{constructor(){super(new As(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rs=class extends Ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Vl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var cs=-90,hs=1,eo=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rt(cs,hs,e,t);s.layers=this.layers,this.add(s);let r=new Rt(cs,hs,e,t);r.layers=this.layers,this.add(r);let a=new Rt(cs,hs,e,t);a.layers=this.layers,this.add(a);let o=new Rt(cs,hs,e,t);o.layers=this.layers,this.add(o);let c=new Rt(cs,hs,e,t);c.layers=this.layers,this.add(c);let l=new Rt(cs,hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,f]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(u,h,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},to=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var gc="\\[\\]\\.:\\/",Rd=new RegExp("["+gc+"]","g"),xc="[^"+gc+"]",Cd="[^"+gc.replace("\\.","")+"]",Pd=/((?:WC+[\/:])*)/.source.replace("WC",xc),Id=/(WCOD+)?/.source.replace("WCOD",Cd),Ld=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xc),Dd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xc),Nd=new RegExp("^"+Pd+Id+Ld+Dd+"$"),Ud=["material","materials","bones","map"],Wl=class{constructor(e,t,n){let s=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Tt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rd,"")}static parseTrackName(e){let t=Nd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ud.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){et("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===l){l=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Qe("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=Wl;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yx=new Float32Array(1);var Ph=new dt,Ni=class{constructor(e,t,n=0,s=1/0){this.ray=new _s(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new gs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ph.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ph),this}intersectObject(e,t=!0,n=[]){return Xl(e,this,n,t),n.sort(Ih),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Xl(e[s],this,n,t);return n.sort(Ih),n}};function Ih(i,e){return i.distance-e.distance}function Xl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Xl(r[a],e,t,!0)}}var kn=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,et("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var ql=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function _c(i,e,t,n){let s=Fd(n);switch(t){case hc:return i*e;case lo:return i*e/s.components*s.byteLength;case co:return i*e/s.components*s.byteLength;case bi:return i*e*2/s.components*s.byteLength;case ho:return i*e*2/s.components*s.byteLength;case fc:return i*e*3/s.components*s.byteLength;case mn:return i*e*4/s.components*s.byteLength;case fo:return i*e*4/s.components*s.byteLength;case Pr:case Ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lr:case Dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case po:case go:return Math.max(i,16)*Math.max(e,8)/4;case uo:case mo:return Math.max(i,8)*Math.max(e,8)/2;case xo:case _o:case vo:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yo:case Nr:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Io:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Do:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Uo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Oo:case Bo:case Ho:return Math.ceil(i/4)*Math.ceil(e/4)*16;case zo:case ko:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ur:case Go:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fd(i){switch(i){case rn:case ac:return{byteLength:1,components:1};case Is:case oc:case An:return{byteLength:2,components:1};case ao:case oo:return{byteLength:2,components:4};case wn:case ro:case pn:return{byteLength:4,components:1};case lc:case cc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function qf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Bd(i){let e=new WeakMap;function t(o,c){let l=o.array,f=o.usage,u=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,f),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let f=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,f);else{u.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<u.length;d++){let _=u[h],y=u[d];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++h,u[h]=y)}u.length=h+1;for(let d=0,_=u.length;d<_;d++){let y=u[d];i.bufferSubData(l,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Hd=`#ifdef USE_ALPHAHASH
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
}`,rt={alphahash_fragment:Hd,alphahash_pars_fragment:zd,alphamap_fragment:kd,alphamap_pars_fragment:Gd,alphatest_fragment:Vd,alphatest_pars_fragment:Wd,aomap_fragment:Xd,aomap_pars_fragment:qd,batching_pars_vertex:Yd,batching_vertex:Zd,begin_vertex:Jd,beginnormal_vertex:$d,bsdfs:Kd,iridescence_fragment:jd,bumpmap_pars_fragment:Qd,clipping_planes_fragment:ep,clipping_planes_pars_fragment:tp,clipping_planes_pars_vertex:np,clipping_planes_vertex:ip,color_fragment:sp,color_pars_fragment:rp,color_pars_vertex:ap,color_vertex:op,common:lp,cube_uv_reflection_fragment:cp,defaultnormal_vertex:hp,displacementmap_pars_vertex:fp,displacementmap_vertex:up,emissivemap_fragment:dp,emissivemap_pars_fragment:pp,colorspace_fragment:mp,colorspace_pars_fragment:gp,envmap_fragment:xp,envmap_common_pars_fragment:_p,envmap_pars_fragment:yp,envmap_pars_vertex:vp,envmap_physical_pars_fragment:Ip,envmap_vertex:Mp,fog_vertex:bp,fog_pars_vertex:Sp,fog_fragment:Ep,fog_pars_fragment:Tp,gradientmap_pars_fragment:wp,lightmap_pars_fragment:Ap,lights_lambert_fragment:Rp,lights_lambert_pars_fragment:Cp,lights_pars_begin:Pp,lights_toon_fragment:Lp,lights_toon_pars_fragment:Dp,lights_phong_fragment:Np,lights_phong_pars_fragment:Up,lights_physical_fragment:Fp,lights_physical_pars_fragment:Op,lights_fragment_begin:Bp,lights_fragment_maps:Hp,lights_fragment_end:zp,lightprobes_pars_fragment:kp,logdepthbuf_fragment:Gp,logdepthbuf_pars_fragment:Vp,logdepthbuf_pars_vertex:Wp,logdepthbuf_vertex:Xp,map_fragment:qp,map_pars_fragment:Yp,map_particle_fragment:Zp,map_particle_pars_fragment:Jp,metalnessmap_fragment:$p,metalnessmap_pars_fragment:Kp,morphinstance_vertex:jp,morphcolor_vertex:Qp,morphnormal_vertex:e0,morphtarget_pars_vertex:t0,morphtarget_vertex:n0,normal_fragment_begin:i0,normal_fragment_maps:s0,normal_pars_fragment:r0,normal_pars_vertex:a0,normal_vertex:o0,normalmap_pars_fragment:l0,clearcoat_normal_fragment_begin:c0,clearcoat_normal_fragment_maps:h0,clearcoat_pars_fragment:f0,iridescence_pars_fragment:u0,opaque_fragment:d0,packing:p0,premultiplied_alpha_fragment:m0,project_vertex:g0,dithering_fragment:x0,dithering_pars_fragment:_0,roughnessmap_fragment:y0,roughnessmap_pars_fragment:v0,shadowmap_pars_fragment:M0,shadowmap_pars_vertex:b0,shadowmap_vertex:S0,shadowmask_pars_fragment:E0,skinbase_vertex:T0,skinning_pars_vertex:w0,skinning_vertex:A0,skinnormal_vertex:R0,specularmap_fragment:C0,specularmap_pars_fragment:P0,tonemapping_fragment:I0,tonemapping_pars_fragment:L0,transmission_fragment:D0,transmission_pars_fragment:N0,uv_pars_fragment:U0,uv_pars_vertex:F0,uv_vertex:O0,worldpos_vertex:B0,background_vert:H0,background_frag:z0,backgroundCube_vert:k0,backgroundCube_frag:G0,cube_vert:V0,cube_frag:W0,depth_vert:X0,depth_frag:q0,distance_vert:Y0,distance_frag:Z0,equirect_vert:J0,equirect_frag:$0,linedashed_vert:K0,linedashed_frag:j0,meshbasic_vert:Q0,meshbasic_frag:em,meshlambert_vert:tm,meshlambert_frag:nm,meshmatcap_vert:im,meshmatcap_frag:sm,meshnormal_vert:rm,meshnormal_frag:am,meshphong_vert:om,meshphong_frag:lm,meshphysical_vert:cm,meshphysical_frag:hm,meshtoon_vert:fm,meshtoon_frag:um,points_vert:dm,points_frag:pm,shadow_vert:mm,shadow_frag:gm,sprite_vert:xm,sprite_frag:_m},ze={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Wn={basic:{uniforms:Jt([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Jt([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Jt([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Jt([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Jt([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new tt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Jt([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Jt([ze.points,ze.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Jt([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Jt([ze.common,ze.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Jt([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Jt([ze.sprite,ze.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:Jt([ze.common,ze.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:Jt([ze.lights,ze.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Wn.physical={uniforms:Jt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var qo={r:0,b:0,g:0},ym=new dt,Yf=new nt;Yf.set(-1,0,0,0,1,0,0,0,1);function vm(i,e,t,n,s,r){let a=new tt(0),o=s===!0?0:1,c,l,f=null,u=0,h=null;function d(C){let w=C.isScene===!0?C.background:null;if(w&&w.isTexture){let v=C.backgroundBlurriness>0;w=e.get(w,v)}return w}function _(C){let w=!1,v=d(C);v===null?x(a,o):v&&v.isColor&&(x(v,1),w=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(C,w){let v=d(w);v&&(v.isCubeTexture||v.mapping===Rr)?(l===void 0&&(l=new ht(new zn(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Bi(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(P,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ym.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Yf),l.material.toneMapped=ct.getTransfer(v.colorSpace)!==xt,(f!==v||u!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,u=v.version,h=i.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ht(new pt(2,2),new hn({name:"BackgroundMaterial",uniforms:Bi(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ct.getTransfer(v.colorSpace)!==xt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||u!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,u=v.version,h=i.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function x(C,w){C.getRGB(qo,mc(i)),t.buffers.color.setClear(qo.r,qo.g,qo.b,w,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(C,w=1){a.set(C),o=w,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(C){o=C,x(a,o)},render:_,addToRenderList:y,dispose:p}}function Mm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(Y,$,B,A,D){let W=!1,E=u(Y,A,B,$);r!==E&&(r=E,l(r.object)),W=d(Y,A,B,D),W&&_(Y,A,B,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(Y,$,B,A),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return i.createVertexArray()}function l(Y){return i.bindVertexArray(Y)}function f(Y){return i.deleteVertexArray(Y)}function u(Y,$,B,A){let D=A.wireframe===!0,W=n[$.id];W===void 0&&(W={},n[$.id]=W);let E=Y.isInstancedMesh===!0?Y.id:0,N=W[E];N===void 0&&(N={},W[E]=N);let z=N[B.id];z===void 0&&(z={},N[B.id]=z);let le=z[D];return le===void 0&&(le=h(c()),z[D]=le),le}function h(Y){let $=[],B=[],A=[];for(let D=0;D<t;D++)$[D]=0,B[D]=0,A[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:B,attributeDivisors:A,object:Y,attributes:{},index:null}}function d(Y,$,B,A){let D=r.attributes,W=$.attributes,E=0,N=B.getAttributes();for(let z in N)if(N[z].location>=0){let G=D[z],fe=W[z];if(fe===void 0&&(z==="instanceMatrix"&&Y.instanceMatrix&&(fe=Y.instanceMatrix),z==="instanceColor"&&Y.instanceColor&&(fe=Y.instanceColor)),G===void 0||G.attribute!==fe||fe&&G.data!==fe.data)return!0;E++}return r.attributesNum!==E||r.index!==A}function _(Y,$,B,A){let D={},W=$.attributes,E=0,N=B.getAttributes();for(let z in N)if(N[z].location>=0){let G=W[z];G===void 0&&(z==="instanceMatrix"&&Y.instanceMatrix&&(G=Y.instanceMatrix),z==="instanceColor"&&Y.instanceColor&&(G=Y.instanceColor));let fe={};fe.attribute=G,G&&G.data&&(fe.data=G.data),D[z]=fe,E++}r.attributes=D,r.attributesNum=E,r.index=A}function y(){let Y=r.newAttributes;for(let $=0,B=Y.length;$<B;$++)Y[$]=0}function x(Y){p(Y,0)}function p(Y,$){let B=r.newAttributes,A=r.enabledAttributes,D=r.attributeDivisors;B[Y]=1,A[Y]===0&&(i.enableVertexAttribArray(Y),A[Y]=1),D[Y]!==$&&(i.vertexAttribDivisor(Y,$),D[Y]=$)}function C(){let Y=r.newAttributes,$=r.enabledAttributes;for(let B=0,A=$.length;B<A;B++)$[B]!==Y[B]&&(i.disableVertexAttribArray(B),$[B]=0)}function w(Y,$,B,A,D,W,E){E===!0?i.vertexAttribIPointer(Y,$,B,D,W):i.vertexAttribPointer(Y,$,B,A,D,W)}function v(Y,$,B,A){y();let D=A.attributes,W=B.getAttributes(),E=$.defaultAttributeValues;for(let N in W){let z=W[N];if(z.location>=0){let le=D[N];if(le===void 0&&(N==="instanceMatrix"&&Y.instanceMatrix&&(le=Y.instanceMatrix),N==="instanceColor"&&Y.instanceColor&&(le=Y.instanceColor)),le!==void 0){let G=le.normalized,fe=le.itemSize,ne=e.get(le);if(ne===void 0)continue;let ye=ne.buffer,Ce=ne.type,Ue=ne.bytesPerElement,ie=Ce===i.INT||Ce===i.UNSIGNED_INT||le.gpuType===ro;if(le.isInterleavedBufferAttribute){let de=le.data,we=de.stride,te=le.offset;if(de.isInstancedInterleavedBuffer){for(let ue=0;ue<z.locationSize;ue++)p(z.location+ue,de.meshPerAttribute);Y.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ue=0;ue<z.locationSize;ue++)x(z.location+ue);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let ue=0;ue<z.locationSize;ue++)w(z.location+ue,fe/z.locationSize,Ce,G,we*Ue,(te+fe/z.locationSize*ue)*Ue,ie)}else{if(le.isInstancedBufferAttribute){for(let de=0;de<z.locationSize;de++)p(z.location+de,le.meshPerAttribute);Y.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let de=0;de<z.locationSize;de++)x(z.location+de);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let de=0;de<z.locationSize;de++)w(z.location+de,fe/z.locationSize,Ce,G,fe*Ue,fe/z.locationSize*de*Ue,ie)}}else if(E!==void 0){let G=E[N];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(z.location,G);break;case 3:i.vertexAttrib3fv(z.location,G);break;case 4:i.vertexAttrib4fv(z.location,G);break;default:i.vertexAttrib1fv(z.location,G)}}}}C()}function P(){L();for(let Y in n){let $=n[Y];for(let B in $){let A=$[B];for(let D in A){let W=A[D];for(let E in W)f(W[E].object),delete W[E];delete A[D]}}delete n[Y]}}function T(Y){if(n[Y.id]===void 0)return;let $=n[Y.id];for(let B in $){let A=$[B];for(let D in A){let W=A[D];for(let E in W)f(W[E].object),delete W[E];delete A[D]}}delete n[Y.id]}function R(Y){for(let $ in n){let B=n[$];for(let A in B){let D=B[A];if(D[Y.id]===void 0)continue;let W=D[Y.id];for(let E in W)f(W[E].object),delete W[E];delete D[Y.id]}}}function m(Y){for(let $ in n){let B=n[$],A=Y.isInstancedMesh===!0?Y.id:0,D=B[A];if(D!==void 0){for(let W in D){let E=D[W];for(let N in E)f(E[N].object),delete E[N];delete D[W]}delete B[A],Object.keys(B).length===0&&delete n[$]}}}function L(){O(),a=!0,r!==s&&(r=s,l(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:O,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfObject:m,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:x,disableUnusedAttributes:C}}function bm(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,f){f!==0&&(i.drawArraysInstanced(n,c,l,f),t.update(l,n,f))}function o(c,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,f);let h=0;for(let d=0;d<f;d++)h+=l[d];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Sm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==mn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let m=R===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==rn&&R!==pn&&!m&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",f=c(l);f!==l&&(et("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);let u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:C,maxVaryings:w,maxFragmentUniforms:v,maxSamples:P,samples:T}}function Em(i){let e=this,t=null,n=0,s=!1,r=!1,a=new en,o=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let d=u.length!==0||h||n!==0||s;return s=h,n=u.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=f(u,h,0)},this.setState=function(u,h,d){let _=u.clippingPlanes,y=u.clipIntersection,x=u.clipShadows,p=i.get(u);if(!s||_===null||_.length===0||r&&!x)r?f(null):l();else{let C=r?0:n,w=C*4,v=p.clippingState||null;c.value=v,v=f(_,h,w,d);for(let P=0;P!==w;++P)v[P]=t[P];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(u,h,d,_){let y=u!==null?u.length:0,x=null;if(y!==0){if(x=c.value,_!==!0||x===null){let p=d+y*4,C=h.matrixWorldInverse;o.getNormalMatrix(C),(x===null||x.length<p)&&(x=new Float32Array(p));for(let w=0,v=d;w!==y;++w,v+=4)a.copy(u[w]).applyMatrix4(C,o),a.normal.toArray(x,v),x[v+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}}var Ns=4,Tm=6,wm=20,Am=256,Fr=new As,Tf=new tt,yc=null,vc=0,Mc=0,bc=!1,Rm=new q,Hi=new q,Zo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Rm}=r;yc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yc,vc,Mc),this._renderer.xr.enabled=bc,e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yi||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:An,format:mn,colorSpace:tr,depthBuffer:!1},s=wf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Cm(r)),this._blurMaterial=Im(r,e,t),this._ggxMaterial=Pm(r,e,t)}return s}_compileMaterial(e){let t=new ht(new Nt,e);this._renderer.compile(t,Fr)}_sceneToCubeUV(e,t,n,s,r){let c=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Tf),u.toneMapping=Tn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ht(new zn,new je({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,x=y.material,p=!1,C=e.background;C?C.isColor&&(x.color.copy(C),e.background=null,p=!0):(x.color.copy(Tf),p=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+f[w],r.y,r.z)):v===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+f[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+f[w]));let P=this._cubeSize;Ds(s,v*P,w>2?P:0,P,P),u.setRenderTarget(s),p&&u.render(y,c),u.render(e,c)}u.toneMapping=d,u.autoClear=h,e.background=C}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===yi||e.mapping===Oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Af());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Ds(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Fr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-f*f),h=l*1.25,d=u*h,{_lodMax:_}=this,y=this._sizeLods[n],x=3*y*(n>_-Ns?n-_+Ns:0),p=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=_-t,Ds(r,x,p,3*y,2*y),s.setRenderTarget(r),s.render(o,Fr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,Ds(e,x,p,3*y,2*y),s.setRenderTarget(e),s.render(o,Fr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let f=this._sizeLods[s],u=3*f*(s>this._lodMax-Ns?s-this._lodMax+Ns:0),h=4*(this._cubeSize-f);Ds(t,u,h,3*f,2*f),a.setRenderTarget(t),a.render(c,Fr)}};function Cm(i){let e=[],t=[],n=i,s=i-Ns+1+Tm;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,f=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,h=6,d=3,_=new Float32Array(d*h*u),y=new Float32Array(d*h*u);for(let p=0;p<u;p++){let C=p%3*2/3-1,w=p>2?0:-1,v=[C,w,0,C+2/3,w,0,C+2/3,w+1,0,C,w,0,C+2/3,w+1,0,C,w+1,0];_.set(v,d*h*p);for(let P=0;P<h;P++){let T=f[P*2]*2-1,R=f[P*2+1]*2-1;p===0?Hi.set(1,R,T):p===1?Hi.set(-T,1,-R):p===2?Hi.set(-T,R,1):p===3?Hi.set(-1,R,-T):p===4?Hi.set(-T,-1,R):Hi.set(T,R,-1),Hi.toArray(y,(p*h+P)*d)}}let x=new Nt;x.setAttribute("position",new Zt(_,d)),x.setAttribute("outputDirection",new Zt(y,d)),t.push(new ht(x,null)),n>Ns&&n--}return{lodMeshes:t,sizeLods:e}}function wf(i,e,t){let n=new tn(i,e,t);return n.texture.mapping=Rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Pm(i,e,t){return new hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Am,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$o(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Im(i,e,t){return new hn({name:"SphericalGaussianBlur",defines:{SAMPLES:wm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$o(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Af(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$o(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Rf(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function $o(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Jo=class extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new dr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zn(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Gn});r.uniforms.tEquirect.value=t;let a=new ht(s,r),o=t.minFilter;return t.minFilter===vi&&(t.minFilter=Gt),new eo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Lm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===no||d===io)if(e.has(h)){let _=e.get(h).texture;return o(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let y=new Jo(_.height);return y.fromEquirectangularTexture(i,h),e.set(h,y),h.addEventListener("dispose",l),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,_=d===no||d===io,y=d===yi||d===Oi;if(_||y){let x=t.get(h),p=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Zo(i)),x=_?n.fromEquirectangular(h,x):n.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{let C=h.image;return _&&C&&C.height>0||y&&C&&c(C)?(n===null&&(n=new Zo(i)),x=_?n.fromEquirectangular(h):n.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",f),x.texture):null}}}return h}function o(h,d){return d===no?h.mapping=yi:d===io&&(h.mapping=Oi),h}function c(h){let d=0,_=6;for(let y=0;y<_;y++)h[y]!==void 0&&d++;return d===_}function l(h){let d=h.target;d.removeEventListener("dispose",l);let _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function f(h){let d=h.target;d.removeEventListener("dispose",f);let _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Dm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Pi("WebGLRenderer: "+n+" extension not supported."),s}}}function Nm(i,e,t,n){let s={},r=new WeakMap;function a(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];let d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(u){let h=u.attributes;for(let d in h)e.update(h[d],i.ARRAY_BUFFER)}function l(u){let h=[],d=u.index,_=u.attributes.position,y=0;if(_===void 0)return;if(d!==null){let C=d.array;y=d.version;for(let w=0,v=C.length;w<v;w+=3){let P=C[w+0],T=C[w+1],R=C[w+2];h.push(P,T,T,R,R,P)}}else{let C=_.array;y=_.version;for(let w=0,v=C.length/3-1;w<v;w+=3){let P=w+0,T=w+1,R=w+2;h.push(P,T,T,R,R,P)}}let x=new(_.count>=65535?lr:or)(h,1);x.version=y;let p=r.get(u);p&&e.remove(p),r.set(u,x)}function f(u){let h=r.get(u);if(h){let d=u.index;d!==null&&h.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:f}}function Um(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,h){i.drawElements(n,h,r,u*a),t.update(h,n,1)}function l(u,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,u*a,d),t.update(h,n,d))}function f(u,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,u,0,d);let y=0;for(let x=0;x<d;x++)y+=h[x];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f}function Fm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Om(i,e,t){let n=new WeakMap,s=new wt;function r(a,o,c){let l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0,h=n.get(o);if(h===void 0||h.count!==u){let L=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",L)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],C=o.morphAttributes.color||[],w=0;d===!0&&(w=1),_===!0&&(w=2),y===!0&&(w=3);let v=o.attributes.position.count*w,P=1;v>e.maxTextureSize&&(P=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*P*4*u),R=new rr(T,v,P,u);R.type=pn,R.needsUpdate=!0;let m=w*4;for(let O=0;O<u;O++){let Y=x[O],$=p[O],B=C[O],A=v*P*4*O;for(let D=0;D<Y.count;D++){let W=D*m;d===!0&&(s.fromBufferAttribute(Y,D),T[A+W+0]=s.x,T[A+W+1]=s.y,T[A+W+2]=s.z,T[A+W+3]=0),_===!0&&(s.fromBufferAttribute($,D),T[A+W+4]=s.x,T[A+W+5]=s.y,T[A+W+6]=s.z,T[A+W+7]=0),y===!0&&(s.fromBufferAttribute(B,D),T[A+W+8]=s.x,T[A+W+9]=s.y,T[A+W+10]=s.z,T[A+W+11]=B.itemSize===4?s.w:1)}}h={count:u,texture:R,size:new Ne(v,P)},n.set(o,h),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let _=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Bm(i,e,t,n,s){let r=new WeakMap;function a(l){let f=s.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==f&&(e.update(h),r.set(h,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==f&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==f&&(d.update(),r.set(d,f))}return h}function o(){r=new WeakMap}function c(l){let f=l.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}var Hm={[Ql]:"LINEAR_TONE_MAPPING",[ec]:"REINHARD_TONE_MAPPING",[tc]:"CINEON_TONE_MAPPING",[nc]:"ACES_FILMIC_TONE_MAPPING",[sc]:"AGX_TONE_MAPPING",[Ar]:"NEUTRAL_TONE_MAPPING",[ic]:"CUSTOM_TONE_MAPPING"};function zm(i,e,t,n,s,r){let a=new tn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Nt;l.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new _t([0,2,0,0,2,0],2));let f=new ka({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ht(l,f),h=new As(-1,1,1,-1,0,1),d=null,_=null,y=!1,x,p=null,C=[],w=!1;this.setSize=function(v,P){a.setSize(v,P),o!==null&&o.setSize(v,P),c!==null&&c.setSize(v,P);for(let T=0;T<C.length;T++){let R=C[T];R.setSize&&R.setSize(v,P)}},this.setEffects=function(v){C=v,w=C.length>0&&C[0].isRenderPass===!0;let P=a.width,T=a.height;C.length>0&&o===null&&(o=new tn(P,T,{type:An,depthBuffer:!1,stencilBuffer:!1}),c=new tn(P,T,{type:An,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<C.length;R++){let m=C[R];m.setSize&&m.setSize(P,T)}},this.begin=function(v,P){if(y||v.toneMapping===Tn&&C.length===0)return!1;if(p=P,P!==null){let T=P.width,R=P.height;(a.width!==T||a.height!==R)&&this.setSize(T,R)}return w===!1&&v.setRenderTarget(a),x=v.toneMapping,v.toneMapping=Tn,!0},this.hasRenderPass=function(){return w},this.end=function(v,P){v.toneMapping=x,y=!0;let T=a,R=o;for(let m=0;m<C.length;m++){let L=C[m];L.enabled!==!1&&(L.render(v,R,T,P),L.needsSwap!==!1&&(T=R,R=R===o?c:o))}if(d!==v.outputColorSpace||_!==v.toneMapping){d=v.outputColorSpace,_=v.toneMapping,f.defines={},ct.getTransfer(d)===xt&&(f.defines.SRGB_TRANSFER="");let m=Hm[_];m&&(f.defines[m]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(p),v.render(u,h),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),f.dispose()}}var Zf=new Qt,Tc=new di(1,1),Jf=new rr,$f=new Ia,Kf=new dr,Cf=[],Pf=[],If=new Float32Array(16),Lf=new Float32Array(9),Df=new Float32Array(4);function Fs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Cf[s];if(r===void 0&&(r=new Float32Array(s),Cf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ko(i,e){let t=Pf[e];t===void 0&&(t=new Int32Array(e),Pf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function km(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function Vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function Wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function Xm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;Df.set(n),i.uniformMatrix2fv(this.addr,!1,Df),Ft(t,n)}}function qm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;Lf.set(n),i.uniformMatrix3fv(this.addr,!1,Lf),Ft(t,n)}}function Ym(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;If.set(n),i.uniformMatrix4fv(this.addr,!1,If),Ft(t,n)}}function Zm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function $m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function Km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function jm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function ng(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tc.compareFunction=t.isReversedDepthBuffer()?Xo:Wo,r=Tc):r=Zf,t.setTexture2D(e||r,s)}function ig(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$f,s)}function sg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Kf,s)}function rg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Jf,s)}function ag(i){switch(i){case 5126:return km;case 35664:return Gm;case 35665:return Vm;case 35666:return Wm;case 35674:return Xm;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return Zm;case 35667:case 35671:return Jm;case 35668:case 35672:return $m;case 35669:case 35673:return Km;case 5125:return jm;case 36294:return Qm;case 36295:return eg;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}function og(i,e){i.uniform1fv(this.addr,e)}function lg(i,e){let t=Fs(e,this.size,2);i.uniform2fv(this.addr,t)}function cg(i,e){let t=Fs(e,this.size,3);i.uniform3fv(this.addr,t)}function hg(i,e){let t=Fs(e,this.size,4);i.uniform4fv(this.addr,t)}function fg(i,e){let t=Fs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ug(i,e){let t=Fs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function dg(i,e){let t=Fs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function pg(i,e){i.uniform1iv(this.addr,e)}function mg(i,e){i.uniform2iv(this.addr,e)}function gg(i,e){i.uniform3iv(this.addr,e)}function xg(i,e){i.uniform4iv(this.addr,e)}function _g(i,e){i.uniform1uiv(this.addr,e)}function yg(i,e){i.uniform2uiv(this.addr,e)}function vg(i,e){i.uniform3uiv(this.addr,e)}function Mg(i,e){i.uniform4uiv(this.addr,e)}function bg(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Tc:a=Zf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Sg(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||$f,r[a])}function Eg(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Kf,r[a])}function Tg(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Jf,r[a])}function wg(i){switch(i){case 5126:return og;case 35664:return lg;case 35665:return cg;case 35666:return hg;case 35674:return fg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return xg;case 5125:return _g;case 36294:return yg;case 36295:return vg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Tg}}var wc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ag(t.type)}},Ac=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wg(t.type)}},Rc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Sc=/(\w+)(\])?(\[|\.)?/g;function Nf(i,e){i.seq.push(e),i.map[e.id]=e}function Ag(i,e,t){let n=i.name,s=n.length;for(Sc.lastIndex=0;;){let r=Sc.exec(n),a=Sc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Nf(t,l===void 0?new wc(o,i,e):new Ac(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Rc(o),Nf(t,u)),t=u}}}var Us=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Ag(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Uf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Rg=37297,Cg=0;function Pg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ff=new nt;function Ig(i){ct._getMatrix(Ff,ct.workingColorSpace,i);let e=`mat3( ${Ff.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case nr:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Of(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Pg(i.getShaderSource(e),o)}else return r}function Lg(i,e){let t=Ig(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Dg={[Ql]:"Linear",[ec]:"Reinhard",[tc]:"Cineon",[nc]:"ACESFilmic",[sc]:"AgX",[Ar]:"Neutral",[ic]:"Custom"};function Ng(i,e){let t=Dg[e];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Yo=new q;function Ug(){ct.getLuminanceCoefficients(Yo);let i=Yo.x.toFixed(4),e=Yo.y.toFixed(4),t=Yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function Og(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Br(i){return i!==""}function Bf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(i){return i.replace(Hg,kg)}var zg=new Map;function kg(i,e){let t=rt[e];if(t===void 0){let n=zg.get(e);if(n!==void 0)t=rt[n],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Cc(t)}var Gg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zf(i){return i.replace(Gg,Vg)}function Vg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Wg={[Ui]:"SHADOWMAP_TYPE_PCF",[Cs]:"SHADOWMAP_TYPE_VSM"};function Xg(i){return Wg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var qg={[yi]:"ENVMAP_TYPE_CUBE",[Oi]:"ENVMAP_TYPE_CUBE",[Rr]:"ENVMAP_TYPE_CUBE_UV"};function Yg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":qg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Zg={[Oi]:"ENVMAP_MODE_REFRACTION"};function Jg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Zg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $g={[jl]:"ENVMAP_BLENDING_MULTIPLY",[Qh]:"ENVMAP_BLENDING_MIX",[ef]:"ENVMAP_BLENDING_ADD"};function Kg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":$g[i.combine]||"ENVMAP_BLENDING_NONE"}function jg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Qg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Xg(t),l=Yg(t),f=Jg(t),u=Kg(t),h=jg(t),d=Fg(t),_=Og(r),y=s.createProgram(),x,p,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Br).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Br).join(`
`),p.length>0&&(p+=`
`)):(x=[kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),p=[kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?rt.tonemapping_pars_fragment:"",t.toneMapping!==Tn?Ng("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Lg("linearToOutputTexel",t.outputColorSpace),Ug(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Br).join(`
`)),a=Cc(a),a=Bf(a,t),a=Hf(a,t),o=Cc(o),o=Bf(o,t),o=Hf(o,t),a=zf(a),o=zf(o),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=C+x+a,v=C+p+o,P=Uf(s,s.VERTEX_SHADER,w),T=Uf(s,s.FRAGMENT_SHADER,v);s.attachShader(y,P),s.attachShader(y,T),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(Y){if(i.debug.checkShaderErrors){let $=s.getProgramInfoLog(y)||"",B=s.getShaderInfoLog(P)||"",A=s.getShaderInfoLog(T)||"",D=$.trim(),W=B.trim(),E=A.trim(),N=!0,z=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,P,T);else{let le=Of(s,P,"vertex"),G=Of(s,T,"fragment");Qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+D+`
`+le+`
`+G)}else D!==""?et("WebGLProgram: Program Info Log:",D):(W===""||E==="")&&(z=!1);z&&(Y.diagnostics={runnable:N,programLog:D,vertexShader:{log:W,prefix:x},fragmentShader:{log:E,prefix:p}})}s.deleteShader(P),s.deleteShader(T),m=new Us(s,y),L=Bg(s,y)}let m;this.getUniforms=function(){return m===void 0&&R(this),m};let L;this.getAttributes=function(){return L===void 0&&R(this),L};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(y,Rg)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cg++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=T,this}var ex=0,Pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ic(e),t.set(e,n)),n}},Ic=class{constructor(e){this.id=ex++,this.code=e,this.usedTimes=0}};function tx(i){return i===bi||i===Nr||i===Ur}function nx(i,e,t,n,s,r){let a=new gs,o=new Pc,c=new Set,l=[],f=new Map,u=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(m){return c.add(m),m===0?"uv":`uv${m}`}function y(m,L,O,Y,$,B){let A=Y.fog,D=$.geometry,W=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?Y.environment:null,E=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,N=e.get(m.envMap||W,E),z=N&&N.mapping===Rr?N.image.height:null,le=d[m.type];m.precision!==null&&(h=n.getMaxPrecision(m.precision),h!==m.precision&&et("WebGLProgram.getParameters:",m.precision,"not supported, using",h,"instead."));let G=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,fe=G!==void 0?G.length:0,ne=0;D.morphAttributes.position!==void 0&&(ne=1),D.morphAttributes.normal!==void 0&&(ne=2),D.morphAttributes.color!==void 0&&(ne=3);let ye,Ce,Ue,ie;if(le){let bt=Wn[le];ye=bt.vertexShader,Ce=bt.fragmentShader}else{ye=m.vertexShader,Ce=m.fragmentShader;let bt=o.getVertexShaderStage(m),mt=o.getFragmentShaderStage(m);o.update(m,bt,mt),Ue=bt.id,ie=mt.id}let de=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),te=$.isInstancedMesh===!0,ue=$.isBatchedMesh===!0,Fe=!!m.map,Me=!!m.matcap,ge=!!N,me=!!m.aoMap,Se=!!m.lightMap,Te=!!m.bumpMap&&m.wireframe===!1,Oe=!!m.normalMap,ee=!!m.displacementMap,oe=!!m.emissiveMap,ve=!!m.metalnessMap,Pe=!!m.roughnessMap,X=m.anisotropy>0,it=m.clearcoat>0,j=m.dispersion>0,b=m.retroreflectivity>0,g=m.iridescence>0,U=m.sheen>0,F=m.transmission>0,V=X&&!!m.anisotropyMap,J=it&&!!m.clearcoatMap,se=it&&!!m.clearcoatNormalMap,H=it&&!!m.clearcoatRoughnessMap,Z=g&&!!m.iridescenceMap,xe=g&&!!m.iridescenceThicknessMap,Ee=U&&!!m.sheenColorMap,k=U&&!!m.sheenRoughnessMap,_e=!!m.specularMap,Le=!!m.specularColorMap,Be=!!m.specularIntensityMap,We=F&&!!m.transmissionMap,K=F&&!!m.thicknessMap,De=!!m.gradientMap,be=!!m.alphaMap,He=m.alphaTest>0,Ve=!!m.alphaHash,Ae=!!m.extensions,Ke=Tn;m.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Ke=i.toneMapping);let Je={shaderID:le,shaderType:m.type,shaderName:m.name,vertexShader:ye,fragmentShader:Ce,defines:m.defines,customVertexShaderID:Ue,customFragmentShaderID:ie,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:h,batching:ue,batchingColor:ue&&$._colorsTexture!==null,instancing:te,instancingColor:te&&$.instanceColor!==null,instancingMorph:te&&$.morphTexture!==null,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Fe,matcap:Me,envMap:ge,envMapMode:ge&&N.mapping,envMapCubeUVHeight:z,aoMap:me,lightMap:Se,bumpMap:Te,normalMap:Oe,displacementMap:ee,emissiveMap:oe,normalMapObjectSpace:Oe&&m.normalMapType===sf,normalMapTangentSpace:Oe&&m.normalMapType===Vo,packedNormalMap:Oe&&m.normalMapType===Vo&&tx(m.normalMap.format),metalnessMap:ve,roughnessMap:Pe,anisotropy:X,anisotropyMap:V,clearcoat:it,clearcoatMap:J,clearcoatNormalMap:se,clearcoatRoughnessMap:H,dispersion:j,retroreflection:b,iridescence:g,iridescenceMap:Z,iridescenceThicknessMap:xe,sheen:U,sheenColorMap:Ee,sheenRoughnessMap:k,specularMap:_e,specularColorMap:Le,specularIntensityMap:Be,transmission:F,transmissionMap:We,thicknessMap:K,gradientMap:De,opaque:m.transparent===!1&&m.blending===Ps&&m.alphaToCoverage===!1,alphaMap:be,alphaTest:He,alphaHash:Ve,combine:m.combine,mapUv:Fe&&_(m.map.channel),aoMapUv:me&&_(m.aoMap.channel),lightMapUv:Se&&_(m.lightMap.channel),bumpMapUv:Te&&_(m.bumpMap.channel),normalMapUv:Oe&&_(m.normalMap.channel),displacementMapUv:ee&&_(m.displacementMap.channel),emissiveMapUv:oe&&_(m.emissiveMap.channel),metalnessMapUv:ve&&_(m.metalnessMap.channel),roughnessMapUv:Pe&&_(m.roughnessMap.channel),anisotropyMapUv:V&&_(m.anisotropyMap.channel),clearcoatMapUv:J&&_(m.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&_(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(m.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&_(m.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&_(m.sheenColorMap.channel),sheenRoughnessMapUv:k&&_(m.sheenRoughnessMap.channel),specularMapUv:_e&&_(m.specularMap.channel),specularColorMapUv:Le&&_(m.specularColorMap.channel),specularIntensityMapUv:Be&&_(m.specularIntensityMap.channel),transmissionMapUv:We&&_(m.transmissionMap.channel),thicknessMapUv:K&&_(m.thicknessMap.channel),alphaMapUv:be&&_(m.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Oe||X),vertexNormals:!!D.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!D.attributes.uv&&(Fe||be),fog:!!A,useFog:m.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||D.attributes.normal===void 0&&Oe===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:we,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ne,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Fe&&m.map.isVideoTexture===!0&&ct.getTransfer(m.map.colorSpace)===xt,decodeVideoTextureEmissive:oe&&m.emissiveMap.isVideoTexture===!0&&ct.getTransfer(m.emissiveMap.colorSpace)===xt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Wt,flipSided:m.side===Vt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Ae&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&m.extensions.multiDraw===!0||ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function x(m){let L=[];if(m.shaderID?L.push(m.shaderID):(L.push(m.customVertexShaderID),L.push(m.customFragmentShaderID)),m.defines!==void 0)for(let O in m.defines)L.push(O),L.push(m.defines[O]);return m.isRawShaderMaterial===!1&&(p(L,m),C(L,m),L.push(i.outputColorSpace)),L.push(m.customProgramCacheKey),L.join()}function p(m,L){m.push(L.precision),m.push(L.outputColorSpace),m.push(L.envMapMode),m.push(L.envMapCubeUVHeight),m.push(L.mapUv),m.push(L.alphaMapUv),m.push(L.lightMapUv),m.push(L.aoMapUv),m.push(L.bumpMapUv),m.push(L.normalMapUv),m.push(L.displacementMapUv),m.push(L.emissiveMapUv),m.push(L.metalnessMapUv),m.push(L.roughnessMapUv),m.push(L.anisotropyMapUv),m.push(L.clearcoatMapUv),m.push(L.clearcoatNormalMapUv),m.push(L.clearcoatRoughnessMapUv),m.push(L.iridescenceMapUv),m.push(L.iridescenceThicknessMapUv),m.push(L.sheenColorMapUv),m.push(L.sheenRoughnessMapUv),m.push(L.specularMapUv),m.push(L.specularColorMapUv),m.push(L.specularIntensityMapUv),m.push(L.transmissionMapUv),m.push(L.thicknessMapUv),m.push(L.combine),m.push(L.fogExp2),m.push(L.sizeAttenuation),m.push(L.morphTargetsCount),m.push(L.morphAttributeCount),m.push(L.numSunLights),m.push(L.numDirLights),m.push(L.numPointLights),m.push(L.numSpotLights),m.push(L.numSpotLightMaps),m.push(L.numHemiLights),m.push(L.numRectAreaLights),m.push(L.numSunLightShadows),m.push(L.numDirLightShadows),m.push(L.numPointLightShadows),m.push(L.numSpotLightShadows),m.push(L.numSpotLightShadowsWithMaps),m.push(L.numLightProbes),m.push(L.shadowMapType),m.push(L.toneMapping),m.push(L.numClippingPlanes),m.push(L.numClipIntersection),m.push(L.depthPacking)}function C(m,L){a.disableAll(),L.instancing&&a.enable(0),L.instancingColor&&a.enable(1),L.instancingMorph&&a.enable(2),L.matcap&&a.enable(3),L.envMap&&a.enable(4),L.normalMapObjectSpace&&a.enable(5),L.normalMapTangentSpace&&a.enable(6),L.clearcoat&&a.enable(7),L.iridescence&&a.enable(8),L.alphaTest&&a.enable(9),L.vertexColors&&a.enable(10),L.vertexAlphas&&a.enable(11),L.vertexUv1s&&a.enable(12),L.vertexUv2s&&a.enable(13),L.vertexUv3s&&a.enable(14),L.vertexTangents&&a.enable(15),L.anisotropy&&a.enable(16),L.alphaHash&&a.enable(17),L.batching&&a.enable(18),L.dispersion&&a.enable(19),L.retroreflection&&a.enable(24),L.batchingColor&&a.enable(20),L.gradientMap&&a.enable(21),L.packedNormalMap&&a.enable(22),L.vertexNormals&&a.enable(23),m.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.reversedDepthBuffer&&a.enable(4),L.skinning&&a.enable(5),L.morphTargets&&a.enable(6),L.morphNormals&&a.enable(7),L.morphColors&&a.enable(8),L.premultipliedAlpha&&a.enable(9),L.shadowMapEnabled&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.transmission&&a.enable(15),L.sheen&&a.enable(16),L.opaque&&a.enable(17),L.pointsUvs&&a.enable(18),L.decodeVideoTexture&&a.enable(19),L.decodeVideoTextureEmissive&&a.enable(20),L.alphaToCoverage&&a.enable(21),L.numLightProbeGrids>0&&a.enable(22),L.hasPositionAttribute&&a.enable(23),m.push(a.mask)}function w(m){let L=d[m.type],O;if(L){let Y=Wn[L];O=bf.clone(Y.uniforms)}else O=m.uniforms;return O}function v(m,L){let O=f.get(L);return O!==void 0?++O.usedTimes:(O=new Qg(i,L,m,s),l.push(O),f.set(L,O)),O}function P(m){if(--m.usedTimes===0){let L=l.indexOf(m);l[L]=l[l.length-1],l.pop(),f.delete(m.cacheKey),m.destroy()}}function T(m){o.remove(m)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:w,acquireProgram:v,releaseProgram:P,releaseShaderCache:T,programs:l,dispose:R}}function ix(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function sx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Gf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,_,y,x,p){let C=i[e];return C===void 0?(C={id:h.id,object:h,geometry:d,material:_,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:x,group:p},i[e]=C):(C.id=h.id,C.object=h,C.geometry=d,C.material=_,C.materialVariant=a(h),C.groupOrder=y,C.renderOrder=h.renderOrder,C.z=x,C.group=p),e++,C}function c(h,d,_,y,x,p,C){C.reversedDepth===!0&&(x=-x);let w=o(h,d,_,y,x,p);_.transmission>0?n.push(w):_.transparent===!0?s.push(w):t.push(w)}function l(h,d,_,y,x,p){let C=o(h,d,_,y,x,p);_.transmission>0?n.unshift(C):_.transparent===!0?s.unshift(C):t.unshift(C)}function f(h,d){t.length>1&&t.sort(h||sx),n.length>1&&n.sort(d||Gf),s.length>1&&s.sort(d||Gf)}function u(){for(let h=e,d=i.length;h<d;h++){let _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:f}}function rx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Vf,i.set(n,[a])):s>=r.length?(a=new Vf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ax(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new q,color:new tt};break;case"SpotLight":t={position:new q,direction:new q,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new q,halfWidth:new q,halfHeight:new q};break}return i[e.id]=t,t}}}function ox(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var lx=0;function cx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function hx(i){let e=new ax,t=ox(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new q);let s=new q,r=new dt,a=new dt;function o(l){let f=0,u=0,h=0;for(let $=0;$<9;$++)n.probe[$].set(0,0,0);let d=0,_=0,y=0,x=0,p=0,C=0,w=0,v=0,P=0,T=0,R=0,m=0,L=0,O=0;l.sort(cx);for(let $=0,B=l.length;$<B;$++){let A=l[$],D=A.color,W=A.intensity,E=A.distance,N=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===bi?N=A.shadow.map.texture:N=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)f+=D.r*W,u+=D.g*W,h+=D.b*W;else if(A.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(A.sh.coefficients[z],W);O++}else if(A.isSunLight){let z=e.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let le=A.shadow,G=t.get(A);G.shadowIntensity=le.intensity,G.shadowBias=le.bias,G.shadowNormalBias=le.normalBias,G.shadowRadius=le.radius,G.shadowMapSize.copy(le.mapSize).multiply(le.getFrameExtents()),n.sunShadow[_]=G,n.sunShadowMap[_]=N;let fe=le.getViewportCount();for(let ne=0;ne<fe;ne++)n.sunShadowMatrix[y+ne]=le.getMatrix(ne),n.sunShadowCascade[y+ne]=le._cascadeData[ne];y+=fe,_++}n.sun[d]=z,d++}else if(A.isDirectionalLight){let z=e.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let le=A.shadow,G=t.get(A);G.shadowIntensity=le.intensity,G.shadowBias=le.bias,G.shadowNormalBias=le.normalBias,G.shadowRadius=le.radius,G.shadowMapSize=le.mapSize,n.directionalShadow[x]=G,n.directionalShadowMap[x]=N,n.directionalShadowMatrix[x]=A.shadow.matrix,P++}n.directional[x]=z,x++}else if(A.isSpotLight){let z=e.get(A);z.position.setFromMatrixPosition(A.matrixWorld),z.color.copy(D).multiplyScalar(W),z.distance=E,z.coneCos=Math.cos(A.angle),z.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),z.decay=A.decay,n.spot[C]=z;let le=A.shadow;if(A.map&&(n.spotLightMap[m]=A.map,m++,le.updateMatrices(A),A.castShadow&&L++),n.spotLightMatrix[C]=le.matrix,A.castShadow){let G=t.get(A);G.shadowIntensity=le.intensity,G.shadowBias=le.bias,G.shadowNormalBias=le.normalBias,G.shadowRadius=le.radius,G.shadowMapSize=le.mapSize,n.spotShadow[C]=G,n.spotShadowMap[C]=N,R++}C++}else if(A.isRectAreaLight){let z=e.get(A);z.color.copy(D).multiplyScalar(W),z.halfWidth.set(A.width*.5,0,0),z.halfHeight.set(0,A.height*.5,0),n.rectArea[w]=z,w++}else if(A.isPointLight){let z=e.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),z.distance=A.distance,z.decay=A.decay,A.castShadow){let le=A.shadow,G=t.get(A);G.shadowIntensity=le.intensity,G.shadowBias=le.bias,G.shadowNormalBias=le.normalBias,G.shadowRadius=le.radius,G.shadowMapSize=le.mapSize,G.shadowCameraNear=le.camera.near,G.shadowCameraFar=le.camera.far,n.pointShadow[p]=G,n.pointShadowMap[p]=N,n.pointShadowMatrix[p]=A.shadow.matrix,T++}n.point[p]=z,p++}else if(A.isHemisphereLight){let z=e.get(A);z.skyColor.copy(A.color).multiplyScalar(W),z.groundColor.copy(A.groundColor).multiplyScalar(W),n.hemi[v]=z,v++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=u,n.ambient[2]=h;let Y=n.hash;(Y.sunLength!==d||Y.directionalLength!==x||Y.pointLength!==p||Y.spotLength!==C||Y.rectAreaLength!==w||Y.hemiLength!==v||Y.numSunShadows!==_||Y.numDirectionalShadows!==P||Y.numPointShadows!==T||Y.numSpotShadows!==R||Y.numSpotMaps!==m||Y.numLightProbes!==O)&&(n.sun.length=d,n.directional.length=x,n.spot.length=C,n.rectArea.length=w,n.point.length=p,n.hemi.length=v,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.directionalShadowMatrix.length=P,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+m-L,n.spotLightMap.length=m,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=O,Y.sunLength=d,Y.directionalLength=x,Y.pointLength=p,Y.spotLength=C,Y.rectAreaLength=w,Y.hemiLength=v,Y.numSunShadows=_,Y.numDirectionalShadows=P,Y.numPointShadows=T,Y.numSpotShadows=R,Y.numSpotMaps=m,Y.numLightProbes=O,n.version=lx++)}function c(l,f){let u=0,h=0,d=0,_=0,y=0,x=0,p=f.matrixWorldInverse;for(let C=0,w=l.length;C<w;C++){let v=l[C];if(v.isSunLight){let P=n.sun[u];P.direction.setFromMatrixPosition(v.matrixWorld),P.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let P=n.directional[h];P.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(p),h++}else if(v.isSpotLight){let P=n.spot[_];P.position.setFromMatrixPosition(v.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(p),_++}else if(v.isRectAreaLight){let P=n.rectArea[y];P.position.setFromMatrixPosition(v.matrixWorld),P.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),P.halfWidth.set(v.width*.5,0,0),P.halfHeight.set(0,v.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let P=n.point[d];P.position.setFromMatrixPosition(v.matrixWorld),P.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let P=n.hemi[x];P.direction.setFromMatrixPosition(v.matrixWorld),P.direction.transformDirection(p),x++}}}return{setup:o,setupView:c,state:n}}function Wf(i){let e=new hx(i),t=[],n=[],s=[];function r(h){u.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function f(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function fx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Wf(i),e.set(s,[o])):r>=a.length?(o=new Wf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ux=`void main() {
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
}`,px=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],mx=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Xf=new dt,Or=new q,Ec=new q;function gx(i,e,t){let n=new vs,s=new Ne,r=new Ne,a=new wt,o=new Ga,c=new Va,l={},f=t.maxTextureSize,u={[xi]:Vt,[Vt]:xi,[Wt]:Wt},h=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:ux,fragmentShader:dx}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let _=new Nt;_.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ht(_,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ui;let p=this.type;this.render=function(T,R,m){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||T.length===0)return;this.type===Nh&&(et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ui);let L=i.getRenderTarget(),O=i.getActiveCubeFace(),Y=i.getActiveMipmapLevel(),$=i.state;$.setBlending(Gn),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let B=p!==this.type;B&&R.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(D=>D.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,D=T.length;A<D;A++){let W=T[A],E=W.shadow;if(E===void 0){et("WebGLShadowMap:",W,"has no shadow.");continue}if(E.autoUpdate===!1&&E.needsUpdate===!1)continue;s.copy(E.mapSize);let N=E.getFrameExtents();s.multiply(N),r.copy(E.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/N.x),s.x=r.x*N.x,E.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/N.y),s.y=r.y*N.y,E.mapSize.y=r.y));let z=i.state.buffers.depth.getReversed();if(E.camera._reversedDepth=z,E.map===null||B===!0){if(E.map!==null&&(E.map.depthTexture!==null&&(E.map.depthTexture.dispose(),E.map.depthTexture=null),E.map.dispose()),this.type===Cs){if(W.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}E.map=new tn(s.x,s.y,{format:bi,type:An,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),E.map.texture.name=W.name+".shadowMap",E.map.depthTexture=new di(s.x,s.y,pn),E.map.depthTexture.name=W.name+".shadowMapDepth",E.map.depthTexture.format=Un,E.map.depthTexture.compareFunction=null,E.map.depthTexture.minFilter=Bt,E.map.depthTexture.magFilter=Bt}else W.isPointLight?(E.map=new Jo(s.x),E.map.depthTexture=new Da(s.x,wn)):(E.map=new tn(s.x,s.y),E.map.depthTexture=new di(s.x,s.y,wn)),E.map.depthTexture.name=W.name+".shadowMap",E.map.depthTexture.format=Un,this.type===Ui?(E.map.depthTexture.compareFunction=z?Xo:Wo,E.map.depthTexture.minFilter=Gt,E.map.depthTexture.magFilter=Gt):(E.map.depthTexture.compareFunction=null,E.map.depthTexture.minFilter=Bt,E.map.depthTexture.magFilter=Bt);E.camera.updateProjectionMatrix()}E.map.isWebGLCubeRenderTarget!==!0&&(E.map.width!==s.x||E.map.height!==s.y)&&E.map.setSize(s.x,s.y);let le=E.map.isWebGLCubeRenderTarget?6:E.getViewportCount();W.isPointLight!==!0&&E.updateMatrices(W,m);for(let G=0;G<le;G++){let fe=E.getCamera(G);if(W.isPointLight){let ne=E.camera,ye=E.matrix,Ce=W.distance||ne.far;Ce!==ne.far&&(ne.far=Ce,ne.updateProjectionMatrix()),Or.setFromMatrixPosition(W.matrixWorld),ne.position.copy(Or),Ec.copy(ne.position),Ec.add(px[G]),ne.up.copy(mx[G]),ne.lookAt(Ec),ne.updateMatrixWorld(),ye.makeTranslation(-Or.x,-Or.y,-Or.z),Xf.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),E._frustum.setFromProjectionMatrix(Xf,ne.coordinateSystem,ne.reversedDepth)}if(E.map.isWebGLCubeRenderTarget)i.setRenderTarget(E.map,G),i.clear();else{G===0&&(i.setRenderTarget(E.map),i.clear());let ne=E.getViewport(G);a.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),$.viewport(a)}n=E.getFrustum(G),v(R,m,fe,W,this.type)}E.isPointLightShadow!==!0&&this.type===Cs&&C(E,m),E.needsUpdate=!1}p=this.type,x.needsUpdate=!1,i.setRenderTarget(L,O,Y)};function C(T,R){let m=e.update(y);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new tn(s.x,s.y,{format:bi,type:An}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,m,h,y,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,m,d,y,null)}function w(T,R,m,L){let O=null,Y=m.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(Y!==void 0)O=Y;else if(O=m.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let $=O.uuid,B=R.uuid,A=l[$];A===void 0&&(A={},l[$]=A);let D=A[B];D===void 0&&(D=O.clone(),A[B]=D,R.addEventListener("dispose",P)),O=D}if(O.visible=R.visible,O.wireframe=R.wireframe,L===Cs?O.side=R.shadowSide!==null?R.shadowSide:R.side:O.side=R.shadowSide!==null?R.shadowSide:u[R.side],O.alphaMap=R.alphaMap,O.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,O.map=R.map,O.clipShadows=R.clipShadows,O.clippingPlanes=R.clippingPlanes,O.clipIntersection=R.clipIntersection,O.displacementMap=R.displacementMap,O.displacementScale=R.displacementScale,O.displacementBias=R.displacementBias,O.wireframeLinewidth=R.wireframeLinewidth,O.linewidth=R.linewidth,m.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let $=i.properties.get(O);$.light=m}return O}function v(T,R,m,L,O){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&O===Cs)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,T.matrixWorld);let B=e.update(T),A=T.material;if(Array.isArray(A)){let D=B.groups;for(let W=0,E=D.length;W<E;W++){let N=D[W],z=A[N.materialIndex];if(z&&z.visible){let le=w(T,z,L,O);T.onBeforeShadow(i,T,R,m,B,le,N),i.renderBufferDirect(m,null,B,le,T,N),T.onAfterShadow(i,T,R,m,B,le,N)}}}else if(A.visible){let D=w(T,A,L,O);T.onBeforeShadow(i,T,R,m,B,D,null),i.renderBufferDirect(m,null,B,D,T,null),T.onAfterShadow(i,T,R,m,B,D,null)}}let $=T.children;for(let B=0,A=$.length;B<A;B++)v($[B],R,m,L,O)}function P(T){T.target.removeEventListener("dispose",P);for(let m in l){let L=l[m],O=T.target.uuid;O in L&&(L[O].dispose(),delete L[O])}}}function xx(i,e){function t(){let K=!1,De=new wt,be=null,He=new wt(0,0,0,0);return{setMask:function(Ve){be!==Ve&&!K&&(i.colorMask(Ve,Ve,Ve,Ve),be=Ve)},setLocked:function(Ve){K=Ve},setClear:function(Ve,Ae,Ke,Je,bt){bt===!0&&(Ve*=Je,Ae*=Je,Ke*=Je),De.set(Ve,Ae,Ke,Je),He.equals(De)===!1&&(i.clearColor(Ve,Ae,Ke,Je),He.copy(De))},reset:function(){K=!1,be=null,He.set(-1,0,0,0)}}}function n(){let K=!1,De=!1,be=null,He=null,Ve=null;return{setReversed:function(Ae){if(De!==Ae){let Ke=e.get("EXT_clip_control");Ae?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),De=Ae;let Je=Ve;Ve=null,this.setClear(Je)}},getReversed:function(){return De},setTest:function(Ae){Ae?de(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(Ae){be!==Ae&&!K&&(i.depthMask(Ae),be=Ae)},setFunc:function(Ae){if(De&&(Ae=mf[Ae]),He!==Ae){switch(Ae){case ya:i.depthFunc(i.NEVER);break;case va:i.depthFunc(i.ALWAYS);break;case Ma:i.depthFunc(i.LESS);break;case us:i.depthFunc(i.LEQUAL);break;case ba:i.depthFunc(i.EQUAL);break;case Sa:i.depthFunc(i.GEQUAL);break;case Ea:i.depthFunc(i.GREATER);break;case Ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}He=Ae}},setLocked:function(Ae){K=Ae},setClear:function(Ae){Ve!==Ae&&(Ve=Ae,De&&(Ae=1-Ae),i.clearDepth(Ae))},reset:function(){K=!1,be=null,He=null,Ve=null,De=!1}}}function s(){let K=!1,De=null,be=null,He=null,Ve=null,Ae=null,Ke=null,Je=null,bt=null;return{setTest:function(mt){K||(mt?de(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(mt){De!==mt&&!K&&(i.stencilMask(mt),De=mt)},setFunc:function(mt,xn,Pn){(be!==mt||He!==xn||Ve!==Pn)&&(i.stencilFunc(mt,xn,Pn),be=mt,He=xn,Ve=Pn)},setOp:function(mt,xn,Pn){(Ae!==mt||Ke!==xn||Je!==Pn)&&(i.stencilOp(mt,xn,Pn),Ae=mt,Ke=xn,Je=Pn)},setLocked:function(mt){K=mt},setClear:function(mt){bt!==mt&&(i.clearStencil(mt),bt=mt)},reset:function(){K=!1,De=null,be=null,He=null,Ve=null,Ae=null,Ke=null,Je=null,bt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,f={},u={},h={},d=new WeakMap,_=[],y=null,x=!1,p=null,C=null,w=null,v=null,P=null,T=null,R=null,m=new tt(0,0,0),L=0,O=!1,Y=null,$=null,B=null,A=null,D=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),E=!1,N=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(z)[1]),E=N>=1):z.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),E=N>=2);let le=null,G={},fe=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),ye=new wt().fromArray(fe),Ce=new wt().fromArray(ne);function Ue(K,De,be,He){let Ve=new Uint8Array(4),Ae=i.createTexture();i.bindTexture(K,Ae),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<be;Ke++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(De,0,i.RGBA,1,1,He,0,i.RGBA,i.UNSIGNED_BYTE,Ve):i.texImage2D(De+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ve);return Ae}let ie={};ie[i.TEXTURE_2D]=Ue(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=Ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=Ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=Ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),de(i.DEPTH_TEST),a.setFunc(us),Te(!1),Oe(Yl),de(i.CULL_FACE),me(Gn);function de(K){f[K]!==!0&&(i.enable(K),f[K]=!0)}function we(K){f[K]!==!1&&(i.disable(K),f[K]=!1)}function te(K,De){return h[K]!==De?(i.bindFramebuffer(K,De),h[K]=De,K===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=De),K===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=De),!0):!1}function ue(K,De){let be=_,He=!1;if(K){be=d.get(De),be===void 0&&(be=[],d.set(De,be));let Ve=K.textures;if(be.length!==Ve.length||be[0]!==i.COLOR_ATTACHMENT0){for(let Ae=0,Ke=Ve.length;Ae<Ke;Ae++)be[Ae]=i.COLOR_ATTACHMENT0+Ae;be.length=Ve.length,He=!0}}else be[0]!==i.BACK&&(be[0]=i.BACK,He=!0);He&&i.drawBuffers(be)}function Fe(K){return y!==K?(i.useProgram(K),y=K,!0):!1}let Me={[Fi]:i.FUNC_ADD,[Fh]:i.FUNC_SUBTRACT,[Oh]:i.FUNC_REVERSE_SUBTRACT};Me[Bh]=i.MIN,Me[Hh]=i.MAX;let ge={[zh]:i.ZERO,[kh]:i.ONE,[Gh]:i.SRC_COLOR,[$l]:i.SRC_ALPHA,[Zh]:i.SRC_ALPHA_SATURATE,[qh]:i.DST_COLOR,[Wh]:i.DST_ALPHA,[Vh]:i.ONE_MINUS_SRC_COLOR,[Kl]:i.ONE_MINUS_SRC_ALPHA,[Yh]:i.ONE_MINUS_DST_COLOR,[Xh]:i.ONE_MINUS_DST_ALPHA,[Jh]:i.CONSTANT_COLOR,[$h]:i.ONE_MINUS_CONSTANT_COLOR,[Kh]:i.CONSTANT_ALPHA,[jh]:i.ONE_MINUS_CONSTANT_ALPHA};function me(K,De,be,He,Ve,Ae,Ke,Je,bt,mt){if(K===Gn){x===!0&&(we(i.BLEND),x=!1);return}if(x===!1&&(de(i.BLEND),x=!0),K!==Uh){if(K!==p||mt!==O){if((C!==Fi||P!==Fi)&&(i.blendEquation(i.FUNC_ADD),C=Fi,P=Fi),mt)switch(K){case Ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _i:i.blendFunc(i.ONE,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qe("WebGLState: Invalid blending: ",K);break}else switch(K){case Ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zl:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jl:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",K);break}w=null,v=null,T=null,R=null,m.set(0,0,0),L=0,p=K,O=mt}return}Ve=Ve||De,Ae=Ae||be,Ke=Ke||He,(De!==C||Ve!==P)&&(i.blendEquationSeparate(Me[De],Me[Ve]),C=De,P=Ve),(be!==w||He!==v||Ae!==T||Ke!==R)&&(i.blendFuncSeparate(ge[be],ge[He],ge[Ae],ge[Ke]),w=be,v=He,T=Ae,R=Ke),(Je.equals(m)===!1||bt!==L)&&(i.blendColor(Je.r,Je.g,Je.b,bt),m.copy(Je),L=bt),p=K,O=!1}function Se(K,De){K.side===Wt?we(i.CULL_FACE):de(i.CULL_FACE);let be=K.side===Vt;De&&(be=!be),Te(be),K.blending===Ps&&K.transparent===!1?me(Gn):me(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),a.setFunc(K.depthFunc),a.setTest(K.depthTest),a.setMask(K.depthWrite),r.setMask(K.colorWrite);let He=K.stencilWrite;o.setTest(He),He&&(o.setMask(K.stencilWriteMask),o.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),o.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),oe(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function Te(K){Y!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),Y=K)}function Oe(K){K!==Lh?(de(i.CULL_FACE),K!==$&&(K===Yl?i.cullFace(i.BACK):K===Dh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),$=K}function ee(K){K!==B&&(E&&i.lineWidth(K),B=K)}function oe(K,De,be){K?(de(i.POLYGON_OFFSET_FILL),(A!==De||D!==be)&&(A=De,D=be,a.getReversed()&&(De=-De),i.polygonOffset(De,be))):we(i.POLYGON_OFFSET_FILL)}function ve(K){K?de(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function Pe(K){K===void 0&&(K=i.TEXTURE0+W-1),le!==K&&(i.activeTexture(K),le=K)}function X(K,De,be){be===void 0&&(le===null?be=i.TEXTURE0+W-1:be=le);let He=G[be];He===void 0&&(He={type:void 0,texture:void 0},G[be]=He),(He.type!==K||He.texture!==De)&&(le!==be&&(i.activeTexture(be),le=be),i.bindTexture(K,De||ie[K]),He.type=K,He.texture=De)}function it(){let K=G[le];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function j(){try{i.compressedTexImage2D(...arguments)}catch(K){Qe("WebGLState:",K)}}function b(){try{i.compressedTexImage3D(...arguments)}catch(K){Qe("WebGLState:",K)}}function g(){try{i.texSubImage2D(...arguments)}catch(K){Qe("WebGLState:",K)}}function U(){try{i.texSubImage3D(...arguments)}catch(K){Qe("WebGLState:",K)}}function F(){try{i.compressedTexSubImage2D(...arguments)}catch(K){Qe("WebGLState:",K)}}function V(){try{i.compressedTexSubImage3D(...arguments)}catch(K){Qe("WebGLState:",K)}}function J(){try{i.texStorage2D(...arguments)}catch(K){Qe("WebGLState:",K)}}function se(){try{i.texStorage3D(...arguments)}catch(K){Qe("WebGLState:",K)}}function H(){try{i.texImage2D(...arguments)}catch(K){Qe("WebGLState:",K)}}function Z(){try{i.texImage3D(...arguments)}catch(K){Qe("WebGLState:",K)}}function xe(K){return u[K]!==void 0?u[K]:i.getParameter(K)}function Ee(K,De){u[K]!==De&&(i.pixelStorei(K,De),u[K]=De)}function k(K){ye.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),ye.copy(K))}function _e(K){Ce.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),Ce.copy(K))}function Le(K,De){let be=l.get(De);be===void 0&&(be=new WeakMap,l.set(De,be));let He=be.get(K);He===void 0&&(He=i.getUniformBlockIndex(De,K.name),be.set(K,He))}function Be(K,De){let He=l.get(De).get(K);c.get(De)!==He&&(i.uniformBlockBinding(De,He,K.__bindingPointIndex),c.set(De,He))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},u={},le=null,G={},h={},d=new WeakMap,_=[],y=null,x=!1,p=null,C=null,w=null,v=null,P=null,T=null,R=null,m=new tt(0,0,0),L=0,O=!1,Y=null,$=null,B=null,A=null,D=null,ye.set(0,0,i.canvas.width,i.canvas.height),Ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:de,disable:we,bindFramebuffer:te,drawBuffers:ue,useProgram:Fe,setBlending:me,setMaterial:Se,setFlipSided:Te,setCullFace:Oe,setLineWidth:ee,setPolygonOffset:oe,setScissorTest:ve,activeTexture:Pe,bindTexture:X,unbindTexture:it,compressedTexImage2D:j,compressedTexImage3D:b,texImage2D:H,texImage3D:Z,pixelStorei:Ee,getParameter:xe,updateUBOMapping:Le,uniformBlockBinding:Be,texStorage2D:J,texStorage3D:se,texSubImage2D:g,texSubImage3D:U,compressedTexSubImage2D:F,compressedTexSubImage3D:V,scissor:k,viewport:_e,reset:We}}function _x(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,f=new WeakMap,u=new Set,h,d=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,g){return _?new OffscreenCanvas(b,g):ir("canvas")}function x(b,g,U){let F=1,V=j(b);if((V.width>U||V.height>U)&&(F=U/Math.max(V.width,V.height)),F<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let J=Math.floor(F*V.width),se=Math.floor(F*V.height);h===void 0&&(h=y(J,se));let H=g?y(J,se):h;return H.width=J,H.height=se,H.getContext("2d").drawImage(b,0,0,J,se),et("WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+J+"x"+se+")."),H}else return"data"in b&&et("WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),b;return b}function p(b){return b.generateMipmaps}function C(b){i.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(b,g,U,F,V,J=!1){if(b!==null){if(i[b]!==void 0)return i[b];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let se;F&&(se=e.get("EXT_texture_norm16"),se||et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let H=g;if(g===i.RED&&(U===i.FLOAT&&(H=i.R32F),U===i.HALF_FLOAT&&(H=i.R16F),U===i.UNSIGNED_BYTE&&(H=i.R8),U===i.UNSIGNED_SHORT&&se&&(H=se.R16_EXT),U===i.SHORT&&se&&(H=se.R16_SNORM_EXT)),g===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(H=i.R8UI),U===i.UNSIGNED_SHORT&&(H=i.R16UI),U===i.UNSIGNED_INT&&(H=i.R32UI),U===i.BYTE&&(H=i.R8I),U===i.SHORT&&(H=i.R16I),U===i.INT&&(H=i.R32I)),g===i.RG&&(U===i.FLOAT&&(H=i.RG32F),U===i.HALF_FLOAT&&(H=i.RG16F),U===i.UNSIGNED_BYTE&&(H=i.RG8),U===i.UNSIGNED_SHORT&&se&&(H=se.RG16_EXT),U===i.SHORT&&se&&(H=se.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(H=i.RG8UI),U===i.UNSIGNED_SHORT&&(H=i.RG16UI),U===i.UNSIGNED_INT&&(H=i.RG32UI),U===i.BYTE&&(H=i.RG8I),U===i.SHORT&&(H=i.RG16I),U===i.INT&&(H=i.RG32I)),g===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(H=i.RGB8UI),U===i.UNSIGNED_SHORT&&(H=i.RGB16UI),U===i.UNSIGNED_INT&&(H=i.RGB32UI),U===i.BYTE&&(H=i.RGB8I),U===i.SHORT&&(H=i.RGB16I),U===i.INT&&(H=i.RGB32I)),g===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(H=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(H=i.RGBA16UI),U===i.UNSIGNED_INT&&(H=i.RGBA32UI),U===i.BYTE&&(H=i.RGBA8I),U===i.SHORT&&(H=i.RGBA16I),U===i.INT&&(H=i.RGBA32I)),g===i.RGB&&(U===i.UNSIGNED_SHORT&&se&&(H=se.RGB16_EXT),U===i.SHORT&&se&&(H=se.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&(H=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(H=i.R11F_G11F_B10F)),g===i.RGBA){let Z=J?nr:ct.getTransfer(V);U===i.FLOAT&&(H=i.RGBA32F),U===i.HALF_FLOAT&&(H=i.RGBA16F),U===i.UNSIGNED_BYTE&&(H=Z===xt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&se&&(H=se.RGBA16_EXT),U===i.SHORT&&se&&(H=se.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function P(b,g){let U;return b?g===null||g===wn||g===Ls?U=i.DEPTH24_STENCIL8:g===pn?U=i.DEPTH32F_STENCIL8:g===Is&&(U=i.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===wn||g===Ls?U=i.DEPTH_COMPONENT24:g===pn?U=i.DEPTH_COMPONENT32F:g===Is&&(U=i.DEPTH_COMPONENT16),U}function T(b,g){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Bt&&b.minFilter!==Gt?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function R(b){let g=b.target;g.removeEventListener("dispose",R),L(g),g.isVideoTexture&&f.delete(g),g.isHTMLTexture&&u.delete(g)}function m(b){let g=b.target;g.removeEventListener("dispose",m),Y(g)}function L(b){let g=n.get(b);if(g.__webglInit===void 0)return;let U=b.source,F=d.get(U);if(F){let V=F[g.__cacheKey];V.usedTimes--,V.usedTimes===0&&O(b),Object.keys(F).length===0&&d.delete(U)}n.remove(b)}function O(b){let g=n.get(b);i.deleteTexture(g.__webglTexture);let U=b.source,F=d.get(U);delete F[g.__cacheKey],a.memory.textures--}function Y(b){let g=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(g.__webglFramebuffer[F]))for(let V=0;V<g.__webglFramebuffer[F].length;V++)i.deleteFramebuffer(g.__webglFramebuffer[F][V]);else i.deleteFramebuffer(g.__webglFramebuffer[F]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[F])}else{if(Array.isArray(g.__webglFramebuffer))for(let F=0;F<g.__webglFramebuffer.length;F++)i.deleteFramebuffer(g.__webglFramebuffer[F]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let F=0;F<g.__webglColorRenderbuffer.length;F++)g.__webglColorRenderbuffer[F]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[F]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let U=b.textures;for(let F=0,V=U.length;F<V;F++){let J=n.get(U[F]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(U[F])}n.remove(b)}let $=0;function B(){$=0}function A(){return $}function D(b){$=b}function W(){let b=$;return b>=s.maxTextures&&et("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,b}function E(b){let g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function N(b,g){let U=n.get(b);if(b.isVideoTexture&&X(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&U.__version!==b.version){let F=b.image;if(F===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{we(U,b,g);return}}else b.isExternalTexture&&(U.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+g)}function z(b,g){let U=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){we(U,b,g);return}else b.isExternalTexture&&(U.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+g)}function le(b,g){let U=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){we(U,b,g);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+g)}function G(b,g){let U=n.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&U.__version!==b.version){te(U,b,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+g)}let fe={[bn]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[wa]:i.MIRRORED_REPEAT},ne={[Bt]:i.NEAREST,[tf]:i.NEAREST_MIPMAP_NEAREST,[Cr]:i.NEAREST_MIPMAP_LINEAR,[Gt]:i.LINEAR,[so]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},ye={[af]:i.NEVER,[ff]:i.ALWAYS,[of]:i.LESS,[Wo]:i.LEQUAL,[lf]:i.EQUAL,[Xo]:i.GEQUAL,[cf]:i.GREATER,[hf]:i.NOTEQUAL};function Ce(b,g){if(g.type===pn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Gt||g.magFilter===so||g.magFilter===Cr||g.magFilter===vi||g.minFilter===Gt||g.minFilter===so||g.minFilter===Cr||g.minFilter===vi)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,fe[g.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,fe[g.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,fe[g.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ne[g.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ne[g.minFilter]),g.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ye[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Bt||g.minFilter!==Cr&&g.minFilter!==vi||g.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ue(b,g){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",R));let F=g.source,V=d.get(F);V===void 0&&(V={},d.set(F,V));let J=E(g);if(J!==b.__cacheKey){V[J]===void 0&&(V[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),V[J].usedTimes++;let se=V[b.__cacheKey];se!==void 0&&(V[b.__cacheKey].usedTimes--,se.usedTimes===0&&O(g)),b.__cacheKey=J,b.__webglTexture=V[J].texture}return U}function ie(b,g,U){return Math.floor(Math.floor(b/U)/g)}function de(b,g,U,F){let J=b.updateRanges;if(J.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,U,F,g.data);else{J.sort((Ee,k)=>Ee.start-k.start);let se=0;for(let Ee=1;Ee<J.length;Ee++){let k=J[se],_e=J[Ee],Le=k.start+k.count,Be=ie(_e.start,g.width,4),We=ie(k.start,g.width,4);_e.start<=Le+1&&Be===We&&ie(_e.start+_e.count-1,g.width,4)===Be?k.count=Math.max(k.count,_e.start+_e.count-k.start):(++se,J[se]=_e)}J.length=se+1;let H=t.getParameter(i.UNPACK_ROW_LENGTH),Z=t.getParameter(i.UNPACK_SKIP_PIXELS),xe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Ee=0,k=J.length;Ee<k;Ee++){let _e=J[Ee],Le=Math.floor(_e.start/4),Be=Math.ceil(_e.count/4),We=Le%g.width,K=Math.floor(Le/g.width),De=Be,be=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,We),t.pixelStorei(i.UNPACK_SKIP_ROWS,K),t.texSubImage2D(i.TEXTURE_2D,0,We,K,De,be,U,F,g.data)}b.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,H),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function we(b,g,U){let F=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(F=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(F=i.TEXTURE_3D);let V=Ue(b,g),J=g.source;t.bindTexture(F,b.__webglTexture,i.TEXTURE0+U);let se=n.get(J);if(J.version!==se.__version||V===!0){if(t.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let be=ct.getPrimaries(ct.workingColorSpace),He=g.colorSpace===si?null:ct.getPrimaries(g.colorSpace),Ve=g.colorSpace===si||be===He?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let Z=x(g.image,!1,s.maxTextureSize);Z=it(g,Z);let xe=r.convert(g.format,g.colorSpace),Ee=r.convert(g.type),k=v(g.internalFormat,xe,Ee,g.normalized,g.colorSpace,g.isVideoTexture);Ce(F,g);let _e,Le=g.mipmaps,Be=g.isVideoTexture!==!0,We=se.__version===void 0||V===!0,K=J.dataReady,De=T(g,Z);if(g.isDepthTexture)k=P(g.format===Mi,g.type),We&&(Be?t.texStorage2D(i.TEXTURE_2D,1,k,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,k,Z.width,Z.height,0,xe,Ee,null));else if(g.isDataTexture)if(Le.length>0){Be&&We&&t.texStorage2D(i.TEXTURE_2D,De,k,Le[0].width,Le[0].height);for(let be=0,He=Le.length;be<He;be++)_e=Le[be],Be?K&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,_e.width,_e.height,xe,Ee,_e.data):t.texImage2D(i.TEXTURE_2D,be,k,_e.width,_e.height,0,xe,Ee,_e.data);g.generateMipmaps=!1}else Be?(We&&t.texStorage2D(i.TEXTURE_2D,De,k,Z.width,Z.height),K&&de(g,Z,xe,Ee)):t.texImage2D(i.TEXTURE_2D,0,k,Z.width,Z.height,0,xe,Ee,Z.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Be&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,k,Le[0].width,Le[0].height,Z.depth);for(let be=0,He=Le.length;be<He;be++)if(_e=Le[be],g.format!==mn)if(xe!==null)if(Be){if(K)if(g.layerUpdates.size>0){let Ve=_c(_e.width,_e.height,g.format,g.type);for(let Ae of g.layerUpdates){let Ke=_e.data.subarray(Ae*Ve/_e.data.BYTES_PER_ELEMENT,(Ae+1)*Ve/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,Ae,_e.width,_e.height,1,xe,Ke)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,_e.width,_e.height,Z.depth,xe,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,be,k,_e.width,_e.height,Z.depth,0,_e.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?K&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,_e.width,_e.height,Z.depth,xe,Ee,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,be,k,_e.width,_e.height,Z.depth,0,xe,Ee,_e.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Be&&We&&t.texStorage2D(i.TEXTURE_2D,De,k,Le[0].width,Le[0].height);for(let be=0,He=Le.length;be<He;be++)_e=Le[be],g.format!==mn?xe!==null?Be?K&&t.compressedTexSubImage2D(i.TEXTURE_2D,be,0,0,_e.width,_e.height,xe,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,be,k,_e.width,_e.height,0,_e.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?K&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,_e.width,_e.height,xe,Ee,_e.data):t.texImage2D(i.TEXTURE_2D,be,k,_e.width,_e.height,0,xe,Ee,_e.data)}else if(g.isDataArrayTexture)if(Be){if(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,k,Z.width,Z.height,Z.depth),K)if(g.layerUpdates.size>0){let be=_c(Z.width,Z.height,g.format,g.type);for(let He of g.layerUpdates){let Ve=Z.data.subarray(He*be/Z.data.BYTES_PER_ELEMENT,(He+1)*be/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,He,Z.width,Z.height,1,xe,Ee,Ve)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,xe,Ee,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,k,Z.width,Z.height,Z.depth,0,xe,Ee,Z.data);else if(g.isData3DTexture)Be?(We&&t.texStorage3D(i.TEXTURE_3D,De,k,Z.width,Z.height,Z.depth),K&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,xe,Ee,Z.data)):t.texImage3D(i.TEXTURE_3D,0,k,Z.width,Z.height,Z.depth,0,xe,Ee,Z.data);else if(g.isFramebufferTexture){if(We)if(Be)t.texStorage2D(i.TEXTURE_2D,De,k,Z.width,Z.height);else{let be=Z.width,He=Z.height;for(let Ve=0;Ve<De;Ve++)t.texImage2D(i.TEXTURE_2D,Ve,k,be,He,0,xe,Ee,null),be>>=1,He>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let be=i.canvas;if(be.hasAttribute("layoutsubtree")||be.setAttribute("layoutsubtree","true"),Z.parentNode!==be){be.appendChild(Z),u.add(g),be.onpaint=He=>{let Ve=He.changedElements;for(let Ae of u)Ve.includes(Ae.image)&&(Ae.needsUpdate=!0)},be.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{let Ve=i.RGBA,Ae=i.RGBA,Ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ve,Ae,Ke,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Be&&We){let be=j(Le[0]);t.texStorage2D(i.TEXTURE_2D,De,k,be.width,be.height)}for(let be=0,He=Le.length;be<He;be++)_e=Le[be],Be?K&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,xe,Ee,_e):t.texImage2D(i.TEXTURE_2D,be,k,xe,Ee,_e);g.generateMipmaps=!1}else if(Be){if(We){let be=j(Z);t.texStorage2D(i.TEXTURE_2D,De,k,be.width,be.height)}K&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Ee,Z)}else t.texImage2D(i.TEXTURE_2D,0,k,xe,Ee,Z);p(g)&&C(F),se.__version=J.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function te(b,g,U){if(g.image.length!==6)return;let F=Ue(b,g),V=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+U);let J=n.get(V);if(V.version!==J.__version||F===!0){t.activeTexture(i.TEXTURE0+U);let se=ct.getPrimaries(ct.workingColorSpace),H=g.colorSpace===si?null:ct.getPrimaries(g.colorSpace),Z=g.colorSpace===si||se===H?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let xe=g.isCompressedTexture||g.image[0].isCompressedTexture,Ee=g.image[0]&&g.image[0].isDataTexture,k=[];for(let Ae=0;Ae<6;Ae++)!xe&&!Ee?k[Ae]=x(g.image[Ae],!0,s.maxCubemapSize):k[Ae]=Ee?g.image[Ae].image:g.image[Ae],k[Ae]=it(g,k[Ae]);let _e=k[0],Le=r.convert(g.format,g.colorSpace),Be=r.convert(g.type),We=v(g.internalFormat,Le,Be,g.normalized,g.colorSpace),K=g.isVideoTexture!==!0,De=J.__version===void 0||F===!0,be=V.dataReady,He=T(g,_e);Ce(i.TEXTURE_CUBE_MAP,g);let Ve;if(xe){K&&De&&t.texStorage2D(i.TEXTURE_CUBE_MAP,He,We,_e.width,_e.height);for(let Ae=0;Ae<6;Ae++){Ve=k[Ae].mipmaps;for(let Ke=0;Ke<Ve.length;Ke++){let Je=Ve[Ke];g.format!==mn?Le!==null?K?be&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ke,0,0,Je.width,Je.height,Le,Je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ke,We,Je.width,Je.height,0,Je.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ke,0,0,Je.width,Je.height,Le,Be,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ke,We,Je.width,Je.height,0,Le,Be,Je.data)}}}else{if(Ve=g.mipmaps,K&&De){Ve.length>0&&He++;let Ae=j(k[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,He,We,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Ee){K?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,k[Ae].width,k[Ae].height,Le,Be,k[Ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,We,k[Ae].width,k[Ae].height,0,Le,Be,k[Ae].data);for(let Ke=0;Ke<Ve.length;Ke++){let bt=Ve[Ke].image[Ae].image;K?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ke+1,0,0,bt.width,bt.height,Le,Be,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ke+1,We,bt.width,bt.height,0,Le,Be,bt.data)}}else{K?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Le,Be,k[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,We,Le,Be,k[Ae]);for(let Ke=0;Ke<Ve.length;Ke++){let Je=Ve[Ke];K?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ke+1,0,0,Le,Be,Je.image[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ke+1,We,Le,Be,Je.image[Ae])}}}p(g)&&C(i.TEXTURE_CUBE_MAP),J.__version=V.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function ue(b,g,U,F,V,J){let se=r.convert(U.format,U.colorSpace),H=r.convert(U.type),Z=v(U.internalFormat,se,H,U.normalized,U.colorSpace),xe=n.get(g),Ee=n.get(U);if(Ee.__renderTarget=g,!xe.__hasExternalTextures){let k=Math.max(1,g.width>>J),_e=Math.max(1,g.height>>J);V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?t.texImage3D(V,J,Z,k,_e,g.depth,0,se,H,null):t.texImage2D(V,J,Z,k,_e,0,se,H,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),Pe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,V,Ee.__webglTexture,0,ve(g)):(V===i.TEXTURE_2D||V>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,F,V,Ee.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(b,g,U){if(i.bindRenderbuffer(i.RENDERBUFFER,b),g.depthBuffer){let F=g.depthTexture,V=F&&F.isDepthTexture?F.type:null,J=P(g.stencilBuffer,V),se=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Pe(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(g),J,g.width,g.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(g),J,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,J,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,b)}else{let F=g.textures;for(let V=0;V<F.length;V++){let J=F[V],se=r.convert(J.format,J.colorSpace),H=r.convert(J.type),Z=v(J.internalFormat,se,H,J.normalized,J.colorSpace);Pe(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(g),Z,g.width,g.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(g),Z,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Z,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(b,g,U){let F=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let V=n.get(g.depthTexture);if(V.__renderTarget=g,(!V.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),F){if(V.__webglInit===void 0&&(V.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),V.__webglTexture===void 0){V.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,g.depthTexture);let xe=r.convert(g.depthTexture.format),Ee=r.convert(g.depthTexture.type),k;g.depthTexture.format===Un?k=i.DEPTH_COMPONENT24:g.depthTexture.format===Mi&&(k=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,k,g.width,g.height,0,xe,Ee,null)}}else N(g.depthTexture,0);let J=V.__webglTexture,se=ve(g),H=F?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,Z=g.depthTexture.format===Mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Un)Pe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,H,J,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,Z,H,J,0);else if(g.depthTexture.format===Mi)Pe(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,H,J,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,Z,H,J,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ge(b){let g=n.get(b),U=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){let F=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),F){let V=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,F.removeEventListener("dispose",V)};F.addEventListener("dispose",V),g.__depthDisposeCallback=V}g.__boundDepthTexture=F}if(b.depthTexture&&!g.__autoAllocateDepthBuffer)if(U)for(let F=0;F<6;F++)Me(g.__webglFramebuffer[F],b,F);else{let F=b.texture.mipmaps;F&&F.length>0?Me(g.__webglFramebuffer[0],b,0):Me(g.__webglFramebuffer,b,0)}else if(U){g.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[F]),g.__webglDepthbuffer[F]===void 0)g.__webglDepthbuffer[F]=i.createRenderbuffer(),Fe(g.__webglDepthbuffer[F],b,!1);else{let V=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=g.__webglDepthbuffer[F];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,J)}}else{let F=b.texture.mipmaps;if(F&&F.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Fe(g.__webglDepthbuffer,b,!1);else{let V=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,J)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(b,g,U){let F=n.get(b);g!==void 0&&ue(F.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&ge(b)}function Se(b){let g=b.texture,U=n.get(b),F=n.get(g);b.addEventListener("dispose",m);let V=b.textures,J=b.isWebGLCubeRenderTarget===!0,se=V.length>1;if(se||(F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture()),F.__version=g.version,a.memory.textures++),J){U.__webglFramebuffer=[];for(let H=0;H<6;H++)if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer[H]=[];for(let Z=0;Z<g.mipmaps.length;Z++)U.__webglFramebuffer[H][Z]=i.createFramebuffer()}else U.__webglFramebuffer[H]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){U.__webglFramebuffer=[];for(let H=0;H<g.mipmaps.length;H++)U.__webglFramebuffer[H]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(se)for(let H=0,Z=V.length;H<Z;H++){let xe=n.get(V[H]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&Pe(b)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let H=0;H<V.length;H++){let Z=V[H];U.__webglColorRenderbuffer[H]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[H]);let xe=r.convert(Z.format,Z.colorSpace),Ee=r.convert(Z.type),k=v(Z.internalFormat,xe,Ee,Z.normalized,Z.colorSpace,b.isXRRenderTarget===!0),_e=ve(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,k,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,U.__webglColorRenderbuffer[H])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(U.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,g);for(let H=0;H<6;H++)if(g.mipmaps&&g.mipmaps.length>0)for(let Z=0;Z<g.mipmaps.length;Z++)ue(U.__webglFramebuffer[H][Z],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+H,Z);else ue(U.__webglFramebuffer[H],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);p(g)&&C(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let H=0,Z=V.length;H<Z;H++){let xe=V[H],Ee=n.get(xe),k=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(k=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(k,Ee.__webglTexture),Ce(k,xe),ue(U.__webglFramebuffer,b,xe,i.COLOR_ATTACHMENT0+H,k,0),p(xe)&&C(k)}t.unbindTexture()}else{let H=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(H=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(H,F.__webglTexture),Ce(H,g),g.mipmaps&&g.mipmaps.length>0)for(let Z=0;Z<g.mipmaps.length;Z++)ue(U.__webglFramebuffer[Z],b,g,i.COLOR_ATTACHMENT0,H,Z);else ue(U.__webglFramebuffer,b,g,i.COLOR_ATTACHMENT0,H,0);p(g)&&C(H),t.unbindTexture()}b.depthBuffer&&ge(b)}function Te(b){let g=b.textures;for(let U=0,F=g.length;U<F;U++){let V=g[U];if(p(V)){let J=w(b),se=n.get(V).__webglTexture;t.bindTexture(J,se),C(J),t.unbindTexture()}}}let Oe=[],ee=[];function oe(b){if(b.samples>0){if(Pe(b)===!1){let g=b.textures,U=b.width,F=b.height,V=i.COLOR_BUFFER_BIT,J=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(b),H=g.length>1;if(H)for(let xe=0;xe<g.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);let Z=b.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let xe=0;xe<g.length;xe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(V|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(V|=i.STENCIL_BUFFER_BIT)),H){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[xe]);let Ee=n.get(g[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,U,F,0,0,U,F,V,i.NEAREST),c===!0&&(Oe.length=0,ee.length=0,Oe.push(i.COLOR_ATTACHMENT0+xe),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&(Oe.push(J),ee.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),H)for(let xe=0;xe<g.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,se.__webglColorRenderbuffer[xe]);let Ee=n.get(g[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&c){let g=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ve(b){return Math.min(s.maxSamples,b.samples)}function Pe(b){let g=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function X(b){let g=a.render.frame;f.get(b)!==g&&(f.set(b,g),b.update())}function it(b,g){let U=b.colorSpace,F=b.format,V=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||U!==tr&&U!==si&&(ct.getTransfer(U)===xt?(F!==mn||V!==rn)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",U)),g}function j(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=B,this.getTextureUnits=A,this.setTextureUnits=D,this.setTexture2D=N,this.setTexture2DArray=z,this.setTexture3D=le,this.setTextureCube=G,this.rebindTextures=me,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function yx(i,e){function t(n,s=si){let r,a=ct.getTransfer(s);if(n===rn)return i.UNSIGNED_BYTE;if(n===ao)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ac)return i.BYTE;if(n===oc)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===ro)return i.INT;if(n===wn)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===An)return i.HALF_FLOAT;if(n===hc)return i.ALPHA;if(n===fc)return i.RGB;if(n===mn)return i.RGBA;if(n===Un)return i.DEPTH_COMPONENT;if(n===Mi)return i.DEPTH_STENCIL;if(n===lo)return i.RED;if(n===co)return i.RED_INTEGER;if(n===bi)return i.RG;if(n===ho)return i.RG_INTEGER;if(n===fo)return i.RGBA_INTEGER;if(n===Pr||n===Ir||n===Lr||n===Dr)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uo||n===po||n===mo||n===go)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===po)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===go)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xo||n===_o||n===yo||n===vo||n===Mo||n===Nr||n===bo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xo||n===_o)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===vo)return r.COMPRESSED_R11_EAC;if(n===Mo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Nr)return r.COMPRESSED_RG11_EAC;if(n===bo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===So||n===Eo||n===To||n===wo||n===Ao||n===Ro||n===Co||n===Po||n===Io||n===Lo||n===Do||n===No||n===Uo||n===Fo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===So)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===To)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ao)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ro)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Co)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Po)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Io)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Do)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===No)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oo||n===Bo||n===Ho)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Oo)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zo||n===ko||n===Ur||n===Go)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===zo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ko)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ur)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Go)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var vx=`
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

}`,Lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new pr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new hn({vertexShader:vx,fragmentShader:Mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new pt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dc=class extends Fn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,f=null,u=null,h=null,d=null,_=null,y=typeof XRWebGLBinding<"u",x=new Lc,p={},C=t.getContextAttributes(),w=null,v=null,P=[],T=[],R=new Ne,m=null,L=null,O=new Rt;O.viewport=new wt;let Y=new Rt;Y.viewport=new wt;let $=[O,Y],B=new to,A=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let de=P[ie];return de===void 0&&(de=new xs,P[ie]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ie){let de=P[ie];return de===void 0&&(de=new xs,P[ie]=de),de.getGripSpace()},this.getHand=function(ie){let de=P[ie];return de===void 0&&(de=new xs,P[ie]=de),de.getHandSpace()};function W(ie){let de=T.indexOf(ie.inputSource);if(de===-1)return;let we=P[de];we!==void 0&&(we.update(ie.inputSource,ie.frame,l||a),we.dispatchEvent({type:ie.type,data:ie.inputSource}))}function E(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",E),s.removeEventListener("inputsourceschange",N);for(let ie=0;ie<P.length;ie++){let de=T[ie];de!==null&&(T[ie]=null,P[ie].disconnect(de))}A=null,D=null,x.reset();for(let ie in p)delete p[ie];if(e.setRenderTarget(w),d=null,h=null,u=null,s=null,v=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(m),e.setSize(R.width,R.height,!1),L!==null){let ie=L.camera;ie.fov=L.fov,ie.zoom=L.zoom,ie.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,n.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ie){l=ie},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",E),s.addEventListener("inputsourceschange",N),C.xrCompatible!==!0&&await t.makeXRCompatible(),m=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,te=null,ue=null;C.depth&&(ue=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=C.stencil?Mi:Un,te=C.stencil?Ls:wn);let Fe={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(Fe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new tn(h.textureWidth,h.textureHeight,{format:mn,type:rn,depthTexture:new di(h.textureWidth,h.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let we={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new tn(d.framebufferWidth,d.framebufferHeight,{format:mn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ue.setContext(s),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function N(ie){for(let de=0;de<ie.removed.length;de++){let we=ie.removed[de],te=T.indexOf(we);te>=0&&(T[te]=null,P[te].disconnect(we))}for(let de=0;de<ie.added.length;de++){let we=ie.added[de],te=T.indexOf(we);if(te===-1){for(let Fe=0;Fe<P.length;Fe++)if(Fe>=T.length){T.push(we),te=Fe;break}else if(T[Fe]===null){T[Fe]=we,te=Fe;break}if(te===-1)break}let ue=P[te];ue&&ue.connect(we)}}let z=new q,le=new q;function G(ie,de,we){z.setFromMatrixPosition(de.matrixWorld),le.setFromMatrixPosition(we.matrixWorld);let te=z.distanceTo(le),ue=de.projectionMatrix.elements,Fe=we.projectionMatrix.elements,Me=ue[14]/(ue[10]-1),ge=ue[14]/(ue[10]+1),me=(ue[9]+1)/ue[5],Se=(ue[9]-1)/ue[5],Te=(ue[8]-1)/ue[0],Oe=(Fe[8]+1)/Fe[0],ee=Me*Te,oe=Me*Oe,ve=te/(-Te+Oe),Pe=ve*-Te;if(de.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Pe),ie.translateZ(ve),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),ue[10]===-1)ie.projectionMatrix.copy(de.projectionMatrix),ie.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{let X=Me+ve,it=ge+ve,j=ee-Pe,b=oe+(te-Pe),g=me*ge/it*X,U=Se*ge/it*X;ie.projectionMatrix.makePerspective(j,b,g,U,X,it),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function fe(ie,de){de===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(de.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let de=ie.near,we=ie.far;x.texture!==null&&(x.depthNear>0&&(de=x.depthNear),x.depthFar>0&&(we=x.depthFar)),B.near=Y.near=O.near=de,B.far=Y.far=O.far=we,(A!==B.near||D!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),A=B.near,D=B.far),B.layers.mask=ie.layers.mask|6,O.layers.mask=B.layers.mask&-5,Y.layers.mask=B.layers.mask&-3;let te=ie.parent,ue=B.cameras;fe(B,te);for(let Fe=0;Fe<ue.length;Fe++)fe(ue[Fe],te);ue.length===2?G(B,O,Y):B.projectionMatrix.copy(O.projectionMatrix),L===null&&ie.isPerspectiveCamera&&(L={camera:ie,fov:ie.fov,zoom:ie.zoom}),ne(ie,B,te)};function ne(ie,de,we){we===null?ie.matrix.copy(de.matrixWorld):(ie.matrix.copy(we.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(de.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(de.projectionMatrix),ie.projectionMatrixInverse.copy(de.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Ra*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(ie){c=ie,h!==null&&(h.fixedFoveation=ie),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(B)},this.getCameraTexture=function(ie){return p[ie]};let ye=null;function Ce(ie,de){if(f=de.getViewerPose(l||a),_=de,f!==null){let we=f.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let te=!1;we.length!==B.cameras.length&&(B.cameras.length=0,te=!0);for(let ge=0;ge<we.length;ge++){let me=we[ge],Se=null;if(d!==null)Se=d.getViewport(me);else{let Oe=u.getViewSubImage(h,me);Se=Oe.viewport,ge===0&&(e.setRenderTargetTextures(v,Oe.colorTexture,Oe.depthStencilTexture),e.setRenderTarget(v))}let Te=$[ge];Te===void 0&&(Te=new Rt,Te.layers.enable(ge),Te.viewport=new wt,$[ge]=Te),Te.matrix.fromArray(me.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(me.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Se.x,Se.y,Se.width,Se.height),ge===0&&(B.matrix.copy(Te.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),te===!0&&B.cameras.push(Te)}let ue=s.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let ge=u.getDepthInformation(we[0]);ge&&ge.isValid&&ge.texture&&x.init(ge,s.renderState)}if(ue&&ue.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let ge=0;ge<we.length;ge++){let me=we[ge].camera;if(me){let Se=p[me];Se||(Se=new pr,p[me]=Se);let Te=u.getCameraImage(me);Se.sourceTexture=Te}}}}for(let we=0;we<P.length;we++){let te=T[we],ue=P[we];te!==null&&ue!==void 0&&ue.update(te,de,l||a)}ye&&ye(ie,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),_=null}let Ue=new qf;Ue.setAnimationLoop(Ce),this.setAnimationLoop=function(ie){ye=ie},this.dispose=function(){}}},bx=new dt,jf=new nt;jf.set(-1,0,0,0,1,0,0,0,1);function Sx(i,e){function t(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,mc(i)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function s(x,p,C,w,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(x,p):p.isMeshLambertMaterial?(r(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(x,p),u(x,p)):p.isMeshPhongMaterial?(r(x,p),f(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(x,p),h(x,p),p.isMeshPhysicalMaterial&&d(x,p,v)):p.isMeshMatcapMaterial?(r(x,p),_(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),y(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(a(x,p),p.isLineDashedMaterial&&o(x,p)):p.isPointsMaterial?c(x,p,C,w):p.isSpriteMaterial?l(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,t(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===Vt&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,t(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===Vt&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,t(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,t(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);let C=e.get(p),w=C.envMap,v=C.envMapRotation;w&&(x.envMap.value=w,x.envMapRotation.value.setFromMatrix4(bx.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(jf),x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,x.aoMapTransform))}function a(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform))}function o(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function c(x,p,C,w){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*C,x.scale.value=w*.5,p.map&&(x.map.value=p.map,t(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function l(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function f(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function u(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function h(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function d(x,p,C){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.retroreflectivity>0&&(x.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,x.specularIntensityMapTransform))}function _(x,p){p.matcap&&(x.matcap.value=p.matcap)}function y(x,p){let C=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ex(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,P){let T=P.program;n.uniformBlockBinding(v,T)}function l(v,P){let T=s[v.id];T===void 0&&(x(v),T=f(v),s[v.id]=T,v.addEventListener("dispose",C));let R=P.program;n.updateUBOMapping(v,R);let m=e.render.frame;r[v.id]!==m&&(h(v),r[v.id]=m)}function f(v){let P=u();v.__bindingPointIndex=P;let T=i.createBuffer(),R=v.__size,m=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,R,m),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,T),T}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let P=s[v.id],T=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let m=0,L=T.length;m<L;m++){let O=T[m];if(Array.isArray(O))for(let Y=0,$=O.length;Y<$;Y++)d(O[Y],m,Y,R);else d(O,m,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,P,T,R){if(y(v,P,T,R)===!0){let m=v.__offset,L=v.value;if(Array.isArray(L)){let O=0;for(let Y=0;Y<L.length;Y++){let $=L[Y],B=p($);_($,v.__data,O),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(O+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(L,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,m,v.__data)}}function _(v,P,T){typeof v=="number"||typeof v=="boolean"?P[0]=v:v.isMatrix3?(P[0]=v.elements[0],P[1]=v.elements[1],P[2]=v.elements[2],P[3]=0,P[4]=v.elements[3],P[5]=v.elements[4],P[6]=v.elements[5],P[7]=0,P[8]=v.elements[6],P[9]=v.elements[7],P[10]=v.elements[8],P[11]=0):ArrayBuffer.isView(v)?P.set(new v.constructor(v.buffer,v.byteOffset,P.length)):v.toArray(P,T)}function y(v,P,T,R){let m=v.value,L=P+"_"+T;if(R[L]===void 0)return typeof m=="number"||typeof m=="boolean"?R[L]=m:ArrayBuffer.isView(m)?R[L]=m.slice():R[L]=m.clone(),!0;{let O=R[L];if(typeof m=="number"||typeof m=="boolean"){if(O!==m)return R[L]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(O.equals(m)===!1)return O.copy(m),!0}}return!1}function x(v){let P=v.uniforms,T=0,R=16;for(let L=0,O=P.length;L<O;L++){let Y=Array.isArray(P[L])?P[L]:[P[L]];for(let $=0,B=Y.length;$<B;$++){let A=Y[$],D=Array.isArray(A.value)?A.value:[A.value];for(let W=0,E=D.length;W<E;W++){let N=D[W],z=p(N),le=T%R,G=le%z.boundary,fe=le+G;T+=G,fe!==0&&R-fe<z.storage&&(T+=R-fe),A.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=T,T+=z.storage}}}let m=T%R;return m>0&&(T+=R-m),v.__size=T,v.__cache={},this}function p(v){let P={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(P.boundary=4,P.storage=4):v.isVector2?(P.boundary=8,P.storage=8):v.isVector3||v.isColor?(P.boundary=16,P.storage=12):v.isVector4?(P.boundary=16,P.storage=16):v.isMatrix3?(P.boundary=48,P.storage=48):v.isMatrix4?(P.boundary=64,P.storage=64):v.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(P.boundary=16,P.storage=v.byteLength):et("WebGLRenderer: Unsupported uniform value type.",v),P}function C(v){let P=v.target;P.removeEventListener("dispose",C);let T=a.indexOf(P.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[P.id]),delete s[P.id],delete r[P.id]}function w(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:w}}var Tx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vn=null;function wx(){return Vn===null&&(Vn=new hr(Tx,16,16,bi,An),Vn.name="DFG_LUT",Vn.minFilter=Gt,Vn.magFilter=Gt,Vn.wrapS=Nn,Vn.wrapT=Nn,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}var Xn=class{constructor(e={}){let{canvas:t=uf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:d=rn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let y=d,x=new Set([fo,ho,co]),p=new Set([rn,wn,Is,Ls,ao,oo]),C=new Uint32Array(4),w=new Int32Array(4),v=new q,P=null,T=null,R=[],m=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,Y=!1,$=null,B=null,A=null,D=null;this._outputColorSpace=kt;let W=0,E=0,N=null,z=-1,le=null,G=new wt,fe=new wt,ne=null,ye=new tt(0),Ce=0,Ue=t.width,ie=t.height,de=1,we=null,te=null,ue=new wt(0,0,Ue,ie),Fe=new wt(0,0,Ue,ie),Me=!1,ge=new vs,me=!1,Se=!1,Te=new dt,Oe=new q,ee=new wt,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function Pe(){return N===null?de:1}let X=n;function it(S,Q){return t.getContext(S,Q)}let j,b,g,U,F,V,J,se,H,Z,xe,Ee,k,_e,Le,Be,We,K,De,be,He,Ve,Ae;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",xn,!1),X===null){let Q="webgl2";if(X=it(Q,S),X===null)throw it(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ke()}catch(S){throw t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),Qe("WebGLRenderer: "+S.message),S}function Ke(){j=new Dm(X),j.init(),He=new yx(X,j),b=new Sm(X,j,e,He),g=new xx(X,j),b.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),B=X.createFramebuffer(),A=X.createFramebuffer(),D=X.createFramebuffer(),U=new Fm(X),F=new ix,V=new _x(X,j,g,F,b,He,U),J=new Lm(O),se=new Bd(X),Ve=new Mm(X,se),H=new Nm(X,se,U,Ve),Z=new Bm(X,H,se,Ve,U),K=new Om(X,b,V),Le=new Em(F),xe=new nx(O,J,j,b,Ve,Le),Ee=new Sx(O,F),k=new rx,_e=new fx(j),We=new vm(O,J,g,Z,_,c),Be=new gx(O,Z,b),Ae=new Ex(X,U,b,g),De=new bm(X,j,U),be=new Um(X,j,U),U.programs=xe.programs,O.capabilities=b,O.extensions=j,O.properties=F,O.renderLists=k,O.shadowMap=Be,O.state=g,O.info=U}y!==rn&&(L=new zm(y,t.width,t.height,o,s,r));let Je=new Dc(O,X);this.xr=Je,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let S=j.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=j.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(S){S!==void 0&&(de=S,this.setSize(Ue,ie,!1))},this.getSize=function(S){return S.set(Ue,ie)},this.setSize=function(S,Q,pe=!0){if(Je.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=S,ie=Q,t.width=Math.floor(S*de),t.height=Math.floor(Q*de),pe===!0&&(t.style.width=S+"px",t.style.height=Q+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,S,Q)},this.getDrawingBufferSize=function(S){return S.set(Ue*de,ie*de).floor()},this.setDrawingBufferSize=function(S,Q,pe){Ue=S,ie=Q,de=pe,t.width=Math.floor(S*pe),t.height=Math.floor(Q*pe),this.setViewport(0,0,S,Q)},this.setEffects=function(S){if(y===rn){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let Q=0;Q<S.length;Q++)if(S[Q].isOutputPass===!0){et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(G)},this.getViewport=function(S){return S.copy(ue)},this.setViewport=function(S,Q,pe,ce){S.isVector4?ue.set(S.x,S.y,S.z,S.w):ue.set(S,Q,pe,ce),g.viewport(G.copy(ue).multiplyScalar(de).round())},this.getScissor=function(S){return S.copy(Fe)},this.setScissor=function(S,Q,pe,ce){S.isVector4?Fe.set(S.x,S.y,S.z,S.w):Fe.set(S,Q,pe,ce),g.scissor(fe.copy(Fe).multiplyScalar(de).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(S){g.setScissorTest(Me=S)},this.setOpaqueSort=function(S){we=S},this.setTransparentSort=function(S){te=S},this.getClearColor=function(S){return S.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(S=!0,Q=!0,pe=!0){let ce=0;if(S){let he=!1;if(N!==null){let Ge=N.texture.format;he=x.has(Ge)}if(he){let Ge=N.texture.type,qe=p.has(Ge),ke=We.getClearColor(),Ye=We.getClearAlpha(),$e=ke.r,st=ke.g,ot=ke.b;qe?(C[0]=$e,C[1]=st,C[2]=ot,C[3]=Ye,X.clearBufferuiv(X.COLOR,0,C)):(w[0]=$e,w[1]=st,w[2]=ot,w[3]=Ye,X.clearBufferiv(X.COLOR,0,w))}else ce|=X.COLOR_BUFFER_BIT}Q&&(ce|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(ce|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&X.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),$=S},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),We.dispose(),k.dispose(),_e.dispose(),F.dispose(),J.dispose(),Z.dispose(),Ve.dispose(),Ae.dispose(),xe.dispose(),Je.dispose(),Je.removeEventListener("sessionstart",Gc),Je.removeEventListener("sessionend",Vc),Ei.stop()};function bt(S){S.preventDefault(),sr("WebGLRenderer: Context Lost."),Y=!0}function mt(){sr("WebGLRenderer: Context Restored."),Y=!1;let S=U.autoReset,Q=Be.enabled,pe=Be.autoUpdate,ce=Be.needsUpdate,he=Be.type;Ke(),U.autoReset=S,Be.enabled=Q,Be.autoUpdate=pe,Be.needsUpdate=ce,Be.type=he}function xn(S){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Pn(S){let Q=S.target;Q.removeEventListener("dispose",Pn),gu(Q)}function gu(S){xu(S),F.remove(S)}function xu(S){let Q=F.get(S).programs;Q!==void 0&&(Q.forEach(function(pe){xe.releaseProgram(pe)}),S.isShaderMaterial&&xe.releaseShaderCache(S))}this.renderBufferDirect=function(S,Q,pe,ce,he,Ge){Q===null&&(Q=oe);let qe=he.isMesh&&he.matrixWorld.determinantAffine()<0,ke=vu(S,Q,pe,ce,he);g.setMaterial(ce,qe);let Ye=pe.index,$e=1;if(ce.wireframe===!0){if(Ye=H.getWireframeAttribute(pe),Ye===void 0)return;$e=2}let st=pe.drawRange,ot=pe.attributes.position,Ze=st.start*$e,gt=(st.start+st.count)*$e;Ge!==null&&(Ze=Math.max(Ze,Ge.start*$e),gt=Math.min(gt,(Ge.start+Ge.count)*$e)),Ye!==null?(Ze=Math.max(Ze,0),gt=Math.min(gt,Ye.count)):ot!=null&&(Ze=Math.max(Ze,0),gt=Math.min(gt,ot.count));let Lt=gt-Ze;if(Lt<0||Lt===1/0)return;Ve.setup(he,ce,ke,pe,Ye);let Et,Mt=De;if(Ye!==null&&(Et=se.get(Ye),Mt=be,Mt.setIndex(Et)),he.isMesh)ce.wireframe===!0?(g.setLineWidth(ce.wireframeLinewidth*Pe()),Mt.setMode(X.LINES)):Mt.setMode(X.TRIANGLES);else if(he.isLine){let Xt=ce.linewidth;Xt===void 0&&(Xt=1),g.setLineWidth(Xt*Pe()),he.isLineSegments?Mt.setMode(X.LINES):he.isLineLoop?Mt.setMode(X.LINE_LOOP):Mt.setMode(X.LINE_STRIP)}else he.isPoints?Mt.setMode(X.POINTS):he.isSprite&&Mt.setMode(X.TRIANGLES);if(he.isBatchedMesh)if(j.get("WEBGL_multi_draw"))Mt.renderMultiDraw(he._multiDrawStarts,he._multiDrawCounts,he._multiDrawCount);else{let Xt=he._multiDrawStarts,Xe=he._multiDrawCounts,Kt=he._multiDrawCount,ft=Ye?se.get(Ye).bytesPerElement:1,un=F.get(ce).currentProgram.getUniforms();for(let In=0;In<Kt;In++)un.setValue(X,"_gl_DrawID",In),Mt.render(Xt[In]/ft,Xe[In])}else if(he.isInstancedMesh)Mt.renderInstances(Ze,Lt,he.count);else if(pe.isInstancedBufferGeometry){let Xt=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,Xe=Math.min(pe.instanceCount,Xt);Mt.renderInstances(Ze,Lt,Xe)}else Mt.render(Ze,Lt)};function kc(S,Q,pe,ce){$!==null&&S.isNodeMaterial&&$.setObject(ce,S),me===!0&&Le.setState(S,pe,!1),S.transparent===!0&&S.side===Wt&&S.forceSinglePass===!1?(S.side=Vt,S.needsUpdate=!0,Vr(S,Q,ce),S.side=xi,S.needsUpdate=!0,Vr(S,Q,ce),S.side=Wt):Vr(S,Q,ce)}this.compile=function(S,Q,pe=null){pe===null&&(pe=S),$!==null&&$.renderStart(S,Q,pe),T=_e.get(pe),T.init(Q),m.push(T),pe.traverseVisible(function(he){he.isLight&&he.layers.test(Q.layers)&&(T.pushLight(he),he.castShadow&&T.pushShadow(he))}),S!==pe&&S.traverseVisible(function(he){he.isLight&&he.layers.test(Q.layers)&&(T.pushLight(he),he.castShadow&&T.pushShadow(he))}),T.setupLights(),$!==null&&$.updateLights(T.state.lightsArray),Se=this.localClippingEnabled,me=Le.init(this.clippingPlanes,Se),me===!0&&Le.setGlobalState(this.clippingPlanes,Q),$!==null&&Be.render(T.state.shadowsArray,pe,Q);let ce=new Set;return S.traverse(function(he){if(!(he.isMesh||he.isPoints||he.isLine||he.isSprite))return;let Ge=he.material;if(Ge)if(Array.isArray(Ge))for(let qe=0;qe<Ge.length;qe++){let ke=Ge[qe];kc(ke,pe,Q,he),ce.add(ke)}else kc(Ge,pe,Q,he),ce.add(Ge)}),T=m.pop(),$!==null&&$.renderEnd(),ce},this.compileAsync=function(S,Q,pe=null){let ce=this.compile(S,Q,pe);return new Promise(he=>{function Ge(){if(ce.forEach(function(qe){let Ye=F.get(qe).currentProgram;(Ye===void 0||Ye.isReady())&&ce.delete(qe)}),ce.size===0){he(S);return}setTimeout(Ge,10)}j.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let il=null;function _u(S){il&&il(S)}function Gc(){Ei.stop()}function Vc(){Ei.start()}let Ei=new qf;Ei.setAnimationLoop(_u),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(S){il=S,Je.setAnimationLoop(S),S===null?Ei.stop():Ei.start()},Je.addEventListener("sessionstart",Gc),Je.addEventListener("sessionend",Vc),this.render=function(S,Q){if(Q!==void 0&&Q.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;$!==null&&$.renderStart(S,Q);let pe=Je.enabled===!0&&Je.isPresenting===!0,ce=L!==null&&(N===null||pe)&&L.begin(O,N);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Je.enabled===!0&&Je.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Je.cameraAutoUpdate===!0&&Je.updateCamera(Q),Q=Je.getCamera()),S.isScene===!0&&S.onBeforeRender(O,S,Q,N),T=_e.get(S,m.length),T.init(Q),T.state.textureUnits=V.getTextureUnits(),m.push(T),Te.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),ge.setFromProjectionMatrix(Te,Mn,Q.reversedDepth),Se=this.localClippingEnabled,me=Le.init(this.clippingPlanes,Se),P=k.get(S,R.length),P.init(),R.push(P),Je.enabled===!0&&Je.isPresenting===!0){let qe=O.xr.getDepthSensingMesh();qe!==null&&sl(qe,Q,-1/0,O.sortObjects)}sl(S,Q,0,O.sortObjects),P.finish(),$!==null&&$.updateLights(T.state.lightsArray),O.sortObjects===!0&&P.sort(we,te),ve=Je.enabled===!1||Je.isPresenting===!1||Je.hasDepthSensing()===!1,ve&&We.addToRenderList(P,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),me===!0&&Le.beginShadows();let he=T.state.shadowsArray;if(Be.render(he,S,Q),me===!0&&Le.endShadows(),(ce&&L.hasRenderPass())===!1){let qe=P.opaque,ke=P.transmissive;if(T.setupLights(),Q.isArrayCamera){let Ye=Q.cameras;if(ke.length>0)for(let $e=0,st=Ye.length;$e<st;$e++){let ot=Ye[$e];Xc(qe,ke,S,ot)}ve&&We.render(S);for(let $e=0,st=Ye.length;$e<st;$e++){let ot=Ye[$e];Wc(P,S,ot,ot.viewport)}}else ke.length>0&&Xc(qe,ke,S,Q),ve&&We.render(S),Wc(P,S,Q)}N!==null&&E===0&&(V.updateMultisampleRenderTarget(N),V.updateRenderTargetMipmap(N)),ce&&L.end(O),S.isScene===!0&&S.onAfterRender(O,S,Q),Ve.resetDefaultState(),z=-1,le=null,m.pop(),m.length>0?(T=m[m.length-1],V.setTextureUnits(T.state.textureUnits),me===!0&&Le.setGlobalState(O.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?P=R[R.length-1]:P=null,$!==null&&$.renderEnd()};function sl(S,Q,pe,ce){if(S.visible===!1)return;if(S.layers.test(Q.layers)){if(S.isGroup)pe=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(Q);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(ge)){ce&&ee.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Te);let qe=Z.update(S),ke=S.material;ke.visible&&P.push(S,qe,ke,pe,ee.z,null,Q)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(ge))){let qe=Z.update(S),ke=S.material;if(ce&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ee.copy(S.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),ee.copy(qe.boundingSphere.center)),ee.applyMatrix4(S.matrixWorld).applyMatrix4(Te)),Array.isArray(ke)){let Ye=qe.groups;for(let $e=0,st=Ye.length;$e<st;$e++){let ot=Ye[$e],Ze=ke[ot.materialIndex];Ze&&Ze.visible&&P.push(S,qe,Ze,pe,ee.z,ot,Q)}}else ke.visible&&P.push(S,qe,ke,pe,ee.z,null,Q)}}let Ge=S.children;for(let qe=0,ke=Ge.length;qe<ke;qe++)sl(Ge[qe],Q,pe,ce)}function Wc(S,Q,pe,ce){let{opaque:he,transmissive:Ge,transparent:qe}=S;T.setupLightsView(pe),me===!0&&Le.setGlobalState(O.clippingPlanes,pe),ce&&g.viewport(G.copy(ce)),he.length>0&&Gr(he,Q,pe),Ge.length>0&&Gr(Ge,Q,pe),qe.length>0&&Gr(qe,Q,pe),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Xc(S,Q,pe,ce){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[ce.id]===void 0){let Ze=j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[ce.id]=new tn(1,1,{generateMipmaps:!0,type:Ze?An:rn,minFilter:vi,samples:Math.max(4,b.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let Ge=T.state.transmissionRenderTarget[ce.id],qe=ce.viewport||G;Ge.setSize(qe.z*O.transmissionResolutionScale,qe.w*O.transmissionResolutionScale);let ke=O.getRenderTarget(),Ye=O.getActiveCubeFace(),$e=O.getActiveMipmapLevel();O.setRenderTarget(Ge),O.getClearColor(ye),Ce=O.getClearAlpha(),Ce<1&&O.setClearColor(16777215,.5),O.clear(),ve&&We.render(pe);let st=O.toneMapping;O.toneMapping=Tn;let ot=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),T.setupLightsView(ce),me===!0&&Le.setGlobalState(O.clippingPlanes,ce),Gr(S,pe,ce),V.updateMultisampleRenderTarget(Ge),V.updateRenderTargetMipmap(Ge),j.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let gt=0,Lt=Q.length;gt<Lt;gt++){let Et=Q[gt],{object:Mt,geometry:Xt,material:Xe,group:Kt}=Et;if(Xe.side===Wt&&Mt.layers.test(ce.layers)){let ft=Xe.side;Xe.side=Vt,Xe.needsUpdate=!0,qc(Mt,pe,ce,Xt,Xe,Kt),Xe.side=ft,Xe.needsUpdate=!0,Ze=!0}}Ze===!0&&(V.updateMultisampleRenderTarget(Ge),V.updateRenderTargetMipmap(Ge))}O.setRenderTarget(ke,Ye,$e),O.setClearColor(ye,Ce),ot!==void 0&&(ce.viewport=ot),O.toneMapping=st}function Gr(S,Q,pe){let ce=Q.isScene===!0?Q.overrideMaterial:null;for(let he=0,Ge=S.length;he<Ge;he++){let qe=S[he],{object:ke,geometry:Ye,group:$e}=qe,st=qe.material;st.allowOverride===!0&&ce!==null&&(st=ce),ke.layers.test(pe.layers)&&qc(ke,Q,pe,Ye,st,$e)}}function qc(S,Q,pe,ce,he,Ge){$!==null&&he.isNodeMaterial&&$.setObject(S,he),S.onBeforeRender(O,Q,pe,ce,he,Ge),S.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),he.onBeforeRender(O,Q,pe,ce,S,Ge),he.transparent===!0&&he.side===Wt&&he.forceSinglePass===!1?(he.side=Vt,he.needsUpdate=!0,O.renderBufferDirect(pe,Q,ce,he,S,Ge),he.side=xi,he.needsUpdate=!0,O.renderBufferDirect(pe,Q,ce,he,S,Ge),he.side=Wt):O.renderBufferDirect(pe,Q,ce,he,S,Ge),S.onAfterRender(O,Q,pe,ce,he,Ge)}function Vr(S,Q,pe){Q.isScene!==!0&&(Q=oe);let ce=F.get(S),he=T.state.lights,Ge=T.state.shadowsArray,qe=he.state.version,ke=xe.getParameters(S,he.state,Ge,Q,pe,T.state.lightProbeGridArray),Ye=xe.getProgramCacheKey(ke),$e=ce.programs;ce.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?Q.environment:null,ce.fog=Q.fog;let st=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;ce.envMap=J.get(S.envMap||ce.environment,st),ce.envMapRotation=ce.environment!==null&&S.envMap===null?Q.environmentRotation:S.envMapRotation,$e===void 0&&(S.addEventListener("dispose",Pn),$e=new Map,ce.programs=$e);let ot=$e.get(Ye);if(ot!==void 0){if(ce.currentProgram===ot&&ce.lightsStateVersion===qe)return Zc(S,ke),ot}else ke.uniforms=xe.getUniforms(S),$!==null&&S.isNodeMaterial&&$.build(S,pe,ke),S.onBeforeCompile(ke,O),ot=xe.acquireProgram(ke,Ye),$e.set(Ye,ot),ce.uniforms=ke.uniforms;let Ze=ce.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ze.clippingPlanes=Le.uniform),Zc(S,ke),ce.needsLights=bu(S),ce.lightsStateVersion=qe,ce.needsLights&&(Ze.ambientLightColor.value=he.state.ambient,Ze.lightProbe.value=he.state.probe,Ze.sunLights.value=he.state.sun,Ze.sunLightShadows.value=he.state.sunShadow,Ze.directionalLights.value=he.state.directional,Ze.directionalLightShadows.value=he.state.directionalShadow,Ze.spotLights.value=he.state.spot,Ze.spotLightShadows.value=he.state.spotShadow,Ze.rectAreaLights.value=he.state.rectArea,Ze.ltc_1.value=he.state.rectAreaLTC1,Ze.ltc_2.value=he.state.rectAreaLTC2,Ze.pointLights.value=he.state.point,Ze.pointLightShadows.value=he.state.pointShadow,Ze.hemisphereLights.value=he.state.hemi,Ze.sunShadowMatrix.value=he.state.sunShadowMatrix,Ze.sunShadowCascade.value=he.state.sunShadowCascade,Ze.directionalShadowMatrix.value=he.state.directionalShadowMatrix,Ze.spotLightMatrix.value=he.state.spotLightMatrix,Ze.spotLightMap.value=he.state.spotLightMap,Ze.pointShadowMatrix.value=he.state.pointShadowMatrix),ce.lightProbeGrid=T.state.lightProbeGridArray.length>0,ce.currentProgram=ot,ce.uniformsList=null,ot}function Yc(S){if(S.uniformsList===null){let Q=S.currentProgram.getUniforms();S.uniformsList=Us.seqWithValue(Q.seq,S.uniforms)}return S.uniformsList}function Zc(S,Q){let pe=F.get(S);pe.outputColorSpace=Q.outputColorSpace,pe.batching=Q.batching,pe.batchingColor=Q.batchingColor,pe.instancing=Q.instancing,pe.instancingColor=Q.instancingColor,pe.instancingMorph=Q.instancingMorph,pe.skinning=Q.skinning,pe.morphTargets=Q.morphTargets,pe.morphNormals=Q.morphNormals,pe.morphColors=Q.morphColors,pe.morphTargetsCount=Q.morphTargetsCount,pe.numClippingPlanes=Q.numClippingPlanes,pe.numIntersection=Q.numClipIntersection,pe.vertexAlphas=Q.vertexAlphas,pe.vertexTangents=Q.vertexTangents,pe.toneMapping=Q.toneMapping}function yu(S,Q){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(Q.matrixWorld);for(let pe=0,ce=S.length;pe<ce;pe++){let he=S[pe];if(he.texture!==null&&he.boundingBox.containsPoint(v))return he}return null}function vu(S,Q,pe,ce,he){Q.isScene!==!0&&(Q=oe),V.resetTextureUnits();let Ge=Q.fog,qe=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?Q.environment:null,ke=N===null?O.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ct.workingColorSpace,Ye=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,$e=J.get(ce.envMap||qe,Ye),st=ce.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,ot=!!pe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Ze=!!pe.morphAttributes.position,gt=!!pe.morphAttributes.normal,Lt=!!pe.morphAttributes.color,Et=Tn;ce.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Et=O.toneMapping);let Mt=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,Xt=Mt!==void 0?Mt.length:0,Xe=F.get(ce),Kt=T.state.lights;if(me===!0&&(Se===!0||S!==le)){let St=S===le&&ce.id===z;Le.setState(ce,S,St)}let ft=!1;ce.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Kt.state.version||Xe.outputColorSpace!==ke||he.isBatchedMesh&&Xe.batching===!1||!he.isBatchedMesh&&Xe.batching===!0||he.isBatchedMesh&&Xe.batchingColor===!0&&he._colorsTexture===null||he.isBatchedMesh&&Xe.batchingColor===!1&&he._colorsTexture!==null||he.isInstancedMesh&&Xe.instancing===!1||!he.isInstancedMesh&&Xe.instancing===!0||he.isSkinnedMesh&&Xe.skinning===!1||!he.isSkinnedMesh&&Xe.skinning===!0||he.isInstancedMesh&&Xe.instancingColor===!0&&he.instanceColor===null||he.isInstancedMesh&&Xe.instancingColor===!1&&he.instanceColor!==null||he.isInstancedMesh&&Xe.instancingMorph===!0&&he.morphTexture===null||he.isInstancedMesh&&Xe.instancingMorph===!1&&he.morphTexture!==null||Xe.envMap!==$e||ce.fog===!0&&Xe.fog!==Ge||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Le.numPlanes||Xe.numIntersection!==Le.numIntersection)||Xe.vertexAlphas!==st||Xe.vertexTangents!==ot||Xe.morphTargets!==Ze||Xe.morphNormals!==gt||Xe.morphColors!==Lt||Xe.toneMapping!==Et||Xe.morphTargetsCount!==Xt||!!Xe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,Xe.__version=ce.version);let un=Xe.currentProgram;ft===!0&&(un=Vr(ce,Q,he),$&&ce.isNodeMaterial&&$.onUpdateProgram(ce,un,Xe));let In=!1,ri=!1,Xi=!1,yt=un.getUniforms(),It=Xe.uniforms;if(g.useProgram(un.program)&&(In=!0,ri=!0,Xi=!0),ce.id!==z&&(z=ce.id,ri=!0),Xe.needsLights){let St=yu(T.state.lightProbeGridArray,he);Xe.lightProbeGrid!==St&&(Xe.lightProbeGrid=St,ri=!0)}if(In||le!==S){g.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),yt.setValue(X,"projectionMatrix",S.projectionMatrix),yt.setValue(X,"viewMatrix",S.matrixWorldInverse);let oi=yt.map.cameraPosition;oi!==void 0&&oi.setValue(X,Oe.setFromMatrixPosition(S.matrixWorld)),b.logarithmicDepthBuffer&&yt.setValue(X,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&yt.setValue(X,"isOrthographic",S.isOrthographicCamera===!0),le!==S&&(le=S,ri=!0,Xi=!0)}if(Xe.needsLights&&(Kt.state.sunShadowMap.length>0&&yt.setValue(X,"sunShadowMap",Kt.state.sunShadowMap,V),Kt.state.directionalShadowMap.length>0&&yt.setValue(X,"directionalShadowMap",Kt.state.directionalShadowMap,V),Kt.state.spotShadowMap.length>0&&yt.setValue(X,"spotShadowMap",Kt.state.spotShadowMap,V),Kt.state.pointShadowMap.length>0&&yt.setValue(X,"pointShadowMap",Kt.state.pointShadowMap,V)),he.isSkinnedMesh){yt.setOptional(X,he,"bindMatrix"),yt.setOptional(X,he,"bindMatrixInverse");let St=he.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),yt.setValue(X,"boneTexture",St.boneTexture,V))}he.isBatchedMesh&&(yt.setOptional(X,he,"batchingTexture"),yt.setValue(X,"batchingTexture",he._matricesTexture,V),yt.setOptional(X,he,"batchingIdTexture"),yt.setValue(X,"batchingIdTexture",he._indirectTexture,V),yt.setOptional(X,he,"batchingColorTexture"),he._colorsTexture!==null&&yt.setValue(X,"batchingColorTexture",he._colorsTexture,V));let ai=pe.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&K.update(he,pe,un),(ri||Xe.receiveShadow!==he.receiveShadow)&&(Xe.receiveShadow=he.receiveShadow,yt.setValue(X,"receiveShadow",he.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&Q.environment!==null&&(It.envMapIntensity.value=Q.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=wx()),ri){if(yt.setValue(X,"toneMappingExposure",O.toneMappingExposure),Xe.needsLights&&Mu(It,Xi),Ge&&ce.fog===!0&&Ee.refreshFogUniforms(It,Ge),Ee.refreshMaterialUniforms(It,ce,de,ie,T.state.transmissionRenderTarget[S.id]),Xe.needsLights&&Xe.lightProbeGrid){let St=Xe.lightProbeGrid;It.probesSH.value=St.texture,It.probesMin.value.copy(St.boundingBox.min),It.probesMax.value.copy(St.boundingBox.max),It.probesResolution.value.copy(St.resolution)}Us.upload(X,Yc(Xe),It,V)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Us.upload(X,Yc(Xe),It,V),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&yt.setValue(X,"center",he.center),yt.setValue(X,"modelViewMatrix",he.modelViewMatrix),yt.setValue(X,"normalMatrix",he.normalMatrix),yt.setValue(X,"modelMatrix",he.matrixWorld),ce.uniformsGroups!==void 0){let St=ce.uniformsGroups;for(let oi=0,qi=St.length;oi<qi;oi++){let $c=St[oi];Ae.update($c,un),Ae.bind($c,un)}}return un}function Mu(S,Q){S.ambientLightColor.needsUpdate=Q,S.lightProbe.needsUpdate=Q,S.sunLights.needsUpdate=Q,S.sunLightShadows.needsUpdate=Q,S.directionalLights.needsUpdate=Q,S.directionalLightShadows.needsUpdate=Q,S.pointLights.needsUpdate=Q,S.pointLightShadows.needsUpdate=Q,S.spotLights.needsUpdate=Q,S.spotLightShadows.needsUpdate=Q,S.rectAreaLights.needsUpdate=Q,S.hemisphereLights.needsUpdate=Q}function bu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(S,Q,pe){let ce=F.get(S);ce.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),F.get(S.texture).__webglTexture=Q,F.get(S.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:pe,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,Q){let pe=F.get(S);pe.__webglFramebuffer=Q,pe.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(S,Q=0,pe=0){N=S,W=Q,E=pe;let ce=null,he=!1,Ge=!1;if(S){let ke=F.get(S);if(ke.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(X.FRAMEBUFFER,ke.__webglFramebuffer),G.copy(S.viewport),fe.copy(S.scissor),ne=S.scissorTest,g.viewport(G),g.scissor(fe),g.setScissorTest(ne),z=-1;return}else if(ke.__webglFramebuffer===void 0)V.setupRenderTarget(S);else if(ke.__hasExternalTextures)V.rebindTextures(S,F.get(S.texture).__webglTexture,F.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let st=S.depthTexture;if(ke.__boundDepthTexture!==st){if(st!==null&&F.has(st)&&(S.width!==st.image.width||S.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(S)}}let Ye=S.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ge=!0);let $e=F.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray($e[Q])?ce=$e[Q][pe]:ce=$e[Q],he=!0):S.samples>0&&V.useMultisampledRTT(S)===!1?ce=F.get(S).__webglMultisampledFramebuffer:Array.isArray($e)?ce=$e[pe]:ce=$e,G.copy(S.viewport),fe.copy(S.scissor),ne=S.scissorTest}else G.copy(ue).multiplyScalar(de).floor(),fe.copy(Fe).multiplyScalar(de).floor(),ne=Me;if(pe!==0&&(ce=B),g.bindFramebuffer(X.FRAMEBUFFER,ce)&&g.drawBuffers(S,ce),g.viewport(G),g.scissor(fe),g.setScissorTest(ne),he){let ke=F.get(S.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ke.__webglTexture,pe)}else if(Ge){let ke=Q;for(let Ye=0;Ye<S.textures.length;Ye++){let $e=F.get(S.textures[Ye]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ye,$e.__webglTexture,pe,ke)}}else if(S!==null&&pe!==0){let ke=F.get(S.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ke.__webglTexture,pe)}z=-1};function Jc(S){let Q=F.get(S);return(Q.__readFormat!==S.format||Q.__readType!==S.type)&&(Q.__readFormat=S.format,Q.__readType=S.type,Q.__formatReadable=b.textureFormatReadable(S.format),Q.__typeReadable=b.textureTypeReadable(S.type)),Q}this.readRenderTargetPixels=function(S,Q,pe,ce,he,Ge,qe,ke=0){if(!(S&&S.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=F.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&qe!==void 0&&(Ye=Ye[qe]),Ye){g.bindFramebuffer(X.FRAMEBUFFER,Ye);try{let $e=S.textures[ke],st=$e.format,ot=$e.type;S.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+ke);let Ze=Jc($e);if(Ze.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ze.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=S.width-ce&&pe>=0&&pe<=S.height-he&&X.readPixels(Q,pe,ce,he,He.convert(st),He.convert(ot),Ge)}finally{let $e=N!==null?F.get(N).__webglFramebuffer:null;g.bindFramebuffer(X.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(S,Q,pe,ce,he,Ge,qe,ke=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=F.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&qe!==void 0&&(Ye=Ye[qe]),Ye)if(Q>=0&&Q<=S.width-ce&&pe>=0&&pe<=S.height-he){g.bindFramebuffer(X.FRAMEBUFFER,Ye);let $e=S.textures[ke],st=$e.format,ot=$e.type;S.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+ke);let Ze=Jc($e);if(Ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,gt),X.bufferData(X.PIXEL_PACK_BUFFER,Ge.byteLength,X.STREAM_READ),X.readPixels(Q,pe,ce,he,He.convert(st),He.convert(ot),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let Lt=N!==null?F.get(N).__webglFramebuffer:null;g.bindFramebuffer(X.FRAMEBUFFER,Lt);let Et=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await pf(X,Et,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,gt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ge),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(gt),X.deleteSync(Et),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,Q=null,pe=0){let ce=Math.pow(2,-pe),he=Math.floor(S.image.width*ce),Ge=Math.floor(S.image.height*ce),qe=Q!==null?Q.x:0,ke=Q!==null?Q.y:0;V.setTexture2D(S,0),X.copyTexSubImage2D(X.TEXTURE_2D,pe,0,0,qe,ke,he,Ge),g.unbindTexture()},this.copyTextureToTexture=function(S,Q,pe=null,ce=null,he=0,Ge=0){let qe,ke,Ye,$e,st,ot,Ze,gt,Lt,Et=S.isCompressedTexture?S.mipmaps[Ge]:S.image;if(pe!==null)qe=pe.max.x-pe.min.x,ke=pe.max.y-pe.min.y,Ye=pe.isBox3?pe.max.z-pe.min.z:1,$e=pe.min.x,st=pe.min.y,ot=pe.isBox3?pe.min.z:0;else{let It=Math.pow(2,-he);qe=Math.floor(Et.width*It),ke=Math.floor(Et.height*It),S.isDataArrayTexture?Ye=Et.depth:S.isData3DTexture?Ye=Math.floor(Et.depth*It):Ye=1,$e=0,st=0,ot=0}ce!==null?(Ze=ce.x,gt=ce.y,Lt=ce.z):(Ze=0,gt=0,Lt=0);let Mt=He.convert(Q.format),Xt=He.convert(Q.type),Xe;Q.isData3DTexture?(V.setTexture3D(Q,0),Xe=X.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(V.setTexture2DArray(Q,0),Xe=X.TEXTURE_2D_ARRAY):(V.setTexture2D(Q,0),Xe=X.TEXTURE_2D),g.activeTexture(X.TEXTURE0),g.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Q.flipY),g.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),g.pixelStorei(X.UNPACK_ALIGNMENT,Q.unpackAlignment);let Kt=g.getParameter(X.UNPACK_ROW_LENGTH),ft=g.getParameter(X.UNPACK_IMAGE_HEIGHT),un=g.getParameter(X.UNPACK_SKIP_PIXELS),In=g.getParameter(X.UNPACK_SKIP_ROWS),ri=g.getParameter(X.UNPACK_SKIP_IMAGES);g.pixelStorei(X.UNPACK_ROW_LENGTH,Et.width),g.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Et.height),g.pixelStorei(X.UNPACK_SKIP_PIXELS,$e),g.pixelStorei(X.UNPACK_SKIP_ROWS,st),g.pixelStorei(X.UNPACK_SKIP_IMAGES,ot);let Xi=S.isDataArrayTexture||S.isData3DTexture,yt=Q.isDataArrayTexture||Q.isData3DTexture;if(S.isDepthTexture){let It=F.get(S),ai=F.get(Q),St=F.get(It.__renderTarget),oi=F.get(ai.__renderTarget);g.bindFramebuffer(X.READ_FRAMEBUFFER,St.__webglFramebuffer),g.bindFramebuffer(X.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let qi=0;qi<Ye;qi++)Xi&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,F.get(S).__webglTexture,he,ot+qi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,F.get(Q).__webglTexture,Ge,Lt+qi)),X.blitFramebuffer($e,st,qe,ke,Ze,gt,qe,ke,X.DEPTH_BUFFER_BIT,X.NEAREST);g.bindFramebuffer(X.READ_FRAMEBUFFER,null),g.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(he!==0||S.isRenderTargetTexture||F.has(S)){let It=F.get(S),ai=F.get(Q);g.bindFramebuffer(X.READ_FRAMEBUFFER,A),g.bindFramebuffer(X.DRAW_FRAMEBUFFER,D);for(let St=0;St<Ye;St++)Xi?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,It.__webglTexture,he,ot+St):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,It.__webglTexture,he),yt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ai.__webglTexture,Ge,Lt+St):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ai.__webglTexture,Ge),he!==0?X.blitFramebuffer($e,st,qe,ke,Ze,gt,qe,ke,X.COLOR_BUFFER_BIT,X.NEAREST):yt?X.copyTexSubImage3D(Xe,Ge,Ze,gt,Lt+St,$e,st,qe,ke):X.copyTexSubImage2D(Xe,Ge,Ze,gt,$e,st,qe,ke);g.bindFramebuffer(X.READ_FRAMEBUFFER,null),g.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else yt?S.isDataTexture||S.isData3DTexture?X.texSubImage3D(Xe,Ge,Ze,gt,Lt,qe,ke,Ye,Mt,Xt,Et.data):Q.isCompressedArrayTexture?X.compressedTexSubImage3D(Xe,Ge,Ze,gt,Lt,qe,ke,Ye,Mt,Et.data):X.texSubImage3D(Xe,Ge,Ze,gt,Lt,qe,ke,Ye,Mt,Xt,Et):S.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ge,Ze,gt,qe,ke,Mt,Xt,Et.data):S.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ge,Ze,gt,Et.width,Et.height,Mt,Et.data):X.texSubImage2D(X.TEXTURE_2D,Ge,Ze,gt,qe,ke,Mt,Xt,Et);g.pixelStorei(X.UNPACK_ROW_LENGTH,Kt),g.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ft),g.pixelStorei(X.UNPACK_SKIP_PIXELS,un),g.pixelStorei(X.UNPACK_SKIP_ROWS,In),g.pixelStorei(X.UNPACK_SKIP_IMAGES,ri),Ge===0&&Q.generateMipmaps&&X.generateMipmap(Xe),g.unbindTexture()},this.initRenderTarget=function(S){F.get(S).__webglFramebuffer===void 0&&V.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?V.setTextureCube(S,0):S.isData3DTexture?V.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?V.setTexture2DArray(S,0):V.setTexture2D(S,0),g.unbindTexture()},this.resetState=function(){W=0,E=0,N=null,g.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var Hr=new q;function gn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Hr.copy(e),Hr[n]=0,Hr.normalize();let l=.5*a/(a+o),f=1-Hr.angleTo(i)/c;return Math.sign(Hr[t])===1?f*l:o/(a+o)+l+l*(1-f)}var jo=class i extends zn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new q,l=new q,f=new q(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,_=u.length/6,y=new q,x=.5/a;for(let p=0,C=0;p<u.length;p+=3,C+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),u[p+0]=f.x*Math.sign(c.x)+l.x*r,u[p+1]=f.y*Math.sign(c.y)+l.y*r,u[p+2]=f.z*Math.sign(c.z)+l.z*r,h[p+0]=l.x,h[p+1]=l.y,h[p+2]=l.z,Math.floor(p/_)){case 0:y.set(1,0,0),d[C+0]=gn(y,l,"z","y",r,n),d[C+1]=1-gn(y,l,"y","z",r,t);break;case 1:y.set(-1,0,0),d[C+0]=1-gn(y,l,"z","y",r,n),d[C+1]=1-gn(y,l,"y","z",r,t);break;case 2:y.set(0,1,0),d[C+0]=1-gn(y,l,"x","z",r,e),d[C+1]=gn(y,l,"z","x",r,n);break;case 3:y.set(0,-1,0),d[C+0]=1-gn(y,l,"x","z",r,e),d[C+1]=1-gn(y,l,"z","x",r,n);break;case 4:y.set(0,0,1),d[C+0]=1-gn(y,l,"x","y",r,e),d[C+1]=1-gn(y,l,"y","x",r,t);break;case 5:y.set(0,0,-1),d[C+0]=gn(y,l,"x","y",r,e),d[C+1]=1-gn(y,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var ut={mint:6153140,mintDeep:4179866,belly:13237224,lav:13089023,lavDeep:11772671,pink:16748480,ink:2759518,wood:15782832,woodDark:14267530,wall:15326974,wallB:16770033,cream:16774890,sun:16764735},M=(i,e)=>new zt(Object.assign({color:i,roughness:.85,metalness:0},e||{})),re=(i,e,t,n)=>new jo(i,e,t,4,n??Math.min(i,e,t)*.25);function I(i,e,t,n,s,r){let a=new ht(i,e);return a.position.set(t||0,n||0,s||0),r!==!1&&(a.castShadow=!0,a.receiveShadow=!0),a}function ae(i,e,t,n,s,r,a,o){let c=I(new Es(i,32,24),e,r,a,o);return c.scale.set(t||1,n||1,s||1),c}function At(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new Ii(n);return s.colorSpace=kt,s.anisotropy=4,s}function Si(i){let e=new Li;return e.moveTo(0,-.5*i),e.bezierCurveTo(-.9*i,.05*i,-.5*i,.7*i,0,.3*i),e.bezierCurveTo(.5*i,.7*i,.9*i,.05*i,0,-.5*i),e}function su(i){return At(64,64,e=>{if(e.translate(32,32),i==="heart")e.fillStyle="#FF5FA8",e.beginPath(),e.moveTo(0,22),e.bezierCurveTo(-34,-2,-16,-28,0,-10),e.bezierCurveTo(16,-28,34,-2,0,22),e.fill();else if(i==="star"){e.fillStyle="#FFCF3F",e.beginPath();for(let t=0;t<10;t++){let n=t%2?9:22,s=t*Math.PI/5-Math.PI/2;e.lineTo(Math.cos(s)*n,Math.sin(s)*n)}e.fill()}else i==="drop"?(e.fillStyle="#8EDBFF",e.beginPath(),e.moveTo(0,-22),e.bezierCurveTo(22,4,14,22,0,22),e.bezierCurveTo(-14,22,-22,4,0,-22),e.fill()):i==="bubble"?(e.strokeStyle="#8EDBFF",e.lineWidth=4,e.fillStyle="rgba(200,240,255,.55)",e.beginPath(),e.arc(0,0,16,0,7),e.fill(),e.stroke(),e.fillStyle="#fff",e.beginPath(),e.arc(-6,-6,4,0,7),e.fill()):i==="z"?(e.fillStyle="#7C5CFF",e.font="900 40px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("z",0,2)):(e.fillStyle="#fff",e.beginPath(),e.arc(0,0,14,0,7),e.fill())})}function Oc(i){let e=i>>>0||1;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function Cn(i,e,t,n){n=n||{};let s=n.w||256,r=n.h||256,a=Oc(n.seed||7),o=At(s,r,c=>{if(c.fillStyle=i,c.fillRect(0,0,s,r),n.planks){let l=r/n.planks;for(let f=0;f<n.planks;f++){c.fillStyle=e[f%e.length],c.globalAlpha=.5,c.fillRect(0,f*l,s,l),c.globalAlpha=1,c.fillStyle="rgba(90,50,20,.28)",c.fillRect(0,f*l,s,2);for(let u=0;u<3;u++)c.fillStyle="rgba(90,50,20,.18)",c.fillRect(a()*s,f*l,2,l)}}c.lineCap="round";for(let l=0;l<t;l++){c.strokeStyle=e[Math.floor(a()*e.length)],c.globalAlpha=.07+a()*.14,c.lineWidth=5+a()*(n.bw||14);let f=a()*s,u=a()*r,h=(n.ang==null?-.6:n.ang)+(a()-.5)*.7,d=14+a()*(n.len||46);c.beginPath(),c.moveTo(f,u),c.lineTo(f+Math.cos(h)*d,u+Math.sin(h)*d),c.stroke()}c.globalAlpha=1});return o.wrapS=o.wrapT=bn,o}var Qf=null;function nl(){return Qf||(Qf=At(64,64,i=>{let e=i.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.45,"rgba(255,255,255,.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,64,64)}))}function Bc(i){try{i.toneMapping=Ar,i.toneMappingExposure=1.02}catch{}}var eu=!1;function Hc(i){try{if(!eu){eu=!0;let e=document.createElement("style");e.textContent=`.gh-vig{position:absolute;inset:0;pointer-events:none;z-index:1;background:radial-gradient(ellipse 85% 75% at 50% 46%,rgba(255,236,200,0) 55%,rgba(90,45,25,.30) 100%),linear-gradient(rgba(255,206,140,.07),rgba(255,206,140,.07));mix-blend-mode:multiply}.gh-grain{position:absolute;inset:0;pointer-events:none;z-index:1;opacity:.07;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 .3 0 0 0 0 .2 0 0 0 0 .1 0 0 0 .9 0'/></filter><rect width='120' height='120' filter='url(%23n)'/></svg>")}`,document.head.appendChild(e)}getComputedStyle(i).position==="static"&&(i.style.position="relative"),["gh-vig","gh-grain"].forEach(e=>{let t=document.createElement("div");t.className=e,i.appendChild(t)})}catch{}}function kr(i,e,t,n,s,r){r=r||{};let a=[];for(let u=0;u<s;u++){let h=new Hn(new En({map:nl(),color:r.color||16777215,transparent:!0,opacity:0,depthWrite:!1}));h.userData={o:u/s,sw:Math.random()*6},i.add(h),a.push(h)}let o=r.rise||1.1,c=r.size||.35,l=r.op||.5,f=r.speed||.3;return u=>{a.forEach(h=>{let d=(u*f+h.userData.o)%1;h.position.set(e+Math.sin(u*1.3+h.userData.sw)*.09*(.4+d),t+d*o,n+Math.cos(u+h.userData.sw)*.04),h.scale.setScalar(c*(.7+d*1.9)),h.material.opacity=l*Math.sin(Math.min(1,d)*Math.PI)*(1-d*.4)})}}function tl(i,e,t,n,s,r,a){let o=new Hn(new En({map:nl(),color:e,transparent:!0,opacity:a??.7,depthWrite:!1,blending:_i}));return o.scale.setScalar(t),o.position.set(n,s,r),i.add(o),o}function zi(i,e,t,n,s,r,a,o,c){let l=At(64,128,u=>{let h=u.createLinearGradient(0,0,0,128);h.addColorStop(0,"rgba(255,255,255,.95)"),h.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=h,u.fillRect(0,0,64,128),u.globalCompositeOperation="destination-in";let d=u.createLinearGradient(0,0,64,0);d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(.5,"rgba(0,0,0,1)"),d.addColorStop(1,"rgba(0,0,0,0)"),u.fillStyle=d,u.fillRect(0,0,64,128)}),f=new ht(new pt(t,n),new je({map:l,color:e,transparent:!0,opacity:c||.22,depthWrite:!1,blending:_i,side:Wt}));return f.position.set(s,r,a),f.rotation.z=o||0,i.add(f),f}function Hs(i,e,t,n,s){let r=new Nt,a=new Float32Array(e*3),o=[];for(let l=0;l<e;l++)o.push([Math.random()*6.28,.2+Math.random()*.4,Math.random()*6.28]);r.setAttribute("position",new Zt(a,3));let c=new ur(r,new Ms({map:nl(),color:n||16773832,size:s||.06,transparent:!0,opacity:.8,depthWrite:!1,blending:_i,sizeAttenuation:!0}));return c.frustumCulled=!1,i.add(c),l=>{for(let f=0;f<e;f++){let u=o[f];a[f*3]=t[0]+Math.sin(l*u[1]+u[0])*t[3],a[f*3+1]=t[1]+(l*.06*(u[1]+.3)+u[2])%1*t[4],a[f*3+2]=t[2]+Math.cos(l*u[1]*.8+u[2])*t[5]}r.attributes.position.needsUpdate=!0}}function Rx(i){return At(256,192,(e,t,n)=>{let s=e.createLinearGradient(0,0,0,n);if(s.addColorStop(0,i==="sea"?"#8fd0f0":"#a9dcf5"),s.addColorStop(1,i==="dusk"?"#ffc9a0":"#fdf3dc"),e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle=i==="dusk"?"#ff9a6b":"#fff0a8",e.beginPath(),e.arc(t*.72,n*.28,22,0,7),e.fill(),e.fillStyle="rgba(255,255,255,.95)",[[60,50,18],[82,48,24],[108,52,16],[170,74,12],[186,72,16]].forEach(r=>{e.beginPath(),e.arc(r[0],r[1],r[2],0,7),e.fill()}),i==="sea"){e.fillStyle="#4fb0e0",e.fillRect(0,n*.62,t,n),e.strokeStyle="rgba(255,255,255,.7)",e.lineWidth=3;for(let r=0;r<7;r++)e.beginPath(),e.moveTo(10+r*34,n*.7+r%3*14),e.quadraticCurveTo(24+r*34,n*.66+r%3*14,38+r*34,n*.7+r%3*14),e.stroke();return}e.fillStyle="#9fd48a",e.beginPath(),e.moveTo(0,n*.7),e.quadraticCurveTo(t*.3,n*.45,t*.6,n*.66),e.quadraticCurveTo(t*.85,n*.52,t,n*.62),e.lineTo(t,n),e.lineTo(0,n),e.fill(),e.fillStyle="#6cba6a",e.beginPath(),e.moveTo(0,n*.85),e.quadraticCurveTo(t*.5,n*.62,t,n*.82),e.lineTo(t,n),e.lineTo(0,n),e.fill(),e.fillStyle="#fff6e6",e.fillRect(t*.3,n*.62,34,26),e.fillStyle="#e8735a",e.beginPath(),e.moveTo(t*.3-4,n*.62),e.lineTo(t*.3+17,n*.5),e.lineTo(t*.3+38,n*.62),e.fill(),e.fillStyle="#8a5a3a",e.fillRect(t*.3+13,n*.7,8,18),e.fillStyle="rgba(255,255,255,.7)",e.beginPath(),e.arc(t*.3+30,n*.46,5,0,7),e.arc(t*.3+36,n*.4,7,0,7),e.fill()})}function ki(i,e,t){let n=new Re,s=M(15320986);return n.add(I(re(e+.22,t+.22,.1,.04),s,0,0,0)),n.add(I(new pt(e,t),new je({map:Rx(i)}),0,0,.056,!1)),n}function Gi(i,e){return At(e?768:384,384,(t,n,s)=>{let r=Oc(11),a=i<6||i>=21,o=i>=18&&i<21,c=i>=6&&i<9,l=t.createLinearGradient(0,0,0,s);if(a?(l.addColorStop(0,"#15123f"),l.addColorStop(1,"#4b3a8f")):o?(l.addColorStop(0,"#7a62c8"),l.addColorStop(.55,"#ff9fb8"),l.addColorStop(1,"#ffd9a0")):c?(l.addColorStop(0,"#8fd0ff"),l.addColorStop(1,"#ffe8cf")):(l.addColorStop(0,"#5fb8f5"),l.addColorStop(.7,"#bfe6ff"),l.addColorStop(1,"#eaf8ff")),t.fillStyle=l,t.fillRect(0,0,n,s),a){for(let h=0;h<40;h++)t.globalAlpha=.4+r()*.6,t.fillStyle="#fff",t.beginPath(),t.arc(r()*n,r()*s*.7,r()*1.8+.5,0,7),t.fill();t.globalAlpha=1;let u=t.createRadialGradient(n*.7,s*.25,4,n*.7,s*.25,70);u.addColorStop(0,"rgba(255,244,194,.9)"),u.addColorStop(1,"rgba(255,244,194,0)"),t.fillStyle=u,t.fillRect(0,0,n,s),t.fillStyle="#FFF4C2",t.beginPath(),t.arc(n*.7,s*.25,28,0,7),t.fill(),t.fillStyle="#4b3a8f",t.beginPath(),t.arc(n*.7+12,s*.25-6,24,0,7),t.fill()}else{let u=n*(o?.28:.72),h=s*(o?.62:.24),d=t.createRadialGradient(u,h,6,u,h,120);d.addColorStop(0,o?"rgba(255,150,110,.95)":"rgba(255,240,160,.95)"),d.addColorStop(1,"rgba(255,240,160,0)"),t.fillStyle=d,t.fillRect(0,0,n,s),t.fillStyle=o?"#FF8A6B":"#FFF0A0",t.beginPath(),t.arc(u,h,26,0,7),t.fill(),(e?[[90,120,1.2],[270,90,.9],[200,170,.7],[470,110,1.1],[640,80,.9],[560,180,.7]]:[[90,120,1.2],[270,90,.9],[200,170,.7]]).forEach(_=>{let y=[[0,0,34],[34,-8,40],[70,2,32],[-30,8,26],[20,14,36],[52,14,30]];y.forEach(x=>{t.fillStyle="rgba(150,185,225,.65)",t.beginPath(),t.arc(_[0]+x[0]*_[2],_[1]+x[1]*_[2]+8,x[2]*_[2],0,7),t.fill()}),y.forEach(x=>{t.fillStyle=o?"rgba(255,225,230,.97)":"rgba(255,255,255,.97)",t.beginPath(),t.arc(_[0]+x[0]*_[2],_[1]+x[1]*_[2]-3,x[2]*_[2]*.92,0,7),t.fill()})})}let f=a?["#2a2a6a","#223a5a"]:o?["#8a78b8","#5f8a6a"]:["#8cc9c0","#7fc27a"];t.fillStyle=f[0],t.beginPath(),t.moveTo(0,s*.72),t.quadraticCurveTo(n*.25,s*.55,n*.55,s*.7),t.quadraticCurveTo(n*.8,s*.6,n,s*.68),t.lineTo(n,s),t.lineTo(0,s),t.fill(),t.fillStyle=f[1],t.beginPath(),t.moveTo(0,s*.84),t.quadraticCurveTo(n*.4,s*.7,n,s*.86),t.lineTo(n,s),t.lineTo(0,s),t.fill(),t.fillStyle=a?"#1d3d3a":"#4fa55a",t.beginPath(),t.arc(n*.2,s*.76,30,0,7),t.arc(n*.26,s*.72,24,0,7),t.fill(),t.fillStyle="#7a5434",t.fillRect(n*.2-3,s*.78,7,22);for(let u=0;u<26;u++)t.fillStyle=["#ff8fb4","#ffe27a","#fff"][u%3],t.beginPath(),t.arc(r()*n,s*(.88+r()*.1),2.2,0,7),t.fill()})}var ru=[6153140,12166911,16758938,9362431,16769658,16754895,11069547,14738674,16751266,13085071,10405375,16164607],au=["cat","bear","bunny","none","fox","mouse"],ou=["dot","happy","stars","big","sleepy"],lu=["","bow","glasses","beanie","flower","crown","shades","phones","bandana","bowtie","wings","hat"],cu=["round","tall","chubby","bean"],hu=["none","cat","bunny","fox"],Cx=/^[0-9a-b][0-5][0-4][0-9a-b][0-3][0-3](h[0-5])?$/,Px=[{color:12166911,ears:"none",eyes:"stars",acc:["hat"],tail:"cat"},{color:16743034,ears:"none",eyes:"happy",acc:["horns"],tail:"fox"},{color:16753226,ears:"none",eyes:"happy",acc:["pumpkin"],tail:"none"},{color:14738674,ears:"cat",eyes:"big",acc:["cape"],tail:"none"},{color:15986918,ears:"none",eyes:"dot",acc:["mummy"],tail:"none"},{color:16777215,ears:"none",eyes:"big",acc:["ghost"],tail:"none"}];function fu(i){return i=String(i??""),/^[0-7][0-3][0-2][0-4]$/.test(i)&&(i+="00"),Cx.test(i)?i:""}function Vi(i){i=fu(i)||"000000";let e=lu[parseInt(i[3],12)],t={mika:!0,color:ru[parseInt(i[0],12)],ears:au[+i[1]],eyes:ou[+i[2]],topper:"pom",acc:e?[e]:[],shape:cu[+i[4]],tail:hu[+i[5]]};return i[6]==="h"?Object.assign(t,Px[+i[7]]||{}):t}function Ix(i,e){if(!i.isMesh)return i;let t=new ht(i.geometry,new je({color:e,side:Vt}));return t.scale.setScalar(1.05),t.castShadow=!1,t.receiveShadow=!1,i.add(t),i}function Nc(i,e){let t=new tt(i);return t.multiplyScalar(e),t}function $t(i){i=Object.assign({color:ut.mint,ears:"round",topper:"pom",eyes:"dot",mika:!1,acc:[]},i||{});let e=new Re,t=new Re;e.add(t);let n={tall:[.9,1.2],chubby:[1.2,.9],bean:[.86,1.1]}[i.shape]||[1,1],s=n[0],r=n[1],a=M(i.color,{roughness:.62,emissive:Nc(i.color,.55),emissiveIntensity:.3}),o=M(Nc(i.color,.85).getHex()),c=.55*1.1,l=.55*.95,f=.55,u=.56,h=(E,N)=>f*Math.sqrt(Math.max(.02,1-(E/c)**2-((N-u)/l)**2));t.add(ae(.55,a,1.1,.95,1,0,.56,0));{let E=new tt(i.color).lerp(new tt(16777215),.62).getHex();t.add(ae(.42,M(E,{roughness:.7,emissive:E,emissiveIntensity:.32}),1.05,.9,.55,0,.42,.3))}let d=M(i.mika?14273791:16757713),_=[];if([-1,1].forEach(E=>{let N=new Re,z=.28;if(i.ears==="round")N.position.set(E*.4,.98,-.02),N.add(ae(.22,a,1,1.05,.62,0,.12,0)),N.add(ae(.12,d,1,1.05,.5,0,.12,.08));else if(i.ears==="bear")N.position.set(E*.43,.97,-.02),N.add(ae(.17,a,1,1,.7,0,.1,0)),N.add(ae(.09,d,1,1,.5,0,.1,.07)),z=.2;else if(i.ears==="cat"){N.position.set(E*.36,1,0);let le=I(new Pt(.2,.4,4),a,0,.15,0);le.rotation.y=Math.PI/4,le.scale.z=.55,N.add(le);let G=I(new Pt(.11,.26,4),d,0,.12,.06);G.rotation.y=Math.PI/4,G.scale.z=.4,N.add(G),z=.32}else if(i.ears==="fox"){N.position.set(E*.33,1,0);let le=I(new Pt(.16,.46,4),a,0,.18,0);le.rotation.y=Math.PI/4,le.scale.z=.5,N.add(le);let G=I(new Pt(.08,.18,4),M(16774380),0,.3,.01);G.rotation.y=Math.PI/4,G.scale.z=.5,N.add(G),z=.22}else if(i.ears==="mouse")N.position.set(E*.46,.92,-.02),N.add(ae(.26,a,1,1,.45,0,.12,0)),N.add(ae(.17,d,1,1,.4,0,.12,.07)),z=.34;else if(i.ears==="bunny")N.position.set(E*.26,1,-.02),N.add(ae(.14,a,1,2.6,.55,0,.3,0)),N.add(ae(.08,d,1,2.3,.5,0,.3,.06)),z=.14;else return;N.userData.base=z,N.rotation.z=-E*z,t.add(N),_.push(N)}),i.tail&&i.tail!=="none"){let E=new Re;if(E.position.set(0,.3,-.5),t.add(E),i.tail==="bunny")E.add(ae(.14,M(16777215,{roughness:.9}),1,1,1,0,0,-.04));else if(i.tail==="cat"){let N=I(new at(.2,.05,8,18,Math.PI*1.25),a,.12,.12,-.04);N.rotation.set(0,0,.3),E.add(N),E.add(ae(.06,a,1,1,1,.34,.26,-.04))}else{let N=ae(.2,a,.8,1.5,.8,.12,.14,-.06);N.rotation.z=-.7,E.add(N);let z=ae(.1,M(16774380),.8,1.3,.8,.28,.3,-.06);z.rotation.z=-.7,E.add(z)}E.traverse(N=>{N.isMesh&&(N.castShadow=!1)})}let y=new Re;y.position.set(0,1.07,.02),t.add(y),i.topper==="pom"?(y.add(ae(.11,M(ut.lav),1,1,1,-.1,.02,0)),y.add(ae(.11,M(ut.lav),1,1,1,.1,.02,0)),y.add(ae(.14,M(ut.lavDeep),1,1,1,0,.12,0)),y.add(ae(.035,M(16777215,{emissive:16777215,emissiveIntensity:.4}),1,1,1,-.04,.2,.09))):i.ears==="none"&&(y.position.y=1.02,y.add(ae(.1,a,1,1,1,0,.05,0)),y.add(ae(.05,M(16777215),1,1,1,-.02,.1,.05)));let x=new Re;t.add(x);let p=new zt({color:ut.ink,roughness:.25}),C=new je({color:16777215}),w=[];[-1,1].forEach(E=>{let N=E*.21,z=.66,le=h(N,z)-.02,G=new Re;G.position.set(N,z,le);let fe=new Re,ne=i.eyes==="stars"?1.2:i.eyes==="big"?1.38:1;fe.add(ae(.105*ne,p,1,i.eyes==="dot"&&!i.mika?1.1:i.eyes==="sleepy"?.62:1.28,.55,0,0,0));let ye=ae(.036*ne,C,1,1,1,.035,.07,.07);ye.castShadow=!1,fe.add(ye);let Ce=ae(.018*ne,C,1,1,1,-.035,-.06,.07);if(Ce.castShadow=!1,fe.add(Ce),i.eyes==="stars"){let te=ae(.02,C,1,1,1,.045,-.04,.075);te.castShadow=!1,fe.add(te)}G.add(fe);let Ue=new ht(new at(.075,.02,8,20,Math.PI),p);Ue.position.y=-.03,Ue.visible=!1,G.add(Ue);let ie=new ht(new at(.075,.02,8,20,Math.PI),p);ie.rotation.z=Math.PI,ie.position.y=.03,ie.visible=!1,G.add(ie);let de=new ht(new cn(Si(.24),{depth:.03,bevelEnabled:!1}),new je({color:16732058}));de.position.z=.02,de.visible=!1,G.add(de);let we=I(re(.17,.035,.04,.015),p,0,.18,.04);we.visible=!1,we.castShadow=!1,G.add(we),x.add(G),w.push({g:G,open:fe,happy:Ue,closed:ie,heart:de,brow:we,s:E})});let v=[-1,1].map(E=>{let N=ae(.085,M(16748480,{roughness:.9}),1.2,.72,.3,E*.37,.5,h(E*.37,.5)-.03);return N.castShadow=!1,x.add(N),N}),P=.47,T=h(0,P)-.005,R={};R.smile=new ht(new at(.05,.015,8,16,Math.PI),p),R.smile.rotation.z=Math.PI,R.smile.position.set(0,P+.045,T),R.frown=new ht(new at(.05,.015,8,16,Math.PI),p),R.frown.position.set(0,P-.02,T),R.open=ae(.075,new zt({color:8004178,roughness:.5}),1,.9,.35,0,P,T-.01),R.open.add(ae(.04,M(16748451),1.3,.7,.4,0,-.04,.03)),R.o=ae(.035,new zt({color:8004178}),1,1.2,.4,0,P,T-.005),Object.keys(R).forEach(E=>{R[E].visible=!1,R[E].castShadow=!1,x.add(R[E])});let m=new zt({color:9362431,roughness:.1,transparent:!0,opacity:.85}),L=ae(.04,m,.8,1.2,.8,-.27,.56,h(-.27,.56)+.01);L.visible=!1,x.add(L);let O=ae(.045,m,.8,1.25,.8,.46,.98,.25);O.visible=!1,t.add(O);let Y=[-1,1].map(E=>{let N=new Re;return N.position.set(E*.6,.5,.08),N.add(ae(.14,o,1.15,.7,.75,E*.06,0,0)),t.add(N),N}),$=[-1,1].map(E=>{let N=ae(.16,o,1,.6,1.25,E*.25,.08,.2);return e.add(N),N}),B={};B.scarf=new Re;{let E=I(new at(.4,.085,12,32),M(ut.pink),0,.36,.12);E.rotation.x=Math.PI/2.1,E.scale.set(1.12,1,1),B.scarf.add(E);let N=I(re(.14,.34,.06,.03),M(16740270),.28,.2,.46);N.rotation.z=.15,B.scarf.add(N)}B.bow=new Re;{let E=M(16740270),N=ae(.1,E,1.4,.8,.5,-.11,0,0),z=ae(.1,E,1.4,.8,.5,.11,0,0);N.rotation.z=.5,z.rotation.z=-.5,B.bow.add(N,z,ae(.055,M(16757713),1,1,.8,0,0,.02)),B.bow.position.set(-.4,1.17,.12),B.bow.rotation.z=.2}B.crown=new Re;{let E=M(ut.sun,{metalness:.3,roughness:.4});B.crown.add(I(new Ie(.2,.22,.12,20,1,!0),E,0,0,0));for(let N=0;N<5;N++){let z=N/5*Math.PI*2;B.crown.add(I(new Pt(.06,.16,8),E,Math.cos(z)*.2,.12,Math.sin(z)*.2))}B.crown.position.set(0,1.12,.03)}B.glasses=new Re,[-1,1].forEach(E=>{B.glasses.add(I(new at(.13,.016,8,24),p,E*.21,.66,h(E*.21,.66)+.04))}),B.glasses.add(I(re(.1,.018,.02,.008),p,0,.67,h(0,.67)+.04)),B.hat=new Re,B.hat.add(I(new Pt(.3,.7,20),M(8150271),0,.38,0)),B.hat.add(I(new Ie(.46,.46,.05,28),M(5980118),0,.02,0)),B.hat.add(ae(.045,M(ut.sun,{emissive:16764735,emissiveIntensity:.6}),1,1,1,0,.74,0)),B.hat.position.set(0,1.1,0),B.hat.rotation.z=.12,B.wings=new Re;{let E=M(16777215,{roughness:.6});[-1,1].forEach(N=>{let z=ae(.3,E,.5,1,.18,N*.55,.62,-.35);z.rotation.z=N*-.5,B.wings.add(z)})}B.pj=new Re,B.pj.add(ae(.34,M(9347839),1.05,.7,1,0,.1,0)),B.pj.add(ae(.075,M(16777215),1,1,1,.3,.12,.2)),B.pj.position.set(0,1,0),B.pj.rotation.z=-.1,B.beanie=new Re;{B.beanie.add(ae(.38,M(16740238),1.05,.62,1,0,.05,0));let E=I(new at(.36,.07,10,28),M(16777215),0,-.04,0);E.rotation.x=Math.PI/2,B.beanie.add(E),B.beanie.add(ae(.09,M(16777215),1,1,1,0,.36,0)),B.beanie.position.set(0,1,0)}B.flower=new Re;{for(let E=0;E<5;E++){let N=E/5*Math.PI*2;B.flower.add(ae(.07,M(16757713),1,1,.6,Math.cos(N)*.09,Math.sin(N)*.09,0))}B.flower.add(ae(.055,M(ut.sun),1,1,.8,0,0,.03)),B.flower.position.set(.36,1.08,.18),B.flower.rotation.z=-.3}B.bowtie=new Re;{let E=M(14697851);B.bowtie.add(ae(.1,E,1.5,.9,.6,-.12,0,0),ae(.1,E,1.5,.9,.6,.12,0,0),ae(.05,M(16765411),1,1,.8,0,0,.02)),B.bowtie.position.set(0,.34,.5)}B.horns=new Re,[-1,1].forEach(E=>{let N=I(new Pt(.09,.3,12),M(14035001),E*.24,0,0);N.rotation.z=-E*.35,B.horns.add(N)}),B.horns.position.set(0,1.02,.05),B.pumpkin=new Re,B.pumpkin.add(ae(.4,M(16747039),1.15,.8,1.1,0,0,0)),B.pumpkin.add(I(new Ie(.04,.06,.16,8),M(4028970),0,.3,0)),[-1,1].forEach(E=>B.pumpkin.add(I(new Pt(.06,.1,3),M(2759518),E*.14,.04,.4))),B.pumpkin.position.set(0,1.05,.02),B.cape=new Re,B.cape.add(I(re(1,1,.06,.03),M(11538990),0,.35,-.5)),B.cape.add(I(new at(.42,.06,8,24),M(2759518),0,.18,.1)).rotation.x=Math.PI/2,[-1,1].forEach(E=>B.cape.add(I(new Pt(.035,.12,8),M(16777215),E*.07,.22,.5))),B.mummy=new Re;{let E=M(16775920,{roughness:.9});[.05,.28,.5,.72].forEach((N,z)=>{let le=I(new at(.5-Math.abs(N-.4)*.12,.05,8,28),E,0,N,0);le.rotation.x=Math.PI/2+(z%2?.14:-.14),B.mummy.add(le)})}B.ghost=new Re,B.ghost.add(ae(.62,M(16777215,{transparent:!0,opacity:.72,roughness:1}),1,1.02,1,0,.42,0)),[-1,1].forEach(E=>B.ghost.add(ae(.04,M(2759518),1,1.4,.5,E*.2,.62,.55))),B.mortar=new Re;{let E=M(2759518);B.mortar.add(I(new Ie(.26,.3,.16,20),E,0,.04,0)),B.mortar.add(I(re(.8,.04,.8,.01),E,0,.15,0)),B.mortar.add(I(new Ie(.012,.012,.3,6),M(ut.sun),.28,0,.28)),B.mortar.add(ae(.05,M(ut.sun),1,1,1,.28,-.14,.28)),B.mortar.position.set(0,1.08,0)}B.labcoat=new Re;{let E=M(16777215,{roughness:.7});B.labcoat.add(ae(.58,E,1.12,.7,1.05,0,.42,-.02)),B.labcoat.add(ae(.07,M(14697851),1,1,.6,.26,.42,.52)),B.labcoat.add(ae(.07,M(14697851),1,1,.6,.26,.26,.54))}B.shades=new Re;{let E=M(1906240,{roughness:.2});[-1,1].forEach(N=>{B.shades.add(ae(.14,E,1.05,.82,.3,N*.21,.66,h(N*.21,.66)+.05))}),B.shades.add(I(re(.12,.025,.03,.01),E,0,.68,h(0,.68)+.06))}B.phones=new Re;{let E=M(16748480),N=M(16777215),z=I(new at(.5,.045,8,28,Math.PI),E,0,0,0);z.rotation.z=0,B.phones.add(z),[-1,1].forEach(le=>{let G=I(new Ie(.15,.15,.12,18),N,le*.5,-.02,0);G.rotation.z=Math.PI/2,B.phones.add(G),B.phones.add(ae(.08,E,1,1,.5,le*.56,-.02,0))}),B.phones.position.set(0,.62,.02)}B.bunny=new Re;{let E=M(16777215),N=M(16757713);[-1,1].forEach(le=>{let G=ae(.1,E,1,3.2,.5,le*.2,.34,0);G.rotation.z=-le*.18,B.bunny.add(G);let fe=ae(.055,N,1,2.6,.5,le*.2,.34,.04);fe.rotation.z=-le*.18,B.bunny.add(fe)});let z=I(new at(.34,.035,8,24),N,0,0,0);z.rotation.x=Math.PI/2,B.bunny.add(z),B.bunny.position.set(0,1.06,.02)}B.cape=new Re;{let E=M(14697851);B.cape.add(ae(.5,E,1.1,1.15,.2,0,.52,-.5));let N=I(new at(.34,.07,10,28),M(16765411),0,.3,.05);N.rotation.x=Math.PI/2.2,B.cape.add(N)}B.bandana=new Re;{let E=M(16734830),N=I(new at(.43,.06,10,28),E,0,0,0);N.rotation.x=Math.PI/2.15,B.bandana.add(N),B.bandana.add(ae(.09,E,1.3,1,.8,.33,-.04,.2)),B.bandana.add(ae(.05,M(16777215),1,1,1,0,.02,.43)),B.bandana.position.set(0,.94,0)}Object.keys(B).forEach(E=>{B[E].visible=!1,t.add(B[E])});{let E=Nc(i.color,.42).getHex(),N=[];t.traverse(z=>{z.isMesh&&z.parent&&(z.material===a||z.material===o)&&N.push(z)}),$.forEach(z=>N.push(z)),N.forEach(z=>Ix(z,E))}e.traverse(E=>{E.isMesh&&(E.receiveShadow=!1)});let A={emo:"neutral",talking:!1,vy:0,y:0,squash:0,yaw:0,yawT:0,blinkT:0,nextBlink:1.5+Math.random()*2,look:new Ne,lookT:new Ne,nextLook:1,armsT:0,sleeping:!1},D={root:e,st:A,fx:null,baseY:0,roll:0};function W(E){let N=i.eyes==="happy"&&!i.mika;E.open.visible=!N,E.happy.visible=N,E.closed.visible=!1,E.heart.visible=!1,E.brow.visible=!1,E.g.scale.set(1,1,1)}return D.setAccessories=E=>{Object.keys(B).forEach(N=>{B[N].visible=E.indexOf(N)>=0})},D.setEmotion=E=>{A.emo=E,A.armsT=0,A.sleeping=!1,w.forEach(W),Object.keys(R).forEach(z=>{R[z].visible=!1}),L.visible=!1,O.visible=!1;let N=w;E==="happy"?(N.forEach(z=>{z.open.visible=!1,z.happy.visible=!0}),R.open.visible=!0,R.open.scale.set(1.05,.8,.35)):E==="love"?(N.forEach(z=>{z.open.visible=!1,z.heart.visible=!0}),R.open.visible=!0,A.armsT=1):E==="wow"?(N.forEach(z=>{z.g.scale.set(1.18,1.18,1)}),R.o.visible=!0):E==="sad"?(N.forEach(z=>{z.brow.visible=!0,z.brow.rotation.z=-z.s*.45}),R.frown.visible=!0,L.visible=!0):E==="worry"?(N.forEach(z=>{z.brow.visible=!0,z.brow.rotation.z=-z.s*.4}),R.o.visible=!0,R.o.scale.set(.8,1,.4),O.visible=!0):E==="angry"?(N.forEach(z=>{z.brow.visible=!0,z.brow.rotation.z=z.s*.5,z.g.scale.set(1.05,.85,1)}),R.open.visible=!0,R.open.scale.set(1.35,1.1,.35),A.armsT=.9,O.visible=!1):E==="proud"?(N.forEach(z=>{z.open.visible=!1,z.happy.visible=!0}),R.open.visible=!0,R.open.scale.set(1.2,1,.35),A.armsT=.5,D.fx&&D.fx("star",5)):E==="shy"?(N.forEach(z=>{z.open.visible=!1,z.closed.visible=!0}),R.smile.visible=!0,A.yawT=.5):E==="sleep"?(N.forEach(z=>{z.open.visible=!1,z.closed.visible=!0}),R.o.visible=!0,R.o.scale.set(.6,.7,.4),A.sleeping=!0):R.smile.visible=!0,v.forEach(z=>z.scale.set(E==="shy"||E==="love"?1.6:1.2,E==="shy"?.95:.72,.3))},D.hop=E=>{A.y<.05&&(A.vy=E||4.2,A.squash=-.2)},D.setTalking=E=>{A.talking=!!E},D.setListening=E=>{A.listening=!!E,E||(A.yawT=0)},D.look=(E,N)=>A.lookT.set(E,N),D.face=E=>{A.yawT=E},D.update=(E,N,z,le)=>{(A.y>0||A.vy>0)&&(A.vy-=16*E,A.y+=A.vy*E,A.y<=0&&(A.y=0,A.vy<-1&&(A.squash=.18),A.vy=0)),A.squash+=(0-A.squash)*Math.min(1,E*10),e.position.y=(D.baseY||0)+A.y+(z?Math.abs(Math.sin(N*9))*.07:0),A.yaw+=(A.yawT-A.yaw)*Math.min(1,E*5),e.rotation.y=A.yaw,e.rotation.z=(z?Math.sin(N*9)*.08:0)+(D.roll||0);let G=A.sleeping?.04*Math.sin(N*1.4):.022*Math.sin(N*2.3);t.scale.set((1-A.squash*.5-G*.5)*s,(1+A.squash+G)*r,(1-A.squash*.5)*s),$.forEach((ye,Ce)=>{ye.position.y=.08+(z?Math.max(0,Math.sin(N*9+Ce*Math.PI))*.06:0)});let fe=A.emo==="sad"||A.emo==="worry"?.35:A.listening?-.12:0;_.forEach((ye,Ce)=>{let Ue=Ce?1:-1;ye.rotation.z=-Ue*((ye.userData.base||.28)+(A.talking?.1:0)+fe)+Math.sin(N*1.7+Ce)*.05}),y.rotation.z=Math.sin(N*2.1)*.12,y.rotation.x=Math.sin(N*1.6)*.06,Y.forEach((ye,Ce)=>{let Ue=Ce?1:-1;ye.rotation.z=Ue*-(.2+A.armsT*1.6)+(z?Math.sin(N*9+Ce*3)*.3:Math.sin(N*2+Ce)*.06),ye.position.y=.5+A.armsT*.28}),!le&&N>A.nextLook&&(A.lookT.set((Math.random()-.5)*1.4,(Math.random()-.5)*.8),A.nextLook=N+1.5+Math.random()*2.5),A.emo==="angry"?(e.rotation.z+=Math.sin(N*38)*.05,t.position.x=Math.sin(N*44)*.015):t.position.x=0,A.listening&&N>(A.nextNod||0)&&(A.squash=.09,A.nextNod=N+1.6+Math.random()*1.6,A.yawT=(Math.random()-.5)*.4),A.look.lerp(A.lookT,Math.min(1,E*6)),w.forEach(ye=>{ye.open.position.x=A.look.x*.022,ye.open.position.y=A.look.y*.018}),!A.sleeping&&N>A.nextBlink&&(A.blinkT=.13,A.nextBlink=N+2+Math.random()*3.5),A.blinkT=Math.max(0,A.blinkT-E);let ne=A.blinkT>0?.1:1;if(w.forEach(ye=>{ye.open.visible&&(ye.open.scale.y+=(ne-ye.open.scale.y)*Math.min(1,E*40))}),A.talking){let ye=.55+Math.abs(Math.sin(N*13))*.7;Object.keys(R).forEach(Ce=>{R[Ce].visible=Ce==="open"}),R.open.scale.set(1,ye,.35)}else{let ye=["happy","love","proud"].indexOf(A.emo)>=0;R.open.visible&&!ye&&(R.open.visible=!1),!ye&&!Object.keys(R).some(Ce=>R[Ce].visible)&&(R.smile.visible=!0)}if(L.visible){let ye=N*.35%1;L.position.y=.56-ye*.18,L.material.opacity=.85*(1-ye)}O.visible&&(O.position.y=.98+Math.sin(N*3)*.02),A.sleeping&&D.fx&&Math.random()<E*.7&&D.fx("z",1)},D.dispose=()=>{e.traverse(E=>{E.isMesh&&E.geometry.dispose()}),e.parent&&e.parent.remove(e)},D.setEmotion("neutral"),D.setAccessories(i.acc||[]),D}function uu(){let i=At(128,128,(t,n,s)=>{let r=t.createRadialGradient(64,64,4,64,64,62);r.addColorStop(0,"rgba(70,40,120,.38)"),r.addColorStop(1,"rgba(70,40,120,0)"),t.fillStyle=r,t.fillRect(0,0,n,s)}),e=new ht(new pt(1.5,1.5),new je({map:i,transparent:!0,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.012,e}var tu={};function zc(i){return tu[i]||(tu[i]=su(i))}function zs(i){let e=[];return{emit(t,n,s,r){let a=r||1;for(let o=0;o<n;o++){let c=new Hn(new En({map:zc(t),transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));c.position.set(s.x+(Math.random()-.5)*.9*a,s.y+1.1*a+Math.random()*.3,s.z+.3),c.scale.setScalar((.22+Math.random()*.14)*a),c.renderOrder=10,i.add(c),e.push({s:c,vx:(Math.random()-.5)*.7,vy:t==="drop"?-.2:.8+Math.random()*.6,life:0,max:1.6+Math.random()*.6,delay:o*.09})}},update(t){for(let n=e.length-1;n>=0;n--){let s=e[n];if(s.delay-=t,s.delay>0)continue;s.life+=t;let r=s.life/s.max;s.s.position.x+=s.vx*t,s.s.position.y+=s.vy*t*(1-r*.5),s.s.material.opacity=r<.15?r/.15:Math.max(0,1-(r-.15)/.85),s.life>=s.max&&(i.remove(s.s),s.s.material.dispose(),e.splice(n,1))}}}}function ks(i){i.add(new ws(16777215,16766696,1.15));let e=new Rs(16777215,1.3);return e.position.set(-3,6,5),i.add(e),e}var du={plushbear:{p:[-1.7,1.02,-2.75],r:.5},neon:{p:[2.9,3.3,-4.1],r:0},beanbag:{p:[-5.2,0,.1],r:.3},aquarium:{p:[-6.2,0,-.5],r:Math.PI/2},arcade:{p:[6.3,0,-.2],r:-Math.PI/2},poster:{p:[-7.03,2.6,1.6],r:Math.PI/2},catbed:{p:[-2,0,1.9],r:.4},disco:{p:[1.2,3.3,.8],r:0},bookshelf:{p:[-6.75,0,2.9],r:Math.PI/2},cloud:{p:[-2.6,3.2,.4],r:0},piano:{p:[5.3,0,2.7],r:-.5},starrug:{p:[3.4,0,1],r:.3}},Wi={plushbear(){let i=new Re,e=M(14264428);return i.add(ae(.26,e,1,1,.95,0,.26,0)),i.add(ae(.2,e,1,1,.95,0,.62,.02)),i.add(ae(.08,e,1,1,.6,-.15,.78,0)),i.add(ae(.08,e,1,1,.6,.15,.78,0)),i.add(ae(.08,M(16112048),1,.8,.7,0,.58,.17)),i.add(ae(.03,M(ut.ink),1,1,1,0,.6,.23)),i.add(ae(.025,M(ut.ink),1,1,1,-.07,.68,.17)),i.add(ae(.025,M(ut.ink),1,1,1,.07,.68,.17)),i.add(ae(.07,e,1,1.3,1,-.28,.25,.08)),i.add(ae(.07,e,1,1.3,1,.28,.25,.08)),i.add(I(re(.3,.07,.04,.02),M(16740270),0,.42,.2)),i},neon(){let i=new Re,e=new ht(new cn(Si(.8),{depth:.05,bevelEnabled:!1}),new je({color:16743104})),t=new ht(new pt(1.8,1.8),new je({map:At(128,128,(n,s,r)=>{let a=n.createRadialGradient(64,64,4,64,64,62);a.addColorStop(0,"rgba(255,122,192,.55)"),a.addColorStop(1,"rgba(255,122,192,0)"),n.fillStyle=a,n.fillRect(0,0,s,r)}),transparent:!0,depthWrite:!1}));return t.position.z=-.02,i.add(t,e),i},beanbag(){let i=new Re,e=M(16752328),t=M(16761564);return i.add(ae(.62,e,1,.78,1,0,.42,0)),i.add(ae(.4,t,1,.62,1,.12,.8,.1)),i.add(ae(.16,M(16777215),1,.6,1,-.3,.84,.3)),i},aquarium(){let i=new Re;i.add(I(re(1.5,.7,.8,.06),M(ut.woodDark),0,.35,0)),i.add(I(re(1.38,.08,.68,.03),M(16771512),0,.74,0,!1));let e=I(re(1.4,.85,.7,.05),new zt({color:9362431,transparent:!0,opacity:.38,roughness:.1,emissive:5224680,emissiveIntensity:.3}),0,1.2,0,!1);i.add(e);let t=[];[[16751178,0],[16765514,2],[16740270,4]].forEach((n,s)=>{let r=new Re;r.add(ae(.1,M(n[0],{emissive:n[0],emissiveIntensity:.25}),1.4,1,.8,0,0,0));let a=I(new Pt(.08,.14,4),M(n[0]),-.17,0,0,!1);a.rotation.z=Math.PI/2,r.add(a),r.add(ae(.018,M(ut.ink),1,1,1,.1,.03,.07)),r.userData={ph:n[1],y:1.05+s*.17},i.add(r),t.push(r)});for(let n=0;n<4;n++)i.add(ae(.03+n%2*.015,M(16777215,{transparent:!0,opacity:.8}),1,1,1,.5+n*.03,.9+n*.2,.1));return i.userData.fish=t,i},bookshelf(){let i=new Re,e=M(14858378);i.add(I(re(1.9,2.5,.12,.04),M(13080688),0,1.25,-.2)),[-.93,.93].forEach(n=>i.add(I(re(.08,2.5,.5,.03),e,n,1.25,0)));for(let n=0;n<4;n++)i.add(I(re(1.9,.08,.5,.03),e,0,.04+n*.8,0));let t=[16748480,9362431,16765514,12166911,6153140,16758938];for(let n=0;n<3;n++){let s=-.8;for(let r=0;r<9&&s<.8;r++){let a=.1+(r*7+n*3)%4*.03,o=.5+(r*5+n)%3*.1;i.add(I(re(a,o,.3,.02),M(t[(r+n*2)%t.length]),s+a/2,.08+n*.8+o/2+.04,.02)),s+=a+.04}}return i.add(ae(.14,M(16777215),1,.9,1,.6,2.18,.05)),i.add(ae(.05,M(ut.ink),1,1,1,.56,2.2,.17)),i.add(ae(.05,M(ut.ink),1,1,1,.64,2.2,.17)),i},cloud(){let i=new Re,e=M(16777215,{emissive:16774870,emissiveIntensity:.7,roughness:.9});return i.add(ae(.5,e,1.2,.8,1,0,0,0)),i.add(ae(.38,e,1,.9,1,-.5,-.05,.05)),i.add(ae(.42,e,1,.9,1,.5,-.03,-.05)),i.add(ae(.3,e,1,.9,1,.1,.28,0)),i.add(I(new Ie(.012,.012,1.2,6),M(16777215),0,.9,0,!1)),i.add(ae(.025,M(ut.ink),1,1,1,-.12,-.02,.45)),i.add(ae(.025,M(ut.ink),1,1,1,.12,-.02,.45)),i.add(ae(.05,M(16757713),1.4,.7,.4,-.25,-.1,.43)),i.add(ae(.05,M(16757713),1.4,.7,.4,.25,-.1,.43)),i},piano(){let i=new Re,e=M(16752328);[[-.65,-.28],[.65,-.28],[-.65,.28],[.65,.28]].forEach(n=>i.add(I(re(.1,.6,.1,.03),M(14858378),n[0],.3,n[1]))),i.add(I(re(1.6,.34,.8,.08),e,0,.72,0)),i.add(I(re(1.5,.05,.3,.02),M(16777215),0,.92,.22,!1));for(let n=0;n<8;n++)i.add(I(re(.16,.04,.28,.01),M(16777215),-.65+n*.185,.95,.22,!1));[0,1,3,4,5].forEach(n=>i.add(I(re(.09,.06,.17,.01),M(ut.ink),-.56+n*.185,.98,.15,!1))),i.add(I(re(1.5,.5,.06,.03),e,0,1.12,-.32));let t=new ht(new cn(Si(.22),{depth:.02,bevelEnabled:!1}),M(16777215));return t.position.set(0,1.14,-.28),i.add(t),i},starrug(){let i=new Re,e=new Li,t=10;for(let r=0;r<t;r++){let a=r%2?.55:1.25,o=r/t*Math.PI*2+Math.PI/2;r===0?e.moveTo(Math.cos(o)*a,Math.sin(o)*a):e.lineTo(Math.cos(o)*a,Math.sin(o)*a)}e.closePath();let n=new ht(new cn(e,{depth:.05,bevelEnabled:!0,bevelSize:.06,bevelThickness:.03,bevelSegments:3}),M(16769658));n.rotation.x=-Math.PI/2,n.position.y=.02,n.receiveShadow=!0,i.add(n);let s=new ht(new ii(.32,24),M(16752328));return s.rotation.x=-Math.PI/2,s.position.y=.11,i.add(s),i},arcade(){let i=new Re;i.add(I(re(.95,1.75,.85,.1),M(8150271),0,.88,0));let e=At(128,96,(n,s,r)=>{n.fillStyle="#1b1240",n.fillRect(0,0,s,r),n.fillStyle="#ff7ac0";for(let a=0;a<5;a++)n.beginPath(),n.arc(20+a*22,24,7,0,7),n.fill();n.fillStyle="#8edbff",n.fillRect(20,60,88,8),n.fillStyle="#ffe27a",n.fillRect(54,72,20,10)}),t=I(new pt(.7,.52),new je({map:e}),0,1.3,.43,!1);return t.rotation.x=-.12,i.add(t),i.add(I(re(.8,.22,.12,.04),M(16769658,{emissive:16764735,emissiveIntensity:.5}),0,1.68,.4,!1)),i.add(I(re(.9,.12,.5,.04),M(5980118),0,.78,.5)),i.add(I(new Ie(.025,.025,.16,8),M(16777215),-.2,.9,.5)),i.add(ae(.06,M(16732058),1,1,1,-.2,1,.5)),i.add(ae(.045,M(9362431),1,1,1,.12,.86,.5)),i.add(ae(.045,M(16769658),1,1,1,.26,.86,.5)),i},poster(){let i=new Re;i.add(I(re(1.3,1.8,.06,.03),M(16777215),0,0,0,!1));let e=At(128,180,(t,n,s)=>{let r=t.createLinearGradient(0,0,0,s);r.addColorStop(0,"#ffb3d1"),r.addColorStop(1,"#b9a6ff"),t.fillStyle=r,t.fillRect(0,0,n,s),t.fillStyle="#fff",t.beginPath(),t.arc(64,70,30,0,7),t.fill(),t.fillStyle="#ff5fa8",t.beginPath(),t.moveTo(64,92),t.bezierCurveTo(30,66,48,44,64,58),t.bezierCurveTo(80,44,98,66,64,92),t.fill(),t.fillStyle="#fff";for(let a=0;a<8;a++)t.beginPath(),t.arc(14+a*37%100,130+a*17%40,3,0,7),t.fill();t.fillRect(24,150,80,6)});return i.add(I(new pt(1.14,1.64),new je({map:e}),0,0,.04,!1)),i},catbed(){let i=new Re;i.add(I(new Ie(.62,.66,.22,28),M(16767400),0,.11,0));let e=I(new at(.58,.12,10,28),M(16761466),0,.24,0);e.rotation.x=Math.PI/2,i.add(e),i.add(I(new Ie(.46,.46,.1,24),M(16752328),0,.2,0));let t=M(15902298);i.add(ae(.26,t,1.2,.8,1,0,.42,0)),i.add(ae(.17,t,1,1,1,.22,.52,.06)),[-1,1].forEach(s=>{let r=I(new Pt(.06,.12,4),t,.26,.68,.06+s*.09,!1);i.add(r)}),i.add(ae(.02,M(ut.ink),1,1,1,.37,.54,.02)),i.add(ae(.02,M(ut.ink),1,1,1,.37,.54,.12));let n=I(new at(.16,.04,8,14,4),t,-.3,.36,0,!1);return i.add(n),i},disco(){let i=new Re;i.add(I(new Ie(.012,.012,1.2,6),M(16777215),0,.6,0,!1));let e=At(128,64,(n,s,r)=>{for(let a=0;a<8;a++)for(let o=0;o<16;o++)n.fillStyle=["#ffffff","#cfe9ff","#ffd1e3","#e7ddff"][(o*3+a*5)%4],n.fillRect(o*8,a*8,7,7)}),t=ae(.3,new zt({map:e,emissive:16777215,emissiveIntensity:.35,metalness:.6,roughness:.25}),1,1,1,0,0,0);return i.add(t),i.userData.spin=t,i}},Lx=Object.keys(Wi),Fc=-2.6,pu=-3,qn={fridge:[2.9,-2.45],pc:[4.4,-1.55],door:[6.3,-3],bath:[-6,-2.15],toilet:[-4.35,-2.45],bed:[Fc+.45,pu+.05],plant0:[-.75,-2.55],plant1:[1.65,-2.55],lamp:[-.9,-1],fries:[4.3,-2]},Dx=[[-3.95,-1.2,-4,-2.05],[-7.1,-4.85,-4,-2.7],[2.25,3.55,-4,-3],[3.4,5.45,-4,-2.95],[-1.15,-.3,-4,-3.05],[1.25,2.05,-4,-3.05],[-4.85,-4,-4,-3.05],[5.6,7.1,-4,-3.4]];function nu(i,e){return i=Math.max(-6.6,Math.min(6.6,i)),e=Math.max(-3.4,Math.min(3.6,e)),Dx.forEach(t=>{i>t[0]&&i<t[1]&&e>t[2]&&e<t[3]&&(e=t[3]+.2)}),[i,e]}function Nx(i){let e=new Re;i.add(e);let t=Cn("#EBC99B",["#F2D4A8","#E2B77F","#F7DDB6","#D9A86F"],260,{planks:8,seed:3,ang:0,len:90,bw:6,w:512,h:512});t.repeat.set(3,1.8),e.add(I(re(14.6,.4,8.8,.12),M(16777215,{map:t}),0,-.2,.1));let n=Cn("#EFE3F7",["#F7ECFA","#E3D4F2","#FBE9EF","#DCCBEF"],220,{seed:5});n.repeat.set(3,1.2);let s=Cn("#FFE6EE",["#FFF1F4","#F9D3E1","#FFEBD9","#F4C5D8"],220,{seed:9});s.repeat.set(2,1.2),e.add(I(re(14.6,4.4,.3,.1),M(16777215,{map:n}),0,2.2,-4.3)),e.add(I(re(.3,4.4,8.8,.1),M(16777215,{map:s}),-7.2,2.2,.1)),e.add(I(re(14.4,.22,.1,.05),M(16777215),0,.12,-4.1)),e.add(I(re(.1,.22,8.6,.05),M(16777215),-7,.12,.1));let r=At(128,128,(te,ue,Fe)=>{for(let Me=0;Me<4;Me++)for(let ge=0;ge<4;ge++)te.fillStyle=(ge+Me)%2?"#DDF3FF":"#F4FBFF",te.fillRect(ge*32,Me*32,32,32)});r.wrapS=r.wrapT=bn,r.repeat.set(3,3),e.add(I(re(3.2,.05,3.2,.02),M(16777215,{map:r}),-5.45,.03,-2.45,!1));let a=At(256,128,(te,ue,Fe)=>{te.fillStyle="#DDF3FF",te.fillRect(0,0,ue,Fe),te.strokeStyle="rgba(255,255,255,.9)",te.lineWidth=3;for(let Me=0;Me<=8;Me++)te.beginPath(),te.moveTo(Me*32,0),te.lineTo(Me*32,Fe),te.stroke();for(let Me=0;Me<=4;Me++)te.beginPath(),te.moveTo(0,Me*32),te.lineTo(ue,Me*32),te.stroke()});e.add(I(new pt(3.2,1.3),new je({map:a}),-5.45,.8,-4.13,!1));let o=new Re;o.position.set(.2,2.45,-4.11),e.add(o);let c=new je({map:Gi(new Date().getHours())});o.add(I(new pt(1.7,1.55),c,0,0,.02,!1));let l=M(16777215);o.add(I(re(1.95,.14,.2,.06),l,0,.85,.05)),o.add(I(re(1.95,.14,.2,.06),l,0,-.85,.05)),o.add(I(re(.14,1.8,.2,.06),l,-.92,0,.05)),o.add(I(re(.14,1.8,.2,.06),l,.92,0,.05)),o.add(I(re(.07,1.6,.12,.03),l,0,0,.06)),o.add(I(re(1.75,.07,.12,.03),l,0,0,.06)),o.add(I(re(2.2,.1,.4,.05),M(16777215),0,-.98,.18));let f=M(ut.pink),u=I(re(.5,1.9,.14,.07),f,-1.2,0,.12);u.rotation.z=.05,o.add(u);let h=I(re(.5,1.9,.14,.07),f,1.2,0,.12);h.rotation.z=-.05,o.add(h);let d=I(new Ie(.04,.04,2.9,10),M(ut.woodDark),0,1,.16);d.rotation.z=Math.PI/2,o.add(d);let _=new Re;_.position.set(0,0,.9),e.add(_),_.add(I(new Ie(2.5,2.5,.06,48),M(16765162),0,.03,0)),_.add(I(new Ie(2.15,2.15,.08,48),M(12448732),0,.035,0)),_.add(I(new Ie(1.5,1.5,.1,48),M(16774890),0,.04,0));let y=te=>te.traverse(ue=>{ue.isMesh&&(ue.userData.root=te)}),x=new Re;x.position.set(Fc,0,pu),x.userData.pick="bed",e.add(x),x.add(I(re(2.5,.5,1.75,.12),M(14858634),0,.25,0)),x.add(I(re(2.4,.4,1.65,.16),M(14273791),0,.68,0)),x.add(I(re(1.65,.2,1.7,.1),M(12448732),.38,.92,0));let p=I(re(.7,.25,.9,.12),M(16761052),-.78,.98,0);p.rotation.z=.08,x.add(p),x.add(I(re(.14,1.4,1.75,.06),M(14858634),-1.3,.7,0)),y(x);let C=new Re;C.position.set(Fc,3.05,-4.1),e.add(C),C.add(I(re(.9,.9,.08,.05),M(16777215),0,0,0));let w=new ht(new cn(Si(.55),{depth:.04,bevelEnabled:!1}),M(ut.pink));w.position.set(0,.03,.05),C.add(w);let v=[];[[-.7,-3.45,.95],[1.65,-3.45,1.1]].forEach((te,ue)=>{let Fe=new Re;Fe.position.set(te[0],0,te[1]),Fe.userData.pick="plant",Fe.userData.idx=ue,e.add(Fe),Fe.add(I(new Ie(.42,.32,.6,20),M(ue?12441855:16758938),0,.3,0));let Me=new Re;Fe.add(Me);let ge=M(7659663);for(let Se=0;Se<7;Se++){let Te=Se/7*Math.PI*2,Oe=ae(.34,ge,.55,1.25,.28,Math.cos(Te)*.3,1+Se%2*.22,Math.sin(Te)*.3);Oe.rotation.z=Math.cos(Te)*.5,Oe.rotation.x=Math.sin(Te)*.5,Me.add(Oe)}Me.add(ae(.32,M(6279290),1,1,1,0,1.15,0)),Fe.scale.setScalar(te[2]);let me=new Hn(new En({map:zc("drop"),transparent:!0,depthTest:!1,opacity:0}));me.scale.setScalar(.5),me.position.set(0,2.3,.3),me.renderOrder=11,Fe.add(me),y(Fe),v.push({g:Fe,leaves:Me,thirst:me,pop:0})});let P=new Re;P.position.set(2.9,0,-3.5),P.userData.pick="fridge",e.add(P);let T=M(12448732,{emissive:10479304,emissiveIntensity:.2});P.add(I(re(1.2,2.5,.9,.12),T,0,1.25,0)),P.add(I(re(1.16,.06,.04,.02),M(8376238),0,1.55,.46,!1)),P.add(I(re(.06,.5,.08,.03),M(16777215),.48,1.9,.48)),P.add(I(re(.06,.7,.08,.03),M(16777215),.48,1,.48)),[-1,1].forEach(te=>P.add(ae(.05,M(ut.ink),1,1.3,.6,te*.2,1.95,.46))),[-1,1].forEach(te=>P.add(ae(.07,M(16748480),1.3,.7,.3,te*.34,1.86,.46,!1))),P.add(I(new at(.05,.015,6,12,Math.PI),M(ut.ink),0,1.86,.47,!1).rotateZ(Math.PI));{let te=new ht(new cn(Si(.2),{depth:.02,bevelEnabled:!1}),M(16736168));te.position.set(-.3,1.1,.46),P.add(te)}y(P);let R=new Re;R.position.set(4.4,0,-3.5),R.userData.pick="pc",e.add(R),R.add(I(re(1.9,.1,.9,.04),M(14858378),0,.85,0)),[-.8,.8].forEach(te=>R.add(I(re(.1,.85,.8,.03),M(13080688),te,.42,0))),R.add(I(re(.1,.35,.1,.03),M(16777215),0,1.07,-.12));let m=At(256,160,(te,ue,Fe)=>{let Me=te.createLinearGradient(0,0,0,Fe);Me.addColorStop(0,"#9fdcff"),Me.addColorStop(1,"#d9ccff"),te.fillStyle=Me,te.fillRect(0,0,ue,Fe),te.fillStyle="#fff",te.beginPath(),te.arc(70,46,22,0,7),te.arc(96,50,18,0,7),te.fill(),te.fillStyle="#5de3b4",te.beginPath(),te.arc(190,70,30,0,7),te.fill(),te.strokeStyle="#fff",te.lineWidth=4,te.beginPath(),te.arc(190,70,30,0,7),te.moveTo(160,70),te.lineTo(220,70),te.stroke(),te.fillStyle="#2a1b5e",te.font="800 22px sans-serif",te.fillText("MONDE",24,130)});R.add(I(re(1.2,.8,.08,.05),M(16777215),0,1.5,-.12)),R.add(I(new pt(1.06,.66),new je({map:m}),0,1.5,-.075,!1)),R.add(I(re(.7,.04,.24,.02),M(16765411),0,.92,.2,!1));let L=new Re;L.position.set(0,0,.8),L.add(I(new Ie(.34,.34,.12,20),M(16751300),0,.5,0)),L.add(I(new Ie(.05,.05,.5,8),M(16777215),0,.25,0)),L.add(I(re(.6,.5,.1,.06),M(16751300),0,.85,-.3)),R.add(L),y(R);let O=new Re;O.position.set(6.3,0,-4.08),O.userData.pick="door",e.add(O),O.add(I(re(1.55,2.95,.12,.06),M(16777215),0,1.47,0)),O.add(I(re(1.2,2.7,.1,.08),M(16751300),0,1.35,.07)),O.add(ae(.07,M(16765514,{metalness:.4,roughness:.4}),1,1,1,.38,1.3,.16));{let te=new ht(new cn(Si(.4),{depth:.03,bevelEnabled:!1}),M(16777215));te.position.set(0,1.85,.13),O.add(te)}let Y=At(256,96,(te,ue,Fe)=>{te.fillStyle="#ffffff",te.fillRect(0,0,ue,Fe),te.fillStyle="#7c5cff",te.font="800 44px sans-serif",te.textAlign="center",te.textBaseline="middle",te.fillText("\u2192 MONDE",128,50)});O.add(I(new pt(1.2,.45),new je({map:Y}),0,3.3,.04,!1)),O.add(I(re(1.5,.05,.9,.02),M(16765162),0,.03,.8,!1)),y(O);let $=new Re;$.position.set(-6,0,-3.3),$.userData.pick="bath",e.add($),$.add(I(re(2.1,.75,1,.18),M(16777215),0,.38,0)),$.add(I(re(1.8,.04,.72,.02),M(10477823,{emissive:6998261,emissiveIntensity:.3}),0,.72,0,!1));for(let te=0;te<9;te++)$.add(ae(.1+te%3*.04,M(16777215),1,.8,1,-.7+te*.19%1.5,.78+te%2*.05,-.15+te%3*.14,!1));$.add(ae(.1,M(16769354),1.1,.9,1,.55,.85,.1)),$.add(ae(.04,M(16751178),1.4,.8,.8,.65,.85,.1)),$.add(I(new Ie(.04,.04,.4,8),M(13227743,{metalness:.5}),-.95,.95,-.3)),y($);let B=new Re;B.position.set(-4.4,0,-3.6),B.userData.pick="toilet",e.add(B),B.add(I(re(.5,.5,.3,.08),M(16777215),0,.6,-.15)),B.add(I(new Ie(.26,.2,.42,20),M(16777215),0,.22,.12)),B.add(I(new Ie(.28,.28,.06,20),M(16765411),0,.46,.14)),y(B);let A=At(256,96,(te,ue,Fe)=>{te.fillStyle="#ffffff",te.fillRect(0,0,ue,Fe),te.fillStyle="#3aa7e8",te.font="800 40px sans-serif",te.textAlign="center",te.textBaseline="middle",te.fillText("BAIN",128,50)});e.add(I(new pt(1,.38),new je({map:A}),-5.45,2.3,-4.12,!1));let D=new Re;D.position.set(4.4,3.15,-3.9),e.add(D),D.add(I(re(2.4,.1,.5,.04),M(ut.woodDark),0,0,0)),[16748480,9362431,16769658,12166911,7659663].forEach((te,ue)=>D.add(I(re(.14,.55+ue%3*.08,.3,.03),M(te),-1+ue*.17,.35+ue%3*.04,0)));let W=new Re;W.position.set(.75,.05,0),W.userData.pick="fries",D.add(W),W.add(I(re(.36,.34,.36,.06),M(16734810),0,.17,0));for(let te=0;te<6;te++)W.add(I(re(.07,.34,.07,.02),M(16765514),-.12+te%3*.12,.45,-.08+Math.floor(te/3)*.16));W.add(ae(.025,M(ut.ink),1,1,1,-.07,.2,.19)),W.add(ae(.025,M(ut.ink),1,1,1,.07,.2,.19)),y(W);let E=new Re;E.position.set(-.9,0,-1.6),E.userData.pick="lamp",e.add(E),E.add(I(new Ie(.28,.32,.08,20),M(ut.woodDark),0,.04,0)),E.add(I(new Ie(.04,.04,1.9,10),M(ut.woodDark),0,1,0));let N=new zt({color:16773321,emissive:16761178,emissiveIntensity:0,roughness:.8});N.side=Wt,E.add(I(new Ie(.28,.45,.5,24,1,!0),N,0,2.15,0)),y(E),e.add(I(new Ie(.5,.52,.5,28),M(16761052),2.2,.25,1.6)),e.add(ae(.52,M(16761052),1,.35,1,2.2,.5,1.6));let z=[];for(let te=0;te<27;te++){let ue=te/26,Fe=-6.4+ue*12.8,Me=3.95-Math.sin(ue*Math.PI*3)*.2,ge=new je({color:[16773544,16757713,12448732,14273791][te%4]}),me=ae(.06,ge,1,1,1,Fe,Me,-4.05);me.castShadow=!1,me.receiveShadow=!1,e.add(me),z.push(me)}let le=[],G=su("star");for(let te=0;te<18;te++){let ue=new Hn(new En({map:G,transparent:!0,opacity:0,depthWrite:!1}));ue.scale.setScalar(.16+Math.random()*.1),ue.userData={ph:Math.random()*6,sp:.25+Math.random()*.3,x:(Math.random()-.5)*12,z:(Math.random()-.5)*6},i.add(ue),le.push(ue)}let fe=[];{let te=ki("hills",.9,.68);te.position.set(2.15,3.3,-4.08),e.add(te);let ue=ki("dusk",.8,.6);ue.position.set(-4.4,3.25,-4.08),e.add(ue)}{let te=new Re;te.position.set(3.75,.9,-3.2),te.add(I(new Ie(.11,.08,.14,16),M(16777215),0,.07,0)),te.add(I(new Ie(.095,.095,.02,16),M(11822636,{roughness:.4}),0,.13,0,!1));let ue=I(new at(.05,.015,8,12,Math.PI),M(16777215),.12,.07,0);ue.rotation.z=-Math.PI/2,te.add(ue),e.add(te),fe.push(kr(e,3.75,1.05,-3.2,5,{size:.16,rise:.7,op:.55,speed:.22}))}let ne=tl(e,16762490,2.6,-.9,2.15,-1.6,0);ne.material.opacity=0;let ye=zi(e,16773312,1.9,4.6,1.6,1.9,-3.2,.42,.2);ye.renderOrder=2;let Ce=zi(e,16773312,.9,4.2,.4,1.9,-3.4,.42,.12),Ue=new ht(new pt(2,1.1),new je({map:nl(),color:16773304,transparent:!0,opacity:.35,depthWrite:!1,blending:_i}));Ue.rotation.x=-Math.PI/2,Ue.position.set(2.2,.03,-.7),Ue.rotation.z=.5,e.add(Ue),fe.push(Hs(e,36,[1.2,.3,-1.4,3.4,3.2,2.2],16773832,.05)),fe.push(te=>{ye.material.opacity=(ye.userData.k==null?.2:ye.userData.k)*(.85+Math.sin(te*.5)*.15),Ce.material.opacity=(ye.userData.k==null?.12:ye.userData.k*.6)*(.85+Math.sin(te*.7+1)*.15)});let ie={},de=[];Object.keys(Wi).forEach(te=>{let ue=Wi[te](),Fe=du[te];ue.position.set(Fe.p[0],Fe.p[1],Fe.p[2]),ue.rotation.y=Fe.r,ue.visible=!1,e.add(ue),ie[te]=ue,(ue.userData.fish||ue.userData.spin)&&de.push(ue)});function we(te){fe.forEach(ue=>ue(te)),de.forEach(ue=>{ue.userData.fish&&ue.userData.fish.forEach((Fe,Me)=>{let ge=Fe.userData,me=te*(.5+Me*.12)+ge.ph;Fe.position.set(Math.sin(me)*.5,ge.y+Math.sin(me*2)*.04,.05*Math.cos(me)),Fe.rotation.y=Math.cos(me)>0?0:Math.PI}),ue.userData.spin&&(ue.userData.spin.rotation.y=te*.6)})}return{skyMat:c,shadeMat:N,bulbs:z,dust:le,decor:ie,plants:v,update:we,room:e,lampGlow:ne,shaft:ye,sunPatch:Ue}}function iu(i,e,t,n){e==="wave"?(i.hop(4.2),i.setEmotion("happy")):e==="heart"?(i.setEmotion("love"),i.hop(4.6),t.emit("heart",6,i.root.position,n)):e==="happy"?(i.setEmotion("happy"),i.hop(5)):e==="wow"?(i.setEmotion("wow"),i.hop(4)):e==="dance"&&(i.setEmotion("happy"),i.dance=2.4),setTimeout(()=>i.setEmotion("neutral"),2200)}function Ux(i,e){e=e||{};let t;try{t=new Xn({antialias:!0,alpha:!1,powerPreference:"low-power",preserveDrawingBuffer:!!e.preserve})}catch{return null}t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.shadowMap.enabled=!0,t.shadowMap.type=Ui;let n=t.domElement;n.className="scene3d",n.setAttribute("aria-hidden","true"),i.insertBefore(n,i.firstChild);let s=document.createElement("div");s.className="st3-ov",i.appendChild(s);let r=new Sn;r.background=new tt(15984383);let a=new Rt(30,1,.1,60),o=new q(1.3,4,8.2),c=new q(0,1,.3),l=0,f=new ws(16774112,16764880,1);r.add(f),Bc(t),Hc(i);let u=new Rs(16772300,1.5);u.position.set(-3,7,5),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),Object.assign(u.shadow.camera,{left:-9,right:9,top:7,bottom:-6,near:1,far:22}),u.shadow.bias=-6e-4,r.add(u);let h=new sn(16761466,0,8,1.6);h.position.set(-.9,2.3,-1.4),r.add(h);let d=Nx(r),_=zs(r),y=$t(e.look||{mika:!0}),x=e.start||[.2,1];y.root.position.set(x[0],0,x[1]),y.root.scale.setScalar(1.3),r.add(y.root),y.root.traverse(ee=>{ee.isMesh&&(ee.castShadow=!0)});let p=e.acc||[];y.setAccessories(p);let C=uu();r.add(C),y.fx=(ee,oe)=>_.emit(ee,oe,y.root.position,1.3);let w={job:null,pending:null,target:new q(x[0],0,x[1]),nextWander:4,hold:0,busy:!1,lampOn:!1,lampT:0,lampTouched:!1,walkEmit:!1},v=!!e.visit,P=[[.2,1],[1,.1],[-1.4,.6],[2.4,-1.4],[-3.2,-.6],[3.8,-1.2],[-5.2,-.8],[-.6,-1.5],[4.8,1],[1.6,1.8],[-3.4,1.4],[5.5,-2.2]],T={},R=0,m=!0;function L(ee){let oe=document.createElement("span");return oe.className="st3-n",oe.textContent=ee,oe.style.opacity=1,s.appendChild(oe),oe}let O=e.label?L(e.label):null,Y={me:null};function $(ee,oe,ve){ee.b&&ee.b.remove();let Pe=document.createElement("div");Pe.className="st3-b "+(ve||""),Pe.textContent=oe,s.appendChild(Pe),ee.b=Pe,setTimeout(()=>{ee.b===Pe&&(Pe.remove(),ee.b=null)},Math.min(9e3,2600+oe.length*60))}let B={b:null},A={eat:{spot:qn.fridge,dur:2.8,start(){y.face(0),y.setEmotion("happy"),y.setTalking(!0)},end(){y.setTalking(!1),y.fx("heart",5),y.setEmotion("love"),setTimeout(()=>y.setEmotion("neutral"),2200)}},hug:{spot:[.2,1.3],dur:2.6,start(){y.setEmotion("love"),y.hop(4.8),y.fx("heart",7),y.face(0)},end(){y.setEmotion("neutral")}},play:{spot:[.4,1.2],dur:3.2,tick(ee){R>ee.next&&(y.hop(4.2),y.fx("star",2),ee.next=R+.55)},start(){y.setEmotion("happy")},end(){y.setEmotion("neutral")}},wash:{spot:qn.bath,dur:3.6,tick(ee){R>ee.next&&(y.fx("bubble",2),ee.next=R+.45)},start(){y.setEmotion("happy"),y.face(0)},end(){y.fx("star",5),y.setEmotion("love"),setTimeout(()=>y.setEmotion("neutral"),2e3)}},toilet:{spot:qn.toilet,dur:2.4,start(){y.setEmotion("shy"),y.face(.4)},end(){y.fx("star",3),y.setEmotion("happy"),setTimeout(()=>y.setEmotion("neutral"),1600)}},water:{spot:qn.plant0,dur:3,tick(ee){R>ee.next&&(_.emit("drop",2,{x:d.plants[ee.idx||0].g.position.x,y:.6,z:d.plants[ee.idx||0].g.position.z+.5},1),ee.next=R+.4)},start(ee){y.setEmotion("happy"),y.face(-.3),d.plants[ee.idx||0].pop=1},end(){y.fx("heart",4),y.setEmotion("neutral")}},nap:{spot:qn.bed,dur:7,start(){y.setEmotion("sleep"),y.face(.3)},tick(){y.baseY+=(1-y.baseY)*.08,y.roll+=(-1.25-y.roll)*.06},wake:!0,end(){y.setEmotion("happy"),y.hop(4.4),y.fx("star",5)}}};function D(ee,oe){let ve=A[ee];if(!ve)return;let Pe=ve.spot;ee==="water"&&oe&&oe.idx!=null&&(Pe=qn["plant"+oe.idx]),w.job={kind:ee,J:ve,state:"go",until:0,next:0,idx:oe&&oe.idx,spot:Pe,ms:oe&&oe.ms},w.target.set(Pe[0],0,Pe[1]),w.hold=99,w.pending=null}function W(ee){y.baseY+=(0-y.baseY)*Math.min(1,ee*5),y.roll+=(0-y.roll)*Math.min(1,ee*6)}function E(ee,oe){let ve=$t(oe.look||Vi(oe.code));return ve.root.scale.setScalar(1.3),ve.root.position.set(oe.x||0,0,oe.z||1),r.add(ve.root),ve.root.traverse(Pe=>{Pe.isMesh&&(Pe.castShadow=!0)}),ve.fx=(Pe,X)=>_.emit(Pe,X,ve.root.position,1.3),oe.acc&&ve.setAccessories(oe.acc),{ch:ve,tx:oe.x||0,tz:oe.z||1,label:L(oe.nick||""),b:null}}let N={setEmotion:ee=>y.setEmotion(ee),setAccessories:ee=>{p=ee,y.setAccessories(ee)},hop:ee=>y.hop(ee),setLook(ee){let oe=y,ve=$t(ee);ve.root.position.copy(oe.root.position),ve.root.scale.copy(oe.root.scale),ve.root.traverse(Pe=>{Pe.isMesh&&(Pe.castShadow=!0)}),r.add(ve.root),ve.fx=(Pe,X)=>_.emit(Pe,X,ve.root.position,1.3),ve.setAccessories(p),ve.setEmotion(oe.st.emo==="sleep"?"neutral":oe.st.emo),oe.dispose(),y=ve,w.job=null,ve.hop(4)},act(ee,oe,ve){if(ee==="rumble"){y.setEmotion("worry"),setTimeout(()=>y.setEmotion("neutral"),2200);return}v||D(ee,Object.assign({ms:oe},ve||{}))},goTo(ee){let oe=qn[ee];oe&&(w.target.set(oe[0],0,oe[1]),w.hold=3)},debug(){return window.__sc=r,window.__cam=a,{roll:y.roll,baseY:y.baseY,job:w.job?w.job.kind+":"+w.job.state:null}},walkTo(ee,oe){let ve=nu(ee,oe);w.target.set(ve[0],0,ve[1]),w.hold=6,w.job=null,w.pending=null},listening(ee){y.setListening(ee),ee&&(y.look(0,.3),!v&&!w.job&&(w.target.set(.2,0,1.2),w.hold=3))},talking(ee){y.setTalking(ee),ee&&!v&&!w.job&&(w.target.set(.2,0,1.2),y.face(0),w.hold=2.5)},look(ee,oe){y.look(ee,oe)},busy(ee){w.busy=!!ee,ee&&!w.job&&(w.target.set(.2,0,1.2),w.hold=3)},emit(ee,oe){y.fx(ee,oe)},emote(ee){iu(y,ee,_,1.3)},say(ee,oe){$(B,ee,oe||"mk"),y.setTalking(!0),setTimeout(()=>y.setTalking(!1),Math.min(2800,700+ee.length*40))},setDecor(ee){Object.keys(d.decor).forEach(oe=>{d.decor[oe].visible=ee.indexOf(oe)>=0})},setPlants(ee){d.plantLevel=Math.max(0,Math.min(1,ee))},pos(){return{x:y.root.position.x,z:y.root.position.z}},addGuest(ee,oe){T[ee]||(T[ee]=E(ee,oe),T[ee].ch.hop(4))},moveGuest(ee,oe,ve){let Pe=T[ee];Pe&&(Pe.tx=oe,Pe.tz=ve)},guestEmote(ee,oe){let ve=T[ee];ve&&iu(ve.ch,oe,_,1.3)},guestSay(ee,oe){let ve=T[ee];ve&&(ve.ch.hop(3.4),ve.ch.setTalking(!0),setTimeout(()=>ve.ch.setTalking(!1),Math.min(2600,700+oe.length*40)),$(ve,oe,"me"))},removeGuest(ee){let oe=T[ee];oe&&(oe.ch.dispose(),oe.label.remove(),oe.b&&oe.b.remove(),delete T[ee])},guestCount:()=>Object.keys(T).length,destroy(){m=!1,Object.keys(T).forEach(ee=>N.removeGuest(ee)),t.dispose(),t.forceContextLoss&&t.forceContextLoss(),n.parentNode&&n.parentNode.removeChild(n),s.remove()}},z=new Ni,le=new Ne,G=new en(new q(0,1,0),0),fe=new q,ne=null,ye=!1,Ce=new Ne,Ue=new Ne;n.style.touchAction="none";let ie=ee=>{let oe=n.getBoundingClientRect();return le.set((ee.clientX-oe.left)/oe.width*2-1,-((ee.clientY-oe.top)/oe.height)*2+1),le},de=ee=>i.dispatchEvent(new CustomEvent("mika3d",{detail:ee}));n.addEventListener("pointerdown",ee=>{ne={x:ee.clientX,y:ee.clientY}}),n.addEventListener("pointermove",ee=>{if(ee.pointerType==="touch")return;let oe=ie(ee);Ue.set(oe.x*.5,oe.y*.25),ye=!0,y.look(oe.x*.9,-oe.y*.6)}),n.addEventListener("pointerleave",()=>{Ue.set(0,0),ye=!1}),n.addEventListener("pointerup",ee=>{if(!ne||Math.hypot(ee.clientX-ne.x,ee.clientY-ne.y)>8){ne=null;return}ne=null,ie(ee),z.setFromCamera(le,a);for(let oe of z.intersectObjects(r.children,!0)){let ve=oe.object,Pe=null,X=null;for(;ve;){if(ve===y.root){Pe="mika";break}if(ve.userData&&ve.userData.pick){Pe=ve.userData.pick,X=ve;break}if(ve.userData&&ve.userData.root&&ve.userData.root.userData.pick){X=ve.userData.root,Pe=X.userData.pick;break}ve=ve.parent}if(!Pe)continue;if(Pe==="mika"){y.hop(4.6),y.setEmotion("happy"),setTimeout(()=>y.setEmotion("neutral"),1200),de({name:"mika"});return}if(Pe==="lamp"){w.lampOn=!w.lampOn,w.lampTouched=!0,de({name:"lamp"});return}if(Pe==="fries"){de({name:"fries"});return}if(v)continue;let it=Pe==="plant"?"plant"+(X.userData.idx||0):Pe,j=qn[it];if(j){w.job=null,w.target.set(j[0],0,j[1]),w.hold=99,w.pending={name:Pe,idx:X.userData.idx};return}}if(z.ray.intersectPlane(G,fe)){let oe=nu(fe.x,fe.z);v||(w.job=null,w.pending=null,w.target.set(oe[0],0,oe[1]),w.hold=8),de({name:"walk",x:oe[0],z:oe[1]})}});function we(){let ee=i.clientWidth||360,oe=i.clientHeight||360;t.setSize(ee,oe,!1),n.style.width="100%",n.style.height="100%",a.aspect=ee/oe,a.fov=ee/oe<.9?38:30,a.updateProjectionMatrix()}new ResizeObserver(we).observe(i),we();let te=-1;function ue(){let ee=new Date().getHours();if(ee===te)return;te=ee,d.skyMat.map.dispose(),d.skyMat.map=Gi(ee),d.skyMat.needsUpdate=!0;let oe=ee<6||ee>=21,ve=ee>=18&&ee<21;r.background.set(oe?2827104:ve?16765120:15984383),f.intensity=oe?.55:ve?.85:1.05,f.color.set(oe?9406207:ve?16767426:16777215),u.intensity=oe?.35:ve?1:1.5,u.color.set(oe?10135295:ve?16757642:16777215),d.shaft.userData.k=oe?0:ve?.16:.2,d.sunPatch.material.opacity=oe?0:ve?.25:.35,(oe||ve)&&!w.lampTouched&&(w.lampOn=!0),d.dust.forEach(Pe=>{Pe.material.map=zc(oe?"star":"heart"),Pe.material.opacity=0})}ue();let Fe=setInterval(ue,6e4),Me=!0,ge=new kn,me=new q,Se=new q;"IntersectionObserver"in window&&new IntersectionObserver(ee=>{Me=ee[0].isIntersecting},{threshold:.01}).observe(i);function Te(ee,oe,ve){Se.set(oe.x,oe.y+ve,oe.z).project(a);let Pe=i.clientWidth,X=i.clientHeight,it=(ee.offsetWidth||40)/2+4;ee.style.left=Math.max(it,Math.min(Pe-it,(Se.x*.5+.5)*Pe))+"px",ee.style.top=(-Se.y*.5+.5)*X+"px"}d.plantLevel=1;function Oe(){if(!m){clearInterval(Fe);return}if(requestAnimationFrame(Oe),!Me||document.hidden){ge.getDelta();return}let ee=Math.min(.05,ge.getDelta());R+=ee;let oe=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;w.hold=Math.max(0,w.hold-ee);let ve=y.st,Pe=y.root.position,X=w.target.x-Pe.x,it=w.target.z-Pe.z,j=Math.hypot(X,it);if(w.job){let F=w.job;F.state==="go"&&j<.12?(F.state="do",F.until=R+(F.ms?F.ms/1e3:F.J.dur),F.J.start&&F.J.start(F)):F.state==="do"?(F.J.tick&&F.J.tick(F),R>F.until&&(F.J.end&&F.J.end(F),F.J.wake?(F.state="wake",F.until=R+.9):(i.dispatchEvent(new CustomEvent("mika3d",{detail:{name:"done-"+F.kind}})),w.job=null,w.hold=2))):F.state==="wake"&&(W(ee),R>F.until&&(y.baseY=0,y.roll=0,i.dispatchEvent(new CustomEvent("mika3d",{detail:{name:"done-"+F.kind}})),w.job=null,w.hold=2,w.target.set(qn.bed[0]+1.6,0,qn.bed[1]+1.4)))}else if(w.pending&&j<.12){let F=w.pending;w.pending=null,w.hold=1.5,y.face(0),i.dispatchEvent(new CustomEvent("mika3d",{detail:{name:F.name,idx:F.idx}}))}if(!v&&!oe&&!ve.sleeping&&!w.busy&&!ve.talking&&!w.job&&!w.pending&&w.hold<=0&&R>w.nextWander){let F=P[Math.floor(Math.random()*P.length)];w.target.set(F[0],0,F[1]),w.nextWander=R+5+Math.random()*6}(!w.job||w.job.state==="go")&&(Math.abs(y.roll)>.002||Math.abs(y.baseY)>.002?W(ee):(y.roll=0,y.baseY=0));let b=!1;if(j>.06){b=!0;let F=Math.min(j,(ve.talking?1.6:w.hold>3?2:1.4)*ee);Pe.x+=X/j*F,Pe.z+=it/j*F,y.face(Math.atan2(X,it)*.7)}else!ve.talking&&ve.emo!=="shy"&&!(w.job&&w.job.kind==="nap")&&y.face(0);y.dance>0&&(y.dance-=ee,ve.y<.02&&y.hop(3.2),y.face(Math.sin(R*10)*.8)),y.update(ee,R,b,ye),C.position.set(Pe.x,.012,Pe.z+.02);let g=Math.max(.5,1-ve.y*.4)*1.3;C.scale.set(g*(1.05+ve.squash),g*(1.05+ve.squash),1),C.material.opacity=y.baseY>.3?0:Math.max(.35,1-ve.y*.7),Object.keys(T).forEach(F=>{let V=T[F],J=V.ch.root.position,se=V.tx-J.x,H=V.tz-J.z,Z=Math.hypot(se,H),xe=!1;if(V.ch.dance>0)V.ch.dance-=ee,V.ch.st.y<.02&&V.ch.hop(3.2),V.ch.face(Math.sin(R*10)*.8);else if(Z>.06){xe=!0;let Ee=Math.min(Z,2*ee);J.x+=se/Z*Ee,J.z+=H/Z*Ee,V.ch.face(Math.atan2(se,H)*.7)}else V.ch.face(0);V.ch.update(ee,R+F.length,xe,!1),Te(V.label,J,-.12),V.b&&Te(V.b,J,2.35)}),O&&Te(O,Pe,-.12),B.b&&Te(B.b,Pe,2.35+(y.baseY||0)),_.update(ee),d.update(R),d.plants.forEach((F,V)=>{let J=1-d.plantLevel;F.pop=Math.max(0,F.pop-ee*.8),F.leaves.scale.set(1+F.pop*.15,1-J*.38+F.pop*.12,1+F.pop*.15),F.leaves.rotation.z=Math.sin(R*1.3+V)*.02+J*.12,F.thirst.material.opacity=J>.6?.6+.4*Math.sin(R*4):0,F.thirst.position.y=2.3+Math.sin(R*3)*.08}),d.dust.forEach(F=>{let V=F.userData,J=(R*V.sp*.3+V.ph)%1;F.position.set(V.x+Math.sin(R*V.sp+V.ph)*.4,.9+J*3,V.z),F.material.opacity=.55*Math.sin(J*Math.PI),F.material.rotation=R*.3+V.ph}),d.bulbs.forEach((F,V)=>F.scale.setScalar(.85+.25*Math.sin(R*2.4+V*1.3))),w.lampT+=((w.lampOn?1:0)-w.lampT)*Math.min(1,ee*4),h.intensity=w.lampT*2.2,d.shadeMat.emissiveIntensity=w.lampT*1.3,d.lampGlow.material.opacity=w.lampT*.75,l+=((v?0:Math.max(-4.3,Math.min(4.3,Pe.x*.85)))-l)*Math.min(1,ee*2.2),Ce.lerp(ye?Ue:me.set(Math.sin(R*.25)*.2,Math.sin(R*.18)*.08,0),Math.min(1,ee*3));let U=v?1.5:1;a.position.set(l+(v?0:1)+Ce.x,o.y*U+Ce.y,o.z*U),a.lookAt(l,c.y,c.z),t.render(r,a)}return Oe(),N}function Fx(i,e){let t;try{t=new Xn({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}t.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let n=t.domElement;n.className="scene3d",i.insertBefore(n,i.firstChild);let s=new Sn;ks(s);let r=new Rt(28,1,.1,30);r.position.set(0,1.5,4.6),r.lookAt(0,.82,0);let a=I(new Ie(.95,1,.1,40),M(16777215),0,-.05,0,!1);s.add(a);{let T=uu();T.scale.setScalar(1.5),s.add(T)}let o=zs(s),c=null,l=0,f=!0,u=null,h=0,d=0,_=null,y=I(new Ie(1.15,1.2,.08,40),M(15984383),1.3,-.04,0,!1);y.visible=!1,s.add(y);function x(T){if(_&&(s.remove(_),_=null),T&&Wi[T]){let R=Wi[T](),m=du[T],L=new nn().setFromObject(R),O=L.getSize(new q),Y=Math.max(.35,Math.min(1.1,2/Math.max(O.x,O.y,O.z,.1)));R.scale.setScalar(Y),R.position.set(1.3,m.p[1]>1.5?1.2:m.p[1]>.5?0:m.p[1],0),R.rotation.y=m.p[1]>1.5||T==="poster"?0:.5,(T==="starrug"||T==="poster"||T==="neon"||T==="disco"||T==="cloud")&&(R.rotation.y=0),T==="poster"&&(R.rotation.y=0),s.add(R),_=R,(R.userData.fish||R.userData.spin)&&(_.userData.anim=!0)}y.visible=!!_,r.position.set(_?.55:0,1.5,_?6.6:4.6),r.lookAt(_?.55:0,.82,0),c&&(c.root.position.x=_?-.85:0,a.position.x=c.root.position.x)}function p(){c&&c.dispose(),c=$t(e()),c.root.scale.setScalar(1.25),c.fx=(T,R)=>o.emit(T,R,c.root.position,1.25),s.add(c.root),c.root.position.x=_?-.85:0,a.position.x=c.root.position.x}p();function C(){let T=i.clientWidth||200,R=i.clientHeight||200;t.setSize(T,R,!1),n.style.width="100%",n.style.height="100%",r.aspect=T/R,r.updateProjectionMatrix()}new ResizeObserver(C).observe(i),C(),n.style.touchAction="none",n.addEventListener("pointerdown",T=>{u={x:T.clientX,s:h,moved:!1},n.setPointerCapture(T.pointerId)}),n.addEventListener("pointermove",T=>{if(!u)return;let R=T.clientX-u.x;Math.abs(R)>4&&(u.moved=!0),h=u.s+R*.012,d=h}),n.addEventListener("pointerup",()=>{u&&!u.moved&&(c.hop(4.6),c.setEmotion("happy"),o.emit("heart",3,c.root.position,1.25),setTimeout(()=>c&&c.setEmotion("neutral"),1400)),u=null});let w=new kn,v=!0;"IntersectionObserver"in window&&new IntersectionObserver(T=>{v=T[0].isIntersecting},{threshold:.01}).observe(i);function P(){if(!f)return;if(requestAnimationFrame(P),!v||document.hidden){w.getDelta();return}let T=Math.min(.05,w.getDelta());l+=T,u||(d+=(Math.sin(l*.7)*.5-d)*Math.min(1,T*.8)),h+=(d-h)*Math.min(1,T*6),c.face(h),c.update(T,l,!1,!1),o.update(T),_&&_.userData.fish&&_.userData.fish.forEach((R,m)=>{let L=R.userData,O=l*(.5+m*.12)+L.ph;R.position.set(Math.sin(O)*.5,L.y+Math.sin(O*2)*.04,.05*Math.cos(O)),R.rotation.y=Math.cos(O)>0?0:Math.PI}),_&&_.userData.spin&&(_.userData.spin.rotation.y=l*.6),t.render(s,r)}return P(),{setDecor:x,rebuild(){p(),c.hop(3.6)},emote(T){c.setEmotion(T)},destroy(){f=!1,c&&c.dispose(),t.dispose(),t.forceContextLoss&&t.forceContextLoss(),n.parentNode&&n.parentNode.removeChild(n)}}}function Ox(i,e){let t;try{t=new Xn({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}t.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let n=t.domElement;n.className="scene3d",i.insertBefore(n,i.firstChild);let s=document.createElement("div");s.className="st3-ov",i.appendChild(s);let r=new Sn;ks(r);let a=new Rt(30,2.6,.1,40);a.position.set(0,2.2,6.4),a.lookAt(0,1.1,0),r.add(I(re(11,.3,4.2,.1),M(16770761,{emissive:15780256,emissiveIntensity:.35}),0,-.15,0,!1));{let D=At(256,256,(N,z,le)=>{N.fillStyle="#E9DEFE",N.fillRect(0,0,z,le),N.fillStyle="rgba(255,255,255,.85)";for(let G=0;G<4;G++)for(let fe=0;fe<4;fe++)N.beginPath(),N.arc(32+fe*64+G%2*32,32+G*64,5,0,7),N.fill()});D.wrapS=D.wrapT=bn,D.repeat.set(4,1.4),r.add(I(re(11,3.6,.2,.06),M(16777215,{map:D,emissive:15326974,emissiveIntensity:.25}),0,1.8,-2.15,!1)),r.add(I(re(11,.2,.12,.04),M(16777215),0,.1,-2.02,!1));for(let N=0;N<17;N++){let z=N/16,le=new je({color:[16773544,16757713,12448732,14273791][N%4]});r.add(ae(.07,le,1,1,1,-5+z*10,3.15-Math.sin(z*Math.PI*4)*.12,-2))}let W=new ht(new cn(Si(.7),{depth:.05,bevelEnabled:!1}),new je({color:16748480}));W.position.set(-3.6,2.2,-2),r.add(W);let E=W.clone();E.position.set(3.6,2.2,-2),E.material=new je({color:9362431}),r.add(E)}let o=new Re;o.position.set(0,0,.1),o.add(I(new Ie(1.9,1.9,.05,40),M(12448732),0,.03,0,!1)),o.add(I(new Ie(1.3,1.3,.07,40),M(16774890),0,.04,0,!1)),r.add(o);let c=zs(r),l=$t({mika:!0,acc:e||[]});l.root.scale.setScalar(.9),l.root.position.set(0,0,.6),r.add(l.root),l.fx=(D,W)=>c.emit(D,W,l.root.position,.9);let f={},u=new q(0,0,.6),h=3,d=0,_=!0,y=!0,x=p("Mika",!0);function p(D,W){let E=document.createElement("span");return E.className="st3-n"+(W?" mk":""),E.textContent=D,s.appendChild(E),E}function C(D,W,E){return W?-3.5:3.5-D*1.5}function w(){let D=0;Object.keys(f).forEach(W=>{let E=f[W];E.mine?E.tx=-3.2:(E.tx=3.2-D*1.5,D++)})}function v(D){let W={};D.forEach(E=>{W[E.id]=1;let N=E.code+"|"+E.nick;if(f[E.id]&&f[E.id].key!==N&&P(E.id),!f[E.id]){let z=$t(Vi(E.code));z.root.scale.setScalar(.95),z.root.position.set(E.me?-6:6,0,.5),r.add(z.root),z.fx=(le,G)=>c.emit(le,G,z.root.position,.95),f[E.id]={ch:z,key:N,mine:!!E.me,tx:0,label:p(E.me?"Moi":E.nick),bubble:null},setTimeout(()=>z.hop(4),500)}}),Object.keys(f).forEach(E=>{W[E]||P(E)}),w()}function P(D){let W=f[D];W&&(W.ch.dispose(),W.label.remove(),W.bubble&&W.bubble.remove(),delete f[D])}function T(D,W,E){let N=D.bubble;N&&N.remove();let z=document.createElement("div");z.className="st3-b"+(E?" mk":""),z.textContent=W,s.appendChild(z),D.bubble=z,setTimeout(()=>{D.bubble===z&&(z.remove(),D.bubble=null)},Math.min(7e3,2800+W.length*55))}let R={bubble:null};function m(D){return/[😂🤣😆😄😁]|haha|mdr|lol/i.test(D)?"happy":/[😍🥰❤💕💖]|j'adore|trop bien/i.test(D)?"love":/[😢😭😞]|triste|nul|fatigu/i.test(D)?"sad":/[😮😱]|\?\?|oh/i.test(D)?"wow":null}let L={setMembers:v,say(D,W){let E=f[D];if(!E)return;E.ch.hop(3.8);let N=m(W);N&&(E.ch.setEmotion(N),N==="love"&&c.emit("heart",3,E.ch.root.position,.95),setTimeout(()=>E.ch.setEmotion("neutral"),1800)),E.ch.setTalking(!0),setTimeout(()=>E.ch.setTalking(!1),Math.min(2400,600+W.length*40)),T(E,W,!1)},mikaSay(D){l.hop(3.6),l.setTalking(!0),u.set(0,0,.9),h=d+4,setTimeout(()=>l.setTalking(!1),Math.min(2800,700+D.length*40)),T(R,D,!0)},mikaReact(D){l.setEmotion(D),setTimeout(()=>l.setEmotion("neutral"),2200)},setMikaAcc(D){l.setAccessories(D)},destroy(){_=!1,Object.keys(f).forEach(P),l.dispose(),t.dispose(),t.forceContextLoss&&t.forceContextLoss(),n.remove(),s.remove()}};function O(){let D=i.clientWidth||360,W=i.clientHeight||150;t.setSize(D,W,!1),n.style.width="100%",n.style.height="100%",a.aspect=D/W,a.fov=D/W>2?30:40,a.updateProjectionMatrix()}new ResizeObserver(O).observe(i),O(),x.style.opacity=1;let Y=new kn,$=new q;function B(D,W,E,N){$.set(W.x,W.y+E,W.z).project(a);let z=i.clientWidth,le=i.clientHeight,G=(D.offsetWidth||40)/2+4;D.style.left=Math.max(G,Math.min(z-G,($.x*.5+.5)*z+(N||0)))+"px",D.style.top=(-$.y*.5+.5)*le+"px"}l.setEmotion("neutral"),n.addEventListener("pointerup",()=>{l.hop(4.4),l.setEmotion("happy"),setTimeout(()=>l.setEmotion("neutral"),1200),i.dispatchEvent(new CustomEvent("mika3d",{detail:{name:"mika"}}))});function A(){if(!_)return;if(requestAnimationFrame(A),document.hidden){Y.getDelta();return}let D=Math.min(.05,Y.getDelta());d+=D,d>h&&!l.st.talking&&(u.set((Math.random()-.5)*3.2,0,.3+Math.random()*.8),h=d+4+Math.random()*5);let W=l.root.position,E=u.x-W.x,N=u.z-W.z,z=Math.hypot(E,N),le=!1;if(z>.06){le=!0;let G=Math.min(z,.9*D);W.x+=E/z*G,W.z+=N/z*G,l.face(Math.atan2(E,N)*.7)}else l.face(0);l.update(D,d,le,!1),Object.keys(f).forEach(G=>{let fe=f[G],ne=fe.ch.root.position,ye=fe.tx-ne.x,Ce=!1;Math.abs(ye)>.05?(Ce=!0,ne.x+=Math.sign(ye)*Math.min(Math.abs(ye),2.2*D),fe.ch.face(Math.sign(ye)*.5)):fe.ch.face(fe.mine?.35:-.35),ne.z=.5,fe.ch.update(D,d+G.length,Ce,!1),B(fe.label,ne,-.12,0),fe.bubble&&B(fe.bubble,ne,1.75,0)}),B(x,l.root.position,-.12,0),R.bubble&&B(R.bubble,l.root.position,1.75,0),c.update(D),t.render(r,a)}return A(),L}function Bx(i,e){e=e||{};let t;try{t=new Xn({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}t.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let n=t.domElement;n.className="scene3d",i.insertBefore(n,i.firstChild);let s=document.createElement("div");s.className="st3-ov",i.appendChild(s);let r=new Sn;ks(r);let a=new Rt(36,1.4,.1,40);a.position.set(0,2.5,7.6),a.lookAt(0,1,-.4),r.add(I(re(9,.3,8,.1),M(15980984,{emissive:15255452,emissiveIntensity:.3}),0,-.15,.3,!1));let o=At(256,256,(A,D,W)=>{A.fillStyle="#FFE9F3",A.fillRect(0,0,D,W),A.fillStyle="rgba(255,255,255,.9)";for(let E=0;E<4;E++)for(let N=0;N<4;N++)A.beginPath(),A.arc(32+N*64+E%2*32,32+E*64,5,0,7),A.fill()});o.wrapS=o.wrapT=bn,o.repeat.set(3.2,1.3),r.add(I(re(9,4.2,.2,.06),M(16777215,{map:o,emissive:16771571,emissiveIntensity:.25}),0,2,-3.1,!1));let c=document.createElement("canvas");c.width=512,c.height=256;let l=c.getContext("2d"),f=new Ii(c);f.colorSpace=kt;let u=[];function h(){l.fillStyle="#2f5d50",l.fillRect(0,0,512,256),l.strokeStyle="rgba(255,255,255,.18)",l.lineWidth=6,l.strokeRect(8,8,496,240),l.textAlign="center",l.textBaseline="middle";let A=u.length?u:[{t:"Willkommen!",c:"#fff6c2",s:56},{t:"Hello \xB7 Hallo \xB7 Hola \xB7 Ciao",c:"#cfe9ff",s:26}],W=128-A.reduce((E,N)=>E+(N.s||34)*1.35,0)/2;A.forEach(E=>{let N=E.s||34;l.font="700 "+N+'px "Comic Sans MS","Chalkboard SE","Segoe UI",sans-serif',l.fillStyle=E.c||"#ffffff";let z=E.t;for(;l.measureText(z).width>470&&N>14;)l.font="700 "+--E.s+"px sans-serif";l.fillText(z,256,W+N*.67),W+=N*1.35}),f.needsUpdate=!0}h();let d=new Re;d.position.set(0,2.15,-2.95),d.add(I(re(3.6,1.9,.12,.05),M(14267530),0,0,0,!1)),d.add(I(new pt(3.4,1.7),new je({map:f}),0,0,.07,!1)),r.add(d),r.add(I(re(1.7,.7,.7,.1),M(13080688),0,.35,-1.55)),r.add(I(re(1.85,.08,.8,.04),M(14858378),0,.72,-1.55)),r.add(I(re(.5,.06,.34,.02),M(16748480),-.5,.79,-1.5,!1)),r.add(I(new Ie(2.6,2.6,.04,44),M(14273791),0,.02,1.6,!1));for(let A=0;A<17;A++){let D=A/16;r.add(ae(.07,new je({color:[16773544,16757713,12448732,14273791][A%4]}),1,1,1,-4+D*8,3.9-Math.sin(D*Math.PI*4)*.14,-2.95))}let _=zs(r),y=$t({mika:!0,color:15905402,ears:"bear",eyes:"dot",acc:e.bobAcc||["glasses","bowtie"]});y.root.scale.setScalar(1.12),y.root.position.set(0,0,-1),y.face(0),r.add(y.root),y.fx=(A,D)=>_.emit(A,D,y.root.position,1.1);let x=$t(Object.assign(Vi(e.code||"0000")));x.root.scale.setScalar(.8),x.root.position.set(-.9,0,2.2),x.face(Math.PI),r.add(x.root),x.fx=(A,D)=>_.emit(A,D,x.root.position,.95);let p=$t({mika:!0,acc:e.mikaAcc||[]});p.root.scale.setScalar(.68),p.root.position.set(.85,0,2.2),p.face(Math.PI),r.add(p.root),p.fx=(A,D)=>_.emit(A,D,p.root.position,.8);let C={bob:{ch:y,el:null,dy:1.95,b:null},me:{ch:x,el:null,dy:1.5,b:null},mika:{ch:p,el:null,dy:1.3,b:null}};[["bob","Prof. Bobby","pr"],["mika","Mika","mk"]].forEach(A=>{let D=document.createElement("span");D.className="st3-n "+A[2],D.textContent=A[1],s.appendChild(D),C[A[0]].el=D,D.style.opacity=1});function w(A,D,W,E){let N=C[A];N.b&&N.b.remove();let z=document.createElement("div");z.className="st3-b "+(W||""),z.textContent=D,s.appendChild(z),N.b=z,setTimeout(()=>{N.b===z&&(z.remove(),N.b=null)},E||Math.min(14e3,4200+D.length*70))}let v=0,P=!0,T=new kn,R=new q;function m(A,D,W){R.set(D.x,D.y+W,D.z).project(a);let E=i.clientWidth,N=i.clientHeight,z=(A.offsetWidth||40)/2+4;A.style.left=Math.max(z,Math.min(E-z,(R.x*.5+.5)*E))+"px",A.style.top=(-R.y*.5+.5)*N+"px"}function L(){let A=i.clientWidth||360,D=i.clientHeight||260;t.setSize(A,D,!1),n.style.width="100%",n.style.height="100%",a.aspect=A/D,a.fov=A/D<1.2?46:36,a.updateProjectionMatrix()}new ResizeObserver(L).observe(i),L();let O={};function Y(A,D){C[A].ch.setTalking(!0),clearTimeout(O[A]),O[A]=setTimeout(()=>C[A].ch.setTalking(!1),D)}let $={bobbySay(A,D){y.hop(3.4),y.setEmotion(D||"happy"),Y("bob",Math.min(4e3,800+A.length*45)),w("bob",A,"pr"),setTimeout(()=>y.setEmotion("neutral"),2600)},bobbyEmote(A){y.setEmotion(A),(A==="proud"||A==="cheer"||A==="love")&&_.emit("heart",4,y.root.position,1.1),setTimeout(()=>y.setEmotion("neutral"),2400)},bobbyListen(A){y.setEmotion(A?"wow":"neutral")},userSay(A){x.hop(3.4),Y("me",Math.min(2500,600+A.length*40)),w("me",A,"me")},mikaSay(A,D){p.hop(3.6),p.setEmotion(D||"happy"),Y("mika",Math.min(3e3,800+A.length*40)),w("mika",A,"mk",Math.min(16e3,5e3+A.length*80)),setTimeout(()=>p.setEmotion("neutral"),2800)},mikaReact(A){p.setEmotion(A),setTimeout(()=>p.setEmotion("neutral"),2400)},board(A){u=A||[],h()},setBobAcc(A){y.setAccessories(A)},setMikaAcc(A){p.setAccessories(A)},thinking(A){A&&(y.setEmotion("neutral"),y.look(.4,.3))},destroy(){P=!1,[y,x,p].forEach(A=>A.dispose()),t.dispose(),t.forceContextLoss&&t.forceContextLoss(),n.remove(),s.remove()}};n.addEventListener("pointerup",()=>{y.hop(4),y.setEmotion("happy"),setTimeout(()=>y.setEmotion("neutral"),1200),i.dispatchEvent(new CustomEvent("mika3d",{detail:{name:"bobby"}}))});function B(){if(!P)return;if(requestAnimationFrame(B),document.hidden){T.getDelta();return}let A=Math.min(.05,T.getDelta());v+=A,y.face(Math.sin(v*.6)*.12),x.face(Math.PI+Math.sin(v*.5)*.08),p.face(Math.PI-Math.sin(v*.5)*.08),y.update(A,v,!1,!1),x.update(A,v+1,!1,!1),p.update(A,v+2,!1,!1),["bob","mika"].forEach(D=>{m(C[D].el,C[D].ch.root.position,-.08)}),Object.keys(C).forEach(D=>{C[D].b&&m(C[D].b,C[D].ch.root.position,C[D].dy)}),_.update(A),t.render(r,a)}return B(),$}function Hx(i){let e;try{e=new Xn({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}Bc(e),Hc(i),e.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let t=e.domElement;t.className="scene3d",i.insertBefore(t,i.firstChild);let n=document.createElement("div");n.className="st3-ov",i.appendChild(n);let s=new Sn;ks(s);let r=new Rt(38,1.4,.1,60);r.position.set(0,7.2,9.4),r.lookAt(0,0,.5),s.add(I(new Ie(7.2,7.4,.3,56),M(13234872,{emissive:11069088,emissiveIntensity:.25}),0,-.15,.2,!1)),s.add(I(new Ie(3.4,3.4,.04,48),M(16773334),0,.02,.2,!1)),s.add(I(new at(3.4,.08,8,48),M(16765411),0,.04,.2,!1).rotateX(Math.PI/2));let a=new Re;a.position.set(0,0,-.4),s.add(a),a.add(I(new Ie(1,1.1,.34,32),M(15262463),0,.17,0)),a.add(I(new Ie(.86,.86,.3,32),M(9362431,{emissive:6998261,emissiveIntensity:.4,roughness:.2}),0,.2,0,!1)),a.add(I(new Ie(.12,.16,.8,12),M(15262463),0,.6,0));let o=ae(.2,M(12119295,{emissive:9362431,emissiveIntensity:.5,transparent:!0,opacity:.85}),1,1.3,1,0,1.15,0);a.add(o);function c(G,fe,ne,ye){let Ce=new Re;Ce.position.set(G,0,fe),Ce.scale.setScalar(ye||1),Ce.add(I(new Ie(.14,.2,1.1,10),M(12159587),0,.55,0)),[[0,1.55,0,.8],[-.5,1.3,.15,.55],[.5,1.35,-.1,.55],[.05,1.95,.05,.5]].forEach(Ue=>Ce.add(ae(Ue[3],M(ne,{emissive:ne,emissiveIntensity:.18}),1,.9,1,Ue[0],Ue[1],Ue[2]))),s.add(Ce)}c(-4.6,-2.6,16757713,1.2),c(4.8,-2.4,16762588,1.1),c(-5.2,2.6,12448732,1),c(5.3,2.8,16757713,.95);function l(G,fe){let ne=new Re;ne.position.set(G,0,fe),ne.add(I(new Ie(.05,.07,1.7,8),M(7035534),0,.85,0)),ne.add(ae(.2,new je({color:16773544}),1,1,1,0,1.8,0)),s.add(ne)}l(-2.6,-2.2),l(2.6,-2.2),l(-3.4,3.2),l(3.4,3.2);let f=[];function u(G,fe,ne,ye,Ce,Ue,ie,de,we,te){let ue=new Re;ue.position.set(fe,0,ne),ue.userData.pick=G,ue.add(I(re(de,we,1.5,.14),M(ye,{emissive:ye,emissiveIntensity:.12}),0,we/2,0)),ue.add(I(re(de+.16,.14,1.7,.05),M(16777215),0,.07,.05,!1));let Fe=Math.max(4,Math.round(de/.3));for(let me=0;me<Fe;me++)ue.add(ae(de/Fe*.62,M(me%2?16777215:Ce),1,.9,1.1,-de/2+(me+.5)*de/Fe,we*.7,.88));ue.add(I(re(de+.1,.1,1.2,.04),M(Ce),0,we*.78,.55,!1)),ue.add(I(re(de*.46,.14,.9,.05),M(Ce),0,we+.06,0,!1)),ue.add(I(re(.46,.8,.08,.04),M(12159587),de*.26,.42,.78)),ue.add(I(re(de*.46,.6,.06,.04),M(13627135,{emissive:16771512,emissiveIntensity:.55}),-de*.2,.62,.78,!1)),te&&te.forEach((me,Se)=>ue.add(ae(.11,M(me,{emissive:me,emissiveIntensity:.3}),1,1,.8,-de*.2+(Se-(te.length-1)/2)*.28,.5,.83,!1)));let Me=At(256,96,(me,Se,Te)=>{me.fillStyle="#ffffff",me.beginPath(),me.roundRect?me.roundRect(4,4,Se-8,Te-8,28):me.rect(4,4,Se-8,Te-8),me.fill(),me.fillStyle="#2A1B5E",me.font="700 40px DynaPuff, Fredoka, sans-serif",me.textAlign="center",me.textBaseline="middle",me.fillText(Ue+" "+ie,Se/2,Te/2+2)}),ge=I(new pt(de*.9,de*.9*96/256),new je({map:Me,transparent:!0}),0,we+.5,.2,!1);return ue.add(ge),ue.scale.setScalar(1.1),ue.traverse(me=>{me!==ue&&(me.userData.root=ue)}),s.add(ue),f.push(ue),ue}u("home",-5.8,-5.2,16767464,16748480,"\u{1F3E0}","Chambre",2,1.7,[16748480,16769658]),u("bakery",-3.4,-5.2,16773593,16748480,"\u{1F950}","Boulangerie",2.1,1.7,[15247707,16757713,12448732]),u("thrift",-1,-5.2,14283236,6153140,"\u{1F457}","Friperie",2,1.8,[16748480,9362431,12166911]),u("deco",1.4,-5.2,16774351,16761418,"\u{1FAB4}","D\xE9co",2,1.7,[7065466,16757713]),u("dentist",4.7,-2.7,16777215,3116976,"\u{1F9B7}","Dentiste",2.1,1.8,[16747039,8150271,5686976]),u("karaoke",3.8,-5.2,14734591,8150271,"\u{1F3A4}","Karaok\xE9",2,1.9,[16740296,8255999]);let h=new Re;h.position.set(6.4,1.7,-6.2),h.scale.setScalar(.62),h.userData.pick="park";{let G=I(new at(1.55,.07,8,40),M(16748480),0,0,0,!1);h.add(G);let fe=I(new at(.85,.05,8,32),M(16769658),0,0,0,!1);h.add(fe);for(let ne=0;ne<8;ne++){let ye=ne/8*Math.PI*2,Ce=I(new Ie(.03,.03,3.1,6),M(16777215),0,0,0,!1);Ce.rotation.z=ye,h.add(Ce);let Ue=I(re(.38,.3,.3,.08),M([16757713,9362431,16769658,12448732][ne%4]),Math.cos(ye)*1.55,Math.sin(ye)*1.55,0);Ue.userData.gond=1,h.add(Ue)}}let d=new Re;d.userData.pick="park",d.position.set(6.4,0,-6.2),d.scale.setScalar(.62),[-1,1].forEach(G=>{let fe=I(re(.16,2.3,.16,.05),M(8150271),G*.55,1.05,0);fe.rotation.z=-G*.28,d.add(fe)}),d.add(I(new Ie(.1,.1,.5,10),M(16777215),0,2.1,0)),s.add(d),s.add(h),f.push(h,d),h.traverse(G=>{G!==h&&(G.userData.root=h)}),d.traverse(G=>{G!==d&&(G.userData.root=d)}),s.add(I(re(1.6,.18,.5,.05),M(14858378),3.1,.45,-3.3)),s.add(I(re(1.6,.5,.1,.04),M(14858378),3.1,.75,-3.5));let _=zs(s),y=0,x={},p=0,C=!0,w=new kn;function v(G,fe){let ne=document.createElement("span");return ne.className="st3-n"+(fe?" mk":""),ne.textContent=G,ne.style.opacity=1,n.appendChild(ne),ne}function P(G){if(x[G.pid])return;let fe=$t(G.npc?{mika:!0,acc:G.acc||[]}:Vi(G.code));fe.root.scale.setScalar(G.npc?.75:.85),fe.root.position.set(G.x||0,0,G.z||2),s.add(fe.root),fe.fx=(ne,ye)=>_.emit(ne,ye,fe.root.position,.85),x[G.pid]={ch:fe,tx:G.x||0,tz:G.z||2,label:v(G.me?"Moi":G.nick,G.me),me:!!G.me,npc:!!G.npc,next:0,dance:0,bub:null,bubT:0},fe.hop(4)}function T(G,fe){let ne=x[G];if(!ne)return;ne.bub&&ne.bub.remove();let ye=document.createElement("div");ye.className="st3-b",ye.textContent=String(fe).slice(0,80),n.appendChild(ye),ne.bub=ye,ne.bubT=5+Math.min(4,String(fe).length/25),ne.ch.setTalking(!0),setTimeout(()=>ne.ch&&ne.ch.setTalking(!1),1400)}function R(G){let fe=x[G];fe&&(fe.bub&&fe.bub.remove(),fe.ch.dispose(),fe.label.remove(),delete x[G])}function m(G,fe){let ne=x[G];if(!ne||ne.npc)return;let ye=ne.ch.root.position.clone();ne.ch.dispose();let Ce=$t(Vi(fe));Ce.root.scale.setScalar(.85),Ce.root.position.copy(ye),s.add(Ce.root),Ce.fx=(Ue,ie)=>_.emit(Ue,ie,Ce.root.position,.85),ne.ch=Ce,Ce.hop(4)}function L(G,fe,ne){let ye=x[G];ye&&(ye.tx=fe,ye.tz=ne)}function O(G,fe){let ne=x[G];if(!ne)return;let ye=ne.ch;fe==="wave"?(ye.hop(4.2),ye.setEmotion("happy")):fe==="heart"?(ye.setEmotion("love"),ye.hop(4.6),_.emit("heart",6,ye.root.position,.85)):fe==="happy"?(ye.setEmotion("happy"),ye.hop(5)):fe==="wow"?(ye.setEmotion("wow"),ye.hop(4)):fe==="dance"&&(ye.setEmotion("happy"),ne.dance=2.4),setTimeout(()=>ye.setEmotion("neutral"),2200)}function Y(){let G=i.clientWidth||360,fe=i.clientHeight||280;e.setSize(G,fe,!1),t.style.width="100%",t.style.height="100%",r.aspect=G/fe,r.fov=G/fe<1.2?64:42,r.updateProjectionMatrix()}new ResizeObserver(Y).observe(i),Y();let $=new Ni,B=new Ne,A=new en(new q(0,1,0),0),D=new q;t.addEventListener("pointerup",G=>{let fe=t.getBoundingClientRect();B.set((G.clientX-fe.left)/fe.width*2-1,-((G.clientY-fe.top)/fe.height)*2+1),$.setFromCamera(B,r);for(let Ce of $.intersectObjects(f,!0)){let Ue=Ce.object,ie=null;for(;Ue;){if(Ue.userData&&Ue.userData.pick){ie=Ue.userData.pick;break}Ue=Ue.parent}if(ie){i.dispatchEvent(new CustomEvent("plaza3d",{detail:{kind:"building",id:ie}}));return}}if(!$.ray.intersectPlane(A,D))return;let ne=null,ye=.9;Object.keys(x).forEach(Ce=>{let Ue=x[Ce].ch.root.position,ie=Math.hypot(Ue.x-D.x,Ue.z-D.z);ie<ye&&(ye=ie,ne=Ce)}),i.dispatchEvent(new CustomEvent("plaza3d",{detail:ne?{kind:"tap",pid:ne,me:x[ne].me}:{kind:"walk",x:Math.max(-5.2,Math.min(5.2,D.x)),z:Math.max(-3.2,Math.min(4.2,D.z))}}))});let W=new q;function E(G,fe,ne){W.set(fe.x,fe.y+ne,fe.z).project(r);let ye=i.clientWidth,Ce=i.clientHeight,Ue=(G.offsetWidth||40)/2+4;G.style.left=Math.max(Ue,Math.min(ye-Ue,(W.x*.5+.5)*ye))+"px",G.style.top=(-W.y*.5+.5)*Ce+"px"}function N(){if(!C)return;if(requestAnimationFrame(N),document.hidden){w.getDelta();return}let G=Math.min(.05,w.getDelta());p+=G,o.scale.y=1.3+Math.sin(p*5)*.2,h.rotation.z-=G*(y>0?1.4:.18),y>0&&(y-=G),h.children.forEach(fe=>{fe.userData.gond&&(fe.rotation.z=-h.rotation.z)}),Object.keys(x).forEach(fe=>{let ne=x[fe],ye=ne.ch.root.position,Ce=ne.tx-ye.x,Ue=ne.tz-ye.z,ie=Math.hypot(Ce,Ue),de=!1;if(ne.dance>0)ne.dance-=G,ne.ch.st.y<.02&&ne.ch.hop(3.2),ne.ch.face(Math.sin(p*10)*.8);else if(ne.npc&&ie<.06&&p>ne.next)ne.tx=(Math.random()-.5)*8,ne.tz=-1+Math.random()*4.5,ne.next=p+3+Math.random()*4;else if(ie>.06){de=!0;let we=Math.min(ie,(ne.npc?.9:2)*G);ye.x+=Ce/ie*we,ye.z+=Ue/ie*we,ne.ch.face(Math.atan2(Ce,Ue)*.8)}else ne.ch.face(0);ne.ch.update(G,p+fe.length,de,!1),E(ne.label,ye,-.12),ne.bub&&(ne.bubT-=G,ne.bubT<=0?(ne.bub.remove(),ne.bub=null):E(ne.bub,ye,1.55))}),_.update(G),e.render(s,r)}N();function z(){y=4.5}function le(){Object.keys(x).forEach(G=>{x[G].npc||R(G)})}return{add:P,remove:R,setCode:m,reset:le,rideWheel:z,moveTo:L,emote:O,say:T,has:G=>!!x[G],count:()=>Object.keys(x).length,destroy(){C=!1,Object.keys(x).forEach(R),e.dispose(),e.forceContextLoss&&e.forceContextLoss(),t.remove(),n.remove()}}}function zr(i,e,t){let n=At(256,64,(s,r,a)=>{let o=r/t;for(let c=0;c<t;c++)s.fillStyle=c%2?e:i,s.fillRect(c*o,0,o,a)});return n.wrapS=bn,n}function Os(i,e,t){let n=At(128,128,(s,r,a)=>{s.fillStyle=i,s.fillRect(0,0,r,a),s.fillStyle=e,s.fillRect(0,0,r/2,a/2),s.fillRect(r/2,a/2,r/2,a/2)});return n.wrapS=n.wrapT=bn,n.repeat.set(t,t*.6),n}function zx(i,e,t,n){return At(512,160,(s,r,a)=>{t&&(s.fillStyle=t,s.fillRect(0,0,r,a)),s.font="700 78px DynaPuff, Fredoka, sans-serif",s.textAlign="center",s.textBaseline="middle",n&&(s.shadowColor=n,s.shadowBlur=24),s.fillStyle=e,s.fillText(i,r/2,a/2+4),s.fillText(i,r/2,a/2+4)})}var Rn={cake(i,e,t,n){let s=new Re;s.position.set(i,e,t),s.add(I(new Ie(.2,.2,.2,20),M(n||16765411),0,.1,0,!1));let r=I(new at(.16,.035,8,20),M(16777215),0,.2,0,!1);return r.rotation.x=Math.PI/2,s.add(r),s.add(ae(.05,M(16726876,{emissive:16726876,emissiveIntensity:.25}),1,1,1,0,.27,0)),s},macaron(i,e,t,n){let s=new Re;s.position.set(i,e,t);let r=M(n,{emissive:n,emissiveIntensity:.18});return s.add(ae(.1,r,1,.42,1,0,.05,0)),s.add(ae(.09,M(16775150),1,.3,1,0,.1,0)),s.add(ae(.1,r,1,.42,1,0,.15,0)),s},croissant(i,e,t){let n=new Re;n.position.set(i,e,t);let s=I(new at(.13,.065,10,16,Math.PI*1.15),M(15247707),0,.09,0,!1);return s.rotation.set(Math.PI/2.4,0,Math.PI*.9),s.scale.set(1.2,1,1),n.add(s),n},donut(i,e,t,n){let s=new Re;s.position.set(i,e,t);let r=I(new at(.1,.055,10,18),M(15774571),0,.08,0,!1);r.rotation.x=Math.PI/2.3,s.add(r);let a=I(new at(.1,.05,10,18),M(n||16751304,{emissive:n||16751304,emissiveIntensity:.15}),0,.1,.005,!1);return a.rotation.x=Math.PI/2.3,a.scale.set(1,1,.9),s.add(a),s},cupcake(i,e,t,n){let s=new Re;s.position.set(i,e,t);let r=I(new Ie(.1,.07,.12,12),M(16109728),0,.06,0,!1);return s.add(r),s.add(ae(.11,M(n||16757713,{emissive:n||16757713,emissiveIntensity:.15}),1,.8,1,0,.17,0)),s.add(ae(.035,M(16726876),1,1,1,0,.27,0)),s},bread(i,e,t){let n=new Re;n.position.set(i,e,t),n.add(ae(.2,M(14259530),1.5,.7,.8,0,.12,0));for(let s=-1;s<=1;s++){let r=I(re(.02,.012,.18,.005),M(15913888),s*.09,.22,0,!1);r.rotation.y=.5,n.add(r)}return n}};function kx(i,e,t,n,s){let r=new Re;r.position.set(i,e,t),r.add(I(new at(.05,.008,6,12,Math.PI),M(13619164,{metalness:.5,roughness:.4}),0,.05,0,!1));let a=M(n,{emissive:n,emissiveIntensity:.1});return s==="dress"?(r.add(I(new Ie(.1,.22,.5,14),a,0,-.22,0,!1)),r.add(I(re(.2,.14,.05,.02),a,0,0,0,!1))):(r.add(I(re(.3,.38,.06,.03),a,0,-.17,0,!1)),[-1,1].forEach(o=>{let c=I(re(.16,.08,.06,.03),a,o*.2,-.04,0,!1);c.rotation.z=-o*.5,r.add(c)})),r}function Gx(i,e,t,n){n=n||{};let s;try{s=new Xn({antialias:!0,alpha:!1,powerPreference:"low-power"})}catch{return null}s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Bc(s),Hc(i);let r=s.domElement;r.className="scene3d",i.insertBefore(r,i.firstChild);let a=new Sn,o={bakery:16771568,thrift:15721424,deco:15135726,karaoke:2364487,dentist:14677487,kitchen:16773596,garden:12577023,bath:14676991,living:16773080,entry:13625855}[e]||16777215;a.background=new tt(o),ks(a);let c=new Rt(34,1,.1,40);c.position.set(0,1.9,6.6),c.lookAt(0,1.25,0);let l=zs(a),f=[],u=new Re;a.add(u);let h=j=>(u.add(j),j),d={bakery:()=>M(16777215,{map:Os("#fff4f8","#ffc4dc",5)}),thrift:()=>M(14198126,{map:zr("#d9a96f","#c8935b",14)}),deco:()=>M(15984339,{map:Os("#f6ece0","#e9d9c3",5)}),karaoke:()=>M(3810160,{roughness:.3}),dentist:()=>M(16777215,{map:Os("#ffffff","#cfeee6",6)}),kitchen:()=>M(14263662,{map:zr("#e0b078","#cf9b62",12)}),garden:()=>M(8834914,{roughness:1}),bath:()=>M(16777215,{map:Os("#f4fbff","#cfe6f7",7)}),living:()=>M(14263662),entry:()=>M(14263662)}[e](),_=I(new pt(26,16),d,0,0,4.5,!1);d.map&&d.map.repeat.multiplyScalar(1.8),_.rotation.x=-Math.PI/2,h(_);let y={bakery:16766694,thrift:13099988,deco:16774112,karaoke:3086947,dentist:13496038,kitchen:16771529,garden:10212474,bath:12575735,living:16769988,entry:16769988}[e],x=e==="bakery"?zr("#ffd6e6","#fff0f6",14):null;x&&x.repeat.set(3.4,1);let p=h(I(re(26,10,.2,.05),M(y,x?{map:x}:{emissive:y,emissiveIntensity:e==="karaoke"?.35:.12}),0,4.7,-3,!1));if(e==="kitchen"){let j=Cn("#D9A56E",["#E8BC8A","#C98F55","#EFC99A"],200,{planks:9,ang:0,len:90,bw:6,seed:4,w:512,h:512});j.repeat.set(2.4,1.6),_.material=M(16777215,{map:j});let b=Cn("#FFE6BF",["#FFF0D2","#F7D9A4","#FFE0B8","#F2CC95"],240,{seed:12});b.repeat.set(4,1.5),p.material=M(16777215,{map:b})}if(e==="living"||e==="entry"){let j=Cn("#D9A56E",["#E8BC8A","#C98F55","#EFC99A"],200,{planks:9,ang:0,len:90,bw:6,seed:4,w:512,h:512});j.repeat.set(2.4,1.6),_.material=M(16777215,{map:j});let b=Cn("#FFE2C2",["#FFEFD6","#F7D2A0","#FFDDB4","#F2C58E"],240,{seed:41});b.repeat.set(4,1.5),p.material=M(16777215,{map:b}),e==="entry"&&(p.visible=!1)}if(e==="bath"){let j=Cn("#CDEBF5",["#E3F6FB","#B8DCEB","#D8F0F2","#A9D3E6"],240,{seed:21});j.repeat.set(4,1.5),p.material=M(16777215,{map:j});let b=Cn("#F2E4CF",["#FFF3E0","#E6D2B5","#F7E9D4"],160,{seed:22});b.repeat.set(2.4,1.6),_.material=M(16777215,{map:b})}if(e==="garden"){let j=Cn("#8ED069",["#A7DD7C","#76BF58","#B9E58C","#68B050"],420,{seed:31,ang:1.2,len:30,bw:8,w:512,h:512});j.repeat.set(3.4,2.4),_.material=M(16777215,{map:j}),p.material=new je({color:16777215}),p.visible=!1;let b=I(new pt(19,9.5),new je({map:Gi(new Date().getHours(),!0),fog:!1}),0,4.6,-3.1,!1);a.add(b)}h(I(re(14,.18,.2,.04),M(16777215),0,.09,-2.88,!1));let C=I(new pt(2.9,.9),new je({map:zx({bakery:"Boulangerie",thrift:"Friperie",deco:"D\xE9co",karaoke:"Karaok\xE9",dentist:"Dentiste",kitchen:"Cuisine",garden:"Jardin",bath:"Salle de bain",living:"Salon",entry:"Entr\xE9e"}[e],{bakery:"#e0457b",thrift:"#ff7ac8",deco:"#2f8f6b",karaoke:"#7df9ff",dentist:"#2f8fb0",kitchen:"#d9822b",garden:"#2f8f6b",bath:"#3a8fd1",living:"#d9822b",entry:"#d9822b"}[e],{bakery:"#fffaf0",thrift:null,deco:"#fffaf0",karaoke:null,dentist:"#fffaf0",kitchen:"#fffaf0",garden:"#fffaf0",bath:"#fffaf0",living:"#fffaf0",entry:"#fffaf0"}[e],{thrift:"#ff3fa8",karaoke:"#18c8ff"}[e]),transparent:!0}),0,3.85,-2.86,!1);h(C);let w={set:()=>{}},v={},P=null,T=null,R=null,m=null,L=0,O=!1,Y=0,$=!0,B=6.6,A=!1,D=[0,0,1.4],W=1.25;if(e==="bakery"){D=[-1.5,0,1.2];let j=I(re(5.4,1,1.2,.14),M(16775150),.9,.5,-1.6);h(j),h(I(re(5.5,.12,1.3,.05),M(16106122),.9,1.04,-1.6,!1));let b=I(re(3.6,.95,1,.08),new zt({color:14677759,transparent:!0,opacity:.22,roughness:.05,metalness:.1}),.5,1.6,-1.55,!1);h(b),h(I(re(3.7,.06,1.05,.02),M(16775150),.5,1.12,-1.55,!1)),h(I(re(3.4,.05,.8,.02),M(16775150),.5,1.5,-1.55,!1)),h(I(re(3.7,.07,1.05,.02),M(16757713),.5,2.1,-1.55,!1));let g=[16757713,12448732,16773544,14273791,16763304,9362431];for(let J=0;J<6;J++)h(Rn.macaron(-.95+J*.22,1.5,-1.3,g[J]));h(Rn.cake(-1,1.15,-1.7,16765411)),h(Rn.cake(-.4,1.15,-1.7,12448732)),h(Rn.cake(.2,1.15,-1.7,16773544)),h(Rn.cupcake(.85,1.15,-1.7,16757713)),h(Rn.cupcake(1.2,1.15,-1.5,14273791)),h(Rn.donut(1.25,1.55,-1.35,16751304)),h(Rn.croissant(.4,1.55,-1.3)),h(Rn.croissant(.75,1.55,-1.3)),h(Rn.donut(1.05,1.55,-1.7,12448732)),h(I(re(1.6,2.4,.5,.06),M(16106122),3.95,1.2,-2.4)),[.6,1.2,1.8].forEach(J=>{h(I(re(1.5,.06,.45,.02),M(16773336),3.95,J,-2.35,!1));for(let se=0;se<3;se++)h(Rn.bread(3.5+se*.45,J+.04,-2.3))});let U=I(new zn(11,.5,1.6),M(16777215,{map:zr("#ff8fc0","#ffffff",16)}),0,4.6,-2.2,!1);zr("#ff8fc0","#ffffff",16).repeat.set(1,1),h(U);for(let J=0;J<22;J++)h(ae(.26,M(J%2?16777215:16748480),1,.9,.9,-5.2+J*.5,4.3,-1.45));for(let J=-1;J<=1;J+=2){let se=new Re;se.position.set(J*2.4,3.1,-1.2),se.add(I(new Ie(.01,.01,.9,4),M(10066329),0,.5,0,!1));let H=I(new Pt(.3,.3,14,1,!0),M(16769960,{side:Wt,emissive:16765818,emissiveIntensity:.6}),0,0,0,!1);se.add(H),se.add(ae(.08,new je({color:16773560}),1,1,1,0,-.05,0)),h(se),f.push(Z=>{se.rotation.z=Math.sin(Z*1.2+J)*.03})}let V=new sn(16767400,1,12);V.position.set(0,3.2,1),a.add(V)}else if(e==="thrift"){D=[.2,0,1.4];let j=(se,H,Z,xe,Ee,k)=>{h(I(new Ie(.03,.03,xe,8),M(14206888,{metalness:.5}),se,H,Z,!1)).rotation.z=Math.PI/2,[-1,1].forEach(Le=>h(I(new Ie(.03,.04,H,8),M(14206888,{metalness:.5}),se+Le*xe/2,H/2,Z,!1)));let _e=Math.floor(xe/.32);for(let Le=0;Le<_e;Le++){let Be=kx(se-xe/2+.2+Le*.32,H-.05,Z,Ee[Le%Ee.length],k[Le%k.length]);Be.rotation.y=.3,h(Be)}};j(-2.6,2.1,-1.8,2.4,[16748480,9362431,16773544,12166911,11069547],["shirt","dress"]),j(2.7,2.1,-1.8,2.2,[16754895,16763304,12448732,15195647],["dress","shirt"]),j(-.4,1.7,-2.4,3,[15905402,14697851,8150271,16769658],["shirt","shirt","dress"]);let b=I(new ii(.75,30),new zt({color:15005439,metalness:.9,roughness:.08,emissive:12576511,emissiveIntensity:.25}),3.75,1.7,-1.1,!1);b.scale.set(.8,1.35,1),b.rotation.y=-.45,h(b);let g=I(new at(.75,.07,8,32),M(15905402),3.75,1.7,-1.11,!1);g.scale.set(.8,1.35,1),g.rotation.y=-.45,h(g),h(I(re(2.2,.08,.45,.03),M(13210972),-3.6,2.9,-2.6,!1));let U=[16748480,8150271,16769658,6153140];for(let se=0;se<4;se++)h(I(new Ie(.2,.2,.04,16),M(U[se]),-4.2+se*.5,2.97,-2.6,!1)),h(ae(.13,M(U[se]),1,.8,1,-4.2+se*.5,3.04,-2.6));for(let se=0;se<24;se++){let H=se/23,Z=ae(.06,new je({color:[16773544,16757713,12448732,9362431][se%4]}),1,1,1,-5+H*10,4.7-Math.sin(H*Math.PI*3)*.2,-2.7);h(Z),f.push(xe=>{Z.scale.setScalar(.85+Math.sin(xe*3+se)*.25)})}let F=new ht(new cn(Si(.9),{depth:.04,bevelEnabled:!1}),new je({color:16732072}));F.position.set(-3.5,1.4,-2.8),h(F),f.push(se=>{F.scale.setScalar(1+Math.sin(se*3)*.05)});let V=I(new Ie(1.5,1.5,.03,36),M(16757713),.2,.02,1.4,!1);h(V),h(I(new at(1.2,.04,8,36),M(16777215),.2,.04,1.4,!1)).rotation.x=Math.PI/2;let J=new sn(16767468,.9,14);J.position.set(0,3.4,2),a.add(J)}else if(e==="deco"){D=[-1.4,0,1.2];let j=(U,F,V,J)=>{h(I(new Ie(.22,.17,.4,14),M(16763304),U,.2,F));for(let se=0;se<5;se++){let H=se/5*Math.PI*2;h(ae(.2,M(J||7065466),.6,1.8*V,.35,U+Math.cos(H)*.12,.7+.2*V,F+Math.sin(H)*.12)).rotation.z=Math.cos(H)*.35}};j(-3.6,-1.8,1.4),j(3.8,-1.6,1,9232522),j(-2.3,-2.4,.8,6277536),h(I(re(2.6,.7,.9,.18),M(16757713),1.2,.35,-1.9)),h(I(re(2.6,.7,.3,.14),M(16751304),1.2,.95,-2.25)),[-1,1].forEach(U=>h(I(re(.3,.55,.9,.12),M(16751304),1.2+U*1.3,.5,-1.9))),h(I(re(.5,.5,.18,.06),M(16773544),.5,.75,-1.85)),h(I(re(.5,.5,.18,.06),M(12448732),1.9,.75,-1.85)),h(I(new Ie(.02,.02,2.4,6),M(13421772),3,1.2,-1.2,!1)),h(ae(.3,M(16769960,{emissive:16765818,emissiveIntensity:.9}),1,.8,1,3,2.5,-1.2)),[[-2.2,3.1,16757713],[-1.4,3.3,9362431],[-.6,3,16773544]].forEach(U=>{h(I(re(.6,.8,.06,.02),M(15905402),U[0],U[1],-2.85,!1)),h(I(re(.46,.64,.02,.01),M(U[2],{emissive:U[2],emissiveIntensity:.3}),U[0],U[1],-2.81,!1))});let b=I(new at(.9,.08,8,28,Math.PI),M(16777215),2.2,2.6,-2.85,!1);h(b),h(I(new ii(.9,28,0,Math.PI),new je({color:12577279}),2.2,2.6,-2.86,!1)),h(I(new Ie(.62,.7,.2,28),M(16777215),1.5,.1,1.3));let g=new sn(16773328,.8,14);g.position.set(0,3.6,2),a.add(g)}else if(e==="kitchen"){D=[.2,0,1.7],W=1.2;let j=M(13209429),b=M(16775146),g=M(16777215,{map:Os("#ffffff","#ffd9a8",8)}),U=M(13226716,{metalness:.6,roughness:.3});h(I(new pt(14,2.4),M(16777215,{map:Os("#fff8ee","#ffd9a8",14)}),0,1.7,-2.88,!1)),h(I(re(9.5,1,.9,.06),j,.2,.5,-2.35)),h(I(re(9.6,.08,1,.03),b,.2,1.04,-2.35)),h(I(re(1.3,.1,.7,.04),U,-2.4,1.07,-2.3));let F=h(I(new at(.2,.04,8,16,Math.PI),U,-2.4,1.45,-2.55));h(I(new Ie(.04,.04,.4,8),U,-2.4,1.25,-2.62));let V=new Re;V.userData.pick="stove",V.add(I(re(1.5,1.05,.95,.08),M(15330802),0,.52,0)),V.add(I(re(1.5,.06,.95,.03),M(3093312),0,1.07,0)),[[-.38,-.2],[.38,-.2],[-.38,.22],[.38,.22]].forEach(k=>{let _e=I(new at(.16,.03,8,20),M(4475482),k[0],1.11,k[1]);_e.rotation.x=Math.PI/2,V.add(_e)});let J=new Re;J.add(I(new Ie(.28,.26,.3,20),M(16748456),0,.15,0));{let k=I(new at(.28,.025,8,20),M(16740238),0,.3,0);k.rotation.x=Math.PI/2,J.add(k)}J.position.set(-.38,1.13,-.2),V.add(J);let se=[];for(let k=0;k<4;k++){let _e=ae(.09,M(16777215,{transparent:!0,opacity:.55}),1,1,1,-.38,1.5,-.2);se.push(_e),V.add(_e)}f.push(k=>{se.forEach((_e,Le)=>{let Be=(k*.45+Le/4)%1;_e.position.y=1.45+Be*.9,_e.scale.setScalar(.6+Be),_e.material.opacity=.55*(1-Be),_e.position.x=-.38+Math.sin(k*2+Le)*.08})}),V.position.set(.2,0,-2.3),h(V);let H=new Re;H.userData.pick="fridge",H.add(I(re(1.15,2.7,.95,.12),M(12575743),0,1.35,0)),H.add(I(re(1.1,.04,.02,.01),M(16777215),0,1.75,.49)),H.add(I(re(.07,.5,.07,.03),U,.4,2.2,.5)),H.add(I(re(.07,.8,.07,.03),U,.4,1,.5)),[[-.2,2.1,16740238],[.1,2.35,16769658],[-.1,1.2,8255999]].forEach(k=>H.add(I(re(.22,.22,.02,.04),M(k[2]),k[0],k[1],.49))),H.position.set(3.6,0,-2.25),h(H),h(I(re(2.8,.08,.35,.02),j,-2.2,2.55,-2.8)),["#ff8a5b","#ffd166","#7bd88f","#ff6f8e","#b9a6ff"].forEach((k,_e)=>{h(I(new Ie(.17,.17,.4,14),new zt({color:k,transparent:!0,opacity:.85}),-3.3+_e*.55,2.8,-2.8)),h(I(new Ie(.15,.15,.06,12),j,-3.3+_e*.55,3.03,-2.8))}),h(I(re(2,1.6,.1,.05),M(16777215),1.8,3.1,-2.88,!1)),h(I(new pt(1.8,1.4),new je({map:Gi(new Date().getHours())}),1.8,3.1,-2.82,!1));let Z=h(I(new ii(.22,20),new je({color:16769658}),2.25,3.4,-2.8,!1));f.push(k=>{Z.scale.setScalar(1+Math.sin(k*2)*.06)}),h(I(new Ie(.9,.9,.08,24),j,-2,.85,1.4)),h(I(new Ie(.1,.1,.85,10),j,-2,.42,1.4)),[[-2.9,1.4],[-1.1,1.4]].forEach(k=>{h(I(re(.5,.08,.5,.03),M(16748480),k[0],.5,k[1])),h(I(re(.07,.5,.07,.02),j,k[0]-.2,.25,k[1]-.2)),h(I(re(.07,.5,.07,.02),j,k[0]+.2,.25,k[1]+.2))}),h(ae(.25,M(16740175),1,.85,1,-2,1.05,1.4)),h(ae(.2,M(16769658),1,.9,1,-1.65,.98,1.55)),h(I(new Ie(.02,.02,1.6,6),M(7829367),-2,4.3,1.4,!1));let xe=h(I(new Pt(.5,.45,20,1,!0),M(16757575,{emissive:16753210,emissiveIntensity:.6,side:Wt}),-2,3.45,1.4,!1)),Ee=new sn(16769192,.8,12);Ee.position.set(-1,3.4,1.8),a.add(Ee),Z.visible=!1,se.forEach(k=>{k.visible=!1}),f.push(kr(u,-.18,1.5,-2.5,8,{size:.3,rise:1.5,op:.5,speed:.28}));{let k=new Re;k.position.set(2.2,1.08,-2.4),k.add(ae(.2,M(16757705,{roughness:.45}),1,.85,1,0,.18,0)),k.add(ae(.06,M(16748456),1,1,1,0,.4,0));let _e=I(new Ie(.03,.05,.22,8),M(16757705),.24,.24,0);_e.rotation.z=-.9,k.add(_e),h(k),f.push(kr(u,2.5,1.45,-2.4,5,{size:.16,rise:.8,op:.5,speed:.25}))}{let k=ki("hills",1,.75);k.position.set(-2.6,3.75,-2.86),h(k)}[-4.2,-3.9,-3.6].forEach((k,_e)=>{h(I(new Ie(.01,.01,.5,4),M(8018490),k,3.55,-2.8,!1));let Le=ae(.13,M([7323481,9425002,12087194][_e]),.8,1.6,.8,k,3.1,-2.78);h(Le)}),f.push((k=>_e=>{k.material.opacity=.55+Math.sin(_e*1.7)*.05})(tl(u,16762746,2.8,-2,3.8,1.4,.55))),zi(u,16773312,1.9,4.6,2.6,2,-2.2,.42,.2),f.push(Hs(u,34,[.6,.3,-.6,3.4,3.2,2.2],16773832,.05))}else if(e==="garden"){D=[2.5,0,1.7],W=1,C.visible=!1,h(I(re(26,1.6,.8,.3),M(7323481),0,.8,-2.7,!1));for(let H=0;H<12;H++)h(I(re(.22,1.2,.08,.03),M(15982520),-5.5+H*1,.7,-2.2));h(I(re(12,.1,.08,.02),M(15982520),0,.95,-2.18)),h(I(re(12,.1,.08,.02),M(15982520),0,.45,-2.18));let j=new Re;j.add(I(new Ie(.22,.32,2.4,10),M(10251075),0,1.2,0)),[[0,3,0],[-.9,2.6,.2],[.9,2.7,-.1],[.1,3.6,.1]].forEach(H=>j.add(ae(1,M(16758741),1.1,.95,1.1,H[0],H[1],H[2]))),j.position.set(-3.7,0,-1.6),h(j),f.push(H=>{j.rotation.z=Math.sin(H*.8)*.012});let b=[];for(let H=0;H<10;H++){let Z=ae(.05,M(16763358),1.4,.3,1,0,0,0);Z.userData.o=Math.random()*6,b.push(Z),h(Z)}f.push(H=>{b.forEach((Z,xe)=>{let Ee=(H*.25+Z.userData.o)%1;Z.position.set(-3.7+Math.sin(H+xe)*1.6,3.4-Ee*3.3,-1.6+Math.cos(H*.8+xe)*1),Z.rotation.z=H*2+xe})});let g=[0,1,2].map(H=>{let Z=new Re;return[0,.5,-.5].forEach(xe=>Z.add(ae(.5,new je({color:16777215}),1.3,.8,.6,xe,xe*.1,0))),Z.position.set(-6+H*4,5.3+H*.4,-4),h(Z),Z});f.push(H=>{g.forEach((Z,xe)=>{Z.position.x=(H*.25+xe*4+6)%16-8})});let U=[],F=[];for(let H=0;H<6;H++){let Z=new Re;Z.userData.pick="plot"+H;let xe=I(re(1.35,.22,1.05,.1),M(8014634),0,.11,0);Z.add(xe),Z.userData.soil=xe,Z.add(I(re(1.5,.1,.1,.03),M(13209429),0,.22,.58)),Z.add(I(re(1.5,.1,.1,.03),M(13209429),0,.22,-.58));let Ee=new Re;Ee.position.y=.22,Z.add(Ee),Z.userData.plant=Ee;let k=ae(.12,new je({color:16777215}),1,1,.3,0,.55,.62);k.visible=!0,Z.add(k),Z.userData.hint=k,Z.position.set(-2.3+H%3*1.7,0,-1.55+Math.floor(H/3)*1.3),h(Z),U.push(Z)}v.plotG=U,w.set=H=>{U.forEach((Z,xe)=>{let Ee=H&&H[xe],k=Z.userData.plant;for(;k.children.length;){let We=k.children[0];k.remove(We),We.geometry&&We.geometry.dispose()}if(Z.userData.soil.material.color.setHex(Ee&&Ee.w?5912093:8014634),Z.userData.hint.visible=!Ee,Z.userData.hint.material.color.setHex(16777215),!Ee)return;let _e=M(6079587),Le=M(4105802),Be=Ee.stage;if(Be===0)[-.12,.12].forEach(We=>k.add(ae(.1,_e,1,1.4,.5,We,.1,0))),k.add(I(new Ie(.02,.02,.15,5),Le,0,.07,0));else if(Be===1){for(let We=0;We<4;We++){let K=We/4*Math.PI*2,De=ae(.16,_e,1.5,.35,.7,Math.cos(K)*.16,.25,Math.sin(K)*.16);De.rotation.y=-K,k.add(De)}k.add(I(new Ie(.03,.03,.3,6),Le,0,.15,0))}else{for(let We=0;We<6;We++){let K=We/6*Math.PI*2,De=ae(.2,Be===2?_e:Le,1.6,.35,.7,Math.cos(K)*.22,.32,Math.sin(K)*.22);De.rotation.y=-K,k.add(De)}if(k.add(I(new Ie(.04,.04,.4,6),Le,0,.2,0)),Be===3){let We={tomate:[16730685,.17,1],carotte:[16747039,.12,2],fraise:[16727406,.12,1],herbe:[3129173,.1,0],citrouille:[16747039,.3,1],ciboulette:[3129173,.07,0],piment:[14688288,.1,2]}[Ee.c]||[16765503,.15,1];if(We[2]===1)for(let De=0;De<3;De++)k.add(ae(We[1],M(We[0]),1,Ee.c==="citrouille"?.8:1,1,(De-1)*.28,.2+De%2*.12,.3));else if(We[2]===2)for(let De=0;De<4;De++){let be=I(new Pt(We[1],.45,10),M(We[0]),(De-1.5)*.22,.38,.2);be.rotation.z=Math.PI,k.add(be)}else for(let De=0;De<6;De++)k.add(I(new Ie(.02,.03,.6,5),M(We[0]),(De-2.5)*.1,.45,.1));let K=ae(.08,new je({color:16769658}),1,1,1,0,.85,0);K.userData.twinkle=!0,k.add(K)}}})};let V=new Re;V.userData.pick="can",V.add(I(new Ie(.28,.26,.4,16),M(5686976),0,.2,0));{let H=I(new Ie(.04,.05,.5,8),M(5686976),.35,.4,0);H.rotation.z=-.8,V.add(H)}V.add(I(new at(.16,.025,8,14,Math.PI),M(4171938),-.12,.45,0)),V.position.set(-3.2,0,1.3),h(V);let J=[0,1,2].map(H=>{let Z=new Re;return[-1,1].forEach(xe=>Z.add(ae(.12,M([16748480,16769658,9362431][H]),1.2,.2,.9,xe*.1,0,0))),Z.add(ae(.04,M(2759518),1,1,2,0,0,0)),h(Z),Z});f.push(H=>{J.forEach((Z,xe)=>{Z.position.set(Math.sin(H*.7+xe*2)*3.2,1.5+Math.sin(H*1.3+xe)*.5,-.3+Math.cos(H*.5+xe*2)*1.4),Z.rotation.y=H+xe,Z.children.forEach((Ee,k)=>{k<2&&(Ee.rotation.z=(k?-1:1)*Math.sin(H*16+xe)*.8)})})}),a.fog=new ar(12577023,14,30);let se=new sn(16774080,.5,14);se.position.set(0,4,3),a.add(se);for(let H=0;H<20;H++){let Z=ae(.7+H%3*.14,M([7323481,5942860,8703075][H%3]),1.1,.9,.9,-9+H*.95,1.55+H%2*.14,-2.75);h(Z)}{let H=Oc(77),Z=new ys(new Es(.075,8,6),new zt({roughness:.8}),90),xe=new ys(new Pt(.04,.22,4),new zt({color:6273366,roughness:1}),110),Ee=new dt,k=[16748468,16769658,16777215,13219583,16753515];for(let _e=0;_e<90;_e++){let Le=(H()-.5)*16,Be=.5+H()*5.5;Be<1.2&&Le>-3.4&&Le<2.2&&(Be+=1.2),Ee.makeTranslation(Le,.2,Be),Z.setMatrixAt(_e,Ee),Z.setColorAt(_e,new tt(k[_e%5]))}for(let _e=0;_e<110;_e++){let Le=(H()-.5)*18,Be=-.4+H()*7;Ee.makeTranslation(Le,.14,Be),xe.setMatrixAt(_e,Ee)}h(Z),h(xe),Z.castShadow=!1,xe.castShadow=!1}[-3.5,.5,4.5].forEach((H,Z)=>zi(u,16773824,2.2,8,H,3.4,-.4,.5,.11-Z*.015)),f.push(Hs(u,46,[0,.4,.8,6,3.6,3.2],16773288,.07)),[[-3.5,3.2],[-2.6,3.6],[-1.5,3.9]].forEach(H=>{let Z=I(new Ie(.4,.45,.07,12),M(14275268),H[0],.04,H[1]);h(Z)})}else if(e==="bath"){D=[1.7,0,1.6],W=1.2;let j=M(16777215,{roughness:.3}),b=M(8177407),g=new Re;g.userData.pick="tub",g.add(I(re(3,.9,1.4,.35),j,0,.45,0)),g.add(I(re(2.6,.12,1,.2),M(10476799,{emissive:7324927,emissiveIntensity:.25}),0,.88,0));let U=[];for(let J=0;J<10;J++){let se=ae(.17+Math.random()*.1,M(16777215,{transparent:!0,opacity:.9}),1,1,1,-1+J%5*.5,1+Math.random()*.15,-.2+Math.floor(J/5)*.4);U.push(se),g.add(se)}f.push(J=>{U.forEach((se,H)=>{se.position.y=1+Math.abs(Math.sin(J*1.2+H))*.12})}),g.add(ae(.2,M(16769658),1.1,.95,1.1,.8,1.12,.1)),g.add(ae(.07,M(16747039),1.4,.5,.8,.8,1.1,.28)),[-1.15,1.15].forEach(J=>g.add(I(new Ie(.1,.12,.2,10),M(13226716,{metalness:.5}),J,0,.5))),g.position.set(-2.1,0,-1.6),h(g),h(I(new Ie(.05,.05,1,8),M(13226716,{metalness:.6}),-3.4,1.6,-2.7)),h(I(new Ie(.4,.15,.12,14),M(13226716,{metalness:.6}),-3,2.4,-2.6)),h(I(re(1.4,.9,.7,.1),j,2.5,.45,-2.45)),h(I(new Ie(.5,.4,.2,18),M(15398655),2.5,.95,-2.45)),h(I(new ii(.85,28),new je({color:13627135}),2.5,2.4,-2.85,!1)),h(I(new at(.88,.07,10,28),M(16748480),2.5,2.4,-2.83)),h(I(new Ie(.9,.9,.05,24),M(16757713),0,.03,.6)),h(I(re(.9,.1,.06,.02),M(13226716),.5,2,-2.85)),h(I(re(.7,1,.06,.04),M(16748480),.5,1.4,-2.8));let F=[];for(let J=0;J<9;J++){let se=ae(.1+Math.random()*.12,new je({color:16777215,transparent:!0,opacity:.45}),1,1,1,0,0,0);se.userData.o=Math.random()*7,F.push(se),h(se)}f.push(J=>{F.forEach((se,H)=>{let Z=(J*.18+se.userData.o)%1;se.position.set(-3+H%5*1.5+Math.sin(J+H)*.3,.5+Z*4,-1.5+H%3*.8)})});let V=new sn(16773340,.8,12);V.position.set(0,3.4,2),a.add(V);{let J=new Re;J.position.set(-2.8,3.5,-2.86),J.add(I(re(1.7,1.35,.1,.05),M(16777215),0,0,0,!1)),J.add(I(new pt(1.5,1.15),new je({map:Gi(new Date().getHours())}),0,0,.06,!1)),J.add(I(re(.06,1.2,.06,.02),M(16777215),0,0,.09,!1)),h(J)}zi(u,16773312,1.6,4.4,-1.9,2,-2.2,.42,.18);{let J=ki("sea",.7,.52);J.position.set(1.95,3.75,-2.86),h(J)}f.push(kr(u,-2.1,1,-1.6,10,{size:.5,rise:2,op:.45,speed:.16})),[-3.1,-1.2].forEach(J=>{h(I(new Ie(.07,.07,.22,10),M(16774108),J,1.08,-2.62)),h(ae(.035,new je({color:16765802}),1,1.5,1,J,1.26,-2.62)),f.push((se=>H=>{se.material.opacity=.7+Math.sin(H*7+J)*.12})(tl(u,16758106,.9,J,1.28,-2.58,.7)))});{h(I(new Ie(.01,.01,.9,4),M(8018490),3.9,3.7,-2.5,!1)),h(I(new Ie(.22,.14,.26,12),M(16758938),3.9,3.1,-2.5));for(let J=0;J<7;J++){let se=J/7*6.28;h(ae(.12,M(7327610),.7,2.2,.5,3.9+Math.cos(se)*.2,2.75-J%3*.12,-2.5+Math.sin(se)*.2))}}f.push(Hs(u,22,[-.5,.3,-.5,3.2,3,2],16774880,.05))}else if(e==="living"){D=[1.2,0,1.9],W=1.2,C.visible=!1;let j=M(13209429),b=M(16775146);h(I(re(3.4,.7,1.2,.25),M(16751288),1.2,.35,-1.5)),h(I(re(3.4,1,.4,.2),M(15892387),1.2,1.05,-2)),[-1.7,1.7].forEach(g=>h(I(re(.4,.85,1.2,.18),M(15892387),1.2+g,.55,-1.5))),h(I(re(.7,.55,.2,.1),M(16773304),.3,.95,-1.35)),h(I(re(.6,.5,.2,.1),M(12448732),2.2,.92,-1.35)),h(I(new Ie(2.2,2.2,.05,40),M(12448732),.8,.03,.9)),h(I(new Ie(1.6,1.6,.06,40),M(16774890),.8,.04,.9)),h(I(new Ie(.55,.55,.06,20),j,-1.8,.5,.4)),h(I(new Ie(.06,.06,.5,8),j,-1.8,.25,.4)),h(I(new Ie(.1,.07,.12,12),M(16777215),-1.8,.6,.4)),f.push(kr(u,-1.8,.72,.4,5,{size:.15,rise:.7,op:.5,speed:.22}));{let g=new Re;g.position.set(-2.4,3,-2.86),g.add(I(re(2.2,1.7,.1,.05),M(16777215),0,0,0,!1)),g.add(I(new pt(2,1.5),new je({map:Gi(new Date().getHours())}),0,0,.06,!1)),g.add(I(re(.07,1.5,.06,.02),M(16777215),0,0,.09,!1)),h(g)}zi(u,16773312,2,4.6,-1.2,2,-2.2,.42,.2);{let g=ki("hills",1.2,.9);g.position.set(2.4,3.1,-2.86),h(g)}h(I(new Ie(.38,.3,.55,16),M(16758938),4.2,.28,-1.8));for(let g=0;g<7;g++){let U=g/7*6.28;h(ae(.3,M(7327610),.5,1.5,.3,4.2+Math.cos(U)*.25,1.1+g%2*.2,-1.8+Math.sin(U)*.25))}h(I(new Ie(.04,.04,2,8),j,-3.8,1,-1.6)),h(I(new Ie(.3,.45,.5,20,1,!0),M(16773321,{emissive:16761178,emissiveIntensity:.9,side:Wt}),-3.8,2.2,-1.6)),f.push((g=>U=>{g.material.opacity=.6+Math.sin(U*1.5)*.06})(tl(u,16762490,2.8,-3.8,2.2,-1.6,.6))),f.push(Hs(u,34,[.6,.3,-.4,3.4,3.2,2.2],16773832,.05)),v.sofa=[1.2,-.55],v.phone=!0}else if(e==="entry"){D=[.4,0,1.4],W=1.2,C.visible=!1;let j=M(16777215,{map:p.material.map});j.map=Cn("#FFE2C2",["#FFEFD6","#F7D2A0","#FFDDB4"],240,{seed:41}),j.map.repeat.set(3,1.5),h(I(re(8,5.5,.3,.04),j,-4.9,2.75,-3,!1)),h(I(re(8,5.5,.3,.04),j,4.9,2.75,-3,!1)),h(I(re(1.8,2.9,.3,.04),j,0,4.05,-3,!1)),h(I(re(.18,2.7,.34,.03),M(16777215),-.98,1.35,-3)),h(I(re(.18,2.7,.34,.03),M(16777215),.98,1.35,-3)),h(I(re(2.14,.18,.34,.03),M(16777215),0,2.7,-3)),a.add(I(new pt(24,9),new je({map:Gi(new Date().getHours(),!0),fog:!1}),0,4.2,-9,!1));let b=I(new pt(26,7),M(10276730),0,.001,-6.5,!1);b.rotation.x=-Math.PI/2,h(b);let g=I(new pt(2.6,7),M(14931645),0,.01,-6.5,!1);g.rotation.x=-Math.PI/2,h(g);for(let V=0;V<9;V++)h(ae(.8,M([7323481,5942860,8703075][V%3]),1.2,.9,.9,-8+V*2,.8,-7.4));let U=new Re;U.position.set(-.9,0,-2.95);let F=I(re(1.8,2.6,.12,.05),M(16751300),.9,1.3,0);U.add(F),U.add(ae(.07,M(16765514,{metalness:.4,roughness:.4}),1,1,1,1.5,1.3,.1)),U.add(I(re(1.2,1.6,.04,.05),M(16757718),.9,1.5,.08)),h(U),v.hinge=U,h(I(re(1.9,.06,1.2,.02),M(16765162),0,.03,-1.9,!1));{let V=ki("hills",1.1,.8);V.position.set(-3,2.9,-2.82),h(V);let J=ki("dusk",.9,.7);J.position.set(3,2.9,-2.82),h(J)}v.entry=!0,zi(u,16773312,2.2,4.6,1,2,-2,-.42,.14),f.push(Hs(u,22,[0,.3,-1,3,3,2],16773832,.05))}else if(e==="dentist"){D=[1.5,0,1.5],W=1.15;let j=M(16777215,{roughness:.4}),b=M(5686976),g=M(12569046,{metalness:.5,roughness:.3});h(I(new Ie(.5,.6,.18,24),g,-1.7,.09,.4)),h(I(new Ie(.12,.12,.6,12),g,-1.7,.45,.4)),h(I(re(.95,.22,1.2,.1),b,-1.7,.85,.4));let U=h(I(re(.9,1.3,.2,.1),b,-1.7,1.35,-.3));U.rotation.x=-.55,h(I(re(.5,.3,.16,.06),b,-1.7,2,-.62)),[-1,1].forEach(k=>h(I(re(.1,.1,.8,.04),j,-1.7+k*.55,1.15,.35))),h(I(new Ie(.05,.05,2.2,8),g,-1.7,2.9,.1,!1));let F=h(I(re(1.4,.07,.07,.02),g,-1,3.9,.1,!1)),V=h(I(new Ie(.42,.3,.16,20),M(16774857,{emissive:16773800,emissiveIntensity:.9}),-.4,3.7,.2,!1)),J=new sn(16773824,.7,9);J.position.set(-.6,3.4,1),a.add(J),h(I(re(.7,.9,.5,.06),j,-3,.45,.4)),h(I(re(.6,.04,.4,.02),g,-3,.92,.4)),[0,1,2].forEach(k=>h(I(new Ie(.015,.015,.34,6),M([16740238,5686976,16769658][k],{metalness:.4}),-3.15+k*.12,1.1,.42)).rotation.z=.5-k*.4),h(I(new Ie(.6,.7,.3,24),j,3,.15,0));let se=new Re;se.add(ae(.52,j,1.15,1,.95,0,1.2,0)),[-1,1].forEach(k=>se.add(I(new Pt(.26,.6,16),j,k*.3,.62,0))),se.children.slice(-2).forEach(k=>{k.rotation.x=Math.PI}),[-1,1].forEach(k=>se.add(ae(.06,M(2759518),1,1.4,.5,k*.2,1.3,.48))),se.add(I(new at(.14,.025,8,16,Math.PI),M(2759518),0,1.1,.5)).rotation.z=Math.PI,[-1,1].forEach(k=>se.add(ae(.07,M(16748480),1.2,.7,.4,k*.34,1.12,.46))),se.position.set(3,.3,0),h(se),f.push(k=>{se.position.y=.3+Math.sin(k*1.6)*.06,se.rotation.y=Math.sin(k*.8)*.25}),h(I(re(2.4,1,.6,.08),M(16777215),.5,.5,-2.2)),h(I(re(2.5,.08,.7,.03),b,.5,1.02,-2.2));let H=I(new pt(1.5,1.9),new je({map:At(256,330,(k,_e,Le)=>{k.fillStyle="#fff",k.fillRect(0,0,_e,Le),k.fillStyle="#56c6c0",k.fillRect(0,0,_e,26),k.fillStyle="#2a1b5e",k.font="700 34px DynaPuff, Fredoka, sans-serif",k.textAlign="center",k.fillText("Brosse-toi",_e/2,80),k.fillText("les dents !",_e/2,120),k.font="120px serif",k.fillText("\u{1F9B7}",_e/2,250)})}),3.4,3.2,-2.85,!1);h(H),[[-3.6,-1.6,.5],[3.7,1.9,.42],[0,-1.5,.3]].forEach(k=>{let _e=ae(k[2],M(16747039),1.15,.85,1.1,k[0],k[2]*.8,k[1]);h(_e),h(I(new Ie(.04,.06,.18,8),M(4028970),k[0],k[2]*1.5,k[1])),[-1,1].forEach(Le=>h(I(new Pt(.07,.12,3),M(16773800,{emissive:16765514,emissiveIntensity:1}),k[0]+Le*k[2]*.35,k[2]*.9,k[1]+k[2]*.95)))});let Z=new Re;Z.add(ae(.38,M(16777215,{transparent:!0,opacity:.85}),1,1.2,1,0,0,0)),[-1,1].forEach(k=>Z.add(ae(.05,M(2759518),1,1.4,.5,k*.13,.08,.34))),Z.add(ae(.06,M(2759518),1,1.2,.5,0,-.08,.35)),Z.position.set(-3.7,2.6,-.6),h(Z),f.push(k=>{Z.position.y=2.6+Math.sin(k*1.3)*.25,Z.rotation.y=Math.sin(k*.7)*.4});let xe=[];for(let k=0;k<4;k++){let _e=new Re;[-1,1].forEach(Le=>{let Be=ae(.14,M(1906240),1.6,.4,.2,Le*.16,0,0);Be.userData.sd=Le,_e.add(Be)}),_e.add(ae(.07,M(1906240),1,1,1,0,0,0)),_e.userData.i=k,xe.push(_e),h(_e)}f.push(k=>{xe.forEach((_e,Le)=>{let Be=k*.5+Le*1.6;_e.position.set(Math.sin(Be)*3.2,3.3+Math.sin(k*2+Le)*.3,-1.2+Math.cos(Be)*1),_e.rotation.y=-Be,_e.children.forEach(We=>{We.userData.sd&&(We.rotation.z=We.userData.sd*Math.sin(k*14+Le)*.7)})})});let Ee=new sn(16757611,.7,12);Ee.position.set(2,2.5,2.5),a.add(Ee)}else{let U=function(H,Z,xe,Ee){let k=g;k.fillStyle="#12082c",k.fillRect(0,0,512,256),k.textAlign="center",k.textBaseline="middle",k.font="700 22px DynaPuff, Fredoka, sans-serif",k.fillStyle="#7df9ff",k.fillText(Ee||"\u266A Karaok\xE9 \u266A",256,28);let _e=38;if(H){for(k.font="700 38px DynaPuff, Fredoka, sans-serif";k.measureText(H).width>470&&_e>18;)_e-=2,k.font="700 "+_e+"px DynaPuff, Fredoka, sans-serif";k.fillStyle="#4b3a8f",k.fillText(H,256,120),k.save(),k.beginPath(),k.rect(256-k.measureText(H).width/2-4,80,(k.measureText(H).width+8)*Math.max(0,Math.min(1,xe||0)),80),k.clip(),k.fillStyle="#ff6fc8",k.fillText(H,256,120),k.restore()}Z&&(k.font="600 26px DynaPuff, Fredoka, sans-serif",k.fillStyle="#9d8cff",k.fillText(Z,256,200)),j.needsUpdate=!0};D=[0,.34,.6],W=1.3,h(I(re(5.6,.34,2.8,.1),M(5980118,{emissive:3810160,emissiveIntensity:.5}),0,.17,.6,!1)),h(I(re(5.7,.05,2.9,.02),new je({color:16740296}),0,.36,.6,!1)).scale.set(1,1,1),[-1,1].forEach(H=>{h(I(re(1.4,5,.5,.15),M(14697851,{emissive:11545184,emissiveIntensity:.3}),H*3.3,2.5,-1.8)),h(I(re(1,1.7,.8,.08),M(2364487),H*2.9,.85,-1.2)),h(ae(.3,M(4468858),1,1,.5,H*2.9,.65,-.79)),h(ae(.16,M(4468858),1,1,.5,H*2.9,1.3,-.79))});let j=At(512,256,(H,Z,xe)=>{H.fillStyle="#12082c",H.fillRect(0,0,Z,xe)}),b=I(new pt(3.6,1.8),new je({map:j}),0,3.1,-2.8,!1);h(b),h(I(re(3.8,2,.08,.05),new je({color:8255999}),0,3.1,-2.9,!1));let g=j.image.getContext("2d");U("","",0,"\u266A Choisis une chanson \u266A"),c.userData.lyrics=U;let F=I(new Sr(.5,1),new zt({color:16777215,metalness:1,roughness:.15,flatShading:!0,emissive:10325247,emissiveIntensity:.5}),0,4.4,-.2,!1);h(F),h(I(new Ie(.01,.01,1.2,4),M(11184810),0,5.2,-.2,!1)),f.push(H=>{F.rotation.y=H*.8}),[16740296,8255999,16769658].forEach((H,Z)=>{let xe=I(new Pt(.9,4.2,20,1,!0),new je({color:H,transparent:!0,opacity:.13,side:Wt,depthWrite:!1}),(Z-1)*2.2,2.4,-.4,!1);xe.position.y=2.6,h(xe),f.push(Ee=>{xe.rotation.z=Math.sin(Ee*.9+Z*2)*.35,xe.rotation.x=Math.cos(Ee*.7+Z)*.15})});let J=[];for(let H=0;H<14;H++){let Z=I(re(.2,1,.12,.04),new je({color:[16740296,8255999,16769658][H%3]}),-2.7+H*.42,.55,-1.6,!1);J.push(Z),h(Z)}f.push(H=>{J.forEach((Z,xe)=>{let Ee=O?.4+Math.abs(Math.sin(H*6+xe*.9))*1.6:.25+Math.abs(Math.sin(H*1.2+xe))*.15;Z.scale.y=Ee,Z.position.y=.4+Ee*.5})}),h(I(new Ie(.02,.02,1,6),M(13421772,{metalness:.6}),.9,.9,1.2,!1)),h(ae(.07,M(2759518),1,1.3,1,.9,1.45,1.2));let se=new sn(13081599,1.2,14);se.position.set(0,3,2),a.add(se)}function E(){m&&m.dispose(),m=$t(t()),m.root.scale.setScalar(W),m.root.position.set(D[0]*(A?.55:1),D[1],D[2]),m.face(e==="bakery"?.45:0),m.fx=(j,b)=>l.emit(j,b,m.root.position,W),a.add(m.root),m.setEmotion(O?"happy":"neutral")}E();function N(j,b){if(T=b,R&&(u.remove(R),R=null),e==="deco"&&j==="decor"&&b&&Wi[b]){let g=Wi[b](),U=new nn().setFromObject(g),F=U.getSize(new q),V=Math.max(.3,Math.min(1,1.9/Math.max(F.x,F.y,F.z,.1)));g.scale.setScalar(V);let J=new nn().setFromObject(g);g.position.set(1.5-(J.min.x+J.max.x)/2,.2-J.min.y,1.3-(J.min.z+J.max.z)/2),u.add(g),R=g}}function z(){let j=i.clientWidth||320,b=i.clientHeight||300;s.setSize(j,b,!1),r.style.width="100%",r.style.height="100%",c.aspect=j/b,c.fov=j/b<1?44:34,B=(j/b<.8?9.6:6.6)*({garden:1.55,kitchen:1.12,bath:1.2}[e]||1),c.position.z=B,c.position.y=e==="garden"?5.6:1.9,A=j/b<.8,m&&!P&&(m.root.position.x=D[0]*(A?.55:1)),c.updateProjectionMatrix()}new ResizeObserver(z).observe(i),z(),r.style.touchAction="none";let le=new Ni,G=new Ne;r.addEventListener("pointerup",j=>{if(!n.onPick)return;let b=r.getBoundingClientRect();G.set((j.clientX-b.left)/b.width*2-1,-((j.clientY-b.top)/b.height)*2+1),le.setFromCamera(G,c);let g=le.intersectObjects(u.children,!0)[0];if(!g)return;let U=g.object;for(;U&&!(U.userData&&U.userData.pick);)U=U.parent;U&&U.userData.pick&&n.onPick(U.userData.pick)}),r.addEventListener("pointerup",()=>{m&&(m.hop(4.6),m.setEmotion("happy"),l.emit("heart",4,m.root.position,W),setTimeout(()=>m&&m.setEmotion(O?"happy":"neutral"),1400))});let fe=!1,ne=null,ye=[.55,1.05,.55],Ce=0,Ue=null,ie=null,de=!1,we=null,te=(j,b)=>{let g=document.createElement("canvas");g.width=g.height=128;let U=g.getContext("2d");U.font='92px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',U.textAlign="center",U.textBaseline="middle",U.fillText(j,64,72);let F=new Ii(g);F.colorSpace=kt;let V=new Hn(new En({map:F,transparent:!0,depthTest:!1}));return V.scale.setScalar(b||.6),V.renderOrder=6,a.add(V),V},ue=j=>{j&&(a.remove(j),j.material&&j.material.dispose&&j.material.dispose())},Fe=()=>D[0]*(A?.55:1),Me={walk:(j,b,g)=>U=>{let F=m.root.position,V=j-F.x,J=b-F.z,se=Math.hypot(V,J);if(se<.06)return fe=!1,m.face(g||0),!0;fe=!0;let H=Math.min(se,2.1*U);return F.x+=V/se*H,F.z+=J/se*H,m.face(Math.atan2(V,J)*.7),!1},wait:(j,b)=>{let g=0;return U=>(g+=U,b&&b(Math.min(1,g/j),U,g),g>=j)},call:j=>()=>(j(),!0),glide:(j,b,g,U,F)=>{let V=0,J,se,H;return Z=>{let xe=m.root.position;V===0&&(J=xe.x,se=m.baseY,H=xe.z),V+=Z;let Ee=Math.min(1,V/U),k=Ee*Ee*(3-2*Ee);return xe.x=J+(j-J)*k,xe.z=H+(g-H)*k,m.baseY=se+(b-se)*k+Math.sin(Ee*Math.PI)*(F||0),Ee>=1}}},ge=(j,b)=>{ne&&ne!==j&&ue(ne),ne=j,b&&(ye=b)};function me(){let j=P;if(P=null,fe=!1,m.baseY=0,m.roll=0,m.setTalking(!1),ne&&(ue(ne),ne=null),j&&j.done)try{j.done()}catch{}}function Se(j,b){P&&me(),P={steps:j,i:0,done:b}}let Te=j=>[-2.3+j%3*1.7+.88,-1.55+Math.floor(j/3)*1.3+.3],Oe=j=>[-2.3+j%3*1.7,.3,-1.55+Math.floor(j/3)*1.3],ee=[-2,1.4],oe=[-.95,2],ve={bath(j,b){Se([Me.walk(-.5,-.4),Me.call(()=>m.hop(4.5)),Me.wait(.5),Me.glide(-2,.55,-1.45,.9,.7),Me.call(()=>{m.setEmotion("happy"),ge(te("\u{1F9FD}",.5),[.5,.95,.4]),l.emit("bubble",4,m.root.position,W)}),Me.wait(3.8,(g,U,F)=>{m.roll=Math.sin(F*5)*.14,m.face(Math.sin(F*2.5)*.45),m.setTalking(Math.sin(F*9)>0),ye=[.5+Math.sin(F*8)*.18,.95+Math.cos(F*8)*.1,.4],Math.random()<U*6&&l.emit("bubble",1,m.root.position,W)}),Me.call(()=>{m.roll=0,m.setTalking(!1),ue(ne),ne=null,l.emit("star",6,m.root.position,W),m.hop(4.5)}),Me.wait(.4),Me.glide(-.6,0,-.4,.8,.8),Me.walk(Fe(),D[2]),Me.call(()=>{m.setEmotion("love"),l.emit("heart",5,m.root.position,W),m.hop(3.6)})],b)},plant(j,b){let g=j.i,U=Te(g),F=Oe(g);Se([Me.walk(U[0],U[1],-.4),Me.call(()=>{ge(te("\u{1F330}",.4),[.5,.9,.5]),m.setEmotion("happy")}),Me.wait(.7,V=>{m.baseY=-.1*Math.sin(V*Math.PI),m.roll=.12*Math.sin(V*Math.PI)}),Me.call(()=>{ue(ne),ne=null,l.emit("drop",3,{x:F[0],y:.4,z:F[2]},1),m.baseY=0,m.roll=0,m.hop(3.2),b&&b("planted")}),Me.wait(.6),Me.walk(Fe(),D[2])],null)},harvest(j,b){let g=j.i,U=Te(g),F=Oe(g),V=null;Se([Me.walk(U[0],U[1],-.4),Me.call(()=>{m.setEmotion("happy"),V=te(j.e||"\u{1F345}",.5),V.position.set(F[0],.5,F[2])}),Me.wait(.9,J=>{V.position.set(F[0]+(m.root.position.x+.5*W-F[0])*J,.5+J*.5+Math.sin(J*Math.PI)*.5,F[2]+(m.root.position.z+.5*W-F[2])*J),V.scale.setScalar(.5+J*.2),m.baseY=.1*Math.sin(J*Math.PI)}),Me.call(()=>{ue(V),V=null,ge(te(j.e||"\u{1F345}",.7),[.2,1.7,.3]),l.emit("star",6,m.root.position,W),l.emit("heart",3,m.root.position,W),m.hop(5),b&&b("harvested")}),Me.wait(1),Me.walk(Fe(),D[2])],()=>{V&&ue(V)})},water(j,b){let g=j&&j.list||[],U=[];g.forEach(F=>{let V=Te(F),J=Oe(F);U.push(Me.walk(V[0],V[1],-.4)),U.push(Me.call(()=>{ge(te("\u{1F6BF}",.55),[.55,1,.5]),m.setEmotion("happy")})),U.push(Me.wait(1,(se,H)=>{m.roll=-.2*Math.sin(Math.min(1,se*3)*Math.PI/2),Math.random()<H*14&&l.emit("drop",1,{x:J[0]+(Math.random()-.5)*.8,y:.9,z:J[2]+(Math.random()-.5)*.5},1)})),U.push(Me.call(()=>{m.roll=0}))}),U.push(Me.call(()=>{m.hop(4)})),U.push(Me.walk(Fe(),D[2])),Se(U,b)},cook(j,b){Ue&&(ue(Ue),Ue=null),Se([Me.walk(2.9,-1.2,-.5),Me.call(()=>{ge(te(j.ing||"\u{1F96C}",.5),[.5,1,.5]),m.setEmotion("happy"),m.hop(3)}),Me.wait(.9),Me.walk(.2,-1.15,.45),Me.call(()=>{ge(te("\u{1F944}",.55),[.45,1,.35])}),Me.wait(3.2,(g,U,F)=>{m.face(Math.sin(F*3)*.45),m.setTalking(Math.sin(F*6)>.4),ye=[.45+Math.sin(F*7)*.12,1,.35+Math.cos(F*7)*.1],Math.random()<U*3&&m.hop(2),Math.random()<U*4&&l.emit("star",1,m.root.position,W)}),Me.call(()=>{m.setTalking(!1),ge(te(j.e||"\u{1F372}",.7),[.2,1.35,.55]),m.hop(4.6),l.emit("heart",4,m.root.position,W)}),Me.wait(.6),Me.walk(oe[0],oe[1]-.3,.3),Me.call(()=>{ue(ne),ne=null,Ue=te(j.e||"\u{1F372}",.75),Ue.position.set(ee[0],1.2,ee[1]),m.hop(3)})],b)},eat(j,b){let g=[];Ue||g.push(Me.call(()=>{Ue=te(j.e||"\u{1F372}",.75),Ue.position.set(ee[0],1.2,ee[1]),l.emit("star",5,{x:ee[0],y:1.2,z:ee[1]},1)})),g.push(Me.walk(oe[0],oe[1],.35)),g.push(Me.call(()=>{m.setEmotion("happy")}));for(let U=0;U<4;U++)g.push(Me.wait(.9,(F,V,J)=>{m.setTalking(Math.sin(J*14)>0),m.baseY=.02+Math.abs(Math.sin(J*7))*.05,Ue&&F>.8&&Ue.scale.setScalar(Math.max(.15,.75-(U+F)*.17))}));g.push(Me.call(()=>{m.setTalking(!1),m.baseY=0,ue(Ue),Ue=null,m.setEmotion("love"),l.emit("heart",8,m.root.position,W),m.hop(5)})),g.push(Me.wait(1.1)),Se(g,b)},order(j,b){let g=v.sofa||[1.2,-.55],U=null;Se([Me.walk(g[0],g[1]+1),Me.glide(g[0],.45,g[1]+.3,.6,.3),Me.call(()=>{ge(te("\u{1F4F1}",.55),[0,1,.6]),m.setEmotion("happy")}),Me.wait(2.6,(F,V,J)=>{m.face(Math.sin(J*1.2)*.2),ye=[0,1+Math.sin(J*12)*.03,.6],Math.random()<V*3.5&&(m.hop(1.6),l.emit("star",1,{x:m.root.position.x,y:m.root.position.y+1.2,z:m.root.position.z+.5},1))}),Me.call(()=>{m.setEmotion("wow"),m.hop(5),U=te("\u{1F4E6}",.7),U.position.set(m.root.position.x,2.7,m.root.position.z+.3),l.emit("heart",5,m.root.position,W)}),Me.wait(1.4,F=>{U&&(U.position.y=2.7+F*.5,U.material.opacity=1-F*F)}),Me.call(()=>{ue(U),U=null}),Me.glide(g[0]-.2,0,g[1]+1.4,.6,.4)],()=>{U&&ue(U),b&&b()})},receive(j,b){let g=v.hinge;if(!g){b&&b();return}ie=$t({mika:!0,color:16757575,ears:"none",eyes:"happy",topper:"pom",acc:["hat"],shape:"round",tail:"none"}),ie.root.scale.setScalar(1.2),ie.root.position.set(0,0,-5.2),ie.face(0),a.add(ie.root),we=new Re,we.add(I(re(.6,.5,.5,.05),M(13212260),0,0,0)),we.add(I(re(.62,.08,.12,.02),M(16773320),0,.12,0,!1)),we.visible=!1,a.add(we);let U=(se,H,Z)=>xe=>{let Ee=ie.root.position,k=se-Ee.x,_e=H-Ee.z,Le=Math.hypot(k,_e);if(Le<.06)return de=!1,ie.face(Z||0),!0;de=!0;let Be=Math.min(Le,1.8*xe);return Ee.x+=k/Le*Be,Ee.z+=_e/Le*Be,ie.face(Math.atan2(k,_e)*.7),!1},F=0,V=(se,H)=>{let Z=0,xe=null;return Ee=>{xe===null&&(xe=F),Z+=Ee;let k=Math.min(1,Z/H);return F=xe+(se-xe)*k*k*(3-2*k),g.rotation.y=-F*1.75,k>=1}},J="drv";v.pkgTick=()=>{if(!we)return;let se=J==="me"?m:ie;se&&we.position.set(se.root.position.x+.1,se.root.position.y+.8,se.root.position.z+.55)},Se([Me.call(()=>{l.emit("star",4,{x:0,y:2.6,z:-2.4},1),m.hop(4),m.setEmotion("wow")}),Me.wait(.5),Me.walk(-.95,-1.35,.4),V(1,1),Me.call(()=>{we.visible=!0,J="drv",m.setEmotion("happy")}),U(.2,-2.1,-.5),Me.call(()=>{ie.hop(4)}),Me.wait(.7),Me.call(()=>{J="me",m.hop(5),l.emit("heart",6,m.root.position,W),m.setEmotion("love")}),Me.wait(.8),Me.call(()=>{ie.hop(4)}),Me.wait(.6),U(0,-3.6,0),U(0,-6.4,0),V(0,.9),Me.walk(Fe(),D[2])],()=>{J="",we&&(a.remove(we),we=null),ie&&(a.remove(ie.root),ie.dispose(),ie=null),v.pkgTick=null,b&&b()})}},Pe=new kn,X=!0;"IntersectionObserver"in window&&new IntersectionObserver(j=>{X=j[0].isIntersecting},{threshold:.01}).observe(i);function it(){if(!$)return;if(requestAnimationFrame(it),!X||document.hidden){Pe.getDelta();return}let j=Math.min(.05,Pe.getDelta());if(Y+=j,Ce+=((P&&A?Math.max(-2.6,Math.min(2.6,m.root.position.x*.8)):0)-Ce)*Math.min(1,j*2.5),c.position.x=Ce+Math.sin(Y*.25)*.35,c.lookAt(Ce+Math.sin(Y*.25)*.1,e==="garden"?0:1.25,e==="garden"?-.5:0),f.forEach(b=>b(Y)),P){let b=P.steps[P.i];b?b(j)&&P.i++:me()}ne&&ne.position.set(m.root.position.x+ye[0]*W,m.root.position.y+ye[1]*W,m.root.position.z+ye[2]*W),ie&&ie.update(j,Y,de,!1),v.pkgTick&&v.pkgTick(),R&&(R.rotation.y+=j*.5),O&&m?(m.setTalking(Math.sin(Y*9)>-.2),m.face(Math.sin(Y*2)*.35),m.st.y<.02&&Math.random()<j*1.2&&m.hop(2.6),Math.random()<j*2&&l.emit("star",1,m.root.position,W)):m&&!P&&(m.setTalking(!1),e!=="bakery"&&m.face(Math.sin(Y*.6)*.3)),m&&m.update(j,Y,fe,!1),l.update(j),Math.random()<j*.6&&l.emit("star",1,new q((Math.random()-.5)*6,1+Math.random()*2,.5),1),s.render(a,c)}return it(),{act(j,b,g){ve[j]?ve[j](b||{},g):g&&g()},busy(){return!!P},cancel(){P&&me()},setItem:N,setPlots(j){w.set(j)},rebuild(){E(),m.hop(3.6)},bubbles(){if(m){m.setEmotion("happy"),m.hop(4),l.emit("heart",6,m.root.position,W);for(let j=0;j<5;j++)setTimeout(()=>m&&l.emit("star",2,m.root.position,W),j*350)}},emote(j){m&&(m.setEmotion(j),m.hop(4))},sing(j){O=!!j,m&&m.setEmotion(O?"happy":"neutral")},lyrics(j,b,g,U){c.userData.lyrics&&c.userData.lyrics(j,b,g,U)},destroy(){$=!1,P=null,ie&&ie.dispose(),m&&m.dispose(),s.dispose(),s.forceContextLoss&&s.forceContextLoss(),r.parentNode&&r.parentNode.removeChild(r)}}}var Bs=null,Qo=null,el=null,Uc={};function mu(i,e){if(Uc[i])return Uc[i];try{Bs||(Bs=new Xn({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),Bs.setPixelRatio(1),Bs.setSize(256,256,!1),Qo=new Sn,ks(Qo),el=new Rt(26,1,.1,30),el.position.set(0,1.25,4.6),el.lookAt(0,.78,0));let t=e();t.root.scale.setScalar(1.2),t.face(-.25),t.update(.016,.3,!1,!0),Qo.add(t.root),Bs.render(Qo,el);let n=Bs.domElement.toDataURL("image/png");return t.dispose(),Uc[i]=n,n}catch{return""}}function Vx(i,e){return mu("a"+i+(e||""),()=>{let t=$t(Vi(i));return e&&t.setEmotion(e),t})}function Wx(i,e){return mu("m"+(i||"")+(e||""),()=>{let t=$t({mika:!0,acc:i?[i]:[]});return e&&t.setEmotion(e),t})}return Ru(Xx);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
