# MessageApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getMessageById**](#getmessagebyid) | **GET** /messages/{messageId} | Get a message by id|
|[**getMessagesByConversationId**](#getmessagesbyconversationid) | **GET** /messages | Get messages by conversation id|
|[**postMessage**](#postmessage) | **POST** /messages | Send a message|

# **getMessageById**
> MessageResponse getMessageById()

Get a message by id

### Example

```typescript
import {
    MessageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MessageApi(configuration);

let messageId: string; // (default to undefined)

const { status, data } = await apiInstance.getMessageById(
    messageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **messageId** | [**string**] |  | defaults to undefined|


### Return type

**MessageResponse**

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

# **getMessagesByConversationId**
> Array<MessageResponse> getMessagesByConversationId()

Get messages by conversation id

### Example

```typescript
import {
    MessageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MessageApi(configuration);

let conversationId: string; //Conversation id in which the user is a member (default to undefined)

const { status, data } = await apiInstance.getMessagesByConversationId(
    conversationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **conversationId** | [**string**] | Conversation id in which the user is a member | defaults to undefined|


### Return type

**Array<MessageResponse>**

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

# **postMessage**
> MessageResponse postMessage(messageInput)

Send a message to a conversation

### Example

```typescript
import {
    MessageApi,
    Configuration,
    MessageInput
} from './api';

const configuration = new Configuration();
const apiInstance = new MessageApi(configuration);

let messageInput: MessageInput; //

const { status, data } = await apiInstance.postMessage(
    messageInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **messageInput** | **MessageInput**|  | |


### Return type

**MessageResponse**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**400** | Bad Request - The request could not be understood or was missing required parameters. |  -  |
|**403** | Forbidden - The server understood the request, but refuses to authorize it. |  -  |
|**404** | Not Found - The requested resource could not be found on the server. |  -  |
|**429** | Too Many Requests - The user has sent too many requests in a given amount of time. |  -  |
|**500** | Internal Server Error - An unexpected condition was encountered by the server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

