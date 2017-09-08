<?
$menu = "<center><table class='menu'><tr><td><a href='index.php?auth=1'>home</a></td><td><a href='dodaj.php?auth=1'>dodaj liczby</a></td><td><a href='mapa.php?auth=1'>mapa</a></td></tr></table></center>";
if($_GET[ "auth"]){
	echo $menu;
}
	
?>