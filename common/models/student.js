'use strict';
var app = require('../../server/server');
module.exports = function(Student) {

Student.getMarks = function(id,subjectId,testId,cb) {
        var Marks = app.models.Marks;
	Marks.find({where: {studentId:id, courseId: subjectId, testId: testId}}, function (req,res,err) {
	if (err) {
        	return console.log(err);
        } 
	else {
       		console.log(res);
		cb(null,res[0].Marks,res[0].testId);
        }
	})
}




	Student.remoteMethod (
		'getMarks',
		{
			http: {path: '/getMarks', verb: 'get'},
			accepts:[ {arg: 'id', type: 'string', required: true},
				  {arg: 'subjectId', type: 'string', required: true},
				  {arg: 'testId', type: 'string', required: true},
				],
			returns: [{arg: 'Marks', type: 'number'},
				  {arg: 'Test Type', type:'string'}
				],
		}
	);

Student.getTotal = function(id,cb) {
        var Marks = app.models.Marks;
	Marks.find({where: {studentId:id}}, function (req,res,err) {
	var total = 0;
	for(var i=0;i<res.length;i++){
		total+=res[i].Marks;
	}
	var average = total/res.length;
	cb(null,total,average);
	})
}

	Student.remoteMethod (
		'getTotal',
		{
			http: {path: '/getTotal', verb: 'get'},
			accepts:[ {arg: 'id', type: 'string', required: true}],
			returns: [{arg: 'Total', type: 'number'},
				  {arg: 'Average', type: 'number'}],
		}
	);


Student.getMarks1 = function(id,subjectId,testId,cb) {
        var Marks = app.models.Marks;
	Marks.find({where: {studentId:id, courseId: subjectId, testId: testId}}, function (req,res,err) {
	if (err) {
        	return console.log(err);
        } 
	else {
       		console.log(res);
		cb(null,res);
        }
	})
}




	Student.remoteMethod (
		'getMarks1',
		{
			http: {path: '/getMarks1', verb: 'get'},
			accepts:[ {arg: 'id', type: 'string', required: true},
				  {arg: 'subjectId', type: 'string', required: false},
				  {arg: 'testId', type: 'string', required: false}
				],
			returns: [{arg: 'result', type: 'array'}
				],
		}
	);


Student.getTotal1 = function(id,subjectId,testId,cb) {
        var Marks = app.models.Marks;
	Marks.find({where: {studentId:id, courseId: subjectId, testId: testId}}, function (req,res,err) {
	var total = 0;
	for(var i=0;i<res.length;i++){
		total+=res[i].Marks;
	}
	var average = total/res.length;
	cb(null,total,average);
	})
}

	Student.remoteMethod (
		'getTotal1',
		{
			http: {path: '/getTotal1', verb: 'get'},
			accepts:[ {arg: 'id', type: 'string', required: true},
				  {arg: 'subjectId', type: 'string', required: false},
				  {arg: 'testId', type: 'string', required: false}],
			returns: [{arg: 'Total', type: 'number'},
				  {arg: 'Average', type: 'number'}],
		}
	);













};

