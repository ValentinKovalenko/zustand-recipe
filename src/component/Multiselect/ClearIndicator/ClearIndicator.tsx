import {ClearIndicatorProps} from "react-select";
import {ColourOption} from "../multiselect.types";
import React, {CSSProperties} from "react";

const ClearIndicator = (props: ClearIndicatorProps<ColourOption, true>) => {
  const {
    getStyles,
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div
      {...restInnerProps}
      ref={ref}
      style={getStyles('clearIndicator', props) as CSSProperties}
    >
      <div style={{ padding: '0px 5px' }}>Delete</div>
    </div>
  );
};

export default ClearIndicator;