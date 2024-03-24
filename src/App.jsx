import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from './services/firebase'


import Login from './components/pages/login/Login';
import Home from './components/pages/home/Home';
import Loading from './components/atoms/Loading';

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
	if (loading) return <Loading />;
	return (
		<Home setUserChat={setUserChat} userChat={userChat}/>
	)
}

export default App
