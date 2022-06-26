import { gql, useQuery } from "@apollo/client";
import Instagram from "../components/Cards/Instagram";

const GET_POSTS = gql`
  query GetPosts {
    posts {
      publishedAt
      title
      coverImage {
        url
      }
      author {
        name
        picture {
          url
        }
      }
    }
  }
`;

const Home = () => {
  const { data } = useQuery(GET_POSTS);
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
