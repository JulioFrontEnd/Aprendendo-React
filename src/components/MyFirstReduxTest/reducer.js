import {createStore} from 'redux';

const INITIAL_STATE = {
    opts:{
        height: '600',
        width: '984,6153846153846',
        playerVars: {
        autoplay: 1,
        },
    },
    videoList:[
        {
            id: 1, 
            name:'Castle Of Glass (Linkin Park)',
            videoId:"ScNNfyq3d_w",
        },
        {
            id: 2, 
            name:'Chop Suey! (System Of a Down)',
            videoId:"CSvFpBOe8eY",
        },
        {
            id: 3, 
            name:'Nightmare (Avenged Sevenfold)',
            videoId:"94bGzWyHbu0",
        },
        {
            id: 4, 
            name:'Chosen Ones (Valley Of Wolves)',
            videoId:"yYm8mKbGRz0",
        },
        {
            id: 5, 
            name:'Day Of The Dead (Hollywood Undead)',
            videoId:"bl0e5DrYLyY",
        },
        {
            id: 6, 
            name:'MAXIMIZE (Amaranthe)',
            videoId:"nfk7YZJtmeo",
        },
    ],
    currentId: 1,
    videoChanged:'ScNNfyq3d_w',
    nameChanged:'Castle Of Glass (Linkin Park)'
};

function reducer(state = INITIAL_STATE,action){
    if(action.type === 'ALTERAR_VIDEO'){
        return{
            ...state,
            videoChanged: action.id,
            nameChanged: action.name,
            currentId: action.currentId
        }
    }
    if(action.type === 'PROXIMO_VIDEO'){
        let idFinal = action.id + 1;
        const itemValue = (id) =>{
            return state.videoList.find(item=>item.id === id) ;
        }

        const videoList = itemValue(idFinal);
        return {
            ...state,
            videoChanged: videoList.videoId,
            nameChanged: videoList.name,
            currentId: idFinal
        }
    }
    return state;
}

const Store = createStore(reducer);
export default Store;