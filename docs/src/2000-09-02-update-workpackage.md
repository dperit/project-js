---
category: Work Packages
path: '/projects/:project/workpackages/:workpackage'
title: 'Update work package'
type: POST

layout: nil
---

This method updates the specified `WorkPackage`.

### Request

* **:project**: The ID of the project which the work package belongs to.
* **:workpackage**: The ID of the work package one wishes to update.

```{
  title: 'Buy rocket parts',
  description: 'Buy rocket parts at Home Depot',
  timeEstimate: <Int>
  status: 'open' || 'closed' || 'late' || 'deleted',
  priority: 'low' || 'medium' || 'high' || 'urgent',
  dependencies: [<WorkItem>._id],
}```

### Response

* 200 OK: Returns the updated `WorkPackage` object.
* 500 Internal Server Error: `Project` not found.
* 500 Internal Server Error: `WorkPackage` not found.
* 500 Internal Server Error: Mongoose encountered an error saving the project.
