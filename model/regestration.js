import  {connect} from  '../dbconfig/dbconfig.js';

const conntion = connect;
async function addUser(body)
{
    try
    {
        const [newuser] = await conntion.execute( 
            'insert into Userinformation (name,lastname,username,password,gender,Address) VALUES (?,?,?,?,?,?)',
            
              [
                body.name,
                body.lastname,
                body.username,
                body.password,
                body.gender,
                body.Address
              ]
            );

        console.log("sql queary",newuser);
        return newuser.insertId;                                     
    } 
    catch (error)
    {
            console.log("error comming from models",error);

    }
}

async function check(requestbody) {
    try {
        console.log("requestbody111",requestbody.username);
        
            const [results] = await conntion.execute(
                'SELECT id FROM Userinformation WHERE username = ?',
                [requestbody.username]
            );
            console.log("requestbody",results);
            if (results.length > 0) {
                
                const [passwords]= await conntion.execute (

                    'SELECT password FROM Userinformation WHERE  id = ? ',
                    [results[0].id]
                );
                if(requestbody.password ==  passwords[0].password)
                {
                    const [userinformation]= await conntion.execute 
                    (
                        `SELECT * from Userinformation WHERE  id = ? `,
                        [results[0].id]
                    );
                    return { success: true, Message:"Username & password matched ", data:userinformation};

                }
                else
                {
                    return {success:false, Message:"password Not matched !!"}
                }

           } else {
                console.log("Username is incorrect");
                return { success: false, Message: 'Username is incorrect' };
            }
        
    } catch (error) {
        return { success: false, message: "Connection Failed Registration" };
    }
}


export {addUser, check}