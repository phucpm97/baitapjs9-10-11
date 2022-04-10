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
    this.kiemTraMatKhau = function(value, errorId, mess) {
        var Pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if (value.match(Pass)) {
            // hop le
            getEle(errorId).innerHTML = "";
            getEle(errorId).style.display = "none";
            return true;
        }
        // ko hop le
        getEle(errorId).innerHTML = mess;
        getEle(errorId).style.display = "block";
        return false;
        // mat khau hop le:#sg3Sg.2
    };

    this.kiemTraNgay = function(value, errorId, mess) {
        var Date = "+yyyy / mm / dd or yyyy - mm - dd";
        if (value.match(Date)) {
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
    this.kiemTraTienLuong = function(value, errorId, mess) {
        var Number = "/^[0-9]+$/";
        if (value.match(Number)) {
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
    this.kiemTraChucVu = function(value, errorId, mess) {
        var chuc = 0;
        if (chuc === "Chọn chức vụ") {
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
}