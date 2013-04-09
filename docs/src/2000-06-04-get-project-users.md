---
category: Project Users
path: '/projects/:project/users'
title: 'Get project users'
type: GET

layout: nil
---

This method returns all users that belong to a specified project.

### Request

* **:project**: The ID of the project which the milestone belongs to.

### Response

* 200 OK: Returns an array of `User` objects.
* 500 Internal Server Error: Project not found.
