https://codepen.io/123unme/pen/BQwZzq

{% include mermaid.html %}
<div class="mermaid">
sequenceDiagram
    participant User as User
    participant Frontend as Frontend
    participant Google/Facebook as Google/Facebook
    participant Backend as Backend
    participant BookTicketService as Book Ticket Service

    User->>Frontend: Clicks "Login with Google/Facebook"
    Frontend->>Google/Facebook: Redirects to Google/Facebook Auth Page
    Google/Facebook->>User: Displays Login Page
    User->>Google/Facebook: Enters Credentials and Grants Permission
    Google/Facebook->>Frontend: Redirects to Callback URL with Authorization Code
    Frontend->>Backend: Sends Authorization Code for Token Exchange
    Backend->>Google/Facebook: Requests Access Token with Authorization Code
    Google/Facebook->>Backend: Returns Access Token
    Backend->>Frontend: Sends Authentication Success (e.g., JWT)
    Frontend->>User: Displays Booking Form

    User->>Frontend: Fills Booking Form and Submits
    Frontend->>BookTicketService: Sends Booking Request with User Details
    BookTicketService->>BookTicketService: Processes Booking (e.g., validates, reserves ticket)
    BookTicketService->>Frontend: Sends Booking Confirmation (Callback)
    Frontend->>User: Displays Booking Status (Success/Failure)
	