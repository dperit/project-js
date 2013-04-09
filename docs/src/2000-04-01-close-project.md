---
category: Projects
path: '/projects/:project/close'
title: 'Close a specific project'
type: POST

layout: nil
---

This method closes the specificied project.

### Request
* **:project**: The requested project's ID.

### Response

* 200 OK: Returns the closed `Project` object.
* 500 Internal Server Error: Failed to find project.
* 500 Internal Server Error: Failed to save project.
