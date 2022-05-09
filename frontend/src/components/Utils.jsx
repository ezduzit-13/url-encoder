
async function postRequest(url,obj){
  let response =  await fetch(url, {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(obj)
  })
  let data = await response.json()
  return data
}


export {postRequest}
