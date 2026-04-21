import React from 'react';
import App from '../App';
import { render } from '@testing-library/react-native';

describe('App Render Succesfully', () => {
  test('App Render', () => {
    render(<App />);
  });
  test('Snapshot Match', () => {
    const snapshot = render(<App />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
