<?php

  function validateFormFields( array $fields ):array
  {
    $result = [];
    foreach ( $fields as $key => $field ) {
      if(  isset( $_POST[$key] ) && preg_match( $field['pattern'], $_POST[$key] )  ) {
        $result[ $field['name'] ] = $_POST[$key] ;
      }
    }
    return $result;
  }
	/*
   * Filters phone numbers, that are scum
   */
  function isBadPhone( string $field )
  {

    return ( array_search( $field, BAD_PHONES ) !== false || !preg_match( ALLOWED_CODES, $field ) );
  }
  /*
   * Validate if file path is real image
   */
  function is_image( string $path ):bool
  {
    $a = getimagesize($path);
    $image_type = $a[2];

    if( in_array( $image_type , array( IMAGETYPE_GIF , IMAGETYPE_JPEG ,IMAGETYPE_PNG , IMAGETYPE_BMP) ) )
    {
      return true;
    }
    return false;
  }
