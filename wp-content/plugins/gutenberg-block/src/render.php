<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<p <?php echo get_block_wrapper_attributes(); ?>>
	<?php 
	// global $attributes;
	echo $attributes['txtitle'];
	// esc_html_e( 'First Block – hello from a dynamic block!', 'gutenberg-block-test' );
	 ?>
</p>