---
category: Work Packages
path: '/projects/:project/workpackages'
title: 'Create work package'
type: POST

layout: nil
---

This method creates a new `WorkPackage` and adds it to the project's work package list.

### Request

* **:project**: The ID of the project which the work package belongs to.

```{
  title: 'Create rocket jets',
  description: 'Tasks required to create a rocket jet',
  timeEstimate: <Int> || 0,
  status: 'open' || 'closed' || 'late' || 'deleted',
  priority: 'low' || 'medium' || 'high' || 'urgent',
  dependencies: [<WorkPackage>>._id]
}```

### Response

* 200 OK: Returns the new `WorkPackage` object.
* 500 Internal Server Error: Project not found.
* 500 Internal Server Error: Required data not provided.
* 500 Internal Server Error: Mongoose encountered an error saving the project.
