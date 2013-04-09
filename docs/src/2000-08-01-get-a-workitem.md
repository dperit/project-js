---
category: Work Items
path: '/projects/:project/workitems/:workitem'
title: 'Get a work item'
type: GET

layout: nil
---

This method returns the specified work item.

### Request

* **:project**: The ID of the project which the work item belongs to.
* **:workitem**: The ID of the work item one wishes to retrieve..

### Response

* 200 OK: Returns the requested `WorkItem` object.
* 500 Internal Server Error: `Project` not found.
* 500 Internal Server Error: `WorkItem` not found.
