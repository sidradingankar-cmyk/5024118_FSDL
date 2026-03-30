var app = angular.module("todoApp", []);

// Controller
app.controller("todoController", function($scope) {

    // Load from local storage
    $scope.tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Add Task
    $scope.addTask = function() {
        if ($scope.newTask) {
            $scope.tasks.push({name: $scope.newTask, done: false});
            $scope.newTask = "";
            saveData();
        }
    };

    // Delete Task
    $scope.deleteTask = function(index) {
        $scope.tasks.splice(index, 1);
        saveData();
    };

    // Toggle Complete
    $scope.toggleTask = function(task) {
        task.done = !task.done;
        saveData();
    };

    // Filter Logic
    $scope.filterStatus = "all";

    $scope.taskFilter = function(task) {
        if ($scope.filterStatus === "completed") return task.done;
        if ($scope.filterStatus === "pending") return !task.done;
        return true;
    };

    // Save to local storage
    function saveData() {
        localStorage.setItem("tasks", JSON.stringify($scope.tasks));
    }
});

// Custom Directive
app.directive("appTitle", function() {
    return {
        template: "<h2>Advanced Task Manager 🚀</h2>"
    };
});