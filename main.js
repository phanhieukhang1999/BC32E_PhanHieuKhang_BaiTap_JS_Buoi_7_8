/*-------Thêm số----------- */
var arrNumber = [];
document.getElementById('btnThemSo').onclick = function () {
    //input: so: number
    var nhapSo = Number(document.getElementById('nhapSo').value);
    //output: ketQua: string
    // var ketQua = '';
    //xử lý
    arrNumber.push(nhapSo);
    ketQua = arrNumber;

    //in mảng ra giao diện
    document.getElementById('ketQua').innerHTML = 'Mảng là: ' + ketQua;
}
/*---------Bài 1------------ */
document.getElementById('btnTinhTong').onclick = function () {
    //input: arrNumber: []
    //output: ketQua: number
    var ketQua = 0;
    //xử lý
    for (index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] > 0) {
            ketQua += arrNumber[index];
        }
    }
    //hiển thị giao diện
    document.getElementById('ketQua_b1').innerHTML = 'Tổng số dương là: ' + ketQua;
}
/*---------Bài 2------------ */
document.getElementById('btnDemSoDuong').onclick = function () {
    //input: arrNumber: []
    //output: ketQua: number
    var ketQua = 0;
    //xủ lý
    for (index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] < 0) {
            ketQua++;
        }
    }
    //hiển thị giao diện
    document.getElementById('ketQua_b2').innerHTML = 'Số dương: ' + ketQua;
}
/*---------Bài 3------------ */
document.getElementById('btnTimMin').onclick = function () {
    //input: arrNumber: []
    //output: ketQua: number
    var ketQua = arrNumber[0];
    //xử lý
    for (index = 1; index < arrNumber.length; index++) {
        if (arrNumber[index] < ketQua) {
            ketQua = arrNumber[index];
        }
    }
    //hiển thị giao diện
    document.getElementById('ketQua_b3').innerHTML = 'Số nhỏ nhất là: ' + ketQua;
}
/*---------Bài 4------------ */
document.getElementById('btnTimMinDuong').onclick = function () {
    //input: arrNumber: []
    //output: ketQua: [], min: number
    var ketQua = [];
    var min = 0;
    //xử lý
    for (index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] > 0) {
            ketQua.push(arrNumber[index]);
        }
    }

    if (ketQua.length > 0) {
        var min = ketQua[0];
        for (index = 1; index < ketQua.length; index++) {
            if (ketQua[index] < min) {
                min = ketQua[index]; 
            }
        }
        ketQua = 'Số dương nhỏ nhất trong mảng là : ' + min;
    } else {
        ketQua = 'Không có số dương trong mảng !';
    }

    //hiển thị giao diện
    document.getElementById('ketQua_b4').innerHTML = ketQua;



}
/*---------Bài 5------------ */
document.getElementById('btnTimChanCuoi').onclick = function () {
    //input: arrNumber: []
    //output: ketQua: number
    var ketQua = 0;
    //xử lý
    for (var index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] % 2 == 0) {
            ketQua = arrNumber[index];
        }
    }
    //hiển thị giao diện
    document.getElementById('ketQua_b5').innerHTML = 'Số chẵn cuối cùng là: ' + ketQua
}



/*---------Bài 6------------ */
document.getElementById('btnDoiCho').onclick = function () {
    //input: arrNumber: []
    //output: arrNumber []
    var arrNumber = swap('nhapViTri1', 'nhapViTri2');
    //hiện thị giao diện
    document.getElementById('ketQua_b6').innerHTML = 'Mảng sau khi đổi là: ' + arrNumber;

}
function swap(id1, id2) {
    //input: id các thẻ
    var viTri1 = (document.getElementById(id1).value);
    var viTri2 = (document.getElementById(id2).value);
    //xử lý
    var tam = arrNumber[viTri1];
    arrNumber[viTri1] = arrNumber[viTri2];
    arrNumber[viTri2] = tam;

    return arrNumber;
}


/*---------Bài 7------------ */
document.getElementById('btnSapXepTang').onclick = function () {
    //input: arrNumber: []
    //output: arrNumber []
    var arrNumber = sapXep(arrNumber);
    //hiển thị giao diện
    document.getElementById('ketQua_b7').innerHTML = 'Mảng sau khi sắp xếp là: ' + arrNumber;

}
function sapXep() {
    //input: ketQua: number, index: number

    //xử lý

    for (var ketQua = 0; ketQua < arrNumber.length; ketQua++) {
        for (index = 0; index < arrNumber.length - 1; index++) {
            if (arrNumber[index] > arrNumber[index + 1]) {
                var tam = arrNumber[index];
                arrNumber[index] = arrNumber[index + 1];
                arrNumber[index + 1] = tam;
            }
        }
    }
    return arrNumber;
}


/*---------Bài 8------------ */
document.getElementById('btnTimSoNguyenTo').onclick = function () {
    //input: arrNumber: []
    //output: ketQua: string
    var ketQua = '';

    var ketQua = timSNT();
    //hiển thị giao diện
    document.getElementById('ketQua_b8').innerHTML = ketQua;

}
function kiemTraSNT(ketQua) { //input 1 số
    //Biến kiểm tra là output: Đúng là số nguyên tố => sai là false
    var kiemTra = true;

    for (var uoc = 2; uoc <= ketQua / 2; uoc++) {
        //Mỗi lần duyệt qua 1 ước thì kiểm tra ước đó
        if (ketQua % uoc == 0) {
            //3 ước rồi
            kiemTra = false;
        }
    }
    return kiemTra;
}
function timSNT() {
    var ketQua = -1;
    for (var index = 0; index < arrNumber.length; index++) {
        if (kiemTraSNT(arrNumber[index])) {
            ketQua = 'Số nguyên tố đầu tiên là: ' + arrNumber[index];
            break;
        } else {
            ketQua = 'Không có số nguyên tố !'
        }
    }
    return ketQua;
}
/*---------Bài 9------------ */
var arrFloat = [];
document.getElementById('btnThemSo_1').onclick = function () {
    //input: nhapSo: number
    var nhapSo1 = Number(document.getElementById('nhapSo_1').value);
    
    //output: arrFloat: string
    arrFloat.push(nhapSo1);

    //hiển thị giao diện
    document.getElementById('ketQua_b9').innerHTML = 'Mảng là: ' + arrFloat;
}

document.getElementById('btnDemSoNguyen').onclick = function () {
    //input: arrFloat: []
    //output: ketQua: number
    var ketQua = 0;
    //xử lý
    for (index = 0; index < arrFloat.length; index++) {
        if (Number.isInteger(arrFloat[index])) {
            ketQua++;
        }   
    }
    //hiển thị giao diện
    document.getElementById('ketQua_b9_1').innerHTML = 'Số nguyên là: ' + ketQua;
}
/*---------Bài 10------------ */
document.getElementById('btnSoSanh').onclick = function() {
    //input: arrNumber: []
    //output: soSanh: string
    var ketQua = '';
    //xử lý
    var index = 0
    for(var soSanh = 0; soSanh < arrNumber.length; soSanh++) {
        if(arrNumber[soSanh] > 0) {
            ketQua++;
        }else if(arrNumber[soSanh] < 0){
            index++;
        }
    }
    if(ketQua > index) {
        soSanh = 'Số dương > số âm';
    }
    else if(ketQua < index) {
        soSanh = 'Số âm < số dương';
    }else {
        soSanh = 'Số âm = số dương';
    }
    //hiển thị giao diện
    document.getElementById('ketQua_b10').innerHTML = soSanh;
}