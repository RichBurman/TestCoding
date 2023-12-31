# # Determining Truth With Logical Operators Challenge
# print('# Determining Truth With Logical Operators Challenge')
# a = 10
# b = 5

# result_one = a > b and a > 10
# result_two = a == 5 or b < 5
# result_three = not result_two

# print(result_one)
# print(result_two)
# print(result_three)

# # Python-Specific Operators - truthy falsy Challenge
# print('# Python-Specific Operators - truthy falsy Challenge')
# a = []
# b = ""
# c = "test"
# d = 0.0
# e = 1

# print(bool(a))
# print(bool(b))
# print(bool(c))
# print(bool(d))
# print(bool(e))

# # Checking Containment with Containment Operators
# print('# Checking Containment with Containment Operators')
# print('Program' in 'Programming')
# print('spam' in ['spam', 'egg'])
# print('sausage' not in ['spam', 'egg'])

# # If/Else Statements
# # print('# If/Else Statements')
# # number = int(input("Please enter a number:"))

# # if number == 5:
# #     print(f"{number} is equal to 5")
# # else:
# #     print(f"{number} is not equal to 5")

# # If/Else Statements Challenge
# a = 10
# b = 20
# result = None

# # Write your if statement here:
# if a == b:
# 	result = 'a has the same value as b' 
# else:
# 	result = 'a has not got the same value as b'


# print(result);

# Ternary Expressions in Python

# my_boolean = False

# my_string = "Hello" if my_boolean else "World"

# print(my_string)

# # Ternary Expressions in Python Challenge

# full_access = True
# result = None

# result = True if full_access else False
 
# print(result)

# Fizz Buzz Challenge

# num = int(input("Please enter a number:"))

# if num % 3 == 0 and num % 5 == 0: # if the number is divisible by 3 and 5
#     print("FizzBuzz")
# elif num % 3 == 0: # if the number is divisible by 3
#     print("Fizz")
# elif num % 5 == 0: # if the number is divisible by 5
#     print("Buzz")
# else: # if the number is not divisible by 3 or 5
#     print(f"{num} is not divisible by 3 or 5") # with added text
#     print(num) # without added text

# # Multiple Conditions (If/Elif/Else)
# number = int(input("Please enter a number:"))

# if number > 5:
#     print(f"{number} is greater than 5")
# elif number < 5:
#     print(f"{number} is less than 5")
# else:
#     print(f"{number} is not greater than, or less than 5. Therefore, {number} must be equal to 5.")

#if elif else Challenge

# day = 'Friday'

# if day == 'Monday':  
#     print('Meeting at 9:00')
# elif day == "Wednesday":
#     print("Meeting at 2:00")
# elif day == "Friday":
#     print("Meeting at 4:00")
# else:
#     print("No meetings today")
    
# Nested If/Else Statements

# exit_program = False
# manual_override = True
# critical_systems_shutdown = False

# if not exit_program and not critical_systems_shutdown:
#     if manual_override:
#         print("Shutting system down manually")
#     else:
#         print("This program will not exit just yet")
# elif exit_program and critical_systems_shutdown is not True:
#     print("Critical systems must be safely shut down before exiting the program")
# else:
#     print("This program will now be terminated...")


# # Nested If/Else Statements Challenge

# admin = True
# update_required = True

# if admin:
#     if update_required:
#         print("You are authorized to update")
#     else:
#         print("No update required")
# else: 
#     print("You need admin privileges to do this")

#  For Loops

# Return integers from 1 through 5
# for i in range(1,5,1):
#     print(i)

# Example 2 

# foods = ['bacon', 'sausage', 'egg', 'spam']

# for ind in range(len(foods)):
# 	# In this example only the index is iterated over not the value
#     print(ind, foods[ind])
# print(foods)
# # In this case we need to calculate the length of the foods collection
# # Then we generate a range of integers equal to that length
# # Then we iterate over that range of integers

# # Example 3

# users = ['anna', 'chris', 'brian']
# for i in range(len(users)):
#     users[i] = users[i].capitalize()
    
# print(users)

# How Example 3 works

# users = ['anna', 'chris', 'brian']: Initializes a list called users with three strings.

# for i in range(len(users)):: This is a loop that iterates through the indices of the users list. 
# The range(len(users)) generates a sequence of numbers from 0 to the length of the users list minus 1.

# users[i] = users[i].capitalize(): For each iteration of the loop, 
# it takes the string at the current index i from the users list, 
# capitalizes the first letter of the string using the capitalize() method, 
# and then assigns it back to the same index in the users list. 
# This effectively modifies each string in the list to have its first letter capitalized.

# After the loop, print(users):
#  Prints the modified list of users after capitalizing the first letter of each name.


# While Loops

# countdown_number = 10

# print("Initiating Countdown Sequence...")
# print("Lift Off Will Commence In...")

# while countdown_number >= 0:
#     print(f"{countdown_number} seconds...")
#     countdown_number -= 1

