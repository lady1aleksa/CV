$(document).ready(function(){
    //Overlay for photo
    var $overlay = $('<div class="overlay"></div>');
    var $image = $('<img class="overlay_img">');
    var $caption = $('<p class="overlay_p"></p>');
    var $body = $('body');

    $overlay.append($image);
    $overlay.append($caption);
	$body.append($overlay);

    $(".myImage a").on('click', function(event){
        event.preventDefault();
        $image.attr("src", $(this).attr("href"));
        $caption.text($(this).find(".myImage_content").attr("alt"));
		$overlay.show();
		$body.scrollTop(0);
		$body.toggleClass('opened');
    });

    $overlay.click(function(){
        $overlay.hide();
		$body.toggleClass('opened');
    });
	//End of overlay
});

