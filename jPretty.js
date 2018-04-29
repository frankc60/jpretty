/**
 * This module prettifes a json object. Returning json in a friendly to read key = value layout. 
 * Dot delimiters are used to delimit the json object hierarchy.
 * @param {object} strEvents text or object in a json format.
 * @returns {string} shows the json input in a easy to read key=value format.
 */
const prettyJson = (strEvents) => {
  let tmp = '';
  const events = JSON.parse(strEvents); // json needs to arrive stringified

  function pJson(events, top = '') {
    Object.keys(events).forEach((i) => {
      if (typeof events[i] === 'object' && events[i] != null) {
        let rtn;
        if (Object.prototype.toString.call(events) === '[object Array]') {
          rtn = (`${top}[${i}]`);
        } else { rtn = (`${top}.${i}`); }
          pJson(events[i], rtn);
      } else if (Object.prototype.toString.call(events) === '[object Array]') {
        tmp += `{}${top}[${i}] = ${events[i]}\n`;
      } else {
        tmp += `{}${top}.${i} = ${events[i]}\n`;
      }
    });
  }

    pJson(events);
    
  return tmp;
};


/**
 * Tidies up the json into a correct javascript object notation.
 * 
 * @param {object} obj text or object.
 * calls the main prettyJson module passing the json obj as argument.
 */
function jPretty(obj) {
  // make sure data is a json obj
  
  if(typeof obj === "string") {
    obj = obj.replace(/\s/g,"");
    obj = obj.replace(/'/g,'"');
  }
  let gl;
  try {
    
    const p = JSON.parse(obj); 
    gl = obj; // already stringified
  } catch (e) { // not stringified
      if(typeof obj === "string") {
        obj = obj.replace(/([,|{|\s|])([a-zA-Z0-9]*?)([\s|]*\:)/g,'$1"$2"$3');
      }

      const s = JSON.stringify(obj);
      const k = JSON.parse(JSON.stringify(obj));
       if (k && typeof k === 'object') {
        gl = s;
      } else {
        if(typeof obj === "string") {
        //console.log("ERROR: " + );
        obj = obj.replace(/"/g,"'");
        obj = obj.replace(/'/g,'"');
        
        gl = ((obj));
        } else {
          return new Error(`jpretty: input is not recognised json: ${typeof obj}- ${JSON.stringify(obj)}`);
        }
      }
  }

  return (() => {
    let jp = prettyJson(gl); 
    if(typeof window !== 'undefined') {
      console.log("jPretty loaded in browser");
        jp = jp.replace(/\{\}/g,"<br/>{}");
    }
    //prettyJson(gl);
    return jp;
  })()
};


if ( typeof module === 'object' && module && typeof module.exports === 'object' ) {
  module.exports = jPretty;  //nodejs
} else {
  window.jPretty = jPretty;  //browser
}