import React from 'react';
import YouTube from 'react-youtube';
import {connect} from 'react-redux';

const rootAlternate = ()=>{
  document.getElementById('body').style.backgroundColor = '#212121';
  document.getElementById('body').style.color = '#dfe6e9';
}
const rootAlternateReverse = ()=>{
  document.getElementById('body').style.backgroundColor = '#dfe6e9';
  document.getElementById('body').style.color = '#2d3436';
}
const alterate = (id)=>{
  return {
      type: 'PROXIMO_VIDEO',
      id,
  }
}

const Video=({opts,videoId,videoName,id, dispatch})=>(
    <div className='videoController'>
      <YouTube
        className='video'
        videoId={videoId}
        opts={opts}
        onPlay={rootAlternate}
        onPause={rootAlternateReverse}
        onEnd={()=>dispatch(alterate(id))}
      />
      <h1 className='videoName'>{videoName}</h1>
    </div>
);

export default connect(state=>({opts:state.opts,videoId:state.videoChanged,videoName:state.nameChanged,id:state.currentId}))(Video);
        
