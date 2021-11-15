import React, { useReducer } from 'react';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { v4 as uuidv4 } from 'uuid';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACT,
	CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: 'nazli',
				email: 'nazli@gmail.com',
				phone: '11111111',
				type: 'personal',
			},
			{
				id: 2,
				name: 'celal',
				email: 'nazcccli@gmail.com',
				phone: '133331111',
				type: 'professional',
			},
			{
				id: 3,
				name: 'mehmet',
				email: 'nazaaali@gmail.com',
				phone: '116666111111',
				type: 'personal',
			},
		],
		current: null,
		filtered: null,
	};

	const [state, dispach] = useReducer(contactReducer, initialState);

	//add contact
	const addContact = (contact) => {
		contact.id = uuidv4();
		dispach({ type: ADD_CONTACT, payload: contact });
	};

	//delete contact
	const deleteContact = (id) => {
		dispach({ type: DELETE_CONTACT, payload: id });
	};

	//set current contact
	const setCurrent = (contact) => {
		dispach({ type: SET_CURRENT, payload: contact });
	};

	//clear current contact
	const clearCurrent = () => {
		dispach({ type: CLEAR_CURRENT });
	};

	//update contact
	const updateContact = (contact) => {
		dispach({ type: UPDATE_CONTACT, payload: contact });
	};

	//filter contacts
	const filterContact = (text) => {
		dispach({ type: FILTER_CONTACT, payload: text });
	};

	//clear filter
	const clearFilter = () => {
		dispach({ type: CLEAR_FILTER });
	};

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				filtered: state.filtered,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
				filterContact,
				clearFilter,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
