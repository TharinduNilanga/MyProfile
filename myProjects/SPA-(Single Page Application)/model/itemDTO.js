function itemDTO(id,name,price,quantity) {
    var __itemId=id;
    var __itemName=name;
    var __itemPrice=price;
    var __itemQuantity=quantity;

    this.getItemId=function () {
        return __itemId;
    }
    this.getItemName=function () {
        return __itemName;
    }
    this.getItemPrice=function () {
        return __itemPrice;
    }
    this.getItemQuantity=function () {
        return __itemQuantity;
    }

    this.setItemId=function (v) {
        __itemId=v;
    }
    this.setItemName=function (v) {
        __itemName=v;
    }
    this.setItemPrice=function (v) {
        __itemPrice=v;
    }
    this.setItemQuantity=function (v) {
        __itemQuantity=v;
    }
}