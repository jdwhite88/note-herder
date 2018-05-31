# note-herder

A website that allows users to add, remove, and edit a list of notes. Authenticated via GitHub or Google. Redesigned from existing template files to work with React: [notes.html](public/notes.html), [sign-in.html](public/sign-in.html), and [style.css](public/style.css).

This is the 3rd project for XTern Bootcamp 2018, Session 1.

## Setup
 0. Enable JavaScript in your web browser, if you haven't already.
 1. Visit https://noteherder-2eb30.firebaseapp.com/ in your favorite internet browser that supports ES6 (not IE or Opera).
 2. Login with either a GitHub or Google account.
 
 ## TODO
 #### Future Ideas
 * Display the time(s) the notes were modified and/or created
 * Show what user is logged in on the Sidebar
 * Hide SignIn popup window during authentication
 * Customize sign-in page

 #### Known Issues
 * ID generation doesn't ensure uniqueness
 * Header styling for SignIn.css incorrectly in App.css

## Author
* **Jacob White** - [GitHub](https://github.com/jdwhite88)

## Dependencies
* [React.js 16.3.2](https://reactjs.org/) - JavaScript framework for building the website
* [Fauna One: Oxygen](https://fonts.google.com/specimen/Fauna+One) - Font family for the website
* [Font Awesome 5.0.13](https://fontawesome.com/) - Draws vector icons for the website
* [Firebase](https://firebase.google.com/) - Hosts back-end database and website, and provides user authentication for Google & GitHub
* [Re-Base](https://github.com/tylermcginnis/re-base) - Syncs React.js state with Firebase database
* [React Router DOM](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) - For navigating between URLs on the page

## Acknowledgments
* [TechPoint](https://techpoint.org/) - For hosting the [XTern Bootcamp](https://techpoint.org/xtern-bootcamp/), where this project was completed: [Source code](https://github.com/xtbc18s1/noteherder/tree/afternoon) for in-class demo.
* [Fretless](http://www.fretless.com/) - Especially Davey & Dana, for providing instruction for Xtern Bootcamp. 
