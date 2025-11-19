# Fullstack Open – Submission repo

This repository tracks my journey through the [University of Helsinki Fullstack Open](https://fullstackopen.com/en/) course as I build fullstack skills across modern JavaScript, React, and Node.js. It collects the exercises, reference projects, and supporting material I use while learning to design, implement, and deploy fullstack applications.

## Completed Scope

- ✅ Part 1 – Exercises submitted through the course portal (not mirrored here yet).
- ✅ Part 2 – Countries and Phonebook React applications (sources included below).
- ✅ Part 3 – Backend deployment and the production-ready Phonebook backend.
- 🚧 Part 4 – Currently working on integration tests, blog list APIs, and token-based authentication.

## Repository Layout

- `submissions/part1` – Vite + React implementations for anecdotes, unicafe, and other Part 1 exercises.
- `submissions/part2/countries` – Country lookup app implementing data fetching, conditional rendering, and API integration required for Part 2 exercises 2.12–2.14.
- `submissions/part2/phonebook` – CRUD phonebook demonstrating controlled forms, filtering, optimistic updates, and error notifications for exercises 2.6–2.18.
- `submissions/part3/phonebook-backend` – Node + Express + MongoDB backend that powers the production Phonebook application, including deployment assets.
- `submissions/part3/phonebook-frontend` – Frontend adjusted for the real backend and Render deployment tasks in Part 3.
- `lessons/notes` – Notes app from the course material used as a personal reference while studying Part 2 and 3 concepts.
- `lessons/backend` – Express playground prepared for experimentation alongside the official exercises.

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

## Tooling Notes

- Requires Node.js 18+ (matching the course recommendation) and npm.
- Run one development server at a time to avoid clashes on ports `5173` and `3001`.
- The Express code in `lessons/backend` is optional for this review; it mirrors the tutorial backend and is ready for Part 3 development.

## Next Steps (Beyond This Submission)

- Polish documentation for the completed Part 3 deployments and link to the live apps.
- Finish the Part 4 blog list backend: tests with Vitest + Supertest, token auth, and helper utilities.
- Start preparing for state management topics coming in Part 5 by extracting reusable hooks/components.

Thank you for reviewing the Part 2 work!
