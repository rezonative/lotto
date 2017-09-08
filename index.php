<html>
	
<head>
	<meta charset="UTF-8">
	<title>Rezonative lotto ver 2.0</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></script>
    <script type="text/javascript" src="lotto.js"></script>

    

    <script type="text/javascript" src="jquery.dragtable.js"></script>
</head>

<body><table border="0" cellpadding="3" cellspacing="0" class="table80">
	<?php
		// POBIERANIE DANYCH DO TABELI
		$row = 0;
		if (($handle = fopen("http://www.multipasko.pl/wyniki-csv.php?f=multimulti", "r")) !== FALSE) {
			while (($data = fgetcsv($handle, 100, ",")) !== FALSE) {
				$num = count($data);
				//echo "<p> $num fields in line $row: <br /></p>\n";
				$row++;
				$rowdata[$row] =  $data[0];
    		}
		fclose($handle);
		}
		if($pomin = $_GET["pomin"]){
			$pomin = intval($pomin);
		}
		else {
			$pomin = 0;
		}
		
		
		
		// RYSOWANIE TABELI
		
		if($ile = $_GET[ "ile"]){
			$ilelosowan = intval($ile);
		}
		else {
			$ilelosowan = 10;
		}
		
		//rysowanie nagłówka
		echo "<thead class='test'><tr>";
		//rysowanie pierwszych czterech kolumn
		for($z=1;$z<=84;$z++){
			if($z<5){
				if($z==1) echo "<th class='hilighted1' data-header='nr'>nr</th>";
				if($z==2) echo "<th class='hilighted1' data-header='dzien'>dzien</th>";
				if($z==3) echo "<th class='hilighted1' data-header='miesiac'>miesiac</th>";
				if($z==4) echo "<th class='hilighted1' data-header='rok'>rok</th>";
			}
			else {
				echo "<th class='hilighted3' data-header='".($z-4)."' data='".($z-4)."'>".($z-4)."</td>";
			}
		}
		echo "</tr></thead>";
		$sumy = array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //definicja tabeli sum
		
		$sumyall = array();
		$sumy1 = array();
		$sumy2 = array();
		
		
		//rysowanie pierwszych czterech kolumn poza naglowkiem
		for ($i=$row-$pomin; $i>$row-$pomin-$ilelosowan; $i--){
			echo "<tr>";
			$rowarray = explode(";",$rowdata[$i]);
			for ($a=0;$a<4;$a++){
				if($a==0){
					echo "<td class='hilighted1 losowanie ".$rowarray[$a]."'>";
				}
				elseif ($a==1) {
					echo "<td class='hilighted1 dzien ".$rowarray[$a]."'>";# code...
				}
				else {
					echo "<td class='hilighted1 ".$rowarray[$a]."'>";
				}
				echo $rowarray[$a];
	            echo "</td>";
			}
			
			
			//rysowanie liczb i update tabeli sumy
			for($b=1;$b<=80;$b++){
				$podswietlic = 0;
				$ile = $sumy[$b];
				for($j=4;$j<24;$j++){
	            	if($b == $rowarray[$j]){
		            	$podswietlic = 1;
		            	$ile +=1; //podwyższamy ilość wystąpień
	            	}
	            }
				if($podswietlic == 1){
		            echo "<td class='hilighted2 ".$b." liczba' data='".$b."'>";
	            }
	            else {
		            echo "<td data='".$b."' class='".$b." liczba'>";
	            }
// 	            echo "<a onClick='javascript:wybieram(".$b.");'>";
				echo $b;
// 				echo "</a>";
				echo "</td>";
				$sumy[$b] = $ile; //zapisujemy sumę wystąpień danej liczby
			}
			echo "</tr>";
			
		}
		// dopisanie wiersza z sumami
			echo "<tr class='sumy'><td></td><td></td><td></td><td class='hilighted4'>sumy</td>";
			for($r=1;$r<=80;$r++){
				echo "<td class='intensity".$sumy[$r]." liczbaclick' liczba='".$r."' data-header='".$r."'>".$sumy[$r]."</td>";
			}
			echo "</tr>";
// 			dopisanie 2 wierszy ze strzalkami
			echo "<tr class='sumy'><td></td><td></td><td></td><td></td>";
	?>
</table>


<?php
//POBRANIE TYPOWAŃ Z BAZY

$servername = "localhost";
$username = "24569524_0000001";
$dbname = "24569524_0000001";
$password = "fiAr7P!vd3N3";	

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully <br>";
$typowania = $_GET["typowania"];
if($typowania == ""){
	$typowania = 1;
}

$zapytanie = "SELECT * FROM Lotto ORDER BY uppdate DESC LIMIT ".$typowania;
	$result = mysqli_query($conn, $zapytanie);
	
