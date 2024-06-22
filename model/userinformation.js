import { connect } from "../dbconfig/dbconfig.js";

const dbconnect= connect;

class userinfo 
{
    async userinformation(id)
    {

         try{
                    const [userinfor]= await dbconnect.execute(
                        `SELECT * from Userinformation Where id = ?`,
                        [id]
                    )
                    console.log("11111111111111",userinfor);

                    return {success:true , message:"ok",data:userinfor};
         }
         catch(error)
                {
                    console.log("error from userinformatiion",error);
                }
        
    }
}

const user= new userinfo;

export {user};