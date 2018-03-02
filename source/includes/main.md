# Introduction - Weave API

Welcome to the Weave API documentation. Use our powerful API to monetize your links, track sales that come through links, or track rich click data on those that click on your links.

Our links allow you to pass sub_ids so that all of your users can be individually tracked.

# Authentication

> To authorize, use this code:

```bash
# With shell, you can just pass the correct header with each request
curl "https://api.weavesocial.com"
  -H "weave-api-token: SAMPLE_API_TOKEN"
```

> Make sure to replace `SAMPLE_API_TOKEN` with your API token.

Weave uses an API token to authenticate your requests to your account.

All API requests must include this token in the header of the request:

`weave-api-token: SAMPLE_API_TOKEN`

<aside class="notice">
You must replace <code>SAMPLE_API_TOKEN</code> with your personal API key.
</aside>

# Links

## Create A Link

```bash
curl -X POST "https://api.weavesocial.com/link/create"
  -H "weave-api-token: SAMPLE_API_TOKEN"
  -d '{"username":"xyz","password":"xyz"}'
  -d "user_id=SAMPLE_USER_ID"
  -d "url=https://www.trackthiswebsite.com"
  -d "share_id=SAMPLE_SHARE_ID"
  -d "platform=youtube"
```

> The above command returns JSON structured like this:

```json
{
  "response": {
    "status": "success",
    "link": "http://weav.me/~abc1",
    "link_id": "abc1",
    "affiliated": true
  }
}
```

This endpoint creates a trackable link.

### HTTP Request

`POST https://api.weavesocial.com/link/create`

### Query Parameters

Parameter | Required | Description
--------- | ------- | -----------
user_id | yes | The ID to track which user this link is created for
url | yes | The url being shared that you want to track
platform | optional | Which social platform or website this was shared to
share_id | optional | An ID for which piece of content or share this link belongs to

## List Your Links

```bash
curl -X POST "https://api.weavesocial.com/link/create"
  -H "weave-api-token: SAMPLE_API_TOKEN"
  -d '{"username":"xyz","password":"xyz"}'
  -d "user_id=SAMPLE_USER_ID"
  -d "url=https://www.trackthiswebsite.com"
  -d "share_id=SAMPLE_SHARE_ID"
  -d "platform=youtube"
```

> The above command returns JSON structured like this:

```json
{
  "response": {
    "status": "success",
    "link_ids": [
      "abc1",
      "abc2",
      "abc3",
      "..."
    ]
  }
}
```

### HTTP Request

`POST https://api.weavesocial.com/link/list`

### Query Parameters

Parameter | Required | Description
--------- | ------- | -----------
page | optional | The page of results to return (25 links at a time)

<aside class="success">
Remember — authenticate your request!
</aside>

# Brands

## Find Brand

This endpoint allows you to see if a brand is in the Weave network

### HTTP Request

`GET https://api.weavesocial.com/brands/find`

### URL Parameters

Parameter | Description
--------- | -----------
domain | The domain name of the brand to find affiliate details about

```bash
curl "https://api.weavesocial.com/brands/find"
  -H "weave-api-token: SAMPLE_API_TOKEN"
```

> The above command returns JSON structured like this:

```json
{
  "response": {
    "status": "success",
    "name": "thisbrand",
    "domain": "thisbrand.com",
    "affiliatable": true
  }
}
```

# Users

## List Users

This endpoint allows you to see the user ids within your network

### HTTP Request

`GET https://api.weavesocial.com/users/list`

### Query Parameters

Parameter | Required | Description
--------- | ------- | -----------
page | optional | The page of results to return (25 users at a time)


```bash
curl "https://api.weavesocial.com/users/list"
  -H "weave-api-token: SAMPLE_API_TOKEN"
```

```json
{
  "response": {
    "status": "success",
    "user_ids": [
      "user_id_1",
      "user_id_2",
      "user_id_3",
      "..."
    ]
  }
}
```

# Reporting

## Get Brand Report

```bash
curl "https://api.weavesocial.com/reports/brands"
  -H "weave-api-token: SAMPLE_API_TOKEN"
```

> The above command returns JSON structured like this:

```json
{
  "brand_id": "thisbrand.com",
  "links_shared": 107,
  "facebook_shared": 72,
	"twitter_shared": 35,
	"unique_visitors": 15178,
  "clicks": 16872,
  "sales": 101,
  "items": 327,
  "returned_items": 6,
  "gross_revenue": 5894.36,
  "net_revenue": 5603.24,
  "returned_revenue": 291.12,
  "avg_order_size": 58.36,
  "conversion_rate": 1.19,
  "rev_per_click": 0.7
}
```

```bash
curl "https://api.weavesocial.com/reports/links"
  -H "weave-api-token: SAMPLE_API_TOKEN"
```

> The above command returns JSON structured like this:

```json
{
  "brand_id": "thisbrand.com",
  "influencer_id": 2837262,
  "unique_visitors": 289,
  "platform": "facebook",
  "created_at": "2018-02-05 08:56:01+00",
  "clicks": 16872,
  "sales": 101,
  "items": 327,
  "returned_items": 6,
  "gross_revenue": 5894.36,
  "net_revenue": 5603.24,
  "returned_revenue": 291.12,
  "avg_order_size": 58.36,
  "conversion_rate": 1.19,
  "rev_per_click": 0.7
}
```

```bash
curl "https://api.weavesocial.com/reports/orders"
  -H "weave-api-token: SAMPLE_API_TOKEN"
```

```json
{
  "brand_id": "thisbrand.com",
	"influencer_id": "2837262",
	"item_name": "Chantecaille Pure Rosewater",
	"advertiser": "thisbrand",
	"sku": "294426",
	"revenue": 68.00,
	"quantity": 1,
	"order_id": "201709251258041256107959",
	"transaction_id": "6893770BB2368706DC236FA60FFC4EB0",
	"returned": false,
	"city": "Owosso",
	"region": "Michigan",
	"country": "US",
	"ip_address": "24.236.181.113",
	"latitude": "42.9965",
	"longitude": "-84.1874",
	"postal": "48867",
	"device": "PC",
	"os": "Windows",
	"browser": "Chrome",
	"transaction_date": "2018-01-18 23:02:55+00",
	"ref_link": "weav.me/~p-kK",
	"ref_link_id": "p-kK"
}
```

This endpoint retrieves reporting on stats for overall performance, influencer performance, individual link performance, order details, and click data.

### HTTP Request

`GET https://api.weavesocial.com/reports/brands`

### URL Parameters

Parameter | Description
--------- | -----------
brand_id | The domain name of the brand to return stats on

### HTTP Request

`GET https://api.weavesocial.com/reports/links`

### URL Parameters

Parameter | Description
--------- | -----------
link_id | The hash after /~ in the url to identify a specific link

### HTTP Request

`GET https://api.weavesocial.com/reports/orders`

### URL Parameters

Parameter | Description
--------- | -----------
brand_id | The domain name of the brand to return stats on
