# Fullstack Open – Submission repo

This repository tracks my journey through the [University of Helsinki Fullstack Open](https://fullstackopen.com/en/) course as I build fullstack skills across modern JavaScript, React, and Node.js. It collects the exercises, reference projects, and supporting material I use while learning to design, implement, and deploy fullstack applications.

## Completed Scope

- ✅ Part 1 – Courseinfo, Unicafe, and Anecdotes implementations in `submissions/part1`.
- ✅ Part 2 – Countries and Phonebook React applications (sources included below).
- ✅ Part 3 – Backend deployment and the production-ready Phonebook backend.
- 🚧 Part 4 – Currently working on integration tests, blog list APIs, and token-based authentication.

## Repository Layout

- `submissions/part1/courseinfo` – Multi-part course info app (1.1–1.5) plus refactored component solutions (1.6–1.11).
- `submissions/part1/unicafe` – Feedback statistics dashboard covering exercises 1.6–1.11.
- `submissions/part1/anecdotes` – Random anecdote voting app for exercises 1.12–1.14.
- `submissions/part2/countries` – Country lookup app implementing data fetching, conditional rendering, and API integration required for Part 2 exercises 2.12–2.14.
- `submissions/part2/phonebook` – CRUD phonebook demonstrating controlled forms, filtering, optimistic updates, and error notifications for exercises 2.6–2.18.
- `submissions/part3/phonebook-backend` – Node + Express + MongoDB backend that powers the production Phonebook application, including deployment assets.
- `submissions/part3/phonebook-frontend` – Frontend adjusted for the real backend and Render deployment tasks in Part 3.
- `lessons/notes` – Notes app from the course material used as a personal reference while studying Part 2 and 3 concepts.
- `lessons/backend` – Express playground prepared for experimentation alongside the official exercises.

## How to Evaluate the Part 1 Apps

### Courseinfo (`submissions/part1/courseinfo`)

1. `cd submissions/part1/courseinfo`
2. `npm install`
3. `npm run dev`
4. Open `http://localhost:5173` to check the course modules list, totals, and component refactors.

### Unicafe (`submissions/part1/unicafe`)

1. `cd submissions/part1/unicafe`
2. `npm install`
3. `npm run dev`
4. Visit `http://localhost:5173` and submit feedback to verify statistics, averages, and positive percentages.

### Anecdotes (`submissions/part1/anecdotes`)

1. `cd submissions/part1/anecdotes`
2. `npm install`
3. `npm run dev`
4. Browse to `http://localhost:5173`, vote on anecdotes, and ensure the “most voted” view updates.

## How to Evaluate the Part 2 Apps

### Countries (`submissions/part2/countries`)

1. `cd submissions/part2/countries`
2. `npm install`
3. `npm run dev`
4. Open `http://localhost:5173` and test searches (e.g., "Finland", "Sweden"). The app conditionally renders lists, single-country details, and weather information.

### Phonebook (`submissions/part2/phonebook`)

1. `cd submissions/part2/phonebook`
2. `npm install`
3. Start the mock backend: `npm run server` (JSON Server on port 3001)
4. In another terminal, `npm run dev`
5. Visit `http://localhost:5173` to add, update, filter, and delete contacts. Error handling messages appear when the backend entry has been removed.

Both projects use Vite + React 19, Axios for HTTP requests, and ESLint configurations aligned with the course recommendations. The `db.json` file in the phonebook project also includes the notes dataset reused in Part 2 exercises.

## How to Evaluate the Part 3 Apps

### Phonebook Backend (`submissions/part3/phonebook-backend`)

1. `cd submissions/part3/phonebook-backend`
2. Duplicate `.env` if needed and set `MONGODB_URI` plus `PORT=3001` (defaults provided in the repository work for local testing).
3. `npm install`
4. `npm run dev` to start the Node + Express + MongoDB API with hot reload.
5. Test endpoints via `curl`/REST client at `http://localhost:3001/api/persons` or by running the Part 3 frontend below.

### Phonebook Frontend (`submissions/part3/phonebook-frontend`)

1. `cd submissions/part3/phonebook-frontend`
2. `npm install`
3. `npm run dev`
4. Open `http://localhost:5173`; verify the app hits the backend `/api/persons` routes (ensure the backend from the previous section is running).

## Tooling Notes

- Requires Node.js 18+ (matching the course recommendation) and npm.
- Run one development server at a time to avoid clashes on ports `5173` and `3001`.
- The Express code in `lessons/backend` is optional for this review; it mirrors the tutorial backend and is ready for Part 3 development.
