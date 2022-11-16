import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M16 7.473H8.527V0H7.473v7.473H0v1.054h7.473V16h1.054V8.527H16V7.473Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
