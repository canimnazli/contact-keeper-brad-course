import React, { useContext, useEffect } from 'react';
import Contacs from '../contacts/Contacs';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="grid-2">
			<div>
				<ContactForm></ContactForm>
			</div>

			<div>
				<ContactFilter></ContactFilter>
				<Contacs></Contacs>
			</div>
		</div>
	);
};

export default Home;
