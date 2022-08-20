import * as api from '../api'

export const getPosts = () => async(dispatch) => {

  try {
    const {data} = await api.fetchPosts()
    dispatch({ type: 'FETCH_ALL', payload: data})

  } catch (error) {
    console.log(error.message)
  }

}

//function to send a post request to the server
export const createPost = (post) => async(dispatch) => {
  try {
    const { data } = await api.createPost(post)
    dispatch({ type:'CREATE', payload:data })
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const {data} = await api.updatePost(id, post)
    dispatch({ type: 'UPDATE', payload: data})
  } catch (error) {
    console.log(error.message)
  }
}

export const deletePost = (id, post) => async(dispatch) => {
  try {
    const {data} = await api.deletePost(id, post)
    // dispatch({ type: 'DELETE', payload: data})
  } catch (error) {
    console.log(error.message)
  }
}