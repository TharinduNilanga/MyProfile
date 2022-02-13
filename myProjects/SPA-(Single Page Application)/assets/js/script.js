var homeSection=document.getElementById("homeContainer");
var itemSection=document.getElementById("itemcontainer");
var customerSection=document.getElementById("CustomerContainer");
var orderSection=document.getElementById("orderContainer");
var loginSection=document.getElementById("loginContainer");
var signUpSection=document.getElementById("signUpContainer");

var homeNav=document.getElementById("homenav");
var itemNav=document.getElementById("itemnav");
var customerNav=document.getElementById("customernav");
var orderNav=document.getElementById("ordernav");
var headerNav=document.getElementById("navbarheader");
var loginNav=document.getElementById("loginNav");
var SignUpNav=document.getElementById("SignUpNav");
var loginbtn=document.getElementById("btnLogin");
var SignUpbtn=document.getElementById("btnSignUp");
var SignUpbtn1=document.getElementById("SignUpbtn1");


loginbtn.addEventListener("click",function () {
    homeSection.style.display="block";
    itemSection.style.display="none";
    customerSection.style.display="none";
    orderSection.style.display="none";
    loginSection.style.display="none";
    signUpSection.style.display="none";
    headerNav.style.display="block";
})
loginNav.addEventListener("click",function () {
    homeSection.style.display="none";
    itemSection.style.display="none";
    customerSection.style.display="none";
    orderSection.style.display="none";
    loginSection.style.display="block";
    signUpSection.style.display="none";
    headerNav.style.display="none";

})
SignUpbtn.addEventListener("click",function () {
    homeSection.style.display="none";
    itemSection.style.display="none";
    customerSection.style.display="none";
    orderSection.style.display="none";
    loginSection.style.display="none";
    signUpSection.style.display="block";
    headerNav.style.display="none";
})
SignUpNav.addEventListener("click",function () {
    homeSection.style.display="none";
    itemSection.style.display="none";
    customerSection.style.display="none";
    orderSection.style.display="none";
    loginSection.style.display="none";
    signUpSection.style.display="block";
    headerNav.style.display="none";
})
SignUpbtn1.addEventListener("click",function () {
    homeSection.style.display="block";
    itemSection.style.display="none";
    customerSection.style.display="none";
    orderSection.style.display="none";
    loginSection.style.display="none";
    signUpSection.style.display="none";
    headerNav.style.display="block";
})
homeNav.addEventListener("click",function () {
    homeSection.style.display="block";
    itemSection.style.display="none";
    customerSection.style.display="none";
    orderSection.style.display="none";
    loginSection.style.display="none";
    signUpSection.style.display="none";
    headerNav.style.display="block";
})
itemNav.addEventListener("click",function () {
    homeSection.style.display="none";
    itemSection.style.display="block";
    customerSection.style.display="none";
    orderSection.style.display="none";
    loginSection.style.display="none";
    signUpSection.style.display="none";
    headerNav.style.display="block";

})
customerNav.addEventListener("click",function () {
    homeSection.style.display="none";
    itemSection.style.display="none";
    customerSection.style.display="block";
    orderSection.style.display="none";
    loginSection.style.display="none";
    signUpSection.style.display="none";
    headerNav.style.display="block";
})
orderNav.addEventListener("click",function () {
    homeSection.style.display="none";
    itemSection.style.display="none";
    customerSection.style.display="none";
    orderSection.style.display="block";
    loginSection.style.display="none";
    signUpSection.style.display="none";
    headerNav.style.display="block";
})

