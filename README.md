# Would You Rather Project

## Running the application

In order to run the application you will need to run the following two commands
`npm install` - This will install all of the needed packages for the project
`npm start` - This will build the index file and start up your application on localhost:3000

### What the buildIndex.js and createComponent.js files are

These are two node scripts that help with managing components in larger applications. The buildIndex.js script is run when you run npm start. This will build an index file that houses all of the components' exports in it so you are able to import a component from anywhere in the /components directory by simply typing

```
import { ComponentName } from '../';
```

This allows for clean imports when importing many different components. With this method you can import all your custom made components in one line.

The createComponent.js script simply creates a new component for your application. It will create a folder for your component and populate it with the component's .js and .css files with the class code already inside. The script accepts a few flags (-n for name _required_, -f functional component _defaults to class component_, -r add redux). This script will also rebuild the index file at the end. This script allows you to create components quickly and allow you to not have to restart your server every time you want to create a new component so it can rebuild the index file. To create a new component:

1. Navigate to the src/components directory
2. Use the command `node createComponent.js -n [Component Name] [optional flags]`
3. Wait less than a second and your new component is ready for you to build!

### The file structure

You may notice that almost every component has it's own folder. This is for scalability. When the application gets larger each component will likely have unit tests associated with them (I personally use jest for this). As well, to test components individually you can use a library such as cosmos. With these two libraries each component can likely have the following files associated with it: (I will use a component named Foo to demonstrate)

* Foo.js (the actual component code)
* Foo.css (the component's styling)
* Foo.test.js (the component's tests)
* Foo.fixture.js (the component's cosmos file)

For this reason having everything in their own folder's will allow for easier management of files and allow for better focus on working on a component at a time.



## Project Instructor Remarks

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

*Description*: Save the polling question in the database.  
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

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

## Contributing

This repository is the starter code for *all* Udacity students. Therefore, we most likely will not accept pull requests. For details, check out [CONTRIBUTING.md](https://github.com/udacity/reactnd-project-would-you-rather-starter/blob/master/CONTRIBUTING.md).
