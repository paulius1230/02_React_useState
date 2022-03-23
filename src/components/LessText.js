import React, { useState } from 'react';

function App(props) {

    const [showLess, setIsShowLess] = useState(true);
    const rezultatas = showLess ? props.text.slice(0, props.maxLength) : props.text;

    function toggleShowLess(){
        setIsShowLess((!showLess));
    }

    return (
       <div className="container p-4">
           {rezultatas}
           <a href="#" onClick={toggleShowLess}>{showLess ? " ...read more" : " read less"}</a>
       </div>
    );
  }
  
  export default App;
  