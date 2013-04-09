---
category: Projects
path: '/project/:project'
title: 'Update a specific project'
type: POST

layout: nil
---

This method allows one to update a project's information.

### Request

* All of the following are optional

```
{
  title: 'My new project title'
  description: 'This is a new description.',
  clientName: 'Brenden Small',
  projectDueDate: <Date>,
  completionPercentage: 42,
  status: 'open' | 'closed' | 'late' | 'deleted'
}
```
### Response

* 200 OK: Returns the updated `Project` object.
* 500 Internal Server Error: Failed to find project.
* 500 Internal Server Error: Mongoose encountered an error updating the project.
