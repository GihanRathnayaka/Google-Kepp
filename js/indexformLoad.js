
var color = 0;

$(document).ready(function () {
    // $("#tablebody").css("visibility","hidden");
    // $(".tbale-foter").css("visibility","hidden");
});

$("#txtTitle").click(function () {
    $("#tablebody").css("visibility", "visible");
    $(".tbale-foter").css("visibility", "visible");

});


$('#txtNote').keypress(function (e) {
    var index = 0;
    if (e.which == 13) {
        ++index;
        var text = $('#txtNote').val().trim();

        if (text == "") { return; }

        var html = `<div class="card-body tablebody" >

      <!-- Tbody-Left Start -->
      <div class="tablebody-left">
      
      <i class="far fa-check-square"></i>
      </div>
      <!-- tBody Left End -->

      <!-- TBody Right Start -->
      <div class="tablebody-right">
          <input type="text" placeholder=" Take a note........" class="text-note" id="txtNote" value="${text}">
      </div>
      <!-- Tbody Right End  -->

      </div>`

        $("#tablebody").append(html);
        $('#txtNote').val("");
    }



    $(function () {
        $("#tablebody").sortable();
        $("#tablebody").disableSelection();
    });
});



$('#btnClose').click(function () {

    var backColor = "";
    console.log(color);

    if (color == 1) { backColor = "white"; }
    if (color == 2) { backColor = "yellow"; }
    if (color == 3) { backColor = "violet"; }
    if (color == 4) { backColor = "turquoise" }
    if (color == 5) { backColor = "tomato" }
    if (color == 6) { backColor = "springgreen" }
    if (color == 7) { backColor = "slateblue" }
    if (color == 8) { backColor = "brown" }
    if (color == 9) { backColor = "red" }

    var title = $("#txtTitle").val();

    var note = `${title}<hr>`;

      var size = $(".text-note").length;
      console.log(size);
      if(size<=1){return;}
    $(".text-note").each(function (index) {

     var empty=   $(this).val().trim();

     if(empty!=""){

        note = note + "<br>" + '<input type="checkbox" class="check-Me" style="font-size: 18px; height: 15px; width: 15px;  margin-right: 15p">' + $(this).val();
   
     }else{console.log("wada.........");}
   
   
    });


    var colorPalate = `  <div class="ico1">
    <i class="fas fa-palette" id="colorIco1">
    
    
        <!-- ColorContainer Start -->
        <div class="color-Box1">
            <!-- Color Start -->
            <div class="color-common" id="color-1">
    
            </div>
            <!-- Color End -->
    
            <!-- Color Start -->
            <div class="color-common" id="color-2">
    
            </div>
            <!-- Color End -->
            <!-- Color Start -->
            <div class="color-common" id="color-3">
    
            </div>
            <!-- Color End -->
            <!-- Color Start -->
            <div class="color-common" id="color-4">
    
            </div>
            <!-- Color End -->
            <!-- Color Start -->
            <div class="color-common" id="color-5">
    
            </div>
            <!-- Color End -->
            <!-- Color Start -->
            <div class="color-common" id="color-6">
    
            </div>
            <!-- Color End -->
            <!-- Color Start -->
            <div class="color-common" id="color-7">
    
            </div>
            <!-- Color End -->
            <!-- Color Start -->
            <div class="color-common" id="color-8">
    
            </div>
            <!-- Color End -->
            <!-- Color Start -->
            <div class="color-common" id="color-9">
    
            </div>
            <!-- Color End -->
    
        </div>
        <!-- ColorContainer End-->
    
    
    </i>
    </div>`





    var html = ` <div class="my-modify"><div class="card-body"></div></div>`

    var items = `<div class="my-modify" style=" background-color:${backColor};"> ${note} <br>${ colorPalate }</div>`;

    var $items = $(items);


    $("#ico1").click(function(){

        console.log("Badu wada");

        $(".color-Box1").show();    //.css("visibility","visible")
       
    });





    // add to packery layout
    $container.append($items)
        .packery('appended', $items)
    // make item elements draggable
    $items.each(makeEachDraggable);

    $(".text-note").val("");
    $("#txtTitle").val("");


    $(".text-note").each(function (index) {

        console.log("index " + index);

        if (index != 0) {
            $(this).parent().parent().remove();


        }


    });


});



