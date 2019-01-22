$("#colorIco").mouseover(function(){
    $(".color-Box").css("visibility","visible");
    // color=1;
});

$("#colorIco").mouseleave(function(){
    $(".color-Box").css("visibility","hidden");
    // color=2;
});

// tblDetails color-1

$("#color-1").click(function(){
    $("#tblDetails").css("background","white");
    color=1;
});

$("#color-2").click(function(){
    $("#tblDetails").css("background","yellow");
    color=2;
});
$("#color-3").click(function(){
    $("#tblDetails").css("background","violet");
    color=3;
});
$("#color-4").click(function(){
    $("#tblDetails").css("background","turquoise");
    color=4;
});

$("#color-5").click(function(){
    $("#tblDetails").css("background","tomato");
    color=5;
});

$("#color-6").click(function(){
    $("#tblDetails").css("background","springgreen");
    color=6;
});

$("#color-7").click(function(){
    $("#tblDetails").css("background","slateblue");
    color=7;
});

$("#color-8").click(function(){
    $("#tblDetails").css("background","brown");
    color=8;
});

$("#color-9").click(function(){
    $("#tblDetails").css("background","red");
    color=9;
});