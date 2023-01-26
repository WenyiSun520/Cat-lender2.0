# Cat-lender2.0
Cat-lender2.0 is a web react-redux web application delicated to assist pets owner manage their furry friends' health condition, schedules, and daily routine.
- Firebase: https://cat-lender.web.app/

## Major JS Libraries
  - React JS
  - react-route-dom v6.4
  - react-redux
  - @reduxjs/toolkit
  - Formik
  - Yup Validation
## App Function
- Profile Page(also the main page)
  - Display all pets profile
  - **Add** pet profile
  - Each profile has a single Page with more detail shown, user can also **edit** or **delete** the profile on the single page
  - Singlepage also shows all events cards related to the pet
- Calender Page
  - Interactive Calender Components created by vanilla JavaScript and React
    - User can **click arraw icons** to check past and future calender
    - User can **click different date**, and corresponding events cards would generated below the calender component
    - Date that has events has a cat icon as notification
    - Calender Component provides a add-event button allowed users to **add events**
    - The right-hands side showed all upcoming events from the closet date to most future events
  - Events Card
    - Each events card contains two interaction: **edit the event detail** and **delete the events**
## Want-to-add Function
- (pending) Record Page
  - Display all record user created such as weight records, intake food amount record
  - Create new record, delete created record
  - Each created record has a singlepage with more detail, user can either edit record from the singlepage or from record page

## Why 2.0?
- Cat-lender1.0 is achieved due to its unclear structure which is hard to reorgnized and upgraded
- Cat-lender2.0 inheriteaed most functions from 1.0 version and it also apply latest redux-toolkit to structure the application in a more readble and clean way
## Programming Diary

### 01.26.2023
- Yup provides a test() function to add customized validation.
- Still need to refresh the immutability of Array Obj
### 01.25.2023
- Meet a bug saying "ERROR Warning: React has detected a change in the order of Hooks called by petEventsList. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks"
- It turns out that I use curly braces instead of angle braces. The function "DisplayEventsSyntax" later on was added a react hook, which can only be use with a angle braces.
  

### 01.24.2023
- use getTime() to compare two date is not wise, there may has some millsecond difference even though their year, month, date are same, and so the results obtained by gettime() would be different.
- if children elements are different use :first-of-type, else (children elements are the same) use :first-child

