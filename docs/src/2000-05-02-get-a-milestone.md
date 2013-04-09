---
category: Milestones
path: '/project/:project/milestones/:milestone'
title: 'Get a specific project milestone'
type: GET

layout: nil
---

This method returns the specified project milestone.

### Request

* **:project**: The ID of the project which the milestone belongs to.
* **:milestone**: The requested milestone's ID.

### Response

* 200 OK: Returns the requested `Milestone` object.
* 500 Internal Server Error: Failed to find project.
* 500 Internal Server Error: Failed to find milestone.
