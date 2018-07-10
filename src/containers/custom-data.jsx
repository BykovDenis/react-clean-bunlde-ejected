import React from 'react';
import PropTypes from 'prop-types';
import CustomInput from '../components/custom-input';


function CustomData(props) {
  function changeInput(value) {
    props.changeCustomInputValue(value);
  }
  return (
    <CustomInput
      value={props.customInputData}
      changeInput={changeInput}
    />
  );
}

CustomData.defaultvalue = {
  customInputData: '',
  changeCustomInputValue: () => {}
};

CustomData.propTypes = {
  customInputData: PropTypes.string.isRequired,
  changeCustomInputValue: PropTypes.func.isRequired
};

export default CustomData;