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
                "What's the weather like today?": "I can't fetch real-time weather updates, but you can use a weather app or website for that information.",
                "What's the latest news?": "I don't have access to live news feeds, but you can check news websites or apps for the latest updates.",
                "What is your name?": "I'm a ChatGPT clone, here to assist you with various tasks and questions.",
                "How are you today?": "I'm just a program, but I'm here and ready to help you with anything you need!",
                "What can you do?": "I can answer questions, provide information, help with programming, discuss topics, and more. Just ask!",
                "Tell me a joke.": "Why don't scientists trust atoms? Because they make up everything!",
                "What’s the meaning of life?": "The meaning of life is a philosophical question that has been debated for centuries. Some say it's 42, but it depends on your perspective!",
                "Can you play music?": "I can't play music directly, but I can recommend songs or help you find music online.",
                "Tell me something interesting.": "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!",
                "Can you help me with math?": "Sure! Just give me a math problem, and I'll do my best to solve it.",
                "What’s your favorite color?": "As an AI, I don't have preferences, but blue is often considered a calming and popular color.",
                "How old are you?": "I don't have an age like humans do, but I was created recently to help answer your questions.",
                "What’s your favorite food?": "I don't eat, but I know a lot about different foods and recipes!",
                "Do you like movies?": "I don't watch movies, but I can discuss them with you or recommend some popular ones!",
                "Can you tell me a fun fact?": "Sure! A group of flamingos is called a 'flamboyance.'",
                "What do you think about the future?": "The future is full of possibilities, and with technology advancing rapidly, it's exciting to think about what might come next!",
                "Can you tell me a story?": "Once upon a time, in a world not so different from ours, there was an AI that loved helping people with their questions...",
                "How do I stay motivated?": "Set clear goals, break them down into smaller tasks, and remind yourself why you started. Celebrate small wins along the way!",
                "Can you do my homework?": "I can help you understand your homework and guide you through it, but it's important to try it yourself to learn effectively.",
                "What's your favorite hobby?": "I don't have hobbies, but I can help you find one that's interesting to you!",
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
