import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import BlogPage from "../components/BlogPage";
import CreateBlog from "../components/CreateBlog";
import EditBlog from "../components/EditBlog";
export const router = createBrowserRouter ([
  {
    path : "/",
    element : <MainLayout/>,
    errorElement : (
      <h2> متاسفانه موردی یافت نشد 🫣... </h2>),
      children : [
        {
          path : "/",
          element : <App/>
        },
        {
          path : "/blogs/:blogId",
          element :<BlogPage/>
        },
        {
          path : "/blogs/create-blog",
          element : <CreateBlog/>
        },
        {
          path : "/editBlog/:blogId",
          element:<EditBlog/>
        }
      ]
  }
]);