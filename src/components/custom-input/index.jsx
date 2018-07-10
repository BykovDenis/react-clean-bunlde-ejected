import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';

function CustomInput(props) {
  const inputChangeHandler = (evt) => {
    const target = evt.target;
    props.changeInput(target.value);
  };
  return (
    <Fragment>
      <Input
        type="text"
        defaultValue={props.value}
        value={props.value}
        onChange={inputChangeHandler}
        className="custom-input"
      />
    </Fragment>
  );
}

CustomInput.defaultValue = {
  value: 'once',
};

CustomInput.propTypes = {
  value: PropTypes.string,
  changeInput: PropTypes.func,
};

export default CustomInput;