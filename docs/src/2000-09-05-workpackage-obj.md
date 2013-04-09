---
category: Work Items
title: 'Work Item object'

layout: nil
---

The Work Item object has the following properties:

```{
  title: { type: String, required: true, unique: true, trim: true, sparse: true },
  description: { type: String, trim: true },
  priority: { type: String, trim: true },
  timeEstimate: { type: Number, min: 0, default: 0 },
  timeSpent: { type: Number, min: 0, default: 0 },
  completionPercentage: { type: Number, min: 0, max: 100, default: 0 },
  status: { type: String, trim: true, default: 'open' },
  dependencies: [{ type: ObjectId }],
  lastModifiedDate: { type: Date, default: Date.now },
  lastModifiedBy: { type: ObjectId, ref: 'User' }
}```
