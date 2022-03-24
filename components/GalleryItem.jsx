import React, { useState } from "react";

function GalleryItem (props) {
    let [view, setView] = useState(false)
    
    const simpleView = (
        <div>
            <div>
                <img src={props.song.artworkUrl100} alt={`Image of ${props.song.trackName} track cover art.`}/>
                <h3>{props.song.trackName}</h3>
                <h4>{props.song.collectionName}</h4>
            </div>
        </div>
    )

    const detailedView = (
        <div>
            <div>
                <img src={props.song.artworkUrl100} alt={`Image of ${props.song.trackName} track cover art.`}/>
                <h3>{props.song.trackName}</h3>
                <h4>{props.song.collectionName}</h4>
                <h4>{props.song.primaryGenreName}</h4>
                <h4>{props.song.releaseDate}</h4>
            </div>
        </div>
    )

    return (
    <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
        <p>{props.title}</p>
        {view ? detailedView : simpleView}
    </div>)
}

export default GalleryItem