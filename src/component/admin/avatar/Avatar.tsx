import { Avatar } from "@mui/material";
import { useContexApi } from "../../../utils/ContextApi";
import adminImage from "/mentorImage2.png";
import { CSSProperties } from "react";

interface AvatarProps {
  style: CSSProperties | undefined;
}

const AdminAvatar = ({ style }: AvatarProps) => {
  const authAdmin = useContexApi();
  return (
    <Avatar
      src={`${adminImage}`}
      alt={`${authAdmin.admin}`}
      style={style}
      title={`${authAdmin.admin}`}
    />
  );
};

export default AdminAvatar;
