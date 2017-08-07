# Questions

- What do you think is wrong with the code, if anything?

    There is a lot of nesting, which makes the code difficult to read. The function also makes little use of named variables or functions to make the code easier to reason about. This makes it harder to see at a glance what's going on.

- Can you see any potential problems that could lead to exceptions

    Line 23 and 24 checks whether the invitations list contains a particular ID and adds if it is _already present_ in the list. This looks like a bug.

    There is no handler for if the user update code throws an error. Only the shop find callback handles an error - and it shadows the `err` variable so it's unclear which of the errors its meant to handle.

    The JSON message to send to the client for when there is no shop present doesn't contain an `error: true` property, unlike the JSON for when user is already invited to the shop. Both should have this error property set to true for consistency.

- How would you refactor this code to:
    - Make it easier to read

        Extract named properties from objects so they don't need to constantly be referenced by `parent.child` notation.

        Use promises (and async/await if possible) to reduce nesting.

    - Increase code reusability

        There is definitely scope to extract some of the DB manipulation into their own functions. Whether it's worth it depends on how often the same functions are executed elsewhere in the codebase.

    - Improve the stability of the system

        Place error handlers at crucial points.

    - Improve the testability of the code

        This is best done by extracting bits of code into their own functions.

- How might you use the latest JavaScript features to refactor the code?

    Use promises and async/await to avoid callback hell. Use object destructuring to assign variables more concisely.