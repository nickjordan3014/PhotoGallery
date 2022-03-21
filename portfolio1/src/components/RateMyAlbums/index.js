import React from 'react';
import './style.css'
export default function RateMyAlbums() {
    return (
        <div className='formStyle'>
            <form action='' method='POST'>
            <p>Which one of my photo albums is your favorite?</p>
            <input type="radio" id="woods" name="fav_album" value="Woods"/>
            <label for="woods"> The Woods</label><br/>
            <input type="radio" id="beach" name="fav_album" value="Beach"/>
            <label for="beach"> The Beach</label><br/>
            <input type="radio" id="lake" name="fav_album" value="Lake"/>
            <label for="lake"> The Lake</label><br/>

            <p>Tell me what you like or dislike about my photos?</p>
            <input className='textbox'></input><br/>

            <button type="button" className='submitButton'>Submit</button>
        </form>
    </div> 
    )
}