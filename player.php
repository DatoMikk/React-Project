<?php

header("Content-Type: application/json");

$players = [
    [
        id => 1,
        name => "ხვიჩა კვარაცხელია",
        goals => 30,
        position => "თავდამსხმელი"
    ],
    [
        id => 2,
        name => "ლიონელ მესი",
        goals => 35,
        position => "თავდამსხმელი"
    ],
    [
        id => 3,
        name => "პედრი",
        goals => 17,
        position => "ნახევარმცველი"
    ],
    [
        id => 4,
        name => "ვირჯილ ვან დაიკი",
        goals => 3,
        position => "მცველი"
    ],
    [
        id => 5,
        name => "გიორგი მამარდაშვილი",
        goals => 0,
        position => "მეკარე"
    ],
]

echo json_encode($players);
?>