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

# x = 0
# while x < 14:
#     if x > 4 and x < 11:
#         pass
#     else:
#         print(x)
#     x += 1 

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

# x = 0
# while x <= 3:
#     y = 200
#     while y <= 203:
#         print(x,y)
#         y += 1
#     x += 1

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

# Lists - Remember all lists starts with 0 index. 
    
# # Example 1
    
# fruits = ['apple', 'orange', 'banana', 'pear', 'plum']

# # Print all fruits
# for fruit in fruits:
#     print(fruit)

# print()

# # Get an item located in a list
# second_item = fruits[1]
# print(second_item)
# print()

# # Add an item to the list
# fruits.append('cherries')
# print(fruits)
# print()

# # Reverse the list
# fruits.reverse()
# print(fruits)

# # Sort the list alphabetically:
# fruits.sort()
# print(fruits)
    

# Example 2

# all_numbers = [1, 5, 44, 22, 13, 17, 56, 3, 88, 9, 97]
# big_numbers = []

# for num in all_numbers:
#     if num > 40:
#         big_numbers.append(num)
        
# print(all_numbers)
# print(big_numbers)


# List Slicing and Indexing

# fruits = ["apple", "banana", "peach", "pear", "plum", "orange"]
# # As lists are zero-indexed index 0 is the first element
# print(fruits[0])
# # Using an index of -1 gives the last element. Negative indexing counts from the right
# print(fruits[-1])
# print(fruits[2])

# Slicing - This slice object can take three arguments; slice(start, end, step). 

# start: Starting integer where the slicing of the object starts. Default is 0 if not provided.
# end: Integer until which the slicing takes place. The slicing stops at index end - 1. Default is size of the list if not provided.
# step: Integer value which determines the increment between each index for slicing. Default is 1 if not provided.

# Example 1

# fruits = ["apple", "banana", "peach", "pear", "plum", "orange"]
# print(fruits[::-1])

# # ::1 will reverse the list

# # Example 2

# fruits = ["apple", "banana", "peach", "pear", "plum", "orange"]
# print(fruits[0:4:2])

# this has a step of 2 so it will print the first 4 elements with a step of 2. 

# Example 3

# names = ["Mark", "Betty", "John", "Sally", "Bill", "Steven", "Mary", "Emily", "Adam"]

# name = names[2]
# print(name)

# two_names = names[2:4]
# print(two_names)

# other_names = names[1:6:2]
# print(other_names)

# Example 4

# menu = ['eggs', 'bacon', 'spam', 'spam']
# print(menu)
# print(menu.count('spam'))
# print(menu.count('eggs'))
# print(menu.index('eggs'))
# print(menu.reverse())
# print(menu)
# print(menu.append('lobster thermidor'))
# print(menu)
# print(menu.sort())
# print(menu)
# print(menu.pop())


# Example 5

# crew = ["Jean-Luc", "Wesley", "Warf", "Deanna", "William", "Data", "Geordie", "Tasha"]
# print(crew)
# crew.pop()
# print(crew)
# crew.append("Beverly")
# print(crew)
# crew.extend(["Miles", "Guinan"])
# print(crew)
# crew.sort(key=len, reverse=True)
# print(crew)

# Tuples

# It is one of the four collection data types. Unlike a list, it is not changeable. It can contain duplicate items. Those items can be of different types such as strings, integers, floats or even another tuple.
# It is defined by enclosing the items in parentheses (()) and separating them by commas (,).

# Example 1

# empty = ()
# singleton = 'hello',
# tup = 12345, 54321, 'hello!' # packing two ints and a string in a tuple
# print(empty)
# print(singleton)
# print(tup)
# print(tup[1])
# x, y, z = tup # unpacking tuple into variables
# print(z)

# Example 2

# cars = ("Tesla", "BMW", "Ferrari")
# print(cars)
# get_car = cars[1]
# print(get_car)

# car_one, car_two, car_three = cars

# print(car_one)
# print(car_two)
# print(car_three)

# Dictionaries
# A dictionary is a collection which is unordered, changeable and indexed.
# In Python dictionaries are written with curly brackets, and they have keys and values.

# Example 1

# user = {
#     "username": "Rich226402",
#     "first_name": "Rich",
#     "last_name": "Burman",
#     "age": 37
# }

