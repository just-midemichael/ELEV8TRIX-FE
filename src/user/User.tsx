import { useGlobalContex } from "../utils/ContextApi";

// Set the page title
const pageTitle = () => (document.title = "User");
pageTitle();

const User = () => {
  const user = useGlobalContex();
  return <div>User: {user.user}</div>;
};

export default User;
