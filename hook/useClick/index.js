import React from 'react';

const App = () => {
    const sayHello = () => console.log("say hello!");
    const title = useClick(sayHello);
    return (
      <div>
        <h1 ref={title}>dd</h1>
      </div>
    );
  };
  
  export default App;