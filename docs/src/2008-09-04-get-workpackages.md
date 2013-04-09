---
category: Work Packages
path: '/projects/:project/workpackages'
title: 'Get work packages'
type: GET

layout: nil
---

This method returns all work packages within the specified project.

### Request

* **:project**: The ID of the project which the work package belongs to.
* If the query contains `list`, then only the work package titles are returned.

### Response

* 200 OK: Returns an array of `WorkPackage` objects.
* 500 Internal Server Error: Project not found.
