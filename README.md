# _Mr. Roboger's Neighborhood_

#### By _**Alex Adamovic**_

#### _A JavaScript web application that takes an integer and returns a range of numbers with some quirky substitutions_

## Technologies Used

* _HTML_
* _JavaScript_
* _CSS_
* _jQuery_
* _Bootstrap_

## Description

_This simple JavaScript web application takes an integer submission from the user and transforms it into a string of numbers with substitutions based on the following set of rules:_

-_Numbers that contain a 1: all digits are replaced with 'Beep!'_
-_Numbers that contain a 2: all digits are replaced with 'Boop'_
-_Numbers that contain a 3: all digits are replaced with "Won't you be my neighbor?"_
-_These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third._

## Live Link

* _https://alexadamovic.github.io/mr-roboger/_

## Setup/Installation Requirements

* _clone the repository at https://github.com/alexadamovic/mr-roboger to your desktop_
* _navigate to the desktop/mr-roboger folder_
* _open index.html in your browser or view code in your application of choice_

## Known Bugs

* _None_

## License

_MIT License_

Copyright (c) _2022_ _Alex Adamovic_

## Tests

#### Describe: neighborhood()

Test: "It should take a number and return an array"
Code:
neighborhood(0);
Expected Output: [0]

Test: "It should take a number and return an array from 0 to the inputted number"
Code:
neighborhood(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should convert the number array to a string"
Code:
neighborhood(5);
Expected Output: "0,1,2,3,4,5"

Test: "It should convert the string to a string array"
Code:
neighborhood(5);
Expected Output: ["0", "1", "2", "3", "4", "5"]

Test: "It should replace any string element that contains a 1 with 'Beep!'"
Code:
neighborhood(5);
Expected Output: ["0", "Beep!", "2", "3", "4", "5"]

Test: "It should replace any string element that contains a 2 with 'Boop'"
Code:
neighborhood(5);
Expected Output: ["0", "Beep!", "Boop", "3", "4", "5"]

Test: "It should replace any string element that contains a 3 with 'Won't you be my neighbor?'"
Code:
neighborhood(5);
Expected Output: ["0", "Beep!", "Boop", "Won't you be my neighbor?", "4", "5"]

Test: "'Won't you be my neighbor?' should take highest priority in replacement order, followed by 'Boop", and lastly 'Beep!'"
Code:
neighborhood(32);
Expected Output: [13] = "Won't you be my neighbor", [21] = "Boop", [32] = "Won't you be my neighbor"

Test: "It should convert the final array back to a string with proper spacing"
Code:
neighborhood(5);
Expected Output: "0, 'Beep!', 'Boop', 'Won't you be my neighbor?', 4, 5"