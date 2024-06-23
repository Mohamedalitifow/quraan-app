
import ReactPlayer from "react-player";


const PlayerScreen = ({reciterDetail ,chapterDetail }) => {

  const audioLink =(reciter, number) => {
  return reciter + '/' + ('00' + number).slice(-3)+'.mp3'
  }
  return (
     
    <div className="min-vh-100  p-3 bg-navy">
    <h1 className='fs-5 fw-bold text-center'>Player</h1>

    {
      reciterDetail !== null && chapterDetail !== null ? (
        <ul className='list-group text-end'>
   
      <div >
      <hr/>
        <li className='list-group-item bg-transparent
         border-0 text-light py-0 chapters curser fs-6 ps-0 d-flex justify-content-between '>
          <span >Reciter:</span> 
          <span className='fs-6 '>{reciterDetail.name} </span> 
        
         </li>
         <hr />     

         <li className='list-group-item bg-transparent
         border-0 text-light py-0 chapters curser fs-6 ps-0 d-flex justify-content-between'>
          

           <span>Chapter in Arabic:</span> 
          <span className='fs-5 '>{chapterDetail.name_arabic}</span> 
        
          
         </li>
         <hr />






         <li className='list-group-item bg-transparent
         border-0 text-light py-0 chapters curser fs-6 ps-0 d-flex justify-content-between'>
          

           <span>Chapter in English:</span> 
          <span className='fs-6 '>{chapterDetail.name_simple}</span> 
        
          
         </li>
         <hr />



         <li className='list-group-item bg-transparent
         border-0 text-light py-0 chapters curser fs-6 ps-0 d-flex justify-content-between'>
          

           <span>Revelation Place:</span> 
          <span className='fs-6 '>{chapterDetail.revelation_place}</span> 
        
          
         </li>
         <hr />






         <li className='list-group-item bg-transparent
         border-0 text-light py-0 chapters curser fs-6 ps-0 d-flex justify-content-between'>
          

           <span>Translated Name:</span> 
          <span className='fs-6'>{chapterDetail.translated_name.name}</span> 
        
          
         </li>
         <hr />

       <div className="player">
         <ReactPlayer url={
          audioLink(reciterDetail.Server, chapterDetail.id )
         } 
          controls={true} 
          playing={true} 
          width='100% '
          height='60px' 
          />
         </div>
      </div>

    </ul>
      ):(
        <dir className="text-center">
          <span className="spinner-border"></span>
        </dir>
      )
    }
    </div>
  )
}

export default PlayerScreen
