This API is built as per the assignment sheet given  -

This project is built on Node.js and mongodb.

To run this api - clone the repository 

run the following commands in the rerminal
1.npm install.

2.npm start in one terminal.

3.mongod in the other terminal.

Ps- Provided Node and MongoDB is intalled in the system and it run on localhost:8080

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

![Screenshot from 2021-05-30 21-06-14](https://user-images.githubusercontent.com/35135348/120110612-cda9bc00-c18b-11eb-8e59-7601ab7d2b7f.png)


List of the models -

1.User Model

![Screenshot from 2021-05-30 21-08-20](https://user-images.githubusercontent.com/35135348/120110633-e2864f80-c18b-11eb-9bc3-caae82fd632e.png)


2.Ticket Model

![Screenshot from 2021-05-30 21-08-27](https://user-images.githubusercontent.com/35135348/120110647-f2059880-c18b-11eb-9ecf-7e269cf57df3.png)


3.Event Model

![Screenshot from 2021-05-30 21-08-33](https://user-images.githubusercontent.com/35135348/120110654-fe89f100-c18b-11eb-88e2-f8188be2611a.png)
 

Screenshots of the working -

![Screenshot from 2021-05-30 21-21-00](https://user-images.githubusercontent.com/35135348/120111085-20847300-c18e-11eb-864c-553a2d24b798.png)

![Screenshot from 2021-05-30 21-21-27](https://user-images.githubusercontent.com/35135348/120111104-398d2400-c18e-11eb-844c-688989336158.png)

![Screenshot from 2021-05-30 21-21-48](https://user-images.githubusercontent.com/35135348/120111180-8ffa6280-c18e-11eb-8b57-eee78599fa44.png)
