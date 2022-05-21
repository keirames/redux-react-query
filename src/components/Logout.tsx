import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { logout } from '../features/user/userSlice';

const Logout = () => {
  const dispatch = useAppDispatch();

  return <button onClick={() => dispatch(logout())}>logout</button>;
};

export default Logout;
