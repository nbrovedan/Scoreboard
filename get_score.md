## Get ranking of contestants

```
GET /score
```

### Parameters

No parameters
  
### Results

- 200 - OK
- 500 - Error

#### Data
- *scores*: Array of score
  - *contestant*: Number of contestant (1 - 100)
  - *total_penalty*: Sum of times
  - *problems_solved*: Number of solved problems

### Example

```javascript
[
  {
    "contestant": 4,
    "total_penalty": 153,
    "problems_solved": 8
  },
  {
    "contestant": 1,
    "total_penalty": 206,
    "problems_solved": 6
  },
  {
    "contestant": 6,
    "total_penalty": 106,
    "problems_solved": 6
  }
]
```
```
200 - OK
``` 
