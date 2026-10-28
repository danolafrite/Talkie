var Mika3DMod=(()=>{var Fo=Object.defineProperty;var Zu=Object.getOwnPropertyDescriptor;var Ju=Object.getOwnPropertyNames;var $u=Object.prototype.hasOwnProperty;var Ku=(i,e)=>{for(var t in e)Fo(i,t,{get:e[t],enumerable:!0})},ju=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Ju(e))!$u.call(i,s)&&s!==t&&Fo(i,s,{get:()=>e[s],enumerable:!(n=Zu(e,s))||n.enumerable});return i};var Qu=i=>ju(Fo({},"__esModule",{value:!0}),i);var mx={};Ku(mx,{AV_ACC:()=>Du,AV_COLORS:()=>Pu,AV_EARS:()=>Iu,AV_FACE:()=>Lu,AV_SHAPE:()=>Nu,AV_TAIL:()=>Uu,DECOR_IDS:()=>nx,avatarOpts:()=>Ui,avatarPng:()=>dx,createCharacter:()=>Kt,init:()=>rx,initClass:()=>lx,initInterior:()=>fx,initPlaza:()=>cx,initPreview:()=>ax,initStage:()=>ox,mikaPng:()=>px,normAv:()=>Fu});var rh=0,Sl=1,ah=2;var Pi=1,oh=2,ys=3,di=0,Ht=1,en=2,Bn=0,vs=1,El=2,Tl=3,wl=4,lh=5;var Ii=100,ch=101,hh=102,uh=103,fh=104,dh=200,ph=201,mh=202,gh=203,Al=204,Rl=205,xh=206,_h=207,yh=208,vh=209,Mh=210,bh=211,Sh=212,Eh=213,Th=214,Kr=0,jr=1,Qr=2,is=3,ea=4,ta=5,na=6,ia=7,Cl=0,wh=1,Ah=2,Sn=0,Pl=1,Il=2,Ll=3,Dl=4,Nl=5,Ul=6,Fl=7;var Ol=300,pi=301,Li=302,Ua=303,Fa=304,ur=306,an=1e3,Ln=1001,sa=1002,Ot=1003,Rh=1004;var fr=1005;var Bt=1006,Oa=1007;var mi=1008;var tn=1009,Bl=1010,zl=1011,Ms=1012,Ba=1013,En=1014,Tn=1015,wn=1016,za=1017,ka=1018,bs=1020,kl=35902,Hl=35899,Gl=1021,Vl=1022,pn=1023,Dn=1026,gi=1027,Wl=1028,Ha=1029,xi=1030,Ga=1031;var Va=1033,dr=33776,pr=33777,mr=33778,gr=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,Za=36196,Ja=37492,$a=37496,Ka=37488,ja=37489,xr=37490,Qa=37491,eo=37808,to=37809,no=37810,io=37811,so=37812,ro=37813,ao=37814,oo=37815,lo=37816,co=37817,ho=37818,uo=37819,fo=37820,po=37821,mo=36492,go=36494,xo=36495,_o=36283,yo=36284,_r=36285,vo=36286;var ks=2300,ra=2301,Jr=2302,hl=2303,ul=2400,fl=2401,dl=2402;var Ch=3200;var Mo=0,Ph=1,Qn="",Xt="srgb",Hs="srgb-linear",Gs="linear",mt="srgb";var $r=7680;var Ih=519,Lh=512,Dh=513,Nh=514,bo=515,Uh=516,Fh=517,So=518,Oh=519,Xl=35044;var ql="300 es",vn=2e3,ss=2001;function ef(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function tf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bh(){let i=Vs("canvas");return i.style.display="block",i}var Rc={},rs=null;function Ws(...i){let e="THREE."+i.shift();rs?rs("log",e,...i):console.log(e,...i)}function zh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $e(...i){i=zh(i);let e="THREE."+i.shift();if(rs)rs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Je(...i){i=zh(i);let e="THREE."+i.shift();if(rs)rs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ti(...i){let e=i.join(" ");e in Rc||(Rc[e]=!0,$e(...i))}function kh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Hh={[Kr]:jr,[Qr]:na,[ea]:ia,[is]:ta,[jr]:Kr,[na]:Qr,[ia]:ea,[ta]:is},Nn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Oo=Math.PI/180,aa=180/Math.PI;function Jn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function nf(i,e){return(i%e+e)%e}function Bo(i,e,t){return(1-t)*i+t*e}function In(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ee=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Un=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],f=n[s+2],h=n[s+3],u=r[a+0],d=r[a+1],x=r[a+2],g=r[a+3];if(h!==g||l!==u||c!==d||f!==x){let m=l*u+c*d+f*x+h*g;m<0&&(u=-u,d=-d,x=-x,g=-g,m=-m);let p=1-o;if(m<.9995){let w=Math.acos(m),M=Math.sin(w);p=Math.sin(p*w)/M,o=Math.sin(o*w)/M,l=l*p+u*o,c=c*p+d*o,f=f*p+x*o,h=h*p+g*o}else{l=l*p+u*o,c=c*p+d*o,f=f*p+x*o,h=h*p+g*o;let w=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=w,c*=w,f*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],f=n[s+3],h=r[a],u=r[a+1],d=r[a+2],x=r[a+3];return e[t]=o*x+f*h+l*d-c*u,e[t+1]=l*x+f*u+c*h-o*d,e[t+2]=c*x+f*d+o*u-l*h,e[t+3]=f*x-o*h-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(s/2),h=o(r/2),u=l(n/2),d=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*f*h+c*d*x,this._y=c*d*h-u*f*x,this._z=c*f*x+u*d*h,this._w=c*f*h-u*d*x;break;case"YXZ":this._x=u*f*h+c*d*x,this._y=c*d*h-u*f*x,this._z=c*f*x-u*d*h,this._w=c*f*h+u*d*x;break;case"ZXY":this._x=u*f*h-c*d*x,this._y=c*d*h+u*f*x,this._z=c*f*x+u*d*h,this._w=c*f*h-u*d*x;break;case"ZYX":this._x=u*f*h-c*d*x,this._y=c*d*h+u*f*x,this._z=c*f*x-u*d*h,this._w=c*f*h+u*d*x;break;case"YZX":this._x=u*f*h+c*d*x,this._y=c*d*h+u*f*x,this._z=c*f*x-u*d*h,this._w=c*f*h-u*d*x;break;case"XZY":this._x=u*f*h-c*d*x,this._y=c*d*h-u*f*x,this._z=c*f*x+u*d*h,this._w=c*f*h+u*d*x;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],h=t[10],u=n+o+h;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>h){let d=2*Math.sqrt(1+n-o-h);this._w=(f-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>h){let d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+h-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+a*o+s*c-r*l,this._y=s*f+a*l+r*o-n*c,this._z=r*f+a*c+n*l-s*o,this._w=a*f-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),f=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*f,this.y=n+l*f+o*c-r*h,this.z=s+l*h+r*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zo.copy(this).projectOnVector(e),this.sub(zo)}reflect(e){return this.sub(zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zo=new V,Cc=new Un,Qe=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let f=this.elements;return f[0]=e,f[1]=s,f[2]=o,f[3]=t,f[4]=r,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],h=n[7],u=n[2],d=n[5],x=n[8],g=s[0],m=s[3],p=s[6],w=s[1],M=s[4],v=s[7],C=s[2],b=s[5],R=s[8];return r[0]=a*g+o*w+l*C,r[3]=a*m+o*M+l*b,r[6]=a*p+o*v+l*R,r[1]=c*g+f*w+h*C,r[4]=c*m+f*M+h*b,r[7]=c*p+f*v+h*R,r[2]=u*g+d*w+x*C,r[5]=u*m+d*M+x*b,r[8]=u*p+d*v+x*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-n*r*f+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,u=o*l-f*r,d=c*r-a*l,x=t*h+n*u+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return e[0]=h*g,e[1]=(s*c-f*n)*g,e[2]=(o*n-s*a)*g,e[3]=u*g,e[4]=(f*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ti("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ko.makeScale(e,t)),this}rotate(e){return Ti("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ko.makeRotation(-e)),this}translate(e,t){return Ti("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ko.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ko=new Qe,Pc=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ic=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sf(){let i={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===mt&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qn?Gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ti("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ti("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hs]:{primaries:e,whitePoint:n,transfer:Gs,toXYZ:Pc,fromXYZ:Ic,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:Pc,fromXYZ:Ic,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}var lt=sf();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zi,oa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zi===void 0&&(zi=Vs("canvas")),zi.width=e.width,zi.height=e.height;let s=zi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=zi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=$n(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},rf=0,as=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ho(s[a].image)):r.push(Ho(s[a]))}else r=Ho(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ho(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?oa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}var af=0,Go=new V,Jt=class i extends Nn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ln,s=Ln,r=Bt,a=mi,o=pn,l=tn,c=i.DEFAULT_ANISOTROPY,f=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Jn(),this.name="",this.source=new as(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Go).x}get height(){return this.source.getSize(Go).y}get depth(){return this.source.getSize(Go).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ol)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case an:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case an:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Ol;Jt.DEFAULT_ANISOTROPY=1;var Tt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],f=l[4],h=l[8],u=l[1],d=l[5],x=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(d+1)/2,C=(p+1)/2,b=(f+u)/4,R=(h+g)/4,_=(x+m)/4;return M>v&&M>C?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=b/n,r=R/n):v>C?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=_/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=R/r,s=_/r),this.set(n,s,r,t),this}let w=Math.sqrt((m-x)*(m-x)+(h-g)*(h-g)+(u-f)*(u-f));return Math.abs(w)<.001&&(w=1),this.x=(m-x)/w,this.y=(h-g)/w,this.z=(u-f)/w,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},la=class extends Nn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Jt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new as(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends la{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xs=class extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ca=class extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var bt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,f,h,u,d,x,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,f,h,u,d,x,g,m)}set(e,t,n,s,r,a,o,l,c,f,h,u,d,x,g,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=f,p[10]=h,p[14]=u,p[3]=d,p[7]=x,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),a=1/ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let u=a*f,d=a*h,x=o*f,g=o*h;t[0]=l*f,t[4]=-l*h,t[8]=c,t[1]=d+x*c,t[5]=u-g*c,t[9]=-o*l,t[2]=g-u*c,t[6]=x+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*f,d=l*h,x=c*f,g=c*h;t[0]=u+g*o,t[4]=x*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*f,t[9]=-o,t[2]=d*o-x,t[6]=g+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*f,d=l*h,x=c*f,g=c*h;t[0]=u-g*o,t[4]=-a*h,t[8]=x+d*o,t[1]=d+x*o,t[5]=a*f,t[9]=g-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*f,d=a*h,x=o*f,g=o*h;t[0]=l*f,t[4]=x*c-d,t[8]=u*c+g,t[1]=l*h,t[5]=g*c+u,t[9]=d*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,x=o*l,g=o*c;t[0]=l*f,t[4]=g-u*h,t[8]=x*h+d,t[1]=h,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=d*h+x,t[10]=u-g*h}else if(e.order==="XZY"){let u=a*l,d=a*c,x=o*l,g=o*c;t[0]=l*f,t[4]=-h,t[8]=c*f,t[1]=u*h+g,t[5]=a*f,t[9]=d*h-x,t[2]=x*h-d,t[6]=o*f,t[10]=g*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(of,e,lf)}lookAt(e,t,n){let s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ii.crossVectors(n,nn),ii.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ii.crossVectors(n,nn)),ii.normalize(),Tr.crossVectors(nn,ii),s[0]=ii.x,s[4]=Tr.x,s[8]=nn.x,s[1]=ii.y,s[5]=Tr.y,s[9]=nn.y,s[2]=ii.z,s[6]=Tr.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],h=n[5],u=n[9],d=n[13],x=n[2],g=n[6],m=n[10],p=n[14],w=n[3],M=n[7],v=n[11],C=n[15],b=s[0],R=s[4],_=s[8],P=s[12],F=s[1],H=s[5],Z=s[9],U=s[13],T=s[2],L=s[6],q=s[10],E=s[14],A=s[3],I=s[7],K=s[11],O=s[15];return r[0]=a*b+o*F+l*T+c*A,r[4]=a*R+o*H+l*L+c*I,r[8]=a*_+o*Z+l*q+c*K,r[12]=a*P+o*U+l*E+c*O,r[1]=f*b+h*F+u*T+d*A,r[5]=f*R+h*H+u*L+d*I,r[9]=f*_+h*Z+u*q+d*K,r[13]=f*P+h*U+u*E+d*O,r[2]=x*b+g*F+m*T+p*A,r[6]=x*R+g*H+m*L+p*I,r[10]=x*_+g*Z+m*q+p*K,r[14]=x*P+g*U+m*E+p*O,r[3]=w*b+M*F+v*T+C*A,r[7]=w*R+M*H+v*L+C*I,r[11]=w*_+M*Z+v*q+C*K,r[15]=w*P+M*U+v*E+C*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],u=e[10],d=e[14],x=e[3],g=e[7],m=e[11],p=e[15],w=l*d-c*u,M=o*d-c*h,v=o*u-l*h,C=a*d-c*f,b=a*u-l*f,R=a*h-o*f;return t*(g*w-m*M+p*v)-n*(x*w-m*C+p*b)+s*(x*M-g*C+p*R)-r*(x*v-g*b+m*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return t*(a*f-o*c)-n*(r*f-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],u=e[10],d=e[11],x=e[12],g=e[13],m=e[14],p=e[15],w=t*o-n*a,M=t*l-s*a,v=t*c-r*a,C=n*l-s*o,b=n*c-r*o,R=s*c-r*l,_=f*g-h*x,P=f*m-u*x,F=f*p-d*x,H=h*m-u*g,Z=h*p-d*g,U=u*p-d*m,T=w*U-M*Z+v*H+C*F-b*P+R*_;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/T;return e[0]=(o*U-l*Z+c*H)*L,e[1]=(s*Z-n*U-r*H)*L,e[2]=(g*R-m*b+p*C)*L,e[3]=(u*b-h*R-d*C)*L,e[4]=(l*F-a*U-c*P)*L,e[5]=(t*U-s*F+r*P)*L,e[6]=(m*v-x*R-p*M)*L,e[7]=(f*R-u*v+d*M)*L,e[8]=(a*Z-o*F+c*_)*L,e[9]=(n*F-t*Z-r*_)*L,e[10]=(x*b-g*v+p*w)*L,e[11]=(h*v-f*b-d*w)*L,e[12]=(o*P-a*H-l*_)*L,e[13]=(t*H-n*P+s*_)*L,e[14]=(g*M-x*C-m*w)*L,e[15]=(f*C-h*M+u*w)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,f=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+n,f*l-s*a,0,c*l-s*o,f*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,f=a+a,h=o+o,u=r*c,d=r*f,x=r*h,g=a*f,m=a*h,p=o*h,w=l*c,M=l*f,v=l*h,C=n.x,b=n.y,R=n.z;return s[0]=(1-(g+p))*C,s[1]=(d+v)*C,s[2]=(x-M)*C,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(u+p))*b,s[6]=(m+w)*b,s[7]=0,s[8]=(x+M)*R,s[9]=(m-w)*R,s[10]=(1-(u+g))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ki.set(s[0],s[1],s[2]).length(),o=ki.set(s[4],s[5],s[6]).length(),l=ki.set(s[8],s[9],s[10]).length();r<0&&(a=-a),xn.copy(this);let c=1/a,f=1/o,h=1/l;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=f,xn.elements[5]*=f,xn.elements[6]*=f,xn.elements[8]*=h,xn.elements[9]*=h,xn.elements[10]*=h,t.setFromRotationMatrix(xn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=vn,l=!1){let c=this.elements,f=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),x,g;if(l)x=r/(a-r),g=a*r/(a-r);else if(o===vn)x=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ss)x=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=vn,l=!1){let c=this.elements,f=2/(t-e),h=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),x,g;if(l)x=1/(a-r),g=a/(a-r);else if(o===vn)x=-2/(a-r),g=-(a+r)/(a-r);else if(o===ss)x=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=x,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ki=new V,xn=new bt,of=new V(0,0,0),lf=new V(1,1,1),ii=new V,Tr=new V,nn=new V,Lc=new bt,Dc=new Un,Kn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],f=s[9],h=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var os=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cf=0,Nc=new V,Hi=new Un,Vn=new bt,wr=new V,Ps=new V,hf=new V,uf=new Un,Uc=new V(1,0,0),Fc=new V(0,1,0),Oc=new V(0,0,1),Bc={type:"added"},ff={type:"removed"},Gi={type:"childadded",child:null},Vo={type:"childremoved",child:null},zt=class i extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new V,t=new Kn,n=new Un,s=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new Qe}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(Uc,e)}rotateY(e){return this.rotateOnAxis(Fc,e)}rotateZ(e){return this.rotateOnAxis(Oc,e)}translateOnAxis(e,t){return Nc.copy(e).applyQuaternion(this.quaternion),this.position.add(Nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uc,e)}translateY(e){return this.translateOnAxis(Fc,e)}translateZ(e){return this.translateOnAxis(Oc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wr.copy(e):wr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Ps,wr,this.up):Vn.lookAt(wr,Ps,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(Vn),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bc),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ff),Vo.child=e,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bc),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,hf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,uf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),u=a(e.skeletons),d=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};zt.DEFAULT_UP=new V(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Te=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},df={type:"move"},ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),d=.02,x=.005;c.inputState.pinching&&u>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(df)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Wo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var et=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=nf(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Wo(a,r,e+1/3),this.g=Wo(a,r,e),this.b=Wo(a,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let n=Gh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return lt.workingToColorSpace(Wt.copy(this),e),Math.round(ot(Wt.r*255,0,255))*65536+Math.round(ot(Wt.g*255,0,255))*256+Math.round(ot(Wt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Wt.copy(this),t);let n=Wt.r,s=Wt.g,r=Wt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,f=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Xt){lt.workingToColorSpace(Wt.copy(this),e);let t=Wt.r,n=Wt.g,s=Wt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Ar);let n=Bo(si.h,Ar.h,t),s=Bo(si.s,Ar.s,t),r=Bo(si.l,Ar.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new et;et.NAMES=Gh;var Mn=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},_n=new V,Wn=new V,Xo=new V,Xn=new V,Vi=new V,Wi=new V,zc=new V,qo=new V,Yo=new V,Zo=new V,Jo=new Tt,$o=new Tt,Ko=new Tt,Zn=class i{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),_n.subVectors(e,t),s.cross(_n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){_n.subVectors(s,t),Wn.subVectors(n,t),Xo.subVectors(e,t);let a=_n.dot(_n),o=_n.dot(Wn),l=_n.dot(Xo),c=Wn.dot(Wn),f=Wn.dot(Xo),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let u=1/h,d=(c*l-o*f)*u,x=(a*f-o*l)*u;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Jo.setScalar(0),$o.setScalar(0),Ko.setScalar(0),Jo.fromBufferAttribute(e,t),$o.fromBufferAttribute(e,n),Ko.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Jo,r.x),a.addScaledVector($o,r.y),a.addScaledVector(Ko,r.z),a}static isFrontFacing(e,t,n,s){return _n.subVectors(n,t),Wn.subVectors(e,t),_n.cross(Wn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),_n.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Vi.subVectors(s,n),Wi.subVectors(r,n),qo.subVectors(e,n);let l=Vi.dot(qo),c=Wi.dot(qo);if(l<=0&&c<=0)return t.copy(n);Yo.subVectors(e,s);let f=Vi.dot(Yo),h=Wi.dot(Yo);if(f>=0&&h<=f)return t.copy(s);let u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(n).addScaledVector(Vi,a);Zo.subVectors(e,r);let d=Vi.dot(Zo),x=Wi.dot(Zo);if(x>=0&&d<=x)return t.copy(r);let g=d*c-l*x;if(g<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Wi,o);let m=f*x-d*h;if(m<=0&&h-f>=0&&d-x>=0)return zc.subVectors(r,s),o=(h-f)/(h-f+(d-x)),t.copy(s).addScaledVector(zc,o);let p=1/(m+g+u);return a=g*p,o=u*p,t.copy(n).addScaledVector(Vi,a).addScaledVector(Wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dn=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),Cr.subVectors(this.max,Is),Xi.subVectors(e.a,Is),qi.subVectors(e.b,Is),Yi.subVectors(e.c,Is),ri.subVectors(qi,Xi),ai.subVectors(Yi,qi),vi.subVectors(Xi,Yi);let t=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-vi.z,vi.y,ri.z,0,-ri.x,ai.z,0,-ai.x,vi.z,0,-vi.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-vi.y,vi.x,0];return!jo(t,Xi,qi,Yi,Cr)||(t=[1,0,0,0,1,0,0,0,1],!jo(t,Xi,qi,Yi,Cr))?!1:(Pr.crossVectors(ri,ai),t=[Pr.x,Pr.y,Pr.z],jo(t,Xi,qi,Yi,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},qn=[new V,new V,new V,new V,new V,new V,new V,new V],yn=new V,Rr=new dn,Xi=new V,qi=new V,Yi=new V,ri=new V,ai=new V,vi=new V,Is=new V,Cr=new V,Pr=new V,Mi=new V;function jo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Mi.fromArray(i,r);let o=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),f=n.dot(Mi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var Lt=new V,Ir=new Ee,pf=0,rn=class extends Nn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xl,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix3(e),this.setXY(t,Ir.x,Ir.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var qs=class extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ys=class extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var gt=class extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}},mf=new dn,Ls=new V,Qo=new V,cs=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):mf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);let t=Ls.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ls,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(Qo)),this.expandByPoint(Ls.copy(e.center).sub(Qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},gf=0,fn=new bt,el=new zt,Zi=new V,sn=new dn,Ds=new dn,Ft=new V,kt=class i extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ef(e)?Ys:qs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return el.lookAt(e),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(sn.min,Ds.min),sn.expandByPoint(Ft),Ft.addVectors(sn.max,Ds.max),sn.expandByPoint(Ft)):(sn.expandByPoint(Ds.min),sn.expandByPoint(Ds.max))}sn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Ft.fromBufferAttribute(o,c),l&&(Zi.fromBufferAttribute(e,c),Ft.add(Zi)),s=Math.max(s,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new rn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new V,l[_]=new V;let c=new V,f=new V,h=new V,u=new Ee,d=new Ee,x=new Ee,g=new V,m=new V;function p(_,P,F){c.fromBufferAttribute(n,_),f.fromBufferAttribute(n,P),h.fromBufferAttribute(n,F),u.fromBufferAttribute(r,_),d.fromBufferAttribute(r,P),x.fromBufferAttribute(r,F),f.sub(c),h.sub(c),d.sub(u),x.sub(u);let H=1/(d.x*x.y-x.x*d.y);isFinite(H)&&(g.copy(f).multiplyScalar(x.y).addScaledVector(h,-d.y).multiplyScalar(H),m.copy(h).multiplyScalar(d.x).addScaledVector(f,-x.x).multiplyScalar(H),o[_].add(g),o[P].add(g),o[F].add(g),l[_].add(m),l[P].add(m),l[F].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let _=0,P=w.length;_<P;++_){let F=w[_],H=F.start,Z=F.count;for(let U=H,T=H+Z;U<T;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let M=new V,v=new V,C=new V,b=new V;function R(_){C.fromBufferAttribute(s,_),b.copy(C);let P=o[_];M.copy(P),M.sub(C.multiplyScalar(C.dot(P))).normalize(),v.crossVectors(b,P);let H=v.dot(l[_])<0?-1:1;a.setXYZW(_,M.x,M.y,M.z,H)}for(let _=0,P=w.length;_<P;++_){let F=w[_],H=F.start,Z=F.count;for(let U=H,T=H+Z;U<T;U+=3)R(e.getX(U+0)),R(e.getX(U+1)),R(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new V,r=new V,a=new V,o=new V,l=new V,c=new V,f=new V,h=new V;if(e)for(let u=0,d=e.count;u<d;u+=3){let x=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(f),l.add(f),c.add(f),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),f.subVectors(a,r),h.subVectors(s,r),f.cross(h),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){let c=o.array,f=o.itemSize,h=o.normalized,u=new c.constructor(l.length*f),d=0,x=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*f;for(let p=0;p<f;p++)u[x++]=c[d++]}return new rn(u,f,h)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let f=0,h=c.length;f<h;f++){let u=c[f],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){let d=c[h];f.push(d.toJSON(e.data))}f.length>0&&(s[l]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(t))}let r=e.morphAttributes;for(let c in r){let f=[],h=r[c];for(let u=0,d=h.length;u<d;u++)f.push(h[u].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,f=a.length;c<f;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ha=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xl,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Zt=new V,Zs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ws("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ws("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},tl=new V,xf=new V,_f=new Qe,jt=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=tl.subVectors(n,t).cross(xf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(tl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_f.getNormalMatrix(e),s=this.coplanarPoint(tl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},yf=0,jn=class extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=vs,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=Rl,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new jt().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ee().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},li=class extends jn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ji,Ns=new V,$i=new V,Ki=new V,ji=new Ee,Us=new Ee,Vh=new bt,Lr=new V,Fs=new V,Dr=new V,kc=new Ee,nl=new Ee,Hc=new Ee,wi=class extends zt{constructor(e=new li){if(super(),this.isSprite=!0,this.type="Sprite",Ji===void 0){Ji=new kt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ha(t,5);Ji.setIndex([0,1,2,0,2,3]),Ji.setAttribute("position",new Zs(n,3,0,!1)),Ji.setAttribute("uv",new Zs(n,2,3,!1))}this.geometry=Ji,this.material=e,this.center=new Ee(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$i.setFromMatrixScale(this.matrixWorld),Vh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$i.multiplyScalar(-Ki.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Nr(Lr.set(-.5,-.5,0),Ki,a,$i,s,r),Nr(Fs.set(.5,-.5,0),Ki,a,$i,s,r),Nr(Dr.set(.5,.5,0),Ki,a,$i,s,r),kc.set(0,0),nl.set(1,0),Hc.set(1,1);let o=e.ray.intersectTriangle(Lr,Fs,Dr,!1,Ns);if(o===null&&(Nr(Fs.set(-.5,.5,0),Ki,a,$i,s,r),nl.set(0,1),o=e.ray.intersectTriangle(Lr,Dr,Fs,!1,Ns),o===null))return;let l=e.ray.origin.distanceTo(Ns);l<e.near||l>e.far||t.push({distance:l,point:Ns.clone(),uv:Zn.getInterpolation(Ns,Lr,Fs,Dr,kc,nl,Hc,new Ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Nr(i,e,t,n,s,r){ji.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Us.x=r*ji.x-s*ji.y,Us.y=s*ji.x+r*ji.y):Us.copy(ji),i.copy(e),i.x+=Us.x,i.y+=Us.y,i.applyMatrix4(Vh)}var Yn=new V,il=new V,Ur=new V,Fr=new V,Js=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){il.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),Fr.copy(this.origin).sub(il);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ur),o=Fr.dot(this.direction),l=-Fr.dot(Ur),c=Fr.lengthSq(),f=Math.abs(1-a*a),h,u,d,x;if(f>0)if(h=a*l-o,u=a*o-l,x=r*f,h>=0)if(u>=-x)if(u<=x){let g=1/f;h*=g,u*=g,d=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;else u<=-x?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+u*(u+2*l)+c):u<=x?(h=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+u*(u+2*l)+c);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),d=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(il).addScaledVector(Ur,u),d}intersectSphere(e,t){if(e.radius<0)return null;Yn.subVectors(e.center,this.origin);let n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),f>=0?(r=(e.min.y-u.y)*f,a=(e.max.y-u.y)*f):(r=(e.max.y-u.y)*f,a=(e.min.y-u.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,h=e.x-a.x,u=e.y-a.y,d=e.z-a.z,x=t.x-a.x,g=t.y-a.y,m=t.z-a.z,p=n.x-a.x,w=n.y-a.y,M=n.z-a.z,v=Math.abs(l),C=Math.abs(c),b=Math.abs(f),R,_,P,F,H,Z,U,T,L,q,E,A;if(v>=C&&v>=b?(P=l,Z=h,L=x,A=p,l>=0?(R=c,_=f,F=u,H=d,U=g,T=m,q=w,E=M):(R=f,_=c,F=d,H=u,U=m,T=g,q=M,E=w)):C>=b?(P=c,Z=u,L=g,A=w,c>=0?(R=f,_=l,F=d,H=h,U=m,T=x,q=M,E=p):(R=l,_=f,F=h,H=d,U=x,T=m,q=p,E=M)):(P=f,Z=d,L=m,A=M,f>=0?(R=l,_=c,F=h,H=u,U=x,T=g,q=p,E=w):(R=c,_=l,F=u,H=h,U=g,T=x,q=w,E=p)),P===0)return null;let I=R/P,K=_/P,O=1/P,ee=F-I*Z,Q=H-K*Z,ae=U-I*L,ce=T-K*L,k=q-I*A,z=E-K*A,X=k*ce-z*ae,oe=ee*z-Q*k,se=ae*Q-ce*ee;if(s){if(X<0||oe<0||se<0)return null}else if((X<0||oe<0||se<0)&&(X>0||oe>0||se>0))return null;let ue=X+oe+se;if(ue===0)return null;let Re=O*(X*Z+oe*L+se*A);return(ue>0?Re<0:Re>0)?null:this.at(Re/ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rt=class extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gc=new bt,bi=new Js,Or=new cs,Vc=new V,Br=new V,zr=new V,kr=new V,sl=new V,Hr=new V,Wc=new V,Gr=new V,ft=class extends zt{constructor(e=new kt,t=new rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=o[l],h=r[l];f!==0&&(sl.fromBufferAttribute(h,e),a?Hr.addScaledVector(sl,f):Hr.addScaledVector(sl.sub(t),f))}t.add(Hr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),bi.copy(e.ray).recast(e.near),!(Or.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Or,Vc)===null||bi.origin.distanceToSquared(Vc)>(e.far-e.near)**2))&&(Gc.copy(r).invert(),bi.copy(e.ray).applyMatrix4(Gc),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=u.length;x<g;x++){let m=u[x],p=a[m.materialIndex],w=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=w,C=M;v<C;v+=3){let b=o.getX(v),R=o.getX(v+1),_=o.getX(v+2);s=Vr(this,p,e,n,c,f,h,b,R,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=x,p=g;m<p;m+=3){let w=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);s=Vr(this,a,e,n,c,f,h,w,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,g=u.length;x<g;x++){let m=u[x],p=a[m.materialIndex],w=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=w,C=M;v<C;v+=3){let b=v,R=v+1,_=v+2;s=Vr(this,p,e,n,c,f,h,b,R,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=x,p=g;m<p;m+=3){let w=m,M=m+1,v=m+2;s=Vr(this,a,e,n,c,f,h,w,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function vf(i,e,t,n,s,r,a,o){let l;if(e.side===Ht?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===di,o),l===null)return null;Gr.copy(o),Gr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Gr);return c<t.near||c>t.far?null:{distance:c,point:Gr.clone(),object:i}}function Vr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Br),i.getVertexPosition(l,zr),i.getVertexPosition(c,kr);let f=vf(i,e,t,n,Br,zr,kr,Wc);if(f){let h=new V;Zn.getBarycoord(Wc,Br,zr,kr,h),s&&(f.uv=Zn.getInterpolatedAttribute(s,o,l,c,h,new Ee)),r&&(f.uv1=Zn.getInterpolatedAttribute(r,o,l,c,h,new Ee)),a&&(f.normal=Zn.getInterpolatedAttribute(a,o,l,c,h,new V),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new V,materialIndex:0};Zn.getNormal(Br,zr,kr,u.normal),f.face=u,f.barycoord=h}return f}var ua=class extends Jt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ot,f=Ot,h,u){super(null,a,o,l,c,f,s,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Si=new cs,Mf=new Ee(.5,.5),Wr=new V,hs=class{constructor(e=new jt,t=new jt,n=new jt,s=new jt,r=new jt,a=new jt){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],f=r[4],h=r[5],u=r[6],d=r[7],x=r[8],g=r[9],m=r[10],p=r[11],w=r[12],M=r[13],v=r[14],C=r[15];if(s[0].setComponents(c-a,d-f,p-x,C-w).normalize(),s[1].setComponents(c+a,d+f,p+x,C+w).normalize(),s[2].setComponents(c+o,d+h,p+g,C+M).normalize(),s[3].setComponents(c-o,d-h,p-g,C-M).normalize(),n)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,d-u,p-m,C-v).normalize();else if(s[4].setComponents(c-l,d-u,p-m,C-v).normalize(),t===vn)s[5].setComponents(c+l,d+u,p+m,C+v).normalize();else if(t===ss)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){Si.center.set(0,0,0);let t=Mf.distanceTo(e.center);return Si.radius=.7071067811865476+t,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Wr.x=s.normal.x>0?e.max.x:e.min.x,Wr.y=s.normal.y>0?e.max.y:e.min.y,Wr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var $s=class extends Jt{constructor(e=[],t=pi,n,s,r,a,o,l,c,f){super(e,t,n,s,r,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},us=class extends Jt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ci=class extends Jt{constructor(e,t,n=En,s,r,a,o=Ot,l=Ot,c,f=Dn,h=1){if(f!==Dn&&f!==gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:h};super(u,s,r,a,o,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new as(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},fa=class extends ci{constructor(e,t=En,n=pi,s,r,a=Ot,o=Ot,l,c=Dn){let f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,t,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ks=class extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fn=class i extends kt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],f=[],h=[],u=0,d=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(f,3)),this.setAttribute("uv",new gt(h,2));function x(g,m,p,w,M,v,C,b,R,_,P){let F=v/R,H=C/_,Z=v/2,U=C/2,T=b/2,L=R+1,q=_+1,E=0,A=0,I=new V;for(let K=0;K<q;K++){let O=K*H-U;for(let ee=0;ee<L;ee++){let Q=ee*F-Z;I[g]=Q*w,I[m]=O*M,I[p]=T,c.push(I.x,I.y,I.z),I[g]=0,I[m]=0,I[p]=b>0?1:-1,f.push(I.x,I.y,I.z),h.push(ee/R),h.push(1-K/_),E+=1}}for(let K=0;K<_;K++)for(let O=0;O<R;O++){let ee=u+O+L*K,Q=u+O+L*(K+1),ae=u+(O+1)+L*(K+1),ce=u+(O+1)+L*K;l.push(ee,Q,ce),l.push(Q,ae,ce),A+=6}o.addGroup(d,A,P),d+=A,u+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ai=class i extends kt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new V,f=new Ee;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){let d=n+h/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),f.x=(a[u]/e+1)/2,f.y=(a[u+1]/e+1)/2,l.push(f.x,f.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ke=class i extends kt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let f=[],h=[],u=[],d=[],x=0,g=[],m=n/2,p=0;w(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(f),this.setAttribute("position",new gt(h,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(d,2));function w(){let v=new V,C=new V,b=0,R=(t-e)/n;for(let _=0;_<=r;_++){let P=[],F=_/r,H=F*(t-e)+e;for(let Z=0;Z<=s;Z++){let U=Z/s,T=U*l+o,L=Math.sin(T),q=Math.cos(T);C.x=H*L,C.y=-F*n+m,C.z=H*q,h.push(C.x,C.y,C.z),v.set(L,R,q).normalize(),u.push(v.x,v.y,v.z),d.push(U,1-F),P.push(x++)}g.push(P)}for(let _=0;_<s;_++)for(let P=0;P<r;P++){let F=g[P][_],H=g[P+1][_],Z=g[P+1][_+1],U=g[P][_+1];(e>0||P!==0)&&(f.push(F,H,U),b+=3),(t>0||P!==r-1)&&(f.push(H,Z,U),b+=3)}c.addGroup(p,b,0),p+=b}function M(v){let C=x,b=new Ee,R=new V,_=0,P=v===!0?e:t,F=v===!0?1:-1;for(let Z=1;Z<=s;Z++)h.push(0,m*F,0),u.push(0,F,0),d.push(.5,.5),x++;let H=x;for(let Z=0;Z<=s;Z++){let T=Z/s*l+o,L=Math.cos(T),q=Math.sin(T);R.x=P*q,R.y=m*F,R.z=P*L,h.push(R.x,R.y,R.z),u.push(0,F,0),b.x=L*.5+.5,b.y=q*.5*F+.5,d.push(b.x,b.y),x++}for(let Z=0;Z<s;Z++){let U=C+Z,T=H+Z;v===!0?f.push(T,T+1,U):f.push(T+1,T,U),_+=3}c.addGroup(p,_,v===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Dt=class i extends ke{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},da=class i extends kt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),f(),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(r.slice(),3)),this.setAttribute("uv",new gt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){let M=new V,v=new V,C=new V;for(let b=0;b<t.length;b+=3)d(t[b+0],M),d(t[b+1],v),d(t[b+2],C),l(M,v,C,w)}function l(w,M,v,C){let b=C+1,R=[];for(let _=0;_<=b;_++){R[_]=[];let P=w.clone().lerp(v,_/b),F=M.clone().lerp(v,_/b),H=b-_;for(let Z=0;Z<=H;Z++)Z===0&&_===b?R[_][Z]=P:R[_][Z]=P.clone().lerp(F,Z/H)}for(let _=0;_<b;_++)for(let P=0;P<2*(b-_)-1;P++){let F=Math.floor(P/2);P%2===0?(u(R[_][F+1]),u(R[_+1][F]),u(R[_][F])):(u(R[_][F+1]),u(R[_+1][F+1]),u(R[_+1][F]))}}function c(w){let M=new V;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(w),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function f(){let w=new V;for(let M=0;M<r.length;M+=3){w.x=r[M+0],w.y=r[M+1],w.z=r[M+2];let v=m(w)/2/Math.PI+.5,C=p(w)/Math.PI+.5;a.push(v,1-C)}x(),h()}function h(){for(let w=0;w<a.length;w+=6){let M=a[w+0],v=a[w+2],C=a[w+4],b=Math.max(M,v,C),R=Math.min(M,v,C);b>.9&&R<.1&&(M<.2&&(a[w+0]+=1),v<.2&&(a[w+2]+=1),C<.2&&(a[w+4]+=1))}}function u(w){r.push(w.x,w.y,w.z)}function d(w,M){let v=w*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function x(){let w=new V,M=new V,v=new V,C=new V,b=new Ee,R=new Ee,_=new Ee;for(let P=0,F=0;P<r.length;P+=9,F+=6){w.set(r[P+0],r[P+1],r[P+2]),M.set(r[P+3],r[P+4],r[P+5]),v.set(r[P+6],r[P+7],r[P+8]),b.set(a[F+0],a[F+1]),R.set(a[F+2],a[F+3]),_.set(a[F+4],a[F+5]),C.copy(w).add(M).add(v).divideScalar(3);let H=m(C);g(b,F+0,w,H),g(R,F+2,M,H),g(_,F+4,v,H)}}function g(w,M,v,C){C<0&&w.x===1&&(a[M]=w.x-1),v.x===0&&v.z===0&&(a[M]=C/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$e("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let f=n[s],u=n[s+1]-f,d=(a-f)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ee:new V);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new V,s=[],r=[],a=[],o=new V,l=new bt;for(let d=0;d<=e;d++){let x=d/e;s[d]=this.getTangentAt(x,new V)}r[0]=new V,a[0]=new V;let c=Number.MAX_VALUE,f=Math.abs(s[0].x),h=Math.abs(s[0].y),u=Math.abs(s[0].z);f<=c&&(c=f,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(ot(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,x))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ot(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],d*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},fs=class extends on{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ee){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*f-d*h+this.aX,c=u*h+d*f+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},pa=class extends fs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Yl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,f,h){let u=(a-r)/c-(o-r)/(c+f)+(o-a)/f,d=(o-a)/f-(l-a)/(f+h)+(l-o)/h;u*=f,d*=f,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Xc=new V,qc=new V,rl=new Yl,al=new Yl,ol=new Yl,ma=class extends on{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new V){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,f;this.closed||o>0?c=s[(o-1)%r]:(qc.subVectors(s[0],s[1]).add(s[0]),c=qc);let h=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?f=s[(o+2)%r]:(Xc.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=Xc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(f),d);g<1e-4&&(g=1),x<1e-4&&(x=g),m<1e-4&&(m=g),rl.initNonuniformCatmullRom(c.x,h.x,u.x,f.x,x,g,m),al.initNonuniformCatmullRom(c.y,h.y,u.y,f.y,x,g,m),ol.initNonuniformCatmullRom(c.z,h.z,u.z,f.z,x,g,m)}else this.curveType==="catmullrom"&&(rl.initCatmullRom(c.x,h.x,u.x,f.x,this.tension),al.initCatmullRom(c.y,h.y,u.y,f.y,this.tension),ol.initCatmullRom(c.z,h.z,u.z,f.z,this.tension));return n.set(rl.calc(l),al.calc(l),ol.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new V().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Yc(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function bf(i,e){let t=1-i;return t*t*e}function Sf(i,e){return 2*(1-i)*i*e}function Ef(i,e){return i*i*e}function Bs(i,e,t,n){return bf(i,e)+Sf(i,t)+Ef(i,n)}function Tf(i,e){let t=1-i;return t*t*t*e}function wf(i,e){let t=1-i;return 3*t*t*i*e}function Af(i,e){return 3*(1-i)*i*i*e}function Rf(i,e){return i*i*i*e}function zs(i,e,t,n,s){return Tf(i,e)+wf(i,t)+Af(i,n)+Rf(i,s)}var js=class extends on{constructor(e=new Ee,t=new Ee,n=new Ee,s=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ee){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zs(e,s.x,r.x,a.x,o.x),zs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ga=class extends on{constructor(e=new V,t=new V,n=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new V){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zs(e,s.x,r.x,a.x,o.x),zs(e,s.y,r.y,a.y,o.y),zs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qs=class extends on{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends on{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},er=class extends on{constructor(e=new Ee,t=new Ee,n=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ee){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Bs(e,s.x,r.x,a.x),Bs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends on{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Bs(e,s.x,r.x,a.x),Bs(e,s.y,r.y,a.y),Bs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tr=class extends on{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],f=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Yc(o,l.x,c.x,f.x,h.x),Yc(o,l.y,c.y,f.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ee().fromArray(s))}return this}},pl=Object.freeze({__proto__:null,ArcCurve:pa,CatmullRomCurve3:ma,CubicBezierCurve:js,CubicBezierCurve3:ga,EllipseCurve:fs,LineCurve:Qs,LineCurve3:xa,QuadraticBezierCurve:er,QuadraticBezierCurve3:_a,SplineCurve:tr}),ya=class extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let f=l[c];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new pl[s.type]().fromJSON(s))}return this}},nr=class extends ya{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Qs(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new er(this.currentPoint.clone(),new Ee(e,t),new Ee(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new js(this.currentPoint.clone(),new Ee(e,t),new Ee(n,s),new Ee(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new tr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+c,t+f,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new fs(e,t,n,s,r,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ri=class extends nr{constructor(e){super(e),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new nr().fromJSON(s))}return this}};function Cf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Wh(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Nf(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let f=o,h=l;for(let u=t;u<s;u+=t){let d=i[u],x=i[u+1];d<o&&(o=d),x<l&&(l=x),d>f&&(f=d),x>h&&(h=x)}c=Math.max(f-o,h-l),c=c!==0?32767/c:0}return ir(r,a,t,o,l,c,0),a}function Wh(i,e,t,n,s){let r;if(s===Xf(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Zc(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Zc(a/n|0,i[a],i[a+1],r);return r&&ds(r,r.next)&&(rr(r),r=r.next),r}function Ci(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ds(t,t.next)||At(t.prev,t,t.next)===0)){if(rr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ir(i,e,t,n,s,r,a){if(!i)return;!a&&r&&zf(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?If(i,n,s,r):Pf(i)){e.push(l.i,i.i,c.i),rr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Lf(Ci(i),e),ir(i,e,t,n,s,r,2)):a===2&&Df(i,e,t,n,s,r):ir(Ci(i),e,t,n,s,r,1);break}}}function Pf(i){let e=i.prev,t=i,n=i.next;if(At(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,f=Math.min(s,r,a),h=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),x=n.next;for(;x!==e;){if(x.x>=f&&x.x<=u&&x.y>=h&&x.y<=d&&Os(s,o,r,l,a,c,x.x,x.y)&&At(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function If(i,e,t,n){let s=i.prev,r=i,a=i.next;if(At(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,f=s.y,h=r.y,u=a.y,d=Math.min(o,l,c),x=Math.min(f,h,u),g=Math.max(o,l,c),m=Math.max(f,h,u),p=ml(d,x,e,t,n),w=ml(g,m,e,t,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=w;){if(M.x>=d&&M.x<=g&&M.y>=x&&M.y<=m&&M!==s&&M!==a&&Os(o,f,l,h,c,u,M.x,M.y)&&At(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=g&&v.y>=x&&v.y<=m&&v!==s&&v!==a&&Os(o,f,l,h,c,u,v.x,v.y)&&At(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=g&&M.y>=x&&M.y<=m&&M!==s&&M!==a&&Os(o,f,l,h,c,u,M.x,M.y)&&At(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=w;){if(v.x>=d&&v.x<=g&&v.y>=x&&v.y<=m&&v!==s&&v!==a&&Os(o,f,l,h,c,u,v.x,v.y)&&At(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Lf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ds(n,s)&&qh(n,t,t.next,s)&&sr(n,s)&&sr(s,n)&&(e.push(n.i,t.i,s.i),rr(t),rr(t.next),t=i=s),t=t.next}while(t!==i);return Ci(t)}function Df(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Gf(a,o)){let l=Yh(a,o);a=Ci(a,a.next),l=Ci(l,l.next),ir(a,e,t,n,s,r,0),ir(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Nf(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Wh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Hf(c))}s.sort(Uf);for(let r=0;r<s.length;r++)t=Ff(s[r],t);return t}function Uf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Ff(i,e){let t=Of(i,e);if(!t)return e;let n=Yh(t,i);return Ci(n,n.next),Ci(t,t.next)}function Of(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(ds(i,t))return t;do{if(ds(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,f=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Xh(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);sr(t,i)&&(h<f||h===f&&(t.x>a.x||t.x===a.x&&Bf(a,t)))&&(a=t,f=h)}t=t.next}while(t!==o);return a}function Bf(i,e){return At(i.prev,i,e.prev)<0&&At(e.next,i,i.next)<0}function zf(i,e,t,n){let s=i;do s.z===0&&(s.z=ml(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,kf(s)}function kf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function ml(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Hf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Xh(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Os(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Xh(i,e,t,n,s,r,a,o)}function Gf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Vf(i,e)&&(sr(i,e)&&sr(e,i)&&Wf(i,e)&&(At(i.prev,i,e.prev)||At(i,e.prev,e))||ds(i,e)&&At(i.prev,i,i.next)>0&&At(e.prev,e,e.next)>0)}function At(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ds(i,e){return i.x===e.x&&i.y===e.y}function qh(i,e,t,n){let s=qr(At(i,e,t)),r=qr(At(i,e,n)),a=qr(At(t,n,i)),o=qr(At(t,n,e));return!!(s!==r&&a!==o||s===0&&Xr(i,t,e)||r===0&&Xr(i,n,e)||a===0&&Xr(t,i,n)||o===0&&Xr(t,e,n))}function Xr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function qr(i){return i>0?1:i<0?-1:0}function Vf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&qh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function sr(i,e){return At(i.prev,i,i.next)<0?At(i,e,i.next)>=0&&At(i,i.prev,e)>=0:At(i,e,i.prev)<0||At(i,i.next,e)<0}function Wf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Yh(i,e){let t=gl(i.i,i.x,i.y),n=gl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Zc(i,e,t,n){let s=gl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function rr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function gl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xf(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var xl=class{static triangulate(e,t,n=2){return Cf(e,t,n)}},Ei=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Jc(e),$c(n,e);let a=e.length;t.forEach(Jc);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,$c(n,t[l]);let o=xl.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Jc(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function $c(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ln=class i extends kt{constructor(e=new Ri([new Ee(.5,.5),new Ee(-.5,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new gt(s,3)),this.setAttribute("uv",new gt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:qf,M,v=!1,C,b,R,_;if(p){M=p.getSpacedPoints(f),v=!0,u=!1;let de=p.isCatmullRomCurve3?p.closed:!1;C=p.computeFrenetFrames(f,de),b=new V,R=new V,_=new V}u||(m=0,d=0,x=0,g=0);let P=o.extractPoints(c),F=P.shape,H=P.holes;if(!Ei.isClockWise(F)){F=F.reverse();for(let de=0,pe=H.length;de<pe;de++){let ve=H[de];Ei.isClockWise(ve)&&(H[de]=ve.reverse())}}function U(de){let ve=10000000000000001e-36,be=de[0];for(let Ae=1;Ae<=de.length;Ae++){let $=Ae%de.length,re=de[$],me=re.x-be.x,Se=re.y-be.y,G=me*me+Se*Se,st=Math.max(Math.abs(re.x),Math.abs(re.y),Math.abs(be.x),Math.abs(be.y)),je=ve*st*st;if(G<=je){de.splice($,1),Ae--;continue}be=re}}U(F),H.forEach(U);let T=H.length,L=F;for(let de=0;de<T;de++){let pe=H[de];F=F.concat(pe)}function q(de,pe,ve){return pe||Je("ExtrudeGeometry: vec does not exist"),de.clone().addScaledVector(pe,ve)}let E=F.length;function A(de,pe,ve){let be,Ae,$,re=de.x-pe.x,me=de.y-pe.y,Se=ve.x-de.x,G=ve.y-de.y,st=re*re+me*me,je=re*G-me*Se;if(Math.abs(je)>Number.EPSILON){let N=Math.sqrt(st),y=Math.sqrt(Se*Se+G*G),j=pe.x-me/N,W=pe.y+re/N,ie=ve.x-G/y,Me=ve.y+Se/y,we=((ie-j)*G-(Me-W)*Se)/(re*G-me*Se);be=j+re*we-de.x,Ae=W+me*we-de.y;let fe=be*be+Ae*Ae;if(fe<=2)return new Ee(be,Ae);$=Math.sqrt(fe/2)}else{let N=!1;re>Number.EPSILON?Se>Number.EPSILON&&(N=!0):re<-Number.EPSILON?Se<-Number.EPSILON&&(N=!0):Math.sign(me)===Math.sign(G)&&(N=!0),N?(be=-me,Ae=re,$=Math.sqrt(st)):(be=re,Ae=me,$=Math.sqrt(st/2))}return new Ee(be/$,Ae/$)}let I=[];for(let de=0,pe=L.length,ve=pe-1,be=de+1;de<pe;de++,ve++,be++)ve===pe&&(ve=0),be===pe&&(be=0),I[de]=A(L[de],L[ve],L[be]);let K=[],O,ee=I.concat();for(let de=0,pe=T;de<pe;de++){let ve=H[de];O=[];for(let be=0,Ae=ve.length,$=Ae-1,re=be+1;be<Ae;be++,$++,re++)$===Ae&&($=0),re===Ae&&(re=0),O[be]=A(ve[be],ve[$],ve[re]);K.push(O),ee=ee.concat(O)}let Q;if(m===0)Q=Ei.triangulateShape(L,H);else{let de=[],pe=[];for(let ve=0;ve<m;ve++){let be=ve/m,Ae=d*Math.cos(be*Math.PI/2),$=x*Math.sin(be*Math.PI/2)+g;for(let re=0,me=L.length;re<me;re++){let Se=q(L[re],I[re],$);oe(Se.x,Se.y,-Ae),be===0&&de.push(Se)}for(let re=0,me=T;re<me;re++){let Se=H[re];O=K[re];let G=[];for(let st=0,je=Se.length;st<je;st++){let N=q(Se[st],O[st],$);oe(N.x,N.y,-Ae),be===0&&G.push(N)}be===0&&pe.push(G)}}Q=Ei.triangulateShape(de,pe)}let ae=Q.length,ce=x+g;for(let de=0;de<E;de++){let pe=u?q(F[de],ee[de],ce):F[de];v?(R.copy(C.normals[0]).multiplyScalar(pe.x),b.copy(C.binormals[0]).multiplyScalar(pe.y),_.copy(M[0]).add(R).add(b),oe(_.x,_.y,_.z)):oe(pe.x,pe.y,0)}for(let de=1;de<=f;de++)for(let pe=0;pe<E;pe++){let ve=u?q(F[pe],ee[pe],ce):F[pe];v?(R.copy(C.normals[de]).multiplyScalar(ve.x),b.copy(C.binormals[de]).multiplyScalar(ve.y),_.copy(M[de]).add(R).add(b),oe(_.x,_.y,_.z)):oe(ve.x,ve.y,h/f*de)}for(let de=m-1;de>=0;de--){let pe=de/m,ve=d*Math.cos(pe*Math.PI/2),be=x*Math.sin(pe*Math.PI/2)+g;for(let Ae=0,$=L.length;Ae<$;Ae++){let re=q(L[Ae],I[Ae],be);oe(re.x,re.y,h+ve)}for(let Ae=0,$=H.length;Ae<$;Ae++){let re=H[Ae];O=K[Ae];for(let me=0,Se=re.length;me<Se;me++){let G=q(re[me],O[me],be);v?oe(G.x,G.y+M[f-1].y,M[f-1].x+ve):oe(G.x,G.y,h+ve)}}}k(),z();function k(){let de=s.length/3;if(u){let pe=0,ve=E*pe;for(let be=0;be<ae;be++){let Ae=Q[be];se(Ae[2]+ve,Ae[1]+ve,Ae[0]+ve)}pe=f+m*2,ve=E*pe;for(let be=0;be<ae;be++){let Ae=Q[be];se(Ae[0]+ve,Ae[1]+ve,Ae[2]+ve)}}else{for(let pe=0;pe<ae;pe++){let ve=Q[pe];se(ve[2],ve[1],ve[0])}for(let pe=0;pe<ae;pe++){let ve=Q[pe];se(ve[0]+E*f,ve[1]+E*f,ve[2]+E*f)}}n.addGroup(de,s.length/3-de,0)}function z(){let de=s.length/3,pe=0;X(L,pe),pe+=L.length;for(let ve=0,be=H.length;ve<be;ve++){let Ae=H[ve];X(Ae,pe),pe+=Ae.length}n.addGroup(de,s.length/3-de,1)}function X(de,pe){let ve=de.length;for(;--ve>=0;){let be=ve,Ae=ve-1;Ae<0&&(Ae=de.length-1);for(let $=0,re=f+m*2;$<re;$++){let me=E*$,Se=E*($+1),G=pe+be+me,st=pe+Ae+me,je=pe+Ae+Se,N=pe+be+Se;ue(G,st,je,N)}}}function oe(de,pe,ve){l.push(de),l.push(pe),l.push(ve)}function se(de,pe,ve){Re(de),Re(pe),Re(ve);let be=s.length/3,Ae=w.generateTopUV(n,s,be-3,be-2,be-1);Ke(Ae[0]),Ke(Ae[1]),Ke(Ae[2])}function ue(de,pe,ve,be){Re(de),Re(pe),Re(be),Re(pe),Re(ve),Re(be);let Ae=s.length/3,$=w.generateSideWallUV(n,s,Ae-6,Ae-3,Ae-2,Ae-1);Ke($[0]),Ke($[1]),Ke($[3]),Ke($[1]),Ke($[2]),Ke($[3])}function Re(de){s.push(l[de*3+0]),s.push(l[de*3+1]),s.push(l[de*3+2])}function Ke(de){r.push(de.x),r.push(de.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Yf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new pl[s.type]().fromJSON(s)),new i(n,e.options)}},qf={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],f=e[s*3+1];return[new Ee(r,a),new Ee(o,l),new Ee(c,f)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],f=e[n*3+1],h=e[n*3+2],u=e[s*3],d=e[s*3+1],x=e[s*3+2],g=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-f)<Math.abs(a-c)?[new Ee(a,1-l),new Ee(c,1-h),new Ee(u,1-x),new Ee(g,1-p)]:[new Ee(o,1-l),new Ee(f,1-h),new Ee(d,1-x),new Ee(m,1-p)]}};function Yf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ar=class i extends da{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Pt=class i extends kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,f=l+1,h=e/o,u=t/l,d=[],x=[],g=[],m=[];for(let p=0;p<f;p++){let w=p*u-a;for(let M=0;M<c;M++){let v=M*h-r;x.push(v,-w,0),g.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let M=w+c*p,v=w+c*(p+1),C=w+1+c*(p+1),b=w+1+c*p;d.push(M,v,b),d.push(v,C,b)}this.setIndex(d),this.setAttribute("position",new gt(x,3)),this.setAttribute("normal",new gt(g,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var or=class i extends kt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,f=[],h=new V,u=new V,d=[],x=[],g=[],m=[];for(let p=0;p<=n;p++){let w=[],M=p/n,v=a+M*o,C=e*Math.cos(v),b=Math.sqrt(e*e-C*C),R=0;p===0&&a===0?R=.5/t:p===n&&l===Math.PI&&(R=-.5/t);for(let _=0;_<=t;_++){let P=_/t,F=s+P*r;h.x=-b*Math.cos(F),h.y=C,h.z=b*Math.sin(F),x.push(h.x,h.y,h.z),u.copy(h).normalize(),g.push(u.x,u.y,u.z),m.push(P+R,1-M),w.push(c++)}f.push(w)}for(let p=0;p<n;p++)for(let w=0;w<t;w++){let M=f[p][w+1],v=f[p][w],C=f[p+1][w],b=f[p+1][w+1];(p!==0||a>0)&&d.push(M,v,b),(p!==n-1||l<Math.PI)&&d.push(v,C,b)}this.setIndex(d),this.setAttribute("position",new gt(x,3)),this.setAttribute("normal",new gt(g,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ht=class i extends kt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],f=[],h=[],u=new V,d=new V,x=new V;for(let g=0;g<=n;g++){let m=a+g/n*o;for(let p=0;p<=s;p++){let w=p/s*r;d.x=(e+t*Math.cos(m))*Math.cos(w),d.y=(e+t*Math.cos(m))*Math.sin(w),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),u.x=e*Math.cos(w),u.y=e*Math.sin(w),x.subVectors(d,u).normalize(),f.push(x.x,x.y,x.z),h.push(p/s),h.push(g/n)}}for(let g=1;g<=n;g++)for(let m=1;m<=s;m++){let p=(s+1)*g+m-1,w=(s+1)*(g-1)+m-1,M=(s+1)*(g-1)+m,v=(s+1)*g+m;l.push(p,w,v),l.push(w,M,v)}this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(f,3)),this.setAttribute("uv",new gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Di(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Kc(s))s.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Kc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function qt(i){let e={};for(let t=0;t<i.length;t++){let n=Di(i[t]);for(let s in n)e[s]=n[s]}return e}function Kc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Zf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var Zh={clone:Di,merge:qt},Jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jf,this.fragmentShader=$f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=Zf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new et().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"v3":this.uniforms[n].value=new V().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new bt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},va=class extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$t=class extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ma=class extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ba=class extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ll(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var hi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Sa=class extends hi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ul,endingEnd:ul}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case fl:r=e,o=2*t-n;break;case dl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fl:a=e,l=2*n-t;break;case dl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,f=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,x=(n-t)/(s-t),g=x*x,m=g*x,p=-u*m+2*u*g-u*x,w=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*x+1,M=(-1-d)*m+(1.5+d)*g+.5*x,v=d*m-d*g;for(let C=0;C!==o;++C)r[C]=p*a[f+C]+w*a[c+C]+M*a[l+C]+v*a[h+C];return r}},Ea=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=(n-t)/(s-t),h=1-f;for(let u=0;u!==o;++u)r[u]=a[c+u]*h+a[l+u]*f;return r}},Ta=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},wa=class extends hi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,f=this.inTangents,h=this.outTangents;if(!f||!h){let x=(n-t)/(s-t),g=1-x;for(let m=0;m!==o;++m)r[m]=a[c+m]*g+a[l+m]*x;return r}let u=o*2,d=e-1;for(let x=0;x!==o;++x){let g=a[c+x],m=a[l+x],p=d*u+x*2,w=h[p],M=h[p+1],v=e*u+x*2,C=f[v],b=f[v+1],R=jf(n,t,w,C,s);r[x]=Jh(R,g,M,b,m)}return r}};function Jh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Kf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function jf(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Jh(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Kf(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var hn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qi(t,this.TimeBufferType),this.values=Qi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qi(e.times,Array),values:Qi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ll(e.settings)&&(n.settings={inTangents:Qi(e.settings.inTangents,Array),outTangents:Qi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new wa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ks:t=this.InterpolantFactoryMethodDiscrete;break;case ra:t=this.InterpolantFactoryMethodLinear;break;case Jr:t=this.InterpolantFactoryMethodSmooth;break;case hl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $e("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return ra;case this.InterpolantFactoryMethodSmooth:return Jr;case this.InterpolantFactoryMethodBezier:return hl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ll(this.settings)&&(jc(this.settings.inTangents,e),jc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Je("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Je("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&tf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Je("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Jr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],f=e[o+1];if(c!==f&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let x=0;x!==n;++x){let g=t[h+x];if(g!==t[u+x]||g!==t[d+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ll(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function jc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=ra;var ui=class extends hn{constructor(e,t,n){super(e,t,n)}};ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=ks;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Aa=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}};Aa.prototype.ValueTypeName="color";var Ra=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}};Ra.prototype.ValueTypeName="number";var Ca=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let f=c+o;c!==f;c+=4)Un.slerpFlat(r,0,a,c-o,a,c,l);return r}},lr=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ca(this.times,this.values,this.getValueSize(),e)}};lr.prototype.ValueTypeName="quaternion";lr.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends hn{constructor(e,t,n){super(e,t,n)}};fi.prototype.ValueTypeName="string";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=ks;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}};Pa.prototype.ValueTypeName="vector";var Ia=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){let h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,u=c.length;h<u;h+=2){let d=c[h],x=c[h+1];if(d.global&&(d.lastIndex=0),d.test(f))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},$h=new Ia,La=class{constructor(e){this.manager=e!==void 0?e:$h,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};La.DEFAULT_MATERIAL_NAME="__DEFAULT";var ps=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ms=class extends ps{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},cl=new bt,Qc=new V,eh=new V,cr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Qc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qc),eh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(cl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ss||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Yr=new V,Zr=new Un,Pn=new V,hr=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yr,Zr,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Zr,Pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Yr,Zr,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Zr,Pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},oi=new V,th=new Ee,nh=new Ee,wt=class extends hr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=aa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return aa*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,th,nh),t.subVectors(nh,th)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Oo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var _l=class extends cr{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0}},bn=class extends ps{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _l}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},gs=class extends hr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yl=class extends cr{constructor(){super(new gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xs=class extends ps{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new yl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var es=-90,ts=1,Da=class extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new wt(es,ts,e,t);s.layers=this.layers,this.add(s);let r=new wt(es,ts,e,t);r.layers=this.layers,this.add(r);let a=new wt(es,ts,e,t);a.layers=this.layers,this.add(a);let o=new wt(es,ts,e,t);o.layers=this.layers,this.add(o);let l=new wt(es,ts,e,t);l.layers=this.layers,this.add(l);let c=new wt(es,ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(h,u,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Na=class extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Jl="\\[\\]\\.:\\/",Qf=new RegExp("["+Jl+"]","g"),$l="[^"+Jl+"]",ed="[^"+Jl.replace("\\.","")+"]",td=/((?:WC+[\/:])*)/.source.replace("WC",$l),nd=/(WCOD+)?/.source.replace("WCOD",ed),id=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$l),sd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$l),rd=new RegExp("^"+td+nd+id+sd+"$"),ad=["material","materials","bones","map"],vl=class{constructor(e,t,n){let s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qf,"")}static parseTrackName(e){let t=rd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ad.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===c){c=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=vl;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xx=new Float32Array(1);var ih=new bt,_s=class{constructor(e,t,n=0,s=1/0){this.ray=new Js(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ih.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ih),this}intersectObject(e,t=!0,n=[]){return Ml(e,this,n,t),n.sort(sh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ml(e[s],this,n,t);return n.sort(sh),n}};function sh(i,e){return i.distance-e.distance}function Ml(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ml(r[a],e,t,!0)}}var On=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,$e("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var bl=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Kl(i,e,t,n){let s=od(n);switch(t){case Gl:return i*e;case Wl:return i*e/s.components*s.byteLength;case Ha:return i*e/s.components*s.byteLength;case xi:return i*e*2/s.components*s.byteLength;case Ga:return i*e*2/s.components*s.byteLength;case Vl:return i*e*3/s.components*s.byteLength;case pn:return i*e*4/s.components*s.byteLength;case Va:return i*e*4/s.components*s.byteLength;case dr:case pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:case Ya:return Math.max(i,16)*Math.max(e,8)/4;case Wa:case qa:return Math.max(i,8)*Math.max(e,8)/2;case Za:case Ja:case Ka:case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $a:case xr:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case to:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case no:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case io:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case so:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ro:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ao:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case oo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case co:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ho:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case uo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case po:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case mo:case go:case xo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _o:case yo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _r:case vo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function od(i){switch(i){case tn:case Bl:return{byteLength:1,components:1};case Ms:case zl:case wn:return{byteLength:2,components:1};case za:case ka:return{byteLength:2,components:4};case En:case Ba:case Tn:return{byteLength:4,components:1};case kl:case Hl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function _u(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function cd(i){let e=new WeakMap;function t(o,l){let c=o.array,f=o.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let f=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,f);else{h.sort((d,x)=>d.start-x.start);let u=0;for(let d=1;d<h.length;d++){let x=h[u],g=h[d];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++u,h[u]=g)}h.length=u+1;for(let d=0,x=h.length;d<x;d++){let g=h[d];i.bufferSubData(c,g.start*f.BYTES_PER_ELEMENT,f,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var hd=`#ifdef USE_ALPHAHASH
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
}`,it={alphahash_fragment:hd,alphahash_pars_fragment:ud,alphamap_fragment:fd,alphamap_pars_fragment:dd,alphatest_fragment:pd,alphatest_pars_fragment:md,aomap_fragment:gd,aomap_pars_fragment:xd,batching_pars_vertex:_d,batching_vertex:yd,begin_vertex:vd,beginnormal_vertex:Md,bsdfs:bd,iridescence_fragment:Sd,bumpmap_pars_fragment:Ed,clipping_planes_fragment:Td,clipping_planes_pars_fragment:wd,clipping_planes_pars_vertex:Ad,clipping_planes_vertex:Rd,color_fragment:Cd,color_pars_fragment:Pd,color_pars_vertex:Id,color_vertex:Ld,common:Dd,cube_uv_reflection_fragment:Nd,defaultnormal_vertex:Ud,displacementmap_pars_vertex:Fd,displacementmap_vertex:Od,emissivemap_fragment:Bd,emissivemap_pars_fragment:zd,colorspace_fragment:kd,colorspace_pars_fragment:Hd,envmap_fragment:Gd,envmap_common_pars_fragment:Vd,envmap_pars_fragment:Wd,envmap_pars_vertex:Xd,envmap_physical_pars_fragment:np,envmap_vertex:qd,fog_vertex:Yd,fog_pars_vertex:Zd,fog_fragment:Jd,fog_pars_fragment:$d,gradientmap_pars_fragment:Kd,lightmap_pars_fragment:jd,lights_lambert_fragment:Qd,lights_lambert_pars_fragment:ep,lights_pars_begin:tp,lights_toon_fragment:ip,lights_toon_pars_fragment:sp,lights_phong_fragment:rp,lights_phong_pars_fragment:ap,lights_physical_fragment:op,lights_physical_pars_fragment:lp,lights_fragment_begin:cp,lights_fragment_maps:hp,lights_fragment_end:up,lightprobes_pars_fragment:fp,logdepthbuf_fragment:dp,logdepthbuf_pars_fragment:pp,logdepthbuf_pars_vertex:mp,logdepthbuf_vertex:gp,map_fragment:xp,map_pars_fragment:_p,map_particle_fragment:yp,map_particle_pars_fragment:vp,metalnessmap_fragment:Mp,metalnessmap_pars_fragment:bp,morphinstance_vertex:Sp,morphcolor_vertex:Ep,morphnormal_vertex:Tp,morphtarget_pars_vertex:wp,morphtarget_vertex:Ap,normal_fragment_begin:Rp,normal_fragment_maps:Cp,normal_pars_fragment:Pp,normal_pars_vertex:Ip,normal_vertex:Lp,normalmap_pars_fragment:Dp,clearcoat_normal_fragment_begin:Np,clearcoat_normal_fragment_maps:Up,clearcoat_pars_fragment:Fp,iridescence_pars_fragment:Op,opaque_fragment:Bp,packing:zp,premultiplied_alpha_fragment:kp,project_vertex:Hp,dithering_fragment:Gp,dithering_pars_fragment:Vp,roughnessmap_fragment:Wp,roughnessmap_pars_fragment:Xp,shadowmap_pars_fragment:qp,shadowmap_pars_vertex:Yp,shadowmap_vertex:Zp,shadowmask_pars_fragment:Jp,skinbase_vertex:$p,skinning_pars_vertex:Kp,skinning_vertex:jp,skinnormal_vertex:Qp,specularmap_fragment:e0,specularmap_pars_fragment:t0,tonemapping_fragment:n0,tonemapping_pars_fragment:i0,transmission_fragment:s0,transmission_pars_fragment:r0,uv_pars_fragment:a0,uv_pars_vertex:o0,uv_vertex:l0,worldpos_vertex:c0,background_vert:h0,background_frag:u0,backgroundCube_vert:f0,backgroundCube_frag:d0,cube_vert:p0,cube_frag:m0,depth_vert:g0,depth_frag:x0,distance_vert:_0,distance_frag:y0,equirect_vert:v0,equirect_frag:M0,linedashed_vert:b0,linedashed_frag:S0,meshbasic_vert:E0,meshbasic_frag:T0,meshlambert_vert:w0,meshlambert_frag:A0,meshmatcap_vert:R0,meshmatcap_frag:C0,meshnormal_vert:P0,meshnormal_frag:I0,meshphong_vert:L0,meshphong_frag:D0,meshphysical_vert:N0,meshphysical_frag:U0,meshtoon_vert:F0,meshtoon_frag:O0,points_vert:B0,points_frag:z0,shadow_vert:k0,shadow_frag:H0,sprite_vert:G0,sprite_frag:V0},Ne={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},kn={basic:{uniforms:qt([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:qt([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:qt([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:qt([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:qt([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new et(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:qt([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:qt([Ne.points,Ne.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:qt([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:qt([Ne.common,Ne.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:qt([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:qt([Ne.sprite,Ne.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:qt([Ne.common,Ne.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:qt([Ne.lights,Ne.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};kn.physical={uniforms:qt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var Eo={r:0,b:0,g:0},W0=new bt,yu=new Qe;yu.set(-1,0,0,0,1,0,0,0,1);function X0(i,e,t,n,s,r){let a=new et(0),o=s===!0?0:1,l,c,f=null,h=0,u=null;function d(w){let M=w.isScene===!0?w.background:null;if(M&&M.isTexture){let v=w.backgroundBlurriness>0;M=e.get(M,v)}return M}function x(w){let M=!1,v=d(w);v===null?m(a,o):v&&v.isColor&&(m(v,1),M=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(w,M){let v=d(M);v&&(v.isCubeTexture||v.mapping===ur)?(c===void 0&&(c=new ft(new Fn(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Di(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(W0.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yu),c.material.toneMapped=lt.getTransfer(v.colorSpace)!==mt,(f!==v||h!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,u=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ft(new Pt(2,2),new cn({name:"BackgroundMaterial",uniforms:Di(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=lt.getTransfer(v.colorSpace)!==mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,h=v.version,u=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,M){w.getRGB(Eo,Zl(i)),t.buffers.color.setClear(Eo.r,Eo.g,Eo.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:x,addToRenderList:g,dispose:p}}function q0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(H,Z,U,T,L){let q=!1,E=h(H,T,U,Z);r!==E&&(r=E,c(r.object)),q=d(H,T,U,L),q&&x(H,T,U,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(H,Z,U,T),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return i.createVertexArray()}function c(H){return i.bindVertexArray(H)}function f(H){return i.deleteVertexArray(H)}function h(H,Z,U,T){let L=T.wireframe===!0,q=n[Z.id];q===void 0&&(q={},n[Z.id]=q);let E=H.isInstancedMesh===!0?H.id:0,A=q[E];A===void 0&&(A={},q[E]=A);let I=A[U.id];I===void 0&&(I={},A[U.id]=I);let K=I[L];return K===void 0&&(K=u(l()),I[L]=K),K}function u(H){let Z=[],U=[],T=[];for(let L=0;L<t;L++)Z[L]=0,U[L]=0,T[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:U,attributeDivisors:T,object:H,attributes:{},index:null}}function d(H,Z,U,T){let L=r.attributes,q=Z.attributes,E=0,A=U.getAttributes();for(let I in A)if(A[I].location>=0){let O=L[I],ee=q[I];if(ee===void 0&&(I==="instanceMatrix"&&H.instanceMatrix&&(ee=H.instanceMatrix),I==="instanceColor"&&H.instanceColor&&(ee=H.instanceColor)),O===void 0||O.attribute!==ee||ee&&O.data!==ee.data)return!0;E++}return r.attributesNum!==E||r.index!==T}function x(H,Z,U,T){let L={},q=Z.attributes,E=0,A=U.getAttributes();for(let I in A)if(A[I].location>=0){let O=q[I];O===void 0&&(I==="instanceMatrix"&&H.instanceMatrix&&(O=H.instanceMatrix),I==="instanceColor"&&H.instanceColor&&(O=H.instanceColor));let ee={};ee.attribute=O,O&&O.data&&(ee.data=O.data),L[I]=ee,E++}r.attributes=L,r.attributesNum=E,r.index=T}function g(){let H=r.newAttributes;for(let Z=0,U=H.length;Z<U;Z++)H[Z]=0}function m(H){p(H,0)}function p(H,Z){let U=r.newAttributes,T=r.enabledAttributes,L=r.attributeDivisors;U[H]=1,T[H]===0&&(i.enableVertexAttribArray(H),T[H]=1),L[H]!==Z&&(i.vertexAttribDivisor(H,Z),L[H]=Z)}function w(){let H=r.newAttributes,Z=r.enabledAttributes;for(let U=0,T=Z.length;U<T;U++)Z[U]!==H[U]&&(i.disableVertexAttribArray(U),Z[U]=0)}function M(H,Z,U,T,L,q,E){E===!0?i.vertexAttribIPointer(H,Z,U,L,q):i.vertexAttribPointer(H,Z,U,T,L,q)}function v(H,Z,U,T){g();let L=T.attributes,q=U.getAttributes(),E=Z.defaultAttributeValues;for(let A in q){let I=q[A];if(I.location>=0){let K=L[A];if(K===void 0&&(A==="instanceMatrix"&&H.instanceMatrix&&(K=H.instanceMatrix),A==="instanceColor"&&H.instanceColor&&(K=H.instanceColor)),K!==void 0){let O=K.normalized,ee=K.itemSize,Q=e.get(K);if(Q===void 0)continue;let ae=Q.buffer,ce=Q.type,k=Q.bytesPerElement,z=ce===i.INT||ce===i.UNSIGNED_INT||K.gpuType===Ba;if(K.isInterleavedBufferAttribute){let X=K.data,oe=X.stride,se=K.offset;if(X.isInstancedInterleavedBuffer){for(let ue=0;ue<I.locationSize;ue++)p(I.location+ue,X.meshPerAttribute);H.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ue=0;ue<I.locationSize;ue++)m(I.location+ue);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let ue=0;ue<I.locationSize;ue++)M(I.location+ue,ee/I.locationSize,ce,O,oe*k,(se+ee/I.locationSize*ue)*k,z)}else{if(K.isInstancedBufferAttribute){for(let X=0;X<I.locationSize;X++)p(I.location+X,K.meshPerAttribute);H.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let X=0;X<I.locationSize;X++)m(I.location+X);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let X=0;X<I.locationSize;X++)M(I.location+X,ee/I.locationSize,ce,O,ee*k,ee/I.locationSize*X*k,z)}}else if(E!==void 0){let O=E[A];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv(I.location,O);break;case 3:i.vertexAttrib3fv(I.location,O);break;case 4:i.vertexAttrib4fv(I.location,O);break;default:i.vertexAttrib1fv(I.location,O)}}}}w()}function C(){P();for(let H in n){let Z=n[H];for(let U in Z){let T=Z[U];for(let L in T){let q=T[L];for(let E in q)f(q[E].object),delete q[E];delete T[L]}}delete n[H]}}function b(H){if(n[H.id]===void 0)return;let Z=n[H.id];for(let U in Z){let T=Z[U];for(let L in T){let q=T[L];for(let E in q)f(q[E].object),delete q[E];delete T[L]}}delete n[H.id]}function R(H){for(let Z in n){let U=n[Z];for(let T in U){let L=U[T];if(L[H.id]===void 0)continue;let q=L[H.id];for(let E in q)f(q[E].object),delete q[E];delete L[H.id]}}}function _(H){for(let Z in n){let U=n[Z],T=H.isInstancedMesh===!0?H.id:0,L=U[T];if(L!==void 0){for(let q in L){let E=L[q];for(let A in E)f(E[A].object),delete E[A];delete L[q]}delete U[T],Object.keys(U).length===0&&delete n[Z]}}}function P(){F(),a=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:F,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:w}}function Y0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),t.update(c,n,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Z0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==pn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let _=R===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==tn&&R!==Tn&&!_&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",f=l(c);f!==c&&($e("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:v,maxSamples:C,samples:b}}function J0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new jt,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||s;return s=u,n=h.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=f(h,u,0)},this.setState=function(h,u,d){let x=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||x===null||x.length===0||r&&!m)r?f(null):c();else{let w=r?0:n,M=w*4,v=p.clippingState||null;l.value=v,v=f(x,u,M,d);for(let C=0;C!==M;++C)v[C]=t[C];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(h,u,d,x){let g=h!==null?h.length:0,m=null;if(g!==0){if(m=l.value,x!==!0||m===null){let p=d+g*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=d;M!==g;++M,v+=4)a.copy(h[M]).applyMatrix4(w,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}var Es=4,$0=6,K0=20,j0=256,yr=new gs,Kh=new et,jl=null,Ql=0,ec=0,tc=!1,Q0=new V,Ni=new V,wo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Q0}=r;jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jl,Ql,ec),this._renderer.xr.enabled=tc,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:wn,format:pn,colorSpace:Hs,depthBuffer:!1},s=jh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jh(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=em(r)),this._blurMaterial=nm(r,e,t),this._ggxMaterial=tm(r,e,t)}return s}_compileMaterial(e){let t=new ft(new kt,e);this._renderer.compile(t,yr)}_sceneToCubeUV(e,t,n,s,r){let l=new wt(90,1,t,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Kh),h.toneMapping=Sn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ft(new Fn,new rt({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,p=!1,w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,p=!0):(m.color.copy(Kh),p=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[M],r.y,r.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[M]));let C=this._cubeSize;Ss(s,v*C,M>2?C:0,C,C),h.setRenderTarget(s),p&&h.render(g,l),h.render(e,l)}h.toneMapping=d,h.autoClear=u,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===pi||e.mapping===Li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ss(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,yr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=c*1.25,d=h*u,{_lodMax:x}=this,g=this._sizeLods[n],m=3*g*(n>x-Es?n-x+Es:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=x-t,Ss(r,m,p,3*g,2*g),s.setRenderTarget(r),s.render(o,yr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Ss(e,m,p,3*g,2*g),s.setRenderTarget(e),s.render(o,yr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let f=this._sizeLods[s],h=3*f*(s>this._lodMax-Es?s-this._lodMax+Es:0),u=4*(this._cubeSize-f);Ss(t,h,u,3*f,2*f),a.setRenderTarget(t),a.render(l,yr)}};function em(i){let e=[],t=[],n=i,s=i-Es+1+$0;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,f=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,d=3,x=new Float32Array(d*u*h),g=new Float32Array(d*u*h);for(let p=0;p<h;p++){let w=p%3*2/3-1,M=p>2?0:-1,v=[w,M,0,w+2/3,M,0,w+2/3,M+1,0,w,M,0,w+2/3,M+1,0,w,M+1,0];x.set(v,d*u*p);for(let C=0;C<u;C++){let b=f[C*2]*2-1,R=f[C*2+1]*2-1;p===0?Ni.set(1,R,b):p===1?Ni.set(-b,1,-R):p===2?Ni.set(-b,R,1):p===3?Ni.set(-1,R,-b):p===4?Ni.set(-b,-1,R):Ni.set(b,R,-1),Ni.toArray(g,(p*u+C)*d)}}let m=new kt;m.setAttribute("position",new rn(x,d)),m.setAttribute("outputDirection",new rn(g,d)),t.push(new ft(m,null)),n>Es&&n--}return{lodMeshes:t,sizeLods:e}}function jh(i,e,t){let n=new Qt(i,e,t);return n.texture.mapping=ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function tm(i,e,t){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:j0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function nm(i,e,t){return new cn({name:"SphericalGaussianBlur",defines:{SAMPLES:K0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Qh(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function eu(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Ro(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ao=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new $s(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fn(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Bn});r.uniforms.tEquirect.value=t;let a=new ft(s,r),o=t.minFilter;return t.minFilter===mi&&(t.minFilter=Bt),new Da(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function im(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Ua||d===Fa)if(e.has(u)){let x=e.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let g=new Ao(x.height);return g.fromEquirectangularTexture(i,u),e.set(u,g),u.addEventListener("dispose",c),o(g.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,x=d===Ua||d===Fa,g=d===pi||d===Li;if(x||g){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new wo(i)),m=x?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let w=u.image;return x&&w&&w.height>0||g&&w&&l(w)?(n===null&&(n=new wo(i)),m=x?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function o(u,d){return d===Ua?u.mapping=pi:d===Fa&&(u.mapping=Li),u}function l(u){let d=0,x=6;for(let g=0;g<x;g++)u[g]!==void 0&&d++;return d===x}function c(u){let d=u.target;d.removeEventListener("dispose",c);let x=e.get(d);x!==void 0&&(e.delete(d),x.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let x=t.get(d);x!==void 0&&(t.delete(d),x.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function sm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ti("WebGLRenderer: "+n+" extension not supported."),s}}}function rm(i,e,t,n){let s={},r=new WeakMap;function a(h){let u=h.target;u.index!==null&&e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(h){let u=h.attributes;for(let d in u)e.update(u[d],i.ARRAY_BUFFER)}function c(h){let u=[],d=h.index,x=h.attributes.position,g=0;if(x===void 0)return;if(d!==null){let w=d.array;g=d.version;for(let M=0,v=w.length;M<v;M+=3){let C=w[M+0],b=w[M+1],R=w[M+2];u.push(C,b,b,R,R,C)}}else{let w=x.array;g=x.version;for(let M=0,v=w.length/3-1;M<v;M+=3){let C=M+0,b=M+1,R=M+2;u.push(C,b,b,R,R,C)}}let m=new(x.count>=65535?Ys:qs)(u,1);m.version=g;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function f(h){let u=r.get(h);if(u){let d=h.index;d!==null&&u.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function am(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,u){i.drawElements(n,u,r,h*a),t.update(u,n,1)}function c(h,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,h*a,d),t.update(u,n,d))}function f(h,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,h,0,d);let g=0;for(let m=0;m<d;m++)g+=u[m];t.update(g,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function om(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function lm(i,e,t){let n=new WeakMap,s=new Tt;function r(a,o,l){let c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0,u=n.get(o);if(u===void 0||u.count!==h){let P=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],M=0;d===!0&&(M=1),x===!0&&(M=2),g===!0&&(M=3);let v=o.attributes.position.count*M,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let b=new Float32Array(v*C*4*h),R=new Xs(b,v,C,h);R.type=Tn,R.needsUpdate=!0;let _=M*4;for(let F=0;F<h;F++){let H=m[F],Z=p[F],U=w[F],T=v*C*4*F;for(let L=0;L<H.count;L++){let q=L*_;d===!0&&(s.fromBufferAttribute(H,L),b[T+q+0]=s.x,b[T+q+1]=s.y,b[T+q+2]=s.z,b[T+q+3]=0),x===!0&&(s.fromBufferAttribute(Z,L),b[T+q+4]=s.x,b[T+q+5]=s.y,b[T+q+6]=s.z,b[T+q+7]=0),g===!0&&(s.fromBufferAttribute(U,L),b[T+q+8]=s.x,b[T+q+9]=s.y,b[T+q+10]=s.z,b[T+q+11]=U.itemSize===4?s.w:1)}}u={count:h,texture:R,size:new Ee(v,C)},n.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let x=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function cm(i,e,t,n,s){let r=new WeakMap;function a(c){let f=s.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==f&&(e.update(u),r.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==f&&(d.update(),r.set(d,f))}return u}function o(){r=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}var hm={[Pl]:"LINEAR_TONE_MAPPING",[Il]:"REINHARD_TONE_MAPPING",[Ll]:"CINEON_TONE_MAPPING",[Dl]:"ACES_FILMIC_TONE_MAPPING",[Ul]:"AGX_TONE_MAPPING",[Fl]:"NEUTRAL_TONE_MAPPING",[Nl]:"CUSTOM_TONE_MAPPING"};function um(i,e,t,n,s,r){let a=new Qt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new kt;c.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new gt([0,2,0,0,2,0],2));let f=new va({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ft(c,f),u=new gs(-1,1,1,-1,0,1),d=null,x=null,g=!1,m,p=null,w=[],M=!1;this.setSize=function(v,C){a.setSize(v,C),o!==null&&o.setSize(v,C),l!==null&&l.setSize(v,C);for(let b=0;b<w.length;b++){let R=w[b];R.setSize&&R.setSize(v,C)}},this.setEffects=function(v){w=v,M=w.length>0&&w[0].isRenderPass===!0;let C=a.width,b=a.height;w.length>0&&o===null&&(o=new Qt(C,b,{type:wn,depthBuffer:!1,stencilBuffer:!1}),l=new Qt(C,b,{type:wn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<w.length;R++){let _=w[R];_.setSize&&_.setSize(C,b)}},this.begin=function(v,C){if(g||v.toneMapping===Sn&&w.length===0)return!1;if(p=C,C!==null){let b=C.width,R=C.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return M===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=Sn,!0},this.hasRenderPass=function(){return M},this.end=function(v,C){v.toneMapping=m,g=!0;let b=a,R=o;for(let _=0;_<w.length;_++){let P=w[_];P.enabled!==!1&&(P.render(v,R,b,C),P.needsSwap!==!1&&(b=R,R=R===o?l:o))}if(d!==v.outputColorSpace||x!==v.toneMapping){d=v.outputColorSpace,x=v.toneMapping,f.defines={},lt.getTransfer(d)===mt&&(f.defines.SRGB_TRANSFER="");let _=hm[x];_&&(f.defines[_]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(p),v.render(h,u),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var vu=new Jt,sc=new ci(1,1),Mu=new Xs,bu=new ca,Su=new $s,tu=[],nu=[],iu=new Float32Array(16),su=new Float32Array(9),ru=new Float32Array(4);function ws(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=tu[s];if(r===void 0&&(r=new Float32Array(s),tu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Co(i,e){let t=nu[e];t===void 0&&(t=new Int32Array(e),nu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function fm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function dm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function pm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function mm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function gm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;ru.set(n),i.uniformMatrix2fv(this.addr,!1,ru),Ut(t,n)}}function xm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;su.set(n),i.uniformMatrix3fv(this.addr,!1,su),Ut(t,n)}}function _m(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;iu.set(n),i.uniformMatrix4fv(this.addr,!1,iu),Ut(t,n)}}function ym(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function Mm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function bm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function Sm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Em(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function Tm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function Am(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sc.compareFunction=t.isReversedDepthBuffer()?So:bo,r=sc):r=vu,t.setTexture2D(e||r,s)}function Rm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||bu,s)}function Cm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Su,s)}function Pm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Mu,s)}function Im(i){switch(i){case 5126:return fm;case 35664:return dm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return xm;case 35676:return _m;case 5124:case 35670:return ym;case 35667:case 35671:return vm;case 35668:case 35672:return Mm;case 35669:case 35673:return bm;case 5125:return Sm;case 36294:return Em;case 36295:return Tm;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Pm}}function Lm(i,e){i.uniform1fv(this.addr,e)}function Dm(i,e){let t=ws(e,this.size,2);i.uniform2fv(this.addr,t)}function Nm(i,e){let t=ws(e,this.size,3);i.uniform3fv(this.addr,t)}function Um(i,e){let t=ws(e,this.size,4);i.uniform4fv(this.addr,t)}function Fm(i,e){let t=ws(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Om(i,e){let t=ws(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Bm(i,e){let t=ws(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function zm(i,e){i.uniform1iv(this.addr,e)}function km(i,e){i.uniform2iv(this.addr,e)}function Hm(i,e){i.uniform3iv(this.addr,e)}function Gm(i,e){i.uniform4iv(this.addr,e)}function Vm(i,e){i.uniform1uiv(this.addr,e)}function Wm(i,e){i.uniform2uiv(this.addr,e)}function Xm(i,e){i.uniform3uiv(this.addr,e)}function qm(i,e){i.uniform4uiv(this.addr,e)}function Ym(i,e,t){let n=this.cache,s=e.length,r=Co(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=sc:a=vu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Zm(i,e,t){let n=this.cache,s=e.length,r=Co(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||bu,r[a])}function Jm(i,e,t){let n=this.cache,s=e.length,r=Co(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Su,r[a])}function $m(i,e,t){let n=this.cache,s=e.length,r=Co(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Mu,r[a])}function Km(i){switch(i){case 5126:return Lm;case 35664:return Dm;case 35665:return Nm;case 35666:return Um;case 35674:return Fm;case 35675:return Om;case 35676:return Bm;case 5124:case 35670:return zm;case 35667:case 35671:return km;case 35668:case 35672:return Hm;case 35669:case 35673:return Gm;case 5125:return Vm;case 36294:return Wm;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return $m}}var rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Im(t.type)}},ac=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Km(t.type)}},oc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},nc=/(\w+)(\])?(\[|\.)?/g;function au(i,e){i.seq.push(e),i.map[e.id]=e}function jm(i,e,t){let n=i.name,s=n.length;for(nc.lastIndex=0;;){let r=nc.exec(n),a=nc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){au(t,c===void 0?new rc(o,i,e):new ac(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new oc(o),au(t,h)),t=h}}}var Ts=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);jm(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function ou(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Qm=37297,eg=0;function tg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var lu=new Qe;function ng(i){lt._getMatrix(lu,lt.workingColorSpace,i);let e=`mat3( ${lu.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case Gs:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function cu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+tg(i.getShaderSource(e),o)}else return r}function ig(i,e){let t=ng(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var sg={[Pl]:"Linear",[Il]:"Reinhard",[Ll]:"Cineon",[Dl]:"ACESFilmic",[Ul]:"AgX",[Fl]:"Neutral",[Nl]:"Custom"};function rg(i,e){let t=sg[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var To=new V;function ag(){lt.getLuminanceCoefficients(To);let i=To.x.toFixed(4),e=To.y.toFixed(4),t=To.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function og(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function lg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Mr(i){return i!==""}function hu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(i){return i.replace(hg,fg)}var ug=new Map;function fg(i,e){let t=it[e];if(t===void 0){let n=ug.get(e);if(n!==void 0)t=it[n],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return lc(t)}var dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(i){return i.replace(dg,pg)}function pg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function du(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var mg={[Pi]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};function gg(i){return mg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xg={[pi]:"ENVMAP_TYPE_CUBE",[Li]:"ENVMAP_TYPE_CUBE",[ur]:"ENVMAP_TYPE_CUBE_UV"};function _g(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":xg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var yg={[Li]:"ENVMAP_MODE_REFRACTION"};function vg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":yg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Mg={[Cl]:"ENVMAP_BLENDING_MULTIPLY",[wh]:"ENVMAP_BLENDING_MIX",[Ah]:"ENVMAP_BLENDING_ADD"};function bg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Mg[i.combine]||"ENVMAP_BLENDING_NONE"}function Sg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Eg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=gg(t),c=_g(t),f=vg(t),h=bg(t),u=Sg(t),d=og(t),x=lg(r),g=s.createProgram(),m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Mr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Mr).join(`
`),p.length>0&&(p+=`
`)):(m=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),p=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?it.tonemapping_pars_fragment:"",t.toneMapping!==Sn?rg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,ig("linearToOutputTexel",t.outputColorSpace),ag(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mr).join(`
`)),a=lc(a),a=hu(a,t),a=uu(a,t),o=lc(o),o=hu(o,t),o=uu(o,t),a=fu(a),o=fu(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=w+m+a,v=w+p+o,C=ou(s,s.VERTEX_SHADER,M),b=ou(s,s.FRAGMENT_SHADER,v);s.attachShader(g,C),s.attachShader(g,b),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(H){if(i.debug.checkShaderErrors){let Z=s.getProgramInfoLog(g)||"",U=s.getShaderInfoLog(C)||"",T=s.getShaderInfoLog(b)||"",L=Z.trim(),q=U.trim(),E=T.trim(),A=!0,I=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(A=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,C,b);else{let K=cu(s,C,"vertex"),O=cu(s,b,"fragment");Je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+L+`
`+K+`
`+O)}else L!==""?$e("WebGLProgram: Program Info Log:",L):(q===""||E==="")&&(I=!1);I&&(H.diagnostics={runnable:A,programLog:L,vertexShader:{log:q,prefix:m},fragmentShader:{log:E,prefix:p}})}s.deleteShader(C),s.deleteShader(b),_=new Ts(s,g),P=cg(s,g)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let P;this.getAttributes=function(){return P===void 0&&R(this),P};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(g,Qm)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=b,this}var Tg=0,cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new hc(e),t.set(e,n)),n}},hc=class{constructor(e){this.id=Tg++,this.code=e,this.usedTimes=0}};function wg(i){return i===xi||i===xr||i===_r}function Ag(i,e,t,n,s,r){let a=new os,o=new cc,l=new Set,c=[],f=new Map,h=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,P,F,H,Z,U){let T=H.fog,L=Z.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?H.environment:null,E=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,A=e.get(_.envMap||q,E),I=A&&A.mapping===ur?A.image.height:null,K=d[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&$e("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let O=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ee=O!==void 0?O.length:0,Q=0;L.morphAttributes.position!==void 0&&(Q=1),L.morphAttributes.normal!==void 0&&(Q=2),L.morphAttributes.color!==void 0&&(Q=3);let ae,ce,k,z;if(K){let vt=kn[K];ae=vt.vertexShader,ce=vt.fragmentShader}else{ae=_.vertexShader,ce=_.fragmentShader;let vt=o.getVertexShaderStage(_),dt=o.getFragmentShaderStage(_);o.update(_,vt,dt),k=vt.id,z=dt.id}let X=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),se=Z.isInstancedMesh===!0,ue=Z.isBatchedMesh===!0,Re=!!_.map,Ke=!!_.matcap,de=!!A,pe=!!_.aoMap,ve=!!_.lightMap,be=!!_.bumpMap&&_.wireframe===!1,Ae=!!_.normalMap,$=!!_.displacementMap,re=!!_.emissiveMap,me=!!_.metalnessMap,Se=!!_.roughnessMap,G=_.anisotropy>0,st=_.clearcoat>0,je=_.dispersion>0,N=_.retroreflectivity>0,y=_.iridescence>0,j=_.sheen>0,W=_.transmission>0,ie=G&&!!_.anisotropyMap,Me=st&&!!_.clearcoatMap,we=st&&!!_.clearcoatNormalMap,fe=st&&!!_.clearcoatRoughnessMap,ge=y&&!!_.iridescenceMap,Ce=y&&!!_.iridescenceThicknessMap,Ve=j&&!!_.sheenColorMap,De=j&&!!_.sheenRoughnessMap,Pe=!!_.specularMap,qe=!!_.specularColorMap,Ze=!!_.specularIntensityMap,tt=W&&!!_.transmissionMap,J=W&&!!_.thicknessMap,Ie=!!_.gradientMap,_e=!!_.alphaMap,Le=_.alphaTest>0,Oe=!!_.alphaHash,ye=!!_.extensions,Ye=Sn;_.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ye=i.toneMapping);let We={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:ae,fragmentShader:ce,defines:_.defines,customVertexShaderID:k,customFragmentShaderID:z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:ue,batchingColor:ue&&Z._colorsTexture!==null,instancing:se,instancingColor:se&&Z.instanceColor!==null,instancingMorph:se&&Z.morphTexture!==null,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Re,matcap:Ke,envMap:de,envMapMode:de&&A.mapping,envMapCubeUVHeight:I,aoMap:pe,lightMap:ve,bumpMap:be,normalMap:Ae,displacementMap:$,emissiveMap:re,normalMapObjectSpace:Ae&&_.normalMapType===Ph,normalMapTangentSpace:Ae&&_.normalMapType===Mo,packedNormalMap:Ae&&_.normalMapType===Mo&&wg(_.normalMap.format),metalnessMap:me,roughnessMap:Se,anisotropy:G,anisotropyMap:ie,clearcoat:st,clearcoatMap:Me,clearcoatNormalMap:we,clearcoatRoughnessMap:fe,dispersion:je,retroreflection:N,iridescence:y,iridescenceMap:ge,iridescenceThicknessMap:Ce,sheen:j,sheenColorMap:Ve,sheenRoughnessMap:De,specularMap:Pe,specularColorMap:qe,specularIntensityMap:Ze,transmission:W,transmissionMap:tt,thicknessMap:J,gradientMap:Ie,opaque:_.transparent===!1&&_.blending===vs&&_.alphaToCoverage===!1,alphaMap:_e,alphaTest:Le,alphaHash:Oe,combine:_.combine,mapUv:Re&&x(_.map.channel),aoMapUv:pe&&x(_.aoMap.channel),lightMapUv:ve&&x(_.lightMap.channel),bumpMapUv:be&&x(_.bumpMap.channel),normalMapUv:Ae&&x(_.normalMap.channel),displacementMapUv:$&&x(_.displacementMap.channel),emissiveMapUv:re&&x(_.emissiveMap.channel),metalnessMapUv:me&&x(_.metalnessMap.channel),roughnessMapUv:Se&&x(_.roughnessMap.channel),anisotropyMapUv:ie&&x(_.anisotropyMap.channel),clearcoatMapUv:Me&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:we&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(_.sheenRoughnessMap.channel),specularMapUv:Pe&&x(_.specularMap.channel),specularColorMapUv:qe&&x(_.specularColorMap.channel),specularIntensityMapUv:Ze&&x(_.specularIntensityMap.channel),transmissionMapUv:tt&&x(_.transmissionMap.channel),thicknessMapUv:J&&x(_.thicknessMap.channel),alphaMapUv:_e&&x(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Ae||G),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!L.attributes.uv&&(Re||_e),fog:!!T,useFog:_.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&Ae===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:oe,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Q,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Re&&_.map.isVideoTexture===!0&&lt.getTransfer(_.map.colorSpace)===mt,decodeVideoTextureEmissive:re&&_.emissiveMap.isVideoTexture===!0&&lt.getTransfer(_.emissiveMap.colorSpace)===mt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===en,flipSided:_.side===Ht,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ye&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&_.extensions.multiDraw===!0||ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function m(_){let P=[];if(_.shaderID?P.push(_.shaderID):(P.push(_.customVertexShaderID),P.push(_.customFragmentShaderID)),_.defines!==void 0)for(let F in _.defines)P.push(F),P.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(p(P,_),w(P,_),P.push(i.outputColorSpace)),P.push(_.customProgramCacheKey),P.join()}function p(_,P){_.push(P.precision),_.push(P.outputColorSpace),_.push(P.envMapMode),_.push(P.envMapCubeUVHeight),_.push(P.mapUv),_.push(P.alphaMapUv),_.push(P.lightMapUv),_.push(P.aoMapUv),_.push(P.bumpMapUv),_.push(P.normalMapUv),_.push(P.displacementMapUv),_.push(P.emissiveMapUv),_.push(P.metalnessMapUv),_.push(P.roughnessMapUv),_.push(P.anisotropyMapUv),_.push(P.clearcoatMapUv),_.push(P.clearcoatNormalMapUv),_.push(P.clearcoatRoughnessMapUv),_.push(P.iridescenceMapUv),_.push(P.iridescenceThicknessMapUv),_.push(P.sheenColorMapUv),_.push(P.sheenRoughnessMapUv),_.push(P.specularMapUv),_.push(P.specularColorMapUv),_.push(P.specularIntensityMapUv),_.push(P.transmissionMapUv),_.push(P.thicknessMapUv),_.push(P.combine),_.push(P.fogExp2),_.push(P.sizeAttenuation),_.push(P.morphTargetsCount),_.push(P.morphAttributeCount),_.push(P.numSunLights),_.push(P.numDirLights),_.push(P.numPointLights),_.push(P.numSpotLights),_.push(P.numSpotLightMaps),_.push(P.numHemiLights),_.push(P.numRectAreaLights),_.push(P.numSunLightShadows),_.push(P.numDirLightShadows),_.push(P.numPointLightShadows),_.push(P.numSpotLightShadows),_.push(P.numSpotLightShadowsWithMaps),_.push(P.numLightProbes),_.push(P.shadowMapType),_.push(P.toneMapping),_.push(P.numClippingPlanes),_.push(P.numClipIntersection),_.push(P.depthPacking)}function w(_,P){a.disableAll(),P.instancing&&a.enable(0),P.instancingColor&&a.enable(1),P.instancingMorph&&a.enable(2),P.matcap&&a.enable(3),P.envMap&&a.enable(4),P.normalMapObjectSpace&&a.enable(5),P.normalMapTangentSpace&&a.enable(6),P.clearcoat&&a.enable(7),P.iridescence&&a.enable(8),P.alphaTest&&a.enable(9),P.vertexColors&&a.enable(10),P.vertexAlphas&&a.enable(11),P.vertexUv1s&&a.enable(12),P.vertexUv2s&&a.enable(13),P.vertexUv3s&&a.enable(14),P.vertexTangents&&a.enable(15),P.anisotropy&&a.enable(16),P.alphaHash&&a.enable(17),P.batching&&a.enable(18),P.dispersion&&a.enable(19),P.retroreflection&&a.enable(24),P.batchingColor&&a.enable(20),P.gradientMap&&a.enable(21),P.packedNormalMap&&a.enable(22),P.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.reversedDepthBuffer&&a.enable(4),P.skinning&&a.enable(5),P.morphTargets&&a.enable(6),P.morphNormals&&a.enable(7),P.morphColors&&a.enable(8),P.premultipliedAlpha&&a.enable(9),P.shadowMapEnabled&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),P.decodeVideoTextureEmissive&&a.enable(20),P.alphaToCoverage&&a.enable(21),P.numLightProbeGrids>0&&a.enable(22),P.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let P=d[_.type],F;if(P){let H=kn[P];F=Zh.clone(H.uniforms)}else F=_.uniforms;return F}function v(_,P){let F=f.get(P);return F!==void 0?++F.usedTimes:(F=new Eg(i,P,_,s),c.push(F),f.set(P,F)),F}function C(_){if(--_.usedTimes===0){let P=c.indexOf(_);c[P]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function R(){o.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:M,acquireProgram:v,releaseProgram:C,releaseShaderCache:b,programs:c,dispose:R}}function Rg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Cg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function pu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function mu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,x,g,m,p){let w=i[e];return w===void 0?(w={id:u.id,object:u,geometry:d,material:x,materialVariant:a(u),groupOrder:g,renderOrder:u.renderOrder,z:m,group:p},i[e]=w):(w.id=u.id,w.object=u,w.geometry=d,w.material=x,w.materialVariant=a(u),w.groupOrder=g,w.renderOrder=u.renderOrder,w.z=m,w.group=p),e++,w}function l(u,d,x,g,m,p,w){w.reversedDepth===!0&&(m=-m);let M=o(u,d,x,g,m,p);x.transmission>0?n.push(M):x.transparent===!0?s.push(M):t.push(M)}function c(u,d,x,g,m,p){let w=o(u,d,x,g,m,p);x.transmission>0?n.unshift(w):x.transparent===!0?s.unshift(w):t.unshift(w)}function f(u,d){t.length>1&&t.sort(u||Cg),n.length>1&&n.sort(d||pu),s.length>1&&s.sort(d||pu)}function h(){for(let u=e,d=i.length;u<d;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:f}}function Pg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new mu,i.set(n,[a])):s>=r.length?(a=new mu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ig(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new V,color:new et};break;case"SpotLight":t={position:new V,direction:new V,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function Lg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Dg=0;function Ng(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ug(i){let e=new Ig,t=Lg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let s=new V,r=new bt,a=new bt;function o(c){let f=0,h=0,u=0;for(let Z=0;Z<9;Z++)n.probe[Z].set(0,0,0);let d=0,x=0,g=0,m=0,p=0,w=0,M=0,v=0,C=0,b=0,R=0,_=0,P=0,F=0;c.sort(Ng);for(let Z=0,U=c.length;Z<U;Z++){let T=c[Z],L=T.color,q=T.intensity,E=T.distance,A=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===xi?A=T.shadow.map.texture:A=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)f+=L.r*q,h+=L.g*q,u+=L.b*q;else if(T.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(T.sh.coefficients[I],q);F++}else if(T.isSunLight){let I=e.get(T);if(I.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let K=T.shadow,O=t.get(T);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[x]=O,n.sunShadowMap[x]=A;let ee=K.getViewportCount();for(let Q=0;Q<ee;Q++)n.sunShadowMatrix[g+Q]=K.getMatrix(Q),n.sunShadowCascade[g+Q]=K._cascadeData[Q];g+=ee,x++}n.sun[d]=I,d++}else if(T.isDirectionalLight){let I=e.get(T);if(I.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let K=T.shadow,O=t.get(T);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,n.directionalShadow[m]=O,n.directionalShadowMap[m]=A,n.directionalShadowMatrix[m]=T.shadow.matrix,C++}n.directional[m]=I,m++}else if(T.isSpotLight){let I=e.get(T);I.position.setFromMatrixPosition(T.matrixWorld),I.color.copy(L).multiplyScalar(q),I.distance=E,I.coneCos=Math.cos(T.angle),I.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),I.decay=T.decay,n.spot[w]=I;let K=T.shadow;if(T.map&&(n.spotLightMap[_]=T.map,_++,K.updateMatrices(T),T.castShadow&&P++),n.spotLightMatrix[w]=K.matrix,T.castShadow){let O=t.get(T);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,n.spotShadow[w]=O,n.spotShadowMap[w]=A,R++}w++}else if(T.isRectAreaLight){let I=e.get(T);I.color.copy(L).multiplyScalar(q),I.halfWidth.set(T.width*.5,0,0),I.halfHeight.set(0,T.height*.5,0),n.rectArea[M]=I,M++}else if(T.isPointLight){let I=e.get(T);if(I.color.copy(T.color).multiplyScalar(T.intensity),I.distance=T.distance,I.decay=T.decay,T.castShadow){let K=T.shadow,O=t.get(T);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,O.shadowCameraNear=K.camera.near,O.shadowCameraFar=K.camera.far,n.pointShadow[p]=O,n.pointShadowMap[p]=A,n.pointShadowMatrix[p]=T.shadow.matrix,b++}n.point[p]=I,p++}else if(T.isHemisphereLight){let I=e.get(T);I.skyColor.copy(T.color).multiplyScalar(q),I.groundColor.copy(T.groundColor).multiplyScalar(q),n.hemi[v]=I,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=u;let H=n.hash;(H.sunLength!==d||H.directionalLength!==m||H.pointLength!==p||H.spotLength!==w||H.rectAreaLength!==M||H.hemiLength!==v||H.numSunShadows!==x||H.numDirectionalShadows!==C||H.numPointShadows!==b||H.numSpotShadows!==R||H.numSpotMaps!==_||H.numLightProbes!==F)&&(n.sun.length=d,n.directional.length=m,n.spot.length=w,n.rectArea.length=M,n.point.length=p,n.hemi.length=v,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-P,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=F,H.sunLength=d,H.directionalLength=m,H.pointLength=p,H.spotLength=w,H.rectAreaLength=M,H.hemiLength=v,H.numSunShadows=x,H.numDirectionalShadows=C,H.numPointShadows=b,H.numSpotShadows=R,H.numSpotMaps=_,H.numLightProbes=F,n.version=Dg++)}function l(c,f){let h=0,u=0,d=0,x=0,g=0,m=0,p=f.matrixWorldInverse;for(let w=0,M=c.length;w<M;w++){let v=c[w];if(v.isSunLight){let C=n.sun[h];C.direction.setFromMatrixPosition(v.matrixWorld),C.direction.transformDirection(p),h++}else if(v.isDirectionalLight){let C=n.directional[u];C.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),u++}else if(v.isSpotLight){let C=n.spot[x];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),x++}else if(v.isRectAreaLight){let C=n.rectArea[g];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),C.halfWidth.set(v.width*.5,0,0),C.halfHeight.set(0,v.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let C=n.point[d];C.position.setFromMatrixPosition(v.matrixWorld),C.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let C=n.hemi[m];C.direction.setFromMatrixPosition(v.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function gu(i){let e=new Ug(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function f(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Fg(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new gu(i),e.set(s,[o])):r>=a.length?(o=new gu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Og=`void main() {
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
}`,zg=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],kg=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],xu=new bt,vr=new V,ic=new V;function Hg(i,e,t){let n=new hs,s=new Ee,r=new Ee,a=new Tt,o=new Ma,l=new ba,c={},f=t.maxTextureSize,h={[di]:Ht,[Ht]:di,[en]:en},u=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Og,fragmentShader:Bg}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let x=new kt;x.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new ft(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pi;let p=this.type;this.render=function(b,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===oh&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Pi);let P=i.getRenderTarget(),F=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(Bn),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let U=p!==this.type;U&&R.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(L=>L.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,L=b.length;T<L;T++){let q=b[T],E=q.shadow;if(E===void 0){$e("WebGLShadowMap:",q,"has no shadow.");continue}if(E.autoUpdate===!1&&E.needsUpdate===!1)continue;s.copy(E.mapSize);let A=E.getFrameExtents();s.multiply(A),r.copy(E.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/A.x),s.x=r.x*A.x,E.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/A.y),s.y=r.y*A.y,E.mapSize.y=r.y));let I=i.state.buffers.depth.getReversed();if(E.camera._reversedDepth=I,E.map===null||U===!0){if(E.map!==null&&(E.map.depthTexture!==null&&(E.map.depthTexture.dispose(),E.map.depthTexture=null),E.map.dispose()),this.type===ys){if(q.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}E.map=new Qt(s.x,s.y,{format:xi,type:wn,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),E.map.texture.name=q.name+".shadowMap",E.map.depthTexture=new ci(s.x,s.y,Tn),E.map.depthTexture.name=q.name+".shadowMapDepth",E.map.depthTexture.format=Dn,E.map.depthTexture.compareFunction=null,E.map.depthTexture.minFilter=Ot,E.map.depthTexture.magFilter=Ot}else q.isPointLight?(E.map=new Ao(s.x),E.map.depthTexture=new fa(s.x,En)):(E.map=new Qt(s.x,s.y),E.map.depthTexture=new ci(s.x,s.y,En)),E.map.depthTexture.name=q.name+".shadowMap",E.map.depthTexture.format=Dn,this.type===Pi?(E.map.depthTexture.compareFunction=I?So:bo,E.map.depthTexture.minFilter=Bt,E.map.depthTexture.magFilter=Bt):(E.map.depthTexture.compareFunction=null,E.map.depthTexture.minFilter=Ot,E.map.depthTexture.magFilter=Ot);E.camera.updateProjectionMatrix()}E.map.isWebGLCubeRenderTarget!==!0&&(E.map.width!==s.x||E.map.height!==s.y)&&E.map.setSize(s.x,s.y);let K=E.map.isWebGLCubeRenderTarget?6:E.getViewportCount();q.isPointLight!==!0&&E.updateMatrices(q,_);for(let O=0;O<K;O++){let ee=E.getCamera(O);if(q.isPointLight){let Q=E.camera,ae=E.matrix,ce=q.distance||Q.far;ce!==Q.far&&(Q.far=ce,Q.updateProjectionMatrix()),vr.setFromMatrixPosition(q.matrixWorld),Q.position.copy(vr),ic.copy(Q.position),ic.add(zg[O]),Q.up.copy(kg[O]),Q.lookAt(ic),Q.updateMatrixWorld(),ae.makeTranslation(-vr.x,-vr.y,-vr.z),xu.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),E._frustum.setFromProjectionMatrix(xu,Q.coordinateSystem,Q.reversedDepth)}if(E.map.isWebGLCubeRenderTarget)i.setRenderTarget(E.map,O),i.clear();else{O===0&&(i.setRenderTarget(E.map),i.clear());let Q=E.getViewport(O);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),Z.viewport(a)}n=E.getFrustum(O),v(R,_,ee,q,this.type)}E.isPointLightShadow!==!0&&this.type===ys&&w(E,_),E.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(P,F,H)};function w(b,R){let _=e.update(g);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Qt(s.x,s.y,{format:xi,type:wn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,_,u,g,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,_,d,g,null)}function M(b,R,_,P){let F=null,H=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(H!==void 0)F=H;else if(F=_.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let Z=F.uuid,U=R.uuid,T=c[Z];T===void 0&&(T={},c[Z]=T);let L=T[U];L===void 0&&(L=F.clone(),T[U]=L,R.addEventListener("dispose",C)),F=L}if(F.visible=R.visible,F.wireframe=R.wireframe,P===ys?F.side=R.shadowSide!==null?R.shadowSide:R.side:F.side=R.shadowSide!==null?R.shadowSide:h[R.side],F.alphaMap=R.alphaMap,F.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,F.map=R.map,F.clipShadows=R.clipShadows,F.clippingPlanes=R.clippingPlanes,F.clipIntersection=R.clipIntersection,F.displacementMap=R.displacementMap,F.displacementScale=R.displacementScale,F.displacementBias=R.displacementBias,F.wireframeLinewidth=R.wireframeLinewidth,F.linewidth=R.linewidth,_.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let Z=i.properties.get(F);Z.light=_}return F}function v(b,R,_,P,F){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&F===ys)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let U=e.update(b),T=b.material;if(Array.isArray(T)){let L=U.groups;for(let q=0,E=L.length;q<E;q++){let A=L[q],I=T[A.materialIndex];if(I&&I.visible){let K=M(b,I,P,F);b.onBeforeShadow(i,b,R,_,U,K,A),i.renderBufferDirect(_,null,U,K,b,A),b.onAfterShadow(i,b,R,_,U,K,A)}}}else if(T.visible){let L=M(b,T,P,F);b.onBeforeShadow(i,b,R,_,U,L,null),i.renderBufferDirect(_,null,U,L,b,null),b.onAfterShadow(i,b,R,_,U,L,null)}}let Z=b.children;for(let U=0,T=Z.length;U<T;U++)v(Z[U],R,_,P,F)}function C(b){b.target.removeEventListener("dispose",C);for(let _ in c){let P=c[_],F=b.target.uuid;F in P&&(P[F].dispose(),delete P[F])}}}function Gg(i,e){function t(){let J=!1,Ie=new Tt,_e=null,Le=new Tt(0,0,0,0);return{setMask:function(Oe){_e!==Oe&&!J&&(i.colorMask(Oe,Oe,Oe,Oe),_e=Oe)},setLocked:function(Oe){J=Oe},setClear:function(Oe,ye,Ye,We,vt){vt===!0&&(Oe*=We,ye*=We,Ye*=We),Ie.set(Oe,ye,Ye,We),Le.equals(Ie)===!1&&(i.clearColor(Oe,ye,Ye,We),Le.copy(Ie))},reset:function(){J=!1,_e=null,Le.set(-1,0,0,0)}}}function n(){let J=!1,Ie=!1,_e=null,Le=null,Oe=null;return{setReversed:function(ye){if(Ie!==ye){let Ye=e.get("EXT_clip_control");ye?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Ie=ye;let We=Oe;Oe=null,this.setClear(We)}},getReversed:function(){return Ie},setTest:function(ye){ye?X(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(ye){_e!==ye&&!J&&(i.depthMask(ye),_e=ye)},setFunc:function(ye){if(Ie&&(ye=Hh[ye]),Le!==ye){switch(ye){case Kr:i.depthFunc(i.NEVER);break;case jr:i.depthFunc(i.ALWAYS);break;case Qr:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case ea:i.depthFunc(i.EQUAL);break;case ta:i.depthFunc(i.GEQUAL);break;case na:i.depthFunc(i.GREATER);break;case ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Le=ye}},setLocked:function(ye){J=ye},setClear:function(ye){Oe!==ye&&(Oe=ye,Ie&&(ye=1-ye),i.clearDepth(ye))},reset:function(){J=!1,_e=null,Le=null,Oe=null,Ie=!1}}}function s(){let J=!1,Ie=null,_e=null,Le=null,Oe=null,ye=null,Ye=null,We=null,vt=null;return{setTest:function(dt){J||(dt?X(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(dt){Ie!==dt&&!J&&(i.stencilMask(dt),Ie=dt)},setFunc:function(dt,gn,Rn){(_e!==dt||Le!==gn||Oe!==Rn)&&(i.stencilFunc(dt,gn,Rn),_e=dt,Le=gn,Oe=Rn)},setOp:function(dt,gn,Rn){(ye!==dt||Ye!==gn||We!==Rn)&&(i.stencilOp(dt,gn,Rn),ye=dt,Ye=gn,We=Rn)},setLocked:function(dt){J=dt},setClear:function(dt){vt!==dt&&(i.clearStencil(dt),vt=dt)},reset:function(){J=!1,Ie=null,_e=null,Le=null,Oe=null,ye=null,Ye=null,We=null,vt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,f={},h={},u={},d=new WeakMap,x=[],g=null,m=!1,p=null,w=null,M=null,v=null,C=null,b=null,R=null,_=new et(0,0,0),P=0,F=!1,H=null,Z=null,U=null,T=null,L=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),E=!1,A=0,I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(A=parseFloat(/^WebGL (\d)/.exec(I)[1]),E=A>=1):I.indexOf("OpenGL ES")!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),E=A>=2);let K=null,O={},ee=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),ae=new Tt().fromArray(ee),ce=new Tt().fromArray(Q);function k(J,Ie,_e,Le){let Oe=new Uint8Array(4),ye=i.createTexture();i.bindTexture(J,ye),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<_e;Ye++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,Oe):i.texImage2D(Ie+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Oe);return ye}let z={};z[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),z[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),z[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),X(i.DEPTH_TEST),a.setFunc(is),be(!1),Ae(Sl),X(i.CULL_FACE),pe(Bn);function X(J){f[J]!==!0&&(i.enable(J),f[J]=!0)}function oe(J){f[J]!==!1&&(i.disable(J),f[J]=!1)}function se(J,Ie){return u[J]!==Ie?(i.bindFramebuffer(J,Ie),u[J]=Ie,J===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ie),J===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function ue(J,Ie){let _e=x,Le=!1;if(J){_e=d.get(Ie),_e===void 0&&(_e=[],d.set(Ie,_e));let Oe=J.textures;if(_e.length!==Oe.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,Ye=Oe.length;ye<Ye;ye++)_e[ye]=i.COLOR_ATTACHMENT0+ye;_e.length=Oe.length,Le=!0}}else _e[0]!==i.BACK&&(_e[0]=i.BACK,Le=!0);Le&&i.drawBuffers(_e)}function Re(J){return g!==J?(i.useProgram(J),g=J,!0):!1}let Ke={[Ii]:i.FUNC_ADD,[ch]:i.FUNC_SUBTRACT,[hh]:i.FUNC_REVERSE_SUBTRACT};Ke[uh]=i.MIN,Ke[fh]=i.MAX;let de={[dh]:i.ZERO,[ph]:i.ONE,[mh]:i.SRC_COLOR,[Al]:i.SRC_ALPHA,[Mh]:i.SRC_ALPHA_SATURATE,[yh]:i.DST_COLOR,[xh]:i.DST_ALPHA,[gh]:i.ONE_MINUS_SRC_COLOR,[Rl]:i.ONE_MINUS_SRC_ALPHA,[vh]:i.ONE_MINUS_DST_COLOR,[_h]:i.ONE_MINUS_DST_ALPHA,[bh]:i.CONSTANT_COLOR,[Sh]:i.ONE_MINUS_CONSTANT_COLOR,[Eh]:i.CONSTANT_ALPHA,[Th]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(J,Ie,_e,Le,Oe,ye,Ye,We,vt,dt){if(J===Bn){m===!0&&(oe(i.BLEND),m=!1);return}if(m===!1&&(X(i.BLEND),m=!0),J!==lh){if(J!==p||dt!==F){if((w!==Ii||C!==Ii)&&(i.blendEquation(i.FUNC_ADD),w=Ii,C=Ii),dt)switch(J){case vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case El:i.blendFunc(i.ONE,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Je("WebGLState: Invalid blending: ",J);break}else switch(J){case vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case El:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tl:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wl:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",J);break}M=null,v=null,b=null,R=null,_.set(0,0,0),P=0,p=J,F=dt}return}Oe=Oe||Ie,ye=ye||_e,Ye=Ye||Le,(Ie!==w||Oe!==C)&&(i.blendEquationSeparate(Ke[Ie],Ke[Oe]),w=Ie,C=Oe),(_e!==M||Le!==v||ye!==b||Ye!==R)&&(i.blendFuncSeparate(de[_e],de[Le],de[ye],de[Ye]),M=_e,v=Le,b=ye,R=Ye),(We.equals(_)===!1||vt!==P)&&(i.blendColor(We.r,We.g,We.b,vt),_.copy(We),P=vt),p=J,F=!1}function ve(J,Ie){J.side===en?oe(i.CULL_FACE):X(i.CULL_FACE);let _e=J.side===Ht;Ie&&(_e=!_e),be(_e),J.blending===vs&&J.transparent===!1?pe(Bn):pe(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),a.setFunc(J.depthFunc),a.setTest(J.depthTest),a.setMask(J.depthWrite),r.setMask(J.colorWrite);let Le=J.stencilWrite;o.setTest(Le),Le&&(o.setMask(J.stencilWriteMask),o.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),o.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),re(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(J){H!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),H=J)}function Ae(J){J!==rh?(X(i.CULL_FACE),J!==Z&&(J===Sl?i.cullFace(i.BACK):J===ah?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),Z=J}function $(J){J!==U&&(E&&i.lineWidth(J),U=J)}function re(J,Ie,_e){J?(X(i.POLYGON_OFFSET_FILL),(T!==Ie||L!==_e)&&(T=Ie,L=_e,a.getReversed()&&(Ie=-Ie),i.polygonOffset(Ie,_e))):oe(i.POLYGON_OFFSET_FILL)}function me(J){J?X(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function Se(J){J===void 0&&(J=i.TEXTURE0+q-1),K!==J&&(i.activeTexture(J),K=J)}function G(J,Ie,_e){_e===void 0&&(K===null?_e=i.TEXTURE0+q-1:_e=K);let Le=O[_e];Le===void 0&&(Le={type:void 0,texture:void 0},O[_e]=Le),(Le.type!==J||Le.texture!==Ie)&&(K!==_e&&(i.activeTexture(_e),K=_e),i.bindTexture(J,Ie||z[J]),Le.type=J,Le.texture=Ie)}function st(){let J=O[K];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function je(){try{i.compressedTexImage2D(...arguments)}catch(J){Je("WebGLState:",J)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(J){Je("WebGLState:",J)}}function y(){try{i.texSubImage2D(...arguments)}catch(J){Je("WebGLState:",J)}}function j(){try{i.texSubImage3D(...arguments)}catch(J){Je("WebGLState:",J)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(J){Je("WebGLState:",J)}}function ie(){try{i.compressedTexSubImage3D(...arguments)}catch(J){Je("WebGLState:",J)}}function Me(){try{i.texStorage2D(...arguments)}catch(J){Je("WebGLState:",J)}}function we(){try{i.texStorage3D(...arguments)}catch(J){Je("WebGLState:",J)}}function fe(){try{i.texImage2D(...arguments)}catch(J){Je("WebGLState:",J)}}function ge(){try{i.texImage3D(...arguments)}catch(J){Je("WebGLState:",J)}}function Ce(J){return h[J]!==void 0?h[J]:i.getParameter(J)}function Ve(J,Ie){h[J]!==Ie&&(i.pixelStorei(J,Ie),h[J]=Ie)}function De(J){ae.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),ae.copy(J))}function Pe(J){ce.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),ce.copy(J))}function qe(J,Ie){let _e=c.get(Ie);_e===void 0&&(_e=new WeakMap,c.set(Ie,_e));let Le=_e.get(J);Le===void 0&&(Le=i.getUniformBlockIndex(Ie,J.name),_e.set(J,Le))}function Ze(J,Ie){let Le=c.get(Ie).get(J);l.get(Ie)!==Le&&(i.uniformBlockBinding(Ie,Le,J.__bindingPointIndex),l.set(Ie,Le))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},h={},K=null,O={},u={},d=new WeakMap,x=[],g=null,m=!1,p=null,w=null,M=null,v=null,C=null,b=null,R=null,_=new et(0,0,0),P=0,F=!1,H=null,Z=null,U=null,T=null,L=null,ae.set(0,0,i.canvas.width,i.canvas.height),ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:X,disable:oe,bindFramebuffer:se,drawBuffers:ue,useProgram:Re,setBlending:pe,setMaterial:ve,setFlipSided:be,setCullFace:Ae,setLineWidth:$,setPolygonOffset:re,setScissorTest:me,activeTexture:Se,bindTexture:G,unbindTexture:st,compressedTexImage2D:je,compressedTexImage3D:N,texImage2D:fe,texImage3D:ge,pixelStorei:Ve,getParameter:Ce,updateUBOMapping:qe,uniformBlockBinding:Ze,texStorage2D:Me,texStorage3D:we,texSubImage2D:y,texSubImage3D:j,compressedTexSubImage2D:W,compressedTexSubImage3D:ie,scissor:De,viewport:Pe,reset:tt}}function Vg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,f=new WeakMap,h=new Set,u,d=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,y){return x?new OffscreenCanvas(N,y):Vs("canvas")}function m(N,y,j){let W=1,ie=je(N);if((ie.width>j||ie.height>j)&&(W=j/Math.max(ie.width,ie.height)),W<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let Me=Math.floor(W*ie.width),we=Math.floor(W*ie.height);u===void 0&&(u=g(Me,we));let fe=y?g(Me,we):u;return fe.width=Me,fe.height=we,fe.getContext("2d").drawImage(N,0,0,Me,we),$e("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Me+"x"+we+")."),fe}else return"data"in N&&$e("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),N;return N}function p(N){return N.generateMipmaps}function w(N){i.generateMipmap(N)}function M(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(N,y,j,W,ie,Me=!1){if(N!==null){if(i[N]!==void 0)return i[N];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let we;W&&(we=e.get("EXT_texture_norm16"),we||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=y;if(y===i.RED&&(j===i.FLOAT&&(fe=i.R32F),j===i.HALF_FLOAT&&(fe=i.R16F),j===i.UNSIGNED_BYTE&&(fe=i.R8),j===i.UNSIGNED_SHORT&&we&&(fe=we.R16_EXT),j===i.SHORT&&we&&(fe=we.R16_SNORM_EXT)),y===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(fe=i.R8UI),j===i.UNSIGNED_SHORT&&(fe=i.R16UI),j===i.UNSIGNED_INT&&(fe=i.R32UI),j===i.BYTE&&(fe=i.R8I),j===i.SHORT&&(fe=i.R16I),j===i.INT&&(fe=i.R32I)),y===i.RG&&(j===i.FLOAT&&(fe=i.RG32F),j===i.HALF_FLOAT&&(fe=i.RG16F),j===i.UNSIGNED_BYTE&&(fe=i.RG8),j===i.UNSIGNED_SHORT&&we&&(fe=we.RG16_EXT),j===i.SHORT&&we&&(fe=we.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(fe=i.RG8UI),j===i.UNSIGNED_SHORT&&(fe=i.RG16UI),j===i.UNSIGNED_INT&&(fe=i.RG32UI),j===i.BYTE&&(fe=i.RG8I),j===i.SHORT&&(fe=i.RG16I),j===i.INT&&(fe=i.RG32I)),y===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(fe=i.RGB8UI),j===i.UNSIGNED_SHORT&&(fe=i.RGB16UI),j===i.UNSIGNED_INT&&(fe=i.RGB32UI),j===i.BYTE&&(fe=i.RGB8I),j===i.SHORT&&(fe=i.RGB16I),j===i.INT&&(fe=i.RGB32I)),y===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(fe=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(fe=i.RGBA16UI),j===i.UNSIGNED_INT&&(fe=i.RGBA32UI),j===i.BYTE&&(fe=i.RGBA8I),j===i.SHORT&&(fe=i.RGBA16I),j===i.INT&&(fe=i.RGBA32I)),y===i.RGB&&(j===i.UNSIGNED_SHORT&&we&&(fe=we.RGB16_EXT),j===i.SHORT&&we&&(fe=we.RGB16_SNORM_EXT),j===i.UNSIGNED_INT_5_9_9_9_REV&&(fe=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(fe=i.R11F_G11F_B10F)),y===i.RGBA){let ge=Me?Gs:lt.getTransfer(ie);j===i.FLOAT&&(fe=i.RGBA32F),j===i.HALF_FLOAT&&(fe=i.RGBA16F),j===i.UNSIGNED_BYTE&&(fe=ge===mt?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT&&we&&(fe=we.RGBA16_EXT),j===i.SHORT&&we&&(fe=we.RGBA16_SNORM_EXT),j===i.UNSIGNED_SHORT_4_4_4_4&&(fe=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(fe=i.RGB5_A1)}return(fe===i.R16F||fe===i.R32F||fe===i.RG16F||fe===i.RG32F||fe===i.RGBA16F||fe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function C(N,y){let j;return N?y===null||y===En||y===bs?j=i.DEPTH24_STENCIL8:y===Tn?j=i.DEPTH32F_STENCIL8:y===Ms&&(j=i.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===En||y===bs?j=i.DEPTH_COMPONENT24:y===Tn?j=i.DEPTH_COMPONENT32F:y===Ms&&(j=i.DEPTH_COMPONENT16),j}function b(N,y){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ot&&N.minFilter!==Bt?Math.log2(Math.max(y.width,y.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?y.mipmaps.length:1}function R(N){let y=N.target;y.removeEventListener("dispose",R),P(y),y.isVideoTexture&&f.delete(y),y.isHTMLTexture&&h.delete(y)}function _(N){let y=N.target;y.removeEventListener("dispose",_),H(y)}function P(N){let y=n.get(N);if(y.__webglInit===void 0)return;let j=N.source,W=d.get(j);if(W){let ie=W[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&F(N),Object.keys(W).length===0&&d.delete(j)}n.remove(N)}function F(N){let y=n.get(N);i.deleteTexture(y.__webglTexture);let j=N.source,W=d.get(j);delete W[y.__cacheKey],a.memory.textures--}function H(N){let y=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let ie=0;ie<y.__webglFramebuffer[W].length;ie++)i.deleteFramebuffer(y.__webglFramebuffer[W][ie]);else i.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)i.deleteFramebuffer(y.__webglFramebuffer[W]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let j=N.textures;for(let W=0,ie=j.length;W<ie;W++){let Me=n.get(j[W]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),a.memory.textures--),n.remove(j[W])}n.remove(N)}let Z=0;function U(){Z=0}function T(){return Z}function L(N){Z=N}function q(){let N=Z;return N>=s.maxTextures&&$e("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,N}function E(N){let y=[];return y.push(N.wrapS),y.push(N.wrapT),y.push(N.wrapR||0),y.push(N.magFilter),y.push(N.minFilter),y.push(N.anisotropy),y.push(N.internalFormat),y.push(N.format),y.push(N.type),y.push(N.generateMipmaps),y.push(N.premultiplyAlpha),y.push(N.flipY),y.push(N.unpackAlignment),y.push(N.colorSpace),y.join()}function A(N,y){let j=n.get(N);if(N.isVideoTexture&&G(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&j.__version!==N.version){let W=N.image;if(W===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(j,N,y);return}}else N.isExternalTexture&&(j.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+y)}function I(N,y){let j=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){oe(j,N,y);return}else N.isExternalTexture&&(j.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+y)}function K(N,y){let j=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){oe(j,N,y);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+y)}function O(N,y){let j=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&j.__version!==N.version){se(j,N,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+y)}let ee={[an]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[sa]:i.MIRRORED_REPEAT},Q={[Ot]:i.NEAREST,[Rh]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[Oa]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},ae={[Lh]:i.NEVER,[Oh]:i.ALWAYS,[Dh]:i.LESS,[bo]:i.LEQUAL,[Nh]:i.EQUAL,[So]:i.GEQUAL,[Uh]:i.GREATER,[Fh]:i.NOTEQUAL};function ce(N,y){if(y.type===Tn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Bt||y.magFilter===Oa||y.magFilter===fr||y.magFilter===mi||y.minFilter===Bt||y.minFilter===Oa||y.minFilter===fr||y.minFilter===mi)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,ee[y.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,ee[y.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,ee[y.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Q[y.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Q[y.minFilter]),y.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,ae[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ot||y.minFilter!==fr&&y.minFilter!==mi||y.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function k(N,y){let j=!1;N.__webglInit===void 0&&(N.__webglInit=!0,y.addEventListener("dispose",R));let W=y.source,ie=d.get(W);ie===void 0&&(ie={},d.set(W,ie));let Me=E(y);if(Me!==N.__cacheKey){ie[Me]===void 0&&(ie[Me]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ie[Me].usedTimes++;let we=ie[N.__cacheKey];we!==void 0&&(ie[N.__cacheKey].usedTimes--,we.usedTimes===0&&F(y)),N.__cacheKey=Me,N.__webglTexture=ie[Me].texture}return j}function z(N,y,j){return Math.floor(Math.floor(N/j)/y)}function X(N,y,j,W){let Me=N.updateRanges;if(Me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,j,W,y.data);else{Me.sort((Ve,De)=>Ve.start-De.start);let we=0;for(let Ve=1;Ve<Me.length;Ve++){let De=Me[we],Pe=Me[Ve],qe=De.start+De.count,Ze=z(Pe.start,y.width,4),tt=z(De.start,y.width,4);Pe.start<=qe+1&&Ze===tt&&z(Pe.start+Pe.count-1,y.width,4)===Ze?De.count=Math.max(De.count,Pe.start+Pe.count-De.start):(++we,Me[we]=Pe)}Me.length=we+1;let fe=t.getParameter(i.UNPACK_ROW_LENGTH),ge=t.getParameter(i.UNPACK_SKIP_PIXELS),Ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Ve=0,De=Me.length;Ve<De;Ve++){let Pe=Me[Ve],qe=Math.floor(Pe.start/4),Ze=Math.ceil(Pe.count/4),tt=qe%y.width,J=Math.floor(qe/y.width),Ie=Ze,_e=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),t.pixelStorei(i.UNPACK_SKIP_ROWS,J),t.texSubImage2D(i.TEXTURE_2D,0,tt,J,Ie,_e,j,W,y.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,fe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function oe(N,y,j){let W=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=i.TEXTURE_3D);let ie=k(N,y),Me=y.source;t.bindTexture(W,N.__webglTexture,i.TEXTURE0+j);let we=n.get(Me);if(Me.version!==we.__version||ie===!0){if(t.activeTexture(i.TEXTURE0+j),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let _e=lt.getPrimaries(lt.workingColorSpace),Le=y.colorSpace===Qn?null:lt.getPrimaries(y.colorSpace),Oe=y.colorSpace===Qn||_e===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let ge=m(y.image,!1,s.maxTextureSize);ge=st(y,ge);let Ce=r.convert(y.format,y.colorSpace),Ve=r.convert(y.type),De=v(y.internalFormat,Ce,Ve,y.normalized,y.colorSpace,y.isVideoTexture);ce(W,y);let Pe,qe=y.mipmaps,Ze=y.isVideoTexture!==!0,tt=we.__version===void 0||ie===!0,J=Me.dataReady,Ie=b(y,ge);if(y.isDepthTexture)De=C(y.format===gi,y.type),tt&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,De,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,De,ge.width,ge.height,0,Ce,Ve,null));else if(y.isDataTexture)if(qe.length>0){Ze&&tt&&t.texStorage2D(i.TEXTURE_2D,Ie,De,qe[0].width,qe[0].height);for(let _e=0,Le=qe.length;_e<Le;_e++)Pe=qe[_e],Ze?J&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Ce,Ve,Pe.data):t.texImage2D(i.TEXTURE_2D,_e,De,Pe.width,Pe.height,0,Ce,Ve,Pe.data);y.generateMipmaps=!1}else Ze?(tt&&t.texStorage2D(i.TEXTURE_2D,Ie,De,ge.width,ge.height),J&&X(y,ge,Ce,Ve)):t.texImage2D(i.TEXTURE_2D,0,De,ge.width,ge.height,0,Ce,Ve,ge.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ze&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,De,qe[0].width,qe[0].height,ge.depth);for(let _e=0,Le=qe.length;_e<Le;_e++)if(Pe=qe[_e],y.format!==pn)if(Ce!==null)if(Ze){if(J)if(y.layerUpdates.size>0){let Oe=Kl(Pe.width,Pe.height,y.format,y.type);for(let ye of y.layerUpdates){let Ye=Pe.data.subarray(ye*Oe/Pe.data.BYTES_PER_ELEMENT,(ye+1)*Oe/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,ye,Pe.width,Pe.height,1,Ce,Ye)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,ge.depth,Ce,Pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_e,De,Pe.width,Pe.height,ge.depth,0,Pe.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?J&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,ge.depth,Ce,Ve,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,_e,De,Pe.width,Pe.height,ge.depth,0,Ce,Ve,Pe.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ze&&tt&&t.texStorage2D(i.TEXTURE_2D,Ie,De,qe[0].width,qe[0].height);for(let _e=0,Le=qe.length;_e<Le;_e++)Pe=qe[_e],y.format!==pn?Ce!==null?Ze?J&&t.compressedTexSubImage2D(i.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Ce,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,_e,De,Pe.width,Pe.height,0,Pe.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?J&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Ce,Ve,Pe.data):t.texImage2D(i.TEXTURE_2D,_e,De,Pe.width,Pe.height,0,Ce,Ve,Pe.data)}else if(y.isDataArrayTexture)if(Ze){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,De,ge.width,ge.height,ge.depth),J)if(y.layerUpdates.size>0){let _e=Kl(ge.width,ge.height,y.format,y.type);for(let Le of y.layerUpdates){let Oe=ge.data.subarray(Le*_e/ge.data.BYTES_PER_ELEMENT,(Le+1)*_e/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Le,ge.width,ge.height,1,Ce,Ve,Oe)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ce,Ve,ge.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,ge.width,ge.height,ge.depth,0,Ce,Ve,ge.data);else if(y.isData3DTexture)Ze?(tt&&t.texStorage3D(i.TEXTURE_3D,Ie,De,ge.width,ge.height,ge.depth),J&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ce,Ve,ge.data)):t.texImage3D(i.TEXTURE_3D,0,De,ge.width,ge.height,ge.depth,0,Ce,Ve,ge.data);else if(y.isFramebufferTexture){if(tt)if(Ze)t.texStorage2D(i.TEXTURE_2D,Ie,De,ge.width,ge.height);else{let _e=ge.width,Le=ge.height;for(let Oe=0;Oe<Ie;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,De,_e,Le,0,Ce,Ve,null),_e>>=1,Le>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let _e=i.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),ge.parentNode!==_e){_e.appendChild(ge),h.add(y),_e.onpaint=Le=>{let Oe=Le.changedElements;for(let ye of h)Oe.includes(ye.image)&&(ye.needsUpdate=!0)},_e.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ge);else{let Oe=i.RGBA,ye=i.RGBA,Ye=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Oe,ye,Ye,ge)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(qe.length>0){if(Ze&&tt){let _e=je(qe[0]);t.texStorage2D(i.TEXTURE_2D,Ie,De,_e.width,_e.height)}for(let _e=0,Le=qe.length;_e<Le;_e++)Pe=qe[_e],Ze?J&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Ce,Ve,Pe):t.texImage2D(i.TEXTURE_2D,_e,De,Ce,Ve,Pe);y.generateMipmaps=!1}else if(Ze){if(tt){let _e=je(ge);t.texStorage2D(i.TEXTURE_2D,Ie,De,_e.width,_e.height)}J&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,Ve,ge)}else t.texImage2D(i.TEXTURE_2D,0,De,Ce,Ve,ge);p(y)&&w(W),we.__version=Me.version,y.onUpdate&&y.onUpdate(y)}N.__version=y.version}function se(N,y,j){if(y.image.length!==6)return;let W=k(N,y),ie=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+j);let Me=n.get(ie);if(ie.version!==Me.__version||W===!0){t.activeTexture(i.TEXTURE0+j);let we=lt.getPrimaries(lt.workingColorSpace),fe=y.colorSpace===Qn?null:lt.getPrimaries(y.colorSpace),ge=y.colorSpace===Qn||we===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Ce=y.isCompressedTexture||y.image[0].isCompressedTexture,Ve=y.image[0]&&y.image[0].isDataTexture,De=[];for(let ye=0;ye<6;ye++)!Ce&&!Ve?De[ye]=m(y.image[ye],!0,s.maxCubemapSize):De[ye]=Ve?y.image[ye].image:y.image[ye],De[ye]=st(y,De[ye]);let Pe=De[0],qe=r.convert(y.format,y.colorSpace),Ze=r.convert(y.type),tt=v(y.internalFormat,qe,Ze,y.normalized,y.colorSpace),J=y.isVideoTexture!==!0,Ie=Me.__version===void 0||W===!0,_e=ie.dataReady,Le=b(y,Pe);ce(i.TEXTURE_CUBE_MAP,y);let Oe;if(Ce){J&&Ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,tt,Pe.width,Pe.height);for(let ye=0;ye<6;ye++){Oe=De[ye].mipmaps;for(let Ye=0;Ye<Oe.length;Ye++){let We=Oe[Ye];y.format!==pn?qe!==null?J?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,0,0,We.width,We.height,qe,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,tt,We.width,We.height,0,We.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,0,0,We.width,We.height,qe,Ze,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,tt,We.width,We.height,0,qe,Ze,We.data)}}}else{if(Oe=y.mipmaps,J&&Ie){Oe.length>0&&Le++;let ye=je(De[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,tt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ve){J?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,De[ye].width,De[ye].height,qe,Ze,De[ye].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,tt,De[ye].width,De[ye].height,0,qe,Ze,De[ye].data);for(let Ye=0;Ye<Oe.length;Ye++){let vt=Oe[Ye].image[ye].image;J?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,0,0,vt.width,vt.height,qe,Ze,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,tt,vt.width,vt.height,0,qe,Ze,vt.data)}}else{J?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,qe,Ze,De[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,tt,qe,Ze,De[ye]);for(let Ye=0;Ye<Oe.length;Ye++){let We=Oe[Ye];J?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,0,0,qe,Ze,We.image[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,tt,qe,Ze,We.image[ye])}}}p(y)&&w(i.TEXTURE_CUBE_MAP),Me.__version=ie.version,y.onUpdate&&y.onUpdate(y)}N.__version=y.version}function ue(N,y,j,W,ie,Me){let we=r.convert(j.format,j.colorSpace),fe=r.convert(j.type),ge=v(j.internalFormat,we,fe,j.normalized,j.colorSpace),Ce=n.get(y),Ve=n.get(j);if(Ve.__renderTarget=y,!Ce.__hasExternalTextures){let De=Math.max(1,y.width>>Me),Pe=Math.max(1,y.height>>Me);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,Me,ge,De,Pe,y.depth,0,we,fe,null):t.texImage2D(ie,Me,ge,De,Pe,0,we,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),Se(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,ie,Ve.__webglTexture,0,me(y)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,ie,Ve.__webglTexture,Me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(N,y,j){if(i.bindRenderbuffer(i.RENDERBUFFER,N),y.depthBuffer){let W=y.depthTexture,ie=W&&W.isDepthTexture?W.type:null,Me=C(y.stencilBuffer,ie),we=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Se(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(y),Me,y.width,y.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(y),Me,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Me,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,N)}else{let W=y.textures;for(let ie=0;ie<W.length;ie++){let Me=W[ie],we=r.convert(Me.format,Me.colorSpace),fe=r.convert(Me.type),ge=v(Me.internalFormat,we,fe,Me.normalized,Me.colorSpace);Se(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(y),ge,y.width,y.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(y),ge,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ge,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ke(N,y,j){let W=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(y.depthTexture);if(ie.__renderTarget=y,(!ie.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),ie.__webglTexture===void 0){ie.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),ce(i.TEXTURE_CUBE_MAP,y.depthTexture);let Ce=r.convert(y.depthTexture.format),Ve=r.convert(y.depthTexture.type),De;y.depthTexture.format===Dn?De=i.DEPTH_COMPONENT24:y.depthTexture.format===gi&&(De=i.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,De,y.width,y.height,0,Ce,Ve,null)}}else A(y.depthTexture,0);let Me=ie.__webglTexture,we=me(y),fe=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+j:i.TEXTURE_2D,ge=y.depthTexture.format===gi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Dn)Se(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,fe,Me,0,we):i.framebufferTexture2D(i.FRAMEBUFFER,ge,fe,Me,0);else if(y.depthTexture.format===gi)Se(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,fe,Me,0,we):i.framebufferTexture2D(i.FRAMEBUFFER,ge,fe,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function de(N){let y=n.get(N),j=N.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==N.depthTexture){let W=N.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){let ie=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",ie)};W.addEventListener("dispose",ie),y.__depthDisposeCallback=ie}y.__boundDepthTexture=W}if(N.depthTexture&&!y.__autoAllocateDepthBuffer)if(j)for(let W=0;W<6;W++)Ke(y.__webglFramebuffer[W],N,W);else{let W=N.texture.mipmaps;W&&W.length>0?Ke(y.__webglFramebuffer[0],N,0):Ke(y.__webglFramebuffer,N,0)}else if(j){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=i.createRenderbuffer(),Re(y.__webglDepthbuffer[W],N,!1);else{let ie=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=y.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Me)}}else{let W=N.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Re(y.__webglDepthbuffer,N,!1);else{let ie=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Me)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(N,y,j){let W=n.get(N);y!==void 0&&ue(W.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&de(N)}function ve(N){let y=N.texture,j=n.get(N),W=n.get(y);N.addEventListener("dispose",_);let ie=N.textures,Me=N.isWebGLCubeRenderTarget===!0,we=ie.length>1;if(we||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=y.version,a.memory.textures++),Me){j.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0){j.__webglFramebuffer[fe]=[];for(let ge=0;ge<y.mipmaps.length;ge++)j.__webglFramebuffer[fe][ge]=i.createFramebuffer()}else j.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){j.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)j.__webglFramebuffer[fe]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(we)for(let fe=0,ge=ie.length;fe<ge;fe++){let Ce=n.get(ie[fe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(N.samples>0&&Se(N)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){let ge=ie[fe];j.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[fe]);let Ce=r.convert(ge.format,ge.colorSpace),Ve=r.convert(ge.type),De=v(ge.internalFormat,Ce,Ve,ge.normalized,ge.colorSpace,N.isXRRenderTarget===!0),Pe=me(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,De,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,j.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(j.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Me){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),ce(i.TEXTURE_CUBE_MAP,y);for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)ue(j.__webglFramebuffer[fe][ge],N,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ge);else ue(j.__webglFramebuffer[fe],N,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);p(y)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let fe=0,ge=ie.length;fe<ge;fe++){let Ce=ie[fe],Ve=n.get(Ce),De=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(De=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(De,Ve.__webglTexture),ce(De,Ce),ue(j.__webglFramebuffer,N,Ce,i.COLOR_ATTACHMENT0+fe,De,0),p(Ce)&&w(De)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(fe=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,W.__webglTexture),ce(fe,y),y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)ue(j.__webglFramebuffer[ge],N,y,i.COLOR_ATTACHMENT0,fe,ge);else ue(j.__webglFramebuffer,N,y,i.COLOR_ATTACHMENT0,fe,0);p(y)&&w(fe),t.unbindTexture()}N.depthBuffer&&de(N)}function be(N){let y=N.textures;for(let j=0,W=y.length;j<W;j++){let ie=y[j];if(p(ie)){let Me=M(N),we=n.get(ie).__webglTexture;t.bindTexture(Me,we),w(Me),t.unbindTexture()}}}let Ae=[],$=[];function re(N){if(N.samples>0){if(Se(N)===!1){let y=N.textures,j=N.width,W=N.height,ie=i.COLOR_BUFFER_BIT,Me=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(N),fe=y.length>1;if(fe)for(let Ce=0;Ce<y.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);let ge=N.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ce=0;Ce<y.length;Ce++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[Ce]);let Ve=n.get(y[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ve,0)}i.blitFramebuffer(0,0,j,W,0,0,j,W,ie,i.NEAREST),l===!0&&(Ae.length=0,$.length=0,Ae.push(i.COLOR_ATTACHMENT0+Ce),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(Ae.push(Me),$.push(Me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let Ce=0;Ce<y.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,we.__webglColorRenderbuffer[Ce]);let Ve=n.get(y[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let y=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function me(N){return Math.min(s.maxSamples,N.samples)}function Se(N){let y=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function G(N){let y=a.render.frame;f.get(N)!==y&&(f.set(N,y),N.update())}function st(N,y){let j=N.colorSpace,W=N.format,ie=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||j!==Hs&&j!==Qn&&(lt.getTransfer(j)===mt?(W!==pn||ie!==tn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",j)),y}function je(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=U,this.getTextureUnits=T,this.setTextureUnits=L,this.setTexture2D=A,this.setTexture2DArray=I,this.setTexture3D=K,this.setTextureCube=O,this.rebindTextures=pe,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Se,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Wg(i,e){function t(n,s=Qn){let r,a=lt.getTransfer(s);if(n===tn)return i.UNSIGNED_BYTE;if(n===za)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bl)return i.BYTE;if(n===zl)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===Ba)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===wn)return i.HALF_FLOAT;if(n===Gl)return i.ALPHA;if(n===Vl)return i.RGB;if(n===pn)return i.RGBA;if(n===Dn)return i.DEPTH_COMPONENT;if(n===gi)return i.DEPTH_STENCIL;if(n===Wl)return i.RED;if(n===Ha)return i.RED_INTEGER;if(n===xi)return i.RG;if(n===Ga)return i.RG_INTEGER;if(n===Va)return i.RGBA_INTEGER;if(n===dr||n===pr||n===mr||n===gr)if(a===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===qa||n===Ya)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ja||n===$a||n===Ka||n===ja||n===xr||n===Qa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Za||n===Ja)return a===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$a)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ka)return r.COMPRESSED_R11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xr)return r.COMPRESSED_RG11_EAC;if(n===Qa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===eo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===to)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===no)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===io)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===so)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ro)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ao)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===co)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ho)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===po)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mo||n===go||n===xo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===mo)return a===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_o||n===yo||n===_r||n===vo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Xg=`
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

}`,uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ks(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new cn({vertexShader:Xg,fragmentShader:qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new Pt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fc=class extends Nn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,u=null,d=null,x=null,g=typeof XRWebGLBinding<"u",m=new uc,p={},w=t.getContextAttributes(),M=null,v=null,C=[],b=[],R=new Ee,_=null,P=null,F=new wt;F.viewport=new Tt;let H=new wt;H.viewport=new Tt;let Z=[F,H],U=new Na,T=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let X=C[z];return X===void 0&&(X=new ls,C[z]=X),X.getTargetRaySpace()},this.getControllerGrip=function(z){let X=C[z];return X===void 0&&(X=new ls,C[z]=X),X.getGripSpace()},this.getHand=function(z){let X=C[z];return X===void 0&&(X=new ls,C[z]=X),X.getHandSpace()};function q(z){let X=b.indexOf(z.inputSource);if(X===-1)return;let oe=C[X];oe!==void 0&&(oe.update(z.inputSource,z.frame,c||a),oe.dispatchEvent({type:z.type,data:z.inputSource}))}function E(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",E),s.removeEventListener("inputsourceschange",A);for(let z=0;z<C.length;z++){let X=b[z];X!==null&&(b[z]=null,C[z].disconnect(X))}T=null,L=null,m.reset();for(let z in p)delete p[z];if(e.setRenderTarget(M),d=null,u=null,h=null,s=null,v=null,k.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),P!==null){let z=P.camera;z.fov=P.fov,z.zoom=P.zoom,z.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",E),s.addEventListener("inputsourceschange",A),w.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,se=null,ue=null;w.depth&&(ue=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=w.stencil?gi:Dn,se=w.stencil?bs:En);let Re={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Re),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Qt(u.textureWidth,u.textureHeight,{format:pn,type:tn,depthTexture:new ci(u.textureWidth,u.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let oe={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Qt(d.framebufferWidth,d.framebufferHeight,{format:pn,type:tn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),k.setContext(s),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function A(z){for(let X=0;X<z.removed.length;X++){let oe=z.removed[X],se=b.indexOf(oe);se>=0&&(b[se]=null,C[se].disconnect(oe))}for(let X=0;X<z.added.length;X++){let oe=z.added[X],se=b.indexOf(oe);if(se===-1){for(let Re=0;Re<C.length;Re++)if(Re>=b.length){b.push(oe),se=Re;break}else if(b[Re]===null){b[Re]=oe,se=Re;break}if(se===-1)break}let ue=C[se];ue&&ue.connect(oe)}}let I=new V,K=new V;function O(z,X,oe){I.setFromMatrixPosition(X.matrixWorld),K.setFromMatrixPosition(oe.matrixWorld);let se=I.distanceTo(K),ue=X.projectionMatrix.elements,Re=oe.projectionMatrix.elements,Ke=ue[14]/(ue[10]-1),de=ue[14]/(ue[10]+1),pe=(ue[9]+1)/ue[5],ve=(ue[9]-1)/ue[5],be=(ue[8]-1)/ue[0],Ae=(Re[8]+1)/Re[0],$=Ke*be,re=Ke*Ae,me=se/(-be+Ae),Se=me*-be;if(X.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Se),z.translateZ(me),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),ue[10]===-1)z.projectionMatrix.copy(X.projectionMatrix),z.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let G=Ke+me,st=de+me,je=$-Se,N=re+(se-Se),y=pe*de/st*G,j=ve*de/st*G;z.projectionMatrix.makePerspective(je,N,y,j,G,st),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function ee(z,X){X===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(X.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let X=z.near,oe=z.far;m.texture!==null&&(m.depthNear>0&&(X=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),U.near=H.near=F.near=X,U.far=H.far=F.far=oe,(T!==U.near||L!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),T=U.near,L=U.far),U.layers.mask=z.layers.mask|6,F.layers.mask=U.layers.mask&-5,H.layers.mask=U.layers.mask&-3;let se=z.parent,ue=U.cameras;ee(U,se);for(let Re=0;Re<ue.length;Re++)ee(ue[Re],se);ue.length===2?O(U,F,H):U.projectionMatrix.copy(F.projectionMatrix),P===null&&z.isPerspectiveCamera&&(P={camera:z,fov:z.fov,zoom:z.zoom}),Q(z,U,se)};function Q(z,X,oe){oe===null?z.matrix.copy(X.matrixWorld):(z.matrix.copy(oe.matrixWorld),z.matrix.invert(),z.matrix.multiply(X.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(X.projectionMatrix),z.projectionMatrixInverse.copy(X.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=aa*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(z){l=z,u!==null&&(u.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(z){return p[z]};let ae=null;function ce(z,X){if(f=X.getViewerPose(c||a),x=X,f!==null){let oe=f.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let se=!1;oe.length!==U.cameras.length&&(U.cameras.length=0,se=!0);for(let de=0;de<oe.length;de++){let pe=oe[de],ve=null;if(d!==null)ve=d.getViewport(pe);else{let Ae=h.getViewSubImage(u,pe);ve=Ae.viewport,de===0&&(e.setRenderTargetTextures(v,Ae.colorTexture,Ae.depthStencilTexture),e.setRenderTarget(v))}let be=Z[de];be===void 0&&(be=new wt,be.layers.enable(de),be.viewport=new Tt,Z[de]=be),be.matrix.fromArray(pe.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(pe.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(ve.x,ve.y,ve.width,ve.height),de===0&&(U.matrix.copy(be.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),se===!0&&U.cameras.push(be)}let ue=s.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){h=n.getBinding();let de=h.getDepthInformation(oe[0]);de&&de.isValid&&de.texture&&m.init(de,s.renderState)}if(ue&&ue.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let de=0;de<oe.length;de++){let pe=oe[de].camera;if(pe){let ve=p[pe];ve||(ve=new Ks,p[pe]=ve);let be=h.getCameraImage(pe);ve.sourceTexture=be}}}}for(let oe=0;oe<C.length;oe++){let se=b[oe],ue=C[oe];se!==null&&ue!==void 0&&ue.update(se,X,c||a)}ae&&ae(z,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),x=null}let k=new _u;k.setAnimationLoop(ce),this.setAnimationLoop=function(z){ae=z},this.dispose=function(){}}},Yg=new bt,Eu=new Qe;Eu.set(-1,0,0,0,1,0,0,0,1);function Zg(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Zl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,M,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),f(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=e.get(p),M=w.envMap,v=w.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Yg.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Eu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Jg(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,C){let b=C.program;n.uniformBlockBinding(v,b)}function c(v,C){let b=s[v.id];b===void 0&&(m(v),b=f(v),s[v.id]=b,v.addEventListener("dispose",w));let R=C.program;n.updateUBOMapping(v,R);let _=e.render.frame;r[v.id]!==_&&(u(v),r[v.id]=_)}function f(v){let C=h();v.__bindingPointIndex=C;let b=i.createBuffer(),R=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,b),b}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let C=s[v.id],b=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let _=0,P=b.length;_<P;_++){let F=b[_];if(Array.isArray(F))for(let H=0,Z=F.length;H<Z;H++)d(F[H],_,H,R);else d(F,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,C,b,R){if(g(v,C,b,R)===!0){let _=v.__offset,P=v.value;if(Array.isArray(P)){let F=0;for(let H=0;H<P.length;H++){let Z=P[H],U=p(Z);x(Z,v.__data,F),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(F+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(P,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function x(v,C,b){typeof v=="number"||typeof v=="boolean"?C[0]=v:v.isMatrix3?(C[0]=v.elements[0],C[1]=v.elements[1],C[2]=v.elements[2],C[3]=0,C[4]=v.elements[3],C[5]=v.elements[4],C[6]=v.elements[5],C[7]=0,C[8]=v.elements[6],C[9]=v.elements[7],C[10]=v.elements[8],C[11]=0):ArrayBuffer.isView(v)?C.set(new v.constructor(v.buffer,v.byteOffset,C.length)):v.toArray(C,b)}function g(v,C,b,R){let _=v.value,P=C+"_"+b;if(R[P]===void 0)return typeof _=="number"||typeof _=="boolean"?R[P]=_:ArrayBuffer.isView(_)?R[P]=_.slice():R[P]=_.clone(),!0;{let F=R[P];if(typeof _=="number"||typeof _=="boolean"){if(F!==_)return R[P]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(F.equals(_)===!1)return F.copy(_),!0}}return!1}function m(v){let C=v.uniforms,b=0,R=16;for(let P=0,F=C.length;P<F;P++){let H=Array.isArray(C[P])?C[P]:[C[P]];for(let Z=0,U=H.length;Z<U;Z++){let T=H[Z],L=Array.isArray(T.value)?T.value:[T.value];for(let q=0,E=L.length;q<E;q++){let A=L[q],I=p(A),K=b%R,O=K%I.boundary,ee=K+O;b+=O,ee!==0&&R-ee<I.storage&&(b+=R-ee),T.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=b,b+=I.storage}}}let _=b%R;return _>0&&(b+=R-_),v.__size=b,v.__cache={},this}function p(v){let C={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(C.boundary=4,C.storage=4):v.isVector2?(C.boundary=8,C.storage=8):v.isVector3||v.isColor?(C.boundary=16,C.storage=12):v.isVector4?(C.boundary=16,C.storage=16):v.isMatrix3?(C.boundary=48,C.storage=48):v.isMatrix4?(C.boundary=64,C.storage=64):v.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(C.boundary=16,C.storage=v.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",v),C}function w(v){let C=v.target;C.removeEventListener("dispose",w);let b=a.indexOf(C.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function M(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:M}}var $g=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zn=null;function Kg(){return zn===null&&(zn=new ua($g,16,16,xi,wn),zn.name="DFG_LUT",zn.minFilter=Bt,zn.magFilter=Bt,zn.wrapS=Ln,zn.wrapT=Ln,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}var Hn=class{constructor(e={}){let{canvas:t=Bh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:d=tn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let g=d,m=new Set([Va,Ga,Ha]),p=new Set([tn,En,Ms,bs,za,ka]),w=new Uint32Array(4),M=new Int32Array(4),v=new V,C=null,b=null,R=[],_=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,H=!1,Z=null,U=null,T=null,L=null;this._outputColorSpace=Xt;let q=0,E=0,A=null,I=-1,K=null,O=new Tt,ee=new Tt,Q=null,ae=new et(0),ce=0,k=t.width,z=t.height,X=1,oe=null,se=null,ue=new Tt(0,0,k,z),Re=new Tt(0,0,k,z),Ke=!1,de=new hs,pe=!1,ve=!1,be=new bt,Ae=new V,$=new Tt,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function Se(){return A===null?X:1}let G=n;function st(S,Y){return t.getContext(S,Y)}let je,N,y,j,W,ie,Me,we,fe,ge,Ce,Ve,De,Pe,qe,Ze,tt,J,Ie,_e,Le,Oe,ye;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",vt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",gn,!1),G===null){let Y="webgl2";if(G=st(Y,S),G===null)throw st(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(S){throw t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),Je("WebGLRenderer: "+S.message),S}function Ye(){je=new sm(G),je.init(),Le=new Wg(G,je),N=new Z0(G,je,e,Le),y=new Gg(G,je),N.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),U=G.createFramebuffer(),T=G.createFramebuffer(),L=G.createFramebuffer(),j=new om(G),W=new Rg,ie=new Vg(G,je,y,W,N,Le,j),Me=new im(F),we=new cd(G),Oe=new q0(G,we),fe=new rm(G,we,j,Oe),ge=new cm(G,fe,we,Oe,j),J=new lm(G,N,ie),qe=new J0(W),Ce=new Ag(F,Me,je,N,Oe,qe),Ve=new Zg(F,W),De=new Pg,Pe=new Fg(je),tt=new X0(F,Me,y,ge,x,l),Ze=new Hg(F,ge,N),ye=new Jg(G,j,N,y),Ie=new Y0(G,je,j),_e=new am(G,je,j),j.programs=Ce.programs,F.capabilities=N,F.extensions=je,F.properties=W,F.renderLists=De,F.shadowMap=Ze,F.state=y,F.info=j}g!==tn&&(P=new um(g,t.width,t.height,o,s,r));let We=new fc(F,G);this.xr=We,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let S=je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(k,z,!1))},this.getSize=function(S){return S.set(k,z)},this.setSize=function(S,Y,le=!0){if(We.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}k=S,z=Y,t.width=Math.floor(S*X),t.height=Math.floor(Y*X),le===!0&&(t.style.width=S+"px",t.style.height=Y+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,S,Y)},this.getDrawingBufferSize=function(S){return S.set(k*X,z*X).floor()},this.setDrawingBufferSize=function(S,Y,le){k=S,z=Y,X=le,t.width=Math.floor(S*le),t.height=Math.floor(Y*le),this.setViewport(0,0,S,Y)},this.setEffects=function(S){if(g===tn){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let Y=0;Y<S.length;Y++)if(S[Y].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(O)},this.getViewport=function(S){return S.copy(ue)},this.setViewport=function(S,Y,le,te){S.isVector4?ue.set(S.x,S.y,S.z,S.w):ue.set(S,Y,le,te),y.viewport(O.copy(ue).multiplyScalar(X).round())},this.getScissor=function(S){return S.copy(Re)},this.setScissor=function(S,Y,le,te){S.isVector4?Re.set(S.x,S.y,S.z,S.w):Re.set(S,Y,le,te),y.scissor(ee.copy(Re).multiplyScalar(X).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(S){y.setScissorTest(Ke=S)},this.setOpaqueSort=function(S){oe=S},this.setTransparentSort=function(S){se=S},this.getClearColor=function(S){return S.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(S=!0,Y=!0,le=!0){let te=0;if(S){let ne=!1;if(A!==null){let Fe=A.texture.format;ne=m.has(Fe)}if(ne){let Fe=A.texture.type,ze=p.has(Fe),Ue=tt.getClearColor(),He=tt.getClearAlpha(),Xe=Ue.r,nt=Ue.g,at=Ue.b;ze?(w[0]=Xe,w[1]=nt,w[2]=at,w[3]=He,G.clearBufferuiv(G.COLOR,0,w)):(M[0]=Xe,M[1]=nt,M[2]=at,M[3]=He,G.clearBufferiv(G.COLOR,0,M))}else te|=G.COLOR_BUFFER_BIT}Y&&(te|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(te|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&G.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),Z=S},this.dispose=function(){t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),tt.dispose(),De.dispose(),Pe.dispose(),W.dispose(),Me.dispose(),ge.dispose(),Oe.dispose(),ye.dispose(),Ce.dispose(),We.dispose(),We.removeEventListener("sessionstart",yc),We.removeEventListener("sessionend",vc),yi.stop()};function vt(S){S.preventDefault(),Ws("WebGLRenderer: Context Lost."),H=!0}function dt(){Ws("WebGLRenderer: Context Restored."),H=!1;let S=j.autoReset,Y=Ze.enabled,le=Ze.autoUpdate,te=Ze.needsUpdate,ne=Ze.type;Ye(),j.autoReset=S,Ze.enabled=Y,Ze.autoUpdate=le,Ze.needsUpdate=te,Ze.type=ne}function gn(S){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Rn(S){let Y=S.target;Y.removeEventListener("dispose",Rn),Hu(Y)}function Hu(S){Gu(S),W.remove(S)}function Gu(S){let Y=W.get(S).programs;Y!==void 0&&(Y.forEach(function(le){Ce.releaseProgram(le)}),S.isShaderMaterial&&Ce.releaseShaderCache(S))}this.renderBufferDirect=function(S,Y,le,te,ne,Fe){Y===null&&(Y=re);let ze=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Ue=Xu(S,Y,le,te,ne);y.setMaterial(te,ze);let He=le.index,Xe=1;if(te.wireframe===!0){if(He=fe.getWireframeAttribute(le),He===void 0)return;Xe=2}let nt=le.drawRange,at=le.attributes.position,Ge=nt.start*Xe,pt=(nt.start+nt.count)*Xe;Fe!==null&&(Ge=Math.max(Ge,Fe.start*Xe),pt=Math.min(pt,(Fe.start+Fe.count)*Xe)),He!==null?(Ge=Math.max(Ge,0),pt=Math.min(pt,He.count)):at!=null&&(Ge=Math.max(Ge,0),pt=Math.min(pt,at.count));let It=pt-Ge;if(It<0||It===1/0)return;Oe.setup(ne,te,Ue,le,He);let St,yt=Ie;if(He!==null&&(St=we.get(He),yt=_e,yt.setIndex(St)),ne.isMesh)te.wireframe===!0?(y.setLineWidth(te.wireframeLinewidth*Se()),yt.setMode(G.LINES)):yt.setMode(G.TRIANGLES);else if(ne.isLine){let Gt=te.linewidth;Gt===void 0&&(Gt=1),y.setLineWidth(Gt*Se()),ne.isLineSegments?yt.setMode(G.LINES):ne.isLineLoop?yt.setMode(G.LINE_LOOP):yt.setMode(G.LINE_STRIP)}else ne.isPoints?yt.setMode(G.POINTS):ne.isSprite&&yt.setMode(G.TRIANGLES);if(ne.isBatchedMesh)if(je.get("WEBGL_multi_draw"))yt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{let Gt=ne._multiDrawStarts,Be=ne._multiDrawCounts,Yt=ne._multiDrawCount,ct=He?we.get(He).bytesPerElement:1,un=W.get(te).currentProgram.getUniforms();for(let Cn=0;Cn<Yt;Cn++)un.setValue(G,"_gl_DrawID",Cn),yt.render(Gt[Cn]/ct,Be[Cn])}else if(ne.isInstancedMesh)yt.renderInstances(Ge,It,ne.count);else if(le.isInstancedBufferGeometry){let Gt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Be=Math.min(le.instanceCount,Gt);yt.renderInstances(Ge,It,Be)}else yt.render(Ge,It)};function _c(S,Y,le,te){Z!==null&&S.isNodeMaterial&&Z.setObject(te,S),pe===!0&&qe.setState(S,le,!1),S.transparent===!0&&S.side===en&&S.forceSinglePass===!1?(S.side=Ht,S.needsUpdate=!0,Er(S,Y,te),S.side=di,S.needsUpdate=!0,Er(S,Y,te),S.side=en):Er(S,Y,te)}this.compile=function(S,Y,le=null){le===null&&(le=S),Z!==null&&Z.renderStart(S,Y,le),b=Pe.get(le),b.init(Y),_.push(b),le.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Y.layers)&&(b.pushLight(ne),ne.castShadow&&b.pushShadow(ne))}),S!==le&&S.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Y.layers)&&(b.pushLight(ne),ne.castShadow&&b.pushShadow(ne))}),b.setupLights(),Z!==null&&Z.updateLights(b.state.lightsArray),ve=this.localClippingEnabled,pe=qe.init(this.clippingPlanes,ve),pe===!0&&qe.setGlobalState(this.clippingPlanes,Y),Z!==null&&Ze.render(b.state.shadowsArray,le,Y);let te=new Set;return S.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;let Fe=ne.material;if(Fe)if(Array.isArray(Fe))for(let ze=0;ze<Fe.length;ze++){let Ue=Fe[ze];_c(Ue,le,Y,ne),te.add(Ue)}else _c(Fe,le,Y,ne),te.add(Fe)}),b=_.pop(),Z!==null&&Z.renderEnd(),te},this.compileAsync=function(S,Y,le=null){let te=this.compile(S,Y,le);return new Promise(ne=>{function Fe(){if(te.forEach(function(ze){let He=W.get(ze).currentProgram;(He===void 0||He.isReady())&&te.delete(ze)}),te.size===0){ne(S);return}setTimeout(Fe,10)}je.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let No=null;function Vu(S){No&&No(S)}function yc(){yi.stop()}function vc(){yi.start()}let yi=new _u;yi.setAnimationLoop(Vu),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(S){No=S,We.setAnimationLoop(S),S===null?yi.stop():yi.start()},We.addEventListener("sessionstart",yc),We.addEventListener("sessionend",vc),this.render=function(S,Y){if(Y!==void 0&&Y.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;Z!==null&&Z.renderStart(S,Y);let le=We.enabled===!0&&We.isPresenting===!0,te=P!==null&&(A===null||le)&&P.begin(F,A);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(Y),Y=We.getCamera()),S.isScene===!0&&S.onBeforeRender(F,S,Y,A),b=Pe.get(S,_.length),b.init(Y),b.state.textureUnits=ie.getTextureUnits(),_.push(b),be.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),de.setFromProjectionMatrix(be,vn,Y.reversedDepth),ve=this.localClippingEnabled,pe=qe.init(this.clippingPlanes,ve),C=De.get(S,R.length),C.init(),R.push(C),We.enabled===!0&&We.isPresenting===!0){let ze=F.xr.getDepthSensingMesh();ze!==null&&Uo(ze,Y,-1/0,F.sortObjects)}Uo(S,Y,0,F.sortObjects),C.finish(),Z!==null&&Z.updateLights(b.state.lightsArray),F.sortObjects===!0&&C.sort(oe,se),me=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,me&&tt.addToRenderList(C,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pe===!0&&qe.beginShadows();let ne=b.state.shadowsArray;if(Ze.render(ne,S,Y),pe===!0&&qe.endShadows(),(te&&P.hasRenderPass())===!1){let ze=C.opaque,Ue=C.transmissive;if(b.setupLights(),Y.isArrayCamera){let He=Y.cameras;if(Ue.length>0)for(let Xe=0,nt=He.length;Xe<nt;Xe++){let at=He[Xe];bc(ze,Ue,S,at)}me&&tt.render(S);for(let Xe=0,nt=He.length;Xe<nt;Xe++){let at=He[Xe];Mc(C,S,at,at.viewport)}}else Ue.length>0&&bc(ze,Ue,S,Y),me&&tt.render(S),Mc(C,S,Y)}A!==null&&E===0&&(ie.updateMultisampleRenderTarget(A),ie.updateRenderTargetMipmap(A)),te&&P.end(F),S.isScene===!0&&S.onAfterRender(F,S,Y),Oe.resetDefaultState(),I=-1,K=null,_.pop(),_.length>0?(b=_[_.length-1],ie.setTextureUnits(b.state.textureUnits),pe===!0&&qe.setGlobalState(F.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,Z!==null&&Z.renderEnd()};function Uo(S,Y,le,te){if(S.visible===!1)return;if(S.layers.test(Y.layers)){if(S.isGroup)le=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(Y);else if(S.isLightProbeGrid)b.pushLightProbeGrid(S);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(de)){te&&$.setFromMatrixPosition(S.matrixWorld).applyMatrix4(be);let ze=ge.update(S),Ue=S.material;Ue.visible&&C.push(S,ze,Ue,le,$.z,null,Y)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(de))){let ze=ge.update(S),Ue=S.material;if(te&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),$.copy(S.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),$.copy(ze.boundingSphere.center)),$.applyMatrix4(S.matrixWorld).applyMatrix4(be)),Array.isArray(Ue)){let He=ze.groups;for(let Xe=0,nt=He.length;Xe<nt;Xe++){let at=He[Xe],Ge=Ue[at.materialIndex];Ge&&Ge.visible&&C.push(S,ze,Ge,le,$.z,at,Y)}}else Ue.visible&&C.push(S,ze,Ue,le,$.z,null,Y)}}let Fe=S.children;for(let ze=0,Ue=Fe.length;ze<Ue;ze++)Uo(Fe[ze],Y,le,te)}function Mc(S,Y,le,te){let{opaque:ne,transmissive:Fe,transparent:ze}=S;b.setupLightsView(le),pe===!0&&qe.setGlobalState(F.clippingPlanes,le),te&&y.viewport(O.copy(te)),ne.length>0&&Sr(ne,Y,le),Fe.length>0&&Sr(Fe,Y,le),ze.length>0&&Sr(ze,Y,le),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function bc(S,Y,le,te){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[te.id]===void 0){let Ge=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[te.id]=new Qt(1,1,{generateMipmaps:!0,type:Ge?wn:tn,minFilter:mi,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let Fe=b.state.transmissionRenderTarget[te.id],ze=te.viewport||O;Fe.setSize(ze.z*F.transmissionResolutionScale,ze.w*F.transmissionResolutionScale);let Ue=F.getRenderTarget(),He=F.getActiveCubeFace(),Xe=F.getActiveMipmapLevel();F.setRenderTarget(Fe),F.getClearColor(ae),ce=F.getClearAlpha(),ce<1&&F.setClearColor(16777215,.5),F.clear(),me&&tt.render(le);let nt=F.toneMapping;F.toneMapping=Sn;let at=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),b.setupLightsView(te),pe===!0&&qe.setGlobalState(F.clippingPlanes,te),Sr(S,le,te),ie.updateMultisampleRenderTarget(Fe),ie.updateRenderTargetMipmap(Fe),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let pt=0,It=Y.length;pt<It;pt++){let St=Y[pt],{object:yt,geometry:Gt,material:Be,group:Yt}=St;if(Be.side===en&&yt.layers.test(te.layers)){let ct=Be.side;Be.side=Ht,Be.needsUpdate=!0,Sc(yt,le,te,Gt,Be,Yt),Be.side=ct,Be.needsUpdate=!0,Ge=!0}}Ge===!0&&(ie.updateMultisampleRenderTarget(Fe),ie.updateRenderTargetMipmap(Fe))}F.setRenderTarget(Ue,He,Xe),F.setClearColor(ae,ce),at!==void 0&&(te.viewport=at),F.toneMapping=nt}function Sr(S,Y,le){let te=Y.isScene===!0?Y.overrideMaterial:null;for(let ne=0,Fe=S.length;ne<Fe;ne++){let ze=S[ne],{object:Ue,geometry:He,group:Xe}=ze,nt=ze.material;nt.allowOverride===!0&&te!==null&&(nt=te),Ue.layers.test(le.layers)&&Sc(Ue,Y,le,He,nt,Xe)}}function Sc(S,Y,le,te,ne,Fe){Z!==null&&ne.isNodeMaterial&&Z.setObject(S,ne),S.onBeforeRender(F,Y,le,te,ne,Fe),S.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),ne.onBeforeRender(F,Y,le,te,S,Fe),ne.transparent===!0&&ne.side===en&&ne.forceSinglePass===!1?(ne.side=Ht,ne.needsUpdate=!0,F.renderBufferDirect(le,Y,te,ne,S,Fe),ne.side=di,ne.needsUpdate=!0,F.renderBufferDirect(le,Y,te,ne,S,Fe),ne.side=en):F.renderBufferDirect(le,Y,te,ne,S,Fe),S.onAfterRender(F,Y,le,te,ne,Fe)}function Er(S,Y,le){Y.isScene!==!0&&(Y=re);let te=W.get(S),ne=b.state.lights,Fe=b.state.shadowsArray,ze=ne.state.version,Ue=Ce.getParameters(S,ne.state,Fe,Y,le,b.state.lightProbeGridArray),He=Ce.getProgramCacheKey(Ue),Xe=te.programs;te.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?Y.environment:null,te.fog=Y.fog;let nt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;te.envMap=Me.get(S.envMap||te.environment,nt),te.envMapRotation=te.environment!==null&&S.envMap===null?Y.environmentRotation:S.envMapRotation,Xe===void 0&&(S.addEventListener("dispose",Rn),Xe=new Map,te.programs=Xe);let at=Xe.get(He);if(at!==void 0){if(te.currentProgram===at&&te.lightsStateVersion===ze)return Tc(S,Ue),at}else Ue.uniforms=Ce.getUniforms(S),Z!==null&&S.isNodeMaterial&&Z.build(S,le,Ue),S.onBeforeCompile(Ue,F),at=Ce.acquireProgram(Ue,He),Xe.set(He,at),te.uniforms=Ue.uniforms;let Ge=te.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ge.clippingPlanes=qe.uniform),Tc(S,Ue),te.needsLights=Yu(S),te.lightsStateVersion=ze,te.needsLights&&(Ge.ambientLightColor.value=ne.state.ambient,Ge.lightProbe.value=ne.state.probe,Ge.sunLights.value=ne.state.sun,Ge.sunLightShadows.value=ne.state.sunShadow,Ge.directionalLights.value=ne.state.directional,Ge.directionalLightShadows.value=ne.state.directionalShadow,Ge.spotLights.value=ne.state.spot,Ge.spotLightShadows.value=ne.state.spotShadow,Ge.rectAreaLights.value=ne.state.rectArea,Ge.ltc_1.value=ne.state.rectAreaLTC1,Ge.ltc_2.value=ne.state.rectAreaLTC2,Ge.pointLights.value=ne.state.point,Ge.pointLightShadows.value=ne.state.pointShadow,Ge.hemisphereLights.value=ne.state.hemi,Ge.sunShadowMatrix.value=ne.state.sunShadowMatrix,Ge.sunShadowCascade.value=ne.state.sunShadowCascade,Ge.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ge.spotLightMatrix.value=ne.state.spotLightMatrix,Ge.spotLightMap.value=ne.state.spotLightMap,Ge.pointShadowMatrix.value=ne.state.pointShadowMatrix),te.lightProbeGrid=b.state.lightProbeGridArray.length>0,te.currentProgram=at,te.uniformsList=null,at}function Ec(S){if(S.uniformsList===null){let Y=S.currentProgram.getUniforms();S.uniformsList=Ts.seqWithValue(Y.seq,S.uniforms)}return S.uniformsList}function Tc(S,Y){let le=W.get(S);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function Wu(S,Y){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(Y.matrixWorld);for(let le=0,te=S.length;le<te;le++){let ne=S[le];if(ne.texture!==null&&ne.boundingBox.containsPoint(v))return ne}return null}function Xu(S,Y,le,te,ne){Y.isScene!==!0&&(Y=re),ie.resetTextureUnits();let Fe=Y.fog,ze=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?Y.environment:null,Ue=A===null?F.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:lt.workingColorSpace,He=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Xe=Me.get(te.envMap||ze,He),nt=te.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,at=!!le.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ge=!!le.morphAttributes.position,pt=!!le.morphAttributes.normal,It=!!le.morphAttributes.color,St=Sn;te.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(St=F.toneMapping);let yt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Gt=yt!==void 0?yt.length:0,Be=W.get(te),Yt=b.state.lights;if(pe===!0&&(ve===!0||S!==K)){let Mt=S===K&&te.id===I;qe.setState(te,S,Mt)}let ct=!1;te.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Yt.state.version||Be.outputColorSpace!==Ue||ne.isBatchedMesh&&Be.batching===!1||!ne.isBatchedMesh&&Be.batching===!0||ne.isBatchedMesh&&Be.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&Be.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&Be.instancing===!1||!ne.isInstancedMesh&&Be.instancing===!0||ne.isSkinnedMesh&&Be.skinning===!1||!ne.isSkinnedMesh&&Be.skinning===!0||ne.isInstancedMesh&&Be.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Be.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Be.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Be.instancingMorph===!1&&ne.morphTexture!==null||Be.envMap!==Xe||te.fog===!0&&Be.fog!==Fe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==qe.numPlanes||Be.numIntersection!==qe.numIntersection)||Be.vertexAlphas!==nt||Be.vertexTangents!==at||Be.morphTargets!==Ge||Be.morphNormals!==pt||Be.morphColors!==It||Be.toneMapping!==St||Be.morphTargetsCount!==Gt||!!Be.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,Be.__version=te.version);let un=Be.currentProgram;ct===!0&&(un=Er(te,Y,ne),Z&&te.isNodeMaterial&&Z.onUpdateProgram(te,un,Be));let Cn=!1,ei=!1,Oi=!1,xt=un.getUniforms(),Ct=Be.uniforms;if(y.useProgram(un.program)&&(Cn=!0,ei=!0,Oi=!0),te.id!==I&&(I=te.id,ei=!0),Be.needsLights){let Mt=Wu(b.state.lightProbeGridArray,ne);Be.lightProbeGrid!==Mt&&(Be.lightProbeGrid=Mt,ei=!0)}if(Cn||K!==S){y.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),xt.setValue(G,"projectionMatrix",S.projectionMatrix),xt.setValue(G,"viewMatrix",S.matrixWorldInverse);let ni=xt.map.cameraPosition;ni!==void 0&&ni.setValue(G,Ae.setFromMatrixPosition(S.matrixWorld)),N.logarithmicDepthBuffer&&xt.setValue(G,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&xt.setValue(G,"isOrthographic",S.isOrthographicCamera===!0),K!==S&&(K=S,ei=!0,Oi=!0)}if(Be.needsLights&&(Yt.state.sunShadowMap.length>0&&xt.setValue(G,"sunShadowMap",Yt.state.sunShadowMap,ie),Yt.state.directionalShadowMap.length>0&&xt.setValue(G,"directionalShadowMap",Yt.state.directionalShadowMap,ie),Yt.state.spotShadowMap.length>0&&xt.setValue(G,"spotShadowMap",Yt.state.spotShadowMap,ie),Yt.state.pointShadowMap.length>0&&xt.setValue(G,"pointShadowMap",Yt.state.pointShadowMap,ie)),ne.isSkinnedMesh){xt.setOptional(G,ne,"bindMatrix"),xt.setOptional(G,ne,"bindMatrixInverse");let Mt=ne.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),xt.setValue(G,"boneTexture",Mt.boneTexture,ie))}ne.isBatchedMesh&&(xt.setOptional(G,ne,"batchingTexture"),xt.setValue(G,"batchingTexture",ne._matricesTexture,ie),xt.setOptional(G,ne,"batchingIdTexture"),xt.setValue(G,"batchingIdTexture",ne._indirectTexture,ie),xt.setOptional(G,ne,"batchingColorTexture"),ne._colorsTexture!==null&&xt.setValue(G,"batchingColorTexture",ne._colorsTexture,ie));let ti=le.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&J.update(ne,le,un),(ei||Be.receiveShadow!==ne.receiveShadow)&&(Be.receiveShadow=ne.receiveShadow,xt.setValue(G,"receiveShadow",ne.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&Y.environment!==null&&(Ct.envMapIntensity.value=Y.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=Kg()),ei){if(xt.setValue(G,"toneMappingExposure",F.toneMappingExposure),Be.needsLights&&qu(Ct,Oi),Fe&&te.fog===!0&&Ve.refreshFogUniforms(Ct,Fe),Ve.refreshMaterialUniforms(Ct,te,X,z,b.state.transmissionRenderTarget[S.id]),Be.needsLights&&Be.lightProbeGrid){let Mt=Be.lightProbeGrid;Ct.probesSH.value=Mt.texture,Ct.probesMin.value.copy(Mt.boundingBox.min),Ct.probesMax.value.copy(Mt.boundingBox.max),Ct.probesResolution.value.copy(Mt.resolution)}Ts.upload(G,Ec(Be),Ct,ie)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Ts.upload(G,Ec(Be),Ct,ie),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&xt.setValue(G,"center",ne.center),xt.setValue(G,"modelViewMatrix",ne.modelViewMatrix),xt.setValue(G,"normalMatrix",ne.normalMatrix),xt.setValue(G,"modelMatrix",ne.matrixWorld),te.uniformsGroups!==void 0){let Mt=te.uniformsGroups;for(let ni=0,Bi=Mt.length;ni<Bi;ni++){let Ac=Mt[ni];ye.update(Ac,un),ye.bind(Ac,un)}}return un}function qu(S,Y){S.ambientLightColor.needsUpdate=Y,S.lightProbe.needsUpdate=Y,S.sunLights.needsUpdate=Y,S.sunLightShadows.needsUpdate=Y,S.directionalLights.needsUpdate=Y,S.directionalLightShadows.needsUpdate=Y,S.pointLights.needsUpdate=Y,S.pointLightShadows.needsUpdate=Y,S.spotLights.needsUpdate=Y,S.spotLightShadows.needsUpdate=Y,S.rectAreaLights.needsUpdate=Y,S.hemisphereLights.needsUpdate=Y}function Yu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,Y,le){let te=W.get(S);te.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),W.get(S.texture).__webglTexture=Y,W.get(S.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:le,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,Y){let le=W.get(S);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(S,Y=0,le=0){A=S,q=Y,E=le;let te=null,ne=!1,Fe=!1;if(S){let Ue=W.get(S);if(Ue.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(G.FRAMEBUFFER,Ue.__webglFramebuffer),O.copy(S.viewport),ee.copy(S.scissor),Q=S.scissorTest,y.viewport(O),y.scissor(ee),y.setScissorTest(Q),I=-1;return}else if(Ue.__webglFramebuffer===void 0)ie.setupRenderTarget(S);else if(Ue.__hasExternalTextures)ie.rebindTextures(S,W.get(S.texture).__webglTexture,W.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let nt=S.depthTexture;if(Ue.__boundDepthTexture!==nt){if(nt!==null&&W.has(nt)&&(S.width!==nt.image.width||S.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(S)}}let He=S.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Fe=!0);let Xe=W.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Xe[Y])?te=Xe[Y][le]:te=Xe[Y],ne=!0):S.samples>0&&ie.useMultisampledRTT(S)===!1?te=W.get(S).__webglMultisampledFramebuffer:Array.isArray(Xe)?te=Xe[le]:te=Xe,O.copy(S.viewport),ee.copy(S.scissor),Q=S.scissorTest}else O.copy(ue).multiplyScalar(X).floor(),ee.copy(Re).multiplyScalar(X).floor(),Q=Ke;if(le!==0&&(te=U),y.bindFramebuffer(G.FRAMEBUFFER,te)&&y.drawBuffers(S,te),y.viewport(O),y.scissor(ee),y.setScissorTest(Q),ne){let Ue=W.get(S.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ue.__webglTexture,le)}else if(Fe){let Ue=Y;for(let He=0;He<S.textures.length;He++){let Xe=W.get(S.textures[He]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+He,Xe.__webglTexture,le,Ue)}}else if(S!==null&&le!==0){let Ue=W.get(S.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ue.__webglTexture,le)}I=-1};function wc(S){let Y=W.get(S);return(Y.__readFormat!==S.format||Y.__readType!==S.type)&&(Y.__readFormat=S.format,Y.__readType=S.type,Y.__formatReadable=N.textureFormatReadable(S.format),Y.__typeReadable=N.textureTypeReadable(S.type)),Y}this.readRenderTargetPixels=function(S,Y,le,te,ne,Fe,ze,Ue=0){if(!(S&&S.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ze!==void 0&&(He=He[ze]),He){y.bindFramebuffer(G.FRAMEBUFFER,He);try{let Xe=S.textures[Ue],nt=Xe.format,at=Xe.type;S.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ue);let Ge=wc(Xe);if(Ge.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ge.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=S.width-te&&le>=0&&le<=S.height-ne&&G.readPixels(Y,le,te,ne,Le.convert(nt),Le.convert(at),Fe)}finally{let Xe=A!==null?W.get(A).__webglFramebuffer:null;y.bindFramebuffer(G.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(S,Y,le,te,ne,Fe,ze,Ue=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ze!==void 0&&(He=He[ze]),He)if(Y>=0&&Y<=S.width-te&&le>=0&&le<=S.height-ne){y.bindFramebuffer(G.FRAMEBUFFER,He);let Xe=S.textures[Ue],nt=Xe.format,at=Xe.type;S.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ue);let Ge=wc(Xe);if(Ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,pt),G.bufferData(G.PIXEL_PACK_BUFFER,Fe.byteLength,G.STREAM_READ),G.readPixels(Y,le,te,ne,Le.convert(nt),Le.convert(at),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let It=A!==null?W.get(A).__webglFramebuffer:null;y.bindFramebuffer(G.FRAMEBUFFER,It);let St=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await kh(G,St,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,pt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Fe),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(pt),G.deleteSync(St),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,Y=null,le=0){let te=Math.pow(2,-le),ne=Math.floor(S.image.width*te),Fe=Math.floor(S.image.height*te),ze=Y!==null?Y.x:0,Ue=Y!==null?Y.y:0;ie.setTexture2D(S,0),G.copyTexSubImage2D(G.TEXTURE_2D,le,0,0,ze,Ue,ne,Fe),y.unbindTexture()},this.copyTextureToTexture=function(S,Y,le=null,te=null,ne=0,Fe=0){let ze,Ue,He,Xe,nt,at,Ge,pt,It,St=S.isCompressedTexture?S.mipmaps[Fe]:S.image;if(le!==null)ze=le.max.x-le.min.x,Ue=le.max.y-le.min.y,He=le.isBox3?le.max.z-le.min.z:1,Xe=le.min.x,nt=le.min.y,at=le.isBox3?le.min.z:0;else{let Ct=Math.pow(2,-ne);ze=Math.floor(St.width*Ct),Ue=Math.floor(St.height*Ct),S.isDataArrayTexture?He=St.depth:S.isData3DTexture?He=Math.floor(St.depth*Ct):He=1,Xe=0,nt=0,at=0}te!==null?(Ge=te.x,pt=te.y,It=te.z):(Ge=0,pt=0,It=0);let yt=Le.convert(Y.format),Gt=Le.convert(Y.type),Be;Y.isData3DTexture?(ie.setTexture3D(Y,0),Be=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ie.setTexture2DArray(Y,0),Be=G.TEXTURE_2D_ARRAY):(ie.setTexture2D(Y,0),Be=G.TEXTURE_2D),y.activeTexture(G.TEXTURE0),y.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),y.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),y.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);let Yt=y.getParameter(G.UNPACK_ROW_LENGTH),ct=y.getParameter(G.UNPACK_IMAGE_HEIGHT),un=y.getParameter(G.UNPACK_SKIP_PIXELS),Cn=y.getParameter(G.UNPACK_SKIP_ROWS),ei=y.getParameter(G.UNPACK_SKIP_IMAGES);y.pixelStorei(G.UNPACK_ROW_LENGTH,St.width),y.pixelStorei(G.UNPACK_IMAGE_HEIGHT,St.height),y.pixelStorei(G.UNPACK_SKIP_PIXELS,Xe),y.pixelStorei(G.UNPACK_SKIP_ROWS,nt),y.pixelStorei(G.UNPACK_SKIP_IMAGES,at);let Oi=S.isDataArrayTexture||S.isData3DTexture,xt=Y.isDataArrayTexture||Y.isData3DTexture;if(S.isDepthTexture){let Ct=W.get(S),ti=W.get(Y),Mt=W.get(Ct.__renderTarget),ni=W.get(ti.__renderTarget);y.bindFramebuffer(G.READ_FRAMEBUFFER,Mt.__webglFramebuffer),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let Bi=0;Bi<He;Bi++)Oi&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,W.get(S).__webglTexture,ne,at+Bi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,W.get(Y).__webglTexture,Fe,It+Bi)),G.blitFramebuffer(Xe,nt,ze,Ue,Ge,pt,ze,Ue,G.DEPTH_BUFFER_BIT,G.NEAREST);y.bindFramebuffer(G.READ_FRAMEBUFFER,null),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ne!==0||S.isRenderTargetTexture||W.has(S)){let Ct=W.get(S),ti=W.get(Y);y.bindFramebuffer(G.READ_FRAMEBUFFER,T),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,L);for(let Mt=0;Mt<He;Mt++)Oi?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ct.__webglTexture,ne,at+Mt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ct.__webglTexture,ne),xt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ti.__webglTexture,Fe,It+Mt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ti.__webglTexture,Fe),ne!==0?G.blitFramebuffer(Xe,nt,ze,Ue,Ge,pt,ze,Ue,G.COLOR_BUFFER_BIT,G.NEAREST):xt?G.copyTexSubImage3D(Be,Fe,Ge,pt,It+Mt,Xe,nt,ze,Ue):G.copyTexSubImage2D(Be,Fe,Ge,pt,Xe,nt,ze,Ue);y.bindFramebuffer(G.READ_FRAMEBUFFER,null),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else xt?S.isDataTexture||S.isData3DTexture?G.texSubImage3D(Be,Fe,Ge,pt,It,ze,Ue,He,yt,Gt,St.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Be,Fe,Ge,pt,It,ze,Ue,He,yt,St.data):G.texSubImage3D(Be,Fe,Ge,pt,It,ze,Ue,He,yt,Gt,St):S.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Fe,Ge,pt,ze,Ue,yt,Gt,St.data):S.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Fe,Ge,pt,St.width,St.height,yt,St.data):G.texSubImage2D(G.TEXTURE_2D,Fe,Ge,pt,ze,Ue,yt,Gt,St);y.pixelStorei(G.UNPACK_ROW_LENGTH,Yt),y.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ct),y.pixelStorei(G.UNPACK_SKIP_PIXELS,un),y.pixelStorei(G.UNPACK_SKIP_ROWS,Cn),y.pixelStorei(G.UNPACK_SKIP_IMAGES,ei),Fe===0&&Y.generateMipmaps&&G.generateMipmap(Be),y.unbindTexture()},this.initRenderTarget=function(S){W.get(S).__webglFramebuffer===void 0&&ie.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ie.setTextureCube(S,0):S.isData3DTexture?ie.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ie.setTexture2DArray(S,0):ie.setTexture2D(S,0),y.unbindTexture()},this.resetState=function(){q=0,E=0,A=null,y.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var br=new V;function mn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;br.copy(e),br[n]=0,br.normalize();let c=.5*a/(a+o),f=1-br.angleTo(i)/l;return Math.sign(br[t])===1?f*c:o/(a+o)+c+c*(1-f)}var Po=class i extends Fn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new V,c=new V,f=new V(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,x=h.length/6,g=new V,m=.5/a;for(let p=0,w=0;p<h.length;p+=3,w+=2)switch(l.fromArray(h,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[p+0]=f.x*Math.sign(l.x)+c.x*r,h[p+1]=f.y*Math.sign(l.y)+c.y*r,h[p+2]=f.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/x)){case 0:g.set(1,0,0),d[w+0]=mn(g,c,"z","y",r,n),d[w+1]=1-mn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[w+0]=1-mn(g,c,"z","y",r,n),d[w+1]=1-mn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[w+0]=1-mn(g,c,"x","z",r,e),d[w+1]=mn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[w+0]=1-mn(g,c,"x","z",r,e),d[w+1]=1-mn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[w+0]=1-mn(g,c,"x","y",r,e),d[w+1]=1-mn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[w+0]=mn(g,c,"x","y",r,e),d[w+1]=1-mn(g,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var ut={mint:6153140,mintDeep:4179866,belly:13237224,lav:13089023,lavDeep:11772671,pink:16748480,ink:2759518,wood:15782832,woodDark:14267530,wall:15326974,wallB:16770033,cream:16774890,sun:16764735},D=(i,e)=>new $t(Object.assign({color:i,roughness:.85,metalness:0},e||{})),xe=(i,e,t,n)=>new Po(i,e,t,4,n??Math.min(i,e,t)*.25);function B(i,e,t,n,s,r){let a=new ft(i,e);return a.position.set(t||0,n||0,s||0),r!==!1&&(a.castShadow=!0,a.receiveShadow=!0),a}function he(i,e,t,n,s,r,a,o){let l=B(new or(i,32,24),e,r,a,o);return l.scale.set(t||1,n||1,s||1),l}function Rt(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new us(n);return s.colorSpace=Xt,s.anisotropy=4,s}function _i(i){let e=new Ri;return e.moveTo(0,-.5*i),e.bezierCurveTo(-.9*i,.05*i,-.5*i,.7*i,0,.3*i),e.bezierCurveTo(.5*i,.7*i,.9*i,.05*i,0,-.5*i),e}function Ru(i){return Rt(64,64,e=>{if(e.translate(32,32),i==="heart")e.fillStyle="#FF5FA8",e.beginPath(),e.moveTo(0,22),e.bezierCurveTo(-34,-2,-16,-28,0,-10),e.bezierCurveTo(16,-28,34,-2,0,22),e.fill();else if(i==="star"){e.fillStyle="#FFCF3F",e.beginPath();for(let t=0;t<10;t++){let n=t%2?9:22,s=t*Math.PI/5-Math.PI/2;e.lineTo(Math.cos(s)*n,Math.sin(s)*n)}e.fill()}else i==="drop"?(e.fillStyle="#8EDBFF",e.beginPath(),e.moveTo(0,-22),e.bezierCurveTo(22,4,14,22,0,22),e.bezierCurveTo(-14,22,-22,4,0,-22),e.fill()):i==="bubble"?(e.strokeStyle="#8EDBFF",e.lineWidth=4,e.fillStyle="rgba(200,240,255,.55)",e.beginPath(),e.arc(0,0,16,0,7),e.fill(),e.stroke(),e.fillStyle="#fff",e.beginPath(),e.arc(-6,-6,4,0,7),e.fill()):i==="z"?(e.fillStyle="#7C5CFF",e.font="900 40px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("z",0,2)):(e.fillStyle="#fff",e.beginPath(),e.arc(0,0,14,0,7),e.fill())})}function Cu(i){return Rt(256,256,(e,t,n)=>{let s=i<6||i>=21,r=i>=18&&i<21,a=i>=6&&i<9,o=e.createLinearGradient(0,0,0,n);if(s?(o.addColorStop(0,"#1c1650"),o.addColorStop(1,"#4b3a8f")):r?(o.addColorStop(0,"#8a6fd1"),o.addColorStop(.6,"#ff9fb8"),o.addColorStop(1,"#ffd29a")):a?(o.addColorStop(0,"#9fd8ff"),o.addColorStop(1,"#ffe2c9")):(o.addColorStop(0,"#7fcbff"),o.addColorStop(1,"#d8f1ff")),e.fillStyle=o,e.fillRect(0,0,t,n),s){e.fillStyle="#fff";for(let l=0;l<26;l++)e.globalAlpha=.5+Math.random()*.5,e.beginPath(),e.arc(Math.random()*t,Math.random()*n*.8,Math.random()*1.6+.6,0,7),e.fill();e.globalAlpha=1,e.fillStyle="#FFF4C2",e.beginPath(),e.arc(t*.68,n*.28,26,0,7),e.fill(),e.fillStyle="#4b3a8f",e.beginPath(),e.arc(t*.68+11,n*.28-5,22,0,7),e.fill()}else e.fillStyle=r?"#FF8A6B":"#FFE27A",e.beginPath(),e.arc(t*(r?.3:.7),n*(r?.7:.25),28,0,7),e.fill(),e.fillStyle="rgba(255,255,255,.9)",[[50,150,26],[78,148,32],[110,152,24],[170,90,20],[196,88,26],[222,94,18]].forEach(l=>{e.beginPath(),e.arc(l[0],l[1],l[2],0,7),e.fill()})})}var Pu=[6153140,12166911,16758938,9362431,16769658,16754895,11069547,14738674,16751266,13085071,10405375,16164607],Iu=["cat","bear","bunny","none","fox","mouse"],Lu=["dot","happy","stars","big","sleepy"],Du=["","bow","glasses","beanie","flower","crown","shades","phones","bandana","bowtie","wings","hat"],Nu=["round","tall","chubby","bean"],Uu=["none","cat","bunny","fox"],Qg=/^[0-9a-b][0-5][0-4][0-9a-b][0-3][0-3](h[0-5])?$/,ex=[{color:12166911,ears:"none",eyes:"stars",acc:["hat"],tail:"cat"},{color:16743034,ears:"none",eyes:"happy",acc:["horns"],tail:"fox"},{color:16753226,ears:"none",eyes:"happy",acc:["pumpkin"],tail:"none"},{color:14738674,ears:"cat",eyes:"big",acc:["cape"],tail:"none"},{color:15986918,ears:"none",eyes:"dot",acc:["mummy"],tail:"none"},{color:16777215,ears:"none",eyes:"big",acc:["ghost"],tail:"none"}];function Fu(i){return i=String(i??""),/^[0-7][0-3][0-2][0-4]$/.test(i)&&(i+="00"),Qg.test(i)?i:""}function Ui(i){i=Fu(i)||"000000";let e=Du[parseInt(i[3],12)],t={mika:!0,color:Pu[parseInt(i[0],12)],ears:Iu[+i[1]],eyes:Lu[+i[2]],topper:"pom",acc:e?[e]:[],shape:Nu[+i[4]],tail:Uu[+i[5]]};return i[6]==="h"?Object.assign(t,ex[+i[7]]||{}):t}function tx(i,e){if(!i.isMesh)return i;let t=new ft(i.geometry,new rt({color:e,side:Ht}));return t.scale.setScalar(1.05),t.castShadow=!1,t.receiveShadow=!1,i.add(t),i}function dc(i,e){let t=new et(i);return t.multiplyScalar(e),t}function Kt(i){i=Object.assign({color:ut.mint,ears:"round",topper:"pom",eyes:"dot",mika:!1,acc:[]},i||{});let e=new Te,t=new Te;e.add(t);let n={tall:[.9,1.2],chubby:[1.2,.9],bean:[.86,1.1]}[i.shape]||[1,1],s=n[0],r=n[1],a=D(i.color,{roughness:.62,emissive:dc(i.color,.55),emissiveIntensity:.3}),o=D(dc(i.color,.85).getHex()),l=.55*1.1,c=.55*.95,f=.55,h=.56,u=(E,A)=>f*Math.sqrt(Math.max(.02,1-(E/l)**2-((A-h)/c)**2));t.add(he(.55,a,1.1,.95,1,0,.56,0));{let E=new et(i.color).lerp(new et(16777215),.62).getHex();t.add(he(.42,D(E,{roughness:.7,emissive:E,emissiveIntensity:.32}),1.05,.9,.55,0,.42,.3))}let d=D(i.mika?14273791:16757713),x=[];if([-1,1].forEach(E=>{let A=new Te,I=.28;if(i.ears==="round")A.position.set(E*.4,.98,-.02),A.add(he(.22,a,1,1.05,.62,0,.12,0)),A.add(he(.12,d,1,1.05,.5,0,.12,.08));else if(i.ears==="bear")A.position.set(E*.43,.97,-.02),A.add(he(.17,a,1,1,.7,0,.1,0)),A.add(he(.09,d,1,1,.5,0,.1,.07)),I=.2;else if(i.ears==="cat"){A.position.set(E*.36,1,0);let K=B(new Dt(.2,.4,4),a,0,.15,0);K.rotation.y=Math.PI/4,K.scale.z=.55,A.add(K);let O=B(new Dt(.11,.26,4),d,0,.12,.06);O.rotation.y=Math.PI/4,O.scale.z=.4,A.add(O),I=.32}else if(i.ears==="fox"){A.position.set(E*.33,1,0);let K=B(new Dt(.16,.46,4),a,0,.18,0);K.rotation.y=Math.PI/4,K.scale.z=.5,A.add(K);let O=B(new Dt(.08,.18,4),D(16774380),0,.3,.01);O.rotation.y=Math.PI/4,O.scale.z=.5,A.add(O),I=.22}else if(i.ears==="mouse")A.position.set(E*.46,.92,-.02),A.add(he(.26,a,1,1,.45,0,.12,0)),A.add(he(.17,d,1,1,.4,0,.12,.07)),I=.34;else if(i.ears==="bunny")A.position.set(E*.26,1,-.02),A.add(he(.14,a,1,2.6,.55,0,.3,0)),A.add(he(.08,d,1,2.3,.5,0,.3,.06)),I=.14;else return;A.userData.base=I,A.rotation.z=-E*I,t.add(A),x.push(A)}),i.tail&&i.tail!=="none"){let E=new Te;if(E.position.set(0,.3,-.5),t.add(E),i.tail==="bunny")E.add(he(.14,D(16777215,{roughness:.9}),1,1,1,0,0,-.04));else if(i.tail==="cat"){let A=B(new ht(.2,.05,8,18,Math.PI*1.25),a,.12,.12,-.04);A.rotation.set(0,0,.3),E.add(A),E.add(he(.06,a,1,1,1,.34,.26,-.04))}else{let A=he(.2,a,.8,1.5,.8,.12,.14,-.06);A.rotation.z=-.7,E.add(A);let I=he(.1,D(16774380),.8,1.3,.8,.28,.3,-.06);I.rotation.z=-.7,E.add(I)}E.traverse(A=>{A.isMesh&&(A.castShadow=!1)})}let g=new Te;g.position.set(0,1.07,.02),t.add(g),i.topper==="pom"?(g.add(he(.11,D(ut.lav),1,1,1,-.1,.02,0)),g.add(he(.11,D(ut.lav),1,1,1,.1,.02,0)),g.add(he(.14,D(ut.lavDeep),1,1,1,0,.12,0)),g.add(he(.035,D(16777215,{emissive:16777215,emissiveIntensity:.4}),1,1,1,-.04,.2,.09))):i.ears==="none"&&(g.position.y=1.02,g.add(he(.1,a,1,1,1,0,.05,0)),g.add(he(.05,D(16777215),1,1,1,-.02,.1,.05)));let m=new Te;t.add(m);let p=new $t({color:ut.ink,roughness:.25}),w=new rt({color:16777215}),M=[];[-1,1].forEach(E=>{let A=E*.21,I=.66,K=u(A,I)-.02,O=new Te;O.position.set(A,I,K);let ee=new Te,Q=i.eyes==="stars"?1.2:i.eyes==="big"?1.38:1;ee.add(he(.105*Q,p,1,i.eyes==="dot"&&!i.mika?1.1:i.eyes==="sleepy"?.62:1.28,.55,0,0,0));let ae=he(.036*Q,w,1,1,1,.035,.07,.07);ae.castShadow=!1,ee.add(ae);let ce=he(.018*Q,w,1,1,1,-.035,-.06,.07);if(ce.castShadow=!1,ee.add(ce),i.eyes==="stars"){let se=he(.02,w,1,1,1,.045,-.04,.075);se.castShadow=!1,ee.add(se)}O.add(ee);let k=new ft(new ht(.075,.02,8,20,Math.PI),p);k.position.y=-.03,k.visible=!1,O.add(k);let z=new ft(new ht(.075,.02,8,20,Math.PI),p);z.rotation.z=Math.PI,z.position.y=.03,z.visible=!1,O.add(z);let X=new ft(new ln(_i(.24),{depth:.03,bevelEnabled:!1}),new rt({color:16732058}));X.position.z=.02,X.visible=!1,O.add(X);let oe=B(xe(.17,.035,.04,.015),p,0,.18,.04);oe.visible=!1,oe.castShadow=!1,O.add(oe),m.add(O),M.push({g:O,open:ee,happy:k,closed:z,heart:X,brow:oe,s:E})});let v=[-1,1].map(E=>{let A=he(.085,D(16748480,{roughness:.9}),1.2,.72,.3,E*.37,.5,u(E*.37,.5)-.03);return A.castShadow=!1,m.add(A),A}),C=.47,b=u(0,C)-.005,R={};R.smile=new ft(new ht(.05,.015,8,16,Math.PI),p),R.smile.rotation.z=Math.PI,R.smile.position.set(0,C+.045,b),R.frown=new ft(new ht(.05,.015,8,16,Math.PI),p),R.frown.position.set(0,C-.02,b),R.open=he(.075,new $t({color:8004178,roughness:.5}),1,.9,.35,0,C,b-.01),R.open.add(he(.04,D(16748451),1.3,.7,.4,0,-.04,.03)),R.o=he(.035,new $t({color:8004178}),1,1.2,.4,0,C,b-.005),Object.keys(R).forEach(E=>{R[E].visible=!1,R[E].castShadow=!1,m.add(R[E])});let _=new $t({color:9362431,roughness:.1,transparent:!0,opacity:.85}),P=he(.04,_,.8,1.2,.8,-.27,.56,u(-.27,.56)+.01);P.visible=!1,m.add(P);let F=he(.045,_,.8,1.25,.8,.46,.98,.25);F.visible=!1,t.add(F);let H=[-1,1].map(E=>{let A=new Te;return A.position.set(E*.6,.5,.08),A.add(he(.14,o,1.15,.7,.75,E*.06,0,0)),t.add(A),A}),Z=[-1,1].map(E=>{let A=he(.16,o,1,.6,1.25,E*.25,.08,.2);return e.add(A),A}),U={};U.scarf=new Te;{let E=B(new ht(.4,.085,12,32),D(ut.pink),0,.36,.12);E.rotation.x=Math.PI/2.1,E.scale.set(1.12,1,1),U.scarf.add(E);let A=B(xe(.14,.34,.06,.03),D(16740270),.28,.2,.46);A.rotation.z=.15,U.scarf.add(A)}U.bow=new Te;{let E=D(16740270),A=he(.1,E,1.4,.8,.5,-.11,0,0),I=he(.1,E,1.4,.8,.5,.11,0,0);A.rotation.z=.5,I.rotation.z=-.5,U.bow.add(A,I,he(.055,D(16757713),1,1,.8,0,0,.02)),U.bow.position.set(-.4,1.17,.12),U.bow.rotation.z=.2}U.crown=new Te;{let E=D(ut.sun,{metalness:.3,roughness:.4});U.crown.add(B(new ke(.2,.22,.12,20,1,!0),E,0,0,0));for(let A=0;A<5;A++){let I=A/5*Math.PI*2;U.crown.add(B(new Dt(.06,.16,8),E,Math.cos(I)*.2,.12,Math.sin(I)*.2))}U.crown.position.set(0,1.12,.03)}U.glasses=new Te,[-1,1].forEach(E=>{U.glasses.add(B(new ht(.13,.016,8,24),p,E*.21,.66,u(E*.21,.66)+.04))}),U.glasses.add(B(xe(.1,.018,.02,.008),p,0,.67,u(0,.67)+.04)),U.hat=new Te,U.hat.add(B(new Dt(.3,.7,20),D(8150271),0,.38,0)),U.hat.add(B(new ke(.46,.46,.05,28),D(5980118),0,.02,0)),U.hat.add(he(.045,D(ut.sun,{emissive:16764735,emissiveIntensity:.6}),1,1,1,0,.74,0)),U.hat.position.set(0,1.1,0),U.hat.rotation.z=.12,U.wings=new Te;{let E=D(16777215,{roughness:.6});[-1,1].forEach(A=>{let I=he(.3,E,.5,1,.18,A*.55,.62,-.35);I.rotation.z=A*-.5,U.wings.add(I)})}U.pj=new Te,U.pj.add(he(.34,D(9347839),1.05,.7,1,0,.1,0)),U.pj.add(he(.075,D(16777215),1,1,1,.3,.12,.2)),U.pj.position.set(0,1,0),U.pj.rotation.z=-.1,U.beanie=new Te;{U.beanie.add(he(.38,D(16740238),1.05,.62,1,0,.05,0));let E=B(new ht(.36,.07,10,28),D(16777215),0,-.04,0);E.rotation.x=Math.PI/2,U.beanie.add(E),U.beanie.add(he(.09,D(16777215),1,1,1,0,.36,0)),U.beanie.position.set(0,1,0)}U.flower=new Te;{for(let E=0;E<5;E++){let A=E/5*Math.PI*2;U.flower.add(he(.07,D(16757713),1,1,.6,Math.cos(A)*.09,Math.sin(A)*.09,0))}U.flower.add(he(.055,D(ut.sun),1,1,.8,0,0,.03)),U.flower.position.set(.36,1.08,.18),U.flower.rotation.z=-.3}U.bowtie=new Te;{let E=D(14697851);U.bowtie.add(he(.1,E,1.5,.9,.6,-.12,0,0),he(.1,E,1.5,.9,.6,.12,0,0),he(.05,D(16765411),1,1,.8,0,0,.02)),U.bowtie.position.set(0,.34,.5)}U.horns=new Te,[-1,1].forEach(E=>{let A=B(new Dt(.09,.3,12),D(14035001),E*.24,0,0);A.rotation.z=-E*.35,U.horns.add(A)}),U.horns.position.set(0,1.02,.05),U.pumpkin=new Te,U.pumpkin.add(he(.4,D(16747039),1.15,.8,1.1,0,0,0)),U.pumpkin.add(B(new ke(.04,.06,.16,8),D(4028970),0,.3,0)),[-1,1].forEach(E=>U.pumpkin.add(B(new Dt(.06,.1,3),D(2759518),E*.14,.04,.4))),U.pumpkin.position.set(0,1.05,.02),U.cape=new Te,U.cape.add(B(xe(1,1,.06,.03),D(11538990),0,.35,-.5)),U.cape.add(B(new ht(.42,.06,8,24),D(2759518),0,.18,.1)).rotation.x=Math.PI/2,[-1,1].forEach(E=>U.cape.add(B(new Dt(.035,.12,8),D(16777215),E*.07,.22,.5))),U.mummy=new Te;{let E=D(16775920,{roughness:.9});[.05,.28,.5,.72].forEach((A,I)=>{let K=B(new ht(.5-Math.abs(A-.4)*.12,.05,8,28),E,0,A,0);K.rotation.x=Math.PI/2+(I%2?.14:-.14),U.mummy.add(K)})}U.ghost=new Te,U.ghost.add(he(.62,D(16777215,{transparent:!0,opacity:.72,roughness:1}),1,1.02,1,0,.42,0)),[-1,1].forEach(E=>U.ghost.add(he(.04,D(2759518),1,1.4,.5,E*.2,.62,.55))),U.mortar=new Te;{let E=D(2759518);U.mortar.add(B(new ke(.26,.3,.16,20),E,0,.04,0)),U.mortar.add(B(xe(.8,.04,.8,.01),E,0,.15,0)),U.mortar.add(B(new ke(.012,.012,.3,6),D(ut.sun),.28,0,.28)),U.mortar.add(he(.05,D(ut.sun),1,1,1,.28,-.14,.28)),U.mortar.position.set(0,1.08,0)}U.labcoat=new Te;{let E=D(16777215,{roughness:.7});U.labcoat.add(he(.58,E,1.12,.7,1.05,0,.42,-.02)),U.labcoat.add(he(.07,D(14697851),1,1,.6,.26,.42,.52)),U.labcoat.add(he(.07,D(14697851),1,1,.6,.26,.26,.54))}U.shades=new Te;{let E=D(1906240,{roughness:.2});[-1,1].forEach(A=>{U.shades.add(he(.14,E,1.05,.82,.3,A*.21,.66,u(A*.21,.66)+.05))}),U.shades.add(B(xe(.12,.025,.03,.01),E,0,.68,u(0,.68)+.06))}U.phones=new Te;{let E=D(16748480),A=D(16777215),I=B(new ht(.5,.045,8,28,Math.PI),E,0,0,0);I.rotation.z=0,U.phones.add(I),[-1,1].forEach(K=>{let O=B(new ke(.15,.15,.12,18),A,K*.5,-.02,0);O.rotation.z=Math.PI/2,U.phones.add(O),U.phones.add(he(.08,E,1,1,.5,K*.56,-.02,0))}),U.phones.position.set(0,.62,.02)}U.bunny=new Te;{let E=D(16777215),A=D(16757713);[-1,1].forEach(K=>{let O=he(.1,E,1,3.2,.5,K*.2,.34,0);O.rotation.z=-K*.18,U.bunny.add(O);let ee=he(.055,A,1,2.6,.5,K*.2,.34,.04);ee.rotation.z=-K*.18,U.bunny.add(ee)});let I=B(new ht(.34,.035,8,24),A,0,0,0);I.rotation.x=Math.PI/2,U.bunny.add(I),U.bunny.position.set(0,1.06,.02)}U.cape=new Te;{let E=D(14697851);U.cape.add(he(.5,E,1.1,1.15,.2,0,.52,-.5));let A=B(new ht(.34,.07,10,28),D(16765411),0,.3,.05);A.rotation.x=Math.PI/2.2,U.cape.add(A)}U.bandana=new Te;{let E=D(16734830),A=B(new ht(.43,.06,10,28),E,0,0,0);A.rotation.x=Math.PI/2.15,U.bandana.add(A),U.bandana.add(he(.09,E,1.3,1,.8,.33,-.04,.2)),U.bandana.add(he(.05,D(16777215),1,1,1,0,.02,.43)),U.bandana.position.set(0,.94,0)}Object.keys(U).forEach(E=>{U[E].visible=!1,t.add(U[E])});{let E=dc(i.color,.42).getHex(),A=[];t.traverse(I=>{I.isMesh&&I.parent&&(I.material===a||I.material===o)&&A.push(I)}),Z.forEach(I=>A.push(I)),A.forEach(I=>tx(I,E))}e.traverse(E=>{E.isMesh&&(E.receiveShadow=!1)});let T={emo:"neutral",talking:!1,vy:0,y:0,squash:0,yaw:0,yawT:0,blinkT:0,nextBlink:1.5+Math.random()*2,look:new Ee,lookT:new Ee,nextLook:1,armsT:0,sleeping:!1},L={root:e,st:T,fx:null,baseY:0,roll:0};function q(E){let A=i.eyes==="happy"&&!i.mika;E.open.visible=!A,E.happy.visible=A,E.closed.visible=!1,E.heart.visible=!1,E.brow.visible=!1,E.g.scale.set(1,1,1)}return L.setAccessories=E=>{Object.keys(U).forEach(A=>{U[A].visible=E.indexOf(A)>=0})},L.setEmotion=E=>{T.emo=E,T.armsT=0,T.sleeping=!1,M.forEach(q),Object.keys(R).forEach(I=>{R[I].visible=!1}),P.visible=!1,F.visible=!1;let A=M;E==="happy"?(A.forEach(I=>{I.open.visible=!1,I.happy.visible=!0}),R.open.visible=!0,R.open.scale.set(1.05,.8,.35)):E==="love"?(A.forEach(I=>{I.open.visible=!1,I.heart.visible=!0}),R.open.visible=!0,T.armsT=1):E==="wow"?(A.forEach(I=>{I.g.scale.set(1.18,1.18,1)}),R.o.visible=!0):E==="sad"?(A.forEach(I=>{I.brow.visible=!0,I.brow.rotation.z=-I.s*.45}),R.frown.visible=!0,P.visible=!0):E==="worry"?(A.forEach(I=>{I.brow.visible=!0,I.brow.rotation.z=-I.s*.4}),R.o.visible=!0,R.o.scale.set(.8,1,.4),F.visible=!0):E==="angry"?(A.forEach(I=>{I.brow.visible=!0,I.brow.rotation.z=I.s*.5,I.g.scale.set(1.05,.85,1)}),R.open.visible=!0,R.open.scale.set(1.35,1.1,.35),T.armsT=.9,F.visible=!1):E==="proud"?(A.forEach(I=>{I.open.visible=!1,I.happy.visible=!0}),R.open.visible=!0,R.open.scale.set(1.2,1,.35),T.armsT=.5,L.fx&&L.fx("star",5)):E==="shy"?(A.forEach(I=>{I.open.visible=!1,I.closed.visible=!0}),R.smile.visible=!0,T.yawT=.5):E==="sleep"?(A.forEach(I=>{I.open.visible=!1,I.closed.visible=!0}),R.o.visible=!0,R.o.scale.set(.6,.7,.4),T.sleeping=!0):R.smile.visible=!0,v.forEach(I=>I.scale.set(E==="shy"||E==="love"?1.6:1.2,E==="shy"?.95:.72,.3))},L.hop=E=>{T.y<.05&&(T.vy=E||4.2,T.squash=-.2)},L.setTalking=E=>{T.talking=!!E},L.setListening=E=>{T.listening=!!E,E||(T.yawT=0)},L.look=(E,A)=>T.lookT.set(E,A),L.face=E=>{T.yawT=E},L.update=(E,A,I,K)=>{(T.y>0||T.vy>0)&&(T.vy-=16*E,T.y+=T.vy*E,T.y<=0&&(T.y=0,T.vy<-1&&(T.squash=.18),T.vy=0)),T.squash+=(0-T.squash)*Math.min(1,E*10),e.position.y=(L.baseY||0)+T.y+(I?Math.abs(Math.sin(A*9))*.07:0),T.yaw+=(T.yawT-T.yaw)*Math.min(1,E*5),e.rotation.y=T.yaw,e.rotation.z=(I?Math.sin(A*9)*.08:0)+(L.roll||0);let O=T.sleeping?.04*Math.sin(A*1.4):.022*Math.sin(A*2.3);t.scale.set((1-T.squash*.5-O*.5)*s,(1+T.squash+O)*r,(1-T.squash*.5)*s),Z.forEach((ae,ce)=>{ae.position.y=.08+(I?Math.max(0,Math.sin(A*9+ce*Math.PI))*.06:0)});let ee=T.emo==="sad"||T.emo==="worry"?.35:T.listening?-.12:0;x.forEach((ae,ce)=>{let k=ce?1:-1;ae.rotation.z=-k*((ae.userData.base||.28)+(T.talking?.1:0)+ee)+Math.sin(A*1.7+ce)*.05}),g.rotation.z=Math.sin(A*2.1)*.12,g.rotation.x=Math.sin(A*1.6)*.06,H.forEach((ae,ce)=>{let k=ce?1:-1;ae.rotation.z=k*-(.2+T.armsT*1.6)+(I?Math.sin(A*9+ce*3)*.3:Math.sin(A*2+ce)*.06),ae.position.y=.5+T.armsT*.28}),!K&&A>T.nextLook&&(T.lookT.set((Math.random()-.5)*1.4,(Math.random()-.5)*.8),T.nextLook=A+1.5+Math.random()*2.5),T.emo==="angry"?(e.rotation.z+=Math.sin(A*38)*.05,t.position.x=Math.sin(A*44)*.015):t.position.x=0,T.listening&&A>(T.nextNod||0)&&(T.squash=.09,T.nextNod=A+1.6+Math.random()*1.6,T.yawT=(Math.random()-.5)*.4),T.look.lerp(T.lookT,Math.min(1,E*6)),M.forEach(ae=>{ae.open.position.x=T.look.x*.022,ae.open.position.y=T.look.y*.018}),!T.sleeping&&A>T.nextBlink&&(T.blinkT=.13,T.nextBlink=A+2+Math.random()*3.5),T.blinkT=Math.max(0,T.blinkT-E);let Q=T.blinkT>0?.1:1;if(M.forEach(ae=>{ae.open.visible&&(ae.open.scale.y+=(Q-ae.open.scale.y)*Math.min(1,E*40))}),T.talking){let ae=.55+Math.abs(Math.sin(A*13))*.7;Object.keys(R).forEach(ce=>{R[ce].visible=ce==="open"}),R.open.scale.set(1,ae,.35)}else{let ae=["happy","love","proud"].indexOf(T.emo)>=0;R.open.visible&&!ae&&(R.open.visible=!1),!ae&&!Object.keys(R).some(ce=>R[ce].visible)&&(R.smile.visible=!0)}if(P.visible){let ae=A*.35%1;P.position.y=.56-ae*.18,P.material.opacity=.85*(1-ae)}F.visible&&(F.position.y=.98+Math.sin(A*3)*.02),T.sleeping&&L.fx&&Math.random()<E*.7&&L.fx("z",1)},L.dispose=()=>{e.traverse(E=>{E.isMesh&&E.geometry.dispose()}),e.parent&&e.parent.remove(e)},L.setEmotion("neutral"),L.setAccessories(i.acc||[]),L}function Ou(){let i=Rt(128,128,(t,n,s)=>{let r=t.createRadialGradient(64,64,4,64,64,62);r.addColorStop(0,"rgba(70,40,120,.38)"),r.addColorStop(1,"rgba(70,40,120,0)"),t.fillStyle=r,t.fillRect(0,0,n,s)}),e=new ft(new Pt(1.5,1.5),new rt({map:i,transparent:!0,depthWrite:!1}));return e.rotation.x=-Math.PI/2,e.position.y=.012,e}var Tu={};function xc(i){return Tu[i]||(Tu[i]=Ru(i))}function Rs(i){let e=[];return{emit(t,n,s,r){let a=r||1;for(let o=0;o<n;o++){let l=new wi(new li({map:xc(t),transparent:!0,depthWrite:!1,depthTest:!1,opacity:0}));l.position.set(s.x+(Math.random()-.5)*.9*a,s.y+1.1*a+Math.random()*.3,s.z+.3),l.scale.setScalar((.22+Math.random()*.14)*a),l.renderOrder=10,i.add(l),e.push({s:l,vx:(Math.random()-.5)*.7,vy:t==="drop"?-.2:.8+Math.random()*.6,life:0,max:1.6+Math.random()*.6,delay:o*.09})}},update(t){for(let n=e.length-1;n>=0;n--){let s=e[n];if(s.delay-=t,s.delay>0)continue;s.life+=t;let r=s.life/s.max;s.s.position.x+=s.vx*t,s.s.position.y+=s.vy*t*(1-r*.5),s.s.material.opacity=r<.15?r/.15:Math.max(0,1-(r-.15)/.85),s.life>=s.max&&(i.remove(s.s),s.s.material.dispose(),e.splice(n,1))}}}}function Cs(i){i.add(new ms(16777215,16766696,1.15));let e=new xs(16777215,1.3);return e.position.set(-3,6,5),i.add(e),e}var Bu={plushbear:{p:[-1.7,1.02,-2.75],r:.5},neon:{p:[2.9,3.3,-4.1],r:0},beanbag:{p:[-5.2,0,.1],r:.3},aquarium:{p:[-6.2,0,-.5],r:Math.PI/2},arcade:{p:[6.3,0,-.2],r:-Math.PI/2},poster:{p:[-7.03,2.6,1.6],r:Math.PI/2},catbed:{p:[-2,0,1.9],r:.4},disco:{p:[1.2,3.3,.8],r:0},bookshelf:{p:[-6.75,0,2.9],r:Math.PI/2},cloud:{p:[-2.6,3.2,.4],r:0},piano:{p:[5.3,0,2.7],r:-.5},starrug:{p:[3.4,0,1],r:.3}},Fi={plushbear(){let i=new Te,e=D(14264428);return i.add(he(.26,e,1,1,.95,0,.26,0)),i.add(he(.2,e,1,1,.95,0,.62,.02)),i.add(he(.08,e,1,1,.6,-.15,.78,0)),i.add(he(.08,e,1,1,.6,.15,.78,0)),i.add(he(.08,D(16112048),1,.8,.7,0,.58,.17)),i.add(he(.03,D(ut.ink),1,1,1,0,.6,.23)),i.add(he(.025,D(ut.ink),1,1,1,-.07,.68,.17)),i.add(he(.025,D(ut.ink),1,1,1,.07,.68,.17)),i.add(he(.07,e,1,1.3,1,-.28,.25,.08)),i.add(he(.07,e,1,1.3,1,.28,.25,.08)),i.add(B(xe(.3,.07,.04,.02),D(16740270),0,.42,.2)),i},neon(){let i=new Te,e=new ft(new ln(_i(.8),{depth:.05,bevelEnabled:!1}),new rt({color:16743104})),t=new ft(new Pt(1.8,1.8),new rt({map:Rt(128,128,(n,s,r)=>{let a=n.createRadialGradient(64,64,4,64,64,62);a.addColorStop(0,"rgba(255,122,192,.55)"),a.addColorStop(1,"rgba(255,122,192,0)"),n.fillStyle=a,n.fillRect(0,0,s,r)}),transparent:!0,depthWrite:!1}));return t.position.z=-.02,i.add(t,e),i},beanbag(){let i=new Te,e=D(16752328),t=D(16761564);return i.add(he(.62,e,1,.78,1,0,.42,0)),i.add(he(.4,t,1,.62,1,.12,.8,.1)),i.add(he(.16,D(16777215),1,.6,1,-.3,.84,.3)),i},aquarium(){let i=new Te;i.add(B(xe(1.5,.7,.8,.06),D(ut.woodDark),0,.35,0)),i.add(B(xe(1.38,.08,.68,.03),D(16771512),0,.74,0,!1));let e=B(xe(1.4,.85,.7,.05),new $t({color:9362431,transparent:!0,opacity:.38,roughness:.1,emissive:5224680,emissiveIntensity:.3}),0,1.2,0,!1);i.add(e);let t=[];[[16751178,0],[16765514,2],[16740270,4]].forEach((n,s)=>{let r=new Te;r.add(he(.1,D(n[0],{emissive:n[0],emissiveIntensity:.25}),1.4,1,.8,0,0,0));let a=B(new Dt(.08,.14,4),D(n[0]),-.17,0,0,!1);a.rotation.z=Math.PI/2,r.add(a),r.add(he(.018,D(ut.ink),1,1,1,.1,.03,.07)),r.userData={ph:n[1],y:1.05+s*.17},i.add(r),t.push(r)});for(let n=0;n<4;n++)i.add(he(.03+n%2*.015,D(16777215,{transparent:!0,opacity:.8}),1,1,1,.5+n*.03,.9+n*.2,.1));return i.userData.fish=t,i},bookshelf(){let i=new Te,e=D(14858378);i.add(B(xe(1.9,2.5,.12,.04),D(13080688),0,1.25,-.2)),[-.93,.93].forEach(n=>i.add(B(xe(.08,2.5,.5,.03),e,n,1.25,0)));for(let n=0;n<4;n++)i.add(B(xe(1.9,.08,.5,.03),e,0,.04+n*.8,0));let t=[16748480,9362431,16765514,12166911,6153140,16758938];for(let n=0;n<3;n++){let s=-.8;for(let r=0;r<9&&s<.8;r++){let a=.1+(r*7+n*3)%4*.03,o=.5+(r*5+n)%3*.1;i.add(B(xe(a,o,.3,.02),D(t[(r+n*2)%t.length]),s+a/2,.08+n*.8+o/2+.04,.02)),s+=a+.04}}return i.add(he(.14,D(16777215),1,.9,1,.6,2.18,.05)),i.add(he(.05,D(ut.ink),1,1,1,.56,2.2,.17)),i.add(he(.05,D(ut.ink),1,1,1,.64,2.2,.17)),i},cloud(){let i=new Te,e=D(16777215,{emissive:16774870,emissiveIntensity:.7,roughness:.9});return i.add(he(.5,e,1.2,.8,1,0,0,0)),i.add(he(.38,e,1,.9,1,-.5,-.05,.05)),i.add(he(.42,e,1,.9,1,.5,-.03,-.05)),i.add(he(.3,e,1,.9,1,.1,.28,0)),i.add(B(new ke(.012,.012,1.2,6),D(16777215),0,.9,0,!1)),i.add(he(.025,D(ut.ink),1,1,1,-.12,-.02,.45)),i.add(he(.025,D(ut.ink),1,1,1,.12,-.02,.45)),i.add(he(.05,D(16757713),1.4,.7,.4,-.25,-.1,.43)),i.add(he(.05,D(16757713),1.4,.7,.4,.25,-.1,.43)),i},piano(){let i=new Te,e=D(16752328);[[-.65,-.28],[.65,-.28],[-.65,.28],[.65,.28]].forEach(n=>i.add(B(xe(.1,.6,.1,.03),D(14858378),n[0],.3,n[1]))),i.add(B(xe(1.6,.34,.8,.08),e,0,.72,0)),i.add(B(xe(1.5,.05,.3,.02),D(16777215),0,.92,.22,!1));for(let n=0;n<8;n++)i.add(B(xe(.16,.04,.28,.01),D(16777215),-.65+n*.185,.95,.22,!1));[0,1,3,4,5].forEach(n=>i.add(B(xe(.09,.06,.17,.01),D(ut.ink),-.56+n*.185,.98,.15,!1))),i.add(B(xe(1.5,.5,.06,.03),e,0,1.12,-.32));let t=new ft(new ln(_i(.22),{depth:.02,bevelEnabled:!1}),D(16777215));return t.position.set(0,1.14,-.28),i.add(t),i},starrug(){let i=new Te,e=new Ri,t=10;for(let r=0;r<t;r++){let a=r%2?.55:1.25,o=r/t*Math.PI*2+Math.PI/2;r===0?e.moveTo(Math.cos(o)*a,Math.sin(o)*a):e.lineTo(Math.cos(o)*a,Math.sin(o)*a)}e.closePath();let n=new ft(new ln(e,{depth:.05,bevelEnabled:!0,bevelSize:.06,bevelThickness:.03,bevelSegments:3}),D(16769658));n.rotation.x=-Math.PI/2,n.position.y=.02,n.receiveShadow=!0,i.add(n);let s=new ft(new Ai(.32,24),D(16752328));return s.rotation.x=-Math.PI/2,s.position.y=.11,i.add(s),i},arcade(){let i=new Te;i.add(B(xe(.95,1.75,.85,.1),D(8150271),0,.88,0));let e=Rt(128,96,(n,s,r)=>{n.fillStyle="#1b1240",n.fillRect(0,0,s,r),n.fillStyle="#ff7ac0";for(let a=0;a<5;a++)n.beginPath(),n.arc(20+a*22,24,7,0,7),n.fill();n.fillStyle="#8edbff",n.fillRect(20,60,88,8),n.fillStyle="#ffe27a",n.fillRect(54,72,20,10)}),t=B(new Pt(.7,.52),new rt({map:e}),0,1.3,.43,!1);return t.rotation.x=-.12,i.add(t),i.add(B(xe(.8,.22,.12,.04),D(16769658,{emissive:16764735,emissiveIntensity:.5}),0,1.68,.4,!1)),i.add(B(xe(.9,.12,.5,.04),D(5980118),0,.78,.5)),i.add(B(new ke(.025,.025,.16,8),D(16777215),-.2,.9,.5)),i.add(he(.06,D(16732058),1,1,1,-.2,1,.5)),i.add(he(.045,D(9362431),1,1,1,.12,.86,.5)),i.add(he(.045,D(16769658),1,1,1,.26,.86,.5)),i},poster(){let i=new Te;i.add(B(xe(1.3,1.8,.06,.03),D(16777215),0,0,0,!1));let e=Rt(128,180,(t,n,s)=>{let r=t.createLinearGradient(0,0,0,s);r.addColorStop(0,"#ffb3d1"),r.addColorStop(1,"#b9a6ff"),t.fillStyle=r,t.fillRect(0,0,n,s),t.fillStyle="#fff",t.beginPath(),t.arc(64,70,30,0,7),t.fill(),t.fillStyle="#ff5fa8",t.beginPath(),t.moveTo(64,92),t.bezierCurveTo(30,66,48,44,64,58),t.bezierCurveTo(80,44,98,66,64,92),t.fill(),t.fillStyle="#fff";for(let a=0;a<8;a++)t.beginPath(),t.arc(14+a*37%100,130+a*17%40,3,0,7),t.fill();t.fillRect(24,150,80,6)});return i.add(B(new Pt(1.14,1.64),new rt({map:e}),0,0,.04,!1)),i},catbed(){let i=new Te;i.add(B(new ke(.62,.66,.22,28),D(16767400),0,.11,0));let e=B(new ht(.58,.12,10,28),D(16761466),0,.24,0);e.rotation.x=Math.PI/2,i.add(e),i.add(B(new ke(.46,.46,.1,24),D(16752328),0,.2,0));let t=D(15902298);i.add(he(.26,t,1.2,.8,1,0,.42,0)),i.add(he(.17,t,1,1,1,.22,.52,.06)),[-1,1].forEach(s=>{let r=B(new Dt(.06,.12,4),t,.26,.68,.06+s*.09,!1);i.add(r)}),i.add(he(.02,D(ut.ink),1,1,1,.37,.54,.02)),i.add(he(.02,D(ut.ink),1,1,1,.37,.54,.12));let n=B(new ht(.16,.04,8,14,4),t,-.3,.36,0,!1);return i.add(n),i},disco(){let i=new Te;i.add(B(new ke(.012,.012,1.2,6),D(16777215),0,.6,0,!1));let e=Rt(128,64,(n,s,r)=>{for(let a=0;a<8;a++)for(let o=0;o<16;o++)n.fillStyle=["#ffffff","#cfe9ff","#ffd1e3","#e7ddff"][(o*3+a*5)%4],n.fillRect(o*8,a*8,7,7)}),t=he(.3,new $t({map:e,emissive:16777215,emissiveIntensity:.35,metalness:.6,roughness:.25}),1,1,1,0,0,0);return i.add(t),i.userData.spin=t,i}},nx=Object.keys(Fi),gc=-2.6,zu=-3,Gn={fridge:[2.9,-2.45],pc:[4.4,-1.55],door:[6.3,-3],bath:[-6,-2.15],toilet:[-4.35,-2.45],bed:[gc+.45,zu+.05],plant0:[-.75,-2.55],plant1:[1.65,-2.55],lamp:[-.9,-1],fries:[4.3,-2]},ix=[[-3.95,-1.2,-4,-2.05],[-7.1,-4.85,-4,-2.7],[2.25,3.55,-4,-3],[3.4,5.45,-4,-2.95],[-1.15,-.3,-4,-3.05],[1.25,2.05,-4,-3.05],[-4.85,-4,-4,-3.05],[5.6,7.1,-4,-3.4]];function wu(i,e){return i=Math.max(-6.6,Math.min(6.6,i)),e=Math.max(-3.4,Math.min(3.6,e)),ix.forEach(t=>{i>t[0]&&i<t[1]&&e>t[2]&&e<t[3]&&(e=t[3]+.2)}),[i,e]}function sx(i){let e=new Te;i.add(e);let t=Rt(512,512,(k,z,X)=>{k.fillStyle="#F2D8B8",k.fillRect(0,0,z,X);for(let oe=0;oe<8;oe++)k.fillStyle=oe%2?"#EFD0AB":"#F5DDBF",k.fillRect(0,oe*64,z,64),k.fillStyle="rgba(160,110,60,.22)",k.fillRect(0,oe*64,z,2);for(let oe=0;oe<26;oe++)k.fillStyle="rgba(160,110,60,.18)",k.fillRect(Math.random()*z,Math.floor(Math.random()*8)*64,2,64)});t.wrapS=t.wrapT=an,t.repeat.set(3,1.8),e.add(B(xe(14.6,.4,8.8,.12),D(16777215,{map:t}),0,-.2,.1));let n=(k,z)=>Rt(256,256,(X,oe,se)=>{X.fillStyle=k,X.fillRect(0,0,oe,se),X.fillStyle=z;for(let ue=0;ue<4;ue++)for(let Re=0;Re<4;Re++)X.beginPath(),X.arc(32+Re*64+ue%2*32,32+ue*64,5,0,7),X.fill()}),s=n("#E9DEFE","rgba(255,255,255,.85)");s.wrapS=s.wrapT=an,s.repeat.set(6,2.3);let r=n("#FFE3F1","rgba(255,255,255,.85)");r.wrapS=r.wrapT=an,r.repeat.set(3.4,2.3),e.add(B(xe(14.6,4.4,.3,.1),D(16777215,{map:s}),0,2.2,-4.3)),e.add(B(xe(.3,4.4,8.8,.1),D(16777215,{map:r}),-7.2,2.2,.1)),e.add(B(xe(14.4,.22,.1,.05),D(16777215),0,.12,-4.1)),e.add(B(xe(.1,.22,8.6,.05),D(16777215),-7,.12,.1));let a=Rt(128,128,(k,z,X)=>{for(let oe=0;oe<4;oe++)for(let se=0;se<4;se++)k.fillStyle=(se+oe)%2?"#DDF3FF":"#F4FBFF",k.fillRect(se*32,oe*32,32,32)});a.wrapS=a.wrapT=an,a.repeat.set(3,3),e.add(B(xe(3.2,.05,3.2,.02),D(16777215,{map:a}),-5.45,.03,-2.45,!1));let o=Rt(256,128,(k,z,X)=>{k.fillStyle="#DDF3FF",k.fillRect(0,0,z,X),k.strokeStyle="rgba(255,255,255,.9)",k.lineWidth=3;for(let oe=0;oe<=8;oe++)k.beginPath(),k.moveTo(oe*32,0),k.lineTo(oe*32,X),k.stroke();for(let oe=0;oe<=4;oe++)k.beginPath(),k.moveTo(0,oe*32),k.lineTo(z,oe*32),k.stroke()});e.add(B(new Pt(3.2,1.3),new rt({map:o}),-5.45,.8,-4.13,!1));let l=new Te;l.position.set(.2,2.45,-4.11),e.add(l);let c=new rt({map:Cu(new Date().getHours())});l.add(B(new Pt(1.7,1.55),c,0,0,.02,!1));let f=D(16777215);l.add(B(xe(1.95,.14,.2,.06),f,0,.85,.05)),l.add(B(xe(1.95,.14,.2,.06),f,0,-.85,.05)),l.add(B(xe(.14,1.8,.2,.06),f,-.92,0,.05)),l.add(B(xe(.14,1.8,.2,.06),f,.92,0,.05)),l.add(B(xe(.07,1.6,.12,.03),f,0,0,.06)),l.add(B(xe(1.75,.07,.12,.03),f,0,0,.06)),l.add(B(xe(2.2,.1,.4,.05),D(16777215),0,-.98,.18));let h=D(ut.pink),u=B(xe(.5,1.9,.14,.07),h,-1.2,0,.12);u.rotation.z=.05,l.add(u);let d=B(xe(.5,1.9,.14,.07),h,1.2,0,.12);d.rotation.z=-.05,l.add(d);let x=B(new ke(.04,.04,2.9,10),D(ut.woodDark),0,1,.16);x.rotation.z=Math.PI/2,l.add(x);let g=new Te;g.position.set(0,0,.9),e.add(g),g.add(B(new ke(2.5,2.5,.06,48),D(16765162),0,.03,0)),g.add(B(new ke(2.15,2.15,.08,48),D(12448732),0,.035,0)),g.add(B(new ke(1.5,1.5,.1,48),D(16774890),0,.04,0));let m=k=>k.traverse(z=>{z.isMesh&&(z.userData.root=k)}),p=new Te;p.position.set(gc,0,zu),p.userData.pick="bed",e.add(p),p.add(B(xe(2.5,.5,1.75,.12),D(14858634),0,.25,0)),p.add(B(xe(2.4,.4,1.65,.16),D(14273791),0,.68,0)),p.add(B(xe(1.65,.2,1.7,.1),D(12448732),.38,.92,0));let w=B(xe(.7,.25,.9,.12),D(16761052),-.78,.98,0);w.rotation.z=.08,p.add(w),p.add(B(xe(.14,1.4,1.75,.06),D(14858634),-1.3,.7,0)),m(p);let M=new Te;M.position.set(gc,3.05,-4.1),e.add(M),M.add(B(xe(.9,.9,.08,.05),D(16777215),0,0,0));let v=new ft(new ln(_i(.55),{depth:.04,bevelEnabled:!1}),D(ut.pink));v.position.set(0,.03,.05),M.add(v);let C=[];[[-.7,-3.45,.95],[1.65,-3.45,1.1]].forEach((k,z)=>{let X=new Te;X.position.set(k[0],0,k[1]),X.userData.pick="plant",X.userData.idx=z,e.add(X),X.add(B(new ke(.42,.32,.6,20),D(z?12441855:16758938),0,.3,0));let oe=new Te;X.add(oe);let se=D(7659663);for(let Re=0;Re<7;Re++){let Ke=Re/7*Math.PI*2,de=he(.34,se,.55,1.25,.28,Math.cos(Ke)*.3,1+Re%2*.22,Math.sin(Ke)*.3);de.rotation.z=Math.cos(Ke)*.5,de.rotation.x=Math.sin(Ke)*.5,oe.add(de)}oe.add(he(.32,D(6279290),1,1,1,0,1.15,0)),X.scale.setScalar(k[2]);let ue=new wi(new li({map:xc("drop"),transparent:!0,depthTest:!1,opacity:0}));ue.scale.setScalar(.5),ue.position.set(0,2.3,.3),ue.renderOrder=11,X.add(ue),m(X),C.push({g:X,leaves:oe,thirst:ue,pop:0})});let b=new Te;b.position.set(2.9,0,-3.5),b.userData.pick="fridge",e.add(b);let R=D(12448732,{emissive:10479304,emissiveIntensity:.2});b.add(B(xe(1.2,2.5,.9,.12),R,0,1.25,0)),b.add(B(xe(1.16,.06,.04,.02),D(8376238),0,1.55,.46,!1)),b.add(B(xe(.06,.5,.08,.03),D(16777215),.48,1.9,.48)),b.add(B(xe(.06,.7,.08,.03),D(16777215),.48,1,.48)),[-1,1].forEach(k=>b.add(he(.05,D(ut.ink),1,1.3,.6,k*.2,1.95,.46))),[-1,1].forEach(k=>b.add(he(.07,D(16748480),1.3,.7,.3,k*.34,1.86,.46,!1))),b.add(B(new ht(.05,.015,6,12,Math.PI),D(ut.ink),0,1.86,.47,!1).rotateZ(Math.PI));{let k=new ft(new ln(_i(.2),{depth:.02,bevelEnabled:!1}),D(16736168));k.position.set(-.3,1.1,.46),b.add(k)}m(b);let _=new Te;_.position.set(4.4,0,-3.5),_.userData.pick="pc",e.add(_),_.add(B(xe(1.9,.1,.9,.04),D(14858378),0,.85,0)),[-.8,.8].forEach(k=>_.add(B(xe(.1,.85,.8,.03),D(13080688),k,.42,0))),_.add(B(xe(.1,.35,.1,.03),D(16777215),0,1.07,-.12));let P=Rt(256,160,(k,z,X)=>{let oe=k.createLinearGradient(0,0,0,X);oe.addColorStop(0,"#9fdcff"),oe.addColorStop(1,"#d9ccff"),k.fillStyle=oe,k.fillRect(0,0,z,X),k.fillStyle="#fff",k.beginPath(),k.arc(70,46,22,0,7),k.arc(96,50,18,0,7),k.fill(),k.fillStyle="#5de3b4",k.beginPath(),k.arc(190,70,30,0,7),k.fill(),k.strokeStyle="#fff",k.lineWidth=4,k.beginPath(),k.arc(190,70,30,0,7),k.moveTo(160,70),k.lineTo(220,70),k.stroke(),k.fillStyle="#2a1b5e",k.font="800 22px sans-serif",k.fillText("MONDE",24,130)});_.add(B(xe(1.2,.8,.08,.05),D(16777215),0,1.5,-.12)),_.add(B(new Pt(1.06,.66),new rt({map:P}),0,1.5,-.075,!1)),_.add(B(xe(.7,.04,.24,.02),D(16765411),0,.92,.2,!1));let F=new Te;F.position.set(0,0,.8),F.add(B(new ke(.34,.34,.12,20),D(16751300),0,.5,0)),F.add(B(new ke(.05,.05,.5,8),D(16777215),0,.25,0)),F.add(B(xe(.6,.5,.1,.06),D(16751300),0,.85,-.3)),_.add(F),m(_);let H=new Te;H.position.set(6.3,0,-4.08),H.userData.pick="door",e.add(H),H.add(B(xe(1.55,2.95,.12,.06),D(16777215),0,1.47,0)),H.add(B(xe(1.2,2.7,.1,.08),D(16751300),0,1.35,.07)),H.add(he(.07,D(16765514,{metalness:.4,roughness:.4}),1,1,1,.38,1.3,.16));{let k=new ft(new ln(_i(.4),{depth:.03,bevelEnabled:!1}),D(16777215));k.position.set(0,1.85,.13),H.add(k)}let Z=Rt(256,96,(k,z,X)=>{k.fillStyle="#ffffff",k.fillRect(0,0,z,X),k.fillStyle="#7c5cff",k.font="800 44px sans-serif",k.textAlign="center",k.textBaseline="middle",k.fillText("\u2192 MONDE",128,50)});H.add(B(new Pt(1.2,.45),new rt({map:Z}),0,3.3,.04,!1)),H.add(B(xe(1.5,.05,.9,.02),D(16765162),0,.03,.8,!1)),m(H);let U=new Te;U.position.set(-6,0,-3.3),U.userData.pick="bath",e.add(U),U.add(B(xe(2.1,.75,1,.18),D(16777215),0,.38,0)),U.add(B(xe(1.8,.04,.72,.02),D(10477823,{emissive:6998261,emissiveIntensity:.3}),0,.72,0,!1));for(let k=0;k<9;k++)U.add(he(.1+k%3*.04,D(16777215),1,.8,1,-.7+k*.19%1.5,.78+k%2*.05,-.15+k%3*.14,!1));U.add(he(.1,D(16769354),1.1,.9,1,.55,.85,.1)),U.add(he(.04,D(16751178),1.4,.8,.8,.65,.85,.1)),U.add(B(new ke(.04,.04,.4,8),D(13227743,{metalness:.5}),-.95,.95,-.3)),m(U);let T=new Te;T.position.set(-4.4,0,-3.6),T.userData.pick="toilet",e.add(T),T.add(B(xe(.5,.5,.3,.08),D(16777215),0,.6,-.15)),T.add(B(new ke(.26,.2,.42,20),D(16777215),0,.22,.12)),T.add(B(new ke(.28,.28,.06,20),D(16765411),0,.46,.14)),m(T);let L=Rt(256,96,(k,z,X)=>{k.fillStyle="#ffffff",k.fillRect(0,0,z,X),k.fillStyle="#3aa7e8",k.font="800 40px sans-serif",k.textAlign="center",k.textBaseline="middle",k.fillText("BAIN",128,50)});e.add(B(new Pt(1,.38),new rt({map:L}),-5.45,2.3,-4.12,!1));let q=new Te;q.position.set(4.4,3.15,-3.9),e.add(q),q.add(B(xe(2.4,.1,.5,.04),D(ut.woodDark),0,0,0)),[16748480,9362431,16769658,12166911,7659663].forEach((k,z)=>q.add(B(xe(.14,.55+z%3*.08,.3,.03),D(k),-1+z*.17,.35+z%3*.04,0)));let E=new Te;E.position.set(.75,.05,0),E.userData.pick="fries",q.add(E),E.add(B(xe(.36,.34,.36,.06),D(16734810),0,.17,0));for(let k=0;k<6;k++)E.add(B(xe(.07,.34,.07,.02),D(16765514),-.12+k%3*.12,.45,-.08+Math.floor(k/3)*.16));E.add(he(.025,D(ut.ink),1,1,1,-.07,.2,.19)),E.add(he(.025,D(ut.ink),1,1,1,.07,.2,.19)),m(E);let A=new Te;A.position.set(-.9,0,-1.6),A.userData.pick="lamp",e.add(A),A.add(B(new ke(.28,.32,.08,20),D(ut.woodDark),0,.04,0)),A.add(B(new ke(.04,.04,1.9,10),D(ut.woodDark),0,1,0));let I=new $t({color:16773321,emissive:16761178,emissiveIntensity:0,roughness:.8});I.side=en,A.add(B(new ke(.28,.45,.5,24,1,!0),I,0,2.15,0)),m(A),e.add(B(new ke(.5,.52,.5,28),D(16761052),2.2,.25,1.6)),e.add(he(.52,D(16761052),1,.35,1,2.2,.5,1.6));let K=[];for(let k=0;k<27;k++){let z=k/26,X=-6.4+z*12.8,oe=3.95-Math.sin(z*Math.PI*3)*.2,se=new rt({color:[16773544,16757713,12448732,14273791][k%4]}),ue=he(.06,se,1,1,1,X,oe,-4.05);ue.castShadow=!1,ue.receiveShadow=!1,e.add(ue),K.push(ue)}let O=[],ee=Ru("star");for(let k=0;k<18;k++){let z=new wi(new li({map:ee,transparent:!0,opacity:0,depthWrite:!1}));z.scale.setScalar(.16+Math.random()*.1),z.userData={ph:Math.random()*6,sp:.25+Math.random()*.3,x:(Math.random()-.5)*12,z:(Math.random()-.5)*6},i.add(z),O.push(z)}let Q={},ae=[];Object.keys(Fi).forEach(k=>{let z=Fi[k](),X=Bu[k];z.position.set(X.p[0],X.p[1],X.p[2]),z.rotation.y=X.r,z.visible=!1,e.add(z),Q[k]=z,(z.userData.fish||z.userData.spin)&&ae.push(z)});function ce(k){ae.forEach(z=>{z.userData.fish&&z.userData.fish.forEach((X,oe)=>{let se=X.userData,ue=k*(.5+oe*.12)+se.ph;X.position.set(Math.sin(ue)*.5,se.y+Math.sin(ue*2)*.04,.05*Math.cos(ue)),X.rotation.y=Math.cos(ue)>0?0:Math.PI}),z.userData.spin&&(z.userData.spin.rotation.y=k*.6)})}return{skyMat:c,shadeMat:I,bulbs:K,dust:O,decor:Q,plants:C,update:ce,room:e}}function Au(i,e,t,n){e==="wave"?(i.hop(4.2),i.setEmotion("happy")):e==="heart"?(i.setEmotion("love"),i.hop(4.6),t.emit("heart",6,i.root.position,n)):e==="happy"?(i.setEmotion("happy"),i.hop(5)):e==="wow"?(i.setEmotion("wow"),i.hop(4)):e==="dance"&&(i.setEmotion("happy"),i.dance=2.4),setTimeout(()=>i.setEmotion("neutral"),2200)}function rx(i,e){e=e||{};let t;try{t=new Hn({antialias:!0,alpha:!1,powerPreference:"low-power",preserveDrawingBuffer:!!e.preserve})}catch{return null}t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.shadowMap.enabled=!0,t.shadowMap.type=Pi;let n=t.domElement;n.className="scene3d",n.setAttribute("aria-hidden","true"),i.insertBefore(n,i.firstChild);let s=document.createElement("div");s.className="st3-ov",i.appendChild(s);let r=new Mn;r.background=new et(15984383);let a=new wt(30,1,.1,60),o=new V(1.3,4,8.2),l=new V(0,1,.3),c=0,f=new ms(16777215,16766696,1);r.add(f);let h=new xs(16777215,1.5);h.position.set(-3,7,5),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),Object.assign(h.shadow.camera,{left:-9,right:9,top:7,bottom:-6,near:1,far:22}),h.shadow.bias=-6e-4,r.add(h);let u=new bn(16761466,0,8,1.6);u.position.set(-.9,2.3,-1.4),r.add(u);let d=sx(r),x=Rs(r),g=Kt(e.look||{mika:!0}),m=e.start||[.2,1];g.root.position.set(m[0],0,m[1]),g.root.scale.setScalar(1.3),r.add(g.root),g.root.traverse($=>{$.isMesh&&($.castShadow=!0)});let p=e.acc||[];g.setAccessories(p);let w=Ou();r.add(w),g.fx=($,re)=>x.emit($,re,g.root.position,1.3);let M={job:null,pending:null,target:new V(m[0],0,m[1]),nextWander:4,hold:0,busy:!1,lampOn:!1,lampT:0,lampTouched:!1,walkEmit:!1},v=!!e.visit,C=[[.2,1],[1,.1],[-1.4,.6],[2.4,-1.4],[-3.2,-.6],[3.8,-1.2],[-5.2,-.8],[-.6,-1.5],[4.8,1],[1.6,1.8],[-3.4,1.4],[5.5,-2.2]],b={},R=0,_=!0;function P($){let re=document.createElement("span");return re.className="st3-n",re.textContent=$,re.style.opacity=1,s.appendChild(re),re}let F=e.label?P(e.label):null,H={me:null};function Z($,re,me){$.b&&$.b.remove();let Se=document.createElement("div");Se.className="st3-b "+(me||""),Se.textContent=re,s.appendChild(Se),$.b=Se,setTimeout(()=>{$.b===Se&&(Se.remove(),$.b=null)},Math.min(9e3,2600+re.length*60))}let U={b:null},T={eat:{spot:Gn.fridge,dur:2.8,start(){g.face(0),g.setEmotion("happy"),g.setTalking(!0)},end(){g.setTalking(!1),g.fx("heart",5),g.setEmotion("love"),setTimeout(()=>g.setEmotion("neutral"),2200)}},hug:{spot:[.2,1.3],dur:2.6,start(){g.setEmotion("love"),g.hop(4.8),g.fx("heart",7),g.face(0)},end(){g.setEmotion("neutral")}},play:{spot:[.4,1.2],dur:3.2,tick($){R>$.next&&(g.hop(4.2),g.fx("star",2),$.next=R+.55)},start(){g.setEmotion("happy")},end(){g.setEmotion("neutral")}},wash:{spot:Gn.bath,dur:3.6,tick($){R>$.next&&(g.fx("bubble",2),$.next=R+.45)},start(){g.setEmotion("happy"),g.face(0)},end(){g.fx("star",5),g.setEmotion("love"),setTimeout(()=>g.setEmotion("neutral"),2e3)}},toilet:{spot:Gn.toilet,dur:2.4,start(){g.setEmotion("shy"),g.face(.4)},end(){g.fx("star",3),g.setEmotion("happy"),setTimeout(()=>g.setEmotion("neutral"),1600)}},water:{spot:Gn.plant0,dur:3,tick($){R>$.next&&(x.emit("drop",2,{x:d.plants[$.idx||0].g.position.x,y:.6,z:d.plants[$.idx||0].g.position.z+.5},1),$.next=R+.4)},start($){g.setEmotion("happy"),g.face(-.3),d.plants[$.idx||0].pop=1},end(){g.fx("heart",4),g.setEmotion("neutral")}},nap:{spot:Gn.bed,dur:7,start(){g.setEmotion("sleep"),g.face(.3)},tick(){g.baseY+=(1-g.baseY)*.08,g.roll+=(-1.25-g.roll)*.06},wake:!0,end(){g.setEmotion("happy"),g.hop(4.4),g.fx("star",5)}}};function L($,re){let me=T[$];if(!me)return;let Se=me.spot;$==="water"&&re&&re.idx!=null&&(Se=Gn["plant"+re.idx]),M.job={kind:$,J:me,state:"go",until:0,next:0,idx:re&&re.idx,spot:Se,ms:re&&re.ms},M.target.set(Se[0],0,Se[1]),M.hold=99,M.pending=null}function q($){g.baseY+=(0-g.baseY)*Math.min(1,$*5),g.roll+=(0-g.roll)*Math.min(1,$*6)}function E($,re){let me=Kt(re.look||Ui(re.code));return me.root.scale.setScalar(1.3),me.root.position.set(re.x||0,0,re.z||1),r.add(me.root),me.root.traverse(Se=>{Se.isMesh&&(Se.castShadow=!0)}),me.fx=(Se,G)=>x.emit(Se,G,me.root.position,1.3),re.acc&&me.setAccessories(re.acc),{ch:me,tx:re.x||0,tz:re.z||1,label:P(re.nick||""),b:null}}let A={setEmotion:$=>g.setEmotion($),setAccessories:$=>{p=$,g.setAccessories($)},hop:$=>g.hop($),setLook($){let re=g,me=Kt($);me.root.position.copy(re.root.position),me.root.scale.copy(re.root.scale),me.root.traverse(Se=>{Se.isMesh&&(Se.castShadow=!0)}),r.add(me.root),me.fx=(Se,G)=>x.emit(Se,G,me.root.position,1.3),me.setAccessories(p),me.setEmotion(re.st.emo==="sleep"?"neutral":re.st.emo),re.dispose(),g=me,M.job=null,me.hop(4)},act($,re,me){if($==="rumble"){g.setEmotion("worry"),setTimeout(()=>g.setEmotion("neutral"),2200);return}v||L($,Object.assign({ms:re},me||{}))},goTo($){let re=Gn[$];re&&(M.target.set(re[0],0,re[1]),M.hold=3)},debug(){return{roll:g.roll,baseY:g.baseY,job:M.job?M.job.kind+":"+M.job.state:null}},walkTo($,re){let me=wu($,re);M.target.set(me[0],0,me[1]),M.hold=6,M.job=null,M.pending=null},listening($){g.setListening($),$&&(g.look(0,.3),!v&&!M.job&&(M.target.set(.2,0,1.2),M.hold=3))},talking($){g.setTalking($),$&&!v&&!M.job&&(M.target.set(.2,0,1.2),g.face(0),M.hold=2.5)},look($,re){g.look($,re)},busy($){M.busy=!!$,$&&!M.job&&(M.target.set(.2,0,1.2),M.hold=3)},emit($,re){g.fx($,re)},emote($){Au(g,$,x,1.3)},say($,re){Z(U,$,re||"mk"),g.setTalking(!0),setTimeout(()=>g.setTalking(!1),Math.min(2800,700+$.length*40))},setDecor($){Object.keys(d.decor).forEach(re=>{d.decor[re].visible=$.indexOf(re)>=0})},setPlants($){d.plantLevel=Math.max(0,Math.min(1,$))},pos(){return{x:g.root.position.x,z:g.root.position.z}},addGuest($,re){b[$]||(b[$]=E($,re),b[$].ch.hop(4))},moveGuest($,re,me){let Se=b[$];Se&&(Se.tx=re,Se.tz=me)},guestEmote($,re){let me=b[$];me&&Au(me.ch,re,x,1.3)},guestSay($,re){let me=b[$];me&&(me.ch.hop(3.4),me.ch.setTalking(!0),setTimeout(()=>me.ch.setTalking(!1),Math.min(2600,700+re.length*40)),Z(me,re,"me"))},removeGuest($){let re=b[$];re&&(re.ch.dispose(),re.label.remove(),re.b&&re.b.remove(),delete b[$])},guestCount:()=>Object.keys(b).length,destroy(){_=!1,Object.keys(b).forEach($=>A.removeGuest($)),t.dispose(),t.forceContextLoss&&t.forceContextLoss(),n.parentNode&&n.parentNode.removeChild(n),s.remove()}},I=new _s,K=new Ee,O=new jt(new V(0,1,0),0),ee=new V,Q=null,ae=!1,ce=new Ee,k=new Ee;n.style.touchAction="none";let z=$=>{let re=n.getBoundingClientRect();return K.set(($.clientX-re.left)/re.width*2-1,-(($.clientY-re.top)/re.height)*2+1),K},X=$=>i.dispatchEvent(new CustomEvent("mika3d",{detail:$}));n.addEventListener("pointerdown",$=>{Q={x:$.clientX,y:$.clientY}}),n.addEventListener("pointermove",$=>{if($.pointerType==="touch")return;let re=z($);k.set(re.x*.5,re.y*.25),ae=!0,g.look(re.x*.9,-re.y*.6)}),n.addEventListener("pointerleave",()=>{k.set(0,0),ae=!1}),n.addEventListener("pointerup",$=>{if(!Q||Math.hypot($.clientX-Q.x,$.clientY-Q.y)>8){Q=null;return}Q=null,z($),I.setFromCamera(K,a);for(let re of I.intersectObjects(r.children,!0)){let me=re.object,Se=null,G=null;for(;me;){if(me===g.root){Se="mika";break}if(me.userData&&me.userData.pick){Se=me.userData.pick,G=me;break}if(me.userData&&me.userData.root&&me.userData.root.userData.pick){G=me.userData.root,Se=G.userData.pick;break}me=me.parent}if(!Se)continue;if(Se==="mika"){g.hop(4.6),g.setEmotion("happy"),setTimeout(()=>g.setEmotion("neutral"),1200),X({name:"mika"});return}if(Se==="lamp"){M.lampOn=!M.lampOn,M.lampTouched=!0,X({name:"lamp"});return}if(Se==="fries"){X({name:"fries"});return}if(v)continue;let st=Se==="plant"?"plant"+(G.userData.idx||0):Se,je=Gn[st];if(je){M.job=null,M.target.set(je[0],0,je[1]),M.hold=99,M.pending={name:Se,idx:G.userData.idx};return}}if(I.ray.intersectPlane(O,ee)){let re=wu(ee.x,ee.z);v||(M.job=null,M.pending=null,M.target.set(re[0],0,re[1]),M.hold=8),X({name:"walk",x:re[0],z:re[1]})}});function oe(){let $=i.clientWidth||360,re=i.clientHeight||360;t.setSize($,re,!1),n.style.width="100%",n.style.height="100%",a.aspect=$/re,a.fov=$/re<.9?38:30,a.updateProjectionMatrix()}new ResizeObserver(oe).observe(i),oe();let se=-1;function ue(){let $=new Date().getHours();if($===se)return;se=$,d.skyMat.map.dispose(),d.skyMat.map=Cu($),d.skyMat.needsUpdate=!0;let re=$<6||$>=21,me=$>=18&&$<21;r.background.set(re?2827104:me?16765120:15984383),f.intensity=re?.55:me?.85:1.05,f.color.set(re?9406207:me?16767426:16777215),h.intensity=re?.35:me?1:1.5,h.color.set(re?10135295:me?16757642:16777215),(re||me)&&!M.lampTouched&&(M.lampOn=!0),d.dust.forEach(Se=>{Se.material.map=xc(re?"star":"heart"),Se.material.opacity=0})}ue();let Re=setInterval(ue,6e4),Ke=!0,de=new On,pe=new V,ve=new V;"IntersectionObserver"in window&&new IntersectionObserver($=>{Ke=$[0].isIntersecting},{threshold:.01}).observe(i);function be($,re,me){ve.set(re.x,re.y+me,re.z).project(a);let Se=i.clientWidth,G=i.clientHeight,st=($.offsetWidth||40)/2+4;$.style.left=Math.max(st,Math.min(Se-st,(ve.x*.5+.5)*Se))+"px",$.style.top=(-ve.y*.5+.5)*G+"px"}d.plantLevel=1;function Ae(){if(!_){clearInterval(Re);return}if(requestAnimationFrame(Ae),!Ke||document.hidden){de.getDelta();return}let $=Math.min(.05,de.getDelta());R+=$;let re=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;M.hold=Math.max(0,M.hold-$);let me=g.st,Se=g.root.position,G=M.target.x-Se.x,st=M.target.z-Se.z,je=Math.hypot(G,st);if(M.job){let W=M.job;W.state==="go"&&je<.12?(W.state="do",W.until=R+(W.ms?W.ms/1e3:W.J.dur),W.J.start&&W.J.start(W)):W.state==="do"?(W.J.tick&&W.J.tick(W),R>W.until&&(W.J.end&&W.J.end(W),W.J.wake?(W.state="wake",W.until=R+.9):(i.dispatchEvent(new CustomEvent("mika3d",{detail:{name:"done-"+W.kind}})),M.job=null,M.hold=2))):W.state==="wake"&&(q($),R>W.until&&(g.baseY=0,g.roll=0,i.dispatchEvent(new CustomEvent("mika3d",{detail:{name:"done-"+W.kind}})),M.job=null,M.hold=2,M.target.set(Gn.bed[0]+1.6,0,Gn.bed[1]+1.4)))}else if(M.pending&&je<.12){let W=M.pending;M.pending=null,M.hold=1.5,g.face(0),i.dispatchEvent(new CustomEvent("mika3d",{detail:{name:W.name,idx:W.idx}}))}if(!v&&!re&&!me.sleeping&&!M.busy&&!me.talking&&!M.job&&!M.pending&&M.hold<=0&&R>M.nextWander){let W=C[Math.floor(Math.random()*C.length)];M.target.set(W[0],0,W[1]),M.nextWander=R+5+Math.random()*6}(!M.job||M.job.state==="go")&&(Math.abs(g.roll)>.002||Math.abs(g.baseY)>.002?q($):(g.roll=0,g.baseY=0));let N=!1;if(je>.06){N=!0;let W=Math.min(je,(me.talking?1.6:M.hold>3?2:1.4)*$);Se.x+=G/je*W,Se.z+=st/je*W,g.face(Math.atan2(G,st)*.7)}else!me.talking&&me.emo!=="shy"&&!(M.job&&M.job.kind==="nap")&&g.face(0);g.dance>0&&(g.dance-=$,me.y<.02&&g.hop(3.2),g.face(Math.sin(R*10)*.8)),g.update($,R,N,ae),w.position.set(Se.x,.012,Se.z+.02);let y=Math.max(.5,1-me.y*.4)*1.3;w.scale.set(y*(1.05+me.squash),y*(1.05+me.squash),1),w.material.opacity=g.baseY>.3?0:Math.max(.35,1-me.y*.7),Object.keys(b).forEach(W=>{let ie=b[W],Me=ie.ch.root.position,we=ie.tx-Me.x,fe=ie.tz-Me.z,ge=Math.hypot(we,fe),Ce=!1;if(ie.ch.dance>0)ie.ch.dance-=$,ie.ch.st.y<.02&&ie.ch.hop(3.2),ie.ch.face(Math.sin(R*10)*.8);else if(ge>.06){Ce=!0;let Ve=Math.min(ge,2*$);Me.x+=we/ge*Ve,Me.z+=fe/ge*Ve,ie.ch.face(Math.atan2(we,fe)*.7)}else ie.ch.face(0);ie.ch.update($,R+W.length,Ce,!1),be(ie.label,Me,-.12),ie.b&&be(ie.b,Me,2.35)}),F&&be(F,Se,-.12),U.b&&be(U.b,Se,2.35+(g.baseY||0)),x.update($),d.update(R),d.plants.forEach((W,ie)=>{let Me=1-d.plantLevel;W.pop=Math.max(0,W.pop-$*.8),W.leaves.scale.set(1+W.pop*.15,1-Me*.38+W.pop*.12,1+W.pop*.15),W.leaves.rotation.z=Math.sin(R*1.3+ie)*.02+Me*.12,W.thirst.material.opacity=Me>.6?.6+.4*Math.sin(R*4):0,W.thirst.position.y=2.3+Math.sin(R*3)*.08}),d.dust.forEach(W=>{let ie=W.userData,Me=(R*ie.sp*.3+ie.ph)%1;W.position.set(ie.x+Math.sin(R*ie.sp+ie.ph)*.4,.9+Me*3,ie.z),W.material.opacity=.55*Math.sin(Me*Math.PI),W.material.rotation=R*.3+ie.ph}),d.bulbs.forEach((W,ie)=>W.scale.setScalar(.85+.25*Math.sin(R*2.4+ie*1.3))),M.lampT+=((M.lampOn?1:0)-M.lampT)*Math.min(1,$*4),u.intensity=M.lampT*2.2,d.shadeMat.emissiveIntensity=M.lampT*1.3,c+=((v?0:Math.max(-4.3,Math.min(4.3,Se.x*.85)))-c)*Math.min(1,$*2.2),ce.lerp(ae?k:pe.set(Math.sin(R*.25)*.2,Math.sin(R*.18)*.08,0),Math.min(1,$*3));let j=v?1.5:1;a.position.set(c+(v?0:1)+ce.x,o.y*j+ce.y,o.z*j),a.lookAt(c,l.y,l.z),t.render(r,a)}return Ae(),A}function ax(i,e){let t;try{t=new Hn({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}t.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let n=t.domElement;n.className="scene3d",i.insertBefore(n,i.firstChild);let s=new Mn;Cs(s);let r=new wt(28,1,.1,30);r.position.set(0,1.5,4.6),r.lookAt(0,.82,0);let a=B(new ke(.95,1,.1,40),D(16777215),0,-.05,0,!1);s.add(a);{let b=Ou();b.scale.setScalar(1.5),s.add(b)}let o=Rs(s),l=null,c=0,f=!0,h=null,u=0,d=0,x=null,g=B(new ke(1.15,1.2,.08,40),D(15984383),1.3,-.04,0,!1);g.visible=!1,s.add(g);function m(b){if(x&&(s.remove(x),x=null),b&&Fi[b]){let R=Fi[b](),_=Bu[b],P=new dn().setFromObject(R),F=P.getSize(new V),H=Math.max(.35,Math.min(1.1,2/Math.max(F.x,F.y,F.z,.1)));R.scale.setScalar(H),R.position.set(1.3,_.p[1]>1.5?1.2:_.p[1]>.5?0:_.p[1],0),R.rotation.y=_.p[1]>1.5||b==="poster"?0:.5,(b==="starrug"||b==="poster"||b==="neon"||b==="disco"||b==="cloud")&&(R.rotation.y=0),b==="poster"&&(R.rotation.y=0),s.add(R),x=R,(R.userData.fish||R.userData.spin)&&(x.userData.anim=!0)}g.visible=!!x,r.position.set(x?.55:0,1.5,x?6.6:4.6),r.lookAt(x?.55:0,.82,0),l&&(l.root.position.x=x?-.85:0,a.position.x=l.root.position.x)}function p(){l&&l.dispose(),l=Kt(e()),l.root.scale.setScalar(1.25),l.fx=(b,R)=>o.emit(b,R,l.root.position,1.25),s.add(l.root),l.root.position.x=x?-.85:0,a.position.x=l.root.position.x}p();function w(){let b=i.clientWidth||200,R=i.clientHeight||200;t.setSize(b,R,!1),n.style.width="100%",n.style.height="100%",r.aspect=b/R,r.updateProjectionMatrix()}new ResizeObserver(w).observe(i),w(),n.style.touchAction="none",n.addEventListener("pointerdown",b=>{h={x:b.clientX,s:u,moved:!1},n.setPointerCapture(b.pointerId)}),n.addEventListener("pointermove",b=>{if(!h)return;let R=b.clientX-h.x;Math.abs(R)>4&&(h.moved=!0),u=h.s+R*.012,d=u}),n.addEventListener("pointerup",()=>{h&&!h.moved&&(l.hop(4.6),l.setEmotion("happy"),o.emit("heart",3,l.root.position,1.25),setTimeout(()=>l&&l.setEmotion("neutral"),1400)),h=null});let M=new On,v=!0;"IntersectionObserver"in window&&new IntersectionObserver(b=>{v=b[0].isIntersecting},{threshold:.01}).observe(i);function C(){if(!f)return;if(requestAnimationFrame(C),!v||document.hidden){M.getDelta();return}let b=Math.min(.05,M.getDelta());c+=b,h||(d+=(Math.sin(c*.7)*.5-d)*Math.min(1,b*.8)),u+=(d-u)*Math.min(1,b*6),l.face(u),l.update(b,c,!1,!1),o.update(b),x&&x.userData.fish&&x.userData.fish.forEach((R,_)=>{let P=R.userData,F=c*(.5+_*.12)+P.ph;R.position.set(Math.sin(F)*.5,P.y+Math.sin(F*2)*.04,.05*Math.cos(F)),R.rotation.y=Math.cos(F)>0?0:Math.PI}),x&&x.userData.spin&&(x.userData.spin.rotation.y=c*.6),t.render(s,r)}return C(),{setDecor:m,rebuild(){p(),l.hop(3.6)},emote(b){l.setEmotion(b)},destroy(){f=!1,l&&l.dispose(),t.dispose(),t.forceContextLoss&&t.forceContextLoss(),n.parentNode&&n.parentNode.removeChild(n)}}}function ox(i,e){let t;try{t=new Hn({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}t.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let n=t.domElement;n.className="scene3d",i.insertBefore(n,i.firstChild);let s=document.createElement("div");s.className="st3-ov",i.appendChild(s);let r=new Mn;Cs(r);let a=new wt(30,2.6,.1,40);a.position.set(0,2.2,6.4),a.lookAt(0,1.1,0),r.add(B(xe(11,.3,4.2,.1),D(16770761,{emissive:15780256,emissiveIntensity:.35}),0,-.15,0,!1));{let L=Rt(256,256,(A,I,K)=>{A.fillStyle="#E9DEFE",A.fillRect(0,0,I,K),A.fillStyle="rgba(255,255,255,.85)";for(let O=0;O<4;O++)for(let ee=0;ee<4;ee++)A.beginPath(),A.arc(32+ee*64+O%2*32,32+O*64,5,0,7),A.fill()});L.wrapS=L.wrapT=an,L.repeat.set(4,1.4),r.add(B(xe(11,3.6,.2,.06),D(16777215,{map:L,emissive:15326974,emissiveIntensity:.25}),0,1.8,-2.15,!1)),r.add(B(xe(11,.2,.12,.04),D(16777215),0,.1,-2.02,!1));for(let A=0;A<17;A++){let I=A/16,K=new rt({color:[16773544,16757713,12448732,14273791][A%4]});r.add(he(.07,K,1,1,1,-5+I*10,3.15-Math.sin(I*Math.PI*4)*.12,-2))}let q=new ft(new ln(_i(.7),{depth:.05,bevelEnabled:!1}),new rt({color:16748480}));q.position.set(-3.6,2.2,-2),r.add(q);let E=q.clone();E.position.set(3.6,2.2,-2),E.material=new rt({color:9362431}),r.add(E)}let o=new Te;o.position.set(0,0,.1),o.add(B(new ke(1.9,1.9,.05,40),D(12448732),0,.03,0,!1)),o.add(B(new ke(1.3,1.3,.07,40),D(16774890),0,.04,0,!1)),r.add(o);let l=Rs(r),c=Kt({mika:!0,acc:e||[]});c.root.scale.setScalar(.9),c.root.position.set(0,0,.6),r.add(c.root),c.fx=(L,q)=>l.emit(L,q,c.root.position,.9);let f={},h=new V(0,0,.6),u=3,d=0,x=!0,g=!0,m=p("Mika",!0);function p(L,q){let E=document.createElement("span");return E.className="st3-n"+(q?" mk":""),E.textContent=L,s.appendChild(E),E}function w(L,q,E){return q?-3.5:3.5-L*1.5}function M(){let L=0;Object.keys(f).forEach(q=>{let E=f[q];E.mine?E.tx=-3.2:(E.tx=3.2-L*1.5,L++)})}function v(L){let q={};L.forEach(E=>{q[E.id]=1;let A=E.code+"|"+E.nick;if(f[E.id]&&f[E.id].key!==A&&C(E.id),!f[E.id]){let I=Kt(Ui(E.code));I.root.scale.setScalar(.95),I.root.position.set(E.me?-6:6,0,.5),r.add(I.root),I.fx=(K,O)=>l.emit(K,O,I.root.position,.95),f[E.id]={ch:I,key:A,mine:!!E.me,tx:0,label:p(E.me?"Moi":E.nick),bubble:null},setTimeout(()=>I.hop(4),500)}}),Object.keys(f).forEach(E=>{q[E]||C(E)}),M()}function C(L){let q=f[L];q&&(q.ch.dispose(),q.label.remove(),q.bubble&&q.bubble.remove(),delete f[L])}function b(L,q,E){let A=L.bubble;A&&A.remove();let I=document.createElement("div");I.className="st3-b"+(E?" mk":""),I.textContent=q,s.appendChild(I),L.bubble=I,setTimeout(()=>{L.bubble===I&&(I.remove(),L.bubble=null)},Math.min(7e3,2800+q.length*55))}let R={bubble:null};function _(L){return/[😂🤣😆😄😁]|haha|mdr|lol/i.test(L)?"happy":/[😍🥰❤💕💖]|j'adore|trop bien/i.test(L)?"love":/[😢😭😞]|triste|nul|fatigu/i.test(L)?"sad":/[😮😱]|\?\?|oh/i.test(L)?"wow":null}let P={setMembers:v,say(L,q){let E=f[L];if(!E)return;E.ch.hop(3.8);let A=_(q);A&&(E.ch.setEmotion(A),A==="love"&&l.emit("heart",3,E.ch.root.position,.95),setTimeout(()=>E.ch.setEmotion("neutral"),1800)),E.ch.setTalking(!0),setTimeout(()=>E.ch.setTalking(!1),Math.min(2400,600+q.length*40)),b(E,q,!1)},mikaSay(L){c.hop(3.6),c.setTalking(!0),h.set(0,0,.9),u=d+4,setTimeout(()=>c.setTalking(!1),Math.min(2800,700+L.length*40)),b(R,L,!0)},mikaReact(L){c.setEmotion(L),setTimeout(()=>c.setEmotion("neutral"),2200)},setMikaAcc(L){c.setAccessories(L)},destroy(){x=!1,Object.keys(f).forEach(C),c.dispose(),t.dispose(),t.forceContextLoss&&t.forceContextLoss(),n.remove(),s.remove()}};function F(){let L=i.clientWidth||360,q=i.clientHeight||150;t.setSize(L,q,!1),n.style.width="100%",n.style.height="100%",a.aspect=L/q,a.fov=L/q>2?30:40,a.updateProjectionMatrix()}new ResizeObserver(F).observe(i),F(),m.style.opacity=1;let H=new On,Z=new V;function U(L,q,E,A){Z.set(q.x,q.y+E,q.z).project(a);let I=i.clientWidth,K=i.clientHeight,O=(L.offsetWidth||40)/2+4;L.style.left=Math.max(O,Math.min(I-O,(Z.x*.5+.5)*I+(A||0)))+"px",L.style.top=(-Z.y*.5+.5)*K+"px"}c.setEmotion("neutral"),n.addEventListener("pointerup",()=>{c.hop(4.4),c.setEmotion("happy"),setTimeout(()=>c.setEmotion("neutral"),1200),i.dispatchEvent(new CustomEvent("mika3d",{detail:{name:"mika"}}))});function T(){if(!x)return;if(requestAnimationFrame(T),document.hidden){H.getDelta();return}let L=Math.min(.05,H.getDelta());d+=L,d>u&&!c.st.talking&&(h.set((Math.random()-.5)*3.2,0,.3+Math.random()*.8),u=d+4+Math.random()*5);let q=c.root.position,E=h.x-q.x,A=h.z-q.z,I=Math.hypot(E,A),K=!1;if(I>.06){K=!0;let O=Math.min(I,.9*L);q.x+=E/I*O,q.z+=A/I*O,c.face(Math.atan2(E,A)*.7)}else c.face(0);c.update(L,d,K,!1),Object.keys(f).forEach(O=>{let ee=f[O],Q=ee.ch.root.position,ae=ee.tx-Q.x,ce=!1;Math.abs(ae)>.05?(ce=!0,Q.x+=Math.sign(ae)*Math.min(Math.abs(ae),2.2*L),ee.ch.face(Math.sign(ae)*.5)):ee.ch.face(ee.mine?.35:-.35),Q.z=.5,ee.ch.update(L,d+O.length,ce,!1),U(ee.label,Q,-.12,0),ee.bubble&&U(ee.bubble,Q,1.75,0)}),U(m,c.root.position,-.12,0),R.bubble&&U(R.bubble,c.root.position,1.75,0),l.update(L),t.render(r,a)}return T(),P}function lx(i,e){e=e||{};let t;try{t=new Hn({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}t.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let n=t.domElement;n.className="scene3d",i.insertBefore(n,i.firstChild);let s=document.createElement("div");s.className="st3-ov",i.appendChild(s);let r=new Mn;Cs(r);let a=new wt(36,1.4,.1,40);a.position.set(0,2.5,7.6),a.lookAt(0,1,-.4),r.add(B(xe(9,.3,8,.1),D(15980984,{emissive:15255452,emissiveIntensity:.3}),0,-.15,.3,!1));let o=Rt(256,256,(T,L,q)=>{T.fillStyle="#FFE9F3",T.fillRect(0,0,L,q),T.fillStyle="rgba(255,255,255,.9)";for(let E=0;E<4;E++)for(let A=0;A<4;A++)T.beginPath(),T.arc(32+A*64+E%2*32,32+E*64,5,0,7),T.fill()});o.wrapS=o.wrapT=an,o.repeat.set(3.2,1.3),r.add(B(xe(9,4.2,.2,.06),D(16777215,{map:o,emissive:16771571,emissiveIntensity:.25}),0,2,-3.1,!1));let l=document.createElement("canvas");l.width=512,l.height=256;let c=l.getContext("2d"),f=new us(l);f.colorSpace=Xt;let h=[];function u(){c.fillStyle="#2f5d50",c.fillRect(0,0,512,256),c.strokeStyle="rgba(255,255,255,.18)",c.lineWidth=6,c.strokeRect(8,8,496,240),c.textAlign="center",c.textBaseline="middle";let T=h.length?h:[{t:"Willkommen!",c:"#fff6c2",s:56},{t:"Hello \xB7 Hallo \xB7 Hola \xB7 Ciao",c:"#cfe9ff",s:26}],q=128-T.reduce((E,A)=>E+(A.s||34)*1.35,0)/2;T.forEach(E=>{let A=E.s||34;c.font="700 "+A+'px "Comic Sans MS","Chalkboard SE","Segoe UI",sans-serif',c.fillStyle=E.c||"#ffffff";let I=E.t;for(;c.measureText(I).width>470&&A>14;)c.font="700 "+--E.s+"px sans-serif";c.fillText(I,256,q+A*.67),q+=A*1.35}),f.needsUpdate=!0}u();let d=new Te;d.position.set(0,2.15,-2.95),d.add(B(xe(3.6,1.9,.12,.05),D(14267530),0,0,0,!1)),d.add(B(new Pt(3.4,1.7),new rt({map:f}),0,0,.07,!1)),r.add(d),r.add(B(xe(1.7,.7,.7,.1),D(13080688),0,.35,-1.55)),r.add(B(xe(1.85,.08,.8,.04),D(14858378),0,.72,-1.55)),r.add(B(xe(.5,.06,.34,.02),D(16748480),-.5,.79,-1.5,!1)),r.add(B(new ke(2.6,2.6,.04,44),D(14273791),0,.02,1.6,!1));for(let T=0;T<17;T++){let L=T/16;r.add(he(.07,new rt({color:[16773544,16757713,12448732,14273791][T%4]}),1,1,1,-4+L*8,3.9-Math.sin(L*Math.PI*4)*.14,-2.95))}let x=Rs(r),g=Kt({mika:!0,color:15905402,ears:"bear",eyes:"dot",acc:e.bobAcc||["glasses","bowtie"]});g.root.scale.setScalar(1.12),g.root.position.set(0,0,-1),g.face(0),r.add(g.root),g.fx=(T,L)=>x.emit(T,L,g.root.position,1.1);let m=Kt(Object.assign(Ui(e.code||"0000")));m.root.scale.setScalar(.8),m.root.position.set(-.9,0,2.2),m.face(Math.PI),r.add(m.root),m.fx=(T,L)=>x.emit(T,L,m.root.position,.95);let p=Kt({mika:!0,acc:e.mikaAcc||[]});p.root.scale.setScalar(.68),p.root.position.set(.85,0,2.2),p.face(Math.PI),r.add(p.root),p.fx=(T,L)=>x.emit(T,L,p.root.position,.8);let w={bob:{ch:g,el:null,dy:1.95,b:null},me:{ch:m,el:null,dy:1.5,b:null},mika:{ch:p,el:null,dy:1.3,b:null}};[["bob","Prof. Bobby","pr"],["mika","Mika","mk"]].forEach(T=>{let L=document.createElement("span");L.className="st3-n "+T[2],L.textContent=T[1],s.appendChild(L),w[T[0]].el=L,L.style.opacity=1});function M(T,L,q,E){let A=w[T];A.b&&A.b.remove();let I=document.createElement("div");I.className="st3-b "+(q||""),I.textContent=L,s.appendChild(I),A.b=I,setTimeout(()=>{A.b===I&&(I.remove(),A.b=null)},E||Math.min(14e3,4200+L.length*70))}let v=0,C=!0,b=new On,R=new V;function _(T,L,q){R.set(L.x,L.y+q,L.z).project(a);let E=i.clientWidth,A=i.clientHeight,I=(T.offsetWidth||40)/2+4;T.style.left=Math.max(I,Math.min(E-I,(R.x*.5+.5)*E))+"px",T.style.top=(-R.y*.5+.5)*A+"px"}function P(){let T=i.clientWidth||360,L=i.clientHeight||260;t.setSize(T,L,!1),n.style.width="100%",n.style.height="100%",a.aspect=T/L,a.fov=T/L<1.2?46:36,a.updateProjectionMatrix()}new ResizeObserver(P).observe(i),P();let F={};function H(T,L){w[T].ch.setTalking(!0),clearTimeout(F[T]),F[T]=setTimeout(()=>w[T].ch.setTalking(!1),L)}let Z={bobbySay(T,L){g.hop(3.4),g.setEmotion(L||"happy"),H("bob",Math.min(4e3,800+T.length*45)),M("bob",T,"pr"),setTimeout(()=>g.setEmotion("neutral"),2600)},bobbyEmote(T){g.setEmotion(T),(T==="proud"||T==="cheer"||T==="love")&&x.emit("heart",4,g.root.position,1.1),setTimeout(()=>g.setEmotion("neutral"),2400)},bobbyListen(T){g.setEmotion(T?"wow":"neutral")},userSay(T){m.hop(3.4),H("me",Math.min(2500,600+T.length*40)),M("me",T,"me")},mikaSay(T,L){p.hop(3.6),p.setEmotion(L||"happy"),H("mika",Math.min(3e3,800+T.length*40)),M("mika",T,"mk",Math.min(16e3,5e3+T.length*80)),setTimeout(()=>p.setEmotion("neutral"),2800)},mikaReact(T){p.setEmotion(T),setTimeout(()=>p.setEmotion("neutral"),2400)},board(T){h=T||[],u()},setBobAcc(T){g.setAccessories(T)},setMikaAcc(T){p.setAccessories(T)},thinking(T){T&&(g.setEmotion("neutral"),g.look(.4,.3))},destroy(){C=!1,[g,m,p].forEach(T=>T.dispose()),t.dispose(),t.forceContextLoss&&t.forceContextLoss(),n.remove(),s.remove()}};n.addEventListener("pointerup",()=>{g.hop(4),g.setEmotion("happy"),setTimeout(()=>g.setEmotion("neutral"),1200),i.dispatchEvent(new CustomEvent("mika3d",{detail:{name:"bobby"}}))});function U(){if(!C)return;if(requestAnimationFrame(U),document.hidden){b.getDelta();return}let T=Math.min(.05,b.getDelta());v+=T,g.face(Math.sin(v*.6)*.12),m.face(Math.PI+Math.sin(v*.5)*.08),p.face(Math.PI-Math.sin(v*.5)*.08),g.update(T,v,!1,!1),m.update(T,v+1,!1,!1),p.update(T,v+2,!1,!1),["bob","mika"].forEach(L=>{_(w[L].el,w[L].ch.root.position,-.08)}),Object.keys(w).forEach(L=>{w[L].b&&_(w[L].b,w[L].ch.root.position,w[L].dy)}),x.update(T),t.render(r,a)}return U(),Z}function cx(i){let e;try{e=new Hn({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}e.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let t=e.domElement;t.className="scene3d",i.insertBefore(t,i.firstChild);let n=document.createElement("div");n.className="st3-ov",i.appendChild(n);let s=new Mn;Cs(s);let r=new wt(38,1.4,.1,60);r.position.set(0,7.2,9.4),r.lookAt(0,0,.5),s.add(B(new ke(7.2,7.4,.3,56),D(13234872,{emissive:11069088,emissiveIntensity:.25}),0,-.15,.2,!1)),s.add(B(new ke(3.4,3.4,.04,48),D(16773334),0,.02,.2,!1)),s.add(B(new ht(3.4,.08,8,48),D(16765411),0,.04,.2,!1).rotateX(Math.PI/2));let a=new Te;a.position.set(0,0,-.4),s.add(a),a.add(B(new ke(1,1.1,.34,32),D(15262463),0,.17,0)),a.add(B(new ke(.86,.86,.3,32),D(9362431,{emissive:6998261,emissiveIntensity:.4,roughness:.2}),0,.2,0,!1)),a.add(B(new ke(.12,.16,.8,12),D(15262463),0,.6,0));let o=he(.2,D(12119295,{emissive:9362431,emissiveIntensity:.5,transparent:!0,opacity:.85}),1,1.3,1,0,1.15,0);a.add(o);function l(O,ee,Q,ae){let ce=new Te;ce.position.set(O,0,ee),ce.scale.setScalar(ae||1),ce.add(B(new ke(.14,.2,1.1,10),D(12159587),0,.55,0)),[[0,1.55,0,.8],[-.5,1.3,.15,.55],[.5,1.35,-.1,.55],[.05,1.95,.05,.5]].forEach(k=>ce.add(he(k[3],D(Q,{emissive:Q,emissiveIntensity:.18}),1,.9,1,k[0],k[1],k[2]))),s.add(ce)}l(-4.6,-2.6,16757713,1.2),l(4.8,-2.4,16762588,1.1),l(-5.2,2.6,12448732,1),l(5.3,2.8,16757713,.95);function c(O,ee){let Q=new Te;Q.position.set(O,0,ee),Q.add(B(new ke(.05,.07,1.7,8),D(7035534),0,.85,0)),Q.add(he(.2,new rt({color:16773544}),1,1,1,0,1.8,0)),s.add(Q)}c(-2.6,-2.2),c(2.6,-2.2),c(-3.4,3.2),c(3.4,3.2);let f=[];function h(O,ee,Q,ae,ce,k,z,X,oe,se){let ue=new Te;ue.position.set(ee,0,Q),ue.userData.pick=O,ue.add(B(xe(X,oe,1.5,.14),D(ae,{emissive:ae,emissiveIntensity:.12}),0,oe/2,0)),ue.add(B(xe(X+.16,.14,1.7,.05),D(16777215),0,.07,.05,!1));let Re=Math.max(4,Math.round(X/.3));for(let pe=0;pe<Re;pe++)ue.add(he(X/Re*.62,D(pe%2?16777215:ce),1,.9,1.1,-X/2+(pe+.5)*X/Re,oe*.7,.88));ue.add(B(xe(X+.1,.1,1.2,.04),D(ce),0,oe*.78,.55,!1)),ue.add(B(xe(X*.46,.14,.9,.05),D(ce),0,oe+.06,0,!1)),ue.add(B(xe(.46,.8,.08,.04),D(12159587),X*.26,.42,.78)),ue.add(B(xe(X*.46,.6,.06,.04),D(13627135,{emissive:16771512,emissiveIntensity:.55}),-X*.2,.62,.78,!1)),se&&se.forEach((pe,ve)=>ue.add(he(.11,D(pe,{emissive:pe,emissiveIntensity:.3}),1,1,.8,-X*.2+(ve-(se.length-1)/2)*.28,.5,.83,!1)));let Ke=Rt(256,96,(pe,ve,be)=>{pe.fillStyle="#ffffff",pe.beginPath(),pe.roundRect?pe.roundRect(4,4,ve-8,be-8,28):pe.rect(4,4,ve-8,be-8),pe.fill(),pe.fillStyle="#2A1B5E",pe.font="700 40px DynaPuff, Fredoka, sans-serif",pe.textAlign="center",pe.textBaseline="middle",pe.fillText(k+" "+z,ve/2,be/2+2)}),de=B(new Pt(X*.9,X*.9*96/256),new rt({map:Ke,transparent:!0}),0,oe+.5,.2,!1);return ue.add(de),ue.scale.setScalar(1.1),ue.traverse(pe=>{pe!==ue&&(pe.userData.root=ue)}),s.add(ue),f.push(ue),ue}h("home",-5.8,-5.2,16767464,16748480,"\u{1F3E0}","Chambre",2,1.7,[16748480,16769658]),h("bakery",-3.4,-5.2,16773593,16748480,"\u{1F950}","Boulangerie",2.1,1.7,[15247707,16757713,12448732]),h("thrift",-1,-5.2,14283236,6153140,"\u{1F457}","Friperie",2,1.8,[16748480,9362431,12166911]),h("deco",1.4,-5.2,16774351,16761418,"\u{1FAB4}","D\xE9co",2,1.7,[7065466,16757713]),h("dentist",4.7,-2.7,16777215,3116976,"\u{1F9B7}","Dentiste",2.1,1.8,[16747039,8150271,5686976]),h("karaoke",3.8,-5.2,14734591,8150271,"\u{1F3A4}","Karaok\xE9",2,1.9,[16740296,8255999]);let u=new Te;u.position.set(6.4,1.7,-6.2),u.scale.setScalar(.62),u.userData.pick="park";{let O=B(new ht(1.55,.07,8,40),D(16748480),0,0,0,!1);u.add(O);let ee=B(new ht(.85,.05,8,32),D(16769658),0,0,0,!1);u.add(ee);for(let Q=0;Q<8;Q++){let ae=Q/8*Math.PI*2,ce=B(new ke(.03,.03,3.1,6),D(16777215),0,0,0,!1);ce.rotation.z=ae,u.add(ce);let k=B(xe(.38,.3,.3,.08),D([16757713,9362431,16769658,12448732][Q%4]),Math.cos(ae)*1.55,Math.sin(ae)*1.55,0);k.userData.gond=1,u.add(k)}}let d=new Te;d.userData.pick="park",d.position.set(6.4,0,-6.2),d.scale.setScalar(.62),[-1,1].forEach(O=>{let ee=B(xe(.16,2.3,.16,.05),D(8150271),O*.55,1.05,0);ee.rotation.z=-O*.28,d.add(ee)}),d.add(B(new ke(.1,.1,.5,10),D(16777215),0,2.1,0)),s.add(d),s.add(u),f.push(u,d),u.traverse(O=>{O!==u&&(O.userData.root=u)}),d.traverse(O=>{O!==d&&(O.userData.root=d)}),s.add(B(xe(1.6,.18,.5,.05),D(14858378),3.1,.45,-3.3)),s.add(B(xe(1.6,.5,.1,.04),D(14858378),3.1,.75,-3.5));let x=Rs(s),g=0,m={},p=0,w=!0,M=new On;function v(O,ee){let Q=document.createElement("span");return Q.className="st3-n"+(ee?" mk":""),Q.textContent=O,Q.style.opacity=1,n.appendChild(Q),Q}function C(O){if(m[O.pid])return;let ee=Kt(O.npc?{mika:!0,acc:O.acc||[]}:Ui(O.code));ee.root.scale.setScalar(O.npc?.75:.85),ee.root.position.set(O.x||0,0,O.z||2),s.add(ee.root),ee.fx=(Q,ae)=>x.emit(Q,ae,ee.root.position,.85),m[O.pid]={ch:ee,tx:O.x||0,tz:O.z||2,label:v(O.me?"Moi":O.nick,O.me),me:!!O.me,npc:!!O.npc,next:0,dance:0,bub:null,bubT:0},ee.hop(4)}function b(O,ee){let Q=m[O];if(!Q)return;Q.bub&&Q.bub.remove();let ae=document.createElement("div");ae.className="st3-b",ae.textContent=String(ee).slice(0,80),n.appendChild(ae),Q.bub=ae,Q.bubT=5+Math.min(4,String(ee).length/25),Q.ch.setTalking(!0),setTimeout(()=>Q.ch&&Q.ch.setTalking(!1),1400)}function R(O){let ee=m[O];ee&&(ee.bub&&ee.bub.remove(),ee.ch.dispose(),ee.label.remove(),delete m[O])}function _(O,ee){let Q=m[O];if(!Q||Q.npc)return;let ae=Q.ch.root.position.clone();Q.ch.dispose();let ce=Kt(Ui(ee));ce.root.scale.setScalar(.85),ce.root.position.copy(ae),s.add(ce.root),ce.fx=(k,z)=>x.emit(k,z,ce.root.position,.85),Q.ch=ce,ce.hop(4)}function P(O,ee,Q){let ae=m[O];ae&&(ae.tx=ee,ae.tz=Q)}function F(O,ee){let Q=m[O];if(!Q)return;let ae=Q.ch;ee==="wave"?(ae.hop(4.2),ae.setEmotion("happy")):ee==="heart"?(ae.setEmotion("love"),ae.hop(4.6),x.emit("heart",6,ae.root.position,.85)):ee==="happy"?(ae.setEmotion("happy"),ae.hop(5)):ee==="wow"?(ae.setEmotion("wow"),ae.hop(4)):ee==="dance"&&(ae.setEmotion("happy"),Q.dance=2.4),setTimeout(()=>ae.setEmotion("neutral"),2200)}function H(){let O=i.clientWidth||360,ee=i.clientHeight||280;e.setSize(O,ee,!1),t.style.width="100%",t.style.height="100%",r.aspect=O/ee,r.fov=O/ee<1.2?64:42,r.updateProjectionMatrix()}new ResizeObserver(H).observe(i),H();let Z=new _s,U=new Ee,T=new jt(new V(0,1,0),0),L=new V;t.addEventListener("pointerup",O=>{let ee=t.getBoundingClientRect();U.set((O.clientX-ee.left)/ee.width*2-1,-((O.clientY-ee.top)/ee.height)*2+1),Z.setFromCamera(U,r);for(let ce of Z.intersectObjects(f,!0)){let k=ce.object,z=null;for(;k;){if(k.userData&&k.userData.pick){z=k.userData.pick;break}k=k.parent}if(z){i.dispatchEvent(new CustomEvent("plaza3d",{detail:{kind:"building",id:z}}));return}}if(!Z.ray.intersectPlane(T,L))return;let Q=null,ae=.9;Object.keys(m).forEach(ce=>{let k=m[ce].ch.root.position,z=Math.hypot(k.x-L.x,k.z-L.z);z<ae&&(ae=z,Q=ce)}),i.dispatchEvent(new CustomEvent("plaza3d",{detail:Q?{kind:"tap",pid:Q,me:m[Q].me}:{kind:"walk",x:Math.max(-5.2,Math.min(5.2,L.x)),z:Math.max(-3.2,Math.min(4.2,L.z))}}))});let q=new V;function E(O,ee,Q){q.set(ee.x,ee.y+Q,ee.z).project(r);let ae=i.clientWidth,ce=i.clientHeight,k=(O.offsetWidth||40)/2+4;O.style.left=Math.max(k,Math.min(ae-k,(q.x*.5+.5)*ae))+"px",O.style.top=(-q.y*.5+.5)*ce+"px"}function A(){if(!w)return;if(requestAnimationFrame(A),document.hidden){M.getDelta();return}let O=Math.min(.05,M.getDelta());p+=O,o.scale.y=1.3+Math.sin(p*5)*.2,u.rotation.z-=O*(g>0?1.4:.18),g>0&&(g-=O),u.children.forEach(ee=>{ee.userData.gond&&(ee.rotation.z=-u.rotation.z)}),Object.keys(m).forEach(ee=>{let Q=m[ee],ae=Q.ch.root.position,ce=Q.tx-ae.x,k=Q.tz-ae.z,z=Math.hypot(ce,k),X=!1;if(Q.dance>0)Q.dance-=O,Q.ch.st.y<.02&&Q.ch.hop(3.2),Q.ch.face(Math.sin(p*10)*.8);else if(Q.npc&&z<.06&&p>Q.next)Q.tx=(Math.random()-.5)*8,Q.tz=-1+Math.random()*4.5,Q.next=p+3+Math.random()*4;else if(z>.06){X=!0;let oe=Math.min(z,(Q.npc?.9:2)*O);ae.x+=ce/z*oe,ae.z+=k/z*oe,Q.ch.face(Math.atan2(ce,k)*.8)}else Q.ch.face(0);Q.ch.update(O,p+ee.length,X,!1),E(Q.label,ae,-.12),Q.bub&&(Q.bubT-=O,Q.bubT<=0?(Q.bub.remove(),Q.bub=null):E(Q.bub,ae,1.55))}),x.update(O),e.render(s,r)}A();function I(){g=4.5}function K(){Object.keys(m).forEach(O=>{m[O].npc||R(O)})}return{add:C,remove:R,setCode:_,reset:K,rideWheel:I,moveTo:P,emote:F,say:b,has:O=>!!m[O],count:()=>Object.keys(m).length,destroy(){w=!1,Object.keys(m).forEach(R),e.dispose(),e.forceContextLoss&&e.forceContextLoss(),t.remove(),n.remove()}}}function Io(i,e,t){let n=Rt(256,64,(s,r,a)=>{let o=r/t;for(let l=0;l<t;l++)s.fillStyle=l%2?e:i,s.fillRect(l*o,0,o,a)});return n.wrapS=an,n}function pc(i,e,t){let n=Rt(128,128,(s,r,a)=>{s.fillStyle=i,s.fillRect(0,0,r,a),s.fillStyle=e,s.fillRect(0,0,r/2,a/2),s.fillRect(r/2,a/2,r/2,a/2)});return n.wrapS=n.wrapT=an,n.repeat.set(t,t*.6),n}function hx(i,e,t,n){return Rt(512,160,(s,r,a)=>{t&&(s.fillStyle=t,s.fillRect(0,0,r,a)),s.font="700 78px DynaPuff, Fredoka, sans-serif",s.textAlign="center",s.textBaseline="middle",n&&(s.shadowColor=n,s.shadowBlur=24),s.fillStyle=e,s.fillText(i,r/2,a/2+4),s.fillText(i,r/2,a/2+4)})}var An={cake(i,e,t,n){let s=new Te;s.position.set(i,e,t),s.add(B(new ke(.2,.2,.2,20),D(n||16765411),0,.1,0,!1));let r=B(new ht(.16,.035,8,20),D(16777215),0,.2,0,!1);return r.rotation.x=Math.PI/2,s.add(r),s.add(he(.05,D(16726876,{emissive:16726876,emissiveIntensity:.25}),1,1,1,0,.27,0)),s},macaron(i,e,t,n){let s=new Te;s.position.set(i,e,t);let r=D(n,{emissive:n,emissiveIntensity:.18});return s.add(he(.1,r,1,.42,1,0,.05,0)),s.add(he(.09,D(16775150),1,.3,1,0,.1,0)),s.add(he(.1,r,1,.42,1,0,.15,0)),s},croissant(i,e,t){let n=new Te;n.position.set(i,e,t);let s=B(new ht(.13,.065,10,16,Math.PI*1.15),D(15247707),0,.09,0,!1);return s.rotation.set(Math.PI/2.4,0,Math.PI*.9),s.scale.set(1.2,1,1),n.add(s),n},donut(i,e,t,n){let s=new Te;s.position.set(i,e,t);let r=B(new ht(.1,.055,10,18),D(15774571),0,.08,0,!1);r.rotation.x=Math.PI/2.3,s.add(r);let a=B(new ht(.1,.05,10,18),D(n||16751304,{emissive:n||16751304,emissiveIntensity:.15}),0,.1,.005,!1);return a.rotation.x=Math.PI/2.3,a.scale.set(1,1,.9),s.add(a),s},cupcake(i,e,t,n){let s=new Te;s.position.set(i,e,t);let r=B(new ke(.1,.07,.12,12),D(16109728),0,.06,0,!1);return s.add(r),s.add(he(.11,D(n||16757713,{emissive:n||16757713,emissiveIntensity:.15}),1,.8,1,0,.17,0)),s.add(he(.035,D(16726876),1,1,1,0,.27,0)),s},bread(i,e,t){let n=new Te;n.position.set(i,e,t),n.add(he(.2,D(14259530),1.5,.7,.8,0,.12,0));for(let s=-1;s<=1;s++){let r=B(xe(.02,.012,.18,.005),D(15913888),s*.09,.22,0,!1);r.rotation.y=.5,n.add(r)}return n}};function ux(i,e,t,n,s){let r=new Te;r.position.set(i,e,t),r.add(B(new ht(.05,.008,6,12,Math.PI),D(13619164,{metalness:.5,roughness:.4}),0,.05,0,!1));let a=D(n,{emissive:n,emissiveIntensity:.1});return s==="dress"?(r.add(B(new ke(.1,.22,.5,14),a,0,-.22,0,!1)),r.add(B(xe(.2,.14,.05,.02),a,0,0,0,!1))):(r.add(B(xe(.3,.38,.06,.03),a,0,-.17,0,!1)),[-1,1].forEach(o=>{let l=B(xe(.16,.08,.06,.03),a,o*.2,-.04,0,!1);l.rotation.z=-o*.5,r.add(l)})),r}function fx(i,e,t){let n;try{n=new Hn({antialias:!0,alpha:!1,powerPreference:"low-power"})}catch{return null}n.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let s=n.domElement;s.className="scene3d",i.insertBefore(s,i.firstChild);let r=new Mn,a={bakery:16771568,thrift:15721424,deco:15135726,karaoke:2364487,dentist:14677487}[e]||16777215;r.background=new et(a),Cs(r);let o=new wt(34,1,.1,40);o.position.set(0,1.9,6.6),o.lookAt(0,1.25,0);let l=Rs(r),c=[],f=new Te;r.add(f);let h=A=>(f.add(A),A),u={bakery:()=>D(16777215,{map:pc("#fff4f8","#ffc4dc",5)}),thrift:()=>D(14198126,{map:Io("#d9a96f","#c8935b",14)}),deco:()=>D(15984339,{map:pc("#f6ece0","#e9d9c3",5)}),karaoke:()=>D(3810160,{roughness:.3}),dentist:()=>D(16777215,{map:pc("#ffffff","#cfeee6",6)})}[e](),d=B(new Pt(26,16),u,0,0,4.5,!1);u.map&&u.map.repeat.multiplyScalar(1.8),d.rotation.x=-Math.PI/2,h(d);let x={bakery:16766694,thrift:13099988,deco:16774112,karaoke:3086947,dentist:13496038}[e],g=e==="bakery"?Io("#ffd6e6","#fff0f6",14):null;g&&g.repeat.set(3.4,1),h(B(xe(26,10,.2,.05),D(x,g?{map:g}:{emissive:x,emissiveIntensity:e==="karaoke"?.35:.12}),0,4.7,-3,!1)),h(B(xe(14,.18,.2,.04),D(16777215),0,.09,-2.88,!1));let m=B(new Pt(2.9,.9),new rt({map:hx({bakery:"Boulangerie",thrift:"Friperie",deco:"D\xE9co",karaoke:"Karaok\xE9",dentist:"Dentiste"}[e],{bakery:"#e0457b",thrift:"#ff7ac8",deco:"#2f8f6b",karaoke:"#7df9ff",dentist:"#2f8fb0"}[e],{bakery:"#fffaf0",thrift:null,deco:"#fffaf0",karaoke:null,dentist:"#fffaf0"}[e],{thrift:"#ff3fa8",karaoke:"#18c8ff"}[e]),transparent:!0}),0,3.85,-2.86,!1);h(m);let p=null,w=null,M=null,v=0,C=!1,b=0,R=!0,_=6.6,P=!1,F=[0,0,1.4],H=1.25;if(e==="bakery"){F=[-1.5,0,1.2];let A=B(xe(5.4,1,1.2,.14),D(16775150),.9,.5,-1.6);h(A),h(B(xe(5.5,.12,1.3,.05),D(16106122),.9,1.04,-1.6,!1));let I=B(xe(3.6,.95,1,.08),new $t({color:14677759,transparent:!0,opacity:.22,roughness:.05,metalness:.1}),.5,1.6,-1.55,!1);h(I),h(B(xe(3.7,.06,1.05,.02),D(16775150),.5,1.12,-1.55,!1)),h(B(xe(3.4,.05,.8,.02),D(16775150),.5,1.5,-1.55,!1)),h(B(xe(3.7,.07,1.05,.02),D(16757713),.5,2.1,-1.55,!1));let K=[16757713,12448732,16773544,14273791,16763304,9362431];for(let ae=0;ae<6;ae++)h(An.macaron(-.95+ae*.22,1.5,-1.3,K[ae]));h(An.cake(-1,1.15,-1.7,16765411)),h(An.cake(-.4,1.15,-1.7,12448732)),h(An.cake(.2,1.15,-1.7,16773544)),h(An.cupcake(.85,1.15,-1.7,16757713)),h(An.cupcake(1.2,1.15,-1.5,14273791)),h(An.donut(1.25,1.55,-1.35,16751304)),h(An.croissant(.4,1.55,-1.3)),h(An.croissant(.75,1.55,-1.3)),h(An.donut(1.05,1.55,-1.7,12448732)),h(B(xe(1.6,2.4,.5,.06),D(16106122),3.95,1.2,-2.4)),[.6,1.2,1.8].forEach(ae=>{h(B(xe(1.5,.06,.45,.02),D(16773336),3.95,ae,-2.35,!1));for(let ce=0;ce<3;ce++)h(An.bread(3.5+ce*.45,ae+.04,-2.3))});let O=B(new Fn(11,.5,1.6),D(16777215,{map:Io("#ff8fc0","#ffffff",16)}),0,4.6,-2.2,!1);Io("#ff8fc0","#ffffff",16).repeat.set(1,1),h(O);for(let ae=0;ae<22;ae++)h(he(.26,D(ae%2?16777215:16748480),1,.9,.9,-5.2+ae*.5,4.3,-1.45));for(let ae=-1;ae<=1;ae+=2){let ce=new Te;ce.position.set(ae*2.4,3.1,-1.2),ce.add(B(new ke(.01,.01,.9,4),D(10066329),0,.5,0,!1));let k=B(new Dt(.3,.3,14,1,!0),D(16769960,{side:en,emissive:16765818,emissiveIntensity:.6}),0,0,0,!1);ce.add(k),ce.add(he(.08,new rt({color:16773560}),1,1,1,0,-.05,0)),h(ce),c.push(z=>{ce.rotation.z=Math.sin(z*1.2+ae)*.03})}let Q=new bn(16767400,1,12);Q.position.set(0,3.2,1),r.add(Q)}else if(e==="thrift"){F=[.2,0,1.4];let A=(ce,k,z,X,oe,se)=>{h(B(new ke(.03,.03,X,8),D(14206888,{metalness:.5}),ce,k,z,!1)).rotation.z=Math.PI/2,[-1,1].forEach(Re=>h(B(new ke(.03,.04,k,8),D(14206888,{metalness:.5}),ce+Re*X/2,k/2,z,!1)));let ue=Math.floor(X/.32);for(let Re=0;Re<ue;Re++){let Ke=ux(ce-X/2+.2+Re*.32,k-.05,z,oe[Re%oe.length],se[Re%se.length]);Ke.rotation.y=.3,h(Ke)}};A(-2.6,2.1,-1.8,2.4,[16748480,9362431,16773544,12166911,11069547],["shirt","dress"]),A(2.7,2.1,-1.8,2.2,[16754895,16763304,12448732,15195647],["dress","shirt"]),A(-.4,1.7,-2.4,3,[15905402,14697851,8150271,16769658],["shirt","shirt","dress"]);let I=B(new Ai(.75,30),new $t({color:15005439,metalness:.9,roughness:.08,emissive:12576511,emissiveIntensity:.25}),3.75,1.7,-1.1,!1);I.scale.set(.8,1.35,1),I.rotation.y=-.45,h(I);let K=B(new ht(.75,.07,8,32),D(15905402),3.75,1.7,-1.11,!1);K.scale.set(.8,1.35,1),K.rotation.y=-.45,h(K),h(B(xe(2.2,.08,.45,.03),D(13210972),-3.6,2.9,-2.6,!1));let O=[16748480,8150271,16769658,6153140];for(let ce=0;ce<4;ce++)h(B(new ke(.2,.2,.04,16),D(O[ce]),-4.2+ce*.5,2.97,-2.6,!1)),h(he(.13,D(O[ce]),1,.8,1,-4.2+ce*.5,3.04,-2.6));for(let ce=0;ce<24;ce++){let k=ce/23,z=he(.06,new rt({color:[16773544,16757713,12448732,9362431][ce%4]}),1,1,1,-5+k*10,4.7-Math.sin(k*Math.PI*3)*.2,-2.7);h(z),c.push(X=>{z.scale.setScalar(.85+Math.sin(X*3+ce)*.25)})}let ee=new ft(new ln(_i(.9),{depth:.04,bevelEnabled:!1}),new rt({color:16732072}));ee.position.set(-3.5,1.4,-2.8),h(ee),c.push(ce=>{ee.scale.setScalar(1+Math.sin(ce*3)*.05)});let Q=B(new ke(1.5,1.5,.03,36),D(16757713),.2,.02,1.4,!1);h(Q),h(B(new ht(1.2,.04,8,36),D(16777215),.2,.04,1.4,!1)).rotation.x=Math.PI/2;let ae=new bn(16767468,.9,14);ae.position.set(0,3.4,2),r.add(ae)}else if(e==="deco"){F=[-1.4,0,1.2];let A=(O,ee,Q,ae)=>{h(B(new ke(.22,.17,.4,14),D(16763304),O,.2,ee));for(let ce=0;ce<5;ce++){let k=ce/5*Math.PI*2;h(he(.2,D(ae||7065466),.6,1.8*Q,.35,O+Math.cos(k)*.12,.7+.2*Q,ee+Math.sin(k)*.12)).rotation.z=Math.cos(k)*.35}};A(-3.6,-1.8,1.4),A(3.8,-1.6,1,9232522),A(-2.3,-2.4,.8,6277536),h(B(xe(2.6,.7,.9,.18),D(16757713),1.2,.35,-1.9)),h(B(xe(2.6,.7,.3,.14),D(16751304),1.2,.95,-2.25)),[-1,1].forEach(O=>h(B(xe(.3,.55,.9,.12),D(16751304),1.2+O*1.3,.5,-1.9))),h(B(xe(.5,.5,.18,.06),D(16773544),.5,.75,-1.85)),h(B(xe(.5,.5,.18,.06),D(12448732),1.9,.75,-1.85)),h(B(new ke(.02,.02,2.4,6),D(13421772),3,1.2,-1.2,!1)),h(he(.3,D(16769960,{emissive:16765818,emissiveIntensity:.9}),1,.8,1,3,2.5,-1.2)),[[-2.2,3.1,16757713],[-1.4,3.3,9362431],[-.6,3,16773544]].forEach(O=>{h(B(xe(.6,.8,.06,.02),D(15905402),O[0],O[1],-2.85,!1)),h(B(xe(.46,.64,.02,.01),D(O[2],{emissive:O[2],emissiveIntensity:.3}),O[0],O[1],-2.81,!1))});let I=B(new ht(.9,.08,8,28,Math.PI),D(16777215),2.2,2.6,-2.85,!1);h(I),h(B(new Ai(.9,28,0,Math.PI),new rt({color:12577279}),2.2,2.6,-2.86,!1)),h(B(new ke(.62,.7,.2,28),D(16777215),1.5,.1,1.3));let K=new bn(16773328,.8,14);K.position.set(0,3.6,2),r.add(K)}else if(e==="dentist"){F=[1.5,0,1.5],H=1.15;let A=D(16777215,{roughness:.4}),I=D(5686976),K=D(12569046,{metalness:.5,roughness:.3});h(B(new ke(.5,.6,.18,24),K,-1.7,.09,.4)),h(B(new ke(.12,.12,.6,12),K,-1.7,.45,.4)),h(B(xe(.95,.22,1.2,.1),I,-1.7,.85,.4));let O=h(B(xe(.9,1.3,.2,.1),I,-1.7,1.35,-.3));O.rotation.x=-.55,h(B(xe(.5,.3,.16,.06),I,-1.7,2,-.62)),[-1,1].forEach(se=>h(B(xe(.1,.1,.8,.04),A,-1.7+se*.55,1.15,.35))),h(B(new ke(.05,.05,2.2,8),K,-1.7,2.9,.1,!1));let ee=h(B(xe(1.4,.07,.07,.02),K,-1,3.9,.1,!1)),Q=h(B(new ke(.42,.3,.16,20),D(16774857,{emissive:16773800,emissiveIntensity:.9}),-.4,3.7,.2,!1)),ae=new bn(16773824,.7,9);ae.position.set(-.6,3.4,1),r.add(ae),h(B(xe(.7,.9,.5,.06),A,-3,.45,.4)),h(B(xe(.6,.04,.4,.02),K,-3,.92,.4)),[0,1,2].forEach(se=>h(B(new ke(.015,.015,.34,6),D([16740238,5686976,16769658][se],{metalness:.4}),-3.15+se*.12,1.1,.42)).rotation.z=.5-se*.4),h(B(new ke(.6,.7,.3,24),A,3,.15,0));let ce=new Te;ce.add(he(.52,A,1.15,1,.95,0,1.2,0)),[-1,1].forEach(se=>ce.add(B(new Dt(.26,.6,16),A,se*.3,.62,0))),ce.children.slice(-2).forEach(se=>{se.rotation.x=Math.PI}),[-1,1].forEach(se=>ce.add(he(.06,D(2759518),1,1.4,.5,se*.2,1.3,.48))),ce.add(B(new ht(.14,.025,8,16,Math.PI),D(2759518),0,1.1,.5)).rotation.z=Math.PI,[-1,1].forEach(se=>ce.add(he(.07,D(16748480),1.2,.7,.4,se*.34,1.12,.46))),ce.position.set(3,.3,0),h(ce),c.push(se=>{ce.position.y=.3+Math.sin(se*1.6)*.06,ce.rotation.y=Math.sin(se*.8)*.25}),h(B(xe(2.4,1,.6,.08),D(16777215),.5,.5,-2.2)),h(B(xe(2.5,.08,.7,.03),I,.5,1.02,-2.2));let k=B(new Pt(1.5,1.9),new rt({map:Rt(256,330,(se,ue,Re)=>{se.fillStyle="#fff",se.fillRect(0,0,ue,Re),se.fillStyle="#56c6c0",se.fillRect(0,0,ue,26),se.fillStyle="#2a1b5e",se.font="700 34px DynaPuff, Fredoka, sans-serif",se.textAlign="center",se.fillText("Brosse-toi",ue/2,80),se.fillText("les dents !",ue/2,120),se.font="120px serif",se.fillText("\u{1F9B7}",ue/2,250)})}),3.4,3.2,-2.85,!1);h(k),[[-3.6,-1.6,.5],[3.7,1.9,.42],[0,-1.5,.3]].forEach(se=>{let ue=he(se[2],D(16747039),1.15,.85,1.1,se[0],se[2]*.8,se[1]);h(ue),h(B(new ke(.04,.06,.18,8),D(4028970),se[0],se[2]*1.5,se[1])),[-1,1].forEach(Re=>h(B(new Dt(.07,.12,3),D(16773800,{emissive:16765514,emissiveIntensity:1}),se[0]+Re*se[2]*.35,se[2]*.9,se[1]+se[2]*.95)))});let z=new Te;z.add(he(.38,D(16777215,{transparent:!0,opacity:.85}),1,1.2,1,0,0,0)),[-1,1].forEach(se=>z.add(he(.05,D(2759518),1,1.4,.5,se*.13,.08,.34))),z.add(he(.06,D(2759518),1,1.2,.5,0,-.08,.35)),z.position.set(-3.7,2.6,-.6),h(z),c.push(se=>{z.position.y=2.6+Math.sin(se*1.3)*.25,z.rotation.y=Math.sin(se*.7)*.4});let X=[];for(let se=0;se<4;se++){let ue=new Te;[-1,1].forEach(Re=>{let Ke=he(.14,D(1906240),1.6,.4,.2,Re*.16,0,0);Ke.userData.sd=Re,ue.add(Ke)}),ue.add(he(.07,D(1906240),1,1,1,0,0,0)),ue.userData.i=se,X.push(ue),h(ue)}c.push(se=>{X.forEach((ue,Re)=>{let Ke=se*.5+Re*1.6;ue.position.set(Math.sin(Ke)*3.2,3.3+Math.sin(se*2+Re)*.3,-1.2+Math.cos(Ke)*1),ue.rotation.y=-Ke,ue.children.forEach(de=>{de.userData.sd&&(de.rotation.z=de.userData.sd*Math.sin(se*14+Re)*.7)})})});let oe=new bn(16757611,.7,12);oe.position.set(2,2.5,2.5),r.add(oe)}else{let O=function(k,z,X,oe){let se=K;se.fillStyle="#12082c",se.fillRect(0,0,512,256),se.textAlign="center",se.textBaseline="middle",se.font="700 22px DynaPuff, Fredoka, sans-serif",se.fillStyle="#7df9ff",se.fillText(oe||"\u266A Karaok\xE9 \u266A",256,28);let ue=38;if(k){for(se.font="700 38px DynaPuff, Fredoka, sans-serif";se.measureText(k).width>470&&ue>18;)ue-=2,se.font="700 "+ue+"px DynaPuff, Fredoka, sans-serif";se.fillStyle="#4b3a8f",se.fillText(k,256,120),se.save(),se.beginPath(),se.rect(256-se.measureText(k).width/2-4,80,(se.measureText(k).width+8)*Math.max(0,Math.min(1,X||0)),80),se.clip(),se.fillStyle="#ff6fc8",se.fillText(k,256,120),se.restore()}z&&(se.font="600 26px DynaPuff, Fredoka, sans-serif",se.fillStyle="#9d8cff",se.fillText(z,256,200)),A.needsUpdate=!0};F=[0,.34,.6],H=1.3,h(B(xe(5.6,.34,2.8,.1),D(5980118,{emissive:3810160,emissiveIntensity:.5}),0,.17,.6,!1)),h(B(xe(5.7,.05,2.9,.02),new rt({color:16740296}),0,.36,.6,!1)).scale.set(1,1,1),[-1,1].forEach(k=>{h(B(xe(1.4,5,.5,.15),D(14697851,{emissive:11545184,emissiveIntensity:.3}),k*3.3,2.5,-1.8)),h(B(xe(1,1.7,.8,.08),D(2364487),k*2.9,.85,-1.2)),h(he(.3,D(4468858),1,1,.5,k*2.9,.65,-.79)),h(he(.16,D(4468858),1,1,.5,k*2.9,1.3,-.79))});let A=Rt(512,256,(k,z,X)=>{k.fillStyle="#12082c",k.fillRect(0,0,z,X)}),I=B(new Pt(3.6,1.8),new rt({map:A}),0,3.1,-2.8,!1);h(I),h(B(xe(3.8,2,.08,.05),new rt({color:8255999}),0,3.1,-2.9,!1));let K=A.image.getContext("2d");O("","",0,"\u266A Choisis une chanson \u266A"),o.userData.lyrics=O;let ee=B(new ar(.5,1),new $t({color:16777215,metalness:1,roughness:.15,flatShading:!0,emissive:10325247,emissiveIntensity:.5}),0,4.4,-.2,!1);h(ee),h(B(new ke(.01,.01,1.2,4),D(11184810),0,5.2,-.2,!1)),c.push(k=>{ee.rotation.y=k*.8}),[16740296,8255999,16769658].forEach((k,z)=>{let X=B(new Dt(.9,4.2,20,1,!0),new rt({color:k,transparent:!0,opacity:.13,side:en,depthWrite:!1}),(z-1)*2.2,2.4,-.4,!1);X.position.y=2.6,h(X),c.push(oe=>{X.rotation.z=Math.sin(oe*.9+z*2)*.35,X.rotation.x=Math.cos(oe*.7+z)*.15})});let ae=[];for(let k=0;k<14;k++){let z=B(xe(.2,1,.12,.04),new rt({color:[16740296,8255999,16769658][k%3]}),-2.7+k*.42,.55,-1.6,!1);ae.push(z),h(z)}c.push(k=>{ae.forEach((z,X)=>{let oe=C?.4+Math.abs(Math.sin(k*6+X*.9))*1.6:.25+Math.abs(Math.sin(k*1.2+X))*.15;z.scale.y=oe,z.position.y=.4+oe*.5})}),h(B(new ke(.02,.02,1,6),D(13421772,{metalness:.6}),.9,.9,1.2,!1)),h(he(.07,D(2759518),1,1.3,1,.9,1.45,1.2));let ce=new bn(13081599,1.2,14);ce.position.set(0,3,2),r.add(ce)}function Z(){M&&M.dispose(),M=Kt(t()),M.root.scale.setScalar(H),M.root.position.set(F[0]*(P?.55:1),F[1],F[2]),M.face(e==="bakery"?.45:0),M.fx=(A,I)=>l.emit(A,I,M.root.position,H),r.add(M.root),M.setEmotion(C?"happy":"neutral")}Z();function U(A,I){if(p=I,w&&(f.remove(w),w=null),e==="deco"&&A==="decor"&&I&&Fi[I]){let K=Fi[I](),O=new dn().setFromObject(K),ee=O.getSize(new V),Q=Math.max(.3,Math.min(1,1.9/Math.max(ee.x,ee.y,ee.z,.1)));K.scale.setScalar(Q);let ae=new dn().setFromObject(K);K.position.set(1.5-(ae.min.x+ae.max.x)/2,.2-ae.min.y,1.3-(ae.min.z+ae.max.z)/2),f.add(K),w=K}}function T(){let A=i.clientWidth||320,I=i.clientHeight||300;n.setSize(A,I,!1),s.style.width="100%",s.style.height="100%",o.aspect=A/I,o.fov=A/I<1?44:34,_=A/I<.8?9.6:6.6,o.position.z=_,P=A/I<.8,M&&(M.root.position.x=F[0]*(P?.55:1)),o.updateProjectionMatrix()}new ResizeObserver(T).observe(i),T(),s.style.touchAction="none",s.addEventListener("pointerup",()=>{M&&(M.hop(4.6),M.setEmotion("happy"),l.emit("heart",4,M.root.position,H),setTimeout(()=>M&&M.setEmotion(C?"happy":"neutral"),1400))});let L=new On,q=!0;"IntersectionObserver"in window&&new IntersectionObserver(A=>{q=A[0].isIntersecting},{threshold:.01}).observe(i);function E(){if(!R)return;if(requestAnimationFrame(E),!q||document.hidden){L.getDelta();return}let A=Math.min(.05,L.getDelta());b+=A,o.position.x=Math.sin(b*.25)*.35,o.lookAt(o.position.x*.3,1.25,0),c.forEach(I=>I(b)),w&&(w.rotation.y+=A*.5),C&&M?(M.setTalking(Math.sin(b*9)>-.2),M.face(Math.sin(b*2)*.35),M.st.y<.02&&Math.random()<A*1.2&&M.hop(2.6),Math.random()<A*2&&l.emit("star",1,M.root.position,H)):M&&(M.setTalking(!1),e!=="bakery"&&M.face(Math.sin(b*.6)*.3)),M&&M.update(A,b,!1,!1),l.update(A),Math.random()<A*.6&&l.emit("star",1,new V((Math.random()-.5)*6,1+Math.random()*2,.5),1),n.render(r,o)}return E(),{setItem:U,rebuild(){Z(),M.hop(3.6)},emote(A){M&&(M.setEmotion(A),M.hop(4))},sing(A){C=!!A,M&&M.setEmotion(C?"happy":"neutral")},lyrics(A,I,K,O){o.userData.lyrics&&o.userData.lyrics(A,I,K,O)},destroy(){R=!1,M&&M.dispose(),n.dispose(),n.forceContextLoss&&n.forceContextLoss(),s.parentNode&&s.parentNode.removeChild(s)}}}var As=null,Lo=null,Do=null,mc={};function ku(i,e){if(mc[i])return mc[i];try{As||(As=new Hn({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),As.setPixelRatio(1),As.setSize(256,256,!1),Lo=new Mn,Cs(Lo),Do=new wt(26,1,.1,30),Do.position.set(0,1.25,4.6),Do.lookAt(0,.78,0));let t=e();t.root.scale.setScalar(1.2),t.face(-.25),t.update(.016,.3,!1,!0),Lo.add(t.root),As.render(Lo,Do);let n=As.domElement.toDataURL("image/png");return t.dispose(),mc[i]=n,n}catch{return""}}function dx(i,e){return ku("a"+i+(e||""),()=>{let t=Kt(Ui(i));return e&&t.setEmotion(e),t})}function px(i,e){return ku("m"+(i||"")+(e||""),()=>{let t=Kt({mika:!0,acc:i?[i]:[]});return e&&t.setEmotion(e),t})}return Qu(mx);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
