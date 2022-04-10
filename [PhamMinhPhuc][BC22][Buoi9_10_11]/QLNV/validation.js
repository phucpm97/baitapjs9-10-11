function Validation() {
    this.kiemTraRong = function(value, errorId, mess) {
        // var isvalid = true
        if (value === "") {
            getEle(errorId).innerHTML = mess;
            getEle(errorId).style.display = "block";
            return false;
        }
        //     //  else {
        //     //     getEle(errorId).innerHTML = "";
        //     //     getEle(errorId).style.display = "none";
        //     //     // isvalid = true;
        //     // }
        //     // return isvalid;
        getEle(errorId).innerHTML = "";
        getEle(errorId).style.display = "none";
        return true;
    };
    this.kiemTraDoDaiKyTu = function(value, errorId, mess, ) {
        if (value.trim().length >= 4 && value.trim().length <= 6) {
            // hop le
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }
        // ko hop le
        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
    }
    this.kiemTraChuoiKyTu = function(value, errorId, mess) {
        var letter =
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (value.match(letter)) {
            // hop le
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }
        // ko hop le
        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
    };
    this.kiemTraEmail = function(value, errorId, mess) {
        var Email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(Email)) {
            // hop le
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }
        // ko hop le
        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
    };
    // /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
};
// /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/