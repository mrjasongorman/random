<?php
require('./components/buttonComponent.php');

function navigationComponent($buttons = array()){
  $output = "";

  foreach($buttons as $button){
    $output .= buttonComponent($button);
  }

  return $output;
}