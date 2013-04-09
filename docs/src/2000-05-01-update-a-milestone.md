---
category: Milestones
path: '/project/:project/milestones/:milestone'
title: 'Update a project milestone'
type: POST

layout: nil
---

This method allows one to update a project milestone.

### Request

* **:project**: The ID of the project which the milestone belongs to.
* **:milestone**: The requested milestone's ID.

```{
  title: 'Complete jetpack designs',
  description: 'Need to complete blueprints for my rocket pack!'[,
  dueDate: <Date>,
  status: 'open' | 'late' | 'closed' | 'deleted',
  priority: 'low' | 'medium' | 'high' | 'urgent',
  wpDependencies: <WorkPackage> | <WorkPackage>._id
  msDependencies: <Milestone> | <Milestone>._id ]
}```

### Response

* 200 OK: Milestone updated, `Milestone` object returned.
* 500 Internal Server Error: Project not found.
* 500 Internal Server Error: Milestone not found.
* 500 Internal Server Error: Mongoose encountered an error while saving.
