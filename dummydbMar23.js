db.users.insert([
  { userId: "dkarp", firstName: "Dale", lastName: "Karp", email: "dkarp@pjs.com", password: "projectjs", resetMode: "false", siteAdmin: "true", registrationDate: new Date("Jan 27, 2013"), currentProject: "Project 1", lastModifiedProject: "Project 1" },
  { userId: "jmcdonald", firstName: "Jennifer", lastName: "McDonald", email: "jmcdonald@pjs.com", password: "projectjs", resetMode: "false", siteAdmin: "true", registrationDate: new Date("Jan 27, 2013"), currentProject: "Project 1", lastModifiedProject: "Project 1" },
  { userId: "dperit", firstName: "David", lastName: "Perit", email: "dperit@pjs.com", password: "projectjs", resetMode: "false", siteAdmin: "true", registrationDate: new Date("Jan 27, 2013"), currentProject: "Project 1", lastModifiedProject: "Project 1" },
  { userId: "jsilver", firstName: "Jesse", lastName: "Silver", email: "jsilver@pjs.com", password: "projectjs", resetMode: "false", siteAdmin: "true", registrationDate: new Date("Jan 27, 2013"), currentProject: "Project 1", lastModifiedProject: "Project 1" },
  { userId: "lsantos", firstName: "Louis", lastName: "Santos", email: "lsantos@pjs.com", password: "projectjs", resetMode: "false", siteAdmin: "true", registrationDate: new Date("Jan 28, 2013"), currentProject: "Project 1", lastModifiedProject: "Project 1" },
  { userId: "jrobertson", firstName: "James", lastName: "Robertson", email: "jrobertson@pjs.com", password: "projectjs", resetMode: "false", siteAdmin: "false", registrationDate: new Date("Jan 28, 2013"), currentProject: "Project 1", lastModifiedProject: "Project 1" },
  { userId: "ncovello", firstName: "Nadia", lastName: "Covello", email: "ncovello@pjs.com", password: "projectjs", resetMode: "false", siteAdmin: "false", registrationDate: new Date("Jan 28, 2013"), currentProject: "Project 1", lastModifiedProject: "Project 1" },
  { userId: "vpatel", firstName: "Vijay", lastName: "Patel", email: "vpatel@pjs.com", password: "projectjs", resetMode: "false", siteAdmin: "false", registrationDate: new Date("Jan 28, 2013"), currentProject: "Project 1", lastModifiedProject: "Project 1" },
  { userId: "yzhang", firstName: "Yue", lastName: "Zhang", email: "yzhang@pjs.com", password: "projectjs", resetMode: "false", siteAdmin: "true", registrationDate: new Date("Jan 29, 2013"), currentProject: "Project 1", lastModifiedProject: "Project 1" },
  { userId: "dnesbitt", fistName: "David", lastName: "Nesbitt", email: "dnesbitt@pjs.com", password: "projectjs", resetMode: "false", siteAdmin: "false", registrationDate: new Date("Jan 29, 2013"), currentProject: "Project 1", lastModifiedProject: "Project 1" },
  { userId: "jmartinez", firstName: "Joseph", lastName: "Martinez", email: "jmartinez@pjs.com", password: "projectjs", resetMode: "false", siteAdmin: "false", registrationDate: new Date("Jan 29, 2013"), currentProject: "Project 1", lastModifiedProject: "Project 1" },
  { userId: "sahmed", fistName: "Samira", lastName: "Ahmed", email: "sahmed@pjs.com", password: "projectjs", resetMode: "false", siteAdmin: "false", registrationDate: new Date("Jan 29, 2013"), currentProject: "Project 1", lastModifiedProject: "Project 1" }
]);


