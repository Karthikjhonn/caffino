import * as React from "react";
import Svg, { G, Mask, Path } from "react-native-svg";
const HomeOtSvg = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="Iconly/Regular/Outline/Home">
      <G id="Home">
        <Mask
          id="mask0_33437_4370"
          style={{
            maskType: "luminance",
          }}
          maskUnits="userSpaceOnUse"
          x={2}
          y={1}
          width={21}
          height={22}
        >
          <Path
            id="Clip 2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 1.00037H22.4998V22.5054H2V1.00037Z"
            fill="white"
          />
        </Mask>
        <G mask="url(#mask0_33437_4370)">
          <Path
            id="Fill 1"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.7168 15.2915C14.9208 15.2915 15.9008 16.2645 15.9008 17.4605V20.5365C15.9008 20.7935 16.1068 20.9995 16.3708 21.0055H18.2768C19.7788 21.0055 20.9998 19.7995 20.9998 18.3175V9.59349C20.9928 9.08349 20.7498 8.60349 20.3328 8.28449L13.7398 3.02649C12.8548 2.32549 11.6168 2.32549 10.7288 3.02849L4.18076 8.28249C3.74776 8.61149 3.50476 9.09149 3.49976 9.61049V18.3175C3.49976 19.7995 4.72076 21.0055 6.22276 21.0055H8.14676C8.41776 21.0055 8.63776 20.7905 8.63776 20.5265C8.63776 20.4685 8.64476 20.4105 8.65676 20.3555V17.4605C8.65676 16.2715 9.63076 15.2995 10.8258 15.2915H13.7168ZM18.2768 22.5055H16.3528C15.2508 22.4795 14.4008 21.6145 14.4008 20.5365V17.4605C14.4008 17.0915 14.0938 16.7915 13.7168 16.7915H10.8308C10.4618 16.7935 10.1568 17.0945 10.1568 17.4605V20.5265C10.1568 20.6015 10.1468 20.6735 10.1258 20.7415C10.0178 21.7315 9.17176 22.5055 8.14676 22.5055H6.22276C3.89376 22.5055 1.99976 20.6265 1.99976 18.3175V9.60349C2.00976 8.60949 2.46776 7.69949 3.25876 7.10049L9.79376 1.85549C11.2328 0.715494 13.2378 0.715494 14.6738 1.85349L21.2558 7.10349C22.0288 7.69249 22.4868 8.60049 22.4998 9.58249V18.3175C22.4998 20.6265 20.6058 22.5055 18.2768 22.5055Z"
            fill="#313131"
          />
        </G>
      </G>
    </G>
  </Svg>
);
export default HomeOtSvg;
