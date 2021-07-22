const friendsObj = [
  {id:0, firstName:'Bob', state: 'VA'},
   {id:1, firstName:'Carol', state: 'NC'},
   {id:2, firstName:'Ted', state: 'MA'},
   {id:3, firstName:'Alice', state: 'VA'},
   {id:4, firstName:'Fred', state: 'VA'},
   {id:5, firstName:'Billy', state: 'TX'},
   {id:6, firstName:'Susan', state: 'TX'},
   {id:7, firstName:'Jane', state: 'MI'},
   {id:8, firstName:'Cathy', state: 'MI'},
   {id:9, firstName:'Bob', state: 'SC'}
   
  ]

    // Get an Array containing just the States
    const justFriendStates=friendsObj.map( row=>row.state)
    console.log(justFriendStates)
    // Create unique list and sort
    const uniqueStates = [...new Set(justFriendStates)].sort()
    console.log(uniqueStates)