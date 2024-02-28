import { useQuery } from "@tanstack/react-query";

import Main from "components/templates/Main";
import SideBar from "components/templates/SideBar";
import { getAllPosts } from "services/user";
import Loader from "components/modules/Loader";
import { getCategory } from "src/services/admin";


function HomePage() {
  const style = { display: "flex" }
  
  const { data: posts, isLoading: postLoading } = useQuery({
    queryKey: ["post-list"],
    queryFn: getAllPosts
  })
  const { data: categories, isLoading: categoryLoading } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategory,
  });

  return (
    <>
      {
        postLoading || categoryLoading ? <Loader /> : (
          <div style={style}>
            <SideBar categories={categories} />
            <Main posts={posts} />
          </div>
        )}
    </>
  );
}

export default HomePage;
