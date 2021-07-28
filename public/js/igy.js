/* Scroll to Top */
$(".totop").hide();
var timeout;
/* Pour autocomplete avec des caractères spéciaux*/
var accentMap = { "-" : " ", "ẚ": "a", "Á": "a", "á": "a", "À": "a", "à": "a", "Ă": "a", "ă": "a", "Ắ": "a", "ắ": "a", "Ằ": "a", "ằ": "a", "Ẵ": "a", "ẵ": "a", "Ẳ": "a", "ẳ": "a", "Â": "a", "â": "a", "Ấ": "a", "ấ": "a", "Ầ": "a", "ầ": "a", "Ẫ": "a", "ẫ": "a", "Ẩ": "a", "ẩ": "a", "Ǎ": "a", "ǎ": "a", "Å": "a", "å": "a", "Ǻ": "a", "ǻ": "a", "Ä": "a", "ä": "a", "Ǟ": "a", "ǟ": "a", "Ã": "a", "ã": "a", "Ȧ": "a", "ȧ": "a", "Ǡ": "a", "ǡ": "a", "Ą": "a", "ą": "a", "Ā": "a", "ā": "a", "Ả": "a", "ả": "a", "Ȁ": "a", "ȁ": "a", "Ȃ": "a", "ȃ": "a", "Ạ": "a", "ạ": "a", "Ặ": "a", "ặ": "a", "Ậ": "a", "ậ": "a", "Ḁ": "a", "ḁ": "a", "Ⱥ": "a", "ⱥ": "a", "Ǽ": "a", "ǽ": "a", "Ǣ": "a", "ǣ": "a", "Ḃ": "b", "ḃ": "b", "Ḅ": "b", "ḅ": "b", "Ḇ": "b", "ḇ": "b", "Ƀ": "b", "ƀ": "b", "ᵬ": "b", "Ɓ": "b", "ɓ": "b", "Ƃ": "b", "ƃ": "b", "Ć": "c", "ć": "c", "Ĉ": "c", "ĉ": "c", "Č": "c", "č": "c", "Ċ": "c", "ċ": "c", "Ç": "c", "ç": "c", "Ḉ": "c", "ḉ": "c", "Ȼ": "c", "ȼ": "c", "Ƈ": "c", "ƈ": "c", "ɕ": "c", "Ď": "d", "ď": "d", "Ḋ": "d", "ḋ": "d", "Ḑ": "d", "ḑ": "d", "Ḍ": "d", "ḍ": "d", "Ḓ": "d", "ḓ": "d", "Ḏ": "d", "ḏ": "d", "Đ": "d", "đ": "d", "ᵭ": "d", "Ɖ": "d", "ɖ": "d", "Ɗ": "d", "ɗ": "d", "Ƌ": "d", "ƌ": "d", "ȡ": "d", "ð": "d", "É": "e", "Ə": "e", "Ǝ": "e", "ǝ": "e", "é": "e", "È": "e", "è": "e", "Ĕ": "e", "ĕ": "e", "Ê": "e", "ê": "e", "Ế": "e", "ế": "e", "Ề": "e", "ề": "e", "Ễ": "e", "ễ": "e", "Ể": "e", "ể": "e", "Ě": "e", "ě": "e", "Ë": "e", "ë": "e", "Ẽ": "e", "ẽ": "e", "Ė": "e", "ė": "e", "Ȩ": "e", "ȩ": "e", "Ḝ": "e", "ḝ": "e", "Ę": "e", "ę": "e", "Ē": "e", "ē": "e", "Ḗ": "e", "ḗ": "e", "Ḕ": "e", "ḕ": "e", "Ẻ": "e", "ẻ": "e", "Ȅ": "e", "ȅ": "e", "Ȇ": "e", "ȇ": "e", "Ẹ": "e", "ẹ": "e", "Ệ": "e", "ệ": "e", "Ḙ": "e", "ḙ": "e", "Ḛ": "e", "ḛ": "e", "Ɇ": "e", "ɇ": "e", "ɚ": "e", "ɝ": "e", "Ḟ": "f", "ḟ": "f", "ᵮ": "f", "Ƒ": "f", "ƒ": "f", "Ǵ": "g", "ǵ": "g", "Ğ": "g", "ğ": "g", "Ĝ": "g", "ĝ": "g", "Ǧ": "g", "ǧ": "g", "Ġ": "g", "ġ": "g", "Ģ": "g", "ģ": "g", "Ḡ": "g", "ḡ": "g", "Ǥ": "g", "ǥ": "g", "Ɠ": "g", "ɠ": "g", "Ĥ": "h", "ĥ": "h", "Ȟ": "h", "ȟ": "h", "Ḧ": "h", "ḧ": "h", "Ḣ": "h", "ḣ": "h", "Ḩ": "h", "ḩ": "h", "Ḥ": "h", "ḥ": "h", "Ḫ": "h", "ḫ": "h", H: "h", "̱": "h", "ẖ": "h", "Ħ": "h", "ħ": "h", "Ⱨ": "h", "ⱨ": "h", "Í": "i", "í": "i", "Ì": "i", "ì": "i", "Ĭ": "i", "ĭ": "i", "Î": "i", "î": "i", "Ǐ": "i", "ǐ": "i", "Ï": "i", "ï": "i", "Ḯ": "i", "ḯ": "i", "Ĩ": "i", "ĩ": "i", "İ": "i", i: "i", "Į": "i", "ı": "i", "į": "i", "Ī": "i", "ī": "i", "Ỉ": "i", "ỉ": "i", "Ȉ": "i", "ȉ": "i", "Ȋ": "i", "ȋ": "i", "Ị": "i", "ị": "i", "Ḭ": "i", "ḭ": "i", I: "i", "ı": "i", "Ɨ": "i", "ɨ": "i", "Ĵ": "j", "ĵ": "j", J: "j", "̌": "j", "ǰ": "j", "ȷ": "j", "Ɉ": "j", "ɉ": "j", "ʝ": "j", "ɟ": "j", "ʄ": "j", "Ḱ": "k", "ḱ": "k", "Ǩ": "k", "ǩ": "k", "Ķ": "k", "ķ": "k", "Ḳ": "k", "ḳ": "k", "Ḵ": "k", "ḵ": "k", "Ƙ": "k", "ƙ": "k", "Ⱪ": "k", "ⱪ": "k", "Ĺ": "a", "ĺ": "l", "Ľ": "l", "ľ": "l", "Ļ": "l", "ļ": "l", "Ḷ": "l", "ḷ": "l", "Ḹ": "l", "ḹ": "l", "Ḽ": "l", "ḽ": "l", "Ḻ": "l", "ḻ": "l", "Ł": "l", "ł": "l", "Ł": "l", "̣": "l", "ł": "l", "̣": "l", "Ŀ": "l", "ŀ": "l", "Ƚ": "l", "ƚ": "l", "Ⱡ": "l", "ⱡ": "l", "Ɫ": "l", "ɫ": "l", "ɬ": "l", "ɭ": "l", "ȴ": "l", "Ḿ": "m", "ḿ": "m", "Ṁ": "m", "ṁ": "m", "Ṃ": "m", "ṃ": "m", "ɱ": "m", "Ń": "n", "ń": "n", "Ǹ": "n", "ǹ": "n", "Ň": "n", "ň": "n", "Ñ": "n", "ñ": "n", "Ṅ": "n", "ṅ": "n", "Ņ": "n", "ņ": "n", "Ṇ": "n", "ṇ": "n", "Ṋ": "n", "ṋ": "n", "Ṉ": "n", "ṉ": "n", "Ɲ": "n", "ɲ": "n", "Ƞ": "n", "ƞ": "n", "ɳ": "n", "ȵ": "n", N: "n", "̈": "n", n: "n", "̈": "n", "Ó": "o", "ó": "o", "Ò": "o", "ò": "o", "Ŏ": "o", "ŏ": "o", "Ô": "o", "ô": "o", "Ố": "o", "ố": "o", "Ồ": "o", "ồ": "o", "Ỗ": "o", "ỗ": "o", "Ổ": "o", "ổ": "o", "Ǒ": "o", "ǒ": "o", "Ö": "o", "ö": "o", "Ȫ": "o", "ȫ": "o", "Ő": "o", "ő": "o", "Õ": "o", "õ": "o", "Ṍ": "o", "ṍ": "o", "Ṏ": "o", "ṏ": "o", "Ȭ": "o", "ȭ": "o", "Ȯ": "o", "ȯ": "o", "Ȱ": "o", "ȱ": "o", "Ø": "o", "ø": "o", "Ǿ": "o", "ǿ": "o", "Ǫ": "o", "ǫ": "o", "Ǭ": "o", "ǭ": "o", "Ō": "o", "ō": "o", "Ṓ": "o", "ṓ": "o", "Ṑ": "o", "ṑ": "o", "Ỏ": "o", "ỏ": "o", "Ȍ": "o", "ȍ": "o", "Ȏ": "o", "ȏ": "o", "Ơ": "o", "ơ": "o", "Ớ": "o", "ớ": "o", "Ờ": "o", "ờ": "o", "Ỡ": "o", "ỡ": "o", "Ở": "o", "ở": "o", "Ợ": "o", "ợ": "o", "Ọ": "o", "ọ": "o", "Ộ": "o", "ộ": "o", "Ɵ": "o", "ɵ": "o", "Ṕ": "p", "ṕ": "p", "Ṗ": "p", "ṗ": "p", "Ᵽ": "p", "Ƥ": "p", "ƥ": "p", P: "p", "̃": "p", p: "p", "̃": "p", "ʠ": "q", "Ɋ": "q", "ɋ": "q", "Ŕ": "r", "ŕ": "r", "Ř": "r", "ř": "r", "Ṙ": "r", "ṙ": "r", "Ŗ": "r", "ŗ": "r", "Ȑ": "r", "ȑ": "r", "Ȓ": "r", "ȓ": "r", "Ṛ": "r", "ṛ": "r", "Ṝ": "r", "ṝ": "r", "Ṟ": "r", "ṟ": "r", "Ɍ": "r", "ɍ": "r", "ᵲ": "r", "ɼ": "r", "Ɽ": "r", "ɽ": "r", "ɾ": "r", "ᵳ": "r", "ß": "s", "Ś": "s", "ś": "s", "Ṥ": "s", "ṥ": "s", "Ŝ": "s", "ŝ": "s", "Š": "s", "š": "s", "Ṧ": "s", "ṧ": "s", "Ṡ": "s", "ṡ": "s", "ẛ": "s", "Ş": "s", "ş": "s", "Ṣ": "s", "ṣ": "s", "Ṩ": "s", "ṩ": "s", "Ș": "s", "ș": "s", "ʂ": "s", S: "s", "̩": "s", s: "s", "̩": "s", "Þ": "t", "þ": "t", "Ť": "t", "ť": "t", T: "t", "̈": "t", "ẗ": "t", "Ṫ": "t", "ṫ": "t", "Ţ": "t", "ţ": "t", "Ṭ": "t", "ṭ": "t", "Ț": "t", "ț": "t", "Ṱ": "t", "ṱ": "t", "Ṯ": "t", "ṯ": "t", "Ŧ": "t", "ŧ": "t", "Ⱦ": "t", "ⱦ": "t", "ᵵ": "t", "ƫ": "t", "Ƭ": "t", "ƭ": "t", "Ʈ": "t", "ʈ": "t", "ȶ": "t", "Ú": "u", "ú": "u", "Ù": "u", "ù": "u", "Ŭ": "u", "ŭ": "u", "Û": "u", "û": "u", "Ǔ": "u", "ǔ": "u", "Ů": "u", "ů": "u", "Ü": "u", "ü": "u", "Ǘ": "u", "ǘ": "u", "Ǜ": "u", "ǜ": "u", "Ǚ": "u", "ǚ": "u", "Ǖ": "u", "ǖ": "u", "Ű": "u", "ű": "u", "Ũ": "u", "ũ": "u", "Ṹ": "u", "ṹ": "u", "Ų": "u", "ų": "u", "Ū": "u", "ū": "u", "Ṻ": "u", "ṻ": "u", "Ủ": "u", "ủ": "u", "Ȕ": "u", "ȕ": "u", "Ȗ": "u", "ȗ": "u", "Ư": "u", "ư": "u", "Ứ": "u", "ứ": "u", "Ừ": "u", "ừ": "u", "Ữ": "u", "ữ": "u", "Ử": "u", "ử": "u", "Ự": "u", "ự": "u", "Ụ": "u", "ụ": "u", "Ṳ": "u", "ṳ": "u", "Ṷ": "u", "ṷ": "u", "Ṵ": "u", "ṵ": "u", "Ʉ": "u", "ʉ": "u", "Ṽ": "v", "ṽ": "v", "Ṿ": "v", "ṿ": "v", "Ʋ": "v", "ʋ": "v", "Ẃ": "w", "ẃ": "w", "Ẁ": "w", "ẁ": "w", "Ŵ": "w", "ŵ": "w", W: "w", "̊": "w", "ẘ": "w", "Ẅ": "w", "ẅ": "w", "Ẇ": "w", "ẇ": "w", "Ẉ": "w", "ẉ": "w", "Ẍ": "x", "ẍ": "x", "Ẋ": "x", "ẋ": "x", "Ý": "y", "ý": "y", "Ỳ": "y", "ỳ": "y", "Ŷ": "y", "ŷ": "y", Y: "y", "̊": "y", "ẙ": "y", "Ÿ": "y", "ÿ": "y", "Ỹ": "y", "ỹ": "y", "Ẏ": "y", "ẏ": "y", "Ȳ": "y", "ȳ": "y", "Ỷ": "y", "ỷ": "y", "Ỵ": "y", "ỵ": "y", "ʏ": "y", "Ɏ": "y", "ɏ": "y", "Ƴ": "y", "ƴ": "y", "Ź": "z", "ź": "z", "Ẑ": "z", "ẑ": "z", "Ž": "z", "ž": "z", "Ż": "z", "ż": "z", "Ẓ": "z", "ẓ": "z", "Ẕ": "z", "ẕ": "z", "Ƶ": "z", "ƶ": "z", "Ȥ": "z", "ȥ": "z", "ʐ": "z", "ʑ": "z", "Ⱬ": "z", "ⱬ": "z", "Ǯ": "z", "ǯ": "z", "ƺ": "z", "２": "2", "６": "6", "Ｂ": "B", "Ｆ": "F", "Ｊ": "J", "Ｎ": "N", "Ｒ": "R", "Ｖ": "V", "Ｚ": "Z", "ｂ": "b", "ｆ": "f", "ｊ": "j", "ｎ": "n", "ｒ": "r", "ｖ": "v", "ｚ": "z", "１": "1", "５": "5", "９": "9", "Ａ": "A", "Ｅ": "E", "Ｉ": "I", "Ｍ": "M", "Ｑ": "Q", "Ｕ": "U", "Ｙ": "Y", "ａ": "a", "ｅ": "e", "ｉ": "i", "ｍ": "m", "ｑ": "q", "ｕ": "u", "ｙ": "y", "０": "0", "４": "4", "８": "8", "Ｄ": "D", "Ｈ": "H", "Ｌ": "L", "Ｐ": "P", "Ｔ": "T", "Ｘ": "X", "ｄ": "d", "ｈ": "h", "ｌ": "l", "ｐ": "p", "ｔ": "t", "ｘ": "x", "３": "3", "７": "7", "Ｃ": "C", "Ｇ": "G", "Ｋ": "K", "Ｏ": "O", "Ｓ": "S", "Ｗ": "W", "ｃ": "c", "ｇ": "g", "ｋ": "k", "ｏ": "o", "ｓ": "s", "ｗ": "w" }
var normalize = function( term ) {
	var ret = "";
	for ( var i = 0; i < term.length; i++ ) {
	ret += accentMap[ term.charAt(i) ] || term.charAt(i);
	}
	return ret;
};

