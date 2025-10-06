# ConversationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**createdAt** | **string** | User created datetime | [default to undefined]
**updatedAt** | **string** | User updated datetime | [default to undefined]
**type** | **string** |  | [default to undefined]
**members** | [**Array&lt;UserResponse&gt;**](UserResponse.md) |  | [default to undefined]
**messages** | [**Array&lt;MessageResponse&gt;**](MessageResponse.md) |  | [default to undefined]

## Example

```typescript
import { ConversationResponse } from './api';

const instance: ConversationResponse = {
    id,
    createdAt,
    updatedAt,
    type,
    members,
    messages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
