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
  

## Programming Diary

### Work need to be done:

- SingleProfle with the pet's events showing below
- Add notification to each days that has events
- Beautify prtsprofile section and events section
- allow user to edit pets profile and events
- allow user to delete pets profile and events
- weight tracker
### 01.24.2023
- use getTime() to compare two date is not wise, there may has some millsecond difference and the results obtained by gettime() would be different.
- 2013-01-23 also has a different getTime() result comparing from 2013-1-23
### 01.23.2023
 
- Add calender tab and add event entries
- Add display event under selced Date
