<?php


class User {
    public $user_id;
    public $person_id;
    public $username;
    public $password;

    public function __construct($user_id, $person_id, $username, $password) {
        $this->user_id = $user_id;
        $this->person_id = $person_id;
        $this->username = $username;
        $this->password = $password;
    }
}
?>