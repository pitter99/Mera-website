<?php
if(isset($_FILES['image'])){
    $errors = [];
    $file_name = $_FILES['image']['name'];
    $file_tmp  = $_FILES['image']['tmp_name'];
    $upload_dir = "uploads/";

    if (move_uploaded_file($file_tmp, $upload_dir . $file_name)) {
        echo "Image uploaded successfully: <a href='uploads/$file_name'>$file_name</a>";
    } else {
        echo "Failed to upload image.";
    }
}
?>
