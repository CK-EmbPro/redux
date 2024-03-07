import {call, put} from 'redux-saga/effects'
import { getPostsFailure, getPostsRequestSent, getPostsSuccess } from '../../posts/postsActions'
import { getUserAsyncCall } from '../api-calls/posts'


// This is a handler

export function* handleGetPostsRequest(action) {
        try{
            yield put(getPostsRequestSent())
            // first we set loading to true and then call the api
            const {data} = yield call(getUserAsyncCall)
            console.log("the handler of the side effect",data)

            // if success, we can call our actions (dispatch)

            yield put(getPostsSuccess(data))
        }catch(error){
            const errorMessage = error.message
            yield put(getPostsFailure(errorMessage))
        }   
        }   