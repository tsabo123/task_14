import React from "react";
import ReactDom from "react-dom/client";
import Number from "./Number";



function App () {
    

 
        const arr = [1,2,3,] 
        return (
           
            <React.Fragment>

                <>
                
                <Number masivi={arr}></Number>
                </>
            </React.Fragment>
                
        );

    
}

var root = document.getElementById("root");
ReactDom.createRoot(root).render (<App />);