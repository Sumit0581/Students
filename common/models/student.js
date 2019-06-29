'use strict';
var app = require('../../server/server');
module.exports = function(Student) {

Student.getMarks = function(id,subjectId,cb) {
        var Marks = app.models.Marks;
	Marks.find({where: {studentId:id, courseId: subjectId}}, function (req,res,err) {
	if (err) {
        	return console.log(err);
        } 
	else {
       		cb(null,res[0].Marks);
        }
	})
}




	Student.remoteMethod (
		'getMarks',
		{
			http: {path: '/getMarks', verb: 'get'},
			accepts:[ {arg: 'id', type: 'string', required: true},
				  {arg: 'subjectId', type: 'string', required: true}
				],
			returns: {arg: 'Marks', type: 'number'}
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



















};

