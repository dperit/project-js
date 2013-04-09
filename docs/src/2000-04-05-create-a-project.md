---
category: Projects
path: '/projects'
title: 'Create a project'
type: POST

layout: nil
---

This method allows one to create a new project.

### Request

```{
  title: 'My Project',
  description: 'This is a description.',
  clientName: 'John McGurk',
  [ projectDueDate: <Date>, ]
  status: 'open' | 'closed' | 'late' | 'deleted'
}```

### Response

* 200 OK: Project created, `Project` object returned.
* 500 Internal Server Error: Missing required data.
* 500 Internal Server Error: Mongoose encountered an error while saving.
