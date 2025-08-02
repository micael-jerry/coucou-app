# AuthApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**signIn**](#signin) | **POST** /auth/sign-in | User login endpoint|
|[**signUp**](#signup) | **POST** /auth/sign-up | User registration endpoint|
|[**whoAmI**](#whoami) | **GET** /auth/who-am-i | Get current user information|

# **signIn**
> LoginResponse signIn(loginDto)

Allows a user to log in by providing their username and password.

### Example

```typescript
import {
    AuthApi,
    Configuration,
    LoginDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let loginDto: LoginDto; //

const { status, data } = await apiInstance.signIn(
    loginDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginDto** | **LoginDto**|  | |


### Return type

**LoginResponse**

### Authorization

No authorization required

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

# **signUp**
> UserResponse signUp(signUpDto)

Allows a new user to register by providing their details.

### Example

```typescript
import {
    AuthApi,
    Configuration,
    SignUpDto
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let signUpDto: SignUpDto; //

const { status, data } = await apiInstance.signUp(
    signUpDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signUpDto** | **SignUpDto**|  | |


### Return type

**UserResponse**

### Authorization

No authorization required

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

# **whoAmI**
> UserResponse whoAmI()

Returns the details of the currently authenticated user.

### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.whoAmI();
```

### Parameters
This endpoint does not have any parameters.


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

