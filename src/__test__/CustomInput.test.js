import React from 'react';
import CustomInput from '../components/custom-input/index';
import { shallow, wrapper } from 'enzyme';
import '../setupTests';

// *********************************
describe('>>>CustomInput --- Shallow Render REACT COMPONENTS', ()=> {
  let wrapper;
  const value = 'once';

  beforeEach(() => {
    wrapper = shallow(<CustomInput value={value} changeInput={() => console.log('11')} />);
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('+++ contains output', () => {
    expect(wrapper.find('.custom-input').prop('value')).toEqual(value);
  });

});