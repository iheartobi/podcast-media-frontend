import ls from 'local-storage'

export const getPosts = () => (dispatch) =>{
    dispatch({type: 'LOADING_DATA'});
    return fetch(GETPOSTS)
    .then(res => res.json())
    .then(data =>{
        dispatch({type: 'GET_POSTS', data})
    })
    .catch(err => {
        dispatch({type: 'GET_POSTS', payload: []})
    })
} 

export const likePost = (post) => (dispatch) =>{

    return fetch(`GETPOSTS/${id}`)
    .then(res => res.json())
    .then(data => {
        dispatch({type: 'LIKE_POST', data})
    })
    .catch(err => console.log(err))

}
export const unLikePost = (post) => (dispatch) =>{

    return fetch(`GETPOSTS/${id}`)
    .then(res => res.json())
    .then(data => {
        dispatch({type: 'UNLIKE_POST', data})
    })
    .catch(err => console.log(err))

}
