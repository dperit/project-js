---
category: Roles
path: '/roles/:role'
title: 'Delete role or permissions'
type: DELETE

layout: nil
---

This method allows one to delete a role. If the request body
contains a `permissons` array of `Permission` object IDs, only
the sent permissions will be deleted.

### Request

* The following is optional

```
{
  ["permissionID"]
}
```

### Response

* 200 OK: Returns the updated `Role` object if only permissions deleted.
* 200 OK: Returns an empty body if the entire role is deleted.
* 500 Internal Server Error: Failed to find role.
* 500 Internal Server Error: Mongoose encountered an error updating the role.
* 500 Internal Server Error: Mongoose encountered an error deleting the role.
