---
category: Work Packages
path: '/projects/:project/workpackages/:workpackage'
title: 'Get a work package'
type: GET

layout: nil
---

This method returns the specified `WorkPackage`.

### Request

* **:project**: The ID of the project which the work package belongs to.
* **:workpackage**: The ID of the work package one wishes to retrieve..

### Response

* 200 OK: Returns the updated `WorkPackage` object.
* 500 Internal Server Error: `Project` not found.
* 500 Internal Server Error: `WorkPackage` not found.
