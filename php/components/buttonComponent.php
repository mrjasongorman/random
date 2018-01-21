<?php

function buttonComponent($content = ""){
  $output = "";

  $output .= "<a href=\"#\">$content</a>\n";

  return $output;
}