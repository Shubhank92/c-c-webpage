# Vistara Case

Walkthrough

<!-- _Walkthrough, Company [Bain Capability Network](/)_ -->

**Interviewer (Case Statement): Estimate the number of breakfasts that Vistara needs to prepare for its flights from Delhi in a day.**

Candidate: I would like to ask some clarifying questions.

**Interviewer: Yes.**

Candidate: Are we accounting for international as well as domestic flights?

**Interviewer: Only domestic flights.**

Candidate: Are we considering any regular working day or a weekend?

**Interviewer: Let's consider it to be a normal working Wednesday.**

Candidate: To begin, Delhi airport has three runways which operate for both international as well as domestic flights.

Candidate: Formula for estimation = No. of flights during breakfast hours x Occupancy x No. of people opting for breakfast

**Interviewer: That sounds good. You may proceed.**

Candidate: I have seen that not more than 3 flights per hour (which is the approximate boarding time required) leaving by a particular carrier.
The breakfast hours are:

- 6 am to 8 am: An occupancy of 70% (Assumption)
- 8 am to 10 am: An occupancy of 100% (Assumption)
- 10 am to 12 pm: An occupancy of 80% (Assumption - preferable timings)

Let’s assume the capacity of the flight to be 200 people. Accounting for the people who have pre ordered - 60%.
Out of these a few may not want to eat it (10%), hence we can assume 90% are having the breakfast.

Therefore,

- 6 am to 8 am: 2 hours x 3 flights per hour x 200 x 70% x 90% x 60% = 454
- 8 am to 10 am: 2 hours x 3 flights per hour x 200 x 100% x 90% x 60% = 648
- 10 am to 12 am: 2 hours x 3 flights per hour x 200 x 80% x 90% x 60% = 518

Adding all these = 454 + 648 + 518 = 1620. Hence, Vistara will need to prepare around 1620 breakfasts in a day.

**Interviewer: Thank you. We close the case.**
