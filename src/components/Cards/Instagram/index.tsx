import "./styles.css";

const Instagram = (post: any) => {
  console.log(post);
  return (
    <>
      {post && (
        <div className="instagram-card">
          <div className="instagram-card-header">
            <img src="" className="instagram-card-user-image" />
            <a className="instagram-card-user-name"></a>
            <div className="instagram-card-time"></div>
          </div>

          <div className="intagram-card-image">
            <img src="" height="600px" />
          </div>

          <div className="instagram-card-content">
            <p className="likes"></p>
            <p>
              <a className="instagram-card-content-user" href=""></a>
              <a className="hashtag" href=""></a>
            </p>
            <p className="comments"></p>
            <a className="user-comment" href=""></a>
            <a className="user-comment" href=""></a>
            <a className="user-comment" href=""></a>
            <hr />
          </div>

          <div className="instagram-card-footer">
            <a className="footer-action-icons" href="#">
              <i className="fa fa-heart-o"></i>
            </a>
            <input
              className="comments-input"
              type="text"
              placeholder=""
            />
            <a className="footer-action-icons" href="#">
              <i className="fa fa-ellipsis-h"></i>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Instagram;
