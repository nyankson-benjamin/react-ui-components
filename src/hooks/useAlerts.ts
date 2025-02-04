import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type AlertType = {
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
};

type AddAlertInput = Omit<AlertType, "id">;

const useAlerts = () => {
  const [alerts, setAlerts] = useState<AlertType[]>([]);

  // Add alert function
  const addAlert = (alert: AddAlertInput) => {
    setAlerts((prev) => [...prev, { id: uuidv4(), ...alert }]);
  };

  // Remove alert function
  const removeAlert = (id?: string) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  return { alerts, addAlert, removeAlert };
};

export default useAlerts;
