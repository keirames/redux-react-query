import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { checkSession } from '../features/user/userSlice';

const Login = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.user.status);
  const state = useAppSelector((state) => state);

  const handleClick = () => {
    dispatch(checkSession());
  };

  if (status === 'loading') return <p>Loading...</p>;

  return (
    <div>
      <button onClick={handleClick}>Login</button>
      <p>
        <strong>REDUX STATE: </strong>
        {JSON.stringify(state, null, 2)}
      </p>
    </div>
  );
};

export default Login;
