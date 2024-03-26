$(document).ready(function() {
    /* When clicking a thumbnail */
    $(".row .thumbnail").click(function(){
        var content = $(".carousel-inner");
        var title = $(".modal-title");

        // Clear existing carousel items
        content.empty();  

        // Clone and append carousel items
        var id = this.id;  
        var repo = $("#img-repo .item");
        var repoCopy = repo.filter("#" + id).clone();
        content.append(repoCopy);

        // Update modal title
        title.html(repoCopy.find("img").attr("title"));

        // Initialize the carousel
        $("#modal-carousel").carousel();

        // Show the modal
        $("#modal-gallery").modal("show");
    });
});