## Create a new gist

```
POST /gist
```

### Parameters

*Required* parameters

- *description*: Gist description
- *public*: If gist is public (true or false)
- *files*: File objects
  - *file name*: File name
    - *content*: File contents
  
### Results

- 201 - Success created
- 500 - Error

### Example

```javascript
{
  "description": "Some file description",
  "public": true,
  "files":{
    "TestFile.txt":{
      "content":"Some file content"
    }
  }
}
```
```
201 - Created
``` 
