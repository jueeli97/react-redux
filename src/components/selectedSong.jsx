import React from "react";
import { connect } from "react-redux";
const SelectedSong = (props)=>{

    if(!props.selectedsong){return <h1>LOADING....</h1>};

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div div className ="card text-left">
                                    <div className="card-body">
                                      <h4 className="card-title">{props.selectedsong.name}
                                      </h4>
                                      <p className="card-text">{props.selectedsong.singer}</p>
                                      <span>{props.selectedsong.duration}</span>
                                    </div>
                    </div>                  
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    console.log(state)
    return {selectedsong : state.selectedsong}
}

export default connect(mapStateToProps)(SelectedSong);