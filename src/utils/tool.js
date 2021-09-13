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