import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M.153 9.97c-.009.013-.016.028-.024.042l-.022.038-.02.044-.018.04-.015.044-.015.045-.01.044-.011.046c-.004.018-.006.035-.008.053l-.006.04a1.015 1.015 0 0 0 0 .188l.006.04c.002.018.004.035.008.053l.01.046.011.044.015.045.015.044.018.04.02.044.022.039c.008.013.015.028.024.041l.03.042.023.033.06.07 4.546 4.773c.177.186.41.28.643.28a.884.884 0 0 0 .642-.28.989.989 0 0 0 0-1.35l-2.993-3.143H19.09c.502 0 .909-.428.909-.955 0-.527-.407-.954-.91-.954H3.105l2.993-3.144a.989.989 0 0 0 0-1.35.879.879 0 0 0-1.285 0L.266 9.825a.92.92 0 0 0-.06.07l-.024.033-.029.042Z"
        fill="#fff"
      />
    </G>
    <G clipPath="url(#b)">
      <Path
        d="M1.153 9.97c-.009.013-.016.028-.024.042l-.022.038-.02.044-.018.04-.015.044-.015.045-.01.044-.011.046c-.004.018-.006.035-.008.053l-.006.04a1.016 1.016 0 0 0 0 .188l.006.04c.002.018.004.035.008.053l.01.046.011.044.015.045.015.044.018.04.02.044.022.039c.008.013.015.028.024.041l.03.042.023.033.06.07L5 16c.171.227.63.227 1.455.227a.884.884 0 0 0 .642-.28.989.989 0 0 0 0-1.349l-2.993-3.143H20.09c.502 0 .909-.428.909-.955 0-.527-.407-.954-.91-.954H4.105l2.993-3.144a.989.989 0 0 0 0-1.35C6.742 4.68 5.355 4.627 5 5L1.266 9.825a.918.918 0 0 0-.06.07l-.024.033-.029.042Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v21H0z" />
      </ClipPath>
      <ClipPath id="b">
        <Path fill="#fff" transform="translate(1)" d="M0 0h20v21H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
