import { useQuery } from '@apollo/client';
import { GET_VIEWER_QUERY } from './api/getViewer'

export const Header = () => {
   const { loading: isLoading, data } = useQuery(GET_VIEWER_QUERY);

   if (isLoading || data === undefined) {
      return <div>...</div>
   }

   return (
      <header className='flex flex-col items-center text-slate-50 bg-slate-900 h-40 p-5'>
         <img
            src={data.viewer.avatarUrl}
            alt="Viewer"
            className='w-16 h-16 rounded-full'
         />
         <div>{data.viewer.name}</div>
         <h1 className='text-xl font-bold'>Github Search</h1>
      </header>
   )
 }