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
       // if(events[i] == null) { return tmp + rtn; } else {
          pJson(events[i], rtn);
       // }
      } else if (Object.prototype.toString.call(events) === '[object Array]') {
        tmp += `{}${top}[${i}] = ${events[i]}\n`;
     // } else if (Object.prototype.toString.call(events) == null) {
      //  tmp += `{}${top}.${i} = null\n`;
      } else {
        tmp += `{}${top}.${i} = ${events[i]}\n`;
      }
    });
  }
 /*  if (events == null) {
    return tmp
    } else { */
     // console.log("events not equal null, = " + events)
    pJson(events);
//  }
  return tmp;
};


/**
 * Tidies up the json into a correct javascript object notation.
 * 
 * @param {object} obj text or object.
 * calls the main prettyJson module passing the json obj as argument.
 */
const jPretty = (obj) => {
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
    //try {
      if(typeof obj === "string") {
        obj = obj.replace(/([,|{|\s|])([a-zA-Z0-9]*?)([\s|]*\:)/g,'$1"$2"$3');
      }
      // console.log("make into a string")
      //obj = obj.replace(/"/g,"'");
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
        //
      }
    //  throw Error("not json "+ JSON.stringify(obj))
   /*  } catch (er) {

     console.log("sddsdsdsdssddsdsdsdsdsdssddsds " + er)
     }
    */
  }

  return prettyJson(gl);
};

module.exports = jPretty;
