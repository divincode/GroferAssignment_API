This API is built as per the assignment sheet given  -

This project is built on Node.js and mongodb.

To run this api - clone the repository
run the following commands in the rerminal
1.npm install.
2.npm start in one terminal.
3.mongod in the other terminal.

Ps- Provided Node and MongoDB is intalled in the system.
The api which was asked to be created can be tested by using the PostMan Application.
Various test cases documentation is shown below.

It has all the functional requirements 
1.Creating an user with name and id..
2.Creating a ticket which has id,consists of the user id to whom the ticket belongs and bool to check whether the ticket has been used or not.
3.Creating an event which has list of users participating,date of the event and prize.
4.Has a api call which can allow the user to participate in a event provided the user has unused ticket and has not particpated in the event the paramters for this api is the user id and event id.
5.Has an api call for getting the winner of the event by computing it through a random fxn  and displaying it ,if the winner is declared before than the winner is declared without recomputing it.
6.Has an api to get winners of the last seven events.{if there are less than seven events than it will return the latest winners} in ascending order.

List of the routes -
Here is the list routes and the description of the routes please do have a look into it -



List of the models -
1.User Model

2.Ticket Model

3.Event Model



Screenshots of the working -