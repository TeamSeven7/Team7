<?php
if(isset($_post['name'])){
$name=$_POST['name'];
$score=$_POST['score'];

$conx=mysqli_connect("localhost","root","","leaderboard");
$sql="INSERT INTO `highscore`(`name`, `score`) VALUES ('$name','$score')";
$result=mysqli_query($conx,$sql);

if($result==true){
    echo "<h3>Inserted Name with Score</h3>"
}
}
?>