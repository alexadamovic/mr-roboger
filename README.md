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

Test: "'Won't you be my neighbor?' should take highest priority, followed by 'Boop", and lastly 'Beep!'"
Code:
neighborhood(32);
Expected Output: [13] = "Won't you be my neighbor", [21] = "Boop", [32] = "Won't you be my neighbor"