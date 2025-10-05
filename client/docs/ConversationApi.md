# ConversationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getConversationById**](#getconversationbyid) | **GET** /conversations/{conversationId} | Get conversation by id|
|[**getConversationsByUserId**](#getconversationsbyuserid) | **GET** /conversations | Get conversations by user|
|[**postConversation**](#postconversation) | **POST** /conversations | Create a new conversation|

# **getConversationById**
> ConversationResponse getConversationById()

Get conversation by id

### Example

```typescript
import {
    ConversationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ConversationApi(configuration);

let conversationId: string; //The id of the conversation to retrieve. (default to undefined)

const { status, data } = await apiInstance.getConversationById(
    conversationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **conversationId** | [**string**] | The id of the conversation to retrieve. | defaults to undefined|


### Return type

**ConversationResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** | Bad Request - The request could not be understood or was missing required parameters. |  -  |
|**403** | Forbidden - The server understood the request, but refuses to authorize it. |  -  |
|**404** | Not Found - The requested resource could not be found on the server. |  -  |
|**429** | Too Many Requests - The user has sent too many requests in a given amount of time. |  -  |
|**500** | Internal Server Error - An unexpected condition was encountered by the server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getConversationsByUserId**
> Array<ConversationResponse> getConversationsByUserId()

Get conversations by connected user

### Example

```typescript
import {
    ConversationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ConversationApi(configuration);

const { status, data } = await apiInstance.getConversationsByUserId();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ConversationResponse>**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** | Bad Request - The request could not be understood or was missing required parameters. |  -  |
|**403** | Forbidden - The server understood the request, but refuses to authorize it. |  -  |
|**404** | Not Found - The requested resource could not be found on the server. |  -  |
|**429** | Too Many Requests - The user has sent too many requests in a given amount of time. |  -  |
|**500** | Internal Server Error - An unexpected condition was encountered by the server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postConversation**
> ConversationResponse postConversation(conversationInput)

Create a new conversation with the given members

### Example

```typescript
import {
    ConversationApi,
    Configuration,
    ConversationInput
} from './api';

const configuration = new Configuration();
const apiInstance = new ConversationApi(configuration);

let conversationInput: ConversationInput; //

const { status, data } = await apiInstance.postConversation(
    conversationInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **conversationInput** | **ConversationInput**|  | |


### Return type

**ConversationResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** | Bad Request - The request could not be understood or was missing required parameters. |  -  |
|**403** | Forbidden - The server understood the request, but refuses to authorize it. |  -  |
|**404** | Not Found - The requested resource could not be found on the server. |  -  |
|**429** | Too Many Requests - The user has sent too many requests in a given amount of time. |  -  |
|**500** | Internal Server Error - An unexpected condition was encountered by the server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

