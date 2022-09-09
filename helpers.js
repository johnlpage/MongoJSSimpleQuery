const singleargops = ['eq','gt','gte','lt','lte','ne',
'not','nor','or','exists','type','expr','jsonSchema',
'mod','text','elemMatch','size','comment','rand','regex']

// Convert op(arg) to { $op : arg }
for(const op of singleargops) {
   global[op] = (value)=>({[`\$${op}`]:value})
}

// Convert op(arg21,arg2,arg3) to { $op : [ arg1,arg2,arg3]}
const multiargops = ['and','or','nin','all']
for(const op of multiargops) {
  global[op] = (...values)=>({[`\$${op}`]:values})
}

global.isin = (...values) =>({$in:values})
