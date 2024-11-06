import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/Authentication";
const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();
	const login = async (username, password) => {
		const success = handleInputErrors(username, password);
		console.log(username, password)
		if (!success) return;
		setLoading(true);
		try {
			const response = await fetch("http://43.204.147.252:3000/api/auth/Login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
			},
				
			);
			const data = await response.json();
		
			const token =data.token 
			console.log("this is the token from the frontend side"+data )
			// set.localStorage("token",token )
			localStorage.setItem("token",token)
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
	return { loading, login };
};
export default useLogin;
function handleInputErrors(username, password) {
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}
	return true;
}
