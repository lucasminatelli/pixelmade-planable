import CardApproveButton from "../../components/CardApproveButton";
import CardComentary from "../../components/CardCommentary";
import Instagram from "../../components/Cards/Instagram";
import { useGetPostsQuery } from "../../graphql/generated";
import "./styles.css";

const Home = () => {
  // Hooks
  const { data } = useGetPostsQuery();

  // Render
  if (!data) return <h3>Não há dados carregados</h3>;
  return data?.posts.map((post, index: number) => {
    return (
      <div className="home-content">
        <div className="home-card-approve-button">
          <CardApproveButton />
        </div>

        <div className="home-card-content">
          <Instagram key={index} post={post} />
        </div>

        <div className="home-card-commentary">
          <CardComentary />
        </div>
      </div>
    );
  });
};

export default Home;
