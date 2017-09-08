$(document).ready(function(){
	
	
	
	$('table').dragtable({
		stop: function() {
					kolorujzbiory(); //FUNKCJA KOLOROWANIA PO PRZECIĄGNIĘCIU
  				}
	});
	
	if($startOrder = getUrlParameter('order')){ //USTAWIAMY SORTOWANIE Z PARAMETRU URL
		$startOrder = $startOrder.split(",");
		$('table').dragtable('order', $startOrder);
		kolorujzbiory();
		
	}
	$order = $('table').dragtable('order'); //POBRANIE SORTOWANIA WYJŚCIOWEGO
	$('#kolejnoscsumy').css("display","none");
	$('#kolejnoscsumy1').css("display","none");
	$('#kolejnoscsumy2').css("display","none");
	//FUNKCJA KOLOROWANIA ZBIORÓW
	function kolorujzbiory(){
		for($a=5;$a<85;$a++){
			if($a<15) {
				$( "tr td:nth-child("+$a+")" ).css("background","#737373");
			}
			if($a>14) {
				$( "tr td:nth-child("+$a+")" ).css("background","#8C8C8C");
			}

			if($a>24) {
				$( "tr td:nth-child("+$a+")" ).css("background","#A6A6A6");
			}
			
			if($a>34) {
				$( "tr td:nth-child("+$a+")" ).css("background","#BFBFBF");
			}
			if($a>44) {
				$( "tr td:nth-child("+$a+")" ).css("background","#360");
			}

		}
		$('.hilighted2').css("background", "#ff0");
	}
	//FUNKCJA KOLOROWANIA ZBIORÓW 8 LICZB
	function kolorujzbiory8(){
		for($a=5;$a<85;$a++){
			if($a<13) {
				$( "tr td:nth-child("+$a+")" ).css("background","#fda3a1");
			}
			if($a>12) {
				$( "tr td:nth-child("+$a+")" ).css("background","#e0b68d");
			}

			if($a>20) {
				$( "tr td:nth-child("+$a+")" ).css("background","#c7bc7d");
			}
			
			if($a>28) {
				$( "tr td:nth-child("+$a+")" ).css("background","#96ac6b");
			}
			if($a>36) {
				$( "tr td:nth-child("+$a+")" ).css("background","#51a0ae");
			}
			if($a>44) {
				$( "tr td:nth-child("+$a+")" ).css("background","#4892d1");
			}
			if($a>52) {
				$( "tr td:nth-child("+$a+")" ).css("background","#ae79ef");
			}
			if($a>60) {
				$( "tr td:nth-child("+$a+")" ).css("background","#e144f8");
			}
			if($a>68) {
				$( "tr td:nth-child("+$a+")" ).css("background","#d0a1fd");
			}
			if($a>76) {
				$( "tr td:nth-child("+$a+")" ).css("background","#fda1f3");
			}

		}
		$('.hilighted2').css("background", "#ff0");
	}
	//FUNKCJA SORTOWANIA WG ILOSCI WYPADANIA
	function sortuj(){
		$kolejnoscsumy = $('#kolejnoscsumy').text();
		$kolejnoscsumysplit = $kolejnoscsumy.split(",");
		$('table').dragtable('order', $kolejnoscsumysplit);
	}
	function sortuj1(){
		$kolejnoscsumy1 = $('#kolejnoscsumy1').text();
		$kolejnoscsumysplit1 = $kolejnoscsumy1.split(",");
		$('table').dragtable('order', $kolejnoscsumysplit1);
	}
	function sortuj2(){
		$kolejnoscsumy2 = $('#kolejnoscsumy2').text();
		$kolejnoscsumysplit2 = $kolejnoscsumy2.split(",");
		$('table').dragtable('order', $kolejnoscsumysplit2);
	}
	//FUNKCJA PRZYWRACANIA SORTOWANIA
	function przywrocsortowanie(){

		//$('table').dragtable('order', $order);
		//console.log($order);
		//alert($order);
		var pomi = $('#pomin').val();
		if(pomi){
			window.location.href = "index.php?ile=10&pomin=" + pomi;
		}
		else {
			window.location.href = "index.php?ile=10";
	
		}
	}
	//FUNKCJA SORTOWANIA DRUGIEJ POŁOWY 80ciu LICZB
	function pobierzdrugapolowe(){
		for($b=40;$b<=80;$b++){
			$order = $order + $b + ',';
		}
		for($b=1;$b<=39;$b++){
			$order = $order + $b;
			if($b!=39) $order += ',';
		}
		alert($order);
	}
	//FUNKCJA POBIERANIA ZBIOROW 1-40
	function pobierzliczby(){
		var $liczby = [];
		var $temp1 = "";
		var $temp2 = "";
		var $temp3 = "";
		var $temp4 = "";
		var $losowanie = $('.table80').find('tr:nth-child(2)').find('td:eq(0)').text();
		for($a=4;$a<14;$a++){
			$temp1 += $('thead').find('tr:first').find('th:eq('+$a+')').text(); 
			if($a!=13){
				$temp1 += ',';
			}
		}
		for($a=14;$a<24;$a++){
			$temp2 += $('thead').find('tr:first').find('th:eq('+$a+')').text(); 
			if($a!=23){
				$temp2 += ',';
			}
		}
		for($a=24;$a<34;$a++){
			$temp3 += $('thead').find('tr:first').find('th:eq('+$a+')').text(); 
			if($a!=33){
				$temp3 += ',';
			}
		}
		for($a=34;$a<44;$a++){
			$temp4 += $('thead').find('tr:first').find('th:eq('+$a+')').text(); 
			if($a!=43){
				$temp4 += ',';
			}
		}
		$('.zestaw1').val($temp1);
		$('.zestaw2').val($temp2);
		$('.zestaw3').val($temp3);
		$('.zestaw4').val($temp4);
		$losowanie = parseInt($losowanie);
		$losowanie +=2;
		$('.losowanie').val($losowanie);
		
	}
	//FUNKCJA POBIERANIA ZBIOROW 41-80
	function pobierzliczby2(){
		var $liczby = [];
		var $temp1 = "";
		var $temp2 = "";
		var $temp3 = "";
		var $temp4 = "";
		var $losowanie = $('.table80').find('tr:nth-child(2)').find('td:eq(0)').text();
		for($a=44;$a<54;$a++){
			$temp1 += $('thead').find('tr:first').find('th:eq('+$a+')').text(); 
			if($a!=53){
				$temp1 += ',';
			}
		}
		for($a=54;$a<64;$a++){
			$temp2 += $('thead').find('tr:first').find('th:eq('+$a+')').text(); 
			if($a!=63){
				$temp2 += ',';
			}
		}
		for($a=64;$a<74;$a++){
			$temp3 += $('thead').find('tr:first').find('th:eq('+$a+')').text(); 
			if($a!=73){
				$temp3 += ',';
			}
		}
		for($a=74;$a<84;$a++){
			$temp4 += $('thead').find('tr:first').find('th:eq('+$a+')').text(); 
			if($a!=83){
				$temp4 += ',';
			}
		}
		$('.zestaw1').val($temp1);
		$('.zestaw2').val($temp2);
		$('.zestaw3').val($temp3);
		$('.zestaw4').val($temp4);
		$losowanie = parseInt($losowanie);
		$losowanie +=2;
		$('.losowanie').val($losowanie);
		
	}
	// FUNKCJA SORTOWANIA PO ZBIORACH
	function sortujzbiory(){
		$orderzbiory = "nr,dzien,miesiac,rok,10,20,30,40,50,60,70,80,1,11,21,31,41,51,61,71,2,12,22,32,42,52,62,72,3,13,23,33,43,53,63,73,4,14,24,34,44,54,64,74,5,15,25,35,45,55,65,75,6,16,26,36,46,56,66,76,7,17,27,37,47,57,67,77,8,18,28,38,48,58,68,78,9,19,29,39,49,59,69,79";
		$orderzbiory = $orderzbiory.split(",");
		$('table').dragtable('order', $orderzbiory);
		kolorujzbiory8();
	}
	// FUNKCJA DOPISANIA SUM W PRZYPADKU ZBIORÓW
	function sumy8(){
		$sumyzbiorow0 = '';
		$sumyzbiorow1 = '';
		$sumyzbiorow2 = '';
		$sumyzbiorow3 = '';
		$sumyzbiorow4 = '';
		$sumyzbiorow5 = '';
		$sumyzbiorow6 = '';
		$sumyzbiorow7 = '';
		$sumyzbiorow8 = '';
		$sumyzbiorow9 = '';
		$zestawsumy0 = 0;
		$zestawsumy1 = 0;
		$zestawsumy2 = 0;
		$zestawsumy3 = 0;
		$zestawsumy4 = 0;
		$zestawsumy5 = 0;
		$zestawsumy6 = 0;
		$zestawsumy7 = 0;
		$zestawsumy8 = 0;
		$zestawsumy9 = 0;
		for($i=4; $i<12; $i++){
			$sumyzbiorow0 += $('.sumy').find('td:eq('+$i+')').text() + ',';
		}
		for($i=12; $i<20; $i++){
			$sumyzbiorow1 += $('.sumy').find('td:eq('+$i+')').text() + ',';
		}
		for($i=20; $i<28; $i++){
			$sumyzbiorow2 += $('.sumy').find('td:eq('+$i+')').text() + ',';
		}
		for($i=28; $i<36; $i++){
			$sumyzbiorow3 += $('.sumy').find('td:eq('+$i+')').text() + ',';
		}
		for($i=36; $i<44; $i++){
			$sumyzbiorow4 += $('.sumy').find('td:eq('+$i+')').text() + ',';
		}
		for($i=44; $i<52; $i++){
			$sumyzbiorow5 += $('.sumy').find('td:eq('+$i+')').text() + ',';
		}
		for($i=52; $i<60; $i++){
			$sumyzbiorow6 += $('.sumy').find('td:eq('+$i+')').text() + ',';
		}
		for($i=60; $i<68; $i++){
			$sumyzbiorow7 += $('.sumy').find('td:eq('+$i+')').text() + ',';
		}
		for($i=68; $i<76; $i++){
			$sumyzbiorow8 += $('.sumy').find('td:eq('+$i+')').text() + ',';
		}
		for($i=76; $i<84; $i++){
			$sumyzbiorow9 += $('.sumy').find('td:eq('+$i+')').text() + ',';
		}
		$sumyzbiorow0 = $sumyzbiorow0.split(",");
		for($i=0;$i<$sumyzbiorow0.length-1; $i++){
			$zestawsumy0 += parseInt($sumyzbiorow0[$i]); 
			
		}
		$sumyzbiorow1 = $sumyzbiorow1.split(",");
		for($i=0;$i<$sumyzbiorow1.length-1; $i++){
			$zestawsumy1 += parseInt($sumyzbiorow1[$i]); 
			
		}
		$sumyzbiorow2 = $sumyzbiorow2.split(",");
		for($i=0;$i<$sumyzbiorow2.length-1; $i++){
			$zestawsumy2 += parseInt($sumyzbiorow2[$i]); 
			
		}
		$sumyzbiorow3 = $sumyzbiorow3.split(",");
		for($i=0;$i<$sumyzbiorow3.length-1; $i++){
			$zestawsumy3 += parseInt($sumyzbiorow3[$i]); 
			
		}
		$sumyzbiorow4 = $sumyzbiorow4.split(",");
		for($i=0;$i<$sumyzbiorow4.length-1; $i++){
			$zestawsumy4 += parseInt($sumyzbiorow4[$i]); 
			
		}
		$sumyzbiorow5 = $sumyzbiorow5.split(",");
		for($i=0;$i<$sumyzbiorow5.length-1; $i++){
			$zestawsumy5 += parseInt($sumyzbiorow5[$i]); 
			
		}
		$sumyzbiorow6 = $sumyzbiorow6.split(",");
		for($i=0;$i<$sumyzbiorow6.length-1; $i++){
			$zestawsumy6 += parseInt($sumyzbiorow6[$i]); 
			
		}
		$sumyzbiorow7 = $sumyzbiorow7.split(",");
		for($i=0;$i<$sumyzbiorow7.length-1; $i++){
			$zestawsumy7 += parseInt($sumyzbiorow7[$i]); 
			
		}
		$sumyzbiorow8 = $sumyzbiorow8.split(",");
		for($i=0;$i<$sumyzbiorow8.length-1; $i++){
			$zestawsumy8 += parseInt($sumyzbiorow8[$i]); 
			
		}
		$sumyzbiorow9 = $sumyzbiorow9.split(",");
		for($i=0;$i<$sumyzbiorow9.length-1; $i++){
			$zestawsumy9 += parseInt($sumyzbiorow9[$i]); 
			
		}
		$wierszsumy = '<tr><td></td><td></td><td></td><td></td><td colspan="8" align="center" class="sumyzbiorow">'+$zestawsumy0+'</td><td colspan="8" align="center" class="sumyzbiorow">'+$zestawsumy1+'</td><td colspan="8" align="center" class="sumyzbiorow">'+$zestawsumy2+'</td><td colspan="8" align="center" class="sumyzbiorow">'+$zestawsumy3+'</td><td colspan="8" align="center" class="sumyzbiorow">'+$zestawsumy4+'</td><td colspan="8" align="center" class="sumyzbiorow">'+$zestawsumy5+'</td><td colspan="8" align="center" class="sumyzbiorow">'+$zestawsumy6+'</td><td colspan="8" align="center" class="sumyzbiorow">'+$zestawsumy7+'</td><td colspan="8" align="center" class="sumyzbiorow">'+$zestawsumy8+'</td><td colspan="8" align="center" class="sumyzbiorow">'+$zestawsumy9+'</td></tr>';
		$('.sumy').after($wierszsumy);
	}
	
	//FUNKCJA NANOSZENIA TYPOWAŃ I OBLICZANIA ILOŚCI TRAFIEŃ
	
	function pokaztypowania(){
		$iletypowan = $('.tabela-typowania').find('tr').length;		
// 		alert($iletypowan);
		for($i=0;$i<$iletypowan;$i++){
			$losowanie = $('.tabela-typowania').find('tr:eq('+$i+')').find('td:eq(0)').text();
			$zbior1 = $('.tabela-typowania').find('tr:eq('+$i+')').find('td:eq(1)').text();
			$zbior2 = $('.tabela-typowania').find('tr:eq('+$i+')').find('td:eq(2)').text();
			$zbior3 = $('.tabela-typowania').find('tr:eq('+$i+')').find('td:eq(3)').text();
			$zbior4 = $('.tabela-typowania').find('tr:eq('+$i+')').find('td:eq(4)').text();
			$kolejnosc = "nr,dzien,miesiac,rok," + $zbior1 +","+ $zbior2 +","+ $zbior3 +","+ $zbior4; // pobieramy kolejnosc typowania
			for ($b=1; $b<81; $b++) {
				$c = ","+$b+",";
    			if ($kolejnosc.indexOf($c) < 0) {
					$kolejnosc += ","+$b;
				}
			}
			$kolejnosc2 = $kolejnosc.split(",");
// 			$('table').dragtable('order',$kolejnosc2);
// 			kolorujzbiory();
			$trafienia1 = 0;
			$trafienia2 = 0;
			$trafienia3 = 0;
			$trafienia4 = 0;
			if ($zbior1 != "") {
    			$zbior1split = $zbior1.split(",");
    			for($l=0;$l<$zbior1split.length;$l++){
				if($('.table80').find('.'+$losowanie+'').parent().find('.'+$zbior1split[$l]+'').hasClass('hilighted2')){
					$('.table80').find('.'+$losowanie+'').parent().find('.'+$zbior1split[$l]+'').css('background', '#ff0000');
					$trafienia1 +=1;
				}
				else {
// 					if(!$('.table80').find('.'+$losowanie+'').parent().find('.'+$zbior1split[$l]+'').hasClass('hilighted1')){
						$('.table80').find('.'+$losowanie+'').parent().find('.'+$zbior1split[$l]+'').css('background', '#4bb4e6');
// 					}
				}
			}
			}
			if ($zbior2 != "") {
				$zbior2split = $zbior2.split(",");
				for($l=0;$l<$zbior2split.length;$l++){
				if($('.table80').find('.'+$losowanie+'').parent().find('.'+$zbior2split[$l]+'').hasClass('hilighted2')){
					$('.table80').find('.'+$losowanie+'').parent().find('.'+$zbior2split[$l]+'').css('background', '#ff0000');
					$trafienia2 +=1;
				}
				else {
					if(!$('.table80').find('.'+$losowanie+'').parent().find('.'+$zbior2split[$l]+'').hasClass('hilighted1')){
						$('.table80').find('.'+$losowanie+'').parent().find('.'+$zbior2split[$l]+'').css('background', '#4bb4e6');
					}
				}
			}
			}
			if ($zbior3 != "") {
				$zbior3split = $zbior3.split(",");
				for($l=0;$l<$zbior3split.length;$l++){
				if($('.table80').find('.'+$losowanie+'').parent().find('.'+$zbior3split[$l]+'').hasClass('hilighted2')){
					$('.table80').find('.'+$losowanie+'').parent().find('.'+$zbior3split[$l]+'').css('background', '#ff0000');
					$trafienia3 +=1;
				}
				else {
					if(!$('.table80').find('.'+$losowanie+'').parent().find('.'+$zbior3split[$l]+'').hasClass('hilighted1')){
						$('.table80').find('.'+$losowanie+'').parent().find('.'+$zbior3split[$l]+'').css('background', '#4bb4e6');
					}
				}
			}
			}
			if ($zbior4 != "") {
				$zbior4split = $zbior4.split(",");
				for($l=0;$l<$zbior4split.length;$l++){
				if($('.table80').find('.'+$losowanie+'').parent().find('.'+$zbior4split[$l]+'').hasClass('hilighted2')){
					$('.table80').find('.'+$losowanie+'').parent().find('.'+$zbior4split[$l]+'').css('background', '#ff0000');
					$trafienia4 +=1;
				}
				else {
					if(!$('.table80').find('.'+$losowanie+'').parent().find('.'+$zbior4split[$l]+'').hasClass('hilighted1')){
						$('.table80').find('.'+$losowanie+'').parent().find('.'+$zbior4split[$l]+'').css('background', '#4bb4e6');
					}
				}
			}
			}
			 $('.tabela-typowania').find('tr:eq('+$i+')').find('td:eq(1)').append('<br>-   <strong><font color=red>'+$trafienia1+' trafionych</font></strong>');
			 $('.tabela-typowania').find('tr:eq('+$i+')').find('td:eq(2)').append('<br>-   <strong><font color=red>'+$trafienia2+' trafionych</font></strong>');
			 $('.tabela-typowania').find('tr:eq('+$i+')').find('td:eq(3)').append('<br>-   <strong><font color=red>'+$trafienia3+' trafionych</font></strong>');
			 $('.tabela-typowania').find('tr:eq('+$i+')').find('td:eq(4)').append('<br>-   <strong><font color=red>'+$trafienia4+' trafionych</font></strong>');
		}
	}
	//PRZYCISKI
	$(".sortuj-button").click(function(){
		sortuj();
		kolorujzbiory();
	});
	$(".sortuj-button1").click(function(){
		sortuj1();
		kolorujzbiory();
	});
	$(".sortuj-button2").click(function(){
		sortuj2();
		kolorujzbiory();
	});
	$(".przywroc-button").click(function(){
		przywrocsortowanie();
	});
	$(".pobierz-button").click(function(){
		pobierzliczby();
	});
	$(".pobierz2-button").click(function(){
		pobierzliczby2();
	});
	$(".typowania-button").click(function(){
		pokaztypowania();
	});
	$(".druga-polowa-button").click(function(){
		pobierzdrugapolowe();
	});
	$(".20los-button").click(function(){
		window.location.href = "index.php?ile=20";
	});
	$(".8typowan-button").click(function(){
		window.location.href = "index.php?typowania=8";
	});
	$(".zbiory-button").click(function(){
		sortujzbiory();
		sumy8();
	});
	$(".pomin-button").focusout(function(){
		var pomi = $('#pomin').val();
		window.location.href = "index.php?&pomin=" + pomi;
	});
	$("#pomin-zwieksz").click(function(){
		order2 = $('table').dragtable('order');
		ile2 = getUrlParameter('ile');
		var pomi = $('#pomin').val();
		pomi2=parseInt(pomi);
		pomi2 +=1;
		$('#pomin').val(pomi2);
		if(ile2){
			setInterval(function(){window.location.href = "index.php?&pomin=" + pomi2 + "&order=" + order2 + "&ile=" + ile2},1000);
		}
		else{
			setInterval(function(){window.location.href = "index.php?&pomin=" + pomi2 + "&order=" + order2},1000);
		}
		
	});
	$("#pomin-zmniejsz").click(function(){
		order2 = $('table').dragtable('order');
		ile2 = getUrlParameter('ile');
		var pomi = $('#pomin').val();
		pomi2=parseInt(pomi);
		pomi2 -=1;
		$('#pomin').val(pomi2);
		if(ile2){
			setInterval(function(){window.location.href = "index.php?&pomin=" + pomi2 + "&order=" + order2 + "&ile=" + ile2},1000);
		}
		else {
			setInterval(function(){window.location.href = "index.php?&pomin=" + pomi2 + "&order=" + order2},1000);
		}
		
	});
	
/*	WYBIERAMY LICZBY KLIKNIĘCIEM */
	$(".liczba").click(function(){
		$li = $(this).text();
		$zawart = $(".zestaw1").val();
		if(($zawart.indexOf($li)<0)&&(($zawart.split(",").length - 1)<10)){
			$li = $(".zestaw1").val() + $li;
			if(($zawart.split(",").length - 1)<10){
				$li +=',';
			}
			$(".zestaw1").val($li);
		}
	});
	// 	FUNKCJA KOLOROWANIA JEDNEJ LINII
	$(".losowanie").click(function(){
		$(this).parent('tr').children('td').each(function(){
			if($(this).hasClass('hilighted2')){
				 
			}
			else {
				$(this).css('background', '#140');
			}
		});
	});
	// FUNKCJA GRUPOWANIA LICZB Z DANEGO DNIA
	$(".dzien").click(function(){
		var kolej = "";
		var kolej2 ="";
		$(this).parent().children('.liczba').each(function(){
			if($(this).hasClass('hilighted2')){
				kolej += $(this).text() + ',';
			}
			else{
				kolej2 += $(this).text() + ',';
			}
		});
		liczby = 'nr,dzien,miesiac,rok,' + kolej + kolej2;
		liczbySortowanie = liczby.split(',');
		liczbySortowanie.splice(-1,1);
		$('table').dragtable('order', liczbySortowanie);
		//alert(liczbySortowanie.length);
	});
// Funkcja przesowania liczby do poczatku po kliknieciu
$(".liczbaclick").click(function(){
	clickorder = $('table').dragtable('order');
	liczba = $(this).attr('liczba');
	indeks = clickorder.indexOf(liczba);
	clickorder.splice(indeks,1);
	clickorder.splice(4,0,liczba);
	$('table').dragtable('order', clickorder);
	kolorujzbiory()
	});
});
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};