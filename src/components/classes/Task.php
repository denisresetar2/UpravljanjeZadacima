<?php

class Task{
    public $task_id = "";
    public User $user_id;
    public $name = "";
    public $description = "";
    public $solved = "";
    public $deadline = "";

    public function __construct($task_id,$user_id,$name,$description,$solved,$deadline){
        $this->task_id = $task_id;
        $this->user_id = $user_id;
        $this->name = $name;
        $this->description = $description;
        $this->solved = $solved;
        $this->deadline = $deadline;
    }
}

?>