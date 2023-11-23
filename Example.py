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

# num = 2

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

exit_program = False
manual_override = True
critical_systems_shutdown = False

if not exit_program and not critical_systems_shutdown:
    if manual_override:
        print("Shutting system down manually")
    else:
        print("This program will not exit just yet")
elif exit_program and critical_systems_shutdown is not True:
    print("Critical systems must be safely shut down before exiting the program")
else:
    print("This program will now be terminated...")


# Nested If/Else Statements Challenge

admin = True
update_required = True

if admin:
    if update_required:
        print("You are authorized to update")
    else:
        print("No update required")
else: 
    print("You need admin privileges to do this")
    
    

    

    