Put your static assets here. Anything in /public is served from the site root.

Recommended files:
  portrait.jpg        -> your hero photo (referenced by profile.portrait)
  resume.pdf          -> your downloadable CV (referenced by profile.resumeUrl)
  projects/           -> project screenshots, e.g. projects/my-app.jpg
                         then set image: "/projects/my-app.jpg" in content.ts

Reference them from src/data/content.ts with a leading slash, e.g. "/portrait.jpg".
