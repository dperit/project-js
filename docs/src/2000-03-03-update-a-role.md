---
category: Roles
path: '/roles/:role'
title: 'Update a specific role'
type: PUT

layout: nil
---

This method allows one to update a role's information.

### Request

* All of the following are optional (but as there is only
one parameter here, not sending it would make this pointless!)

```
{
  title: 'My new role title'
}
```
### Response

* 200 OK: Returns the updated `Role` object.
* 500 Internal Server Error: Failed to find role.
* 500 Internal Server Error: Did not send the required parameters
* 500 Internal Server Error: Mongoose encountered an error updating the role.
