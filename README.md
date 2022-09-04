This is a book management API built with Mongoose, MongoDB, express and ofcourse NodeJs

# Routes and Endpoints

## /users

POST: Create a new user
GET: Fetch the list of user

## /users/{id}

GET: Get the user by id
PUT: Update a user by id
DELETE: Delete a user by id (Only if he doesn't have any unreturned book) (Is there any fine pending?)

## /users/subscription-details/{id}

GET: Get the subscription details of a user by id

1. Date of Subscription
2. Valid till
3. Fine (if any)

## /books

GET: Get the list of all the bookd
POST: Create/Add a new book

## /books/{id}

GET: Get a book by id
PUT: Update a book by id
DELETE: Delete a book by id

## /books/issued

GET: Get the list of issued books

## /boos/issued/withFine

GET: Get the list of issued books with fine

# Subscriptions:

- Basic - 3 mo
- Standard - 6 mo
- Premium - 12 mo

If the subs date is 01/08/2022
and Subs type is Standard
the valid date will be 01/02/2023

If there is an unreturened book, which is to be returned on 01/01/23, then he gets a fine of Rs. 100

If he has an unreturned book even after the expiration of subscription then a fine of Rs. 200
