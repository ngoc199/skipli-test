const router = require("express").Router();
const githubService = require("./github.service");

router.get("/", async function (req, res) {
  const { q, page, per_page } = req.query;
  const users = await githubService.searchGithubUsers(q, page, per_page);
  return res.status(200).json(users);
});

router.get("/:id", async function (req, res) {
  const { id } = req.params;
  const user = await githubService.findGithubUserProfile(id);
  return res.status(200).json(user);
});

module.exports = router;
