import { useState } from "react";
import { useAuthContext } from "../context/Authentication.jsx";
import toast from "react-hot-toast";

const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();
	const logout = async () => {
		setLoading(true);
		try {
			const res = await fetch("http://43.204.147.252:3000/api/auth/Logout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
			});
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.removeItem("token");
			setAuthUser(null);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
	return { loading, logout };
};
export default useLogout;