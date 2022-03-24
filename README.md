# CodeGenerator

## User Story
For this homework, a company wants me to create a random password generator.  Starter code was provided.  This password generator
gives the user the ability to pick from uppercase, lowercase, special characters and numbers.  It also asks for the length of the 
password which must be between 8 & 128.  Once finished, you will be able to get random passwords based on the criteria that you 
provided.

## My Task
Create a js file that helps the page respond the way the company asks.  From picking specific characteristics to the length of the password.

## Acceptance Citeria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Github URL
https://mclanea92.github.io/CodeGenerator/


## Screenshots
This image below shows the arrays made with all the characters broken up into 4 variables in arrays.

![Arrays of special characters for the code generator to pull from.](./array.png)



The image below takes into account what choices that the user has made to create the password with their specifications.

![selector for specific elements to create the password.](./password.png)



