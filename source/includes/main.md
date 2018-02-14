# Introduction - Weave API

Welcome to the Weave API. Use our powerful API to monetize your links, track sales that come through links, or track rich click data on those that click on your links.

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
    "link": "http://weav.me/~link"
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

<aside class="success">
Remember — authenticate your request!
</aside>

# Reporting

## Get Brand Report

```bash
curl "https://api.weavesocial.com/reports/brands"
  -H "weave-api-token: SAMPLE_API_TOKEN"
```

> The above command returns JSON structured like this:

```json
{
  "brand_id": "MACYS_12",
  "influencer_id": 2837262,
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
	"returned": "FALSE",
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
	"ref_link_id": "p-kK'
}
```

This endpoint retrieves reporting on stats for overall performance, influencer performance, individual link performance, order details, and click data.

### HTTP Request

`GET https://api.weavesocial.com/report`

### URL Parameters

Parameter | Description
--------- | -----------
campaign_id | The ID of the campaign to return stats on
influencer_id | The ID of the influencer to return stats on
share_id | The ID of the share to return stats on
link_id | The ID of the link to return stats on
