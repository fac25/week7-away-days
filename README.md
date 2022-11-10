# In-house Project - Away Days
### By: Alex - Karwan - Patrick - Suraj

Hosted on AWS [here](https://main.dw15sj5lzadq.amplifyapp.com/)

## Setup: 

Make sure you have Git and Node (v18) installed.

Clone this repo and cd into the directory.

Run ```npm install``` to install all the dependencies.

If **aws-exports.js** file is missing in SRC. Create ```aws-exports.js``` in SRC folder. Then in **aws-exports.js** paste 

```

/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_appsync_graphqlEndpoint": "https://t6hjm27iirc4lemxpostqyy6le.appsync-api.us-east-1.amazonaws.com/graphql",
    "aws_appsync_region": "us-east-1",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-6qdi6xp2hjesbenpbjhx2lle5m",
    "aws_cognito_identity_pool_id": "us-east-1:8934cb42-a35e-4c9d-9646-9ee2b181e10e",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_RkaQS8oQ3",
    "aws_user_pools_web_client_id": "215ren56amar0v60ei2qfsm9u7",
    "oauth": {},
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "NAME",
        "FAMILY_NAME",
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": [
            "REQUIRES_LOWERCASE",
            "REQUIRES_NUMBERS",
            "REQUIRES_SYMBOLS",
            "REQUIRES_UPPERCASE"
        ]
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_user_files_s3_bucket": "awaydaysimg142852-staging",
    "aws_user_files_s3_bucket_region": "us-east-1"
};


export default awsmobile;

```

To run the server ```npm start```

## User stories: 

## Core
- [ ] [As a sports enthusiast I would like to see sporting events around the world][i1]
- [ ] [As a host I would like to share/host new experiences so that I can meet new people][i7]
- [ ] As a curious person I would like to view detailed information about the hosts so that I can feel safe
- [ ] As a concerned host I would like to know more about the person that's potentially staying with me
- [ ] As a concerned user I would like to see what other people have to say about the host I will stay with 
- [ ] As a generous person I would like to invite people to sporting events so that I give back to the community

## Stretch
- [ ] As a traveller I would like to know how far the events are from the house.
- [ ] As a social user I would like to get information about nearby facilities
- [ ] As a person that doesn't recall names, I would like to have a visual representation of where the event will be
- [ ] As a person concerned with my privacy I would like to know that my personal details are safe 

<!-- Issue references -->
[i1]: https://github.com/fac25/week7-Away-Days/issues/1
[i7]: https://github.com/fac25/week7-Away-Days/issues/7


## Introduction 

### What are you building?

It became apparent that there was a hole to be filled with platform to bring together sports fans. 
What if Couchsurfing met Meetup? This mashup is what we decided to build.

### Why are you building it?

To make it easier for people to find tickets for sporting events with a place to stay. 

## Project scope 

### What are you not building?

We're not building a complete copy of couchsurfing. 

### How did you decide what features were important?

We conducted user research using a lo-fi wireframe and flow. From user feedback and our website inspirations, we managed to determine what would be the core functionality and features for our website.

## Project plan 

### How are you going to structure your sprints?

We split our project idea into multiple features - features that will be used across the platform. Once those main features were identified we decided to work on them first.
The features would be built in a self-contained environment to later bring them together.

### What order are you going to build in?

1. Folder structure
2. Database
3. Essential Features to deliver a minimal viable product
4. Create the product pages using the components/features we built

### How did user research inform your plan?

We changed various aspects of each page, according to what our users told us. Thanks to the feedback received, it was brought to our attention that safety was a big factor in the product. How the users would interact with each other, how they would find out about each other before said interaction. Those became the priority for us - which was not the case before the user research.

## Requirement analysis 

### How will you ensure your project is accessible to as many users as possible?

### Are there any legal or regulatory requirements you should consider?

## Project learnings 

### Did your team work effectively?

### What would you do differently next time?

## Research and findings 

### What did you find out from user testing?

## Project outcomes 

### Were your assumptions right or wrong?

## Recommendations and conclusions 

### What features would you prioritise to build next?

### Was the project a success?

## Software Development Lifecycle stages 

### Planning 

#### What roles did your team take on?

#### Explain the roles and responsibilities of all people working within the software development lifecycle, and how they relate to the project (K2)

#### Did these roles help your team work effectively?


#### Outline how teams work effectively to produce software and how to contribute appropriately (K6) 


#### Compare and contrast the requirements of a software development team, and how they would ensure that each member (including themselves) were able to make a contribution (K6)

### Analysis 


#### What might be the intended and unintended consequences of building this product?

### Design 


#### How did you plan a user experience?


#### What technical decisions did you make?


#### Server-render vs client-render vs both


#### Relational or non-relational or no DB


#### Self-hosted or platform-as-a-service


#### Frontend first vs DB first


#### Did you create a technical specification?


#### Review methods of software design with reference to functional/technical specifications and apply a justified approach to software development (K11, S11, S12)

## Implementation/Build 

### How did you ensure your code was good?

### Create logical and maintainable code to deliver project outcomes, explaining their choice of approach. (S1)

### What interesting technical problems did you have to solve?

### Outline and apply the rationale and use of algorithms, logic and data structures. (K9, S16)

### How did you debug issues that arose?

### Apply structured techniques to problem solving to identify and resolve issues and debug basic flaws in code (S7)

### Test 

#### How did you verify your project worked correctly?

#### Identify and create test scenarios which satisfy the project specification (S6)

#### Did writing automated tests catch any bugs?

#### Analyse unit testing results and review the outcomes, correcting errors. (S4)

### Deploy 

#### Where/how did you deploy your application?

#### Review and justify their contribution to building, managing and deploying code into the relevant environment in accordance with the project specification (S10)

#### What problems did you encounter during deployment?

### Maintain 

#### Is it easy for someone make changes to the codebase?

#### Could a new person quickly be onboarded to contribute?
