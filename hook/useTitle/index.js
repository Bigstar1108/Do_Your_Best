import React, { useState, useEffect } from "react";

const App = () => {
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 3000);
    return (
      <div>
        <h1>dd</h1>
      </div>
    );
  };
  
  export default App;