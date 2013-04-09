---
category: Authentication
path: '/login'
title: 'Logging in'
type: POST

layout: nil
---

This method allows a user to log in.

### Request

```{
  username: 'myUser',
  password: 'password'
}```

### Response

* 200 OK: Login accepted, session cookie generated.
* 401 Unauthorized: Bad username and/or password.
