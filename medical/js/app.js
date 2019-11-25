const log = console.log;
log('---> starting...');

jQuery(document).ready(function() {
  
    $(function() {
      $('.flip-horizontal').flip({
        trigger: 'hover'
      });
      $('.flip-vertical').flip({
        axis: 'x',
        reverse: true,
        trigger: 'hover'
      });
    });
    
    jQuery('#banner').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 300
    });

    jQuery('#services').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated wobble',
        offset: 300
    });

    jQuery('#why').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 300
    });

    jQuery('#feature').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 300
    });

    jQuery('#text-area').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 300
    });

    jQuery('#gallery').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInUp',
        offset: 300
    });

    jQuery('#our-doctor').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInUp',
        offset: 300
    });

    jQuery('#action-bar').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInUp',
        offset: 300
    });

    jQuery('#footer-tab').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInUp',
        offset: 300
    });

});

log('<--- done.');
