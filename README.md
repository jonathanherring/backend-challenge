# ABS Backend Challenge

Code challenge for back end engineering candidate

## Setup

1. If you haven't already, sign up for a GitHub account and install git
2. Create a new repository called `backend-challenge` and set it to private
3. Clone this repository: `git clone https://github.com/abs-warranty/backend-challenge.git`
4. `cd` into the cloned `backend-challenge` repo and add your private repo as a remote so you can push to it: `git remote add origin git@github.com:YOUR_USERNAME/backend-challenge.git`
5. Create a new branch off the `master` branch in your `backend-challenge` repo: `git checkout -b challenge`
6. Copy the .env.example file to a .env file for your local environment variables
7. After you have finished coding, commit and push your code.
8. Open a PR into the `master` branch in your private repo
9. Share your private repo with the ABS team so that we can review your pull request

## Challenge

Demonstrate your ability to extend an Express API by implementing the following:

- Create a POST /registrations endpoint
  - Be sure that inserted registration property types are consistent with provided examples
- Extend the GET /registrations endpoint to be able to query by customer name
- Extend the GET /registrations endpoint to be able to query `enrollDate` date ranges
- Create a GET /registrations/{registration_id}/claims endpoint
  - Extend this endpoint to allow for querying
- Create a GET /registrations/{registration_id}/claims/{claim_id} endpoint

You may add any additional dependencies you may need for this challenge, and feel free to make new files or show off any
additional skills.

## Sample Data

Provided are two example registrations you you may copy and insert directly into Mongo so the object ids and dates are
inserted correctly.

Pay attention to the types of each field and be sure that the API properly saves the value types into Mongo.

```json
{
  "_id": { "$oid": "62cd8152a48735c178bce8f0" },
  "enrollDate": { "$date": "2022-05-03T08:00:00.000Z" },
  "invoiceNumber": "123-abc",
  "customer": { "name": "Justin" },
  "vehicle": { "year": 2009, "make": "Ford", "model": "F150 Pickup 2WD" },
  "tires": [{ "make": "IRONMAN", "model": "ALL COUNTRY HT", "size": "245/70R17 110T", "retailPrice": 154.33 }],
  "claims": [
    {
      "id": 1,
      "callDate": { "$date": "2022-07-12T14:10:48.000Z" },
      "serviceInvoiceDate": { "$date": "2022-07-12T14:11:00.000Z" },
      "servicePrice": 202.79,
      "damageReason": "Main tread - puncture",
      "serviceType": "repair/replace"
    }
  ]
}
```

```json
{
  "_id": { "$oid": "60d3b68bfe23f6100fd59063" },
  "enrollDate": { "$date": "2022-01-14T08:00:00.000Z" },
  "invoiceNumber": "456-xyz",
  "customer": { "name": "Denise" },
  "vehicle": { "make": "Tesla", "model": "3", "year": 2020 },
  "tires": [{ "make": "NITTO", "model": "NIT NEO GEN", "size": "205/45ZR17XL 88W", "retailPrice": 121.28 }],
  "claims": [
    {
      "id": 2,
      "callDate": { "$date": "2022-07-14T17:01:25.422Z" },
      "serviceInvoiceDate": { "$date": "2022-07-01T00:00:00.000Z" },
      "servicePrice": 30,
      "damageReason": "Main tread - puncture",
      "serviceType": "repair/replace"
    }
  ]
}
```

## Tips

- We're looking at everything including your use of comments, your code style, the choice of frameworks or libraries you
  may decide to include, and your use of git
- Quality is more important than quantity - pretend this is production code that you are submitting for code review by
  your teammates
- Reach out if you have questions! This isn't supposed to stump you, it's designed to let you show off your skills
