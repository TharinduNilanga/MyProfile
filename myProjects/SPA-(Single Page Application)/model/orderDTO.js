function orderDTO(oId,cusId,discount,totalPrice,date,time) {
    var __oId=oId;
    var __cusId=cusId;
    var __discount=discount;
    var __totalPrice=totalPrice;
    var __date=date;
    var __time=time;
    var orderDetailArr=new Array();

    this.getOrderId=function () {
        return __oId;
    }
    this.getOrderCustomerId=function () {
        return __cusId;
    }
    this.getOrderDiscount=function () {
        return __discount;
    }

    this.getOrderTotalPrice=function () {
        return __totalPrice;
    }
    this.getOrderDate=function () {
        return __date;
    }
    this.getOrderTime=function () {
        return __time;
    }
    this.getOrderDetails=function () {
     return orderDetailArr;
    }

    this.setOrderId=function (v) {
        __oId=v;
    }
    this.setOderCustomerId=function (v) {
        __cusId=v;
    }
    this.setOrderDiscount=function (v) {
        __discount=v;
    }
    this.setOrderTotalPrice=function (v) {
        __totalPrice=v;
    }
    this.setOrderDate=function (v) {
        __date=v;
    }
    this.setOrderTime=function (v) {
        __time=v;
    }
    this.setOrderDetails=function (arr) {
        orderDetailArr=arr;
    }
}
