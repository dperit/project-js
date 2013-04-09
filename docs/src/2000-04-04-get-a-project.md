---
category: Projects
path: '/projects/:project'
title: 'Get a specific project'
type: GET

layout: nil
---

This method returns the specificied project.

### Request
* **:project**: The requested project's ID.

### Response

* 200 OK: Returns the requested `Project` object.
* 500 Internal Server Error: Failed to find project.
