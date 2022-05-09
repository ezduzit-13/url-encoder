import React,{useState} from 'react'

const LongUrl = () => {
  const [longUrl,getLongUrl] = useState(null)


  async function postRequest(url,obj){
    let response =  await fetch(url, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(obj)
    })
  
    let data = await response.json()
    return data
  }
  

  function handleSubmit(e){
    e.preventDefault()
    const obj = {
      long_url:longUrl
    }
    
    postRequest('http://localhost:8000/api/encode/',obj)
    .then(data=>console.log(data))
    .catch(e=>console.log(e))

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e=>{getLongUrl(e.target.value)}}/>
        <button type='submit'>submit</button>
      </form>
      <p>{longUrl}</p>
    </div>
  )
}

export default LongUrl