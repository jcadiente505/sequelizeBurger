$(function() {
    $(".change-devour").on('click',function(event) {
        let id = $(this).data("id");
        console.log(id)
        let userEat = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: 'PUT',
            data: userEat
        }).then(() => {
            console.log(userEat.devoured)

            location.reload();
        });
    })
})

$(".create-form").on("submit", event => {
    event.preventDefault();

    let newBurger = {
        burger_name: $("#bg").val().trim()
        };

        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("success")

            location.reload()
        })
})

$(".delete").on('click', function(event) {
    let id = $(this).data("id")

    $.ajax("api/burgers/" + id, {
        type: "DELETE"
    }).then(function(){
        console.log("Burger deleted", id);

        location.reload()
    });
});