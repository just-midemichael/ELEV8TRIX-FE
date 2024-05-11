import { useContexApi } from "../../../../utils/ContextApi";

const Index = () => {
  const authAdmin = useContexApi();

  return <div>Admin Dashboard, {authAdmin.admin}</div>;
};

export default Index;