# print(user)
# print(user['age'])
# user['home'] = 'UK'
# user['age'] = 38
# print(user)
# del user['home'] 
# print(user)
# print(list(user))
# print(sorted(user))
# print(user)
# print('username' in user)

# # Example 2

# spaceship = { 
#     "name": "Red Dwarf", 
#     "type": "Mining vessel", 
#     "owner" : "Jupiter Mining Corporation", 
#     "captain": "Frank Hollister"
#     }
    
# print(spaceship)

# Example 3

# keys = ['username', 'first_name', 'last_name', 'age']
# default_value = ''
# user = dict.fromkeys(keys, default_value)
# print(user)
# user['username'] = 'Rich226402'
# user['first_name'] = 'Rich'
# user['last_name'] = 'Burman'
# user['age'] = 37
# print(user)
# print(user['age'])
# print(user.get('home', "doesn't exist"))
# user['home'] = 'UK'
# user['age'] = 100
# print(user)
# del user['home'] 
# print(user)
# print(list(user.keys()))
# print(list(user.values()))
# print(user)

# Example 4

# data = {
#     "first_name": "Arthur",
#     "last_name": "Dent",
#     "species": "Human"
# }

# add your code here

# name = data["first_name"]
# print(name)

# species = data["species"]
# print(species)

# data["age"] = 42


# # this will print the data to the terminal
# print(data)

# Example 5

# user = {
#     "username": "Rich226402",
#     "first_name": "Rich",
#     "last_name": "Burman",
#     "age": 37
# }

# print(user)
# print(user.items()) # returns a list of tuples
# print(user.get('age', 0)) # gets the value of the key age
# user.update({'home': 'UK'}) # adds a new key value pair to the dictionary
# print(user)
# print(user.popitem()) # removes the last item in the dictionary
# print(user)
# user.clear() # clears the dictionary
# print(user)

# Example 6

# challenger = {
# 	"name": "Katniss Everdeen",
# 	"age": 16,
# 	"district": 12,
# 	"weapon": "Bow and Arrow", 
# 	"status": "Victor"
# }

# challenger.update({"occupation" : "Hunter"}) # adds a new key value pair to the dictionary
# occupation = challenger.get('occupation') # gets the value of the key occupation
# print(occupation) # prints the value of the key occupation
# challenger.update({"age" : 17}) # updates the value of the key age
# challenger.pop('status') # removes the key value pair status

# print(challenger) # prints the dictionary


# Sets

# A set is a collection which is unordered and unindexed.
# In Python sets are written with curly brackets.
# Sets are unordered, so you cannot be sure in which order the items will appear.
# Sets are unchangeable, meaning that we cannot change the items after the set has been created.
# Sets cannot contain duplicate items.
# Sets can contain different data types.
# Sets can be used to perform mathematical set operations like union, intersection, symmetric difference etc.
# Sets can be used to remove duplicate values from a list.
# Sets can be used to quickly check if an item is part of a set, or not.

# Example 1

# breakfast = {'bacon', 'egg', 'spam', 'spam', 'spam', 'spam', 'spam'}
# print(breakfast)
# print('egg' in breakfast)
# breakfast.add('sausage')
# print(breakfast)
# breakfast.update(['Lobster Thermidor', 'truffle pate', 'crevettes', 'shallots','aubergines'])
# print(breakfast)
# breakfast.discard('aubergines')
# print(breakfast)

# Sets have mathematical operations like union, intersection, difference, and symmetric difference.
# A union is all values that are in either set or both. The intersection is the values that are in both sets. 
# The difference is the values that are in the first set but not the second. 
# The symmetric difference is all values that are in one of the sets but not both of them.

# Example 2

# hello = set("Hello")
# world = set("World")
# print(f"The unique letters in hello are: {hello}")
# print(f"The letters in hello or world or both are: {hello|world}") # | is the symbol for union
# print(f"The letters in both hello and world are: {hello&world}") # & is the symbol for intersection
# print(f"The letters in hello but not world are: {hello-world}") # - is the symbol for difference
# print(f"The letters in hello and world but not both are: {hello^world}") # ^ is the symbol for symmetric difference

# Example 3

# product_list = ['hammer', 'saw', 'nails', 'wood', 'screws', 'paint', 'brushes', 'light bulbs'] # list of products
# products_bought = {'nails', 'screws', 'hammer', 'wood', 'saw', 'hammer', 'saw', 'nails', 'nails', 'screws', 'hammer'} # set of products bought


