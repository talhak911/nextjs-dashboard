const httpStatusCodes = [
    { category: 'Informational', code: 100, description: 'Continue: The server has received the request and is continuing the process.' },
    { category: 'Informational', code: 101, description: 'Switching Protocols: The server is switching protocols based on the client\'s request.' },
    { category: 'Success', code: 200, description: 'OK: The request has been fulfilled and the requested data is in the response body.' },
    { category: 'Success', code: 201, description: 'Created: The request has been fulfilled and a new resource has been created.' },
    { category: 'Success', code: 202, description: 'Accepted: The request has been accepted for processing, but the processing has not been completed.' },
    { category: 'Success', code: 203, description: 'Non-Authoritative Information: The returned information is from a secondary or backup source.' },
    { category: 'Success', code: 204, description: 'No Content: The server has successfully processed the request and there is no content to send back.' },
    { category: 'Success', code: 205, description: 'Reset Content: The client should reset the document view which caused the request to be sent.' },
    { category: 'Success', code: 206, description: 'Partial Content: The server is able to fulfill the request partially. (Used for downloading large files)' },
    { category: 'Success', code: 207, description: 'Multi-Status (WebDAV): Provides multiple status for multiple sub-requests. (Used in WebDAV)' },
    { category: 'Success', code: 226, description: 'IM Used: The server has fulfilled the request and the resource is now locked. (Used in locking mechanisms)' },
    { category: 'Redirection', code: 300, description: 'Multiple Choices: The requested resource can be found at multiple locations. The client should choose one.' },
    { category: 'Redirection', code: 301, description: 'Moved Permanently: The requested resource has been permanently moved to a new location.' },
    { category: 'Redirection', code: 302, description: 'Found: The requested resource can be found under a temporary URL.' },
    { category: 'Redirection', code: 303, description: 'See Other: The response can be found under another URI using a different method.' },
    { category: 'Redirection', code: 304, description: 'Not Modified: The requested resource hasn\'t been modified since the date provided by the client.' },
    { category: 'Redirection', code: 307, description: 'Temporary Redirect: The requested resource can be found under a temporary URL. (Variant of 302)' },
    { category: 'Redirection', code: 308, description: 'Permanent Redirect (Experimental): The requested resource has been permanently moved to a new location. (Intended to replace 301)' },
    { category: 'Client Error', code: 400, description: 'Bad Request: The server cannot understand the request due to invalid syntax.' },
    { category: 'Client Error', code: 401, description: 'Unauthorized: The request requires user authentication.' },
    { category: 'Client Error', code: 402, description: 'Payment Required: The server needs payment before fulfilling the request. (Not commonly used)' },
    { category: 'Client Error', code: 403, description: 'Forbidden: The client does not have access rights to the requested resource.' },
    { category: 'Client Error', code: 404, description: 'Not Found: The requested resource couldn\'t be found on the server.' },
    { category: 'Client Error', code: 405, description: 'Method Not Allowed: The request method is not supported for this resource.' },
    { category: 'Client Error', code: 406, description: 'Not Acceptable: The requested content type is not accepted by the server.' },
    { category: 'Client Error', code: 407, description: 'Proxy Authentication Required: The client needs to authenticate itself with a proxy server.' },
    { category: 'Client Error', code: 408, description: 'Request Timeout: The server timed out waiting for the request to be completed.' },
    { category: 'Client Error', code: 409, description: 'Conflict: The request could not be completed due to a conflict with the current state of the resource.' },
    { category: 'Client Error', code: 410, description: 'Gone: The requested resource is no longer available and will not be available again.' },
    { category: 'Client Error', code: 413, description: 'Payload Too Large: The server refused the request because the request entity is too large.' },
    { category: 'Client Error', code: 414, description: 'URI Too Long: The server refused the request because the URL is too long.' },
    { category: 'Client Error', code: 415, description: 'Unsupported Media Type: The server refused the request because the format of the request entity is not supported.' },
    { category: 'Client Error', code: 418, description: "I'm a teapot (RFC 2324, humorous): The server refuses to brew coffee because it is a teapot. (Not commonly used)" },
    { category: 'Client Error', code: 426, description: 'Upgrade Required: The server requires the client to upgrade to a different protocol to continue.' },
    { category: 'Client Error', code: 429, description: 'Too Many Requests: The user has sent too many requests in a given time period.' },
    { category: 'Server Error', code: 500, description: 'Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.' },
    { category: 'Server Error', code: 501, description: 'Not Implemented: The server does not support the functionality required to fulfill the request.' },
    { category: 'Server Error', code: 502, description: 'Bad Gateway: The server received an invalid response from an upstream server.' },
    { category: 'Server Error', code: 503, description: 'Service Unavailable: The server is currently unavailable due to maintenance or overloading.' },
    { category: 'Server Error', code: 504, description: 'Gateway Timeout: The server timed out waiting for a response from an upstream server.' },
    { category: 'Server Error', code: 505, description: 'HTTP Version Not Supported: The server does not support the HTTP version used in the request.' },
  ];
  export default function Table() {
    return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs text-white uppercase bg-gray-800 dark:bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">Category</th>
              <th scope="col" className="px-6 py-3 font-medium">Code</th>
              <th scope="col" className="px-6 py-3 font-medium">Description</th>
            </tr>
          </thead>
          <tbody>
            {httpStatusCodes.map((item) => (
              <tr key={item.code} className="border-b dark:border-gray-700 bg-gray-700">
                <td scope="row" className="px-6 py-4 text-white whitespace-nowrap">
                  {item.category}
                </td>
                <td className="px-6 py-4 text-white">
                  {item.code} : {item.description.split(":")[0]}
                </td>
                <td className="px-6 py-4 text-white">
                  {item.description.split(":")[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }