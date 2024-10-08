import { useState, createContext, useContext } from "react";
import * as userService from '../services/userService.js';
import { toast} from 'react-toastify';
//import {userService} from '../services/userService.js';

const AuthContext = createContext(null);

export const AuthProvider = ({ children}) => {
    const [user, setUser] = useState(userService.getUser());
    console.log(user);

const login = async (email, password) => {
    try {
      const user = await userService.login(email, password);
      setUser(user);
      toast.success('Login Successful');
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const register = async (data) => {
    try {
      // console.log(data)
      const user = await userService.register(data);
      console.log(user)
      setUser(user);
      toast.success('Register Successful');
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const logout = () => {
    userService.logout();
    setUser(null);
    toast.success('Logout Successful');
  };

  const updateProfile = async user => {
    const updatedUser = await userService.updateProfile(user);
    toast.success('Profile Update Was Successful');
    if (updatedUser) setUser(updatedUser);
  };

  const changePassword = async passwords => {
    await userService.changePassword(passwords);
    logout();
    toast.success('Password Changed Successfully, Please Login Again!');
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, updateProfile, changePassword}}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);