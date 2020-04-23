# e-commerce
A simple e-commerce app.

Link to app: https://ecommerce-customer-91516.web.app/

### Restfull API

---
#### POST /register
###### customer register
- Request Body:
```
{
	"email": < user email >,
	"password":< password >
}
```

- Request Header:
```
	not needed
```

- Response ( 201 - automatically login ):
```
{
    "access_token": <access_token>,
    "email": < user email >
}
```


- Error Response ( 400 - Email already exist ) :
```
{
    "message": "Email already exist"
}
```

- Error Response ( 500 - Internal server error ):
```
{
    "message": "Internal server error"
}
```

---
#### POST /login
###### customer login
- Request Body:
```
{
	"email": < user email >,
	"password":< password >
}
```

- Request Header:
```
	not needed
```

- Response ( 200 - automatically login ):
```
{
    "access_token": <access_token>,
    "email": < user email >
}
```


- Error Response ( 400 - Email already exist ) :
```
{
    "message": "Email already exist"
}
```

- Error Response ( 500 - Internal server error ):
```
{
    "message": "Internal server error"
}
```

---
#### GET /
###### get all product
- Request Body:
```
	not needed
```

- Request Header:
```
	"access_token": <acess_token>
```

- Response ( 200 - get products ):
```
[
    {
        "id": <id>,
        "name": <product_name>,
        "image_url": <image_url>,
        "price": <price>,
        "stock": <stock>,
        "category": <category>,
        "description": <description>
    },
    {
        "id": <id>,
        "name": <product_name>,
        "image_url": <image_url>,
        "price": <price>,
        "stock": <stock>,
        "category": <category>,
        "description": <description>
    }
]
```

- Error Response ( 500 - Internal server error ):
```
{
    "message": "Internal server error"
}
```

---
#### GET /cart
###### get cart data
- Request Body:
```
	not needed
```

- Request Header:
```
{
    "access_token": <access_token>
}
```

- Response ( 200 - get cart ):
```
{
    "id": <id>,
    "email": <email>,
    "password": <password>,
    "createdAt": "2020-04-21T16:25:17.900Z",
    "updatedAt": "2020-04-21T16:25:17.900Z",
    "Carts": [
        {
            "id": <id>,
            "CustomerId": <customer_id>,
            "ProductId": <product_id>,
            "amount": <amount>,
            "createdAt": <created_date>,
            "updatedAt": <updated_date>,
            "Product": {
                "id": <id>,
                "name": <product_name>,
                "image_url": <image_url>,
                "price": <price>,
                "stock": <stock>,
                "category": <category>,
                "description": <description>,
                "AdminId": <admin_id>,
                "createdAt": <created_date>,
                "updatedAt": <updated_date>
            }
        },
        {
            "id": <id>,
            "CustomerId": <customer_id>,
            "ProductId": <product_id>,
            "amount": <amount>,
            "createdAt": <created_date>,
            "updatedAt": <updated_date>,
            "Product": {
                "id": <id>,
                "name": <product_name>,
                "image_url": <image_url>,
                "price": <price>,
                "stock": <stock>,
                "category": <category>,
                "description": <description>,
                "AdminId": <admin_id>,
                "createdAt": <created_date>,
                "updatedAt": <updated_date>
            }
        }
    ]
}
```

- Error Response ( 404 - Token not found ):
```
{
    "message": "Token not found"
}
```

- Error Response ( 500 - Internal server error ):
```
{
    "message": "Internal server error"
}
```


---
#### POST /cart/add
###### add to cart
- Request Body:
```
{
	"ProductId" : <product_id>,
	"amount": <amount>
}
```

- Request Header:
```
{
    "access_token": <access_token>
}
```

- Response ( 200 - added to cart ):
```
{
    "id": <id>,
    "CustomerId": <customer_id>,
    "ProductId": <product_id>,
    "amount": <amount>,
    "createdAt": <created_date>,
    "updatedAt": <updated_date>,
    "Product": {
        "id": <id>,
        "name": <product_name>,
        "image_url": <image_url>,
        "price": <price>,
        "stock": <stock>,
        "category": <category>,
        "description": <description>,
        "AdminId": 1,
        "createdAt": <created_date>,
        "updatedAt": <updated_date>
    }
}
```

- Error Response ( 404 - Token not found ):
```
{
    "message": "Token not found"
}
```

- Error Response ( 400 negative value) :
```
{
    "message": "Value can not be negative"
}
```

- Error Response ( 500 - Internal server error ):
```
{
    "message": "Internal server error"
}
```

---
#### DELETE /cart/delete/:id
###### delete cart
- Request Body:
```
not needed
```

- Request Header:
```
{
    "access_token": <access_token>
}
```

- Response ( 200 - item deleted ):
```
{
    "message": "Item removed"
}
```

- Error Response ( 404 - item not found) :
```
{
    "message": "Item not found"
}
```

- Error Response ( 403 - Unauthorized account ):
```
{
    "message": "Unauthorized account"
}
```

- Error Response ( 500 - Internal server error ):
```
{
    "message": "Internal server error"
}
```


---
#### PUT /cart/edit/:id
###### edit cart
- Request Body:
```
{
	"ProductId" : <ProductId>,
	"amount": <amount>
}
```

- Request Header:
```
{
    "access_token": <access_token>
}
```

- Response ( 200 - edit success ):
```
{
    "id": <id>,
    "CustomerId": <customer_id>,
    "ProductId": <product_id>,
    "amount": <amount>,
    "createdAt": <created_date>,
    "updatedAt": <updated_date>,
    "Product": {
        "id": <id>,
        "name": <product_name>,
        "image_url": <image_url>,
        "price": <price>,
        "stock": <stock>,
        "category": <category>,
        "description": <description>,
        "AdminId": 1,
        "createdAt": <created_date>,
        "updatedAt": <updated_date>
    }
}
```

- Error Response ( 404 - item not found) :
```
{
    "message": "Item not found"
}
```

- Error Response ( 403 - Unauthorized account ):
```
{
    "message": "Unauthorized account"
}
```

- Error Response ( 500 - Internal server error ):
```
{
    "message": "Internal server error"
}
```


---
#### POST /cart/checkout
###### checkout 
- Request Body:
```
	not needed
```

- Request Header:
```
{
    "access_token": <access_token>
}
```

- Response ( 200 - checkout successfully ):
```
{
	"message": 'Successfully checkout'
}
```

- Error Response ( 400 - stock is not enough ):
```
	message: 'Successfully checkout'
```

- Error Response ( 403 - Unauthorized account ):
```
{
    "message": "Unauthorized account"
}
```

- Error Response ( 500 - Internal server error ):
```
{
    "message": "Internal server error"
}
```