echo "<table class='tabela-typowania'>";
while($row = mysqli_fetch_array($result)){
	echo "<tr>";
        if($row[0] == ""){
			echo "nie znaleziono typowań";
			
		}
		else {
			echo "<td>";
			echo $row[1];
			echo "</td>";
			
			echo "<td class='z1'>";
			echo $row[2];
			echo "</td>";
			
			echo "<td class='z2'>";
			echo $row[3];
			echo "</td>";
			
			echo "<td class='z3'>";
			echo $row[4];
			echo "</td>";
			
			echo "<td class='z4'>";
			echo $row[5];
			echo "</td>";
		}
	echo "</tr>";
}
echo "</table>";
?>




<?php
//SORTOWANIE KOLUMN
$kolejnoscsumy = '';
$sumyall=$sumy;
for($x=1;$x<=80;$x++){
	$najwieksza = 0;
	for($z=1;$z<=80;$z++){
		if ($najwieksza < $sumyall[$z]){
			$najwieksza = $sumyall[$z];
			$indeks = $z;
		}
		
	}
	$sumyall[$indeks] = 0;
	if($x<80){
		$kolejnoscsumy .= $indeks.",";
	}
	else {
		$kolejnoscsumy .= $indeks;
	}
	//echo "indeks:".$indeks.", liczba:".$najwieksza.", <br>";
	
}
//SORTOWANIE KOLUMN 1-40
$kolejnoscsumy1 = '';
$sumy1=$sumy;
for($x=1;$x<=40;$x++){
	$najwieksza = 0;
	for($z=1;$z<=40;$z++){
		if ($najwieksza < $sumy1[$z]){
			$najwieksza = $sumy1[$z];
			$indeks = $z;
		}
		
	}
	$sumy1[$indeks] = 0;
	$kolejnoscsumy1 .= $indeks.",";
	
}
for($x=41;$x<=80;$x++){
	if($x<80){
		$kolejnoscsumy1 .= $x.",";
	}
	else {
		$kolejnoscsumy1 .= $x;
	}
}
//SORTOWANIE KOLUMN 41-80
$kolejnoscsumy2 = '';
$sumy2=$sumy;
for($x=1;$x<=40;$x++){
	$kolejnoscsumy2 .= $x.",";
}
for($x=41;$x<=80;$x++){
	$najwieksza = 0;
	for($z=41;$z<=80;$z++){
		if ($najwieksza < $sumy2[$z]){
			$najwieksza = $sumy2[$z];
			$indeks = $z;
		}
		
	}
	$sumy2[$indeks] = 0;
	if($x<80){
		$kolejnoscsumy2 .= $indeks.",";
	}
	else {
		$kolejnoscsumy2 .= $indeks;
	}
	
}

?>
<div id="kolejnoscsumy">nr,dzien,miesiac,rok,<?php echo $kolejnoscsumy; ?></div>
<div id="kolejnoscsumy1">nr,dzien,miesiac,rok,<?php echo $kolejnoscsumy1; ?></div>
<div id="kolejnoscsumy2">nr,dzien,miesiac,rok,<?php echo $kolejnoscsumy2; ?></div>

<br><br>
<form method="post" action="dodaj.php">
	<label>losowanie:</label><input class="losowanie" size="20" name="losowanie">
	<label>zestaw1:</label><input class="zestaw1" size="23" name="zestaw1">
	<label>zestaw2:</label><input class="zestaw2" size="23" name="zestaw2">
	<label>zestaw3:</label><input class="zestaw3" size="23" name="zestaw3">
	<label>zestaw4:</label><input class="zestaw4" size="23" name="zestaw4">
	<input type="submit" value="dodaj typowanie"> 
</form>
<div class="przywroc-button button1">Przywróć</div>
<div class="pomin-button button1">pomiń <input type="text" size="5" id="pomin" value="<?php 
	if($_GET["pomin"]){
		$pomm = $_GET["pomin"];
		$pomm = intval($pomm);
		echo $pomm;
		}
	else {
		echo 0;
		}
	?>
	"></input>losowań <br><div class="button2" id="pomin-zwieksz">+</div><div class="button2" id="pomin-zmniejsz">-</div></div>
<div class="sortuj-button button1">Sortuj wg najczęstszych (1-80)</div>
<div class="sortuj-button1 button1">Sortuj wg najczęstszych (1-40)</div>
<div class="sortuj-button2 button1">Sortuj wg najczęstszych (41-80)</div>
<div class="pobierz-button button1">Pobierz <br>liczby (1-40)</div>
<div class="pobierz2-button button1">Pobierz <br>liczby (41-80)</div>
<div class="typowania-button button1">Pokaż <br>typowania</div>
<div class="20los-button button1">20 losowań</div>
<div class="zbiory-button button1">sortuj zbiory</div>
<div class="8typowan-button button1">8 typowan</div>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-60161556-1', 'auto');
  ga('send', 'pageview');

</script>
</body>

</html>