$(function() {
	bootbox.setDefaults({
		locale: "fr"
	});	
	
	InfoMessage.init({
        "selector": ".bb-alert"
    });
	
	ErrorMessage.init({
        "selector": ".err-msg"
    });
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 300) {
			$('.totop').slideDown();
		} else {
			$('.totop').slideUp();
		}
	});

	$('.totop a').click(function(e) {
		e.preventDefault();
		$('body,html').animate({
			scrollTop : 0
		}, 500);
	});
	
	// Bootstrap select
	selectpicker = $('.selectpicker').selectpicker({
        'selectedText': 'cat',
        'noneSelectedText': ''
    });

	$('.date').datepicker({
		format: "dd/mm/yyyy",
		 minViewMode: 1,
		 language: "fr"
	});
	$('.time').timepicker({
		minuteStep: 5,
        showInputs: false,
        disableFocus: true,
        showMeridian:false,
        defaultTime:false,
        template:false
	});
	// Popover pour les tooltips de bootstrap
	init_popover();
});

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
}

function show_loader(selectorReference, spaceToAdd,z_index) {
	var z_index = z_index || 2000;
	$('[data-toggle="popover"]').popover('hide');
	$('#common_loader').css('display', "none");

	var spaceToAdd = spaceToAdd || 0;
	var top = 0;
	var left = 0;
	try {
		top  = $(selectorReference).offset().top;
		left = $(selectorReference).offset().left + spaceToAdd;
	}catch (e) {
		 // Do nothing
	}
	$("#common_loader").css('top', top + 'px');
	$("#common_loader").css('left', left + 'px');
	$('#common_loader').css('display', "block");
	$("#common_loader").css('z-index', z_index);
}