# products_bought.add("light bulbs") # adds light bulbs to the set
# products_bought.update(['wood', 'screws', 'saw']) # adds wood, screws and saw to the set

# has_nails = 'nails' in products_bought # checks if nails is in the set
# has_paint = 'paint' in products_bought # checks if paint is in the set

# unsold_items = set(product_list)-(products_bought) # finds the unsold items

# print(has_nails) # prints the value of has_nails
# print(has_paint) # prints the value of has_paint
# print(unsold_items) # prints the unsold items

# Iterating over Python Data Structures

# Example 1

# user = {
#     "username": "rich226402", 
#     "first_name": "Rich",
#     "last_name": "Burman",
#     "age": 38
# }

# for key, value in user.items(): # .items() returns a list of tuples
#     print(f"Key: {key}") # prints the key
#     print(f"Value: {value}") # prints the value
#     print("------------------") #   prints a line to separate the key value pairs

# Example 2
    
# # Create a set
# directions = set(['north', 'south', 'east', 'west'])

# # Print its members
# for direction in directions:
#     print(direction)

# # Add an item to the set:
# directions.add('northwest')

# print()
# # Print the members again
# # Notice the order cannot be relied upon!
# for direction in directions:
#     print(direction)

# Example 3

# data = {
# 	"first_name": "brian",
# 	"last_name": "johnson",
# 	"occupation": "student"
# }

# scores = [6, 9, 8, 7, 8, 9]

# # write your code here
# for key, value in data.items(): # .items() returns a list of tuples
#     if value != "student": # checks if the value is not equal to student
#         data[key] = value.capitalize() # capitalizes the value
# print(data)

# for ind in range(len(scores)): # iterates over the range of the length of the scores list. 
#     scores[ind] += 1 # adds 1 to each score
# print(scores)

# len(scores): This function returns the length of the scores list. In this case, scores is [6, 9, 8, 7, 8, 9], so len(scores) is 6.

# range(len(scores)): The range() function in Python generates a sequence of numbers. 
# When you provide a single argument to range(), it generates numbers starting from 0 up to, but not including, the specified value. 
# So, range(len(scores)) generates the sequence of numbers [0, 1, 2, 3, 4, 5], which corresponds to the indices of the scores list.

# for ind in range(len(scores)):: This is a for loop in Python. 
# It iterates over each value produced by range(len(scores)). 
# In this case, it iterates over the indices [0, 1, 2, 3, 4, 5]. 
# The variable ind is used as the loop variable to represent the current index during each iteration.

# So, the line for ind in range(len(scores)): 
# can be read as "for each index in the range from 0 to the length of the scores list - 1, do the following:". 
# Inside the loop, the code scores[ind] += 1 modifies the value at the current index (ind) by adding 1 to it. 
# This allows you to access and update each element in the scores list during each iteration of the loop.

# Example 4

# words =["apple", "banana", "cherry", "date", "elderberry"] # list of words

# for index in range(len(words)): # iterates over the range of the length of the words list
#     current_word = words[index] # gets the current word
#     word_length = len(current_word) # gets the length of the current word

#     print(f"The word {current_word} has {word_length} characters") # prints the current word and the length of the current word

    # Include index, word, and length in the print statement - Which helps explain even further. 

# words = ["apple", "banana", "cherry", "date", "elderberry"]

# for index in range(len(words)):
#     current_word = words[index]
#     word_length = len(current_word)

#     # Include index, word, and length in the print statement
#     print(f"Index: {index}, Word: {current_word}, Length: {word_length} characters")


# List Comprehensions
    
# Example 1
    
# combination = [(x, y) for x in [1,2,3] for y in [3,1,4] if x != y]

# The expression [(x, y) for x in [1,2,3] for y in [3,1,4] if x != y] is a list comprehension in Python that generates a list of tuples representing combinations of elements from two lists, [1,2,3] and [3,1,4], with the condition that the elements in each tuple must be different.



# for x in [1,2,3]: This part of the list comprehension iterates over each element in the list [1,2,3], and the variable x takes on each value in turn.

# for y in [3,1,4]: This part of the list comprehension is nested inside the first loop. 
#It iterates over each element in the list [3,1,4], and the variable y takes on each value in turn for each iteration of the outer loop.

