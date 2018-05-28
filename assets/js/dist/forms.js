var phone={value:'',placeholder:'+7 (',validate:{required:{error:'Укажите, пожалуйста, Ваш телефон',},pattern:{reg:/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/,error:'Укажите номер телефона в правильном формате',}}}
var forms=[{id:'s1-form',fields:{'phone-top':phone,},},{id:'modal-form',fields:{'modal-phone':phone,}},{id:'prefooter-form',fields:{'phone-bottom':phone,}},]
var onFieldError=function(f,r){f.removeClass('has-success')
f.addClass('has-error')}
var onSubmitError=function(f,r){f.next().text(r.error)
f.removeClass('has-success')
f.addClass('has-error')}
var onSuccess=function(f){f.next().text('')
f.removeClass('has-error')
f.addClass('has-success')}
var onFormSuccess=function(f){startLoading($(f))
send($(f))}
function startLoading($form){$form.addClass('loading');$form.find('button').prop('disabled',true)}function printSuccess($f,t){$f.html('<span class="message message-success">'+t+'</span>')}function printError($f,t){$f.html('<span class="message message-error">'+t+'</span>')}function send($form){var data=$form.serialize()
data+='&form='+$form.attr('id')
data+='&url='+window.location.search.replace(/&/g,'-_-')
console.log(data)
$.ajax({url:'/backend/send',type:'POST',data:data,context:$form,success:function(response){setTimeout(printSuccess,2000,$(this),response)},error:function(response){setTimeout(printError,2000,$(this),response.responseText)},})}validateUs(forms)