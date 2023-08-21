import { handleAction } from "redux-actions";

import * as api from '../lib/api';
//액션 타입을 선언합니다.
//한 요청당 세 개를 만듭니다.

const GET_POST ='sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS ='sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';


//thunk 함수를 생성합니다.
//thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치 합니다.

export const getPost = id => async dispatch => {
    dispatch({type:GET_POST});
    try {
        const response = await api.getPost(id);
        dispatch({
            type:GET_POST_SUCCESS,
            payload: response.data
        });//요쳥성공

    }
    catch (e) {
        dispatch({
            type:GET_POST_FAILURE,
            payload: e,
            error: true
        });
        throw e; //나중에 컴포넌트 단에서 에러를 조회할 수 있게 해줌
    }

}

export const getUsers = () => async dispatch => {
    dispatch({type: GET_USERS});// 요청을 시작한것을 알립니다.
    try{
        const response = await api.GET_USERS();
        dispatch({
            type: GET_USERS_SUCCESS,
            payload: response.data,

        });

    }
    catch(e){
        dispatch({
            type:GET_USERS_FAILURE,
            payload:response.data,
            error: true,
        });
        throw e;

    }
}

//초기상태를 선언합니다.
const initialState = {
    loading: {
        GET_POST:false,
        GET_USERS:false,
    },
    post:null,
    users:null,
};

const sample = handleAction(
    {
        [GET_POST]: state => ({
            ...state,
            loading:{
                ...state.loading,
                GET_POST:true
            }
        }),

        [GET_POST_SUCCESS]:(state, action) => ({
            ...state,
            loading:{
                ...state.loading,
                GET_POST:false,
            },
            post:action.payload
        }),
        [GET_POST_FAILURE]:(state, action) => ({
            ...state,
            loading:{
                ...state.loading,
                GET_POST:false,
            },
            post:action.payload
        }),
        [GET_USERS]:(state) => ({
            ...state,
            loading:{
                ...state.loading,
                GET_POST:true,
            },
            post:action.payload
        }),
        [GET_USERS_SUCCESS]:(state, action) => ({
            ...state,
            loading:{
                ...state.loading,
                GET_POST:false,
            },
            post:action.payload
        }),
        [GET_USERS_FAILURE]:(state, action) => ({
            ...state,
            loading:{
                ...state.loading,
                GET_POST:false,
            },
            post:action.payload
        }),
        initialState
    }
)

export default sample;