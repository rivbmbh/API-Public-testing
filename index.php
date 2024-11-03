<?php 

// Mengambil isi file JSON
$data_json = file_get_contents('https://api.rawg.io/api/platforms?key=6737f73ab8cf42a9b3b45ec2d9588718');

// Mendekode JSON menjadi array asosiatif
$list_game = json_decode($data_json, true); // tidak perlu menyebutkan nama parameter

$list_game = $list_game['results'];

// PR : gunakan key "search" dan tampilkan hasil setelah melakukan pencarian nama game!
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <?php foreach($list_game as $platform): ?>
            <li><?= $platform['id'] ?></li>
            <li><?= $platform['name'] ?></li>
            <li><img src="<?= $platform['image_background'] ?>" alt="bg"></li>
        <?php endforeach; ?>
    </ul>
</body>
</html>
