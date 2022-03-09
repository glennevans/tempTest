$(document).ready(function(){
    $(function(){
        $("#player-1").draggable({ revert: "invalid" });
        $("#player-2").draggable({ revert: "invalid" });
        $("#player-3").draggable({ revert: "invalid" });
        $("#player-4").draggable({ revert: "invalid" });
        $("#player-5").draggable({ revert: "invalid" });
        $("#player-6").draggable({ revert: "invalid" });
        $("#player-7").draggable({ revert: "invalid" });
        $("#player-8").draggable({ revert: "invalid" });

        $("#drop1, #drop2, #drop3,#drop4,#drop5,#drop6,#drop7,#drop8").droppable({
            drop: function (event, ui) {
          
            }
        });

    });
});