import axios from "axios";
import { useState } from "react";
import { useAuth } from "../contexts/AuthenticationContext";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export function GithubUserTile({
  id,
  login,
  avatarURL,
  htmlURL,
  publicReposURL,
  followersURL,
  liked,
}) {
  const { phoneNumber } = useAuth();
  const [isLiked, setIsLiked] = useState(liked);
  const [publicRepos, setPublicRepos] = useState(null);
  const [followers, setFollowers] = useState(null);

  const likeGithubUser = () => {
    axios
      .post("http://localhost:3000/users/like-github-user", {
        github_user_id: id,
        phone_number: phoneNumber,
      })
      .then(() => {
        setIsLiked(() => true);
      })
      .catch((err) => console.error(err));
  };

  const getPublicRepos = () => {
    if (publicRepos === null) {
      axios
        .get(publicReposURL)
        .then((response) => {
          setPublicRepos(() => response.data);
        })
        .catch((err) => console.error(err));
    }
  };

  const getFollowers = () => {
    if (followers === null) {
      axios
        .get(followersURL)
        .then((response) => {
          setFollowers(() => response.data);
        })
        .catch((err) => console.error(err));
    }
  };

  const publicReposHeading = `public-repos-heading-${id}`;
  const publicReposBody = `public-repos-body-${id}`;
  const followersHeading = `followers-heading-${id}`;
  const followersBody = `followers-body-${id}`;

  return (
    <div
      className="border border-start-0 border-end-0 p-4 d-flex justify-content-start"
      id={id}
    >
      <div className="me-4">
        <img
          className="img-fluid object-fit-cover rounded"
          src={avatarURL}
          alt={login}
          height={300}
          width={300}
        />
      </div>
      <div className="flex-grow-1">
        <div className="d-flex justify-content-between mb-4">
          <h3>
            <a href={htmlURL} target="_blank" rel="noreferrer">
              {login}
            </a>
          </h3>
          <button className="btn" onClick={likeGithubUser}>
            {isLiked ? (
              <AiFillHeart color="#ff0000" size={"30px"} />
            ) : (
              <AiOutlineHeart size={"30px"} />
            )}
          </button>
        </div>
        <div className="accordion">
          <div className="accordion-item" onClick={getPublicRepos}>
            <h2 className="accordion-header" id={publicReposHeading}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${publicReposBody}`}
                aria-expanded="false"
                aria-controls={publicReposBody}
              >
                Public Repositories
              </button>
            </h2>
            <div
              id={publicReposBody}
              className="accordion-collapse collapse"
              aria-labelledby={publicReposHeading}
            >
              <div className="accordion-body">
                <ul>
                  {publicRepos
                    ? publicRepos.map((repo) => (
                        <li key={repo.html_url}>
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {repo.name}
                          </a>
                        </li>
                      ))
                    : null}
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item" onClick={getFollowers}>
            <h2 className="accordion-header" id={followersHeading}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${followersBody}`}
                aria-expanded="false"
                aria-controls={followersBody}
              >
                Followers
              </button>
            </h2>
            <div
              id={followersBody}
              className="accordion-collapse collapse"
              aria-labelledby={followersHeading}
            >
              <div className="accordion-body">
                <ul>
                  {followers
                    ? followers.map((follower) => (
                        <li key={follower.login}>
                          <a
                            href={follower.html_url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {follower.login}
                          </a>
                        </li>
                      ))
                    : null}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
