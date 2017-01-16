var express = require('express');


var routes = function (Students) {
  var studentRouter = express.Router();

  studentRouter.route('/')
    .get(function (req, res, next) {
      Students.find({}).exec(function (err, students) {
        if (err) next(err)
        res.json(students);
      });

    })
    .post(function (req, res, next) {
      console.log(req.body);
      Students.create(req.body, function (err, student) {
        if (err) next(err);
        res.json(student);
      })
    });


  studentRouter.route('/:regNo')
    .get(function(req,res,next){
      Students.findOne({'registerationNo': req.params.regNo},function(err,student){
       if (err) next(err);
       res.json(student);
      })

    })
    .put(function (req, res, next) {
      var regNo = '' + req.params.regNo;
      console.log(regNo);
      Students.findOneAndUpdate({"registerationNo": regNo}, req.body, function (err, student) {
        if (err) next(err);
        res.json(student);

      })
    })
    .delete(function (req, res, next) {
      Students.findOneAndRemove({'registerationNo': req.params.regNo}, function (err, student) {
        if (err) next(err)
        res.json({'remove': true, 'registerationNo': student.registerationNo});
      })
    });

  return studentRouter;
}

module.exports = routes;
