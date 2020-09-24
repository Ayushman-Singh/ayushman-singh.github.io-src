import React from 'react';
import Sdata from "./Sdata";
import Card from "./Movie";


const App = () => (
<React.Fragment>

  <h1 className="heading" >List of Top Netflix in 2020</h1>
  
    {Sdata.map((val) =>
        <Card 
          key = {val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.links}
       />
      )
    }

  </React.Fragment>
)




export default App;
