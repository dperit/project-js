---
category: Milestones
title: 'Milestone object'

layout: nil
---

The Milestone object has the following properties:

```{
  title: { type: String, required: true, unique: true },
  description: { type: String, trim: true },
  dueDate: { type: Date },
  priority: { type: String, trim: true },
  completionPercentage: { type: Number, min: 0, max: 100, default: 0 },
  status: { type: String, trim: true, default: 'open' },
  wpDependencies: [Completion],
  msDependencies: [{ type: ObjectId }],
  lastModifiedDate: {type: Date, default: Date.now },
  lastModifiedBy: { type: ObjectId, ref: 'User' }
}```
