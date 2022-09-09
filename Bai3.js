var a,b;
a = prompt("Nhập số a");
b = prompt("Nhập số b");

a = parseInt(a);
b = parseInt(b);
leftovers = a%b;
document.write("Phần dư chia hai số" + a + "và" + b + "là" + leftovers + "<br/>");