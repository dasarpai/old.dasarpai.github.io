---
mathjax: true
id: 6195
title: "curl Commands"
date: 2024-12-29
permalink: /dsblog/curl-commands
tags:
  - curl
  - command-line
  - web development
categories:
  - dsblog
header:
  teaser: /assets/images/dspost/dsp6195-curl-commands.jpg
excerpt_separator: "<!--more-->"
author: Hari Thapliyaal
layout: dspost-layout
excerpt: "curl is a powerful command-line tool for transferring data to and from servers using various protocols like HTTP, HTTPS, FTP, etc. This post provides some examples of how to use curl."
author_profile: true
share: true
toc: true
toc_sticky: true
toc_levels: 2
comments: true
keywords: ["curl commands for web development", "curl http methods", "curl command line tool", "curl for api testing", "curl for web scraping", "curl for file upload and download", "curl options and flags"]
---

!![curl Commands](/assets/images/dspost/dsp6195-curl-commands.jpg)

## What is curl command?
The `curl` command is a versatile command-line tool for transferring data to and from servers using various protocols like HTTP, HTTPS, FTP, etc. It allows you to make requests (GET, POST, PUT, DELETE) to APIs, download/upload files, send data, and debug web interactions directly from the terminal. It supports custom headers, authentication, proxies, and more, making it essential for testing and automation in web development and API integrations.

## What protocols it supports?
The `curl` command supports a wide range of protocols for transferring data. Here’s the list of supported protocols:

1. **HTTP** - Hypertext Transfer Protocol  
2. **HTTPS** - Secure version of HTTP  
3. **FTP** - File Transfer Protocol  
4. **FTPS** - Secure File Transfer Protocol  
5. **SFTP** - SSH File Transfer Protocol  
6. **TFTP** - Trivial File Transfer Protocol  
7. **GOPHER** - Gopher protocol (predecessor to HTTP)  
8. **IMAP** - Internet Message Access Protocol  
9. **IMAPS** - Secure version of IMAP  
10. **POP3** - Post Office Protocol  
11. **POP3S** - Secure version of POP3  
12. **SMTP** - Simple Mail Transfer Protocol  
13. **SMTPS** - Secure version of SMTP  
14. **RTSP** - Real-Time Streaming Protocol  
15. **LDAP** - Lightweight Directory Access Protocol  
16. **LDAPS** - Secure version of LDAP  
17. **FILE** - Accessing local files  
18. **DICT** - Dictionary protocol  
19. **TELNET** - Telnet protocol  
20. **MQTT** - Message Queuing Telemetry Transport  

---

### **Key Highlights:**
- `curl` automatically chooses the correct protocol based on the URL you provide (e.g., `http://`, `ftp://`).
- You can combine it with various options like authentication, headers, or POST data for complex operations.


## Can you share typical curl command?
Here’s one neatly formatted `curl` command:

```bash
curl -X POST "https://api.hyperbolic.xyz/v1/chat/comple..." \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $HYPERBOLIC_API_KEY" \
--data-raw '{
    "messages": [
        {
            "role": "user",
            "content": "How many gifts will Santa Claus deliver on Christmas?"
        }
    ],
    "model": "deepseek-ai/DeepSeek-V3",
    "max_tokens": 512,
    "temperature": 0.7,
    "top_p": 0.9,
    "stream": false
}'
```
It calls deepseek-v3 AI model to generate text content, input to generate the response is given in this curl command.

## What are different arguments which can be passed to call curl?
All `curl` commands have the different format. The structure of a `curl` command depends on the type of request, the API requirements, and the desired functionality. Here’s a breakdown of the common elements in a `curl` command and when they are used:

---

### 1. **Basic `curl` Command**
   - Simplest form for making a GET request:
     ```bash
     curl https://example.com
     ```

### 2. **Using HTTP Methods**
   - Specify the HTTP method with `-X` (e.g., `GET`, `POST`, `PUT`, `DELETE`, etc.).
     ```bash
     curl -X POST https://example.com
     ```

---

