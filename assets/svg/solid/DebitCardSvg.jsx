import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */
const DebitCardSvg = (props) => (
  <Svg
    width="20px"
    height="20px"
    viewBox="0 -1.356 12.063 12.063"
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G>
      <Path d="M2.185 9.329v-0.621c0 -0.238 -0.145 -0.394 -0.383 -0.394 -0.125 0 -0.259 0.042 -0.352 0.175 -0.072 -0.114 -0.175 -0.175 -0.331 -0.175a0.352 0.352 0 0 0 -0.3 0.145v-0.125h-0.197v0.994h0.197v-0.569c0 -0.175 0.103 -0.259 0.248 -0.259s0.228 0.093 0.228 0.259v0.57h0.197v-0.57c0 -0.175 0.103 -0.259 0.248 -0.259s0.228 0.093 0.228 0.259v0.57Zm3.231 -0.984h-0.363v-0.3h-0.196v0.3h-0.207v0.175h0.207v0.467c0 0.228 0.083 0.363 0.331 0.363a0.58 0.58 0 0 0 0.269 -0.072l-0.062 -0.175a0.341 0.341 0 0 1 -0.186 0.052c-0.103 0 -0.155 -0.062 -0.155 -0.166V8.513h0.363v-0.166Zm1.843 -0.031a0.31 0.31 0 0 0 -0.269 0.145v-0.125h-0.197v0.994h0.197v-0.558c0 -0.166 0.083 -0.269 0.217 -0.269a0.605 0.605 0 0 1 0.135 0.021l0.062 -0.186a0.7 0.7 0 0 0 -0.145 -0.021m-2.785 0.103c-0.103 -0.072 -0.248 -0.103 -0.404 -0.103 -0.248 0 -0.404 0.114 -0.404 0.311 0 0.166 0.114 0.259 0.331 0.29l0.103 0.01c0.114 0.021 0.186 0.062 0.186 0.114 0 0.072 -0.083 0.125 -0.238 0.125a0.546 0.546 0 0 1 -0.331 -0.103l-0.103 0.155c0.145 0.103 0.321 0.125 0.425 0.125 0.29 0 0.445 -0.135 0.445 -0.321 0 -0.175 -0.125 -0.259 -0.342 -0.29l-0.103 -0.01c-0.093 -0.01 -0.175 -0.042 -0.175 -0.103 0 -0.072 0.083 -0.125 0.197 -0.125 0.125 0 0.248 0.052 0.311 0.083Zm3.003 0.414c0 0.3 0.197 0.518 0.518 0.518 0.145 0 0.248 -0.031 0.352 -0.114l-0.103 -0.155a0.418 0.418 0 0 1 -0.259 0.093c-0.175 0 -0.311 -0.135 -0.311 -0.331s0.134 -0.33 0.311 -0.33a0.418 0.418 0 0 1 0.259 0.093l0.103 -0.155c-0.103 -0.083 -0.207 -0.114 -0.352 -0.114 -0.311 -0.021 -0.518 0.197 -0.518 0.497Zm-1.388 -0.518c-0.29 0 -0.487 0.207 -0.487 0.518S5.809 9.35 6.109 9.35a0.633 0.633 0 0 0 0.404 -0.135l-0.103 -0.145a0.495 0.495 0 0 1 -0.29 0.103c-0.135 0 -0.28 -0.083 -0.3 -0.259h0.735v-0.083c0 -0.311 -0.186 -0.518 -0.466 -0.518Zm-0.01 0.186c0.145 0 0.248 0.093 0.259 0.248h-0.538c0.031 -0.145 0.125 -0.248 0.28 -0.248m-2.682 0.331v-0.497h-0.197v0.125c-0.072 -0.093 -0.175 -0.145 -0.321 -0.145 -0.28 0 -0.487 0.217 -0.487 0.518s0.207 0.518 0.487 0.518c0.145 0 0.248 -0.052 0.321 -0.145v0.125h0.197zm-0.797 0c0 -0.186 0.114 -0.331 0.311 -0.331 0.186 0 0.3 0.145 0.3 0.331 0 0.197 -0.125 0.331 -0.3 0.331 -0.197 0.01 -0.311 -0.145 -0.311 -0.331m7.652 -0.518a0.31 0.31 0 0 0 -0.269 0.145v-0.125h-0.197v0.994h0.197v-0.558c0 -0.166 0.083 -0.269 0.217 -0.269a0.605 0.605 0 0 1 0.135 0.021l0.062 -0.186a0.7 0.7 0 0 0 -0.145 -0.021Zm-0.766 0.518v-0.497h-0.197v0.125c-0.072 -0.093 -0.175 -0.145 -0.321 -0.145 -0.28 0 -0.487 0.217 -0.487 0.518s0.207 0.518 0.487 0.518c0.145 0 0.248 -0.052 0.321 -0.145v0.125h0.197zm-0.797 0c0 -0.186 0.114 -0.331 0.311 -0.331 0.186 0 0.3 0.145 0.3 0.331 0 0.197 -0.125 0.331 -0.3 0.331 -0.197 0.01 -0.311 -0.145 -0.311 -0.331m2.796 0v-0.89h-0.197v0.518c-0.072 -0.093 -0.175 -0.145 -0.321 -0.145 -0.28 0 -0.487 0.217 -0.487 0.518S10.686 9.35 10.966 9.35c0.145 0 0.248 -0.052 0.321 -0.145v0.125h0.197zm-0.797 0c0 -0.186 0.114 -0.331 0.311 -0.331 0.186 0 0.3 0.145 0.3 0.331 0 0.197 -0.125 0.331 -0.3 0.331 -0.197 0.011 -0.311 -0.145 -0.311 -0.331Z" />
      <G>
        <Path
          x={169.81}
          y={31.89}
          width={143.72}
          height={234.42}
          fill="#ff5f00"
          d="M4.245 0.797H7.838V6.658H4.245V0.797z"
        />
        <Path
          d="M4.608 3.728a3.738 3.738 0 0 1 1.419 -2.93 3.728 3.728 0 1 0 0 5.861 3.738 3.738 0 0 1 -1.419 -2.93"
          fill="#eb001b"
        />
        <Path
          d="M12.063 3.728a3.724 3.724 0 0 1 -6.025 2.93 3.736 3.736 0 0 0 0 -5.861 3.724 3.724 0 0 1 6.025 2.93"
          fill="#f79e1b"
        />
      </G>
    </G>
  </Svg>
);
export default DebitCardSvg;
