import React, { useState } from "react";

import "./index.css";

function App() {
  const [isDefault, setIsDefault] = useState(false);
  if (!isDefault) {
    return "false";
  }
  if (isDefault) {
    return "true";
  }
  return null;
}

function DefaultChungus() {}

export default App;
