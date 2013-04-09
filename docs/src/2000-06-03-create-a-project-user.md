---
category: Project Users
path: '/projects/:project/users'
title: 'Add user to project'
type: POST

layout: nil
---

This method allows one to add a user to the specified project.

### Request

* **:project**: The ID of the project which the project user belongs to.

```{
  userId: <User>._id,
  roleId: <Role>._id
}```

### Response

* 200 OK: User added to project, `User` object returned.
* 500 Internal Server Error: Required data not specified.
* 500 Internal Server Error: Mongoose encountered an error while saving.
