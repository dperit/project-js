---
category: Users
path: '/users'
title: 'Create a user'
type: POST

layout: nil
---

This method allows one to create a new user.

### Request

```{
  username: 'lawman',
  firstName: 'Bob',
  lastName: 'Loblaw',
  email: 'bob@loblaw.com',
  password: <password> [,
  siteAdmin: true|false ]
}```

### Response

* 200 OK: User created, `User` object returned.
* 500 Internal Server Error: Required data not specified.
* 500 Internal Server Error: Mongoose encountered an error while saving.
