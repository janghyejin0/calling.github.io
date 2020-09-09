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
            //start!
            speechRecognizer.start();

            var finalTranscripts = '';

            //if the voice catched onresult function will start
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
                r.innerHTML=finalTranscripts+'<span style="color:#999">'+interimTranscripts+'</span>';
            };
            speechRecognizer.onerror = function(event){
            };
        }
        else{
            //if browser don't support this function. this message will show in your web
            r.innerHTML ="your browser is not supported. If google chrome. Please upgrade!";
        }
    }
