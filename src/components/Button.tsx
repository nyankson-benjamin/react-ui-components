import React, { useCallback } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "danger"; // Custom color prop
  size?: "small" | "medium" | "large"; // Custom size prop
  variant?: "contained" | "outlined" | "text"; // Custom variant
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  onClick,
  color = "primary", // Default color
  size = "medium",   // Default size
  variant = "contained", // Default variant
  children,
  ...props
}, ref) => {
  // Event handler using useCallback
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      console.log(`Button clicked with color: ${color}`);
      if (onClick) onClick(e);
    },
    [color, onClick]
  );

  const buttonClassNames = `bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded ${
    size === "small" ? "text-sm" : size === "large" ? "text-lg" : "text-base"
  } ${variant === "outlined" ? "border-2" : ""} ${variant === "text" ? "bg-transparent" : ""}`;

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={buttonClassNames}
      {...props} // Spread the remaining props (e.g., disabled, type, etc.)
    >
      {children}
    </button>
  );
});

Button.displayName = "Button"; // To give the button a name in dev tools

export default Button;
