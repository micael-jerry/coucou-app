# HttpExceptionResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **number** | HTTP status code | [default to undefined]
**type** | **string** | Error type | [default to undefined]
**message** | **string** | Error message | [default to undefined]
**timestamp** | **string** | Timestamp of the error | [default to undefined]
**path** | **string** | Request path that caused the error | [default to undefined]

## Example

```typescript
import { HttpExceptionResponseDto } from './api';

const instance: HttpExceptionResponseDto = {
    status,
    type,
    message,
    timestamp,
    path,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
