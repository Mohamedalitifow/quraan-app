import { useEffect, useState } from "react"
import ChaptersScreen from "./ChaptersScreen"
import PlayerScreen from "./PlayerScreen"
import RecitersScreen from "./RecitersScreen"
import axios from "axios"
import { error } from "ajv/dist/vocabularies/applicator/dependencies"


const urls ={ 

  reciters : "https://mp3quran.net/api/_english.php",
  chapters : "https://api.quran.com/api/v4/chapters"
   
}
const Home = () => {

  const [reciters , setReciters] = useState([]);
  const [chapters , setChapters] = useState([]);
  const [reciterDetail , setReciterDetail] = useState(null);
  const [chapterDetail , setChapterDetail] = useState(null);

  // console.log(chapters)

     // Get all reciters with Audio
   useEffect(() => {
     axios.get(urls.reciters)
       .then((res) => {
        setReciters(res.data.reciters)
       }).catch((err) => {

        throw new Error("the request is problem check it!")
       })
   },[])
     
   // Get all Chapters 
   
  //  useEffect(() => {

  //   axios.get(urls.chapters)
  //    .then((res) => {
  //     setChapters(res.data.chapters)
  //    })
      
  //    reciters && reciters.length > 0 && axios.get()
  //  },[reciters])

  

   useEffect(() => {
    if (reciters && reciters.length > 0) {
      axios.get(urls.chapters)
        .then((res) => {
          setChapters(res.data.chapters)
        })
        .catch((err) => {
          // Handle error
        });
    }
  }, [reciters]);
  

   const reciterHandler = (reciter) => {
    // console.log(reciter.id)
    setReciterDetail(reciter)
   }

   const chapterHandler = (chapter) => {
   
    setChapterDetail(chapter)
   }
  return (
    
        
       <div className="row p-5 vh-100">

        

        <div className="col-lg-4 col-md-4 col-sm-12 col-12  scroll bg-navy ">
            <RecitersScreen reciters={reciters} reciterHandler={reciterHandler}/>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12 col-12 scroll bg-navy">
            <ChaptersScreen chapters={chapters} chapterHandler={chapterHandler} />
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12 col-12 scroll bg-navy">
           <PlayerScreen reciterDetail={reciterDetail} chapterDetail={chapterDetail}/>
        </div>

       </div>
  
  )
}

export default Home
