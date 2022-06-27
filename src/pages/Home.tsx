import Instagram from "../components/Cards/Instagram";

const Home = () => {
  const { data } = [];
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
