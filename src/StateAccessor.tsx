import React from 'react';
import { NOT_SIGNED_IN_USER_USER_EMAIL, NOT_SIGNED_IN_USER_USER_ID } from './utils/Constants';

interface State {
    userId: number;
    setUserId: (userId: number) => void;
    userName: string;
    setUserName: (userName: string) => void;
    userEmail: string;
    setUserEmail: (userEmail: string) => void;
  }
  
const noop = () => {};

const StateAccessor: React.Context<State> = React.createContext<State>({
  // state properties and default values
  userId: NOT_SIGNED_IN_USER_USER_ID,
  setUserId: noop,
  userName: '',
  setUserName: noop,
  userEmail: NOT_SIGNED_IN_USER_USER_EMAIL,
  setUserEmail: noop,
});

  

export default StateAccessor;
