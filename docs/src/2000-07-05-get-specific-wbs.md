---
category: Work Breakdown Structure
path: '/projects/:project/workbreakdown/:workbreakdownitem'
title: 'Get a specific work breakdown structure item'
type: GET

layout: nil
---

This method will return a specific work breakdown item structure in
the specified project.


### Request

* **:project**: The ID of the project which the work breakdown structure belongs to.
* **:workbreakdownitem**: The ID of the work breakdown structure item requested.

### Response

* 200 OK: Returns the requested `WorkBreakdownItem` object.
* 500 Internal Server Error: Project not found.
* 500 Internal Server Error: WorkBreakdownItem not found.
