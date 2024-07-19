



# import random

# abc = random.randint(1,100)
# num = 1
# target = 7
# while num<=target:
#     user = int(input("Guess Number : "))
#     if user==abc:
#         print('You Guessed it!')
#         break
#     elif user<abc:
#         print('Guess too Low')
#         print(abc)
#         pass
#     elif user>abc:
#         print('Guess too High')
#         print(abc)
#         pass
#     else:
#         print("Invalid Input")
#         print("You loose! : ",abc)
#     num += 1

# if num > target:
#     print(f'Sorry, you did not guess the number. The correct number was {target}.')

# def gcd_recursive(a, b):
#     if b == 0:
#         return a
#     else:
#         return gcd_recursive(b, a % b)

# Example usage
# print(gcd_recursive(48, 18))  # Output: 6

# dict = {"venus":0.26,"Mars":0.26,"Jupiter":0.24,"Saturn":0.78,"Neptune":0.98}
# user =  int(input("Enter Weight : "))
# ask = input("Enter which planet you to travel : ")
# for i in dict.keys():
#     if ask == i:
#         print("Weight on Earth : ",user,"Weight on ",ask," : ",user*dict[i])