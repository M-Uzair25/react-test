import React from 'react'


function Alert(props) {
      return (
        <div style={{height:"35px"}} > 
        {props.alert && 
         <div className={`alert alert-${props.alert.type} `} role="alert">
            <div> {props.alert.msg}</div>
          </div>}
          </div>
        
      );
    }
    
    export default Alert;