import React, {Component} from "react";
import { connect } from "react-redux";

import Song from "../actions/index";
class SongList extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        {
                            this.props.list.map(data =>(
                                <div className="col-md-8" key = {data.id} style = {{margin : "10px"}} >
                                  <div className="card text-left">
                                    <div className="card-body">
                                      <h4 className="card-title">{data.name}
                                      </h4>
                                      <p className="card-text">{data.singer}</p>
                                      <span>{data.duration}</span>
                                    </div>
                                    <button type="button" style = {{marginLeft : "50px"}} 
                                    className="btn btn-outline-primary col-md-8"
                                    onClick = {()=>this.props.Song(data)}
                                    >Selected Song</button>
                                  </div>
                                </div>
                            ))
                            
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state)=>{
    //console.log(state);
    return {list : state.list};
}
export default connect(mapStateToProps,{Song})(SongList); // SongList is react type and mapStateToProps is redux type 