<!DOCTYPE html>
<html>
<body>

<form method="post">
    <label>Enter array values (comma separated):</label><br>
    <input type="text" name="userArray" style="width:300px;" required>
    <br><br>
    <input type="submit" value="Process">
</form>

<?php
function insideOut($arr) {
    $n = count($arr);
    if ($n % 2 !== 0) return $arr; 
    $half = $n / 2;
    $result = $arr;

    for ($i = 0; $i < $half; $i++) {
        $result[$i] = $arr[$i + $half];
        $result[$i + $half] = $arr[$i];
    }
    return $result;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Convert input string to array
    $input = $_POST["userArray"];
    $arr = array_map('trim', explode(",", $input));

    echo "<h3>Array before swapping:</h3>";
    echo implode(" ", $arr) . "<br>";

    echo "<h3>Array after swapping:</h3>";
    print_r(insideOut($arr));
}
?>

</body>
</html>