function init_popover(){
	// Popover pour les tooltips de bootstrap
	$('[data-toggle="popover"]').popover({
		trigger: 'hover',
		'placement': 'top',
		container: 'body',
		html:true
    }).on("show.bs.popover", function(e){
    	// Cacher s'il existe déjà
        $('[data-toggle="popover"]').not(e.target).popover("hide");        
    });
	
}


function cancel_localisation_search() {
	//Initialiser les champs de recherche
	$('#id_direction').val('');
	$('#direction').val('');
	
	$('#id_region').val('');
	$('#region').val('');
	
	$('#id_district').val('');
	$('#district').val('');	
	
	$('#id_commune').val('');
	$('#commune').val('');	

	$('#id_fokontany').val('');
	$('#fokontany').val('');			
}

function init_localisation_search() {
	//init on charge
	if($('#direction').val()=="")$('#id_direction').val('');
	if($('#region').val()=="")$('#id_region').val('');
	if($('#district').val()=="")$('#id_district').val('');
	if($('#commune').val()=="")$('#id_commune').val('');
	if($('#fokontany').val()=="")$('#id_fokontany').val('');
	
	//Pour direction
	autocomplete_form_input_area_with_id('direction');
	$('#direction').on( "keydown, keyup", function(e) {
	    if(e.keyCode!=13){
	    	$('#id_direction').val('');
	    	$('#rang').val('');
	    	$('#num_menage').val('');
	    }
	});
	$('#direction').on( "blur", function(e) {
		if ($('#id_direction').val().length === 0) {
			$('#direction').val('');
			$('#id_direction').trigger('change');
		}
	});	
	$('#id_direction').on( "change", function(e) {
		$('#direction').removeClass('form-control-error');
	});		
	

	//Pour région
	autocomplete_form_input_area_with_id('region');
	$('#region').on( "keydown, keyup", function(e) {
		if(e.keyCode!=13){
	    	$('#id_region').val('');
	    	$('#rang').val('');
	    	$('#num_menage').val('');
	    }
	});
	$('#region').on( "blur", function(e) {
		if ($('#id_region').val().length === 0) {
			$('#region').val('');
			$('#id_region').trigger('change');
		}
	});		
	$('#id_region').on( "change", function(e) {
		$('#region').removeClass('form-control-error');
	});	

	//Pour district
	autocomplete_form_input_area_with_id('district');
	$('#district').on( "keydown, keyup", function(e) {		
		if(e.keyCode!=13){
	    	$('#id_district').val('');
	    	$('#rang').val('');
	    	$('#num_menage').val('');
	    }
	});
	$('#district').on( "blur", function(e) {
		if ($('#id_district').val().length === 0) {
			$('#district').val('');
			$('#id_district').trigger('change');
		}
	});
	$('#id_district').on( "change", function(e) {
		$('#district').removeClass('form-control-error');
	});

	//Pour commune
	autocomplete_form_input_area_with_id('commune');
	$('#commune').on( "keydown, keyup", function(e) {
		if(e.keyCode!=13){
	    	$('#id_commune').val('');
	    	$('#rang').val('');
	    	$('#num_menage').val('');
	    }
	});
	$('#commune').on( "blur", function(e) {
		if ($('#id_commune').val().length === 0) {
			$('#commune').val('');
			$('#id_commune').trigger('change');
		}
	});		
	$('#id_commune').on( "change", function(e) {
		$('#commune').removeClass('form-control-error');
	});	

	//Pour Fokontany
	autocomplete_form_input_area_with_id('fokontany');
	$('#fokontany').on( "keydown, keyup", function(e) {
		if(e.keyCode!=13){
	    	$('#id_fokontany').val('');
	    	$('#rang').val('');
	    	$('#num_menage').val('');
	    }
	});
	$('#fokontany').on( "blur", function(e) {
		if ($('#id_fokontany').val().length === 0) {
			$('#fokontany').val('');
			$('#id_fokontany').trigger('change');
		}
	});	
	$('#id_fokontany').on( "change", function(e) {
		$('#fokontany').removeClass('form-control-error');
	});		
	//Pour Fokontany changement domicile traitement cas speciaux
   autocomplete_form_input_area_with_id('fokontany_cs');
	$('#fokontany_cs').on( "keydown, keyup", function(e) {	    
	    $('#fokontany_cs').removeClass('form-control-error');
		if(e.keyCode!=13){
	    	$('#id_fokontany').val('');
	    	$('#rang').val('');
	    	$('#num_menage').val('');
	    }
	});
	$('#fokontany_cs').on( "blur", function(e) {
		if ($('#id_fokontany').val().length === 0) {
			$('#fokontany_cs').val('');
			$('#id_fokontany').trigger('change');
		}
	});		
	$('#id_fokontany').on( "change", function(e) {
		$('#fokontany_cs').removeClass('form-control-error');
	});			
	
	//agence
	autocomplete_form_input_area_with_id('agence');
	$('#agence').on( "keydown, keyup", function(e) {
		$('#agence').removeClass('form-control-error');
		if(e.keyCode!=13){
	    	$('#id_agence').val('');
	    	$('#rang').val('');
	    	$('#num_menage').val('');
	    }	
	});
	$('#agence').on( "blur", function(e) {
		if ($('#id_agence').val().length === 0) {
			$('#agence').val('');
			$('#id_agence').trigger('change');
		}
	});	
	$('#id_agence').on( "change", function(e) {
		$('#agence').removeClass('form-control-error');
	});		
}

function format(elt, mask){
	elt.mask(mask);
}

function date_en_to_fr(date_en){
	// inputs date in yyyy-mm-dd format
	parts = date_en.split('-');
	tmp = parts[0];
	parts[0] = parts[2];
	parts[2] = tmp;
	return parts.join('/');
}

function date_fr_to_en(date_fr){
	// inputs date in dd/mm/yyyy format
	parts = date_en.split('/');
	tmp = parts[0];
	parts[0] = parts[2];
	parts[2] = tmp;
	return parts.join('-');
}

function autocomplete_nom_chef_de_menage(input_id){
	$(input_id).typeahead({
		dropdown_width_justify : true,
		source: function (q, process) {
			var base_url = $('#base_url').val();
			var url = base_url + 'ciblage/gestion_des_menages/get_nom_chef_menage_json';
			return $.get(url, {
				nom_chef_de_menage: q
			}, function (response) {
				var data = [];
				result = $.parseJSON(response);
				for (var i in result) {
					data.push(result[i].nom_chef_de_menage);
				}
				return process(data);
			});
		},
		matcher: function (item) {
			$('ul.typeahead').css('width', '479px');
			return true;
		},
		highlighter: function (item) {
			html = '<div>'+item+'</div>';
			return html;
		},
		updater: function (item) {
			return item;
		},
		items : 20,
		minLength: 2
	});
}

