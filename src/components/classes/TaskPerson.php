<?php

require_once  "User.php";
require_once  "Task.php";

class TaskPerson {
    public $task_id;
    public $user_id;
    public $name;
    public $description;
    public $solved;
    public $deadline;
    public $username;

    public function __construct($task_id, $user_id, $name, $description, $solved, $deadline, $username) {
        $this->task_id = $task_id;
        $this->user_id = $user_id;
        $this->name = $name;
        $this->description = $description;
        $this->solved = $solved;
        $this->deadline = $deadline;
        $this->username = $username;
    }
}

?>