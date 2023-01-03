Search.setIndex({docnames:["batch_client","client","exceptions","helpers","index","models"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["batch_client.rst","client.rst","exceptions.rst","helpers.rst","index.rst","models.rst"],objects:{"speechmatics.batch_client":[[0,1,1,"","BatchClient"]],"speechmatics.batch_client.BatchClient":[[0,2,1,"","check_job_status"],[0,2,1,"","close"],[0,2,1,"","connect"],[0,2,1,"","delete_job"],[0,2,1,"","get_job_result"],[0,2,1,"","list_jobs"],[0,2,1,"","send_request"],[0,2,1,"","submit_job"],[0,2,1,"","wait_for_completion"]],"speechmatics.client":[[1,1,1,"","WebsocketClient"]],"speechmatics.client.WebsocketClient":[[1,2,1,"","add_event_handler"],[1,2,1,"","add_middleware"],[1,2,1,"","get_language_pack_info"],[1,2,1,"","run"],[1,2,1,"","run_synchronously"],[1,2,1,"","stop"],[1,2,1,"","update_transcription_config"]],"speechmatics.exceptions":[[2,3,1,"","EndOfTranscriptException"],[2,3,1,"","ForceEndSession"],[2,3,1,"","JobNotFoundException"],[2,3,1,"","TranscriptionError"]],"speechmatics.helpers":[[3,4,1,"","del_none"],[3,4,1,"","json_utf8"],[3,4,1,"","read_in_chunks"]],"speechmatics.models":[[5,1,1,"","AudioSettings"],[5,1,1,"","BatchSpeakerDiarizationConfig"],[5,1,1,"","BatchTranscriptionConfig"],[5,1,1,"","ClientMessageType"],[5,1,1,"","ConnectionSettings"],[5,1,1,"","FetchData"],[5,1,1,"","NotificationConfig"],[5,1,1,"","RTSpeakerDiarizationConfig"],[5,1,1,"","SRTOverrides"],[5,1,1,"","ServerMessageType"],[5,1,1,"","TranscriptionConfig"],[5,1,1,"","_TranscriptionConfig"]],"speechmatics.models.AudioSettings":[[5,5,1,"","chunk_size"],[5,5,1,"","encoding"],[5,5,1,"","sample_rate"]],"speechmatics.models.BatchSpeakerDiarizationConfig":[[5,5,1,"","speaker_sensitivity"]],"speechmatics.models.BatchTranscriptionConfig":[[5,5,1,"","channel_diarization_labels"],[5,5,1,"","fetch_data"],[5,5,1,"","notification_config"],[5,5,1,"","speaker_diarization_config"],[5,5,1,"","srt_overrides"]],"speechmatics.models.ClientMessageType":[[5,5,1,"","AddAudio"],[5,5,1,"","EndOfStream"],[5,5,1,"","SetRecognitionConfig"],[5,5,1,"","StartRecognition"]],"speechmatics.models.ConnectionSettings":[[5,5,1,"","auth_token"],[5,5,1,"","generate_temp_token"],[5,5,1,"","message_buffer_size"],[5,5,1,"","ping_timeout_seconds"],[5,5,1,"","semaphore_timeout_seconds"],[5,5,1,"","ssl_context"],[5,5,1,"","url"]],"speechmatics.models.FetchData":[[5,5,1,"","auth_headers"],[5,5,1,"","url"]],"speechmatics.models.NotificationConfig":[[5,5,1,"","auth_headers"],[5,5,1,"","contents"],[5,5,1,"","method"],[5,5,1,"","url"]],"speechmatics.models.RTSpeakerDiarizationConfig":[[5,5,1,"","max_speakers"]],"speechmatics.models.SRTOverrides":[[5,5,1,"","max_line_length"],[5,5,1,"","max_lines"]],"speechmatics.models.ServerMessageType":[[5,5,1,"","AddPartialTranscript"],[5,5,1,"","AddTranscript"],[5,5,1,"","AudioAdded"],[5,5,1,"","EndOfTranscript"],[5,5,1,"","Error"],[5,5,1,"","Info"],[5,5,1,"","RecognitionStarted"],[5,5,1,"","Warning"]],"speechmatics.models.TranscriptionConfig":[[5,5,1,"","enable_partials"],[5,5,1,"","max_delay"],[5,5,1,"","max_delay_mode"],[5,5,1,"","speaker_change_sensitivity"],[5,5,1,"","speaker_diarization_config"]],"speechmatics.models._TranscriptionConfig":[[5,5,1,"","additional_vocab"],[5,2,1,"","asdict"],[5,5,1,"","diarization"],[5,5,1,"","domain"],[5,5,1,"","enable_entities"],[5,5,1,"","language"],[5,5,1,"","operating_point"],[5,5,1,"","output_locale"],[5,5,1,"","punctuation_overrides"]],speechmatics:[[0,0,0,"-","batch_client"],[1,0,0,"-","client"],[2,0,0,"-","exceptions"],[3,0,0,"-","helpers"],[5,0,0,"-","models"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","exception","Python exception"],"4":["py","function","Python function"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:exception","4":"py:function","5":"py:attribute"},terms:{"1":5,"100":0,"120":5,"2":5,"37":5,"404":0,"4096":5,"44100":5,"512":5,"5646":5,"60":5,"639":5,"7":0,"9000":[1,4],"boolean":1,"byte":[0,3,5],"class":[0,1,5],"default":0,"final":5,"float":5,"function":[1,3],"import":4,"int":[3,5],"new":1,"return":[0,1,3,5],"true":[0,5],"while":5,A:[1,3,5],For:[0,1],If:1,It:0,The:[1,4,5],_transcriptionconfig:5,accept:[0,5],access:4,acknowledg:5,acoust:5,ad:[1,5],add:[1,5],add_event_handl:[1,4],add_middlewar:1,addaudio:[1,5],addit:5,additional_vocab:5,addpartialtranscript:5,addtranscript:[1,4,5],advanc:5,after:5,afterward:0,alia:0,all:[0,1,3,5],allow:5,also:0,alter:1,an:[0,1,2,4,5],ani:[0,1,5],api:[0,1,4],applianc:0,applic:5,ar:[0,1,3,5],arg:1,argument:1,as_config:5,asdict:5,asr:[0,1],associ:0,async:[1,3],asynchron:1,asyncio:1,asynciter:3,attach:5,au:5,audio:[0,1,3,4,5],audio_set:1,audioad:5,audioset:[1,4,5],auth:5,auth_head:5,auth_token:[0,5],authent:5,author:5,automat:5,avail:5,base:[1,5],batch:[0,4,5],batch_client:4,batchclient:0,batchspeakerdiarizationconfig:5,batchtranscriptionconfig:[0,5],bearer:5,becom:5,been:[1,5],begin:1,being:[1,4],below:4,best:1,binari:1,block:[0,1],bool:[0,1,5],buffer:5,call:1,callabl:1,callback:[1,5],caller:1,can:[1,2,5],cancel:0,chang:[3,5],channel:5,channel_diarization_label:5,charact:5,check:0,check_job_statu:0,chunk:[3,5],chunk_siz:[3,5],clean:0,cli:4,client:[0,4,5],clientmessagetyp:5,close:0,code:5,collect:3,complet:[0,5],conf:4,config:[0,1,5],configur:[0,1,5],confirm:5,conjunct:1,conn:4,connect:[0,1,4,5],connection_set:[0,1],connectionset:[0,1,4,5],consum:1,content:5,context:[0,5],copi:1,count:5,creat:[0,4],custom:5,dai:0,data:[1,3,5],decor:3,def:4,defin:[4,5],del_non:3,delai:5,delet:[0,3],delete_job:0,detect:5,determin:5,diariz:5,dict:[0,1,3,5],dictionari:3,directli:0,doc:1,doe:0,domain:5,don:1,e:[0,1,5],each:3,earli:2,eg:5,en:[1,4,5],enabl:5,enable_ent:5,enable_parti:5,encod:5,end:[1,2,5],endofstream:5,endoftranscript:5,endoftranscriptexcept:2,endpoint:[0,5],enforc:5,enterpris:5,entiti:5,entri:3,error:[0,2,5],event:[1,2,4],event_handl:[1,4],event_nam:[1,4],everi:1,exampl:[1,5],exceed:[1,5],except:[0,1,4],exclud:5,exist:0,expos:1,f:4,factori:5,fail:0,fals:[0,5],fetch:5,fetch_data:5,fetchdata:5,field:1,file:[0,1,3,4,5],filenam:0,financ:5,finish:[1,2,5],first:1,fix:5,flexibl:5,forc:[0,2],forceendsess:2,forcefulli:1,format:[0,5],found:[0,2],from:[1,2,3,5],func:3,g:[0,5],gener:5,generate_temp_token:5,get:1,get_job_result:0,get_language_pack_info:1,github:4,given:1,ha:[1,2,5],handl:[0,1],handler:[1,2,4],header:5,helper:4,hertz:5,html:1,http:[0,1,5],httperror:0,httpx:0,i:1,id:[0,2,5],ignor:5,illustr:4,immedi:5,impli:1,includ:[1,5],incom:1,incomplet:5,index:4,indic:[1,2,5],info:5,inform:1,initi:[4,5],input:[3,5],instanti:1,intend:5,interact:1,interfac:[0,1],invalid:0,invers:5,io:[1,3],iobas:[1,3],iso:5,item:5,job:[0,2,5],job_id:0,jobnotfoundexcept:[0,2],json:[0,3,5],json_utf8:3,just:1,kwarg:[0,1,5],label:5,lambda:1,languag:[1,4,5],language_pack_info:1,last:0,latest:1,length:3,level:5,librari:[0,1,2,3,5],like:[1,3],line:5,list:[0,1,5],list_job:0,list_of_job:0,localhost:[1,4],mai:[0,1,5],manag:[0,1],manifest:1,mark:5,max_delai:5,max_delay_mod:5,max_lin:5,max_line_length:5,max_sample_s:3,max_speak:5,maximum:[3,5],mean:5,messag:[1,5],message_buffer_s:5,metadata:4,method:[0,3,5],middlewar:[1,2],mode:5,model:[0,1,4],modul:4,more:5,most:1,msg:[1,4],mulaw:5,multipl:[3,5],must:[0,5],n:5,name:[1,5],need:1,new_transcription_config:1,non:5,none:[0,1,3,4,5],normal:5,notif:5,notification_config:5,notificationconfig:5,number:5,oauth2:5,object:[0,1,3],onli:[1,5],open:[0,4],operating_point:5,optim:5,option:[0,5],order:2,os:0,other:0,out:1,outgo:1,output:[3,5],output_local:5,overriden:5,own:5,pack:[1,5],page:4,paramet:[0,1,3,4,5],part:5,partial:5,particular:1,pass:[0,1],path:0,pathlik:0,pcm_f32le:5,pcm_s16le:5,per:5,permit:5,ping:5,ping_timeout_second:5,place:3,pleas:4,pong:5,pool:0,possibl:1,post:5,potenti:5,prefer:1,previous:[0,5],print:[1,4],print_transcript:4,probabl:1,process:1,produc:[1,5],producer_consum:1,provid:4,puctuat:5,punctuat:5,punctuation_overrid:5,put:5,queri:5,rais:[0,1,2,3],rate:5,raw:5,rb:4,re:[1,5],read:[1,3],read_in_chunk:3,readm:4,readthedoc:1,real:[1,5],realtim:4,receipt:5,receiv:1,recognit:[1,5],recognitionstart:[1,5],recurs:[3,5],refer:1,regist:4,request:[0,5],requir:0,respond:1,respons:[0,5],rest:0,result:[0,1],rfc:5,rt:5,rtspeakerdiarizationconfig:5,run:[0,1],run_synchron:[1,4],s:[3,5],saa:[0,5],sampl:[4,5],sample_r:5,search:4,second:[1,5],section:5,see:4,semaphor:5,semaphore_timeout_second:5,send:[0,5],send_request:0,sensit:5,sent:[1,5],sequenc:3,server:[1,5],servermessagetyp:[1,4,5],session:[1,2,5],set:[0,1,5],setrecognitionconfig:[1,5],should:[1,5],simpl:1,singl:5,size:[3,5],sourc:[0,1,2,3,5],space:5,speaker:5,speaker_change_sensit:5,speaker_diarization_config:5,speaker_sensit:5,specif:5,specifi:5,srt:[0,5],srt_overrid:5,srtoverrid:5,ssl:5,ssl_context:[4,5],sslcontext:5,standard:5,start:5,startrecognit:5,statu:[0,5],still:0,stop:1,str:[0,1,5],stream:[1,3,5],submit:0,submit_job:0,subset:1,subtitl:5,successfulli:5,suppli:5,support:5,synchron:1,t:1,task:1,temporari:5,termin:0,text:5,than:0,thei:[1,5],thi:[0,1,3,5],threshold:5,time:[1,5],timeout:[1,5],timeouterror:1,token:[0,5],transcrib:4,transcript:[0,1,2,4,5],transcription_config:[0,1],transcription_format:0,transcriptionconfig:[1,4,5],transcriptionerror:[0,2],tupl:0,turn:3,txt:0,type:[0,1,3,5],union:0,unset:0,until:[0,1,5],up:0,updat:1,update_transcription_config:1,url:[0,1,4,5],us:[0,1,2,3,5],user:[1,2],util:3,v2:[0,1,4],valid:[0,1],valu:[3,5],valueerror:[1,3],variou:5,via:1,vocabulari:5,wa:[2,3],wai:1,wait_for_complet:0,warn:5,wav:4,waveform:4,we:[0,1],websocket:[1,5],websocketcli:[1,4],when:[0,1,5],where:[3,5],whether:[1,5],which:[0,1,3,5],white:5,within:[0,5],word:5,would:5,wrap:5,wrapper:[0,1,4],ws:4,wss:1,yet:1,yield:3,you:[0,1],your:5},titles:["speechmatics.batch_client","speechmatics.client","speechmatics.exceptions","speechmatics.helpers","speechmatics-python","speechmatics.models"],titleterms:{batch_client:0,client:1,command:4,exampl:4,except:2,helper:3,indic:4,librari:4,line:4,model:5,python:4,refer:4,speechmat:[0,1,2,3,4,5],tabl:4,usag:4}})