<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
<div class="card">
  <img class="card-img-top" src="<?php echo $attributes['photo']?>" alt="Card image">
  <div class="card-body">
    <h5 class="card-title"><?php echo $attributes['txtitle']?></h5>
    <!-- <p class="card-text">Some example text.</p>
    <a href="#" class="btn btn-primary">Read More</a> -->
  </div>
</div>
	<!-- <img src="<?php echo $attributes['photo']?>" alt=""/>
	<p><?php 
	// global $attributes;
	echo $attributes['txtitle'];
	// esc_html_e( 'First Block – hello from a dynamic block!', 'gutenberg-block-test' );
	 ?></p> -->
</div>