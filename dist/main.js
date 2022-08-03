(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function n(n){t(1,arguments);var r=e(n);return r.setHours(0,0,0,0),r}function r(e,r){t(2,arguments);var a=n(e),i=n(r);return a.getTime()===i.getTime()}class a{constructor(t){this._title=t,this._toDoItems=[]}get title(){return this._title}get toDoItems(){return this._toDoItems}addToDoItems(t){this.toDoItems.push(t)}removeToDoItems(t){for(let e=0;e<this.toDoItems.length;e++)t===this.toDoItems[e].title&&this.toDoItems.splice(e,1)}itemsToday(){return this._toDoItems.filter((n=>function(e){return t(1,arguments),r(e,Date.now())}(e(new Date(n.dueDate)))))}}function i(e){return t(1,arguments),e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}function o(n){if(t(1,arguments),!i(n)&&"number"!=typeof n)return!1;var r=e(n);return!isNaN(Number(r))}function u(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function s(n,r){t(2,arguments);var a=e(n).getTime(),i=u(r);return new Date(a+i)}function l(e,n){t(2,arguments);var r=u(n);return s(e,-r)}var d=864e5;function c(n){t(1,arguments);var r=1,a=e(n),i=a.getUTCDay(),o=(i<r?7:0)+i-r;return a.setUTCDate(a.getUTCDate()-o),a.setUTCHours(0,0,0,0),a}function m(n){t(1,arguments);var r=e(n),a=r.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var o=c(i),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var s=c(u);return r.getTime()>=o.getTime()?a+1:r.getTime()>=s.getTime()?a:a-1}function f(e){t(1,arguments);var n=m(e),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=c(r);return a}var h=6048e5,g={};function v(){return g}function w(n,r){var a,i,o,s,l,d,c,m;t(1,arguments);var f=v(),h=u(null!==(a=null!==(i=null!==(o=null!==(s=null==r?void 0:r.weekStartsOn)&&void 0!==s?s:null==r||null===(l=r.locale)||void 0===l||null===(d=l.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==o?o:f.weekStartsOn)&&void 0!==i?i:null===(c=f.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==a?a:0);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=e(n),w=g.getUTCDay(),b=(w<h?7:0)+w-h;return g.setUTCDate(g.getUTCDate()-b),g.setUTCHours(0,0,0,0),g}function b(n,r){var a,i,o,s,l,d,c,m;t(1,arguments);var f=e(n),h=f.getUTCFullYear(),g=v(),b=u(null!==(a=null!==(i=null!==(o=null!==(s=null==r?void 0:r.firstWeekContainsDate)&&void 0!==s?s:null==r||null===(l=r.locale)||void 0===l||null===(d=l.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==o?o:g.firstWeekContainsDate)&&void 0!==i?i:null===(c=g.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==a?a:1);if(!(b>=1&&b<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(h+1,0,b),y.setUTCHours(0,0,0,0);var p=w(y,r),D=new Date(0);D.setUTCFullYear(h,0,b),D.setUTCHours(0,0,0,0);var T=w(D,r);return f.getTime()>=p.getTime()?h+1:f.getTime()>=T.getTime()?h:h-1}function y(e,n){var r,a,i,o,s,l,d,c;t(1,arguments);var m=v(),f=u(null!==(r=null!==(a=null!==(i=null!==(o=null==n?void 0:n.firstWeekContainsDate)&&void 0!==o?o:null==n||null===(s=n.locale)||void 0===s||null===(l=s.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==i?i:m.firstWeekContainsDate)&&void 0!==a?a:null===(d=m.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==r?r:1),h=b(e,n),g=new Date(0);g.setUTCFullYear(h,0,f),g.setUTCHours(0,0,0,0);var y=w(g,n);return y}var p=6048e5;function D(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const T=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return D("yy"===e?r%100:r,e.length)},C=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):D(n+1,2)},M=function(t,e){return D(t.getUTCDate(),e.length)},x=function(t,e){return D(t.getUTCHours()%12||12,e.length)},S=function(t,e){return D(t.getUTCHours(),e.length)},k=function(t,e){return D(t.getUTCMinutes(),e.length)},N=function(t,e){return D(t.getUTCSeconds(),e.length)},U=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return D(Math.floor(r*Math.pow(10,n-3)),e.length)};function P(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+D(i,2)}function E(t,e){return t%60==0?(t>0?"-":"+")+D(Math.abs(t)/60,2):I(t,e)}function I(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+D(Math.floor(a/60),2)+n+D(a%60,2)}const L={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return T(t,e)},Y:function(t,e,n,r){var a=b(t,r),i=a>0?a:1-a;return"YY"===e?D(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):D(i,e.length)},R:function(t,e){return D(m(t),e.length)},u:function(t,e){return D(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return D(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return D(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return C(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return D(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(n,r,a,i){var o=function(n,r){t(1,arguments);var a=e(n),i=w(a,r).getTime()-y(a,r).getTime();return Math.round(i/p)+1}(n,i);return"wo"===r?a.ordinalNumber(o,{unit:"week"}):D(o,r.length)},I:function(n,r,a){var i=function(n){t(1,arguments);var r=e(n),a=c(r).getTime()-f(r).getTime();return Math.round(a/h)+1}(n);return"Io"===r?a.ordinalNumber(i,{unit:"week"}):D(i,r.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):M(t,e)},D:function(n,r,a){var i=function(n){t(1,arguments);var r=e(n),a=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var i=r.getTime(),o=a-i;return Math.floor(o/d)+1}(n);return"Do"===r?a.ordinalNumber(i,{unit:"dayOfYear"}):D(i,r.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return D(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return D(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return D(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return x(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):S(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):D(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):D(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):k(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):N(t,e)},S:function(t,e){return U(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return E(a);case"XXXX":case"XX":return I(a);default:return I(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return E(a);case"xxxx":case"xx":return I(a);default:return I(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+P(a,":");default:return"GMT"+I(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+P(a,":");default:return"GMT"+I(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return D(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return D((r._originalDate||t).getTime(),e.length)}};var W=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},q=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},Y={p:q,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return W(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",W(a,e)).replace("{{time}}",q(i,e))}};const $=Y;function H(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var O=["D","DD"],F=["YY","YYYY"];function z(t){return-1!==O.indexOf(t)}function j(t){return-1!==F.indexOf(t)}function A(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var _={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Q(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var G,R={date:Q({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Q({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Q({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},X={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function B(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=t.formattingValues[i]||t.formattingValues[a]}else{var o=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[o]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function J(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,u=i[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(s)?V(s,(function(t){return t.test(u)})):Z(s,(function(t){return t.test(u)}));o=t.valueCallback?t.valueCallback(l):l,o=n.valueCallback?n.valueCallback(o):o;var d=e.slice(u.length);return{value:o,rest:d}}}function Z(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function V(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const K={code:"en-US",formatDistance:function(t,e,n){var r,a=_[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:R,formatRelative:function(t,e,n,r){return X[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:B({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:B({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:B({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:B({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:B({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(G={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(G.matchPattern);if(!n)return null;var r=n[0],a=t.match(G.parsePattern);if(!a)return null;var i=G.valueCallback?G.valueCallback(a[0]):a[0];i=e.valueCallback?e.valueCallback(i):i;var o=t.slice(r.length);return{value:i,rest:o}}),era:J({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:J({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:J({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:J({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:J({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var tt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,et=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,nt=/^'([^]*?)'?$/,rt=/''/g,at=/[a-zA-Z]/;function it(n,r,a){var i,s,d,c,m,f,h,g,w,b,y,p,D,T,C,M,x,S;t(2,arguments);var k=String(r),N=v(),U=null!==(i=null!==(s=null==a?void 0:a.locale)&&void 0!==s?s:N.locale)&&void 0!==i?i:K,P=u(null!==(d=null!==(c=null!==(m=null!==(f=null==a?void 0:a.firstWeekContainsDate)&&void 0!==f?f:null==a||null===(h=a.locale)||void 0===h||null===(g=h.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==m?m:N.firstWeekContainsDate)&&void 0!==c?c:null===(w=N.locale)||void 0===w||null===(b=w.options)||void 0===b?void 0:b.firstWeekContainsDate)&&void 0!==d?d:1);if(!(P>=1&&P<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var E=u(null!==(y=null!==(p=null!==(D=null!==(T=null==a?void 0:a.weekStartsOn)&&void 0!==T?T:null==a||null===(C=a.locale)||void 0===C||null===(M=C.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==D?D:N.weekStartsOn)&&void 0!==p?p:null===(x=N.locale)||void 0===x||null===(S=x.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==y?y:0);if(!(E>=0&&E<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!U.localize)throw new RangeError("locale must contain localize property");if(!U.formatLong)throw new RangeError("locale must contain formatLong property");var I=e(n);if(!o(I))throw new RangeError("Invalid time value");var W=H(I),q=l(I,W),Y={firstWeekContainsDate:P,weekStartsOn:E,locale:U,_originalDate:I},O=k.match(et).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,$[e])(t,U.formatLong):t})).join("").match(tt).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return ot(t);var i=L[e];if(i)return null!=a&&a.useAdditionalWeekYearTokens||!j(t)||A(t,r,String(n)),null!=a&&a.useAdditionalDayOfYearTokens||!z(t)||A(t,r,String(n)),i(q,t,U.localize,Y);if(e.match(at))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("");return O}function ot(t){var e=t.match(nt);return e?e[1].replace(rt,"'"):t}Math.pow(10,8);var ut=36e5,st={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},lt=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,dt=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,ct=/^([+-])(\d{2})(?::?(\d{2}))?$/;function mt(t){var e,n={},r=t.split(st.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?e=r[0]:(n.date=r[0],e=r[1],st.timeZoneDelimiter.test(n.date)&&(n.date=t.split(st.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var a=st.timezone.exec(e);a?(n.time=e.replace(a[1],""),n.timezone=a[1]):n.time=e}return n}function ft(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:NaN,restDateString:""};var a=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;return{year:null===i?a:100*i,restDateString:t.slice((r[1]||r[2]).length)}}function ht(t,e){if(null===e)return new Date(NaN);var n=t.match(lt);if(!n)return new Date(NaN);var r=!!n[4],a=gt(n[1]),i=gt(n[2])-1,o=gt(n[3]),u=gt(n[4]),s=gt(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,u,s)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var a=7*(e-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(e,u,s):new Date(NaN);var l=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(yt[e]||(pt(t)?29:28))}(e,i,o)&&function(t,e){return e>=1&&e<=(pt(t)?366:365)}(e,a)?(l.setUTCFullYear(e,i,Math.max(a,o)),l):new Date(NaN)}function gt(t){return t?parseInt(t):1}function vt(t){var e=t.match(dt);if(!e)return NaN;var n=wt(e[1]),r=wt(e[2]),a=wt(e[3]);return function(t,e,n){return 24===t?0===e&&0===n:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,a)?n*ut+6e4*r+1e3*a:NaN}function wt(t){return t&&parseFloat(t.replace(",","."))||0}function bt(t){if("Z"===t)return 0;var e=t.match(ct);if(!e)return 0;var n="+"===e[1]?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,a)?n*(r*ut+6e4*a):NaN}var yt=[31,null,31,30,31,30,31,31,30,31,30,31];function pt(t){return t%400==0||t%4==0&&t%100!=0}class Dt{constructor(t,e,n){this._parent=t,this._title=e,this._dueDate=n}get parent(){return this._parent}get title(){return this._title}get dueDate(){return""===this._dueDate?"No Date":it(function(e,n){var r;t(1,arguments);var a=u(null!==(r=null==n?void 0:n.additionalDigits)&&void 0!==r?r:2);if(2!==a&&1!==a&&0!==a)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var i,o=mt(e);if(o.date){var s=ft(o.date,a);i=ht(s.restDateString,s.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);var l,d=i.getTime(),c=0;if(o.time&&(c=vt(o.time),isNaN(c)))return new Date(NaN);if(!o.timezone){var m=new Date(d+c),f=new Date(0);return f.setFullYear(m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate()),f.setHours(m.getUTCHours(),m.getUTCMinutes(),m.getUTCSeconds(),m.getUTCMilliseconds()),f}return l=bt(o.timezone),isNaN(l)?new Date(NaN):new Date(d+c+l)}(this._dueDate),"LLL dd, yyyy")}}const Tt=[new a("Primary")],Ct=function(t,e){Tt.forEach((n=>{t.textContent===n.title&&(n.addToDoItems(e),console.log(n))}))};function Mt(){let t=it(new Date,"LLL dd, yyyy");const e=[];return Tt.forEach((n=>{n.toDoItems.forEach((r=>{for(let r=0;r<n.toDoItems.length;r++)n.toDoItems[r].dueDate!==t||e.includes(n.toDoItems[r])||e.push(n.toDoItems[r])}))})),e}const xt=function(t){t.classList.add("visible"),t.classList.remove("invisible")},St=function(t){t.classList.add("invisible"),t.classList.remove("visible")};function kt(){localStorage.setItem("plans",JSON.stringify(Tt)),console.log(localStorage.getItem("plans"))}const Nt=document.querySelector("#plan-title"),Ut=document.querySelector("#add-plans"),Pt=document.querySelector("#plan-form-id");Ut.addEventListener("click",(()=>{xt(Pt),St($t),Ht.value=""}));const Et=document.querySelector("#plans-list"),It=document.querySelector("#plan-input");document.querySelector("#plan-submit").addEventListener("click",(function(t){t.preventDefault();let e=new a(It.value);var n;n=e,Tt.push(n),Et.appendChild(function(t,e){const n=document.createElement("button");return n.classList.add("plan-buttons"),n.setAttribute("id",t),n.textContent=t,n}(e.title)),It.value="",St(Pt),kt()})),document.querySelector("#plan-cancel").addEventListener("click",(function(t){t.preventDefault(),It.value="",St(Pt)})),document.querySelector("#today").addEventListener("click",(t=>{Nt.textContent=t.target.textContent,qt.style.display="none",Yt.style.display="none",Lt.innerHTML="";const e=Mt();console.log(Mt());for(let t=0;t<e.length;t++)Lt.innerHTML+=`\n                <div class="item-buttons">\n                    <div class="item-buttons-left">\n                    <p class="item-title" id="${e[t].title}">${e[t].title}</p>\n                    </div>\n                    <div class="item-buttons-right">\n                        <p id="${e[t].title}">${e[t].dueDate}</p>\n                    </div>\n                </div>`}));const Lt=document.querySelector("#plan-items");function Wt(t){Nt.textContent="Primary",qt.style.display="none",Yt.style.display="block",Lt.innerHTML="";const e=Tt[0];console.log(Tt[0]),e.toDoItems.forEach((t=>{Lt.innerHTML="";for(let t=0;t<e.toDoItems.length;t++)Lt.innerHTML+=`\n            <div class="item-buttons">\n                <div class="item-buttons-left">\n                <p class="item-title" id="${e.toDoItems[t].title}">${e.toDoItems[t].title}</p>\n                </div>\n                <div class="item-buttons-right">\n                    <p id="${e.toDoItems[t].title}">${e.toDoItems[t].dueDate}</p>\n                    <button class="primary-x" id="${e.toDoItems[t].title}">x</button>\n                </div>\n            </div>`}))}Et.addEventListener("click",(function(t){Nt.textContent=t.target.textContent,qt.className=t.target.id,qt.style.display="block",Yt.style.display="block",Lt.innerHTML="",console.log(Tt),Tt.forEach((e=>{e.toDoItems.forEach((n=>{if(e.title===t.target.textContent){Lt.innerHTML="";for(let t=0;t<e.toDoItems.length;t++)Lt.innerHTML+=`\n                <div class="item-buttons">\n                    <div class="item-buttons-left">\n                    <p class="item-title" id="${e.toDoItems[t].title}">${e.toDoItems[t].title}</p>\n                    </div>\n                    <div class="item-buttons-right">\n                        <p id="${e.toDoItems[t].title}">${e.toDoItems[t].dueDate}</p>\n                        <button class="x" id="${e.toDoItems[t].title}">x</button>\n                    </div>\n                </div>`}}))}))})),document.querySelector("#primary").addEventListener("click",Wt);const qt=document.querySelector("#trash");qt.addEventListener("click",(t=>{var e;Nt.textContent="",e=qt,document.querySelectorAll(".plan-buttons").forEach((t=>{e.classList.contains(t.id)&&t.remove()})),t.target,function(t){Tt.forEach((e=>{t.classList.contains(e.title)&&Tt.splice(Tt.findIndex((e=>e.title===t.className)),1)}))}(qt),kt(),qt.className=""}));const Yt=document.querySelector("#add-item"),$t=document.querySelector("#item-form-id");Yt.addEventListener("click",(()=>{xt($t),St(Pt),It.value=""}));const Ht=document.querySelector("#item-input"),Ot=document.querySelector("#item-submit"),Ft=document.querySelector("#date-submit");Ot.addEventListener("click",(function(t){t.preventDefault(),""===Ft.value&&(Ft.value="No Date");let e=new Dt(Nt.textContent,Ht.value,Ft.value);Nt.textContent===e.parent&&"Primary"!==Nt.textContent?(Ct(Nt,e),Lt.innerHTML+=`\n            <div class="item-buttons">\n                <div class="item-buttons-left">\n                    <p class="item-title" id="${e.title}">${e.title}</p>\n                </div>\n                <div class="item-buttons-right">\n                    <p id="${e.title}">${e.dueDate}</p>\n                    <button class="x" id="${e.title}">x</button>\n                </div>\n            </div>`,Ht.value="",St($t)):"Primary"===Nt.textContent&&(Ct(Nt,e),Lt.innerHTML+=`\n            <div class="item-buttons">\n                <div class="item-buttons-left">\n                    <p class="item-title" id="${e.title}">${e.title}</p>\n                </div>\n                <div class="item-buttons-right">\n                    <p id="${e.title}">${e.dueDate}</p>\n                    <button class="primary-x" id="${e.title}">x</button>\n                </div>\n            </div>`,Ht.value="",St($t)),kt(),Ft.value=""})),document.querySelector("#item-cancel").addEventListener("click",(function(t){t.preventDefault(),Ht.value="",St($t)})),Lt.addEventListener("click",(t=>{const e=Tt[0];if("x"===t.target.className&&Tt.forEach((e=>{e.toDoItems.forEach((n=>{e.title===Nt.textContent&&(e.removeToDoItems(t.target.id),Lt.innerHTML="")}));for(let t=0;t<e.toDoItems.length;t++)Lt.innerHTML+=`\n            <div class="item-buttons">\n                <div class="item-buttons-left">\n                <p class="item-title" id="${e.toDoItems[t].title}">${e.toDoItems[t].title}</p>\n                </div>\n                <div class="item-buttons-right">\n                    <p id="${e.toDoItems[t].title}">${e.toDoItems[t].dueDate}</p>\n                    <button class="x" id="${e.toDoItems[t].title}">x</button>\n                </div>\n            </div>`})),"primary-x"===t.target.className){e.toDoItems.forEach((()=>{e.title===Nt.textContent&&(e.removeToDoItems(t.target.id),Lt.innerHTML="")}));for(let t=0;t<e.toDoItems.length;t++)Lt.innerHTML+=`\n            <div class="item-buttons">\n                <div class="item-buttons-left">\n                <p class="item-title" id="${e.toDoItems[t].title}">${e.toDoItems[t].title}</p>\n                </div>\n                <div class="item-buttons-right">\n                    <p id="${e.toDoItems[t].title}">${e.toDoItems[t].dueDate}</p>\n                    <button class="primary-x" id="${e.toDoItems[t].title}">x</button>\n                </div>\n            </div>`}kt()})),document.addEventListener("DOMContentLoaded",Wt)})();
//# sourceMappingURL=main.js.map