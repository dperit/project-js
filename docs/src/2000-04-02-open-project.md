---
category: Projects
path: '/projects/:project/open'
title: 'Open a specific project'
type: POST

layout: nil
---

This method opens the specificied project.

### Request
* **:project**: The requested project's ID.

### Response

* 200 OK: Returns the opened `Project` object.
* 500 Internal Server Error: Failed to find project.
* 500 Internal Server Error: Failed to save project.
