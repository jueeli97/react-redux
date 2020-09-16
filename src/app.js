import React, {Component} from "react";

import SongList from "./components/songList";
import SelectedSong from "./components/selectedSong";
class App extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <div className = "container">
                  <div className = "row">
                    <div className = "col-md-7">
                      <SongList />
                    </div>
                    <div className = "col-md-5">
                      <SelectedSong />
                    </div>
                  </div>
                </div>
                
                
            </React.Fragment>
        )
    }
}

export default App;