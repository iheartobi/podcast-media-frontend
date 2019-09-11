import ls from 'local-storage'

// export function getUser(){
    
//     const jwt = ls.get('jwt')
   
//     console.log("Find Me",this.props.user.id)
//     return fetch(`SHOWUSER/${jwt}`, {
//         method: "GET", 
//         headers: {
//             "Content-Type": "application/json",
//             "accept": "application/json",
//             Authorization: `Bearer ${jwt}`
//         }
//     })
//     .then(res => res.json())
// }

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
