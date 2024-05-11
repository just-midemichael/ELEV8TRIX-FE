import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { CSSProperties } from "react";
import { useContexApi } from "../../utils/ContextApi";

const UserAvatar = () => {
  const authUser = useContexApi();

  return (
    <div style={container} title={`${authUser.user}`}>
      <PermIdentityOutlinedIcon
        style={{ width: "26px", height: "26px", color: "white" }}
      />
    </div>
  );
};

export default UserAvatar;

const container: CSSProperties = {
  width: "fit-content",
  minWidth: "36px",
  height: "fit-content",
  minHeight: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "100%",
  backgroundColor: "silver",
  cursor: "pointer",
  padding: "2px"
};
