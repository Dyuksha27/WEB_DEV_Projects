import React, { useState } from "react";

function Safetybtn() {
  const [permissionGranted, setPermissionGranted] = useState(false);

  function askNotificationPermission() {
    //Check if the browser supports notifications

    if (!("Notification" in window)) {
      console.log("This browser does not support notifications.");
      return;
    }
    Notification.requestPermission().then((permission) => {
      //set the button to show or hidden , depending on what the user answers.
      if (permission === "granted") {
        setPermissionGranted(true);
        alert("Notification Sent");
      } else {
        console.log("Notification permission not granted.");
      }
    });
  }
  return (
    <div className="sapr">
      <button
        id="enable"
        className="press"
        type="button"
        onClick={askNotificationPermission}
      >
        {" "}
        Press{" "}
      </button>
    </div>
  );
}

export default Safetybtn;
