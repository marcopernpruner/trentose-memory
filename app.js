/* your code should go here */
var tmpl = '<li id="ID">'+
           '<h3>NUMBER</h3>'+
           '</li>';

// Three main classes of cards:
// done: when the user has discovered the pair of cards
// hidden: when the card has not been discovered yet

var count = 1;

function reset() {
    $(".cards li").removeClass("hidden");
    $(".cards li").removeClass("done");
}

$(document).ready(function(){
    for (var i=0; i<data.length; i++) {
        $(".cards").append(tmpl.replace("ID",i).replace("NUMBER",data[i]));
    }

    $(".options .opt-start").on("click", function() {
        reset();
        $(".cards li").addClass("hidden");
    });

    $(".cards li").on("click", function(event) {
        if ($(this).hasClass("hidden")) {
            if ($(this).text() == count) {
                $(this).removeClass("hidden");
                $(this).addClass("done");
                count++;
            } else {
                $(".cards li").removeClass("hidden");
                alert("You lose!");
                count = 1;
            }
        }

        if (count == 11) {
            alert("You win!");
        }
    });

});