### 3. **Headers**
   - Add headers using `-H`. Headers often include `Content-Type`, `Authorization`, or custom headers:
     ```bash
     curl -H "Content-Type: application/json" \
          -H "Authorization: Bearer YOUR_API_KEY" \
          https://example.com
     ```

---

### 4. **Sending Data**
   - Use `--data` or `--data-raw` to send data in the body of the request:
     - For JSON data:
       ```bash
       curl -X POST https://example.com \
       -H "Content-Type: application/json" \
       --data-raw '{
           "key": "value"
       }'
       ```
     - For form-encoded data:
       ```bash
       curl -X POST https://example.com \
       --data "key=value&other_key=other_value"
       ```

---

### 5. **Authentication**
   - Basic authentication:
     ```bash
     curl -u username:password https://example.com
     ```
   - Bearer token:
     ```bash
     curl -H "Authorization: Bearer YOUR_TOKEN" https://example.com
     ```

---

### 6. **File Uploads**
   - Use `-F` for sending files:
     ```bash
     curl -X POST https://example.com/upload \
     -F "file=@/path/to/your/file.txt"
     ```

---

### 7. **Query Parameters**
   - Append query parameters directly in the URL:
     ```bash
     curl https://example.com?key=value&other_key=other_value
     ```

---

### 8. **Options for Output**
   - Output to a file:
     ```bash
     curl -o output.txt https://example.com
     ```
   - Silent mode (no progress bar):
     ```bash
     curl -s https://example.com
     ```

---

### Key Points:
- **Mandatory Components**: URL is required, but other elements like `-X`, `-H`, or `--data` are optional depending on the API and use case.
- **Formats Vary**: Not all APIs require headers or data in the same way. For example:
  - Simple REST APIs may only need a URL.
  - Complex APIs may need specific headers, authentication, and JSON payloads.

Each `curl` command is customized based on the HTTP request you want to perform. Would you like examples of other specific use cases?

## Can you tell me curl commands for other use cases?
Here are some examples of `curl` commands for various use cases:

---

### **1. GET Request**
Fetching data from an API:
```bash
curl https://api.example.com/resource
```

With query parameters:
```bash
curl "https://api.example.com/resource?param1=value1&param2=value2"
```

With headers:
```bash
curl -H "Accept: application/json" \
     https://api.example.com/resource
```

---

### **2. POST Request**
Sending JSON data:
```bash
curl -X POST https://api.example.com/resource \
-H "Content-Type: application/json" \
--data-raw '{
    "key1": "value1",
    "key2": "value2"
}'
```

Sending form-encoded data:
```bash
curl -X POST https://api.example.com/resource \
--data "key1=value1&key2=value2"
```

---

### **3. PUT Request**
Updating existing data:
```bash
curl -X PUT https://api.example.com/resource/123 \
-H "Content-Type: application/json" \
--data-raw '{
    "key1": "updated_value"
}'
```

---

### **4. DELETE Request**
Deleting a resource:
```bash
curl -X DELETE https://api.example.com/resource/123
```

With authentication:
```bash
curl -X DELETE https://api.example.com/resource/123 \
-H "Authorization: Bearer YOUR_API_KEY"
```

---

### **5. File Upload**
Uploading a file using `-F`:
```bash
curl -X POST https://api.example.com/upload \
-H "Authorization: Bearer YOUR_API_KEY" \
-F "file=@/path/to/your/file.txt"
```

---

### **6. Authentication Examples**
#### Basic Authentication:
```bash
curl -u username:password https://api.example.com/resource
```

#### Bearer Token:
```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.example.com/resource
```

---

### **7. Download a File**
Downloading and saving to a file:
```bash
curl -o output_file.txt https://example.com/resource
```

Downloading with progress hidden:
```bash
curl -s -o output_file.txt https://example.com/resource
```

---

### **8. API Pagination**
Handling paginated data with query parameters:
```bash
curl "https://api.example.com/resource?page=2&limit=50"
```

---

### **9. Using Proxy**
Accessing via a proxy server:
```bash
curl -x http://proxy.example.com:8080 https://api.example.com/resource
```

---

