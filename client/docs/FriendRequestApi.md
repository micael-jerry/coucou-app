# FriendRequestApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAllFriendRequests**](#getallfriendrequests) | **GET** /friend-requests | Get all friend requests|
|[**sendFriendRequests**](#sendfriendrequests) | **POST** /friend-requests | Send friend requests|
|[**updateFriendRequestStatus**](#updatefriendrequeststatus) | **PUT** /friend-requests | Update friend requests status|

# **getAllFriendRequests**
> Array<FriendRequestResponse> getAllFriendRequests()

Get all friend requests for the current user

### Example

```typescript
import {
    FriendRequestApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FriendRequestApi(configuration);

let status: 'PENDING' | 'ACCEPTED' | 'REJECTED'; //Filter by status (optional) (default to undefined)

const { status, data } = await apiInstance.getAllFriendRequests(
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **status** | [**&#39;PENDING&#39; | &#39;ACCEPTED&#39; | &#39;REJECTED&#39;**]**Array<&#39;PENDING&#39; &#124; &#39;ACCEPTED&#39; &#124; &#39;REJECTED&#39;>** | Filter by status | (optional) defaults to undefined|


### Return type

**Array<FriendRequestResponse>**

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

# **sendFriendRequests**
> Array<FriendRequestResponse> sendFriendRequests(friendRequestInput)

Send friend requests to the specified users

### Example

```typescript
import {
    FriendRequestApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FriendRequestApi(configuration);

let friendRequestInput: Array<FriendRequestInput>; //

const { status, data } = await apiInstance.sendFriendRequests(
    friendRequestInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **friendRequestInput** | **Array<FriendRequestInput>**|  | |


### Return type

**Array<FriendRequestResponse>**

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

# **updateFriendRequestStatus**
> Array<FriendRequestResponse> updateFriendRequestStatus(friendRequestUpdateInput)

Update friend requests status for the current user

### Example

```typescript
import {
    FriendRequestApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FriendRequestApi(configuration);

let friendRequestUpdateInput: Array<FriendRequestUpdateInput>; //

const { status, data } = await apiInstance.updateFriendRequestStatus(
    friendRequestUpdateInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **friendRequestUpdateInput** | **Array<FriendRequestUpdateInput>**|  | |


### Return type

**Array<FriendRequestResponse>**

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