function autocomplete_form_input_area_with_id(type){
	switch(type){
		case 'direction' : 
		case 'direction_only':	
		{
			$('#direction').typeahead({
				dropdown_width_justify : true,
				source: function (q, process) {
					var base_url = $('#base_url').val();
					$('#id_direction').val('');
					$('#id_region').val('');
					$('#region').val('');
					$('#id_district').val('');
					$('#district').val('');
					$('#id_commune').val('');
					$('#commune').val('');
					$('#id_fokontany').val('');
					$('#fokontany').val('');		
					//fire event change for hidden input
					$('#id_direction').trigger('change');
					$('#id_region').trigger('change');
					$('#id_district').trigger('change');
					$('#id_commune').trigger('change');
					$('#id_fokontany').trigger('change');
					
					var direction_only = 0;
					if (type=='direction_only') {
						direction_only = 1;
					}
										
					var url_enfant = base_url + 'localisation/direction/get_all_direction/';
					return $.get(url_enfant, {
						nom_direction: q,
						direction_only : direction_only
					}, function (response) {
						var data = [];
						result = $.parseJSON(response);
						for (var i in result) {
							data.push(result[i].id_direction+ "#"+ result[i].code_direction + " - " + result[i].nom_direction  );
							
						}
						return process(data);
					});
				},
				matcher: function (item) {
					$('ul.typeahead').css('width', '479px');
					return true;
				},
				highlighter: function (item) {
					var parts = item.split('#');
					html = '<div>'+parts[1]+'</div>';
					return html;
				},
				updater: function (item) {
					var parts = item.split('#');
					$('#id_direction').val(parts[0]);
					$('#region').attr('disabled',false);
					//fire event change for hidden input
					$('#id_direction').trigger('change');
					$('#id_region').trigger('change');
					$('#id_district').trigger('change');
					$('#id_commune').trigger('change');
					$('#id_fokontany').trigger('change');
					return parts[1];
				},
				items : 20,
				minLength: 2
			});
			break;
		}
		
		case 'region' :
		{
			$('#region').typeahead({
				dropdown_width_justify : true,
				source: function (q, process) {
					var base_url = $('#base_url').val();
					$('#id_region').val('');
					$('#id_district').val('');
					$('#district').val('');
					$('#id_commune').val('');
					$('#commune').val('');
					$('#id_fokontany').val('');
					$('#fokontany').val('');					
					//fire event change for hidden input					
					$('#id_region').trigger('change');
					$('#id_district').trigger('change');
					$('#id_commune').trigger('change');
					$('#id_fokontany').trigger('change');
					
					//-------BootstrapDuallistbox Author HERIVOLA-------//
					/*var oSelect = document.getElementById('SelectListe'),
                    opts = oSelect.getElementsByTagName('option');
 
                     while(opts[0]) {
                     oSelect.removeChild(opts[0]);
                     }*/
	                // $('#SelectListe').empty();
	                //  demo1.trigger('bootstrapduallistbox.refresh');
					
					
					
					var url_enfant = base_url + 'localisation/region/get_all_region';
					return $.get(url_enfant, {
						id_direction : $('#id_direction').val(),
						nom_region: q
					}, function (response) {
						var data = [];
						result = $.parseJSON(response);
						for (var i in result) {
							data.push(result[i].id_region+ "#"  + result[i].nom_region);
						}
						return process(data);
					});
				},
				matcher: function (item) {
					$('ul.typeahead').css('width', '479px');
					return true;
				},
				highlighter: function (item) {
					var parts = item.split('#');
					html = '<div>'+parts[1]+'</div>';
					return html;
				},
				updater: function (item) {
							
						if($("#id_direction").val() != ''||$('#direction').val() != '')	{
							var parts = item.split('#');
							$('#id_region').val(parts[0]);
							$('#region').val(parts[1]);
							//fire event change for hidden input
							$('#id_region').trigger('change');
							return parts[1];
						}
						else{
							var parts = item.split('#');
		                    var base_url = $('#base_url').val();
		                    var id_region =  parts[0];
		                   
		                    $.ajax({
		                        url : base_url + 'localisation/region/get_all_region/?id_region='+id_region,
								success: function(response) {
									$result = $.parseJSON(response);				
									$('#id_direction').val($result[0].id_direction);
									$('#direction').val($result[0].nom_direction);
									$('#id_region').val($result[0].id_region);
									//fire event change for hidden input					
									$('#id_region').trigger('change');
									$('#id_district').trigger('change');
									$('#id_commune').trigger('change');
									$('#id_fokontany').trigger('change');
								}
							});
		                    return parts[1];
						}
					
				},
				items : 20,
				minLength: 2
			});
			break;
		}
		
		case 'district' :
		{
			$('#district').typeahead({
				dropdown_width_justify : true,
				source: function (q, process) {
					var base_url = $('#base_url').val();
					$('#id_district').val('');
					$('#id_commune').val('');
					$('#commune').val('');
					$('#id_fokontany').val('');
					$('#fokontany').val('');					
					//fire event change for hidden input										
					$('#id_district').trigger('change');
					$('#id_commune').trigger('change');
					$('#id_fokontany').trigger('change');
					
					//-------BootstrapDuallistbox Author HERIVOLA-------//
					/*var oSelect = document.getElementById('SelectListe'),
                    opts = oSelect.getElementsByTagName('option');
 
                     while(opts[0]) {
                     oSelect.removeChild(opts[0]);
                     }*/
	                // $('#SelectListe').empty();
	                // demo1.trigger('bootstrapduallistbox.refresh');
					
					
					
					var url_enfant = base_url + 'localisation/district/get_all_district';
					return $.get(url_enfant, {
						id_direction: $('#id_direction').val(),
						id_region : $('#id_region').val(),
						nom_district: q
					}, function (response) {
						var data = [];
						result = $.parseJSON(response);
						for (var i in result) {
							data.push(result[i].id_district+ "#" + result[i].nom_district+ "#" +result[i].id_directon+ "#" +result[i].id_region);
						}
						return process(data);
					});
				},
				matcher: function (item) {
					$('ul.typeahead').css('width', '479px');
					return true;
				},
				highlighter: function (item) {
					var parts = item.split('#');
					html = '<div>'+parts[1]+'</div>';
					return html;
				},
				updater: function (item) {
					if($("#id_region").val() != ''||$('#region').val() != ''){
						var parts = item.split('#');
						$('#id_district').val(parts[0]);
						//fire event change for hidden input
						$('#id_district').trigger('change');
						return parts[1];
					}
					else{
						var parts = item.split('#');
	                    var base_url = $('#base_url').val();
	                    var id_district =  parts[0];
	                   
	                    $.ajax({
	                        url : base_url + 'localisation/district/get_all_district?id_district='+id_district,
							success: function(response) {
								$result = $.parseJSON(response);				
								$('#id_direction').val($result[0].id_direction);
                                $('#id_region').val($result[0].id_region);
								$('#direction').val($result[0].nom_direction);
								$('#region').val($result[0].nom_region);
								$('#id_district').val($result[0].id_district);
								//fire event change for hidden input										
								$('#id_district').trigger('change');
								$('#id_commune').trigger('change');
								$('#id_fokontany').trigger('change');
							}
						});
	                    return parts[1];
					}
				},
				items : 20,
				minLength: 2
			});
			break;
		}
		
		case 'commune' :
		{
            $('#commune').typeahead({
                dropdown_width_justify : true, 
                source: function (q, process) {
            	
                    var base_url = $('#base_url').val();
					if($("#id_direction").val() != ''|| $("#id_direction").val() != ''|| $("#id_region").val() != '' ||$("#id_district").val() != ''){
			
						var id_region =  $('#id_region').val();
                        $('#id_commune').val('');
                        $('#id_fokontany').val('');
                        $('#fokontany').val('');
                        //fire event change for hidden input										
    					$('#id_commune').trigger('change');
    					$('#id_fokontany').trigger('change');                        
                        
                        var url_enfant = base_url + 'localisation/commune/get_all_commune';
                        return $.get(url_enfant, {
                        	id_direction:$('#id_direction').val(),
                        	id_region:id_region,
                            id_district : $('#id_district').val(),
                        	nom_commune: q
                        }, function (response) {
                            var data = [];
                            result = $.parseJSON(response);
                            for (var i in result) {
                                data.push(result[i].id_commune+ "#" + result[i].nom_commune);
                            }
                            return process(data);
                        });
                    }

                    else{
                        $('#id_commune').val('');
                        $('#id_fokontany').val('');
                        $('#fokontany').val('');
                        var url_enfant = base_url + 'localisation/commune/get_all_commune/';
                        $.ajax({
							url: url_enfant,
							type:'get',
							data:{
								id_direction : $('#id_direction').val(),
								nom_commune: q},
							success : function(response){
								var data = [];
								result = $.parseJSON(response);
								for (var i in result) {
									data.push(result[i].id_commune+ "#" + result[i].nom_commune+ "#" + result[i].id_direction+ "#" + result[i].id_region+ "#" +result[i].id_district);
								}
								return process(data);
							}
						});
                    }
                },
                matcher: function (item) {
                    $('ul.typeahead').css('width', '479px');
                    return true;
                },
                highlighter: function (item) {
                    var parts = item.split('#');
                    html = '<div>'+parts[1]+'</div>';
                    return html;
                },
                updater: function (item) {
                    if($("#id_district").val() != ''||$('#district').val() != ''){
                        var parts = item.split('#');
                        $('#id_commune').val(parts[0]);
                       //fire event change for hidden input										
    					$('#id_commune').trigger('change');
    					$('#id_fokontany').trigger('change');  
                        return parts[1];
                    }

                    else{
                        var parts = item.split('#');
                        var base_url = $('#base_url').val();
                         $('#id_commune').val(parts[0]);
                         var com = parts[0];
                        $('#id_direction').val(parts[2]);
                        $('#id_region').val(parts[3]);
                        $('#id_district').val(parts[4]);
                        $.ajax({
                            url : base_url + 'localisation/commune/get_all_commune/?id_commune='+com,
							success: function(response) {
								$result = $.parseJSON(response);
                                $('#id_direction').val($result[0].id_direction);
                                $('#id_region').val($result[0].id_region);
                                $('#id_district').val($result[0].id_district);
								$('#direction').val($result[0].nom_direction);
								$('#region').val($result[0].nom_region);
								$('#district').val($result[0].nom_district);
								$('#id_commune').val(parts[0]);
								//fire event change for hidden input
								$('#id_direction').trigger('change');
								$('#id_region').trigger('change');
								$('#id_district').trigger('change');
								$('#id_commune').trigger('change');
							}
						});
						return parts[1];
                    }
			
                },
                items : 20,
                minLength: 2
            });
            break;
        }
		
		case 'fokontany' :
		{
			$('#fokontany').typeahead({
				dropdown_width_justify : true,
				source: function (q, process) {
					var base_url = $('#base_url').val();
					
					if($("#id_commune").val() != ''||$('#commune').val() != '' ||$("#id_direction").val() != ''|| $("#id_direction").val() != ''|| $("#id_region").val() != '' ||$("#id_district").val() != ''){
						$('#id_fokontany').val('');
						//fire event change for hidden input										
    					$('#id_fokontany').trigger('change'); 
    					
						var id_direction =$('#id_direction').val();
						var id_region =$('#id_region').val();
						var id_district =$('#id_district').val();
						var id_commune = $('#id_commune').val();
						var url_enfant = base_url + 'localisation/fokontany/get_all_fokontany/';
						return $.get(url_enfant, {
							nom_fokontany: q,
							id_direction : id_direction,
							id_region:id_region,
							id_district:id_district,
							id_commune : id_commune
							
						}, function (response) {
							var data = [];
							result = $.parseJSON(response);
							for (var i in result) {
								data.push(result[i].id_fokontany+ "#" + result[i].nom_fokontany + 
										"#" +result[i].id_commune+ "#" + "#" + result[i].id_direction+ "#" 
										+ result[i].id_region+ "#" +result[i].id_district);
							}
							return process(data);
						});
					}
					else{
						var url_enfant = base_url + 'localisation/fokontany/get_all_fokontany/';
						return $.get(url_enfant, {
							nom_fokontany: q
						}, function (response) {
							var data = [];
							result = $.parseJSON(response);
							for (var i in result) {
								data.push(result[i].id_fokontany+ "#" + result[i].nom_fokontany + 
										"#" +result[i].id_commune+ "#" + "#" + result[i].id_direction+ "#" 
										+ result[i].id_region+ "#" +result[i].id_district);
							}
							return process(data);
						});
					}
					
				},
				matcher: function (item) {
					$('ul.typeahead').css('width', '479px');
					return true;
				},
				highlighter: function (item) {
					var parts = item.split('#');
					html = '<div>'+parts[1]+'</div>';
					return html;
				},
				updater: function (item) {
					
				if($("#id_commune").val() != ''||$('#commune').val() != '')	{
					var parts = item.split('#');
					$('#id_fokontany').val(parts[0]);
					//fire event change for hidden input
					$('#id_fokontany').trigger('change');
					// if there is form for creating menage, find the last number recorded for the freshly selected fkt
					if($('#add_menage_form').length>0){
						var base_url = $('#base_url').val();
						$.ajax({
							url: base_url + 'ciblage/gestion_des_menages/ajax_get_last_record_number',
							type: 'POST',
							data: {id_fokontany: parts[0]},
							success: function(data){
								if($('#rang').val()=='')$('#rang').val(data.rang);
								if($('#num_menage').val()=='')$('#num_menage').val(data.num_menage);
							}
						});
					}					
					return parts[1];
				}
				else{
					var parts = item.split('#');
                    var base_url = $('#base_url').val();
                    var id_direction =  $('#id_direction').val();
                    
                    $('#id_fokontany').val(parts[0]);
                    $('#id_commune').val(parts[2]);
                    //CRA: 17/07/2015 : Il y a un problème : voici le JSON donc il y a erreur sur l'index
                    // ["109070001", "ALAKAMISY ANATIVATO", "109070", "", "1", "12", "109"]
                    /*
                    $('#id_region').val(parts[4]);
                    $('#id_district').val(parts[5]);
                    */
                    $('#id_region').val(parts[5]);
                    $('#id_district').val(parts[6]);                    
      
                    $.ajax({
                        url : base_url + 'localisation/fokontany/get_all_fokontany/?id_direction='+id_direction+'&id_fokontany='+parts[0],
						success: function(response) {
							$result = $.parseJSON(response);
                            $('#id_direction').val($result[0].id_direction);
                            $('#id_region').val($result[0].id_region);
                            $('#id_district').val($result[0].id_district);
                            $('#id_commune').val($result[0].id_commune);
							$('#direction').val($result[0].nom_direction);
							$('#region').val($result[0].nom_region);
							$('#district').val($result[0].nom_district);
							$('#commune').val($result[0].nom_commune);
						}
					});
					//fire event change for hidden input
					$('#id_direction').trigger('change');
					$('#id_region').trigger('change');
					$('#id_district').trigger('change');
					$('#id_commune').trigger('change');
					$('#id_fokontany').trigger('change');

                    return parts[1];
				}
					
				},
				items : 100,
				minLength: 2
			});
			break;
		}
		
		case 'activite' :
		{   
		    var d = document.getElementsByName('agence_paiement')[0]; 
		    var e = document.getElementsByName('agence_paiement')[0].selectedIndex;
			var f= d.options[e].value;

			$('#activite').typeahead({
				dropdown_width_justify : true,
				source: function (q, process) {
					var base_url = $('#base_url').val();
					$('#id_activite').val('');
					var url_enfant = base_url + 'parametrages/activite/getActivites';
					return $.get(url_enfant, {
						nom_activite: q,
						id_fokontany: $('#id_fokontany').val(),
						id_agence_paiement : f
					}, function (response) {
						var data = [];
						result = $.parseJSON(response);
						for (var i in result) {
							data.push(result[i].id_activite+ "#" + result[i].libelle_fr);
						}
						return process(data);
					});
				},
				matcher: function (item) {
					$('ul.typeahead').css('width', '479px');
					return true;
				},
				highlighter: function (item) {
					var parts = item.split('#');
					html = '<div>'+parts[1]+'</div>';
					return html;
				},
				updater: function (item) {
					var parts = item.split('#');
					$('#id_activite').val(parts[0]);
					return parts[1];
				},
				items : 20,
				minLength: 2
			});
			break;
		}
		
		case 'nom_activite' :
		{ 
		   
			$('#nom_activite').typeahead({
				dropdown_width_justify : true,
				source: function (q, process) {
					var base_url = $('#base_url').val();
					$('#id_activite').val('');
					var url_enfant = base_url + 'parametrages/activite/get_all_activite';
					return $.get(url_enfant, {
						nom_activite: q
						
					}, function (response) {
						var data = [];
						result = $.parseJSON(response);
						
						for (var i in result) {
							data.push(result[i].id_activite+ "#" + result[i].libelle_fr);
						}
						return process(data);
					});
				},
				matcher: function (item) {
					$('ul.typeahead').css('width', '479px');
					return true;
				},
				highlighter: function (item) {
					var parts = item.split('#');
					html = '<div>'+parts[1]+'</div>';
					return html;
				},
				updater: function (item) {
					var parts = item.split('#');
					$('#id_activite').val(parts[0]);
					return parts[1];
				},
				items : 20,
				minLength: 2
			});
			break;
		}
		case 'agence' :
		{
			$('#agence').typeahead({
				dropdown_width_justify : true,
				source: function (q, process) {
					var base_url = $('#base_url').val();
					$('#id_agence').val('');
					var url_enfant = base_url + 'paiement/agence_de_paiement/getAgence';
					return $.get(url_enfant, {
						nom_agence_paiement: q
					}, function (response) {
						var data = [];
						result = $.parseJSON(response);
						for (var i in result) {
							data.push(result[i].id_agence_paiement+ "#" + result[i].nom_agence_paiement);
						}
						return process(data);
					});
				},
				matcher: function (item) {
					$('ul.typeahead').css('width', '479px');
					return true;
				},
				highlighter: function (item) {
					var parts = item.split('#');
					html = '<div>'+parts[1]+'</div>';
					return html;
				},
				updater: function (item) {
					var parts = item.split('#');
					$('#id_agence').val(parts[0]);
					return parts[1];
				},
				items : 20,
				minLength: 2
			});
			break;
		}
		case 'grand_livre' :
		{
			$('#code_menage').typeahead({
				dropdown_width_justify : true,
				source: function (q, process) {
					var base_url = $('#base_url').val();
					var t = $('#table').val() ;
					var url_enfant = base_url + 'paiement/grand_livre/get_code_menage';
					return $.get(url_enfant, {
						code_menage: q,
						table:t
					}, function (response) {
						var data = [];
						result = $.parseJSON(response);
						for (var i in result) {
							data.push(result[i].code_menage);
						}
						return process(data);
					});
				},
				matcher: function (item) {
					$('ul.typeahead').css('width', '479px');
					return true;
				},
				highlighter: function (item) {
					var parts = item.split('#');
					html = '<div>'+parts[0]+'</div>';
					return html;
				},
				updater: function (item) {
					var parts = item.split('#');
					return parts[0];
				},
				items : 20,
				minLength: 2
			});
			break;
		}
		case 'nom_unite_intervention_recherche':
		{
			$('#nom_unite_intervention_recherche').typeahead({
				dropdown_width_justify : true,
				source: function (q, process) {
					var base_url = $('#base_url').val();
					var url_enfant = base_url + 'parametrages/unite_intervention/get_all_unite';
					return $.get(url_enfant, {
						nom_unite_intervention:q 
					}, function (response) {
						var data = [];
						result = $.parseJSON(response);
						for (var i in result) {
							data.push(result[i].id_unite_intervention+ "#" + result[i].nom_unite_intervention);
						}
						return process(data);
					});
				},
				matcher: function (item) {
					$('ul.typeahead').css('width', '479px');
					return true;
				},
				highlighter: function (item) {
					var parts = item.split('#');
					html = '<div>'+parts[1]+'</div>';
					return html;
				},
				updater: function (item) {
					var parts = item.split('#');
					$('#id_unite_intervention_recherche').val(parts[0]);
					return parts[1];
				},
				items : 20,
				minLength: 2
			});
			break;
		}
		case 'user_accounts' :
		{
			$('#user_accounts').typeahead({
				dropdown_width_justify : true,
				source: function (q, process) {
					var base_url = $('#base_url').val();
					$('#uacc_id').val('');
					var url_enfant = base_url + 'presence/presence/getUsers';
					return $.get(url_enfant, {
						nom_user: q
					}, function (response) {
						var data = [];
						result = $.parseJSON(response);
						for (var i in result) {
						    var conc= result[i].nom_user+" "+result[i].prenom_user;
							data.push(result[i].uacc_id+ "#" + conc);
						}
						return process(data);
					});
				},
				matcher: function (item) {
					$('ul.typeahead').css('width', '479px');
					return true;
				},
				highlighter: function (item) {
					var parts = item.split('#');
					html = '<div>'+parts[1]+'</div>';
					return html;
				},
				updater: function (item) {
					var parts = item.split('#');
					$('#uacc_id').val(parts[0]);
					return parts[1];
				},
				items : 20,
				minLength: 2
			});
			break;
		}
		case 'fokontany_cs' :
		{
			$('#fokontany_cs').typeahead({
				dropdown_width_justify : true,
				source: function (q, process) {
					var base_url = $('#base_url').val();
					
						var url_enfant = base_url + 'localisation/fokontany/get_all_fokontany/';
						return $.get(url_enfant, {
							nom_fokontany: q
						}, function (response) {
							var data = [];
							result = $.parseJSON(response);
							for (var i in result) {
								data.push(result[i].id_fokontany+ "#" + result[i].nom_fokontany + 
										"#" +result[i].id_commune+ "#" + "#" + result[i].id_direction+ "#" 
										+ result[i].id_region+ "#" +result[i].id_district);
							}
							return process(data);
						});
					
				},
				matcher: function (item) {
					$('ul.typeahead').css('width', '479px');
					return true;
				},
				highlighter: function (item) {
					var parts = item.split('#');
					html = '<div>'+parts[1]+'</div>';
					return html;
				},
				updater: function (item) {
				
					var parts = item.split('#');
                    var base_url = $('#base_url').val();
                    var id_direction =  $('#id_direction').val();
                    
                    $('#id_fokontany').val(parts[0]);
                    $('#id_commune').val(parts[2]);
                    $('#id_region').val(parts[4]);
                    $('#id_district').val(parts[5]);
                    $.ajax({
                        url : base_url + 'localisation/fokontany/get_all_fokontany/?id_direction='+id_direction+'&id_fokontany='+parts[0],
						success: function(response) {
							$result = $.parseJSON(response);
                            $('#id_direction').val($result[0].id_direction);
                            $('#id_region').val($result[0].id_region);
                            $('#id_district').val($result[0].id_district);
                            $('#id_commune').val($result[0].id_commune);
							$('#direction').val($result[0].nom_direction);
							$('#region').val($result[0].nom_region);
							$('#district').val($result[0].nom_district);
							$('#commune').val($result[0].nom_commune);
						}
					});

                    return parts[1];
				
				},
				items : 100,
				minLength: 2
			});
			break;
		}

		
	}
	
}

