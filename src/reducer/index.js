
import { combineReducers } from "redux";


/// SONG LIST ----> By default ----

const SongLists = ()=>{

    return [
        {
            id : 1,
            name : "Smells Like Teen Spirit",
            singer : " Nirvana",
            duration : "4.09"
        },
        {
            id : 2,
            name : "Imagine",
            singer : "John Lennon",
            duration : "4.30"
        },
        { 
            id : 3,
            name : "Billie Jean",
            singer : "Michael Jackson",
            duration : "3.40"
        },
        {
            id : 4,
            name : "Shake It Off",
            singer : "Taylor Swift",
            duration : "3.30"
        },
    ];
};

const SelectedSongList = (state = null, action)=>{
    switch (action.type) {
        case "SONG_LIST":
            return action.paylod
            
        default:
            return state;
    }
    
};

const Store = combineReducers({
    list : SongLists,
    selectedsong : SelectedSongList
});

export default Store;