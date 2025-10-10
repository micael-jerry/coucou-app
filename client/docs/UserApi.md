# UserApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAllUsers**](#getallusers) | **GET** /users | Get all users|
|[**getUserById**](#getuserbyid) | **GET** /users/{userId} | Get user by id|
|[**updateUser**](#updateuser) | **PUT** /users/me | Update connected user|

# **getAllUsers**
> Array<UserResponse> getAllUsers()

Returns a list of all users.

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

const { status, data } = await apiInstance.getAllUsers();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<UserResponse>**

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

# **getUserById**
> UserResponse getUserById()

Returns a user by id.

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let userId: string; //The id of the user to retrieve. (default to undefined)

const { status, data } = await apiInstance.getUserById(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | The id of the user to retrieve. | defaults to undefined|


### Return type

**UserResponse**

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

# **updateUser**
> UserResponse updateUser(updateUserDto)

Update a user connected.

### Example

```typescript
import {
    UserApi,
    Configuration,
    UpdateUserDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let updateUserDto: UpdateUserDto; //

const { status, data } = await apiInstance.updateUser(
    updateUserDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateUserDto** | **UpdateUserDto**|  | |


### Return type

**UserResponse**

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

