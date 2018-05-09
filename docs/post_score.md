## Send case solutions

```
POST /score
```

### Parameters

*Required* parameters

- *case*: Number of case
- *solutions*: Array of solution
  - *contestant*: Number of contestant (1 - 100)
  - *problem*: Number of problem (1 - 9)
  - *time*: Number of minutes
  - *type*: Type of solution (C - Correct, I - Incorrect, R - Clarification Request, U - Unjudged, E - Erroneous Submission)
  
### Results

- 201 - Success created
- 500 - Error

### Example

```javascript
{
  "case":1,
  "solutions":[
    {
      "contestant":1,
      "problem":2,
      "time":10,
      "type":"I"
    },
    {
      "contestant":1,
      "problem":1,
      "time":15,
      "type":"C"
    }
  ]
}
```
```
201 - Created
``` 
