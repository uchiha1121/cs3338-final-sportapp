## Snapshot 3 – Favorites workflow

- Run backend locally (dev): `npm install` then `npm start` inside `backend/` (serves `/games` on port 4000 with CORS; extend with favorites endpoints when ready).
- Run frontend locally (static): open `frontend/index.html` or host via nginx container from `docker/Dockerfile.frontend` (exposes port 80). Favorites are stored client-side for this snapshot.
- Docker builds: `docker build -f docker/Dockerfile.backend -t sporthub-backend .` and `docker build -f docker/Dockerfile.frontend -t sporthub-frontend .`.
- Manual tests: execute TestRail cases covering favorite/unfavorite and My Favorites view; add evidence to the Snapshot 3 report in `testrail/`.
- Documentation updates: reflect Favorites feature in snapshot objectives, SRS, SDD, design spec, and user manual.

## Snapshot 4 – Final workflow

- Start everything with Docker Compose: `docker-compose up --build` (frontend on 3000, backend on 4000; seeded data used for demo).
- Final regression: run TestRail C50–C53 (All Games filter, Favorite toggle, My Favorites listing, Admin CRUD happy path) and capture evidence in `testrail/`.
- Jira close-out: complete ST-21 (regression), ST-22 (frontend polish), ST-23 (workflow/diagram updates); archive resolved backlog items.
- Documentation: refresh SRS, SDD, design spec, user manual, and `docs/snapshot_objectives/snapshot4_final.tex` to reflect final state and future work.
- Known next steps: move favorites/auth to backend with a real DB, integrate live sports APIs, add CI/CD pipeline for lint/test/build.
