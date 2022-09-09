# MongoJSQimpleQuery
A tiny set of global helper functions to make writing MongoDB Queries in JS easier

## Installation

Copy this code to your .mongoshrc or add these lines to you Node Project (or make an NPM package)

## Usage

This defines functions names the same as the mongodb query operators which simplify how you write, there are two forms
a single argument form and a varadic argument form. 

```js
//Query like this

>name = 'John'
>score = gt(10)
>query =  {name,score}

{ name: 'John', score: { '$gt': 10 } }

//or complex like

>query = or( { name: "john", score: gt(10) }, 
              and ( {name: 'sarah', score: gt(8) }, 
                    {game:'cricket'}) )

{
  '$or': [
    { name: 'john', score: { '$gt': 10 } },
    {
      '$and': [ { name: 'sarah', score: { '$gt': 8 } }, { game: 'cricket' } ]
    }
  ]
}


```