function rechercher_menage(){
	$('#rechercher').click(function(){
		var base_url = $('#base_url').val();
		var id_fokontany = $('#id_fokontany').val();
		var nom_chef_de_menage= $('#nom_chef_de_menage').val();
		/*if($('#fokontany').val()==''){
			var err_fkt = $('#fkt_oblig').val();
			$('#input_fokontany').html(err_fkt);
			$('#row_fokontany').attr('style','display:block');
			$('#fokontany').attr('class','form-control form-control-perso form-control-error');
		}
		else {
			$('#fokontany').attr('class','form-control form-control-perso');
			$('#input_fokontany').html('');
			$('#row_fokontany').attr('style','display:none');
		}
		
		if($('#commune').val()==''){
			var err_comm = $('#comm_oblig').val();
			$('#input_commune').html(err_comm);
			$('#row_commune').attr('style','display:block');
			$('#commune').attr('class','form-control form-control-perso form-control-error');
		}
		else{
			$('#commune').attr('class','form-control form-control-perso');
			$('#input_commune').html('');
			$('#row_commune').attr('style','display:none');
		}*/
		var cin = $('#cin').val();
		var num_recepisse = $('#numRecepisse').val();
		$.ajax({
			url : base_url + 'ciblage/gestion_des_menages/rechercher_menage_par_fokontany',
			type: 'get',
			data:{
				id_fokontany:id_fokontany,
				nom_chef_de_menage:nom_chef_de_menage,
				cin:cin,
				num_recepisse:num_recepisse
			},
			success:function(response){
				$('#list_menage').bootstrapTable('load',$.parseJSON(response));
				$('.pagination').hide(); // and after successful loading of the table too
				$('.pagination-info').hide();
				$('#custom_pagination_info').html($('.pagination-info').html());
			}
		});
	});
}


			function get_beneficiaire(id,fok) {
				var base_url = $('#base_url').val();
				var id_agence = id;
				var id_fok = fok;
				$.ajax({
					url:base_url + 'paiement/liste_beneficiaire/json_list_beneficiaire',
					type: 'post',
						data:{
							id_agence_paiement : id_agence,
							id_fokontany : id_fok
						},
						success:function(response){
				
							$('#list_beneficiaire').bootstrapTable('load',$.parseJSON(response));							
						}, 
						error:function(response){
							ErrorMessage.show("Une erreur s'est produite");

						}
				});
				
			}
			
	function get_etat_provisoire(agence) {
				var base_url = $('#base_url').val();
				var n_agence  = agence;
				$.ajax({ 
					url : base_url + 'paiement/etat_a_payer_provisoire/json_list_etat_provisoire',
					type : 'post',
					data :{
						nom_agence : n_agence
					},
					
					success:function(response){
						$('#etat_provisoire').bootstrapTable('load',$.parseJSON(response));							
					},
					error:function(response){
						ErrorMessage.show("Une erreur s'est produite");

					}
				});

			}
				


