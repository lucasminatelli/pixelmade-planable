import "./styles.css";

const Instagram = (props: any) => {
  return (
    <div className="instagram-content">
      <div className="instagram-card">
        <div className="instagram-card-header">
          <img
            src={props.post?.author.picture?.url}
            className="instagram-card-user-image"
          />
          <div className="instagram-card-user-content">
            <p className="instagram-card-user-name">{props.post.author.name}</p>
            <span className="instagram-card-time">
              {props.post.publishedAt}
            </span>
          </div>
        </div>

        <div className="instagram-card-image">
          <img src={props.post.coverImage.url} />
        </div>

        <div className="instagram-card-content">
          <p>
            <span className="instagram-card-content-user">
              {props.post.title}
            </span>
            <a className="hashtag" href=""></a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
