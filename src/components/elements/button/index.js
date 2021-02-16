import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import themes from '../../../utils/themes';

import './style.css';

export const Button = ({ theme, title, type, children, disabled, onClick }) => {

  const onClickButton = useCallback(
    e => {
      if (onClick) {
        e.preventDefault();
        onClick();
      }
    }, [onClick]
  );

  return (
    <button
      type={type}
      className={cn(`Button`, themes('Button', theme))}
      title={title}
      onClick={onClickButton}
      disabled={disabled}
    >
      {children}
    </button>
  );
}


Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
  title: PropTypes.string,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  theme: '',
};