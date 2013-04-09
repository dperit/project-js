---
category: Users
path: '/users/:user'
title: 'Update a specific user'
type: POST

layout: nil
---

This method allows one to update a user's information.

### Request

* All of the following are optional

```
{
  firstName: 'Bob',
  lastName: 'Loblaw',
  email: 'bob@loblaw.com',
  password: <password>,
  siteAdmin: true|false
}
```
### Response

* 200 OK: Returns the updated `User` object.
* 500 Internal Server Error: Failed to find user.
* 500 Internal Server Error: Mongoose encountered an error updating the user.
