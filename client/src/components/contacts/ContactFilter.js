import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import { CLEAR_CURRENT } from '../../context/types';

const ContactFilter = () => {
	const contactContext = useContext(ContactContext);
	const { filterContact, clearFilter, filtered, clearCurrent } = contactContext;

	const text = useRef('');
	console.log(text.current.value);

	useEffect(() => {
		if (filtered === null) {
			text.current.value = '';
		}
	});

	const onChange = (e) => {
		if (text.current.value) {
			filterContact(e.target.value);
			clearCurrent();
		} else {
			clearFilter();
		}
	};

	return (
		<form>
			<input
				ref={text}
				type="text"
				placeholder="Filter Contacts..."
				onChange={onChange}
			/>
		</form>
	);
};

export default ContactFilter;
