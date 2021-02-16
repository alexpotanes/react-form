import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import themes from '../../../utils/themes';

import './style.css';

export const Input = ({ type, placeholder, required, focused, value, theme, disabled, tabIndex, autocomplete, onChange }) => {

  const onChangeInput = useCallback(
    e => {
      const value = e.target.value;
      return onChange(value);
    }, [onChange]
  );

  return (
    <div className={cn('Input', themes('Input', theme))}>
      <input
        className="Input__input"
        value={value}
        type={type}
        placeholder={placeholder}
        tabIndex={tabIndex}
        disabled={disabled}
        required={required}
        autoFocus={focused}
        autoComplete={autocomplete ? 'on' : 'off'}
        onChange={onChangeInput}
      />
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.node.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  focused: PropTypes.bool,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  autocomplete: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

Input.defaultProps = {
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  disabled: false,
  type: 'text',
};