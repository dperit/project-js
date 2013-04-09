---
category: Milestones
path: '/project/:project/milestones'
title: 'Create a project milestone'
type: POST

layout: nil
---

This method allows one to create a new project milestone.

### Request

```{
  title: 'Complete jetpack designs',
  description: 'Need to complete blueprints for my rocket pack!'[,
  dueDate: <Date>,
  wpDependencies: <WorkPackage> | <WorkPackage>._id
  msDependencies: <Milestone> | <Milestone>._id ]
}```

### Response

* 200 OK: Milestone added to project, `Milestone` object returned.
* 500 Internal Server Error: Project not found.
* 500 Internal Server Error: Mongoose encountered an error while saving.
