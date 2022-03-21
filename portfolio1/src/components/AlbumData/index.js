import React from "react";
import AlbumItem from "../AlbumItem"

function AlbumData(props) { // functional component used to move data to the album creating class
        return (
            <div>
                <AlbumItem photos={props.data}></AlbumItem>
            </div>
        )  
}

export default AlbumData;