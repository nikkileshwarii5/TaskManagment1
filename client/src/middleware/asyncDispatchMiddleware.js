// const asyncDispatchMiddleware = store => next => action => {
//     let syncActivityFinished = false;
//     let actionQueue = [];
  
//     // Function to dispatch all actions in the queue
//     function flushQueue() {
//       actionQueue.forEach(a => store.dispatch(a));
//       actionQueue = [];
//     }
  
//     // Function to queue actions for dispatch
//     function asyncDispatch(action) {
//       actionQueue = actionQueue.concat([action]);
  
//       // If the synchronous part of the dispatch has finished, flush the queue
//       if (syncActivityFinished) {
//         flushQueue();
//       }
//     }
  
//     // Augment the action object with the asyncDispatch function
//     const actionWithAsyncDispatch = Object.assign({}, action, { asyncDispatch });
  
//     // Pass the action down the middleware chain
//     next(actionWithAsyncDispatch);
//     syncActivityFinished = true;
//     flushQueue();
//   };
  
//   export default asyncDispatchMiddleware;
  