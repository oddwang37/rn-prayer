import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={16}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M.304 17.028c0-1.807.697-3.514 1.963-4.807l1.009.988a5.43 5.43 0 0 0-1.56 3.82v5.56h12.568v-5.56a5.43 5.43 0 0 0-1.56-3.82l1.009-.988a6.833 6.833 0 0 1 1.963 4.807V24H.304v-6.972ZM1.46 7.07c0-1.577.13-3.38 1.084-4.786C3.588.747 5.372 0 8 0c2.628 0 4.412.747 5.456 2.283.955 1.406 1.084 3.209 1.084 4.786A6.547 6.547 0 0 1 8 13.61a6.547 6.547 0 0 1-6.54-6.54Zm1.412 0c0 2.828 2.3 5.128 5.128 5.128 2.828 0 5.128-2.3 5.128-5.128 0-1.363-.1-2.903-.84-3.993-.76-1.12-2.163-1.664-4.288-1.664-2.125 0-3.527.544-4.288 1.664-.74 1.09-.84 2.63-.84 3.993Z"
      fill="#72A8BC"
    />
  </Svg>
);

export default SvgComponent;