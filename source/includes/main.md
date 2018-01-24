# Introduction

Welcome to the Weave API. Use our API to monetize your links, track sales that come through links, or track rich click data on those that click on your links.

Our links allow you to pass sub_ids so that all of your users can be individually tracked.

# Authentication

> To authorize, use this code:

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('SAMPLE_API_TOKEN')
```

```python
import kittn

api = kittn.authorize('SAMPLE_API_TOKEN')
```

```bash
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here"
  -H "weave-api-token: SAMPLE_API_TOKEN"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('SAMPLE_API_TOKEN');
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

## Get Reporting

```bash
curl "https://api.weavesocial.com/reporting"
  -H "weave-api-token: SAMPLE_API_TOKEN"
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "name": "Max",
  "breed": "unknown",
  "fluffiness": 5,
  "cuteness": 10
}
```

This endpoint retrieves a specific kitten.

<aside class="warning">Inside HTML code blocks like this one, you can't use Markdown, so use <code>&lt;code&gt;</code> blocks to denote code.</aside>

### HTTP Request

`GET http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the kitten to retrieve
