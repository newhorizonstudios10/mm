
import React from 'react'
import { auth, clerkClient } from '@clerk/nextjs/server'
let link =`https://offers.cpx-research.com/index.php?app_id=25631&ext_user_id={${auth}}&secure_hash={secure_hash}&username={user_name}&email={user_email}&subid_1=&subid_2`
const Home = () => {
  return (
    <div>
     <iframe width="100%" frameBorder="0" height="2000px"  src={link}></iframe>
    </div>
  )
}

export default Home