# print("And We Have Lift Off!")

# Example 2

# play_game = True

# while play_game:
#     continue_playing = input("Would you like to continue playing the game? y/n ")
    
#     if continue_playing.lower() == "y":
#         print("You have decided to continue playing the game.")
#     elif continue_playing.lower() == "n":
#         print("Now closing the game...")
#         play_game = False
#     else:
#         print("That is not a valid option. Please try again.")

# print("Thanks for playing")

# How Example 2 Works
# Here we’ve declared a variable called play_game which is set to True. 
# While play_game is True, we do the following. 
# First, we ask the user if they wish to continue playing the game. 
# We indicate the answer should be yes or no (“y/n”). 
# We then store this value in a variable called continue_playing. 
# We then check to see if continue_playing is equal to “y”. 
# If it is, then we tell them that they’ve decided to continue playing.

# NOTE: We’ve used the .lower() method, just in case a user uses an uppercase input. 
# When working with uppercase and lowercase, it’s important to note that, while they are the same letter, 
# they are not the same Unicode decimal.

# If this is the case, then the while loop will begin its next cycle, 
# and the user will be prompted again. 
# Else if continue_playing is equal to “n”, then we inform them that they’ve decided to quit the game, 
# and we set the play_game variable to False. Now that the play_game variable is no longer True, 
# the program will exit the loop and print out, “Thanks for playing.” Lastly, 
# if the user enters something other than y or n, 
# then they’ll be informed that their decision was invalid and they need to try again.

# Example 3
# x = 0
# while x < 10:
#     print(x)
#     x += 1

# How Example 3 Works
# Here we’ve initialized a variable called x to 0.
# We then have a while loop that will run as long as x is less than 10.
# We then print out the value of x and then increment it by 1.
# This will continue until x is no longer less than 10.
# Once x is equal to 10, the loop will exit and the program will terminate.

# Break, Continue, and Pass

# The break statement allows you to exit from the loop based on an external condition. 
# The loop will finish at that point.

# The continue allows you to skip over part of the loop based on an external condition. 
# However, the program will go back to the beginning of the loop and continue.

# The pass statement allows you to handle the condition without the loop being affected in any way. 
# The loop will carry on as normal. 
# In the image, you can see the flow of the code does not leave the loop but carries on. 
# It is not ignored by the interpreter like a comment but it is not executed so results in no operation. 
# The pass statement is frequently used when developing to allow code to run 
# before you have fully figured out the logic you intend.

# Examples of Break, Continue, and Pass

# Break

# for number in range(10):
#     if number == 6:
#         break    # break here

#     print(f'Number is  {number}')

# print('Left the loop')

# Continue

# for number in range(10):
#     if number == 5:
#         continue    # continue here

#     print(f'Number is  {number}')

# print('Left the loop')

# Pass

# for number in range(10):
#     if number == 5:
#         pass    # pass here

#     print(f'Number is  {number}')

# print('Left the loop')

    
# Another Break Example

# x = 0
# while True:
#     if x == 8:
#         break 
#     print(x)
#     x += 1

# Another Pass Example

x = 0
while x < 14:
    if x > 4 and x < 11:
        pass
    else:
        print(x)
    x += 1 

# x = 0: Initializes a variable x with the value 0.

# while x < 14:: This is a while loop that continues to execute the indented block of code 
# as long as the condition x < 14 is true.

# Inside the loop:

# if x > 4 and x < 11:: Checks if the value of x is greater than 4 and less than 11.

# If the condition is true, the pass statement is executed. 
# The pass statement is a no-operation statement, meaning it does nothing 
# and allows the loop to continue to the next iteration.

# If the condition is false (i.e., x is not between 5 and 10), the else block is executed.
# print(x): Prints the current value of x if the condition in the else block is true.

# x += 1: Increments the value of x by 1.

# The loop continues to execute until x is no longer less than 14.
    
# Nested Iteration

x = 0
while x <= 3:
    y = 200
    while y <= 203:
        print(x,y)
        y += 1
    x += 1

# x = 0: Initializes a variable x with the value 0.

# while x <= 3:: This is the outer while loop that continues to execute the 
# indented block of code as long as the condition x <= 3 is true.

# y = 200: Initializes a variable y with the value 200. 
# This happens at the beginning of each iteration of the outer loop.

# while y <= 203:: This is the inner while loop. 
# It continues to execute the indented block of code as long as the condition y <= 203 is true.

# print(x, y): Prints the current values of x and y. 
# The values are printed for each iteration of the inner loop.

# y += 1: Increments the value of y by 1.

# The inner while loop continues to execute until the condition y <= 203 becomes false. 
# Once that happens, the control returns to the outer while loop.

# x += 1: Increments the value of x by 1. 
# This happens at the end of each iteration of the outer loop.

# The outer while loop continues to execute until the condition x <= 3 becomes false. 
# The code inside the inner while loop prints pairs of values for x and y. 


    