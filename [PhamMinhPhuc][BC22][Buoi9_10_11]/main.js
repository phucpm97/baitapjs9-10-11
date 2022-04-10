// tao lop doi tuong dsnv tu lop doi tuong DanhSachNhanVien()
var dsnv = new DanhSachNhanVien();

getLocalStorage();

function getEle(id) {
    return document.getElementById(id);
}

function ChuoiThongTinNhanVien() {
    var TaikhoanNV = getEle("tknv").value;
    var TenNV = getEle("name").value;
    var EmailNV = getEle("email").value;
    var MatkhauNV = getEle("password").value;
    var NgaylamNV = getEle("datepicker").value;
    var LuongNV = getEle("luongCB").value * 1;
    var ChucvuNV = getEle("chucvu").value;
    var GiolamNV = getEle("gioLam").value;
    // flag(cờ)
    var isvalid = true;
    // validation
    // isvalid = validation.kiemTraRong(TaikhoanNV, "divErrorTaiKhoan", "tai khoan khong duoc rong");
    var hafda = validation.alue();
    // var hafda = testne();

    // if (TaikhoanNV === "") {
    //     getEle("divErrorTaiKhoan").innerHTML = "Tài khoản không được để rỗng";
    //     getEle("divErrorTaiKhoan").style.display = "block";
    //     isvalid = false;
    // } else {
    //     getEle("divErrorTaiKhoan").innerHTML = "";
    //     getEle("divErrorTaiKhoan").style.display = "none";
    //     isvalid = true;
    // }
    // check form
    if (!isvalid) return null;
    var nhanvien = new ThongtinNhanVien(TaikhoanNV, TenNV, EmailNV, MatkhauNV, NgaylamNV, LuongNV, ChucvuNV, GiolamNV);
    nhanvien.LuongChucvu();
    nhanvien.xepLoai();
    return nhanvien;


}

getEle("btnThemNV").addEventListener("click", function() {

    var nhanVien = ChuoiThongTinNhanVien();

    if (nhanVien) {
        dsnv.themNV(nhanVien);
        taoBang(dsnv.arr);
        // setLocalStorage();
    }

});


function taoBang(arr) {
    var content = "";
    for (var i = 0; i < arr.length; i++) {

        var NhanVien = arr[i];
        content += `
        <tr>
        <td>${NhanVien.taikhoanNV}</td>
        <td>${NhanVien.tenNV}</td>
        <td>${NhanVien.emailNV}</td>
        <td>${NhanVien.ngaylamNV}</td>
        <td>${NhanVien.chucvuNV}</td>
        <td>${NhanVien.DiemTB}</td>
        <td>${NhanVien.XepChuyenCan}</td>
        <td>
        <button class="btn btn-primary" data-toggle="modal" data-target="#myModal" onclick="suaNV('${NhanVien.tenNV}')">Sửa</button>
        </td>
        <td><button class="btn btn-danger" onclick="xoaNV('${NhanVien.tenNV}')">xoa</button>
        </td>
        </tr>
        `
    }
    // <button class="btn btn-primary" id="btnThem" data-toggle="modal" data-target="#myModal">Thêm nhân viên</button>
    // // console.log(arr);
    // console.log("hello");
    // // console.log(content);
    // console.log(NhanVien.taikhoanNV);
    getEle("tableDanhSach").innerHTML = content;
    // getEle("tableDanhSach").innerHTML = "cmmm";
}



function setLocalStorage() {
    var dataString = JSON.stringify(dsnv.arr);

    localStorage.setItem("DSNhanVien", dataString);
}

function getLocalStorage() {
    var data = localStorage.getItem("DSNhanVien");
    if (data) {
        var dataJson = JSON.parse(data);
        console.log(data);
        console.log(dataJson);
        dsnv.arr = dataJson;
        console.log(dsnv.arr);
        taoBang(dsnv.arr);
    }
}

function xoaNV(tenNhanVien) {

    console.log(dsnv.arr);
    dsnv._xoaNV(tenNhanVien);
    console.log(dsnv.arr);
    taoBang(dsnv.arr);
    // setLocalStorage();
}


function suaNV(SV) {

    getEle("btntCapnhatNV").style.display = "inline-block";
    var nhanVien = dsnv._suaNV(SV);
    if (nhanVien) {
        console.log(nhanVien);
        getEle("tknv").value = nhanVien.taikhoanNV;
        getEle("name").disabled = true;
        getEle("name").value = nhanVien.tenNV;
        getEle("email").value = nhanVien.emailNV;
        getEle("password").value = nhanVien.matkhauNV;
        getEle("datepicker").value = nhanVien.ngaylamNV;
        getEle("luongCB").value = nhanVien.luongNV;
        getEle("chucvu").value = nhanVien.chucvuNV;
        getEle("gioLam").value = nhanVien.giolamNV;
    };


    // dsnv._xoaNV(tenNhanVien);
    // console.log(dsnv.arr);
    // taoBang(dsnv.arr);
    // setLocalStorage();
}

getEle("btntCapnhatNV").addEventListener("click", function() {
    // Lấy lại những thông tin mới nhất từ các thẻ input
    // console.log("hello");
    var nhanvien = ChuoiThongTinNhanVien();
    // console.log(nhanvien);
    dsnv.capNhatNhanVien(nhanvien);

    taoBang(dsnv.arr);

    setLocalStorage();
})

getEle("searchName").addEventListener("keyup", function() {
    var key = getEle("searchName").value;
    // console.log(key);
    var mangTimKiem = dsnv.timkiemNhanVien(key);
    taoBang(mangTimKiem);

})