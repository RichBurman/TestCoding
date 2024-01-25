# Practice Question 1:
# Write a Python program to calculate the sum of all the elements in a list.

def calculate_sum(lst):
    total = 0
    for num in lst:
        total += num
    return total

# Test the function
numbers = [1, 2, 3, 4, 5]
result = calculate_sum(numbers)
print("Sum of the elements:", result)

# Practice Question 2:

# Write a Python program to find the largest number in a list.

def find_largest(lst): # lst is a list of numbers
    largest = lst[0] # Initialize with the first element
    for num in lst: # Loop through the list
        if num > largest: # Compare elements
            largest = num # Update variable if larger
    return largest # Return the largest number

# Test the function
numbers = [1, 2, 3, 4, 5] # Create a list of numbers
result = find_largest(numbers) # Call the function
print("Largest number:", result) # Print the result
