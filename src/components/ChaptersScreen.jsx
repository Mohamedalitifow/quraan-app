import React, { useState } from 'react';

const ChaptersScreen = ({ chapters, chapterHandler }) => {
  const [activeId , setActiveId] = useState('') 
  const [searchQuery, setSearchQuery] = useState('');
  console.log(searchQuery)

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredChapters = chapters.filter(chapter =>
    chapter.name_simple.toLowerCase().includes(searchQuery.toLowerCase())
    
  );

  return (
    <div className="min-vh-100 shadow-lg p-3 bg-navy">
      <h1 className='fs-5 fw-bold text-center'>Sura</h1>
      <div className="input-group mb-4 mt-3">
        <input 
          type="search" 
          className="form-control rounded" 
          placeholder="Search" 
          aria-label="Search" 
          aria-describedby="search-addon" 
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <ul className='list-group text-end'>
        {
          filteredChapters.map((chapter) => (
            <div key={chapter.id}>
              <li 
               
                onClick={(e) => {
                  chapterHandler(chapter) 
                  setActiveId(chapter.id)}} 

                  className={`list-group-item bg-transparent border-0 text-light py-0 d-flex justify-content-between cursor fs-5
                   ${chapter.id === activeId && 'active'}`}
                   >
                    
                <span>{chapter.id}</span>
                <span>{chapter.name_arabic}</span>  
              </li>
              <hr/>
            </div>
          ))
        }
      </ul>
    </div>
  );
}

export default ChaptersScreen;
