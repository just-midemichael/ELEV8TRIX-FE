import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { CSSProperties } from "react";

const Cart = () => {
  return (
    <div style={container}>
      <ShoppingCartOutlinedIcon
        style={{ width: "26px", height: "26px" }}
        cursor="pointer"
        sx={{ "&:hover": { color: "#3149A1" } }}
      />
    </div>
  );
};

export default Cart;

const container: CSSProperties = {
  width: "fit-content",
  minWidth: "50px",
  height: "fit-content",
  minHeight: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2px 10px"
};
