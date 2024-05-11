import { useContexApi } from "../../../../utils/ContextApi";

const Dashboard = () => {
  const authAdmin = useContexApi();

  return <div>Admin Dashboard, {authAdmin.admin}</div>;
};

export default Dashboard;
