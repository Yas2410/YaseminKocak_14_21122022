# WEALH HEALTH

![Wealth Health logo](/wh-front/src/assets/wh-logo-txt.png)

WEALTH HEALTH is an HR application for Employee Record where:

- New employees can be created
- All employees are available through a list

**Below the main goals of the project**:

- The main objective was to convert the original jQuery app to React
- React page : Employee creation form
- React page : Employee List
- State management system
- Modernize app design, if wanted
- Convert one of the jQuery plugins in a react component publish on npm (here, modal plugin was created)
- Lighthouse performance test between the two versions

**jQuery Version** is available here : [WEALTH HEALTH App - jQuery Version ](https://github.com/OpenClassrooms-Student-Center/P12_Front-end)

---

For this new version, a small backend has been created in order to store employee informations in MongoDB.
_You can directly update or delete an employee information card in MongoDB_

---

## Prerequisites

- [Git](https://git-scm.com/)
- [nodeJS](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- [npm](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/)
- [React](https://fr.reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Redux](https://redux.js.org/)

---

## Installation

### Clone the repository

```sh
git clone https://github.com/Yas2410/YaseminKocak_14_21122022.git
```

### BACK-END Launching

Move to the back-end folder : `cd wh-back`  
Install the dependencies : `npm install`  
Start local dev server : `nodemon index`  
_Server should now be running at http://locahost:5000 and you will have 16 employees registered in the MongoDB database_
& _Data can be seen in MongoDB Compass on `wealth-health_db/employees/` directory_

### FRONT-END Launching

Move to the front-end folder : `cd wh-front`  
Install the dependencies : `npm install`  
Launch the project : `npm start`

---

### LIGHTHOUSE

LightHouse performance tests for both app are available in both json and img extensions in :
`src/performances/jQuery` and `src/performances/React`
