<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * For example, it puts together the home page when no home.php file exists.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */

get_header(); ?>

<nav class="main-nav">

	<div class="main-nav-face-1-wrapper">
		<div class="main-nav-face main-nav-face-1">
			
		</div>
	</div>	
	
	<div class="main-nav-face-4-wrapper">
		<div class="main-nav-face main-nav-face-4">
			<div class="menu-bar"></div>
			<div class="menu-bar"></div>
			<div class="menu-bar"></div>
		</div>

		<div class="main-nav-face main-nav-backface">
			X
		</div>
	</div>

	<div class="standfirst">Here to skip</div>

</nav>

<section class="main-container">
	<div class="top-header-wrapper">
		<h1 class="main-heading">
			<span class="heading-normal">The portfolio of <span class="heading-stylised">mikesnow</span><br />
			 a <span class="heading-stylised">front end developer</span><br />
			  based in <span class="heading-stylised">london <span class="flag-container">uk<span class="icon"></span></span></span></span>
		</h1>
	</div>	

<section class="scroll-down-wrapper">

	<span class="scroll-down">scroll down</span>

</section>

	<div class="second-header-wrapper">
		<h2 class="second-heading">
			<span class="heading-normal">Let's get <span class="heading-stylised">right to it</span><br />
		</h2>
	</div>	

	<article class="video-header-wrapper">
		<img src="<?php echo get_template_directory_uri(); ?>/images/timelapse/frame-0.png" class="timelapse">

		<div class="colour-overlay">
			
			<h2 class="second-heading">
			<span class="heading-normal">I love<span class="heading-stylised">building for the ever-changing web</span><br />
		</h2>

			<img src="<?php echo get_template_directory_uri(); ?>/images/timelapse/frame-0.png" class="timelapseheight">
		</div>

	</article>	

	<div class="top-header-wrapper">
		<h1 class="main-heading">
			<span class="heading-normal">The portfolio of <span class="heading-stylised">mikesnow</span><br />
			 a <span class="heading-stylised">front end developer</span><br />
			  based in <span class="heading-stylised">london <span class="flag-container">uk<span class="icon"></span></span></span></span>
		</h1>
	</div>	

</section>

<?php get_footer(); ?>