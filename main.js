const users=[
{
  first_name:'Mike',
  last_name:'sheridan'
  },
  {
  first_name:'Tim',
  last_name:'lee'
  },
  {
  first_name:'john',
  last_name:'carte'
  }
  ];
  

  let ans=users.map(function(person){
	
    return (person.first_name+person.last_name);
    });
	console.log(ans);