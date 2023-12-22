# How use it

## GET Data News

Endpoint : GET /news/

Response :

```json
{
  "success": true,
  "message": "Data successfully Displayed",
  "data": [
    {
      "id": 1,
      "judul": "Gerkatin Solo, Komunitas yang Mengajarkan Bahasa Isyarat untuk Semua Orang",
      "deskripsi": "Dummy",
      "image_url": "https://storage.googleapis.com/bucket-544e/7318e988-e439-487b-bd80-d290c25f0dfb.png",
      "createdAt": "2023-12-21T00:22:25.000Z",
      "updatedAt": "2023-12-21T00:22:25.000Z"
    }
  ]
}
```

## GET Detail News

Endpoint : GET /news/1/

Response :

```json
{
  "success": true,
  "message": "Data successfully Displayed",
  "data": {
    "id": 1,
    "judul": "Gerkatin Solo, Komunitas yang Mengajarkan Bahasa Isyarat untuk Semua Orang",
    "deskripsi": "Dummy",
    "image_url": "https://storage.googleapis.com/bucket-544e/7318e988-e439-487b-bd80-d290c25f0dfb.png",
    "createdAt": "2023-12-21T00:22:25.000Z",
    "updatedAt": "2023-12-21T00:22:25.000Z"
  }
}
```

## GET Data Modules

Endpoint : GET /modules/

Response :

```json
{
  "success": true,
  "message": "Data successfully Displayed",
  "data": [
    {
      "id": 1,
      "huruf": "A",
      "deskripsi": "Form the letter \"A\" by extending your thumb and index finger and keeping the other fingers closed.",
      "image_url": "https://storage.googleapis.com/bucket-544e/asl-letter-A.svg",
      "createdAt": "2023-12-14T12:15:35.000Z",
      "updatedAt": "2023-12-14T12:15:35.000Z"
    }
  ]
}
```

## GET Data Modules with Pagination

Endpoint : GET /modules/A-B/

Response :

```json
{
  "success": true,
  "dataAlpha": [
    {
      "id": 1,
      "huruf": "A",
      "deskripsi": "Form the letter \"A\" by extending your thumb and index finger and keeping the other fingers closed.",
      "image_url": "https://storage.googleapis.com/bucket-544e/asl-letter-A.svg",
      "createdAt": "2023-12-14T12:15:35.000Z",
      "updatedAt": "2023-12-14T12:15:35.000Z"
    },
    {
      "id": 2,
      "huruf": "B",
      "deskripsi": "Create the letter \"B\" by forming a fist with your thumb extended and the other fingers closed.",
      "image_url": "https://storage.googleapis.com/bucket-544e/asl-letter-B.svg",
      "createdAt": "2023-12-14T12:15:35.000Z",
      "updatedAt": "2023-12-14T12:15:35.000Z"
    }
  ]
}
```

## GET Data Modules Details

Endpoint : GET /modules/detail/A/

Response :

```json
{
  "success": true,
  "detailAlpha": {
    "id": 1,
    "huruf": "A",
    "deskripsi": "Form the letter \"A\" by extending your thumb and index finger and keeping the other fingers closed.",
    "image_url": "https://storage.googleapis.com/bucket-544e/asl-letter-A.svg",
    "createdAt": "2023-12-14T12:15:35.000Z",
    "updatedAt": "2023-12-14T12:15:35.000Z"
  }
}
```

## POST Predictions Sign Hand

Endpoint : POST /exercises/predict/

Response :

```json
{
  "success": true,
  "detailAlpha": {
    "id": 1,
    "huruf": "A",
    "deskripsi": "Form the letter \"A\" by extending your thumb and index finger and keeping the other fingers closed.",
    "image_url": "https://storage.googleapis.com/bucket-544e/asl-letter-A.svg",
    "createdAt": "2023-12-14T12:15:35.000Z",
    "updatedAt": "2023-12-14T12:15:35.000Z"
  }
}
```
