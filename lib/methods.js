// import { User } from './models/Users.js'

// import { Report } from './models/Reports.js'


// if (Meteor.isServer) {
//     Accounts.onCreateUser((options, user) => {
//         user.firstName = options.firstName;
//         user.lastName = options.lastName;
//         user.grade = options.grade;
//         user.birthday = options.birthday;
//         user.notes = options.notes;
//         user.roles = options.roles;
//         user.schoolID = options.schoolID;
//         return user;
//     });
// }

// Meteor.methods({
//     "addStudent": function(studentInfo, username, password) {
//         const newUserId = Accounts.createUser({
//             username: username,
//             password: password,
//             roles: studentInfo.roles,
//             schoolID: studentInfo.schoolID,
//             firstName: studentInfo.firstName,
//             lastName: studentInfo.lastName,
//             grade: studentInfo.grade,
//             birthday: studentInfo.birthday,
//             notes: studentInfo.notes
//         });
//         return newUserId;
//     },
//     "addTeacher": function(teacherInfo, email, password) {
//         console.log(teacherInfo);
//         const teacherID = Accounts.createUser({
//             email: email,
//             password: password,
//             roles: ['Teacher'],
//             schoolID: teacherInfo.schoolID,
//             firstName: teacherInfo.firstName,
//             lastName: teacherInfo.lastName,
//             notes: teacherInfo.notes
//         });
//         return teacherID;
//     },
//     "removeReport": function(reportID) {
//         var report = Report.findOne(reportID);
//         report.softRemove();
//     },
//     "removeStudent": function(studentID) {
//         Meteor.users.remove(studentID);
//     },
//     "restoreReport": function(reportInfo) {
//         var report = Report.findOne(reportInfo, {
//             disableEvents: true
//         });
//         report.softRestore();
//     },
//     "addReport": function(reportInfo) {
//         Report.insert(reportInfo);
//     },
//     "readReport": function(reportID) {
//         var report = Report.findOne(reportID);
//         report.set({
//             'readStatus': new Date()
//         });
//         report.save();
//     },
//     "addMessage": function(reportID, messageInfo) {
//         var report = Report.findOne(reportID);
//         report.messages.push(messageInfo);
//         report.save();
//     }
// });

// //Total number of students
// //Most recent report - open dialog
// //Per grade