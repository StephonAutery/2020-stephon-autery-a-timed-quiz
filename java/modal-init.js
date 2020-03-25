(function () {
    console.log("you made to the modal");
    var $content = $('#modal-one').detach();

    $("#modal-button").on("click", function () {
        modal.open({ content: $content, width: 300, height: 300 });
    });
}
()
);