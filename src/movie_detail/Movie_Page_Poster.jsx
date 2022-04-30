import React from 'react'
import List_Detail from '../List/List_Page';

const Movie_Page_Poster = () => {
    
    let moive = window.location.pathname.substr(16, );
    let movies_detail = List_Detail();
    let posters = null;
    console.log(movies_detail[0])
    for(let i in movies_detail){
        if(i == moive-1){
            for(let j in movies_detail[i].slider.length)
            {
                // posters += <SwiperSlide><img className='H_Movie_Page_Slider' src={`1images/slider/${movies_detail[i].slider[j]}.jpg`} alt="" /></SwiperSlide>
            }
        }
    return posters
    }
}

export default Movie_Page_Poster