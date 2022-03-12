function customerDTO(id,name,address,contact) {
    var __cusId=id;
    var __cusName=name;
    var __cusAddress=address;
    var __cusContact=contact;

    this.getCustomerId=function () {
        return __cusId;
    }
    this.getCustomerName=function () {
        return __cusName;
    }
    this.getCustomerAddress=function () {
        return __cusAddress;
    }
    this.getCustomerContact=function () {
        return __cusContact;
    }

    this.setCustomerId=function (v) {
        __cusId=v;
    }
    this.setCustomerName=function (v) {
        __cusName=v;
    }
    this.setCustomerAddress=function (v) {
        __cusAddress=v;
    }
    this.setCustomerContact=function (v) {
        __cusContact=v;
    }
}