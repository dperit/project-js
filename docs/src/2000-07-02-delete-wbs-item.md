---
category: Work Breakdown Structure
path: '/projects/:project/workbreakdown/:workbreakdownitem'
title: 'Delete a work breakdown structure item'
type: POST

layout: nil
---

This method will remove the specified `WorkBreakdownItem` and any children
that may belong to it.

### Request

* **:project**: The ID of the project which the work breakdown structure belongs to.
* **:workbreakdownitem**: The ID of the work breakdown structure item requested.

### Response

* 200 OK: Returns the removed `WorkBreakdownItem`.
* 500 Internal Server Error: Project not found.
* 500 Internal Server Error: WorkBreakdownItem not found.
