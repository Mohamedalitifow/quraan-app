
import { useState } from 'react'
import {FaUserCircle} from 'react-icons/fa'
const RecitersScreen = ({ reciters, reciterHandler }) => {

  const [activeId , setActiveId] = useState('')
  const [search , setSearch] = useState('')
  console.log(search)
  
  const handleSearch = (e) => {
   setSearch(e.target.value)
  }

  const filterReciters = reciters.filter( reciter => 

    reciter.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    
    <div className="min-vh-100  p-3 bg-navy">
    <h1 className='fs-5 fw-bold text-center'>Reciters</h1>

    <div className="input-group mb-4 mt-3">
        <input 
          type="search" 
          className="form-control rounded" 
          placeholder="Search" 
          value={search}
          onChange={handleSearch}
         
          
         
        />
      </div>
    <ul className='list-group text-start'>
    {
              filterReciters.map((reciter) => (
              <div key={reciter.id} >
      
                <li onClick={(e) => {
                reciterHandler(reciter) 
                setActiveId(reciter.id)}}

                 className={`list-group-item bg-transparent
                 border-0 text-light py-0 chapters curser fs-5 ps-0
                  ${reciter.id === activeId && 'active'}`}>
                  
                  <FaUserCircle className='fs-3 me-2 '/>
                  <span className='fs-6 ' >{reciter.name}</span> 
                 </li>
                 <hr />
              </div>
              ))
          
          }   
      
      
   
     
   

    </ul>
    </div>



  )
}

export default RecitersScreen
