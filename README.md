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

The goal of the exercise is to add the "share question" feature to the project,
and to identify and potentially improve the software architecture of this
project in any other aspect.

### Context

Apiday customers answer reporting campaigns (called questionnaires internally)
to provide information to other companies and follow regulations. Sometimes the
person or people with access to Apiday don't directly have the information, but
the person who would should not require an account just to answer a couple of
specific questions. So instead of creating an account for them, we want to
provide our users with the capacity to send a link to their colleagues, so they
can then answer only some specific questions. This link should include a token
to ensure no unauthorized people can modify the answers.

To do this, a button should be added on every question.

* Clicking on this button will copy the link to the clipboard.
* Pasting the link in a new tab should display only the selected question.

### Expectations

* The feature should be done and be functional
* The error and loading states of the APIs should be handled (that's why we included delays in the API responses)
* Please take any opportunities to improve the code (refactoring the structure,
  adding methods for common logic, etc.), we will talk about these during the interview

Not required, but helpful:
* Taste in UI design

### Technical details

You can check the [Next.js Documentation](https://nextjs.org/docs) to learn
more about Next.

The basic thing you should know for this exercise is that the file structure
inside the `pages` directory is the router. So the `index.tsx` file is the
`/` page, `/questionnaire/[questionnaireId].tsx` file is the `/questionnaire/:id`
page and an example to retrieve the parameter is in the file.

To retrieve the sharing token, you should use `getSharingToken` and to retrieve
the questions as a guest you should use `loadQuestionWithSharingToken`. This
mimics the behaviour of the backend with some loading time and errors.
