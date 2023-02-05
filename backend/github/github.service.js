/**
 * @param {string} query
 * @param {number} page
 * @param {number} perPage
 */
async function searchGithubUsers(query, page, perPage) {
  const route = "https://api.github.com/search/users";
  const searchParams = new URLSearchParams({
    q: query,
    page,
    per_page: perPage,
  });
  const response = await fetch(`${route}?${searchParams.toString()}`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  });
  if (response.status !== 200) {
    return response.text();
  }
  return response.json();
}

/**
 * @param {string} id
 */
async function findGithubUserProfile(id) {
  const route = `https://api.github.com/user/${id}`;

  // Return: { login: “”, id: “”, avatar_url: “”,  html_url: “”, public_repos, followers }
  const response = await fetch(route, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  });
  if (response.status !== 200) {
    return response.text();
  }
  return response.json();
}

module.exports = {
    searchGithubUsers,
    findGithubUserProfile
}
