import { useContext, createContext, useState, useEffect } from "react";
import authService from "../Appwrite/auth";
// import { account } from "../Appwrite/";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const signup = async (email, password, name) => {
    try {
      const userAccount = await authService.createAccount(email, password, name);
      if(userAccount.status === "error"){
        console.log("error")
        alert("User already exists")
        return null
      }
        setIsUserLoggedIn(true);
        setUserData(userAccount);
        login(email, password)
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      const userAccount = await authService.login(email, password);
      if(userAccount.status === "error"){
        console.log("Login error")
        alert("Invalid credentials")
        return null
      }
      setIsUserLoggedIn(true);
      setUserData(userAccount);
      return userAccount;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };



  const logout = async () => {
    try {
      await authService.logout(); // Assuming your logout method in authService returns a success response
      setIsUserLoggedIn(false);
      setUserData({});
    } catch (error) {
      console.error('Error logging out:', error);
      throw error;
    }
  };

  const checkUserExists = () => {
    return isUserLoggedIn;
  };

  const getUser = async ()=>{
    return authService.getUser();
  }

  return (
    <UserContext.Provider
      value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
        userData,
        setUserData,
        signup,
        logout,
        login,
        checkUserExists,
        getUser
        // Add other methods to the context value
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};