<?php

header("Content-Type: application/json");

$teams = [
    [
        id => 1,
        name => "ტორპედო ქუთაისი",
        country => "საქართველო",
        est => 1946,
        wins => 536
    ],
    [
        id => 2,
        name => "ბარსელონა",
        country => "ესპანეთი",
        est => 1899,
        wins => 1047
    ],
    [
        id => 3,
        name => "პსჟ",
        country => "საფრანგეთი",
        est => 1954,
        wins => 678
    ],
    [
        id => 4,
        name => "ლივერპული",
        country => "ინგლისი",
        est => 1890,
        wins => 1243
    ],
    [
        id => 5,
        name => "მიუნხენის ბაიერნი",
        country => "გერმანია",
        est => 1901,
        wins => 1157
    ],
]

echo json_encode($teams);
?>