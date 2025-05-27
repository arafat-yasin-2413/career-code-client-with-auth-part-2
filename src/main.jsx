import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/routes";
import AuthProvide from "./contexts/AuthContext/AuthProvide";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProvide>
			<RouterProvider router={router}></RouterProvider>
		</AuthProvide>
	</StrictMode>
);
