---
category: Projects
path: '/projects'
title: 'Get projects'
type: GET

layout: nil
---

This method returns all projects.

### Request

* If the query contains `list`, only project titles are returned.

### Response

* 200 OK: Returns an array of `Project` objects.
* 500 Internal Server Error: Mongoose returned an error.
