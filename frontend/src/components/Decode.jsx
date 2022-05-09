import React,{useState} from 'react'
import { postRequest } from './Utils'
const Decode = () => {
  const [shortUrl, getShortUrl] = useState(null)
  const [decodedUrl, decode] = useState(null)

  function handleSubmit(e){
    e.preventDefault()
    const obj = {
      short_url:shortUrl
    }
    
    postRequest('http://localhost:8000/api/decode/',obj)
    .then(data=>{
      decode(data.url)
      console.log(data)
    })
    .catch(e=>console.log(e))
  }
  



  return (

    <div className='box'>
       <h1>Decode Your Url Here!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e=>{getShortUrl(e.target.value)}}/>
        <button type='submit'>submit</button>
      </form>
      <br />
      <h1>Your Long Url</h1>
      <h4>{decodedUrl}</h4>

    </div>
  )
}

export default Decode