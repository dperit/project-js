---
category: Work Items
path: '/projects/:project/workitems'
title: 'Get work items'
type: GET

layout: nil
---

This method returns all work items within the specified project.

### Request

* **:project**: The ID of the project which the work item belongs to.

### Response

* 200 OK: Returns an array of `WorkItem` objects.
* 500 Internal Server Error: Project not found.
