export const fetchWrapper = async <T>(
    resource: RequestInfo | URL,
    config: RequestInit | undefined,
    ): Promise<T> => {  
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const requestOptions = {
      headers: myHeaders,
      ...(config && { method: config.method }),
      ...(config && { body: config.body }),
    };
    
    const response = await fetch(resource, requestOptions)
    
    if (!response.ok) {
      const error = await response.json();
      throw error;
    }
  
    return (await response.json()) as T;
};