### **10. Redirect Handling**
Following redirects automatically:
```bash
curl -L https://example.com
```

---

### **11. Custom HTTP Headers**
Adding multiple custom headers:
```bash
curl -H "X-Custom-Header: value" \
     -H "Another-Header: value" \
     https://api.example.com/resource
```

---

### **12. Debugging with Verbose Output**
Show detailed information about the request and response:
```bash
curl -v https://api.example.com/resource
```

---

### **13. Making HTTPS Requests**
Ignore SSL certificate verification:
```bash
curl -k https://insecure.example.com
```

---

### **14. Using Variables**
Storing dynamic data in environment variables:
```bash
API_URL="https://api.example.com/resource"
curl "$API_URL"
```

---

### **15. Parallel Requests (with xargs)**  
Executing multiple `curl` commands simultaneously:
```bash
echo "https://example.com/1 https://example.com/2" | xargs -n 1 -P 2 curl -O
```


## How to run curl commands on windows terminal like command or powershell?
There are a few things to keep in mind when running `curl` on Windows, especially from **Command Prompt (cmd)** or **PowerShell**:

---

### **1. Windows-Specific Notes**
- **Escape Characters**:
  - Windows uses `^` to escape special characters in `cmd` and backtick (\`) in **PowerShell**.
  - Example:
    ```bash
    curl -X POST "http://127.0.0.1:8000/post-example" ^
    -H "Content-Type: application/json" ^
    --data-raw "{ \"key1\": \"value1\", \"key2\": \"value2\" }"
    ```

- **Double Quotes**:
  - Use double quotes (`"`) to wrap strings. If the JSON body uses double quotes, escape them with backslashes (`\"`).

- **Newline Continuation**:
  - In **cmd**, use the caret (`^`) for line continuation.
  - In **PowerShell**, use the backtick (\`).

---

### **2. Example: Running the `curl` Commands**
#### **GET Request (cmd)**
```cmd
curl "http://127.0.0.1:8000/get-example?param1=value1&param2=value2"
```

#### **POST Request with JSON (cmd)**
```cmd
curl -X POST "http://127.0.0.1:8000/post-example" ^
-H "Content-Type: application/json" ^
--data-raw "{ \"key1\": \"value1\", \"key2\": \"value2\" }"
```

#### **POST Request with JSON (PowerShell)**
```powershell
curl -X POST "http://127.0.0.1:8000/post-example" `
-H "Content-Type: application/json" `
--data-raw '{ "key1": "value1", "key2": "value2" }'
```

#### **File Upload (cmd)**
```cmd
curl -X POST "http://127.0.0.1:8000/upload" ^
-F "file=@C:\path\to\file.txt"
```

#### **File Upload (PowerShell)**
```powershell
curl -X POST "http://127.0.0.1:8000/upload" `
-F "file=@C:\path\to\file.txt"
```

---

### **3. Testing on Windows Subsystem for Linux (WSL)**
If you have **WSL** installed, you can run `curl` commands exactly like you would on Linux/macOS without modifying the syntax. This is useful for avoiding Windows-specific escaping issues.

---

### **4. Common Errors on Windows**
- **`'curl' is not recognized as an internal or external command`**:
  - Ensure `curl` is installed and available in the PATH. Modern versions of Windows 10 and 11 come with `curl` pre-installed.

- **Issues with File Paths**:
  - Use full paths with double backslashes (`C:\\path\\to\\file.txt`) or forward slashes (`C:/path/to/file.txt`) for file uploads.


## Can you share example of Curl commands with different servers?
To test `curl` commands with different protocols, you generally need servers or services that support those protocols. Here's a quick guide to setting up or accessing servers for different protocols:

---

### **1. HTTP/HTTPS**
- **Setup**: Use a simple web server like FastAPI, Flask, or Nginx.
- **Tools**: Mock servers like [JSONPlaceholder](https://jsonplaceholder.typicode.com) or Postman Echo.
- **Example**:  
  ```bash
  curl http://localhost:8000
  ```

---

### **2. FTP/FTPS**
- **Setup**: Use FTP servers like **vsftpd**, **FileZilla Server**, or **ProFTPD**.
- **Public Servers**: Some free FTP servers for testing are available online.
- **Example**:  
  ```bash
  curl ftp://ftp.example.com/file.txt --user username:password
  ```

---

### **3. SFTP**
- **Setup**: Use OpenSSH server or tools like `sshd` for secure file transfer.
- **Public Servers**: Services like Rebex provide free SFTP test servers.
- **Example**:  
  ```bash
  curl sftp://user@host/path/to/file --key ~/.ssh/id_rsa
  ```

---

### **4. SMTP/SMTPS (Email Sending)**
- **Setup**: Use email servers like **Postfix** or **SendGrid** (for secure sending).
- **Public Servers**: Use services like Gmail SMTP for testing (requires credentials).
- **Example**:  
  ```bash
  curl smtp://smtp.example.com --mail-from "from@example.com" --mail-rcpt "to@example.com" --upload-file mail.txt
  ```

---

### **5. LDAP/LDAPS**
- **Setup**: Use **OpenLDAP** server for directory access.
- **Public Servers**: Online LDAP testing services exist for queries.
- **Example**:  
  ```bash
  curl ldap://ldap.example.com/dc=example,dc=com
  ```

---

### **6. MQTT**
- **Setup**: Use MQTT brokers like **Mosquitto** or cloud services like **HiveMQ**.
- **Example**:  
  ```bash
  curl mqtt://broker.example.com -d "message payload"
  ```

---

### **7. RTSP**
- **Setup**: Use media servers like **VLC** or **FFmpeg** to host RTSP streams.
- **Example**:  
  ```bash
  curl rtsp://media.example.com/stream
  ```

---

### **8. FILE**
- **Setup**: No external server needed; simply reference local file paths.
- **Example**:  
  ```bash
  curl file:///path/to/local/file.txt
  ```

---

### **9. TELNET**
- **Setup**: Enable Telnet on your machine or use services like **PuTTY**.
- **Example**:  
  ```bash
  curl telnet://example.com:23
  ```

---

### **10. Public Servers for Testing**
For some protocols, you can use public test servers to avoid setting up your own. For example:
- **FTP**: `ftp://speedtest.tele2.net`
- **SFTP**: Rebex test server (`test.rebex.net`)
- **LDAP**: Public test LDAP servers like `ldap.forumsys.com`

---

### **Mock Servers**
If setting up actual servers is complex, mock services like **Mockoon**, **ngrok**, or **RequestBin** can simulate server responses for testing.

Would you like help setting up any specific server or testing environment?

## Can you share an example of curl commands with SMTP server?

To test **SMTP** with `curl`, you’ll need an SMTP server. Below is a step-by-step guide, including an example setup for testing SMTP with `curl`. You fire these commands from the client machine and curl get the data from the server.

---

### **1. Setup an SMTP Server**
You can use one of the following options:

#### **Option A: Use a Public SMTP Server**
- Gmail SMTP: `smtp.gmail.com`  
  (You’ll need a Gmail account and an App Password since Gmail blocks less-secure apps.)
- Free SMTP Test Server: [smtp4dev](https://github.com/rnwood/smtp4dev)

#### **Option B: Run a Local SMTP Server**
- Use `Postfix` or `Sendmail` on Linux.
- On Windows, you can use **MailHog** or **smtp4dev** to emulate an SMTP server.

#### **Option C: Use a Paid SMTP Provider**
- Providers like **SendGrid**, **Mailgun**, or **Amazon SES** offer SMTP services with free tiers for testing.

---

### **2. SMTP Configuration Details**
Here’s an example configuration using Gmail SMTP:

| Parameter        | Value                        |
|------------------|------------------------------|
| SMTP Server      | `smtp.gmail.com`            |
| Port (TLS)       | `587`                       |
| Port (SSL)       | `465`                       |
| Authentication   | Yes (use your email/password or app password) |

---

### **3. Test SMTP with `curl`**
#### **Command:**
```bash
curl -v --url smtp://smtp.gmail.com:587 \
     --mail-from "youremail@gmail.com" \
     --mail-rcpt "recipient@example.com" \
     --upload-file email.txt \
     --user "youremail@gmail.com:yourapppassword" \
     --ssl
```

---

### **4. Email Body (email.txt)**
Create a file named `email.txt` containing the email content:
```text
From: youremail@gmail.com
To: recipient@example.com
Subject: Test Email

Hello! This is a test email sent using curl and SMTP.
```

---

### **5. Explanation of Flags**
- **`-v`**: Enables verbose output for debugging.
- **`--url smtp://smtp.gmail.com:587`**: Connects to the SMTP server at port 587 using TLS.
- **`--mail-from`**: Specifies the sender’s email address.
- **`--mail-rcpt`**: Specifies the recipient’s email address.
- **`--upload-file`**: Specifies the file containing the email content.
- **`--user`**: Provides SMTP authentication in the format `username:password`.
- **`--ssl`**: Ensures the connection is encrypted.

---

### **6. Expected Output**
You should see a successful SMTP conversation in the terminal, ending with:
```
< 250 Message accepted for delivery
```

If you encounter any issues, double-check:
- Your credentials (`username` and `app password` for Gmail).
- Correct ports (`587` for TLS or `465` for SSL).
- Email file formatting.

## Can you share example of createing 'FTP' server and testing with 'curl'
To test **FTP** with `curl`, you can either set up a local FTP server or use a public FTP server for testing. Here's how to proceed:

---

### **1. Setup an FTP Server**

#### **Option A: Use a Public FTP Server**
There are public FTP servers available for testing:
- **Example**:  
  - FTP Server: `ftp://speedtest.tele2.net`
  - No authentication required.

#### **Option B: Set Up a Local FTP Server**
You can set up an FTP server on your machine for testing:
- **Linux/Mac**: Use `vsftpd` or `ProFTPD`.
- **Windows**: Use **FileZilla Server**.

---

### **2. FTP Commands with `curl`**
Here are some examples of using `curl` with FTP:

---

#### **A. Download a File**
```bash
curl -v ftp://speedtest.tele2.net/1MB.zip -o downloaded_file.zip
```
- **`-v`**: Enables verbose output.
- **`-o`**: Saves the downloaded file with a specific name.

---

#### **B. Upload a File**
For uploading, you need write access to the FTP server.

```bash
curl -v -T local_file.txt ftp://example.com/uploads/ --user username:password
```
- **`-T`**: Specifies the file to upload.
- **`--user`**: Provides credentials in `username:password` format.

---

#### **C. List Files in a Directory**
```bash
curl -v ftp://speedtest.tele2.net --user anonymous:
```
- **`anonymous`**: Some public FTP servers allow anonymous access with a blank password.

---

#### **D. Create a Directory**
```bash
curl -v -Q "MKD new_directory" ftp://example.com/ --user username:password
```
- **`-Q`**: Sends an FTP command (e.g., `MKD` for making a directory).

---

#### **E. Delete a File**
```bash
curl -v -Q "DELE file.txt" ftp://example.com/ --user username:password
```
- **`DELE`**: Deletes the specified file.

---

### **3. Using a Public FTP Server (Example)**

#### **Download File**
```bash
curl -v ftp://speedtest.tele2.net/1MB.zip -o test_download.zip
```

#### **Upload File (Requires Local Server or Access)**
If you're using a local FTP server:
```bash
curl -v -T sample.txt ftp://localhost/uploads/ --user testuser:testpassword
```

---

### **4. Local FTP Server Setup (Optional)**
If you'd like to set up a local FTP server:
1. **Linux**:
   - Install `vsftpd`:  
     ```bash
     sudo apt update && sudo apt install vsftpd
     ```
   - Configure `/etc/vsftpd.conf` and restart the server.

2. **Windows**:
   - Install **FileZilla Server** and configure a user with read/write permissions.

---

### **Troubleshooting**
- Ensure the FTP server is running and accessible.
- Check file permissions for uploads and downloads.
- Use `-v` for verbose output to debug issues.

## Can you help me testing curl command with my own created services?

Here's is an example of creating a service using python. You can use FastAPI python library. To create a **FastAPI** application that provides endpoints to test the `curl` commands discussed above, we need to create API and expose endpoints for different HTTP methods (GET, POST, PUT, DELETE, etc.) and features like file upload, query parameters, and authentication.

---

### **1. Setting Up FastAPI**
Install FastAPI and Uvicorn:
```bash
pip install fastapi uvicorn
```

Create a file named `main.py`:

---

### **2. The FastAPI Code**

```python
from fastapi import FastAPI, Query, Body, Header, File, UploadFile, HTTPException
from pydantic import BaseModel

app = FastAPI()

# Example data storage
fake_db = {"item1": "value1", "item2": "value2"}


# 1. GET Request with Query Parameters
@app.get("/get-example")
def get_example(param1: str = Query(...), param2: str = Query(None)):
    return {"param1": param1, "param2": param2}


# 2. POST Request with JSON
class PostData(BaseModel):
    key1: str
    key2: str


@app.post("/post-example")
def post_example(data: PostData):
    return {"received": data.dict()}


# 3. PUT Request
@app.put("/put-example/{item_id}")
def put_example(item_id: str, data: PostData):
    if item_id not in fake_db:
        raise HTTPException(status_code=404, detail="Item not found")
    fake_db[item_id] = data.dict()
    return {"updated_item": item_id, "data": data.dict()}


# 4. DELETE Request
@app.delete("/delete-example/{item_id}")
def delete_example(item_id: str):
    if item_id not in fake_db:
        raise HTTPException(status_code=404, detail="Item not found")
    del fake_db[item_id]
    return {"deleted_item": item_id}


# 5. File Upload
@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    return {"filename": file.filename, "content_type": file.content_type}


# 6. Authentication
@app.get("/auth-example")
def auth_example(authorization: str = Header(None)):
    if authorization != "Bearer YOUR_API_KEY":
        raise HTTPException(status_code=401, detail="Unauthorized")
    return {"message": "Authorized"}


# 7. Pagination Example
@app.get("/pagination-example")
def pagination_example(page: int = Query(1), limit: int = Query(10)):
    items = list(fake_db.keys())
    start = (page - 1) * limit
    end = start + limit
    return {"page": page, "limit": limit, "items": items[start:end]}


# 8. Debugging Example (headers and request data)
@app.get("/debug-example")
def debug_example(headers: dict = Header(None)):
    return {"headers": headers}


# 9. Redirect Example
@app.get("/redirect-example")
def redirect_example():
    return {"message": "Use curl -L to follow redirects"}


# 10. Proxy Example
@app.get("/proxy-example")
def proxy_example():
    return {"message": "This endpoint is just for testing proxies"}


# 11. HTTPS Example (SSL)
@app.get("/https-example")
def https_example():
    return {"message": "Test curl with -k to ignore SSL errors (not implemented here)"}


# 12. Parallel Requests Example
@app.get("/parallel-example/{item_id}")
def parallel_example(item_id: str):
    return {"item_id": item_id, "message": "Fetched in parallel"}
```

---

### **3. Running the API**
Run the FastAPI app using Uvicorn:
```bash
uvicorn main:app --reload
```

Access the Swagger UI at:
```
http://127.0.0.1:8000/docs
```

---

### **4. Testing with cURL Commands**
You can now test the API endpoints using the `curl` commands. For example:

#### **GET Request**
```bash
curl "http://127.0.0.1:8000/get-example?param1=value1&param2=value2"
```

#### **POST Request**
```bash
curl -X POST "http://127.0.0.1:8000/post-example" \
-H "Content-Type: application/json" \
--data-raw '{
    "key1": "value1",
    "key2": "value2"
}'
```

#### **File Upload**
```bash
curl -X POST "http://127.0.0.1:8000/upload" \
-F "file=@/path/to/file.txt"
```

---

### **5. Extending the API**
You can extend this FastAPI app to include more endpoints for advanced scenarios like handling streams, working with databases, or using WebSocket communication.

