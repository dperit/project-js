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
    workBreakdownItem: [
                          { _id: "PJ1Platform", itemNumber: "1", description: "Project1 Platform", ancestors: [ ], parent: null, status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "PJ1Power", itemNumber: "1.1", description: "Project1 Power", ancestors: [ "PJ1Platform" ], parent: "PJ1Platform", status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "PJ1PowerDetect", itemNumber: "1.1.1", description: "Project1 Power Detection", ancestors: [ "PJ1Platform", "PJ1Power" ], parent: "PJ1Power", status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "PJ1DeployCase", itemNumber: "1.2", description: "Project1 Deployment Casing", ancestors: [ "PJ1Platform" ], parent: "PJ1Platform", status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "PJ1Antenna", itemNumber: "2", description: "Project1 Antenna", ancestors: [ ], parent: null, status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "PJ1RF", itemNumber: "3", description: "Project1 RF", ancestors: [ ], parent: null, status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "PJ1BasebandInt", itemNumber: "3.1", description: "Project 1 Baseband Interface", ancestors: [ "PJ1RF" ], parent: "PJ1RF", status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "PJ1DSPInt", itemNumber: "3.2", description: "Project1 DSP Interface", ancestors: [ "PJ1RF" ], parent: "PJ1RF", status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "PJ1DSP", itemNumber: "4", description: "Project1 DSP", ancestors: [ ], parent: null, status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "PJ1RFInt", itemNumber: "4.1", description: "Project1 RF Interface", ancestors: [ "PJ1DSP" ], parent: "PJ1DSP", status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "PJ1Core", itemNumber: "4.2", description: "Project1 Core", ancestors: [ "PJ1DSP" ], parent: "PJ1DSP", status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "PJ1Output", itemNumber: "4.3", description: "Project1 Output", ancestors: [ "PJ1DSP" ], parent: "PJ1DSP", status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "PJ1OutputSelect", itemNumber: "4.3.1", description: "Project1 Output Selection", ancestors: [ "PJ1DSP", "PJ1Output" ], parent: "PJ1Output", status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "PJ1OutputTest", itemNumber: "4.3.2", description: "Project1 Output Testing", ancestors: [ "PJ1DSP", "PJ1Output" ], parent: "PJ1Output", status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "PJ1Controller", itemNumber: "5", description: "Project1 Controller", ancestors: [ ], parent: null, status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "PJ1EventLoop", itemNumber: "5.1", description: "Project1 Event Loop", ancestors: [ "PJ1Controller" ], parent: "PJ1Controller", status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "PJ1AppInt", itemNumber: "6", description: "Project1 Application Interface", ancestors: [ ], parent: null, status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                          { _id: "PJ1Panel", itemNumber: "6.1", description: "Project1 Panel", ancestors: [ "PJ1AppInt" ], parent: "PJ1AppInt", status: "open", completionPercentage: 0, lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" }
    ],
    workBreakdownStructure: [
                              { items: [
                                  "PJ1Platform",
                                  "PJ1Power",
                                  "PJ1PowerDetect",
                                  "PJ1DeployCase",
                                  "PJ1Antenna",
                                  "PJ1RF",
                                  "PJ1BasebandInt",
                                  "PJ1DSPInt",
                                  "PJ1DSP",
                                  "PJ1RFInt",
                                  "PJ1Core",
                                  "PJ1Output",
                                  "PJ1OutputSelect",
                                  "PJ1OutputTest",
                                  "PJ1Controller",
                                  "PJ1EventLoop",
                                  "PJ1AppInt",
                                  "PJ1Panel"  
                                ], 
                                lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" }
    ],
    workPackage: [
                    { _id: "PJ1Theory", wpNumber: 1, description: "Project1 Theory", priority: "high", timeEstimate: 5, completionPercentage: 0, status: "open", dependencies: [ ], lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                    { _id: "PJ1PlatAssembly", wpNumber: 2, description: "Project1 Platform Assembly", priority: "high", timeEstimate: 5, completionPercentage: 0, status: "open", dependencies: [ "PJ1Theory" ], lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                    { _id: "PJ1AntAssembly", wpNumber: 3, description: "Project1 Antenna Assembly", priority: "medium", timeEstimate: 7, completionPercentage: 0, status: "open", dependencies: [ "PJ1PlatAssembly" ], lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                    { _id: "PJ1RFAssembly", wpNumber: 4, description: "Project1 RF Assembly", priority: "medium", timeEstimate: 5, completionPercentage: 0, status: "open", dependencies: [ "PJ1PlatAssembly" ], lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                    { _id: "PJ1DSPAssembly", wpNumber: 5, description: "Project1 DSP Assembly", priority: "medium", timeEstimate: 5, completionPercentage: 0, status: "open", dependencies: [ "PJ1PlatAssembly" ], lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                    { _id: "PJ1ContAssembly", wpNumber: 6, description: "Project1 Controller Assembly", timeEstimate: 5, completionPercentage: 0, status: "open", dependencies: [ "PJ1PlatAssembly" ], lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                    { _id: "PJ1ApplicationInt", wpNumber: 7, description: "Project1 Application Interface", priority: "medium", timeEstimate: 5, completionPercentage: 0, status: "open", dependencies: [ "PJ1PlatAssembly" ], lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                    { _id: "PJ1FinalRep", wpNumber: 8, description: "Project1 Final Report WP", priority: "low", timeEstimate: 10, completionPercentage: 0, status: "open", dependencies: [ "PJ1ApplicationInt" ], lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" }
    ],
    workPackageList: [
                        { items: [
                            "PJ1Theory",
                            "PJ1PlatAssembly",
                            "PJ1AntAssembly",
                            "PJ1RFAssembly",
                            "PJ1DSPAssembly",
                            "PJ1ContAssembly",
                            "PJ1ApplicationInt",
                            "PJ1FinalRep"
                          ],
                          lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" }
    ],
    workItem: [
                { _id: "PJ1WkItem1", itemNumber: 1, description: "Project1 Work Item 1", workPackages: [ "PJ1Theory" ], assignedUsers: [ "ncovello", "dnesbitt" ], dependencies: [ ], startDate: new Date("Jan 31, 2013"), timeEstimate: 2, timeSpent: 0, completionPercentage: 0, status: "open",
                  comments: [
                    { commentNumber: 1, title: "1st comment Work Item 1", text: "This is work item 1 first comment", postedBy: "jmcdonald", datePosted: new Date("Jan 30, 2013") }
                  ],
                  lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                { _id: "PJ1WkItem2", itemNumber: 2, description: "Project1 Work Item 2", workPackages: [ "PJ1PlatAssembly" ], assignedUsers: [ "vpatel", "jmartinez" ], dependencies: [ "PJ1WkItem1" ], startDate: new Date("Feb 2, 2013"), timeEstimate: 5, timeSpent: 0, completionPercentage: 0, status: "open",
                  comments: [
                    { commentNumber: 1, title: "1st comment Work Item 2", text: "This is work item 2 first comment", postedBy: "jmcdonald", datePosted: new Date("Jan 30, 2013") }
                  ],
                  lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                { _id: "PJ1WkItem3", itemNumber: 3, description: "Project1 Work Item 3", workPackages: [ "PJ1PlatAssembly" ], assignedUsers: [ "yzhang", "jmartinez" ], dependencies: [ "PJ1WkItem1" ], startDate: new Date("Feb 2, 2013"), timeEstimate: 5, timeSpent: 0, completionPercentage: 0, status: "open",
                  comments: [
                    { commentNumber: 1, title: "1st comment Work Item 3", text: "This is work item 3 first comment", postedBy: "jmcdonald", datePosted: new Date("Jan 30, 2013") }
                  ],
                  lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                { _id: "PJ1WkItem4", itemNumber: 4, description: "Project1 Work Item 4", workPackages: [ "PJ1PlatAssembly" ], assignedUsers: [ "ncovello", "dnesbitt" ], dependencies: [ "PJ1WkItem1" ], startDate: new Date("Feb 7, 2013"), timeEstimate: 5, timeSpent: 0, completionPercentage: 0, status: "open",
                  comments: [
                    { commentNumber: 1, title: "1st comment Work Item 4", text: "This is work item 4 first comment", postedBy: "jmcdonald", datePosted: new Date("Jan 30, 2013") }
                  ],
                  lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                { _id: "PJ1WkItem5", itemNumber: 5, description: "Project1 Work Item 5", workPackages: [ "PJ1PlatAssembly" ], assignedUsers: [ "vpatel", "jmartinez" ], dependencies: [ "PJ1WkItem1" ], startDate: new Date("Feb 7, 2013"), timeEstimate: 5, timeSpent: 0, completionPercentage: 0, status: "open",
                  comments: [
                    { commentNumber: 1, title: "1st comment Work Item 5", text: "This is work item 5 first comment", postedBy: "jmcdonald", datePosted: new Date("Jan 30, 2013") }
                  ],
                  lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" }
    ],
    workItemList: [
                    { items: [
                        "PJ1WkItem1",
                        "PJ1WkItem2",
                        "PJ1WkItem3",
                        "PJ1WkItem4",
                        "PJ1WkItem5"
                      ],
                      lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" }
    ],
    milestone: [
                  { _id: "PJ1TheoryComp", msNumber: 1, description: "Project1 Theory Complete", dueDate: new Date("Feb 2, 2013"), priority: "high", completionPercentage: 0, status: "open",
                    wpDependencies: [ "PJ1Theory" ],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "PJ1MatSelect", msNumber: 2, description: "Project1 Materials Selected", dueDate: new Date("Feb 7, 2013"), priority: "high", completionPercentage: 0, status: "open",
                    msDependencies: [ "PJ1TheoryComp" ],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "PJ1MatOrdered", msNumber: 3, description: "Project1 Materials Ordered", dueDate: new Date("Feb 9, 2013"), priority: "high", completionPercentage: 0, status: "open",
                    msDependencies: [ "PJ1MatSelect" ],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "PJ1MatReceived", msNumber: 4, description: "Project1 Materials Received", dueDate: new Date("Feb 16, 2013"), priority: "high", completionPercentage: 0, status: "open",
                    msDependencies: [ "PJ1MatOrdered" ],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "PJ1MatAssembled", msNumber: 5, description: "Project1 Materials Assembled", dueDate: new Date("Feb 23, 2013"), priority: "high", completionPercentage: 0, status: "open",
                    msDependencies: [ "PJ1MatReceived" ],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "PJ1MatUnitTested", msNumber: 6, description: "Project1 Materials Unit Tested", dueDate: new Date("Mar 1, 2013"), priority: "medium", completionPercentage: 0, status: "open",
                    msDependencies: [ "PJ1MatAssembled" ],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "PJ1IndAssembly33", msNumber: 7, description: "Project1 Individual Assembly at 33%", dueDate: new Date("Mar 14, 2013"), priority: "medium", completionPercentage: 0, status: "open",
                    requiredCompletion: [
                      { wkpackage: "PJ1Theory", percentage: 33 },
                      { wkpackage: "PJ1AntAssembly", percentage: 33 },
                      { wkpackage: "PJ1DSPAssembly", percentage: 33 },
                      { wkpackage: "PJ1ContAssembly", percentage: 33 },
                      { wkpackage: "PJ1ApplicationInt", percentage: 33 }
                    ],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "PJ1MatIntegTested", msNumber: 8, description: "Project1 Materials Integration Tested", dueDate: new Date("Mar 21, 2013"), priority: "medium", completionPercentage: 0, status: "open",
                    msDependencies: [ "PJ1IndAssembly33" ],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "PJ1IndAssembly66", msNumber: 9, description: "Project1 Individual Assembly at 66%", dueDate: new Date("Mar 28, 2013"), priority: "medium", completionPercentage: 0, status: "open",
                    msRequiredCompletion: [
                      { wkpackage: "PJ1AntAssembly", percentage: 66 },
                      { wkpackage: "PJ1RFAssembly", percentage: 66 },
                      { wkpackage: "PJ1DSPAssembly", percentage: 66 },
                      { wkpackage: "PJ1ContAssembly", percentage: 66 },
                      { wkpackage: "PJ1ApplicationInt", percentage: 66 }
                    ],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "PJ1TestPulseSend", msNumber: 10, description: "Project1 Test Pulse Send", dueDate: new Date("Apr 10, 2013"), priority: "medium", completionPercentage: 0, status: "open",
                    wpDependencies: [
                      "PJ1AntAssembly",
                      "PJ1RFAssembly",
                      "PJ1DSPAssembly",
                      "PJ1ContAssembly",
                      "PJ1ApplicationInt"
                    ],
                    msDependencies: [ "PJ1IndAssembly66" ],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "PJ1TestPulseReceive", msNumber: 11, description: "Project1 Test Pulse Receive", dueDate: new Date("Apr 15, 2013"), priority: "medium", completionPercentage: 0, status: "open",
                    msDependencies: [ "PJ1TestPulseSend" ],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "PJ1TestPulseAnalysis", msNumber: 12, description: "Project1 Test Pulse Analysis", dueDate: new Date("Apr 20, 2013"), priority: "medium", completionPercentage: 0, status: "open",
                    msDependencies: [ "PJ1TestPulseReceive" ],
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" },
                  { _id: "PJ1FinalRpt", msNumber: 13, description: "Project1 Final Report MS", dueDate: new Date("Apr 27, 2013"), priority: "low", completionPercentage: 0, status: "open",
                    lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" }
    ], 
    milestoneList: [
                      { items: [
                        "PJ1TheoryComp",
                        "PJ1MatSelect",
                        "PJ1MatOrdered",
                        "PJ1MatReceived",
                        "PJ1MatAssembled",
                        "PJ1MatUnitTested",
                        "PJ1IndAssembly33",
                        "PJ1MatIntegTested",
                        "PJ1IndAssembly66",
                        "PJ1TestPulseSend",
                        "PJ1TestPulseReceive",
                        "PJ1TestPulseAnalysis",
                        "PJ1FinalRpt" 
                        ], 
                        lastModifiedDate: new Date("Jan 30, 2013"), lastModifiedBy: "jmcdonald" }	 
    ]   
}]);