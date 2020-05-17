$(document).ready(function () {

    //   alert("Hello world!");

    $(function () {
        $("#datepicker").datepicker();
    });


    $("#datepicker").datepicker({
        dateFormat: "M d yy"
    }).datepicker('setDate', new Date());
    console.log(new Date());

    
    var DateofInjection = $("#datepicker").datepicker('getDate');
    $("#datepicker").val(moment(DateofInjection).format("MMM Do YYYY"));
    console.log(DateofInjection);

    var BeginningDate = moment(DateofInjection).add(11, 'weeks').format("MMM Do YYYY");
    console.log(BeginningDate);

    var EndDate = moment(DateofInjection).add(13, 'weeks').format("MMM Do YYYY");
    console.log(EndDate);

    $("#BeginningDate").text(BeginningDate);
    $("#EndDate").text(EndDate);


    $("#datepicker").change(function () {
        DateofInjection = $("#datepicker").datepicker('getDate');
        $("#datepicker").val(moment(DateofInjection).format("MMM Do YYYY"));
        console.log(DateofInjection)

        BeginningDate = moment(DateofInjection).add(11, 'weeks').format("MMM Do YYYY");
        console.log(BeginningDate);

        EndDate = moment(DateofInjection).add(13, 'weeks').format("MMM Do YYYY");
        console.log(EndDate);

        $("#BeginningDate").text(BeginningDate);
        $("#EndDate").text(EndDate);
    });





    moment().calendar();





});