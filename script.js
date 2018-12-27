var title = document.createElement("h1");
title.innerHTML = "Ibis on the Radio";
document.body.appendChild(title);
var para1 = document.createElement("p");
para1.innerHTML = "Yesterday I was on a fun adventure visiting a Radio Station.  This was amazing!  I never had been in such a cool room full of sound equipment of such high quality.  My friend Ana Ruiz, invited me to be on her show Analytical Beat, and I was at the radio station called Jolt Radio.";
document.body.appendChild(para1);
title.style.color = "blue";
var pic = document.createElement("img");
pic.src = "ibismicrophone.jpg";
document.body.appendChild(pic);
pic.style.width = "300px";
var para2 = document.createElement("p");
var para2Text = document.createTextNode("The show was about eCommerce, and I shared the microphone with some employees from the company named Daily Steals. They are an online store that sells items for WAY lower then the price that you see it at other sites.  But the products are only available for a limited time, and you have to get them while they are hot.  Genius!");
para2.appendChild(para2Text);
document.body.appendChild(para2);
var link = document.createElement("a");
link.href = "https://www.facebook.com/AnalyticalBeat/videos/2243350782591242/"
link.innerHTML = "To see the episode, click here.";
document.body.appendChild(link);



