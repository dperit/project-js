---
category: Work Breakdown Structure
path: '/projects/:project/workbreakdown'
title: 'Create or update project work breakdown structure item'
type: POST

layout: nil
---

This method will create a work breakdown structure in the project.
If an `_id` is specified for an existing `WorkBreakdownItem`, that item
is updated.

One can include an array of `WorkBreakdownItem` IDs to add as children to
the created or updated `WorkBreakdownItem`.

### Request

* **:project**: The ID of the project which the work breakdown structure belongs to.

```{
  [_id: <WorkBreakdownItem>._id, ]
  title: "Conquer the world",
  description: "Outline for my plan to take over the world.",
  [ children: [<WorkBreakdownItem>._id] ]
}```

### Response

* 200 OK: Returns an array of `WorkBreakdownItem` objects.
* 500 Internal Server Error: Project not found.
* 500 Internal Server Error: Mongoose encountered an error saving the project.
