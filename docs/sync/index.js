const request = require("request");
const fs = require("fs");

const options = {
  method: "GET",
  url: "https://api.github.com/orgs/escolalms/repos",
  headers: {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "Awesome-Octocat-App-EscolaLMS",
  },
};

const fetch = (uri) => {
  return new Promise((resolve, reject) => {
    request(
      { ...options, url: `https://api.github.com/${uri}` },
      function (error, response) {
        if (error) reject(new Error(error));
        resolve(JSON.parse(response.body));
      }
    );
  });
};

const downloadFile = (url, filename, repoName) => {
  return new Promise((resolve) => {
    request(url, function (error, response, body) {
      if (response.statusCode < 300) {
        if (url.toLowerCase().includes(".md")) {
          body = body.toString().replace(/(?<=\]\()(.+)(?=(\)))/g, (url) => {
            return url.includes("http")
              ? url
              : `https://raw.githubusercontent.com/${repoName}/main/${url}`;
          });
        }
        fs.writeFileSync(`${__dirname}/md/${filename}`, body);
      }
      resolve(error, response, body);
    });
  });
};

const init = async () => {
  const repos = await fetch("orgs/escolalms/repos?per_page=100");
  await Promise.all(
    repos.map((repo) => {
      const name = repo.name.toLowerCase().split(" ").join("-");

      Promise.all[
        (downloadFile(
          `https://raw.githubusercontent.com/${repo.full_name}/main/README.md`,
          `packages/${name}.md`,
          repo.full_name
        ),
        downloadFile(
          `https://raw.githubusercontent.com/${repo.full_name}/main/ADMIN.md`,
          `admin-panel/${name}.md`,
          repo.full_name
        ))
      ];
    })
  );
};

init();
