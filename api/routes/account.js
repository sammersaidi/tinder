
module.exports = function(app) {
    var accountController = require('../controller/accountController');
  
    app.route('/account')
      .post(function(req, res) {
          res.sendStatus(200)
        })

      // .post(todoList.create_a_task);
  
  
    // app.route('/tasks/:taskId')
    //   .get(todoList.read_a_task)
    //   .put(todoList.update_a_task)
    //   .delete(todoList.delete_a_task);
  };
  