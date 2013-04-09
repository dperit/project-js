---
category: Milestones
path: '/project/:project/milestones'
title: 'Get project milestones'
type: GET

layout: nil
---

This method returns all milestones in the specified project.

### Request

* If the query contains list, only milestone titles are returned.
* **:project**: The ID of the project which the milestone belongs to.

### Response

* 200 OK: Returns an array of `Milestone` objects belonging to the specified
project.
* 500 Internal Server Error: Milestone not found.
