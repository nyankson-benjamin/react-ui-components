import React, { useState } from "react";
import AlertContainer from "./components/Alerts/stacked/AlertsContainer";
import { Alert } from "./components/Alerts";
import { useAlerts } from "./hooks";
import { Button } from "./components";

const App: React.FC = () => {

  const {alerts, addAlert ,removeAlert} = useAlerts()
  
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div className="p-8">
      <AlertContainer alerts={alerts} removeAlert={removeAlert} />
<div className="flex items-center justify-between">
<p>hello</p>
<Button>Heloooo</Button>
<p>hello</p>
</div>
      <button onClick={() => setShowAlert(!showAlert)}>show</button>
      { showAlert && <Alert
        variant="success"
        type="filled"
        position="top-left"
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
