import {CSSObject} from "@emotion/serialize/dist/emotion-serialize.cjs";
import {ClearIndicatorProps} from "react-select";
import {ColourOption} from "../component/Multiselect/multiselect.types";

export const ClearIndicatorStyles = (
  base: CSSObject,
  state: ClearIndicatorProps<ColourOption>
): CSSObject => ({
  ...base,
  cursor: 'pointer',
  color: state.isFocused ? 'blue' : 'black',
});