# Swimming Pools Case

_Walkthrough, Company [Bain Capability Network](/)_

<img src="https://github.com/Shubhank92/c-c-webpage/blob/main/src/assets/swimming-pools.png?raw=true" width="100%"/>

**Interviewer (Case Statement): Estimate the number of swimming pools in Mumbai.**

Candidate: I have some clarifying questions.

**Interviewer: Yes.**

Candidate: Could you please let me know the reason for this estimation?

**Interviewer: It is for a client engaged in the business off swimming pool tiles. They want to find out if they would sustain themselves in a city like Mumbai.**

Candidate: Alright. Are we considering private pools or only public pools? To contextualize, private pools are the pools in resorts, buildings, hotels, etc and public pools refer to those in schools, sports clubs, and any sort of community center. Etc.

**Interviewer: Consider both of them.**

Candidate: Sure. Starting with commercial pools, I assume that there are approximately 20 hotels in a radius of 10 sq.km. Considering Mumbai , not every hotel has a pool. It is generally found in five-star luxury hotels. Therefore, only 70% of the hotels will have a pool. In total , we can assume that pools owned by the hospitality sector would be around 300 in Mumbai.
For public amenity pools, using a bottom-up approach we can assume that one out of five schools have a pool. We assume that there will be around 150 swimming pools including All schools, colleges clubs etc.

Additionally, there are clubhouses in residential complexes in the suburbs. Therefore, assuming that there are around 250 complexes in Mumbai which might have swimming pools out of which around 50 pools would be under-construction/repair/renovation. We include those pools as they would require tiles, too.
Considering this,
Total number of 750 pools (300+150+250+50) in Mumbai.

**Interviewer: That sounds good. We can close the case.**
