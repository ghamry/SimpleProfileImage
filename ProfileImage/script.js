$(function () {

    $("#profileImage").click(function (e) {
        $("#imageUpload").click();
    });

    function fasterPreview(uploader) {
        if (uploader.files && uploader.files[0]) {
            $('#profileImage').attr('src',
                window.URL.createObjectURL(uploader.files[0]));
        }
    }

    $("#imageUpload").change(function () {
        fasterPreview(this);
    });

    $('#btnSave').click(function (e) {
        debugger;
        e.preventDefault();

        // submit the file to BE

    });

    ///  reaload photo in edit mode 
    // get the byte array only just with the image extention no need for it's name or size or any thing 
    var PhotoArr = []; //array of bytes from the server
    var PhotoExt = "jpg";//example
    if (PhotoArr) {
        var byteArray = new Uint8Array(oldResume.PhotoArr);
        var blob = new Blob([byteArray], { type: 'application/' + PhotoExt });
        var image = $('#profileImage');
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(blob);

        image.attr('src', imageUrl);

    }
});