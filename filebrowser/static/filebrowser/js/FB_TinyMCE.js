var FileBrowserDialogue = {
    init : function () {
        // remove tinymce stylesheet.
        var allLinks = document.getElementsByTagName("link");
        allLinks[allLinks.length-1].parentNode.removeChild(allLinks[allLinks.length-1]);
    },
    fileSubmit : function (FileURL) {
        var URL = FileURL;
        var dialogArguments = top.tinyMCE.activeEditor.windowManager.getParams(window);
        var win = dialogArguments.window;

        // insert information now
        win.document.getElementById(dialogArguments.input).value = URL;

        // change width/height & show preview
        if (win.ImageDialog){
            if (win.ImageDialog.getImageData)
                win.ImageDialog.getImageData();
            if (win.ImageDialog.showPreviewImage)
                win.ImageDialog.showPreviewImage(URL);
        }

        // close popup window
        top.tinyMCE.activeEditor.windowManager.close();
    }
}