# if x != y: This is a condition that filters out combinations where x is equal to y.

# (x, y): This creates a tuple with the current values of x and y.

# This list comprehension generates all combinations of elements from the two lists [1,2,3] and [3,1,4] where the elements in each tuple are not equal.
# The resulting list will look like this:

# [(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]

# Example 2

# # 1. [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
# print([i for i in range(10)])

# # 2. [0, 2, 4, 6, 8, 10]
# print([i for i in range(0,11,2)])

# # 3. [0, 1, 4, 9, 16, 25, 36, 49]
# print([x**2 for x in range(0,8)])

# # 4. [(0, 1), (1, 2), (2, 3), (3, 4), (4, 5)]
# print([((i,(i+1))) for i in range(5)])

# # 5. ['woohoo', 'woohoo', 'woohoo', 'woohoo', 'woohoo', 'woohoo', 'woohoo', 'woohoo']
# print(['woohoo' for i in range(7)])

# # 6. ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
# hw = 'hello world'
# print([i for i in hw])

# # 7. [('A', 'D'), ('A', 'E'), ('A', 'F'), ('B', 'D'), ('B', 'E'), ('B', 'F'), ('C', 'D'), ('C', 'E'), ('C', 'F')]
# ab = 'ABCDEF'
# print([(ab[i],ab[j]) for i in range(0,3) for j in range(3,6)])

# Example 3

# letters = [i for i in "Marvin"]
# print(letters)

# numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# evens = [num for num in numbers if num % 2 == 0]
# print(evens)

# Dictionary Comprehensions

# Example 1 

# fruits = ['apple', 'mango', 'banana','cherry']
# print({f:len(f) for f in fruits})

# Example 2 - explains much easier

# cards = ['king', 'queen', 'jack', 'ace']

# # write your code here

# cards_dict = {f:f.upper() for f in cards} # creates a dictionary comprehension. f:f.upper() is the key value pair. f is the key and f.upper() is the value.
# print(cards_dict)

# Nested Data Structures

# Example 1

# matrix = [
#     [11, 12, 13, 14],
#     [15, 16, 17, 18],
#     [19, 20, 21, 22],
# ]

# print([[row[i] for row in matrix] for i in range(4)]) #     [row[i] for row in matrix] for i in range(4) is a nested list comprehension.

# Example 2

# payroll = {'emp1': {'name': 'Precious', 'job': 'Mgr', 'Wage': 50000},
#      'emp2': {'name': 'Kim', 'job': 'Dev', 'Wage': 60000},
#      'emp3': {'name': 'Sam', 'job': 'Dev', 'Wage': 70000}}

# print(payroll)

# print(payroll['emp1']['name'])
# print(payroll['emp1'].get('salary'))
# print(payroll['emp1'].get('Wage'))
# payroll['emp4'] = {'name': 'Max', 'job': 'Admin', 'Wage': 30000}
# print(payroll)
# del payroll['emp3']

# for id, info in payroll.items(): # iterates over the payroll dictionary
#     print(f'\nEmployee ID: {id}') # prints the employee id
#     for key in info: # iterates over the info dictionary
#         print(f'{key} : {info[key]}') # prints the key value pairs

# First Iteration (id='emp1', info={'name': 'Precious', 'job': 'Mgr', 'Wage': 50000}):
        
# Nested Data Structures
        
# student_data = [
#     {
#         "name": "John Smith",
#         "email": "john@gmail.com", 
#         "subjects": ["Math", "Psychology", "Physics", "Chemistry", "Biology"]
        
#     },
#     {
#         "name": "Mary Jones", 
#         "email": "mary@gmail.com",
#         "subjects": ["Fine Art", "Music", "Biology", "Geography", "Politics"]
#     }
# ]
    
# print(student_data)

# Function in Python

# Basic Example

# def print_message():
#     print("Hello World!")

# print_message()

# # Example 2

# add = lambda a, b : a + b
# print(add(5, 12))


# Example 3

# # 2. This function runs for the name and age function calls
# def get_user_input(prompt):
#     return input(prompt)

# # 4. This function runs twice
# def print_out_to_console(value_to_be_printed):
#     print(value_to_be_printed)

# # 1. name and age are the first two function calls to run sequentially
# name = get_user_input("Input your name:")
# age = get_user_input("Input your age:")

