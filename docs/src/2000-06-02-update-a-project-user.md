---
category: Project Users
path: '/projects/:project/users/:projectUser'
title: 'Update a user role in project'
type: POST

layout: nil
---

This method allows one to update a specific user within the specified project.

### Request

* **:project**: The ID of the project which the project user belongs to.
* **:projectUser**: The ID of the user which one wishes to update.

```
{
  roleId: <Role>_id
}
```
### Response

* 200 OK: Returns the updated `User` object.
* 500 Internal Server Error: Failed to find project.
* 500 Internal Server Error: Failed to find user.
* 500 Internal Server Error: Mongoose encountered an error updating the user.
