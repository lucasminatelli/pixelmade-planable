import { gql, useQuery } from "@apollo/client";

const GET_POSTS = gql`query MyQuery {
  posts {
    publishedAt
    title
    coverImage {
      url
    }
  }
}
`

const Home = () => {
  const {data} = useQuery(GET_POSTS);
  return <div>Home</div>;
};

export default Home;