$(function () {
    $("#btnPlaceOrder").click(function () {
        var cusId=$('input[name="txtcusId"]').val();
        var itemId=$('input[name="txtitemId"]').val();
        var orderId=$('input[name="txtorderId"]').val();
        var discount=$('input[name="txtdis"]').val();
        var total=$('input[name="txtttlPrice"]').val();

        var tr='<tr><td>'+orderId+'</td> <td>'+cusId+'</td> <td>'+itemId+'</td> <td>'+discount+'</td> <td>'+total+'</td></tr>';
        $("#tblAddOrder").append(tr);

       $('#txtcusId').val("");
        $('#txtitemId').val("");
        $('#txtorderId').val("");
        $('#txtdis').val("");
        $('#txtttlPrice').val("");
    });
        $(document).ready(function () {
          $(document).on('click','#tblhome tbody tr',function () {
              var orderId=$(this).find('td:eq(0)').text();
              var cusId=$(this).find('td:eq(1)').text();
              var itemId=$(this).find('td:eq(2)').text();
              var discount=$(this).find('td:eq(3)').text();
              var total=$(this).find('td:eq(4)').text();

              $('#txtcusId').val(cusId);
              $('#txtitemId').val(itemId);
              $('#txtorderId').val(orderId);
              $('#txtdis').val(discount);
              $('#txtttlPrice').val(total);
            });
        })
    $("#btnItemSave").click(function () {
        var ItemId=$('input[name="txtItemId"]').val();
        var ItemName=$('input[name="txtItemName"]').val();
        var ItemPrice=$('input[name="txtItemPrice"]').val();
        var ItemQuantity=$('input[name="txtItemQuantity"]').val();


        var tr='<tr><td>'+ItemId+'</td> <td>'+ItemName+'</td> <td>'+ItemPrice+'</td> <td>'+ItemQuantity+'</td></tr>';
        $("#tblItem").append(tr);
        $('#txtitemidnew').val("");
        $('#txtItemName').val("");
        $('#txtItemPrice').val("");
        $('#txtItemQuantity').val("");
    });
    $(document).ready(function () {
        $(document).on('click','#tblItemTable tbody tr',function () {
            var itemId=$(this).find('td:eq(0)').text();
            var name=$(this).find('td:eq(1)').text();
            var  price=$(this).find('td:eq(2)').text();
            var  quantity=$(this).find('td:eq(3)').text();


            $('#txtitemidnew').val(itemId);
            $('#txtItemName').val(name);
            $('#txtItemPrice').val(price);
            $('#txtItemQuantity').val(quantity);

        });
    });
    $("#btnSaveCustomer").click(function () {
        var CustomerId=$('input[name="txtCustomerId"]').val();
        var CustomerName=$('input[name="txtCustomerName"]').val();
        var CustomerAddress=$('input[name="txtCustomerAddress"]').val();
        var CustomerContact=$('input[name="txtCustomerContact"]').val();


        var tr='<tr><td>'+CustomerId+'</td> <td>'+CustomerName+'</td> <td>'+CustomerAddress+'</td> <td>'+CustomerContact+'</td></tr>';
        $("#tblCustomer").append(tr);

        $('#txtCustomerId').val("");
        $('#txtCustomerName').val("");
        $('#txtCustomerAddress').val("");
        $('#txtCustomerContact').val("");
    });
    $(document).ready(function () {
        $(document).on('click','#tblCustomerTable tbody tr',function () {
            var cusId=$(this).find('td:eq(0)').text();
            var name=$(this).find('td:eq(1)').text();
            var  address=$(this).find('td:eq(2)').text();
            var  contact=$(this).find('td:eq(3)').text();


            $('#txtCustomerId').val(cusId);
            $('#txtCustomerName').val(name);
            $('#txtCustomerAddress').val(address);
            $('#txtCustomerContact').val(contact);

        });
        $(document).on('dblclick','#tblCustomerTable tbody tr',function () {
            $(this).remove();
        });
    });
});
        $("#txtitemidnew").focus();
        $("#txtitemidnew").keydown(function (event) {
            if (event.key=="Enter"){
                $("#txtItemName").focus();
            }
        });
        $("#txtItemName").keydown(function (event) {
            if (event.key=="Enter"){
                $("#txtItemPrice").focus();
            }
        });
        $("#txtItemPrice").keydown(function (event) {
            if (event.key=="Enter"){
                $("#txtItemQuantity").focus();
            }
        });


        $("#txtCustomerId").focus();
        $("#txtCustomerId").keydown(function (event) {
            if (event.key=="Enter"){
                $("#txtCustomerName").focus();
            }
        });
        $("#txtCustomerName").keydown(function (event) {
            if (event.key=="Enter"){
                $("#txtCustomerAddress").focus();
            }
        });
        $("#txtCustomerAddress").keydown(function (event) {
            if (event.key=="Enter"){
                $("#txtCustomerContact").focus();
            }
        });
        var regExCusID=/^(C00-)[0-9]{3,4}$/;

        $("#txtCustomerId").keyup(function () {

           let input= $("#txtCustomerId").val();

           if (regExCusID.test(input)){
               $("#txtCustomerId").css('border','2px solid green');
               $("#error").text("");

           }else{
               $("#txtCustomerId").css('border','2px solid red');
               $("#error").text("Wrong format : C00-001");
           }
        });

        var regExCusName=/^[a-z,A-Z ]*$/;
        $("#txtCustomerName").keyup(function () {

            let input= $("#txtCustomerName").val();

            if (regExCusName.test(input)){
                $("#txtCustomerName").css('border','2px solid green');
                $("#error1").text("");

            }else{
                $("#txtCustomerName").css('border','2px solid red');
                $("#error1").text("Wrong format : Kumara");
            }
        });

        var regExCusAddress=/[a-z,A-Z ]+[0-9 | a-z,A_Z]*$/;
        $("#txtCustomerAddress").keyup(function () {

            let input= $("#txtCustomerAddress").val();

            if (regExCusAddress.test(input)){
                $("#txtCustomerAddress").css('border','2px solid green');
                $("#error2").text("");

            }else{
                $("#txtCustomerAddress").css('border','2px solid red');
                $("#error2").text("Wrong format : Horana");
            }
        });

        var regExCusContact=/^[0-9]{10}$/;
        $("#txtCustomerContact").keyup(function () {

            let input= $("#txtCustomerContact").val();

            if (regExCusContact.test(input)){
                $("#txtCustomerContact").css('border','2px solid green');
                $("#error3").text("");

            }else{
                $("#txtCustomerContact").css('border','2px solid red');
                $("#error3").text("Wrong format : 0712345678");
            }
        });
        function  sucess() {
            let cuID = $("#txtCustomerId");
            let cuName = $("#txtCustomerName");
            let cuAddress = $("#txtCustomerAddress");
            let cuContact = $("#txtCustomerContact");

            if ((cuID.value == "") && (cuName.value == "") && (cuAddress.value == "") && (cuContact.value == "")) {
                $('#btnSaveCustomer').prop('disabled', true);
            } else ((cuID.value == "") && (cuName.value == "") && (cuAddress.value == "") && (cuContact.value == ""))
            {
                $('#btnSaveCustomer').prop('disabled', false);
            }
        };

        var regExitemID=/^(I00-)[0-9]{3,4}$/;

        $("#txtitemidnew").keyup(function () {

            let input= $("#txtitemidnew").val();

            if (regExitemID.test(input)){
                $("#txtitemidnew").css('border','2px solid green');
                $("#errorI").text("");

            }else{
                $("#txtitemidnew").css('border','2px solid red');
                $("#errorI").text("Wrong format : I00-001");
            }
        });

        var regExItemName=/^[a-z,A-Z ]*$/;
        $("#txtItemName").keyup(function () {

            let input= $("#txtItemName").val();

            if (regExItemName.test(input)){
                $("#txtItemName").css('border','2px solid green');
                $("#errorI1").text("");

            }else{
                $("#txtItemName").css('border','2px solid red');
                $("#errorI1").text("Wrong format : ***");
            }
        });

        var regExItemPrice=/^[0-9]{10}$$/;
        $("#txtItemPrice").keyup(function () {

            let input= $("#txtItemPrice").val();

            if (regExItemPrice.test(input)){
                $("#txtItemPrice").css('border','2px solid green');
                $("#errorI2").text("");

            }else{
                $("#txtItemPrice").css('border','2px solid red');
                $("#errorI2").text("Wrong format : 1200");
            }
        });

        var regExItemQuantity=/^[0-9]{10}$/;
        $("#txtItemQuantity").keyup(function () {

            let input= $("#txtItemQuantity").val();

            if (regExItemQuantity.test(input)){
                $("#txtItemQuantity").css('border','2px solid green');
                $("#errorI3").text("");

            }else{
                $("#txtItemQuantity").css('border','2px solid red');
                $("#errorI3").text("Wrong format : 12");
            }
        });
        function  sucessI() {
            let itemId = $("#txtitemidnew");
            let iName = $("#txtItemName");
            let iPrice = $("#txtItemPrice");
            let iQuantity = $("#txtItemQuantity");

            if ((itemId.value == "") && (iName.value == "") && (iPrice.value == "") && (iQuantity.value == "")) {
                $('#btnItemSave').prop('disabled', true);
            } else ((itemId.value == "") && (iName.value == "") && (iPrice.value == "") && (iQuantity.value == ""))
            {
                $('#btnItemSave').prop('disabled', false);
            }
        };
         /*  function success() {


   if ($("#txtCustomerId").value===""){
       $("#btnSaveCustomer").disabled=true;
   }else{
       $("#btnSaveCustomer").disabled=false;
    };
   }*/
/*function success() {
    let cuID = $("#txtCustomerId");

    if (cuID.value==""){
        $("#btnSaveCustomer").disabled=true;
    }else{
        $("#btnSaveCustomer").disabled=false;
    };
}*/
/*$('#col5>input').on('keypress keyup keydown', function () {
    if ($('#col5>input').val() == "" ) {
        $('#btnSaveCustomer').prop('disabled', true);
    }
    else {
        $('#btnSaveCustomer').prop('disabled', false);
    }
});*/
    /*    var regExCusID = /^(C00-)[0-9]{3,4}$/;z
        $("#txtCustomerId").keyup(function () {

            let input = $("#txtCustomerId").val();
            if (regExCusID.test(input)) {
                $("#txtCustomerId").css('border', '2px solid green');
            /!*    $("#error").text("");*!/
            } else {
                $("#txtCustomerId").css('border', '2px solid red');
                $("#error").text("Wrong format : C00-001");
            }
        });*/
