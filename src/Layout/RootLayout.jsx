import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      {/* sidebar */}
      <div>sidebar</div>

      {/* outlet */}
      <Outlet />
    </div>
  );
};

export default RootLayout;
