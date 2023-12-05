import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { initPollsData } from './store/pollsDataSlice';

test('Render App', () => {
  const initialState = { ...initPollsData };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const view = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(view).toMatchSnapshot()

  const login = screen.getByText(/Login/i);
  const navBarHome = screen.getByText(/Home/i);
  const navBarLeaderboard = screen.getByText(/Leaderboard/i);
  const navBarCreateNewPoll = screen.getByText(/Create New Poll/i);
  expect(login).toBeInTheDocument();
  expect(navBarHome).toBeInTheDocument();
  expect(navBarLeaderboard).toBeInTheDocument();
  expect(navBarCreateNewPoll).toBeInTheDocument();
});
