import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { Box, Grid } from "@mui/material";
import "./App.css";
import BlackButton from "./BlackButton";
import applemusiclogo from "./imgs/applemusiclogo.png";
import tidallogo from "./imgs/tidallogo.png";
import spotifylogo from "./imgs/spotifylogo.png";
/* */
function App() {
  const buttonbuttonInputs = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "CE",
    "0",
    "AC",
  ];
  const [calcOutput, setCalcOutput] = useState("0");
  const [addedVal, setAddedVal] = useState(0);
  useEffect(() => {
    setAddedVal(parseInt(calcOutput) + parseInt(calcOutput));
  }, [calcOutput]);
  return (
    <div className="app-container">
      <h1 style={{ justifyContent: "center", textAlign: "center" }}>
        Number of Streams
      </h1>
      <div className={"calc-cont"}>
        <Grid container spacing={1.5}>
          <Grid item xs={9}>
            <Grid
              container
              spacing={1}
              justifyContent="center"
              alignItems="center"
              sx={{ paddingLeft: 2 }}
            >
              {buttonbuttonInputs.map((buttonInput, index) => (
                <Grid item xs={4} key={index}>
                  <BlackButton
                    buttonText={buttonInput}
                    high={60}
                    onClick={() =>
                      buttonInput === "AC"
                        ? setCalcOutput("0")
                        : calcOutput === "0" && buttonInput !== "CE"
                        ? setCalcOutput(buttonInput)
                        : buttonInput === "CE" &&
                          (calcOutput.length === 1 || calcOutput.length === 0)
                        ? setCalcOutput("0")
                        : buttonInput === "CE" && buttonInput.length >= 2
                        ? setCalcOutput(calcOutput.slice(0, -1))
                        : buttonInput !== "CE" && buttonInput !== "AC"
                        ? setCalcOutput(calcOutput + buttonInput)
                        : null
                    }
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={1} style={{ textAlign: "center" }}>
            <Grid
              container
              spacing={0.5}
              direction="column"
              alignItems="center"
            >
              <Grid item>
                <img
                  src={applemusiclogo}
                  className="logo-buttons"
                  onClick={() => setCalcOutput("0")}
                ></img>
              </Grid>
              <Grid item>
                <img
                  src={tidallogo}
                  className="tidal-logo"
                  onClick={() => setCalcOutput("0")}
                ></img>
              </Grid>
              <Grid item>
                <img
                  src={spotifylogo}
                  className="logo-buttons"
                  onClick={() => setCalcOutput("0")}
                ></img>
              </Grid>
              <Grid item>
                <img
                  src={spotifylogo}
                  className="logo-buttons"
                  onClick={() => setCalcOutput("0")}
                ></img>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="calc-container2">
        <h1 className="calc-output">{calcOutput}</h1>
      </div>
      <h2>{addedVal}</h2>
    </div>
  );
}

export default App;
