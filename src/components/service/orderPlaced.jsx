import { ToggleButton } from "@mui/material";
import { maxWidth } from "@mui/system";
import React,{useState} from "react";
import Link from "next/link";
import { getLocationOrigin } from "next/dist/shared/lib/utils";

function OrderPlaced(props) {
  // console.log(props.latitude)
  //       console.log(props.longitude)
  
  return (
    <div>
    
      <center>
        <h4 style={{ margin: "20px" }}>Order Placed</h4>
        <p style={{ maxWidth: "60%", paddingBottom: "20px" }}>
          please check All Orders in Account section for more information
        </p>
        
        <Link href={`/account?latitude=${props.latitude}&longitude=${props.longitude}`}>
          <ToggleButton style={{ width: "100%" }}>Go To Account</ToggleButton>
          
        </Link>
        
      </center>
     
    </div>
  );
}

export default OrderPlaced;
