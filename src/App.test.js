import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {Provider} from 'react-redux'


test('App component renders without crashing', () => {
  render(<App />);
});