function supprimer_menage(id_menage){
	var base_url = $('#base_url').val();
	$.ajax({
		url : base_url + 'ciblage/gestion_des_menages/supprimer_menage',
		type: 'get',
		data:{
			id_menage : id_menage
		},
		success:function(response){
			var id_fokontany = $('#id_fokontany').val();
			var nom_chef_de_menage= $('#nom_chef_de_menage').val();
			var cin = $('#cin').val();
			var num_recepisse = $('#numRecepisse').val();
			var succes = $('#suppression_succes').val();
			InfoMessage.show(succes);
			$.ajax({
				url : base_url + 'ciblage/gestion_des_menages/rechercher_menage_par_fokontany',
				type: 'get',
				data:{
					id_fokontany:id_fokontany,
					nom_chef_de_menage:nom_chef_de_menage,
					cin:cin,
					num_recepisse:num_recepisse
				},
				success:function(response){
					var res = $.parseJSON(response)
					$('#list_menage').bootstrapTable('load',res.result);
					//$('#list_menage').bootstrapTable('load',$.parseJSON(response));
					$('.pagination').hide(); // and after successful loading of the table too
					$('.pagination-info').hide();
					$('#custom_pagination_info').html($('.pagination-info').html());
					$('#custom_pagination_info').show();					
					return true;
				}
			});
		}
	});
}



