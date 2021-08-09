import React from 'react';
import './Youtube.css'
const Youtube = () => {
    return (
        <div>
            <h1 align="center" className="head">Portfolio</h1>
           <div className="youtubecontainer">
       <div>
       <iframe width="360" height="215" src="https://www.youtube.com/embed/alwuIo1ycA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           
       </div>
           
          <div>
          <iframe width="360" height="215" src="https://www.youtube.com/embed/XzbDTvOg0Xo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
           
           <div>
           <iframe width="360" height="215" src="https://www.youtube.com/embed/Tq8RBFS8OqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
           </div>
        </div>
    );
};

export default Youtube;