/**
 * global JavaScript Object
 *
 * @author	Dominic da Costa @ global
 * @email	ddacosta@zonecontent.com
 * @url		http://www.zonecontent.com/
 * @copyright	Copyright (c) 2012, zonecontent.com. All rights reserved.
 * @version	1.0.0
 */

var global;

(function ($) {
    global = {
	
        /* CONSTANTS
		----------------------------------------------------------------------------- */
	
        CONSTANTS: {
            /* global */
            ALERT_FALLBACK: false,
            CUBE: $('#cube')
						
        /* Appended */
        // HTML_SNIPPETS
        },

        VARIABLES: {

           CUBE_POSITION: {
            BOTTOM: null,
            RIGHT: null
           },

           ANIMATION: {
            MOVING: false
           }
                        
        },
	
        animation : {                                                           //default animation settings
            'speed' : 350,
            'easing' : 'easeInOutQuad'     
        },

        /* FUNCTIONS
		- init()
		- define_console_log()
		- load_html_snippets()
					
		----------------------------------------------------------------------------- */
	
        init: function() {

            global.threed_nav_binding();

            // Initial setup
            global.define_console_log();
            global.outerhtml_fallback();
            global.load_html_snippets();
            global.check_animation();

            // Interactions
            global.cube_trigger();
            global.hover_trigger();
            global.explode_trigger();
            global.grid_click();

            // Movement
            global.bind_handlers();

            // fadeIn
            global.scroll_hint();

            //scrolling
            global.bind_window_scroll();

            //preLoad
            global.preload_timelapse();
        },
        
        
        /* Define console.log */
        define_console_log: function() {
            if (typeof console === 'undefined' || typeof console.log === 'undefined') {
                /*globals console:true*/
                console = {};
                if (global.CONSTANTS.ALERT_FALLBACK) {
                    console.log = function(msg) {
                        alert(msg);
                    };
                } else {
                    console.log = function() {};
                }
            }
        },

        cube_trigger: function(){

            $('.add-remove-cube').on("click", function(){
                $('#cube').toggleClass('active');
            });

        },

        hover_trigger: function(){

            $('.add-remove-hover').on("click", function(){
                $('#cube').toggleClass('hover');
            });

        },

        explode_trigger: function(){

            

            $('.add-remove-explode').on("click", function(){

                if($('#cube').hasClass('explode')){

                $('#cube').removeClass('explode');

                }else{

                $('#cube').addClass('pre-explode');

                setTimeout(function(){
                    $('#cube').removeClass('pre-explode');
                    $('#cube').addClass('explode');
                },1000);

                }

            });

        

        },

        bind_handlers: function(){

            $('.move-left').on("click",function(){
                global.move_left();
            });

            $('.move-right').on("click",function(){
                global.move_right();
            });

            $('.move-down').on("click",function(){
                global.move_down();
            });

            $('.move-up').on("click",function(){
                global.move_up();
            });

        },

        move_left: function(){
            global.get_position();
            global.move_check('left', global.VARIABLES.CUBE_POSITION.BOTTOM);
        },

        move_right: function(){
            global.get_position();
            global.move_check('right', global.VARIABLES.CUBE_POSITION.BOTTOM);
        },

        move_up: function(){
            global.get_position();
            global.move_check('up', global.VARIABLES.CUBE_POSITION.BOTTOM);
        },

        move_down: function(){
            global.get_position();
            global.move_check('down', global.VARIABLES.CUBE_POSITION.BOTTOM);
        },

        move_check: function(direction, position){

            var $cube = $('#cube');

            if(global.VARIABLES.ANIMATION.MOVING === false){

            switch(direction){

                case 'left':
                
                if(global.VARIABLES.CUBE_POSITION.RIGHT < 525){

                    console.log(global.VARIABLES.CUBE_POSITION.RIGHT);
                    global.animate_left($cube);
                } 

                break;
                case 'right':

                if(global.VARIABLES.CUBE_POSITION.RIGHT > 0){
                    console.log(global.VARIABLES.CUBE_POSITION.RIGHT);
                    global.animate_right($cube);
                }

                break;
                case 'up':

                if(global.VARIABLES.CUBE_POSITION.BOTTOM < 525){
                    console.log(global.VARIABLES.CUBE_POSITION.BOTTOM);
                    global.animate_up($cube);
                }

                break;

                case 'down':

                if(global.VARIABLES.CUBE_POSITION.BOTTOM > 0){
                    console.log('passing');
                    global.animate_down($cube);
                }

                break;
            }

            }else{
                console.log('failing');
            }
        },

        animate_left: function($cube){

            $cube.css('right','+=175px');
            global.animating();

        },

        animate_right: function($cube){

            $cube.css('right','-=175px');
            global.animating();

        },

        animate_up: function($cube){

            $cube.css('bottom','+=175px');
            global.animating();
        },

        animate_down: function($cube){

            $cube.css('bottom','-=175px');
            global.animating();
        },

        get_position: function(){

            var cube =  $('#cube');

            global.VARIABLES.CUBE_POSITION.RIGHT = parseInt(cube.css('right'),10);
            global.VARIABLES.CUBE_POSITION.BOTTOM = parseInt(cube.css('bottom'),10);

        },

        check_animation: function(){

            $('#cube').on('webkitTransitionEnd oTransitionEnd transitionend msTransitionEnd', function() {
                global.VARIABLES.ANIMATION.MOVING = false;
            });

        },

        animating: function(){
            global.VARIABLES.ANIMATION.MOVING = true;
        },

        grid_click: function(){

            $('.grid-square').on("click", function(){

                var index = $(this).index();

                console.log(index);
                var topPosition = null;
                var bottom = null;
                var right = null;

                if(index <= 3){
                    bottom = 525 + 'px';
                }else if(index <= 7){
                    bottom = 350 + 'px';
                }else if(index <= 11){
                    bottom = 175 + 'px';
                }else if(index <= 15){
                    bottom = 0 + 'px';
                }  
                   

                switch(index){
                    case 0:
                    case 4:
                    case 8:
                    case 12: 
                        right = 525 + 'px';
                    break;
                    case 1:
                    case 5:
                    case 9:
                    case 13:
                        right = 350 + 'px';
                    break;
                    case 2:
                    case 6:
                    case 10:
                    case 14:
                        right = 175 + 'px';
                    break;
                    case 3:
                    case 7:
                    case 11:
                    case 15:
                        right = 0 + 'px';
                    break;
                }

                   
                    $('#cube').removeClass('active');

                    $('#cube').removeClass('transition');

                    $('#cube').css('right', right);
                    $('#cube').css('bottom', bottom);

                    setTimeout(function(){
                        $('#cube').addClass('transition');
                        $('#cube').addClass('active');
                    },200);

                    // global.cube_visible();


            });

        },

        cube_visible: function(){
            


        },

        outerhtml_fallback:function(){
            $.fn.outerHTML = function(){
 
                // IE, Chrome & Safari will comply with the non-standard outerHTML, all others (FF) will have a fall-back for cloning
                return (!this.length) ? this : (this[0].outerHTML || (
                    function(el){
                        var div = document.createElement('div');
                        div.appendChild(el.cloneNode(true));
                        var contents = div.innerHTML;
                        div = null;
                        return contents;
                    })(this[0]));
 
            };
        },


        //Work for Portfolio

        threed_nav_binding: function(){
            $('.main-nav').on("click", function(){

                // $(".main-nav-face-1-wrapper").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', 
                //     function() {
                //     $('.main-nav-face-2-wrapper').toggleClass('three-D');
                // });

                // $(".main-nav-face-2-wrapper").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', 
                //     function() {
                //     $('.main-nav-face-3-wrapper').toggleClass('three-D');
                // });

                $('.main-nav-face-1-wrapper').toggleClass('three-D');

                $('.main-nav-face-4-wrapper').toggleClass('three-D');

            });
        }, 

        scroll_hint: function(){

            setTimeout(function(){
                $('.scroll-down').addClass('fade-in');
            },200);   

            setTimeout(function(){
                $('.scroll-down').addClass('bounce');
            },500);

        },

        bind_window_scroll:function(){

            $(window).on("scroll", function(event){

                var distance = $(window).scrollTop();


                if(distance <= 0){
                    global.start_bounce();
                } else {
                    global.stop_bounce();

                }

                if(distance >= $('.main-heading').offset().top){
                    global.raise_flag();
                } else {
                    global.drop_flag();
                }

                if(distance >= $('.main-heading').offset().top + 100){
                    $('.second-header-wrapper').addClass('fade-in');
                } else {
                    $('.second-header-wrapper').removeClass('fade-in');
                }

                if(distance >= ($('.video-header-wrapper').offset().top - 300)){

                    console.log(distance);

                    iterator = distance - ($('.video-header-wrapper').offset().top - 300);

                    console.log(iterator);

                    if(iterator < 390){

                    imageUrl = 'http://msnow.dev/wp-content/themes/Portfolio/images/timelapse/frame-' + iterator + '.png';

                    $('.timelapse').attr('src', imageUrl);

                    }else{

                    }

                } else {
                    
                }
 

            });
        },

        stop_bounce: function(){

            $('.scroll-down').removeClass('bounce');
            $('.scroll-down').removeClass('fade-in');

        },

        preload_timelapse: function(){
            numberofimages = 391;

            for(i = 0; i < numberofimages; i++){

                imageUrl = 'http://msnow.dev/wp-content/themes/Portfolio/images/timelapse/frame-' + i + '.png';

                (new Image()).src=imageUrl;

                if(i == 390){
                   

                }
            }
        },

        start_bounce: function(){

            $('.scroll-down').addClass('bounce');
            $('.scroll-down').addClass('fade-in');

        },

        raise_flag: function(){
            $('.flag-container').addClass('active');
        },

        drop_flag: function(){
            $('.flag-container').removeClass('active');
        },
    

        /* Load HTML snippets */
        load_html_snippets: function() {
            $.ajax({
                url: global.CONSTANTS.HTML_SNIPPETS_URL,
                datatype: 'text/html',
                async: false,
                success: function(data) {
                    global.CONSTANTS.HTML_SNIPPETS = data;
                }
            });
        }
        
        

    };


    $(function() {

        global.init();

    });

})(jQuery);