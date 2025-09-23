# HealthApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**coucou**](#coucou) | **GET** /coucou | Health check endpoint|

# **coucou**
> Coucou coucou()

Returns a simple message to verify the service is running.

### Example

```typescript
import {
    HealthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new HealthApi(configuration);

const { status, data } = await apiInstance.coucou();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Coucou**

### Authorization

No authorization required

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

