// $(function () {
//     $(".change-devoured").on("click", function (event) {
//         event.preventDefault();
//         console.log("clicked");
//         console.log($(this).data);
//         var id = $(this).attr("data-id");
//         var new_devour_status = $(this).data("devoured");

//         var newState = {
//             devoured: new_devour_status
//         };

//         $.ajax("/api/burgers/" + id, {
//             type: "PUT",
//             data: newState
//         }).then(
//             function () {
//                 console.log("changed devoured to", devourednew);
//                 // Reload the page to get the updated list
//                 location.reload();
//             }
//         );
//     });
// })