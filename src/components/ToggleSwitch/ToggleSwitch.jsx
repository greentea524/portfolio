import React, { useContext } from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  // The theme lives in Main's useLocalStorage hook and reaches here through
  // context. Mirroring it into local state would give the checkbox and the
  // emoji separate sources of truth, kept in step only by both being updated
  // in this handler — and localStorage is shared across tabs, so "nothing else
  // changes the theme" is not a guarantee worth relying on.
  const { isDark, changeTheme } = useContext(StyleContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={changeTheme}
        aria-label="Dark mode"
      />
      <span className="slider round">
        {/* Decorative: the input's aria-label already names the control, so
            announcing the emoji as well would just repeat it. */}
        <span className="emoji" aria-hidden="true">
          {isDark ? emoji("🌜") : emoji("☀️")}
        </span>
      </span>
    </label>
  );
};
export default ToggleSwitch;
