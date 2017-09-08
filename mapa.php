<html>

<head>

	<title>Rezonative lotto ver 1.0</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body><center>
	<? require_once('nav.php') ?>
	<?
$servername = "rezonative.com.mysql";
$username = "rezonative_com";
$dbname = "rezonative_com";
$password = "Pgz4nkpT";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
	echo "Connected successfully <br>";
	$zapytanie = "SELECT l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,l18,l19,l20,l21,l22,l23,l24,l25,l26,l27,l28,l29,l30,l31,l32,l33,l34,l35,l36,l37,l38,l39,l40,l41,l42,l43,l44,l45,l46,l47,l48,l49,l50,l51,l52,l53,l54,l55,l56,l57,l58,l59,l60,l61,l62,l63,l64,l65,l66,l67,l68,l69,l70,l71,l72,l73,l74,l75,l76,l77,l78,l79,l80,nr FROM liczby ORDER BY nr DESC";
	$result = mysqli_query($conn, $zapytanie);

	echo "<br><br><table border='0' cellspacing='1' cellpadding='3' class='maintable'>"; 
	 while ($row = $result->fetch_array(MYSQLI_NUM)) {
		
		echo "<tr>";
		for($i=1;$i<=80;$i++){
          echo "<td>".$row[81]."</td>";
			echo "<td bgcolor='#999999' class='liczba".$i; 
			if ($row[$i-1]==1){
				echo " selected'";
			}
         
			else {
				echo "'";
			}
			echo " >".$i."</td>"; 
		}
		echo "</tr>";
	}
	echo "</table>"; 
?>
	





	</center>
</body>

</html>


					   
					   