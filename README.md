Welcome to the Apiday frontend interview exercise!

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

## Goal

The goal of the exercise is to add the "share question" feature to the project.
Apiday customers answer reporting campaigns (called questionnaires internally)
to provide information and follow the regulations.
Sometimes they don't have the information and instead of inviting a colleague
on the platform and create a new account, they should be able to send a link
to colleagues that can then answer.
This link should be authenticated with a token.

To do this, a button should be added on every question.
Clicking on this button will copy the link to the dashboard.
Pasting the link in a new tab should display the chosen question.

### Expectations

* The feature should be done
* Please take any opportunities to improve the code (refactoring the structure,
  adding methods for common logic, etc.)
* The error and loading state should be handled

Optional:
* Attention to design

### Technical details

You can check the [Next.js Documentation](https://nextjs.org/docs) to learn
more about Next.

The basic thing you should now for this exercise is that the file structure
inside the `pages` directory is the router. So the `index.tsx` file is the
`/` page, `/questionnaire/[questionnaireId].tsx` file is the `/questionnaire/:id`
page and an example to retrieve the parameter is in the file.

To retrieve the sharing token, you should use `getSharingToken` and to retrieve
the questions as a guest you should use `loadQuestionWithSharingToken`. This
mimics the behaviour of the backend with some loading time and errors.
