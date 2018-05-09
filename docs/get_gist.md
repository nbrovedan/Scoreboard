## Get gist comments

```
GET /gist/{id}
```

### Parameters

*Required* parameters

- *id*: Gist ID

### Results

- 200 - OK
- 500 - Error

#### Data
- *comments*: Array of comments
  - *id*: Comment id
  - *url*: URL to the comment
  - *user*: Object of the user comment owner
  - *created_at*: Creation date
  - *updated_at*: Update date

### Example

```javascript
[
  {
    "id": 1,
    "url": "https://api.github.com/gists/a6db0bec360bb87e9418/comments/1",
    "body": "Just commenting for the sake of commenting",
    "user": {Object of user},
    "created_at": "2011-04-18T23:23:56Z",
    "updated_at": "2011-04-18T23:23:56Z"
  }
]
```
200 - OK
``` 
