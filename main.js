var r=document.getElementById('result');

function startConverting ()
{
        //check this browser is chrome or not. because this application supported only in chrome browser

        if('webkitSpeechRecognition'in window){
            var speechRecognizer = new webkitSpeechRecognition();
            speechRecognizer.continuous = true;
            //interimResults : during capturing the mic you will send results or not
            speechRecognizer.interimResults = true;
            speechRecognizer.lang="ko-KR";

            speechRecognizer.start();

            var finalTranscripts = '';

            speechRecognizer.onresult=function(event){
                var interimTranscripts='';
                for(var i=event.resultIndex; i < event.results.length; i++)
                {
                    var transcript=event.results[i][0].transcript;
                    transcript.replace("\n","<br>");

                    //isFinal : if speech recognition is finished, isFinal = true
                    if(event.results[i].isFinal){
                        finalTranscripts+=transcript;
                    }
                    else{
                        interimTranscripts+=transcript;
                    }
                }
                //insert into HTML
                r.innerHTML='<div style="text-shadow: 2px 2px 2px green; top:100px; font-style: italic; color:##3D56C0;"><font size = 4>'+finalTranscripts+'</div>'+'<div style="color:##3D56C0; text-shadow: 2px 2px 2px green; font-style: italic; top:200px;"><font size = 4>'+interimTranscripts+'</div>'+'<img src="https://source.unsplash.com/random/200×250/?cat">';

            };
            speechRecognizer.onerror = function(event){
            };
        }
        else{
            r.innerHTML ="크롬에서만 가능합니다! 크롬으로 접속해주세요.";
        }
    }
