import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react'; 

const LateestNews = ()=>{
  let [newsData, setNewsData] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:7000/news')
            .then(response =>
              setNewsData(response.data));
            console.log(setNewsData);
  },[])
  
  const listItems = newsData.map((newsData)=>
    <div className="card" key={newsData.id, newsData.title,newsData.summary }>
      <div class="card_img">
        <img src={newsData.imageUrl} />
      </div>
      <div class="card_header">
        <h2 class="text-tLN">{newsData.title}</h2>
        <p class="text-LN">{newsData.description}</p>
        <p class="text-LN">Published: {newsData.posted}</p>
      </div>
    </div>
  
  );
  
  return(
    <div className="main_content">
      <h1 class="lfont"> Latest News </h1>
      {listItems}
    </div>
  )

}

export default LateestNews;






//function LatestNews() {
//  return (
//    <div className="LatestNews">
//        
//
//    </div>
//  );
//}

//export default LatestNews;

//id, title, urlSite, summary, publishedAt, updatedAt