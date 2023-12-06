# employee-poll-web

This is a project created from the starter code described below.

## Install 

To install the project navigate to the root folder and type "npm install"

## Run

To run the project navigate to the root and type "npm install"

## Extra Feature

The leader board can be sorted by the number of votes

## Rubric Validation


|Success Criteria | Result |
| ------------- | ------------- | 
| Is the application easy to install and start?  | Pass |
| Does the application include README with clear installation and launch instructions?  | Pass  |
| Does the application have a way to log in and log out?  | Pass  |
| Does the application work correctly regardless of which person the user impersonates? | Pass  |
| Are the polling questions listed in the correct category (Unanswered vs Answered), and do they have the desired functionality on the home page?  | Pass  |
| Are the details of each poll displayed with all of the relevant information?  | Pass  |
| Does the voting mechanism work correctly?  | Pass  |
| Can users add new polls?  | Pass  |
| Does the leaderboard work correctly and have the desired functionality?  | Pass  |
| Is the application navigable?  | Pass  |
| Does the application interact with the backend correctly?  | Pass  |
| Does the code run without errors? Is the code free of warnings that resulted from not following the best practices listed in the documentation, such as using key for list items? Is the code formatted properly?  | Pass  |
| Does the store serve as the application’s single source of truth?| Pass  |
| Is application state managed by Redux? | Pass  |
| Does application state update correctly? | Pass  |
| Does the architecture of the application make sense?  | Pass  |
| Are jest, @testing-library/react, and @testing-library/jest-dom present in the project?  | Pass  |
| Can all the unit test be run by entering the npm start test command?  | Pass  |
| Do all the unit tests pass?  | Pass  |
| Are there at least 10 unit tests?  | Pass  |
| Are There two unit tests written which test the _saveQuestion() function in _DATA.js?  | Pass  |
| Is there at least one snapshot test present?  | Pass  |
| Is there is at least one DOM test which uses the fireEvent function? | Pass  |


# Employee Polls Project

This is the starter code for the final assessment project for Udacity's React & Redux course.

The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing you need to edit in the ` _DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.

Using the provided starter code, you'll build a React/Redux front end for the application. We recommend using the [Create React App](https://github.com/facebook/create-react-app) to bootstrap the project.

## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| password   | String           | The user’s password in order to log in the application |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database. If one of the parameters are missing, an error is thrown.
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database. If one of the parameters are missing, an error is thrown.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|