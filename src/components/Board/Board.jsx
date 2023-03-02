import React from "react";

// components
import Row from "./Row";
import Cell from "./Cell";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import RadialTimerButton from "../TimerButton/Prefab/RadialTimerButton";

// styles
import "./styles.css";

const field = [
  [
    { type: 1, unit: null, building: null },
    { type: 2, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 2, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 2, unit: null, building: null },
    { type: 1, unit: null, building: null },
  ],
  [
    { type: 1, unit: null, building: null },
    { type: 2, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 2, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 2, unit: null, building: null },
    { type: 1, unit: null, building: null },
  ],
  [
    { type: 1, unit: null, building: null },
    { type: 2, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 2, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 2, unit: null, building: null },
    { type: 1, unit: null, building: null },
  ],
  [
    { type: 1, unit: null, building: null },
    { type: 2, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 2, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 2, unit: null, building: null },
    { type: 1, unit: null, building: null },
  ],
  [
    { type: 1, unit: null, building: null },
    { type: 2, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 2, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 2, unit: null, building: null },
    { type: 1, unit: null, building: null },
  ],
  [
    { type: 1, unit: null, building: null },
    { type: 2, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 2, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 2, unit: null, building: null },
    { type: 1, unit: null, building: null },
  ],
  [
    { type: 1, unit: null, building: null },
    { type: 2, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 2, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 1, unit: null, building: null },
    { type: 2, unit: null, building: null },
    { type: 1, unit: null, building: null },
  ],
];

export default function Board() {
  return (
    <div>
      <TopBar />
      <div className="p-10 bg-primary relative w-full board flex items-center justify-center flex-col overflow-auto">
        {field.map((item) => (
          <Row>
            {item.map((jtem) => (
              <Cell border data={jtem} />
            ))}
          </Row>
        ))}
        {/* <RadialTimerButton
        position={{ x: 40, y: 60 }}
        action={() => {
          console.log("hola");
        }}
      >
        Casa
      </RadialTimerButton>
      <Route startX={40} startY={60} endX={550} endY={660} color="black" />
      <RadialTimerButton
        position={{ x: 550, y: 660 }}
        action={() => {
          console.log("hola");
        }}
      >
        Casa
      </RadialTimerButton> */}
      </div>
      <BottomBar />
    </div>
  );
}
