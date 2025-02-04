import React from "react";
import Alert from "../Alerts";
import clsx from "clsx";

interface AlertItem {
  id: string;
  variant: "error" | "warning" | "info" | "success";
  type: "filled" | "outlined" | "standard";
  position:
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
  autoDismiss?: boolean;
  dismissTime?: number;
}

interface AlertContainerProps {
  alerts: AlertItem[];
  removeAlert: (id?: string) => void;
}

const positionStyles = {
  top: "top-5 left-1/2 transform -translate-x-1/2 flex flex-col space-y-3",
  "top-right": "top-5 right-5 flex flex-col space-y-3",
  "top-left": "top-5 left-5 flex flex-col space-y-3",
  center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  "center-right": "top-1/2 right-5 transform -translate-y-1/2 flex flex-col space-y-3",
  "center-left": "top-1/2 left-5 transform -translate-y-1/2 flex flex-col space-y-3",
  bottom: "bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col space-y-3",
  "bottom-right": "bottom-5 right-5 flex flex-col space-y-3",
  "bottom-left": "bottom-5 left-5 flex flex-col space-y-3",
};

const AlertContainer: React.FC<AlertContainerProps> = ({ alerts, removeAlert }) => {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {Object.keys(positionStyles).map((position) => (
        <div
          key={position}
          className={clsx(
            "fixed z-50 pointer-events-auto",
            positionStyles[position as keyof typeof positionStyles]
          )}
        >
          {alerts
            .filter((alert) => alert.position === position)
            .map((alert) => (
              <Alert key={alert.id} {...alert} onClose={removeAlert} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default AlertContainer;
