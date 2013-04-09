---
category: Work Breakdown Structure
path: '/projects/:project/workbreakdown'
title: 'Delete project work breakdown structure'
type: DELETE

layout: nil
---

This method removes the specified work breakdown structure item from the
specified project. Removes any child work breakdown items as well.

### Request

* **:project**: The ID of the project which the work breakdown structure belongs to.

```{
  query: <WorkBreakdownItem>._id
}```

### Response

* 200 OK: Returns an array of `WorkBreakdownItem` objects.
* 500 Internal Server Error: Project not found.
* 500 Internal Server Error: Mongoose encountered an error saving the project.
