import React, { useEffect } from "react";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";

interface AlertProps {
  id?: string;
  variant?: "error" | "warning" | "info" | "success";
  type?: "filled" | "outlined" | "standard";
  position?:
    | "top"
    | "top-right"
    | "top-left"
    | "center"
    | "center-right"
    | "center-left"
    | "bottom"
    | "bottom-right"
    | "bottom-left";
  title?: string;
  description?: string;
  onClose: (id?: string) => void;
  autoDismiss?: boolean;
  dismissTime?: number;
}

const variantStyles = {
  error: {
    filled: "bg-red-600 text-white",
    outlined: "border border-red-600 text-red-600",
    standard: "bg-red-100 text-red-700",
    icon: <FaExclamationCircle className="text-red-700 text-xl" />,
  },
  warning: {
    filled: "bg-yellow-500 text-white",
    outlined: "border border-yellow-500 text-yellow-600",
    standard: "bg-yellow-100 text-yellow-700",
    icon: <FaExclamationTriangle className="text-yellow-600 text-xl" />,
  },
  info: {
    filled: "bg-blue-500 text-white",
    outlined: "border border-blue-500 text-blue-600",
    standard: "bg-blue-100 text-blue-700",
    icon: <FaInfoCircle className="text-blue-600 text-xl" />,
  },
  success: {
    filled: "bg-green-500 text-white",
    outlined: "border border-green-500 text-green-600",
    standard: "bg-green-100 text-green-700",
    icon: <FaCheckCircle className="text-green-600 text-xl" />,
  },
};

const Alert: React.FC<AlertProps> = ({
  id,
  variant = "info",
  type = "filled",
  title,
  description,
  onClose,
  autoDismiss = false,
  dismissTime = 3000,
}) => {
  useEffect(() => {
    if (autoDismiss) {
      const timer = setTimeout(() => onClose(id), dismissTime);
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, dismissTime, id, onClose]);

  return (
    <div
      className={clsx(
        "w-full max-w-md p-4 rounded-lg shadow-lg flex items-start space-x-3 transition-all duration-500 animate-fadeIn animate-slideIn",
        variantStyles[variant][type]
      )}
    >
      {variantStyles[variant].icon}
      <div className="flex-1">
        {title && <h3 className="font-semibold">{title}</h3>}
        {description && <p className="text-sm">{description}</p>}
      </div>
      <button
        className="text-gray-500 hover:text-gray-900 transition-transform transform hover:scale-110"
        onClick={() => id ? onClose(id) : onClose()}
      >
        <IoMdClose className="text-lg" />
      </button>
    </div>
  );
};

export default Alert;
