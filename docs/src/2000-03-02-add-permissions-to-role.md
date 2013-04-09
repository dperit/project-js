---
category: Roles
path: '/roles/:role'
title: 'Add permissions a specific role'
type: POST

layout: nil
---

This method allows one add permissions to a specific role.

### Request

```
{
  [Permission]
}
```

### Response

* 200 OK: Returns the updated `Role` object.
* 500 Internal Server Error: Failed to find role.
* 500 Internal Server Error: Mongoose encountered an error updating the user.
