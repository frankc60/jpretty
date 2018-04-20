/**
 * This module prettifes a json object. Returning json in a friendly to read key = value layout. 
 * Dot delimiters are used to delimit the json object hierarchy.
 * @param {object} input text or object in a json format.
 * @returns {string} shows the json input in a easy to read layout.
 */
const prettyJson = (strEvents) => {
  let tmp = '';
  const events = JSON.parse(strEvents); // json needs to arrive stringified

  function pJson(events, top = '') {
    Object.keys(events).forEach((i) => {
      if (typeof events[i] === 'object') {
        let rtn;
        if (Object.prototype.toString.call(events) === '[object Array]') {
          rtn = (`${top}.[${i}]`);
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

const jPretty = (obj) => {
  // make sure data is a json obj
  let gl;
  try {
    const p = JSON.parse(obj); 
    //console.log("already stringified")
    gl = obj; // already stringified
  } catch (e) { // not stringified
    try {
     // console.log("make into a string")
      const s = JSON.stringify(obj);
     // if (s && typeof s === 'object') {
     //   return Error(`not a json object: ${typeof s}` );
     // }
      gl = s;
    } catch (er) {
     // return Error(`not a json object: ${er}`);
    }
  }

  return prettyJson(gl);
};

module.exports = jPretty;
