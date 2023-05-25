# TaskLister

## Description

TaskLister is an application for tracking tasks and organizing them into projects. You can check out the [live version](https://tasklister.onrender.com/) (you will need to sign up).

## Motivations

I built this app to assist with managing and organizing my own personal daily and weekly tasks. As a self-taught developer, holding yourself accountable to the learning goals and tasks you set on a regular basis is a tremendously important skill. TaskLister helps me boost my productivity by keeping track of the daily and weekly tasks and goals I have set for myself.

## Learning

Oh boy - I learned a ton making this app! In a nutshell, I learned how to use React, the BaaS platform [Supabase](https://supabase.com/), and about deploying with [render](https://render.com/).

--

Going into development and having an idea of what I wanted the app to do, I knew that building a maintainable and organised app that performed well was important. React ticked all those boxes and it's use of JSX to write clean HTML inside of a JS file took the code organisational aspect to another level and was a major reason in why I chose to use React.

Building TaskLister was my first foray into learning React, and their [superb documentation](https://react.dev/learn) really helped me in getting to grips with the basics (such as JSX, props, state, conditional rendering, etc.), and learning more advanced concepts like reducers and effects. I also learned how to use the `react-router-dom` library to implement navigation of authenticated users to the app.

--

Being a task app, data persistence is integral from a user's point of view (it would be problematic if a user's tasks were to disappear every time they accessed the app!), and so while my initial solution was to use `localStorage`, I felt it was not very robust given its limitations. Additionally, I knew I wanted to implement some kind of authentication system so individual users could have their own set of tasks and projects.

With these requirements in mind, I chose to learn how to use Supabase as it felt like a good solution while being a useful first-step into the world of back-end development. With Supabase, I learned how to use their built-in methods to perform CRUD operations and set up authentication. Implementing authentication with Supabase is something I am very proud of because it makes TaskLister feel more complete and well-rounded as an application.
