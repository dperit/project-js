---
category: Work Breakdown Structure
path: '/projects/:project/workbreakdown/move'
title: 'Move a work breakdown structure item'
type: POST

layout: nil
---

This method will move the specified `WorkBreakdownItem` around in the flat
work breakdkown structure.

### Request

* **:project**: The ID of the project which the work breakdown structure belongs to.

```{
  source: <WorkBreakdownItem>._id,
  appendAfter: <WorkBreakdownItem>._id
}```

### Response

* 200 OK: Returns the newly arranged work breakdown structure.
* 500 Internal Server Error: Project not found.
* 500 Internal Server Error: Required data not provided.
* 500 Internal Server Error: Could not find specified WorkBreakdownItems.
