document.getElementById('userbox').addEventListener("keypress", function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                document.getElementById("send").click();
            }
        });
        var br = document.createElement("br");
        var time = new Date();
        function getime() {
            time = new Date();
        }
        setInterval(getime, 1000)
        var hrs = time.getHours();
        var mins = time.getMinutes();
        if (hrs > 12) {
            hrs = hrs - 12;
        }

        var c = document.getElementById("cardinitial")
        function talk() {
            var know = {
                "who are you": "Hello! , this is chatGPT by GO.. 😎",
                "how are you": "I am fine !! , how About you..😉",
                "ok": "thanku for chat..😍",
                "hello": "Hey! buddy whats up..⭐",
                "thank you": "welcome,happy learning..💕",
                "what are you doing": "I'm thinking about you...😊",
                "what is my name": "sorry! I dont know your name?",
                "are you married": "adhi neku anavsaram..🤨",
                "are you male or female": "none of your business😐",
                "time": hrs + ":" + mins + "⏲️",
                "what is the time now": hrs + ":" + mins + "⏲️",
                "what is the time": hrs + ":" + mins + "⏲️",
                "what is the date": time.getDate() + "/" + time.getMonth() + "/" + time.getFullYear() + "⏲️",
                "what is your name": "my name is CHATGPT created by gowtham...😍",
                "where are you from": "I'm from the folder of some of the projects of gowtham..😎",
                "what is your purpose": "I am here to solve your problems✅",
                "can you help me": "offcourse I will help you😊",
                "what is the meaning of life": "life is a comination of ups and downs😉 you need to survive",
                "who won the last match": "I didn't see the last match sorry..🤕",
                "what is the capital of india": "delhi",
                "can you tell me a joke": "yes, you can ask me like 'tell me a joke' ",
                "tell me a joke": "you are so handsome😁",

            };
            var user = document.getElementById('userbox').value.toLowerCase();

            var div = document.createElement("div");
            var newquery = document.createElement("h3");
            var newpara = document.createElement("h1");

            var newtext = document.createTextNode("")


            if (user in know) {
                cardinitial.innerHTML = ""

                var newqtxt = document.createTextNode(user + "(" + hrs + ":" + mins + ":" + time.getSeconds() + ")");
                newquery.appendChild(newqtxt);
                div.appendChild(newquery);
                document.getElementById('newchat').appendChild(div);


                var newtext = document.createTextNode(know[user]);
                newpara.appendChild(newtext);
                div.appendChild(newpara);
                document.getElementById('newchat').appendChild(div);

                div.classList.add("newdiv");

            }

            else {
                cardinitial.innerHTML = ""
                var newqtxt = document.createTextNode(user + "(" + hrs + ":" + mins + ":" + time.getSeconds() + ")");
                newquery.appendChild(newqtxt);
                div.appendChild(newquery);
                document.getElementById('newchat').appendChild(div);
                var newtext = document.createTextNode("Sorry! I didn't uderstand..");
                newpara.appendChild(newtext);
                div.appendChild(newpara);
                document.getElementById('newchat').appendChild(div);
                div.classList.add("newdiv");
            }
        }
        document.getElementById('newchat').appendChild(br);
        var menu = document.getElementById('menu');
        var close = document.getElementById('close');
        menu.addEventListener("click", function (e) {
            e.preventDefault();
            var x = document.querySelector('.toggle');
            x.style.left = "16px";
            menu.style.left = "230px";
            menu.style.display = "none";
            close.style.display = "block";
            close.style.left = "220px";
        });
        close.addEventListener("click", function (e) {
            e.preventDefault();
            var x = document.querySelector('.toggle');
            x.style.left = "-254px";
            close.style.left = "0px";
            close.style.display = "none";
            menu.style.display = "block";
            menu.style.left = "0px";
        });