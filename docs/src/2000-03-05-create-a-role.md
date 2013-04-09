---
category: Roles
path: '/roles'
title: 'Create a role'
type: POST

layout: nil
---

This method allows one to create a new role.
Optionally, permissions can be included to add to the
newly created role.

### Request

```{
  title: 'My Role'[,
  permissions: [Permission] ]
}```

### Response

* 200 OK: Role created, `Role` object returned.
* 500 Internal Server Error: Title not specified.
* 500 Internal Server Error: Mongoose encountered an error while saving.
