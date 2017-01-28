
var html;

$(function() {

document.getElementById("drop").onclick = function(){

	var clicked = document.getElementById("isClicked").innerHTML;
	var dropDown = document.getElementById("drop");
	var moreInfo = document.getElementById("infoContainer");

	if (clicked == "false"){		
		
		document.getElementById("isClicked").innerHTML = "true";
		document.getElementById("moreInfoText").innerHTML = "Nulla euismod hendrerit pulvinar. Donec dignissim erat ac blandit mattis. Proin magna leo, aliquam sit amet rhoncus at, blandit ac nisl. Etiam eu tortor metus. Nulla consequat libero sed dui auctor sodales ac in tortor. Nam vitae placerat ipsum, accumsan bibendum diam. Integer auctor, est scelerisque pellentesque varius, ante nulla euismod turpis, a aliquam ipsum nisl id ex. Ut in orci vitae ante dictum sodales eu et enim. Mauris eu ultrices felis, a rhoncus sapien. Donec malesuada quam nulla, sit amet porta nunc dapibus non. Pellentesque vehicula dui ut arcu euismod, sed semper velit vulputate. Pellentesque quis magna nec quam gravida dignissim quis id ex. Nullam at dapibus mauris. Curabitur luctus vel nulla id venenatis. Suspendisse potenti. Mauris pharetra ex non nulla mollis, at condimentum risus cursus."
		//document.getElementById("infoContainer").innerHTML = ""
		$( '#drop' ).attr("class", "fa fa-minus-square");	
		moreInfo.style.height = "100%";
		return;	
	}

	if (clicked == "true"){
		
		document.getElementById("isClicked").innerHTML = "false";
		document.getElementById("moreInfoText").innerHTML = "";
		$( '#drop' ).attr("class", "fa fa-plus-square");
		moreInfo.style.height = "100%";
		return;		
	}
	
}

});
