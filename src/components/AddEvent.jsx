import React, {Component} from 'react';

class AddEvent extends Component{
  state = {
    showHide:'none'
  };

  open = () =>{
    this.setState({
      showHide:'block'
    });
  };

  close = () =>{
    this.setState({
      showHide:'none'
    });
  };

  render(){
    return(
      <div>
        <button style={{position:'absolute', top:0, right:0, margin:5}} onClick={this.open}>
          Add
        </button>
        <div id='myModal' className='modal' style={{display:this.state.showHide, position:'absolute', zindex:1, left:0, top:0, width:'100%', height:'100%', overflow:'auto', backgroundcolor:'rgb(0,0,0)', backgroundcolor:'rgba(0,0,0,.4)'}}>
          <div className='modal-content' style={{padding:5, width:'100%', height:'100%', position:'absolute'}}>
            <span onClick={this.close} className='close' style={{color:'#aaa',float:'right', fontsize:28, fontweight:'bold'}}>
              &times;
            </span>
            to be completed.
          </div>
        </div>
      </div>
    );
  }
}
