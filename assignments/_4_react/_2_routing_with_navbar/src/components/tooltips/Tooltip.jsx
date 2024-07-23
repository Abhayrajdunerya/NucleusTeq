import React, {useState} from "react";
import "./Tooltip.css";

const Tooltip = ({ message, className, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      onMouseOver={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={`tooltip-new`}
    >
      <div className={`${visible ? 'flex' : 'hidden'} tooltip-msg ${className}`}>{message}</div>
      {children}
    </div>
  );
};

export default Tooltip;
