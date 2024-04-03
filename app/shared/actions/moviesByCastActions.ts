import { TYPE } from "./actions";

export const getMoviesByCast = (id) => {
    return {type: TYPE.GET_MOVIES_BY_CAST, data: id}
}

export const getMoviesByCastSuccess = (data) => {
    return {type: TYPE.GET_MOVIES_BY_CAST_SUCCESS, data}
}

export const getMoviesByCastFailure = () => {
    return {type: TYPE.GET_MOVIES_BY_CAST_FAILURE }
}

export const getMoviesCredits = (id) => {
    return {type: TYPE.GET_MOVIES_CREDITS, data: id}
}

export const getMoviesCreditsSuccess = (data) => {
    return {type: TYPE.GET_MOVIES_CREDITS_SUCCESS, data}
}

export const getMoviesCreditsFailure = () => {
    return {type: TYPE.GET_MOVIES_CREDITS_FAILURE }
}