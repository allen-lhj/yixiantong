export function formatJSON(array, key) {
  return array.filter(item => {
    if(item[key]) {
      item[key] = item[key].split(',')
    }
    return item
  })
}

export function jsonToArr (str) {
  return JSON.parse(str);
}

export function strToArr (str) {
  return str.split(',');
}

export function replaceToSpace (str) {
  return str.replace(/,/g, ' ');
}

export function trimSpace(str) {
  return str.replace(/\s+/g, '')
}

export function throttle (fn, delay) {
  var t = null,
  begin = new Date().getTime();

  return function () {
    var _self = this,
        args = arguments,
        cur = new Date().getTime();

    clearTimeout(t);

    if (cur - begin >= delay) {
      fn.apply(_self, args);
      begin = cur;
    } else {
      t = setTimeout(function () {
        fn.apply(_self, args);
      }, delay);
    }
  }
}