$(document).ready(function () {

    //   alert("Hello world!");

    $(function () {
        $("#datepicker").datepicker({
            dateFormat: "M d yy",
        });
    });


    $("#datepicker").datepicker({
        dateFormat: "M d yy",
    }).datepicker('setDate', new Date());
    


    var DateofInjection = $("#datepicker").datepicker('getDate');
    $("#datepicker").val(moment(DateofInjection).format("MMM Do YYYY"));
   

    console.log(moment().month())


    if ((moment(DateofInjection).month() == 0) || (moment(DateofInjection).month() == 1)) {

        var BeginningDate = moment(DateofInjection).add(11, 'weeks').add(1, 'days').format("MMM Do YYYY");

        var EndDate = moment(DateofInjection).add(13, 'weeks').add(1, 'days').format("MMM Do YYYY");
        
        $("#BeginningDate").text(BeginningDate);
        $("#EndDate").text(EndDate);

    } else {

        var BeginningDate = moment(DateofInjection).add(11, 'weeks').format("MMM Do YYYY");

        var EndDate = moment(DateofInjection).add(13, 'weeks').format("MMM Do YYYY");
       

        $("#BeginningDate").text(BeginningDate);
        $("#EndDate").text(EndDate);

    }




$("#datepicker").change(function () {

    DateofInjection = $("#datepicker").datepicker('getDate');
    $("#datepicker").val(moment(DateofInjection).format("MMM Do YYYY"));

    if ((moment(DateofInjection).month() == 0) || (moment(DateofInjection).month() == 1)) {

        BeginningDate = moment(DateofInjection).add(11, 'weeks').add(1, 'days').format("MMM Do YYYY");

        EndDate = moment(DateofInjection).add(13, 'weeks').add(1, 'days').format("MMM Do YYYY");
        
        $("#BeginningDate").text(BeginningDate);
        $("#EndDate").text(EndDate);

    } else {

        BeginningDate = moment(DateofInjection).add(11, 'weeks').format("MMM Do YYYY");

        EndDate = moment(DateofInjection).add(13, 'weeks').format("MMM Do YYYY");
       

        $("#BeginningDate").text(BeginningDate);
        $("#EndDate").text(EndDate);

    }


    $(".resetbuttondisplay").removeClass("resetbuttondisplay")
    $(".resetbuttondisplay").removeClass("resetbuttondisplay")

});

$('#resetbutton').click(function () {
    $("#datepicker").datepicker({
        dateFormat: "M d yy",
        showButtonPanel: true
    }).datepicker('setDate', new Date());
    DateofInjection = $("#datepicker").datepicker('getDate');
    $("#datepicker").val(moment(DateofInjection).format("MMM Do YYYY"));
    $("#resetbutton").addClass("resetbuttondisplay")

});




// $(".MOBILEdate").unwrap();






             


moment().calendar();





});