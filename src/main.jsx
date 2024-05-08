import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "./Layout/MainLayout.jsx";
import "./index.css";
import AuthProvider from "./providers/AuthProvider/AuthProvider.jsx";
import router from "./routes/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-[1140px] mx-auto">
    <AuthProvider>
      <RouterProvider router={router}>
        <MainLayout />
      </RouterProvider>
      <ToastContainer />
    </AuthProvider>
  </div>
);