function new_agence(data) {
	var base_url = $('#base_url').val();
	var nom_agence = data;
	$.ajax({
		url : base_url + 'paiement/agence_de_paiement/new_agence_json/',
		type: 'post',
		data:{
			nom_agence_paiement : nom_agence
		},
		success:function(response){
			

			$.ajax({
				url : base_url + 'paiement/agence_de_paiement/list_agence_paiement_json',
				type: 'get',
				success:function(response){
					$('#list_agence').bootstrapTable('load',$.parseJSON(response));
					return true;
				}
			});
	
		}
	});
}

function supprimer_agence(id_agence){
	var base_url = $('#base_url').val();
	var id_agence = id_agence;
	$.ajax({
		url : base_url + 'paiement/agence_de_paiement/supprimer_agence',
		type: 'get',
		data:{
			id_agence_paiement : id_agence
		},
		success:function(response){
		
			$.ajax({
				url : base_url + 'paiement/agence_de_paiement/list_agence_paiement_json',
				type: 'get',
				success:function(response){
					$('#list_agence').bootstrapTable('load',$.parseJSON(response));
					return true;
				}
			});
		},
		error : function(){
			 ErrorMessage.show("Impossible d"+"'"+"effacer cet enregistrement");
			}
	});
}

function convert_dependance_to_instruction(dep, container){ // we must specify the container to avoid ambiguity
	//dep = '(H1==5)&&(m2rt<8)';
	var list_q = window.list_q;
	initial = dep;
	// sigularize parenthesis
	dep = dep.replace(/[\(]+/g, '(');
	dep = dep.replace(/[\)]+/g, ')');
	var results = [], re = /\(([^)]+)\)/g, text; // using regex to detect each single stringified condition
	while(text = re.exec(dep)) {
		results.push(text[1]);
	}
	// looping through condition to replace question codes into valid jQuery selectors
	var un_res = []; // will contain unique question codes
	for(var i in results){
		p = /(==|<=|>=|!=){1}/;
		var op;
		if(p.exec(results[i])!=null){
			op = p.exec(results[i])[1];
		}
		else{
			p = /(<|>){1}/;
			if(p.exec(results[i])!=null){
				op = p.exec(results[i])[1];
			}
			else{return 'error';}
		}
		//q_code = results[i].split(op)[0];
		left_side = results[i].split(op);
		for(var k in list_q){
			p = new RegExp(list_q[k], 'g');
			execute = p.exec(left_side);
			if(execute!=null){
				q_code = execute[0];
				// for safe replacement, make sure q_code is reapeated at most once in the array
				is_q_code_in = false;
				for(var j in un_res){
					if(un_res[j]==q_code){
						is_q_code_in = true;
					}
				}
				if(!is_q_code_in){
					un_res.push(q_code);
				}
			}
		}
		
		// for < , <= , > , >= operators, operands should not be left as strings
		if(op!='=='){ 
			//dep = dep.replace(new RegExp(q_code, 'g'), 'parseInt('+q_code+')');
			initial = initial.replace(new RegExp(q_code, 'g'), 'parseInt('+q_code+')');
		}
		
		if(!$.isNumeric(results[i].split(op)[1])){ // check if the right hand operand is also a question_code
			right_side = results[i].split(op);
			/*
			// for safe replacement, make sure q_code is reapeated at most once in the array
			is_q_code_in = false;
			for(var j in un_res){
				if(un_res[j]==q_code){
					is_q_code_in = true;
				}
			}
			if(!is_q_code_in){
				un_res.push(q_code);
			}
			*/
			for(var k in list_q){
				p = new RegExp(list_q[k], 'g');
				execute = p.exec(right_side);
				if(execute!=null){
					q_code = execute[0];
					// for safe replacement, make sure q_code is reapeated at most once in the array
					is_q_code_in = false;
					for(var j in un_res){
						if(un_res[j]==q_code){
							is_q_code_in = true;
						}
					}
					if(!is_q_code_in){
						un_res.push(q_code);
					}
				}
			}
			
		}
		
		for(var r in un_res){
			// for < , <= , > , >= operators, operands should not be left as strings
			if(op!='=='){ 
				//dep = dep.replace(new RegExp(q_code, 'g'), 'parseInt('+q_code+')');
				initial = initial.replace(new RegExp(un_res[r], 'g'), 'parseInt('+un_res[r]+')');
			}
		}
		
	}
	
	// now loop and replace
	if(container==null){
		for(var i in un_res){
			q_code = un_res[i];
			if($('#'+q_code).attr('type')=='radio'){
				var rpl = $('#'+q_code).attr('name'); // if radio button, take the name as selector not the id
				var sel = '';
				$('input[name="'+rpl+'"]').each(function(){
					if($(this).is(':checked'))sel = $(this).val();
				});
				//dep = dep.replace(new RegExp(q_code, 'g'), '"'+sel+'"');
				initial = initial.replace(new RegExp(q_code, 'g'), '"'+sel+'"');
			}
			else{
				//dep = dep.replace(new RegExp(q_code, 'g'), "$('#"+q_code+"').val()");
				initial = initial.replace(new RegExp(q_code, 'g'), "$('#"+q_code+"').val()");
			}
		}
	}
	else{
		for(var i in un_res){
			q_code = un_res[i];
			if(container.find('#'+q_code).attr('type')=='radio'){
				var rpl = container.find('#'+q_code).attr('name'); // if radio button, take the name as selector not the id
				var sel = '';
				container.find('input[name="'+rpl+'"]').each(function(){
					if($(this).is(':checked'))sel = $(this).val();
				});
				//dep = dep.replace(new RegExp(q_code, 'g'), '"'+sel+'"');
				initial = initial.replace(new RegExp(q_code, 'g'), '"'+sel+'"');
			}
			else{
				var sel = container.find('#'+q_code).val();
				//dep = dep.replace(new RegExp(q_code, 'g'), '"'+sel+'"');
				initial = initial.replace(new RegExp(q_code, 'g'), '"'+sel+'"');
			}
		}
	}
	//if(initial.indexOf('m18b<=m4_age')!=-1)alert(dep);
	// check number of parenthesis
	chars = initial.split('');
	var opened = [];
	var clo = [];
	for(var i in chars){
		if(chars[i]=='(')opened.push(chars[i]);
		if(chars[i]==')')clo.push(chars[i]);
	}
	if(opened.length!=clo.length){console.log(opened.length+' à '+clo.length+' => '+initial); return 'error';};
	return initial;
}

