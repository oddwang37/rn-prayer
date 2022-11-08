import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 455 455" xmlSpace="preserve" {...props}>
    <Path d="M455 212.5H242.5V0h-30v212.5H0v30h212.5V455h30V242.5H455z" />
  </Svg>
);

export default SvgComponent;
