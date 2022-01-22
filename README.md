Describe: neighborhood()

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

Test: "It should replace any string element that contains a 1 with "Beep!"
Code:
neighborhood(5);
Expected Output: ["0", "Beep!", "2", "3", "4", "5"]

Test: "It should replace any string element that contains a 2 with "Boop"
Code:
neighborhood(5);
Expected Output: ["0", "Beep!", "Boop", "3", "4", "5"]