function get_select_option_values(element_id){
	var option_selected = $(element_id + " option:selected");
	values = new Array();
	for(i=0; i < option_selected.length; i++){
		values.push(option_selected[i].value);
	}
	return values;
}

function alertbox(title, message, label_ok){
	label_ok = label_ok || 'OK';
	bootbox.alert({
	    title: title,
	    message: message,
	    buttons: {
	        'ok': {
	            label: label_ok,
	            className: 'btn-primary btn-primary-familiplace'
	        }
	    }
	});
}


var InfoMessage = (function() {
   "use strict";
   var elem,
       hideHandler,
       that = {};

   that.init = function(options) {
       elem = $(options.selector);
   };

   that.show = function(text) {
       clearTimeout(hideHandler);
       elem.find("span").html(text);      
       elem.delay(200).fadeIn().delay(4000).fadeOut();
   };

   return that;
}());

var ErrorMessage = (function() {
	"use strict";
	var elem,hideHandler,that = {};
	that.init = function(options) {
	    elem = $(options.selector);
	};
	that.show = function(text) {
		clearTimeout(hideHandler);
		elem.find("span").html(text);      
	    elem.delay(200).fadeIn().delay(4000).fadeOut();
	};
	return that;
}());


function getValForm(id) {
    var data = {};
    $(id+' :input:not(:button)').each(function () {
      var $input = $(this);

      data[$input.attr('name')] = function () {
        if ($input.is(':checkbox')) {
          return Number($input.is(':checked'));
        }
        else {
          return $input.val();
        }
      };
    });
    return data;
}
// 

function check_numerique(me){
	var valeur=$(me).val();
	if( $.isNumeric(valeur)==false){
		$(me).attr('class','form-control form-control-error');
		$(me).val('');
	}else{
		$(me).removeClass('form-control-error');         
	}  
}

function change_total(type_agex, anneeDebut, anneeFin, position) {
	//type_agex : 1 : fid , 2 : non fid	
	//nActivitefid_2013_0 ou nActivitenonfid_2013_0
	var fieldName =  (type_agex==1) ? "nActivitefid_" : "nActivitenonfid_";
	//totalexperiencefid1 ou totalexperiencenonfid1 
	var totalFieldName = (type_agex==1) ? "totalexperiencefid" : "totalexperiencenonfid";
	var total = 0;
	for (var i = anneeDebut; i<=anneeFin; i++) {
		currentValue = $("#" + fieldName + i + "_" + position ).val() || 0;
		total = total + parseInt(currentValue);		
	}
	$("#" + totalFieldName + position ).val(total);
}

function filter_ui_select_picker(default_ui){
		var base_url = $('#base_url').val();
	   if ($('#id_district').val()!='') {
	     var com="";
	     $('#unite_intervention').empty();
		 $('#unite_intervention.selectpicker').selectpicker('refresh');
		 if ($('#id_commune').val()!='') com=$('#id_commune').val();
		  var html='';
		  	         $.ajax({							
							url:  base_url +'parametrages/activite/getUniteIntervention/',
							data: { 
							        id_dis : $('#id_district').val() ,
									id_com : com
								  },
							type: 'POST',
							success: function(data){
								if(data.indexOf('PHP')!=-1){
									ErrorMessage.show('Erreur PHP');
									$.unblockUI();
									return;
								}
								if(data.status!='success'){
								var result = $.parseJSON(data);
								$('#unite_intervention').append('<option value="null"></option>');
									for (var i in result) {
								     $temp_id=result[i].id_unite_intervention || '';
								     $temp_nom=result[i].nom_unite_intervention || '';
									 $('#unite_intervention').append('<option value="'+$temp_id+'">'+$temp_nom);
								     $('#unite_intervention').append('</option>');
							        }
					            $('#unite_intervention').val(default_ui);
								$('#unite_intervention.selectpicker').selectpicker('refresh');
								}
								else
									ErrorMessage.show('Erreur de chargement de la liste des unités d\'intervention');
							},
							error: function(e){ 
								ErrorMessage.show('La liste des unités d\'intervention est vide');	
							}
						});
		}
	}

function filter_ui(valSelected, isEmptyAccepted){
    document.getElementById('unite_intervention').innerHTML='';
    var base_url = $('#base_url').val();
	$('#unite_intervention').val('');
	var isEmptyDistrict = isEmptyAccepted || false;	
    var html='';
    //Il faut mettre DISTRICT
    if ($('#id_district').val()!='' || isEmptyDistrict) {    	
	     var com="", dis="";
	     document.getElementById('unite_intervention').innerHTML='';
		 if ($('#id_commune').val()!='')
			 com= $('#id_commune').val();	
		 dis= $('#id_district').val();
	 
		 $.ajax({
				url:  base_url +'parametrages/activite/getUniteIntervention/',
				data: { 
				        id_dis : dis ,
						id_com : com
					  },
				type: 'POST',
				async: false,
				success: function(data){
					if(data.status!='success'){
						var result = $.parseJSON(data);
						//html='<option value="null"></option>'
						for (var i in result) {
						     $temp_id=result[i].id_unite_intervention || '';
						     $temp_nom=result[i].nom_unite_intervention || '';
						     html+='<option value="'+$temp_id+'">'+$temp_nom;
						     html+='</option>';
				        }
					    document.getElementById('unite_intervention').innerHTML=html;
				    	$('#unite_intervention').val(valSelected);
					}
					else
						ErrorMessage.show('Erreur de chargement de la liste des unités d\'intervention');
				},
				error: function(e){ 
					ErrorMessage.show('La liste des unités d\'intervention est vide');	
				}
			});			 
	} else {
		document.getElementById('unite_intervention').innerHTML=html;
		$('#unite_intervention').val('');
	}
}	

$('.btn-success').attr('class','btn btn-danger');

//Pour les états indicateurs
function eliminer_statut_sauf(tableau) {
	var statut ;
	for( var i=0; i<=nombre;i++){ 
		statut = $('#statut>option[value='+i+']').val();	    		
		if ($.inArray(parseInt(statut),tableau)==-1) {
			$('#statut>option[value='+i+']').remove();
		}
	}
}
function charger_questionnaire_enquete() {
	$('#id_questionnaire').removeClass('form-control-error');
	var base_url = $('#base_url').val();
	   var id_questionnaire=$('#id_questionnaire').val();
	     $.ajax({
				type: 'POST',
				url: base_url + 'ciblage/etats_indicateurs/ajax_charger_questionnaire_enquete',
				data: {"id_questionnaire":  id_questionnaire },
				success: function(response){
					var result = $.parseJSON(response);

					html='<option value="0">Tous</option>'
					for (var i in result) {
					     $temp_id=result[i].id_questionnaire_enquete || '';
					     $temp_nom=result[i].nom || '';
					     html+='<option value="'+$temp_id+'">'+$temp_nom+'</option>';
			        }
				    document.getElementById('questionnaire').innerHTML=html;			    	
				},
				async: false
		});		
}
    
function charger_questionnaire(){
   var questionnaire=$('#questionnaire').val();
   var base_url = $('#base_url').val();
     $.ajax({
			type: 'POST',
			url: base_url + 'ciblage/etats_indicateurs/ajax_charger_questionnaire',
			data: {"questionnaire_enqueter":  questionnaire },
			success: function(response){
				var reponse = $.parseJSON(response);
				$('#id_questionnaire').val(reponse);
			},
			async: false
	});	   
}   

/*** coockies JS ***/ 
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
	var nbdays = exdays||1;//nb jour validiter coockies, par defaut 1
    d.setTime(d.getTime() + (nbdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
