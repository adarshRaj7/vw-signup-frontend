import { useState } from "react";
const initState = {
  Name: "",
  Email: "",
  Username: "",
  Password: "",
  Location: "",
  Interests: {
    newCar: false,
    exchangeCar: false,
    browsing: false,
  },
};

export const useAuth = () => {
  const [auth, setAuth] = useState(initState);

  // useEffect(() => {
  // const checkAuthStatus = async () => {
  // 	setAuth((prev) => ({ ...prev, isValidating: true }));
  // 	const session_active = await AuthService.isAuthenticated();
  // 	if (session_active) {
  // 		setAuth({
  // 			isAuthenticating: false,
  // 			isAuthenticated: true,
  // 			isValidating: false,
  // 		});
  // 	} else {
  // 		setAuth({
  // 			isAuthenticating: false,
  // 			isAuthenticated: false,
  // 			isValidating: false,
  // 		});
  // 	}
  // };

  // checkAuthStatus();
  // }, []);
  const setName = (name) => {
    setAuth({ ...auth, Name: name });
  };
  const setEmail = (email) => {
    setAuth({ ...auth, Email: email });
  };
  const setUsername = (username) => {
    setAuth({ ...auth, Username: username });
  };
  const setPassword = (password) => {
    setAuth({ ...auth, Password: password });
  };
  const setLocation = (location) => {
    setAuth({ ...auth, Location: location });
  };

  const setInterestNewCar = (newCar) => {
    setAuth({ ...auth, Interests: { ...auth.Interests, newCar } });
  };
  const setInterestExchangeCar = (exchangeCar) => {
    setAuth({ ...auth, Interests: { ...auth.Interests, exchangeCar } });
  };
  const setInterestBrowsing = (browsing) => {
    setAuth({ ...auth, Interests: { ...auth.Interests, browsing } });
  };

  return {
    auth,
    setName,
    setEmail,
    setUsername,
    setPassword,
    setLocation,
    setInterestNewCar,
    setInterestExchangeCar,
    setInterestBrowsing,
  };
};
