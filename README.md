# React Auth Example

This is an example React app that serves to show a method of using React's
context and hooks API to build out authentication.

## What's here

* `src/` - The React client.
* `api/` - A Node API server used to make fake signin/signup requests to. Now
  that I think about it, I could have mocked this out on the frontend instead of
  building a whole server to do this...whatever 🤷‍♀️.

## Run it

To start the React client you'll need to do the following in the project root:
* Run `yarn` to install the frontend dependencies.
* Run `yarn start` to boot the react dev server up. This should print the url to
  the running app (http://localhost:3000).

To start the Node server you'll need to do the following in the **api/
directory**:
* Run `yarn` to install the backend dependencies.
* Run `yarn start` to boot the node server up. This should print a url to the
  running API (http://127.0.0.1:4000).

## What to look at

## API

There's not much to focus on for the API. It's build with Fastify instead of
Express. There's a `src/lib/` directory that contains the code for signing up
and signing into fake in-memory user accounts. This is all done and saved
in-memory (no database, hence the 'mocking'). There's also a `src/web/`
directory that includes the code for configuring, starting, and registering
routes for the server. There are currently 3 routes:

* `GET /api/ping` - Returns `pong!`. Used for quickly testing server
* `POST /api/auth/signup` - Accepts JSON containing username and password.
  Creates a fake user in memory. Returns the 'created' user.
* `POST /api/auth/signin` - Accepts JSON containing username and password.
  Checks for existing user and compares received password with 'saved' password.
  Returns the user if passwords match. Returns error with `401` status code if
  passwords don't match or if no user found with username.

## Client

To start, the root component of the application is called App (very original)
and is located at `src/App.jsx`.

App renders our `AuthProvider`--we'll get to that in a moment--and uses some
components from React Router to do routing. The routes themselves are abstracted
to another component `<Routes />` in `src/Routes.jsx`. Routes sets up 4 screens:
Home, SignIn, SignUp, and Dashboard. All of these except Dashboard are 'public',
meaning they should be accessible to any user of the app, regardless if they've
registered and signed in or not.

To ensure only logged in users can navigate to the `/dashboard` screen, a helper
`<PrivateRoute />` component has been created at
`src/components/PrivateRoute.jsx`. If we look at the component itself, it wraps
the regular `<Route />` component from React Router and either renders the
provided component if the user is currently authenticated, or redirects to the
`/signin` screen if not. It uses a custom `useAuth` (`src/hooks/useAuth.js`)
hook to know if the user is authenticated or not.

Inside the `useAuth` hook, we see it first calls the `useContext` hook for the
`AuthContext`. Then, it returns everything from the context with some additional
helpers fields to determine the authentication status (`isPending`, `isError`,
`isSuccess`, `isAuthenticated`).

If we navigate to the `AuthContext` from `src/context/auth.js`, we don't see
very much. This is because the context's state is set inside the `AuthProvider`.
Remember? That's what the App component rendered!

If we head to the `AuthProvider` in `src/context/auth/provider.js`, we'll find
the majority of the authentication state and logic. First, it utilizes
`useState` to keep track of the status of authenticating (pending, error,
success, login required), the error from authenticating (if any), and the user
(if successful).

Then we have two functions.
* `login` - This makes the API call to our server with a `username` and
  `password`, then sets the state based if it was successful or not. It also
  saves the credentials to localStorage (via `authCache`) for authenticating
  without requiring the user to login for each request.
* `logout` - Clears the credentials from localStorage and sets the status to
  `LOGIN_REQUIRED`, meaning the user must login manually again to
  re-authenticate.

Next, we have a `context` variable that will eventually be used as the value for
our context (what was used in the `useAuth` hook). Here we add everything that
was on the state, in addition to the `login` and `logout` functions. This allows
other components to have the ability to login and logout if they need to by
using the context or the `useAuth` hook (see `<SignIn />` and `<SignOutButton
/>`).

After that there is a `useEffect` that runs once when the component loads
(notice the empty array `[]` passed to it as the second argument). Here we load
the credentials potentially saved from a previous login. If we have them then we
use them to call the `login` function from above. If not, we set the state from
`PENDING` (what was defaulted in the `useState`) to `LOGIN_REQUIRED`.

Finally, we render the provider from the context created in
`src/context/auth.js` using the value of the `context` variable. The children
rendered are either the children passed to this component or the placeholder
text `Loading...` if the status is pending. This could be replaced with a
spinning icon or fun animation in the future.

In the `<SignIn />`, `<SignOutButton />`, and `<NavBar />` components we can see
how the `useAuth` hook is used to access the data from the context to login,
logout, redirect to the dashboard when authenticated, and display certain links
if authenticated or not.
