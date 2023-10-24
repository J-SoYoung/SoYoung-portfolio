export async function Start(){
	ShowContent('welcome');
}

async function ShowContent(ContentName){
  // fill body
  window.document.body.innerHTML = await (await fetch('/contents/' + ContentName + '.html')).text();

  // // do things
  // switch(ContentName)    {
  //   case 'config':
  //     document.getElementById('loginpage_button').addEventListener('click', EL_Click);
  //     break;
  // }
}