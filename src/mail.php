<?php
  $json = file_get_contents('php://input');
  $data = json_decode($json);
  $headers = "From: order@cosmetology40.ru";
  if (mail('albinabist1993@mail.ru', 'Новое обращение', $data->name . ' ' . $data->phone . ' ' . $data->message, $headers)) {
    http_response_code(200);
  } else {
    http_response_code(500);
  }
?>