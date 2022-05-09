import React,{useState} from 'react'
import {postRequest} from './Utils'

const Encode = () => {
  const [longUrl,getLongUrl] = useState(null)
  const [newUrl, getNewUrl] = useState(null)



  function handleSubmit(e){
    e.preventDefault()
    const obj = {
      long_url:longUrl
    }
    
    postRequest('http://localhost:8000/api/encode/',obj)
    .then(data=>{
      getNewUrl(data.url)
      console.log(data)
    })
    .catch(e=>console.log(e))
  }


  return (
    <div className='box'>
      <h1>Get a Short Url Here!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e=>{getLongUrl(e.target.value)}}/>
        <button type='submit'>submit</button>
      </form>
      <br />
      <h1>Your Short Url</h1>
      <h4>{newUrl}</h4>
    </div>
  )
}

export default Encode