db.roles.insert([
  { title: "project manager", 
    permissions: [
      "addProject",
      "addUserToProject",
      "editProject",
      "closeProject",
      "viewAllProjects",
      "viewCurrentProject",
      "switchProjects",
      "exportProject",
      "addWorkBreakdownItem",
      "editWorkBreakdownItem",
      "deleteWorkBreakdownItem",
      "addItemToStructure",
      "moveItemInList",
      "viewWBStructure",
      "createStructureAsCopy",
      "undoWBChange",
      "redoWBChange",
      "addWorkPackage",
      "addToWPList",
      "editWorkPackage",
      "deleteWorkPackage",
      "closeWorkPackage",
      "createWPAsCopy",
      "undoWPChange",
      "redoWPChange",
      "viewDependencyTree",
      "addWorkItem",
      "editWorkItem",
      "viewWorkItem",
      "deleteWorkItem",
      "closeWorkItem",
      "addComment",
      "editComment",
      "filterList",
      "addMilestone",
      "editMilestone",
      "deleteMilestone",
      "closeMilestone",
      "viewMilestoneList",
      "viewDeletedMilestones",
      "enableDeletedMilestones",
      "viewWPStatus",
      "viewMSStatus"
    ] },
  { title: "product manager", 
    permissions: [
      "viewAllProjects",
      "viewCurrentProject",
      "switchProjects",
      "exportProject",
      "viewWBStructure",
      "viewDependencyTree",
      "viewMilestoneList",
      "viewWPStatus",
      "viewMSStatus"
    ] },
  { title: "project lead", 
    permissions: [
      "viewCurrentProject",
      "switchProjects",
      "viewWBStructure",
      "viewDependencyTree",
      "addWorkItem",
      "editWorkItem",
      "viewWorkItem",
      "deleteWorkItem",
      "closeWorkItem",
      "addComment",
      "editComment",
      "filterList"
    ] },
  { title: "developer", 
    permissions: [
      "viewCurrentProject",
      "switchProjects",
      "viewWBStructure",
      "viewDependencyTree",
      "editWorkItem",
      "viewWorkItem",
      "closeWorkItem",
      "addComment",
      "editComment",
      "filterList"
    ] },
  { title: "tester", 
    permissions: [
      "viewCurrentProject",
      "switchProjects",
      "viewWBStructure",
      "viewDependencyTree",
      "editWorkItem",
      "viewWorkItem",
      "closeWorkItem",
      "addComment",
      "editComment",
      "filterList"
    ] },
  { title: "account manager", 
    permissions: [
      "viewCurrentProject",
      "switchProjects",
      "viewMSStatus"
    ] }
]);