# # 3. Then function calls run sequentially
# print_out_to_console(f"Your name is {name}")
# print_out_to_console(f"You are {age} years old")

# Example 4

# def print_hello_world():
#     print('Hello World!')

# print_hello_world()

# Example 5

# def print_message(name): # name is the parameter
#     print(f"Hello {name}") # name is the argument

# username = input("What's your name? ") # username is the argument
# print_message(username) # username is the argument


# Example 6

# def print_message(name="World"): #  name is the parameter
#     return f"Hello {name}" # name is the argument

# username = input("What's your name? ") # username is the argument
# print(print_message()) #    name is the argument
# print(print_message(username)) # username is the argument


# Exmaple 7

# def add_two_nums(num1, num2): # function definition with parameters
#     print(num1, num2) # function body

# add_two_nums(1,2) # function call

# Example 8

# def add_two_nums(num1, num2):
#     sum = num1 + num2
#     return sum

# result = add_two_nums(10,32)
# print(result)

# Example 9

# a function that takes 3 numbers, multiples them together and returns the result.

# def times3(num1, num2, num3): 
#     sum = num1 * num2 * num3 
#     return sum

# result = times3(1,2,3)
# print(result)

# #  a function that takes one number and returns its value squared (the number times itself)

# def square(num1):
#     return num1 ** 2
    
# result = square(4)
# print(result)

# # a function that takes two numbers and returns the result of the first number divided by the second number
# def divide(num1, num2):
#     sum = num1 / num2
#     return sum

# result = divide(30,3)
# print(result)

# Example 10

# def add_numbers(nums_tuple, min_value):
#     return sum([x for x in nums_tuple if x >= min_value])
    
# total = add_numbers((21, 4, 7, 19, 1), 15)
# print(total)

# # Example 11 

# numbers = [2, 5, 8, 10, 3, 6]

# # Calculate the sum of all numbers in the list
# total_sum = sum(numbers)

# print(f"The sum of the numbers is: {total_sum}")

# Example 12

# def addition(a, b):
#     return a + b

# print(addition(2,2))

# def add_integers(list_integers):
# 	total = 0
# 	for x in list_integers:
# 		total += x
# 	return total

# list_integers = [1, 2, 3, 4]
# print(add_integers(list_integers))

# def add_many_integers(*integers):
# 	# Rename *args to something suitable
# 	total = 0
# 	for x in integers:
# 		# As it is a tuple you can use the in keyword to iterate 
# 		total += x
# 	return total

# print(add_many_integers(1,2,3,4,5,6,7,8,9))

# def concatenate_words(**words):
# 	result = ""
# 	# As **kwargs is a dict you need to iterate over .values()
# 	for arg in words.values():
# 		result += arg
# 		result += " "
# 	return result

# print(concatenate_words(a='This', b="is", c="a", d="useful", e="feature"))

# Example 13

# # *args
# def make_string(*strings):
#     return ' '.join(strings)

# my_string = make_string("Alderaan", "Coruscant", "Dagobah", "Endor", "Hoth")
# print(my_string)

# # **kwargs
# def get_age(**data):
#     return data.get("age", "no age provided")
     
# pats_age = get_age(name="pat", level=4, age=33, occupation="postman")            
# print(pats_age)

# Example 14

# *args
# def concatenate_strings(*args): # args is a tuple
#     return ' '.join(args) # joins the tuple together with a space between each item

# result1 = concatenate_strings("Hello", "World", "from", "Python") # args is a tuple
# print(result1) #    prints the result of the concatenate_strings function

# # **kwargs
# def create_person(**kwargs): # kwargs is a dictionary
#     return f"Name: {kwargs.get('name', 'Unknown')}, Age: {kwargs.get('age', 'Unknown')}" # gets the name and age from the dictionary

# person_info = create_person(name="John", age=30, occupation="Engineer") # kwargs is a dictionary
# print(person_info) # prints the result of the create_person function

# def example_function(*args):
#     for arg in args:
#         print(arg)

# example_function(1, 2, 3, "four")

# def example_function(**kwargs):
#     for key, value in kwargs.items():
#         print(f"{key}: {value}")

# example_function(name="John", age=25, city="New York")

def check(a):
    print("Even" if a % 2 == 0 else "Odd")

check(12)
















