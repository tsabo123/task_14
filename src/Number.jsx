

 function Number(props) {
   
        return (
         <> {
            props.masivi.map(item => <p>{item}</p>)

         }
      
         </>
        );
    
}

export default Number;