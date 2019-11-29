import React from 'react';
import { connect } from "react-redux";

const alterate = (name,id,currentId)=>{
    return {
        type: 'ALTERAR_VIDEO',
        name,
        id,
        currentId,
    }
}

const MenuVideo = ({videoList,videoName,dispatch})=>(
    <ul className='videos' id='videos'>
        <li className='videoItem'><h2>PLAYLIST</h2></li>
        {videoList.map(item=>(
            <li className={'videoItem '+((item.name === videoName)?'videoChanged':'')} key={item.id} onClick={() => dispatch(alterate(item.name,item.videoId,item.id))}>{item.name}</li>
        ))}
    </ul>
);

export default connect(state=>({videoList: state.videoList,videoName:state.nameChanged}))(MenuVideo);