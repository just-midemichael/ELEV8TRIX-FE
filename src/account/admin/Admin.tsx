import { Outlet } from "react-router-dom";

// Set the page title
const pageTitle = () => (document.title = "Admin Dashboard");
pageTitle();

const Admin = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Admin;
