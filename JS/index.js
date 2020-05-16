$(document).ready(function () {

    //   alert("Hello world!");

    $(function () {
        $("#datepicker").datepicker();
    });


    $("#datepicker").datepicker().datepicker('setDate', new Date());
    console.log(new Date());
    var DateofInjection = $("#datepicker").datepicker('getDate');
    console.log(DateofInjection);

    var BeginningDate = moment(DateofInjection).add(11, 'weeks').calendar();
    console.log(BeginningDate);

    var EndDate = moment(DateofInjection).add(13, 'weeks').calendar();
    console.log(EndDate);

    $("#BeginningDate").text(BeginningDate);
    $("#EndDate").text(EndDate);


    $("#datepicker").change(function () {
        DateofInjection = $("#datepicker").datepicker('getDate');
        console.log(DateofInjection)

        BeginningDate = moment(DateofInjection).add(11, 'weeks').calendar();
        console.log(BeginningDate);

        EndDate = moment(DateofInjection).add(13, 'weeks').calendar();
        console.log(EndDate);

        $("#BeginningDate").text(BeginningDate);
        $("#EndDate").text(EndDate);
    });





    moment().calendar();





});