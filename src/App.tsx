import React, { useState } from "react";
import AlertContainer from "./components/Alerts/stacked/AlertsContainer";
import { v4 as uuidv4 } from "uuid";
import { Alert } from "./components/Alerts";

const App: React.FC = () => {
  const [alerts, setAlerts] = useState<
    {
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
    }[]
  >([]);

  // Function to add alerts
  const addAlert = (alert: Omit<(typeof alerts)[number], "id">) => {
    setAlerts((prev) => [...prev, { id: uuidv4(), ...alert }]);
  };

  // Function to remove alerts
  const removeAlert = (id?: string) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  const [showAlert, setShowAlert] = useState(false);
  return (
    <div className="p-8">
      <AlertContainer alerts={alerts} removeAlert={removeAlert} />

      <button onClick={() => setShowAlert(!showAlert)}>show</button>
      { showAlert && <Alert
        variant="success"
        type="filled"
        position="top-right"
        title="Success!"
        description="Your changes have been saved successfully."
        onClose={() => setShowAlert(false)}
        autoDismiss={true}
        dismissTime={5000}
      />}
      <button
        onClick={() =>
          addAlert({
            variant: "success",
            type: "filled",
            position: "top-right",
            title: "Success!",
            description: "Your action was successful.",
            autoDismiss: true,
            dismissTime: 5000,
          })
        }
        className=" px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
      >
        Show Alert
      </button>
    </div>
  );
};

export default App;
