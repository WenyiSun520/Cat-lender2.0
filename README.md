# Cat-lender2.0
This project is delicated to assist pets owner manage their furry friends' health condition, schedules, and daily routine.
## App Function
- Add and edit pets profile
  - (pending) Birthday Notification
- Calender function with events reminders
  - Add, edit schedules and events
- (pending) Timeline to monitor pets abnormal behaviors. This function aims to assist vets understand the health condtion of the pet before arrving the clinic

## Why 2.0?
- Cat-lender1.0 is achieved due to its unclear structure which is hard to reorgnized and upgraded
- Cat-lender2.0 inheriteaed most functions from 1.0 version and it also apply latest redux-toolkit to write the react-redux application in a more readble and clean way 
  
### Work need to be done:

- ~~Sorting all upcoming events list~~(01.24.2023)
- ~~SingleProfle with the pet's events showing below~~(01.24.2023)
- ~~Add notification to each days that has events~~(01.24.2023)
- ~~Beautify prtsprofile section and events section~~(01.24.2023)
- ~~allow user to edit pets profile and events~~(01.24.2023)
- allow user to delete pets profile and events
- weight tracker
## Programming Diary

### 01.25.2023
- Meet a bug saying "ERROR Warning: React has detected a change in the order of Hooks called by petEventsList. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks"
- It turns out that I use curly braces instead of angle braces. The function "DisplayEventsSyntax" later on was added a react hook, which can only be use with a angle braces.

### 01.24.2023
- use getTime() to compare two date is not wise, there may has some millsecond difference even though their year, month, date are same, and so the results obtained by gettime() would be different.
- if children elements are different use :first-of-type, else (children elements are the same) use :first-child

### 01.23.2023
 
- Add calender tab and add event entries
- Add display event under selced Date
