import { ToggleButton } from "@mui/material";
import { maxWidth } from "@mui/system";
import React from "react";
import Link from "next/link";

function OrderPlaced() {
  return (
    <div>
      <center>
        <h4 style={{ margin: "20px" }}>Order Placed</h4>
        <p style={{ maxWidth: "60%", paddingBottom: "20px" }}>
          please check All Orders in Account section for more information
        </p>
        <Link href="/account">
          <ToggleButton style={{ width: "100%" }}>Go To Account</ToggleButton>
        </Link>
      </center>
    </div>
  );
}

export default OrderPlaced;
