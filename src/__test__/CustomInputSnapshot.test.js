import React from 'react';
import CustomInput from '../components/custom-input/index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const value = 'once';
  const tree = renderer
    .create(<CustomInput value={value} changeInput={() => console.log('11')} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});