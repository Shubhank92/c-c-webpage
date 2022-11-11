# Starbucks Case

_Walkthrough, Company [Bain Capability Network](/)_

<img src="https://github.com/Shubhank92/c-c-webpage/blob/main/src/assets/starbucks.png?raw=true" width="100%"/>

**Interviewer (Case Statement): Estimate the daily revenue of a Starbucks in Cyber Hub.**

Candidate: I have a few clarifying questions. What are the operational days and timings for the outlet?

**Interviewer: The outlet operates from Monday to Friday and the working hours are between 9 am to 11 pm.**

Candidate: Alright. Are we calculating the revenue for any normal working day or a holiday in particular?

**Interviewer: Any normal working day.**

Candidate: Are there any other Starbucks outlets in or near the complex?

**Interviewer: No, there aren’t any.**

Candidate: Are we accounting only for in-restaurant orders OR takeaways/delivery too. Also, is there a seating area?

**Interviewer: You can account for all of them for the purpose of the revenue.**

Candidate: To begin, I would like to look at the total number of employees that are making the orders and their maximum capacity of functioning in an hour.
I would then account for the peak hours and would assume the average cost of an order at Starbucks to be Rs. 400.
Now, assuming there are 3 servers making the orders, the average time taken by them to complete an order would be around 5 minutes, which would imply that in an hour, one server would make 12 orders at the maximum.
For 3 employees, this would imply the ability of a maximum of 36 orders being serviced in an hour. Accounting for the breaks of each of the workers, we can add up to around 1 hour (20 minutes each) when they won’t be functioning,
Hence, 12 orders can be subtracted from this calculation at the end.

Candidate: Can I go ahead with this assumption?

**Interviewer: Yes.**

Candidate: Dividing the day into different slots according to demand:

- 9-12pm (Before office) – Peak Hour- 100% capacity
- 12-4pm (During office) – Non Peak hour – 30% capacity
- 4-7pm (Evening) – Peak Hour – 80% capacity
- 7-11pm (Night) – Non Peak hour – 40% capacity

Calculation:

- 1st Slot (3 hours) _ 100% _ 36 orders = 108 orders
- 2nd Slot (4 hours) _ 30% _ 36 orders = 43 orders
- 3rd Slot (3 hours)_ 80% _ 36 orders = 86 orders
- 4th Slot (4 hours) _ 40% _ 36 orders = 58 orders
  Total orders/day amount to = 108 + 43 +86 + 58 – 12 (Employee break) = 283 orders
  Multiplying with the average price per order – 283 x Rs 400 = Rs. 1,13,200
  Therefore , we can assume that the daily revenue of a Starbucks in Cyber Hub to be Rs 1,13,200.

**Interviewer: That seems to be a fair number. We can close the case now.**
