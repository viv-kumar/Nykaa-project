// var dataArr=[{
//     productImage:"https://honasa-mamaearth-production.imgix.net/u/b/ubtan_scurb_wash_u8j8uwoqnpyohxlf.jpg",
//     productName:"MamaEarth Utban Face Wash",
//     quantity: 2,
//     property:50+"ml",
//     sellPrice:"₹"+1800,
//     actualPrice:"₹"+600,
// },
// {
//     productImage:"https://cdn.shopify.com/s/files/1/0272/4714/9155/products/himalaya-men-intense-oil-clear-lemon-face-wash-100ml_1024x1024.jpg?v=1627641338",
//     productName:"Himalya Men Face Wash",
//     quantity: 1,
//     property:50+"ml",
//     sellPrice:"₹"+1000,
//     actualPrice:"₹"+600,
// }
// ]
// var calcObj={
// totalQuantity:2,
// subTotal:"₹"+1200,
// shipping:"Free",
// discount:"₹"+0,
// grandTotal:"₹"+1200,
// }

var dataArr=JSON.parse(localStorage.getItem("cartProducts"))||[];
// console.log(dataArr);

calcObjtotalQuantity=dataArr.reduce(function(acc,elem){
    console.log("Hello")
    return Number(acc)+Number(elem.qty);
    
},0);


calcObjsubTotal=dataArr.reduce(function(acc,elem){
    console.log(acc+" "+elem.price)
    return Number(acc)+Number(elem.price);
    
},0);
var coupen=localStorage.getItem("couponApplied")||0;
var dis=0;
if(coupen==1){
dis=((calcObjsubTotal)*10)/100;
}
calcObjdiscount=dis;
 calcObjgrandTotal=calcObjsubTotal-dis;
// console.log(calcObjgrandTotal)
// console.log(calcObjdiscount)
// console.log(calcObjsubTotal)



//"₹"
var pTopLeft=document.createElement("p");
pTopLeft.innerText=calcObjtotalQuantity+" Items in your Bag";
pTopLeft.setAttribute("id","pTopLeft");
 var pTopRight =document.createElement("p");
 pTopRight.innerText="EDIT";
 pTopRight.setAttribute("id","pTopRight")
 document.getElementById("top").append(pTopLeft,pTopRight);
 console.log(pTopLeft,pTopRight,calcObjtotalQuantity)
 
    dataArr.map(function(elem){
        var mainDiv=document.createElement("div");
        mainDiv.setAttribute("id","mainDiv");
        var imageDiv=document.createElement("div");
        var image =document.createElement("img");
        image.setAttribute("id","pdImage");
        image.setAttribute("alt",elem.name);
        image.setAttribute("src",elem.image);
        imageDiv.setAttribute("id","imageDiv");
        var desDiv=document.createElement("div");
        desDiv.setAttribute("id","desDiv");
        var div1=document.createElement("div");
        var p1=document.createElement("p");
        p1.innerText=elem.name;
        div1.setAttribute("id","div1");
        var div2=document.createElement("div");
        div2.setAttribute("id","div2");
        div2.innerText="";
        var div3=document.createElement("div");
        div3.setAttribute("id","div3");
       var p31=document.createElement("p");
       p31.innerText="QTY : "+elem.qty;
       p31.setAttribute("id","p31");
       
        var p32=document.createElement("p");
       p32.innerText=elem.price;
       p32.setAttribute("id","p32");
       div3.append(p31,p32);
       div1.append(p1);
       desDiv.append(div1,div2,div3);
       imageDiv.append(image);
       mainDiv.append(imageDiv,desDiv);
       document.getElementById("mid").append(mainDiv);


       
    })
 
 var pb11=document.createElement("p");//1
 pb11.innerText="Sub Total";
 pb11.setAttribute("id","pb11");
 var pb12=document.createElement("p");
 pb12.innerText=calcObjsubTotal;
 pb12.setAttribute("id","pb12");
 document.getElementById("divb1").append(pb11,pb12);
 var pb21=document.createElement("p");//2
 pb21.innerText="Shipping Charge";
 pb21.setAttribute("id","pb21");
 var pb22=document.createElement("p");
 pb22.innerText="Free";
 pb22.setAttribute("id","pb22");
 document.getElementById("divb2").append(pb21,pb22);
 var pb31=document.createElement("p");//3
 pb31.innerText="Discount";
 pb31.setAttribute("id","pb31");
 var pb32=document.createElement("p");
 pb32.innerText="-"+calcObjdiscount;
 console.log(calcObjdiscount)
 pb32.setAttribute("id","pb32");
 document.getElementById("divb3").append(pb31,pb32);
 var pb41=document.createElement("p");//4
 pb41.innerText="Grand Total";
 pb41.setAttribute("id","pb41");
 var pb42=document.createElement("p");
 pb42.innerText=calcObjgrandTotal;
 pb42.setAttribute("id","pb42");
 document.getElementById("divb4").append(pb41,pb42);


 var emailinput=localStorage.getItem("registeredId")||"";
 document.getElementById("email").value=emailinput;

document.querySelector("form").addEventListener("submit",order);
function order(){
    event.preventDefault();
    document.location.href="../paymentpage/payment.html";
    var name=document.getElementById("name").value;
    
     var number=document.getElementById("number").value;
     var pincode=document.getElementById("pincode").value;
     var address=document.getElementById("address").value;
    var countryadd=document.getElementById("select").value;
     var addressObj={
        username:name,
        userNumber:number,
        userAddress:address,
        userPincode:pincode,
        countryName:countryadd
       
    }
     localStorage.setItem("shipaddress",JSON.stringify(addressObj));
     console.log( addressObj);
}
