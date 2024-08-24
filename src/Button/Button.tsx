import React from 'react';
import './button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * What background color to use
   */
  color?: 'primary' | 'secondary';
  /**
   * How large should the button be?
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Button contents
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  children = "Button",
  color = "primary",
  size = "lg",
  ...props
}) => {
  return (
    <button
      type="button"
      className={`storybook-button storybook-button--${size} storybook-button--${color}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: 'primary',
  size: 'lg',
  children: "Button",
};