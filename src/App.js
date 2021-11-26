import axios from "axios";
import { useState } from "react";
import rgbHex from "rgb-hex";
import { Message, Button, Container, GlobalStyle } from "./components/UI";
import { ColorCard, Color, Pallate } from "./components/ColorCard";
import Spinner from "./components/Spinner";

function App() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();
  const [colors, setColors] = useState([
    [103, 74, 179],
    [163, 72, 166],
    [159, 99, 196],
    [144, 117, 216],
    [206, 162, 215],
  ]);
  const url = "/api/";

  let data = {
    model: "default",
  };
  const [pallate, setPallate] = useState([]);
  const func = async () => {
    try {
      setLoading(true);
      const res = await axios.post(url, (data = JSON.stringify(data)));
      if (res.status !== 200) {
        throw new Error("Api Request Failed");
      }
      const result = await res.data.result;
      if (!result) {
        throw new Error("Failed to fetch");
      }
      console.log(result);
      setColors(result);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  document.body.onkeyup = function (e) {
    if (e.keyCode === 32) {
      func();
    }
  };
  document.addEventListener("keydown", (e) => {
    if (e.key === "c" || e.key === "C") {
      let ans = "";
      for (let x of colors) {
        ans += `#${rgbHex(`${x[0]},${x[1]},${x[2]}`)} `;
      }
      copytoclip(ans);
      setMessage(undefined);
      setPallate(colors);
    }
  });

  const copytoclip = (data) => {
    navigator.clipboard.writeText(data);
    setPallate([]);
  };

  const staticC = `#${rgbHex(
    `${colors[0][0]},${colors[0][1]},${colors[0][2]}`
  )}`;
  const hover = `#${rgbHex(`${colors[1][0]},${colors[1][1]},${colors[1][2]}`)}`;

  return (
    <>
      <GlobalStyle />
      <Container background="#98d5d5">
        {pallate && pallate.length !== 0 && (
          <Message background="black" text="white">
            Copied whole pallate to clipboard
          </Message>
        )}
        {message && (
          <Message background="black" text="white">
            Color
            <div
              style={{
                backgroundColor: `${message}`,
                display: "inline-block",
                padding: "0 10px",
                borderRadius: "6px",
              }}
            >
              {message}
            </div>
            copied to your clipboard
          </Message>
        )}
        <h1>Color palette generator</h1>
        <Pallate>
          {colors.map((color, index) => {
            const hexColor = `#${rgbHex(
              `${color[0]},${color[1]},${color[2]}`
            )}`;

            return (
              <ColorCard
                key={index}
                onClick={() => {
                  copytoclip(hexColor);
                  setMessage(hexColor);
                }}
              >
                <Color background={hexColor} />

                {hexColor}
              </ColorCard>
            );
          })}
        </Pallate>

        <Button
          disabled={loading}
          onClick={func}
          static={staticC}
          hover={hover}
        >
          {loading ? (
            <Spinner
              border={`#${rgbHex(
                `${colors[4][0]},${colors[4][1]},${colors[4][2]}`
              )}`}
            />
          ) : (
            "Generate Palette"
          )}
        </Button>
        <h3>Or just press the "Spacebar" to generate new palette.</h3>
        <Message background="white" text="grey">
          Click to copy individual color & Press "C" to copy palette
        </Message>
      </Container>
    </>
  );
}

export default App;
