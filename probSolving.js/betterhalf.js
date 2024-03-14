const user = {id: 434546, name:"abc"}

function constructString(user){
  let url = ''
  let keys = Object.keys(user);
  for(let key of keys){
        url += user[key]
        url += '&'
    }
  return url
}

console.log(constructString(user))