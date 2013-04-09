---
category: Projects
title: 'Project object'

layout: nil
---

The Project object has the following properties:

```{
  title: { type: String, required: true },
  description: { type: String, trim: true },
  clientName: { type: String, trim: true },
  projectDueDate: { type: Date },
  completionPercentage: { type: Number, min: 0, max: 100, default: 0 },
  status: { type: String, trim: true, default: 'open' },
  dateCreated: { type: Date, default: Date.now },
  lastModifiedDate: { type: Date, default: Date.now },
  dateCompleted: { type: Date },
  projectUsers: [ProjectUser],
  workBreakdownStructure: [WorkBreakdownItem],
  milestones: [Milestone],
  workPackages: [WorkPackage],
  workItems: [WorkItem]
}```
