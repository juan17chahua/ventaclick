import { AppRoutes } from "common/routes/AppRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
