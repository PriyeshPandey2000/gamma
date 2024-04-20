'use client';

import { SessionProvider  } from 'next-auth/react';

// const SessionProvider = ({ children }) => {
//   return (
//     <AuthSessionProvider>{children}</AuthSessionProvider>
//   );
// };

// export default SessionProvider;



const Provider=({children,session})=>{
    return(
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}

export default Provider