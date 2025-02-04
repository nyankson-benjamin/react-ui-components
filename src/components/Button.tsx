import React, { useCallback } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "danger"; // Custom color prop
  size?: "small" | "medium" | "large"; // Custom size prop
  variant?: "contained" | "outlined" | "text"; // Custom variant
}

// Define Tailwind class mappings
const colorClasses: Record<string, string> = {
  primary: "bg-blue-500 hover:bg-blue-700",
  secondary: "bg-gray-500 hover:bg-gray-700",
  danger: "bg-red-500 hover:bg-red-700",
};

const sizeClasses: Record<string, string> = {
  small: "text-sm py-1 px-2",
  medium: "text-base py-2 px-4",
  large: "text-lg py-3 px-6",
};

const variantClasses: Record<string, string> = {
  contained: "text-white font-bold rounded",
  outlined: "border-2 border-current text-white bg-transparent",
  text: "bg-transparent text-white",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, color = "primary", size = "medium", variant = "contained", children, ...props }, ref) => {
    // Event handler using useCallback
    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(`Button clicked with color: ${color}`);
        if (onClick) onClick(e);
      },
      [color, onClick]
    );

    // Generate class names
    const buttonClassNames = `${colorClasses[color]} ${sizeClasses[size]} ${variantClasses[variant]}`;

    return (
      <button ref={ref} onClick={handleClick} className={buttonClassNames} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button"; // To give the button a name in dev tools

export default Button;
