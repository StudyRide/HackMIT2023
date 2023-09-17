// ToggleList.js

import React, { useState } from 'react';
import './ToggleList.css';

function ToggleList({ title, items }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="toggle-list">
      <h3 onClick={() => setIsCollapsed(!isCollapsed)}>{title}</h3>
      {!isCollapsed && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToggleList;
