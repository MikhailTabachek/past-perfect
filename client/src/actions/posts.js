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
    dispatch({ type: 'CREATE', payload:data })
  } catch (error) {
    console.log(error)
  }
}