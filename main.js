var r=document.getElementById('result');

function startConverting ()
{
        //check this browser is chrome or not. because this application supported only in chrome browser

        if('webkitSpeechRecognition'in window){
            //Web speech API Function
            var speechRecognizer = new webkitSpeechRecognition();
            //continuous : you will catch mic only one time or not
            speechRecognizer.continuous = true;
            //interimResults : during capturing the mic you will send results or not
            speechRecognizer.interimResults = true;
            //lang : language (ko-KR : Korean, en-IN : englist)
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
                r.innerHTML=finalTranscripts+'<div style="color:#999">'+interimTranscripts+'</div>';
            };
            speechRecognizer.onerror = function(event){
            };
        }
        else{
            r.innerHTML ="크롬에서만 가능합니다! 크롬으로 접속해주세요.";
        }
    }
