$(document).ready(function(){

	function openMenu()	

	{
		$('.nav').addClass('is-visible');	
		

	} 


	function hideMenu()
	{  
		$('.nav').removeClass('is-visible');

	}



	$('.header_burger').click(openMenu);

	$('.header_close').click(hideMenu);

	

});	
