import "./App.css";
import Alert from "./components/Alert";
import Abouttext from "./components/Abouttext";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode is now enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is now enabled", "success");
    }
  };


  const router = createBrowserRouter([
    {
      path: "/abouttext",
      element:(
       <> 
       <Alert Alert={alert} />
      <Abouttext mode={mode}/>
      </>

      ) ,
    },
    {
      path: "/",
      element: (
        <>
          <Alert Alert={alert} />{" "}
          <Textform
            showAlert={showAlert}
            heading="TextUtils- Word Counter, Character Counter, Remove extra spaces"
            mode={mode}
          />
        </>
      ),
    },
  ]);

  return (
    <>
    
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <RouterProvider router={router} />

      {/* <div className="container my-3"></div>
      <Alert Alert={alert}/>
      <Textform
            showAlert={showAlert}
            heading="Enter the Text to Analyze"
            mode={mode}
          /> */}
    </>
  );
}

export default App;
