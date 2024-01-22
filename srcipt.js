function CheckEmail()
{
    var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var email = document.getElementById('email').value;
    if (!emailRegex.test(email))
    {
        document.getElementById('ttemail').innerHTML = 'Email không hợp lệ!';
        document.getElementById('ttemail').style.color = 'red';
        return false;
    }
    else
    {
        document.getElementById('ttemail').innerHTML = '';
        return true;
    }
}


function CheckName()
{
    var nameRegex = /^[a-zA-Z\s]{5,20}$/;
    var name = document.getElementById('name').value;
    if (!nameRegex.test(name))
    {
        document.getElementById('ttname').innerHTML = 'Họ tên không được viết dấu hoặc kí tự đặc biệt';
        document.getElementById('ttname').style.color = 'red';
        return false;
    }
    else
    {
        document.getElementById('ttname').innerHTML = '';
        return true;
    }

}

function CheckSdt()
{
    var phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    var phone = document.getElementById('sdt').value;
    if (!phoneRegex.test(phone))
    {
        document.getElementById('ttsdt').innerHTML = 'Số điện thoại không hợp lệ';
        document.getElementById('ttsdt').style.color = 'red';
        return false;
    }
    else
    {
        document.getElementById('ttsdt').innerHTML = '';
        return true;
    }

}

function CheckUser()
{
    var userRegex = /^[a-zA-Z0-9_]{3,16}$/;
    var user = document.getElementById('username').value;
    if (!userRegex.test(user))
    {
        document.getElementById('ttdn').innerHTML = 'Tên đăng nhập không hợp lệ!';
        document.getElementById('ttdn').style.color = 'red';
        return false;
    }
    else
    {
        document.getElementById('ttdn').innerHTML = '';
        return true;
    }

}


function CheckMK()
{
    var passWordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var pass = document.getElementById('password').value;
    if (!passWordRegex.test(pass))
    {
        document.getElementById('ttmk').innerHTML = 'Độ bảo mật của mật khẩu thấp';
        document.getElementById('ttmk').style.color = 'red';
        return false;
    }
    else
    {
        document.getElementById('ttmk').innerHTML = '';
        return true;
    }

}

function CheckCP()
{
    var pass = document.getElementById('password').value;
    var cpass = document.getElementById('CPassword').value;
    
    if (pass != cpass)
    {
        document.getElementById('ttnlmk').innerHTML = 'Xác nhận mật khẩu không chính xác';
        document.getElementById('ttnlmk').style.color = 'red';
        return false;
    }
    else
    {
        document.getElementById('ttnlmk').innerHTML = '';
        return true;
    }

}

function Showpass()
{
    var x = document.getElementById('password');
    var x2 = document.getElementById('CPassword');

    if (x.type == "password")
    x.type = "text";
if (x2.type == "password")
    x2.type = "text";
else {
    x.type = "password";
    x2.type = "password";
}
}

function CheckDK()
{
    if (CheckEmail() &&
    CheckName() &&
    CheckSdt() &&
    CheckUser()&&
    CheckMK()&&
    CheckCP())

    return true;
    return false;
}

function DangKy()
{
    if (CheckDK())
    {
        window.alert('Đăng kí tài khoản thành công');
         window.location.href = './index2.html';
    }
    else
    {
        window.alert('vui lòng nhập đầy đủ thông tin');
    }
}


