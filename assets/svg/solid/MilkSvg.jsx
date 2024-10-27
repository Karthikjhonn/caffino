import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const MilkSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    width={20}
    height={20}
    {...props}
  >
    <Path fill={"#C67C4E"} d="M15.641 0H7.483c-.846 0-1.534.63-1.534 1.404v2.078h11.226V1.404C17.175.63 16.487 0 15.641 0m2.41 4.908H7.858l3.056 3.435h10.193Zm-6.744 4.861H21.5V24H11.307zM5.949 4.908 2.5 8.784V24h7.381V9.327Z" />
  </Svg>
);
export default MilkSvg;
