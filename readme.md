# How use it

## GET Data News

Endpoint : GET /news/

Request Body :

```json
[
  {
    "id": 1,
    "judul": "Testing",
    "deskripsi": "Testing",
    "image_url": "Testing",
    "createdAt": "2023-12-09T19:59:14.000Z",
    "updatedAt": "2023-12-09T19:59:14.000Z"
  },
  {
    "id": 2,
    "judul": "Testing",
    "deskripsi": "Testing",
    "image_url": "Testing",
    "createdAt": "2023-12-09T20:05:07.000Z",
    "updatedAt": "2023-12-09T20:05:07.000Z"
  }
]
```

## GET Spefieced Data News

Endpoint : GET /news/1

Request Body :

```json
{
  "data": {
    "id": 1,
    "judul": "testing",
    "deskripsi": "testing",
    "image_url": "https://storage.googleapis.com/bucket-544e/1702166501667_8395-pepe-cool.png",
    "createdAt": "2023-12-10T00:01:41.000Z",
    "updatedAt": "2023-12-10T00:01:41.000Z"
  }
}
```

## POST Spefieced Data News

Endpoint : POST /news/

Request Body :

```json
{
  "message": "News created successfully",
  "data": {
    "id": 12,
    "judul": "DD",
    "deskripsi": "testing22",
    "image_url": "https://storage.googleapis.com/bucket-544e/1702173250195_8395-pepe-cool.png",
    "updatedAt": "2023-12-10T01:54:11.233Z",
    "createdAt": "2023-12-10T01:54:11.233Z"
  }
}
```
