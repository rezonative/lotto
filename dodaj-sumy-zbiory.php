<html>

<head>
	<meta charset="UTF-8">
	<title>Rezonative lotto ver 2.0</title>
	<meta http-equiv="refresh" content="2; url=index.php">
</head>

<body>

	<center>
<? 
if($_POST["losowanie"] != ""){
		$losowanie=$_POST[ "losowanie"]; 
		$zestaw1 = $_POST[ "zestaw1"];
		$zestaw2 = $_POST[ "zestaw2"];
		$zestaw3 = $_POST[ "zestaw3"];
		$zestaw4 = $_POST[ "zestaw4"]; 
		//echo "losowanie:".$losowanie;
		
	
$servername = "localhost";
$username = "14266387_0000001";
$dbname = "14266387_0000001";
$password = "rezonative123";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "<br><br>Connected successfully <br>";


	$zapytanie = "SELECT * FROM Lotto";
	$result = mysqli_query($conn, $zapytanie);
	


/*
$row = mysqli_fetch_array($result);
$ile = count($row);

for($i = 0; $i<=$ile; $i++){
	echo "ile".$i." = ".$row[$i]."<br>";
}
*/
$nadpisuj = false;
while($row = mysqli_fetch_array($result)){
	if($losowanie == $row['losowanie']){
		$nadpisuj = true;
	}
}
if($nadpisuj){
	$zapytanie = "UPDATE Lotto SET zestaw1='".$zestaw1."', zestaw2='".$zestaw2."', zestaw3='".$zestaw3."', zestaw4='".$zestaw4."' WHERE losowanie=".$losowanie;
}
else{
	$zapytanie = "INSERT INTO Lotto(losowanie,zestaw1,zestaw2,zestaw3,zestaw4) VALUES ('".$losowanie."','".$zestaw1."','".$zestaw2."','".$zestaw3."','".$zestaw4."');";
}

if (mysqli_query($conn, $zapytanie)) {
    echo "Dodałem/zmieniłem losowanie nr ".$losowanie;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
		
/*

$zapytanie = "INSERT INTO liczby (l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,l18,l19,l20,l21,l22,l23,l24,l25,l26,l27,l28,l29,l30,l31,l32,l33,l34,l35,l36,l37,l38,l39,l40,l41,l42,l43,l44,l45,l46,l47,l48,l49,l50,l51,l52,l53,l54,l55,l56,l57,l58,l59,l60,l61,l62,l63,l64,l65,l66,l67,l68,l69,l70,l71,l72,l73,l74,l75,l76,l77,l78,l79,l80,nr)
VALUES (".$liczby_row[1].",".$liczby_row[2].",".$liczby_row[3].",".$liczby_row[4].",".$liczby_row[5].",".$liczby_row[6].",".$liczby_row[7].",".$liczby_row[8].",".$liczby_row[9].",".$liczby_row[10].",".$liczby_row[11].",".$liczby_row[12].",".$liczby_row[13].",".$liczby_row[14].",".$liczby_row[15].",".$liczby_row[16].",".$liczby_row[17].",".$liczby_row[18].",".$liczby_row[19].",".$liczby_row[20].",".$liczby_row[21].",".$liczby_row[22].",".$liczby_row[23].",".$liczby_row[24].",".$liczby_row[25].",".$liczby_row[26].",".$liczby_row[27].",".$liczby_row[28].",".$liczby_row[29].",".$liczby_row[30].",".$liczby_row[31].",".$liczby_row[32].",".$liczby_row[33].",".$liczby_row[34].",".$liczby_row[35].",".$liczby_row[36].",".$liczby_row[37].",".$liczby_row[38].",".$liczby_row[39].",".$liczby_row[40].",".$liczby_row[41].",".$liczby_row[42].",".$liczby_row[43].",".$liczby_row[44].",".$liczby_row[45].",".$liczby_row[46].",".$liczby_row[47].",".$liczby_row[48].",".$liczby_row[49].",".$liczby_row[50].",".$liczby_row[51].",".$liczby_row[52].",".$liczby_row[53].",".$liczby_row[54].",".$liczby_row[55].",".$liczby_row[56].",".$liczby_row[57].",".$liczby_row[58].",".$liczby_row[59].",".$liczby_row[60].",".$liczby_row[61].",".$liczby_row[62].",".$liczby_row[63].",".$liczby_row[64].",".$liczby_row[65].",".$liczby_row[66].",".$liczby_row[67].",".$liczby_row[68].",".$liczby_row[69].",".$liczby_row[70].",".$liczby_row[71].",".$liczby_row[72].",".$liczby_row[73].",".$liczby_row[74].",".$liczby_row[75].",".$liczby_row[76].",".$liczby_row[77].",".$liczby_row[78].",".$liczby_row[79].",".$liczby_row[80].",".$numer.");";
//echo $zapytanie;
	
if (mysqli_query($conn, $zapytanie)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
*/

$conn->close();
} // koniec dodaj


?>

		</center>
</body>

</html>