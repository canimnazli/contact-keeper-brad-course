import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS,
} from '../types';

export default (state, action) => {
	if (action.type === REGISTER_SUCCESS || action.type === LOGIN_SUCCESS) {
		localStorage.setItem('token', action.payload.token);
		return {
			...state,
			...action.payload,
			isAuthenticated: true,
			loading: false,
		};
	}

	if (
		action.type === REGISTER_FAIL ||
		action.type === AUTH_ERROR ||
		action.type === LOGIN_FAIL
	) {
		localStorage.removeItem('token');

		return {
			...state,
			token: null,
			isAuthenticated: false,
			loading: false,
			user: null,
			error: action.payload,
		};
	}

	if (action.type === USER_LOADED) {
		return {
			...state,
			user: action.payload,
			isAuthenticated: true,
			loading: false,
		};
	}

	if (action.type === CLEAR_ERRORS) {
		return {
			...state,

			error: null,
		};
	}
	return state;
};
