import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACT,
	CLEAR_FILTER,
} from '../types';

export default (state, action) => {
	if (action.type === ADD_CONTACT) {
		return { ...state, contacts: [...state.contacts, action.payload] };
	}

	if (action.type === UPDATE_CONTACT) {
		return {
			...state,
			contacts: state.contacts.map((contact) =>
				contact.id === action.payload.id ? action.payload : contact,
			),

			filtered:
				state.filtered !== null
					? state.filtered.map((contact) =>
							contact.id === action.payload.id ? action.payload : contact,
					  )
					: null,
		};
	}
	if (action.type === DELETE_CONTACT) {
		return {
			...state,
			contacts: state.contacts.filter(
				(contact) => contact.id !== action.payload,
			),
			filtered:
				state.filtered !== null
					? state.filtered.filter((contact) => contact.id !== action.payload)
					: null,
		};
	}

	if (action.type === SET_CURRENT) {
		return { ...state, current: action.payload };
	}

	if (action.type === CLEAR_CURRENT) {
		return { ...state, current: null };
	}

	if (action.type === FILTER_CONTACT) {
		return {
			...state,
			filtered: state.contacts.filter((contact) => {
				const testString = `${contact.name}${contact.email}`.toLowerCase();
				return testString.includes(action.payload.toLowerCase());
			}),
		};
	}

	if (action.type === CLEAR_FILTER) {
		return { ...state, filtered: null };
	}

	return state;
};
