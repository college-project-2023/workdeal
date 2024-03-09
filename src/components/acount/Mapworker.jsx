
import React from 'react'
import DialogLayout from '../common/DialogLayout';
import { Dialog, DialogTitle,ToggleButton } from "@mui/material";


const Mapworker = (props) => {
  const done=()=>{

  }
  const handleClick = () => {
    // Constructing the URL for Google Maps directions
    
    const destinationLat = props.latitude;
    const destinationLng = props.longitude;
    console.log(destinationLat)
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destinationLat},${destinationLng}`;
    // Opening Google Maps in a new tab
    window.open(url, '_blank');
  };

  return (
    
    <Dialog open={props.closeDialog} >
    <div>
    <ToggleButton onClick={handleClick} style={{ width: "40%", borderColor: "green", marginLeft: "7%", marginBottom: "10%" }}>DIRECTION</ToggleButton>
    
    
    <ToggleButton onClick={()=>done(item.orderByUid)} style={{ width: "40%", borderColor: "green", marginTop: "-10%", marginLeft: "3%" }}>  {" "}
              done{" "}</ToggleButton>
    </div>
  </Dialog>
  );
}

export default Mapworker
