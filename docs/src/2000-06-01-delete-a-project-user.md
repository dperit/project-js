---
category: Project Users
path: '/projects/:project/users/:projectUser'
title: 'Remove a user from project'
type: DELETE

layout: nil
---

This method allows one to remove a user from a project.

### Request

* **:project**: The ID of the project which the project user belongs to.
* **:projectUser**: The ID of the user which one wishes to update.

### Response

* 200 OK: Returns the removed `User` object.
* 500 Internal Server Error: Failed to find user in project.
* 500 Internal Server Error: Mongoose encountered an error updating the project.
