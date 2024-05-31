import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CelebrationPage from "./pages/CelebrationPage";
import { getBirthdayer } from "./api/api";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/:id",
        element: <CelebrationPage />,
        loader: async ({ params: { id } }) => {
          // TODO: validate id
          return getBirthdayer(id!);
        },
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
