import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from './services/firebase'

import Login from './components/pages/Login';

function App() {
	const [user, loading] = useAuthState(auth);
	const [userChat, setUserChat] = useState(null);

	useEffect(() => {
		if (user) {
			db.collection("users").doc(user.uid).set({
				email: user.email,
				photoURL: user.photoURL,
			});
		}
	}, [user]);

	if (!user) return <Login />;

	return (
		<>
			<h2>Web Chat</h2>
		</>
	)
}

export default App
