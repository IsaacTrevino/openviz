# Adding Nodes and Connections

## Node Mutations
Creating Nodes can be quite simple by just calling amplify graphql api.
This allows you to add the Node as a whole with connections.
### Example

```javascript
  DataStore.save(
    new Node({
      name: 'some node'
      position: {
        x: 5,
        y: 0,
        z: 2
      }
      connections:  
    })
  );
```