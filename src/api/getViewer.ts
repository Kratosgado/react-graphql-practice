type ViewerData = {
   name: string;
   avatarUrl: string;
 };
 
 type GetViewerResponse = {
   data: {
     viewer: ViewerData;
   };
 };
 
 export async function getViewer(query: string, variables = {}) {
    const url = process.env.REACT_APP_GITHUB_URL!
    const token = process.env.REACT_APP_GITHUB_PAT;


    const response = await fetch(url, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`,
     },
     body: JSON.stringify({ query, variables }),
   });
 
   const responseBody =( await response.json()) as unknown;
    assertIsGetViewerResponse(responseBody);
   
    return responseBody.data
 }
 
 
function assertIsGetViewerResponse(response: any): asserts response is GetViewerResponse {
   if (!('data' in response)) {
     throw new Error("response doesn't contain data");
   }
   if (typeof response.data !== 'object') {
     throw new Error('response is not an object');
   }
   if (!('viewer' in response.data)) {
     throw new Error("data doesn't contain viewer");
   }
   if (typeof response.data.viewer !== 'object') {
     throw new Error('viewer is not an object');
   }
   if (!('name' in response.data.viewer)) {
     throw new Error("viewer doesn't contain name");
   }
   if (typeof response.data.viewer.name !== 'string') {
     throw new Error('viewer name is not a string');
   }
   if (!('avatarUrl' in response.data.viewer)) {
     throw new Error("viewer doesn't contain avatarUrl");
   }
   if (typeof response.data.viewer.avatarUrl !== 'string') {
     throw new Error('viewer avatarUrl is not a string');
   }
 }
 // Example query
 export const GET_VIEWER_QUERY = `
   query {
     viewer {
       name
       avatarUrl
     }
   }
 `;
 
