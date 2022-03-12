function signUp(email,name,password) {
  let __mail = email;
  let __userName = name;
  let __password = password;

  this.getEmail=function () {
    return __mail;
  }
  this.getUserName=function () {
    return __userName;
  }
  this.getPassword=function () {
    return __password;
  }

  this.setEmail=function (v) {
    __mail=v;
  }
  this.setUserName=function (v) {
    __userName=v;
  }
  this.setPassword=function (v) {
    __password=v;
  }

}