import Instagram from "../components/Cards/Instagram";
import { useGetPostsQuery } from "../graphql/generated";

const Home = () => {
  // Hooks
  const { data } = useGetPostsQuery();
  
  // Render
  if (!data) return <h3>Não há dados carregados</h3>;
  return data?.posts.map((post, index: number) => {
    if (post) return <Instagram key={index} post={post} />;
  });
};

export default Home;
