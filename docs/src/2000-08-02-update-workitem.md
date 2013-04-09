---
category: Work Items
path: '/projects/:project/workitems/:workitem'
title: 'Update work item'
type: POST

layout: nil
---

This method creates a new `WorkItem` and adds it to the project's work item list.

### Request

* **:project**: The ID of the project which the work item belongs to.
* **:workitem**: The ID of the work item one wishes to update.

```{
  title: 'Buy rocket parts',
  description: 'Buy rocket parts at Home Depot',
  timeEstimate: <Int>
  timeSpent: <Int>
  status: 'open' || 'closed' || 'late' || 'deleted',
  ownCompletionPercentage: <Int>
  dependencies: [<WorkItem>._id],
  workPackages: [<WorkPackage>._id],
  assignedUsers: [<User>._id],
  comments: [<Comment>._id]
}```

### Response

* 200 OK: Returns the updated `WorkItem` object.
* 500 Internal Server Error: Project not found.
* 500 Internal Server Error: Required data not provided.
* 500 Internal Server Error: Mongoose encountered an error saving the project.
