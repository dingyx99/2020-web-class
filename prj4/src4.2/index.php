<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'TestPass';
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
if( !$conn )
{
    die('Failed to connect to database: '.mysqli_error($conn));
}
mysqli_query($conn, "set names utf8");

$sql = 'SELECT id, name, url, intro FROM mytable';
mysqli_select_db($conn, 'mydb');
$retval = mysqli_query($conn, $sql);
if( !$retval )
{
    die('Failed to fetch data: '.mysqli_error($conn));
}
echo '<h2>Fetch info from MySQL database.</h2>';
echo '<table border="1"><tr><td>ID</td><td>Name</td><td>URL</td><td>Introduction</td>';
while($row = mysqli_fetch_array($retval, MYSQLI_ASSOC))
{
    echo "<tr><td>{$row['id']}</td> ".
         "<td>{$row['name']}</td>".
         "<td>{$row['url']}</td>".
         "<td>{$row['intro']}</td>".
         "</tr>";
}
echo '</table>';
mysqli_close($conn);
?>