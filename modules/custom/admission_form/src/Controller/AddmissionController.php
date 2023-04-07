<?php

namespace Drupal\admission_form\Controller;


use Drupal\Core\Controller\ControllerBase;

use Symfony\Component\HttpFoundation\RedirectResponse;
use Drupal\Core\Url;

class AddmissionController extends ControllerBase {

public function index() {

$node = \Drupal\node\Entity\Node::create(['type' => 'admission']);

$form = \Drupal::service('entity.form_builder')->getForm($node);

  //populate your build renderable array..
  // Do something with your variables here.
    $myText = 'This is not just a default text!';
    $myNumber = 1;
    $myArray = [1, 2, 3];

return $form;
    return [
      // Your theme hook name.
      '#theme' => 'node_admission_forms',
      // Your variables.
      'form' => $form,
      '#variable2' => $myNumber,
      '#variable3' => $myArray,
    ];
	}
public function thanks() {
$myNumber = 1;
 return [
      // Your theme hook name.
      '#theme' => 'thank_you',
      '#variable2' => $myNumber,
    ];
}

}