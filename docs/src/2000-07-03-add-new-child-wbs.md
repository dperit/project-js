---
category: Work Breakdown Structure
path: '/projects/:project/workbreakdown/:workbreakdownitem'
title: 'Add a new child work breakdown structure item'
type: POST

layout: nil
---

This method will add any `WorkBreakdownItem` IDs sent in the request as
children to the specified `WorkBreakdownItem`.

### Request

* **:project**: The ID of the project which the work breakdown structure belongs to.
* **:workbreakdownitem**: The ID of the work breakdown structure item requested.

```{
  children: [<WorkBreakdownItem>._id]
}```

### Response

* 200 OK: Returns the updated `WorkBreakdownItem`.
* 500 Internal Server Error: Project not found.
* 500 Internal Server Error: WorkBreakdownItem not found.