db.projects.insert ([
  { title: "Project 1", clientName: "Client 1", projectDueDate: new Date("Apr 30, 2013"), status: "open", completionPercentage: 0, 
    dateCreated: new Date("Jan 29, 2013"), lastModifiedDate: new Date("Jan 29, 2013"), dateCompleted: null,
    projectUsers: [ 
                    { user: "lsantos", role: "project manager" },
                    { user: "jrobertson", role: "product manager" },
                    { user: "ncovello", role: "project lead" },
                    { user: "vpatel", role: "devloper" },
                    { user: "yzhang", role: "developer" },
                    { user: "dnesbitt", role: "tester" },
                    { user: "jmartinez", role: "tester" },
                    { user: "sahmed", role: "account manager" }
    ],
    workBreakdownItems: [
                          { _id: "514e4193002fb0e90331a83d", title: "Project1 Platform", description: "...", children: ["514e422b002fb0e90331a83e", "514e42ce002fb0e90331a840"], status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "514e422b002fb0e90331a83e", title: "Project1 Power", description: "...", children: ["514e4285002fb0e90331a83f"], status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "514e4285002fb0e90331a83f", title: "Project1 Power Detection", description: "...", children: [], status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "514e42ce002fb0e90331a840", title: "Project1 Deployment Casing", description: "...", children: [], status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "514e432e002fb0e90331a841", title: "Project1 Antenna", description: "...", children: [], status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "514e4376002fb0e90331a842", title: "Project1 RF", description: "...", children: ["514e43ed002fb0e90331a843", "514e4429002fb0e90331a844"], status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "514e43ed002fb0e90331a843", title: "Project 1 Baseband Interface", description: "...", children: [], status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "514e4429002fb0e90331a844", title: "Project1 DSP Interface", description: "...", children: [], status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "514e4469002fb0e90331a845", title: "Project1 DSP", description: "...", children: ["514e449b002fb0e90331a846", "514e44cc002fb0e90331a847", "514e44fa002fb0e90331a848"], status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "514e449b002fb0e90331a846", title: "Project1 RF Interface", description: "...", children: [], status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "514e44cc002fb0e90331a847", title: "Project1 Core", description: "...", children: [], status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "514e44fa002fb0e90331a848", title: "Project1 Output", description: "...", children: ["514e4547002fb0e90331a849", "514e4587002fb0e90331a84a"], status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "514e4547002fb0e90331a849", title: "Project1 Output Selection", description: "...", children: [], status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "514e4587002fb0e90331a84a", title: "Project1 Output Testing", description: "...", children: [], status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "514e45c2002fb0e90331a84b", title: "Project1 Controller", description: "...", children: ["514e45f5002fb0e90331a84c"], status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "514e45f5002fb0e90331a84c", title: "Project1 Event Loop", description: "...", children: [], status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "514e4627002fb0e90331a84d", title: "Project1 Application Interface", description: "...", children: ["514e4656002fb0e90331a84e"], status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "514e4656002fb0e90331a84e", title: "Project1 Panel", description: "...", children: [], status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" }
    ],
    workBreakdownStructure: [
                              { items: [
                                  "514e4193002fb0e90331a83d",
                                  "514e422b002fb0e90331a83e",
                                  "514e4285002fb0e90331a83f",
                                  "514e42ce002fb0e90331a840",
                                  "514e432e002fb0e90331a841",
                                  "514e4376002fb0e90331a842",
                                  "514e43ed002fb0e90331a843",
                                  "514e4429002fb0e90331a844",
                                  "514e4469002fb0e90331a845",
                                  "514e449b002fb0e90331a846",
                                  "514e44cc002fb0e90331a847",
                                  "514e44fa002fb0e90331a848",
                                  "514e4547002fb0e90331a849",
                                  "514e4587002fb0e90331a84a",
                                  "514e45c2002fb0e90331a84b",
                                  "514e45f5002fb0e90331a84c",
                                  "514e4627002fb0e90331a84d",
                                  "514e4656002fb0e90331a84e"  
                                ], 
                                lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" }
    ],
    workPackages: [
                    { _id: "514e4741002fb0e90331a84f", title: "Project1 Theory", description: "...", priority: "high", timeEstimate: 5, completionPercentage: 0, status: "open", dependencies: [ ], lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                    { _id: "514e47e1002fb0e90331a850", title: "Project1 Platform Assembly", description: "...", priority: "high", timeEstimate: 5, completionPercentage: 0, status: "open", dependencies: [ "514e4741002fb0e90331a84f" ], lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                    { _id: "514e488b002fb0e90331a851", title: "Project1 Antenna Assembly", description: "...", priority: "medium", timeEstimate: 7, completionPercentage: 0, status: "open", dependencies: [ "514e47e1002fb0e90331a850" ], lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                    { _id: "514e48bc002fb0e90331a852", title: "Project1 RF Assembly", description: "...", priority: "medium", timeEstimate: 5, completionPercentage: 0, status: "open", dependencies: [ "514e47e1002fb0e90331a850" ], lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                    { _id: "514e48ef002fb0e90331a853", title: "Project1 DSP Assembly", description: "...", priority: "medium", timeEstimate: 5, completionPercentage: 0, status: "open", dependencies: [ "514e47e1002fb0e90331a850" ], lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                    { _id: "514e491a002fb0e90331a854", title: "Project1 Controller Assembly", description: "...", timeEstimate: 5, completionPercentage: 0, status: "open", dependencies: [ "514e47e1002fb0e90331a850" ], lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                    { _id: "514e494c002fb0e90331a855", title: "Project1 Application Interface", description: "...", priority: "medium", timeEstimate: 5, completionPercentage: 0, status: "open", dependencies: [ "514e47e1002fb0e90331a850" ], lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                    { _id: "514e4981002fb0e90331a856", title: "Project1 Final Report WP", description: "...", priority: "low", timeEstimate: 10, completionPercentage: 0, status: "open", dependencies: [ "514e494c002fb0e90331a855" ], lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" }
    ],
    workPackageList: [
                        { items: [
                            "514e4741002fb0e90331a84f",
                            "514e47e1002fb0e90331a850",
                            "514e488b002fb0e90331a851",
                            "514e48bc002fb0e90331a852",
                            "514e48ef002fb0e90331a853",
                            "514e491a002fb0e90331a854",
                            "514e494c002fb0e90331a855",
                            "514e4981002fb0e90331a856"
                          ],
                          lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" }
    ],
    workItems: [
                { _id: "514e4a18002fb0e90331a857", title: "Project1 Work Item 1", description: "...", workPackages: ["514e4741002fb0e90331a84f"], assignedUsers: ["ncovello", "dnesbitt"], dependencies: [], startDate: new Date("Jan 31, 2013"), timeEstimate: 2, timeSpent: 0, completionPercentage: 0, status: "open",
                  comments: [
                    { title: "1st comment Work Item 1", text: "This is work item 1 first comment", postedBy: "jmcdonald", datePosted: new Date("Jan 30, 2013") }
                  ],
                  lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                { _id: "514e4a47002fb0e90331a858", title: "Project1 Work Item 2", description: "...", workPackages: ["514e47e1002fb0e90331a850"], assignedUsers: ["vpatel", "jmartinez"], dependencies: ["514e4a18002fb0e90331a857"], startDate: new Date("Feb 2, 2013"), timeEstimate: 5, timeSpent: 0, completionPercentage: 0, status: "open",
                  comments: [
                    { title: "1st comment Work Item 2", text: "This is work item 2 first comment", postedBy: "jmcdonald", datePosted: new Date("Jan 30, 2013") }
                  ],
                  lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                { _id: "514e4a70002fb0e90331a859", title: "Project1 Work Item 3", description: "...", workPackages: ["514e47e1002fb0e90331a850"], assignedUsers: ["yzhang", "jmartinez"], dependencies: ["514e4a18002fb0e90331a857"], startDate: new Date("Feb 2, 2013"), timeEstimate: 5, timeSpent: 0, completionPercentage: 0, status: "open",
                  comments: [
                    { title: "1st comment Work Item 3", text: "This is work item 3 first comment", postedBy: "jmcdonald", datePosted: new Date("Jan 30, 2013") }
                  ],
                  lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                { _id: "514e4a98002fb0e90331a85a ", title: "Project1 Work Item 4", description: "...", workPackages: ["514e47e1002fb0e90331a850"], assignedUsers: ["ncovello", "dnesbitt"], dependencies: ["514e4a18002fb0e90331a857"], startDate: new Date("Feb 7, 2013"), timeEstimate: 5, timeSpent: 0, completionPercentage: 0, status: "open",
                  comments: [
                    { title: "1st comment Work Item 4", text: "This is work item 4 first comment", postedBy: "jmcdonald", datePosted: new Date("Jan 30, 2013") }
                  ],
                  lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                { _id: "514e4b7d002fb0e90331a85d", title: "Project1 Work Item 5", description: "...", workPackages: ["514e47e1002fb0e90331a850"], assignedUsers: ["vpatel", "jmartinez"], dependencies: ["514e4a18002fb0e90331a857"], startDate: new Date("Feb 7, 2013"), timeEstimate: 5, timeSpent: 0, completionPercentage: 0, status: "open",
                  comments: [
                    { title: "1st comment Work Item 5", text: "This is work item 5 first comment", postedBy: "jmcdonald", datePosted: new Date("Jan 30, 2013") }
                  ],
                  lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" }
    ],
    workItemList: [
                    { items: [
                        "514e4a18002fb0e90331a857",
                        "514e4a47002fb0e90331a858",
                        "514e4a70002fb0e90331a859",
                        "514e4a98002fb0e90331a85a ",
                        "514e4b7d002fb0e90331a85d"
                      ],
                      lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" }
    ],
    milestones: [
                  { _id: "514e4c51002fb0e90331a85e", title: "Project1 Theory Complete", description: "...", dueDate: new Date("Feb 2, 2013"), priority: "high", completionPercentage: 0, status: "open",
                    wpDependencies: ["514e4741002fb0e90331a84f"],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "514e4c78002fb0e90331a85f", title: "Project1 Materials Selected", description: "...", dueDate: new Date("Feb 7, 2013"), priority: "high", completionPercentage: 0, status: "open",
                    msDependencies: ["514e4c51002fb0e90331a85e"],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "514e4ca2002fb0e90331a860", title: "Project1 Materials Ordered", description: "...", dueDate: new Date("Feb 9, 2013"), priority: "high", completionPercentage: 0, status: "open",
                    msDependencies: ["514e4c78002fb0e90331a85f"],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "514e4ccd002fb0e90331a861", title: "Project1 Materials Received", description: "...", dueDate: new Date("Feb 16, 2013"), priority: "high", completionPercentage: 0, status: "open",
                    msDependencies: ["514e4ca2002fb0e90331a860"],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "514e4cfe002fb0e90331a862", title: "Project1 Materials Assembled", description: "...", dueDate: new Date("Feb 23, 2013"), priority: "high", completionPercentage: 0, status: "open",
                    msDependencies: ["514e4ccd002fb0e90331a861"],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "514e4d38002fb0e90331a863", title: "Project1 Materials Unit Tested", description: "...", dueDate: new Date("Mar 1, 2013"), priority: "medium", completionPercentage: 0, status: "open",
                    msDependencies: ["514e4cfe002fb0e90331a862"],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "514e4d6b002fb0e90331a864", title: "Project1 Indiv_idual Assembly at 33%", description: "...", dueDate: new Date("Mar 14, 2013"), priority: "medium", completionPercentage: 0, status: "open",
                    requiredCompletion: [
                      { wkpackage: "514e4741002fb0e90331a84f", percentage: 33 },
                      { wkpackage: "514e488b002fb0e90331a851", percentage: 33 },
                      { wkpackage: "514e48ef002fb0e90331a853", percentage: 33 },
                      { wkpackage: "514e491a002fb0e90331a854", percentage: 33 },
                      { wkpackage: "514e494c002fb0e90331a855", percentage: 33 }
                    ],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "514e4d9c002fb0e90331a865", title: "Project1 Materials Integration Tested", description: "...", dueDate: new Date("Mar 21, 2013"), priority: "medium", completionPercentage: 0, status: "open",
                    msDependencies: ["514e4d6b002fb0e90331a864"],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "514e4dc8002fb0e90331a866", title: "Project1 Indiv_idual Assembly at 66%", description: "...", dueDate: new Date("Mar 28, 2013"), priority: "medium", completionPercentage: 0, status: "open",
                    msRequiredCompletion: [
                      { wkpackage: "514e488b002fb0e90331a851", percentage: 66 },
                      { wkpackage: "514e48bc002fb0e90331a852", percentage: 66 },
                      { wkpackage: "514e48ef002fb0e90331a853", percentage: 66 },
                      { wkpackage: "514e491a002fb0e90331a854", percentage: 66 },
                      { wkpackage: "514e494c002fb0e90331a855", percentage: 66 }
                    ],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "514e4e30002fb0e90331a867", title: "Project1 Test Pulse Send", description: "...", dueDate: new Date("Apr 10, 2013"), priority: "medium", completionPercentage: 0, status: "open",
                    wpDependencies: [
                      "514e488b002fb0e90331a851",
                      "514e48bc002fb0e90331a852",
                      "514e48ef002fb0e90331a853",
                      "514e491a002fb0e90331a854",
                      "514e494c002fb0e90331a855"
                    ],
                    msDependencies: ["514e4dc8002fb0e90331a866"],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "514e4e5b002fb0e90331a868", title: "Project1 Test Pulse Receive", description: "...", dueDate: new Date("Apr 15, 2013"), priority: "medium", completionPercentage: 0, status: "open",
                    msDependencies: ["514e4e30002fb0e90331a867"],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "514e4e8a002fb0e90331a869", title: "Project1 Test Pulse Analysis", description: "...", dueDate: new Date("Apr 20, 2013"), priority: "medium", completionPercentage: 0, status: "open",
                    msDependencies: ["514e4e5b002fb0e90331a868"],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "514e4eb6002fb0e90331a86a", title: "Project1 Final Report MS", description: "...", dueDate: new Date("Apr 27, 2013"), priority: "low", completionPercentage: 0, status: "open",
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" }
    ], 
    milestoneList: [
                      { items: [
                        "514e4c51002fb0e90331a85e",
                        "514e4c78002fb0e90331a85f",
                        "514e4ca2002fb0e90331a860",
                        "514e4ccd002fb0e90331a861",
                        "514e4cfe002fb0e90331a862",
                        "514e4d38002fb0e90331a863",
                        "514e4d6b002fb0e90331a864",
                        "514e4d9c002fb0e90331a865",
                        "514e4dc8002fb0e90331a866",
                        "514e4e30002fb0e90331a867",
                        "514e4e5b002fb0e90331a868",
                        "514e4e8a002fb0e90331a869",
                        "514e4eb6002fb0e90331a86a" 
                        ], 
                        lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" }	 
    ]   
}]);