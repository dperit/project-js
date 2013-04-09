---
category: Work Breakdown Structure
path: '/projects/:project/workbreakdown/:workbreakdownitem'
title: 'Update a work breakdown structure item'
type: POST

layout: nil
---

This method will update the specified `WorkBreakdownItem`.

### Request

* **:project**: The ID of the project which the work breakdown structure belongs to.
* **:workbreakdownitem**: The ID of the work breakdown structure item requested.

```{
  title: "Conquer the world",
  description: "Outline for my plan to take over the world.",
  status: 'open' | 'closed' | 'late' | 'deleted'
}```

### Response

* 200 OK: Returns the updated `WorkBreakdownItem`.
* 500 Internal Server Error: Project not found.
* 500 Internal Server Error: WorkBreakdownItem not found.
* 500 Internal Server Error: Mongoose encountered an error saving the project.
