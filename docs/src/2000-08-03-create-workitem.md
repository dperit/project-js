---
category: Work Items
path: '/projects/:project/workitems'
title: 'Create work item'
type: POST

layout: nil
---

This method creates a new `WorkItem` and adds it to the project's work item list.

### Request

* **:project**: The ID of the project which the work breakdown structure belongs to.

```{
  title: 'Buy rocket parts',
  description: 'Buy rocket parts at Home Depot',
  timeEstimate: <Int> || 0,
  timeSpent: <Int> || 0,
  status: 'open' || 'closed' || 'late' || 'deleted',
  ownCompletionPercentage: <Int> || 0
  dependencies: [<WorkItem>._id],
  workPackages: [<WorkPackage>._id],
  assignedUsers: [<User>._id],
  comments: [<Comment>._id]
}```

### Response

* 200 OK: Returns the new `WorkItem` object.
* 500 Internal Server Error: Project not found.
* 500 Internal Server Error: Required data not provided.
* 500 Internal Server Error: Mongoose encountered an error saving the project.
