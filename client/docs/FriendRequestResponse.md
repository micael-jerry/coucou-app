# FriendRequestResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [default to undefined]
**sender** | [**UserResponse**](UserResponse.md) | User who sent the friend request | [default to undefined]
**receiver** | [**UserResponse**](UserResponse.md) | User who received the friend request | [default to undefined]
**createdAt** | **string** | Friend request created datetime | [default to undefined]
**updatedAt** | **string** | Friend request updated datetime | [default to undefined]

## Example

```typescript
import { FriendRequestResponse } from './api';

const instance: FriendRequestResponse = {
    status,
    sender,
    receiver,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
