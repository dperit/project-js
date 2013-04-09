---
category: Authentication
title: 'Authenticating'

layout: nil
---

Project.js uses cookie-based authentication sessions. When a user does a
POST request against the /login route, a cookie is generated with a sessionID. This
cookie will be named connect.sid. The value of this cookie is the session ID. When
a request is made, the sessionID in the cookie is compared against the sessionID
on the server in order to authenticate that the session is valid.
