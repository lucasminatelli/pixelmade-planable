import Instagram from "../components/Cards/Instagram";
import { useGetPostsQuery } from "../graphql/generated";

const Home = () => {
  const { data } = useGetPostsQuery();
  if (!data) return <h1>Houve um erro!</h1>;
  return (
    <>
      {data &&
        data.posts.map((post: any, index: number) => (
          <Instagram key={index} post={post} />
        ))}
    </>
  );
};

export default Home;
