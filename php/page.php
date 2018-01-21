<?php
require('./components/navigationComponent.php');

$data = array("Home", "About", "Services", "Contact");

echo navigationComponent($data);